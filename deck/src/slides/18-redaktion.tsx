import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { evidence } from "../content/evidence";

/** Redaktion: the editor's app over the same files. The capture is the Referenzen view. */
export default function Redaktion() {
  const d = evidence.deutsch;
  return (
    <Slide
      label="Keeping the corpus honest"
      notes="Two minutes; open Redaktion locally if time allows, otherwise the capture. This is a second app over the same checkout, for the editor rather than the learner: course overview, a grammar atlas across levels, a topic profile with outcomes, materials and findings, a work queue, and this view, Referenzen. Every coverage figure here points at a published Goethe document — the A1 list, 95 entries, 95 claimed, source PDF linked. Three things are deliberately kept apart: whether the external list is covered, what the internal inventory holds, and how deeply a point is taught. And the box at the top: B2 has no source, so B2 gets no number. That is the discipline that makes the 100 % figures mean something. Its own guide says the number of findings is not a quality score."
    >
      <SlideHeader kicker="Deutsch-Atlas · Redaktion" title="Keeping the corpus honest" />
      <p className="lead lead--tight">
        A second app over the same files. For the editor, not the learner.
      </p>
      <div className="demo demo--under-lead">
        <div className="demo__text">
          <ul className="claims">
            <li>Every coverage figure points at a published Goethe list.</li>
            <li>Source coverage, internal inventory and teaching depth stay three numbers.</li>
            <li>No source for B2, so no number for B2.</li>
          </ul>
          <p className="claims__rule">Coverage is a trace, not a quality score.</p>
          <p className="evidence-line evidence-line--lines">
            <span>
              Goethe {d.wortliste.value} · DTZ {d.dtzStructures.value}
            </span>
            <span>every list fully covered · measured {d.wortliste.measured}</span>
          </p>
        </div>
        <div className="demo__visual">
          <ImageSlot
            id="redaktion"
            alt="Redaktion, Referenzen view: the Goethe A1 list, 95 of 95 entries claimed, and the note that B2 has no source"
          />
        </div>
      </div>
    </Slide>
  );
}
