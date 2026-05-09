Wk 09 — Theme: Powers of Ten & Scale Invariance — Lens 6: Apply — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Why doubling worksheets and other VBM exercises are scale-free in practice.

## 1. Outcome
Student can articulate why VBM operations work the same regardless of input scale.

## 2. Hook (0:00–0:30)
*[Doubling cycle 1, 2, 4, 8, 7, 5 vs. 10, 20, 40, 80, 70, 50 — same cycle.]*

> "Tiny numbers. Huge numbers. Same cycle. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply."

## 4. Body (1:00–4:30)

> "When you compute a Doubling Circuit on the integers 1 through 6, you trace the cycle 1, 2, 4, 8, 7, 5. Standard.
>
> Now scale up. Try the cycle starting at 10:
>
> *10, 20, 40, 80, 160, 320, ...*
>
> Reduce each:
>
> *10 → 1, 20 → 2, 40 → 4, 80 → 8, 160 → 7, 320 → 5.*
>
> Same cycle! 1, 2, 4, 8, 7, 5. Just scaled by 10.
>
> *[pause]*
>
> Now scale up by 100:
>
> *100, 200, 400, 800, 1600, 3200, ...*
>
> Reduce: 1, 2, 4, 8, 7, 5. Same cycle.
>
> Scale up by 1,000,000: same cycle.
>
> *[pause]*
>
> Why? Because doubling-and-reducing is *commutative* with multiplication-by-10ᵏ. Multiplying any number by 10ᵏ doesn't change its digital root. So whether you start the doubling cycle at 1 or at 10ᵏ, the cycle visits the same digital roots in the same order.
>
> *[pause]*
>
> Practical consequences for builders.
>
> *Build at any scale.* A small Rodin Coil with 24-mm minor diameter and a large Rodin Coil with 240-mm minor diameter both follow the same cycle structure. The geometry is similar; the math is identical. Builders can choose form factors based on convenience or budget without affecting the underlying structure.
>
> *Worksheets work at any scale.* Whether your numbers are in nanoseconds, hours, or years, the digital-root operation gives consistent results. The same arithmetic shortcuts apply across all scales.
>
> *Cross-scale comparisons.* You can compare a 60 Hz drive frequency's digital root (root 6) to a 60 GHz drive frequency's digital root (also root 6, since the GHz is just 60 × 10⁹). The digital roots match.
>
> *[pause]*
>
> One observation. Most engineering scales chosen by humans are *decimal* — millimetres, kilometres, kilograms, milliseconds. The metric system is built on decimal scaling. So scale invariance under digital-root reduction is *natural* for any quantities expressed in metric units.
>
> If you used non-decimal units (e.g., feet, inches, seconds-and-minutes-and-hours), the scale invariance would be more complicated to apply because the unit-scaling factors aren't powers of 10. Decimal/metric units make the scale-freeness clean."

## 5. Try it (4:30–5:30)
> "Pause. Compute the digital root of *60 × 10⁶* (60 million). Compare to the digital root of 60. Sixty seconds."

*[Pause card.]*

> "Welcome back. Both are 6."

## 6. Bridge (5:30–6:00)
> "Next: Compare. Scale invariance vs. fractals."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-199 (cycle at three scales).
- Music cue: applied.
