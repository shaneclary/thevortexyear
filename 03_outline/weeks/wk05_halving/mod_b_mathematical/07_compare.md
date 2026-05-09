Wk 05 — Theme: The Halving Circuit — Lens 7: Compare — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
The 2-and-5 pair specifically. Show that this inverse pair is unique to mod-9 arithmetic — in mod-7, the inverse of 2 is 4; in mod-11, it's 6. The 2-5 pair is base-10-specific.

## 1. Outcome
Student can identify the multiplicative inverse of 2 in three different moduli.

## 2. Hook (0:00–0:30)
*[On screen: three columns. Mod 7: 2 and 4. Mod 9: 2 and 5. Mod 11: 2 and 6.]*

> "The inverse of 2 changes with the modulus. Today: which modulus produces which inverse."

## 3. Setup (0:30–1:00)
> "Lens 7 of 9. The pair, varied. Six minutes."

## 4. Body (1:00–4:30)

> "We've established that 5 is the inverse of 2 in `(ℤ/9ℤ)*`. The proof: *2 × 5 = 10 ≡ 1 (mod 9)*. Specific to mod 9.
>
> What's the inverse of 2 in other moduli?
>
> *Mod 5.* Solve *2 × x ≡ 1 (mod 5)*. Try: *2 × 3 = 6 ≡ 1 (mod 5)*. Inverse is 3.
>
> *Mod 7.* Solve *2 × x ≡ 1 (mod 7)*. Try: *2 × 4 = 8 ≡ 1 (mod 7)*. Inverse is 4.
>
> *Mod 9.* Inverse is 5. (Our case.)
>
> *Mod 11.* Solve *2 × x ≡ 1 (mod 11)*. Try: *2 × 6 = 12 ≡ 1 (mod 11)*. Inverse is 6.
>
> *Mod 13.* *2 × 7 = 14 ≡ 1 (mod 13)*. Inverse is 7.
>
> *Mod 15.* *2 × 8 = 16 ≡ 1 (mod 15)*. Inverse is 8.
>
> *[pause]*
>
> Pattern. In mod-(odd-number) *m*, the inverse of 2 is *(m + 1) / 2*. For mod 9, that's 5. For mod 11, that's 6. For mod 7, that's 4. The formula falls out of the algebra: *2 × (m+1)/2 = m + 1 ≡ 1 (mod m)*.
>
> Mod-9 picks 5 specifically *because the modulus is 9*. Change the modulus and you change the inverse.
>
> *[pause]*
>
> What's specific to mod-9. The inverse is 5 — a digit on the Symbol. It's also the *only* generator pair for `(ℤ/9ℤ)*` (along with 2). Mod 11 has more generators (multiple pairs), so the analogous structure is messier. Mod 7 and mod 5 are smaller cyclic groups with fewer interesting subgroups.
>
> Mod 9 sits in a sweet spot: small enough to visualise, large enough to have non-trivial substructure (the 3-6 oscillation, the {1, 4, 7} subgroup), with a clean two-generator structure (2 and 5). That structural cleanness is part of what Marko points at when he claims base 10 is privileged."

## 5. Try it (4:30–5:30)
> "Pause. Compute the inverse of 2 in mod 17. Use the formula. Verify. Sixty seconds."

*[Pause card.]*

> "Welcome back. *(17+1)/2 = 9*. Verify: *2 × 9 = 18 ≡ 1 (mod 17)*. Match."

## 6. Bridge (5:30–6:00)
> "Next: Defend. The two-line proof and its consequences."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-141 (table of moduli and 2's inverses).
- Animations: A-89 — pattern formula reveals.
- Music cue: comparative.
