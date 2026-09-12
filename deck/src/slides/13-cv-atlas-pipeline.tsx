import { Fragment } from "react";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";

/** The last stage is inverted in the handoff — the output is the payoff. */
const STAGES = [
  ["input", "Primary PDFs"],
  ["skill A", "Paper index + summaries"],
  ["skill A", "Relations + concepts"],
  ["skill B", "Algorithm / concept / model pages"],
  ["output", "Narratives"],
] as const;

export default function CvAtlasPipeline() {
  return (
    <Slide
      label="CV Atlas: From Papers to Living Knowledge"
      notes="The important point is not website generation. A specialized skill reads source PDFs, maintains the paper index, writes summaries, finds relations. Another skill authors the pages. This is continuous maintenance of a knowledge system, not isolated summaries."
    >
      <SlideHeader kicker="CV Atlas · agentic workflow" title="From Papers to Living Knowledge" />

      <div className="pipeline">
        {STAGES.map(([tag, label], index) => (
          <Fragment key={label}>
            {index > 0 && <span className="pipeline__arrow">→</span>}
            <div
              className={`pipeline__card${index === STAGES.length - 1 ? " pipeline__card--out" : ""}`}
            >
              <span className="pipeline__tag">{tag}</span>
              <span className="pipeline__label">{label}</span>
            </div>
          </Fragment>
        ))}
      </div>

      <p className="note" style={{ marginTop: "80px", maxWidth: "1400px" }}>
        Closer to continuously maintaining a knowledge system than asking for isolated paper
        summaries.
      </p>
    </Slide>
  );
}
