Wk 18 — Theme: Helical Doubling on the Torus — Lens 3: Build — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Compute helix winding numbers from generators. The (p, q) winding numbers as the homology class of the helix.

## 1. Outcome
Student can compute the (p, q) winding numbers of a torus helix from its slope and verify the values for the doubling helix.

## 2. Hook (0:00–0:30)
*[A homology-class diagram on a torus showing the (1, 4) winding numbers for the doubling helix.]*

> "One major. Four minor. From the slope. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 3 of 9. Compute winding numbers from generators."

## 4. Body (1:00–4:30)

> "Today's build derives the doubling helix's *winding numbers* from the helix's parametrisation. Open your notebook.
>
> *[pause]*
>
> *State.* For a closed curve on a torus T² = S¹ × S¹, the winding numbers (p, q) are integers describing how many times the curve winds around the major circle (p) and the minor circle (q) before closing.
>
> The winding numbers are *topological invariants* — they don't depend on how the curve is drawn, only on its *homotopy class* in the torus.
>
> *[pause]*
>
> *Compute (p, q) for the doubling helix.*
>
> *Step 1 — parametrise.* helix(t) = (t mod 24, t mod 6) for t ∈ {0, …, 23}. Continuous version: helix(s) = (s, s/4) for s ∈ [0, 24].
>
> *Step 2 — compute p (major winding).* As t advances from 0 to 24, the col coordinate advances from 0 to 24 mod 24 = 0. *Net change: 24, which is 1 full major-circle period.*
>
> *p = 1.*
>
> *Step 3 — compute q (minor winding).* As t advances from 0 to 24, the row coordinate advances from 0 to 24 mod 6 = 0. *Net change: 24, which is 4 full minor-circle periods (since the minor period is 6 and 24 = 4 × 6).*
>
> *q = 4.*
>
> *Step 4 — record.* (p, q) = (1, 4).
>
> *[pause]*
>
> *Verification by alternative route.*
>
> *Slope calculation.* The helix advances 1 row per 1 column. So over 24 column-steps it advances 24 row-steps. Major rotations: 24 / 24 = 1. Minor rotations: 24 / 6 = 4. *Same answer.*
>
> *[pause]*
>
> *Generalise.*
>
> For any toroidal helix with parametrisation (s, ks) on a (24, 6) torus:
>
> p = (closure period) / 24.
>
> q = k × (closure period) / 6.
>
> For k = 1, closure period = LCM(24, 6) = 24, so p = 1, q = 4. ✓
>
> For k = 2, closure period = LCM(24, 3) = 24, so p = 1, q = 2 × 24 / 6 = 8. *Different helix, different winding numbers.*
>
> *Note: a slope of k = 2 isn't the doubling helix; it would be a different cycle. The doubling helix specifically has slope 1.*
>
> *[pause]*
>
> *Why this matters.*
>
> *Why-thing one — coil engineering.* The (p, q) winding numbers determine *how a wire on the torus crosses the surface*. p = 1 means one full traversal around the major axis; q = 4 means the wire completes 4 minor circuits per traversal.
>
> *Why-thing two — magnetic field structure.* The winding numbers shape the magnetic field pattern when the coil is energised. *(1, 4) helices produce specific field configurations* that researchers have characterised.
>
> *Why-thing three — comparison with other helices.* Different (p, q) values give different coils with different properties. The doubling helix is *one specific point* in a family of toroidal helices.
>
> *[pause]*
>
> *Three observations.*
>
> *Observation one.* The winding numbers are *coprime* (gcd(1, 4) = 1). This means the helix is a *simple* closed curve — it doesn't self-intersect on the torus. *Coprime winding numbers correspond to simple curves.*
>
> *Observation two.* The winding numbers are *integers*. They're not approximations or geometric measurements; they're discrete counts. *Topology gives integer answers.*
>
> *Observation three.* The (1, 4) helix is the *minimum-complexity* simple helix on this torus that traverses both axes. *Lower complexity (e.g., (1, 0)) wouldn't traverse the minor axis at all*; the doubling helix is the simplest helix that engages both directions of the torus.
>
> *[pause]*
>
> Practical takeaway. *Memorise the recipe: p = column-change / 24, q = row-change / 6.* For the doubling helix: (1, 4). The numbers are forced; they aren't engineering choices."

## 5. Try it (4:30–5:30)
> "Pause. Verify (p, q) = (1, 4) by counting rotations on your traced torus. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Hear. Marko on the period-6 closure."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-400 (winding number derivation).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (homology class diagram).
- Music cue: focused, quiet.
