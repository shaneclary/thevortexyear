Wk 20 — Theme: The 3-6-9 Axis (Orthogonal) — Lens 6: Apply — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Orthogonality applied to vector decomposition. Decomposing a 3D vector into surface and axis components.

## 1. Outcome
Student can decompose a 3D vector into components along the torus surface and along the orthogonal axis.

## 2. Hook (0:00–0:30)
*[A 3D vector arrow drawn through space, with two perpendicular shadows: one on the torus's plane, one along the z-axis.]*

> "One vector. Two components. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply orthogonality to vector decomposition."

## 4. Body (1:00–4:30)

> "Today we apply orthogonality to a useful task: decomposing 3D vectors into their *surface* and *axial* components.
>
> *[pause]*
>
> *Setup.* In 3D space, the torus lies in the xy-plane (roughly), and the 3-6-9 axis is the z-axis. Any 3D vector v = (v_x, v_y, v_z) decomposes uniquely into:
>
> *Surface component: v_surf = (v_x, v_y, 0).*
>
> *Axial component: v_axis = (0, 0, v_z).*
>
> *Sum:* v_surf + v_axis = (v_x, v_y, v_z) = v. ✓
>
> The components are orthogonal: v_surf · v_axis = 0.
>
> *[pause]*
>
> *Worked example 1.* Vector v = (3, 4, 5).
>
> Surface: v_surf = (3, 4, 0). Magnitude: √(9 + 16) = 5.
>
> Axial: v_axis = (0, 0, 5). Magnitude: 5.
>
> Total magnitude: |v| = √(9 + 16 + 25) = √50 ≈ 7.07. (Not 5 + 5; orthogonal addition uses Pythagoras.)
>
> *Verification.* |v|² = |v_surf|² + |v_axis|² = 25 + 25 = 50. |v| = √50. ✓
>
> *[pause]*
>
> *Worked example 2.* A magnetic field B at a point near a Rodin Coil. Suppose B = (0.5, 0.3, 0.8) in mT (milliTesla).
>
> Surface (transverse) component: B_surf = (0.5, 0.3, 0). Magnitude: √(0.25 + 0.09) = √0.34 ≈ 0.58 mT.
>
> Axial component: B_axis = (0, 0, 0.8). Magnitude: 0.8 mT.
>
> *Interpretation.* The axial component is *along the 3-6-9 axis* — the z-direction. The surface component is *in the torus's plane*.
>
> For a uniformly-wound toroidal coil, the *axial component* should ideally be small or zero (the field stays bound to the torus). *A measurable axial component* indicates either an axial-driven coil (Wk 30) or a non-uniform winding effect.
>
> *[pause]*
>
> *Why decomposition matters for Rodin Coil engineering.*
>
> *Reason 1 — measurement protocols.* Field measurements at multiple positions can be decomposed into surface and axial components. *Each component has different physical meaning.* The surface component is what the coil's loops directly produce; the axial component reveals deviations from the ideal toroidal pattern.
>
> *Reason 2 — design intent.* Counter-wound Rodin Coils aim for *specific* axial-component behaviour. Marko's claims about non-Hertzian fields involve specific patterns of surface-axial decomposition. *Designs target specific decompositions.*
>
> *Reason 3 — comparison with theory.* Standard EM theory predicts specific decompositions for given coil topologies. *Measured deviations* from these predictions are how Rodin Coil claims are evaluated. Q3 will use this directly.
>
> *[pause]*
>
> Three observations.
>
> *Observation one.* Vector decomposition is *standard mathematics*. No new techniques are introduced here. *VBM uses the standard decomposition with VBM-specific axes.*
>
> *Observation two.* The decomposition is *unique* for orthogonal axes. Given any 3D vector, there's exactly one way to split it into surface + axial components. *Uniqueness comes from orthogonality.*
>
> *Observation three.* The decomposition *generalises*. For multi-axial systems (4D, 5D, etc.), each orthogonal axis gets its own component. The Decoqubit (Wk 22) extends this to higher dimensions.
>
> *[pause]*
>
> Practical takeaway. *Use vector decomposition when measuring or analysing Rodin Coil fields.* Surface component vs axial component is the basic split. Measurement protocols in Q3 will rely on this decomposition.
>
> When you have your multi-meter or magnetic probe in Q3, *orient measurements along the axis or perpendicular to it*. The decomposition provides natural reference frames."

## 5. Try it (4:30–5:30)
> "Pause. Decompose v = (1, 1, 1) into surface and axial components. Sixty seconds. Answer: v_surf = (1, 1, 0), |v_surf| = √2; v_axis = (0, 0, 1), |v_axis| = 1."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. Orthogonal axis in S¹ × S¹ vs spherical surfaces."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-450 (vector with surface and axial components shown).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (3D vector with shadows).
- Music cue: working/applied.
