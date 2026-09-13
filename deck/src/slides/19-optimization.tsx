import { ScoreOptimization } from "../components/ScoreExperiment";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { scoreEvidence } from "../content/evidence";
export default function Page() {
  return (
    <Slide
      label="Moving seeds, measuring information"
      notes="3 minutes. Drag among actual recorded states, keeping point positions and axis bounds fixed. Initial/intermediate/final states share one run and coordinate system. Train and validation hard D-efficiency are for the displayed state. Held-out metric is for the final selected solution only; test set does not select states. Soft surrogate is plotted separately and can change much more than hard retention. Do not suggest monotonic hard improvement or global optimality. Sources and seed are in the exported JSON. Optional static fallback is initial state plus final held-out metric."
      className="editorial"
    >
      <SlideHeader kicker="Discover" title="Moving seeds, measuring information" />
      <ScoreOptimization />
      <p className="caption">
        Source: scripts/export-scorequant.py · ScoreQuant{" "}
        {scoreEvidence.source.revision.slice(0, 8)} · {scoreEvidence.source.validation} validation /{" "}
        {scoreEvidence.source.test} held-out samples
      </p>
    </Slide>
  );
}
