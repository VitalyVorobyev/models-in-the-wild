import { Fragment } from "react";
import { Cell, HairlineTable } from "../components/HairlineTable";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";

const STEPS = [
  [
    "01",
    "A colleague's problem",
    "Multidimensional template fitting, a normalized score space, seed selection, Voronoi quantization, retained Fisher information.",
  ],
  ["02", "A modest request", "Turn the procedure into a publishable software library."],
  [
    "03",
    "The turning point",
    "During theory work the agent proposed a candidate theorem — and a proof.",
  ],
  [
    "04",
    "A second opinion",
    "A second model, asked to break it, found no immediate flaw. Which is not a proof.",
  ],
  [
    "05",
    "The ambition changed",
    "Can the research loop itself run inside the workflow — if the verification is real?",
  ],
] as const;

export default function ScoreQuantEscalation() {
  return (
    <Slide
      label="The Escalation"
      notes="This is Vitaly's account of the origin; the repository does not record the conversation. The important beat is step 04: two models agreeing proves nothing, and the deck says so. What the agreement did was change the ambition — and that ambition is only defensible because of the verification stack on the next slide."
    >
      <SlideHeader
        kicker="ScoreQuant · how it escalated"
        title="From a Favour to a Research Programme"
      />

      <HairlineTable template="120px minmax(0, 2fr) minmax(0, 5fr)">
        {STEPS.map(([number, name, what]) => (
          <Fragment key={number}>
            <Cell variant="num">{number}</Cell>
            <Cell variant="name">{name}</Cell>
            <Cell variant="desc">{what}</Cell>
          </Fragment>
        ))}
      </HairlineTable>
    </Slide>
  );
}
