Wk 15 — Theme: The Rodin Number Map (2D) — Lens 8: Defend — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft. **`[ORG-REVIEW]`**

---

## 0. Authoring notes
Forty-fourth Defend. The 24 is not arbitrary — show the LCM, more formally than Mod A's version. Mod A introduced the rationale; Mod B proves it as a theorem.

## 1. Outcome
Student can prove the dimensions theorem: the minimal grid hosting both the doubling cycle and the Fibonacci-mod-9 sequence has dimensions 6 × 24.

## 2. Hook (0:00–0:30)
*[A clean theorem statement on a blackboard, with a proof sketch beneath it.]*

> "Theorem. Six rows. Twenty-four columns. Forced. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 8 of 9. Prove the dimensions theorem."

## 4. Body (1:00–4:30)

> "Mod A introduced the LCM rationale informally. Mod B proves it as a theorem.
>
> *[pause]*
>
> *Theorem (Dimensions of the Rodin Number Map).* Let A be a 2D grid hosting both the cyclic action of multiplication by 2 on ℤ/9ℤ (period 6) and the Fibonacci recurrence mod 9 (period 24). The minimal dimensions of A are 6 × 24.
>
> *[pause]*
>
> *Proof.*
>
> *Direction 1 — necessity (the grid cannot be smaller).*
>
> *Sub-claim 1a.* The grid must have at least 6 rows.
>
> *Sub-proof.* The doubling action on ℤ/9ℤ has orbit length 6 (Wk 4). To display the orbit without truncation, the grid must contain at least 6 row-positions. A grid with fewer than 6 rows omits at least one orbit value. ✓
>
> *Sub-claim 1b.* The grid must have at least 24 columns.
>
> *Sub-proof.* The Fibonacci-mod-9 sequence has period 24 (Wk 11). To display the sequence without truncation, the grid must contain at least 24 column-positions. A grid with fewer than 24 columns omits at least one sequence value. ✓
>
> Combining: the grid must have at least 6 rows and at least 24 columns. *Necessary minimum: 6 × 24 = 144 cells.*
>
> *Direction 2 — sufficiency (the grid does not need to be larger).*
>
> *Sub-claim 2a.* A grid with exactly 6 rows hosts the doubling orbit completely.
>
> *Sub-proof.* The orbit has 6 distinct values, each occurring once per row. With 6 rows, each value occupies one row. ✓
>
> *Sub-claim 2b.* A grid with exactly 24 columns hosts the Fibonacci-mod-9 sequence completely.
>
> *Sub-proof.* The sequence has period 24, so columns 0 through 23 contain the full cycle. Column 24 would equal column 0 by periodicity, providing no new information. ✓
>
> Combining: a 6 × 24 grid hosts both orbits without truncation and without redundancy. *Sufficient maximum (before redundancy): 6 × 24 = 144 cells.*
>
> Necessary minimum and sufficient maximum coincide at 6 × 24. The minimal grid hosting both structures is exactly 6 × 24.
>
> *Q.E.D.*
>
> *[pause]*
>
> *Generalisation lemma.* For any pair of cyclic actions on a finite set, with periods p₁ and p₂, the minimal grid hosting both has dimensions p₁ × p₂ (when the actions act on independent axes). The total cell count is the product, not the LCM.
>
> *Note.* Mod A's framing in terms of LCM is correct *for* the cell count along a single axis when the periodicities act on the same axis. When the periodicities act on *different* axes (vertical vs horizontal), the dimensions multiply and total cells are p₁ × p₂. For the Number Map: 6 × 24 = 144.
>
> *[pause]*
>
> *Practical implication.* Changing the modulus changes the dimensions:
>
> Mod 7: doubling period 3, Fibonacci-mod-7 period 16. Grid: 3 × 16 = 48 cells.
>
> Mod 11: doubling period 10, Fibonacci-mod-11 period 10. Grid: 10 × 10 = 100 cells.
>
> Mod 13: doubling period 12, Fibonacci-mod-13 period 28. Grid: 12 × 28 = 336 cells.
>
> Mod 9 happens to give 144 — *not the smallest grid possible*, but the one aligned with base 10.
>
> *[pause]*
>
> So the calibrated answer to *the 24 is not arbitrary*:
>
> *The Number Map's dimensions follow from a theorem: the minimal grid hosting both the doubling orbit (period 6) and the Fibonacci-mod-9 sequence (period 24) has dimensions 6 × 24. Smaller dimensions truncate one or both structures; larger dimensions repeat without adding information. The grid's specific size is forced by the periodicities of the actions it carries. The number 24 reflects the Pisano period mod 9, not aesthetic choice.*
>
> Around eighty words.
>
> *[pause]*
>
> Practical takeaway. *State the theorem* when defending the dimensions. The forced-ness is mathematical content; pointing to it places the discussion in the realm of provable claims rather than design preferences."

## 5. Try it (4:30–5:30)
> "Pause. Say the eighty-word defence in your own words. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Connect. Grid is the right object for S¹ × S¹."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-332 (calibrated-answer card, forty-fourth — formal dimensions theorem).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (theorem on blackboard).
- **`[ORG-REVIEW]`** — calibrated-answer template.
