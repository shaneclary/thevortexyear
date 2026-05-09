Wk 35 — Theme: Rodin Coil — Multi-Strand & Phased — Lens 2: Count — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft. **`[ORG-INPUT]`**

---

## 0. Authoring notes
Compute phase-shift in (col, row). Mathematical content: per-strand phase-shift vectors, expressed in (col, row) lattice coordinates. Builds on Mod B Wk 27 Lens 3 (col, row parametrisation).

## 1. Outcome
Student can compute the phase-shift vector (Δcol, Δrow) for each strand of a 3-strand or 6-strand Rodin Coil in (col, row) coordinates.

## 2. Hook (0:00–0:30)
*[A worked-example panel: the (col, row) lattice with strand 1's entry at (0, 0); strands 2, 3, 4, 5, 6 with their (Δcol, Δrow) values labelled. "Phase shift = lattice translation."]*

> "Compute phase-shift in (col, row). Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Compute phase shifts."

## 4. Body (1:00–4:30)

> "Yesterday — phasing diagram visualised. *Today: compute the phase-shift vectors precisely*.
>
> *[pause]*
>
> *Recall: (col, row) parametrisation.*
>
> *From Wk 27 Mod B Lens 3*: *each helix on the toroidal former parametrised as (col, row)*; *col indexes major-circle position (azimuthal angle around torus axis)*; *row indexes minor-circle position (poloidal angle around minor circle)*.
>
> *Canonical helix*: *6 (col, row) positions per cycle, following the doubling-cycle pattern*. **`[ORG-INPUT]`** for canonical (col, row) coordinates per position.
>
> *[pause]*
>
> *Phase-shift vector definition.*
>
> *For strand i*: *phase-shift vector (Δcol_i, Δrow_i) is the (col, row) offset of strand i's entry point relative to strand 1's entry point*.
>
> *Strand 1 by convention*: *(Δcol_1, Δrow_1) = (0, 0)*. *Other strands: nonzero shift*.
>
> *[pause]*
>
> *Three-strand phase-shift vectors.*
>
> *Three-strand coil: 3 strands, equispaced 120° azimuthal offsets*.
>
> *Strand 1: (Δcol, Δrow) = (0, 0)*.
>
> *Strand 2: (Δcol, Δrow) = (n_col/3, 0)* where *n_col is total col-positions per major-circle revolution*. *Pure col shift; no row shift; equispaced trisection.*
>
> *Strand 3: (Δcol, Δrow) = (2 n_col/3, 0)*.
>
> *Working assumption: n_col = 6* (one position per doubling-cycle step at hexagonal projection)*. *Then strand 2 shift = (2, 0); strand 3 shift = (4, 0)*. **`[ORG-INPUT]`** for canonical n_col value.
>
> *[pause]*
>
> *Six-strand phase-shift vectors.*
>
> *Six-strand coil: 6 strands, equispaced 60° azimuthal offsets*.
>
> *Strand 1: (Δcol, Δrow) = (0, 0)*.
>
> *Strand 2: (Δcol, Δrow) = (n_col/6, 0) = (1, 0)*.
>
> *Strand 3: (Δcol, Δrow) = (2, 0)*.
>
> *Strand 4: (Δcol, Δrow) = (3, 0)*.
>
> *Strand 5: (Δcol, Δrow) = (4, 0)*.
>
> *Strand 6: (Δcol, Δrow) = (5, 0)*.
>
> *Six strands; pure col-shifts; equispaced sextant of 360°.*
>
> *[pause]*
>
> *Three things to note about the shifts.*
>
> *Note one — only col shifts, no row shifts.* *Standard equispaced phasing has Δrow = 0 for all strands*; *all strands enter at the same minor-circle position (typically the outer equator, row = 0)*. *Phasing is purely azimuthal*.
>
> *Note two — shifts are integer multiples of n_col / N.* *N = strand count; n_col = positions per major-circle revolution*. *Integer shifts simplify build (entry-point markings at lattice nodes); non-integer shifts complicate marking and are not course-canonical*. **`[ORG-INPUT]`** for whether non-integer shifts ever used.
>
> *Note three — shifts compose over cycles.* *After one cycle of strand i, the strand's exit (col, row) returns to its entry (col, row) plus closure*; *strand 1 closes at (0, 0); strand 2 closes at (Δcol_2, 0); etc*. *Closure verified per strand.*
>
> *[pause]*
>
> *Counter-wind shift modification.*
>
> *If a strand is counter-wound (CCW instead of CW)*, *its shift becomes (n_col - Δcol_i, 0) modulo n_col*; *direction reversal mirrors the col-shift*. *Strand 4 of 6-strand counter-wound: original shift (3, 0); CCW shift (3, 0)* (3 mirrors to 3 modulo 6) — *this is the symmetric case*. **`[ORG-INPUT]`** for canonical counter-wind specification and the resulting phase shifts.
>
> *[pause]*
>
> *Two engineering uses of phase-shift vectors.*
>
> *Use one — entry-point marking.* *Phase-shift vectors translate directly to entry-point marks on the former*; *col-shift = azimuthal offset; row-shift = poloidal offset (zero in canonical case)*. *Build instructions follow.*
>
> *Use two — measurement-prediction.* *Mutual inductance between strand i and strand j depends on their relative phase shift (Δcol_i - Δcol_j, Δrow_i - Δrow_j)*; *standard EM theory predicts the dependence*; *measurements verify*. *Mod B Wk 35 Lens 6 will apply this rule*.
>
> *[pause]*
>
> Practical takeaway. *Compute phase-shift vectors as (Δcol, Δrow) offsets relative to strand 1.* *3-strand: (0,0), (2,0), (4,0). 6-strand: (0,0), (1,0), (2,0), (3,0), (4,0), (5,0).* *Pure col shifts in canonical case; integer multiples of n_col/N.* **`[ORG-INPUT]`** for canonical n_col, counter-wind specifications, and any non-canonical phasing variants."

## 5. Try it (4:30–5:30)
> "Pause. Compute and write down the (Δcol, Δrow) for all 6 strands of a 6-strand coil. Verify they're equispaced. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Construct the phased path explicitly."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-785 (phase-shift table for 3-strand and 6-strand variants; (col, row) lattice with strand entry points labelled).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (computing shifts).
- **`[ORG-INPUT]`** — canonical n_col; counter-wind shift specifications; non-integer shift variants.
- Music cue: opening, computational.
