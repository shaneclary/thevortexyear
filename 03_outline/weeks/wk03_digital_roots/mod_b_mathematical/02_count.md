Wk 03 — Theme: Digital Roots & Mod-9 — Lens 2: Count — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
The formal two-line proof: `n ≡ digit_sum(n) (mod 9)`. Use sigma notation. Walk through it slowly enough that a student with high-school algebra can follow. The proof is short — most of the lesson is unpacking what the two lines say.

## 1. Outcome
By the end of these 6 minutes, the student has the formal proof of `n ≡ digit_sum(n) (mod 9)` written in their notebook.

## 2. Hook (0:00–0:30)
*[On screen: two lines of mathematics. Line 1: `n = Σ dᵢ · 10ⁱ`. Line 2: `n ≡ Σ dᵢ (mod 9)` because `10ⁱ ≡ 1 (mod 9)`.]*

> "Two lines. That's the proof. Six minutes to unpack what they say."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Yesterday we saw the picture. Today we write it formally. The proof is short; the unpacking is the lesson."

## 4. Body (1:00–4:30)

> "Here's the proof. Two lines.
>
> *[Display Line 1: n = Σᵢ dᵢ · 10ⁱ, sum from i=0 to k]*
>
> Line one says: any whole number *n* can be written as the sum, over its digit positions *i*, of the digit *dᵢ* times *10* to the power *i*. This is just base-10 notation, written formally. The number 365 has digits *d₀ = 5*, *d₁ = 6*, *d₂ = 3*, and *365 = 5·10⁰ + 6·10¹ + 3·10²*. Sigma notation collapses that into a single expression: *n equals the sum, over i from zero to k, of d-sub-i times ten to the i*.
>
> *[pause]*
>
> *[Display Line 2: n ≡ Σᵢ dᵢ (mod 9) because 10ⁱ ≡ 1 (mod 9)]*
>
> Line two says: take both sides of line one modulo 9. On the right side, each *10ⁱ* gets replaced by *1ⁱ*, which is just 1. So the right side becomes *Σᵢ dᵢ · 1*, which is *Σᵢ dᵢ* — the digit-sum. The left side stays *n mod 9*. So *n mod 9 equals the digit-sum of n mod 9*.
>
> The hinge is *10ⁱ ≡ 1 (mod 9)*. This holds because *10 ≡ 1 (mod 9)* — ten leaves remainder one when divided by nine — and any power of one is one. So *10⁰ = 1, 10¹ = 10 ≡ 1, 10² = 100 ≡ 1, 10³ = 1000 ≡ 1*, all the way up. Every power of ten reduces to one modulo nine.
>
> *[pause — show the proof on screen with annotations]*
>
> Two lines. One algebraic fact about base 10. The conclusion: *digit-summing is reduction modulo 9*. The two operations we've been calling different names — *digit-summing* in VBM, *modulo 9* in mainstream — are *the same operation*, related by a two-line proof.
>
> *[pause]*
>
> Note what the proof depends on. It depends on *base 10*. The same proof in base 12 would give *digit-summing in base 12 equals reduction modulo 11*, because 12 ≡ 1 (mod 11). The proof's base-dependence is exactly the *base-10 arbitrariness* objection from Mod A's Defend lesson — the proof is correct, and it's correct *only in base 10*. The choice of base is a substantive choice that determines what the digit-sum reduces to.
>
> *[pause]*
>
> This proof is the formal foundation underneath the entire course. Every cycle, every pattern, every digit-root claim we make rests on this two-line argument. Get it in your notebook clean."

## 5. Try it (4:30–5:30)
> "Pause. Write the two-line proof in your notebook. Add a one-sentence comment beside line two: *10ⁱ ≡ 1 (mod 9) because 10 ≡ 1 (mod 9).* Sixty seconds."

*[Pause card on screen for 60 seconds.]*

> "Welcome back. The proof is in your notebook. Tomorrow we use it."

## 6. Bridge (5:30–6:00)
> "Next lesson — Build. We've proved the equivalence. Tomorrow we tabulate it: a table of digital roots for the integers 0 through 99. The proof's first concrete artefact."

*[Closing card: "Lesson 2 of 9 — Count. Next: Build."]*

---

## 7. Production sidecar
- Diagrams: D-93 (the two-line proof, properly typeset).
- Animations: A-45 — proof reveals one line at a time, with KaTeX rendering.
- B-roll: hand writing sigma notation in a notebook.
- Caption care: KaTeX `\sum`, `\equiv`, `\pmod{9}`.
- Music cue: precise, mathematical.
- Voice-pass note: the proof is small; the unpacking carries the lesson. No "in summary"; the proof is its own conclusion.
