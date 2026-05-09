Wk 03 — Theme: Digital Roots & Mod-9 — Lens 1: See — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
The proof of digit-root ≡ mod-9 visualised. Side-by-side: a number written out as base-10 expansion, with each power of 10 reducing to 1 mod 9, and the resulting digit-sum being the mod-9 residue. Visual not formal — the formal derivation is Lens 2. The student should leave seeing why the proof works.

## 1. Outcome
By the end of these 6 minutes, the student can describe — with a visual — why digit-summing is equivalent to reduction modulo 9.

## 2. Hook (0:00–0:30)
*[On screen: the equation 47 = 4×10 + 7×1, with 10 highlighted and an arrow showing 10 ≡ 1 (mod 9).]*

> "Why does digit-summing work? Six minutes. One picture."

## 3. Setup (0:30–1:00)
> "Lens 1 of 9, Module B. Yesterday we did the cascade fifty times. Today we see why it equals modulo-9 reduction. The picture first; the formal proof tomorrow."

## 4. Body (1:00–4:30)

> "Take the number 47. We write it as 47 because we mean *4 tens and 7 ones*. Spell that out: 47 equals 4 times 10 plus 7 times 1.
>
> *[show: 47 = 4 × 10 + 7 × 1]*
>
> Now reduce both sides modulo 9. The left side is 47 mod 9. The right side is the same expression, with each part taken mod 9.
>
> Look at 10 mod 9. Ten divided by nine is one, remainder one. So 10 mod 9 equals 1. Visually: a ten can be replaced by a one, modulo 9.
>
> Look at 1 mod 9. One divided by nine is zero, remainder one. So 1 mod 9 equals 1. A one stays a one.
>
> Substitute back. 47 mod 9 equals 4 × 1 + 7 × 1, which is 4 + 7, which is 11, which mod 9 is 2.
>
> *[pause — show the substitution chain on screen]*
>
> Notice what just happened. The expression *4 × 1 + 7 × 1* is *the digit-sum of 47*. We replaced each power-of-ten coefficient with 1, summed, and reduced. *That's digit-summing.* And we got the same answer as reducing 47 directly modulo 9 — because the substitutions we made were valid mod-9 substitutions.
>
> *[pause]*
>
> The same picture works for any whole number. Take 1,234. Write it as 1×1000 + 2×100 + 3×10 + 4×1. Now reduce. 1000 mod 9 — three thousands of a thousand, and one thousand reduces to... well, 1000 = 999 + 1, and 999 is divisible by 9, so 1000 mod 9 = 1. Similarly 100 mod 9 = 1, 10 mod 9 = 1, 1 mod 9 = 1. Every power of ten reduces to 1 mod 9.
>
> So 1,234 mod 9 = 1 × 1 + 2 × 1 + 3 × 1 + 4 × 1, which is 1 + 2 + 3 + 4, which is the digit-sum.
>
> *[pause — show 1,234 reducing the same way]*
>
> The mechanism, visually: every power of ten reduces to 1 mod 9. So when you write a number out as a base-10 expansion and reduce modulo 9, the powers of ten *vanish* — they all become 1 — leaving just the sum of the digits. That's why digit-summing equals modulo-9 reduction. The proof is in the substitution.
>
> *[pause]*
>
> Tomorrow we'll write this as a two-line proof using sigma notation and the algebra of congruences. Today's picture is the *intuition* behind that proof. The intuition is: powers of ten collapse, and what's left is the digits."

## 5. Try it (4:30–5:30)
> "Pause. In your notebook, write the number 365 as a base-10 expansion: 365 = 3×100 + 6×10 + 5×1. Then beneath it, replace each power of ten with 1: 3×1 + 6×1 + 5×1. Sum: 14. Reduce: 5. The digital root of 365 is 5. Verify by direct cascade. Same answer. Sixty seconds."

*[Pause card on screen for 60 seconds.]*

> "Welcome back. The picture works on any number. Tomorrow it becomes the formal proof."

## 6. Bridge (5:30–6:00)
> "Next lesson — Count. We've seen the picture. Tomorrow we count the proof — write it formally in two lines using sigma notation. The math the picture is the picture of."

*[Closing card: "Lesson 1 of 9 — See. Next: Count."]*

---

## 7. Production sidecar
- Diagrams: D-91 (the substitution chain visualised: 47 = 4×10 + 7×1 → 4×1 + 7×1 → 11 → 2). D-92 (same for 1,234 — new asset).
- Animations: A-44 — powers of ten visually "collapse" to 1, leaving the digit-sum.
- B-roll: hand writing the substitutions on graph paper.
- Caption care: KaTeX `mod 9` notation; congruence symbol `≡`.
- Music cue: arithmetic-precise underscore.
- Continuity: hook visual carries from Mod-A wk-3 Lesson 9 closing card → fades into the 47 expansion.
