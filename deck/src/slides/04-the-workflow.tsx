import Grid from "../components/Grid";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";

const STEPS = [
  ["01", "Conversation", "voice, brainstorming"],
  ["02", "Concept", "crystallized in Markdown"],
  ["03", "Durable context", "docs, instructions, skills"],
  ["04", "Agent execution", "high freedom"],
  ["05", "Artifact", "something that runs"],
  ["06", "Evidence", "tests, measurements, sources"],
  ["07", "Critique", "agents asked to disagree"],
  ["08", "Iteration", "back to 01"],
] as const;

export default function TheWorkflow() {
  return (
    <Slide
      label="The Workflow"
      notes="Conversation and voice shape the problem before implementation. The repository is the durable memory; chats are transient."
    >
      <SlideHeader kicker="Workflow spine" title="The Workflow" />

      <Grid cols={4} style={{ marginTop: "80px" }}>
        {STEPS.map(([number, label, note]) => (
          <div className="card card--step" key={number}>
            <span className="card__num">{number}</span>
            <span className="card__name">{label}</span>
            <span className="card__step-note">{note}</span>
          </div>
        ))}
      </Grid>

      <p className="note" style={{ marginTop: "72px", maxWidth: "1300px" }}>
        The prompt is temporary. The repository becomes the memory.
      </p>
    </Slide>
  );
}
