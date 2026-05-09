Wk 04 — Theme: The Doubling Circuit — Lens 1: See — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
The Doubling Circuit as the orbit of 2 in `(ℤ/9ℤ)*`. Show 2⁰ = 1, 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16 ≡ 7, 2⁵ = 32 ≡ 5, 2⁶ = 64 ≡ 1. The cycle closes because 2⁶ ≡ 1 (mod 9). Mathematical lens — orbit diagram, formal notation.

## 1. Outcome
By the end of these 6 minutes, the student can describe the Doubling Circuit as the orbit of 2 in the multiplicative group `(ℤ/9ℤ)*`.

## 2. Hook (0:00–0:30)
*[On screen: 2⁰ = 1, 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ ≡ 7, 2⁵ ≡ 5, 2⁶ ≡ 1. Each highlights on the Symbol.]*

> "Powers of 2, modulo 9. Six steps, return to 1. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 1 of 9, Module B. Mathematical lens. Yesterday the trace was a hand gesture; today it's an orbit. Six minutes."

## 4. Body (1:00–4:30)

> "The Doubling Circuit, formally, is the *orbit of 2 under multiplication in `(ℤ/9ℤ)*`*. Translation: the sequence of values `2⁰, 2¹, 2², 2³, ...`, each reduced modulo 9.
>
> Compute the orbit.
>
> *2⁰ = 1.* The starting point. Vertex 1.
>
> *2¹ = 2.* Vertex 2.
>
> *2² = 4.* Vertex 4.
>
> *2³ = 8.* Vertex 8.
>
> *2⁴ = 16. Reduce mod 9: 16 = 9 + 7. So 2⁴ ≡ 7 (mod 9).* Vertex 7.
>
> *2⁵ = 32. Reduce: 32 = 27 + 5. So 2⁵ ≡ 5 (mod 9).* Vertex 5.
>
> *2⁶ = 64. Reduce: 64 = 63 + 1. So 2⁶ ≡ 1 (mod 9).* Vertex 1.
>
> *[pause — show the orbit on the Symbol]*
>
> The orbit closes at step 6 because *2⁶ ≡ 1 (mod 9)*. Once you hit 1 again, the next power gives 2 again, and the cycle repeats. The Doubling Circuit's six-step closure is exactly the statement that the *order of 2 in `(ℤ/9ℤ)*` is 6*.
>
> *[pause]*
>
> Vocabulary check.
>
> *(ℤ/9ℤ)\** — read *the multiplicative group of integers modulo 9, units only* — is the set {1, 2, 4, 5, 7, 8} with multiplication mod 9 as the operation. Six elements. Excludes 0, 3, 6 (which aren't units modulo 9 because they share a common factor with 9).
>
> *Order of an element* in a group — the smallest positive integer *k* such that *gᵏ = identity*. The identity of `(ℤ/9ℤ)*` is 1. The order of 2 is the smallest *k* with *2ᵏ ≡ 1 (mod 9)*. We just computed: *2⁶ ≡ 1*, and no smaller power gives 1. So the order of 2 is 6.
>
> *[pause]*
>
> One important consequence. The order of 2 equals the size of `(ℤ/9ℤ)*` — both are 6. When an element's order equals the group size, the element is called a *generator* — its powers fill the entire group. So 2 is a generator of `(ℤ/9ℤ)*`. Doubling visits every unit modulo 9 in a single orbit. That's why the Doubling Circuit visits all six elements in {1, 2, 4, 5, 7, 8} and not a smaller subset.
>
> *[pause]*
>
> Yesterday's intuition — *the cycle closes after exactly six steps* — has now become a statement of group theory: *the order of 2 in `(ℤ/9ℤ)*` is 6, and 2 is a generator*. Same fact, formal vocabulary."

## 5. Try it (4:30–5:30)
> "Pause. In your notebook, write the orbit explicitly: `2⁰ = 1, 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ ≡ 7, 2⁵ ≡ 5, 2⁶ ≡ 1 (mod 9)`. Underneath, write *the order of 2 in `(ℤ/9ℤ)*` is 6*. Sixty seconds."

*[Pause card on screen for 60 seconds.]*

> "Welcome back. The orbit and the conclusion are on the page."

## 6. Bridge (5:30–6:00)
> "Next lesson — Count. We've shown the orbit. Tomorrow we *prove* the period is 6 — that no smaller power of 2 can give 1 mod 9. The two-line proof."

*[Closing card: "Lesson 1 of 9 — See. Next: Count."]*

---

## 7. Production sidecar
- Diagrams: D-115 (the powers-of-2 orbit table on the Symbol).
- Animations: A-66 — orbit reveals one power at a time.
- B-roll: hand computing powers of 2.
- Caption care: KaTeX `(ℤ/9ℤ)*`, exponents.
- Music cue: precise.
- Continuity: hook visual carries from Mod-A wk-4 Lesson 9 close.
