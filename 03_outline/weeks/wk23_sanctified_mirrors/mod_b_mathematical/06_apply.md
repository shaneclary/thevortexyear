Wk 23 — Theme: Sanctified Mirrors — Lens 6: Apply — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Apply projection theorem. Use the projection theorem to derive specific properties of Mirrors.

## 1. Outcome
Student can apply the projection theorem to derive properties of toroidal-lattice projections.

## 2. Hook (0:00–0:30)
*[A theorem statement: "For projection π: T^n → T², image of point (x_1, ..., x_n) is (x_i, x_j)" with example.]*

> "Projection theorem. Apply. Three problems. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply projection theorem."

## 4. Body (1:00–4:30)

> "Today's apply uses the projection theorem to compute Mirror images directly. Three worked problems.
>
> *[pause]*
>
> *Theorem (Coordinate Projection Theorem).* For T^n with coordinates (x_1, ..., x_n) and projection π onto coordinates (i, j) where i, j ∈ {1, ..., n}, i ≠ j:
>
> *π(x_1, ..., x_n) = (x_i, x_j).*
>
> The projection forgets all coordinates except i, j.
>
> *[pause]*
>
> *Problem 1 — compute a coordinate projection of T³.*
>
> Given: T³ point (3, 5, 1) (coordinates in {0, 1, 2, 3, 4, 5}).
>
> Project onto coordinates (1, 3): π(x_1, x_2, x_3) = (x_1, x_3).
>
> Image: (3, 1).
>
> *Answer: (3, 1).*
>
> *[pause]*
>
> *Problem 2 — same point, different projection.*
>
> Same T³ point (3, 5, 1).
>
> Project onto coordinates (2, 3): π(x_1, x_2, x_3) = (x_2, x_3).
>
> Image: (5, 1).
>
> *Answer: (5, 1).*
>
> *Different projection from same point gives different image.* Confirms three coordinate-axis projections of T³ give three different Mirrors.
>
> *[pause]*
>
> *Problem 3 — fiber-cardinality check.*
>
> Given: image cell (3, 1) under projection onto coordinates (1, 3) of T³ (with each axis dim = 6).
>
> Question: how many cells in T³ project to (3, 1)?
>
> *Method.* Cells (3, *, 1) with * ∈ {0, 1, 2, 3, 4, 5}. *Six cells.*
>
> *Answer: 6 cells.*
>
> The fiber over each image-cell has size equal to the dimension of the forgotten axis (in this case, axis 2 with size 6).
>
> *[pause]*
>
> *Generalisation to T^10.*
>
> For any 10D point (x_1, ..., x_10) and any 2-axis projection (i, j):
>
> Image is (x_i, x_j).
>
> Fiber over each image-cell has size = product of dimensions of the 8 forgotten axes.
>
> If all axes have dim 6: fiber size = 6^8 = 1,679,616. *Each Mirror cell corresponds to ~1.7 million Decoqubit cells.*
>
> *Each cell of a Mirror summarises a vast equivalence class of cells in the underlying Decoqubit.*
>
> *[pause]*
>
> *Three observations from the worked problems.*
>
> *Observation one.* The projection is *mechanical computation*. Given a point and a projection, you compute the image directly.
>
> *Observation two.* Different projections of the same point give different images. *Each Mirror reveals a different projection of the same underlying object.*
>
> *Observation three.* The fiber size measures *information loss*. For each Mirror cell, you've lost the value of 8 coordinates. *Significant compression.*
>
> *[pause]*
>
> Practical takeaway. *The mathematics is straightforward.* Sanctified Mirrors, framed as coordinate projections, are computable using mainstream projection theorems. *No new mathematics is needed; just patience to compute and visualise.*
>
> When **`[ORG-INPUT]`** specifies the canonical Sanctified Mirror set's specific projections, you can *compute each Mirror's image* directly using the theorem applied today."

## 5. Try it (4:30–5:30)
> "Pause. Compute π(2, 4, 5) projecting onto axes (1, 2). Sixty seconds. Answer: (2, 4)."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. Projections vs shadows in higher-dim geometry."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-522 (worked projection problems).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (theorem statement).
- Music cue: working/applied.
