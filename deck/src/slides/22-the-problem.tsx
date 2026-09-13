import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { problemFigure as fig } from "../content/problem-figure";

const cx = fig.width / 2;
const cy = fig.height / 2;
const pct = (v: number, of: number) => `${(v / of) * 100}%`;

function Dots({ colorBy }: { colorBy?: "cell" | "bin" }) {
  return (
    <>
      {fig.points.map((p) => (
        <span
          key={`${p.x}-${p.y}`}
          className="pfig__dot"
          data-c={colorBy ? p[colorBy] : undefined}
          style={{ left: pct(p.x, fig.width), top: pct(p.y, fig.height) }}
        />
      ))}
    </>
  );
}

/**
 * The problem, in three pictures of the same sample: what a score is, what a
 * bin costs, and what ScoreQuant chooses. The real run follows on slide 23.
 */
export default function TheProblem() {
  return (
    <Slide
      label="The problem"
      notes="Two minutes, no interaction; this must land before the demo. One: a statistical model with parameters, and a sample. Each observation has a score: the direction and strength with which it would pull the parameters if it were the only observation. Add them up over the sample and you have the Fisher information, how well the data can pin the parameters down. Two: a template fit compares histograms, so every observation has to land in one of a few cells. Inside a cell the pulls are averaged; whatever varied inside the cell is gone. A grid laid over the data does that blindly. Three: the question is where to put the cells so that the least information is lost. ScoreQuant places seeds, assigns every observation to its nearest seed, and moves the seeds until the information kept stops growing. The colleague's case is many-dimensional; two dimensions here is only so that it can be drawn."
    >
      <SlideHeader
        kicker="ScoreQuant · the problem"
        title="Binning without losing what the data knows"
      />
      <div className="problem">
        <div className="problem__panel">
          <div className="pfig">
            {fig.points.map((p) => {
              const dx = p.x - cx;
              const dy = p.y - cy;
              const len = Math.hypot(dx, dy) * 0.45;
              const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
              return (
                <span
                  key={`a-${p.x}-${p.y}`}
                  className="pfig__pull"
                  style={{
                    left: pct(p.x, fig.width),
                    top: pct(p.y, fig.height),
                    width: `${len}px`,
                    transform: `rotate(${angle}deg)`,
                  }}
                />
              );
            })}
            <Dots />
            <span className="pfig__formula">s(x) = ∇θ log p(x | θ)</span>
          </div>
          <span className="problem__num">1</span>
          <strong>Every observation pulls on the parameters</strong>
          <p>
            Its score says how hard and in which direction. Summed over the sample, that is the
            Fisher information: how well the data can pin the parameters down.
          </p>
        </div>
        <div className="problem__panel">
          <div className="pfig">
            <div className="pfig__grid" aria-hidden="true">
              {Array.from({ length: 6 }, (_, i) => (
                <span key={`g${i.toString()}`} />
              ))}
            </div>
            <Dots colorBy="bin" />
          </div>
          <span className="problem__num">2</span>
          <strong>A fit works on bins</strong>
          <p>
            A template fit compares histograms, so each observation must land in one of a few cells.
            Inside a cell the pulls are averaged, and part of the information is lost.
          </p>
        </div>
        <div className="problem__panel">
          <div className="pfig">
            {fig.cells.map((poly, i) => (
              <span
                key={`c${i.toString()}`}
                className="pfig__cell"
                data-c={i}
                style={{
                  clipPath: `polygon(${poly.map(([x, y]) => `${pct(x, fig.width)} ${pct(y, fig.height)}`).join(", ")})`,
                }}
              />
            ))}
            <Dots colorBy="cell" />
            {fig.seeds.map((s) => (
              <span
                key={`s-${s.x}-${s.y}`}
                className="pfig__seed"
                style={{ left: pct(s.x, fig.width), top: pct(s.y, fig.height) }}
              />
            ))}
          </div>
          <span className="problem__num">3</span>
          <strong>Put the cells where the information is</strong>
          <p>
            ScoreQuant places seeds, assigns each observation to its nearest seed, and moves the
            seeds until the information kept stops growing.
          </p>
        </div>
      </div>
      <p className="problem__rule">
        Keep as much of what the data knows as possible, with only a handful of bins.
      </p>
    </Slide>
  );
}
