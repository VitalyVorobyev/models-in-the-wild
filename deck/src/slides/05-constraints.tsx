import { Arrow, Diagram, Node } from "../components/Diagram";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
export default function Page() {
  return (
    <Slide
      label="Constraints and exploration"
      notes="1 minute. These are design alternatives for this editorial task, not a claim that both were implemented historically. Rigid intent and evidence; flexible design and implementation. Human visual review complements lint, typecheck and builds. No need to repeat the verification slogan here."
      className="editorial"
    >
      <SlideHeader kicker="The workflow" title="Constraints and exploration" />
      <Diagram title="Fixed evidence and privacy constraints permit alternative designs before acceptance">
        <path d="M60 120 H1610 M60 530 H1610" stroke="currentColor" strokeWidth="3" />
        <text x="65" y="85">
          Fixed: factual evidence · privacy · acceptance criteria
        </text>
        <Node x={220} y={315} label="Editorial brief" kind="paper" width={280} />
        <Arrow from={[370, 315]} to={[620, 230]} label="explore" />
        <Arrow from={[370, 315]} to={[620, 405]} />
        <Node
          x={800}
          y={230}
          label="Artifact + callouts"
          sub="proposed representation"
          width={350}
        />
        <Node x={800} y={405} label="Mechanism diagram" sub="proposed representation" width={350} />
        <Arrow from={[985, 230]} to={[1235, 310]} />
        <Arrow from={[985, 405]} to={[1235, 325]} />
        <path
          d="M1245 260 L1350 210 L1455 260 V375 L1350 430 L1245 375 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <text x="1350" y="300" textAnchor="middle">
          Evidence
        </text>
        <text x="1350" y="345" textAnchor="middle">
          + review
        </text>
        <text x="65" y="580" className="edge-label">
          Different designs can satisfy the same intent. Passing a build does not establish visual
          quality.
        </text>
      </Diagram>
    </Slide>
  );
}
