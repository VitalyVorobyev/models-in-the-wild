import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";

const principles = [
  {
    head: "The frame is rigid, the implementation is flexible",
    body: "Intent, standards and evidence are written first; the agent works inside them and is free about the rest.",
  },
  {
    head: "Every step leaves a file",
    body: "Instructions, findings, audits, provenance: a person reads files, not chat, and the repository is the memory.",
  },
  {
    head: "Verification grows with capability",
    body: "The stronger the model, the more the checking matters: tests, coverage, independent audits, machine-checked proofs.",
  },
  {
    head: "Small custom software is cheap; the workflow is the asset",
    body: "Tools are built for one task and rebuilt when the task changes. What is kept is the way of working.",
  },
];

const openings = [
  {
    verb: "Explore",
    body: "Territory where we lack the expertise: a method from another field, a formal proof, a literature we have not read.",
  },
  {
    verb: "Learn",
    body: "A body of documents we could not keep up with becomes an atlas we navigate; a stream too wide to read is filtered every morning.",
  },
  {
    verb: "Create",
    body: "Content and tooling systems built and kept coherent inside a verified frame, by a team of two, in daily use.",
  },
];

/** The conclusion: not five tools, one way of working, and a wider idea of what is possible. */
export default function Conclusion() {
  return (
    <Slide
      label="Explore, learn and create at the same time"
      notes="Two minutes. The five projects were the evidence; this is the conclusion. Left, what they have in common, and these are the principles I would carry into any of our work: a rigid frame and a flexible implementation; every step leaves a file; verification grows with the model's capability; the software is disposable and the workflow is the durable asset. Right, what becomes possible: the same person can explore, learn and create at the same time, in territory where they are not the expert. That is the change in what we can attempt, and the next slide is the question it leaves."
    >
      <SlideHeader kicker="Synthesis" title="Explore, learn and create at the same time" />
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
        <div className="conclude__col conclude__col--open">
          <span className="conclude__label">What becomes possible</span>
          <div className="conclude__openings">
            {openings.map((o) => (
              <div key={o.verb} className="conclude__opening">
                <strong>{o.verb}</strong>
                <span>{o.body}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="conclude__rule">
        Not five tools: one way of working, and a wider idea of what we can attempt.
      </p>
    </Slide>
  );
}
