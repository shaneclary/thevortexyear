Wk 17 — Theme: The ABHA Torus — Surface Structure — Lens 2: Count — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Prove the (col, row) coordinate is well-defined. The proof that wrap-equivalence preserves the coordinate identity.

## 1. Outcome
Student can prove the (col, row) coordinate is well-defined modulo the wrap equivalence.

## 2. Hook (0:00–0:30)
*[A point with two equivalent (col, row) representations on the wrap edges, joined by an arrow.]*

> "One point. Multiple labels. Equivalent. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Prove the coordinate is well-defined."

## 4. Body (1:00–4:30)

> "Today's count is a small proof. The (col, row) coordinate is *well-defined* because the wrap equivalences preserve coordinate values modulo their respective periods.
>
> *[pause]*
>
> *State the claim.* Define col : T² → ℤ/24ℤ and row : T² → ℤ/6ℤ as the column and row indices reduced by 24 and 6 respectively. *These functions are well-defined on T² (i.e., they don't depend on the representative chosen for an equivalence class).*
>
> *[pause]*
>
> *Set up the proof.*
>
> A point p on T² is an equivalence class [(c, r)] where (c, r) ∈ ℤ × ℤ. Two integer pairs (c₁, r₁) and (c₂, r₂) are *equivalent* if and only if:
>
> c₁ − c₂ ∈ 24ℤ AND r₁ − r₂ ∈ 6ℤ.
>
> Equivalently: c₁ ≡ c₂ (mod 24) AND r₁ ≡ r₂ (mod 6).
>
> Define col(p) := (c mod 24) and row(p) := (r mod 6) for any (c, r) representing p.
>
> *Claim.* col(p) and row(p) don't depend on the choice of representative.
>
> *[pause]*
>
> *Proof.*
>
> Suppose p has two representatives: p = [(c₁, r₁)] = [(c₂, r₂)].
>
> Then by definition of equivalence: c₁ ≡ c₂ (mod 24) and r₁ ≡ r₂ (mod 6).
>
> So c₁ mod 24 = c₂ mod 24, which gives col(p) the same value regardless.
>
> And r₁ mod 6 = r₂ mod 6, which gives row(p) the same value regardless.
>
> Therefore col and row are well-defined on T². ✓
>
> *Q.E.D.*
>
> *[pause]*
>
> *That's the entire proof.* Two lines. The well-definedness follows directly from the definition of equivalence and the definition of col/row.
>
> *[pause]*
>
> *Why this matters.*
>
> *Matter one — coordinate consistency.* Without well-definedness, asking 'what's the col of this point?' could give different answers depending on which representative you happen to pick. With well-definedness, the question has a unique answer.
>
> *Matter two — geometric soundness.* The torus's coordinate atlas is *internally consistent*. Differential geometry on the torus — gradients, integrals, vector fields — can use these coordinates without breaking.
>
> *Matter three — engineering applicability.* When a builder asks 'what's the coordinate at this position?', the answer is unambiguous. *Communication between builders is well-defined.*
>
> *[pause]*
>
> *Three observations.*
>
> *Observation one.* The well-definedness proof is *mechanical* once the equivalence relation is given. This pattern — define a function on representatives; show it's invariant under equivalence — is *standard* in mathematics. It's the proof structure for: residue functions, quotient-group operations, equivalence-class cardinality.
>
> *Observation two.* The proof *depends on having stated the equivalence relation precisely*. Mod A's informal wrap is now justified rigorously. *Mod B's formality earns Mod A's intuition.*
>
> *Observation three.* The proof generalises. For any quotient space M / ~, a function f : M → X passes to f̄ : (M / ~) → X if and only if f is *constant on equivalence classes*. The col/row case is one specific application.
>
> *[pause]*
>
> *Practical takeaway.* The (col, row) coordinate is mathematically airtight. When you address a cell as 'cell (3, 2)', you're using a function whose value doesn't depend on representation. Communication is unambiguous; arithmetic is reliable.
>
> Two lines of proof for an important property. The torus pays the small price of well-definedness; it earns the large benefit of consistent coordinates."

## 5. Try it (4:30–5:30)
> "Pause. Write the two-line well-definedness proof. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. Construct the coordinate transformation."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-375 (worked well-definedness proof).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (point with multiple representatives).
- Music cue: focused, quiet.
