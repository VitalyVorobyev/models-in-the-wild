import { Arrow, Diagram, Node } from "../components/Diagram";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
export default function Page() {
  return (
    <Slide
      label="Deutsch-Atlas ecosystem"
      notes="2 minutes. Source: Deutsch-Atlas docs/apps/redaktion.md, tonwerk.md, architecture/cloud-sync.md and advisory-only-writing-assistant ADR. Redaktion directly edits the same checkout; no second corpus database. Tonwerk is a local engine and studio. Progress is separate from authored corpus; local review is advisory and hidden on public site. Research verdicts are calibrated, standards coverage does not prove learning effectiveness."
      className="editorial"
    >
      <SlideHeader kicker="Create & operate" title="Deutsch-Atlas ecosystem" />
      <Diagram title="Research and standards feed a shared content corpus; editorial and audio tools feed the learner app">
        <Node x={230} y={100} label="Learning research" kind="paper" width={330} />
        <Node x={230} y={295} label="Goethe / CEFR" kind="paper" width={330} />
        <Arrow from={[405, 100]} to={[640, 255]} />
        <Arrow from={[405, 295]} to={[640, 285]} />
        <Node x={840} y={270} label="Shared content" kind="store" width={340} />
        <Node x={840} y={90} label="Redaktion" sub="edit · coverage · findings" width={300} />
        <Arrow from={[820, 145]} to={[820, 215]} label="" />
        <Arrow from={[860, 215]} to={[860, 145]} />
        <Node x={840} y={500} label="Tonwerk" sub="script · render · review" width={300} />
        <Arrow from={[820, 430]} to={[820, 330]} />
        <Arrow from={[860, 330]} to={[860, 430]} dashed />
        <Arrow from={[1020, 270]} to={[1220, 270]} label="build" />
        <Node x={1430} y={270} label="Learner app" width={300} />
        <Node x={1430} y={70} label="Progress sync" sub="cloud · Worker / D1 / R2" width={290} />
        <Arrow from={[1430, 215]} to={[1430, 125]} dashed />
        <Node x={1430} y={500} label="Local review" sub="optional · desktop only" width={290} />
        <Arrow from={[1430, 330]} to={[1430, 445]} dashed />
        <text x="150" y="580" className="edge-label">
          Local production tools → published corpus → learner product
        </text>
      </Diagram>
    </Slide>
  );
}
