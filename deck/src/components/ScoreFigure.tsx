import { scoreEvidence as data } from "../content/evidence";

/**
 * Pieces of the one example that runs through the ScoreQuant section, drawn
 * from the exported run: the sample in observation space, its scores, the 3×2
 * grid over the observations and the library's six cells in score space.
 * Positions are percentages of a figure box, so a figure can be any size.
 */
const ill = data.illustration;
const model = data.source.model;

/** Observation window: the box the exporter used for the grid. */
export const xBox = { x0: -model.box, x1: model.box, y0: -model.box, y1: model.box };
/** Score window, from the exported extent of the training scores. */
const [sx0 = 0, sx1 = 1, sy0 = 0, sy1 = 1] = ill.scoreBox;
const padX = 0.06 * (sx1 - sx0);
const padY = 0.06 * (sy1 - sy0);
export const sBox = { x0: sx0 - padX, x1: sx1 + padX, y0: sy0 - padY, y1: sy1 + padY };

type Box = { x0: number; x1: number; y0: number; y1: number };
export const px = (v: number, b: Box) => `${((v - b.x0) / (b.x1 - b.x0)) * 100}%`;
/** Figure y grows downward; the data y grows upward. */
export const py = (v: number, b: Box) => `${((b.y1 - v) / (b.y1 - b.y0)) * 100}%`;

/** The sample as observations (x) or as scores (s). */
export function Dots({
  space,
  colorBy,
}: {
  space: "x" | "s";
  colorBy?: "cell" | "gridBin" | "signal";
}) {
  const pts = space === "x" ? ill.x : ill.s;
  const box = space === "x" ? xBox : sBox;
  return (
    <>
      {pts.map((p, i) => {
        const c =
          colorBy === "signal" ? (ill.signal[i] ? 3 : 0) : colorBy ? ill[colorBy][i] : undefined;
        return (
          <span
            key={`${p[0]}-${p[1]}`}
            className={`pfig__dot${colorBy === "signal" ? " pfig__dot--component" : ""}`}
            data-c={c}
            style={{ left: px(p[0] ?? 0, box), top: py(p[1] ?? 0, box) }}
          />
        );
      })}
    </>
  );
}

/** The six fitted cells, in raw score coordinates. */
export function Cells() {
  return (
    <>
      {ill.cells.map((poly, i) => (
        <span
          key={`c${i.toString()}`}
          className="pfig__cell"
          data-c={i}
          style={{
            clipPath: `polygon(${poly.map(([x, y]) => `${px(x ?? 0, sBox)} ${py(y ?? 0, sBox)}`).join(", ")})`,
          }}
        />
      ))}
    </>
  );
}

export function Centres() {
  return (
    <>
      {ill.centers.map((c) => (
        <span
          key={`s-${c[0]}-${c[1]}`}
          className="pfig__seed"
          style={{ left: px(c[0] ?? 0, sBox), top: py(c[1] ?? 0, sBox) }}
        />
      ))}
    </>
  );
}

/** The mean score of each cell, the μ_b the theorems speak about. */
export function Centroids() {
  return (
    <>
      {ill.centroids.map((c) => (
        <span
          key={`m-${c[0]}-${c[1]}`}
          className="pfig__seed"
          style={{ left: px(c[0] ?? 0, sBox), top: py(c[1] ?? 0, sBox) }}
        />
      ))}
    </>
  );
}

export function Grid() {
  return (
    <div className="pfig__grid" aria-hidden="true">
      {Array.from({ length: 6 }, (_, i) => (
        <span key={`g${i.toString()}`} />
      ))}
    </div>
  );
}

/** A line with an arrowhead from (x1, y1) to (x2, y2), in the given box's units. */
export function Arrow({
  from,
  to,
  box,
  className,
  shorten = 0,
  aspect = 0.75,
}: {
  from: [number, number];
  to: [number, number];
  box: Box;
  className?: string;
  shorten?: number;
  /** Figure height over width; percentages in y are scaled by it. */
  aspect?: number;
}) {
  // Work in percentages of the box so the angle survives any figure aspect.
  const ax = ((from[0] - box.x0) / (box.x1 - box.x0)) * 100;
  const ay = ((box.y1 - from[1]) / (box.y1 - box.y0)) * 100;
  const bx = ((to[0] - box.x0) / (box.x1 - box.x0)) * 100;
  const by = ((box.y1 - to[1]) / (box.y1 - box.y0)) * 100;
  // A percentage of the height is `aspect` of a percentage of the width.
  const dx = bx - ax;
  const dy = (by - ay) * aspect;
  const len = Math.max(0, Math.hypot(dx, dy) - shorten);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  return (
    <span
      className={`pfig__pull${className ? ` ${className}` : ""}`}
      style={{ left: `${ax}%`, top: `${ay}%`, width: `${len}%`, transform: `rotate(${angle}deg)` }}
    />
  );
}

/** The observation nearest to a cell it does not belong to, and that cell's centre. */
export function mostContested() {
  const dist = (a: number[], b: number[]) =>
    Math.hypot((a[0] ?? 0) - (b[0] ?? 0), (a[1] ?? 0) - (b[1] ?? 0));
  let best = {
    p: ill.s[0] ?? [0, 0],
    centre: ill.centers[0] ?? [0, 0],
    ratio: Number.POSITIVE_INFINITY,
  };
  ill.s.forEach((p, i) => {
    const own = ill.centers[ill.cell[i] ?? 0];
    if (!own) return;
    const dOwn = Math.max(dist(p, own), 1e-6);
    ill.centers.forEach((c, k) => {
      if (k === ill.cell[i]) return;
      const ratio = dist(p, c) / dOwn;
      if (ratio < best.ratio) best = { p, centre: c, ratio };
    });
  });
  return best;
}

export { ill, model };
