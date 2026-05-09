Wk 10 — Theme: The Nine Multiplication Series — Lens 2: Count — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Determine cycle length for each multiplier formally. Apply Lagrange's theorem.

## 1. Outcome
Student has used Lagrange's theorem to determine cycle lengths for all multipliers.

## 2. Hook (0:00–0:30)
*[Lagrange theorem on screen.]*

> "Lagrange divides. Six minutes for all nine."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Cycle lengths via Lagrange."

## 4. Body (1:00–4:30)

> "Lagrange's theorem (group theory): for any element *g* in a finite group *G*, the order of *g* divides *|G|*.
>
> Apply to `(ℤ/9ℤ)*`. *|(ℤ/9ℤ)*| = 6* (the six units). So every unit has order dividing 6: that is, order 1, 2, 3, or 6.
>
> *[pause]*
>
> Determine each unit's order by computing powers until reaching 1.
>
> *Order of 1.* *1¹ = 1.* Order 1.
>
> *Order of 2.* *2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 7, 2⁵ = 5, 2⁶ = 1.* Smallest power giving 1: 6. Order 6.
>
> *Order of 4.* *4¹ = 4, 4² = 7, 4³ = 1.* Order 3.
>
> *Order of 5.* *5¹ = 5, 5² = 7, 5³ = 8, 5⁴ = 4, 5⁵ = 2, 5⁶ = 1.* Order 6.
>
> *Order of 7.* *7¹ = 7, 7² = 4, 7³ = 1.* Order 3.
>
> *Order of 8.* *8¹ = 8, 8² = 1.* Order 2.
>
> *[pause — show the order assignments]*
>
> Order summary:
>
> 1 element of order 1: {1}.
>
> 1 element of order 2: {8}.
>
> 2 elements of order 3: {4, 7}.
>
> 2 elements of order 6: {2, 5}.
>
> Total: 6 elements (matches *|G| = 6*).
>
> Order distribution: *1 + 1 + 2 + 2 = 6*. Confirmed.
>
> *[pause]*
>
> One observation. The number of elements of each order matches Euler's totient function applied to the order. *φ(1) = 1, φ(2) = 1, φ(3) = 2, φ(6) = 2.* Sum: 6. Match.
>
> This is a general theorem — in any cyclic group, the count of elements of order *d* (where *d* divides |G|) equals *φ(d)*. *(ℤ/9ℤ)*` is cyclic, so this counting works.
>
> *[pause]*
>
> The non-units {3, 6, 9} aren't in `(ℤ/9ℤ)*` so Lagrange doesn't apply to them. Their *additive* orders (in ℤ/9ℤ as an additive group) are: 3 has order 3 (3+3+3 = 9 ≡ 0); 6 has order 3; 9 has order 1. But these are additive, not multiplicative, orders."

## 5. Try it (4:30–5:30)
> "Pause. Verify by Lagrange that the elements of order 3 in `(ℤ/9ℤ)*` form a subgroup. *{1, 4, 7} closed under multiplication?* *4 × 7 = 28 ≡ 1, 4 × 4 = 7, 7 × 7 = 4.* Yes, closed. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build the cycle tables."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-221 (order distribution).
- Caption care: KaTeX modular notation, φ.
- Music cue: precise.
