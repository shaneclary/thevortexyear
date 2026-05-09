Wk 35 — Theme: Rodin Coil — Multi-Strand & Phased — Lens 6: Apply — Module C (Practical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Multi-strand benchmark vs. single-strand. Practical application — measure the multi-strand coil with Wk 34's protocol, compare to single-strand baseline, document deltas. The empirical comparison engineering values rest on.

## 1. Outcome
Student can apply Wk 34's measurement protocol to the multi-strand coil and document the comparison with single-strand baseline as a benchmark deliverable.

## 2. Hook (0:00–0:30)
*[A side-by-side comparison sheet: column 1 single-strand baseline (R, L, f_res from Wk 34); column 2 multi-strand measurements; column 3 deltas (absolute and percent). All rows filled. "Side-by-side benchmark."]*

> "Multi-strand benchmark vs. single-strand. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply the comparison."

## 4. Body (1:00–4:30)

> "Two coils on the bench. *Today: measure the second coil; compare to the first; document the benchmark*.
>
> *[pause]*
>
> *Three measurements per strand for multi-strand.*
>
> *Measurement 1 — DC resistance per strand.* *Multimeter on each strand's two leads*. *Expected: ~baseline R per strand* (similar to single-strand's R). *Variance ±5% acceptable*. *Each strand logged.*
>
> *Measurement 2 — self-inductance per strand.* *LCR meter on each strand's two leads (other strands open or shorted per chosen mode)*. *Expected: ~baseline L per strand* (similar to single-strand's L)*. *Variance ±10% acceptable*.
>
> *Measurement 3 — self-resonant frequency per strand.* *Network analyser per strand if available; impedance vs. frequency sweep*. *Expected: ~baseline f_res per strand* (similar to single-strand's f_res)*. **`[ORG-INPUT]`** for canonical measurement methodology if no network analyser.
>
> *Per-strand baseline characterisation*.
>
> *[pause]*
>
> *Mutual-inductance measurements per strand-pair.*
>
> *Measurement 4 — mutual inductance per pair.* *LCR meter set to mutual-inductance mode; two leads per strand-pair*. *6-strand: 15 pairs*; *3-strand: 3 pairs*.
>
> *Expected per Mod B Lens 6's predictions*. *Adjacent pairs: 0.4-0.7 of M_0*; *antipodal pairs: 0.05-0.15 of M_0*; **`[ORG-INPUT]`** for M_0 reference.
>
> *Per-pair mutual-inductance characterisation*.
>
> *[pause]*
>
> *Coil-level measurements.*
>
> *Measurement 5 — total inductance with all strands in series.* *Connect all strands head-to-tail; LCR meter measures total*. *Expected: L_total ≈ N · L_strand · (1 + (N-1) · k)* per Mod B Lens 6. *6-strand: 4-9× single-strand baseline depending on coupling*. **`[ORG-INPUT]`** for canonical k.
>
> *Measurement 6 — coil-level self-resonant frequency.* *Network analyser sweep on series-combined coil*. *Expected: shift from single-strand baseline; possibly multiple resonances from band-splitting*.
>
> *Measurement 7 — common-mode rejection ratio (counter-wound only).* *Inject common-mode signal; measure differential output*; *rejection ratio in dB*. *Expected: 20-40 dB for well-balanced counter-wound multi-strand*. **`[ORG-INPUT]`** if course-canonical second-build is counter-wound.
>
> *[pause]*
>
> *Comparison protocol with single-strand.*
>
> *Step 1 — pull single-strand baseline from Wk 34 build log*. *R_baseline, L_baseline, f_res_baseline*.
>
> *Step 2 — record multi-strand per-strand measurements*. *R_i, L_i, f_res_i for i = 1...N*.
>
> *Step 3 — compute per-strand deltas vs. single-strand baseline*. *Absolute and percent*. *Expected: small deltas (±5-15%); variance reflects fabrication tolerance*.
>
> *Step 4 — record multi-strand pair and coil-level measurements*. *M_ij, L_total, f_res_coil*.
>
> *Step 5 — compute coil-level scaling vs. single-strand*. *L_total / L_baseline = effective scaling factor*. *Document and compare to predicted N · (1 + (N-1) · k)*.
>
> *Step 6 — generate benchmark report*. *Side-by-side comparison sheet; deltas; expected-vs-actual table; observations*.
>
> *Six-step benchmark protocol; engineering deliverable*.
>
> *[pause]*
>
> *Three engineering uses of the benchmark.*
>
> *Use one — verify multi-strand build quality.* *Per-strand R, L, f_res should match single-strand baseline within tolerance*; *deviation flags build defect*.
>
> *Use two — verify phasing predictions.* *Mutual-inductance pattern matches Mod B predictions within tolerance*; *deviation flags phasing-error or theory-applicability question*.
>
> *Use three — characterise the coil for downstream use.* *Wk 36's antenna work needs the coil's measured properties as inputs*; *benchmark report is the input document*.
>
> *[pause]*
>
> *Two engineering observations.*
>
> *Observation one — measurements always have variance.* *No measurement matches prediction exactly*; *±5-15% variance is normal*; *engineering tolerance permits this*; *honest reporting documents both prediction and measurement*.
>
> *Observation two — benchmark is iteratively useful.* *First multi-strand benchmark provides one data point; future builds add more*; *aggregate data reveals trends and refines predictions*. *Engineering is iterative; benchmarks compound*.
>
> *[pause]*
>
> Practical takeaway. *Apply Wk 34's measurement protocol to multi-strand: per-strand DC R, L, f_res; per-pair M; coil-level L_total, f_res_coil, common-mode rejection if counter-wound.* *Compare to single-strand baseline; compute deltas; generate benchmark report.* *Six-step protocol; engineering deliverable that feeds Wk 36 antenna work.*"

## 5. Try it (4:30–5:30)
> "Pause. Sketch your benchmark comparison sheet. Pre-fill column headings, baseline column from Wk 34, expected-multi-strand column from Mod B predictions. Leave measurement column blank for build-day. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Multi-strand mainstream RF coils."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-798 (benchmark comparison sheet template; six-step protocol diagram).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (benchmark).
- **`[ORG-INPUT]`** — canonical M_0 reference; canonical coupling coefficient k; canonical measurement methodology for f_res; counter-wind specifications.
- Music cue: opening, application/measurement.
