Wk 05 — Theme: The Halving Circuit — Lens 8: Defend — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft. **`[ORG-REVIEW]`**

---

## 0. Authoring notes
Thirteenth Defend lesson. The objection: *why does halving work like × 5? That looks like a workaround, not a real operation.* Honest answer: 5 is the multiplicative inverse of 2 mod 9 — *because 2 × 5 = 10 ≡ 1 (mod 9)*. The two-line proof.

## 1. Outcome
By the end of these 6 minutes, the student can answer *why does halving work like × 5?* with the calibrated answer.

## 2. Hook (0:00–0:30)
*[On screen: 2 × 5 = 10 ≡ 1 (mod 9).]*

> "*Why × 5?* Today: the answer in one equation."

## 3. Setup (0:30–1:00)
> "Lens 8 of 9. Today's objection. Six minutes."

## 4. Body (1:00–4:30)

> "The objection. *Halving should be dividing by 2. The Symbol uses multiplication by 5 instead. Isn't that just a workaround for the fact that you can't divide by 2 on a finite set of digits?*
>
> The objection is reasonable. *× 5* does look like a substitute. Here's why it isn't.
>
> *[pause]*
>
> *Step one — what halving actually means.* Halving in standard arithmetic is dividing by 2, equivalently *multiplying by the multiplicative inverse of 2*. In the rationals, the inverse of 2 is one-half. In real numbers, same. In mod-9 arithmetic, the inverse of 2 is whatever value *x* satisfies *2 × x ≡ 1 (mod 9)*.
>
> *Step two — find x.* Try values: *2 × 5 = 10*. Reduce: *10 mod 9 = 1*. Match. So *5 is the multiplicative inverse of 2 in mod-9 arithmetic*. Multiplying by 5 is *literally* the same operation as dividing by 2, in this number system.
>
> *Step three — verify the cycle.* If multiplying by 5 *is* dividing by 2 in mod 9, then iterating the ×5 operation should produce the doubling cycle in reverse. We computed it: *1 → 5 → 7 → 8 → 4 → 2 → 1*. Compare to doubling: *1 → 2 → 4 → 8 → 7 → 5 → 1*. The halving cycle reads as the doubling cycle backwards. Confirmed.
>
> *[pause]*
>
> So the calibrated answer to *why does halving work like × 5?*:
>
> *Five is the multiplicative inverse of two in modular nine arithmetic — because 2 × 5 = 10 ≡ 1 (mod 9). Multiplying by five is dividing by two in this number system; not a workaround, the actual division.*
>
> Thirty-three words.
>
> *[pause]*
>
> The objection misunderstood what *division* means in modular arithmetic. *Dividing by k* in any number system means *multiplying by k's inverse*. In ordinary arithmetic the inverse of 2 is 0.5, which we can write directly. In mod-9 arithmetic the inverse is 5, which is also a member of the system. Both are real divisions; the second uses an integer inverse, which is what makes the Symbol's halving operation a clean integer-only operation.
>
> *[pause]*
>
> One more thing worth carrying. Not every base has a clean integer inverse for 2. In mod-7 arithmetic, the inverse of 2 is 4 (because *2 × 4 = 8 ≡ 1 mod 7*). In mod-11 arithmetic, the inverse of 2 is 6. The fact that the inverse is *5* is specific to mod-9. Marko reads this as another piece of base-10's specific structural friendliness; the standard view reads it as just a fact about modular arithmetic. Either way, it's a fact, and the *× 5* operation is the actual halving."

## 5. Try it (4:30–5:30)
> "Pause. Verify in your notebook: *2 × 5 = 10 ≡ 1 (mod 9)*. Beside it, write *therefore × 5 = division by 2 in mod-9*. The objection is closed. Sixty seconds."

*[Pause card.]*

> "Welcome back."

## 6. Bridge (5:30–6:00)
> "Next lesson — Connect. Mod A of Wk 5 closes."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-136 (calibrated-answer card, thirteenth).
- Music cue: minimal.
- **`[ORG-REVIEW]`**.
