import { projectEvidence } from "./evidence";

const counts = projectEvidence.radar.digestCounts;
export const digestSelected = counts.Use + counts.Prototype + counts.Evaluate + counts.Watch;
// Verbatim excerpt, shortened at a sentence boundary. Full artifact and provenance stay in the evidence layer.
export const digestReason = `${projectEvidence.radar.digest.split("Reason: ")[1]?.split("\n  Action:")[0]?.split(". ")[0]}.`;
