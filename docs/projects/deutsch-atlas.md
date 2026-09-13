# Project 04 — Deutsch-Atlas

Capability shown: **Create & operate** — build and maintain a large, evidence-grounded
content and product system.

Public app: https://deutsch.vitavision.dev
Repository: https://github.com/VitalyVorobyev/deutsch-textbook
Source of the story: `docs/session-handoff-2026-09-12.md`, checked against the repository on
2026-09-12 (branch `fix/progress-read-recovery`, HEAD 2026-09-03).

## The progression

**research evidence → standards → authored corpus → editorial tooling → audio studio → real
learning product**

### Stage 1 — evidence before product

The project began with literature research: what are proven effective ways for an adult to
learn a language? The distilled principles became a `learning-science` skill whose reference
note carries a calibrated evidence verdict (strong / moderate / conditional) per principle,
with named sources — retrieval practice, spacing, feedback, comprehensible input marked
conditional.

Then the Goethe-Institut standards were added: word lists per level, grammar requirements,
DTZ structures, CEFR expectations. This is a verifiable content backbone, not model intuition
about what belongs at A2 or B1. Coverage against those lists is ratcheted by tests.

### Stage 2 — curriculum and content

From that foundation the system produces and maintains a learning plan, lessons, vocabulary
cards, grammar exercises, reading texts and listening material — 57 units across A1–B1.

### Stage 3 — editorial tooling

**Redaktion**, a separate editorial app over the same working tree: course overview, a
grammar atlas across levels, theme tracing (outcomes, grammar, materials, findings per topic),
a findings queue, and a view that keeps external-source coverage, internal inventory and
teaching depth apart. Its own guide is explicit that the number of findings is not a quality
score.

Once generation became cheap, maintaining coherence, quality and verifiable coverage became a
first-class problem.

### Stage 4 — audio studio

**Tonwerk**, a separate studio over a local Python engine: local TTS for voices, a local
sound model for ambience (never speech), ASR and speaker-verification checks on the output.
A 12-voice cast with seeds, style prompts and casting constraints gives recurring characters
distinct voices.

### Stage 5 — the learning product

FSRS flashcards; optional review of free-form written answers by a local model on the
learner's machine, advisory only; progress synchronization between devices through a
Cloudflare Worker with D1 and R2 (opaque encrypted-at-rest snapshots, accounts approved by
hand); explanatory prose in English and Russian, with Ukrainian arriving in waves.

The multilingual prose is not translation. Each half is independently authored from the
German, so explanations can refer to contrasts specific to the learner's native language.

Most importantly: Vitaly uses the system to learn German.

## What this project proves

> Start with evidence and standards, then let agents create inside that verified framework.

> Cheap generation moves the bottleneck from producing content to controlling quality,
> coverage and consistency.

Deutsch-Atlas is no longer one application; it resembles a small educational publishing and
production ecosystem.

## Company implication

The same pattern applies to technical training, onboarding, service knowledge, application
engineering, product education, sales training and internal documentation.

## Evidence (measured 2026-09-12)

| Fact | Source |
| --- | --- |
| Units A1 / A2 / B1: 12 / 25 / 20 (57) | `ls content/topics/{a1,a2,b1} \| wc -l` (2 files per unit) |
| 3,572 vocabulary entries in 129 files | `grep -hcE "^\s*-\s*(\{\s*)?de:" content/vocab/*.yaml` summed |
| 85 reading texts (17 / 43 / 25) | `ls content/reading/<level>/*.yaml \| wc -l` |
| 40 listening scenes with audio (10 / 21 / 9) | `ls content/listening/<level>/*.yaml \| wc -l` |
| Goethe Wortliste coverage 673/673 · 1449/1449 · 3416/3416; DTZ structures 93/93 · 300/300 · 164/164 | project `CLAUDE.md`, `docs/roadmap.md`; tripwired by `tests/published-claims.test.ts` |
| Evidence note with calibrated verdicts and named sources | `.agents/skills/learning-science/references/learning-principles.md` |
| Redaktion editorial app | `apps/redaktion/`, `docs/apps/redaktion.md`, ADR 0013 |
| Tonwerk audio studio; models pinned with licence and provenance fields | `apps/tonwerk/`, `tools/listening-studio/models.lock.json` |
| 12-voice cast | `data/listening-characters.yaml` |
| Local-model writing assistant, advisory only | `docs/adrs/0002-advisory-only-writing-assistant.md` |
| Cloudflare Worker + D1 + R2 sync | `wrangler.toml`, `worker/`, `docs/architecture/cloud-sync.md` |
| Independently authored explanation halves | `docs/adrs/0001-bilingual-explanation-halves.md` |
| 284 commits, 2026-07-09 → 2026-09-03 | `git rev-list --count HEAD`, `git log` |
| Market-stall scene approved 2026-08-02 against a seven-item checklist (accent, context, intelligibility, naturalness, pace, questions, speakers); no voice cloning, no reference audio | `data/audio-provenance/a1/ls-essen-einkaufen-01.json` |

Re-measured 2026-09-13 for v0.6 (`bun scripts/coverage.ts A1|A2|B1`, `bun scripts/structures.ts
A1|A2|B1`, the `ls`/`grep` counts above): unchanged.

## Do not claim

- "12 recurring characters with generated visual identities": the roster is a voice-casting
  roster, every profile is `draft-profile`, and no portrait is selected or approved. Say
  "a 12-voice cast".
- "Explanations in English, Russian and Ukrainian" as finished: EN and RU are complete; UK is
  arriving in file-scoped waves and falls back to EN.
- The local-model review is desktop/localhost only; it is hidden on the public site.
- Listening coverage is 40 scenes, not one per unit.
- Reading-text narration audio is not committed to the repository.

## Editorial evidence update

v0.5 has an actual Redaktion reference capture, committed approved market-stall audio, and an explicit Tonwerk screenshot gap. No missing finding or QA verdict is invented.
