Wk 15 — Theme: The Rodin Number Map (2D) — Lens 2: Count — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Count cells; verify row periodicity. The grid's structure expressed in counted quantities.

## 1. Outcome
Student can count and verify the periodicity of cells across rows and columns of the Number Map.

## 2. Hook (0:00–0:30)
*[The 6×24 grid with row tallies and column tallies displayed in the margins.]*

> "Count rows. Count columns. Count families. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Counting the grid's structure."

## 4. Body (1:00–4:30)

> "Today we count what the grid contains and verify the periodicities directly.
>
> *[pause]*
>
> *Total cells.* 6 rows × 24 columns = 144. Established last week. Today's count looks *inside* the 144.
>
> *[pause]*
>
> *Row periodicity check.* Each row should hold the same value across all 24 columns (because scale invariance forces this).
>
> Row 0 (value 1): cells = 1, 1, 1, 1, …, 1. Twenty-four ones.
>
> Row 1 (value 2): cells = 2, 2, 2, 2, …, 2. Twenty-four twos.
>
> Row 2 (value 4): twenty-four fours.
>
> Row 3 (value 8): twenty-four eights.
>
> Row 4 (value 7): twenty-four sevens.
>
> Row 5 (value 5): twenty-four fives.
>
> *Total instances of each value:* twenty-four each, for the six values 1, 2, 4, 5, 7, 8. *No threes, sixes, or nines* in the grid.
>
> Sanity check: 6 × 24 = 144. Correct.
>
> *[pause]*
>
> *Family counts.*
>
> Family 1 = {1, 4, 7}. Each appears 24 times. Total family-1 cells: 24 × 3 = 72.
>
> Family 2 = {2, 5, 8}. Each appears 24 times. Total family-2 cells: 24 × 3 = 72.
>
> Family 3 = {3, 6, 9}. Zero appearances. Total family-3 cells: 0.
>
> Sanity check: 72 + 72 + 0 = 144. Correct.
>
> *[pause]*
>
> *What this tells us.* The grid is *evenly split* between family 1 and family 2, with family 3 entirely absent. The split is not 50-50 by chance; it's forced by the doubling structure. Doubling permutes the *units* of (ℤ/9ℤ); the units are exactly the family-1 and family-2 elements; the non-units are the family-3 elements; doubling cannot reach them.
>
> *[pause]*
>
> *Column periodicity check.*
>
> Each column should hold the same six values (1, 2, 4, 8, 7, 5) in the same order, regardless of column index. Verify by reading column 0, then column 12, then column 23.
>
> Column 0: rows 0-5 give (1, 2, 4, 8, 7, 5).
>
> Column 12: rows 0-5 give (1, 2, 4, 8, 7, 5). Same.
>
> Column 23: rows 0-5 give (1, 2, 4, 8, 7, 5). Same.
>
> All 24 columns are identical. Column periodicity holds with period *one* in the trivial sense — every column is the same.
>
> *[pause]*
>
> *Diagonal counts.* Reading along a main diagonal (cells (0,0), (1,1), (2,2), (3,3), (4,4), (5,5)) gives values 1, 2, 4, 8, 7, 5 — *the entire doubling cycle*. The main diagonal traces the cycle in one pass.
>
> Reading along a six-cell anti-diagonal gives reversed: 1, 5, 7, 8, 4, 2 — *the halving cycle*. The anti-diagonal traces the inverse cycle.
>
> *Diagonals are where the cycle structure becomes visually accessible*, even on this simplified grid.
>
> *[pause]*
>
> Three observations from the count.
>
> *Observation one.* The grid is *boring on its own*. Same row stripe across every column. The richness emerges only when other structures are overlaid (Fibonacci in Wk 16) or when the grid is wrapped into a torus.
>
> *Observation two.* Family 3 is *the missing family*. This isn't a bug; it's a feature. Family 3 acts on the *3-6-9 axis* and isn't reached by doubling. Wk 17-20 will introduce a separate axis to host family 3.
>
> *Observation three.* The diagonals give *a 1D path through the 2D grid* that reproduces Q1's cycles. The grid contains its predecessors as substructures.
>
> Memorise three numbers: *24 (occurrences per value), 72 (family count), 0 (family-3 count)*. They will recur."

## 5. Try it (4:30–5:30)
> "Pause. On your grid, fill in row 1 with twos. Verify by counting that row 1 has 24 twos. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. Pencil-draw the full grid by hand."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-319 (grid with marginal counts and diagonals highlighted).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (grid with tallies).
- Music cue: counting motif.
