Wk 23 — Theme: Sanctified Mirrors — Lens 3: Build — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Compute a mirror projection. Worked example: project T³ onto 2D coordinate plane.

## 1. Outcome
Student computes one specific 2D projection of a higher-dim torus.

## 2. Hook (0:00–0:30)
*[A computation: 3D torus point (θ, φ, χ) → 2D image (θ, φ) with χ forgotten.]*

> "Project T³ to T². Compute. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 3 of 9. Compute a projection."

## 4. Body (1:00–4:30)

> "Today's build computes a specific 2D projection. We'll project the 3-torus T³ onto its first two coordinates, dropping the third. *Concrete computation*; principles generalise to higher dimensions.
>
> Open your notebook. Title the page *Mirror projection — T³ to T² worked example*.
>
> *[pause]*
>
> *Step 1 — define T³.* Write:
>
> T³ = (S¹)³ with coordinates (θ, φ, χ), each ranging in [0, 2π) (or equivalently mod-period in discrete version).
>
> *Step 2 — discrete version.* Use 6 × 6 × 6 lattice. 216 cells indexed by (i, j, k) with i, j, k ∈ {0, 1, 2, 3, 4, 5}.
>
> *Step 3 — define the projection.* Write:
>
> π: T³ → T², π(i, j, k) = (i, j).
>
> *The projection forgets the third coordinate k.* The image has 36 cells (6 × 6).
>
> *Step 4 — verify properties.*
>
> *Property 1 — surjectivity.* Every cell (i, j) ∈ T² has at least one preimage in T³ (in fact, 6 preimages, one for each value of k). *Surjective.* ✓
>
> *Property 2 — pre-image cardinality.* For each cell (i, j) ∈ T², the preimage is {(i, j, 0), (i, j, 1), ..., (i, j, 5)} — 6 cells in T³. *Constant 6 cells per image cell.*
>
> *Property 3 — information loss.* Each preimage is a 1-dimensional fiber (the k-axis at fixed (i, j)). *The information about k is lost; information about (i, j) is preserved.*
>
> *Step 5 — alternative projection.*
>
> Try projecting onto (i, k) instead: π'(i, j, k) = (i, k).
>
> Same structure but different forgotten coordinate. *Different image of the same T³.*
>
> Or onto (j, k): π''(i, j, k) = (j, k). Yet another projection.
>
> *Three coordinate projections of T³ to T². Each is a different Mirror.*
>
> *[pause]*
>
> *Step 6 — non-coordinate projection.*
>
> Try projecting along a *diagonal* direction: π_d(i, j, k) = (i + j mod 6, k).
>
> *Different image; different relationship to original.* Some information is preserved differently.
>
> *Step 7 — count for T³.*
>
> Number of coordinate-axis 2D projections: C(3, 2) = 3.
>
> Number of all 2D linear projections: continuum (Gr(2, 3) is a 1-dim continuous manifold).
>
> *Three coordinate projections; uncountably many other linear projections.*
>
> *Step 8 — generalise to T^10.*
>
> For the (conjectured) Decoqubit at T^10:
>
> Coordinate projections: C(10, 2) = 45.
>
> All linear projections: continuum (Gr(2, 10) is a 16-dim manifold).
>
> *45 coordinate-axis Mirrors; many more non-coordinate Mirrors.*
>
> *Specific Sanctified Mirror canonical set: **`[ORG-INPUT]`**.*
>
> *[pause]*
>
> What you've computed. *One specific projection from T³ to T², plus alternatives.* Generalises mechanically to higher dimensions.
>
> Three observations.
>
> *Observation one.* The computation is *mechanical*. Standard projection; standard arithmetic. *No new mathematics needed.*
>
> *Observation two.* Different projections produce *different images* of the same T³. *Multiple Mirrors of one underlying structure.*
>
> *Observation three.* Generalising to T^10 *just adds dimensions*. Same principles; bigger numbers.
>
> Pin the worked example in your notebook. The computation is reproducible."

## 5. Try it (4:30–5:30)
> "Pause. Compute π(2, 3, 5) for the projection onto first two coordinates. Sixty seconds. Answer: (2, 3)."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Hear. Marko on the projection mathematics."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-520 (worked projection T³ to T²).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (projection computation).
- Music cue: focused, methodical.
