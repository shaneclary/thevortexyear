# Course Design v2 — Year-Long Spiral Curriculum

**Supersedes:** `COURSE_OUTLINE.md` (v1, three-track 36-module model). v1 is preserved as a concept-level reference and the pilot lessons in `pilots/` remain useful as examples of multi-angle teaching, but the canonical course structure from this point forward is v2.

---

## The shape

| Unit | Count | Duration | Total |
|------|-------|----------|-------|
| Lesson | 1,404 | 6 min | 8,424 min |
| Lessons per module | 9 | — | 54 min |
| Modules per week | 3 | — | 162 min (~2.7 hr) |
| Weeks | 52 | — | **140.4 hr of video** |

**Student commitment:** ~3 hours of structured study per week for one year. Realistic for a serious learner; not so demanding that completion rates collapse.

---

## The pedagogical principle

The course is built on three interlocking design choices:

### 1. The Three Lenses Per Week (replaces the v1 "tracks")
Each week treats **one theme** through **three lenses** — three modules that all illuminate the same concept from three different vantage points.

- **Lens A — Foundations.** Intuitive, visual, accessible. The "what is this thing?" lens.
- **Lens B — Mathematical.** Rigorous, derivation-heavy. The "how does it work?" lens.
- **Lens C — Practical.** Engineering, application, build. The "what does it do?" lens.

This means tracks aren't separate audiences sealed off from each other. Every student, every week, sees all three lenses. A beginner who only watches Lens A still gets a complete week; a builder who watches all three gets the integrated view. Students self-select density without losing context.

### 2. The Nine Angles Per Module (the fixed lens structure)
Inside each module, the same nine lessons fire in the same order. This is detailed in `NINE_LENS_FRAMEWORK.md`. The repetition isn't lazy — it's how mastery actually works. By week 4, students know how to learn each module without orientation; by week 12 they can predict where they're about to be challenged. Their cognitive bandwidth shifts from "what's coming?" to "what does this mean?"

### 3. The Spiral (52-week arc)
The 52 weeks are not 52 disjoint topics. They follow a deliberate spiral:

- **Q1 (weeks 1–13) — Foundations.** Introduce every canonical VBM object once. Build vocabulary.
- **Q2 (weeks 14–26) — The Geometric Turn.** From flat numbers to 3D structure. Torus, Decoqubit, Sanctified Mirrors.
- **Q3 (weeks 27–39) — Spiral Back & Engineering.** Revisit the deepest concepts (Doubling Circuit, Polar Pairs, 3-6-9) at higher depth, now with torus geometry available — and use that depth to teach the Rodin Coil and its applications.
- **Q4 (weeks 40–52) — Synthesis, Application, Mastery.** Cross-tradition connections, applications (DNA, propulsion, spirit-density), and the capstone.

About **5 of the 52 themes are explicit revisits** — same concept, second pass, different week, deeper. The 9-lens structure within each week handles in-concept repetition; cross-week revisits handle long-term retention.

The detailed week list lives in `52_WEEK_MAP.md`.

---

## Why this design wins on the three axes the org cares about

| Axis | How v2 delivers |
|------|-----------------|
| **Retention** | 9-lens repetition within each module + 5 explicit cross-quarter revisits + synthesis weeks at each quarter boundary. Concepts come back at the spaced intervals retention research validates. |
| **Engagement** | New theme every week → no slog. Three different lenses → mode-switching keeps attention fresh. The "you'll meet this again at Q3" promise creates anticipation, not boredom. |
| **Satisfaction** | Clear arc (Q1→Q2→Q3→Q4 has narrative gravity). Visible progress (52 named themes is a lot of named achievements). Mastery moments (Q3 revisits = "oh, I see this completely differently now"). Capstone closes the year with a tangible artefact. |

---

## How v2 absorbs v1

The v1 three-track outline (Foundations / Intermediate / Builder) had 36 modules. v2 doesn't throw that away — it **redistributes** it:

- Most v1 Track 1 modules become Lens A in their respective weeks.
- Most v1 Track 2 modules become Lens B.
- Most v1 Track 3 modules become Lens C.
- The three pilot lessons in `pilots/` are good *content templates* but are 27–60 min in length. Under v2 they'd each be split across the 9-lens structure of their week. **They remain valuable as reference; they need re-cutting before they ship.**

The v1 conceptual coverage is preserved; the v2 *delivery* is reshaped from 27–60 min linear lessons to 6 min × 9-lens spirals.

---

## Production reality check

This is a **140-hour video production**. Big numbers:

- **1,404 lessons to script.** At a pace of 5 lessons/day of full scripting, that's ~280 working days of writing. Realistic with 2–3 writers.
- **52 themes × ~5 unique diagrams each = ~260 diagrams.** Plus animations.
- **Each Lens C module needs a build / lab demo.** Roughly 156 demos. Needs an in-house build technician.
- **Recording.** At ~10 lessons/day per host, ~140 days of studio time. With multiple hosts (Rodin, Powell, others) this is parallelizable.

We should plan to ship in waves:
1. **Q1 (weeks 1–13) ships first.** Validates the format with real students before locking the rest. ~351 lessons.
2. **Q2–Q4 produced sequentially**, with student feedback from Q1 informing tightening of the 9-lens template before scale production starts.

---

## What's next

1. **Lock the 9-lens framework** — see `NINE_LENS_FRAMEWORK.md`. This is the format every one of 1,404 lessons will follow; getting it right matters.
2. **Lock the 52-week map** — see `52_WEEK_MAP.md`. Concept order and revisit placement.
3. **Re-cut the three pilot lessons** under the v2 structure as proof-of-shape.
4. **Pilot Q1 production** — script ~5 weeks (135 lessons) end-to-end before committing to the rest.
