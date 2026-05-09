Wk 07 — Theme: Family Number Groups — Lens 6: Apply — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Coset-membership tests for fast reduction. Specifically: identify family by residue mod 3 of digital root; use this to predict reduction outcomes faster than digit-summing.

## 1. Outcome
Student can apply coset-membership tests to predict reduction outcomes.

## 2. Hook (0:00–0:30)
*[Number 247: residue 1 mod 3 → family 1.]*

> "Coset membership = residue mod 3. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply."

## 4. Body (1:00–4:30)

> "The Family Number Groups are residue classes modulo 3 of the digital roots. So testing family membership is equivalent to *digit-summing then reducing modulo 3*.
>
> Faster: *digit-summing modulo 3 directly*. Sum the digits of a number; reduce the sum modulo 3 (not modulo 9). The result tells you the family.
>
> Why: the digital root mod 3 equals the digit sum mod 3, because each digit's residue mod 3 contributes to the total residue mod 3. Reducing modulo 9 then modulo 3 gives the same answer as reducing modulo 3 directly.
>
> *[pause]*
>
> Three uses.
>
> *Use one — fast doubling-fate prediction.* Recall from Mod-A Lens 6: family three numbers don't enter the doubling cycle. So *if you only need to know whether a number enters the doubling cycle*, compute *digit sum mod 3*. If the result is 0, the number is in family three (won't enter the cycle). Otherwise, it enters.
>
> Example: 1989. Digit sum: 27. *27 mod 3 = 0*. Family three. Confirmed: 1989 reduces to 9, doesn't enter the cycle.
>
> *Use two — fast multiplication-fate prediction.* When multiplying two numbers with digital roots in families F₁ and F₂, the product's digital root is in family *F₁ × F₂* (using the multiplicative structure on the families). The 3×3 multiplication table on the families predicts the result's family without needing the full digital root.
>
> *Use three — divisibility-by-3 testing.* A number is divisible by 3 if and only if its digital root is in family three (i.e., is 3, 6, or 9). The family-three test is faster than full digital-root reduction when you only need divisibility-by-3.
>
> *[pause]*
>
> One unification. *Casting out nines* (digit-summing for mod-9 verification) generalises to *casting out threes* (digit-summing modulo 3) for family-membership verification. Same principle, smaller modulus.
>
> *[pause]*
>
> Practical application. When verifying a long arithmetic computation, you can do *both* mod-9 and mod-3 checksum verifications. Mod-9 catches most errors; mod-3 (family-membership check) catches some that mod-9 misses (specifically, errors that change the digital root by 3 or 6 — which mod-9 verification doesn't catch but family-shift verification does)."

## 5. Try it (4:30–5:30)
> "Pause. For three numbers, compute digit-sum-mod-3 directly. Identify the family. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. Cosets vs. equivalence classes."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-172 (three uses).
- Music cue: applied.
