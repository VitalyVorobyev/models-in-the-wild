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
      notes={`Two minutes on the slider. This is the real library on a synthetic sample, not the colleague's physics data: a two-dimensional Gaussian, ${src.train.toLocaleString()} training points, ${src.bins} cells, ${src.steps} optimizer steps recorded every ${scoreEvidence.steps[1]}. Drag: the seeds move and the cells follow. The plot on the right is the point: the dashed line is the smooth objective the optimizer climbs; the solid lines are the information the hard cells actually keep, on training and on validation data. They are not the same curve. The hard retention first drops and then recovers, which is exactly why the library measures the hard partition separately and reports a held-out number at the end. Nothing here claims a global optimum.`}
    >
      <SlideHeader
        kicker="ScoreQuant · a synthetic run"
        title="Seeds move; information is measured"
      />
      <SyntheticRun />
      <p className="evidence-line">
        synthetic 2D Gaussian · seed {src.seed} · {src.train.toLocaleString()} training /{" "}
        {src.validation.toLocaleString()} validation / {src.test.toLocaleString()} held-out points ·{" "}
        {src.bins} cells · ScoreQuant {src.revision.slice(0, 8)} · exported {src.measured}
      </p>
    </Slide>
  );
}
