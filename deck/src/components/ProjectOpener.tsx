import type { ReactNode } from "react";
import type { Project } from "../content/projects";
import ExternalLink from "./ExternalLink";
import Slide from "./Slide";

interface ProjectOpenerProps {
  project: Project;
  notes: string;
  /** The hero: a screenshot or a composition, filling the right column. */
  children: ReactNode;
}

/**
 * The dark slide each project starts on (v0.6): name, subtitle, link and the
 * project's own hero in one frame, instead of a title card followed by a
 * screenshot. The kicker names the capability, which is the deck's real order.
 */
export default function ProjectOpener({ project, notes, children }: ProjectOpenerProps) {
  return (
    <Slide label={project.name} theme="dark" notes={notes}>
      <div className="opener-hero">
        <div className="opener-hero__text">
          <div className="kicker kicker--dark">
            Project {project.number} · {project.capability}
          </div>
          <div className="opener__block">
            <h2 className="display opener-hero__title">{project.name}</h2>
            <p className="subtitle" style={{ color: "var(--dark-muted)" }}>
              {project.subtitle}
            </p>
          </div>
          <div className="opener-hero__foot">
            {project.link && (
              <ExternalLink href={project.link.href} className="mono-link">
                {project.link.label} ↗
              </ExternalLink>
            )}
            {project.origin && (
              <span className="opener-hero__origin">
                after the{" "}
                <ExternalLink href={project.origin.href}>{project.origin.label} ↗</ExternalLink>
              </span>
            )}
            {project.note && <span className="chip">{project.note}</span>}
          </div>
        </div>
        <div className="opener-hero__visual">{children}</div>
      </div>
    </Slide>
  );
}
