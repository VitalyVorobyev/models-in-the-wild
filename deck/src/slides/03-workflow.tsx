import { Arrow, Diagram, Node } from "../components/Diagram";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
export default function Page() {
  return (
    <Slide
      label="Conversation to running artifact"
      notes="2 minutes; one reveal adds the review loop. Voice/chat glyph is illustrative, not a recording. The paths are actual files in this repository. Point to the real handoff and built artifact in the next slide. Ask agents to challenge weak assumptions; the feedback changes durable project context. Build output is documented in validation-2026-09-12.md."
      className="editorial"
    >
      <SlideHeader kicker="The workflow" title="Conversation to running artifact" />
      <Diagram title="Conversation leaves durable files; execution produces an artifact; evidence and critique return to the files">
        <g transform="translate(95,160)">
          <path d="M0 0 v70 h90 l25 25 V0 Z" fill="none" stroke="currentColor" strokeWidth="3" />
          {[18, 32, 48, 28, 12].map((h, i) => (
            <path
              key={h}
              d={`M${20 + i * 15},${35 - h / 2} v${h}`}
              stroke="currentColor"
              strokeWidth="3"
            />
          ))}
          <text x="50" y="150" textAnchor="middle">
            Voice / chat
          </text>
          <text x="50" y="190" textAnchor="middle" className="edge-label">
            illustration
          </text>
        </g>
        <Arrow from={[220, 195]} to={[350, 195]} />
        <Node
          x={500}
          y={195}
          label="Markdown handoff"
          kind="paper"
          sub="session-handoff-2026-09-12.md"
          width={300}
        />
        <Arrow from={[655, 195]} to={[780, 195]} />
        <Node
          x={935}
          y={195}
          label="Repository"
          kind="store"
          sub="docs · instructions · evidence"
          width={285}
        />
        <Arrow from={[1085, 195]} to={[1170, 195]} />
        <Node x={1340} y={195} label="Claude / Codex" sub="execution + exploration" width={320} />
        <g className="fragment">
          <Arrow from={[1340, 285]} to={[1340, 425]} />
          <Node x={1340} y={475} label="Running deck" sub="artifact" width={300} />
          <Arrow from={[1180, 475]} to={[1080, 475]} />
          <Node
            x={920}
            y={475}
            label="Checks + critique"
            sub="build · sources · visual review"
            width={300}
          />
          <Arrow from={[755, 475]} to={[500, 260]} label="revise the files" bend={80} />
        </g>
      </Diagram>
      <div className="artifact-footer">
        <code>docs/session-handoff-2026-09-12.md</code>
        <span>→</span>
        <code>deck/src/</code>
        <span>→</span>
        <code>bun run build</code>
      </div>
    </Slide>
  );
}
