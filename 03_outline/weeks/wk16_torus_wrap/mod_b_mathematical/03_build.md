Wk 16 — Theme: Wrapping to a Torus — Lens 3: Build — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Construct the quotient (ℤ/24ℤ) × (ℤ/6ℤ) unaided. Formal derivation of the discrete torus.

## 1. Outcome
Student writes a derivation of the discrete torus as the quotient (ℤ/6ℤ) × (ℤ/24ℤ).

## 2. Hook (0:00–0:30)
*[A blank notebook page titled "The discrete torus — quotient construction".]*

> "The torus, from group axioms. Five minutes."

## 3. Setup (0:30–1:00)
> "Lens 3 of 9. Construct the discrete torus from quotient axioms."

## 4. Body (1:00–4:30)

> "Today's build is a derivation. You write the discrete torus as a quotient group on a blank page, unaided.
>
> Open your notebook. Title the page *The discrete torus — quotient construction*.
>
> *[pause]*
>
> *Step 1 — state the starting structure.* Write:
>
> *Starting structure: ℤ × ℤ.* The set of all integer pairs (r, c). Forms a free abelian group of rank 2 under coordinatewise addition.
>
> *[pause]*
>
> *Step 2 — define the lattice subgroup.* Write:
>
> *Lattice subgroup: 6ℤ × 24ℤ.* The set of integer pairs of form (6m, 24n) for m, n ∈ ℤ. Forms a subgroup of ℤ × ℤ under coordinatewise addition.
>
> Check: closure under addition: (6m₁, 24n₁) + (6m₂, 24n₂) = (6(m₁+m₂), 24(n₁+n₂)). ✓
>
> Check: contains identity: (6·0, 24·0) = (0, 0). ✓
>
> Check: inverses: −(6m, 24n) = (−6m, −24n) = (6(−m), 24(−n)). ✓
>
> *[pause]*
>
> *Step 3 — define the quotient.* Write:
>
> *Quotient group: T := (ℤ × ℤ) / (6ℤ × 24ℤ).*
>
> Elements of T are equivalence classes [(r, c)] where (r₁, c₁) ~ (r₂, c₂) ⟺ (r₁ − r₂, c₁ − c₂) ∈ 6ℤ × 24ℤ.
>
> Equivalently: r₁ ≡ r₂ (mod 6) AND c₁ ≡ c₂ (mod 24).
>
> *[pause]*
>
> *Step 4 — identify with familiar group.* Write:
>
> *Quotient identification: T ≅ ℤ/6ℤ × ℤ/24ℤ.*
>
> *Sub-proof.* The map φ : (ℤ × ℤ) → ℤ/6ℤ × ℤ/24ℤ defined by φ(r, c) = (r mod 6, c mod 24) is a surjective group homomorphism with kernel exactly 6ℤ × 24ℤ. By the first isomorphism theorem, T ≅ ℤ/6ℤ × ℤ/24ℤ.
>
> *[pause]*
>
> *Step 5 — count and verify.* Write:
>
> *Order: |T| = |ℤ/6ℤ| × |ℤ/24ℤ| = 6 × 24 = 144.*
>
> *T is a finite abelian group of order 144.*
>
> Cell at coordinate (r, c) on the discrete torus corresponds to the equivalence class [(r mod 6, c mod 24)].
>
> *[pause]*
>
> *Step 6 — connect to the geometry.* Write:
>
> *The discrete torus T is the integer-cell substructure of the continuous torus T² = ℝ² / (6ℝ × 24ℝ). Both have the same fundamental domain (the 6×24 strip with edges identified).*
>
> The continuous torus is a 2D surface; the discrete torus is the set of 144 cells on that surface.
>
> *[pause]*
>
> *Step 7 — conclude.* Write a one-sentence conclusion:
>
> *The discrete torus T = ℤ/6ℤ × ℤ/24ℤ is a finite abelian group of order 144, isomorphic to the integer-cell quotient of ℝ² by the lattice 6ℤ × 24ℤ, with cells indexed by (r, c) for r ∈ {0, …, 5} and c ∈ {0, …, 23}.*
>
> *Q.E.D.*
>
> *[pause]*
>
> *What just happened.* You wrote a complete construction of the discrete torus from group-theoretic first principles. About two hundred words. The construction is short because the underlying mathematics is small — ℤ/6ℤ × ℤ/24ℤ is one of the simplest non-trivial finite abelian groups.
>
> *[pause]*
>
> Three observations.
>
> *Observation one.* The torus is *constructed*, not described. Mod A described it visually; Mod B constructs it formally. Both are correct; the constructive version makes the underpinnings explicit.
>
> *Observation two.* The construction generalises. For any modulus pair (m, n), define T_{m,n} := ℤ/mℤ × ℤ/nℤ. For (6, 24): order 144. For (3, 16) (mod 7 with Pisano period 16): order 48. *Different moduli, different tori.*
>
> *Observation three.* The torus is *familiar mathematics*. Group-theoretic torus constructions appear in algebraic topology, number theory, and applied mathematics. The Number Map's torus is a particular small instance of this family.
>
> Pin the construction in your notebook. The torus is now formally yours."

## 5. Try it (4:30–5:30)
> "Pause. Write at least the first three steps. Sixty seconds; finish tonight."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Hear. Marko on the torus as natural."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-352 (worked construction example).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (blank page, title).
- Music cue: focused, quiet.
