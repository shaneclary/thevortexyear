# Lesson Template (v2 — 6-minute / 9-lens format)

**Supersedes** the v1 template (long-form module template). v1 is preserved by name in pilot lessons that haven't been re-cut yet but new authoring uses this template.

Every one of the 1,404 lessons follows this exact shape. The shape is fixed because it's the *meta-skill* the course teaches: by week 5, students stop orienting and start absorbing.

---

## Header (one line, top of file)

```
Wk {NN} — Theme: {Theme name} — Lens {1–9}: {Lens name} — Module {A|B|C} ({Foundations|Mathematical|Practical})
Runtime: 6:00. Author: {name}. Status: {Draft|Org-reviewed|Recorded|Final}.
```

---

## Body sections (in order, every time)

### 0. Authoring notes (non-student-facing)

Two to four lines. What this lesson does, what it absolutely must not do, the canonical citations, and any flags for production. Stripped before publishing.

### 1. Outcome (one sentence)

> "By the end of these 6 minutes, the student can ____."

The verb is concrete: *trace*, *list*, *compute*, *recall*, *identify*, *defend*, *connect*. Not "understand" or "appreciate".

### 2. Hook (0:00–0:30)

A single visual + one sentence. Pulls the student in. The viewer who skims the first 10 seconds should know what they're about to learn.

### 3. Setup (0:30–1:00)

> "We're on lens {N} of 9 for {Theme}. Last lesson we ____. This lesson we ____."

The 30-second briefing. Locates the lesson in the week's spiral.

### 4. Body (1:00–4:30) — *3.5 minutes*

The lens-specific content. Different per lens, but the section *length* is the same. A scripted 3.5 minutes is roughly 500–550 words of host narration + visual cues.

For each lens, the body has a canonical sub-shape:

| Lens | Body sub-shape |
|------|----------------|
| 1 See | Diagram reveal → trace → silent linger → trace again with narration |
| 2 Count | Worked example, step by step on screen |
| 3 Build | Materials → step 1 → step 2 → step 3 → checkpoint |
| 4 Hear | Brief framing → primary-source quote (verbatim) → brief reflection |
| 5 Feel | Setup → contemplative pause → reading or reflection → invitation |
| 6 Apply | Use case introduction → demonstration → "this is one example, here's another" |
| 7 Compare | Mainstream framing → Rodin's framing → side-by-side comparison |
| 8 Defend | Steel-man the objection → the org's response → student rehearses |
| 9 Connect | Look back (1 prior lesson/week) → look forward (1 future week) → mental-map update |

### 5. Try it (4:30–5:30) — *60 seconds*

The student does something, even if small. Pause-and-do prompts work well. Examples:
- *Lens 1:* "Pause and draw the figure on a piece of paper before continuing."
- *Lens 2:* "Pause and reduce 247 to a digital root before I show you the answer."
- *Lens 4:* "Pause and write down the line from Rodin you'd want to remember."
- *Lens 8:* "Pause and say the response in your own words to a partner or to the camera."

### 6. Bridge (5:30–6:00)

> "Next lesson we'll meet the same idea through the lens of ____."

Closes the loop. Hands the student off to the next lens. End on the visual that lens N+1 opens with — visual continuity matters.

### 7. Production sidecar

Stripped before publishing; lives alongside the script for the producer:

```
Diagrams: D-NN, D-NN
Animations: A-NN
B-roll suggestions: ...
Caption care: terms with non-obvious spelling
Music cue: yes/no, motif if yes
Verbatim quote permissions: source key + permission note
```

---

## Lesson script length budget

A 6-minute lesson at typical narration pace is **~600–650 spoken words**. A typical script file should be ~1,200 words including production notes, diagram callouts, and the try-it / bridge / sidecar sections.

Scripts longer than ~1,500 words are usually trying to teach two things and should be split — the spiral is patient; what doesn't fit in lens N belongs in lens N+1.

---

## File layout

```
03_outline/
  weeks/
    wk04_doubling_circuit/
      mod_a/
        01_see.md
        02_count.md
        ...
        09_connect.md
      mod_b/
        01_see.md
        ...
      mod_c/
        ...
    wk05_halving_circuit/
      ...
```

One folder per week, three folders per week (one per module / lens), nine files per module folder. **Total: 52 × 3 × 9 = 1,404 files.** Build automation (linting, length checks, citation index extraction) operates over this tree.

---

## Quality gates before "Final"

A lesson script is not done until it passes:

1. **Outcome verifiable** — the verb in §1 can be checked by an exercise.
2. **Length on target** — body section is ~500–550 words, total ~600–650.
3. **Citations resolved** — every quote / concept reference points at a key in `01_sources/SOURCE_LIBRARY.md` or `01_sources/KEY_CONCEPTS.md`.
4. **Lens-coherent** — content is genuinely the lens it claims to be (count-it lessons actually do arithmetic; defend-it lessons actually engage objections, not avoid them).
5. **Hook + bridge match** — the bridge of lesson N visually matches the hook of lesson N+1.
6. **Production sidecar complete** — diagrams, music, captions filled in.
7. **Org review** — for first-quarter lessons especially, the org has signed off on framing and tone.
