Wk 17 — Theme: The ABHA Torus — Surface Structure — Lens 1: See — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Coordinate atlas: (col, row). Two coordinate functions on the torus, each ranging cyclically.

## 1. Outcome
Student can identify the two coordinate functions on the torus and write down their ranges.

## 2. Hook (0:00–0:30)
*[Two pairs of axes meeting on the torus surface: a horizontal pair labelled "col 0..23" and a vertical pair labelled "row 0..5".]*

> "Two coordinates. One surface. Six minutes."

## 3. Setup (0:30–1:00)
*[Carry-over: yesterday closed Mod-A with the spiral and Mod B pulsing with axis arrows.]*

> "Lens 1 of 9, Module B. The coordinate atlas on the torus."

## 4. Body (1:00–4:30)

> "Mod A introduced the ABHA Torus visually. Mod B treats it formally — starting with coordinates.
>
> *[pause]*
>
> *Two coordinate functions.*
>
> *Function col: T² → ℤ/24ℤ.* For each point on the torus, returns the column index (0 to 23). Increases by 1 as you walk one step in the major-circle direction. Wraps from 23 back to 0.
>
> *Function row: T² → ℤ/6ℤ.* For each point on the torus, returns the row index (0 to 5). Increases by 1 as you walk one step in the minor-circle direction. Wraps from 5 back to 0.
>
> Together: every point on the torus has a *coordinate pair* (col, row) ∈ ℤ/24ℤ × ℤ/6ℤ.
>
> *[pause]*
>
> *Why this is called an atlas.*
>
> An *atlas* in differential geometry is a collection of coordinate charts that cover a manifold. For a 2D manifold, each chart maps an open subset to ℝ² (or, for our discrete case, to ℤ × ℤ). Charts must agree on overlaps via *transition functions*.
>
> The (col, row) pair is the natural atlas for the toroidal surface. *Each cell is its own micro-chart*; cells overlap with neighbours via cyclic identification.
>
> Continuous version: torus T² admits a global continuous atlas via two angles (θ_col, θ_row) ∈ [0, 2π) × [0, 2π), with identification at the boundary.
>
> Discrete version: 144 cells, each indexed by (col, row).
>
> *[pause]*
>
> *Three properties of the atlas.*
>
> *Property one — global.* The atlas covers the entire torus. Every point has a coordinate. There are no boundary points without coordinates.
>
> *Property two — single-chart.* Unlike the sphere (which requires at least two charts to cover, because no single chart works without a singularity at the poles), the torus admits a single (col, row) chart. *The torus is *parallelisable* in this sense — it has a global non-singular coordinate frame.*
>
> *Property three — cyclic.* Both coordinates are cyclic. col is mod 24; row is mod 6. The cyclicity captures the torus's topology directly.
>
> *[pause]*
>
> *What the atlas does for us.*
>
> *Use 1 — addressing.* Every cell on the torus has a unique (col, row). When we want to refer to a specific cell, we use the coordinates.
>
> *Use 2 — computation.* Distances, paths, intersections — all become arithmetic in coordinates. Walking from (3, 2) to (7, 4) means changing col by 4 and row by 2; these are computable quantities.
>
> *Use 3 — generalisation.* Once we have coordinates, we can extend to higher dimensions. The Decoqubit (Wk 22) will use a higher-dimensional analogue of this atlas.
>
> *[pause]*
>
> Three observations.
>
> *Observation one.* The atlas is *compatible with the cell decomposition*. Each cell corresponds to a unique (col, row) integer pair; the atlas respects the grid.
>
> *Observation two.* The atlas is *not unique*. We could have chosen (row, col) instead, or rotated the starting point. The chosen convention (col first, row second; col 0 at a specific position) is a *standardisation*, not the only valid choice. The Rodin Foundation uses (col, row) consistently; other conventions would work but would require translation.
>
> *Observation three.* The atlas is *finite for the discrete torus*. Continuous atlases on the continuous torus are infinite. The discrete (col, row) atlas has 144 distinct values total — bounded.
>
> *[pause]*
>
> Memorise the atlas. *col ∈ ℤ/24ℤ, row ∈ ℤ/6ℤ*. This is how every cell on the ABHA Torus gets its name."

## 5. Try it (4:30–5:30)
> "Pause. Write *(col, row) ∈ ℤ/24ℤ × ℤ/6ℤ* in your notebook. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Count. Prove the coordinate is well-defined."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-374 (coordinate axes on torus surface).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (axis arrows on torus).
- Music cue: structural, organised.
