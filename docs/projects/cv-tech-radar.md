# Project 03 — CV Tech Radar

Capability shown: **Filter** — handle a continuous high-volume information stream.

Public site: https://vitalyvorobyev.github.io/cv-tech-radar/
Repository: https://github.com/VitalyVorobyev/cv-tech-radar
Source of the story: `docs/session-handoff-2026-09-12.md`, checked against the repository on
2026-09-12.

## Why it started

Computer vision is extremely active. The challenge is not storing knowledge; it is coping with
the continuous flow of new information. The radar is oriented toward practical technologies
that may be applicable, not general concepts or foundational research.

Key distinction:

- **CV Atlas** — accumulated knowledge and relationships.
- **CV Tech Radar** — incoming information flow and prioritization.

## What exists now

A daily pipeline, run by hand each morning:

1. fetch new arXiv `cs.CV` abstracts (about a hundred on a normal day);
2. deterministic whole-word keyword classification against 14 tracks, each with positive and
   negative keywords, plus global negative topics;
3. deterministic scoring (relevance, source priority, implementation, novelty, negative
   penalty) into a candidate queue capped at 25 items;
4. Claude, as curator, reads the queue and writes an explicit decision per candidate — ring
   (Use / Prototype / Evaluate / Watch / Ignore), tracks, reason, action, uncertainty;
5. the decisions are applied to SQLite in one transaction and a daily digest is rendered.

A second lane watches library releases across GitHub, PyPI, crates.io and npm.

## Why agents mattered

> Use deterministic machinery to reduce the search space; use frontier models where semantic
> judgment is actually valuable.

The keyword machinery is cheap and auditable; its false positives are logged with dates and fed
back into the scoring config. The frontier model is spent only on the shortlist. Five reusable
skills carry the procedures: curator, scoring evaluator, source onboarding, digest writer, and
an Atlas bridge that decides when a radar item deserves a durable Atlas note.

## Interesting development moment

The negative-topic list carries its own history: entries were added after early curation
sessions showed 14 false positives in 50 candidates. Later notes record single keywords that
fired on the wrong sense of a word ("in an autoregressive fashion") — evidence that the
deterministic layer is tuned from measured misses, not vibes.

## What this project proves

> Frontier models can become a continuously running intelligence layer between an information
> firehose and the humans who need to make decisions.

## Implication

The pattern generalizes to technology updates, competitors, patents, supplier changes, customer
feedback, support and service reports, quality events and internal experiment reports.

This is about increasing the **information bandwidth of an organization**, not programming
faster.

## Evidence (measured 2026-09-12)

| Fact | Source |
| --- | --- |
| Sources: arXiv `cs.CV` + manual entries only | `config/sources.yaml` |
| 14 tracks with positive and negative keywords | `config/topics.yaml` |
| Ring thresholds Use ≥90 / Prototype ≥80 / Evaluate ≥65 / Watch ≥45; candidate limit 25 per day | `config/scoring.yaml` |
| Items per day, late August 2026: 102, 97, 97, 120, 46, 54, 101, 92 | read-only query on `data/radar.sqlite` |
| 2,342 recorded decisions: Ignore 1,800 · Watch 356 · Evaluate 154 · Prototype 24 · Use 8 | read-only query on `radar_decisions` |
| 103 candidate files, 89 digests, last digest 2026-08-27 | `ls reports/candidates`, `ls reports/digests` |
| Claude is the curator; the human is the editor | `docs/daily-workflow.md` |
| 67 commits, 2026-05-10 → 2026-08-29 | `git rev-list --count HEAD`, `git log` |

## Do not claim

- The queue is capped at 25 candidates per day, not "10–15". The digest's non-Ignore section is
  usually shorter; say "a short ranked digest" and let the artifact speak.
- There is no scheduled job; the loop is run manually. "Continuously running" means daily, by
  hand.
- RSS and vendor feeds are planned, not implemented.
- A local Ollama model exists as an optional cheap relevance pre-filter; the semantic curation
  is Claude's.

## Tuning-round evidence (v0.6)

The 2026-07-28 batch comment in `config/negative_topics.yaml` records one full tuning round:
misses mined from the 25–27 July queues, twelve candidate phrases counted over the decided
corpus (1,200 Ignore / 269 kept), eight accepted as penalties, four rejected with the reason.
Recorded here for reference on 2026-09-13; the deck does not show it (implementation
detail). Decisions re-measured the same day: 2,346 total, 8 Use, 1,800 Ignore.

## Editorial evidence update

v0.5 shows one dated run (2026-08-27): intake, queue and digest are re-derived by scripts/export-project-evidence.py. The public board is cumulative. Filter feedback uses the recorded image-compression global-penalty change, with no improvement percentage.
