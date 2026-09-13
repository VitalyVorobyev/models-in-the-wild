import { ScoreProblem } from "../components/ScoreExperiment";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { scoreEvidence } from "../content/evidence";
export default function Page() {
  return (
    <Slide
      label="ScoreQuant: the quantization problem"
      notes="2.5 minutes. This is a transparent synthetic demonstration run through the real library, not the colleague\u2019s physics data. At zero Gaussian mean and identity covariance the score equals x; the fitted Fisher transform produces the plotted normalized coordinates. Button changes from continuous sample to actual initial seeds and hard bins. A Voronoi cell assigns each point to its nearest seed. Goal: retain parameter information after hard binning; classifier confidence is a different meaning of score."
      className="editorial"
    >
      <SlideHeader kicker="Discover" title="ScoreQuant: the quantization problem" />
      <ScoreProblem />
      <p className="caption">
        Synthetic Gaussian location · seed {scoreEvidence.source.seed} ·{" "}
        {scoreEvidence.source.train} training samples · labels and geometry computed by ScoreQuant
      </p>
    </Slide>
  );
}
