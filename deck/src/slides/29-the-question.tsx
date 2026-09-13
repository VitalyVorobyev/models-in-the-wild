import Slide from "../components/Slide";

export default function TheQuestion() {
  return (
    <Slide
      label="The question"
      theme="dark"
      align="center"
      notes="One minute of framing, then the discussion. Leave this on the screen. The easy question is how a model makes today's work faster; every vendor answers it. The useful question is the other one. Ask for one thing per person: a workflow we do not attempt, its input, the standard the result would have to meet, and who would own it."
    >
      <div className="question">
        <span className="question__lead">
          Not only: how can a model make my current work faster?
        </span>
        <h2 className="statement question__ask">
          What useful thing do we not even attempt, because it would take too much time,
          coordination or specialised implementation?
        </h2>
      </div>
    </Slide>
  );
}
