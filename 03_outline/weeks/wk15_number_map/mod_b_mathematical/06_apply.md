Wk 15 — Theme: The Rodin Number Map (2D) — Lens 6: Apply — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Use the grid for fast modular computation. Worked exercises in modular-9 lookups, more demanding than Mod A's introduction.

## 1. Outcome
Student can apply the grid to modular-9 computations involving products, sums, and chained operations.

## 2. Hook (0:00–0:30)
*[A blackboard-style problem set with three problems and a stopwatch.]*

> "Three problems. Use the grid. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Modular-9 computation drill."

## 4. Body (1:00–4:30)

> "Today is a working drill. Three problems progressively harder, each solved with grid lookups. Open your build log and work alongside.
>
> *[pause]*
>
> *Problem 1 (introductory).* Find digital_root(2¹⁰⁰ × 10⁵⁰).
>
> *Solution.*
>
> r = 100. r mod 6 = 4 (since 100 = 96 + 4 and 96 is a multiple of 6).
>
> c = 50. Doesn't matter for value (column-constancy).
>
> Cell (4, 50) value = 2⁴ mod 9 = 7.
>
> *Answer: 7.*
>
> Time elapsed: about ten seconds with grid; minutes without.
>
> *[pause]*
>
> *Problem 2 (intermediate).* Find digital_root(2¹⁵ × 10¹² + 2⁸ × 10⁹).
>
> *Solution.*
>
> Term 1: 2¹⁵ → r mod 6 = 15 mod 6 = 3. Cell (3, 12) = 8.
>
> Term 2: 2⁸ → r mod 6 = 8 mod 6 = 2. Cell (2, 9) = 4.
>
> Sum mod 9: 8 + 4 = 12 mod 9 = 3.
>
> *Answer: 3.*
>
> *Why this works.* Digital roots distribute over addition. digital_root(a + b) = digital_root(digital_root(a) + digital_root(b)). So we look up each term's digital root, add them, and reduce.
>
> *[pause]*
>
> *Problem 3 (chained).* Find digital_root((2³ × 10⁴) × (2⁷ × 10¹¹)).
>
> *Solution — method 1: lookup each, multiply.*
>
> Term 1: 2³ → cell (3, 4) = 8.
>
> Term 2: 2⁷ → r mod 6 = 1. Cell (1, 11) = 2.
>
> Product mod 9: 8 × 2 = 16 mod 9 = 7.
>
> *Answer: 7.*
>
> *Solution — method 2: combine exponents first.*
>
> Combined integer: 2³ × 10⁴ × 2⁷ × 10¹¹ = 2¹⁰ × 10¹⁵.
>
> r = 10. r mod 6 = 4. Cell (4, 15) = 7.
>
> *Same answer: 7.* Both methods confirm.
>
> *Why this works.* Digital roots distribute over multiplication. digital_root(a × b) = digital_root(digital_root(a) × digital_root(b)).
>
> *[pause]*
>
> Three observations on the drill.
>
> *Observation one — speed.* Grid lookups complete in seconds. Hand-multiplication of these integers without the grid takes minutes each, with high error rate.
>
> *Observation two — error checking.* Method 2 in Problem 3 confirmed Method 1. *Use both methods on critical calculations as a sanity check.*
>
> *Observation three — extension.* The grid handles 2ʳ × 10ᶜ products. *Other integers* require either:
>
>   (a) factoring into 2ʳ × 10ᶜ pieces (some integers don't factor this way), or
>
>   (b) using a different grid for a different generator (Wk 22's Decoqubit will introduce this), or
>
>   (c) reducing the integer mod 9 directly.
>
> The grid is *one tool* for modular-9 work. Most mod-9 problems can be solved by direct reduction; the grid shines when many similar lookups are needed in succession.
>
> *[pause]*
>
> *Practical use case for Q3.* Coil-winding lookup. When designing a Rodin Coil, you need to know which winding position corresponds to step *k* of the doubling cycle. Step *k* maps to row (k mod 6), and the position depends on column (k mod 24). The grid gives this lookup in seconds.
>
> One observation. *The grid is a working tool, not just a teaching artefact.* Q3 will use it. Today's drill prepares you for that future use.
>
> *[pause]*
>
> Practical takeaway. *Bookmark the grid as a working reference.* Use it whenever a calculation involves 2ʳ × 10ᶜ — coil position, exponential growth digital roots, repeated-doubling sequences in code. The grid is faster than any other method I know for these specific calculations."

## 5. Try it (4:30–5:30)
> "Pause. Solve: digital_root(2²⁵ × 10⁷). Sixty seconds. Answer: 2."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. Grid as a coloured Cayley diagram."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-330 (three problems worked).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (problem set on board).
- Music cue: working/applied.
