import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";

/**
 * Two ways to brief an agent, drawn as the space the solution can occupy.
 * Left: every detail specified — the solution fills a box the size of what you
 * already know. Right: only the decisions that matter are fixed — exploration
 * spills past that boundary, and so does what you learn.
 */
export default function ConstrainIntent() {
  return (
    <Slide
      label="Constrain the intent"
      notes="One and a half minutes. The instinct is to specify everything; that bounds the result by what you already know. Fix only the decisions that matter — the intent, the hard constraints, the evidence standard, the acceptance criteria — and let the model bring its own expertise: it will explore designs and tools you would not have reached, and you end up understanding the problem better than when you started. This is why the previous slide's success criteria matter: freedom on the right side is only safe when the evidence on the left is fixed."
    >
      <SlideHeader
        kicker="Where to be strict"
        title="Constrain the intent, not the implementation"
      />
      <p className="lead lead--tight">
        Fix the decisions that matter. Give the model room to bring its own expertise.
      </p>
      <div className="bounds">
        <div className="bounds__panel">
          <h3 className="bounds__head">Specify every detail</h3>
          <div className="bounds__field">
            <div className="bounds__known bounds__known--square">
              <span className="bounds__known-label">what you already know</span>
              <div className="bounds__solution">the solution</div>
            </div>
          </div>
          <p className="bounds__verdict">Bounded by you.</p>
        </div>
        <div className="bounds__panel">
          <h3 className="bounds__head">Fix intent, constraints, evidence, acceptance</h3>
          <div className="bounds__field">
            <div className="bounds__explore">
              <span className="bounds__explore-label bounds__explore-label--a">designs</span>
              <span className="bounds__explore-label bounds__explore-label--b">tools</span>
              <span className="bounds__explore-label bounds__explore-label--c">alternatives</span>
              <span className="bounds__explore-label bounds__explore-label--d">what you learn</span>
            </div>
            <div className="bounds__known bounds__known--circle">
              <span className="bounds__known-label">what you already know</span>
            </div>
            <div className="bounds__intent">
              <span>intent</span>
              <span>constraints</span>
              <span>evidence</span>
              <span>acceptance</span>
            </div>
          </div>
          <p className="bounds__verdict">Extends past you — and you learn.</p>
        </div>
      </div>
    </Slide>
  );
}
