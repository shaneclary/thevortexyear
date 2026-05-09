Wk 32 — Theme: Rodin Coil — Topology — Lens 3: Build — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Construct the wiring chart from (col, row) coords. Build the wiring chart from discrete (col, row) coordinates.

## 1. Outcome
Student can construct a wiring chart that lists (col, row) coordinates for each helix step and produces specifications usable for code or hand-winding.

## 2. Hook (0:00–0:30)
*[A wiring chart: rows = step indices; columns = (col, row), (θ, φ), Cartesian (x, y, z); cells filled in for canonical Rodin Coil.]*

> "Construct wiring chart from coords. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 3 of 9. Construct wiring chart."

## 4. Body (1:00–4:30)

> "Lens 2 specified topology with (p, q). Today: *construct wiring chart from (col, row) coordinates* — *practical specification for hand-winding or code*.
>
> *[pause]*
>
> *Wiring chart structure.*
>
> *Columns of chart*:
>
> *Step (k = 0, 1, 2, 3, 4, 5).*
>
> *Cycle position (1, 2, 4, 8, 7, 5 — doubling-cycle order).*
>
> *(col, row) discrete coords.*
>
> *(θ, φ) angular coords.*
>
> *(x, y, z) Cartesian coords.*
>
> *Notes (entry, exit, special features).*
>
> *Six columns; specifies position completely*.
>
> *Rows*: *6 entries (one per step)*; *plus header row*.
>
> *[pause]*
>
> *Worked example chart for canonical Rodin Coil.*
>
> *Specifications*: *single-strand; one cycle; n = 2; R = 60mm, r = 15mm.*
>
> *Step 0*:
>
> *Cycle position: 1.*
>
> *(col, row): (0, 0).*
>
> *(θ, φ): (0°, 0°).*
>
> *(x, y, z): ((R+r) cos 0, (R+r) sin 0, r sin 0) = (75, 0, 0) mm.*
>
> *Notes: entry point.*
>
> *Step 1*:
>
> *Cycle position: 2.*
>
> *(col, row): (1, 2).*
>
> *(θ, φ): (60°, 120°).*
>
> *(x, y, z): ((R + r cos 120°) cos 60°, (R + r cos 120°) sin 60°, r sin 120°) = ((60 - 7.5) × 0.5, (60 - 7.5) × 0.866, 13) = (26.25, 45.5, 13) mm.*
>
> *Notes: helix pass through.*
>
> *Steps 2-5*: *similar calculations for positions 4, 8, 7, 5*.
>
> *Step 6 (= step 0)*: *closure; verifies (col, row), (θ, φ), (x, y, z) match step 0's*.
>
> *Six rows + closure verification; complete chart*.
>
> *[pause]*
>
> *Three uses of the wiring chart.*
>
> *Use 1 — hand-winding guide.* *During Wk 33 winding, practitioner consults chart at each step*; *positions former and wire correctly per coordinates*. *Engineering precision.*
>
> *Use 2 — code-input specification.* *Simulation code reads wiring chart values*; *generates electromagnetic predictions*. *Code-friendly format.*
>
> *Use 3 — replication artefact.* *Charts shared between practitioners produce consistent builds*; *foundation-canonical specification*. *Cross-rig consistency.*
>
> *[pause]*
>
> *Three observations on the chart.*
>
> *Observation one — chart is mathematically complete.* *Given dimensions and n, all coordinates compute deterministically*; *no engineering ambiguity*.
>
> *Observation two — chart enables verification.* *During winding, practitioner can compare physical wire position to chart's predicted coordinates*; *correctness check*.
>
> *Observation three — chart adapts to dimensions.* *Same wiring chart structure for any (R, r)*; *different specific values*; *generalisable across coil sizes*.
>
> *[pause]*
>
> *Three engineering applications.*
>
> *Application 1 — pre-winding rehearsal.* *Practitioner traces (col, row) sequence on decorated former with finger before winding wire*; *spatial-coordinate familiarity*.
>
> *Application 2 — winding-quality assessment.* *After winding, photograph coil, compare wire path against chart's predicted positions*; *deviation measurement*.
>
> *Application 3 — multi-strand coordination.* *Multi-strand builds have multiple wiring charts (one per strand)*; *strand offsets specified through coordinate differences*.
>
> *[pause]*
>
> Practical takeaway. *Construct wiring chart from (col, row) coordinates*: *six rows (one per cycle step) × 6 columns (step, position, (col, row), (θ, φ), (x, y, z), notes)*. *Mathematical completeness; hand-winding guide; code-input; replication artefact*. *Wk 33's first build uses this chart*."

## 5. Try it (4:30–5:30)
> "Pause. Compute (x, y, z) for step 3 (cycle position 8) with R = 60, r = 15, n = 2. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Marko's canonical winding."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-720 (canonical wiring chart with all six steps' coordinates).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (chart).
- Music cue: building/computational.
