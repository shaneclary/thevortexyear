Wk 19 — Theme: Antipodal Pairs in 3D — Lens 7: Compare — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Antipode in topology vs opposite in algebra. Two different notions of 'opposite' that converge on VBM's polar pairs.

## 1. Outcome
Student can articulate the difference between topological antipodes and algebraic opposites and how they coincide in VBM.

## 2. Hook (0:00–0:30)
*[Two definitions side-by-side: topological antipode (geometric opposite); algebraic opposite (additive inverse).]*

> "Two notions of 'opposite'. They meet in VBM. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 7 of 9. Compare topological and algebraic notions of opposite."

## 4. Body (1:00–4:30)

> "*Topological antipode.* On a closed manifold (sphere, torus, etc.), the antipode of a point p is the point *farthest from p* on the surface. For a sphere: the diametrically opposite point. For a torus T²: the point with both coordinate halfway-around (i.e., col + 12 mod 24 and row + 3 mod 6 on our torus).
>
> Antipodal map: p → α(p) is a *continuous involution* of the manifold.
>
> *Algebraic opposite.* In an abelian group (G, +), the opposite of element a is its *additive inverse* −a, satisfying a + (−a) = 0.
>
> For ℤ/9ℤ: the opposite of 1 is 8 (since 1 + 8 = 9 ≡ 0). Opposite of 2 is 7. Opposite of 4 is 5.
>
> Inverse map: a → −a is a *group automorphism* of order 2.
>
> *[pause]*
>
> *Two notions, different domains.*
>
> Topological antipode lives on *manifolds* — geometric surfaces.
>
> Algebraic opposite lives in *groups* — algebraic structures.
>
> The two notions can interact when a manifold has a group structure. The torus T² *is* an abelian group (under coordinatewise addition mod periods). On this combined structure, antipode and opposite are *both* defined.
>
> *[pause]*
>
> *Coincidence on the ABHA Torus.*
>
> On T² = ℤ/24ℤ × ℤ/6ℤ, *antipode and additive opposite coincide for the polar-pair-relevant cells.*
>
> Specifically: the antipode of cell (col, row) is (col + 12, row + 3). The additive opposite of cell (col, row) is (−col mod 24, −row mod 6) = (24 − col, 6 − row).
>
> *Are these the same?* Let's check for (0, 0):
>
> Antipode: (12, 3).
>
> Additive opposite: (24, 6) ≡ (0, 0) — the *same* cell, because 0's additive inverse is 0 (the identity). *Not the same as antipode in general.*
>
> *Hmm — they don't coincide directly.* Let me reconsider.
>
> The relevant connection isn't *antipode = additive inverse on the torus group*, but rather: *for cells whose values are units in ℤ/9ℤ, the antipode-cell's value is the *multiplicative* inverse * of *cell's value × 8 mod 9*.
>
> Wait — let me work this out. Cell (col, row) holds value 2^row mod 9. Antipode (col + 12, row + 3) holds value 2^{row+3} mod 9 = 8 × 2^row mod 9.
>
> So: *antipode-cell value = 8 × (cell value) mod 9 = (cell value) × 8 mod 9*.
>
> Note: in (ℤ/9ℤ)*, multiplying by 8 is the *order-2 involution* — it's the same as *taking the additive inverse* a → 9 − a, but viewed multiplicatively.
>
> Verification: 1 × 8 = 8. 2 × 8 = 16 ≡ 7. 4 × 8 = 32 ≡ 5. *These are the polar pairs.* ✓
>
> *[pause]*
>
> *The actual statement.* For cell c with value v, antipode-cell has value 8v mod 9 = 9 − v mod 9 (for v ≠ 0). *The antipodal map (geometry) acts on cell-values like the additive inverse map (algebra) — both produce the polar partner.*
>
> Topology and algebra agree.
>
> *[pause]*
>
> Three observations.
>
> *Observation one.* The agreement between topology and algebra is *forced*, not chosen. The wrap from strip to torus *had* to make algebra-additive-inverse correspond to geometry-antipode. *VBM's geometry encodes its arithmetic.*
>
> *Observation two.* This kind of correspondence is *common* in mathematics. Lie groups, for instance, are simultaneously algebraic groups and geometric manifolds; their algebra and geometry interact. *VBM's torus is a small instance of the Lie-group spirit.*
>
> *Observation three.* The correspondence is *practical*. When you want to find a polar partner, *use geometry* (look across the doughnut hole). When you want to verify the partnership arithmetically, *use algebra* (check that values sum to 9). The two methods give the same answer; use whichever is easier.
>
> *[pause]*
>
> Useful framing. *The topological antipode and the algebraic additive inverse, when restricted to the (ℤ/9ℤ)* values on the torus, coincide. This coincidence isn't accidental; it's forced by the wrap construction. The torus is one of mathematics' small cases where geometry and algebra speak the same language.*
>
> Practical takeaway. *Use geometric intuition for fast pair-finding; use algebraic verification for proof.* Both tools, same target."

## 5. Try it (4:30–5:30)
> "Pause. One sentence: when do topological antipode and algebraic inverse coincide? Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Defend. *The pairs aren't *exactly* antipodal*."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-419 (topology vs algebra side-by-side, coincidence shown).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (two definitions).
- Music cue: comparative, structural.
