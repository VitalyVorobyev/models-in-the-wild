import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import Split from "../components/Split";
import Tree from "../components/Tree";

const REPO = `repo/
├── CLAUDE.md / AGENTS.md
├── docs/
│   ├── problem-definition.md
│   ├── system-design.md
│   ├── roadmap.md
│   └── decisions.md
├── skills/
├── tests/
└── product/`;

const LAYERS = [
  ["Docs", "problem, design, roadmap, decisions"],
  ["Agent instructions", "how to work, what to challenge"],
  ["Skills", "reusable procedures"],
  ["Tests & artifacts", "evidence that outlives the chat"],
] as const;

export default function ContextBackbone() {
  return (
    <Slide
      label="The Context Backbone"
      notes="Markdown docs, agent instructions and skills are the persistent context. This is the same structure this talk was built from."
    >
      <Split
        fill
        left={
          <div>
            <SlideHeader kicker="Persistent context" title="The Context Backbone" />
            <div className="stack stack--body">
              {LAYERS.map(([term, rest]) => (
                <p key={term}>
                  <span className="term">{term}</span> — {rest}
                </p>
              ))}
            </div>
          </div>
        }
        right={<Tree>{REPO}</Tree>}
      />
    </Slide>
  );
}
