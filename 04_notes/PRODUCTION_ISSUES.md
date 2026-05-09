# Production Issues — Things to Fix in a Curation Pass

Rolling list of issues found during production that should be resolved later, batched, rather than blocking forward progress.

## 2026-05-08 — Wk 1 Mod A audit against VOICE_GUIDE.md

The 9 lessons of Wk 1 Mod A were drafted before the voice guide existed. A spot-audit shows specific failures that need a retrofit pass:

### General slop indicators present
- **List fetish.** Every script defaults to numbered or bulleted prose where flowing prose would be tighter and more confident.
- **Throat-clearing transitions.** Phrases like *"Let's look at it together"*, *"Welcome back"*, *"Let me show you"* repeat across lessons. They feel hospitable on the page; on the screen they read as filler.
- **Be-verb dependence.** *"This is the lens that…"* / *"It's the lesson where…"* — should be rewritten with active subjects.
- **Faux-empathy.** *"That's not a threat — it's the math of attention"* (02_count) — strong line, but the framing *"that's not a threat"* drags. Cut the disclaimer.
- **Generic intensifiers.** *"completely"*, *"clearly"*, *"deliberately"* — cut on sight in pass 2.

### Specific lessons flagged

| File | Issue | Fix |
|---|---|---|
| 01_see.md | Body opens with *"Look at the wheel."* — strong. But then *"Four quarters, like a year of seasons."* uses a metaphor that doesn't earn its place. Cut or replace with a specific. | Curation pass 2 |
| 02_count.md | *"At a pace of…"* and *"In real time, slightly less than three hours…"* — the *"in real time"* is a tell. Cut. | Curation pass 2 |
| 03_build.md | *"Doesn't matter."* / *"Six minutes."* — these fragments work. But *"What matters is that it's only for this course"* immediately undercuts with *"What matters"* preachy framing. | Curation pass 2 |
| 04_hear.md | Mostly fine — Rodin carries 3.5 minutes. Host narration *"Listen the way you'd listen to someone telling you a story"* works. Hold. | OK as drafted |
| 05_feel.md | Strongest lesson of the nine. The pacing is honest. *"Wet stone. Held breath."* image isn't used yet — could be added in pass 2 to match Voice Guide's contemplative-imagery example. | Light pass 2 |
| 06_apply.md | The list-of-three structure is unavoidable here (three artefacts) — that's earned. But *"That is what 'I learned vortex-based mathematics' looks like"* lands hollow. Tighten. | Curation pass 2 |
| 07_compare.md | The four-doors framing works visually but reads list-y. Try a denser comparative paragraph. | Curation pass 2 |
| 08_defend.md | Fine. The calibrated-answer sentence is exactly the kind of voice the guide wants. **Use this lesson as the anchor for retrofitting.** | OK as drafted |
| 09_connect.md | The eight-lens recap-by-bullets is the worst voice violation in the module — explicit list of 8 numbered points. Re-cast as flowing prose that walks the student back through the week. | Curation pass 2 — priority |

### Retrofit decision

**Continue forward in the new voice; retrofit Mod A in a curation pass after Q1 ships.**

Reasoning:
- Mod A is structurally sound; only the voice is off.
- Stopping to rewrite 9 lessons before Mod B starts costs ~1 session and delays the spiral.
- Better to lock the voice in Mod B and forward, then return to Mod A with the voice already proven elsewhere.
- The voice retrofit is mechanical — strip slop, tighten verbs, cut hedge — and can be done in batch.

The Wk 1 Mod A files keep their `Status: Draft` flag; in a future session a curation pass marks them `Status: Voice-corrected`.

---

## (rolling — add issues below as they surface during production)
