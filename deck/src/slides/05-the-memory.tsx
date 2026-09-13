import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";

interface Row {
  path: string;
  depth: 0 | 1 | 2;
  term?: string;
  rest?: string;
  /** Rows this layer's note covers, including its own. */
  span?: number;
  quiet?: boolean;
}

/*
 * The shape every one of the five project repositories shares, reduced to the
 * files that carry context between sessions. Nothing here names a project.
 */
const rows: Row[] = [
  { path: "repo/", depth: 0 },
  {
    path: "CLAUDE.md",
    depth: 1,
    term: "Agent instructions",
    rest: "how to work, what to challenge",
  },
  { path: "docs/", depth: 1, term: "Docs", rest: "problem, design, roadmap, decisions", span: 4 },
  { path: "design.md", depth: 2 },
  { path: "roadmap.md", depth: 2 },
  { path: "decisions.md", depth: 2 },
  { path: "skills/", depth: 1, term: "Skills", rest: "reusable procedures, written once" },
  {
    path: "tests/",
    depth: 1,
    term: "Tests and artifacts",
    rest: "evidence that outlives the chat",
  },
  { path: "src/", depth: 1, quiet: true },
];

export default function TheMemory() {
  return (
    <Slide
      label="The repository is the memory"
      notes="Two minutes. A chat ends; the next session starts from zero. Everything the agent needs to know about intent, decisions and evidence therefore lives in files it reads first. Walk the four layers: instructions say how to work and what to push back on; docs hold the design, roadmap and decisions that must not be silently reversed; skills are procedures written once and reused; tests and artifacts are the evidence. This shape recurs in all five projects — an agent doc and docs in every one, skills in three, tests in four — with no project named on the slide."
    >
      <SlideHeader kicker="Persistent context" title="The repository is the memory" />
      <div className="anatomy">
        {rows.map((r) => (
          <div
            key={r.path + r.depth}
            className={`anatomy__row${r.term ? " anatomy__row--layer" : ""}${r.quiet ? " anatomy__row--quiet" : ""}`}
          >
            <span className="anatomy__path" style={{ "--depth": r.depth } as React.CSSProperties}>
              {r.path}
            </span>
            {(r.term || r.depth < 2) && (
              <span
                className="anatomy__note"
                style={{ gridRow: r.span ? `span ${r.span}` : undefined }}
              >
                {r.term && (
                  <>
                    <span className="anatomy__term">{r.term}</span>
                    <span className="anatomy__rest">{r.rest}</span>
                  </>
                )}
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="evidence-line">
        an agent doc and docs/ in all five projects · skills in three · tests in four
      </p>
    </Slide>
  );
}
