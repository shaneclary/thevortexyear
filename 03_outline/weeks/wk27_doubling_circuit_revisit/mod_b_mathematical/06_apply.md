Wk 27 — Theme: Doubling Circuit Revisited (as Coil Winding) — Lens 6: Apply — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Helix = circuit, in toroidal coordinates. Apply the unification by translating circuit operations into toroidal-coordinate operations and verifying.

## 1. Outcome
Student can apply the helix-circuit unification by translating doubling-cycle operations into toroidal-coordinate operations.

## 2. Hook (0:00–0:30)
*[Two columns side by side: arithmetic operations on the doubling cycle on the left; toroidal-coordinate operations producing same results on the right.]*

> "Apply the unification. Helix = circuit. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply: helix = circuit in coordinates."

## 4. Body (1:00–4:30)

> "Lenses 1-5 established the helix-circuit unification. Today: *apply it* — translating doubling-cycle operations into toroidal-coordinate operations.
>
> *[pause]*
>
> *Three operations to translate.*
>
> *Operation 1 — 'next position in cycle'.*
>
> *Arithmetic.* For position p, next position is *(2p) mod 9*. *Wk 4's basic operation.*
>
> *Toroidal coordinates.* For step k at (θₖ, φₖ), next position is at (θₖ₊₁, φₖ₊₁) = ((k+1) × 60°, n × (k+1) × 60°). *Same operation; different presentation.*
>
> *Verify.* Starting at position 1 = step 0 = (0°, 0°). Next: position 2 = step 1 = (60°, 60° × n). Match: arithmetically (2×1 = 2, position 2); toroidally ((60°, 60° × n)). *Both presentations give 'position 2' at step 1.* *Verified.*
>
> *[pause]*
>
> *Operation 2 — 'cycle index'.*
>
> *Arithmetic.* For position p, find k such that 2^k ≡ p (mod 9). *Discrete logarithm in (Z/9Z)*.*
>
> *Toroidal coordinates.* For position at (θ, φ), find k such that θ = k × 60° and φ = n × k × 60°. *Trivially: k = θ/60°.* *Same operation; different presentation.*
>
> *Verify.* Position 4 → arithmetically: 2² = 4, so k = 2; toroidally: at (120°, 120° × n), k = 120°/60° = 2. *Both give k = 2.* *Verified.*
>
> *[pause]*
>
> *Operation 3 — 'cycle order'.*
>
> *Arithmetic.* The cycle's *order* is 6 (smallest k such that 2^k ≡ 1 (mod 9)). *Group-theoretic.*
>
> *Toroidal coordinates.* The helix's *period* is 6 steps (smallest k such that (k×60°, n×k×60°) ≡ (0, 0) mod 360°). *Topological.*
>
> *Verify.* Both give 6.
>
> *Operation order = helix period.* *Same number; algebraic and topological agree.*
>
> *[pause]*
>
> *Three observations on the application.*
>
> *Observation one — operations translate one-to-one.* *Every arithmetic operation on the cycle has a toroidal-coordinate equivalent*. *Bidirectional translation; mathematical equivalence demonstrated by example.*
>
> *Observation two — verification is mechanical.* *Each translation can be verified by computing both representations and checking equality*. *Hand-checkable; no ambiguity.*
>
> *Observation three — engineering operations follow.* *Once the translation is established, engineering operations on the helix (wire routing, current direction, magnetic field calculation)* *can be done in either representation*. *Choice depends on convenience.*
>
> *[pause]*
>
> *Three engineering operations to translate next (preview).*
>
> *Engineering op 1 — wire-length per turn.* Arithmetic: counts cycle traversals. Toroidal: arc-length integral. *Both achievable.*
>
> *Engineering op 2 — current flow direction.* Arithmetic: cycle direction (1 → 2 vs 1 → 5). Toroidal: helix orientation (clockwise vs counter). *Same direction; both representations agree.*
>
> *Engineering op 3 — multi-strand routing.* Arithmetic: multiple cycles offset by group elements. Toroidal: multiple helices offset on the torus. *Same offset; both representations.*
>
> *Future Q3 lessons will use these.*
>
> *[pause]*
>
> *What this lens enables.*
>
> *Enable 1 — choice of representation.* *Practitioners can use whichever representation is convenient*. *Arithmetic for symbolic work; toroidal for geometric/engineering work.*
>
> *Enable 2 — verification procedure.* *Disagreements between representations indicate errors*. *Cross-check by computing both ways.*
>
> *Enable 3 — code implementation.* *Engineering simulations can be written in either representation*. *(col, row) tables (Lens 3) suit code; (θ, φ) parametrisation suits analytical.*
>
> *[pause]*
>
> Practical takeaway. *Apply the helix-circuit unification by translating operations between representations.* Three operations demonstrated; bidirectional; verified by example. *Choose representation per convenience; cross-check for verification.*"

## 5. Try it (4:30–5:30)
> "Pause. Pick a doubling-cycle operation (e.g., 'previous position') and translate it to toroidal coordinates. Verify by example. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. Toroidal helix in topology vs EM."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-611 (operation-translation table; arithmetic vs toroidal-coordinate for three operations).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (two-column translations).
- Music cue: applied/integrative.
