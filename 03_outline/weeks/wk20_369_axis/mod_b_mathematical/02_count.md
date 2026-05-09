Wk 20 — Theme: The 3-6-9 Axis (Orthogonal) — Lens 2: Count — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Prove 2ⁿ never hits 3ℤ mod 9. The structural proof that family 3 is unreachable from doubling.

## 1. Outcome
Student can prove formally that 2ⁿ ∉ 3ℤ/9ℤ for any n ≥ 0.

## 2. Hook (0:00–0:30)
*[A theorem statement: "For all n ≥ 0, 2ⁿ mod 9 ∉ {0, 3, 6}."]*

> "Theorem. Five-line proof. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Prove unreachability formally."

## 4. Body (1:00–4:30)

> "Today's count is a small theorem. The doubling cycle never reaches family 3, and the proof comes directly from mainstream group theory.
>
> *[pause]*
>
> *State the claim.* For every non-negative integer n, 2ⁿ mod 9 ∈ {1, 2, 4, 5, 7, 8}. Equivalently, 2ⁿ mod 9 is never 0, 3, or 6.
>
> *[pause]*
>
> *Proof — Method 1 (group theory).*
>
> *Step 1.* The set {1, 2, 4, 5, 7, 8} = (ℤ/9ℤ)*, the multiplicative group of units of ℤ/9ℤ.
>
> *Step 2.* (ℤ/9ℤ)* is a *group under multiplication*. Closure: a × b ∈ (ℤ/9ℤ)* whenever a, b ∈ (ℤ/9ℤ)*.
>
> *Step 3.* 2 ∈ (ℤ/9ℤ)* (since gcd(2, 9) = 1).
>
> *Step 4.* By induction on n: 2⁰ = 1 ∈ (ℤ/9ℤ)*. If 2ⁿ ∈ (ℤ/9ℤ)*, then 2ⁿ⁺¹ = 2 × 2ⁿ ∈ (ℤ/9ℤ)* by closure.
>
> *Step 5.* Therefore 2ⁿ ∈ (ℤ/9ℤ)* for all n ≥ 0.
>
> Since {0, 3, 6} ∉ (ℤ/9ℤ)*, we have 2ⁿ ≠ 0, 3, 6 for all n. ✓
>
> *Q.E.D.*
>
> *[pause]*
>
> *Proof — Method 2 (Fermat-like / order argument).*
>
> *Step 1.* The order of 2 in (ℤ/9ℤ)* is 6 (Wk 4). So 2⁶ ≡ 1 mod 9, and 2ⁿ depends only on n mod 6.
>
> *Step 2.* Compute 2ⁿ mod 9 for n = 0, 1, 2, 3, 4, 5: respectively 1, 2, 4, 8, 7, 5. *None of these is in {0, 3, 6}.*
>
> *Step 3.* For n ≥ 6, 2ⁿ = 2^{n mod 6}, which is one of the six values above. *Still none in {0, 3, 6}.*
>
> *Q.E.D.*
>
> *[pause]*
>
> *Why both methods work.*
>
> *Method 1* (group theory) is *general* — it shows the structural reason. The doubling permutes within the unit group; non-units are outside the group's reach. *This is the deep reason.*
>
> *Method 2* (direct check + period reasoning) is *concrete* — it computes the answer. *This is the verification.*
>
> Both proofs converge on the same conclusion. *Doubling can't reach family 3.*
>
> *[pause]*
>
> *Generalisation.*
>
> The theorem generalises. For any prime p and any element a in (ℤ/pℤ)*, the orbit of a stays in (ℤ/pℤ)*; non-units are unreachable.
>
> For mod 9 specifically: family 3 = {0, 3, 6} = 3ℤ/9ℤ. The non-units form a *subgroup of the additive group* (under +) but are *not in the multiplicative group*.
>
> *Direct sum decomposition.* ℤ/9ℤ ≅ (ℤ/3ℤ × ℤ/3ℤ) is *not* the right way to think; rather:
>
> ℤ/9ℤ = (ℤ/9ℤ)* ⊔ {0, 3, 6} as sets (disjoint union)
>
> with the unit group having 6 elements and the non-units having 3.
>
> 6 + 3 = 9 ✓. Total elements of ℤ/9ℤ: nine.
>
> *[pause]*
>
> Three observations.
>
> *Observation one.* The proof is *elementary*. Two-line group-theoretic argument; no advanced machinery.
>
> *Observation two.* The proof is *generic*. The same reasoning works for any modulus and any starting element. Different moduli give different unit groups; non-units are always unreachable from units.
>
> *Observation three.* The proof connects to the structural axis claim. *Family 3 unreachable from doubling* is the algebraic content of *family 3 isn't on the surface*. Geometry follows from algebra.
>
> *[pause]*
>
> Practical takeaway. *Memorise the two-line group argument: 2 is a unit; multiplication preserves units; therefore 2ⁿ is a unit for all n.* This is the cleanest defence of the surface-axis partition."

## 5. Try it (4:30–5:30)
> "Pause. Write the two-line group-theoretic proof in your notebook. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. Construct the orthogonal axis formally."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-447 (worked proof both methods).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (theorem statement).
- Music cue: focused, quiet.
