import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { project } from "../content/projects";

const principles = [
  {
    head: "Define intent and evidence, not every implementation detail.",
    body: "Fix the goal, the constraints, the standards and the acceptance criteria. Let the agent explore the implementation.",
  },
  {
    head: "Keep context and decisions in files, not in chat.",
    body: "The repository carries knowledge, decisions, procedures and evidence from one session to the next.",
  },
  {
    head: "Let the agent explore; verify what matters.",
    body: "A more capable model justifies more ambitious exploration, not less verification.",
  },
  {
    head: "Build the tool the problem needs, even if it is small or temporary.",
    body: "Cheap custom software changes which problems are worth solving. The workflow outlives any one tool.",
  },
];

/* Three problems from the talk that were not worth starting before. */
const examples = [
  { line: "A tiny tool that was never worth building.", project: project("01") },
  { line: "A stream of information nobody could read every day.", project: project("03") },
  { line: "A research problem we would not have attempted ourselves.", project: project("05") },
];

/** The conclusion: what the five projects share, and the wider set of problems it makes worth attempting. */
export default function Conclusion() {
  return (
    <Slide
      label="Five projects, one way of working"
      notes="Two minutes. The five projects were the evidence; this is what they have in common and what it changes. Left, the working method, and I would carry these four into any of our projects: fix the intent and the evidence and leave the implementation open; keep context and decisions in files, so the repository, not the chat, is the memory; let the agent explore, and put the effort into verifying what matters, more of it as the models get stronger; and build the small tool the problem needs, because the workflow outlives the tool. Right, the consequence. The cost and the risk of starting unfamiliar or previously uneconomic work has fallen, so more problems become realistic candidates: a tiny tool that was never worth building, a stream nobody could read every day, a research problem we would not have attempted ourselves. That is the change in what we can attempt. The next slide is the question it leaves."
    >
      <SlideHeader kicker="Synthesis" title="Five projects, one way of working" />
      <div className="conclude">
        <div className="conclude__col">
          <span className="conclude__label">What the five projects share</span>
          <ol className="conclude__principles">
            {principles.map((p) => (
              <li key={p.head}>
                <strong>{p.head}</strong>
                <span>{p.body}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="conclude__col conclude__col--wide">
          <span className="conclude__label">What this changes</span>
          <h3 className="conclude__claim">The range of problems worth attempting is wider.</h3>
          <ul className="conclude__examples">
            {examples.map((e) => (
              <li key={e.project.number} className="conclude__example">
                <span className="conclude__example-line">{e.line}</span>
                <span className="conclude__example-ref">
                  {e.project.number} · {e.project.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Slide>
  );
}
