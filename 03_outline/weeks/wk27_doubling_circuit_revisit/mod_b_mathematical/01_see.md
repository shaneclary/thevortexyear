Wk 27 — Theme: Doubling Circuit Revisited (as Coil Winding) — Lens 1: See — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Opens Mod-B Wk 27. Helix parametrised explicitly. Mathematical content of the doubling-cycle helix.

## 1. Outcome
Student can write down an explicit parametrisation of the doubling-cycle helix on the ABHA Torus.

## 2. Hook (0:00–0:30)
*[A torus surface with a parametrised curve traced on it; equations in (θ, φ) visible beside; standard mathematical notation.]*

> "Helix parametrised. Explicit equations. Six minutes."

## 3. Setup (0:30–1:00)
> "Mod B opens. Lens 1 of 9. Mathematical content of the helix."

## 4. Body (1:00–4:30)

> "Mod A engaged the helix at foundational level. Mod B turns to *explicit mathematical parametrisation*.
>
> *[pause]*
>
> *Standard torus parametrisation.*
>
> A torus in 3D space, with major radius R and minor radius r, can be parametrised by two angles:
>
> *θ — the major-circle angle (0 to 2π).*
>
> *φ — the minor-circle angle (0 to 2π).*
>
> The Cartesian coordinates of a point on the torus surface are:
>
> *x = (R + r cos φ) cos θ.*
>
> *y = (R + r cos φ) sin θ.*
>
> *z = r sin φ.*
>
> Standard parametrisation; mainstream toroidal geometry.
>
> *[pause]*
>
> *The doubling-cycle helix as a curve on the torus.*
>
> The helix is *a curve traced on the torus surface*. As the parameter t advances from 0 to 2π (one cycle), the helix advances through θ and φ at specific rates.
>
> *Standard helix parametrisation.*
>
> *θ(t) = t — one full major-circle progression as t goes 0 to 2π.*
>
> *φ(t) = n × t — n full minor-circle progressions per major; n is the helix winding number.*
>
> For the doubling-cycle helix:
>
> *Major progression: 1 full turn per cycle.* So θ(t) = t over t ∈ [0, 2π].
>
> *Minor progression: n full turns per major.* The value of n is **`[ORG-INPUT]`**-pending; candidates are 1, 2, or 3.
>
> *So:* *φ(t) = n × t, with n ∈ {1, 2, 3}.*
>
> *[pause]*
>
> *Discrete-position parametrisation.*
>
> The doubling cycle has *six discrete positions* (1, 2, 4, 8, 7, 5), not a continuous t. *The discrete helix samples the continuous helix at six points.*
>
> *Discrete sample.* At step k (k = 0, 1, 2, 3, 4, 5):
>
> *θₖ = k × (2π/6) = k × 60°.*
>
> *φₖ = n × k × (2π/6) = n × k × 60°.*
>
> *Six (θ, φ) pairs:*
>
> *Step 0 (cycle position 1): (0°, 0°).*
>
> *Step 1 (cycle position 2): (60°, 60° × n).*
>
> *Step 2 (cycle position 4): (120°, 120° × n).*
>
> *Step 3 (cycle position 8): (180°, 180° × n).*
>
> *Step 4 (cycle position 7): (240°, 240° × n).*
>
> *Step 5 (cycle position 5): (300°, 300° × n).*
>
> *Step 6 (back to position 1): (360°, 360° × n).*
>
> *Closure requires*: φ at step 6 ≡ 0 (mod 360°). *So 360° × n ≡ 0 (mod 360°), which holds for any integer n.* *Cycle closes for n ∈ {1, 2, 3, ...}*; foundation specification picks the canonical n.
>
> *[pause]*
>
> *Three observations on the explicit parametrisation.*
>
> *Observation one — equations are mainstream.* *Standard torus parametrisation; standard helix-on-torus formulas.* *Layer-1 mathematics; defendable.*
>
> *Observation two — closure is satisfied for any integer n.* *Multiple n-values close the cycle*; foundation choice picks one. *Engineering choice constrained but not unique.*
>
> *Observation three — specific n affects winding density.* *Higher n means tighter wrapping around the tube*. *Inductance and electromagnetic properties depend on n.*
>
> *[pause]*
>
> *Three uses of the explicit parametrisation.*
>
> *Use 1 — coordinate calculation.* For any step k, *(θₖ, φₖ) gives toroidal coordinates*. *Cartesian coordinates follow from the standard torus formula.* *Quantitative location.*
>
> *Use 2 — wire-length calculation.* *Wire length per cycle* = ∫₀^{2π} |dr/dt| dt, integrated along the helix path. *Standard arc-length calculation; gives wire procurement specification.*
>
> *Use 3 — electromagnetic analysis prep.* *Inductance, resonance, magnetic field — all calculable from the explicit parametrisation*. *Q3's analysis depends on this.*
>
> *[pause]*
>
> *Where Mod B goes this week.*
>
> *Lens 1 (today).* Helix parametrised explicitly.
>
> *Lens 2.* Prove circuit-as-helix-closure.
>
> *Lens 3.* Construct the path as a function of (col, row).
>
> *Lens 4.* Rodin on the unification.
>
> *Lens 5.* Retroactive coherence of the spiral.
>
> *Lens 6.* Helix = circuit in toroidal coordinates.
>
> *Lens 7.* Toroidal helix in topology vs EM.
>
> *Lens 8.* Show the helix uses every Q2 result.
>
> *Lens 9.* Sets up Wk 28's antipode story.
>
> *[pause]*
>
> Practical takeaway. *The doubling-cycle helix has explicit mathematical parametrisation*: θ(t) = t, φ(t) = n × t, with n ∈ {1, 2, 3} (canonical pending **`[ORG-INPUT]`**). *Discrete cycle samples at k × 60°.* *Standard mainstream formulas; defendable; quantitatively specified.*"

## 5. Try it (4:30–5:30)
> "Pause. Write down θₖ and φₖ for k = 0, 1, 2, 3, 4, 5 with n = 2. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Prove circuit-as-helix-closure."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-608 (parametrised helix on torus; (θ, φ) equations; six-point discrete sample).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (parametrised curve).
- **`[ORG-INPUT]`** — canonical n value for minor-turn density.
- Music cue: opening, mathematical.
