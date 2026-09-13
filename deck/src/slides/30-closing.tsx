import ExternalLink from "../components/ExternalLink";
import Slide from "../components/Slide";

export default function Closing() {
  return (
    <Slide
      label="Closing"
      theme="dark"
      align="between"
      notes="Thirty seconds. The deck itself was made the way the talk describes: a brief and a narrative written first, one file per project with its evidence and a list of what not to claim, a slide map as the contract, then the slides; every number on a slide carries the command that measured it and the date. The repository is public; the slides are online. Thank you."
    >
      <div className="kicker">Frontier Models in the Wild</div>
      <div className="closing">
        <h2 className="statement statement--closing">This deck was built the same way.</h2>
        <ol className="closing__steps">
          <li>a brief and a narrative, written first</li>
          <li>one file per project: the evidence, and what not to claim</li>
          <li>a slide map as the contract, then the slides</li>
          <li>every number on a slide carries the command that measured it, and the date</li>
        </ol>
      </div>
      <div className="closing__links">
        <ExternalLink href="https://github.com/VitalyVorobyev/models-in-the-wild">
          github.com/VitalyVorobyev/models-in-the-wild ↗
        </ExternalLink>
        <ExternalLink href="https://vitalyvorobyev.github.io/models-in-the-wild/">
          vitalyvorobyev.github.io/models-in-the-wild ↗
        </ExternalLink>
      </div>
    </Slide>
  );
}
