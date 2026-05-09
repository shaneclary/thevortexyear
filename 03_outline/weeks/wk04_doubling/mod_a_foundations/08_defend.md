Wk 04 — Theme: The Doubling Circuit — Lens 8: Defend — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft. **`[ORG-REVIEW]`**

---

## 0. Authoring notes
Tenth Defend lesson. The objection: *why the doubling pattern? Why not multiplying by 3, or 4, or 7? Each gives a different cycle. Why does VBM single out doubling?* Honest answer: doubling has the fastest growth and produces the largest single orbit (length 6) in the multiplicative group; tripling/halving give shorter or different cycles; 7 gives the inverse of doubling (the Halving Circuit, next week). Doubling is privileged not as the only meaningful operation but as the *generator* of the maximal orbit.

## 1. Outcome
By the end of these 6 minutes, the student can answer the objection *why doubling and not some other multiplier?* with one calibrated-answer sentence.

## 2. Hook (0:00–0:30)
*[On screen: a comparison table. ×2 → 6-cycle. ×3 → goes to 0. ×4 → 3-cycle. ×7 → inverse of ×2. ×5 → halving (also 6-cycle, reversed).]*

> "Why ×2? Why not ×3 or ×4? Today: the answer."

## 3. Setup (0:30–1:00)
> "Lens 8 of 9. Tenth Defend. Today's objection: doubling is one of nine multiplications you could pick. Why is it the central one? Six minutes."

## 4. Body (1:00–4:30)

> "The objection in its strongest form. *VBM treats the cycle 1-2-4-8-7-5 as the Doubling Circuit, the heart of the system. But you could just as easily multiply by 3, or 4, or 7. Each gives a different orbit on the Symbol. Why is doubling singled out? Is the choice arbitrary?*
>
> The objection is fair. There are nine possible multiplications you could apply on the Symbol — by 1, 2, 3, ... 9. Each produces a different action. Why ×2?
>
> Here's the answer.
>
> *[pause]*
>
> *Multiplication by 1.* Identity. Doesn't move anything. Trivial.
>
> *Multiplication by 2.* Doubling. Produces the cycle 1-2-4-8-7-5 (length 6) plus the side cycles 3-6 (length 2) and {9} (fixed). The main cycle has length 6 — the maximum possible orbit length in `(ℤ/9ℤ)*`.
>
> *Multiplication by 3.* Take any number and multiply by 3, reduce. 1 → 3. 2 → 6. 3 → 0 (collapses to 9). Multiplying by 3 *destroys* most of the Symbol — every starting point ends up at one of {3, 6, 9} after one or two steps. Not useful as a generator of structure.
>
> *Multiplication by 4.* Squares of doubling. Produces a cycle of length 3 — 1 → 4 → 7 → 1. Real cycle, but shorter than doubling.
>
> *Multiplication by 5.* This is the inverse of doubling — what we call halving. Produces the cycle 1-5-7-8-4-2 (length 6, same as doubling but traversed backwards).
>
> *Multiplication by 6.* 1 → 6. 2 → 3. Collapses, like ×3.
>
> *Multiplication by 7.* Inverse of multiplication by 4. Produces a length-3 cycle.
>
> *Multiplication by 8.* This is multiplication by -1 in `(ℤ/9ℤ)*`. Sends each element to its additive inverse mod 9. Length-2 cycles.
>
> *Multiplication by 9.* Collapses everything to 9.
>
> *[pause — show the table]*
>
> Two facts emerge.
>
> First — only multiplications by *units of `(ℤ/9ℤ)*`* — that is, by elements coprime to 9 — produce non-degenerate cycles. ×3, ×6, ×9 collapse the Symbol because 3, 6, 9 share factors with 9. ×1, ×2, ×4, ×5, ×7, ×8 are the unit multiplications that produce real cycles.
>
> Second — among the unit multiplications, ×2 and ×5 are the *generators* of the multiplicative group. They produce the maximal orbit of length 6. ×4 and ×7 produce length-3 cycles. ×8 produces length-2 cycles. ×1 is identity.
>
> So *doubling* (×2) and *halving* (×5) are privileged for one specific reason: they are the only operations that visit every element of `(ℤ/9ℤ)*` in a single cycle.
>
> *[pause]*
>
> The calibrated answer to *why doubling and not some other multiplier?*:
>
> *Doubling is one of two multiplications — doubling and halving — that generate the full multiplicative group `(ℤ/9ℤ)*` in a single 6-cycle. Other multipliers either collapse the Symbol or produce shorter cycles. Doubling and halving are the maximal generators; we cover halving in Week 5.*
>
> Forty-three words. Memorise the structure.
>
> *[pause]*
>
> One nuance worth knowing. Doubling and halving are *inverses* — applying doubling then halving returns you to your starting point. They generate the same cycle traversed in opposite directions. Mod B will prove this formally; today the intuition is enough."

## 5. Try it (4:30–5:30)
> "Pause. In your notebook, sketch the orbits for ×2, ×3, ×4 starting from 1. Three columns. Compare lengths and what each visits. The contrast names why ×2 is privileged. Sixty seconds."

*[Pause card on screen for 60 seconds.]*

> "Welcome back. Doubling's place in the system is now defended."

## 6. Bridge (5:30–6:00)
> "Next lesson — Connect. Module A of Week 4 closes. The Doubling Circuit is in your hand, defended, and applied. Tomorrow Module B opens with the formal proof that doubling has order 6 in the multiplicative group."

*[Closing card: "Lesson 8 of 9 — Defend. Next: Connect."]*

---

## 7. Production sidecar
- Diagrams: D-113 (the multiplication-comparison table for ×1 through ×9).
- Animations: A-64 — each multiplication's orbit traces in turn, lengths revealed.
- B-roll: hand sketching three orbits.
- Caption care: KaTeX `(ℤ/9ℤ)*`; "multiplicative group" lowercase technical term.
- Music cue: precise.
- **`[ORG-REVIEW]`** — tenth calibrated-answer.
- Voice-pass note: nine multiplications walked through; conclusion lands the answer.
