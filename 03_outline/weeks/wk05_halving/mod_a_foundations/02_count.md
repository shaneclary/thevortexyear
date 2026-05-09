Wk 05 — Theme: The Halving Circuit — Lens 2: Count — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Compute the Halving Circuit by multiplying by 5. The trick: halving on the Symbol = ×5. Walk through the cycle. The intuition for *why* lives in Mod B; today the operation is enough.

## 1. Outcome
By the end of these 6 minutes, the student can compute the Halving Circuit by multiplying by 5 and reducing.

## 2. Hook (0:00–0:30)
*[On screen: 1 × 5 = 5. 5 × 5 = 25 → 7. 7 × 5 = 35 → 8. 8 × 5 = 40 → 4. 4 × 5 = 20 → 2. 2 × 5 = 10 → 1.]*

> "Multiply by 5. Reduce. Same cycle, backwards. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Today we compute the Halving Circuit. The operation is multiplication by 5. The reason is tomorrow's Mod-B."

## 4. Body (1:00–4:30)

> "Halving on the Symbol is multiplying by 5. The reason: in mod-9 arithmetic, 5 is the *inverse* of 2. *Five times two is ten, which reduces to one* — the identity. So multiplying by 5 undoes multiplying by 2. *Halving = ×5 mod 9.*
>
> Tomorrow's Mod-B will prove this in two lines. Today, take it on the construction and compute.
>
> *[pause]*
>
> Start at 1. Multiply by 5: *1 × 5 = 5*. Single digit. Land on 5.
>
> Start at 5. Multiply by 5: *5 × 5 = 25*. Reduce: *2 + 5 = 7*. Land on 7.
>
> Start at 7. *7 × 5 = 35*. Reduce: *3 + 5 = 8*. Land on 8.
>
> Start at 8. *8 × 5 = 40*. Reduce: *4 + 0 = 4*. Land on 4.
>
> Start at 4. *4 × 5 = 20*. Reduce: *2 + 0 = 2*. Land on 2.
>
> Start at 2. *2 × 5 = 10*. Reduce: *1 + 0 = 1*. Back to start.
>
> Six steps. The Halving Circuit closes.
>
> *[pause]*
>
> The cycle: 1 → 5 → 7 → 8 → 4 → 2 → 1. Same six elements as the Doubling Circuit. Different traversal order.
>
> Compare the two:
>
> Doubling: *1 → 2 → 4 → 8 → 7 → 5 → 1*.
>
> Halving: *1 → 5 → 7 → 8 → 4 → 2 → 1*.
>
> Read either sequence backwards and you get the other. The sequences are mirror images.
>
> *[pause]*
>
> One observation. Doubling and halving are inverses — applying both in succession gives identity. Take any vertex, double it, halve the result; you return to where you started. Mathematically: *(× 2) ∘ (× 5) = × 10 ≡ × 1 = identity (mod 9)*. The two operations cancel.
>
> *[pause]*
>
> What about 3, 6, and 9? Apply ×5 to each.
>
> *3 × 5 = 15 → 6.* So 3 maps to 6.
>
> *6 × 5 = 30 → 3.* So 6 maps to 3.
>
> The 3-6 two-cycle is preserved — same as under doubling, just different which goes to which.
>
> *9 × 5 = 45 → 9.* Fixed point at 9, same as under doubling.
>
> So the Halving Circuit has the same three components as the Doubling Circuit: the six-cycle through {1, 2, 4, 5, 7, 8}, the two-cycle on {3, 6}, the fixed point at 9. Same partition, mirror traversals."

## 5. Try it (4:30–5:30)
> "Pause. In your notebook, compute the Halving Circuit starting from 4. Six steps. Verify you return to 4. Sixty seconds."

*[Pause card on screen for 60 seconds.]*

> "Welcome back. *4 → 2 → 1 → 5 → 7 → 8 → 4*. The cycle works from any start."

## 6. Bridge (5:30–6:00)
> "Next lesson — Build. Tomorrow we draw three Halving traces on three Symbols, atop the doubling traces from Week 4. The pair on a single page."

*[Closing card: "Lesson 2 of 9 — Count. Next: Build."]*

---

## 7. Production sidecar
- Diagrams: D-03 (Halving Circuit). D-132 — comparison of doubling and halving sequences.
- Animations: A-80 — both cycles trace simultaneously, opposite directions.
- B-roll: hand computing.
- Caption care: numerals; "halving" / "doubling" lowercase.
- Music cue: rhythmic.
