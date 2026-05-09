Wk 19 — Theme: Antipodal Pairs in 3D — Lens 2: Count — Module A (Foundations)
Numb of lessons: 1 of 9 in Module A.
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Count antipodal pairs on the torus surface. The accounting of pairs and their distribution.

## 1. Outcome
Student can count the antipodal pairs on the torus, distribute them by family, and verify the totals.

## 2. Hook (0:00–0:30)
*[Counters: 144 cells, 72 pairs, 24 (1,8) + 24 (2,7) + 24 (4,5) polar pair occurrences.]*

> "Seventy-two pairs. Twenty-four each for three polar types. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Counting antipodal pairs."

## 4. Body (1:00–4:30)

> "Today we count antipodal pairs and verify the structure.
>
> *[pause]*
>
> *Total pairs.* 144 cells / 2 = *72 antipodal pairs*. Every cell has exactly one antipode; pairing partitions the cells.
>
> *[pause]*
>
> *Pairs by family.*
>
> *Family 1 cells* (rows 0, 2, 4 — values 1, 4, 7). 72 cells. They pair with which cells?
>
> Antipode of (col, 0): (col + 12, 3). Row 3 is family 2.
>
> Antipode of (col, 2): (col + 12, 5). Row 5 is family 2.
>
> Antipode of (col, 4): (col + 12, 1). Row 1 is family 2.
>
> *Family 1 cells pair with family 2 cells.* Each family-1 cell has a family-2 antipode.
>
> *Family 2 cells* (rows 1, 3, 5 — values 2, 8, 5). 72 cells. They pair with family 1.
>
> *Antipodal pairs cross families.* Every pair has one family-1 endpoint and one family-2 endpoint.
>
> Pair count: 72 (family-1) cells × 1 (antipode each) / 2 (each pair counted twice) — wait. 72 family-1 cells; each has one antipode in family 2; so 72 cross-family pairs. *That's all 72 pairs* — every pair is cross-family, none are within-family.
>
> *[pause]*
>
> *Pairs by polar partner.*
>
> Three polar partner types:
>
> *(1, 8) pair-type.* Value-1 cells pair with value-8 cells. Value 1 lives on row 0 (24 cells). Value 8 lives on row 3 (24 cells). Antipode of (col, 0) is (col + 12, 3); 24 such pair occurrences.
>
> *(2, 7) pair-type.* Value-2 cells (row 1, 24 cells) pair with value-7 cells (row 4, 24 cells). 24 occurrences.
>
> *(4, 5) pair-type.* Value-4 cells (row 2, 24 cells) pair with value-5 cells (row 5, 24 cells). 24 occurrences.
>
> Total: 24 + 24 + 24 = *72 polar pair occurrences*. ✓
>
> *[pause]*
>
> *Sanity checks.*
>
> *Check 1.* Total antipodal pairs = 72. Total polar pair occurrences = 72. *Every antipodal pair is a polar pair.* ✓
>
> *Check 2.* Polar partner sums: 1 + 8 = 9; 2 + 7 = 9; 4 + 5 = 9. *Every polar pair sums to 9 mod 9 = 0.* The arithmetic property holds across all 72 pairs.
>
> *Check 3.* Family symmetry: each polar pair has one family-1 and one family-2 element. ({1, 4, 7} ∋ 1, 4, 7 paired with {8, 5, 2} ⊂ {2, 5, 8}.)
>
> *[pause]*
>
> *Pairs and the helix.*
>
> The doubling helix passes through 24 specific cells (those where row = col mod 6). Each helix cell's antipode is on the *halving* helix.
>
> *Doubling helix cells: 24.* *Halving helix cells: 24.* These are *complementary* — they don't overlap. Together: 48 cells, 24 antipodal pairs.
>
> *Off-helix cells: 144 − 48 = 96 cells.* These pair up into 48 more antipodal pairs.
>
> Total: 24 (helix-pairs) + 48 (off-helix pairs) = 72 pairs. ✓
>
> *[pause]*
>
> Three observations.
>
> *Observation one.* The helix-and-antihelix structure (doubling + halving) accounts for *one-third* of all antipodal pairs (24 of 72). The remaining two-thirds are off-helix.
>
> *Observation two.* The off-helix pairs are *also polar pairs* (since every pair is). They just don't lie on the doubling-cycle paths. They're at *intermediate cell positions*.
>
> *Observation three.* When you wind a multi-strand Rodin Coil, you wind multiple helices that *occupy* the off-helix cells. The 96 off-helix positions become *strand crossings* in multi-strand designs.
>
> *[pause]*
>
> Practical takeaway. *Memorise: 72 antipodal pairs total, 24 on doubling helix, 48 off helix.* These numbers tell you about the wire-crossing density of your future coil."

## 5. Try it (4:30–5:30)
> "Pause. Verify on your torus: count the value-1 cells, the value-8 cells. Each should be 24. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. Mark every (1,8), (2,7), (4,5) pair."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-415 (counter readouts with family breakdown).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (counter readouts).
- Music cue: counting motif.
