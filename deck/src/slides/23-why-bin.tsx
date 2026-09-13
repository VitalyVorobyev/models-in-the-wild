import { Cells, Dots, Grid, Seeds } from "../components/ScoreFigure";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";

const background = [0.38, 0.62, 0.78, 0.66, 0.44, 0.26];
const signal = [0.04, 0.09, 0.2, 0.26, 0.14, 0.05];
const observed = [0.44, 0.69, 0.96, 0.95, 0.55, 0.33];

/**
 * Why an analysis bins at all, where to bin, and what to maximise. Three
 * pictures again; the slider on the next slide only makes sense after this.
 */
export default function WhyBin() {
  return (
    <Slide
      label="Why bin, and what to keep"
      notes="Two minutes. One: why bin at all. A template fit predicts a count per bin for each model component and compares it with the observed count; calibration, systematic uncertainties, validation and the limited simulation statistics are all handled per bin. So every observation must get one label, out of a handful. Two: where to bin. The usual answer is a grid or thresholds in observation space. The identity behind ScoreQuant says what any binning costs: the information after binning is the full information minus the scatter of the score inside each bin, and nothing else. A bin that is narrow in x can still lose a lot if the score swings inside it; a bin that is wide in x costs nothing if the score is flat. So the cells belong in score space. Three: what to maximise. With K bins, the binned information matrix is smaller than the full one. D-optimality chooses the bins that keep the largest determinant, which is the smallest volume of the confidence ellipse for θ. That determinant is the number the slider on the next slide climbs."
    >
      <SlideHeader kicker="ScoreQuant · the problem" title="Why bin, and what to keep" />
      <div className="problem">
        <div className="problem__panel">
          <div className="pfig">
            <div className="pfig__bars" aria-hidden="true">
              {background.map((b, i) => (
                <div key={`b${i.toString()}`} className="pfig__bar">
                  <span className="pfig__bar-bg" style={{ height: `${b * 100}%` }} />
                  <span
                    className="pfig__bar-sig"
                    style={{ height: `${(signal[i] ?? 0) * 100}%` }}
                  />
                  <span className="pfig__obs" style={{ bottom: `${(observed[i] ?? 0) * 100}%` }} />
                </div>
              ))}
            </div>
            <span className="pfig__legend">
              <i className="pfig__swatch pfig__swatch--bg" /> template A
              <i className="pfig__swatch pfig__swatch--sig" /> template B
              <i className="pfig__swatch pfig__swatch--obs" /> observed
            </span>
          </div>
          <span className="problem__num">1</span>
          <strong>Analyses end in counts</strong>
          <p>
            A template fit compares expected and observed counts bin by bin; calibration and
            systematics live in bins too. Every observation needs one label.
          </p>
        </div>
        <div className="problem__panel">
          <div className="pfig pfig--split">
            <div className="pfig__half-wrap">
              <div className="pfig__half">
                <Grid />
                <Dots colorBy="bin" />
              </div>
              <span className="pfig__caption">grid, observation space</span>
            </div>
            <div className="pfig__half-wrap">
              <div className="pfig__half">
                <Cells />
                <Dots colorBy="cell" />
                <Seeds />
              </div>
              <span className="pfig__caption">cells, score space</span>
            </div>
            <span className="pfig__formula">I − I_bins = E[Cov(s | bin)]</span>
          </div>
          <span className="problem__num">2</span>
          <strong>Bin observations, or bin scores</strong>
          <p>
            What binning loses is the scatter of the score inside each bin, nothing else. A bin that
            is narrow in x can still lose a lot.
          </p>
        </div>
        <div className="problem__panel">
          <div className="pfig">
            <span className="pfig__line pfig__line--h" style={{ top: "50%" }} />
            <span className="pfig__line pfig__line--v" style={{ left: "50%" }} />
            <span className="pfig__ellipse pfig__ellipse--bins" />
            <span className="pfig__ellipse pfig__ellipse--full" />
            <span className="pfig__seed pfig__seed--accent" style={{ left: "50%", top: "50%" }} />
            <span className="pfig__tag" style={{ left: "62%", top: "31%" }}>
              all observations
            </span>
            <span className="pfig__tag pfig__tag--accent" style={{ left: "70%", top: "17%" }}>
              K bins
            </span>
            <span className="pfig__axis pfig__axis--x">θ₁</span>
            <span className="pfig__axis pfig__axis--y">θ₂</span>
            <span className="pfig__formula">max det I_bins</span>
          </div>
          <span className="problem__num">3</span>
          <strong>The objective</strong>
          <p>
            D-optimality: choose the K bins that keep the largest determinant of the Fisher
            information. That is the smallest confidence ellipse for θ.
          </p>
        </div>
      </div>
      <p className="problem__rule">
        Keep as much of what the data knows as possible, with only a handful of bins.
      </p>
    </Slide>
  );
}
