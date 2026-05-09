Wk 37 — Theme: Energy & Propulsion Claims — Lens 3: Build — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Construct the energy-balance equations. Mathematical construction: write the full energy-balance equation for a Rodin Coil setup including all six streams from Lens 1, with worked numerical example.

## 1. Outcome
Student can construct the full energy-balance equation for a Rodin Coil setup with all six streams and apply it to a worked example.

## 2. Hook (0:00–0:30)
*[A worked-equation panel: P_in = 2.0 W (measured); P_rad = ? (TBM); P_loss = ? (TBM); P_load = ? (TBM); P_ambient ≤ 1 mW (Lens 2 bound); ΔE_stored ≈ 0 (steady state). Conservation balance shown solving for P_rad. "Equations to balance."]*

> "Construct the energy-balance equations. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 3 of 9. Construct the equations."

## 4. Body (1:00–4:30)

> "Energy-balance frame and ambient bounds in place. *Today: construct the explicit equations*.
>
> *[pause]*
>
> *The full energy-balance equation.*
>
> *General*: *P_in + P_ambient = P_rad + P_loss + P_load + dE_stored/dt*
>
> *Steady state* (long-time average): *P_in + P_ambient = P_rad + P_loss + P_load*
>
> *No ambient (idealised lab)*: *P_in = P_rad + P_loss + P_load*
>
> *Three regimes; choice of regime matches measurement scope*.
>
> *[pause]*
>
> *Worked example — Wk 33 single-strand build at f = 1 MHz.*
>
> *P_in measured at coil feed*: *2.0 W* (signal generator output, after cable losses)*.
>
> *P_load*: *0 W* (no load attached; antenna mode, no resistor)*.
>
> *P_loss*: *DC resistance R = 1 Ω; current 1 A RMS at 2 W*; *P_loss = I² R = 1 W*.
>
> *P_rad*: *from energy balance: P_rad = P_in - P_loss - P_load = 2.0 - 1.0 - 0 = 1.0 W*. *Equivalent to 50% radiation efficiency*.
>
> *P_ambient*: *near zero (lab is shielded urban; broadcast harvested ~10⁻³ W; negligible vs. 1 W)*.
>
> *Engineering check*: *radiation efficiency 50% consistent with compact-antenna typical range*; *energy balance closes within 5% if measurement precision considered*.
>
> *[pause]*
>
> *Worked example — apparent overunity claim.*
>
> *Suppose practitioner observes*: *P_load (lamp brightness comparison or load power-meter reading) = 2.5 W*; *P_in = 2.0 W*.
>
> *Apparent overunity ratio: 2.5 / 2.0 = 1.25*; *25% gain*.
>
> *Energy-balance closure attempt*: *P_in + P_ambient = P_rad + P_loss + P_load*; *2.0 + P_ambient = P_rad + P_loss + 2.5*.
>
> *Required for closure*: *P_ambient = P_rad + P_loss + 0.5*; *for any non-negative P_rad and P_loss, P_ambient ≥ 0.5 W*.
>
> *Comparison to ambient bound (Lens 2)*: *0.5 W >> 1 mW upper bound*; *ambient is 500× insufficient*; *closure not conservation-consistent within ambient harvesting*.
>
> *Engineering implication*: *either P_load measurement is incorrect (inflated), or P_in measurement is incorrect (under-counted), or claim violates conservation as currently understood*. *Investigation focuses on measurement methodology of P_load and P_in*.
>
> *[pause]*
>
> *Three places measurement may be incorrect (closure-restoration paths).*
>
> *Place one — P_in measurement under-counts.* *Power-supply may have RF emissions that reach coil's environment but aren't measured at supply terminals*; *true P_in could be higher than measured*; *broadband measurement at coil feed (not at supply) corrects*.
>
> *Place two — P_load measurement over-counts.* *Lamp brightness is non-linear; AC peak vs. RMS confusion can inflate; oscilloscope coupled measurements have known artefacts*; *RMS measurement with calibrated meter required*.
>
> *Place three — P_rad accounting.* *If P_rad is significant and not measured, it's omitted; energy 'balances' to P_load but actual P_in includes radiation*; *radiating-antenna setup has substantial P_rad*; *measurement should include radiated power in addition to load power*.
>
> *Three places to investigate; engineering precision*.
>
> *[pause]*
>
> *Three engineering uses of energy-balance equations.*
>
> *Use one — claim closure check.* *For each public claim, attempt energy-balance closure with reasonable assumptions about unmeasured streams*; *if closure requires impossibly large unmeasured streams (e.g., 500× ambient bound), claim is suspect*.
>
> *Use two — measurement gap identification.* *Closure attempt reveals which streams need better measurement*; *engineering protocol focuses on those streams*; *iterative methodology refinement*.
>
> *Use three — replication scope.* *Equations specify exactly what must be measured for replication*; *replication scope is the equation*; *engineering completeness*.
>
> *[pause]*
>
> *Three engineering judgments at equation stage.*
>
> *Judgment one — measurement-precision required.* *For 25% apparent gain claim, measurement precision better than 5% per stream is required*; *±10% precision per stream loses the signal*; *engineering instrumentation grade*.
>
> *Judgment two — assumption transparency.* *Each unmeasured stream's assumed value must be explicit*; *assuming 'P_rad ≈ 0 because antenna is poorly tuned' must be stated and justified*; *engineering integrity*.
>
> *Judgment three — closure failure response.* *If closure fails by significant margin, the conclusion is 'either measurement is incorrect or conservation is violated'*; *engineering response is to find measurement error before claiming conservation violation*; *engineering humility*.
>
> *[pause]*
>
> Practical takeaway. *Construct full energy-balance equation for Rodin Coil setup. Three regimes (general, steady-state, no-ambient idealised); two worked examples (consistent build at 50% radiation efficiency; claimed 25% overunity requiring 500× ambient bound — engineering investigation of measurement).* *Three closure-restoration paths (P_in under-count, P_load over-count, P_rad omitted); three uses (claim check, gap identification, replication scope); three judgments (precision, transparency, closure-failure response).*"

## 5. Try it (4:30–5:30)
> "Pause. Write the energy-balance equation. Apply it to a hypothetical claim of 10% overunity at your test setup. Compute required P_ambient for closure; compare to your local ambient bound. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Rodin on conventional vs. Rodin EM."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-840 (energy-balance equations; two worked examples; closure-restoration paths diagram).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (construct equations).
- Music cue: opening, computational/equation-building.
