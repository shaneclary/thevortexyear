Wk 29 — Theme: 3-6-9 Pulse Revisited (as Triggering Axis) — Lens 6: Apply — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Orthogonal-axis decomposition. Apply orthogonal decomposition to a vector / current / field, separating axial and toroidal components.

## 1. Outcome
Student can apply orthogonal-axis decomposition to a 3D vector or field, splitting it into axial and toroidal components.

## 2. Hook (0:00–0:30)
*[A 3D vector being decomposed: original arrow split into axial component (along z) and toroidal component (in major-circle plane); orthogonal projection visualised.]*

> "Orthogonal decomposition. Axial + toroidal. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply orthogonal-axis decomposition."

## 4. Body (1:00–4:30)

> "Lens 3 constructed cylindrical coordinates. Today: *apply orthogonal decomposition* to fields and currents — separating axial (along z) and toroidal (in major-circle plane) components.
>
> *[pause]*
>
> *What orthogonal decomposition is.*
>
> *Any 3D vector v can be written as a sum of three orthogonal components in cylindrical coordinates:*
>
> *v = v_θ θ̂ + v_ρ ρ̂ + v_z ẑ.*
>
> *Where θ̂ is the unit vector in the major-circle direction, ρ̂ is the radial unit vector, ẑ is the axial unit vector.*
>
> *Three components; mainstream cylindrical decomposition.*
>
> *[pause]*
>
> *Application to coil currents.*
>
> *Wound coil's current vector at any point of the coil*: predominantly *toroidal direction* (along the helix; combination of θ̂ and ρ̂).
>
> *Axial drive wire's current vector*: predominantly *axial direction* (along ẑ).
>
> *Decomposition result.*
>
> *Wound coil current: v_z ≈ 0; (v_θ, v_ρ) determined by helical winding.*
>
> *Axial drive current: v_θ = v_ρ = 0; v_z determined by drive specifications.*
>
> *The two currents are orthogonal*; *they can be analysed and engineered independently*.
>
> *[pause]*
>
> *Application to magnetic fields.*
>
> *Wound coil's magnetic field*: produced by toroidal currents; *predominantly inside the toroidal volume* in mainstream toroidal coil analysis. *Field components mostly toroidal (along major-circle direction inside the donut).*
>
> *Axial drive wire's magnetic field*: produced by axial current; *circles the axis*. *Field components in the (θ̂, ρ̂) plane; specifically: B(ρ) = μ₀I/(2πρ) in θ̂ direction.*
>
> *Decomposition result.*
>
> *Wound coil's field: predominantly toroidal direction (B_θ in major-circle direction at toroidal positions).*
>
> *Axial-drive's field: predominantly major-circle direction (B_θ at radial distances).*
>
> *Hmm — both fields have major-circle component.* *Cross-coupling possible*; *engineering analysis must consider mutual interaction.*
>
> *[pause]*
>
> *Three observations on the decomposition application.*
>
> *Observation one — orthogonal decomposition is mainstream.* *Standard cylindrical-coordinate analysis*; *every electromagnetic engineering problem in cylindrical geometry uses it.*
>
> *Observation two — current orthogonality enables independent specification.* *Wound coil current (toroidal) and axial drive current (axial) are orthogonal*; *can be specified, controlled, modulated independently*. *Engineering modularity.*
>
> *Observation three — field interactions can have non-trivial cross-coupling.* *Even though currents are orthogonal, the fields they produce may have overlapping components*. *Engineering analysis must consider mutual induction; not assume zero interaction.*
>
> *[pause]*
>
> *Three engineering questions answered by decomposition.*
>
> *Question 1 — does axial drive current induce voltage in the wound coil?*
>
> *Answer*. *Yes, by mutual inductance*. *Axial current produces magnetic flux through major-circle disks of the wound coil*; *changing axial current induces EMF in the wound coil per Faraday's law.*
>
> *Quantitative*: *EMF magnitude depends on axial-current rate of change and coil geometry*; *calculable from Biot-Savart + Faraday.*
>
> *Question 2 — does wound coil current induce voltage in axial drive wire?*
>
> *Answer*. *Yes, by mutual inductance (reciprocal)*. *Same coupling, opposite direction.* *Engineering symmetric.*
>
> *Question 3 — can axial drive frequency-modulate wound coil response?*
>
> *Answer*. *Yes, in principle*. *Time-varying axial current produces time-varying flux; wound coil sees modulated effective inductance or response*. *Engineering modulation possible.*
>
> *[pause]*
>
> *Three uses of the decomposition.*
>
> *Use 1 — independent design specification.* *Specify wound coil and axial drive independently*; *combine specifications into full coil rig.*
>
> *Use 2 — predicted measurement protocol.* *Decomposition predicts which measurements should show coupling*; *Q3 measurements verify.*
>
> *Use 3 — modulation engineering.* *Time-varying axial current produces specific time-varying coil response*; *engineering control surface available.*
>
> *[pause]*
>
> Practical takeaway. *Apply orthogonal-axis decomposition to currents and fields*: *axial along ẑ; toroidal in (θ̂, ρ̂) plane*. *Currents orthogonal; engineering modular*. *Fields cross-couple via mutual inductance; modulation possible*. *Mainstream cylindrical electromagnetic analysis applied to VBM-tradition specific coil pattern.*"

## 5. Try it (4:30–5:30)
> "Pause. Decompose: an arrow pointing 45° between vertical and horizontal. State its axial and toroidal components. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. Orthogonal axis in S¹ × S¹ vs S²."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-655 (orthogonal decomposition; axial vs toroidal components; mutual-inductance coupling).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (decomposition).
- Music cue: applied/computational.
