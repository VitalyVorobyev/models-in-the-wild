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
 * well the two parameters can be measured. Nothing is binned yet. The two
 * parameters keep one colour each: f blue, m orange, here and on slides 23–25.
 */
export default function TheModel() {
  const { sigmaSignal: ss, sigmaBackground: sb, m } = model;
  return (
    <Slide
      label="One example: a peak on a background"
      notes={`Two minutes, no interaction; this must land before anything else in the section. One concrete case, the shape of every template fit. Each event gives two measured quantities. The model is a mixture: a narrow signal peak on a broad background, both Gaussian. Two parameters to measure, and they keep their colours through the section: f, blue, the share of signal events; m, orange, the position of the peak. The sample is what we have; f and m are what we want. Two: the score of an event is the gradient of its log-probability with respect to the parameters: how much more or less likely this event becomes when f or m move a little. It is a pull on each parameter. A signal event pulls f up, a background event pulls it down; an event just right of the peak pulls m to the right. So every event becomes a point in a plane with one axis per parameter, whichever quantities were measured; the blue points are the signal events. Three: the average of s sᵀ over the events is the Fisher information matrix. Its inverse, divided by the number of events, is the covariance of the best possible measurement of f and m, the Cramér-Rao bound: the ellipse is what an analysis finally reports. So the scores carry everything the sample knows about the parameters, and the next slide is what happens to them when we bin.`}
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
                className="pfig__contour pfig__contour--f"
                style={{
                  left: px(m, xBox),
                  top: py(0, xBox),
                  width: `${((2 * k * ss) / (xBox.x1 - xBox.x0)) * 100}%`,
                  height: `${((2 * k * ss) / (xBox.y1 - xBox.y0)) * 100}%`,
                }}
              />
            ))}
            <span
              className="pfig__line pfig__line--v pfig__line--m"
              style={{ left: px(m, xBox) }}
            />
            <Dots space="x" colorBy="signal" />
            <span
              className="pfig__tag c-m"
              style={{ left: px(m + 0.12, xBox), top: py(-3.25, xBox) }}
            >
              m
            </span>
            <span className="pfig__keys pfig__keys--bottom">
              <span>
                <i className="pfig__swatch pfig__swatch--dot c-f-bg" /> signal events, a share{" "}
                <b className="c-f">f</b> of all
              </span>
              <span>
                <i className="pfig__swatch pfig__swatch--dot pfig__swatch--fg" /> background events
              </span>
              <span>
                <i className="pfig__swatch pfig__swatch--dash c-m-bg" /> the peak position{" "}
                <b className="c-m">m</b>
              </span>
            </span>
            <span className="pfig__axis pfig__axis--x pfig__axis--right">x₁</span>
            <span className="pfig__axis pfig__axis--y">x₂</span>
          </div>
          <div className="problem__line">
            <Tex>{String.raw`p(x\mid \ff,\mm)=\ff\,\mathcal N\!\big(x;(\mm,0),\sigma_s^2\big)+(1-\ff)\,\mathcal N\!\big(x;0,\sigma_b^2\big)`}</Tex>
          </div>
          <span className="problem__num">1</span>
          <strong>A model with two parameters</strong>
          <p>
            Two measured quantities per event: a narrow peak on a broad background. To measure: the
            signal fraction <b className="c-f">f</b> and the peak position <b className="c-m">m</b>.
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
              className="pfig__pull--f"
            />
            <Arrow
              from={[0, 0]}
              to={[-1.32, -0.3]}
              box={sBox}
              shorten={2}
              className="pfig__pull--fg"
            />
            <span className="pfig__tag c-f" style={{ left: px(0.15, sBox), top: py(2.05, sBox) }}>
              a signal event pulls f up
            </span>
            <span className="pfig__tag" style={{ left: px(-1.4, sBox), top: py(-0.95, sBox) }}>
              a background event pulls f down
            </span>
            <span className="pfig__axis pfig__axis--x pfig__axis--right c-f">∂ log p / ∂f</span>
            <span className="pfig__axis pfig__axis--y c-m">∂ log p / ∂m</span>
          </div>
          <div className="problem__line">
            <Tex>{String.raw`s(x)=\nabla_{\!\theta}\log p(x\mid\theta)=\Big(\tfrac{\partial\log p}{\partial \ff},\ \tfrac{\partial\log p}{\partial \mm}\Big)`}</Tex>
          </div>
          <span className="problem__num">2</span>
          <strong>Each event has a score</strong>
          <p>
            How much more likely the event becomes when <b className="c-f">f</b> or{" "}
            <b className="c-m">m</b> move: a pull on each parameter. One axis per parameter,
            whatever was measured.
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
            <span className="pfig__axis pfig__axis--x pfig__axis--right c-f">f</span>
            <span className="pfig__axis pfig__axis--y c-m">m</span>
          </div>
          <div className="problem__line">
            <Tex>{String.raw`I=\mathbb E\!\left[s\,s^{\mathsf T}\right],\qquad \operatorname{Cov}(\hat{\ff},\hat{\mm})\ \ge\ \frac{I^{-1}}{n}`}</Tex>
          </div>
          <span className="problem__num">3</span>
          <strong>How well f and m can be measured</strong>
          <p>
            The average of s sᵀ over the events is the Fisher information. Its inverse is the
            covariance of the best possible measurement: the ellipse.
          </p>
        </div>
      </div>
      <p className="problem__rule">
        The scores carry everything the sample knows about <b className="c-f">f</b> and{" "}
        <b className="c-m">m</b>.
      </p>
    </Slide>
  );
}
