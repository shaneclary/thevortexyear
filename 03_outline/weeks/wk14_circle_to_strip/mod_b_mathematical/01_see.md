Wk 14 — Theme: From Circle to Strip — Lens 1: See — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
The two axes of the strip — scale (powers of 10) and operation (powers of 2) — as orthogonal mathematical structures.

## 1. Outcome
Student can identify the two axes of the strip and name what each represents algebraically.

## 2. Hook (0:00–0:30)
*[An empty 2D grid. Horizontal axis labelled "scale (10ᶜ)". Vertical axis labelled "operation (2ʳ)". A single cell at the origin glows with the value 1.]*

> "Two axes. Two operations. Six minutes."

## 3. Setup (0:30–1:00)
*[Carry-over: yesterday closed Mod-A with the strip on the spiral and Mod B pulsing.]*

> "Lens 1 of 9, Module B. The strip's two axes, formally."

## 4. Body (1:00–4:30)

> "The strip has two perpendicular directions. Mod A treated this as visual room. Mod B asks what each direction *is*, mathematically.
>
> *[pause]*
>
> *Axis one — operation, the vertical.* The vertical axis indexes *applications of doubling*. Row 0 is 'no doubling applied' — the value 1. Row 1 is 'doubled once' — the value 2. Row 2 is 4. Row 3 is 8. Row 4 is 7 (because 16 ≡ 7 mod 9). Row 5 is 5. Row 6 is back to 1.
>
> Algebraically: row r corresponds to the residue 2ʳ mod 9. The doubling group acts vertically.
>
> Six rows close the cycle (Wk 4 proof). The vertical axis has period *six*.
>
> *[pause]*
>
> *Axis two — scale, the horizontal.* The horizontal axis indexes *applications of multiplying by 10*. Column 0 is 'no scaling' — the value of the cell as set by the row alone. Column 1 is 'multiplied by 10 once'. Column 2 is multiplied by 100. Column 3 by 1000. And so on.
>
> Algebraically: column c corresponds to multiplication by 10ᶜ mod 9. *But* — and this is the key fact you proved in Wk 9 — *10ᶜ ≡ 1 mod 9 for every c*. So multiplying by 10ᶜ doesn't change the residue at all.
>
> The horizontal axis is *trivial* on its own. Each column c gives the same residue as column 0.
>
> *[pause]*
>
> *Then why have a horizontal axis at all?*
>
> Because the *trivial* action is meaningful when *combined* with the doubling action. The cell at row r, column c holds the residue (2ʳ × 10ᶜ) mod 9. Since 10ᶜ ≡ 1 mod 9, this simplifies to 2ʳ mod 9. *Every column repeats the same six values.* The horizontal axis stretches the doubling pattern across columns.
>
> The strip's horizontal *visualises* the periodicity. Twenty-four columns will reveal Pisano period 24 (Wk 11) when Fibonacci is overlaid in Wk 16. The horizontal axis is *prepared for* the structure that will appear when both axes interact.
>
> *[pause]*
>
> *Two axes, formally.*
>
> Vertical: r ∈ ℤ/6ℤ. Operation: r → 2ʳ mod 9.
>
> Horizontal: c ∈ ℤ/24ℤ. Operation: c → 10ᶜ mod 9 (≡ 1 always).
>
> The cell at (r, c) holds f(r, c) = (2ʳ × 10ᶜ) mod 9 = 2ʳ mod 9.
>
> *[pause]*
>
> Three observations.
>
> *Observation one.* The two axes correspond to two *generators*. Doubling is the generator of (ℤ/9ℤ)* with order 6. Scaling by 10 is *trivially* a generator of nothing in mod 9, since it's the identity. The non-triviality of the horizontal axis is anticipated, not yet present.
>
> *Observation two.* The structure prepared in this lens *enriches* in Wk 16, when Fibonacci numbers are overlaid. The Pisano period 24 manifests in the horizontal direction once Fibonacci values fill the cells. The strip is the substrate of this richer structure.
>
> *Observation three.* The two axes are *not symmetric*. The vertical axis carries operational depth; the horizontal carries scale. The strip is *anisotropic* — its two directions have different mathematical roles.
>
> Hold this clearly. The strip's geometry encodes a specific algebraic structure: two commuting actions on ℤ/9ℤ, one with cycle length 6, one with cycle length 1 (trivial in this base). Q2 builds on this foundation."

## 5. Try it (4:30–5:30)
> "Pause. In your build log, write: *vertical = 2ʳ; horizontal = 10ᶜ ≡ 1*. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Count. Prove the strip is the natural carrier."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-302 (two-axis grid with row r and column c labelled).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (empty 2D grid with axes).
- Music cue: structural, organised.
