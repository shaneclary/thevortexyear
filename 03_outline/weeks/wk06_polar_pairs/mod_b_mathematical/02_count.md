Wk 06 — Theme: Polar Number Pairs — Lens 2: Count — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Algebraic proof that *(k, 9−k)* for *k* in {1, 2, 4} gives the three Polar Pairs, and that these are exactly the additive-inverse pairs in `(ℤ/9ℤ)*`.

## 1. Outcome
Student has the algebraic derivation of the Polar Pairs as additive inverses in `(ℤ/9ℤ)*`.

## 2. Hook (0:00–0:30)
*[Equation: k + (9 − k) ≡ 0 (mod 9), for k ∈ {1, 2, 4}.]*

> "Three values of k. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. The proof. Six minutes."

## 4. Body (1:00–4:30)

> "We want to characterise the Polar Pairs algebraically. Definition: a Polar Pair is a pair *(a, b)* of distinct elements of `(ℤ/9ℤ)*` such that *a + b ≡ 0 (mod 9)*.
>
> Equivalently: *b ≡ −a (mod 9)*, that is, *b* is the additive inverse of *a* in `ℤ/9ℤ`.
>
> *[pause]*
>
> Find all such pairs. The elements of `(ℤ/9ℤ)*` are {1, 2, 4, 5, 7, 8}. For each *a*, compute the additive inverse *9 − a* and check whether it's also in `(ℤ/9ℤ)*`.
>
> *a = 1*: *9 − 1 = 8*. Is 8 in `(ℤ/9ℤ)*`? Yes. Pair: (1, 8).
>
> *a = 2*: *9 − 2 = 7*. Is 7 in `(ℤ/9ℤ)*`? Yes. Pair: (2, 7).
>
> *a = 4*: *9 − 4 = 5*. Is 5 in `(ℤ/9ℤ)*`? Yes. Pair: (4, 5).
>
> *a = 5*: *9 − 5 = 4*. Pair (5, 4) — same as (4, 5), already counted.
>
> *a = 7*: *9 − 7 = 2*. Pair (7, 2) — same as (2, 7).
>
> *a = 8*: *9 − 8 = 1*. Pair (8, 1) — same as (1, 8).
>
> Three distinct pairs: *(1, 8), (2, 7), (4, 5)*. Confirmed.
>
> *[pause]*
>
> What about *a* = 3, 6, 9? They aren't in `(ℤ/9ℤ)*` (they share factors with 9). So they don't form polar pairs in the strict sense.
>
> What about *a* = 0? In the standard representation 0 = 9, so we'd ask: is 9 = 0 + 0? In `ℤ/9ℤ`, *0 + 0 = 0*. So 9 (= 0) is its own additive inverse, forming a self-pair *(9, 9)*. Some authors include this; others don't. We omit it from the *Polar Pairs* terminology, treating Polar Pairs as the three *non-trivial* pairs from `(ℤ/9ℤ)*`.
>
> *[pause]*
>
> One observation. The Polar Pairs *partition* the six-element multiplicative group into three two-element subsets. Each subset is an additive-inverse pair. The partition is unique — the only way to partition `(ℤ/9ℤ)*` into pairs of additive inverses.
>
> *[pause]*
>
> Why does this matter? The partition into pairs is forced by the algebra. Once you've chosen base 10 (which determines the modulus 9), and once you've considered the units (which excludes {0, 3, 6}), the partition into additive-inverse pairs is determined. The Polar Pairs aren't a *design choice*; they're a *derived structure* of the underlying algebra."

## 5. Try it (4:30–5:30)
> "Pause. Compute additive inverses for the units of `(ℤ/7ℤ)*` (which is {1, 2, 3, 4, 5, 6}). Pair (1, 6), (2, 5), (3, 4) — three pairs summing to 7. Same structure, different modulus. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. Construct the pair-table from the doubling circuit."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-154 (the algebraic derivation).
- Animations: A-98 — additive inverses pair off.
- Caption care: KaTeX modular notation.
- Music cue: precise.
