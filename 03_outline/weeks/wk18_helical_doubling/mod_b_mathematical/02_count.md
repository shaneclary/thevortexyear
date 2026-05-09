Wk 18 — Theme: Helical Doubling on the Torus — Lens 2: Count — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Prove helix closes after 24 surface-steps. The closure proof using LCM and modular arithmetic.

## 1. Outcome
Student can prove that the doubling helix closes after exactly 24 surface-steps and not sooner.

## 2. Hook (0:00–0:30)
*[A 24-step path traced on the torus, returning exactly to its starting cell after step 24.]*

> "Twenty-four steps. Not 23, not 25. Six minutes proving it."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Prove the closure period."

## 4. Body (1:00–4:30)

> "Today's count is a small proof. The doubling helix closes after exactly 24 surface-steps; the closure period is *forced* by the mathematics.
>
> *[pause]*
>
> *State the claim.* For helix(t) = (t mod 24, t mod 6), the smallest positive t such that helix(t) = helix(0) is t = 24. *The helix is *primitive* of period 24.*
>
> *[pause]*
>
> *Set up.*
>
> Helix(0) = (0, 0). For some t > 0, helix(t) = (t mod 24, t mod 6) = (0, 0). This requires:
>
> *t ≡ 0 (mod 24)* AND *t ≡ 0 (mod 6)*.
>
> The smallest positive t satisfying *both* conditions is the *least common multiple of 24 and 6*: LCM(24, 6).
>
> Compute: LCM(24, 6) = 24 (because 24 is itself a multiple of 6).
>
> So the smallest positive t with helix(t) = (0, 0) is t = 24.
>
> *Therefore the helix closes after exactly 24 steps.* ✓
>
> *[pause]*
>
> *Why not sooner?*
>
> Suppose the helix closed at some t < 24. Then t mod 24 = 0 (so t is a multiple of 24) and 0 < t < 24. *No positive multiple of 24 is less than 24.* Contradiction. So the closure can't happen at t < 24.
>
> *[pause]*
>
> *Why not later?*
>
> At t = 24, both coordinates wrap simultaneously: 24 mod 24 = 0 and 24 mod 6 = 0. The helix returns to (0, 0). Any later closure (at t = 48, 72, …) is just *additional copies* of the same helix.
>
> The first closure is at t = 24. Subsequent closures are at multiples of 24. *24 is the fundamental period.*
>
> *[pause]*
>
> *Generalisation.*
>
> For any toroidal helix of form helix(t) = (t mod a, (t/q) mod b) on a torus of dimensions (a, b):
>
> The closure period is LCM(a, b · q).
>
> For a = 24, b = 6, q = 4 (the doubling helix's parameters): LCM(24, 6 × 4) = LCM(24, 24) = 24. ✓
>
> *[pause]*
>
> Wait — let me double-check the formula. The doubling helix has *q = 4* minor turns per major turn (or equivalently, q = 1 major turn per 4 minor turns; this can be confusing). Let me reconsider.
>
> Per single column-step (Δt = 1): col advances 1, row advances 1.
>
> col closes after 24 steps (since col mod 24).
>
> row closes after 6 steps (since row mod 6).
>
> Joint closure: LCM(24, 6) = 24.
>
> Yes — closure at t = 24. The minor advances 1 per step, so over 24 steps the minor advances 24 = 6 × 4 = 4 full minor turns. *4 minor turns per 1 major turn*; this matches the (p, q) = (1, 4) winding numbers from Mod A.
>
> *[pause]*
>
> *Three observations.*
>
> *Observation one — the closure period is determined by the LCM of the axis periods.* On a (a, b) torus with helix slope dr/dc, closure period = LCM(a, b) divided by the gcd of relevant factors. For our case, both periods are 6 and 24, and LCM gives 24.
>
> *Observation two — different slopes produce different closures.* If the helix had slope 2 (two row-steps per column-step), it would close at LCM(24, 3) = 24 (because 3 = 6/2). Same number, but a different geometric pattern. Slopes that don't divide cleanly produce longer closure periods.
>
> *Observation three — closure is well-defined for integer slopes.* Non-integer slopes (e.g., 1.5 row-steps per column-step) don't produce closed paths on the discrete cells. *Slopes must be rational with manageable denominators* for a discrete closed helix to exist.
>
> *[pause]*
>
> Practical takeaway. *24 = LCM(24, 6). The helix closes at 24 because both axes complete exactly at that step.* Memorise this; it explains why the canonical Rodin Coil has 24 angular positions per traversal."

## 5. Try it (4:30–5:30)
> "Pause. Verify closure: compute helix(24) and confirm it equals helix(0). Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. Compute helix winding numbers from generators."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-399 (closure proof worked).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (24-step path).
- Music cue: focused, quiet.
