Wk 11 — Theme: Phyllotaxis & Primes — Lens 7: Compare — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Compare Rodin sieve to Sieve of Eratosthenes.

## 1. Outcome
Student can compare Rodin's mod-9 sieve to the classical Sieve of Eratosthenes.

## 2. Hook (0:00–0:30)
*[Two sieves side by side.]*

> "Two sieves. Same goal. Different approach."

## 3. Setup (0:30–1:00)
> "Lens 7 of 9. Compare."

## 4. Body (1:00–4:30)

> "*Sieve of Eratosthenes (classical).* Algorithm to find all primes up to *n*. Start with the list 2, 3, 4, ..., *n*. Mark 2 as prime; cross out all multiples of 2. Mark next unmarked number (3) as prime; cross out all multiples of 3. Continue until the next unmarked number exceeds √n. The remaining unmarked numbers are all primes.
>
> The Sieve of Eratosthenes is the *gold standard* for finding small primes. Cost: O(n log log n) for primes up to n.
>
> *Rodin sieve (mod-9).* Reduce candidate to digital root. If root is in family three (3, 6, 9), reject. Otherwise candidate may be prime; further tests needed.
>
> The Rodin sieve is a *necessary-but-not-sufficient pre-screen*. It rejects ~33% of composites instantly but doesn't prove primality.
>
> *[pause]*
>
> Three differences.
>
> *Difference one — completeness.* Sieve of Eratosthenes is *complete* — produces all primes ≤ n. Rodin sieve is *incomplete* — only filters family-three composites.
>
> *Difference two — cost.* Sieve of Eratosthenes is more expensive but produces a complete answer. Rodin sieve is far cheaper but produces only a partial filter.
>
> *Difference three — what they reveal.* Sieve of Eratosthenes reveals *which numbers are prime*. Rodin sieve reveals *the family-3 exclusion of primes > 3* — a structural fact about prime distribution.
>
> *[pause]*
>
> They serve different purposes.
>
> Use Sieve of Eratosthenes when you need to *enumerate primes up to a bound*. Use Rodin sieve when you need to *quickly screen candidates* before applying more expensive tests.
>
> Most modern primality-testing implementations use *both* — Eratosthenes-style pre-computed small-prime tables for small candidates, modular pre-screening (which includes mod-9, mod-2, mod-3, mod-5) for larger candidates, then Miller-Rabin or AKS for the actual primality test.
>
> *[pause]*
>
> Rodin's contribution. The mod-9 component of modern primality pre-screening is well-known to algorithmics. What Marko adds is *the visualisation* of the mod-9 sieve as a phyllotactic spiral with primes plotted at their unit positions. The visualisation is pedagogically distinctive; the underlying mathematics is standard.
>
> Useful framing for an algorithmist. *Marko's prime sieve is the visualisation of mod-9 pre-screening on a phyllotactic spiral. The pre-screen is standard; the visualisation is Marko-specific.*"

## 5. Try it (4:30–5:30)
> "Pause. Apply Sieve of Eratosthenes to find primes up to 30. Then apply mod-9 pre-screen to the list 1-30. Compare. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Defend."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-242 (two sieves).
- Music cue: bookish.
