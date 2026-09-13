import { useState } from "react";
import cloud from "../assets/images/score/cloud.svg";
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
export function ScoreProblem() {
  const [partition, setPartition] = useState(false);
  return (
    <div className="score-problem">
      <img
        src={partition ? frames[0] : cloud}
        alt={
          partition
            ? "Actual initial seeds and Voronoi partition in normalized score space"
            : "Synthetic two-dimensional Gaussian score sample"
        }
      />
      <div>
        <p className="math">s(x) = ∇θ log p(x | θ)</p>
        <p className="note">Score = sensitivity to a parameter</p>
        <div className="bin-strip">
          {Array.from({ length: data.source.bins }, (_, id) => id).map((i) => (
            <span
              key={`bin-${i}`}
              style={{
                background: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"][i],
              }}
            >
              bin {i + 1}
            </span>
          ))}
        </div>
        <button type="button" className="demo-control" onClick={() => setPartition(!partition)}>
          {partition ? "Show continuous sample" : "Add seeds and hard bins"}
        </button>
        <p className="caption">
          Synthetic Gaussian location · {data.source.bins} bins
          <br />
          Same sample; nearest-seed assignment
        </p>
      </div>
    </div>
  );
}
export function ScoreOptimization() {
  const [index, setIndex] = useState(0);
  return (
    <div className="optimization">
      <div>
        <img
          className="partition"
          src={frames[index]}
          alt={`Actual ScoreQuant partition at recorded step ${data.steps[index]}`}
        />
        <div className="slider">
          <label htmlFor="score-step">Recorded optimizer state</label>
          <input
            id="score-step"
            type="range"
            min="0"
            max={frames.length - 1}
            value={index}
            onChange={(e) => setIndex(Number(e.target.value))}
          />
          <output>{data.steps[index]}</output>
        </div>
      </div>
      <div className="optimization__metrics">
        <img
          src={retention}
          alt="Hard training and validation D-efficiency plotted separately from the soft optimization surrogate"
        />
        <dl>
          <div>
            <dt>Train hard · selected state</dt>
            <dd>{data.trainHard[index]?.toFixed(3)}</dd>
          </div>
          <div>
            <dt>Validation hard · selected state</dt>
            <dd>{data.validationHard[index]?.toFixed(3)}</dd>
          </div>
          <div>
            <dt>Held-out · final selected solution</dt>
            <dd>{data.testRetention.toFixed(3)}</dd>
          </div>
        </dl>
        <p className="caption">
          D-efficiency: geometric mean of normalized retention eigenvalues.
          <br />
          Real recorded states; no interpolated optimization. No global-optimum claim.
        </p>
      </div>
    </div>
  );
}
