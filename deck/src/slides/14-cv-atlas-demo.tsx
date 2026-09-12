import ExternalLink from "../components/ExternalLink";
import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import Split from "../components/Split";

const NARRATIVE = "https://vitavision.dev/atlas/narratives/foundation-models-for-vision";

/** Read bottom-up during the demo: the narrative traces back to the papers. */
const TRACE = [
  ["primary papers", false],
  ["↓ structured knowledge", true],
  ["↓ relationships", false],
  ["↓ narrative", true],
] as const;

export default function CvAtlasDemo() {
  return (
    <Slide
      label="CV Atlas: Live Demo"
      notes="Open the Foundation Models for Vision narrative. Trace it back: narrative → relationships → structured knowledge → primary papers."
    >
      <Split
        variant="demo"
        fill
        left={
          <div className="col" style={{ height: "100%" }}>
            <SlideHeader kicker="CV Atlas · live demo" title="Foundation Models for Vision" />
            <div className="trace">
              {TRACE.map(([step, strong]) => (
                <span className={strong ? "trace__step--strong" : undefined} key={step}>
                  {step}
                </span>
              ))}
            </div>
            <ExternalLink href={NARRATIVE} className="button">
              <span>Open narrative</span>
              <span>↗</span>
            </ExternalLink>
          </div>
        }
        right={
          <div style={{ minHeight: 0 }}>
            <ImageSlot id="atlas-narrative" placeholder="Narrative page screenshot" rounded />
          </div>
        }
      />
    </Slide>
  );
}
