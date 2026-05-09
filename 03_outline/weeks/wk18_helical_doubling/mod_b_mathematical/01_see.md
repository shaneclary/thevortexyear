Wk 18 — Theme: Helical Doubling on the Torus — Lens 1: See — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Helix parametrisation explicit. The closed-form mathematical description of the doubling helix.

## 1. Outcome
Student can write the helix's parametrisation using the (col, row) coordinates of the torus.

## 2. Hook (0:00–0:30)
*[The parametric formula displayed: helix(t) = (t, t mod 6) for t ∈ {0, 1, 2, …, 23}.]*

> "One formula. The whole helix. Six minutes."

## 3. Setup (0:30–1:00)
*[Carry-over: yesterday closed Mod-A with the spiral and Mod B pulsing.]*

> "Lens 1 of 9, Module B. The helix parametrised."

## 4. Body (1:00–4:30)

> "The helix you traced yesterday is one specific curve on the torus. Today we write its parametrisation — the formula that gives every point on the helix as a function of one parameter.
>
> *[pause]*
>
> *Discrete parametrisation.* The doubling helix as a sequence of cells:
>
> *helix(t) = (t mod 24, t mod 6)*
>
> for t ∈ {0, 1, 2, 3, …, 23}.
>
> Each value of t gives one cell. As t advances by 1, both col and row advance by 1 (mod their respective periods).
>
> *[pause]*
>
> *Compute a few values.*
>
> helix(0) = (0, 0).
>
> helix(1) = (1, 1).
>
> helix(5) = (5, 5).
>
> helix(6) = (6, 0). (Since 6 mod 6 = 0.)
>
> helix(11) = (11, 5).
>
> helix(12) = (12, 0).
>
> helix(23) = (23, 5).
>
> helix(24) = (24 mod 24, 24 mod 6) = (0, 0). *Closure.*
>
> *[pause]*
>
> *Continuous parametrisation.* If the torus is treated as a continuous surface (rather than just 144 cells), the helix can be parametrised continuously:
>
> *helix(s) = (s, s/4)*
>
> for s ∈ [0, 24] (or, after wrap, s ∈ [0, 24) with wrap closure).
>
> Where s is the arc-length parameter along the major axis, and s/4 is the corresponding minor-axis position. The factor 1/4 reflects that 4 minor turns happen per 1 major turn.
>
> Continuous closure: at s = 24, helix(s) = (24, 6) ≡ (0, 0). *Same closure point as discrete.*
>
> *[pause]*
>
> *Three-dimensional parametrisation.* For embedding in physical 3D space (so the helix has a literal location), use:
>
> *helix(s) = ((R + r cos(2πs/4)) cos(2πs/24), (R + r cos(2πs/4)) sin(2πs/24), r sin(2πs/4))*
>
> Where R is the major radius, r is the minor radius, and s is the parameter. The first two components describe position around the major circle; the third describes height above the torus's central plane.
>
> This is the standard *toroidal helix parametrisation* in 3D space.
>
> *[pause]*
>
> *Three observations on the parametrisations.*
>
> *Observation one — three levels.* Discrete (cells), continuous (surface), 3D-embedded (physical). Each is correct; each is useful for different purposes.
>
> *Discrete* for coil-position lookup. Cells have integer coordinates.
>
> *Continuous* for theoretical analysis. Smooth parameter, derivatives, integrals available.
>
> *3D-embedded* for physical realisation. Map to actual locations in space.
>
> *Observation two — the parametrisation captures everything.* The (p, q) winding numbers, the closure period, the arc length — all derivable from the parametrisation.
>
> *Observation three — the parametrisation generalises.* Replace 24 and 6 with other moduli to get helices on differently-dimensioned tori. Replace the 1/4 ratio with other values for different (p, q) winding numbers.
>
> *[pause]*
>
> Practical takeaway. *Memorise the discrete form: helix(t) = (t mod 24, t mod 6) for t ∈ {0, …, 23}.* This single formula generates the entire 24-cell helix on the (6, 24) torus.
>
> Pin the formula in your notebook. The continuous and 3D-embedded versions are derived when needed; the discrete form is the working tool."

## 5. Try it (4:30–5:30)
> "Pause. Compute helix(15). Sixty seconds. Answer: (15, 3)."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Count. Prove helix closes after 24 surface-steps."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-398 (parametrisation card with three levels: discrete, continuous, 3D).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (formula displayed).
- Music cue: structural, organised.
