Wk 15 — Theme: The Rodin Number Map (2D) — Lens 8: Defend — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft. **`[ORG-REVIEW]`**

---

## 0. Authoring notes
Forty-third Defend. Why 24 columns specifically — the LCM rationale. The grid's dimensions aren't arbitrary; they follow from the operations the grid is designed to host.

## 1. Outcome
Student can defend the choice of 24 columns by reference to the least-common-multiple rationale.

## 2. Hook (0:00–0:30)
*[A side margin of the grid showing column 24 highlighted, with the LCM(6, 24) = 24 calculation underneath.]*

> "*Why 24?* LCM rationale. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 8 of 9. Defend the column count."

## 4. Body (1:00–4:30)

> "The objection. *The grid has 24 columns, but the doubling cycle has period 6. Why not have 6 columns or 12 columns or 18? Why exactly 24? The choice looks arbitrary or aesthetic.*
>
> The objection is reasonable; the answer is technical. The 24 comes from the *least common multiple* of two periodicities, not from the doubling alone.
>
> *[pause]*
>
> *The setup.* The grid is designed to host *two* periodic structures simultaneously:
>
> *Structure one — doubling.* Period 6. (Wk 4 result.)
>
> *Structure two — Fibonacci.* The Fibonacci sequence mod 9 has period *24* — the Pisano period mod 9, proven in Wk 11.
>
> The grid will accommodate Fibonacci values in Wk 16 onward. To fit *both* periodicities without truncating either, the grid must have a column count that is a multiple of *both* periods.
>
> *Step one.* Compute LCM(6, 24).
>
> *Step two.* The LCM of 6 and 24 is 24. (Because 24 is itself a multiple of 6, namely 6 × 4.)
>
> *Step three.* Therefore 24 is the *minimal* column count that hosts both periodicities. *Any column count less than 24 would truncate the Fibonacci period; any column count greater than 24 would repeat without adding information.*
>
> *Conclusion.* 24 columns is forced. Not chosen.
>
> *[pause]*
>
> *Why isn't the column count 6?* Because 6 columns wouldn't host the Pisano period 24. Half a Fibonacci cycle would be visible; the rest would be off the grid. Fibonacci patterns Wk 16 introduces would appear truncated.
>
> *Why isn't the column count 12?* Same reason. 12 columns hosts *half* the Pisano period; structure would be cut off.
>
> *Why isn't the column count 48?* Because 48 columns would *repeat* both periodicities. Columns 0-23 would be identical to columns 24-47. Twice the cells, no new information.
>
> *24 is the unique value* — minimal that fits both, maximal before repetition.
>
> *[pause]*
>
> *Generalisation.* For *any* pair of periodicities (P₁, P₂), the minimal grid that hosts both has column count LCM(P₁, P₂). For mod 9 with doubling and Fibonacci: LCM(6, 24) = 24. For mod 7 with doubling and Fibonacci: doubling has period 3, Pisano period mod 7 is 16, LCM(3, 16) = 48. The framework generalises but the specific number changes with the modulus.
>
> *Cell-count generalisation.* Total cells = (doubling period) × (Pisano period) = 6 × 24 = 144 for mod 9. For mod 7: 3 × 16 = 48. The grid size is *modulus-specific* and *forced by the underlying group structure*.
>
> *[pause]*
>
> So the calibrated answer to *why 24 columns*:
>
> *The grid hosts both the doubling cycle (period 6) and the Fibonacci-mod-9 sequence (Pisano period 24). The minimal column count that hosts both periodicities without truncation or repetition is the least common multiple of 6 and 24, which is 24. A smaller column count would truncate the Fibonacci pattern; a larger count would repeat without adding information. The number is forced by the underlying mathematics, not chosen for aesthetics.*
>
> Around eighty words.
>
> *[pause]*
>
> Practical takeaway. *When asked about the grid's dimensions, point to the periodicities involved.* The doubling period is straightforward (Lagrange on a finite group). The Pisano period is computational but well-known. Their LCM determines the grid. *Mathematical necessity*, not design choice.
>
> One more note. If a future structure with period P₃ is introduced — say, a triangular-number sequence with period P₃ mod 9 — the grid would need to be re-sized to LCM(6, 24, P₃). The grid's dimensions are *open* to expansion if new structures are added; they're *fixed* relative to the structures already in scope."

## 5. Try it (4:30–5:30)
> "Pause. Say the eighty-word defence in your own words. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Connect. Grid leads to next week's wrap."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-324 (calibrated-answer card, forty-third — LCM rationale).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (column 24 with LCM calculation).
- **`[ORG-REVIEW]`** — calibrated-answer template.
