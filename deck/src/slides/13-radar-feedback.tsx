import { Arrow, Diagram, Document } from "../components/Diagram";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { projectEvidence } from "../content/evidence";
export default function Page() {
  return (
    <Slide
      label="A decision changes the filter"
      notes="1.5 minutes. The code records that image-coding items 7559 and 7509 had no penalty; image compression was promoted from per-track to global negative on July 28. This is stronger evidence than inventing a before/after accuracy claim. The fashion example was a deliberately rejected proposal, so do not present it as a deployed fix. Source: config/negative_topics.yaml around the July 28 entry. Company analogy: technical feeds and service report triage need maintained decision records."
      className="editorial"
    >
      <SlideHeader kicker="Filter" title="A decision changes the filter" />
      <div className="feedback-docs">
        <Document name="Recorded miss · tuning log">
          {projectEvidence.radar.feedback.before}
        </Document>
        <span className="flow-arrow">→</span>
        <Document name="config/negative_topics.yaml">{`# global negative topic
- ${projectEvidence.radar.feedback.change}`}</Document>
        <span className="flow-arrow">→</span>
        <Document name="Next candidate queue">{`Re-score new arrivals
Inspect false positives
Keep the decision reason`}</Document>
      </div>
      <Diagram title="Curation evidence feeds configuration review" height={250}>
        <Arrow
          from={[1440, 30]}
          to={[210, 30]}
          label="review the next misses; revise scoped keywords"
          bend={230}
        />
      </Diagram>
      <p className="takeaway">The filter is maintained from recorded mistakes.</p>
      <p className="caption">
        {projectEvidence.radar.feedback.source} · the next review is the workflow, not a measured
        improvement claim
      </p>
    </Slide>
  );
}
