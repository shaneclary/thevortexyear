Wk 11 — Theme: Phyllotaxis & Primes — Lens 2: Count — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Show what proportion of small composites the sieve catches and what proportion slip through.

## 1. Outcome
Student can compute the catch-rate of the mod-9 sieve for small composites.

## 2. Hook (0:00–0:30)
*[Pie chart: composites caught by sieve vs. slipping through.]*

> "How effective is the sieve? Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Sieve effectiveness."

## 4. Body (1:00–4:30)

> "The mod-9 sieve catches all composites in family three (digital root 3, 6, or 9). It misses composites whose digital roots are units (1, 2, 4, 5, 7, 8).
>
> Compute the catch-rate.
>
> *Step 1 — count composites in {1, ..., 99} by digital root family.*
>
> Composites in {1, ..., 99}: 99 - 25 (primes) - 1 (the unit 1) = 73 composites.
>
> Wait, let me recount. Primes ≤ 100: 2, 3, 5, 7, 11, 13, ..., 97. There are 25 primes ≤ 100. *1* is neither prime nor composite. So composites in {1, ..., 100}: 100 - 25 - 1 = 74.
>
> Of these 74 composites, how many have digital root in family three (3, 6, 9)?
>
> Composites divisible by 3 ≤ 100: every third multiple of 3 starting from 6 (since 3 itself is prime). The multiples of 3 ≤ 100 are: 3, 6, 9, ..., 99 — that's 33 numbers, of which only *3* is prime. So 32 are composite.
>
> Plus composites that are multiples of 9 only (already counted in multiples of 3). So all 32 multiples-of-3 composites are caught by the family-three filter.
>
> Composites *not* in family three: 74 - 32 = 42 composites with unit digital roots.
>
> *Catch rate.* Sieve catches 32 of 74 composites = 43%. Misses 42 of 74 = 57%.
>
> *[pause]*
>
> So the mod-9 sieve catches *less than half* of small composites. It's a coarse filter, not a fine one.
>
> *[pause]*
>
> Compare to the *combined mod-2 and mod-3 sieve.* This catches all even composites (50% of integers) plus all multiples of 3 (33% of integers, with overlap).
>
> Total caught by mod-2 + mod-3 combined: ~67% of composites in any reasonable range.
>
> The mod-9 sieve catches only the multiples of 3 part — about 33%. Less than the combined mod-2 + mod-3 sieve.
>
> *[pause]*
>
> What the mod-9 sieve adds is *visualisation*. By placing primes at their digital-root positions on the Symbol, you see the *distribution* of primes across the units {1, 2, 4, 5, 7, 8}. The distribution is approximately uniform (each unit gets about a sixth of the primes), but there are subtle patterns.
>
> Marko's prime-number-sieve diagram displays this distribution visually. The diagram is suggestive; it doesn't replace better primality tests; it does provide a *visual handle* on prime placement that classical sieves don't."

## 5. Try it (4:30–5:30)
> "Pause. Verify: of the 25 primes ≤ 100, how many fall in each unit-class? Roughly equal — about 4 each. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. The Rodin prime-number sieve."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-239 (catch-rate visualisation).
- Music cue: precise.
