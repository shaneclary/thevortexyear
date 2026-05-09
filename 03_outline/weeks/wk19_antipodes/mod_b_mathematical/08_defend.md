Wk 19 — Theme: Antipodal Pairs in 3D — Lens 8: Defend — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft. **`[ORG-REVIEW]`**

---

## 0. Authoring notes
Fifty-sixth Defend. Antipodal proof — the formal statement and proof of the polar-pair-antipode correspondence.

## 1. Outcome
Student can defend the antipodal-polar-pair correspondence as a formal theorem with a clean proof.

## 2. Hook (0:00–0:30)
*[A theorem statement: "For all c ∈ T², value(c) + value(α(c)) ≡ 0 mod 9."]*

> "The antipodal theorem. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 8 of 9. Defend the antipodal correspondence formally."

## 4. Body (1:00–4:30)

> "The objection. *VBM presents the antipodal-polar-pair correspondence as if it were a deep result. But maybe it's just a coincidence — special to mod 9, not really structural. Could you prove it formally?*
>
> The objection is fair. The correspondence is provable as a theorem.
>
> *[pause]*
>
> *Theorem (Antipodal-Polar Correspondence).* For the ABHA Torus T² = ℤ/24ℤ × ℤ/6ℤ with cell-value function v(col, row) = 2^row mod 9 and antipodal map α(col, row) = (col + 12, row + 3), the following holds:
>
> *For every cell c ∈ T², v(c) + v(α(c)) ≡ 0 mod 9.*
>
> *Proof.*
>
> *Step 1.* Compute v(α(c)).
>
> v(α(col, row)) = v(col + 12, row + 3) = 2^{(row+3) mod 6} mod 9.
>
> *Step 2.* Reduce row + 3.
>
> If row ∈ {0, 1, 2}: row + 3 ∈ {3, 4, 5}. No mod-6 reduction needed.
>
> If row ∈ {3, 4, 5}: row + 3 ∈ {6, 7, 8} ≡ {0, 1, 2} mod 6. Mod-6 reduction applies.
>
> Either way, row + 3 mod 6 = (row + 3) mod 6.
>
> *Step 3.* Compute 2^{(row + 3) mod 6} mod 9.
>
> Note: 2^6 ≡ 1 mod 9 (Wk 4). So 2^{n} mod 9 depends only on n mod 6.
>
> Therefore 2^{(row + 3) mod 6} mod 9 = 2^{row + 3} mod 9 = 2^row × 2³ mod 9 = 8 × 2^row mod 9.
>
> *Step 4.* Substitute.
>
> v(α(c)) = 8 × v(c) mod 9.
>
> *Step 5.* Verify the sum.
>
> v(c) + v(α(c)) = v(c) + 8 × v(c) = 9 × v(c) mod 9.
>
> Since 9 ≡ 0 mod 9, we have 9 × v(c) ≡ 0 mod 9. ✓
>
> Therefore v(c) + v(α(c)) ≡ 0 mod 9 for every cell c ∈ T².
>
> *Q.E.D.*
>
> *[pause]*
>
> *Why the proof is short.* The result follows from two facts:
>
> *Fact 1.* The antipodal map shifts row by 3 (half the minor period 6).
>
> *Fact 2.* The doubling cycle has order 6 in (ℤ/9ℤ)*, and 2³ = 8 ≡ −1 mod 9 (the involutive element).
>
> *Half-shift* + *order-6 cycle* + *2³ = −1* = *correspondence forces itself*. Each ingredient is straightforward; their combination is the theorem.
>
> *[pause]*
>
> *What the theorem says.* It says: *for every cell on the torus, the antipodal cell's value is the additive inverse of the original cell's value mod 9*. This is the mathematical content of *polar pairs are antipodes*.
>
> *[pause]*
>
> *What the theorem doesn't say.* It doesn't say:
>
> *Doesn't say 1.* That this correspondence holds for all moduli or all torus dimensions. It's specific to (24, 6) with v(c) = 2^row.
>
> *Doesn't say 2.* That this correspondence has metaphysical significance. It's a structural correspondence; whether it has deeper meaning is interpretive.
>
> *Doesn't say 3.* That every algebraic-geometric correspondence in mathematics is similarly clean. *Most aren't.* This one is.
>
> *[pause]*
>
> So the calibrated answer to *prove the antipodal-polar correspondence*:
>
> *The antipodal-polar-pair correspondence is a theorem with a five-step proof. The key facts are: the antipodal map shifts row by 3 (half the minor period); 2 has order 6 in (ℤ/9ℤ)*; and 2³ ≡ −1 mod 9. Combining these gives v(α(c)) = −v(c) mod 9, which means v(c) + v(α(c)) ≡ 0 mod 9 for every cell. The correspondence is forced by the underlying group theory of mod-9 arithmetic. The result is provable, not coincidental.*
>
> Around eighty words.
>
> *[pause]*
>
> Practical takeaway. *The proof is the defence.* When asked, walk through the five steps. The result is straightforward once the structure is unpacked. *Mathematical rigour is what makes the framework defensible.*"

## 5. Try it (4:30–5:30)
> "Pause. Say the eighty-word defence in your own words. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Connect. Sets up the orthogonal structure."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-428 (calibrated-answer card, fifty-sixth — antipodal theorem).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (theorem statement).
- **`[ORG-REVIEW]`** — calibrated-answer template.
