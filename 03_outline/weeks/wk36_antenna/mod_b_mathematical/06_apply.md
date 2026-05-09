Wk 36 — Theme: Antenna Applications — Lens 6: Apply — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Apply your model to predict next-build. Mathematical application: use Wk 36's antenna model to predict performance of design variations (different strand counts, different operating frequencies, different former dimensions). Engineering design exploration.

## 1. Outcome
Student can apply the antenna model to predict performance of design variations and identify which variations might improve gain, efficiency, or impedance match.

## 2. Hook (0:00–0:30)
*[A design-space exploration plot: x-axis strand count (1-12); y-axis predicted gain (dBi). Curve plotted with small uncertainty band; specific points labelled (single-strand, 3-strand current build, 6-strand current build, 12-strand future). "Model becomes predictor."]*

> "Apply your model to predict next-build. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply your model."

## 4. Body (1:00–4:30)

> "Predictions for the current builds are made. *Today: extend the model to predict design variations*.
>
> *[pause]*
>
> *The application principle.*
>
> *Mod B's model — element pattern × array factor, impedance from L_total — applies to any Rodin Coil topology and operating-frequency choice*.
>
> *Vary topology, vary operating frequency, vary former dimensions; compute predicted gain, impedance, pattern; identify promising design variations*.
>
> *Engineering design exploration before building*. *Cheap on paper; expensive on bench*.
>
> *[pause]*
>
> *Three design variations to explore.*
>
> *Variation 1 — strand count.* *Current builds: 1 (Wk 33), 6 (Wk 35)*. *Future possibility: 3 (intermediate), 12 (advanced)*. *Predicted gain scaling with N: increase ~3 dB per doubling of strand count up to point where mutual coupling dominates*.
>
> *Variation 2 — operating frequency.* *Current operating frequency: TBM*. *Future possibilities: at f_res / 3 (well below resonance, stable inductive); at f_res (resonant operation, highest impedance and possibly highest efficiency); at 2 · f_res (capacitive regime)*. *Predicted efficiency by regime: lowest below f_res (low radiation R relative to total); highest near f_res (radiation R peaks); moderate above f_res*.
>
> *Variation 3 — former dimensions.* *Current former: R = ?, r = ?* **`[ORG-INPUT]`**. *Future possibilities: larger former (more efficient at lower frequencies); smaller former (more efficient at higher frequencies); different aspect ratio R/r*. *Predicted gain scaling with size: increases with size at fixed frequency; reaches efficient-radiator regime when coil-size ~ λ/4*.
>
> *Three variations; design space mapped*.
>
> *[pause]*
>
> *Worked example — predict 12-strand variant gain.*
>
> *Strand count N = 12*; *N_eff for array factor = 12 if equispaced phasing; phase offsets at 30° intervals*.
>
> *Array-factor peak gain = 10 · log10(12) ≈ 10.8 dB (vs. 7.8 dB for 6-strand)*.
>
> *Adjusted for mutual-coupling losses (more strands, more coupling)*: *effective gain ~9-10 dB above element*.
>
> *Net predicted gain*: *G_max ≈ -3 + 9.5 = 6.5 dBi* (vs. ~5 dBi for 6-strand).
>
> *12-strand offers ~1.5 dB gain improvement over 6-strand*; *at cost of ~12 hr build session and 66 mutual-inductance pairs*. *Engineering trade-off.*
>
> **`[ORG-INPUT]`** for whether 12-strand variant is course-canonical or exploratory.
>
> *[pause]*
>
> *Worked example — predict resonant-mode operation.*
>
> *Operating at f = f_res*: *Z_antenna sweeps through resonance*; *|Z| typically rises to ~kΩ range*; *radiation resistance R_rad reaches maximum fraction of |Z|*.
>
> *Predicted efficiency at f_res*: *η ≈ R_rad / (R_rad + R_loss)*; *R_loss includes ohmic and dielectric*; *for well-built coil at f_res, η may approach 70-90%*.
>
> *60% efficiency claim consistent with f_res operation*; *but bandwidth is narrow (~5%)*; *match-network must be tuned to f_res precisely*.
>
> *Engineering implication*: *resonant operation is the high-efficiency regime; off-resonance operation is the off-resonance regime*. **`[ORG-INPUT]`** for whether 60% claim refers to resonant operation specifically.
>
> *[pause]*
>
> *Three engineering uses of design-space predictions.*
>
> *Use one — capstone-build planning.* *Practitioners pursuing capstone work can use design-space exploration to choose a build that addresses a specific question (e.g., 'does 12-strand confirm scaling?')*.
>
> *Use two — application-driven build choice.* *Specific applications (antenna for narrow-band HF transmission; broadband testing) suggest specific design choices*; *model predictions inform*.
>
> *Use three — model-validation iteration.* *Each measurement at a build refines model accuracy*; *next build's prediction is more confident*; *engineering iteration*.
>
> *[pause]*
>
> *Three caveats on design-space predictions.*
>
> *Caveat one — predictions become less reliable far from current build's regime.* *Models extrapolate poorly outside their fitted parameter range*; *12-strand prediction is cautious; 24-strand prediction is speculative*.
>
> *Caveat two — predictions ignore higher-order effects.* *Skin-depth losses, dielectric heating, ground-plane interaction*; *engineering predictions need these for production use*.
>
> *Caveat three — design choice is also engineering judgment.* *Best-predicted variant isn't always best-build choice*; *cost, time, capability also factor*; *engineering judgment integrates*.
>
> *[pause]*
>
> Practical takeaway. *Apply Mod B's antenna model to predict design variations: strand count, operating frequency, former dimensions.* *Worked examples: 12-strand variant gives ~6.5 dBi (1.5 dB over 6-strand at high cost); resonant-mode operation gives 70-90% efficiency in narrow band.* *Three engineering uses: capstone planning, application choice, model iteration.* **`[ORG-INPUT]`** for canonical course choices and frequency-specific claim resolution."

## 5. Try it (4:30–5:30)
> "Pause. Pick one design variation (strand count, frequency, dimensions). Compute predicted gain or efficiency change. Note assumptions and uncertainties. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Antenna theory mainstream vs. Rodin frame."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-816 (design-space gain prediction plot; worked examples for 12-strand and resonant-mode).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (apply the model).
- **`[ORG-INPUT]`** — current former dimensions; canonical 12-strand status; resonant-frequency operating choice.
- Music cue: opening, application/exploration.
