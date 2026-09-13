import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { projects } from "../content/projects";
export default function Page() {
  return (
    <Slide
      label="Five working artifacts"
      notes="1 minute. Five distinct working artifacts, not five finished products. ScoreQuant includes a draft manuscript and partial formalization. Family screenshot remains a capture gap; never describe its placeholder as a screenshot. No build-time metrics are inferred from montage screenshots."
      className="editorial"
    >
      <SlideHeader kicker="The workflow" title="Five working artifacts" />
      <div className="artifact-montage">
        {projects.map((p) => (
          <figure key={p.number}>
            <ImageSlot
              id={p.montageSlot}
              alt={p.name}
              specification="Sanitized viewer capture: navigation, register and document pane; all personal content removed."
            />
            <figcaption>
              <strong>{p.capability}</strong>
              <span>{p.name}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="takeaway">
        Frontier models change what an individual or small team can realistically attempt.
      </p>
    </Slide>
  );
}
