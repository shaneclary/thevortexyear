Wk 10 — Theme: The Nine Multiplication Series — Lens 1: See — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
The nine multiplication tables side by side. Each row shows the orbit of a multiplier on the units of `(ℤ/9ℤ)*`.

## 1. Outcome
Student can read the nine multiplication tables for `(ℤ/9ℤ)*`.

## 2. Hook (0:00–0:30)
*[A 9×9 multiplication table for ℤ/9ℤ.]*

> "Nine rows. Nine columns. Eighty-one cells. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 1 of 9, Module B. The nine multiplication tables."

## 4. Body (1:00–4:30)

> "Build the multiplication table for ℤ/9ℤ. Rows are multipliers (1 through 9); columns are operands (1 through 9); cells are products mod 9.
>
> *[show the 9×9 table]*
>
> Row 1 (×1): *1 2 3 4 5 6 7 8 9*. Identity.
>
> Row 2 (×2): *2 4 6 8 1 3 5 7 9*. Permutation of the units, plus 9 fixed.
>
> Row 3 (×3): *3 6 9 3 6 9 3 6 9*. Cycles within {3, 6, 9}.
>
> Row 4 (×4): *4 8 3 7 2 6 1 5 9*. Permutation.
>
> Row 5 (×5): *5 1 6 2 7 3 8 4 9*. Permutation.
>
> Row 6 (×6): *6 3 9 6 3 9 6 3 9*. Cycles within {3, 6, 9}.
>
> Row 7 (×7): *7 5 3 1 8 6 4 2 9*. Permutation.
>
> Row 8 (×8): *8 7 6 5 4 3 2 1 9*. Permutation (reverses).
>
> Row 9 (×9): *9 9 9 9 9 9 9 9 9*. Collapse.
>
> *[pause — show the full table]*
>
> Three behaviours are visible.
>
> *Identity (row 1).* Doesn't move anything.
>
> *Permutation rows (rows 2, 4, 5, 7, 8).* Rearrange the units {1, 2, 4, 5, 7, 8} among themselves. The 9 stays at the rightmost (or wherever it appears).
>
> *Collapse rows (rows 3, 6, 9).* The non-units. Their products with anything sit within {3, 6, 9}, and they're not invertible.
>
> *[pause]*
>
> The five permutation rows correspond to the five non-identity elements of `(ℤ/9ℤ)*`: 2, 4, 5, 7, 8. Each row gives a *permutation of the six units* — a function from {1, 2, 4, 5, 7, 8} to itself.
>
> Two of these permutations have order 6 (rows 2 and 5 — full cycles, generators). Two have order 3 (rows 4 and 7 — three-cycles). One has order 2 (row 8 — pair-swaps).
>
> *[pause]*
>
> Reading the table. The column for *operand 1* contains the multiplier itself: *1, 2, 3, 4, 5, 6, 7, 8, 9*. So *the orbit of 1 under each multiplier is the multiplier itself*. To see the multiplier's full action, follow the chain: where does 1 go? Then where does *that* go (multiplier on the result)? Continue until you return to 1."

## 5. Try it (4:30–5:30)
> "Pause. Verify two cells: *4 × 7 mod 9 = ?* and *5 × 8 mod 9 = ?*. Sixty seconds."

*[Pause card.]*

> "Welcome back. *4 × 7 = 28 ≡ 1 mod 9*. *5 × 8 = 40 ≡ 4 mod 9*."

## 6. Bridge (5:30–6:00)
> "Next: Count. Cycle lengths formally."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-220 (9×9 multiplication table).
- Caption care: KaTeX modular notation.
- Music cue: precise.
