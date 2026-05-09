Wk 20 — Theme: The 3-6-9 Axis (Orthogonal) — Lens 2: Count — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Verify {3, 6, 9} cannot appear on the surface grid. The structural reason family 3 is missing.

## 1. Outcome
Student can verify by direct computation that 2ⁿ mod 9 never produces 3, 6, or 9.

## 2. Hook (0:00–0:30)
*[The doubling cycle 1, 2, 4, 8, 7, 5 with a checklist showing 3, 6, 9 absent.]*

> "Why isn't 3 there? Compute and see. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Verify family 3 cannot appear on the surface."

## 4. Body (1:00–4:30)

> "Today we verify by direct computation that family 3 ({3, 6, 9}) is structurally excluded from the doubling-cycle surface.
>
> *[pause]*
>
> *Setup.* Surface cells hold values 2ⁿ mod 9 for various n. To show {3, 6, 9} is absent from the surface, we need to show: *for no n is 2ⁿ ≡ 3, 6, or 9 mod 9*.
>
> *[pause]*
>
> *Method 1 — direct enumeration.* List 2ⁿ mod 9 for n = 0, 1, 2, …, 11.
>
> n = 0: 2⁰ = 1.
>
> n = 1: 2¹ = 2.
>
> n = 2: 2² = 4.
>
> n = 3: 2³ = 8.
>
> n = 4: 2⁴ = 16 mod 9 = 7.
>
> n = 5: 2⁵ = 32 mod 9 = 5.
>
> n = 6: 2⁶ = 64 mod 9 = 1.
>
> n = 7: 2⁷ = 128 mod 9 = 2.
>
> ... (cycle repeats with period 6.)
>
> *Distinct values produced: {1, 2, 4, 5, 7, 8}. Six values.*
>
> *Values not produced: {0, 3, 6}.* (Note: 9 ≡ 0 mod 9, so '9' as a digit-root is the same as 0 in mod-9 arithmetic.)
>
> *Family 3 = {3, 6, 9} = {3, 6, 0} ⊂ {0, 3, 6}.*
>
> *Conclusion.* For no integer n does 2ⁿ mod 9 lie in {3, 6, 9}. Family 3 is structurally absent from the doubling-cycle surface. ✓
>
> *[pause]*
>
> *Method 2 — group-theoretic argument.*
>
> The orbit of 2 under multiplication in (ℤ/9ℤ)* is {1, 2, 4, 5, 7, 8} — the *units* of ℤ/9ℤ.
>
> *Family 3 elements are non-units.* gcd(3, 9) = 3 ≠ 1; gcd(6, 9) = 3 ≠ 1; gcd(9, 9) = 9 ≠ 1.
>
> *Multiplication preserves the unit/non-unit distinction.* If you multiply a unit by another element of (ℤ/9ℤ)*, you get a unit. You cannot reach a non-unit by multiplying units.
>
> Since 2 is a unit, 2ⁿ is a unit for all n. *Therefore 2ⁿ never reaches a non-unit.* Family 3 is unreachable.
>
> ✓
>
> *Method 2 is the cleaner argument*; method 1 is the direct check. Both confirm the same fact.
>
> *[pause]*
>
> *What this means structurally.*
>
> *(ℤ/9ℤ)* — the multiplicative group of units — is a *subgroup* of ℤ/9ℤ.
>
> *ℤ/9ℤ* itself is the *additive* group. It includes both units and non-units.
>
> The doubling cycle and its associated surface structure live in (ℤ/9ℤ)*. Family 3 lives in ℤ/9ℤ but *outside* (ℤ/9ℤ)*.
>
> *Geometrically*, the surface displays (ℤ/9ℤ)*. The orthogonal axis displays the *complement* — the non-unit elements.
>
> *[pause]*
>
> *Family 3's structure on the orthogonal axis.*
>
> Family 3 = {3, 6, 9} forms a subgroup of ℤ/9ℤ — the *kernel* of the map (ℤ/9ℤ) → (ℤ/3ℤ) (which sends 0, 3, 6 to 0, and 1, 2, 4, 5, 7, 8 to non-zero residues).
>
> Equivalently: family 3 is *3ℤ/9ℤ*, the multiples of 3 mod 9.
>
> *Subgroup structure.* The three elements form a cyclic group of order 3 under addition. 3 + 3 = 6; 6 + 3 = 9 ≡ 0; 9 + 3 = 12 ≡ 3. Cycle of length 3.
>
> *On the axis.* 9 is the identity (additive zero). 3 and 6 are the non-zero elements; they're each other's additive inverses (3 + 6 = 9 ≡ 0).
>
> *Geometrically.* 9 at the centre (the *origin* of the axis). 3 and 6 at the two ends (positive and negative directions).
>
> *[pause]*
>
> Practical takeaway. *Memorise: surface holds units; axis holds non-units.* The two structures are *complementary*; together they account for all of ℤ/9ℤ.
>
> Mnemonic. *Surface = (ℤ/9ℤ)*. Axis = 3ℤ/9ℤ.* Together: ℤ/9ℤ."

## 5. Try it (4:30–5:30)
> "Pause. Compute 2¹⁰ mod 9. Verify it's not in {3, 6, 9}. Sixty seconds. Answer: 2¹⁰ mod 9 = 7. ✓"

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. Drill a hole through your paper torus; thread a stick."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-439 (doubling cycle list with family-3 absence circled; subgroup decomposition).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (cycle with absent family).
- Music cue: counting motif.
