Wk 37 — Theme: Energy & Propulsion Claims — Lens 6: Apply — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Apply energy-balance to your own measurements. Mathematical application: take the energy-balance equation and the practitioner's Wk 33-35 measurements; check whether energy-balance closes; identify any gap requiring further investigation.

## 1. Outcome
Student can apply the energy-balance equation to their own coil's measurements (Wk 33-35) and check whether energy balance closes within measurement tolerance.

## 2. Hook (0:00–0:30)
*[A practitioner's notebook open: column 1 measurement (P_in, P_load, P_loss, P_rad estimated); column 2 value with uncertainty; column 3 energy-balance closure check. Filled in for the practitioner's own Wk 33 single-strand build. "Your data, balanced."]*

> "Apply energy-balance to your measurements. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply to your data."

## 4. Body (1:00–4:30)

> "Equations and data are at hand. *Today: balance them*.
>
> *[pause]*
>
> *Six steps applying energy-balance to the practitioner's measurements.*
>
> *Step 1 — pull P_in measurement from build log.* *Wk 33 typical: input voltage and current at coil feed; compute P_in = V_RMS × I_RMS for resistive component (or use VNA + signal generator power for direct measurement)*. *Estimate uncertainty: ±5% typical with calibrated equipment*.
>
> *Step 2 — pull P_load measurement from build log (if applicable).* *Wk 33 typical: no load attached for characterisation tests*; *Wk 36 antenna test: receive power on probe converted to estimate of radiated power*. *P_load may be 0 in characterisation; receive-power-equivalent in antenna test*.
>
> *Step 3 — compute P_loss from R measurement.* *DC R from Wk 34 measurement; AC R may be higher due to skin effect at frequency*; *compute P_loss = I_RMS² × R_AC*. *Estimate uncertainty: ±10% typical (skin effect uncertainty)*.
>
> *Step 4 — estimate P_rad from antenna measurement (if applicable).* *Wk 36 measurement of received power at known distance × antenna pattern integration → P_rad*. *Estimate uncertainty: ±2-3 dB ≈ ±50%*.
>
> *Step 5 — bound P_ambient from local environment.* *From Lens 2's bound: typically ~10⁻⁶ to 10⁻³ W for course-typical environment*; *negligible compared to P_in for typical 1-10 W test*.
>
> *Step 6 — check energy-balance closure.* *Compute*: *P_in - P_loss - P_rad - P_load*. *Should be ≈ 0 within combined uncertainty (~5-10%)*.
>
> *Six steps; engineering check*.
>
> *[pause]*
>
> *Worked example — practitioner's Wk 33 single-strand at f = 1 MHz.*
>
> *P_in measured*: *2.0 W ± 0.1 W (from build log)*.
>
> *P_load*: *0 W (no load; characterisation)*.
>
> *P_loss*: *I² R = 1² × 1 = 1.0 W ± 0.1 W (current and resistance per Wk 34 log)*.
>
> *P_rad*: *if antenna efficiency ~50% (Mod B Wk 36 prediction): P_rad ≈ 1.0 W*; *if efficiency lower (~30%): P_rad ≈ 0.6 W*. *Wk 36 measurement would refine*. *Estimate*: *1.0 W ± 0.5 W*.
>
> *P_ambient*: *< 10⁻³ W ≈ 0*.
>
> *Energy-balance check*: *P_in - P_loss - P_rad - P_load = 2.0 - 1.0 - 1.0 - 0 = 0 W*; *within uncertainty (~±0.6 W combined)*. *Closure achieved within tolerance*.
>
> *Engineering verdict*: *Wk 33 build's energy-balance closes consistent with conventional EM expectation*; *no anomaly; mainstream physics adequate*; *single-strand baseline*.
>
> *[pause]*
>
> *Three closure-failure scenarios and engineering responses.*
>
> *Scenario one — closure fails by small margin (~10-20%).* *Likely cause*: *measurement uncertainty*; *engineering response: improve measurement precision (better instrument, more replicates); recheck assumptions*; *not yet anomaly*.
>
> *Scenario two — closure fails by large margin (~50-100%).* *Likely cause*: *one stream significantly mis-measured (P_in counted incorrectly, P_rad omitted, P_loss under-estimated)*; *engineering response: identify problematic stream; remeasure with better methodology*; *systematic correction.*
>
> *Scenario three — closure fails by huge margin (~10× or more).* *Likely cause*: *fundamental measurement methodology error or unusual physical effect*; *engineering response: re-examine the entire setup; verify with alternate methodology; if confirmed, this is the kind of measurement that warrants extensive replication and methodology peer review*; *extraordinary claim status*.
>
> *Three scenarios; engineering response calibrated to magnitude*.
>
> *[pause]*
>
> *Three engineering uses of own-data balance check.*
>
> *Use one — verify methodology.* *If practitioner's data closes balance comfortably, methodology is engineering-sound; ready for further extensions*. *Wk 33 baseline check*.
>
> *Use two — identify gaps.* *Closure failure at small margins identifies precision gaps; engineering improvement directed at specific streams*; *iterative methodology refinement*.
>
> *Use three — engage claims engineering-comparable.* *Practitioner's own balance closure in mainstream-physics regime calibrates expectations for what 'balance closure' looks like*; *ready to evaluate apparent overunity claims by comparison*.
>
> *[pause]*
>
> *Two engineering judgments at apply stage.*
>
> *Judgment one — uncertainty propagation.* *Combined uncertainty grows when multiple quantities are subtracted*; *±5% per quantity becomes ±10-15% combined*; *engineering precision tracking*; *don't claim closure tighter than uncertainty supports*.
>
> *Judgment two — when closure isn't expected.* *Some engineering setups (transients, high-Q resonance) have legitimately complex energy flows requiring special analysis*; *check whether your setup is in steady-state regime where standard balance applies*; *engineering case-recognition*.
>
> *[pause]*
>
> Practical takeaway. *Apply energy-balance to your own measurements via 6-step protocol. Worked example: Wk 33 single-strand closes balance within tolerance — no anomaly, mainstream EM adequate, baseline calibration. Three closure-failure scenarios (small margin → precision improvement; large margin → systematic error; huge margin → extraordinary claim status). Three uses (methodology verification, gap identification, claim-comparison readiness).*"

## 5. Try it (4:30–5:30)
> "Pause. Apply 6-step balance check to your Wk 33 measurements. Compute closure value with uncertainty. Verdict: closure achieved within tolerance, or gap identified? Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Where the claim could be true (loopholes) vs. false."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-843 (6-step protocol; worked Wk 33 example; closure-failure response chart).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (apply to your data).
- Music cue: opening, application/personal-data.
