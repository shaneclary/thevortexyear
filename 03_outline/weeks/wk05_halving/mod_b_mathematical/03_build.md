Wk 05 — Theme: The Halving Circuit — Lens 3: Build — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Compute a half-table for the first 20 powers of 5 (or equivalently, a doubling table read backwards). The student verifies the proof's consequences explicitly.

## 1. Outcome
By the end of these 6 minutes, the student has produced a 20-row half-table showing the orbit of 5 under iterated multiplication.

## 2. Hook (0:00–0:30)
*[On screen: a 20-row table. Row n: 5ⁿ mod 9 = ?]*

> "Twenty powers of 5. Twenty digital roots. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 3 of 9. The half-table. Six minutes."

## 4. Body (1:00–4:30)

> "Open your notebook. Draw a 20-row table. Columns: *n*, *5ⁿ*, *5ⁿ mod 9*.
>
> Fill in *n* from 0 through 20.
>
> *[pause]*
>
> Compute *5ⁿ* and reduce mod 9 for each row.
>
> *5⁰ = 1.* Reduces to 1.
>
> *5¹ = 5.* Reduces to 5.
>
> *5² = 25.* Reduces to 7.
>
> *5³ = 125.* Reduces to 8 (1 + 2 + 5 = 8).
>
> *5⁴ = 625.* Reduces to 4 (6 + 2 + 5 = 13 → 4).
>
> *5⁵ = 3125.* Reduces to 2 (3 + 1 + 2 + 5 = 11 → 2).
>
> *5⁶ = 15625.* Reduces to 1 (1 + 5 + 6 + 2 + 5 = 19 → 10 → 1).
>
> *5⁷ = 78125.* Reduces to 5.
>
> Continue.
>
> *[pause]*
>
> The reductions cycle: 1, 5, 7, 8, 4, 2, 1, 5, 7, 8, 4, 2, ... The cycle has length 6 — same as doubling, traversed in opposite direction.
>
> So the orbit of 5 visits the same six elements as the orbit of 2 — {1, 2, 4, 5, 7, 8} — in the order 1 → 5 → 7 → 8 → 4 → 2 → 1. The Halving Circuit is the orbit of 5 under iterated multiplication mod 9.
>
> *[pause — show the completed 20-row table]*
>
> Twenty rows of computation confirm the proof from yesterday. *5⁶ ≡ 1 (mod 9)*, so the order of 5 is 6, and 5 is a generator of `(ℤ/9ℤ)*`.
>
> *[pause]*
>
> Useful note. The doubling table from Wk 4 Mod-B Lesson 3 produces the sequence 1, 2, 4, 8, 7, 5, 1, 2, ... The halving table produces 1, 5, 7, 8, 4, 2, 1, 5, ... Read either one backwards and you get the other. The two tables are *mirror reflections*."

## 5. Try it (4:30–5:30)
> "Pause. Finish your 20-row table. Verify the cycle 1, 5, 7, 8, 4, 2 repeats. Sixty seconds."

*[Pause card.]*

> "Welcome back."

## 6. Bridge (5:30–6:00)
> "Next lesson — Hear from Marko. The two-line proof in his voice."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-139 (the 20-row half-table).
- Animations: A-86 — table fills.
- Caption care: KaTeX exponents.
- Music cue: precise.
