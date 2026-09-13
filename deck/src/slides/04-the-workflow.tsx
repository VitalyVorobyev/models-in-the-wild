import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";

interface Stage {
  name: string;
  sub: string;
  /** Position on the loop ring; entry stages sit before it. */
  at: "entry-1" | "entry-2" | "nw" | "ne" | "se" | "sw";
  fragment?: boolean;
}

const stages: Stage[] = [
  { name: "Conversation", sub: "voice, brainstorming — shaping the problem", at: "entry-1" },
  { name: "Concept", sub: "a small Markdown starter bundle", at: "entry-2" },
  {
    name: "Durable context",
    sub: "docs, agent instructions, skills — and measurable success criteria",
    at: "nw",
  },
  {
    name: "Agent execution",
    sub: "a frontier model in an agentic harness, with room to explore",
    at: "ne",
  },
  { name: "Artifact", sub: "something that runs", at: "se" },
  {
    name: "Evidence and critique",
    sub: "tests, measurements, the criteria checked; agents asked to disagree",
    at: "sw",
    fragment: true,
  },
];

/**
 * The workflow as a loop, not a list. Two entry stages feed a four-stage cycle
 * that runs on the repository; one click closes the ring with the evidence
 * stage and the return edge. Built from HTML so it inherits the type scale.
 */
export default function TheWorkflow() {
  return (
    <Slide
      label="The workflow"
      notes="Two minutes, one click. The enabler is modern models in an agentic harness; the workflow is how one person uses them without babysitting. Conversation and a Markdown bundle happen once; the loop on the right runs many times. Point at the success criteria inside durable context: they are written before the agent starts, and they are what the evidence stage checks. Click: the ring closes — evidence and critique go back into the files, not into a longer prompt. Stronger models should need less of this scaffolding, not more."
    >
      <SlideHeader kicker="The workflow" title="Conversation to running artifact, in a loop" />
      <p className="lead lead--tight">
        A frontier model in an agentic harness, run against durable context and success criteria you
        can measure.
      </p>
      <div className="loop">
        {stages.map((s) => (
          <div
            key={s.name}
            className={`loop__stage loop__stage--${s.at}${s.fragment ? " fragment" : ""}`}
            data-fragment-index={s.fragment ? 0 : undefined}
          >
            <span className="loop__name">{s.name}</span>
            <span className="loop__sub">{s.sub}</span>
          </div>
        ))}
        <span className="loop__link loop__link--entry-1" aria-hidden="true" />
        <span className="loop__link loop__link--entry-2" aria-hidden="true" />
        <div className="loop__ring loop__ring--open" aria-hidden="true" />
        <div
          className="loop__ring loop__ring--close fragment"
          data-fragment-index={0}
          aria-hidden="true"
        />
        <span className="loop__edge loop__edge--top" aria-hidden="true">
          run
        </span>
        <span className="loop__edge loop__edge--right" aria-hidden="true">
          produces
        </span>
        <span
          className="loop__edge loop__edge--bottom fragment"
          data-fragment-index={0}
          aria-hidden="true"
        >
          measured against the criteria
        </span>
        <span
          className="loop__edge loop__edge--left fragment"
          data-fragment-index={0}
          aria-hidden="true"
        >
          revise the files
        </span>
      </div>
    </Slide>
  );
}
