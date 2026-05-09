Wk 35 — Theme: Rodin Coil — Multi-Strand & Phased — Lens 6: Apply — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Apply the phasing rule. Mathematical application: use phase-shift vectors to predict mutual-inductance, frequency response, and field-uniformity ranges. Connects Mod B's mathematics to Wk 34's measurement protocol.

## 1. Outcome
Student can apply the phasing rule to predict mutual-inductance ratios, frequency-response shifts, and field-uniformity changes from phase-shift vectors.

## 2. Hook (0:00–0:30)
*[A formula card: M_ij = f(Δcol_i - Δcol_j, geometry); with three numerical examples — adjacent strands (small shift, large M), antipodal strands (large shift, small M), opposite-shift counter-wound strands (negative-sign M). "Phase shift → mutual inductance."]*

> "Apply the phasing rule. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply the phasing rule."

## 4. Body (1:00–4:30)

> "Phase-shift vectors yesterday. *Today: apply them — predict measurable consequences*.
>
> *[pause]*
>
> *The phasing rule (mathematical statement).*
>
> *Mutual inductance between strand i and strand j depends on their relative phase shift (Δcol_i - Δcol_j, Δrow_i - Δrow_j) and the toroidal geometry*.
>
> *Functional form*: *M_ij = M_0 · g(Δcol_i - Δcol_j, R/r, ν)* — *where M_0 is the maximum-coupling reference; g is a geometry-dependent function decreasing with phase-shift magnitude; R/r is aspect ratio; ν is wire-coupling parameter*.
>
> **`[ORG-INPUT]`** *for canonical g function and M_0 reference*. *Working assumption: standard EM theory provides g via mutual-inductance integrals over wire paths*.
>
> *[pause]*
>
> *Three application predictions for 6-strand coil.*
>
> *Prediction 1 — adjacent-strand mutual inductance is largest.* *Strands 1 and 2 (Δcol difference = 1) couple most strongly*. *Magnitude: 0.4-0.7 of M_0* **`[ORG-INPUT]`**.
>
> *Prediction 2 — antipodal-strand mutual inductance is smallest.* *Strands 1 and 4 (Δcol difference = 3) couple least*. *Magnitude: 0.05-0.15 of M_0* **`[ORG-INPUT]`**.
>
> *Prediction 3 — counter-wound antipodal strands have negative M.* *If strand 4 is counter-wound relative to strand 1, mutual inductance is negative* (coupling-cancellation regime). *Sign of M is direction-dependent*. **`[ORG-INPUT]`** for canonical counter-wind specification.
>
> *Three predictions; all measurable with LCR meter*; *Wk 34's protocols apply directly*.
>
> *[pause]*
>
> *Three application predictions for frequency response.*
>
> *Prediction 4 — multi-strand coil has multiple resonant frequencies.* *Mutual-inductance coupling between strands creates band-splitting*; *single-strand had one f_res; 6-strand may have several*. **`[ORG-INPUT]`** for predicted band structure.
>
> *Prediction 5 — counter-wound mode rejects common-mode signal.* *Differential signals on counter-wound pairs preserved; common-mode signals cancel*. *Frequency-domain rejection ratio measurable*. *Standard EMI engineering*.
>
> *Prediction 6 — overall coil inductance scales sub-linearly with strand count.* *Self-inductance L_total ≈ N · L_strand · (1 + (N-1) · k)* — *where k is mean coupling coefficient*. *For N=6, L_total typically 4-9 × L_strand depending on k*. **`[ORG-INPUT]`** for canonical k.
>
> *[pause]*
>
> *Three application predictions for field uniformity.*
>
> *Prediction 7 — azimuthal field uniformity scales with N.* *Variance(B_φ) ∝ 1/N²* approximately *for equispaced phasing*; *6-strand variance ≈ 1/36 of single-strand variance*. *Field uniformity measurably better*.
>
> *Prediction 8 — non-equispaced phasing breaks symmetry.* *Variance(B_φ) increases with departure from equispaced*; *measurable in Hall-probe scans around the major circle*. **`[ORG-INPUT]`** for whether course canonically tests non-equispaced phasings.
>
> *Prediction 9 — total field magnitude scales sub-linearly with N.* *|B_max| ≈ N^(0.7) - N^(0.9)* depending on coupling*. *Multi-strand is not a simple multiplier; coupling effects reduce the gain*. **`[ORG-INPUT]`** for predicted scaling exponent.
>
> *[pause]*
>
> *How to apply the phasing rule in practice.*
>
> *Step 1.* Compute phase-shift vectors (Lens 2).
>
> *Step 2.* For each strand-pair, compute (Δcol_i - Δcol_j) → predicted M_ij from rule.
>
> *Step 3.* Predict total inductance, resonant-frequency band, field uniformity from coupling pattern.
>
> *Step 4.* Measure (Wk 34 protocol, scaled to multi-strand).
>
> *Step 5.* Compare measurement to prediction; document deviations; refine rule.
>
> *Five-step phasing-application protocol; engineering complete*.
>
> *[pause]*
>
> Practical takeaway. *Apply the phasing rule by computing phase-shift differences between strand pairs and predicting mutual inductance, frequency band, and field uniformity.* *Three coupling regimes (adjacent, antipodal, counter-wound) predicted; standard EM theory provides functional form.* *Predictions become measurement targets; Wk 34's protocol scales.* **`[ORG-INPUT]`** for canonical functional forms and parameter values."

## 5. Try it (4:30–5:30)
> "Pause. Apply the rule to a 6-strand coil. Predict the mutual inductance for strands 1-2 (adjacent) and strands 1-4 (antipodal). State expected ratio between them. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Phase analysis."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-789 (phasing-rule formula card with three coupling-regime examples; mutual-inductance prediction table for 6-strand pairs).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (applying the rule).
- **`[ORG-INPUT]`** — canonical g function; M_0 reference; mutual-inductance values; band structure; field-uniformity scaling; counter-wind specifications.
- Music cue: opening, application/predictive.
