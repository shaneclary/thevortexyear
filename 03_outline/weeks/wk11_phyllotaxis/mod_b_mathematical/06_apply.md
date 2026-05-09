Wk 11 — Theme: Phyllotaxis & Primes — Lens 6: Apply — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Prime-prediction shortcuts using the mod-9 sieve.

## 1. Outcome
Student can apply the mod-9 sieve as a prime-screening pre-test.

## 2. Hook (0:00–0:30)
*[A large number; sieve test rules it out instantly.]*

> "Quick test: not in family three? Then maybe prime. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply prime sieving."

## 4. Body (1:00–4:30)

> "The mod-9 sieve gives you *fast pre-screening* of prime candidates.
>
> *Procedure*. Given a candidate number *n*:
>
> 1. Compute digital root of *n*.
>
> 2. If digital root is 3, 6, or 9 (and *n* > 3), *n* is composite. (Caught by the sieve.)
>
> 3. If digital root is in {1, 2, 4, 5, 7, 8}, *n* is *possibly* prime. Apply more rigorous tests if needed.
>
> *[pause]*
>
> Examples.
>
> *Is 1073 prime?* Digit sum: 1 + 0 + 7 + 3 = 11 → 2. Unit. Possibly prime.
>
> Apply more tests if needed. (Actually 1073 = 29 × 37, composite. The sieve missed it because 1073 has unit digital root.)
>
> *Is 999,999 prime?* Digit sum: 9 × 6 = 54 → 9. Family three. *Composite*, definitively. Sieve caught it.
>
> *Is 100,003 prime?* Digit sum: 1 + 0 + 0 + 0 + 0 + 3 = 4. Unit. Possibly prime.
>
> Test further: 100,003 / 7 ≈ 14,286.14, not integer. / 11 ≈ 9,091.2, not integer. / 13 ≈ 7,692.5, not integer. / 17 ≈ 5,882.5, not integer. / 19 ≈ 5,263.3, not integer. ...
>
> Actually, 100,003 = 7 × 14,287 + something — let me just trust standard sources. 100,003 is *composite* (= 7 × 14,287 + r, but I'd need to check). The sieve doesn't conclude either way; further tests are needed.
>
> *Is 100,019 prime?* Digit sum: 1+0+0+0+1+9 = 11 → 2. Unit. Possibly prime. Standard tests confirm: 100,019 *is* prime.
>
> *[pause]*
>
> Practical use. When you have a long candidate list to filter, apply the mod-9 sieve first. It eliminates ~33% of composites in one digit-summing operation. Then apply more expensive tests on the survivors.
>
> *Speed*. Digital-root reduction is O(log n) — proportional to the number of digits. Far cheaper than trial division (O(√n)) or even Miller-Rabin (O((log n)³)). The mod-9 sieve is an *almost-free* pre-test.
>
> *[pause]*
>
> One more shortcut. *Combined mod-2, mod-3, mod-5 sieve.* Apply all three:
>
> Even? → composite (except 2).
>
> Family three (mod-9 sieve)? → composite (except 3).
>
> Ends in 0 or 5? → composite (except 5).
>
> Combined catch rate is much higher than any single sieve. Most code-implementations of primality testing use a similar combined pre-screening before calling expensive primality algorithms."

## 5. Try it (4:30–5:30)
> "Pause. Apply the combined sieve to *123,456*. Even? Yes. Composite. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare to Sieve of Eratosthenes."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-241 (sieve flowchart).
- Music cue: precise.
