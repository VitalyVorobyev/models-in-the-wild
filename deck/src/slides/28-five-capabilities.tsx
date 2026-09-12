import { Fragment } from "react";
import { Cell, HairlineTable } from "../components/HairlineTable";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { projects } from "../content/projects";

export default function FiveCapabilities() {
  return (
    <Slide
      label="Five Projects, Five Capabilities"
      notes="Not five coding demos. Five capabilities, in order of scale: organize, understand, filter, create and operate, discover. Think beyond coding — agentic workflows can help us organize, understand, filter, create, communicate and discover across the company."
    >
      <SlideHeader kicker="Five capabilities" title="Five Projects, Five Capabilities" />

      <HairlineTable template="120px minmax(0, 2fr) minmax(0, 1.4fr) minmax(0, 3fr)">
        {projects.map((entry) => (
          <Fragment key={entry.number}>
            <Cell variant="num">{entry.number}</Cell>
            <Cell variant="name">{entry.name}</Cell>
            <Cell variant="name">
              <span style={{ color: "var(--accent)" }}>{entry.capability}</span>
            </Cell>
            <Cell variant="desc">{entry.capabilityNote}</Cell>
          </Fragment>
        ))}
      </HairlineTable>
    </Slide>
  );
}
