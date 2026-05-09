Wk 17 — Theme: The ABHA Torus — Surface Structure — Lens 8: Defend — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft. **`[ORG-REVIEW]`**

---

## 0. Authoring notes
Fiftieth Defend. Show the symmetries are well-defined — formal version of Lens 4's discussion of symmetries.

## 1. Outcome
Student can prove that a candidate symmetry of the ABHA Torus is well-defined and produces a valid automorphism.

## 2. Hook (0:00–0:30)
*[A theorem: "The 24-fold rotational symmetry is well-defined on T²."]*

> "Symmetry as theorem. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 8 of 9. Prove symmetries are well-defined."

## 4. Body (1:00–4:30)

> "The objection. *VBM talks about the torus's symmetries — rotations, antipodal swaps, family-preservation. Are these symmetries well-defined as mathematical objects, or are they intuition that breaks under formal scrutiny?*
>
> The objection is fair to ask. The symmetries *are* well-defined; here's the proof shape.
>
> *[pause]*
>
> *Theorem (Rotational symmetry).* The map σ : T² → T² defined by σ(col, row) = (col + 1 mod 24, row) is an *automorphism* of T² (a bijection that preserves the cyclic group structure).
>
> *Proof.*
>
> *Step 1 — well-definedness.* By Mod B Lens 2, the (col, row) coordinate is well-defined on T². The arithmetic (col + 1 mod 24, row) is also well-defined: addition by 1 mod 24 is a standard operation; row is unchanged. Therefore σ is well-defined as a function. ✓
>
> *Step 2 — bijection.* σ has the explicit inverse σ⁻¹(col, row) = (col − 1 mod 24, row). Composition: σ ∘ σ⁻¹ = σ⁻¹ ∘ σ = identity. Therefore σ is a bijection. ✓
>
> *Step 3 — group structure preservation.* T² has the structure of the abelian group ℤ/24ℤ × ℤ/6ℤ under coordinatewise addition. σ acts as 'add (1, 0)' to coordinates. Since the group is abelian, σ commutes with all other group operations. *σ is a group automorphism.* ✓
>
> Therefore σ is a well-defined automorphism of T². ✓
>
> *Q.E.D.*
>
> *[pause]*
>
> *Generalisation.* The same proof works for σ(col, row) = (col + a, row + b) for any (a, b). The set of all such 'shift' automorphisms forms a group isomorphic to T² itself — the torus *acts on itself by translation*.
>
> *[pause]*
>
> *Antipodal symmetry.*
>
> The map α : T² → T² defined by α(col, row) = (col + 12 mod 24, row + 3 mod 6) is an automorphism. Same proof structure: well-defined, bijective (with α as its own inverse, since α ∘ α = identity because 12 + 12 = 24 ≡ 0 and 3 + 3 = 6 ≡ 0), preserves group structure. ✓
>
> α is the *antipodal involution*. It's an *order-2* automorphism — applying it twice gives identity.
>
> *[pause]*
>
> *Symmetry-preserving claim.* The decorated structure (cell labels, family colours) is preserved under both σ and α.
>
> *For σ.* σ shifts column by 1 and leaves row unchanged. *Cell labels* depend on row only (cell value = 2^row mod 9), so σ preserves cell labels. *Family colours* also depend on row only, so σ preserves family colours.
>
> *For α.* α shifts column by 12 and row by 3. Cell labels: row + 3 mod 6 sends row 0 → 3, row 1 → 4, row 2 → 5, row 3 → 0, row 4 → 1, row 5 → 2. Cell values: 1 → 8, 2 → 7, 4 → 5, 8 → 1, 7 → 2, 5 → 4. *Each value goes to its polar partner.* So cell labels are *not preserved by α* — but they're *predictably permuted* (each to its antipode).
>
> Family colours under α: family 1 (rows 0, 2, 4) maps to (3, 5, 1) — which is family 1 + family 2 mixed. Wait, that's wrong; let me recompute. Row 0 (family 1) → row 3 (family 2). Row 2 (family 1) → row 5 (family 2). Row 4 (family 1) → row 1 (family 2). So under α, family 1 maps entirely to family 2 and vice versa.
>
> *α swaps the two families.* This is consistent with the polar pair structure: each polar pair has one family-1 element and one family-2 element. The antipodal involution exchanges the families.
>
> *[pause]*
>
> So the calibrated answer to *are the symmetries well-defined*:
>
> *The ABHA Torus's symmetries are well-defined automorphisms of the abelian group structure ℤ/24ℤ × ℤ/6ℤ. Rotational symmetries (col + a, row + b) preserve group structure and the cell-label decoration. The antipodal symmetry (col + 12, row + 3) preserves group structure but swaps the two families and exchanges polar partners. Both are bijective, well-defined under the equivalence relation, and reproducible. The symmetries are formal mathematical objects, not informal intuitions.*
>
> Around eighty words.
>
> *[pause]*
>
> Practical takeaway. *State the symmetry, the formula, and the property preserved.* Mathematicians familiar with group theory will recognise the structure immediately."

## 5. Try it (4:30–5:30)
> "Pause. Say the eighty-word defence in your own words. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Connect. Sets up the helical doubling path."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-380 (calibrated-answer card, fiftieth — well-defined symmetries).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (theorem statement).
- **`[ORG-REVIEW]`** — calibrated-answer template.
