Wk 09 — Theme: Powers of Ten & Scale Invariance — Lens 7: Compare — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Compare scale invariance across bases. *base-b ≡ 1 mod (b-1)* for all bases.

## 1. Outcome
Student can compute the scale invariance modulus for any base.

## 2. Hook (0:00–0:30)
*[Table: base 2 / mod 1, base 8 / mod 7, base 10 / mod 9, base 12 / mod 11, base 16 / mod 15.]*

> "Every base has its scale invariance. Today: the table."

## 3. Setup (0:30–1:00)
> "Lens 7 of 9. Compare across bases."

## 4. Body (1:00–4:30)

> "*Scale invariance under digital-root reduction* is a property of base-*b* arithmetic where the digit-summing operation reduces modulo *b−1*. Each base has its own version.
>
> *Binary (base 2).* Modulus is *2−1 = 1*. *2ᵏ ≡ 1 mod 1* for all *k*. Trivially true (everything is congruent mod 1). Scale invariance exists but is trivial.
>
> *Octal (base 8).* Modulus is *7*. *8ᵏ ≡ 1 mod 7* — verify: *8 = 7 + 1, so 8 ≡ 1 mod 7*. Scale invariance holds; modulus 7 is prime; doubling cycle in `(ℤ/7ℤ)*` has length 3 (the orbit of 2 mod 7).
>
> *Decimal (base 10).* Modulus is *9*. *10ᵏ ≡ 1 mod 9*. Our case. Modulus 9 = 3² is composite; rich structure follows.
>
> *Base 12 (duodecimal).* Modulus is *11*. *12ᵏ ≡ 1 mod 11*. Modulus 11 is prime; multiplicative group `(ℤ/11ℤ)*` has 10 elements; doubling cycle has length 10.
>
> *Hexadecimal (base 16).* Modulus is *15 = 3 × 5*. *16ᵏ ≡ 1 mod 15*. Modulus 15 is composite; structure is richer than primes; non-units are {0, 3, 5, 6, 9, 10, 12}.
>
> *[pause]*
>
> Pattern. *In base b, the modulus for scale invariance is b−1. The structure of the multiplicative group (ℤ/(b-1)ℤ)* determines the orbits and substructures.*
>
> Different bases give *qualitatively different structures*:
>
> Prime modulus (e.g., base 8 / mod 7, base 12 / mod 11) — clean cyclic group, no proper subgroups except identity, no non-trivial ideals.
>
> Composite modulus with prime power (e.g., base 10 / mod 9 = 3²) — non-trivial ideal, family-group structure, 3-6-9-style trinary.
>
> Composite modulus with multiple primes (e.g., base 16 / mod 15 = 3 × 5) — multiple ideals, more complex coset structure.
>
> *[pause]*
>
> What's specific to base 10. Mod 9 = 3² has *exactly one composite-prime-power factorisation*. The single ideal {0, 3, 6} is structurally simple. The Doubling Circuit visits 6 of 9 residues — a clean ratio. The Symbol's geometry has three-fold symmetry tied to the prime 3.
>
> Base 10 sits in a sweet spot: composite enough for rich structure, simple enough for clean visualisation. Most bases either give too-simple structure (primes) or too-complex (multiple-prime composites).
>
> *[pause]*
>
> Useful framing. *Every base has scale invariance via b ≡ 1 mod (b-1). What's specific to base 10 is the modulus 9's structural sweet spot — composite enough to have non-trivial substructure, simple enough to visualise cleanly.*"

## 5. Try it (4:30–5:30)
> "Pause. Compute the doubling-cycle in base 12 (mod 11). Start at 1: 1, 2, 4, 8, 16 → 5, 10, 20 → 9, 18 → 7, 14 → 3, 6, 12 → 1. Cycle length 10. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Defend."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-206 (base-modulus table).
- Music cue: bookish.
