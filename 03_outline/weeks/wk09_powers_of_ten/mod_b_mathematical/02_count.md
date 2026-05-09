Wk 09 — Theme: Powers of Ten & Scale Invariance — Lens 2: Count — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Prove *10ᵏ ≡ 1 (mod 9)* by induction.

## 1. Outcome
Student has the formal proof of *10ᵏ ≡ 1 (mod 9)*.

## 2. Hook (0:00–0:30)
*[The proof on screen.]*

> "Two cases. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. The induction proof."

## 4. Body (1:00–4:30)

> "We want to prove: for every non-negative integer *k*, *10ᵏ ≡ 1 (mod 9)*.
>
> *Proof by induction on k.*
>
> *Base case (k = 0).* *10⁰ = 1 ≡ 1 (mod 9)*. Trivially true.
>
> *Inductive step.* Assume *10ᵏ ≡ 1 (mod 9)*. Show *10ᵏ⁺¹ ≡ 1 (mod 9)*.
>
> *10ᵏ⁺¹ = 10ᵏ × 10*.
>
> By the inductive hypothesis, *10ᵏ ≡ 1 (mod 9)*.
>
> Also *10 ≡ 1 (mod 9)* (since *10 = 9 + 1*).
>
> So *10ᵏ⁺¹ = 10ᵏ × 10 ≡ 1 × 1 = 1 (mod 9)*.
>
> Inductive step complete. By induction, *10ᵏ ≡ 1 (mod 9)* for all *k ≥ 0*.
>
> Done.
>
> *[pause]*
>
> Three steps. The base case (*k=0*), the inductive step (*assume* and *show*), the conclusion. Standard mathematical induction.
>
> *[pause]*
>
> The hinge of the proof. *10 ≡ 1 (mod 9)*. This single congruence forces all the higher congruences. If 10 weren't congruent to 1 mod 9, the induction wouldn't go through.
>
> Why is *10 ≡ 1 (mod 9)*? Because *10 - 1 = 9* is divisible by 9. By the definition of modular congruence, *a ≡ b (mod n)* iff *a - b* is divisible by *n*. So *10 ≡ 1 (mod 9)*.
>
> *[pause]*
>
> Generalisation. The same induction works for any *base b* and modulus *b - 1*. For base 10, modulus is 9. For base 12, modulus is 11. For base 16 (hexadecimal), modulus is 15. For binary (base 2), modulus is 1 — which makes the congruence trivially true (everything is congruent mod 1).
>
> So scale invariance under digital-root reduction is *general for any positional notation*. Each base has its own version, all proven by the same induction.
>
> *[pause]*
>
> What's specific to base 10. The modulus 9 has rich composite structure (9 = 3²). The orbit of 2 in `(ℤ/9ℤ)*` has length 6 — the Doubling Circuit. The other base-modulus pairs give different orbit structures.
>
> *Scale invariance is general. The Doubling Circuit's specific structure is base-10's version.*"

## 5. Try it (4:30–5:30)
> "Pause. Write the three-step proof in your notebook. Verify the inductive step uses *10 ≡ 1 (mod 9)*. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build the column-constant grid."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-203 (induction proof).
- Caption care: KaTeX modular notation.
- Music cue: precise.
