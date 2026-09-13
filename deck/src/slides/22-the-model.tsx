import { Arrow, centre, Dots, fig, H, pct, spread, W } from "../components/ScoreFigure";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";

/**
 * The setting, in three pictures of one sample: the model and its
 * observations, the score of each observation, and what the scores say about
 * how well the parameters can be measured. Nothing is binned yet.
 */
export default function TheModel() {
  return (
    <Slide
      label="A model, its observations, its scores"
      notes={`Two minutes, no interaction, and this must land before anything else in the section. One: a statistical model with parameters θ gives the probability of every observation x; here a two-dimensional Gaussian whose centre is θ, only so that it can be drawn. The colleague's model is a sum of templates with many parameters and many measurement channels. We have a sample; we want θ. Two: the score of one observation is the gradient of its log-probability with respect to θ, the direction in which this single observation would move the parameters. Score space has one axis per parameter, however many channels an observation has. For the Gaussian the score is just the displacement from the reference point, so the picture hardly changes; in general it is a different space. Three: the average of s sᵀ over the sample is the Fisher information matrix I. Its inverse is the covariance of the best possible measurement of θ, the Cramér-Rao bound; the ellipse is what an analysis reports. So the scores carry everything the sample knows about the parameters, and the next slide is about what happens to them when we bin.`}
    >
      <SlideHeader
        kicker="ScoreQuant · the setting"
        title="A model, its observations, its scores"
      />
      <div className="problem">
        <div className="problem__panel">
          <div className="pfig">
            {[1, 2, 2.7].map((k) => (
              <span
                key={k}
                className="pfig__contour"
                style={{
                  left: pct(centre.x, W),
                  top: pct(centre.y, H),
                  width: pct(2 * k * spread.x, W),
                  height: pct(2 * k * spread.y, H),
                }}
              />
            ))}
            <Dots />
            <span className="pfig__axis pfig__axis--x">x₁</span>
            <span className="pfig__axis pfig__axis--y">x₂</span>
            <span className="pfig__formula">p(x | θ)</span>
          </div>
          <span className="problem__num">1</span>
          <strong>A model with parameters</strong>
          <p>
            p(x | θ) says how likely an observation x is when the parameters are θ. We have a sample
            of x and want to measure θ.
          </p>
        </div>
        <div className="problem__panel">
          <div className="pfig">
            <span className="pfig__line pfig__line--h" style={{ top: pct(centre.y, H) }} />
            <span className="pfig__line pfig__line--v" style={{ left: pct(centre.x, W) }} />
            {fig.points.map((p) => (
              <Arrow
                key={`r-${p.x}-${p.y}`}
                x1={centre.x}
                y1={centre.y}
                x2={p.x}
                y2={p.y}
                shorten={6}
                className="pfig__pull--faint"
              />
            ))}
            <Dots />
            <span className="pfig__axis pfig__axis--x">∂/∂θ₁</span>
            <span className="pfig__axis pfig__axis--y">∂/∂θ₂</span>
            <span className="pfig__formula">s(x) = ∇θ log p(x | θ)</span>
          </div>
          <span className="problem__num">2</span>
          <strong>Each observation has a score</strong>
          <p>
            The score is the direction in which this one observation pulls the parameters. Score
            space has one axis per parameter, whatever x looks like.
          </p>
        </div>
        <div className="problem__panel">
          <div className="pfig">
            <span className="pfig__line pfig__line--h" style={{ top: "50%" }} />
            <span className="pfig__line pfig__line--v" style={{ left: "50%" }} />
            <span className="pfig__ellipse pfig__ellipse--full" />
            <span className="pfig__seed pfig__seed--accent" style={{ left: "50%", top: "50%" }} />
            <span className="pfig__tag" style={{ left: "43%", top: "53%" }}>
              the estimate
            </span>
            <span className="pfig__axis pfig__axis--x">θ₁</span>
            <span className="pfig__axis pfig__axis--y">θ₂</span>
            <span className="pfig__formula pfig__formula--top">I = E[s sᵀ]</span>
            <span className="pfig__formula">Cov(θ̂) ≥ I⁻¹</span>
          </div>
          <span className="problem__num">3</span>
          <strong>How well θ can be measured</strong>
          <p>
            The scores, squared and averaged over the sample, give the Fisher information I. Its
            inverse is the covariance of the best measurement of θ: the ellipse.
          </p>
        </div>
      </div>
      <p className="problem__rule">The scores carry everything the sample knows about θ.</p>
    </Slide>
  );
}
