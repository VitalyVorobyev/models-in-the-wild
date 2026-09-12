import Grid from "../components/Grid";
import Slide from "../components/Slide";

const APPLICATIONS = [
  "Shared knowledge",
  "Research synthesis",
  "Project handoffs",
  "Requirements",
  "Technical communication",
  "Decision support",
];

const LAST = "Cross-department collaboration";

export default function BeyondCoding() {
  return (
    <Slide
      label="Beyond Coding"
      notes="Return to the company. The same pattern supports shared knowledge, research synthesis, handoffs, requirements, technical communication, decision support and cross-department collaboration."
    >
      <div className="kicker">Think bigger than coding</div>
      <h2 className="title" style={{ maxWidth: "1500px" }}>
        Beyond Coding
      </h2>

      <div className="split split--wide-gap">
        <div className="col" style={{ gap: "32px" }}>
          <p className="card__label">From</p>
          <p className="quote">“How can AI help us write software faster?”</p>
          <p className="card__label" style={{ marginTop: "24px" }}>
            Toward
          </p>
          <p className="quote quote--strong">
            “Which parts of our R&D, communication, knowledge flow and decision making can be
            redesigned now that capable agents can work inside a persistent project context?”
          </p>
        </div>

        <Grid cols={2} gap={16}>
          {APPLICATIONS.map((item) => (
            <div className="chip-card" key={item}>
              {item}
            </div>
          ))}
          <div className="chip-card chip-card--wide">{LAST}</div>
        </Grid>
      </div>
    </Slide>
  );
}
