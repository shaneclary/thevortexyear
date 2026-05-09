Wk 14 — Theme: From Circle to Strip — Lens 2: Count — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Prove the strip is the natural carrier of doubling+scale. Counting argument from group orders.

## 1. Outcome
Student can prove that 6 rows × 24 columns is the minimal carrier for both the doubling and Fibonacci structures.

## 2. Hook (0:00–0:30)
*[The numbers 6 and 24 highlighted, with multiplication producing 144.]*

> "Six rows. Twenty-four columns. Why exactly those?"

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Prove the dimensions."

## 4. Body (1:00–4:30)

> "Why 6 × 24? Today's count is a small proof.
>
> *[pause]*
>
> *Step one — the row count.*
>
> The vertical axis runs 2⁰, 2¹, 2², 2³, … all reduced mod 9. Wk 4 proved this orbit has length 6. The orbit is exactly (1, 2, 4, 8, 7, 5).
>
> If we use fewer than 6 rows, the orbit is *truncated* — we miss some doubling values.
>
> If we use more than 6 rows, the orbit *repeats*. Row 7 is (2 × row 6) = (2 × 1) = 2 = row 1. Adding rows beyond 6 introduces redundancy without new information.
>
> *Conclusion.* Six rows is the *minimal complete period* of the doubling axis.
>
> *[pause]*
>
> *Step two — the column count.*
>
> The horizontal axis is *trivial* in mod 9 — every column gives the same residue as column 0, because 10ᶜ ≡ 1 mod 9.
>
> So why 24 columns? The answer comes from a *different operation* that the strip will eventually carry: the *Fibonacci recurrence*.
>
> The Fibonacci sequence mod 9 has period *24*. That's the Pisano period mod 9, proven in Wk 11.
>
> If we want the strip to support both *the doubling pattern* (period 6, vertical) and *the Fibonacci pattern* (period 24, horizontal — to be overlaid in Wk 16), the column count must be 24.
>
> *Conclusion.* Twenty-four columns is the *minimal complete period* of the Pisano-mod-9 horizontal axis.
>
> *[pause]*
>
> *Step three — the cell count.*
>
> Six rows × 24 columns = 144 cells.
>
> 144 is also F(12), the twelfth Fibonacci number. The coincidence is deep: the smallest n such that the Fibonacci sequence has period 24 mod 9 produces F(n) = 144 = 6 × 24.
>
> The 144-cell grid is the *minimal carrier* of both periodicities.
>
> *[pause]*
>
> *Step four — why this is 'natural'.*
>
> A *carrier* is the smallest structure on which a set of operations can be displayed without truncation or redundancy.
>
> The doubling operation requires *at minimum* 6 cells along its axis (Lagrange — orbit divides group order).
>
> The Pisano-mod-9 operation requires *at minimum* 24 cells along its axis.
>
> No smaller grid can hold both without losing information.
>
> No larger grid is needed; everything beyond 6 × 24 repeats.
>
> *Conclusion.* The 6×24 strip is *forced* by the underlying group orders. It is not a design choice; it is the unique minimal carrier.
>
> *[pause]*
>
> Three observations.
>
> *Observation one.* The dimensions come from *two different mathematical structures* — the doubling group (order 6) and the Pisano period (24). They share the carrier; they don't share an algebraic origin.
>
> *Observation two.* The interaction of the two structures on the carrier is what Wk 15 (Number Map) and Wk 16 (Fibonacci overlay) will exploit. *The carrier is necessary; the interaction is interesting.*
>
> *Observation three.* If the modulus were different, the dimensions would be different. For mod 7: doubling order is 3, Pisano period is 16, carrier is 3 × 16 = 48 cells. The framework generalises but the specific dimensions don't.
>
> *[pause]*
>
> Practical takeaway. *The grid you'll draw next week has the dimensions it has because no smaller grid suffices and no larger grid adds information.* The grid is *forced* mathematics, not chosen aesthetics."

## 5. Try it (4:30–5:30)
> "Pause. Write the proof in three lines: 6 = doubling order, 24 = Pisano period, 144 = 6 × 24. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. Construct the 6-row strip from axioms."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-303 (proof of dimensions, three-step diagram).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (highlighted dimensions).
- Music cue: light percussive, counting.
