import Slide from "../components/Slide";
import VitavisionLogo from "../components/VitavisionLogo";

export default function Title() {
  return (
    <Slide
      label="Title"
      theme="dark"
      align="between"
      notes="Set the frame: this is not a showcase of five side projects. The projects are evidence for a broader idea about how R&D work can be organized."
    >
      <div className="opener__head">
        <div className="opener__logo">
          <VitavisionLogo variant="mark" />
        </div>
        <span className="kicker kicker--dark">Internal R&D workshop · 60 min</span>
      </div>

      <div className="opener__block opener__block--title">
        <h1 className="display" style={{ maxWidth: "1400px" }}>
          Frontier Models in the Wild
        </h1>
        <p className="subtitle" style={{ color: "var(--dark-muted)" }}>
          Five weekend projects, and a different way to think about R&D work.
        </p>
      </div>

      <div className="opener__foot mono-meta">
        <span>Vitaly Vorobyev</span>
        <span>vitavision.dev</span>
      </div>
    </Slide>
  );
}
