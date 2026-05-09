Wk 36 — Theme: Antenna Applications — Lens 2: Count — Module A (Foundations)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Reference dipole vs. Rodin Coil — measured side-by-side. Foundational counting work: the antenna-comparison metrics and the side-by-side measurement protocol. Engineering test-design.

## 1. Outcome
Student can count the antenna-comparison metrics, articulate the side-by-side measurement protocol, and identify what the Rodin Coil vs. reference dipole comparison establishes.

## 2. Hook (0:00–0:30)
*[A side-by-side metric table: column 1 metric (gain, efficiency, pattern, impedance, return loss); column 2 reference dipole expected; column 3 Rodin Coil expected; column 4 measurement instrument. "Five metrics. Two antennas. One bench."]*

> "Five metrics. Side-by-side. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Count comparison metrics."

## 4. Body (1:00–4:30)

> "Antenna comparison requires shared metrics. *Today: count them, then count what side-by-side measurement entails*.
>
> *[pause]*
>
> *Five antenna-comparison metrics.*
>
> *Metric 1 — gain (dBi).* *Maximum radiation intensity relative to isotropic reference*. *Reference dipole: 2.15 dBi (textbook value)*. *Rodin Coil: TBM (to be measured)*. **`[ORG-INPUT]`** for predicted Rodin Coil gain range. *Working assumption: 0-3 dBi for compact antenna*.
>
> *Metric 2 — efficiency (%).* *Radiated power / input power*. *Reference dipole: ≥ 95% (well-built dipole)*. *Rodin Coil: TBM*. *Marko's claim: 60%*; *measurement will check*. *Compact antennas often 30-70% efficient*.
>
> *Metric 3 — radiation pattern.* *3D plot of gain vs. angle*. *Reference dipole: figure-eight in equatorial plane, null at poles*. *Rodin Coil: TBM*; *expect azimuthal symmetry from multi-strand phasing*; *poloidal pattern more complex*. **`[ORG-INPUT]`** for predicted pattern.
>
> *Metric 4 — impedance (Ω).* *Complex impedance at antenna terminals at test frequency*. *Reference dipole: ~73 + j43 Ω at λ/2*. *Rodin Coil: TBM*; *depends on coil's L and self-resonant frequency*; *match network may be needed*.
>
> *Metric 5 — return loss (dB).* *Power reflected by antenna due to impedance mismatch*. *Goal: < -10 dB (≥ 90% power accepted)*. *Reference dipole: typically -15 to -20 dB at resonance*. *Rodin Coil: TBM*; *match network application target*.
>
> *Five metrics; engineering antenna characterisation*.
>
> *[pause]*
>
> *Side-by-side measurement protocol counts.*
>
> *Count 1 — measurement station distance.* *Antenna-under-test placed at far-field distance from measurement probe*. *Far-field condition: r > 2D²/λ; D = antenna largest dimension*. *Compact Rodin Coil at HF: r > ~5-10 m*. **`[ORG-INPUT]`** for course test-setup range.
>
> *Count 2 — measurement frequencies.* *Test at multiple frequencies bracketing self-resonant frequency*. *Working assumption: 5-10 frequencies between 1-100 MHz*. **`[ORG-INPUT]`** for canonical test frequencies.
>
> *Count 3 — angular sampling for pattern.* *Hemispherical sampling at 10° increments* (361 sample points for full hemisphere); *azimuthal sampling at 5° increments at peak elevation* (72 points)*. *Total: ~400 measurement points per antenna*. **`[ORG-INPUT]`** for canonical sampling protocol.
>
> *Count 4 — antennas measured.* *Two: reference dipole and Rodin Coil*. *Each measurement set repeated for both*. *~800 total data points per measurement frequency*; *measurement burden real but manageable*.
>
> *Count 5 — measurement instruments.* *VNA (vector network analyser) for impedance + return loss*; *RF power meter + reference probe for gain*; *Hall probe or anechoic-chamber facility for pattern*. **`[ORG-INPUT]`** for which instruments are course-canonical (likely VNA + power meter; pattern measurement may be approximate).
>
> *Five protocol counts; measurement design specified*.
>
> *[pause]*
>
> *Three things side-by-side measurement establishes.*
>
> *Establishment one — comparable conditions.* *Same test setup, same frequencies, same instruments*; *differences in measured values reflect antenna differences, not setup differences*. *Engineering control.*
>
> *Establishment two — quantified efficiency comparison.* *Reference dipole's known efficiency (~95%) provides calibration reference for Rodin Coil's measured efficiency*. *Calibrated comparison*.
>
> *Establishment three — direct claim-test.* *Marko's 60% claim is directly testable: measure Rodin Coil's efficiency vs. dipole reference and compute the ratio*. *Honest answer obtained either way*.
>
> *[pause]*
>
> *Three engineering reasons side-by-side beats absolute measurement.*
>
> *Reason one — measurement-instrument tolerances cancel.* *Both antennas measured with same instrument*; *systematic instrument errors affect both equally*; *ratio is more reliable than absolute*.
>
> *Reason two — environmental effects cancel.* *Same room, same time, same EMI environment*; *environmental factors affect both antennas equally*; *side-by-side ratios robust*.
>
> *Reason three — engineering claim is comparative.* *'60% efficiency' is implicitly a comparative claim* (60% of what?)*; *side-by-side measurement makes the comparison explicit*; *operationalises the claim*.
>
> *[pause]*
>
> Practical takeaway. *Count five antenna-comparison metrics: gain, efficiency, pattern, impedance, return loss.* *Count five protocol parameters: distance, frequencies, sampling, antennas, instruments.* *Side-by-side measurement establishes comparable conditions, quantified efficiency, direct claim-test.* **`[ORG-INPUT]`** for predicted ranges, test frequencies, sampling protocol, instrument set."

## 5. Try it (4:30–5:30)
> "Pause. Pre-fill your antenna-comparison sheet: column 1 metric, column 2 reference dipole expected, column 3 Rodin Coil predicted, column 4 measurement instrument. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build the antenna test setup."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-803 (5-metric comparison sheet template; protocol parameter table).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (five metrics).
- **`[ORG-INPUT]`** — predicted ranges per metric; canonical test frequencies; sampling protocol; instrument set.
- Music cue: opening, counting/measurement-design.
