import Slide from "../components/Slide";
export default function Page() {
  return (
    <Slide
      label="The question"
      notes="1 minute framing, then 10 minutes discussion. Leave this question visible. Ask for one neglected workflow, its input artifact, its evidence standard and its owner. No closing slide follows it."
      className="editorial"
      align="center"
    >
      <h2 className="statement final-question">
        What useful thing do we not even attempt because it would take too much time, coordination
        or specialised implementation?
      </h2>
    </Slide>
  );
}
