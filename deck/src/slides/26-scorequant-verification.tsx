import Grid from "../components/Grid";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { evidence, MEASURED } from "../content/evidence";

const { scorequant: sq } = evidence;

const STACK = [
  [
    "Literature audits",
    `${sq.literatureAudits.value} dated prior-art searches. A search gap is not novelty.`,
  ],
  [
    "Claims registry",
    `${sq.claims.value} claim nodes: ${sq.claimsProved.value} proved in-project, ${sq.claimsOpen.value} open, ${sq.claimsCounterexample.value} counterexamples.`,
  ],
  [
    "Counterexample registry",
    `${sq.counterexamples.value} exact fixtures, pinned by the test suite.`,
  ],
  [
    "Numerical evidence ledger",
    `${sq.ledgerRows.value} entries, each naming its claim and executable. "Nothing in this file is a proof."`,
  ],
  [
    "Independent audits",
    `${sq.audits.value} reports by fresh sessions that never saw the derivation.`,
  ],
  ["Lean 4 formalization", "Partial. Checks the stated mathematics, not the implementation."],
] as const;

export default function ScoreQuantVerification() {
  return (
    <Slide
      label="Agreement Is Not Evidence"
      notes="Five clicks after the first layer — the stack accumulates, which is the point. Every box is an artifact in the repository, measured on the date shown. The audits are the interesting part: several passed a theorem only after refuting its registered generality or forcing its assumptions to be stated. Lean checks the mathematics, not the Python, and is parked as partial. The manuscript is a draft with owner review pending. The lesson is the sentence at the bottom."
    >
      <SlideHeader kicker="ScoreQuant · the verification stack" title="Agreement Is Not Evidence" />

      <Grid cols={3} style={{ marginTop: "var(--gap-title)" }}>
        {STACK.map(([label, note], index) => (
          <div className={`card card--step${index > 0 ? " fragment" : ""}`} key={label}>
            <span className="card__name">{label}</span>
            <span className="card__step-note">{note}</span>
          </div>
        ))}
      </Grid>

      <p className="lead" style={{ maxWidth: "1500px", color: "var(--ink)", marginTop: "64px" }}>
        The stronger the agent, the more important verification becomes — not micromanagement.
      </p>
      <p className="evidence-line">
        library {sq.libraryVersion.value} · manuscript {sq.manuscript.value} · measured {MEASURED}
      </p>
    </Slide>
  );
}
