/*
 * Every number a slide shows, with where it came from.
 *
 * The rule (CLAUDE.md, skills/deck-authoring): a figure on a slide is measured
 * by a command in the project it describes, not remembered from a conversation.
 * Each entry records that command or file and the date it was run, so a stale
 * number can be re-derived rather than argued about. Update `MEASURED` and the
 * values together.
 *
 * Nothing here is a test. There are no tests in this deck; if one is wanted,
 * it should assert that every entry has a non-empty `source`.
 */

export const MEASURED = "2026-09-12";

interface Figure {
  value: string;
  /** Command or path, run in the project's own repository. */
  source: string;
  /** Set when a figure was re-measured after MEASURED. */
  measured?: string;
}

const figure = (value: string, source: string, measured?: string): Figure => ({
  value,
  source,
  measured,
});

export const evidence = {
  familyDocs: {
    records: figure(
      "69",
      "FFB: python3 -c \"import json; print(len(json.load(open('documents.index.json'))))\"",
      "2026-09-13",
    ),
    categories: figure("18", "FFB: ls 01_ready_pdfs | wc -l", "2026-09-13"),
  },
  atlas: {
    algorithms: figure("52", "vitavision: ls content/algorithms | wc -l"),
    concepts: figure("35", "vitavision: ls content/concepts | wc -l"),
    models: figure("50", "vitavision: ls content/models | wc -l"),
    papers: figure("145", "vitavision: docs/papers/index.yaml entries"),
  },
  radar: {
    abstractsPerDay: figure(
      "≈100",
      "cv-tech-radar: items per day in data/radar.sqlite, late Aug 2026: 102, 97, 97, 120, 46, 54, 101, 92",
    ),
    tracks: figure("14", "cv-tech-radar: config/topics.yaml"),
    candidateCap: figure("25", "cv-tech-radar: config/scoring.yaml candidate limit"),
    decisions: figure("2,342", "cv-tech-radar: count of radar_decisions in data/radar.sqlite"),
    use: figure("8", "cv-tech-radar: radar_decisions where ring = Use"),
    ignore: figure("1,800", "cv-tech-radar: radar_decisions where ring = Ignore"),
    since: figure("May 2026", "cv-tech-radar: git log --reverse, first commit 2026-05-10"),
  },
  deutsch: {
    units: figure("57", "deutsch-textbook: ls content/topics/{a1,a2,b1} | wc -l → 12 + 25 + 20"),
    vocabulary: figure(
      "3,572",
      'deutsch-textbook: grep -hcE "^\\s*-\\s*(\\{\\s*)?de:" content/vocab/*.yaml, summed',
    ),
    readingTexts: figure("85", "deutsch-textbook: ls content/reading/*/*.yaml | wc -l"),
    listeningScenes: figure("40", "deutsch-textbook: ls content/listening/*/*.yaml | wc -l"),
    cast: figure("12", "deutsch-textbook: data/listening-characters.yaml"),
  },
  scorequant: {
    literatureAudits: figure("19", "scorequant: ls agenticresearch/LITERATURE/audits | wc -l"),
    claims: figure("137", "scorequant: ls agenticresearch/claims/*.json | wc -l"),
    claimsProved: figure("65", "scorequant: claims with status project_proved"),
    claimsOpen: figure("27", "scorequant: claims with status open"),
    claimsCounterexample: figure("12", "scorequant: claims with status counterexample"),
    counterexamples: figure("34", "scorequant: ls agenticresearch/COUNTEREXAMPLES/*.json | wc -l"),
    ledgerRows: figure(
      "82",
      'scorequant: grep -E "^\\| N-" agenticresearch/NUMERICAL_EVIDENCE.md | wc -l',
    ),
    audits: figure("20", "scorequant: ls agenticresearch/AUDITS | wc -l"),
    libraryVersion: figure("v0.2.0 (alpha)", "scorequant: pyproject.toml"),
    manuscript: figure(
      "draft v10, owner review pending",
      "scorequant: agenticresearch/manuscripts/README.md",
    ),
  },
} as const;

// Structured measurements and source excerpts used by the visual revision.
// Reproduce with scripts/export-project-evidence.py and scripts/export-scorequant.py.
export { default as projectEvidence } from "./generated/projects.json";
export { default as scoreEvidence } from "./generated/scorequant.json";
export const audioEvidence = {
  duration: 12,
  source: "deutsch-textbook/content/listening/a1/ls-essen-einkaufen-01.mp3",
  provenance: "data/audio-provenance/a1/ls-essen-einkaufen-01.json",
  command: "ffmpeg -i SOURCE -t 12 -c:a libmp3lame -q:a 3 market-stall.mp3; ffprobe duration",
  measured: "2026-09-12",
};
