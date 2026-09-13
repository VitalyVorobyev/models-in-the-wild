import AtlasGraph from "../components/AtlasGraph";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
export default function Page() {
  return (
    <Slide
      label="Papers, concepts, and relationships"
      notes="3 minutes. Source: generated/projects.json exported from narrative frontmatter, source-page primary references and papers/index.yaml. The graph is a curated subset with original labels, not an invented history. Authors are metadata links, not a claim that a complete author product exists. Trace attention \u2192 transformer \u2192 ViT \u2192 DINO; distillation supplies another branch."
      className="editorial"
    >
      <SlideHeader kicker="Understand" title="Papers, concepts, and relationships" />
      <AtlasGraph />
      <p className="caption">
        Solid edges: repository relationships · dashed route: selected narrative traversal · author
        links: primary-paper metadata
      </p>
    </Slide>
  );
}
