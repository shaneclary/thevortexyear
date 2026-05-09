Wk 15 — Theme: The Rodin Number Map (2D) — Lens 2: Count — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Prove 10 ≡ 1 mod 9 implies column-constancy. The formal derivation of the horizontal-stripe pattern.

## 1. Outcome
Student can prove that 10ᶜ ≡ 1 mod 9 for all c ≥ 0 and conclude column-constancy.

## 2. Hook (0:00–0:30)
*[The chain of equivalences: 10 ≡ 1 ⇒ 10ᶜ ≡ 1ᶜ ≡ 1 ⇒ same row value across all columns.]*

> "One arithmetic fact. One inductive step. Stripes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Prove column-constancy."

## 4. Body (1:00–4:30)

> "Today's count is a small proof. The horizontal striping of the Number Map follows from one arithmetic fact and one induction.
>
> Open your notebook to a fresh page.
>
> *[pause]*
>
> *State the claim.* For all c ≥ 0, 10ᶜ ≡ 1 mod 9. Therefore for all (r, c), cell(r, c) = 2ʳ mod 9, independent of c. *The grid has horizontally constant rows.*
>
> *[pause]*
>
> *Step one — base case.* 10⁰ = 1. And 1 mod 9 = 1. So 10⁰ ≡ 1 mod 9. ✓
>
> *Step two — inductive step.* Assume 10ᵏ ≡ 1 mod 9 for some k ≥ 0. Show 10ᵏ⁺¹ ≡ 1 mod 9.
>
> Compute: 10ᵏ⁺¹ = 10ᵏ × 10. By the inductive hypothesis 10ᵏ ≡ 1 mod 9. By direct computation 10 = 9 + 1 ≡ 0 + 1 ≡ 1 mod 9.
>
> So 10ᵏ⁺¹ ≡ 1 × 1 ≡ 1 mod 9. ✓
>
> *Step three — by induction*, 10ᶜ ≡ 1 mod 9 for all c ≥ 0.
>
> *[pause]*
>
> *Step four — apply to the cell formula.*
>
> cell(r, c) = (2ʳ × 10ᶜ) mod 9.
>
> By step three, 10ᶜ ≡ 1 mod 9.
>
> So cell(r, c) = (2ʳ × 1) mod 9 = 2ʳ mod 9.
>
> The column index c does not appear in the simplified formula. Therefore, *for fixed r, cell(r, c) is the same value for all c*. The row is horizontally constant.
>
> *[pause]*
>
> *Conclude.* The Number Map's horizontal striping is *forced* by the fact 10 ≡ 1 mod 9. Removing this fact (e.g., changing to a different base) would remove the horizontal striping.
>
> *[pause]*
>
> *Three observations.*
>
> *Observation one.* The proof is *short*. Two lines for the base case, two lines for the inductive step, two lines for the conclusion. About a hundred words. The brevity reflects the elementary nature of the result.
>
> *Observation two.* The proof depends on *base 10 specifically*. In base b, the analogous claim would be *bᶜ ≡ 1 mod (b-1)* — true for any b — but the modulus changes with the base. The choice of *modulus 9* is what makes *base 10* the relevant base. If you change to mod 7, base 8 becomes the analogous *natural* base.
>
> *Observation three.* The proof tells us *what would change* if base 10 were replaced. In other bases, the cells would not be column-constant; the horizontal striping would dissolve into a richer pattern. The Number Map's *current simplicity* is a base-10 feature.
>
> *[pause]*
>
> *Generalisation.* For any modulus n, define the doubling-and-scale grid analogously: rows = orbit of 2 mod n; columns = orbit of (n+1) mod n.
>
> Wait — orbit of (n+1) mod n is just orbit of 1 mod n, which is trivial. So in any modulus where the base satisfies *base ≡ 1 mod modulus*, columns are constant.
>
> *Mod 9 + base 10* is the canonical example because 10 = 9 + 1.
>
> *Mod 7 + base 8* would also have constant columns: 8 = 7 + 1.
>
> *Mod 11 + base 12* likewise: 12 = 11 + 1.
>
> The framework generalises to any (modulus, base) pair where base = modulus + 1. The choice of mod 9 + base 10 is *natural* because it's the pair that aligns with our standard counting base.
>
> *[pause]*
>
> Memorise the proof shape. *10 ≡ 1 mod 9 + induction = column-constancy.* Three lines. Available for citation when discussing the grid's structure."

## 5. Try it (4:30–5:30)
> "Pause. Write the inductive step in your notebook. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. Construct the grid from generators."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-327 (worked proof of column-constancy).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (chain of equivalences).
- Music cue: focused, quiet.
