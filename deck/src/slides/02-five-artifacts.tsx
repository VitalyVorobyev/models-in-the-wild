import ExternalLink from "../components/ExternalLink";
import Grid from "../components/Grid";
import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { projects } from "../content/projects";

export default function FiveArtifacts() {
  return (
    <Slide
      label="Five Artifacts"
      notes="Artifacts first, no definitions. All five exist and are in use. Drop real screenshots into the slots."
    >
      <SlideHeader kicker="Artifacts first" title="Five Artifacts" />

      <Grid cols={5} fill style={{ marginTop: "var(--gap-title)" }}>
        {projects.map((project) => (
          <div className="card card--clip" key={project.name}>
            <div style={{ height: "220px" }}>
              <ImageSlot id={project.montageSlot} placeholder={`${project.name} screenshot`} />
            </div>
            <div className="card__body">
              <span className="card__num">{project.number}</span>
              <h3 className="card__name">{project.name}</h3>
              <p className="card__note">{project.oneLiner}</p>
              <div className="card__foot">
                {project.link ? (
                  <ExternalLink href={project.link.href}>{project.montageLabel}</ExternalLink>
                ) : (
                  <span style={{ color: "var(--muted)" }}>{project.montageLabel}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </Grid>
    </Slide>
  );
}
