import { Arrow, Diagram, Node } from "../components/Diagram";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
export default function Page() {
  return (
    <Slide
      label="A library request becomes research"
      notes="2 minutes. The colleague conversation is oral history from Vitaly, not a Git event. Initial aim: publishable software library. A proposed theorem triggered a second-model critique and then a stronger verification workflow. Do not equate that critique with proof. Actual manuscript remains draft v10 with publication blocked on provenance and unread sources according to the project story. Timeline branches show dependencies, not invented dates."
      className="editorial"
    >
      <SlideHeader kicker="Discover" title="A library request becomes research" />
      <Diagram title="A practical library request branches into implementation and a research programme">
        <Node x={240} y={280} label="Colleague’s problem" kind="person" sub="Vitaly’s account" />
        <Arrow from={[300, 280]} to={[530, 280]} />
        <Node x={690} y={280} label="Library request" kind="paper" width={300} />
        <Arrow from={[850, 280]} to={[1080, 140]} label="implement" />
        <Node
          x={1300}
          y={140}
          label="Python library"
          sub="software · tests · examples"
          width={350}
        />
        <Arrow from={[690, 340]} to={[690, 480]} label="candidate theorem" />
        <Node x={690} y={545} label="Research workflow" width={340} />
        <Arrow from={[870, 545]} to={[1090, 485]} />
        <Node
          x={1300}
          y={485}
          label="Claims + manuscript"
          kind="paper"
          sub="draft · owner review pending"
          width={350}
        />
        <Arrow from={[1260, 425]} to={[1260, 205]} label="feeds back" dashed bend={-130} />
      </Diagram>
      <p className="caption">
        A second model found no immediate flaw. That changed the ambition; it did not establish the
        theorem.
      </p>
    </Slide>
  );
}
