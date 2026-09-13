import SyntheticRun from "../components/ScoreExperiment";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { scoreEvidence } from "../content/evidence";

const src = scoreEvidence.source;

/** The real library on a synthetic sample: recorded states, nothing interpolated. */
export default function SyntheticRunSlide() {
  return (
    <Slide
      label="A synthetic run"
      notes={`Two minutes on the slider. The real library on the example from the last two slides: ${src.train.toLocaleString()} events of the peak-on-background model, their scores handed to the library, ${src.bins} cells, ${src.steps} optimizer steps recorded every ${scoreEvidence.steps[1]}. Drag: the seeds move and the cells follow them; each event goes to its nearest seed. The plot is the objective: the information the six cells keep, as a fraction of the full Fisher information, at every recorded step. It climbs and settles. The number under it is the same quantity for the final cells on ${src.test.toLocaleString()} events the optimizer never saw. Nothing here claims a global optimum; what it claims is measured.`}
    >
      <SlideHeader
        kicker="ScoreQuant · a synthetic run"
        title="Seeds move; the information kept is measured"
      />
      <SyntheticRun />
      <p className="evidence-line">
        the peak-on-background example · seed {src.seed} · {src.train.toLocaleString()} training /{" "}
        {src.validation.toLocaleString()} validation / {src.test.toLocaleString()} held-out points ·{" "}
        {src.bins} cells · ScoreQuant {src.revision.slice(0, 8)} · exported {src.measured}
      </p>
    </Slide>
  );
}
