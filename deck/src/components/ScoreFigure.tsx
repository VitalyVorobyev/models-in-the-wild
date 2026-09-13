import { problemFigure as fig } from "../content/problem-figure";

/**
 * Pieces of the illustrative sample used by the ScoreQuant problem slides:
 * the same 44 points drawn as observations, as scores, binned by a grid and
 * cut into cells. Positions are percentages, so a figure can be any size.
 */
export const W = fig.width;
export const H = fig.height;
export const pct = (v: number, of: number) => `${(v / of) * 100}%`;

const n = fig.points.length;
export const centre = {
  x: fig.points.reduce((a, p) => a + p.x, 0) / n,
  y: fig.points.reduce((a, p) => a + p.y, 0) / n,
};
export const spread = {
  x: Math.sqrt(fig.points.reduce((a, p) => a + (p.x - centre.x) ** 2, 0) / n),
  y: Math.sqrt(fig.points.reduce((a, p) => a + (p.y - centre.y) ** 2, 0) / n),
};

export function Dots({ colorBy }: { colorBy?: "cell" | "bin" }) {
  return (
    <>
      {fig.points.map((p) => (
        <span
          key={`${p.x}-${p.y}`}
          className="pfig__dot"
          data-c={colorBy ? p[colorBy] : undefined}
          style={{ left: pct(p.x, W), top: pct(p.y, H) }}
        />
      ))}
    </>
  );
}

export function Cells() {
  return (
    <>
      {fig.cells.map((poly, i) => (
        <span
          key={`c${i.toString()}`}
          className="pfig__cell"
          data-c={i}
          style={{
            clipPath: `polygon(${poly.map(([x, y]) => `${pct(x, W)} ${pct(y, H)}`).join(", ")})`,
          }}
        />
      ))}
    </>
  );
}

export function Seeds() {
  return (
    <>
      {fig.seeds.map((s) => (
        <span
          key={`s-${s.x}-${s.y}`}
          className="pfig__seed"
          style={{ left: pct(s.x, W), top: pct(s.y, H) }}
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

/** A line with an arrowhead from (x1, y1) to (x2, y2), in figure units. */
export function Arrow({
  x1,
  y1,
  x2,
  y2,
  className,
  shorten = 0,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  className?: string;
  shorten?: number;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.max(0, Math.hypot(dx, dy) - shorten);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  return (
    <span
      className={`pfig__pull${className ? ` ${className}` : ""}`}
      style={{
        left: pct(x1, W),
        top: pct(y1, H),
        width: pct(len, W),
        transform: `rotate(${angle}deg)`,
      }}
    />
  );
}

/** The observation nearest to a cell it does not belong to, and that cell's seed. */
export function mostContested() {
  type Point = { x: number; y: number };
  let best: { p: Point; seed: Point; ratio: number } = {
    p: centre,
    seed: centre,
    ratio: Number.POSITIVE_INFINITY,
  };
  for (const p of fig.points) {
    const own = fig.seeds[p.cell];
    if (!own) continue;
    const dOwn = Math.hypot(p.x - own.x, p.y - own.y);
    fig.seeds.forEach((s, i) => {
      if (i === p.cell) return;
      const ratio = Math.hypot(p.x - s.x, p.y - s.y) / Math.max(dOwn, 1);
      if (ratio < best.ratio) best = { p, seed: s, ratio };
    });
  }
  return best;
}

export { fig };
