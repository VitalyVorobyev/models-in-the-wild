import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";

/*
 * The workflow: talk, write it down, then a loop of three that turns until
 * the result holds. Two entry steps run in from the left on a straight path;
 * the loop is a ring of three arcs. One click lights the return arc, the
 * step that carries what was learned back into the files.
 *
 * All coordinates are canvas pixels inside the 1680-wide region under the
 * header. The SVG draws the path, the ring, the arrowheads and the markers;
 * the labels are HTML placed from the same numbers. Angles follow the
 * conic convention: 0° at the top, clockwise.
 */
const CX = 1120;
const CY = 380;
const R = 245;
const NODE = 27;
/** Arrowhead length and width, ring and entry path. */
const HEAD = { length: 36, width: 58 };
const PATH_HEAD = { length: 24, width: 30 };
/** Degrees left free after a node, and before the next node's edge. */
const GAP_AFTER = 8;
const GAP_BEFORE = 7.7;

const NODES = { work: 270, check: 30, update: 150 } as const;

function point(deg: number) {
  const a = (deg * Math.PI) / 180;
  return { x: CX + R * Math.sin(a), y: CY - R * Math.cos(a) };
}

/** A clockwise arc from one node to the next, stopping short by the arrowhead length. */
function arc(fromDeg: number, toDeg: number) {
  const headDeg = (HEAD.length / R) * (180 / Math.PI);
  const a = point(fromDeg + GAP_AFTER);
  const b = point(toDeg - GAP_BEFORE - headDeg);
  return `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} A ${R} ${R} 0 0 1 ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

const work = point(NODES.work);
const check = point(NODES.check);
const update = point(NODES.update);

const ENTRIES = [
  { x: 16, name: "Talk", sub: "shape the problem" },
  { x: 268, name: "Write it down", sub: "brief, context, criteria" },
];
const pathEnd = work.x - NODE - 8 - PATH_HEAD.length;

function Head({
  id,
  cls,
  size,
}: {
  id: string;
  cls: string;
  size: { length: number; width: number };
}) {
  return (
    <marker
      id={id}
      markerUnits="userSpaceOnUse"
      markerWidth={size.length}
      markerHeight={size.width}
      refX={0}
      refY={size.width / 2}
      orient="auto"
    >
      <path className={cls} d={`M 0 0 L ${size.length} ${size.width / 2} L 0 ${size.width} Z`} />
    </marker>
  );
}

export default function TheWorkflow() {
  return (
    <Slide
      label="The workflow"
      notes="Two minutes, one click. I usually start by talking through the problem. Then I write down a small amount of durable context and hand it to an agent. From there the loop is simple: it builds something, I run or inspect it, we get evidence, and what we learned goes back into the repository. Click: the return arc lights. I do not try to keep the project alive in a chat; the files are the memory, which is the next slide."
    >
      <SlideHeader kicker="The workflow" title="From idea to working result — then iterate" />
      <div className="cycle">
        <svg
          className="cycle__svg"
          viewBox="0 0 1680 780"
          width={1680}
          height={780}
          aria-hidden="true"
        >
          <title>The workflow</title>
          <defs>
            <Head id="cycle-head" cls="cycle__head" size={HEAD} />
            <Head id="cycle-head-quiet" cls="cycle__head cycle__head--quiet" size={HEAD} />
            <Head id="cycle-head-return" cls="cycle__head cycle__head--return" size={HEAD} />
            <Head id="cycle-head-path" cls="cycle__head cycle__head--path" size={PATH_HEAD} />
          </defs>

          {/* The entry path: two steps, then into the loop. */}
          <line
            className="cycle__path"
            x1={ENTRIES[0]?.x ?? 0}
            y1={work.y}
            x2={pathEnd}
            y2={work.y}
            markerEnd="url(#cycle-head-path)"
          />
          {ENTRIES.map((e) => (
            <circle key={e.name} className="cycle__step" cx={e.x} cy={work.y} r={10} />
          ))}

          {/* The loop: three arcs; the return arc is quiet until the click. */}
          <path
            className="cycle__arc"
            d={arc(NODES.work, NODES.check)}
            markerEnd="url(#cycle-head)"
          />
          <path
            className="cycle__arc"
            d={arc(NODES.check, NODES.update)}
            markerEnd="url(#cycle-head)"
          />
          <path
            className="cycle__arc cycle__arc--quiet"
            d={arc(NODES.update, NODES.work)}
            markerEnd="url(#cycle-head-quiet)"
          />
          <g className="fragment" data-fragment-index={0}>
            <path
              className="cycle__arc cycle__arc--return"
              d={arc(NODES.update, NODES.work)}
              markerEnd="url(#cycle-head-return)"
            />
          </g>

          <circle className="cycle__node" cx={work.x} cy={work.y} r={NODE} />
          <circle className="cycle__node" cx={check.x} cy={check.y} r={NODE} />
          <circle
            className="cycle__node cycle__node--return"
            cx={update.x}
            cy={update.y}
            r={NODE}
          />
        </svg>

        {ENTRIES.map((e) => (
          <div key={e.name} className="cycle__entry" style={{ left: e.x, top: work.y - 28 }}>
            <span className="cycle__name">{e.name}</span>
            <span className="cycle__sub">{e.sub}</span>
          </div>
        ))}

        <div
          className="cycle__stage cycle__stage--work"
          style={{ left: work.x - 30, top: work.y - 44 }}
        >
          <span className="cycle__name">Agent works</span>
          <span className="cycle__sub">explore and implement</span>
        </div>
        <div
          className="cycle__stage cycle__stage--check"
          style={{ left: check.x + 48, top: check.y - 12 }}
        >
          <span className="cycle__name">Run &amp; check</span>
          <span className="cycle__sub">working result + evidence</span>
        </div>
        <div
          className="cycle__stage cycle__stage--update"
          style={{ left: update.x + 12, top: update.y + 42 }}
        >
          <span className="cycle__name">Update the files</span>
          <span className="cycle__sub">what we learned</span>
        </div>
      </div>
    </Slide>
  );
}
