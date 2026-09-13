import ExternalLink from "../components/ExternalLink";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { evidence, projectEvidence } from "../content/evidence";

const run = projectEvidence.radar;
const counts = run.digestCounts;
const ranked = counts.Use + counts.Prototype + counts.Evaluate + counts.Watch;

/** One dated run, narrowing on each click; the digest it produced beside it. */
export default function RadarFunnel() {
  const r = evidence.radar;
  return (
    <Slide
      label="The daily funnel"
      notes={`Two minutes, four clicks. One real run, ${run.date}. Every morning arXiv cs.CV is fetched; deterministic keyword scoring over ${r.tracks.value} tracks, positive and negative phrases, narrows it to a shortlist capped at ${r.candidateCap.value}. Only then is a frontier model spent: Claude assigns a ring, a reason and an action to each of the ${run.queue}; that day it kept ${ranked} and sent ${counts.Ignore} to Ignore. Every decision is one record in SQLite with its reason. Run by hand each morning; nothing reaches the public board without a human confirming it. The digest excerpt on the right is that day's one Prototype item, reason shortened at a sentence boundary.`}
    >
      <SlideHeader kicker="CV Tech Radar · one morning" title="The daily funnel" />
      <div className="funnel-slide">
        <ol className="funnel6">
          <li className="funnel6__band" style={{ "--w": "100%" } as React.CSSProperties}>
            <strong>{run.intake}</strong>
            <span>abstracts · arXiv cs.CV · {run.date}</span>
          </li>
          <li className="funnel6__band fragment" style={{ "--w": "84%" } as React.CSSProperties}>
            <strong>{r.tracks.value}</strong>
            <span>tracks · keyword scoring, positive and negative</span>
          </li>
          <li className="funnel6__band fragment" style={{ "--w": "66%" } as React.CSSProperties}>
            <strong>{run.queue}</strong>
            <span>shortlist · the cap</span>
          </li>
          <li
            className="funnel6__band funnel6__band--judge fragment"
            style={{ "--w": "60%" } as React.CSSProperties}
          >
            <strong>Claude</strong>
            <span>ring · reason · action, per item</span>
          </li>
          <li
            className="funnel6__band funnel6__band--out fragment"
            style={{ "--w": "42%" } as React.CSSProperties}
          >
            <strong>{ranked}</strong>
            <span>ranked · {counts.Ignore} to Ignore</span>
          </li>
        </ol>
        <div className="digest">
          <span className="digest__file">reports/digests/{run.date}.md · excerpt</span>
          <span className="digest__ring">Prototype</span>
          <strong className="digest__title">
            Real-time Unsupervised Object Discovery from Asynchronous Event Streams
          </strong>
          <p className="digest__reason">
            Training-free, real-time moving-object discovery straight from the event stream: a
            linear-time probabilistic event filter for denoising plus Morton-code clustering that
            avoids a distance matrix, with code published and results on the public E-MLB benchmark.
          </p>
          <p className="digest__action">
            Action: run it on E-MLB and on our own event captures; record throughput and
            false-positive rate.
          </p>
          <span className="digest__tally">
            {counts.Prototype} Prototype · {counts.Evaluate} Evaluate · {counts.Watch} Watch ·{" "}
            {counts.Ignore} Ignore
          </span>
        </div>
      </div>
      <div className="funnel-slide__foot">
        <p className="evidence-line">
          since {r.since.value} · {r.decisions.value} decisions · {r.use.value} Use ·{" "}
          {r.ignore.value} Ignore · run by hand · {r.decisions.measured}
        </p>
        <ExternalLink
          href="https://vitalyvorobyev.github.io/cv-tech-radar/"
          className="stage__link"
        >
          Open the radar ↗
        </ExternalLink>
      </div>
    </Slide>
  );
}
