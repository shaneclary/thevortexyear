# Module 3.5 — Build Project: A Beginner Rodin Coil

**Track:** Builder / Practitioner
**Estimated runtime:** 60 min (instruction + demo) + 4–8 hours (project work)
**Prerequisites:** Modules 3.1 *Engineering Mindset*, 3.2 *Reading the Number Map as a Wiring Diagram*, 3.3 *Coil Geometry and Form Factors*, 3.4 *Sourcing and Tooling*. Comfortable with: soldering, reading a wiring diagram, basic multimeter use.
**Status:** Draft — pilot for org review. **Specifications throughout flagged `[ORG-SPECS]` are placeholders pending the org's canonical build sheet.**

---

## 0. Authoring notes (non-student-facing)

This is the most sensitive lesson in the course. Track 3 students will *measure* what they build, and a reproducible build with honest measurement is the strongest possible asset for the org's case. Conversely, an over-claimed build that doesn't measure up will be cited against the org for years.

The lesson must do three things at once:
1. **Teach a build.** Real specs, real materials, real winding sequence, with the canonical Rodin Coil topology (the 1→2→4→8→7→5 doubling-circuit traversal around a toroidal core).
2. **Set expectations.** Students should know what their coil *will* do (specific inductance and EMI signature given the geometry) and what it *might* do, awaiting evidence (efficiency claims, novel field effects).
3. **Document for replication.** Every student finishes this lesson with a build log they could send to another lab.

Because the org has not yet supplied the canonical spec sheet (see `04_notes/GAPS_AND_NEEDS.md` items B-3, D-18), this lesson currently uses **publicly-known winding patterns** consistent with the diagrams on RodinAerodynamics.org and Rex Research's VBM PDF. Every numerical specification is flagged `[ORG-SPECS]`. Once the org supplies the canonical build sheet, those flags become a checklist for replacement.

Quote anchors:
- Rodin: *"Crude versions of the Rodin Coil have shown 60% more efficiency than existing antennas..."* (P1-1) — present as a claim to be tested, not as a given.
- Powell: *"This is not magic. It is engineering, when you understand the math."* `[ORG-REVIEW]` — exact quote.

---

## 1. Learning outcomes

By the end of this module, a student can:

1. Identify the **Rodin Coil topology** as a winding pattern derived from the doubling-circuit traversal of the Rodin Number Map on a toroidal surface.
2. **Build** a single-strand Rodin Coil to specification on a toroidal form, with proper tensioning and termination.
3. **Measure** the resulting coil's DC resistance, inductance at 1 kHz, and self-resonant frequency, recording values in a standard build log.
4. **Document** their build (BOM, photos, schematic, measurement table) sufficiently for an independent replicator to reproduce it.
5. State, in their own words, which claims about the coil their build *does* support and which require additional testing protocols outside the scope of this module.

---

## 2. Setup (1–2 min)

> "We've spent five lessons learning *why* a Rodin Coil is wound the way it is. Today we wind one. You'll finish this module with a working coil on the bench, three measurements in your log, and the start of a build portfolio you can hand to anyone — including the next student who wants to replicate your work. We're going to be honest about what we can claim, and we're going to be specific about what we measure. Let's get to it."

[DIAGRAM: D-19 — Rodin Coil physical photograph]

---

## 3. Concept (8–15 min)

### 3.1 The Rodin Coil as a wiring instruction

A standard solenoid wraps a wire in equal turns around a former. A Rodin Coil instead wraps the wire *along the doubling-circuit path* on a toroidal surface — the same path you traced in Modules 1.3 and 2.6, now physically embodied in copper.

The build at this beginner tier is:
- A single insulated copper conductor.
- Wound around a torus core.
- Following the **24-position doubling-circuit pattern**: at each turn, the wire crosses to the position that would correspond to one step around the doubling helix on the Rodin Number Map.

[DIAGRAM: D-17 — Rodin Coil winding diagram (single-strand)]
[ANIMATION: A-05 — Step-by-step build animation]

### 3.2 What the geometry buys you

Three structural properties follow from the topology:
- **Self-cancelling adjacent fields.** Adjacent strands run in opposing directions over much of the surface, which (proponents argue) reduces parasitic capacitance and resistive losses relative to a solenoid of equivalent turn count.
- **Toroidal containment.** The field is largely confined within and immediately around the torus rather than radiating outward as in a straight solenoid.
- **Resonant structure tied to the 6-fold winding period.** The coil shows characteristic standing-wave behaviour at frequencies tied to the doubling-circuit period.

### 3.3 What the geometry does *not* automatically buy

The Rodin Coil community has made many claims about overunity, anomalous heat, and exotic field effects. Some of those claims have specific protocols that test them; many do not. **For this module, we measure only the things that are directly checkable on a standard bench:** DC resistance, inductance, and self-resonant frequency. Everything else awaits Modules 3.6 (*Bench Testing*), 3.8 (*Antenna and RF Applications*), and the capstone.

> "What we measure, we own. What we claim and don't measure, the next replicator gets to challenge." *(Track-3 motto.)*

---

## 4. Walkthrough — the build

### 4.1 Bill of materials

| Item | Spec | Qty | Notes |
|------|------|-----|-------|
| Toroidal core | Major dia. ≈ 100 mm, minor dia. ≈ 25 mm `[ORG-SPECS]` | 1 | Wood, 3D-printed PETG, or low-µ ferrite. Avoid steel for first build. |
| Magnet wire | AWG 22 enamelled copper `[ORG-SPECS]` | ≈ 30 m | Single insulated conductor. |
| Heat-shrink, 3 mm | — | 1 m | For terminations. |
| Soldering iron + solder | 60 W min | 1 | Lead-free preferred. |
| Hot-melt glue / fixative | — | 1 | Tack the winding at start and end only. |
| Multimeter | DC resistance, capacitance/inductance if possible | 1 | A bench LCR meter is much better; a basic multimeter works for §4.5. |
| Function generator + oscilloscope | 1 Hz – 10 MHz `[ORG-SPECS]` | 1 each | Optional for this module; required for 3.6. |

### 4.2 Pre-build prep

1. Inspect the torus core. Sand any rough edges.
2. Mark **24 equally-spaced reference points** around the major circumference of the torus on the *outer equator*. (This is your column index; row index is determined by the winding step.)
3. Mark the equivalent 24 points on the *inner equator*.
4. Mark **6 equally-spaced reference points** around the minor circumference at one of the column-0 positions.

### 4.3 Winding sequence

Strip 30 mm of insulation off one end of the wire and tin it. Tack it at column-0, row-0 with a small drop of glue.

The winding rule: **at each step, the wire moves +1 column and +1 row (using doubling-circuit row indexing 0→1→2→3→4→5→0...).**

Step-by-step for the first six positions:
1. From (col 0, row 0) → (col 1, row 1).
2. From (col 1, row 1) → (col 2, row 2).
3. From (col 2, row 2) → (col 3, row 3).
4. From (col 3, row 3) → (col 4, row 4).
5. From (col 4, row 4) → (col 5, row 5).
6. From (col 5, row 5) → (col 6, row 0). *(Row index wraps mod 6.)*

Continue until you've stepped through all 24 columns. **The wire returns to (col 0, row 0)**, completing one full traversal. This is one *strand* of a single-strand Rodin Coil.

[DIAGRAM: D-17 — annotated for steps 1–6]
[B-ROLL — tight shot of hands and former]

### 4.4 Termination

Tack the end of the wire at (col 0, row 0) with a small drop of glue. Strip 30 mm, tin it, and bring both leads (start and end) out for measurement. Do **not** twist the leads together or coil them — keep them straight to avoid biasing the inductance measurement.

### 4.5 Measurement (build log entries)

Open `Build_Log.md` (template in `05_assets/templates/build_log.md`, tbd) and record:

| Measurement | Method | Your value |
|---|---|---|
| Total wire length used | Tape measure before winding | _____ m |
| Number of full traversals | Count | 1 |
| DC resistance, lead-to-lead | Multimeter | _____ Ω |
| Inductance @ 1 kHz | LCR meter | _____ µH |
| Self-resonant frequency | Function gen + scope: ramp frequency, find peak | _____ kHz |
| Photograph of completed coil | Phone | [link] |
| Photograph of measurement setup | Phone | [link] |

`[ORG-SPECS]` — expected DC resistance and inductance ranges for the canonical build are placeholders pending the org's reference build. We expect the org's spec sheet to include "you should see DC resistance in the range X–Y Ω and inductance Z–W µH; outside this, check your winding and re-measure."

---

## 5. Practice

**Exercise 1.** Photograph each of the first six winding steps. Annotate them with the (col, row) coordinates from §4.3. Submit as a PDF strip.

**Exercise 2.** Calculate the *theoretical* total wire length for your form's dimensions, assuming one full 24-step traversal with row-stepping. Compare to your measured length. Account for the difference in your build log.

**Exercise 3.** Repeat the winding on a second core *with the row-stepping rule reversed* (step −1 mod 6 instead of +1 mod 6). This is the **halving-direction** wind. Measure DC resistance and inductance and compare. Does the geometry alone change the inductance?

**Exercise 4.** *Reflection.* Write a 200-word reflection on the difference between *what your build does* (measurable) and *what is claimed for the Rodin Coil* (broader). Where on that spectrum does this build sit?

---

## 6. Skeptics' corner (3–5 min)

> *"You're claiming 60% efficiency gains over conventional antennas. Where are the measurements?"*

The claim originates with Rodin (P1-1) and is repeated in the Rodin Solution Project document (P1-2). The course presents this claim in two layers:

1. **As Rodin's claim** — sourced and quoted, not the course's claim.
2. **As a hypothesis we test, not assume.** Module 3.6 *Bench Testing* and Module 3.8 *Antenna and RF Applications* contain specific protocols for measuring antenna performance against a reference dipole. Whether your specific build meets, exceeds, or falls short of the published claim **is your data point** — and it's the data point the org will value most.

The honest position the course takes: *we have not, in this module, demonstrated that this coil is more efficient than a conventional antenna. We have built a coil with a specific topology and measured three of its electrical properties. Whether the broader claims survive replication is a question the Track 3 capstone is designed to address.*

`[ORG-REVIEW]` — confirm tone. The alternative is to assert the claim as established, which we can do if instructed; but Track 3 students are exactly the audience most likely to test it themselves and report back, so the lesson should set them up to do that with measurement integrity intact.

---

## 7. Further reading

- **P1-1** — RodinAerodynamics.org, "Rodin Coil" section. (Primary visual of the topology.)
- **P1-2** — *Rodin Solution Project* PDF. *(Currently unfetchable — `[NEEDS-SOURCE]`.)*
- **P3-22** — Natural Philosophy Wiki: lists the "60% antenna efficiency" claim with attribution.
- *Basis for the ExtraOrdinary Rodin Coil* — Rex Research VBM PDF (2-vbm.pdf). Reference winding diagrams.
- `[NEEDS-SOURCE]` — *The Rodin Number Map and Rodin Coil* (2010, Rodin). Definitive technical source.
- `[NEEDS-SOURCE]` — Org-supplied canonical build sheet.

---

## 8. Assessment

**Build portfolio entry (capstone-tracking):**

1. Completed Build Log with all measurements.
2. Six annotated photographs from Exercise 1.
3. Comparison table from Exercise 3 (forward vs. reverse row-stepping).
4. Reflection paragraph from Exercise 4.

This entry is the *first deliverable* of the Track 3 capstone (Module 3.10).

---

## 9. Production notes

- **Diagrams needed:** D-17, D-19. Animation A-05 is the lesson's centrepiece.
- **B-roll:** hands winding, close-ups of solder joints, the multimeter screen showing the first reading.
- **On-camera demo build** by an instructor who has wound at least three coils (so the muscle memory shows).
- **Safety call-outs:** soldering eye protection; wire-end deburring; the coil itself is low-energy at this tier and has no specific electrical hazard.
- **Caption care:** "Rodin Coil" capitalised; "torus" lowercase; "Doubling Circuit" capitalised; AWG numbers spelled "AWG 22" not "22 AWG" for consistency with the BOM table.
- **Localisation note:** measurement ranges should also be supplied in imperial for US students (inches, feet of wire) once the org confirms the canonical build dimensions.
- **Estimated production complexity:** **HIGH** — physical build, measurement, and animated wiring overlay all in one lesson. Budget two filming days plus an animation pass.
