Wk 15 — Theme: The Rodin Number Map (2D) — Lens 1: See — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Every cell as digit_root(2ʳ × 10ᶜ). The cell-content formula stated and unfolded.

## 1. Outcome
Student can write the cell-content formula and apply it to compute any cell's value from its (r, c) indices.

## 2. Hook (0:00–0:30)
*[The cell formula displayed prominently: cell(r, c) = digit_root(2ʳ × 10ᶜ). Below it, the simplification: ≡ 2ʳ mod 9.]*

> "One formula. Every cell. Six minutes."

## 3. Setup (0:30–1:00)
*[Carry-over: yesterday closed Mod-A with the spiral lit through Wk 15-MA and Mod B pulsing.]*

> "Lens 1 of 9, Module B. The cell-content formula."

## 4. Body (1:00–4:30)

> "The cell-content formula is the formal definition of what every cell of the Number Map holds. Today we state it precisely, derive its simplification, and apply it.
>
> *[pause]*
>
> *The formula.* For row index r ∈ {0, 1, 2, 3, 4, 5} and column index c ∈ {0, 1, 2, …, 23}, the cell at (r, c) holds the value:
>
> *cell(r, c) = digit_root(2ʳ × 10ᶜ)*
>
> Equivalently, using mod-9 reduction:
>
> *cell(r, c) = (2ʳ × 10ᶜ) mod 9*
>
> (with the convention that 0 mod 9 is rendered as 9 when displaying digital roots — but for the doubling-only grid no zero values arise, so the convention doesn't matter today).
>
> *[pause]*
>
> *Simplification.* Recall from Wk 9 that 10 ≡ 1 mod 9, and therefore 10ᶜ ≡ 1 mod 9 for every c.
>
> Substitute: 2ʳ × 10ᶜ mod 9 = 2ʳ × 1 mod 9 = 2ʳ mod 9.
>
> The cell-content formula simplifies to:
>
> *cell(r, c) = 2ʳ mod 9*
>
> The column index c *vanishes* from the formula. Every cell in row r holds the same value, regardless of column.
>
> *[pause]*
>
> *Computation table.*
>
> r = 0: 2⁰ = 1. Cell value = 1.
>
> r = 1: 2¹ = 2.
>
> r = 2: 2² = 4.
>
> r = 3: 2³ = 8.
>
> r = 4: 2⁴ = 16 mod 9 = 7.
>
> r = 5: 2⁵ = 32 mod 9 = 5.
>
> The six rows hold {1, 2, 4, 8, 7, 5}.
>
> *[pause]*
>
> *Three things the formula tells you.*
>
> *Thing one — the formula generalises.* For row index r ≥ 6, reduce r mod 6 first. r = 6 → row 0; r = 7 → row 1; etc. The doubling cycle has period 6.
>
> *Thing two — the formula is base-dependent.* The substitution 10 ≡ 1 mod 9 only works in base 10. In base 7, 10 (interpreted in base 7 = decimal 7) is *not* congruent to 1 mod 9. The grid's column-constancy is a base-10 phenomenon.
>
> *Thing three — the formula is incomplete.* Today's grid hosts only the doubling structure. Wk 16 will introduce a *Fibonacci overlay* — a separate value structure on the same grid — and the cell-content will become richer. The current single-formula version is a starting point.
>
> *[pause]*
>
> *Worked verification.* Cell (3, 7).
>
> Direct: 2³ × 10⁷ = 8 × 10,000,000 = 80,000,000. Mod 9: 8.
>
> By formula: 2³ mod 9 = 8.
>
> Both give 8. The formula works.
>
> *Worked verification.* Cell (4, 12).
>
> Direct: 2⁴ × 10¹² = 16 × 1,000,000,000,000 = 16,000,000,000,000. Mod 9: digital root via reduction. 16 mod 9 = 7. Times 10¹² mod 9 = 1. Product = 7. *Same as 2⁴ mod 9 = 7.*
>
> *[pause]*
>
> Memorise the formula and its simplification. Both are short:
>
> *cell(r, c) = (2ʳ × 10ᶜ) mod 9 ≡ 2ʳ mod 9.*
>
> The simplification is what makes the grid a useful lookup table."

## 5. Try it (4:30–5:30)
> "Pause. Compute cell (5, 19) using the formula. Sixty seconds. Answer: 5."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Count. Prove 10 ≡ 1 mod 9 implies column-constancy."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-326 (formula card with simplification).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (formula displayed).
- Music cue: structural, organised.
