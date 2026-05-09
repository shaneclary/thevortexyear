Wk 08 — Theme: The 3-6-9 Pulse — Lens 6: Apply — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
3-6-9 coset arithmetic shortcuts — practical computational use of the family-three structure.

## 1. Outcome
Student can apply 3-6-9 family identification as a fast computation shortcut.

## 2. Hook (0:00–0:30)
*[A long arithmetic computation. Recognise 3-6-9 family. Skip computation.]*

> "Recognise the family, skip the math. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply."

## 4. Body (1:00–4:30)

> "When you can identify a number's family quickly, the 3-6-9 family in particular gives you several computational shortcuts.
>
> *Shortcut one — divisibility by 3 testing.* A number is divisible by 3 if and only if its digital root is in family three (i.e., is 3, 6, or 9). The check is *digit-sum-divisible-by-3*. This is the most familiar version of casting out threes.
>
> *Shortcut two — products with multiples of 3.* If you're multiplying *m × n* and you know *n* is in family three (divisible by 3), then *the product is divisible by 3*. The product's family is family three. Useful for: estimating remainders, verifying products, identifying multiples-of-3 in large numbers.
>
> *Shortcut three — products that collapse.* If both *m* and *n* are in family three (both divisible by 3), then *the product is divisible by 9*. The product's digital root is 9. *Mod 9, the product collapses to 9.* This is a faster check than full digit-summing.
>
> *Shortcut four — sums involving family three.* Adding any element of family three to anything doesn't change the digital root mod 3 — only the residue mod 9 within the family changes. Useful for distinguishing family-3 contributions from family-1 or family-2 contributions in a sum.
>
> *[pause]*
>
> Worked example. Compute *147 × 36 mod 9* without doing the full multiplication.
>
> Step 1: family of 147. Digit sum: *1 + 4 + 7 = 12*. *12 mod 3 = 0*, so 147 is in family three.
>
> Step 2: family of 36. Digit sum: *3 + 6 = 9*. *9 mod 3 = 0*, so 36 is also in family three.
>
> Step 3: shortcut three says the product is divisible by 9, so its digital root is 9.
>
> Verify: *147 × 36 = 5292*. Digit sum: *5 + 2 + 9 + 2 = 18 → 9*. Confirmed.
>
> The shortcut saved you from computing the full product. Family identification was the only computation needed.
>
> *[pause]*
>
> Practical use cases.
>
> *Mental arithmetic.* When approximating large products, family identification gives you a fast estimate of the digital root. Useful for verifying mental calculations.
>
> *Algorithm design.* When writing checksums or hashes that need to be fast, family identification gives a quick partial-checksum that's faster than full digit-summing.
>
> *Pattern recognition.* In sequences of numbers, identifying which are in family three quickly tells you which are multiples of 3 — useful for pattern-finding tasks."

## 5. Try it (4:30–5:30)
> "Pause. Test shortcut three on a product of two family-three numbers from your day. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-187 (four shortcuts).
- Music cue: clever.
