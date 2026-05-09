Wk 03 — Theme: Digital Roots & Mod-9 — Lens 6: Apply — Module C (Practical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Digital-root reduction in actual Rodin Coil turn-counting. The canonical first build (Week 33) has 24 winding positions in 4 traversals = 96 turns. As you wind, you count. The reduction lets you check your count at intervals: turn 24 should reduce to 6, turn 48 to 3, turn 72 to 9, turn 96 to 6. If your hand-count and the expected digit-root disagree, you've miscounted. A real engineering use of the operation.

## 1. Outcome
By the end of these 6 minutes, the student can describe how digital-root reduction is used to verify turn counts during a Rodin Coil build.

## 2. Hook (0:00–0:30)
*[On screen: a Rodin Coil being wound. A turn-counter beside it ticking up: 1, 2, 3 ... 24. The 24 reduces to 6 on the Symbol.]*

> "Twenty-four turns. Reduce: six. The Symbol is your turn-count check."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply, practical edition. The operation lands in a real build — verifying turn counts during a coil winding. Six minutes."

## 4. Body (1:00–4:30)

> "The canonical first Rodin Coil build, Week 33, uses a single strand winding 24 times around a torus former. That's 24 winding positions per traversal. A typical first build does four full traversals — 96 turns total. As you wind, you count.
>
> Counting under tension, with wire in your hand and your eye on the next position, is harder than it sounds. By the third traversal, students lose count. Two turns ahead, two turns behind — the count drifts.
>
> Digital-root reduction is the check.
>
> *[pause]*
>
> Here's the rule. At each milestone — every 24 turns — your count should reduce to a specific digit-root.
>
> Turn 24. Reduce: 2 + 4 = 6. Vertex 6.
> Turn 48. Reduce: 4 + 8 = 12, then 1 + 2 = 3. Vertex 3.
> Turn 72. Reduce: 7 + 2 = 9. Vertex 9.
> Turn 96. Reduce: 9 + 6 = 15, then 1 + 5 = 6. Vertex 6.
>
> *[pause — show the four milestones on the Symbol with their vertex labels]*
>
> The milestone vertex sequence is *6, 3, 9, 6*. Memorise it. As you wind, every 24 turns, check: am I at vertex 6 (first traversal), or 3 (second), or 9 (third), or 6 (fourth)? If your count says you're at turn 50 and you mentally check — 5 + 0 = 5, not 3 — you know you're off by two turns somewhere. Stop. Recount. Find the error.
>
> *[pause]*
>
> This isn't a Marko-specific trick. Engineers have used digit-summing for batch verification for centuries — that's what *casting out nines* was for. We're applying the same technique to coil-winding milestones. The operation provides a quick check that a hand-count is on track.
>
> One nuance. The check works because *24 mod 9 = 6*. Adding 24 each milestone moves you 6 positions around the Symbol. The sequence 6 → 3 → 9 → 6 → 3 → 9 ... cycles. So the check is: am I at the right point in the cycle?
>
> *[pause]*
>
> A six-strand build (Week 35) uses a different multiple — six strands of 24 each, totalling 144 turns. The milestone reductions for 144 are different. We'll work them out at Week 35. For now: 24-turn milestone check produces the cycle 6, 3, 9, 6.
>
> *[pause]*
>
> The point of this lesson isn't that you need digit-roots to wind a coil. You don't. The point is that the operation we proved this week has *real engineering uses*. By the time you actually wind the coil in Week 33, this verification trick will be in your hand. It costs nothing to use; it catches at least one student per cohort from finishing a build with an off-by-two error in turn count."

## 5. Try it (4:30–5:30)
> "Pause. In your build log under *Builds*, write *Wk 33 verification: turn 24 → 6; turn 48 → 3; turn 72 → 9; turn 96 → 6.* The check is now on the page, ready for the build session. Sixty seconds."

*[Pause card on screen for 60 seconds.]*

> "Welcome back. The verification milestones are in your build log. They wait for Week 33."

## 6. Bridge (5:30–6:00)
> "Next lesson — Compare. We've shown the operation in a coil build. The next lens places it next to the historical *casting out nines* technique that accountants used for centuries. Same operation, older use case."

*[Closing card: "Lesson 6 of 9 — Apply. Next: Compare."]*

---

## 7. Production sidecar
- Diagrams: D-104 (the four-milestone check on the Symbol).
- Animations: A-56 — wind-and-check progression.
- B-roll: hand winding a coil with a turn counter.
- Caption care: numerals throughout; "vertex" lowercase.
- Music cue: precise, mechanical.
- Voice-pass note: concrete throughout. The lesson grounds an abstract operation in a specific build session.
