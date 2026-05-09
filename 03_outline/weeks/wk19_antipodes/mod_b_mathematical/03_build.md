Wk 19 — Theme: Antipodal Pairs in 3D — Lens 3: Build — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Construct the antipodal involution. The map's formal construction as a group element acting on T².

## 1. Outcome
Student writes a derivation showing the antipodal map as translation by (12, 3) in T².

## 2. Hook (0:00–0:30)
*[A blank notebook page titled "The antipodal involution — construction".]*

> "Today: build the involution. Five minutes."

## 3. Setup (0:30–1:00)
> "Lens 3 of 9. Construct the antipodal involution."

## 4. Body (1:00–4:30)

> "Today's build derives the antipodal map from group-theoretic axioms. Open your notebook.
>
> *[pause]*
>
> *Setup.* T² = ℤ/24ℤ × ℤ/6ℤ is an abelian group under coordinatewise addition. Elements are pairs (col, row) with col ∈ ℤ/24ℤ and row ∈ ℤ/6ℤ.
>
> Operation: (a, b) + (c, d) = (a + c mod 24, b + d mod 6).
>
> Identity element: (0, 0).
>
> Order of T²: 144.
>
> *[pause]*
>
> *Step 1 — identify the special element.* Look for an element t ∈ T² satisfying:
>
> *t + t = (0, 0)* (identity)
>
> i.e., *t has order 2 (or order 1, but order 1 is just the identity)*.
>
> An element t = (a, b) has order 2 iff 2t = (0, 0), i.e., 2a ≡ 0 mod 24 and 2b ≡ 0 mod 6.
>
> Solutions:
>
> 2a ≡ 0 mod 24 → a ∈ {0, 12}.
>
> 2b ≡ 0 mod 6 → b ∈ {0, 3}.
>
> Combinations: (0, 0), (0, 3), (12, 0), (12, 3).
>
> Of these, *(0, 0) is the identity (order 1)*. The other three have order 2.
>
> *[pause]*
>
> *Step 2 — choose t = (12, 3).* This is the element corresponding to the *full antipodal shift* (half of 24 in col, half of 6 in row). The other order-2 elements (0, 3) and (12, 0) correspond to *partial* shifts — half-row only or half-column only.
>
> The *full antipodal involution* uses t = (12, 3) because both axes are shifted simultaneously. *This is the map that takes cells to their geometric antipodes.*
>
> *[pause]*
>
> *Step 3 — define the antipodal map as translation by t.* Define α : T² → T² by:
>
> *α(c, r) = (c, r) + t = (c + 12 mod 24, r + 3 mod 6).*
>
> *[pause]*
>
> *Step 4 — verify involution.* Compute α ∘ α:
>
> α(α(c, r)) = α(c + 12, r + 3) = (c + 12 + 12, r + 3 + 3) = (c + 24, r + 6) = (c mod 24, r mod 6) = (c, r).
>
> So α ∘ α = identity. *α has order 2.* ✓
>
> *[pause]*
>
> *Step 5 — verify bijection.* Since α is its own inverse, it's invertible. *α is a bijection.* ✓
>
> *[pause]*
>
> *Step 6 — verify group automorphism.* For (a, b), (c, d) ∈ T²:
>
> α((a, b) + (c, d)) = α(a + c, b + d) = (a + c + 12, b + d + 3).
>
> α(a, b) + α(c, d) = (a + 12, b + 3) + (c, d) = (a + c + 12, b + d + 3).
>
> *Equal.* So α(x + y) = α(x) + α(y) — wait, this needs to be α(x) + y or x + α(y)?
>
> Let me re-examine. *Translations are not group homomorphisms in general* — they don't preserve the identity. α((0, 0)) = (12, 3) ≠ (0, 0). So α is not a group homomorphism.
>
> *α is a group automorphism only of the *coset structure* of T², not of T² itself as a group.*
>
> Refined description: α is a *self-bijection* of T² that's a group element acting on T² by translation. It's not an automorphism of the group, but it's an *isometry* of the torus's natural metric and an *automorphism of the underlying set with respect to the group action*.
>
> *[pause]*
>
> *Step 7 — conclude.* Write a one-sentence conclusion:
>
> *The antipodal map α : T² → T² is translation by the order-2 element (12, 3) ∈ T². It's a self-bijection of order 2 — an involution. It exchanges polar partners on the torus surface.*
>
> *Q.E.D.*
>
> *[pause]*
>
> Three observations.
>
> *Observation one.* The construction is *purely group-theoretic*. No appeal to geometry. The map is forced once we identify the order-2 element of T².
>
> *Observation two.* There are *three* order-2 elements of T²: (0, 3), (12, 0), (12, 3). Each gives a different involution. The full antipodal map uses (12, 3); the row-flip uses (0, 3); the col-flip uses (12, 0). *Three involutions exist; we chose the one that flips both axes.*
>
> *Observation three.* The construction *generalises* to any abelian group. Order-2 elements give involutions; involutions partition the group into singletons (the identity) and pairs.
>
> Pin the construction in your notebook. The antipodal map is a small but well-formed mathematical object."

## 5. Try it (4:30–5:30)
> "Pause. Verify (12, 3) has order 2: compute 2 × (12, 3). Sixty seconds. Answer: (24, 6) ≡ (0, 0) ✓."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Hear. Marko on antipode as canonical opposite."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-424 (worked construction example).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (blank page, title).
- Music cue: focused, quiet.
