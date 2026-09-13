import { Cells, Dots, Grid } from "../components/ScoreFigure";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import Tex from "../components/Tex";
import { scoreEvidence } from "../content/evidence";
import { ELLIPSE_SCALE } from "./22-the-model";

const hist = scoreEvidence.histogram;
const fisher = scoreEvidence.fisher;
const top =
  Math.max(...hist.observed, ...hist.signal.map((s, i) => s + (hist.background[i] ?? 0))) * 1.12;
const pctOf = (v: number) => `${(v / top) * 100}%`;
const ellipses = [
  {
    key: "grid",
    cls: "pfig__ellipse--grid",
    label: "a 3×2 grid over x",
    at: { left: "4%", top: "8%" },
  },
  {
    key: "cells",
    cls: "pfig__ellipse--bins",
    label: "6 cells in score space",
    at: { left: "60%", top: "8%" },
  },
  { key: "full", cls: "pfig__ellipse--full", label: "no binning", at: { left: "76%", top: "86%" } },
] as const;

/**
 * Why an analysis bins at all, what a bin costs, and what to maximise; the
 * same example as slide 22. The slider on the next slide only makes sense
 * after this.
 */
export default function WhyBin() {
  return (
    <Slide
      label="Why bin, and what to keep"
      notes={`Two minutes. One: why bin at all. A template fit predicts a count per bin for each component, here the peak and the background, and compares it with the observed count. Calibration, systematic uncertainties, validation and the limited simulation statistics are all handled per bin. So every event must get one label, out of a handful. Two: what a bin costs. After binning, all the fit sees of an event is its label, so the pulls of the events in a bin are averaged: what is lost is the spread of the scores inside each bin, nothing else. A grid over the measured quantities cuts across the scores, ${Math.round(fisher.keptByGrid * 100)} percent of the information survives it here. Cells drawn in score space follow the scores: six of them keep ${Math.round(fisher.keptByCells * 100)} percent. Same sample, same number of bins. Three: what to maximise. The binned information matrix is smaller than the full one; D-optimality chooses the bins that keep the largest determinant, which is the smallest ellipse for f and m. The three ellipses are computed from this sample: no binning, the six cells, the grid. That determinant is the number the slider on the next slide climbs.`}
    >
      <SlideHeader kicker="ScoreQuant · the problem" title="Why bin, and what to keep" />
      <div className="problem">
        <div className="problem__panel">
          <div className="pfig">
            <div className="pfig__bars" aria-hidden="true">
              {hist.observed.map((obs, i) => (
                <div key={`b${i.toString()}`} className="pfig__bar">
                  <span
                    className="pfig__bar-bg"
                    style={{ height: pctOf(hist.background[i] ?? 0) }}
                  />
                  <span className="pfig__bar-sig" style={{ height: pctOf(hist.signal[i] ?? 0) }} />
                  <span className="pfig__obs" style={{ bottom: pctOf(obs) }} />
                </div>
              ))}
            </div>
            <span className="pfig__legend pfig__legend--top">
              <i className="pfig__swatch pfig__swatch--bg" /> background
              <i className="pfig__swatch pfig__swatch--sig" /> signal
              <i className="pfig__swatch pfig__swatch--obs" /> observed
            </span>
            <span className="pfig__axis pfig__axis--x">x₁, in 7 bins</span>
          </div>
          <div className="problem__line problem__line--words">
            expected counts per component, {hist.n} events, against the observed
          </div>
          <span className="problem__num">1</span>
          <strong>Analyses end in counts</strong>
          <p>
            A template fit compares expected and observed counts bin by bin. Calibration and
            systematics live in bins too. Every event needs one label.
          </p>
        </div>
        <div className="problem__panel">
          <div className="pfig pfig--split">
            <div className="pfig__half-wrap">
              <div className="pfig__half">
                <Grid />
                <Dots space="x" colorBy="gridBin" />
              </div>
              <span className="pfig__caption">a grid over x</span>
            </div>
            <div className="pfig__half-wrap">
              <div className="pfig__half">
                <Cells />
                <Dots space="s" colorBy="cell" />
              </div>
              <span className="pfig__caption">cells in score space</span>
            </div>
          </div>
          <div className="problem__line problem__line--words">
            the grid keeps {Math.round(fisher.keptByGrid * 100)}% of the information; the six cells
            keep {Math.round(fisher.keptByCells * 100)}%
          </div>
          <span className="problem__num">2</span>
          <strong>Bin the events, or bin the scores</strong>
          <p>
            What a bin loses is the spread of the scores inside it. A grid over x cuts across the
            scores; cells drawn in score space follow them.
          </p>
        </div>
        <div className="problem__panel">
          <div className="pfig">
            <span className="pfig__line pfig__line--h" style={{ top: "50%" }} />
            <span className="pfig__line pfig__line--v" style={{ left: "50%" }} />
            {ellipses.map((e) => {
              const g = fisher.ellipses[e.key];
              return (
                <span
                  key={e.key}
                  className={`pfig__ellipse ${e.cls}`}
                  style={{
                    width: `${2 * g.a * ELLIPSE_SCALE}px`,
                    height: `${2 * g.b * ELLIPSE_SCALE}px`,
                    transform: `translate(-50%, -50%) rotate(${-g.angle}deg)`,
                  }}
                />
              );
            })}
            {ellipses.map((e) => (
              <span key={`t${e.key}`} className={`pfig__tag pfig__tag--${e.key}`} style={e.at}>
                {e.label}
              </span>
            ))}
            <span className="pfig__seed pfig__seed--accent" style={{ left: "50%", top: "50%" }} />
            <span className="pfig__axis pfig__axis--x">f</span>
            <span className="pfig__axis pfig__axis--y">m</span>
          </div>
          <div className="problem__line">
            <Tex>{String.raw`\max_{\text{bins}}\ \det I_{\text{bins}}`}</Tex>
          </div>
          <span className="problem__num">3</span>
          <strong>The objective</strong>
          <p>
            D-optimality: choose the bins that keep the largest determinant of the Fisher
            information, the smallest ellipse for f and m.
          </p>
        </div>
      </div>
      <p className="problem__rule">
        Keep as much of what the data knows as possible, with only a handful of bins.
      </p>
    </Slide>
  );
}
