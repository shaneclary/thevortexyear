Wk 35 — Theme: Rodin Coil — Multi-Strand & Phased — Lens 3: Build — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Construct the phased path explicitly. Step-by-step mathematical construction of each strand's helix path in (col, row) coordinates. Builds on Lens 2's phase-shift vectors.

## 1. Outcome
Student can construct the explicit (col, row) coordinate sequence for any strand of a 3- or 6-strand Rodin Coil given strand 1's canonical sequence and the strand's phase-shift vector.

## 2. Hook (0:00–0:30)
*[A two-column worked-example: column 1 strand 1's canonical sequence (col, row) per position; column 2 strand 4's sequence with phase shift applied. Side-by-side; arrows showing per-position translation. "Strand-by-strand construction."]*

> "Construct the phased path. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 3 of 9. Construct phased paths."

## 4. Body (1:00–4:30)

> "Phase-shift vectors yesterday. *Today: apply them to construct each strand's path explicitly*.
>
> *[pause]*
>
> *Recall: canonical (col, row) sequence for strand 1.*
>
> *Strand 1 (canonical helix) traverses 6 (col, row) positions per cycle*:
>
> *Position 1: (0, 0)*. *Position 2: (col_2, row_2)*. *Position 3: (col_3, row_3)*. *Position 4: (col_4, row_4)*. *Position 5: (col_5, row_5)*. *Position 6: (col_6, row_6)*. *Closure back to (0, 0)*.
>
> **`[ORG-INPUT]`** for canonical (col, row) coordinates of all 6 positions. *Working values: positions follow doubling-cycle pattern with appropriate (col, row) deltas per step*.
>
> *[pause]*
>
> *Construction rule for strand i.*
>
> *Strand i's k-th position*: *(col_k + Δcol_i, row_k + Δrow_i)* — *each canonical position translated by the strand's phase-shift vector*.
>
> *Apply per position; resulting sequence is strand i's full path*.
>
> *[pause]*
>
> *Worked example: 3-strand coil, strand 2.*
>
> *Strand 2 phase shift: (Δcol_2, Δrow_2) = (2, 0)*.
>
> *Strand 2's positions*:
>
> *Position 1: (0+2, 0+0) = (2, 0)*.
>
> *Position 2: (col_2 + 2, row_2)*.
>
> *Position 3: (col_3 + 2, row_3)*.
>
> *...continuing for all 6 positions*.
>
> *Closure: strand 2's exit at (2, 0)*; *closes per-strand same way strand 1 closes at (0, 0)*.
>
> *Pattern: strand 2 is strand 1's path shifted by 2 columns; visually, the same helix translated 120° around the major circle*.
>
> *[pause]*
>
> *Worked example: 6-strand coil, strand 4.*
>
> *Strand 4 phase shift: (Δcol_4, Δrow_4) = (3, 0)*.
>
> *Strand 4's positions*:
>
> *Position 1: (3, 0)*.
>
> *Position 2: (col_2 + 3, row_2)*.
>
> *... continuing for all 6 positions*.
>
> *Closure: strand 4's exit at (3, 0)*.
>
> *Pattern: strand 4 is strand 1's path shifted by 3 columns; visually, antipodal to strand 1 around the major circle*.
>
> *Antipodal phasing*: *strand 1 and strand 4 in 6-strand coil are at opposite sides of the torus*; *interesting structural property*.
>
> *[pause]*
>
> *Three things the explicit construction reveals.*
>
> *Reveal one — every strand is a topological copy of strand 1.* *Same (1, n) torus knot, same closure, same cycle-count*; *only entry-point differs*. *Topology preserved across strand index*.
>
> *Reveal two — antipodal pairs in 6-strand correspond to polar-pair structure.* *Strand 1 ↔ strand 4 (shift 0 vs shift 3) are antipodal*; *strand 2 ↔ strand 5 antipodal*; *strand 3 ↔ strand 6 antipodal*. *Three antipodal pairs ↔ three polar pairs*. *VBM-engineering correspondence at strand-pair level*.
>
> *Reveal three — counter-winding inverts the col sequence.* *If strand i is counter-wound, its k-th position is (col_k_reversed + Δcol_i, row_k_reversed)*; *traversal direction reversed; col sequence runs backwards*. **`[ORG-INPUT]`** for canonical counter-wind constructions.
>
> *[pause]*
>
> *Three engineering uses of explicit construction.*
>
> *Use one — build instructions per strand.* *Each strand's (col, row) sequence is an instruction list for the builder*: *"start at (Δcol, 0); pass through (col_2 + Δcol, row_2); ..."*. *Build manual.*
>
> *Use two — wire-length verification.* *Each strand's path length computed from (col, row) sequence using path-length formula from Mod B Wk 27 Lens 6*; *all strands have same length per cycle (translation-invariant); total wire = N × per-strand length*. *Procurement.*
>
> *Use three — collision check.* *Multi-strand strands share the same former; some (col, row) positions may overlap*. *Check explicit sequences for collisions; offset cross-overs as needed*. **`[ORG-INPUT]`** for whether canonical multi-strand phasings have collisions and how they're handled in build practice.
>
> *[pause]*
>
> Practical takeaway. *Construct each strand's path by translating strand 1's canonical (col, row) sequence by the strand's phase-shift vector.* *Topology preserved per strand; antipodal strand-pairs correspond to polar pairs in 6-strand variant; counter-winding inverts the sequence.* *Explicit construction enables build instructions, wire-length verification, collision checking.* **`[ORG-INPUT]`** for canonical (col, row) coordinates and counter-wind constructions."

## 5. Try it (4:30–5:30)
> "Pause. Pick one strand from a 3-strand or 6-strand coil. Write out its 6 (col, row) positions explicitly. Verify the phase shift is correct. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Rodin on phasing."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-786 (phased-path construction worked example: strand 1 sequence + strand 4 sequence with translation shown; antipodal-pair visualisation).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (constructing paths).
- **`[ORG-INPUT]`** — canonical (col, row) coordinates per position; counter-wind constructions; collision handling.
- Music cue: opening, mathematical/explicit.
