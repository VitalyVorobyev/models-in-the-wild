import ExternalLink from "../components/ExternalLink";
import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
export default function Page() {
  return (
    <Slide
      label="A course in use"
      notes="3 minutes including demo. Use a prepared learner session; fresh browsers show a profile dialog. Open an A1 unit, associated vocabulary practice and one listening exercise without recording answers. The static learner screenshot and Tonwerk audio are fallback. English and Russian complete; Ukrainian arriving in waves. Vitaly uses the product to learn German. Team analogy: training has a maintained production system, not just generated pages."
      className="editorial"
    >
      <SlideHeader kicker="Create & operate" title="A course in use" />
      <div className="hero">
        <ImageSlot id="deutsch-app" alt="Deutsch-Atlas learner unit with course content" />
      </div>
      <div className="caption-row">
        <span>Unit → practice → listening</span>
        <ExternalLink href="https://deutsch.vitavision.dev/topics">Open course ↗</ExternalLink>
      </div>
    </Slide>
  );
}
