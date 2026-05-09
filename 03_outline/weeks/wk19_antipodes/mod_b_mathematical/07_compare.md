Wk 19 — Theme: Antipodal Pairs in 3D — Lens 7: Compare — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Antipodal involution vs additive inverse. Two formal operations that coincide on the (ℤ/9ℤ)* values; precise comparison.

## 1. Outcome
Student can articulate the formal difference between the antipodal involution (on cells) and the additive inverse (on values), and how they relate.

## 2. Hook (0:00–0:30)
*[Two formal operations side-by-side: antipodal map α: T² → T²; additive inverse: ℤ/9ℤ → ℤ/9ℤ. An arrow connects them.]*

> "Two operations. One result. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 7 of 9. Compare antipodal involution and additive inverse."

## 4. Body (1:00–4:30)

> "*Antipodal involution.* α : T² → T². Maps cells to their antipodes. Defined by α(col, row) = (col + 12, row + 3). Order 2.
>
> *Additive inverse.* ν : ℤ/9ℤ → ℤ/9ℤ. Maps each value to its negative. Defined by ν(v) = −v mod 9 = 9 − v mod 9. Order 2 (for non-zero values; 0 → 0 is a fixed point).
>
> *[pause]*
>
> Three structural similarities.
>
> *Similarity one — both are involutions.* Each has order 2 — apply twice and return.
>
> *Similarity two — both are bijections.* Each is its own inverse; bijective on its domain.
>
> *Similarity three — both arise from negation.* α adds (12, 3) which is half-period in both axes; this corresponds to multiplying value by 8 ≡ −1 mod 9. ν directly negates value. *Both encode the same negation.*
>
> *[pause]*
>
> Three structural differences.
>
> *Difference one — domain.* α acts on cells (positions on T²). ν acts on values (elements of ℤ/9ℤ). *Different domains; different objects acted on.*
>
> *Difference two — codomain.* α produces cells. ν produces values. *Different output types.*
>
> *Difference three — the connection.* The connection between α and ν is *via the value function v(c) = 2^row mod 9*. α and ν are *related via composition*: ν ∘ v = v ∘ α. This is the mathematical content of the polar-pair-antipode coincidence.
>
> *[pause]*
>
> *Diagrammatic statement.*
>
> The following diagram *commutes*:
>
> T² —α→ T²
>
> v ↓        ↓ v
>
> ℤ/9ℤ —ν→ ℤ/9ℤ
>
> *Read as.* Going around either way (α then v, or v then ν) gives the same result. This is what makes the antipode map *agree with* the additive inverse on values.
>
> *[pause]*
>
> *Mathematical interpretation.*
>
> The diagram says: *the value function v is equivariant under the involution structure*. The antipode on cells corresponds to the inverse on values *because* the value function v is set up to make this happen.
>
> If v were a different function (say, v(c) = col + row), then α and ν wouldn't necessarily commute through v. *The specific choice v(c) = 2^row* is what makes the diagram commute.
>
> *[pause]*
>
> *Why this matters.*
>
> *Matter 1 — interchangeability.* For computations involving negation in (ℤ/9ℤ)*, you can use either α (geometric, on cells) or ν (algebraic, on values). The diagram says they give equivalent results.
>
> *Matter 2 — categorical viewpoint.* The diagram is the start of a *category-theoretic* view of VBM. The two involutions are related by a natural transformation; this is the kind of structure category theory studies.
>
> *Matter 3 — generalisation.* Different value functions or different cyclic structures might break the commutation. The (24, 6) torus with v(c) = 2^row is *one specific case* where everything aligns. Other moduli could behave differently.
>
> *[pause]*
>
> Useful framing. *The antipodal involution acts on cells; the additive inverse acts on values; they're related by the equivariance of the value function under the involution.* This is mathematically precise; non-mathematicians can use the simpler form *they coincide on the (ℤ/9ℤ)* values*.
>
> Practical takeaway. *When discussing the operations, use the level appropriate to the audience.*
>
> For mathematicians: *the commuting diagram*.
>
> For engineers: *antipode = additive inverse for unit values*.
>
> For students: *opposite cells hold opposite values*.
>
> All three are correct; they vary in formality."

## 5. Try it (4:30–5:30)
> "Pause. Verify on cell (0, 0): v(c) = 1; v(α(c)) = ? Should be 8 = −1 mod 9. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Defend. Antipodal proof."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-427 (commuting diagram of α, v, ν).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (two formal operations).
- Music cue: comparative, structural.
