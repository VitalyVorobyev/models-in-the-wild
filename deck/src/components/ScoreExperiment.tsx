import { useState } from "react";
import retention from "../assets/images/score-retention.svg";
import { scoreEvidence as data } from "../content/evidence";

const files = import.meta.glob("../assets/images/score/frame-*.svg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;
const frames = Object.keys(files)
  .sort()
  .map((key) => files[key]);

/**
 * The synthetic run on slide 23: a slider over the recorded optimizer states
 * (nothing interpolated), the retention plot beside it, and the three measured
 * numbers for the selected state.
 */
export default function SyntheticRun() {
  const [index, setIndex] = useState(0);
  const last = frames.length - 1;
  return (
    <div className="run">
      <div className="run__cells">
        <img
          src={frames[index]}
          alt={`The six cells and their seeds at recorded optimizer step ${data.steps[index]}`}
        />
        <div className="run__slider">
          <label htmlFor="score-step">optimizer step</label>
          <input
            id="score-step"
            type="range"
            min="0"
            max={last}
            value={index}
            onChange={(e) => setIndex(Number(e.target.value))}
          />
          <output>{data.steps[index]}</output>
        </div>
      </div>
      <div className="run__measure">
        <img
          src={retention}
          alt="Information kept by the hard cells on training and validation data, and the soft objective, over the optimizer steps"
        />
        <dl className="run__numbers">
          <div>
            <dt>kept at this step · training</dt>
            <dd>{data.trainHard[index]?.toFixed(3)}</dd>
          </div>
          <div>
            <dt>kept at this step · validation</dt>
            <dd>{data.validationHard[index]?.toFixed(3)}</dd>
          </div>
          <div>
            <dt>final solution · held-out data</dt>
            <dd>{data.testRetention.toFixed(3)}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
