Wk 16 — Theme: Wrapping to a Torus — Lens 6: Apply — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Use the quotient view to compute intersection numbers. The torus's two cycles intersect; the count is meaningful.

## 1. Outcome
Student can compute intersection numbers of cycles on the torus using the quotient (ℤ/6ℤ × ℤ/24ℤ).

## 2. Hook (0:00–0:30)
*[Two cycles drawn on the torus surface — one going around the major axis, one around the minor — meeting at one point.]*

> "Two cycles. One intersection. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Compute intersection numbers."

## 4. Body (1:00–4:30)

> "Today we apply the quotient view to a topological computation: how many times do two cycles on the torus intersect?
>
> *[pause]*
>
> *Setup.* Two simple cycles on the torus.
>
> *Cycle a — the meridian.* Walk the minor circle (around the small circumference of the doughnut). 6 cells visited. Closes after 6 steps.
>
> *Cycle b — the longitude.* Walk the major circle (around the major circumference). 24 cells visited. Closes after 24 steps.
>
> These two cycles each pass through *one* common cell — the cell at (0, 0) where they meet.
>
> *Intersection number.* a · b = 1.
>
> *[pause]*
>
> *More general cycles.*
>
> *Cycle p_a — winding 'a' times around minor and 'b' times around major.* Steps: takes lcm(6/gcd(a, 6), 24/gcd(b, 24)) cells. Lots of detail. Rather than working out, let's use a cleaner setup.
>
> Identify cycles with elements of H₁(T²) ≅ ℤ × ℤ. A cycle is specified by *(p, q)* — winds p times in the minor direction, q times in the major direction.
>
> *Intersection number formula.* For cycles α = (p₁, q₁) and β = (p₂, q₂):
>
> α · β = p₁ q₂ − p₂ q₁.
>
> The intersection number is the *determinant* of the 2×2 matrix formed by the two cycles' winding numbers.
>
> *[pause]*
>
> *Three computations.*
>
> *Computation 1.* Meridian (1, 0) and longitude (0, 1). Intersection: 1·1 − 0·0 = 1. *They cross once.* ✓
>
> *Computation 2.* Diagonal cycle (1, 1) and meridian (1, 0). Intersection: 1·0 − 1·1 = −1. *They cross once with opposite orientation.* The sign indicates orientation; the *unsigned count* is 1.
>
> *Computation 3.* Two diagonal cycles (1, 1) and (1, 2). Intersection: 1·2 − 1·1 = 1. *They cross once.*
>
> *Computation 4.* Two diagonal cycles (1, 1) and (2, 1). Intersection: 1·1 − 2·1 = −1. *They cross once.*
>
> *Computation 5.* Two more complex cycles (2, 3) and (3, 5). Intersection: 2·5 − 3·3 = 10 − 9 = 1. *They cross once.*
>
> *[pause]*
>
> *General observation.* Cycles with coprime winding-number pairs (gcd(p, q) = 1) are *simple* cycles. Two simple cycles intersect at *one* point if their winding-number pairs are *coprime*; more generally, the intersection count tracks the *orientation difference*.
>
> *[pause]*
>
> *Why this matters for VBM.*
>
> The Rodin Coil winding has a specific (p, q) structure. The doubling cycle on the torus winds (p, q) times in (minor, major) directions. *Computing intersections of multiple coil winds* (multi-strand coils, where strands are each their own cycle) requires the intersection-number machinery. Two strands with different (p, q) values *cross* each other on the surface — at one point if coprime, more if not.
>
> Q3's multi-strand coil designs use this implicitly. Strand crossings affect the coil's electromagnetic properties. *Counting crossings is therefore engineering-relevant.*
>
> *[pause]*
>
> *Three observations.*
>
> *Observation one.* The intersection-number formula is *one line of arithmetic*. The torus's topology is captured by 2×2 determinants. Topology of small surfaces is small mathematics.
>
> *Observation two.* Not every pair of integers gives a *simple cycle*. (2, 4) doesn't — gcd is 2, so the 'cycle' actually wraps as (1, 2) but doubled. Intersection numbers should be computed only for cycles with coprime winding numbers, or interpreted with multiplicity.
>
> *Observation three.* Intersection numbers are *invariants*. They don't depend on how you draw the cycles, only on their winding behaviour. Two homotopic deformations of the same cycle have the same intersection numbers with everything.
>
> *[pause]*
>
> Practical takeaway. *Use the (p, q) and determinant formula whenever you need to count crossings of toroidal paths.* Q3 will use this. Today is the introduction."

## 5. Try it (4:30–5:30)
> "Pause. Compute intersection of (3, 4) and (5, 7). Sixty seconds. Answer: 3·7 − 5·4 = 21 − 20 = 1."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. S¹ × S¹ vs S² vs S¹ × ℝ."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-354 (intersecting cycles on the torus, with formula).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (two cycles meeting).
- Music cue: working/applied.
