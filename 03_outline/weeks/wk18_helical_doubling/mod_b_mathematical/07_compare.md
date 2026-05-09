Wk 18 — Theme: Helical Doubling on the Torus — Lens 7: Compare — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Toroidal helix vs straight-axis helix. Mathematical comparison of the two helix families.

## 1. Outcome
Student can articulate the formal differences between toroidal helices and straight-axis helices using their parametrisations.

## 2. Hook (0:00–0:30)
*[Two parametric formulas: straight-axis helix r(t) = (cos t, sin t, ct); toroidal helix r(t) = (R + r cos qt) cos pt, etc.]*

> "Two parametrisations. Two helix families. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 7 of 9. Compare toroidal and straight-axis helices formally."

## 4. Body (1:00–4:30)

> "*Straight-axis helix.* Parametrised in 3D by:
>
> r(t) = (cos t, sin t, c t)
>
> Where t ∈ ℝ is a parameter and c is the *pitch* — vertical distance per radian of angle. Common in solenoids, screws, springs.
>
> *Toroidal helix.* Parametrised in 3D by:
>
> r(t) = ((R + r cos qt) cos pt, (R + r cos qt) sin pt, r sin qt)
>
> Where p and q are the winding numbers, R is the major radius, r is the minor radius. Common in toroidal inductors, the Rodin Coil.
>
> *[pause]*
>
> Three structural similarities.
>
> *Similarity one — both are 3D curves.* Both live in three-dimensional space. Both can be visualised, drawn, photographed.
>
> *Similarity two — both are smooth.* Both parametrisations are smooth (differentiable infinitely often). No corners or kinks.
>
> *Similarity three — both are *helical* in the colloquial sense.* Both wind around an axis. Both have a sense of 'progressing forward while rotating'.
>
> *[pause]*
>
> Three formal differences.
>
> *Difference one — axis topology.* Straight-axis helix's axis is the *real line* ℝ — open, unbounded, simply connected. Toroidal helix's axis is the *circle* S¹ — closed, bounded, with non-trivial topology (one hole).
>
> *Consequence.* The straight-axis helix is *open* (extends to infinity in both directions if t ∈ ℝ). The toroidal helix is *closed* (forms a closed loop when (p, q) are integers).
>
> *Difference two — closure conditions.* The straight-axis helix never closes regardless of c. The toroidal helix closes if and only if (p, q) are rational; if integer, after a finite number of t-units. *Closure is automatic for integer (p, q) on tori.*
>
> *Difference three — genus and homology.* Straight-axis helix: lives in a space of genus 0 (cylinder topologically a sphere with two points removed, but extending to infinity, so non-compact). Toroidal helix: lives on a surface of genus 1 (the torus). *Homology: H₁(cylinder) = ℤ; H₁(torus) = ℤ × ℤ.* The toroidal helix has *richer* homology because it can wind in two independent directions.
>
> *[pause]*
>
> *Practical implications.*
>
> *Implication one — solenoid uses straight-axis.* For applications where you want a *uniform field along an axis* (electromagnets, MRI coils), the straight-axis helix is the right choice. The infinite extension allows uniform field direction.
>
> *Implication two — toroidal closure.* For applications where you want *closed magnetic circuits* (toroidal inductors, transformers), the toroidal helix is required. Closure means no end-effects; the field stays bound.
>
> *Implication three — VBM specifically uses toroidal.* The doubling helix is on a torus because *the underlying arithmetic is cyclic in two independent ways*. The (p, q) winding numbers reflect this. *A straight-axis helix wouldn't host the structure.*
>
> *[pause]*
>
> *Why mainstream physics uses both.*
>
> Mainstream electromagnetism uses *both* straight-axis and toroidal helices, depending on application. There's no preference; engineers pick what suits the geometry of the problem.
>
> *VBM picks toroidal* because the *Number Map* has two cyclic axes. The choice is forced by the underlying mathematics, not by aesthetic preference.
>
> *[pause]*
>
> Useful framing. *Toroidal helix is the natural helix for two-cyclic-structure objects. Straight-axis helix is the natural helix for one-cyclic-plus-one-linear-structure objects. Both are real, useful, mathematically well-defined; they suit different problems.*
>
> Practical takeaway. *When discussing the doubling helix with engineers, position it as a toroidal helix.* This places it in the inductor / transformer / Rodin family. The (p, q) parameters then specify *which* toroidal helix.
>
> A small note. In some texts, *helix* is reserved for straight-axis curves, and toroidal helices are called *toroidal coils* or *toroidal windings*. Vocabulary varies; the mathematics is consistent."

## 5. Try it (4:30–5:30)
> "Pause. Note in your build log: which helix family is the doubling helix in, and what specifies its position in the family? Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Defend. Why the helix is forced by the math."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-403 (parametric formulas side-by-side).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (formulas).
- Music cue: comparative, structural.
