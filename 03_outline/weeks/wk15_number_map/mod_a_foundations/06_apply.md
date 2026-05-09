Wk 15 — Theme: The Rodin Number Map (2D) — Lens 6: Apply — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Read off any (col, row) as a digit-root. The grid as a working lookup table.

## 1. Outcome
Student can use the grid as a lookup table to find digital roots of any number of form 2ʳ × 10ᶜ.

## 2. Hook (0:00–0:30)
*[A grid with three highlighted cells. Above each cell, a number formula: 2³ × 10⁵, 2¹⁷ × 10², 2³¹ × 10⁰. Below each cell, the value: 8, 2, 5.]*

> "The grid is a lookup table. Six minutes using it."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Use the grid for fast modular computation."

## 4. Body (1:00–4:30)

> "Today's apply uses the grid as a working tool. Three problems demonstrate the speed advantage; you do them now in your build log.
>
> *[pause]*
>
> *Problem 1.* Find the digital root of 2³ × 10⁵.
>
> *Step 1.* Identify the row index. 2³ — row index r = 3. *Note that since the doubling cycle has period 6, larger r reduces mod 6: r = 3 mod 6 = 3.*
>
> *Step 2.* Identify the column index. 10⁵ — column index c = 5. *Column index doesn't matter for value, but it's part of the lookup.*
>
> *Step 3.* Find cell (r, c) = (3, 5). Read its value. *8.*
>
> Confirm: 2³ = 8. 10⁵ = 100,000. 8 × 100,000 = 800,000. Digital root: 8 + 0 + 0 + 0 + 0 + 0 + 0 = 8. *Correct.*
>
> *[pause]*
>
> *Problem 2.* Find the digital root of 2¹⁷ × 10².
>
> *Step 1.* r = 17. Reduce mod 6: 17 ÷ 6 = 2 remainder 5. So row index = 5.
>
> *Step 2.* c = 2.
>
> *Step 3.* Cell (5, 2) value: *5.*
>
> Confirm: 2¹⁷ = 131,072. 10² = 100. 131,072 × 100 = 13,107,200. Digital root: 1+3+1+0+7+2+0+0 = 14. 14 → 1+4 = 5. *Correct.*
>
> *[pause]*
>
> *Problem 3.* Find the digital root of 2³¹ × 10⁰.
>
> *Step 1.* r = 31. 31 ÷ 6 = 5 remainder 1. Row index = 1.
>
> *Step 2.* c = 0.
>
> *Step 3.* Cell (1, 0) value: *2.*
>
> Confirm: 2³¹ = 2,147,483,648. Digital root: 2+1+4+7+4+8+3+6+4+8 = 47. 47 → 4+7 = 11. 11 → 1+1 = 2. *Correct.*
>
> *[pause]*
>
> *What just happened.* Three modular computations that would otherwise require ten or more arithmetic steps each, completed in three quick lookups. The grid converted *computation* into *table reading*.
>
> *[pause]*
>
> *General rule for using the grid.*
>
> Given a number of form 2ʳ × 10ᶜ:
>
> 1. *Reduce r mod 6* to get the row index.
>
> 2. *Reduce c mod 24* to get the column index. (Wk 16 will make column reduction matter; for now, the column doesn't change the value.)
>
> 3. *Read the cell.*
>
> The output is the digital root.
>
> *[pause]*
>
> *Generalisation.* The grid as currently structured handles *2ʳ × 10ᶜ*. To handle *3ʳ* or *5ʳ*, you'd need different grids — different orbit structures, possibly different periodicities. *Each generator gets its own grid.*
>
> But: any number can be factored into prime powers, and each prime power has its own orbit. So in principle a *family of grids* would let you compute the digital root of any number through multiple grid lookups. Wk 22 will make this explicit when introducing the Decoqubit.
>
> *[pause]*
>
> Practical observation. The grid is *most useful* when the same operation is applied many times — when you need digital roots of many numbers all of form 2ʳ × 10ᶜ. For one-off computations, the grid is more setup than it's worth. For *systematic* computations (which Q3 will require for coil-winding lookup), the grid is essential.
>
> Practical takeaway. *Use the grid for any 2ʳ × 10ᶜ computation this week.* If you're working through more general modular-arithmetic exercises, the grid extends — but you'll need to factor and apply multiple lookups."

## 5. Try it (4:30–5:30)
> "Pause. Find the digital root of 2¹⁰⁰ × 10⁵⁰ using the grid. (r mod 6 = 4; column doesn't matter; answer = 7.) Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. Number Map vs multiplication table."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-322 (worked lookup examples).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (highlighted cells with formulas).
- Music cue: working/applied.
