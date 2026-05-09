Wk 19 — Theme: Antipodal Pairs in 3D — Lens 2: Count — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Show pairs sum to 9 *and* are antipodal. Formal verification that the algebraic and topological pair structures coincide.

## 1. Outcome
Student can prove that for any cell c on the torus, value(c) + value(α(c)) ≡ 0 mod 9.

## 2. Hook (0:00–0:30)
*[Two cells highlighted on the torus, their values displayed: 4 and 5. Sum: 9 ≡ 0 mod 9.]*

> "Sum to 9. Are antipodal. Coincidence proved. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Prove pairs sum to 9 *and* are antipodal."

## 4. Body (1:00–4:30)

> "Mod A introduced the antipode-polar-pair correspondence informally. Today we prove it formally.
>
> *[pause]*
>
> *State the claim.* For any cell (col, row) on T², the value at (col, row) and the value at α(col, row) sum to 0 mod 9. Equivalently: *value(α(c)) = 9 − value(c) mod 9 for all c with non-zero value*.
>
> *[pause]*
>
> *Proof.*
>
> *Step 1.* By definition, value(col, row) = 2^row mod 9.
>
> *Step 2.* α(col, row) = (col + 12 mod 24, row + 3 mod 6).
>
> *Step 3.* value(α(col, row)) = 2^{row+3} mod 9.
>
> *Step 4.* 2^{row+3} = 2^row × 2³ = 2^row × 8.
>
> So value(α(c)) = 8 × value(c) mod 9.
>
> *Step 5.* For value(c) ∈ {1, 2, 4, 5, 7, 8} (the units of ℤ/9ℤ), compute 8 × value(c) mod 9:
>
> 8 × 1 = 8.
>
> 8 × 2 = 16 ≡ 7.
>
> 8 × 4 = 32 ≡ 5.
>
> 8 × 8 = 64 ≡ 1.
>
> 8 × 7 = 56 ≡ 2.
>
> 8 × 5 = 40 ≡ 4.
>
> *[pause]*
>
> *Step 6.* Verify pair-sum-to-9 in each case:
>
> 1 + 8 = 9 ✓
>
> 2 + 7 = 9 ✓
>
> 4 + 5 = 9 ✓
>
> 8 + 1 = 9 ✓
>
> 7 + 2 = 9 ✓
>
> 5 + 4 = 9 ✓
>
> *Every cell-value pair under α sums to 9.* ✓
>
> *Step 7.* Equivalently, 8 ≡ −1 mod 9 (since 8 + 1 = 9 ≡ 0). So multiplying by 8 = multiplying by −1 = additive negation.
>
> So value(α(c)) = −value(c) mod 9 = 9 − value(c).
>
> Therefore value(c) + value(α(c)) = value(c) + (9 − value(c)) = 9 ≡ 0 mod 9. ✓
>
> *Q.E.D.*
>
> *[pause]*
>
> *Why this works.*
>
> The proof reduces to: *adding 3 to row* corresponds to *multiplying value by 2³ = 8 mod 9*. And 8 ≡ −1 mod 9. Therefore the antipodal map on cells corresponds to *negation* on values.
>
> The minor period is 6, half of which is 3. Adding 3 to row index multiplies value by 8 = −1 mod 9. *The geometric half-shift = the algebraic negation.*
>
> *[pause]*
>
> *Counts of pair occurrences.*
>
> For each polar pair type (1, 8), (2, 7), (4, 5):
>
> Number of cells with value 1: 24 (one per column at row 0).
>
> Number of cells with value 8: 24 (row 3).
>
> Each value-1 cell pairs with the value-8 cell at column + 12.
>
> So *24 pair-occurrences* of (1, 8). Similarly 24 each for (2, 7) and (4, 5).
>
> *Total polar pair occurrences:* 24 × 3 = 72. ✓ (Matches 144 cells / 2 pairs.)
>
> *[pause]*
>
> Three observations.
>
> *Observation one.* The proof is *short*. About 8 lines. The brevity reflects the elementary nature of the result.
>
> *Observation two.* The proof depends on *the choice of half-shifts*. If the antipodal map were (col + 6, row + 3) instead of (col + 12, row + 3), the col-shift wouldn't be half a period (24/2 = 12, not 6). A different shift would give different value relationships.
>
> *Observation three.* The proof *generalises*. For any torus T_{m, n} with the doubling cycle of order n on the row axis (where 2^n ≡ 1 mod p for the modulus p), the antipodal-half-shift relates value to value × (2^{n/2}) — the involution of the multiplicative group.
>
> *[pause]*
>
> Practical takeaway. *The antipodal-polar-pair correspondence is forced by the half-shift structure of the antipode plus the doubling order in (ℤ/9ℤ)*.* Both the geometry and the algebra are determined by the underlying group theory."

## 5. Try it (4:30–5:30)
> "Pause. For cell (5, 4): value = 7; α-value = ? Sum should be 9. Sixty seconds. Answer: α(5, 4) = (17, 1); value(17, 1) = 2; 7 + 2 = 9. ✓"

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. Construct the antipodal involution."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-423 (proof worked through six pair-types).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (4 and 5 highlighted).
- Music cue: focused, quiet.
