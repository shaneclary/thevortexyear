Wk 15 — Theme: The Rodin Number Map (2D) — Lens 7: Compare — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Number Map vs multiplication table. The grid is a particular kind of tabulation; comparison clarifies what's distinctive.

## 1. Outcome
Student can place the Rodin Number Map alongside ordinary multiplication tables and identify what each is good for.

## 2. Hook (0:00–0:30)
*[A standard 9×9 multiplication table on one side; the Rodin 6×24 Number Map on the other.]*

> "Multiplication table or Number Map? Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 7 of 9. Compare the Number Map to a familiar tabulation."

## 4. Body (1:00–4:30)

> "*Standard multiplication table.* Rows and columns indexed by 1 through 9. Cell (r, c) holds r × c. Used for memorising basic products (3 × 7 = 21). Familiar from elementary school.
>
> *Rodin Number Map.* Rows indexed by 0-5 (powers of 2). Columns indexed by 0-23 (powers of 10). Cell (r, c) holds (2ʳ × 10ᶜ) mod 9. Used for fast modular-9 computation and for visualising cyclic structure.
>
> *[pause]*
>
> Two structural similarities.
>
> *Similarity one — both are 2D tables.* Both organise multiplication results in a grid for easy lookup.
>
> *Similarity two — both have row-column products.* Both compute the cell value as a product of indexed quantities.
>
> *[pause]*
>
> Five structural differences.
>
> *Difference one — domain of indices.* Multiplication table indices are *positive integers* (1-9). Number Map indices are *exponents* (powers of 2 vertically, powers of 10 horizontally). The shift from indices-as-numbers to indices-as-exponents is the key distinction.
>
> *Difference two — value computed.* Multiplication table cell = r × c (an integer). Number Map cell = (2ʳ × 10ᶜ) mod 9 (a residue in 0-8). The shift from integer arithmetic to modular arithmetic is the second distinction.
>
> *Difference three — cell value range.* Multiplication table values run 1-81. Number Map values run 0-8 (and in practice 1-8 for the doubling-only grid). The range collapses dramatically — *144 cells holding 6 distinct values*.
>
> *Difference four — pattern visibility.* Multiplication table patterns are subtle (the 9-times-table digits sum to 9; the 11-times-table is 11, 22, 33, etc.). Number Map patterns are *immediate* (horizontal stripes, family alternation). The compression to mod-9 makes patterns visually direct.
>
> *Difference five — purpose.* Multiplication table is for *memorising specific products*. Number Map is for *seeing structure of a group action*.
>
> *[pause]*
>
> What multiplication tables are *better at.* Memorising elementary integer products. Speed at small computations. Universal pedagogy from age six onward.
>
> What the Number Map is *better at.* Seeing modular periodicity. Predicting digital roots of large products. Visualising the structure of cyclic groups.
>
> *[pause]*
>
> Useful framing. *The standard multiplication table is the integer-product analogue of the Rodin Number Map. Where the multiplication table records products as integers, the Number Map records products mod 9. The Number Map is what the multiplication table looks like when you reduce by modulus 9 and re-organise the indices as exponents.*
>
> Practical takeaway. *If you're comfortable with multiplication tables, the Number Map is a recognisable extension.* The same tabulation principle, applied to a different operation, on a smaller value range, with cyclic indices.
>
> A small caveat. Some students at this point ask: *why is the standard multiplication table not VBM's central object?* The answer is that the Symbol's circle and the Number Map's grid carry the *cyclic structure* explicitly, while the multiplication table doesn't. Cyclic structure is what the framework cares about; the multiplication table doesn't display it.
>
> The two tables are companions. Use both."

## 5. Try it (4:30–5:30)
> "Pause. One sentence: which features of the Number Map would be hidden in a standard multiplication table? Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Defend. Why exactly 24 columns?"

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-323 (multiplication table vs Number Map side-by-side).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (two tables).
- Music cue: comparative, neutral.
