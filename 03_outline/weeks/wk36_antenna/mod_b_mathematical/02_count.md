Wk 36 — Theme: Antenna Applications — Lens 2: Count — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft. **`[ORG-INPUT]`**

---

## 0. Authoring notes
Predict gain from topology. Mathematical content: estimate Rodin Coil's antenna gain from its (col, row) winding geometry using mainstream antenna-theory tools. Sets up Lens 3's impedance computation.

## 1. Outcome
Student can predict Rodin Coil's antenna gain by treating multi-strand structure as toroidal phased array and applying mainstream array-factor analysis.

## 2. Hook (0:00–0:30)
*[A formula card with array factor: F(θ, φ) = Σ_i exp(j · k · r_i · cos α_i + φ_i); below it a numerical worked example with 6 strands at 60° offsets giving azimuthal-symmetric pattern. "Topology → array factor."]*

> "Predict gain from topology. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Predict gain."

## 4. Body (1:00–4:30)

> "Mainstream antenna theory has tools. *Today: apply them to Rodin Coil's multi-strand topology*.
>
> *[pause]*
>
> *Treat Rodin Coil as toroidal phased array.*
>
> *Each strand carries RF current; each strand is an antenna element*; *multi-strand coil = phased array*; *array elements positioned at the strand entry points*; *element phasing = strand phase shifts*.
>
> *Standard antenna-array analysis applies*. *Pattern of array = pattern of single element × array factor*.
>
> *[pause]*
>
> *Single-strand pattern (the element pattern).*
>
> *A single Rodin Coil strand winds around the torus along the (1, n) helix*. *As an antenna element, it radiates*; *pattern depends on coil dimensions vs. wavelength*.
>
> *For coil-size << λ (HF range)*: *element pattern ≈ small-loop antenna pattern*; *azimuthal-symmetric figure-eight in plane perpendicular to coil axis*.
>
> *For coil-size ~ λ (VHF range)*: *more complex pattern*; *standing-wave effects on coil wire*.
>
> **`[ORG-INPUT]`** for canonical operating frequency and resulting element pattern.
>
> *[pause]*
>
> *Array factor for multi-strand.*
>
> *Array factor F(θ, φ) = Σ_i exp(j · k · r_i · cos α_i + φ_i)*
>
> *Where*:
>
> *k = 2π/λ — wavenumber*.
>
> *r_i — position vector of strand i's entry point*.
>
> *α_i — angle between r_i and observation direction (θ, φ)*.
>
> *φ_i — phase shift of strand i (=0 for in-phase fed, equal to entry-point phase shift for symmetric drive)*.
>
> *Sum over all strands*.
>
> *[pause]*
>
> *Worked example — 6-strand Rodin Coil, equispaced phasing.*
>
> *Strand entry points at azimuthal angles φ = 0°, 60°, 120°, 180°, 240°, 300° on outer equator*.
>
> *r_i = R · (cos φ_i, sin φ_i, 0)* in coil's local coordinates*.
>
> *For observation direction along coil axis (θ = 0)*: *array factor sums to 6 (constructive); maximum*.
>
> *For observation direction in equatorial plane (θ = 90°)*: *array factor sums to ~0 (destructive across azimuthal angles)*; *minimum*.
>
> *Pattern: along-axis (poloidal) maximum; equatorial-plane minimum*.
>
> **`[ORG-INPUT]`** for canonical pattern shape; this is rough first-order analysis*.
>
> *[pause]*
>
> *Predicted gain estimate.*
>
> *Maximum gain G_max ≈ G_element + 10 · log10(N_eff)*
>
> *Where N_eff is effective number of elements contributing to peak gain*. *For 6-strand coil with perfect alignment, N_eff = 6; G_array_factor = 7.8 dB*.
>
> *Element gain G_element*: *small-loop antenna G ≈ -3 to 0 dBi typically*; *for compact-antenna sized loop ~ R/λ << 1*.
>
> *G_max ≈ -3 + 7.8 = 4.8 dBi* (rough first-order estimate)*.
>
> *Adjusted for efficiency η ≈ 0.5-0.7*: *realised gain G_max,realised ≈ 4.8 + 10 · log10(0.6) ≈ 2.6 dBi*.
>
> **`[ORG-INPUT]`** for refinement of this estimate; full electromagnetic simulation (e.g., NEC, FEKO) would be more precise.
>
> *Working prediction: 0-5 dBi range; specific value depends on operating frequency and feed configuration*.
>
> *[pause]*
>
> *Three things this prediction enables.*
>
> *Enable one — measurement target.* *Wk 36's measurement aims to verify predicted gain*; *prediction provides target value*.
>
> *Enable two — design parameter sensitivity.* *Strand count, phase offsets, coil dimensions all affect gain prediction*; *can explore design space mathematically before building*.
>
> *Enable three — diagnostic power.* *If measured gain significantly differs from prediction, possibilities include: build defect, theoretical assumption violated, or new effect*; *diagnostic ladder follows*.
>
> *[pause]*
>
> *Three caveats on the prediction.*
>
> *Caveat one — first-order analysis only.* *Array-factor analysis ignores mutual coupling between strand elements; for closely-spaced strands (Rodin Coil), coupling is significant*; *full analysis requires coupled-element treatment*. **`[ORG-INPUT]`** for whether course canonically uses simulation tools.
>
> *Caveat two — element pattern approximation.* *Treating each strand as small loop is approximation*; *strands are helical not circular; corrections apply*; *full element pattern from numerical simulation*.
>
> *Caveat three — efficiency uncertainty.* *Antenna efficiency depends on conductor losses, dielectric losses (former material), ground-plane interaction*; *efficiency estimate is the largest uncertainty*; *measurement essential*.
>
> *[pause]*
>
> Practical takeaway. *Predict Rodin Coil gain by treating multi-strand as toroidal phased array; element pattern × array factor.* *Worked estimate for 6-strand: ~2-5 dBi at HF compact regime, depending on operating frequency and feed.* *Three caveats: mutual coupling, element-pattern approximation, efficiency uncertainty.* **`[ORG-INPUT]`** for canonical refined prediction."

## 5. Try it (4:30–5:30)
> "Pause. Compute array factor's peak value for your strand count. Estimate G_element + 10·log10(N) as crude gain prediction. Note assumptions made. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compute expected impedance match."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-812 (array-factor formula card; worked example for 6-strand Rodin Coil; gain prediction calculation).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (predict gain).
- **`[ORG-INPUT]`** — canonical operating frequency; canonical pattern shape; refined gain prediction; simulation-tool use.
- Music cue: opening, computational/predictive.
