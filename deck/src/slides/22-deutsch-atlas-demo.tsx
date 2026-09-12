import ExternalLink from "../components/ExternalLink";
import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import Split from "../components/Split";
import { project } from "../content/projects";

const DEUTSCH = project("04");

/** The path the demo follows through the product and back into the tooling. */
const TRACE = [
  ["a unit", false],
  ["↓ its word cards", true],
  ["↓ a listening scene", false],
  ["↓ the editorial coverage view", true],
] as const;

export default function DeutschAtlasDemo() {
  return (
    <Slide
      label="Deutsch-Atlas: Live Demo"
      notes="Open the app. Show one unit, its word cards, one listening scene with the cast voices. If time allows, switch to Redaktion locally and show the coverage view — the point is that the same repository is the course and the production system."
    >
      <Split
        variant="demo"
        fill
        left={
          <div className="col" style={{ height: "100%" }}>
            <SlideHeader kicker="Deutsch-Atlas · live demo" title="A Course in Use" />
            <div className="trace">
              {TRACE.map(([step, strong]) => (
                <span className={strong ? "trace__step--strong" : undefined} key={step}>
                  {step}
                </span>
              ))}
            </div>
            <ExternalLink href={DEUTSCH.link?.href ?? "#"} className="button">
              <span>Open deutsch.vitavision.dev</span>
              <span>↗</span>
            </ExternalLink>
          </div>
        }
        right={
          <div style={{ minHeight: 0 }}>
            <ImageSlot id="deutsch-app" placeholder="Deutsch-Atlas app screenshot" rounded />
          </div>
        }
      />
    </Slide>
  );
}
