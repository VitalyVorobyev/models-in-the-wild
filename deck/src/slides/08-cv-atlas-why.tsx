import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import Split from "../components/Split";

const POINTS = [
  "Concepts, algorithms and models have their own pages",
  "Works and ideas are related to each other",
  "Narrative stories explain larger developments",
  "Author exploration — work in progress",
];

export default function CvAtlasWhy() {
  return (
    <Slide
      label="CV Atlas: Why It Exists"
      notes="Learning computer vision, absorbing a huge amount of information. Notes and bookmarks were not enough."
    >
      <Split
        fill
        left={
          <div>
            <SlideHeader kicker="CV Atlas" title="Why It Exists" />
            <p className="lead">
              Learning computer vision meant absorbing a huge amount of information. A pile of notes
              and bookmarks was not a system.
            </p>
            <div className="stack stack--small">
              {POINTS.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </div>
        }
        right={
          <div style={{ height: "100%", minHeight: "600px" }}>
            <ImageSlot id="atlas-overview" placeholder="Atlas overview screenshot" rounded />
          </div>
        }
      />
    </Slide>
  );
}
