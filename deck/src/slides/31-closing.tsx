import Slide from "../components/Slide";
import Split from "../components/Split";
import Tree from "../components/Tree";

const REPO = `models-in-the-wild/
├── CLAUDE.md
├── README.md
├── docs/
│   ├── talk-brief.md
│   ├── narrative.md
│   ├── slide-map.md
│   ├── session-handoff-2026-09-12.md
│   └── projects/            five stories
├── skills/
│   └── deck-authoring/
└── deck/`;

export default function Closing() {
  return (
    <Slide
      label="Closing"
      theme="dark"
      align="center"
      notes="This deck was built the same way: voice conversation → a Markdown handoff → docs/ → CLAUDE.md → a skill → an agent that checked the five repositories before writing a number → this artifact → your critique."
    >
      <Split
        align="center"
        fill
        left={
          <div className="col" style={{ gap: "40px" }}>
            <div className="kicker kicker--dark">Closing</div>
            <h2 className="statement statement--closing" style={{ color: "var(--dark-fg)" }}>
              This deck followed the same workflow.
            </h2>
            <p className="note" style={{ color: "var(--dark-muted)" }}>
              Conversation, a Markdown starter bundle, agent instructions, a skill, an agent that
              measured before it wrote — and now your critique.
            </p>
          </div>
        }
        right={<Tree framed>{REPO}</Tree>}
      />
    </Slide>
  );
}
