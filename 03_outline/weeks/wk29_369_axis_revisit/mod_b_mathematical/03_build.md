Wk 29 — Theme: 3-6-9 Pulse Revisited (as Triggering Axis) — Lens 3: Build — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Construct the axial coordinate. Mathematical construction of the axial coordinate as supplement to (θ, φ) toroidal coordinates.

## 1. Outcome
Student can construct the axial coordinate z explicitly and use it alongside (θ, φ) for full 3D positioning of points on/around the torus.

## 2. Hook (0:00–0:30)
*[A torus with three coordinates labeled: θ (major angle), φ (minor angle), z (axial); 3D coordinate system visible.]*

> "Construct the axial coordinate. Three coordinates total. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 3 of 9. Construct the axial coordinate."

## 4. Body (1:00–4:30)

> "Lens 2 quantified the orthogonal axis. Today: *construct the axial coordinate explicitly* — supplementing (θ, φ) toroidal coordinates with z (axial).
>
> *[pause]*
>
> *Recall (θ, φ) toroidal coordinates.*
>
> Standard parametrisation of the torus surface:
>
> *x = (R + r cos φ) cos θ.*
>
> *y = (R + r cos φ) sin θ.*
>
> *z_surface = r sin φ.*
>
> *(θ, φ) parametrise points on the torus surface only.*
>
> *Adding the axial coordinate.*
>
> *For points off the torus surface — including the axis itself and the surrounding region — we need a third coordinate*. *Define z (axial coordinate) as the height along the symmetry axis.*
>
> *Now full 3D position is:*
>
> *(θ, ρ, z), where:*
>
> *θ = major angle around the axis (0 to 2π).*
>
> *ρ = radial distance from the axis (any positive real).*
>
> *z = height along the axis (any real).*
>
> *(θ, ρ, z) is the standard cylindrical coordinate system in R³.*
>
> *[pause]*
>
> *Cylindrical-to-toroidal correspondence.*
>
> *On the torus surface, the cylindrical coordinates (θ, ρ, z) map to toroidal (θ, φ) by:*
>
> *ρ = R + r cos φ.*
>
> *z = r sin φ.*
>
> *(θ on torus = θ in cylindrical coordinates, by convention.)*
>
> *On-surface points have specific (ρ, z) determined by φ; off-surface points have (ρ, z) free.*
>
> *[pause]*
>
> *On the axis specifically.*
>
> *The axis is at ρ = 0 (zero radial distance from axis).*
>
> *Points on the axis*: (θ, 0, z) for any θ (since at ρ = 0, all θ converge to the same line); *parametrise by z alone*.
>
> *Axis is the z-axis in cylindrical coordinates*.
>
> *[pause]*
>
> *Three points and their coordinates.*
>
> *Point 1 — torus outer-equator at θ = 0°, φ = 0°.*
>
> *(θ, φ) = (0°, 0°). Cylindrical: (θ, ρ, z) = (0°, R + r, 0).*
>
> *For R = 60, r = 15: (0°, 75, 0).*
>
> *Point 2 — torus inner-equator at θ = 0°, φ = 180°.*
>
> *(θ, φ) = (0°, 180°). Cylindrical: (θ, ρ, z) = (0°, R - r, 0).*
>
> *For R = 60, r = 15: (0°, 45, 0).*
>
> *Point 3 — on the axis, at height 30.*
>
> *Cylindrical: (any θ, 0, 30). Not on the torus surface.*
>
> *Three reference points; coordinates verified.*
>
> *[pause]*
>
> *Three uses of the axial coordinate.*
>
> *Use 1 — describe axial-drive wire position.* *Drive wire follows the axis from z = -L to z = +L (some length L)*. *Cylindrical (any θ, 0, z) for z in [-L, L].*
>
> *Use 2 — measure distance from axis.* *Magnetic field strength from axis current: B(ρ) = μ₀I/(2πρ)*. *Distance from axis is ρ; engineering calculation.*
>
> *Use 3 — describe field at any point.* *Once full 3D coordinates exist, fields, currents, and forces at any point are specifiable*. *Engineering analysis full-3D.*
>
> *[pause]*
>
> *Three observations on the construction.*
>
> *Observation one — cylindrical coordinates are standard.* *(θ, ρ, z) is mainstream coordinate system*; *VBM uses standard tools.*
>
> *Observation two — toroidal coordinates are a 2D sub-parametrisation.* *(θ, φ) parametrises the surface only*; *cylindrical (θ, ρ, z) parametrises all of R³*. *Different scopes.*
>
> *Observation three — the axis is a coordinate axis itself.* *In (θ, ρ, z), the axis is the z-axis (where ρ = 0)*; *cylindrical coordinate degenerates at the axis (θ undefined when ρ = 0)*. *Standard cylindrical-coordinate edge-case.*
>
> *[pause]*
>
> Practical takeaway. *Construct the axial coordinate explicitly: cylindrical (θ, ρ, z) extends the toroidal (θ, φ) to full 3D space.* *Axis is z-axis with ρ = 0.* *Standard coordinate system; engineering-ready; full 3D positioning.*"

## 5. Try it (4:30–5:30)
> "Pause. Compute cylindrical coordinates of three points on a torus with R = 60, r = 15: outer equator at θ = 90°, inner equator at θ = 90°, top of tube at θ = 0°. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Marko on the orthogonal structure."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-654 (cylindrical coordinates (θ, ρ, z) on torus; three reference points with coordinates).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (3D coordinate system).
- Music cue: building/computational.
