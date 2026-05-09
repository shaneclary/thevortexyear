Wk 28 — Theme: Polar Number Pairs Revisited (as Coil-Strand Phasing) — Lens 3: Build — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Construct the involution explicitly. Build the antipodal involution map T: T² × T → T² × T as a concrete formula and apply it to all residues.

## 1. Outcome
Student has constructed the antipodal involution explicitly and applied it to all 9 residues to verify pair ↔ antipode mapping.

## 2. Hook (0:00–0:30)
*[A clean tabular construction: residue k → (θ_k, φ_k) → T(θ_k, φ_k) = (θ_k + π, φ_k + π) → which residue is at that position; verification table.]*

> "Construct the involution. Apply to all residues. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 3 of 9. Construct the involution explicitly."

## 4. Body (1:00–4:30)

> "Lens 2 proved pair ⇔ antipode (given canonical embedding). Today: *construct the involution explicitly* and apply it to all residues for verification.
>
> *[pause]*
>
> *Step 1 — choose canonical Map embedding.*
>
> Convention for this lesson: *place residue k at major angle θ_k = (k - 1) × 40°, with the doubling cycle determining minor angle φ_k = (n × stepIndex(k)) × 60°, where stepIndex maps cycle order (1 → step 0; 2 → step 1; 4 → step 2; 8 → step 3; 7 → step 4; 5 → step 5).*
>
> *For n = 2 (canonical candidate; **`[ORG-INPUT]`**):*
>
> *Residue 1 → (θ = 0°, φ = 0°).*
>
> *Residue 2 → (θ = 40°, φ = 120°).*
>
> *Residue 4 → (θ = 120°, φ = 240°).*
>
> *Residue 8 → (θ = 280°, φ = 360°ʹ ≡ 0°).*
>
> *Residue 7 → (θ = 240°, φ = 120°).*
>
> *Residue 5 → (θ = 160°, φ = 240°).*
>
> *Plus 3, 6, 9 on the 3-6-9 axis* (foundation-specified).
>
> *Wait — this puts residue 1 at θ = 0° and residue 8 at θ = 280° — not 180° apart.*
>
> *The 'evenly spaced at 40°' embedding doesn't put polar pairs at antipodal positions.* *The canonical antipodal-respecting embedding is different.* **`[ORG-INPUT]`** for foundation-specified canonical embedding.
>
> *Today's lesson constructs the involution given a hypothetical canonical embedding where polar pairs ARE antipodal.* *Practitioners using this lesson should substitute the foundation-canonical embedding when available.*
>
> *[pause]*
>
> *Step 2 — define the involution map T.*
>
> *T: (θ, φ) → (θ + π, φ + π) (mod 2π in each).*
>
> *Equivalently in degrees:* *T(θ, φ) = (θ + 180°, φ + 180°) (mod 360° each).*
>
> *Step 3 — apply T to each residue's position.*
>
> *For residue 1 at (0°, 0°):*
>
> *T(0°, 0°) = (180°, 180°).*
>
> *In a canonical antipodal-respecting embedding*: *which residue is at (180°, 180°)?* *By foundation-specification, this should be residue 8* (since (1, 8) is a polar pair).
>
> *For residue 2 at θ_2:* *T(position(2)) = (θ_2 + 180°, φ_2 + 180°).* *In canonical embedding, this position is residue 7 (the polar pair partner).*
>
> *For residue 4:* *T(position(4)) = position(5) (polar pair partner).*
>
> *For residue 9 (self-paired):* *T(position(9)) = position(9)*. *9 is mapped to itself? Wait — fixed-point-free property says no fixed points*.
>
> *9 is self-paired arithmetically (9 + 9 = 18 ≡ 0 mod 9, so 9 is its own additive inverse), but the involution T can't have a fixed point on the torus surface*. *The 9-residue is exceptional* — *traditionally placed on the 3-6-9 axis, not in the polar-pair antipodal structure of the doubling cycle*.
>
> *Foundation specification needed for the 9-residue's exact treatment.* **`[ORG-INPUT]`**
>
> *[pause]*
>
> *Step 4 — verification.*
>
> *Build a verification table:*
>
> *| residue | position | T(position) | residue at T(position) |*
>
> *| 1 | (0°, 0°) | (180°, 180°) | 8 |*
>
> *| 2 | (?, ?) | (? + 180°, ? + 180°) | 7 (expected) |*
>
> *| 4 | (?, ?) | (? + 180°, ? + 180°) | 5 (expected) |*
>
> *| 8 | (180°, 180°) | (0°, 0°) | 1 |*
>
> *| 7 | (?, ?) | (? + 180°, ? + 180°) | 2 (expected) |*
>
> *| 5 | (?, ?) | (? + 180°, ? + 180°) | 4 (expected) |*
>
> *| 3, 6, 9 | foundation-specified | foundation-specified | foundation-specified |*
>
> *Six entries from the doubling family verify polar-pair antipodality through the involution.*
>
> *[pause]*
>
> *Three observations on the construction.*
>
> *Observation one — the involution depends on canonical embedding.* *Without foundation-specified canonical embedding*, *the construction has a free parameter*. *Foundation work resolves.*
>
> *Observation two — verification is mechanical.* *Given canonical embedding, applying T and checking which residue is at T(position) is direct calculation.* *Hand-checkable.*
>
> *Observation three — the 9-residue is exceptional.* *Self-paired arithmetically; placed on 3-6-9 axis topologically*; *outside the doubling-family antipodal structure.* *Foundation specification clarifies.*
>
> *[pause]*
>
> Practical takeaway. *Construct the involution T(θ, φ) = (θ + 180°, φ + 180°). Apply to each residue's canonical position. Verify polar-pair antipodality through the involution. Some residues (especially 9) require foundation-specified treatment.* **`[ORG-INPUT]`**"

## 5. Try it (4:30–5:30)
> "Pause. Apply T to (90°, 60°). Compute the result. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Marko on antipodes."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-632 (involution T defined; verification table for residues 1, 2, 4, 8, 7, 5; 3-6-9 axis flagged for foundation specification).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (tabular construction).
- **`[ORG-INPUT]`** — canonical antipodal-respecting Map embedding; treatment of 9-residue.
- Music cue: building/computational.
