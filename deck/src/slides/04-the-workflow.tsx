import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";

/**
 * The workflow as a cycle. Conversation and a Markdown bundle happen once and
 * run in from the left; four stages sit on a ring that turns many times. One
 * click lights the return arc — evidence goes back into the files.
 */
export default function TheWorkflow() {
  return (
    <Slide
      label="The workflow"
      notes="Two minutes, one click. The enabler is modern models in an agentic harness; the workflow is how one person uses them without babysitting. Conversation and a Markdown bundle happen once; the ring turns many times. Point at the success criteria: written into the context before the agent starts, checked by the evidence stage after. Click: the return arc lights — evidence and critique go back into the files, not into a longer prompt. Stronger models should need less of this scaffolding, not more."
    >
      <SlideHeader kicker="The workflow" title="Conversation to running artifact, in a loop" />
      <p className="lead lead--tight">
        A frontier model in an agentic harness, run against durable context and success criteria you
        can measure.
      </p>
      <div className="cycle">
        <div className="cycle__runway" aria-hidden="true" />
        <span className="cycle__runway-label">once</span>
        <div className="cycle__entry cycle__entry--1">
          <span className="cycle__name">Conversation</span>
          <span className="cycle__sub">voice, brainstorming; shaping the problem</span>
        </div>
        <div className="cycle__entry cycle__entry--2">
          <span className="cycle__name">Concept</span>
          <span className="cycle__sub">a small Markdown starter bundle</span>
        </div>

        <div className="cycle__ring" aria-hidden="true" />
        <div
          className="cycle__ring cycle__ring--return fragment"
          data-fragment-index={0}
          aria-hidden="true"
        />
        <span className="cycle__head cycle__head--1" aria-hidden="true" />
        <span className="cycle__head cycle__head--2" aria-hidden="true" />
        <span className="cycle__head cycle__head--3" aria-hidden="true" />
        <span
          className="cycle__head cycle__head--4 fragment"
          data-fragment-index={0}
          aria-hidden="true"
        />
        <span className="cycle__dot cycle__dot--top" aria-hidden="true" />
        <span className="cycle__dot cycle__dot--right" aria-hidden="true" />
        <span className="cycle__dot cycle__dot--bottom" aria-hidden="true" />
        <span className="cycle__dot cycle__dot--left" aria-hidden="true" />
        <span className="cycle__center">many times</span>

        <div className="cycle__stage cycle__stage--top">
          <span className="cycle__name">Durable context</span>
          <span className="cycle__sub">
            docs, agent instructions, skills, <em className="cycle__crit">success criteria</em>
          </span>
        </div>
        <div className="cycle__stage cycle__stage--right">
          <span className="cycle__name">Agent execution</span>
          <span className="cycle__sub">
            a frontier model in an agentic harness, with room to explore
          </span>
        </div>
        <div className="cycle__stage cycle__stage--bottom">
          <span className="cycle__name">Artifact</span>
          <span className="cycle__sub">something that runs</span>
        </div>
        <div className="cycle__stage cycle__stage--left">
          <span className="cycle__name">Evidence and critique</span>
          <span className="cycle__sub">
            tests and measurements <em className="cycle__crit">against the criteria</em>; agents
            asked to disagree
          </span>
        </div>
        <span className="cycle__return-label fragment" data-fragment-index={0}>
          revise the files
        </span>
      </div>
    </Slide>
  );
}
