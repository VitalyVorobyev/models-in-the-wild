import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";

/** Vitaly's account of how a library request forked into a research programme. */
export default function FavourToResearch() {
  return (
    <Slide
      label="From a favour to a research programme"
      notes="Ninety seconds, one click. This is my account; the repository does not record the conversation. A colleague described the procedure; the request was modest, a publishable library, and that branch was delivered: Python, tests, documentation. Click: during the theory work the model proposed a candidate theorem and a proof. I asked a second model to break it; it found no immediate flaw. That is not evidence of anything, two models agreeing proves nothing. What it did was change the ambition: if the checking can be made real, the research loop itself can run inside the workflow. The next slide is that loop."
    >
      <SlideHeader
        kicker="ScoreQuant · how it escalated"
        title="From a favour to a research programme"
      />
      <div className="fork">
        <div className="fork__rail fork__rail--top" aria-hidden="true" />
        <div className="fork__node" style={{ gridColumn: 1, gridRow: 1 }}>
          <strong>A colleague's problem</strong>
          <span>
            a hard data-analysis procedure from particle physics: fit templates, bin the score
            space, keep the information
          </span>
        </div>
        <div className="fork__node" style={{ gridColumn: 2, gridRow: 1 }}>
          <strong>A modest request</strong>
          <span>turn the procedure into a publishable software library</span>
        </div>
        <div className="fork__node" style={{ gridColumn: 3, gridRow: 1 }}>
          <strong>The library</strong>
          <span>Python, tests, documentation, a walkthrough; v0.2.0, alpha</span>
        </div>
        <div className="fork__curve fragment" data-fragment-index={0} aria-hidden="true" />
        <div
          className="fork__rail fork__rail--bottom fragment"
          data-fragment-index={0}
          aria-hidden="true"
        />
        <div
          className="fork__node fragment"
          data-fragment-index={0}
          style={{ gridColumn: 2, gridRow: 2 }}
        >
          <strong>A candidate theorem</strong>
          <span>during the theory work the model proposed a theorem, and a proof</span>
        </div>
        <div
          className="fork__node fragment"
          data-fragment-index={0}
          style={{ gridColumn: 3, gridRow: 2 }}
        >
          <strong>A second opinion</strong>
          <span>a second model, asked to break it, found no flaw. Which proves nothing.</span>
        </div>
        <div
          className="fork__node fragment"
          data-fragment-index={0}
          style={{ gridColumn: 4, gridRow: 2 }}
        >
          <strong>The ambition changed</strong>
          <span>
            can the research loop itself run inside the workflow, if the checking is real?
          </span>
        </div>
      </div>
    </Slide>
  );
}
