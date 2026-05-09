Wk 11 — Theme: Phyllotaxis & Primes — Lens 1: See — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
The mod-9 prime sieve. Show how digit-root tests filter composites.

## 1. Outcome
Student can apply digital-root tests to filter composites from candidate primes.

## 2. Hook (0:00–0:30)
*[A list of integers; some highlighted as primes. Their digital roots circled.]*

> "Digit roots filter composites. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 1 of 9, Module B. Prime sieving via digital roots."

## 4. Body (1:00–4:30)

> "Primes greater than 3 are *not divisible by 3*. So their digital roots are *not in family three*: not 3, 6, or 9.
>
> Primes greater than 3 are *not even* (with the exception of 2). So their digital roots are *not even multiples of anything special* — actually, parity isn't directly captured by digital root, since *2 → 2, 4 → 4, 6 → 6, 8 → 8* — even numbers can have any digital root.
>
> So *the primary digital-root filter for primes > 3 is: roots in {1, 2, 4, 5, 7, 8} = the units of `(ℤ/9ℤ)*`*.
>
> *[pause]*
>
> Verify: small primes and their digital roots.
>
> *5 → 5.* Unit ✓
>
> *7 → 7.* Unit ✓
>
> *11 → 2.* Unit ✓
>
> *13 → 4.* Unit ✓
>
> *17 → 8.* Unit ✓
>
> *19 → 1.* Unit ✓
>
> *23 → 5.* Unit ✓
>
> *29 → 2.* Unit ✓
>
> *31 → 4.* Unit ✓
>
> *37 → 1.* Unit ✓
>
> *41 → 5.* Unit ✓
>
> *43 → 7.* Unit ✓
>
> *47 → 2.* Unit ✓
>
> *53 → 8.* Unit ✓
>
> *59 → 5.* Unit ✓
>
> All units. (Including the special primes: *2 → 2, 3 → 3.* Note 3 is *not* a unit; it's the only prime in family 3.)
>
> *[pause]*
>
> So the *Mod-9 sieve* eliminates candidates with digital roots 3, 6, or 9 (except for the prime 3 itself). This is *one filter* among several for primality testing — much weaker than full primality tests, but extremely cheap.
>
> *[pause]*
>
> What it does *not* do. The sieve doesn't *prove* primality. Numbers with unit digital roots can still be composite. Examples: *25 → 7* (composite, 5²); *49 → 4* (composite, 7²); *35 → 8* (composite, 5×7).
>
> So the sieve is a *necessary but not sufficient* condition for primality. Composites can pass; primes cannot fail (except 3).
>
> *[pause]*
>
> Mathematical name. *Reduction modulo 9 as a primality pre-test*. Standard number theory; nothing exotic. Marko's contribution is *visualising the sieve on the Symbol* — placing primes at their digital-root vertices and observing the pattern."

## 5. Try it (4:30–5:30)
> "Pause. Verify two primes' digital roots: *61* and *67*. Sixty seconds."

*[Pause card.]*

> "Welcome back. *61 → 7. 67 → 4.* Both units."

## 6. Bridge (5:30–6:00)
> "Next: Count. Sieve effectiveness."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-238 (primes with digital roots).
- Music cue: precise.
