import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
export default function Page() {
  return (
    <Slide
      label="Redaktion: inspect the corpus"
      notes="3 minutes. Actual capture from local Redaktion /#/referenzen on 2026-09-12. Show the named external source and explicitly unanchored level. In optional local demo follow Grammatikatlas \u2192 a topic \u2192 its materials/source. The current overview has no open findings; do not invent one for a screenshot. Grammar capture is retained in assets as a supplemental fallback. Once generation is cheap, verification, coverage and corpus control become the harder work."
      className="editorial"
    >
      <SlideHeader kicker="Create & operate" title="Redaktion: inspect the corpus" />
      <div className="hero">
        <ImageSlot
          id="redaktion"
          alt="Redaktion reference view: external Goethe source, claimed entries and unanchored level"
        />
      </div>
      <div className="caption-row">
        <span>External source ≠ inventory ≠ teaching depth</span>
        <span>Coverage is a trace, not a quality score</span>
      </div>
    </Slide>
  );
}
