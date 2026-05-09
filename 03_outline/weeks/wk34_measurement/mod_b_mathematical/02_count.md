Wk 34 — Theme: Rodin Coil — Measurement — Lens 2: Count — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Predict expected ranges from topology. Quantitative predictions for measurements from coil topology.

## 1. Outcome
Student can predict expected ranges for primary measurements from coil topology and dimensions.

## 2. Hook (0:00–0:30)
*[A prediction calculation: topology + dimensions → predicted L; predicted f_res; predicted DC R; quantitative ranges.]*

> "Predict ranges from topology. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Predict expected ranges."

## 4. Body (1:00–4:30)

> "Lens 1 set up the schematic. Today: *predict expected ranges* for measurements from topology and dimensions.
>
> *[pause]*
>
> *Predicted DC resistance.*
>
> *Formula*: *R_DC = ρ × L_wire / A*; where *ρ = 1.68 × 10⁻⁸ Ω·m for copper*; *L_wire = wire length; A = wire cross-section*.
>
> *For 0.5 m of 1.0 mm copper wire*: *L_wire = 0.5 m; A = π × (0.5 mm)² = 0.785 mm² = 0.785 × 10⁻⁶ m²*.
>
> *R_DC ≈ 1.68 × 10⁻⁸ × 0.5 / (0.785 × 10⁻⁶) = 0.011 Ω = 11 mΩ.*
>
> *Predicted range*: *0.01-0.05 Ω for typical first-build*. *Mainstream calculation*.
>
> *[pause]*
>
> *Predicted inductance.*
>
> *Formula (approximate for toroidal coil with helical winding)*: *L ≈ (μ₀ × N²)/(2π) × R × ln((R + r)/(R - r))*; *where μ₀ = 4π × 10⁻⁷ H/m; N = turn count; R, r = major, minor radii*.
>
> *For canonical Rodin Coil, R = 60 mm, r = 15 mm, N ≈ 6 (one cycle, 6 positions)*: *more complex than continuous toroidal due to discrete-position pattern*. **`[ORG-INPUT]`** *for foundation-canonical L formula*.
>
> *Predicted L*: *approximately 1-10 μH for first-build canonical coil*. **`[ORG-INPUT]`** *for refined value*.
>
> *[pause]*
>
> *Predicted self-resonant frequency.*
>
> *Formula*: *f_res = 1 / (2π √(L × C_parasitic))*.
>
> *L from above estimate; C_parasitic from wire-on-toroid geometry*: *C_parasitic ≈ 1-10 pF typical*.
>
> *Calculation*: *for L = 5 μH, C = 5 pF*: *f_res = 1 / (2π × √(5 × 10⁻⁶ × 5 × 10⁻¹²)) = 1 / (2π × 5 × 10⁻⁹) = 31.8 MHz*.
>
> *Predicted f_res*: *typically 1-50 MHz range*. **`[ORG-INPUT]`** *for foundation-canonical f_res estimates*.
>
> *[pause]*
>
> *Three observations on predictions.*
>
> *Observation one — predictions are mainstream EM.* *Standard formulas applied to canonical specifications*; *layer-1 content*.
>
> *Observation two — prediction ranges, not exact values.* *Manufacturing variation, formula approximations, parasitic effects all introduce range*; *order-of-magnitude predictions reasonable; not decimal-precise*.
>
> *Observation three — measurements within predicted range support build correctness.* *If measured L is 5 μH and prediction is 1-10 μH, build is consistent with spec*; *if measured 50 μH, build deviates significantly*. *Quality verification*.
>
> *[pause]*
>
> *Three engineering uses of predicted ranges.*
>
> *Use 1 — sanity-check measurements.* *Wildly off prediction → instrument error or build error*; *check before concluding*.
>
> *Use 2 — equipment selection.* *Predicted L of 5 μH means LCR meter must measure μH range accurately*; *equipment-spec matching*.
>
> *Use 3 — refinement of formulas.* *Multiple practitioners' predictions vs measurements aggregate*; *formula refinement possible over time*. *Foundation knowledge*.
>
> *[pause]*
>
> Practical takeaway. *Predict expected ranges from topology*: *DC R ≈ 0.01-0.05 Ω; L ≈ 1-10 μH; f_res ≈ 1-50 MHz typical*. *Mainstream EM formulas; layer-1 content; ranges, not exact values*. *Sanity-check measurements; equipment selection; formula refinement*. **`[ORG-INPUT]`** *for foundation-canonical predicted values*."

## 5. Try it (4:30–5:30)
> "Pause. Compute expected DC R for your specific build dimensions. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Construct expected-value model."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-762 (predicted ranges; formulas; calculations).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (prediction calculation).
- **`[ORG-INPUT]`** — foundation-canonical L and f_res formulas / values.
- Music cue: counting/predicting.
