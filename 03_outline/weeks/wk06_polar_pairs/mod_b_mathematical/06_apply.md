Wk 06 — Theme: Polar Number Pairs — Lens 6: Apply — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Polar Pairs as fast modular-arithmetic shortcut. Specifically: when computing *a + b mod 9*, if *(a, b)* is a Polar Pair, the answer is 0 (= 9 on the Symbol). Useful for casting out nines and cryptographic hash applications.

## 1. Outcome
Student can apply Polar Pair recognition to speed up modular arithmetic checks.

## 2. Hook (0:00–0:30)
*[Equation: 47 + 52 mod 9 = ?. Reduce 47 → 2. Reduce 52 → 7. Pair (2,7). Answer: 9 ≡ 0.]*

> "Recognise the pair, skip the arithmetic. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply, mathematical lens. Polar Pairs as a computational shortcut."

## 4. Body (1:00–4:30)

> "When you need to compute *a + b mod 9*, you can skip explicit arithmetic by recognising whether *a* and *b* form a Polar Pair (in their digital roots).
>
> Procedure: reduce *a* to its digital root, reduce *b* to its digital root. If the two digital roots form a Polar Pair, the sum is 0 mod 9 (which we represent as 9 on the Symbol). Otherwise compute the sum directly.
>
> *[pause]*
>
> Example one. *47 + 52 mod 9*. Reduce 47: *4 + 7 = 11 → 2*. Reduce 52: *5 + 2 = 7*. Digital roots are (2, 7). That's a Polar Pair. Sum is 9.
>
> Verify directly: *47 + 52 = 99*. Reduce: *9 + 9 = 18 → 9*. Match.
>
> *[pause]*
>
> Example two. *143 + 821 mod 9*. Reduce 143: *1 + 4 + 3 = 8*. Reduce 821: *8 + 2 + 1 = 11 → 2*. Wait — 8 + 2 isn't a Polar Pair (it would be the pair if 9 − 8 = 1 was the partner; (8, 1) is the pair, not (8, 2)). So they don't form a Polar Pair. Direct sum: 8 + 2 = 10 → 1.
>
> Verify: *143 + 821 = 964*. Reduce: *9 + 6 + 4 = 19 → 10 → 1*. Match.
>
> *[pause]*
>
> Example three. *125 + 379 mod 9*. Reduce 125: *1 + 2 + 5 = 8*. Reduce 379: *3 + 7 + 9 = 19 → 10 → 1*. Pair (8, 1). Sum is 9.
>
> Verify: *125 + 379 = 504*. Reduce: *5 + 0 + 4 = 9*. Match.
>
> *[pause]*
>
> *Where this is useful.* Cryptography that uses checksum arithmetic — like the Luhn algorithm for credit cards or the ISBN checksum — relies on quick mod-9 or mod-11 computations. Recognising Polar Pairs in digital roots can speed up mental verification.
>
> Also useful for *combinatorial counting* — when you're enumerating modular sums, the Polar Pair structure tells you which sums collapse to 0.
>
> *[pause]*
>
> One generalisation. The same technique applies to other moduli. For mod 7, the Polar Pairs are *(1, 6), (2, 5), (3, 4)* — pairs summing to 7. For mod 11, pairs summing to 11. The digital-root analogue (in the relevant base) determines the pair structure. Mod 9's Polar Pairs are the canonical case because base 10 is the most common notation; analogous structures exist in any modulus."

## 5. Try it (4:30–5:30)
> "Pause. Compute three sums *a + b mod 9* using digital-root + Polar Pair recognition. Three examples in your notebook. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. Sum-to-9 vs. additive inverses across moduli."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-156 (three example computations).
- Animations: A-101 — pairs recognised, sums computed.
- Music cue: precise, clever.
