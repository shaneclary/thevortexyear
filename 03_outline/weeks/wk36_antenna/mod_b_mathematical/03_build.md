Wk 36 — Theme: Antenna Applications — Lens 3: Build — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Compute expected impedance match. Mathematical construction of impedance prediction at antenna feed; matching network design if needed. Builds on Wk 34's L, R measurements and Wk 35's mutual-inductance work.

## 1. Outcome
Student can compute expected feed impedance for the Rodin Coil antenna and design a matching network if mismatch with 50-Ω feed line exceeds threshold.

## 2. Hook (0:00–0:30)
*[A worked-example panel: Z_antenna(f) curve over frequency; 50-Ω horizontal line; gap between them in two regions; matching-network L-section schematic added below; new |Γ| (reflection) curve showing match achieved. "Mismatch → match."]*

> "Compute expected impedance match. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 3 of 9. Compute the match."

## 4. Body (1:00–4:30)

> "Antenna efficiency requires impedance match. *Today: predict the match condition; design the matching network*.
>
> *[pause]*
>
> *Step 1 — predict feed impedance Z_antenna at operating frequency.*
>
> *From Wk 34 measurements*: *coil self-inductance L (single-strand baseline) and DC resistance R*.
>
> *From Wk 35 measurements (predicted)*: *coil-level total inductance L_total (with multi-strand coupling) and self-resonant frequency f_res*.
>
> *At operating frequency f (well below f_res)*: *Z_antenna ≈ R + jωL_total*; *highly inductive*.
>
> *At operating frequency f close to f_res*: *Z_antenna shows resonance; |Z| can rise sharply*.
>
> *Above f_res*: *Z becomes capacitive; complex behaviour*.
>
> **`[ORG-INPUT]`** *for canonical operating frequency choice (likely below f_res for stable inductive regime)*.
>
> *[pause]*
>
> *Worked example — 6-strand Rodin Coil at f = f_res / 3 (well below resonance).*
>
> *Assume: L_total = 50 µH; R = 1 Ω (DC + AC losses); f = 1 MHz*.
>
> *ωL_total = 2π · 1e6 · 50e-6 = 314 Ω*.
>
> *Z_antenna = 1 + j314 Ω*.
>
> *|Z_antenna| ≈ 314 Ω; phase angle ≈ +89.8° (almost purely inductive)*.
>
> *Mismatch with 50-Ω feed line is severe*: *return loss ≈ -0.5 dB (almost all power reflected)*.
>
> *Matching network required for any reasonable efficiency.*
>
> *[pause]*
>
> *Step 2 — design matching network.*
>
> *Goal: transform Z_antenna = 1 + j314 Ω to 50 + j0 Ω at f = 1 MHz*.
>
> *L-section matching network*: *one shunt element + one series element*.
>
> *Standard formulas*:
>
> *For Z_antenna = R + jX with R < 50 Ω*: *shunt capacitor + series inductor (or vice versa)*.
>
> *Compute: Q = sqrt(50/R - 1) ≈ 7*; *shunt-element reactance ±50/Q ≈ ±7 Ω*; *series-element reactance Q · R ≈ 7 Ω*.
>
> *Element values at 1 MHz*: *shunt capacitor C = 1/(ωX_shunt) ≈ 22 nF*; *series inductor L_match = X_series/ω ≈ 1.1 µH*.
>
> **`[ORG-INPUT]`** for canonical L-section vs. T-section vs. pi-section preference.
>
> *Matching network designed; engineering specification complete*.
>
> *[pause]*
>
> *Step 3 — verify match performance.*
>
> *With matching network in place, return loss at operating frequency should be ≤ -10 dB*; *typical L-section matched antenna achieves -15 to -25 dB at design frequency*.
>
> *Bandwidth of match*: *typically narrow (~5-15% of operating frequency)*; *outside bandwidth, return loss degrades*; *narrow-band matching is acceptable for single-frequency operation*.
>
> *[pause]*
>
> *Three things impedance computation enables.*
>
> *Enable one — match-network specification.* *Practitioners build the matching network from computed values*; *engineering deliverable*.
>
> *Enable two — efficiency prediction refinement.* *With match achieved, more power flows to antenna*; *radiated efficiency prediction improves accuracy*.
>
> *Enable three — frequency-dependence understanding.* *Z_antenna(f) curve shows where antenna is well- and ill-behaved*; *informs frequency choice*.
>
> *[pause]*
>
> *Three caveats on impedance prediction.*
>
> *Caveat one — radiation resistance is small fraction of total Z.* *Most of Z_antenna is reactive (jωL); only small R is radiation*; *high-Q regime; small radiation resistance limits efficiency*.
>
> *Caveat two — mutual inductance changes coil-level Z.* *Multi-strand coupling shifts Z from single-strand prediction*; *Wk 35's measurements are inputs*.
>
> *Caveat three — environment affects Z.* *Antenna near ground plane has shifted Z*; *measurement reality differs from isolated prediction*.
>
> *[pause]*
>
> *Two engineering judgments at impedance-match stage.*
>
> *Judgment one — choose operating frequency wisely.* *Far below f_res: stable inductive regime; manageable matching*. *Near f_res: high |Z|; matching difficult; possible high efficiency at narrow band*. *Far above f_res: capacitive; different matching topology*. **`[ORG-INPUT]`** for canonical operating-frequency choice.
>
> *Judgment two — match-network is part of antenna system.* *Match-network adds losses (capacitor ESR, inductor losses)*; *match-network efficiency contributes to overall antenna efficiency*; *higher-Q matched antenna may have lower overall efficiency due to match-network losses*. *Engineering trade-off*.
>
> *[pause]*
>
> Practical takeaway. *Compute Z_antenna from coil L_total and R*; *design L-section matching network for 50-Ω feed*; *verify return loss < -10 dB at operating frequency*. *Three enables (match-network spec, efficiency prediction, frequency-choice info), three caveats (radiation resistance small, mutual-inductance effects, environment), two judgments (frequency choice, match-network losses).* **`[ORG-INPUT]`** for canonical operating frequency and matching-network preferences."

## 5. Try it (4:30–5:30)
> "Pause. Compute Z_antenna at your chosen operating frequency. Compute Q and shunt/series element values for L-section match. Estimate match-network bandwidth. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Rodin on RF behaviour."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-813 (impedance computation worked example; L-section schematic; match-curve before/after).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (compute the match).
- **`[ORG-INPUT]`** — canonical operating frequency; matching-network topology preference.
- Music cue: opening, computational/engineering.
