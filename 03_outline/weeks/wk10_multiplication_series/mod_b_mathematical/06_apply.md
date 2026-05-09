Wk 10 — Theme: The Nine Multiplication Series — Lens 6: Apply — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Cycle-length theorems for arbitrary n. Generalize the Lagrange-based reasoning.

## 1. Outcome
Student can apply cycle-length theorems to determine orbit lengths in `(ℤ/nℤ)*` for various n.

## 2. Hook (0:00–0:30)
*[Three theorems on screen.]*

> "Three theorems. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply cycle-length theorems."

## 4. Body (1:00–4:30)

> "Three theorems for working with multiplicative cycles in `(ℤ/nℤ)*`.
>
> *Theorem 1 — Lagrange's theorem.* The order of any element divides the order of the group. For *(ℤ/nℤ)*` with *|G| = φ(n)*, every element's order divides *φ(n)*.
>
> Application: bound the possible orders. For mod 9, *φ(9) = 6*; orders divide 6, so possible orders are {1, 2, 3, 6}.
>
> *Theorem 2 — Fermat-Euler theorem.* For any *a* coprime to *n*, *aᵠ⁽ⁿ⁾ ≡ 1 (mod n)*. Equivalently: every unit raised to the φ(n) power equals 1.
>
> Application: every multiplier's order divides *φ(n)*. Combined with Theorem 1 — order *exactly* divides *φ(n)*.
>
> *Theorem 3 — Cyclic group structure.* If `(ℤ/nℤ)*` is cyclic (which it is for *n = 1, 2, 4, p^k, 2p^k* where *p* is odd prime), then the count of elements of order *d* (where *d* divides *|G|*) equals Euler's totient *φ(d)*.
>
> Application: for *n = 9 = 3²*, the group is cyclic of order 6. Count elements of order 6: *φ(6) = 2*. Count of order 3: *φ(3) = 2*. Count of order 2: *φ(2) = 1*. Count of order 1: *φ(1) = 1*. Sum: 6. Matches.
>
> *[pause]*
>
> Working example. Compute orbit lengths in `(ℤ/15ℤ)*`.
>
> *|(ℤ/15ℤ)*| = φ(15) = φ(3) × φ(5) = 2 × 4 = 8.*
>
> Possible orders divide 8: {1, 2, 4, 8}.
>
> But `(ℤ/15ℤ)*` *is not cyclic* (because 15 = 3 × 5 has more than one prime factor). It's isomorphic to `(ℤ/2ℤ) × (ℤ/4ℤ)` — a product of two cyclic groups.
>
> So the orbit lengths in `(ℤ/15ℤ)*` are different from a cyclic group of order 8. The maximum element order is *lcm(2, 4) = 4*, not 8. No multiplier has order 8.
>
> *[pause]*
>
> Insight. *Cyclic groups give the cleanest orbit structures.* `(ℤ/9ℤ)*` is cyclic; `(ℤ/15ℤ)*` is not. The Symbol's structural cleanness depends on the multiplicative group being cyclic — which is part of why mod 9 is favourable.
>
> Bases whose modulus *b−1* is *p^k* or *2p^k* give cyclic multiplicative groups. *b = 10* (modulus 9 = 3²): cyclic, clean. *b = 12* (modulus 11 = prime): cyclic, clean. *b = 16* (modulus 15 = 3 × 5): not cyclic, structure messier."

## 5. Try it (4:30–5:30)
> "Pause. Compute *|(ℤ/11ℤ)*| = φ(11) = 10*. Maximum element order: 10. Cyclic group; no order higher than 10. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. Orbits in cyclic groups."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-223 (three theorems).
- Caption care: KaTeX φ, modular notation.
- Music cue: precise.
