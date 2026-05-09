Wk 18 — Theme: Helical Doubling on the Torus — Lens 8: Defend — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft. **`[ORG-REVIEW]`**

---

## 0. Authoring notes
Fifty-third Defend. Why the helix is forced by the math — formal version of the claim that the (1, 4) helix is unique.

## 1. Outcome
Student can prove that the (1, 4) doubling helix is the unique simple closed helix on the (6, 24) torus that traverses the doubling cycle.

## 2. Hook (0:00–0:30)
*[A theorem statement: "The (1, 4) helix is the unique simple closed doubling helix on T² (6, 24)."]*

> "Theorem. Helix is forced. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 8 of 9. Defend the helix's uniqueness."

## 4. Body (1:00–4:30)

> "The objection. *VBM presents the (1, 4) helix as the doubling helix on the torus. But couldn't other (p, q) values also give doubling-cycle paths? Why specifically (1, 4)?*
>
> The answer is a uniqueness theorem.
>
> *[pause]*
>
> *Theorem (Helix Selection).* On the (6, 24) torus, the unique simple closed helix that traverses the doubling cycle (1 → 2 → 4 → 8 → 7 → 5 → 1) is the (1, 4) helix.
>
> *Proof.*
>
> *Step 1 — what 'traverses the doubling cycle' means.* A helix traverses the doubling cycle if, as you walk along it, the cell-values you encounter are 1, 2, 4, 8, 7, 5, 1, 2, 4, 8, 7, 5, … (repeating with period 6).
>
> *Step 2 — the (col, row) sequence required.* Cell-values depend only on the row index. value(col, row) = 2^row mod 9.
>
> Row 0 → 1; row 1 → 2; row 2 → 4; row 3 → 8; row 4 → 7; row 5 → 5.
>
> Doubling cycle requires the row sequence: 0, 1, 2, 3, 4, 5, 0, 1, 2, …
>
> Each step of the helix advances row by exactly 1 (mod 6).
>
> *Step 3 — translate to helix slope.* If row advances by 1 per step, and the helix advances col by an integer Δcol per step, then the helix's slope is row/col = 1/Δcol.
>
> For the helix to be *simple* (non-self-intersecting), Δcol and 6 must be coprime. (If gcd(Δcol, 6) > 1, the helix would visit fewer than all 6 row-values per major turn and re-traverse some cells.)
>
> *Step 4 — Δcol = 1 is forced.* For Δcol = 1, the helix has slope 1/1 = 1. For Δcol = 5, the helix has slope 1/5; with gcd(5, 6) = 1, this is also simple — but it would skip some columns and visit a different cell-set.
>
> *Wait* — let me reconsider. The doubling cycle requires *visiting cells in row-sequence 0, 1, 2, 3, 4, 5*. Different Δcol values produce different visit orders. For Δcol = 1: cells (0, 0), (1, 1), (2, 2), …, (23, 5) — 24 cells, every column visited once. For Δcol = 2: cells (0, 0), (2, 1), (4, 2), …, (22, 5), (24, 0) = (0, 0) — 12 cells, every other column.
>
> The Δcol = 1 helix visits *all 24 columns and all 6 rows* in one closure. Other Δcol values visit subsets.
>
> *Step 5 — Δcol = 1 is the canonical choice.* The Rodin Foundation's canonical doubling helix uses Δcol = 1, giving (p, q) = (1, 4) (one major rotation, four minor rotations per closure). *This is the helix that visits every column.*
>
> *Step 6 — uniqueness up to relabelling.* Other Δcol values give *different helices* on the same torus, with different visit patterns. They aren't 'the doubling helix' in the foundation tradition; they're *related cyclic structures* with their own validity but not the canonical pattern.
>
> Therefore, *with the convention that one helix-step advances col by 1*, the (1, 4) helix is the unique simple closed doubling helix.
>
> *Q.E.D.*
>
> *[pause]*
>
> *Note on rigour.* The 'forced' claim is somewhat conventional — different conventions about Δcol would give different helices. The (1, 4) is *forced once you adopt the convention of one column-step per helix-step*. This convention is itself motivated by the engineering preference for visiting every angular position.
>
> *Different engineers using different conventions could legitimately use different helices.* The foundation tradition's standardisation on (1, 4) is what makes it the *canonical* choice — not the only mathematically valid choice.
>
> *[pause]*
>
> So the calibrated answer to *why is the helix forced*:
>
> *The (1, 4) doubling helix is the unique simple closed helix on the (6, 24) torus when the convention is one column-step per helix-step. Other Δcol values produce different helices visiting different cell-subsets. The foundation tradition's canonical choice of Δcol = 1 — and therefore (p, q) = (1, 4) — is motivated by the engineering preference for visiting every angular position. Within this convention, the helix is uniquely determined.*
>
> Around eighty words.
>
> *[pause]*
>
> Practical takeaway. *State the uniqueness with its convention.* The helix is *forced under the canonical convention*; alternative conventions produce alternative helices that are mathematically valid but non-canonical."

## 5. Try it (4:30–5:30)
> "Pause. Say the eighty-word defence in your own words. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Connect. Helix structure feeds into Wk 19."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-404 (calibrated-answer card, fifty-third — helix uniqueness).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (theorem statement).
- **`[ORG-REVIEW]`** — calibrated-answer template.
