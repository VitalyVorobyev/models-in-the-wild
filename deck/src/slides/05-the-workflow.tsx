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
      notes="One click: 01–04 are up, 05–08 follow. Conversation and voice shape the problem before implementation. The repository is the durable memory; chats are transient."
    >
      <SlideHeader kicker="Workflow spine" title="The Workflow" />

      {/* Fragmented by row, not by card: eight separate reveals would turn one
          beat of the talk into eight clicks. The first row is not a fragment, so
          the slide never renders empty; the second row shares one
          data-fragment-index, which is how Reveal reveals a group at once. */}
      <Grid cols={4} style={{ marginTop: "80px" }}>
        {STEPS.map(([number, label, note], index) => (
          <div
            className={`card card--step${index >= 4 ? " fragment" : ""}`}
            data-fragment-index={index >= 4 ? 0 : undefined}
            key={number}
          >
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
