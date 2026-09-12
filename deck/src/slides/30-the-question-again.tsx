import Slide from "../components/Slide";

export default function TheQuestionAgain() {
  return (
    <Slide
      label="The Question to Take Home"
      align="center"
      notes="Bookend to slide 4. Let it sit, as before. Then open the floor."
    >
      <div className="kicker">The question to take home</div>
      <p className="quote" style={{ marginTop: "32px", maxWidth: "1400px" }}>
        Not only: “How can an LLM make my current work faster?”
      </p>
      <h2 className="statement" style={{ marginTop: "40px", maxWidth: "1700px" }}>
        What useful thing do we not even attempt, because it would take too much time, coordination
        or specialised implementation?
      </h2>
    </Slide>
  );
}
