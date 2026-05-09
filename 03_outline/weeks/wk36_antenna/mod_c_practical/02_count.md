Wk 36 — Theme: Antenna Applications — Lens 2: Count — Module C (Practical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Quantify your antenna's gain. Practical counting and recording: the gain measurement protocol step-by-step. Documents the per-frequency, per-antenna, per-orientation measurement schedule.

## 1. Outcome
Student can quantify Rodin Coil antenna gain through a documented measurement protocol and produce per-frequency gain values with uncertainty estimates.

## 2. Hook (0:00–0:30)
*[A measurement-recording sheet: rows are frequencies (1-100 MHz, 7 frequencies); columns are reference dipole gain, Rodin Coil gain, ratio (Rodin/dipole), efficiency estimate. Each cell has space for value ± uncertainty. "Per-frequency, per-antenna gain."]*

> "Quantify your antenna's gain. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Quantify gain."

## 4. Body (1:00–4:30)

> "Gain quantification has a defined protocol. *Today: walk through it*.
>
> *[pause]*
>
> *The substitution method (gain quantification protocol).*
>
> *Standard antenna-gain measurement is by substitution against a calibrated reference*.
>
> *Step 1*: *Set up reference dipole as transmitter; calibrated reference probe (e.g., short dipole) as receiver at far-field distance r*.
>
> *Step 2*: *Drive reference dipole with known input power P_in_ref at test frequency f*.
>
> *Step 3*: *Read received power P_rec_ref at probe*.
>
> *Step 4*: *Replace reference dipole with Rodin Coil; drive with same input power P_in_test*.
>
> *Step 5*: *Read received power P_rec_test at probe*.
>
> *Step 6*: *Compute Rodin Coil gain*: *G_test = G_ref + 10·log10(P_rec_test / P_rec_ref) - 10·log10(P_in_test / P_in_ref)*.
>
> *Six-step substitution; engineering protocol*.
>
> *[pause]*
>
> *Per-frequency execution.*
>
> *Wk 36's measurement covers ~7 test frequencies bracketing self-resonant frequency*: *for example, f_res/3, f_res/2, 2·f_res/3, f_res, 3·f_res/2, 2·f_res, 3·f_res*. **`[ORG-INPUT]`** for canonical frequency list.
>
> *Per-frequency: full substitution sequence (steps 1-6); ~30 min including instrument-setting time; results recorded*.
>
> *Total gain-measurement time: ~3.5 hours for 7 frequencies* (one antenna direction)*; *full pattern measurement multiplies by direction-count*.
>
> *[pause]*
>
> *Per-orientation execution.*
>
> *Pattern measurement requires multiple antenna orientations*. *For Rodin Coil with axial symmetry, key orientations*: *coil axis vertical (azimuthal symmetry expected); coil axis horizontal pointing east; coil axis horizontal pointing north; coil axis at 45°*. *4 orientations × 7 frequencies = 28 substitutions*.
>
> *Time per orientation-frequency: ~20-30 min*; *total: ~10-14 hours of bench time*.
>
> *Realistic pace: 4-5 days of measurement sessions of ~2-3 hours each*. **`[ORG-INPUT]`** for canonical orientation set; pattern measurement may be reduced to 2 orientations for course-canonical scope.
>
> *[pause]*
>
> *Gain values to record per measurement.*
>
> *Per substitution* (one frequency, one antenna, one orientation), record:
>
> *G_ref expected (textbook): 2.15 dBi for half-wave dipole at resonance; ±0.3 dBi typical practical reference dipole*.
>
> *P_in_ref measured: signal-generator output level after cable losses, at antenna-feed reference plane*.
>
> *P_rec_ref measured: power-meter reading at probe; account for probe-cable losses*.
>
> *P_in_test measured: same input power for fair comparison; same cable-loss correction*.
>
> *P_rec_test measured: power-meter reading at probe; same correction*.
>
> *G_test computed: from substitution formula*.
>
> *Uncertainty per G_test: ±2-3 dB (combining instrument precision, cable-loss calibration, environment-stability)*.
>
> *[pause]*
>
> *Three engineering judgments at gain-measurement stage.*
>
> *Judgment one — full substitution method or one-port approximation.* *Full substitution (six steps) is most accurate*; *one-port approximation (measuring reflected power and assuming radiation efficiency) is faster but less direct*. *Wk 36 canonical: full substitution*; **`[ORG-INPUT]`** for whether course allows one-port for pedagogical simplification.
>
> *Judgment two — environment correction.* *Outdoor measurement subject to weather, EMI, ground-condition variability*; *ideally calibrate per-session*; *or repeat measurements across sessions and average*. *Engineering practice.*
>
> *Judgment three — when to repeat a measurement.* *Anomalous readings (e.g., one frequency shows 20 dB lower than adjacent frequencies) often indicate measurement error*; *repeat at adjacent frequencies and at the anomalous frequency*; *if confirmed, document; if not, exclude*. *Engineering judgment*.
>
> *[pause]*
>
> *Three engineering reasons gain quantification matters.*
>
> *Reason one — efficiency derivation.* *η = G_realised / G_directivity*; *gain measurement enables efficiency calculation*; *efficiency is the layer-1 60% claim*; *gain quantification directly addresses claim*.
>
> *Reason two — pattern visualisation.* *Multi-orientation gain measurements form 2D or partial-3D pattern*; *pattern visualisation enables comparison with predicted pattern*; *engineering verification of Mod B's prediction*.
>
> *Reason three — engineering deliverable.* *Gain values per frequency are the test report's central data*; *portfolio piece quality depends on gain quantification quality*; *engineering deliverable.*
>
> *[pause]*
>
> Practical takeaway. *Quantify gain via 6-step substitution method per frequency, per antenna, per orientation. ~30 min per measurement triple; ~10-14 hours total for full pattern; multi-session realistic.* *Three judgments (full vs. one-port, environment correction, repeat thresholds), three reasons (efficiency derivation, pattern visualisation, engineering deliverable).* **`[ORG-INPUT]`** for canonical frequency list, orientation set, and one-port allowance."

## 5. Try it (4:30–5:30)
> "Pause. Pre-fill your gain-measurement sheet: rows for 7 frequencies; columns for input power, received power (ref and test), G_test, uncertainty. Estimate session count to complete. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: The antenna comparison test (the deliverable)."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-821 (gain measurement sheet template; substitution-method diagram; per-frequency execution timeline).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (quantify gain).
- **`[ORG-INPUT]`** — canonical frequency list, orientation set, one-port allowance.
- Music cue: opening, practical/measurement-intensive.
