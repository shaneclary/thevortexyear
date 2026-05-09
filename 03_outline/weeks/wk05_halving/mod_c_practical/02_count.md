Wk 05 — Theme: The Halving Circuit — Lens 2: Count — Module C (Practical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Reverse-direction build's turn count. Same numbers as the canonical Wk-33 build, but with the direction noted. The build log gets a *direction* field.

## 1. Outcome
Student can specify the turn count, direction, and verification milestones for a reverse-direction Rodin Coil.

## 2. Hook (0:00–0:30)
*[On screen: a build spec card with a direction field added.]*

> "Same 96 turns. Different direction. The build log gets a new field."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Counting reverse-direction. Six minutes."

## 4. Body (1:00–4:30)

> "The reverse-direction build has the same total turn count as the canonical doubling-direction build — 24 per traversal, 4 traversals, 96 turns. The wire length, build time, and cost are also the same.
>
> What changes: a *direction* field in the build log. Every coil entry now records *direction: doubling* or *direction: halving* alongside turns, wire length, and measurements.
>
> *[pause]*
>
> The verification milestones change too. For doubling-direction (Wk 33's canonical build), the milestones are at turns 24, 48, 72, 96, with digital roots 6, 3, 9, 6.
>
> For halving-direction, the milestones are at the same turns — but the vertex sequence visited is the halving sequence (1 → 5 → 7 → 8 → 4 → 2 → 1), so the cycle visiting at turn 6 is vertex 2 (the last cycle position), and at turn 12 is vertex 4 (the eleventh cycle position), etc.
>
> Actually, let me restate this carefully. The *digital roots* of the turn counts (24, 48, 72, 96) are the same — 6, 3, 9, 6 — regardless of direction. What differs is *which physical vertex on the torus* the wire is at after that many turns. Doubling wraps clockwise; halving wraps counter-clockwise. The total turn count modulates the same way.
>
> *[pause]*
>
> So for verification purposes, the milestone digital-root checks are *direction-independent*. Turn 24 has digital root 6; turn 48 has digital root 3; etc. — regardless of winding direction. The verification trick from Wk 3 Mod C Lesson 6 still works.
>
> What's *direction-specific* is the *physical position* of the wire after each milestone. The build log should record both: turn count and vertex position. *Turn 24, vertex 6 (DD) or vertex 2 (HD).* Different physical states; same turn-count digital root.
>
> *[pause]*
>
> Practical takeaway. When you wind a halving-direction coil in Wk 35, you'll use the *same milestone-digital-root trick* — confirming your turn count via *6, 3, 9, 6* — and additionally track *which vertex* the wire is at, which depends on direction.
>
> *[pause]*
>
> Two-coil comparison: if you wind one of each, your build log shows two entries with identical turn-counts, identical wire lengths, identical times, and *opposite* direction labels. The bench measurements that follow can then attribute differences to direction alone."

## 5. Try it (4:30–5:30)
> "Pause. In your build log under *Builds*, add a *direction* field to the Wk-33 spec. Then add a second spec entry for *Wk 35: halving-direction, 96 turns, same form, opposite winding*. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next lesson — Build. Tomorrow we mock up a reverse-direction wind on the torus former from Wk 4."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-144 (build spec card with direction field).
- Caption care: numerals; "DD" / "HD" abbreviations defined.
- Music cue: workshop.
