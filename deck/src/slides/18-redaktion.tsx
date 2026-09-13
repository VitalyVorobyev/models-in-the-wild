import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { evidence } from "../content/evidence";

const views: [string, string, boolean][] = [
  ["Course overview", "size and review state of every topic", false],
  ["Grammar atlas", "every grammar point from A1 to C2, and where the course teaches it", false],
  ["Topic profile", "learning outcomes, grammar, materials and open findings for one topic", false],
  ["Work queue", "findings to act on, with severity and scope", false],
  ["References", "each published Goethe list, entry by entry, and what the course covers", true],
];

/** Redaktion: the editor's app over the same files. The capture is the References view. */
export default function Redaktion() {
  const d = evidence.deutsch;
  return (
    <Slide
      label="The editor's workbench"
      notes="Two minutes; open Redaktion locally if time allows, otherwise the capture. This is a second app over the same checkout. The learner never sees it. It exists because once content is cheap to produce, the editor's questions become the hard ones: what does the course hold, where is a topic thin, which grammar point is taught where, what is still open. The capture is the References view: the Goethe A1 list, 95 entries, 95 claimed, source PDF linked; a level with no published list gets no figure. Source coverage, the internal inventory and how deeply a point is taught are kept as separate numbers."
    >
      <SlideHeader kicker="Deutsch-Atlas · Redaktion" title="The editor's workbench" />
      <p className="lead lead--tight">
        A second app over the same files. The learner never sees it; the editor works from it.
      </p>
      <div className="demo demo--even demo--under-lead">
        <div className="demo__text">
          <dl className="workbench">
            <div>
              <dt>What the corpus holds</dt>
              <dd className="workbench__kinds">
                exercises · vocabulary decks · reading texts · listening scenes · grammar articles ·
                word networks
              </dd>
            </div>
            <div>
              <dt>What Redaktion shows</dt>
              <dd>
                <ul className="workbench__views">
                  {views.map(([name, what, shown]) => (
                    <li key={name} className={shown ? "is-shown" : undefined}>
                      <strong>{name}</strong>
                      <span>{what}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
          <p className="evidence-line evidence-line--lines" style={{ marginTop: "auto" }}>
            <span>Goethe word lists {d.wortliste.value}</span>
            <span>Deutsch-Test für Zuwanderer structures {d.dtzStructures.value}</span>
            <span>measured {d.wortliste.measured}</span>
          </p>
        </div>
        <div className="demo__visual">
          <ImageSlot
            id="redaktion"
            alt="Redaktion, References view: the Goethe A1 list, 95 of 95 entries claimed, and a level without a published list"
          />
        </div>
      </div>
    </Slide>
  );
}
