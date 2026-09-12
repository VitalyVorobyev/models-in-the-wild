import Slide from "../components/Slide";

export default function TheQuestion() {
  return (
    <Slide
      label="The Question"
      align="center"
      notes="Let the question sit. The answer is not better prompting — it is a workflow."
    >
      <div className="kicker">The question</div>
      <h2 className="statement" style={{ marginTop: "32px", maxWidth: "1500px" }}>
        How can one person build things like this as weekend work?
      </h2>
      <p
        className="subtitle"
        style={{ color: "var(--muted)", marginTop: "var(--gap-title)", maxWidth: "1100px" }}
      >
        Not better prompting. A workflow.
      </p>
    </Slide>
  );
}
