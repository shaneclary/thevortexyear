Wk 17 — Theme: The ABHA Torus — Surface Structure — Lens 3: Build — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Construct the coordinate transformation between flat strip and toroidal surface. The map (and its inverse) that lifts the strip to the torus and projects back.

## 1. Outcome
Student can write the coordinate transformation strip → torus and verify it's invertible.

## 2. Hook (0:00–0:30)
*[Two-way arrow between the flat 6×24 strip and the torus, with formulas on each side.]*

> "Strip ↔ torus. The transformation. Five minutes."

## 3. Setup (0:30–1:00)
> "Lens 3 of 9. Construct the coordinate transformation."

## 4. Body (1:00–4:30)

> "Today's build is a derivation. The coordinate transformation between the flat strip and the toroidal surface is what makes the wrap operation rigorous.
>
> Open your notebook. Title the page *Strip ↔ torus coordinate transformation*.
>
> *[pause]*
>
> *Step 1 — set up the spaces.* Write:
>
> Flat strip: S = [0, 24) × [0, 6) — the half-open rectangle of all (c, r) with 0 ≤ c < 24 and 0 ≤ r < 6.
>
> Toroidal surface: T = ℤ/24ℤ × ℤ/6ℤ — equivalence classes of integer pairs under wrap.
>
> *Step 2 — define the strip-to-torus map.* Write:
>
> π : S → T, π(c, r) = ([c], [r]).
>
> Where [c] is the equivalence class of c modulo 24 (which is just c, since c is in [0, 24)), and [r] is the class of r modulo 6 (which is just r). Each (c, r) on the strip corresponds to a unique point on T.
>
> *Step 3 — show π is a bijection on S.* Write:
>
> *Forward direction.* Each (c, r) ∈ S maps to a unique ([c], [r]) ∈ T. ✓
>
> *Backward direction.* For each ([c], [r]) ∈ T, there's a unique representative (c, r) ∈ S with 0 ≤ c < 24 and 0 ≤ r < 6. ✓
>
> *Therefore* π is a bijection on the half-open rectangle.
>
> *[pause]*
>
> *Step 4 — define the inverse.* Write:
>
> π⁻¹ : T → S, π⁻¹([c], [r]) = (c mod 24, r mod 6).
>
> The inverse takes a torus point's equivalence class and returns the canonical representative in S.
>
> *[pause]*
>
> *Step 5 — extend to the continuous case.* For continuous coordinates (c, r) ∈ [0, 24] × [0, 6] (closed rectangle), the boundary points need attention. Write:
>
> *Boundary case.* Points on the boundary (c = 24 or r = 6) are *identified* with corresponding points on the opposite boundary (c = 0 or r = 0). This is the *quotient map*.
>
> Quotient: T = ([0, 24] × [0, 6]) / (boundary identification).
>
> *[pause]*
>
> *Step 6 — verify the quotient.* Write:
>
> Identifications:
>
> (24, r) ~ (0, r) for all r ∈ [0, 6].
>
> (c, 6) ~ (c, 0) for all c ∈ [0, 24].
>
> The corner: (24, 6) ~ (0, 6) ~ (0, 0). All four corners of the rectangle correspond to the *same* point on the torus.
>
> *[pause]*
>
> *Step 7 — write the metric.* Write:
>
> Distance between two torus points (col₁, row₁) and (col₂, row₂):
>
> *Δcol = min(|col₁ − col₂|, 24 − |col₁ − col₂|).*
>
> *Δrow = min(|row₁ − row₂|, 6 − |row₁ − row₂|).*
>
> *d² = Δcol² + Δrow² (in suitable units).*
>
> The min function captures wrap-around distance — going *the short way*.
>
> *[pause]*
>
> *What just happened.* You've constructed the coordinate transformation: a bijection from the flat strip to the torus, plus its inverse, plus a metric.
>
> The transformation makes *all torus computations reducible to strip computations* (and vice versa). You can do work on whichever surface is convenient.
>
> *[pause]*
>
> Three observations.
>
> *Observation one.* The transformation is *short* because the underlying topology is small. A 6 × 24 torus admits a clean transformation in a few lines.
>
> *Observation two.* The transformation *generalises*. Replace 6 and 24 with any pair (m, n); the same construction yields a (ℤ/mℤ) × (ℤ/nℤ) torus.
>
> *Observation three.* The transformation is *invertible*. Both directions work; nothing is lost in the wrap. *The torus and the strip carry the same information* in different shapes.
>
> Pin the transformation in your notebook. Q3 will use this to translate between coil-layout charts (strip) and physical wind paths (torus)."

## 5. Try it (4:30–5:30)
> "Pause. Write at least the strip-to-torus map and its inverse. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Hear. Marko on the surface's symmetries."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-376 (transformation diagram, formal map, inverse).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (two-way arrow).
- Music cue: focused, methodical.
