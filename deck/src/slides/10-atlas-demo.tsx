import ExternalLink from "../components/ExternalLink";
import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
export default function Page() {
  return (
    <Slide
      label="Foundation Models for Vision"
      notes="3 minutes including demo. Open narrative, choose the self-supervised lineage lens, follow ViT \u2192 DINO \u2192 DINOv2, then open one page and its primary source. Do not attempt all chapters. Offline fallback: this screenshot and the preceding sourced graph. No iframe or network request is required by the slide itself."
      className="editorial"
    >
      <SlideHeader kicker="Understand" title="Foundation Models for Vision" />
      <div className="hero">
        <ImageSlot
          id="atlas-narrative"
          alt="Foundation Models for Vision: actual interactive narrative graph"
        />
      </div>
      <div className="caption-row">
        <span>One route through connected knowledge</span>
        <ExternalLink href="https://vitavision.dev/atlas/narratives/foundation-models-for-vision/">
          Open narrative ↗
        </ExternalLink>
      </div>
    </Slide>
  );
}
