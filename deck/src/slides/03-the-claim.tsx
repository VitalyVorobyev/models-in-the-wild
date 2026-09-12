import Slide from "../components/Slide";

export default function TheClaim() {
  return (
    <Slide
      label="The Claim"
      theme="accent"
      align="between"
      notes="State the thesis before the evidence. This is not a talk about writing software faster. The claim is that frontier models change the class and scale of problems one engineer or a small team can attack — and the five projects are the evidence, not the subject."
    >
      <div className="kicker kicker--accent">The claim</div>

      <h2 className="statement" style={{ color: "var(--accent-fg)", maxWidth: "1600px" }}>
        Not faster coding. A larger class of problems one engineer or a small team can attack.
      </h2>

      <p
        className="subtitle"
        style={{ color: "var(--accent-muted)", maxWidth: "1500px", marginTop: 0 }}
      >
        Research, knowledge work, communication, content, information filtering — and software.
      </p>
    </Slide>
  );
}
