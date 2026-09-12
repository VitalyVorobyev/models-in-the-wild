import { Fragment } from "react";
import { Cell, HairlineTable } from "../components/HairlineTable";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { projects } from "../content/projects";

export default function FiveCapabilities() {
  return (
    <Slide
      label="Five Projects, Five Capabilities"
      notes="The sequence gradually expands what agentic programming means — from a personal knowledge system to mathematical research."
    >
      <SlideHeader kicker="Escalation" title="Five Projects, Five Capabilities" />

      <HairlineTable template="120px minmax(0, 2fr) minmax(0, 3fr)">
        {projects.map((entry) => (
          <Fragment key={entry.number}>
            <Cell variant="num">{entry.number}</Cell>
            <Cell variant="name">{entry.name}</Cell>
            <Cell variant="desc">{entry.capability}</Cell>
          </Fragment>
        ))}
      </HairlineTable>
    </Slide>
  );
}
