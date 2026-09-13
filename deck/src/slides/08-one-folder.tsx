import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { evidence } from "../content/evidence";

/**
 * One real document's journey through the system, using the letter the
 * opener already showed. The three stations are the ask, in order; the
 * register card repeats the fields the viewer displays for that entry.
 */
export default function OneFolder() {
  return (
    <Slide
      label="One folder and an agent"
      notes="Two minutes. Drop a scan into the originals folder and ask Claude the three things on the slide. The taxonomy was derived from the actual documents, not designed up front — categories appeared as the corpus grew. The register entry on the slide is the real one for the letter: category, role, page count, a one-line description. Output is a normalized PDF in the category folder and an entry the local viewer reads. Yearly tax briefs are derived the same way and cite the documents they used. No embeddings, no RAG, no search backend."
    >
      <SlideHeader kicker="Family Documents Organizer" title="One folder and an agent" />
      <ol className="journey">
        <li className="journey__station">
          <span className="journey__ask">Find the new item in the originals folder</span>
          <div className="journey__scan">
            <ImageSlot id="family-letter" alt="A photographed handwritten letter, first page" />
          </div>
          <span className="journey__path">00_originals/</span>
        </li>
        <li className="journey__station">
          <span className="journey__ask">
            Understand it; derive type and category from the corpus
          </span>
          <dl className="journey__card">
            <div>
              <dt>category</dt>
              <dd>David · Education</dd>
            </div>
            <div>
              <dt>title</dt>
              <dd>Willkommensbrief der CSG-Tutoren (Juli 2026)</dd>
            </div>
            <div>
              <dt>role</dt>
              <dd>Supporting · 2 pages</dd>
            </div>
            <div>
              <dt>summary</dt>
              <dd>
                Zweiseitiger handschriftlicher Brief mit Bleistiftzeichnungen. Fotografiertes
                Original.
              </dd>
            </div>
          </dl>
          <span className="journey__path">documents.index.json</span>
        </li>
        <li className="journey__station">
          <span className="journey__ask">Wire it into the register and the folder structure</span>
          <ul className="journey__out">
            <li>a normalized PDF in its category folder</li>
            <li>an entry the local viewer reads</li>
            <li>yearly briefs that cite their source documents</li>
          </ul>
          <span className="journey__path">01_ready_pdfs/&lt;category&gt;/</span>
        </li>
      </ol>
      <p className="journey__rule">
        No embeddings. No RAG. No search backend. Structured files plus an agent.
      </p>
      <p className="evidence-line">
        {evidence.familyDocs.records.value} records · {evidence.familyDocs.categories.value}{" "}
        categories · measured {evidence.familyDocs.records.measured}
      </p>
    </Slide>
  );
}
