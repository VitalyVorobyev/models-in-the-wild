import { Arrow, Dots, model, px, py, sBox, xBox } from "../components/ScoreFigure";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import Tex from "../components/Tex";
import { scoreEvidence } from "../content/evidence";

const full = scoreEvidence.fisher.ellipses.full;
/** Pixels per standard error of the full-information measurement, shared with slide 23. */
export const ELLIPSE_SCALE = 74;

/**
 * The one example that runs through the section, in three pictures: the model
 * and its sample, the score of each event, and what the scores say about how
 * well the two parameters can be measured. Nothing is binned yet.
 */
export default function TheModel() {
  const { sigmaSignal: ss, sigmaBackground: sb, m } = model;
  return (
    <Slide
      label="One example: a peak on a background"
      notes={`Two minutes, no interaction; this must land before anything else in the section. One concrete case, the shape of every template fit. Each event gives two measured quantities. The model is a mixture: a narrow signal peak on a broad background, both Gaussian. Two parameters to measure: f, the fraction of signal events, and m, the position of the peak. The sample is what we have; f and m are what we want. Two: the score of an event is the gradient of its log-probability with respect to the parameters: how much more or less likely this event becomes when f or m move a little. It is a pull on each parameter. An event from the peak pulls f up, an event far out pulls it down; an event just right of the peak pulls m to the right. So every event becomes a point in a plane with one axis per parameter, whichever quantities were measured; the coloured ones are the peak events. Three: the average of s sᵀ over the events is the Fisher information matrix. Its inverse, divided by the number of events, is the covariance of the best possible measurement of f and m, the Cramér-Rao bound: the ellipse is what an analysis finally reports. So the scores carry everything the sample knows about the parameters, and the next slide is what happens to them when we bin.`}
    >
      <SlideHeader kicker="ScoreQuant · one example" title="A peak on a background" />
      <div className="problem">
        <div className="problem__panel">
          <div className="pfig">
            {[1, 2].map((k) => (
              <span
                key={`b${k.toString()}`}
                className="pfig__contour"
                style={{
                  left: px(0, xBox),
                  top: py(0, xBox),
                  width: `${((2 * k * sb) / (xBox.x1 - xBox.x0)) * 100}%`,
                  height: `${((2 * k * sb) / (xBox.y1 - xBox.y0)) * 100}%`,
                }}
              />
            ))}
            {[1, 2].map((k) => (
              <span
                key={`s${k.toString()}`}
                className="pfig__contour pfig__contour--accent"
                style={{
                  left: px(m, xBox),
                  top: py(0, xBox),
                  width: `${((2 * k * ss) / (xBox.x1 - xBox.x0)) * 100}%`,
                  height: `${((2 * k * ss) / (xBox.y1 - xBox.y0)) * 100}%`,
                }}
              />
            ))}
            <Dots space="x" />
            <span
              className="pfig__tag pfig__tag--accent"
              style={{ left: px(m + 0.55, xBox), top: py(0.9, xBox) }}
            >
              signal, at m
            </span>
            <span className="pfig__tag" style={{ left: px(-3.2, xBox), top: py(-2.6, xBox) }}>
              background
            </span>
            <span className="pfig__axis pfig__axis--x">x₁</span>
            <span className="pfig__axis pfig__axis--y">x₂</span>
          </div>
          <div className="problem__line">
            <Tex>{String.raw`p(x\mid f,m)=f\,\mathcal N\!\big(x;(m,0),\sigma_s^2\big)+(1-f)\,\mathcal N\!\big(x;0,\sigma_b^2\big)`}</Tex>
          </div>
          <span className="problem__num">1</span>
          <strong>A model with two parameters</strong>
          <p>
            Two measured quantities per event: a narrow peak on a broad background. To measure: the
            signal fraction f and the peak position m.
          </p>
        </div>
        <div className="problem__panel">
          <div className="pfig">
            <span className="pfig__line pfig__line--h" style={{ top: py(0, sBox) }} />
            <span className="pfig__line pfig__line--v" style={{ left: px(0, sBox) }} />
            <Dots space="s" colorBy="signal" />
            <Arrow
              from={[0, 0]}
              to={[2.55, 0.9]}
              box={sBox}
              shorten={2}
              className="pfig__pull--accent"
            />
            <Arrow
              from={[0, 0]}
              to={[-1.32, -0.3]}
              box={sBox}
              shorten={2}
              className="pfig__pull--ink"
            />
            <span
              className="pfig__tag pfig__tag--accent"
              style={{ left: px(0.15, sBox), top: py(2.05, sBox) }}
            >
              a peak event pulls f up
            </span>
            <span className="pfig__tag" style={{ left: px(-1.4, sBox), top: py(-0.95, sBox) }}>
              a background event pulls f down
            </span>
            <span className="pfig__axis pfig__axis--x">∂ log p / ∂f</span>
            <span className="pfig__axis pfig__axis--y">∂ log p / ∂m</span>
          </div>
          <div className="problem__line">
            <Tex>{String.raw`s(x)=\nabla_{\!\theta}\log p(x\mid\theta)=\Big(\tfrac{\partial\log p}{\partial f},\ \tfrac{\partial\log p}{\partial m}\Big)`}</Tex>
          </div>
          <span className="problem__num">2</span>
          <strong>Each event has a score</strong>
          <p>
            How much more likely the event becomes when f or m move: a pull on each parameter. One
            axis per parameter, whatever was measured.
          </p>
        </div>
        <div className="problem__panel">
          <div className="pfig">
            <span className="pfig__line pfig__line--h" style={{ top: "50%" }} />
            <span className="pfig__line pfig__line--v" style={{ left: "50%" }} />
            <span
              className="pfig__ellipse pfig__ellipse--full"
              style={{
                width: `${2 * full.a * ELLIPSE_SCALE}px`,
                height: `${2 * full.b * ELLIPSE_SCALE}px`,
                transform: `translate(-50%, -50%) rotate(${-full.angle}deg)`,
              }}
            />
            <span className="pfig__seed pfig__seed--accent" style={{ left: "50%", top: "50%" }} />
            <span className="pfig__tag" style={{ left: "54%", top: "58%" }}>
              the best measurement
            </span>
            <span className="pfig__axis pfig__axis--x">f</span>
            <span className="pfig__axis pfig__axis--y">m</span>
          </div>
          <div className="problem__line">
            <Tex>{String.raw`I=\mathbb E\!\left[s\,s^{\mathsf T}\right],\qquad \operatorname{Cov}(\hat f,\hat m)\ \ge\ \frac{I^{-1}}{n}`}</Tex>
          </div>
          <span className="problem__num">3</span>
          <strong>How well f and m can be measured</strong>
          <p>
            The average of s sᵀ over the events is the Fisher information. Its inverse is the
            covariance of the best possible measurement: the ellipse.
          </p>
        </div>
      </div>
      <p className="problem__rule">The scores carry everything the sample knows about f and m.</p>
    </Slide>
  );
}
