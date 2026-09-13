import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { projectEvidence } from "../content/evidence";

const run = projectEvidence.radar;
const counts = run.digestCounts;
const ranked = counts.Use + counts.Prototype + counts.Evaluate + counts.Watch;

/**
 * The radar as a routine: an automatic morning, one digest, a person at the
 * end. Two clicks: the digest appears, then the human step.
 */
export default function RadarRoutine() {
  return (
    <Slide
      label="An automatic daily routine"
      notes={`Two minutes, two clicks. The point of this project is the routine, not the scoring. Every morning, without anyone touching it: arXiv cs.CV is fetched, keyword scoring narrows about a hundred abstracts to a shortlist of ${run.cap}, and Claude proposes a ring, a reason and an action for each. Click: that produces one short digest — the example is the real one from ${run.date}, ${ranked} items kept, ${counts.Ignore} proposed for Ignore. Click: a person reads it over coffee and confirms what belongs on the board; nothing is published without that. The keyword mechanics are in the notes if asked: ${run.intake} abstracts that day, scoring over the tracks, a cap of ${run.cap}.`}
    >
      <SlideHeader kicker="CV Tech Radar · every morning" title="An automatic daily routine" />
      <div className="routine">
        <div className="routine__zone routine__zone--auto">
          <span className="routine__zone-label">Automatic · every morning</span>
          <ol className="routine__steps">
            <li>
              <strong>Fetch</strong>
              <span>everything arXiv cs.CV published</span>
            </li>
            <li>
              <strong>Narrow</strong>
              <span>keyword scoring to a shortlist of {run.cap}</span>
            </li>
            <li>
              <strong>Propose</strong>
              <span>Claude: a ring, a reason, an action for each</span>
            </li>
          </ol>
        </div>
        <span className="routine__arrow fragment" data-fragment-index={0} aria-hidden="true" />
        <div className="routine__digest fragment" data-fragment-index={0}>
          <span className="routine__zone-label">One digest</span>
          <div className="digest digest--compact">
            <span className="digest__file">digest · {run.date}</span>
            <span className="digest__ring">Prototype</span>
            <strong className="digest__title">
              Real-time Unsupervised Object Discovery from Asynchronous Event Streams
            </strong>
            <p className="digest__reason">
              Training-free, real-time moving-object discovery straight from the event stream, with
              code published and results on a public benchmark.
            </p>
            <p className="digest__action">Action: run it on our own event captures.</p>
            <span className="digest__tally">
              {ranked} kept · {counts.Ignore} proposed for Ignore
            </span>
          </div>
        </div>
        <span className="routine__arrow fragment" data-fragment-index={1} aria-hidden="true" />
        <div className="routine__zone routine__zone--human fragment" data-fragment-index={1}>
          <span className="routine__zone-label">A person · a few minutes</span>
          <div className="routine__human">
            <strong>Read. Decide.</strong>
            <span>confirm what belongs on the board; nothing is published without it</span>
          </div>
        </div>
      </div>
      <p className="routine__rule fragment" data-fragment-index={1}>
        Automatic routine. A daily digest. A person makes the final call.
      </p>
    </Slide>
  );
}
