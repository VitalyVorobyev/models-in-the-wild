import Implication from "../components/Implication";
import { projects } from "../content/projects";

export default function Implication05() {
  return (
    <Implication
      number="05"
      statement={projects[4]?.implication ?? ""}
      possibleNow="A method from another field, derived and implemented. A proof nobody on the team could write. A problem that looked like a year of a specialist's time, attempted in a week, with the evidence to say whether it held."
      notes="Thirty seconds. For an R&D team the change is which problems get started. Nobody here writes Lean proofs; nobody here had done this kind of optimization theory; the problem looked like a year of a specialist's time. It was attempted anyway, and the checks, not the model, decided what stood. The point is not that a model can be trusted to do mathematics. It is that a lack of expertise in the room is no longer the reason to leave a problem alone, provided the verification is real."
    />
  );
}
