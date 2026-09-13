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
    decisions: figure(
      "2,346",
      "cv-tech-radar: sqlite3 -readonly data/radar.sqlite 'select count(*) from radar_decisions'",
      "2026-09-13",
    ),
    use: figure("8", "cv-tech-radar: radar_decisions where ring = Use", "2026-09-13"),
    ignore: figure("1,800", "cv-tech-radar: radar_decisions where ring = Ignore", "2026-09-13"),
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
    exercises: figure(
      "2,311",
      "deutsch-textbook: grep -hcE '^  - id:' content/exercises/*/*.yaml, summed",
      "2026-09-13",
    ),
    exerciseSets: figure(
      "438",
      "deutsch-textbook: ls content/exercises/*/*.yaml | wc -l",
      "2026-09-13",
    ),
    wortliste: figure(
      "673 · 1,449 · 3,416",
      "deutsch-textbook: bun scripts/coverage.ts A1|A2|B1 → 673/673, 1449/1449, 3416/3416; tripwired by tests/published-claims.test.ts",
      "2026-09-13",
    ),
    dtzStructures: figure(
      "93 · 300 · 164",
      "deutsch-textbook: bun scripts/structures.ts A1|A2|B1 → 93/93, 300/300, 164/164 claimed",
      "2026-09-13",
    ),
    approvedOn: figure(
      "2026-08-02",
      "deutsch-textbook: data/audio-provenance/a1/ls-essen-einkaufen-01.json → approval.reviewed_at",
      "2026-09-13",
    ),
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
    audits: figure("21", "scorequant: ls agenticresearch/AUDITS | wc -l", "2026-09-13"),
    libraryVersion: figure("v0.2.0 (alpha)", "scorequant: pyproject.toml"),
    leanModules: figure(
      "21",
      "scorequant: ls agenticresearch/formal/ScoreQuantFormal/*.lean | wc -l",
      "2026-09-13",
    ),
    exchangeTheorem: figure(
      "D-EXCHANGE-TERMINATES",
      "scorequant: agenticresearch/claims/D-EXCHANGE-TERMINATES.json → status project_proved, formal_proof ScoreQuantFormal.d_exchange_terminates; KNOWN_RESULTS/04-d-optimality.md §D8",
      "2026-09-13",
    ),
    mainTheorem: figure(
      "D-EXCHANGE-IMPLIES-VORONOI · D-GLOBAL-GEOMETRIC-REALIZABILITY",
      "scorequant: agenticresearch/claims/D-EXCHANGE-IMPLIES-VORONOI.json → project_proved, formal_proof ScoreQuantFormal.exchange_voronoi, verified_by AUDIT-D-EXCHANGE-VORONOI; D-GLOBAL-GEOMETRIC-REALIZABILITY.json → project_proved; converse D-VORONOI-NOT-EXCHANGE → counterexample; KNOWN_RESULTS/04-d-optimality.md §D5, §D7",
      "2026-09-13",
    ),
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
  /** The whole scene; an earlier 12-second cut stopped mid-dialogue. */
  duration: 32,
  source: "deutsch-textbook/content/listening/a1/ls-essen-einkaufen-01.mp3",
  provenance: "data/audio-provenance/a1/ls-essen-einkaufen-01.json",
  command: "ffmpeg -i SOURCE -c:a libmp3lame -q:a 3 market-stall.mp3; ffprobe duration → 32.39 s",
  models:
    "deutsch-textbook/tools/listening-studio/models.lock.json: qwen_tts, stable_audio_sfx, asr (whisper-large-v3-turbo), speaker_qa (wavlm-base-plus-sv)",
  measured: "2026-09-13",
};
