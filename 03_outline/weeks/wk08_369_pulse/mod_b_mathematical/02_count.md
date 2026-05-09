Wk 08 — Theme: The 3-6-9 Pulse — Lens 2: Count — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Prove the orbit lengths formally. Order of 2 acting on each non-unit element.

## 1. Outcome
Student has proven that the orbit of 9 has length 1 and the orbit of 3 (or 6) has length 2 under doubling.

## 2. Hook (0:00–0:30)
*[Two short proofs.]*

> "Two orbits. Two proofs. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. The proofs."

## 4. Body (1:00–4:30)

> "Two claims to prove.
>
> *Claim 1: Orbit of 9 under doubling has length 1.*
>
> Proof: *2 × 9 = 18*. Reduce: *18 mod 9 = 0*, which we represent as 9. So *doubling sends 9 to 9*. The orbit visits only one element: {9}. Length 1.
>
> *Claim 2: Orbit of 3 under doubling has length 2.*
>
> Proof: Compute the orbit. *2 × 3 = 6*. *2 × 6 = 12 ≡ 3*. So *3 → 6 → 3*. The orbit visits {3, 6} and returns to 3 after two steps. Length 2.
>
> Equivalently: the smallest *k* with *2ᵏ × 3 ≡ 3 (mod 9)* is *k = 2*. So 2 has *order 2* when acting on the element 3 within the ideal {0, 3, 6}.
>
> *[pause]*
>
> Why these specific orbit lengths?
>
> *9 fixed.* Because *9 ≡ 0 (mod 9)*, multiplying by 2 gives *2 × 0 = 0 ≡ 9 (mod 9)*. The element 0 is the additive identity of ℤ/9ℤ; any multiplication by anything sends 0 to 0. So the additive identity is fixed by every multiplicative action.
>
> *3-6 oscillation.* The set {3, 6} is the *coset* 3 × {1, 2} in the ideal {0, 3, 6}. Under multiplication by 2, this coset maps to {6, 12} ≡ {6, 3}. So multiplication by 2 *swaps* 3 and 6. The order of this swap (within the ideal) is 2.
>
> *[pause]*
>
> A general fact. *The order of 2 acting on the ideal {0, 3, 6} (excluding 0) equals the order of 2 acting on the quotient ring ℤ/3ℤ.* Why: the ideal {0, 3, 6} is isomorphic (as an abelian group with multiplication-by-2 action) to ℤ/3ℤ — both have three elements, both have the action *0 → 0, 1 → 2, 2 → 1* under doubling. The quotient ℤ/3ℤ has 2 acting with order 2 (since *2 × 2 = 4 ≡ 1 mod 3*).
>
> So the orbit-length pattern on the non-units of mod 9 (length 1 + length 2) is *determined by the structure of the quotient*.
>
> *[pause]*
>
> Useful framing. *The 3-6-9 Pulse's orbit structure is the action of multiplication-by-2 on the ideal {0, 3, 6}, which is isomorphic to ℤ/3ℤ.* That's a one-line description of the whole structure."

## 5. Try it (4:30–5:30)
> "Pause. Verify the analogous structure for mod 6 (with ideal {0, 3}). What's the orbit of 3 under doubling mod 6? Sixty seconds."

*[Pause card.]*

> "Welcome back. *2 × 3 = 6 ≡ 0 mod 6*. So 3 → 0. The orbit of 3 mod 6 has length 2 (3 → 0 → 0...) or length 1 if we treat 0 as the start. The structure is degenerate because 6 = 2 × 3."

## 6. Bridge (5:30–6:00)
> "Next: Build."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-185 (the proofs).
- Caption care: KaTeX modular notation.
- Music cue: precise.
