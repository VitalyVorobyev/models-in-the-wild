import Implication from "../components/Implication";
import { projects } from "../content/projects";

export default function Implication05() {
  return (
    <Implication
      number="05"
      statement={projects[4]?.implication ?? ""}
      possibleNow="We can now seriously investigate problems we previously would not have attempted ourselves — and gather enough evidence to decide whether they deserve specialist effort."
      notes="Thirty seconds. For an R&D team the change is which problems get started. Nobody here writes Lean proofs; nobody here had done this kind of optimization theory; the problem looked like a year of a specialist's time. It was attempted anyway, and the checks, not the model, decided what stood. The point is not that a model can be trusted to do mathematics. It is that the cost and the risk of starting such a problem have fallen enough to find out whether it deserves specialist effort, provided the verification is real."
    />
  );
}
