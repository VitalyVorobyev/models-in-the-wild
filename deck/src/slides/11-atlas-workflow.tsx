import ExternalLink from "../components/ExternalLink";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { evidence } from "../content/evidence";

const route = ["Attention", "Transformer", "ViT", "DINO", "DINOv2"];

/**
 * The workflow behind the Atlas, in three stages. The first writes only into
 * a private vault; the second and third publish. The narrative in stage three
 * is drawn as what it is — one route through pages that already exist.
 */
export default function AtlasWorkflow() {
  const a = evidence.atlas;
  return (
    <Slide
      label="From papers to living knowledge"
      notes="Two minutes, then the live demo from the link: open the narrative, follow ViT to DINO to DINOv2, open one page and its primary source; do not attempt all chapters. The point is not website generation. Stage one: a skill reads a primary PDF and writes a private research note — index entry, summary, relations to existing items, related concepts, and a plan for what the public pages should change. It never touches the site. Stage two: page skills author the algorithm, concept and model pages from those notes. Stage three: a narrative is a route through pages that already exist; the deck shows the Foundation Models route, the demo opens it. This is continuous maintenance of a knowledge system, not isolated paper summaries."
    >
      <SlideHeader kicker="CV Atlas · workflow" title="From papers to living knowledge" />
      <div className="stages">
        <div className="stages__rail" aria-hidden="true" />
        <div className="stage stage--private">
          <span className="stage__verb">Read</span>
          <span className="stage__skill">paper-ingest</span>
          <div className="stage__body">
            <div className="stage__pdf">
              <span>PDF</span>
              <span className="stage__pdf-note">a primary paper</span>
            </div>
            <span className="stage__to" aria-hidden="true" />
            <ul className="stage__note">
              <li>index entry</li>
              <li>summary</li>
              <li>relations to existing items</li>
              <li>related concepts</li>
              <li>plan for the public pages</li>
            </ul>
          </div>
          <span className="stage__where">private research note</span>
        </div>
        <div className="stage">
          <span className="stage__verb">Author</span>
          <span className="stage__skill">algo-page · concept-page · deep-model-page</span>
          <div className="stage__body stage__body--pages">
            <div className="stage__count">
              <strong>{a.algorithms.value}</strong>
              <span>algorithm pages</span>
            </div>
            <div className="stage__count">
              <strong>{a.concepts.value}</strong>
              <span>concept pages</span>
            </div>
            <div className="stage__count">
              <strong>{a.models.value}</strong>
              <span>model pages</span>
            </div>
          </div>
          <span className="stage__where">public pages, related to each other</span>
        </div>
        <div className="stage">
          <span className="stage__verb">Narrate</span>
          <span className="stage__skill">tech-writer · editor</span>
          <div className="stage__body stage__body--route">
            <span className="stage__route-name">Foundation Models for Vision</span>
            <ol className="route">
              {route.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ol>
            <span className="stage__route-note">
              one route through pages that already exist; distillation joins it twice
            </span>
            <ExternalLink
              href="https://vitavision.dev/atlas/narratives/foundation-models-for-vision/"
              className="stage__link"
            >
              Open the narrative ↗
            </ExternalLink>
          </div>
          <span className="stage__where">a story over the connected pages</span>
        </div>
      </div>
      <p className="stages__rule">
        Closer to continuously maintaining a knowledge system than asking for isolated paper
        summaries.
      </p>
      <p className="evidence-line">
        {a.papers.value} indexed papers · {a.algorithms.value} + {a.concepts.value} +{" "}
        {a.models.value} pages · measured 2026-09-12
      </p>
    </Slide>
  );
}
