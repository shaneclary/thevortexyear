# Production Rules — Lesson Authoring Constraints

These are the rules every one of the 1,404 lessons must obey. They make the course consistent across many sessions, many authors, and across spiral revisits.

## ⓪. Voice (read first, every session)

**Before producing any lesson, read `VOICE_GUIDE.md`.** It is the bar. A lesson that meets every other rule but speaks in AI slop is a failed lesson and gets sent back. Specifically:

- Verbs do the work; cut be-verb crutches.
- Concrete beats abstract; specifics over categories.
- One reader, addressed directly. Trust them.
- Cut throat-clearing, false suspense, list fetish, AI-isms, faux-empathy.
- Run the one-pass test (`VOICE_GUIDE.md` §"The one-pass test") before marking a lesson drafted.

## A. Format (non-negotiable)

1. Every lesson follows `LESSON_TEMPLATE.md` exactly: header line, sections 0–7 in order.
2. Body section (§4): 500–550 spoken words. Total file ~1,200 words including production sidecar.
3. Hook (§2): 0:00–0:30. One sentence + one visual.
4. Setup (§3): 0:30–1:00. "Lens N of 9 for {Theme}. Last lesson we ___. This lesson we ___."
5. Body (§4): 1:00–4:30 (3.5 min, 500-550 words).
6. Try it (§5): 4:30–5:30 (60 sec). Pause card. Student does something on paper.
7. Bridge (§6): 5:30–6:00. Explicit name of the next lesson and its lens.

## B. Continuity (mandatory)

8. **Hook visual continuity:** lesson N's hook visual must visually echo lesson N-1's bridge. Note the carry-over in §7 (Production sidecar).
9. **Bridge naming:** lesson N's bridge must name lesson N+1 by lens ("Next: Count") and by what it does in one phrase. No vague "see you next time."
10. **Module bridges:** Lens 9 of any module names Module-next-up explicitly ("Module B starts with Lens 1 — See — and we open with…").
11. **Week bridges:** Lens 9 of Mod C names the next week's theme.

## C. Terminology (canonical)

12. Use canonical spellings from `01_sources/KEY_CONCEPTS.md`. Where multiple variants exist (Decoqubit / DecaQubit, ABHA / Abha), use the canonical form **with `[ORG-REVIEW]` flagged in the production sidecar** until the org ratifies.
13. First use of any named concept per lesson: capitalised exactly per `KEY_CONCEPTS.md`.
14. "Marko Rodin" full name on first reference per lesson; "Rodin" thereafter. Same for "Randy Powell" → "Powell".

## D. Citations (mandatory)

15. Every primary-source quote in §4 carries a source key (P1-1, P1-13, etc.) referencing `01_sources/SOURCE_LIBRARY.md`.
16. Every paraphrased Rodin or Powell line carries `[ORG-REVIEW]` until the org confirms exact wording.
17. Lens 4 (Hear from Marko) lessons always carry `[ORG-CLIP]` in the sidecar — production cannot record without org-supplied verbatim audio/clip.

## E. Lens-specific rules

18. **Lens 1 (See):** at least one diagram callout `[DIAGRAM: D-NN]` referencing `05_assets/DIAGRAM_INVENTORY.md`.
19. **Lens 2 (Count):** at least one numerical operation the student can verify on paper.
20. **Lens 3 (Build):** student produces a tangible artefact (drawing, list, photo, simple object).
21. **Lens 4 (Hear):** primary-source quote framed by ≤90 sec of host narration. Host visible only as inset during the clip.
22. **Lens 5 (Feel):** narration paced 30% slower than other lenses. Pauses written in. May have no music.
23. **Lens 6 (Apply):** at least one concrete real-world use case.
24. **Lens 7 (Compare):** explicitly names mainstream vocabulary alongside Rodin vocabulary.
25. **Lens 8 (Defend):** uses the calibrated-answer template established in `wk01/mod_a/08_defend.md`. Tone: respectful, specific, never dismissive of the questioner.
26. **Lens 9 (Connect):** includes (a) recap of prior 8 lessons in this module, (b) bridge to next module or week, (c) location on the 52-week spiral progress bar (D-27).

## F. Spiral revisit weeks (★)

Spiral revisit weeks are 27, 28, 29, 40, 41. In these weeks:

27. Lens 1 (See) must explicitly contrast "what you saw at first appearance" vs. "what you see now."
28. Lens 9 (Connect) must call back to the *original week number* of the concept ("In Week 4 you saw the Doubling Circuit; today we returned to it with torus geometry available…").
29. The student's notebook entry for the revisit week should sit alongside their original entry — production should ensure the Build lesson (Lens 3) prompts this.

## G. Quality gates (hard stops)

A lesson is *not* drafted until:

30. Every section is filled (no `TODO`, no `[lorem]`).
31. Body word count is in 500–550.
32. All `[ORG-REVIEW]` / `[ORG-CLIP]` / `[ORG-SUPPLY]` / `[ORG-INPUT]` flags carry context (which decision is needed).
33. The matching cell in `quarters/Q{N}_outline.md` is fully expressed in the script.
34. Continuity rule B-8 (hook-bridge match) is explicit in §7.

## H. Production discipline

35. Write lessons in cursor order from `PRODUCTION_TRACKER.md`. Never jump ahead.
36. After each lesson is written, update the cursor and the recent-completions log in `PRODUCTION_TRACKER.md`.
37. Where multiple lessons can be written in parallel within one session (independent files), batch the `Write` tool calls in a single message. Do not waste tool-call rounds.
38. End each session by leaving the cursor pointing at the *next* lesson, with an explicit "next up: WXX-MX-LX" line.

## I. Limits — what stops a session

39. Output budget reached for the response.
40. A `[ORG-INPUT]` blocks meaningful content (e.g., week 38 Spirit Density Mapping math is `[ORG-INPUT]` — *write the lesson with placeholders*; do not stall).
41. A discovered framework error that would require fixing prior lessons. In this case, document the issue in `04_notes/PRODUCTION_ISSUES.md` and continue at next clean point.

## J. Resumption

42. The next session reads `PRODUCTION_TRACKER.md` cursor, opens the matching `Q{N}_outline.md` cell and the surrounding lessons (N-1 for continuity, N+1 to plan bridge), then produces.
