Wk 16 — Theme: Wrapping to a Torus — Lens 2: Count — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Count edges before and after wrapping. The Euler-characteristic-style accounting of the wrap.

## 1. Outcome
Student can count the edges, vertices, and faces of the strip, cylinder, and torus and observe how the counts change with each wrap.

## 2. Hook (0:00–0:30)
*[Tally counters showing edges/vertices/faces for each of the three stages.]*

> "Count edges. Count vertices. Watch them change."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Edge accounting across the wrap."

## 4. Body (1:00–4:30)

> "Each stage of the wrap changes how the grid's edges and vertices are counted. Today's count tracks the changes precisely.
>
> *[pause]*
>
> *Stage 1 — flat strip counts.*
>
> A 6×24 grid as a flat strip has:
>
> Vertices (cell corners): 7 × 25 = 175. (Rows have 7 corner-rows; columns have 25 corner-columns.)
>
> Horizontal edges (between adjacent cells in a column): 6 × 25 = 150.
>
> Vertical edges (between adjacent cells in a row): 7 × 24 = 168.
>
> Wait — let me reconsider. A 6×24 grid means 6 *cells* tall and 24 *cells* wide. So the corner-grid is 7 corners tall and 25 corners wide. Each row of cells has 25 horizontal edges? No — each *row* of cells (running horizontally) has 24 horizontal edges between cells, plus 2 outer edges, total 25 horizontal edges. *Wait, more carefully:*
>
> *Re-do.* A 6×24 grid has:
>
> Vertices: (6+1) × (24+1) = 7 × 25 = 175.
>
> Horizontal edges (running along rows, between adjacent vertices in the same row): number of rows of edges = 7; edges per row = 24. Total = 7 × 24 = 168.
>
> Vertical edges (running along columns, between adjacent vertices in the same column): number of columns of edges = 25; edges per column = 6. Total = 25 × 6 = 150.
>
> Faces (cells): 6 × 24 = 144.
>
> *Strip Euler characteristic:* V − E + F = 175 − (168 + 150) + 144 = 175 − 318 + 144 = 1.
>
> A disk-like flat surface has Euler characteristic 1. The strip is topologically a disk (well, a rectangle, which is homeomorphic to a disk). ✓
>
> *[pause]*
>
> *Stage 2 — cylinder counts.*
>
> Identify the left and right edges of the strip. The 6 vertical edges on the left merge with the 6 vertical edges on the right. The 7 vertices on the left merge with the 7 vertices on the right.
>
> Vertices: 175 − 7 = 168.
>
> Vertical edges: 150 − 6 = 144.
>
> Horizontal edges: 168 (unchanged).
>
> Faces: 144 (unchanged).
>
> *Cylinder Euler characteristic:* V − E + F = 168 − (168 + 144) + 144 = 168 − 312 + 144 = 0.
>
> A cylinder has Euler characteristic 0. ✓
>
> *[pause]*
>
> *Stage 3 — torus counts.*
>
> Now identify the top and bottom edges of the cylinder. The 24 horizontal edges on the top merge with the 24 horizontal edges on the bottom. The 24 cell-corner-vertices on the top merge with the 24 on the bottom (after the previous merge made it 24 instead of 25).
>
> Vertices: 168 − 24 = 144.
>
> Horizontal edges: 168 − 24 = 144.
>
> Vertical edges: 144 (unchanged).
>
> Faces: 144 (unchanged).
>
> *Torus Euler characteristic:* V − E + F = 144 − (144 + 144) + 144 = 144 − 288 + 144 = 0.
>
> A torus has Euler characteristic 0. ✓
>
> *[pause]*
>
> *Three observations.*
>
> *Observation one.* The strip's Euler characteristic was 1 (disk). After one wrap, 0 (cylinder). After the second wrap, 0 (torus). Both wraps drop χ by 1; both wraps don't, but they net to χ = 0 because *the cylinder and the torus have the same χ*. The two wraps add a handle, but the unwrapped strip is contractible while the cylinder is already χ = 0.
>
> Actually — *let me re-examine*. Strip has χ = 1. Cylinder has χ = 0. Torus has χ = 0. Yes — the first wrap drops χ by 1; the second doesn't. The discrepancy is because the cylinder *already* has the topology of an annulus (χ = 0), and gluing the two boundary circles of the annulus produces the torus (χ = 0). The cylinder is the *intermediate* topology; the topology shift happens at the first wrap.
>
> *Observation two.* The face count (cells) is invariant. 144 cells throughout. *Wraps preserve the cell count*; they only change which cells are *adjacent* to which others.
>
> *Observation three.* On the torus, *every cell has the same neighbour count*. Each cell has 4 neighbours (up, down, left, right) with no edge cases. On the strip, edge cells had fewer neighbours. *The wrap eliminates edge cases.*
>
> *[pause]*
>
> Practical takeaway. *The wrap doesn't lose information; it just reorganises adjacency.* The 144 cells remain; their neighbour-graph becomes uniform (every cell has 4 neighbours) once the wrap is complete. The torus is a *uniformly connected* version of the grid."

## 5. Try it (4:30–5:30)
> "Pause. Note the Euler characteristics: strip 1, cylinder 0, torus 0. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. Make a paper torus from the printed grid."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-343 (vertex-edge-face counts for each of three stages, with Euler characteristic).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (tally counters).
- Music cue: counting motif.
