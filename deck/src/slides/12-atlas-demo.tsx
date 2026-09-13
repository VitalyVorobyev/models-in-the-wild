import ExternalLink from "../components/ExternalLink";
import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";

export default function AtlasDemo() {
  return (
    <Slide
      label="Foundation Models for Vision"
      notes="Three minutes including the demo. Open the narrative, follow ViT to DINO to DINOv2, open one page and its primary source. Do not attempt all chapters. The trace on the left is the transition the demo shows: from primary papers to structured knowledge to relationships to a narrative. Offline fallback: this screenshot."
    >
      <div className="demo">
        <div className="demo__text">
          <SlideHeader kicker="CV Atlas · live demo" title="Foundation Models for Vision" />
          <ol className="trace">
            <li>primary papers</li>
            <li className="trace__step--strong">structured knowledge</li>
            <li>relationships</li>
            <li className="trace__step--strong">narrative</li>
          </ol>
          <ExternalLink
            href="https://vitavision.dev/atlas/narratives/foundation-models-for-vision/"
            className="button"
          >
            Open the narrative <span aria-hidden="true">↗</span>
          </ExternalLink>
        </div>
        <div className="demo__visual">
          <ImageSlot id="atlas-narrative" alt="The Foundation Models for Vision narrative page" />
        </div>
      </div>
    </Slide>
  );
}
