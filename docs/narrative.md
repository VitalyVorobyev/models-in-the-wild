# Current narrative

## The claim

This is not primarily a talk about faster coding.

> Frontier models can change the class and scale of problems that one engineer or a small
> team can attack — across research, knowledge work, communication, content, information
> filtering, and software.

The five weekend projects are evidence for that claim. The subject of the talk is the workflow
and mindset that made them possible, and what the same workflow could do across departments.

## Opening

Start with real artifacts, not definitions. Quickly show that all five projects exist and are
useful. State the claim. Then ask the implicit question: **how can one person make things
like this as weekend projects?**

The answer is not "better prompting". It is a workflow.

## Workflow spine

**Conversation → concept → durable context → agent execution → artifact → evidence → critique → iteration**

Important framing:

- Conversation/voice is for shaping the problem before implementation.
- Markdown docs, agent instructions and skills become the persistent context backbone.
- The repository is the durable memory; chats are transient.
- Give agents high freedom in implementation and exploration.
- Keep intent, invariants and evidence strict.
- Ask agents to disagree, investigate alternatives, and challenge weak assumptions.
- Stronger models should need less prompt trickery and micromanagement, not more.

A useful contrast slide:

| Rigid | Flexible |
|---|---|
| problem intent | implementation details |
| safety / constraints | architecture proposals |
| evidence standard | visual design |
| acceptance criteria | proactive improvements |

Key phrase, first stated here and returned to at the end:

> **Freedom to explore. Obligation to verify.**

## Five projects, five capabilities

The projects are presented in order of the capability they demonstrate, which is also an
escalation in scale — from a tool for one family to a research programme. They must not feel
like five versions of the same coding demo; each section uses its own shape.

| # | Project | Capability | What the agent does |
|---|---|---|---|
| 01 | Family Documents Organizer | **Organize** | turn a small messy corpus into a useful structure |
| 02 | CV Atlas | **Understand** | accumulate knowledge, relationships and narratives |
| 03 | CV Tech Radar | **Filter** | handle a continuous high-volume information stream |
| 04 | Deutsch-Atlas | **Create & operate** | build and maintain a large evidence-grounded content system |
| 05 | ScoreQuant | **Discover** | explore new technical and mathematical territory |

Atlas and Radar sit back-to-back on purpose: accumulated connected knowledge versus continuous
information-flow filtering. Deutsch-Atlas shows the progression from research evidence and
standards to a content-production ecosystem. ScoreQuant shows the escalation from a small
library request to a research workflow — with the explicit warning that model agreement is not
mathematical evidence.

Each section ends with a one-sentence company implication.

## Ending

The synthesis is a ladder, not a list of features:

**coding productivity → individual leverage → new kinds of personal tools → persistent
knowledge and information workflows → cross-department capability → R&D and discovery**

Final challenge to the audience:

> Do not ask only: "How can an LLM make my current work faster?"
> Ask: **"What useful thing do we currently not even attempt because it would take too much
> time, coordination or specialized implementation?"**

Tone throughout: practical and skeptical, not evangelical. The slides support the presenter and
leave room for live demos; they do not duplicate the websites.
