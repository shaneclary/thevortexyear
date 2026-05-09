Wk 11 — Theme: Phyllotaxis & Primes — Lens 8: Defend — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft. **`[ORG-REVIEW]`**

---

## 0. Authoring notes
Thirty-second Defend. Show the mod-9 sieve catches all small composites in family three.

## 1. Outcome
Student can defend the sieve's correctness via direct verification.

## 2. Hook (0:00–0:30)
*[One line.]*

> "*Does the sieve actually catch them?* Today: verification."

## 3. Setup (0:30–1:00)
> "Lens 8 of 9. Verify the sieve."

## 4. Body (1:00–4:30)

> "The objection. *The Rodin mod-9 sieve claims to catch all composites in family three. Is this actually true? Has it been verified?*
>
> The objection is one of *correctness* rather than significance. Let's verify.
>
> *Theorem.* Any integer *n* with digital root in {3, 6, 9} (i.e., *n ≡ 0 mod 3*) is divisible by 3, hence composite (if *n > 3*).
>
> *Proof.* If *n* has digital root 3, 6, or 9, then *n ≡ 0 (mod 3)* (because the digital root mod 3 equals the digit sum mod 3 equals the original number mod 3). Therefore 3 divides *n*. If *n > 3*, then *n* has a divisor (3) other than 1 and itself; *n* is composite.
>
> The proof is one line of modular arithmetic. The sieve catches all family-three composites.
>
> *[pause]*
>
> Verification by example. Numbers with digital root 3, 6, or 9 in the range 1-100:
>
> 3 (prime), 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99.
>
> Total: 33 numbers. Of these, only 3 is prime. The other 32 are composite. The sieve correctly catches all 32.
>
> *[pause]*
>
> What the sieve doesn't catch.
>
> *Composites with unit digital roots.* Examples: 25 (= 5²), 35 (= 5×7), 49 (= 7²), 55 (= 5×11), 65 (= 5×13), 77 (= 7×11), 85 (= 5×17), 91 (= 7×13), 95 (= 5×19). These all have digital roots in {1, 2, 4, 5, 7, 8} and are composite.
>
> The sieve passes them through. Further tests needed.
>
> *[pause]*
>
> So the calibrated answer to *does the sieve catch what it claims?*:
>
> *Yes. The mod-9 sieve catches all family-three composites by direct number-theoretic proof: digital root in family three implies divisibility by 3, hence composite for n > 3. The proof is one line; verification is straightforward. The sieve does not catch unit-rooted composites; those require further tests.*
>
> Forty-eight words.
>
> *[pause]*
>
> Practical takeaway. The sieve's correctness is provable. Its limitations (catching only ~33% of composites) are clearly understood. Use it as designed: as a fast pre-screen, not as a primality proof."

## 5. Try it (4:30–5:30)
> "Pause. Verify: 999 has digital root 9, so it's composite. *999 = 3 × 333 = 27 × 37*. Confirmed. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Connect."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-243 (calibrated-answer card, thirty-second).
- **`[ORG-REVIEW]`**.
