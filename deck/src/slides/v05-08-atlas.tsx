import ExternalLink from "../components/ExternalLink";
import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
export default function Page() {
  return (
    <Slide
      label="CV Atlas"
      notes="1 minute. Origin: learning computer vision made isolated bookmarks insufficient. Use the full-width contained capture so the selected detail pane is not cropped as in the old slide. Author exploration remains work in progress."
      className="editorial"
    >
      <SlideHeader kicker="Understand" title="CV Atlas" />
      <div className="hero">
        <ImageSlot
          id="atlas-overview"
          alt="Real CV Atlas overview with a selected page and relationships"
        />
      </div>
      <div className="caption-row">
        <span>Chosen primary sources</span>
        <span>Persistent pages</span>
        <ExternalLink href="https://vitavision.dev/atlas">Open Atlas ↗</ExternalLink>
      </div>
    </Slide>
  );
}
