Wk 19 — Theme: Antipodal Pairs in 3D — Lens 8: Defend — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft. **`[ORG-REVIEW]`**

---

## 0. Authoring notes
Fifty-fifth Defend. *The pairs aren't exactly antipodal* — show that they are, on the torus.

## 1. Outcome
Student can defend the claim that polar pairs are exact antipodes on the torus, addressing the precision concern.

## 2. Hook (0:00–0:30)
*[A skeptic's diagram showing slight offset between paired cells; the corrected diagram showing exact alignment.]*

> "*Are they really antipodal?* Six minutes proving it."

## 3. Setup (0:30–1:00)
> "Lens 8 of 9. Defend exact antipodal alignment."

## 4. Body (1:00–4:30)

> "The objection. *VBM claims polar pairs are antipodes on the torus, but on a real physical torus the cells are spread across small regions. Antipodal points are mathematical; cells are extended. Are they really *exactly* antipodal, or is the alignment approximate?*
>
> The objection is fair to ask. The answer requires distinguishing *cell positions as mathematical objects* from *cell extents as physical regions*.
>
> *[pause]*
>
> *Mathematical claim.* On the torus T² = ℤ/24ℤ × ℤ/6ℤ, each cell is a *single point in coordinates* (col, row). The antipodal map α(col, row) = (col + 12 mod 24, row + 3 mod 6) takes each cell-point to a unique cell-point. *Polar pair partners are exact antipodes by definition of the map.*
>
> The claim is *exactly* true at the mathematical level. There's no approximation; the map is bijective and well-defined.
>
> *[pause]*
>
> *Physical objection.* On a paper or 3D-printed torus, each cell is a *small region* of the surface — say, 1 cm² for a 10 cm major / 2.5 cm minor torus. The cell's *centre* is at (col, row); its extent covers a small area around the centre.
>
> *Antipodes between cell centres are exact.* Between cell extents, there's a slight overlap — the antipode of a non-centre point of cell A is *near but not exactly* the centre of cell B's antipode.
>
> The maximum offset is half a cell-width — about 0.5 cm for our torus.
>
> *[pause]*
>
> *How to handle the precision question.*
>
> *For mathematical work.* Antipodes are exact. The cell at (0, 0) has antipode exactly at (12, 3). No offset. Use this when computing.
>
> *For physical work.* Antipodes between *cell centres* are exact. Between arbitrary points within cells, the antipode is *approximate within a half-cell*.
>
> *In practice for coil winding.* Wire passes through cell centres (or close to them). *Cell-centre antipodes are what matter for the wind path*; the half-cell uncertainty doesn't propagate to the wire.
>
> *[pause]*
>
> *Why the precision concern is sometimes raised.*
>
> *Reason 1.* New students sometimes worry that on the physical torus, the *mark* representing a cell isn't precisely at the cell centre. If the marker is 1 mm off, the antipode could be 1 mm off too.
>
> *Answer.* This is a *marking precision* issue, not a topology issue. Marks should be at cell centres; if they're not, redo the marking. *The math is exact; the marking should follow the math.*
>
> *Reason 2.* Some practitioners conflate *coordinate antipode* (defined by the modular map) with *Euclidean-distance antipode* (the point in 3D space farthest from the source point on the torus surface). These coincide for our 6 × 24 cells with our standard torus dimensions, but in principle could diverge for non-standard torus shapes.
>
> *Answer.* The course uses *coordinate antipodes* — defined by the map (col + 12, row + 3). For standard torus dimensions, these are *Euclidean-distance maxima* as well. Both are exact.
>
> *[pause]*
>
> So the calibrated answer to *the pairs aren't exactly antipodal*:
>
> *On the torus T² = ℤ/24ℤ × ℤ/6ℤ, the antipodal map α(col, row) = (col + 12, row + 3) is exact, well-defined, and bijective. Cell centres at (col, row) and α(col, row) are mathematical antipodes by definition. Physical realisations have marking precision issues at the half-cell scale, but the underlying mathematics is exact. For mathematical work, antipodes are exact; for physical builds, marking should follow the math. The pairs are exactly antipodal in the relevant sense.*
>
> Around eighty words.
>
> *[pause]*
>
> Practical takeaway. *Distinguish mathematical exactness from physical-marking precision.* The math is exact; build precision is a separate concern. Mathematicians who raise the precision concern are usually asking about the math; reassure them on that level. Builders who raise it are usually asking about marking; address that level instead."

## 5. Try it (4:30–5:30)
> "Pause. Say the eighty-word defence in your own words. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Connect. Antipodes lead to the 3-6-9 axis."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-420 (calibrated-answer card, fifty-fifth — exact antipode defence).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (skeptic vs corrected diagram).
- **`[ORG-REVIEW]`** — calibrated-answer template.
