import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import Split from "../components/Split";
import Tree from "../components/Tree";
import { evidence, MEASURED } from "../content/evidence";

const ARCHIVE = `family-docs/
├── CLAUDE.md
├── 00_originals/
│   └── imported_<date>/   read-only batches
├── 01_ready_pdfs/
│   └── <category>/        normalized PDFs
├── documents.index.json   the register
├── README.md              generated
├── scripts/build_index.py
├── docs/tax/              derived briefs
└── document_browser/      local viewer`;

const ASK = [
  ["01", "Find the new item in the originals folder"],
  ["02", "Understand what it is"],
  ["03", "Derive its type and category from the existing corpus"],
  ["04", "Wire it into the register and the folder structure"],
] as const;

export default function FamilyDocsSystem() {
  return (
    <Slide
      label="One Folder and an Agent"
      notes="Drop a scan or PDF into originals and ask Claude the four things on the left. The document types and categories were derived from the actual data, with Claude — no taxonomy was designed up front. Beyond filing: yearly tax briefs derived from the register, each figure naming the document it came from. The register is local-only; the working agent is Claude, not a local model. Interesting moment: the project's AGENTS.md was a full copy of CLAUDE.md, drifted stale, and was cut to a twelve-line pointer — exactly the kind of stale instruction an agent would have followed."
    >
      <Split
        fill
        left={
          <div className="col" style={{ height: "100%" }}>
            <SlideHeader
              kicker="Family Documents Organizer · workflow"
              title="One Folder and an Agent"
            />
            <div className="stack stack--body">
              {ASK.map(([number, step]) => (
                <p key={number}>
                  <span className="card__num" style={{ marginRight: "20px" }}>
                    {number}
                  </span>
                  {step}
                </p>
              ))}
            </div>
            <p className="note" style={{ marginTop: "var(--gap-title)", maxWidth: "760px" }}>
              No embeddings. No RAG. No search backend. Structured files plus an agent.
            </p>
            <p className="evidence-line" style={{ marginTop: "auto" }}>
              {evidence.familyDocs.records.value} records · {evidence.familyDocs.categories.value}{" "}
              categories · measured {MEASURED}
            </p>
          </div>
        }
        right={<Tree>{ARCHIVE}</Tree>}
      />
    </Slide>
  );
}
