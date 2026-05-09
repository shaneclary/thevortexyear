Wk 17 — Theme: The ABHA Torus — Surface Structure — Lens 6: Apply — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Coordinate-based fast computation. Three computations using the (col, row) coordinates that are easier on the torus than on the strip.

## 1. Outcome
Student can apply coordinate arithmetic on the torus to compute distances, antipodes, and intersection counts.

## 2. Hook (0:00–0:30)
*[Three problems displayed: distance from (3, 2) to (15, 5); antipode of (7, 1); intersections of two paths.]*

> "Three problems. Coordinate arithmetic. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Coordinate-based computations on the torus."

## 4. Body (1:00–4:30)

> "Today's apply uses coordinates as a working tool. Three computations show what coordinate arithmetic enables on the torus.
>
> *[pause]*
>
> *Problem 1 — torus distance.*
>
> Compute the *toroidal distance* from cell (3, 2) to cell (15, 5).
>
> *Method.*
>
> Δcol = 15 − 3 = 12. Wrap-min: min(12, 24−12) = min(12, 12) = 12. (At c = 12 the two routes are equal length.)
>
> Δrow = 5 − 2 = 3. Wrap-min: min(3, 6−3) = min(3, 3) = 3. (Same — both routes equal.)
>
> Distance² = 12² + 3² = 144 + 9 = 153. Distance ≈ √153 ≈ 12.37.
>
> *Answer:* approximately 12.37 cell-units.
>
> Note: at Δcol = 12 (half the period), there's an *ambiguity* — both directions give the same distance. The cell is at *maximal toroidal distance* in the column direction. Same for Δrow = 3.
>
> *[pause]*
>
> *Problem 2 — antipode.*
>
> Find the antipode of cell (7, 1).
>
> *Method.*
>
> Antipode: (col + 12 mod 24, row + 3 mod 6).
>
> col_anti = 7 + 12 = 19.
>
> row_anti = 1 + 3 = 4.
>
> *Answer:* (19, 4).
>
> Verify: cell (7, 1) holds value 2¹ = 2; cell (19, 4) holds value 2⁴ = 7. (2, 7) is a polar pair. ✓
>
> *[pause]*
>
> *Problem 3 — path intersection.*
>
> Two cycles on the torus: cycle a winds (1, 0) — once around the column direction, zero around the row. Cycle b winds (1, 1) — once around column, once around row (a diagonal).
>
> How many times do they intersect?
>
> *Method.*
>
> Use Wk 16's intersection formula: a · b = p₁q₂ − p₂q₁.
>
> a = (1, 0). b = (1, 1).
>
> a · b = 1·1 − 1·0 = 1.
>
> *Answer:* a and b intersect once.
>
> Verify by visual inspection: cycle a is the major-axis circle (along the longitude). Cycle b is a diagonal that crosses the longitude once before returning. ✓
>
> *[pause]*
>
> *What just happened.*
>
> Three torus computations completed in seconds using coordinate arithmetic. Each would be substantially harder using the visual torus alone or by following paths physically.
>
> *Coordinates make the torus computable.*
>
> *[pause]*
>
> *Three observations.*
>
> *Observation one.* The toroidal distance metric is *non-Euclidean* in subtle ways. The wrap-min trick captures *the shortest path on the torus*, which differs from the straight-line distance in the unrolled strip. Think of the torus's actual geometry, not just its quotient structure.
>
> *Observation two.* Antipode computation is *modular addition*. (col + 12) mod 24 and (row + 3) mod 6. *Mod-arithmetic gives geometric results.*
>
> *Observation three.* Intersection numbers are *determinants*. The 2×2 determinant captures all the topological information about how cycles cross.
>
> *[pause]*
>
> Practical takeaway. *Use coordinate arithmetic for speed.* Visual or physical methods are great for intuition; coordinate arithmetic is great for accuracy and speed.
>
> Q3 will use these computations heavily. Coil winding involves many torus-distance and antipode computations as wires are routed around the surface."

## 5. Try it (4:30–5:30)
> "Pause. Find the antipode of (15, 2). Sixty seconds. Answer: (3, 5)."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. S¹×S¹ decorated vs flat."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-378 (three problems worked).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (problem set).
- Music cue: working/applied.
