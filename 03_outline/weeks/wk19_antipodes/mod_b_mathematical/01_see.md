Wk 19 — Theme: Antipodal Pairs in 3D — Lens 1: See — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Antipodal map on S¹ × S¹ visualised. Formal map definition and visual depiction.

## 1. Outcome
Student can write down the antipodal map on T² and describe its action on coordinates.

## 2. Hook (0:00–0:30)
*[The map α: T² → T² displayed: α(col, row) = (col + 12 mod 24, row + 3 mod 6). Below, the action depicted on a small grid.]*

> "One map. Half-shifts both axes. Six minutes."

## 3. Setup (0:30–1:00)
*[Carry-over: yesterday closed Mod-A with the spiral and Mod B pulsing.]*

> "Lens 1 of 9, Module B. The antipodal map formalised."

## 4. Body (1:00–4:30)

> "The antipodal map is a *function* T² → T². Today we write it precisely.
>
> *[pause]*
>
> *Definition.* The antipodal map α : T² → T² is defined by:
>
> *α(col, row) = (col + 12 mod 24, row + 3 mod 6)*
>
> for each (col, row) ∈ ℤ/24ℤ × ℤ/6ℤ.
>
> Equivalently in continuous coordinates: α(θ, φ) = (θ + π, φ + π) for angles θ ∈ [0, 2π) and φ ∈ [0, 2π).
>
> *Geometric interpretation.* Each point on the torus is sent to the *diametrically opposite* point on the surface. The map shifts each angular coordinate by *half its period* — half of 24 is 12; half of 6 is 3.
>
> *[pause]*
>
> *Three properties.*
>
> *Property 1 — well-defined.* By Wk 17 Mod B Lens 2, (col, row) coordinates are well-defined modulo wrap. The arithmetic (col + 12, row + 3) is also well-defined; addition by constants mod periods is standard. So α is well-defined as a function. ✓
>
> *Property 2 — bijective.* α has explicit inverse α⁻¹(col, row) = (col − 12, row − 3) = (col + 12, row + 3) (because subtraction mod 24 of 12 equals addition of 12, similarly for 3). *α⁻¹ = α.*
>
> So α is its own inverse. *Composing α with itself gives identity.*
>
> *Property 3 — order-2 involution.* α ∘ α = identity. Apply the map twice and you return to the starting point. *α has order 2 in the group of automorphisms of T².*
>
> *[pause]*
>
> *Visualisation.*
>
> Imagine the 6 × 24 grid laid flat. Pick any cell. Move *12 columns to the right* (with wrap if needed). Then move *3 rows down* (with wrap if needed). You arrive at the antipode.
>
> On the torus surface, the antipode is *across the doughnut hole and offset by half a minor circumference*.
>
> *[pause]*
>
> *Worked examples on the grid.*
>
> α(0, 0) = (12, 3).
>
> α(7, 1) = (19, 4).
>
> α(15, 5) = (3, 2). (Because 15 + 12 = 27 ≡ 3 mod 24; 5 + 3 = 8 ≡ 2 mod 6.)
>
> α(α(0, 0)) = α(12, 3) = (24 mod 24, 6 mod 6) = (0, 0). *Verification of order-2.* ✓
>
> *[pause]*
>
> *Three observations.*
>
> *Observation one.* The map is *uniform* — same shift applied to every cell. There are no exceptions or special cases.
>
> *Observation two.* The map *commutes with the helix*. If H is the doubling helix (24-cell cycle), then α(H) is the *halving* helix (24-cell cycle). The two helices are antipodal partners as a whole, not just point-by-point.
>
> *Observation three.* The map *fits the cyclic group structure*. ℤ/24ℤ × ℤ/6ℤ is an abelian group; α is an *automorphism* of this group (it's a group endomorphism that's bijective). Specifically, α adds the element (12, 3) to every cell — this is *translation by a fixed element* of the group.
>
> *[pause]*
>
> *Why this matters.*
>
> *Matter 1 — exact.* The map is precise. No approximations, no half-cell uncertainty (Mod A's defend showed this). Mathematical exactness.
>
> *Matter 2 — efficient.* Computing antipodes via α is a single arithmetic step: add 12 to col, add 3 to row, reduce. Constant-time computation.
>
> *Matter 3 — extensible.* The same form generalises. For a torus T_{m, n} = ℤ/mℤ × ℤ/nℤ, the antipodal map is α(c, r) = (c + m/2, r + n/2) — provided m and n are even (so the half-shifts land on integer cells). For our (24, 6) torus, both are even; the map works.
>
> *[pause]*
>
> *Practical takeaway.* Memorise α(col, row) = (col + 12 mod 24, row + 3 mod 6). This is the antipodal map, your fast tool for finding pair partners."

## 5. Try it (4:30–5:30)
> "Pause. Compute α(20, 1). Sixty seconds. Answer: (8, 4)."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Count. Show pairs sum to 9 and are antipodal."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-422 (antipodal map formula with action depicted on grid).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (map formula).
- Music cue: structural, organised.
