import { Arrow, Diagram, Node } from "../components/Diagram";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
export default function Page() {
  return (
    <Slide
      label="Verification changes the claim"
      notes="2 minutes. Each route names actual repository artifacts: LITERATURE/audits, COUNTEREXAMPLES, NUMERICAL_EVIDENCE, AUDITS, formal and claims JSON. This is not a mandatory serial checklist; different routes challenge different assumptions and loop back. Fresh sessions independently audit without seeing derivation. Lean checks parts of the mathematics, not Python; formalization is parked partial. Avoid using artifact counts as proof of reliability."
      className="editorial"
    >
      <SlideHeader kicker="Discover" title="Verification changes the claim" />
      <Diagram title="Independent verification routes return changes to the claim">
        <Node x={840} y={290} label="Claim + assumptions" kind="paper" width={330} />
        <Node x={265} y={105} label="Literature audit" sub="prior art · scope" width={310} />
        <Node x={260} y={450} label="Counterexamples" sub="exact fixtures" width={310} />
        <Node x={840} y={80} label="Numerical experiment" sub="executable + ledger" width={360} />
        <Node
          x={1410}
          y={105}
          label="Independent audit"
          sub="fresh-context derivation"
          width={350}
        />
        <Node
          x={1410}
          y={450}
          label="Lean / formalization"
          sub="partial · stated mathematics"
          width={350}
        />
        <Arrow from={[690, 250]} to={[430, 135]} label="search" />
        <Arrow from={[430, 420]} to={[680, 340]} label="refute / narrow" />
        <Arrow from={[840, 225]} to={[840, 145]} />
        <Arrow from={[1225, 135]} to={[995, 250]} label="revise" />
        <Arrow from={[1000, 340]} to={[1220, 420]} label="formalize" />
        <Arrow from={[840, 350]} to={[840, 505]} label="record changes" />
        <Node x={840} y={560} label="Revised claim" kind="paper" width={310} />
        <Arrow from={[680, 560]} to={[390, 515]} dashed />
      </Diagram>
      <p className="takeaway">Model agreement is not proof. Numerical agreement is not proof.</p>
    </Slide>
  );
}
