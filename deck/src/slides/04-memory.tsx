import { Document } from "../components/Diagram";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
export default function Page() {
  return (
    <Slide
      label="The repository becomes the memory"
      notes="2 minutes. Excerpts are shortened from the named repository documents; slide-map excerpt is a labeled synopsis, not a verbatim quote. The memory is not a model feature: files make intent, evidence and decisions retrievable. The repository example formerly appeared after the final question; placing it here makes the opening mechanism concrete."
      className="editorial"
    >
      <SlideHeader kicker="The workflow" title="The repository becomes the memory" />
      <div className="memory-layout">
        <div className="memory-docs">
          <Document name="docs/talk-brief.md · shortened">{`Internal, R&D-first workshop
~60 minutes
Live artifacts and short demos`}</Document>
          <Document name="CLAUDE.md">{`Never fabricate metrics, project history, or lessons.
Use placeholders when evidence is missing.`}</Document>
          <Document name="docs/projects/scorequant.md · shortened">{`Lean checks the stated mathematics,
not the Python implementation.
Manuscript: draft, owner review pending.`}</Document>
        </div>
        <div className="memory-output">
          <Document name="docs/slide-map.md · synopsis">{`Opening → five project mechanisms → synthesis
The deck registry and this map must agree.`}</Document>
          <div className="file-connection">↓</div>
          <div className="mini-deck">
            Frontier Models
            <br />
            in the Wild
          </div>
        </div>
      </div>
      <p className="takeaway">The prompt is temporary. The repository becomes the memory.</p>
    </Slide>
  );
}
