Wk 09 — Theme: Powers of Ten & Scale Invariance — Lens 1: See — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
The horizontal columns of the Number Map (preview of Wk 15 grid). Each column is constant under digit-root reduction.

## 1. Outcome
Student can describe the column-constant property of the Rodin Number Map.

## 2. Hook (0:00–0:30)
*[A 6×4 grid; each column is one colour because all entries reduce to the same value.]*

> "Six rows. Four columns. Each column constant. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 1 of 9, Module B. The Rodin Number Map's column property."

## 4. Body (1:00–4:30)

> "In Q2 (Wk 15) we'll construct the *Rodin Number Map* — a 2D grid where cell *(c, r)* holds the digital root of *2ʳ × 10ᶜ*. Today's preview: the *column-constant property*.
>
> Cell *(c=0, r=0)* contains the digital root of *2⁰ × 10⁰ = 1 × 1 = 1*. Root: 1.
>
> Cell *(c=1, r=0)* contains the digital root of *2⁰ × 10¹ = 1 × 10 = 10*. Root: 1.
>
> Cell *(c=2, r=0)* contains the digital root of *2⁰ × 10² = 100*. Root: 1.
>
> *[pause]*
>
> All cells in row 0 contain digital root 1, regardless of column. Why? Because *10ᶜ* always reduces to 1. The column index *c* doesn't change the row's digital root.
>
> *[pause]*
>
> Same argument for any row *r*. Cell *(c, r)* holds *digital_root(2ʳ × 10ᶜ) = digital_root(2ʳ × 1) = digital_root(2ʳ)*.
>
> So the *column index drops out*. The grid is *column-constant* — every cell in a given row has the same digital root, equal to *digital_root(2ʳ)*.
>
> *[pause — show the grid with each row coloured uniformly]*
>
> Build the grid for *r = 0, 1, 2, 3, 4, 5* and *c = 0, 1, 2, 3*:
>
> Row 0 (*r=0*): all 1s.
>
> Row 1 (*r=1*): all 2s. (*2¹ = 2*.)
>
> Row 2 (*r=2*): all 4s.
>
> Row 3 (*r=3*): all 8s.
>
> Row 4 (*r=4*): all 7s. (*2⁴ = 16 → 7*.)
>
> Row 5 (*r=5*): all 5s. (*2⁵ = 32 → 5*.)
>
> Six rows, four columns, 24 cells. Each column reads the same six-digit sequence: *1, 2, 4, 8, 7, 5* — the Doubling Circuit.
>
> *[pause]*
>
> The column-constant property is *exactly the scale invariance* from Mod-A, applied to the grid. Multiplying any cell's content by *10* doesn't change its digital root, so multiplying the column index by an extra power of 10 gives the same row.
>
> The grid's *horizontal axis* (column index) is the *scale axis*; the *vertical axis* (row index) is the *operation axis* (doubling). The two axes are independent, but only the operation axis affects the digital root."

## 5. Try it (4:30–5:30)
> "Pause. Draw the 6×4 grid. Fill in row 4 (*r=4*) by hand. All cells should read 7. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Count. Prove *10ᵏ ≡ 1 mod 9* formally."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-202 (column-constant grid).
- Caption care: KaTeX exponents.
- Music cue: precise.
