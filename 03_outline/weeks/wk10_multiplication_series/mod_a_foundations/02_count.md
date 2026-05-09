Wk 10 — Theme: The Nine Multiplication Series — Lens 2: Count — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Compute the multiplication tables for ×1 through ×9 on (ℤ/9ℤ)*. Categorize by cycle length.

## 1. Outcome
Student has computed the cycle lengths for all nine multiplication series.

## 2. Hook (0:00–0:30)
*[Table: nine multipliers and their cycle lengths.]*

> "Nine multipliers. Five different cycle lengths. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Compute the cycle lengths."

## 4. Body (1:00–4:30)

> "For each multiplier *n* from 1 to 9, find the smallest *k* such that *nᵏ ≡ 1 (mod 9)*. This is the *order of n in (ℤ/9ℤ)*.* The order is the cycle length.
>
> *n = 1.* *1¹ = 1.* Order: 1.
>
> *n = 2.* *2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 7, 2⁵ = 5, 2⁶ = 1.* Order: 6.
>
> *n = 3.* *3¹ = 3, 3² = 9 (≡ 0), 3³ = 27 ≡ 0.* Order: undefined (3 isn't a unit; not in `(ℤ/9ℤ)*`).
>
> *n = 4.* *4¹ = 4, 4² = 16 ≡ 7, 4³ = 64 ≡ 1.* Order: 3.
>
> *n = 5.* *5¹ = 5, 5² = 25 ≡ 7, 5³ = 8, 5⁴ = 4, 5⁵ = 2, 5⁶ = 1.* Order: 6.
>
> *n = 6.* Not a unit (gcd(6, 9) = 3); not in `(ℤ/9ℤ)*`.
>
> *n = 7.* *7¹ = 7, 7² = 49 ≡ 4, 7³ = 1.* Order: 3.
>
> *n = 8.* *8¹ = 8, 8² = 64 ≡ 1.* Order: 2.
>
> *n = 9.* Not a unit; not in `(ℤ/9ℤ)*`.
>
> *[pause]*
>
> Six units in `(ℤ/9ℤ)*`: {1, 2, 4, 5, 7, 8}. Their orders:
>
> *Order 1 (identity):* 1.
>
> *Order 2:* 8. (Self-inverse.)
>
> *Order 3:* 4 and 7. (Generate the subgroup {1, 4, 7}.)
>
> *Order 6 (generators):* 2 and 5. (Generate the full group.)
>
> Three units of order 3, two of order 6. Confirms what we proved in Wk 4 Mod-B Lesson 3.
>
> *[pause]*
>
> The non-units {3, 6, 9} aren't in the multiplicative group. They have *orbits under multiplication*, but those orbits collapse because the elements aren't invertible:
>
> *3 → 9 (after one multiplication by 3).*
>
> *6 → 9 (after one multiplication by 6).*
>
> *9 → 9 (fixed).*
>
> The non-units' orbits under powering all collapse to 9.
>
> *[pause]*
>
> Summary of all nine series.
>
> Order 1: {1}.
>
> Order 2: {8}. Cycles: {1, 8}.
>
> Order 3: {4}, {7}. Cycles: {1, 4, 7} (same subgroup, different traversal direction).
>
> Order 6: {2}, {5}. Cycles: full units (Doubling Circuit and Halving Circuit).
>
> Collapse: {3, 6, 9}. Reach 9 in one or two steps."

## 5. Try it (4:30–5:30)
> "Pause. Verify the order of 4: compute *4¹, 4², 4³* mod 9. Smallest power giving 1 is the order. Sixty seconds."

*[Pause card.]*

> "Welcome back. *4¹ = 4, 4² = 7, 4³ = 1.* Order: 3."

## 6. Bridge (5:30–6:00)
> "Next: Build. Draw all nine polygons."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-215 (nine-multiplier order table).
- Music cue: precise.
