import Implication from "../components/Implication";
import { projects } from "../content/projects";

export default function Implication04() {
  return (
    <Implication
      number="04"
      statement={projects[3]?.implication ?? ""}
      possibleNow="Technical training, onboarding, service knowledge, product education, internal documentation: the standard first, then generated material that is checked for coverage and consistency, not just produced."
      notes="Thirty seconds. Generation is the cheap part. What made this course trustworthy is the frame around it: research with calibrated verdicts, published standards, coverage that a test enforces, and tools that keep the corpus honest. Anywhere we maintain a body of teaching or reference material, the same order applies: standard first, generation inside it, control on top."
    />
  );
}
