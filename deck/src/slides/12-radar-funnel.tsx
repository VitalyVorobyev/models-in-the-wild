import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { digestReason, digestSelected } from "../content/editorial";
import { projectEvidence } from "../content/evidence";
export default function Page() {
  return (
    <Slide
      label="The daily funnel"
      notes="2 minutes; four reveal steps. One dated run is used throughout: 2026-08-27. Intake comes from read-only items query; queue from that day candidate Markdown; kept counts from digest. Excerpt is shortened and action paraphrased from published digest. No fixed 10\u201315 promise. Remaining intake is outside the shortlist; 15 shortlisted items became Ignore. Deterministic scoring reduces cost, Claude supplies semantic judgment, human edits."
      className="editorial"
    >
      <SlideHeader kicker="Filter" title="The daily funnel" />
      <div className="radar-layout">
        <div>
          <div className="funnel-visual">
            <div style={{ width: "100%" }}>
              <strong>{projectEvidence.radar.intake}</strong>
              <span>abstracts · {projectEvidence.radar.date}</span>
            </div>
            <div className="fragment" style={{ width: "85%" }}>
              <span>Deterministic scoring</span>
            </div>
            <div className="fragment" style={{ width: "65%" }}>
              <strong>{projectEvidence.radar.queue}</strong>
              <span>shortlist · cap {projectEvidence.radar.cap}</span>
            </div>
            <div className="fragment" style={{ width: "65%" }}>
              <span>Claude: ring, reason, action</span>
            </div>
            <div className="fragment" style={{ width: "42%" }}>
              <strong>{digestSelected}</strong>
              <span>ranked selections</span>
            </div>
          </div>
          <p className="caption">
            ↘ {projectEvidence.radar.queue - digestSelected} shortlisted items → Ignore
            <br />
            Run manually each morning
          </p>
        </div>
        <div className="digest-document">
          <div className="document-label">
            reports/digests/{projectEvidence.radar.date}.md · excerpt
          </div>
          <h3>Prototype</h3>
          <strong>
            Real-time Unsupervised Object Discovery
            <br />
            from Asynchronous Event Streams
          </strong>
          <p>{digestReason}</p>
          <div className="digest-action">
            Action: run on event-camera data; measure throughput and false positives.
          </div>
          <hr />
          <p className="caption">
            {projectEvidence.radar.digestCounts.Prototype} Prototype ·{" "}
            {projectEvidence.radar.digestCounts.Evaluate} Evaluate ·{" "}
            {projectEvidence.radar.digestCounts.Watch} Watch
          </p>
        </div>
      </div>
    </Slide>
  );
}
