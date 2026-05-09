Wk 05 — Theme: The Halving Circuit — Lens 2: Count — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Two-line proof: halving is ×5 mod 9. Specifically: prove that 5 is the multiplicative inverse of 2 in `(ℤ/9ℤ)*`. The proof: *2 × 5 = 10 ≡ 1 (mod 9)*, by definition of multiplicative inverse.

## 1. Outcome
By the end of these 6 minutes, the student has the formal proof that halving = ×5 in their notebook.

## 2. Hook (0:00–0:30)
*[On screen: 2 × 5 = 10. 10 ≡ 1 (mod 9). Therefore × 5 = (× 2)⁻¹ in `(ℤ/9ℤ)*`.]*

> "One equation. Two lines of consequence. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. The proof. Six minutes."

## 4. Body (1:00–4:30)

> "We want to prove: in `(ℤ/9ℤ)*`, multiplication-by-5 is the inverse of multiplication-by-2.
>
> *Step one — definition of inverse.* Two operations *f* and *g* on a group are *inverses* if their composition is the identity: *f ∘ g = g ∘ f = identity*.
>
> *Step two — verify.* Compose multiplication-by-2 with multiplication-by-5: *(× 2) ∘ (× 5) (x) = 2 · 5 · x = 10 · x ≡ 1 · x = x (mod 9)*, for any *x* in `(ℤ/9ℤ)*`. The composition is the identity. So × 5 is the inverse of × 2.
>
> Done. Two steps. The proof is the equation *2 × 5 = 10 ≡ 1 (mod 9)*; everything else is unpacking what *inverse* means.
>
> *[pause]*
>
> Now what this proves *about halving*.
>
> Halving in standard arithmetic is dividing by 2, which equals multiplying by the multiplicative inverse of 2. In rationals or reals, that inverse is 0.5. In `(ℤ/9ℤ)*`, that inverse is 5. So *halving in `(ℤ/9ℤ)*` is multiplying by 5*.
>
> The Halving Circuit is the orbit of 5 under multiplication. Equivalently, it's the inverse traversal of the Doubling Circuit.
>
> *[pause]*
>
> Notation worth carrying. In group theory we'd write *(× 2)⁻¹ = × 5* in `(ℤ/9ℤ)*`. The exponent *−1* denotes inverse. So the Halving Circuit is *the orbit of 2⁻¹*, equivalently *the inverse orbit of 2*.
>
> *[pause]*
>
> Generalisation. In any cyclic group, the inverse of a generator is also a generator. *(ℤ/9ℤ)*` has two generators: 2 and 5. They are inverses. Each one's orbit is the cycle reversed of the other's. This isn't special to 2 and 5; it's a general property.
>
> Useful exercise. *What's the inverse of 4 in `(ℤ/9ℤ)*`?* Try multiplying by candidates: *4 × 7 = 28 ≡ 1 (mod 9)*. So *4⁻¹ = 7*. The orbit of 4 walks through {1, 4, 7}; the orbit of 7 walks through {1, 7, 4} — the reverse. Same subgroup, mirror traversal."

## 5. Try it (4:30–5:30)
> "Pause. Write the proof in your notebook: *2 × 5 = 10 ≡ 1 (mod 9), therefore × 5 = (× 2)⁻¹*. Then compute the inverse of 8 in `(ℤ/9ℤ)*`. (Hint: solve *8 × x ≡ 1 mod 9*.) Sixty seconds."

*[Pause card.]*

> "Welcome back. *8 × 8 = 64 ≡ 1 (mod 9)*. So 8 is its own inverse."

## 6. Bridge (5:30–6:00)
> "Next lesson — Build. Tomorrow we tabulate inverses for the first 20 powers."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-138 (the proof).
- Animations: A-85 — proof unfolds.
- Caption care: KaTeX `\equiv`, `\pmod{9}`, exponents.
- Music cue: precise.
