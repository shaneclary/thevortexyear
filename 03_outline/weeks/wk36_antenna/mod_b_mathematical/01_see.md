Wk 36 — Theme: Antenna Applications — Lens 1: See — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Opens Mod-B Wk 36. Antenna parameters (gain, pattern, impedance). Mathematical foundations of antenna characterisation; sets up Lens 2's gain prediction.

## 1. Outcome
Student can recognise the three core antenna parameters — gain, pattern, impedance — and articulate their mathematical definitions.

## 2. Hook (0:00–0:30)
*[Three formula cards: panel 1 gain (G = 4π · U_max / P_input); panel 2 pattern (E(θ, φ)); panel 3 impedance (Z = R + jX). All on a single board with brief plot beside each. "Three parameters."]*

> "Antenna parameters: gain, pattern, impedance. Six minutes."

## 3. Setup (0:30–1:00)
> "Mod B opens. Lens 1 of 9. Three parameters."

## 4. Body (1:00–4:30)

> "Mod A engaged antennas at foundational level: diagrams, metrics, test setup, claim hearing. Mod B turns to *mathematics* — *the parameters defining antenna behaviour*.
>
> *[pause]*
>
> *Three core antenna parameters.*
>
> *Parameter 1 — gain (G).* *Ratio of maximum radiation intensity to that of a reference radiator (isotropic) accepting the same input power*. *G = 4π · U_max / P_input* where U is radiation intensity (W/sr) and P is input power*. *Units: dimensionless ratio; expressed as dBi (decibels relative to isotropic)*.
>
> *Parameter 2 — radiation pattern (E(θ, φ)).* *Angular distribution of radiated electric field magnitude in the far field*; *function of polar angle θ and azimuthal angle φ*. *Plotted as 3D surface or 2D principal-plane cuts*.
>
> *Parameter 3 — impedance (Z).* *Complex ratio of voltage to current at antenna feed terminals*; *Z = R + jX where R is resistance, X is reactance*. *Units: ohms*. *Resonance condition: X = 0*.
>
> *Three parameters; antenna fully characterised by these (plus efficiency which links input power to radiated power)*.
>
> *[pause]*
>
> *Definition 1 — gain in detail.*
>
> *Gain G of an antenna in direction (θ, φ) = 4π · radiation intensity in (θ, φ) / total power accepted by antenna*.
>
> *Maximum gain (over all directions): G_max*. *Reported as 'antenna gain' typically*.
>
> *Reference: isotropic radiator (radiates equally in all directions; G_iso = 0 dBi by definition)*.
>
> *Half-wave dipole gain: G_dipole = 2.15 dBi*.
>
> *Compact-antenna gain: 0-3 dBi typically*.
>
> *Rodin Coil multi-strand gain: TBM*.
>
> *[pause]*
>
> *Definition 2 — radiation pattern in detail.*
>
> *E(θ, φ): far-field electric field vector at distance r, angles θ, φ; magnitude proportional to 1/r*; *direction depends on antenna structure (polarisation)*.
>
> *Pattern plotted as 3D surface (gain in dBi as function of θ, φ)*; *or as 2D cuts (E-plane, H-plane, equatorial plane)*.
>
> *Pattern types*:
>
> *Omnidirectional* — *gain symmetric in azimuth*; *figure-eight or doughnut shape*. *Reference dipole: omnidirectional in equatorial plane*.
>
> *Directional* — *gain peaks in specific direction*; *pencil beam, fan beam, etc*. *Patch antenna: directional broadside*.
>
> *Multi-lobed* — *gain has multiple peaks*; *common in arrays and complex antennas*. **`[ORG-INPUT]`** for predicted Rodin Coil pattern type.
>
> *[pause]*
>
> *Definition 3 — impedance in detail.*
>
> *Z = R + jX: complex impedance at antenna feed*.
>
> *R = R_radiation + R_loss*: *resistive part includes radiation resistance (the 'useful' resistance representing radiated power) and loss resistance (heat dissipation in conductors / dielectrics)*.
>
> *X*: *reactive part; capacitive (X < 0) or inductive (X > 0)*.
>
> *Resonance*: *X = 0 at the antenna's resonant frequency*; *antenna 'self-resonant'*.
>
> *Match*: *engineering goal is Z_antenna = Z_feedline (typically 50 Ω) at operating frequency*; *mismatch reflects power back to source (return loss)*.
>
> *Half-wave dipole at resonance: Z ≈ 73 + j0 Ω* (slight reactance from finite wire diameter)*.
>
> *Rodin Coil impedance: TBM*; *expected highly reactive at most frequencies due to high inductance*.
>
> *[pause]*
>
> *Three relationships among the parameters.*
>
> *Relationship 1 — gain integrates to total radiated power.* *∫∫ U(θ, φ) dΩ = P_radiated = η · P_input*; *η is radiation efficiency*. *Higher gain in some direction means lower gain elsewhere (conservation)*.
>
> *Relationship 2 — pattern shape determines directivity.* *Directivity D = G / η*; *gain accounts for both pattern shape and efficiency*; *isotropic-pattern antenna with 100% efficiency has G = 0 dBi*.
>
> *Relationship 3 — impedance determines power acceptance.* *Mismatch reflects power; reflected power doesn't radiate; mismatch reduces effective gain*. *Impedance match is upstream of gain in measurement chain*.
>
> *[pause]*
>
> *Where Mod B goes this week.*
>
> *Lens 1 (today).* Antenna parameters (gain, pattern, impedance).
>
> *Lens 2.* Predict gain from topology.
>
> *Lens 3.* Compute expected impedance match.
>
> *Lens 4.* Rodin on RF behaviour.
>
> *Lens 5.* Hypothesis testing, embodied.
>
> *Lens 6.* Apply your model to predict next-build.
>
> *Lens 7.* Antenna theory mainstream vs. Rodin frame.
>
> *Lens 8.* Show the test methodology was sound.
>
> *Lens 9.* Methodology generalises.
>
> *[pause]*
>
> Practical takeaway. *Three core antenna parameters: gain (G), radiation pattern (E(θ, φ)), impedance (Z = R + jX). Gain is integrated radiation; pattern is angular distribution; impedance is feed-terminal complex ratio. Three relationships: gain conservation, directivity, impedance-match upstream.* *Mathematical machinery for antenna characterisation*."

## 5. Try it (4:30–5:30)
> "Pause. Write the three parameter definitions in your own words. Note expected reference-dipole values (G = 2.15 dBi; Z = 73 + j0 Ω; pattern omnidirectional in equatorial plane). Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Predict gain from topology."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-811 (three-formula card; antenna parameter definitions with reference-dipole values).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (three parameters).
- **`[ORG-INPUT]`** — predicted Rodin Coil pattern type.
- Music cue: opening, mathematical/parameters.
