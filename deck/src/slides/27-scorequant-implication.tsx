import Implication from "../components/Implication";

export default function ScoreQuantImplication() {
  return (
    <Implication
      label="Company Implication 05: Freedom to Explore, Obligation to Verify"
      number="05"
      notes="This expands the scope furthest: genuine R&D and discovery, not just implementation of known solutions. The point is not that AI can be trusted to do mathematics. The point is that a very small team can now run a surprisingly complete research loop — as long as verification is a first-class artifact, not a feeling."
      statement="Freedom to explore. Obligation to verify."
      today="Research questions wait for a specialist with a free quarter, and most are never asked."
      possibleNow="A small team running a complete loop — literature, hypotheses, derivation, implementation, experiments, adversarial review, counterexample search, formalization — with every step leaving evidence."
    />
  );
}
