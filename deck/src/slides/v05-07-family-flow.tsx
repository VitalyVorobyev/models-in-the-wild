import { Document } from "../components/Diagram";
import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
export default function Page() {
  return (
    <Slide
      label="One document through the system"
      notes="2 minutes. Source: docs/projects/family-documents-organizer.md and project CLAUDE.md. Diagram labels summarize actual register fields; this is a schematic, not fabricated records. Actual input and result require safe captures. Claude derives categories from the corpus and can produce source-linked briefs. Small team document registers are the company analogy; avoid an enterprise-system comparison."
      className="editorial"
    >
      <SlideHeader kicker="Organize" title="One document through the system" />
      <div className="family-flow">
        <ImageSlot
          id="family-input"
          alt="Incoming scan or PDF"
          specification="One sanitized original, all identifying content removed; retain only page shape and generic field labels."
        />
        <div className="family-center">
          <span className="flow-arrow">→</span>
          <Document name="Claude → documents.index.json">{`type / category
period / tags
source file references`}</Document>
          <span className="flow-arrow">→</span>
        </div>
        <ImageSlot
          id="family-result"
          alt="Source-linked derived brief"
          specification="Redacted excerpt of an actual derived brief, with one source reference intact in anonymous form. No personal financial values."
        />
      </div>
      <div className="artifact-footer">
        <code>00_originals/</code>
        <span>→</span>
        <code>01_ready_pdfs/&lt;category&gt;/</code>
        <span>+</span>
        <code>documents.index.json</code>
      </div>
      <p className="takeaway">
        Very small bespoke tools become worth building when implementation cost collapses.
      </p>
    </Slide>
  );
}
