import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { projects } from "../content/projects";

/**
 * The montage. The five cards step upward from left to right because the deck
 * order is also the order of scale — a tool for one family up to a research
 * programme — and the rise is the only thing on the slide that says so.
 */
export default function Artifacts() {
  return (
    <Slide
      label="Five artifacts"
      notes="One minute. Artifacts first, no definitions. All five exist and are working; not all are finished — ScoreQuant's manuscript is a draft. The cards rise left to right because the projects are ordered by scale, and that order is the arc of the talk. Do not explain the projects here; each gets its own section."
    >
      <SlideHeader kicker="Artifacts first" title="Five artifacts" />
      <ol className="montage">
        {projects.map((p, i) => (
          <li
            key={p.number}
            className="montage__item"
            style={{ "--rise": i } as React.CSSProperties}
          >
            <span className="montage__capability">{p.capability}</span>
            <div className="montage__shot">
              <ImageSlot id={p.montageSlot} alt={`${p.name} screenshot`} fit="cover" />
            </div>
            <strong className="montage__name">{p.name}</strong>
            <span className="montage__line">{p.oneLiner}</span>
            <span className="montage__foot">{p.montageLabel}</span>
          </li>
        ))}
      </ol>
    </Slide>
  );
}
