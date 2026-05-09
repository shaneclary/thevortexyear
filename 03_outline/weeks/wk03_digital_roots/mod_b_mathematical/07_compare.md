Wk 03 — Theme: Digital Roots & Mod-9 — Lens 7: Compare — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Mod-9 vs. mod-7 vs. mod-11. What's special about 9 — and what's not. The student should leave knowing that mod-n produces a cycle whose properties depend on n's relationship to the base. In base 10, mod-9 has the convenient property that digit-summing equals reduction. In other bases, the *digit-summing trick* corresponds to a different modulus. The lesson is honest: 9 is special *given base 10*, not in some absolute sense.

## 1. Outcome
By the end of these 6 minutes, the student can describe what's special about mod-9 versus mod-7 and mod-11, and what makes the specialness base-dependent.

## 2. Hook (0:00–0:30)
*[On screen: three modular cycles side-by-side. Mod-7 (cycle of 7), mod-9 (cycle of 9), mod-11 (cycle of 11). Mod-9 is highlighted.]*

> "Why mod-9? Why not mod-7 or mod-11? Today: what makes 9 special, and what doesn't."

## 3. Setup (0:30–1:00)
> "Lens 7 of 9. The Compare lens places mod-9 against its neighbours in modular arithmetic. Honest answer about what's special, what isn't."

## 4. Body (1:00–4:30)

> "Modular arithmetic is well-defined for any positive integer modulus. Mod-7 partitions integers into seven classes. Mod-11 partitions them into eleven. Mod-9 into nine. All three are mathematically respectable; all three are studied in number theory.
>
> So why does Marko build a system around mod-9 specifically?
>
> *[pause]*
>
> One answer: *because of base 10*. The proof we did yesterday — *digit-summing equals reduction modulo 9* — depends on *10 ≡ 1 (mod 9)*. That's the property that makes the digit-summing trick work cleanly. In base 10, mod-9 is the *natural* modulus for digit-based reduction.
>
> What about mod-7 and mod-11? In base 10, they don't have a clean digit-summing trick. To compute a number's residue mod 7, you have to do actual division — there's no shortcut from the digits alone. To compute mod 11, there's a trick (alternating digit-sum), but it's less elegant than mod-9's straight sum.
>
> *[pause]*
>
> So *given base 10*, mod-9 has a unique computational simplicity. That's a real fact about base-10 notation.
>
> But — and this is the honest qualifier — that simplicity is *base-dependent*. Switch to base 11 and the situation flips. In base 11, mod-10 has the clean digit-summing trick, mod-9 doesn't. In base 12, mod-11 has the trick. The pattern: in base *b*, mod-(b-1) is the natural digit-summing modulus. Mod-9 is special because we use base 10. Period.
>
> *[pause — show three mod-cycles with their base-dependence highlighted]*
>
> Two takeaways.
>
> First: mod-9 is *not arbitrary* given base 10. It's the modulus that makes digit-summing work. If you accept base 10 as a starting point — which most working math does — then mod-9 is the right modulus to study.
>
> Second: mod-9 is *not unique in some absolute sense*. Other bases have other natural moduli. The patterns Marko studies in base-10 mod-9 have analogues in other bases under different moduli. Whether base 10 is *itself* special is the deeper question, the one Module A's Defend lesson handled.
>
> *[pause]*
>
> Useful framing for talking to a mathematician. *Mod-9 is the natural modulus for digit-based computation in base 10. The Symbol's structure exploits that naturalness. Whether base 10 is privileged is a separate, contested question.* That sentence respects what's mathematically defensible and flags what's contested. A mathematician will accept it; they may still disagree about base 10's status, but they won't accuse the framing of being confused."

## 5. Try it (4:30–5:30)
> "Pause. Compute the mod-7 residues of three of your numbers from yesterday's *Apply* lesson. Compare to the mod-9 residues. Notice they're different. Both are valid; mod-9 is the one that has the digit-summing trick. Sixty seconds."

*[Pause card on screen for 60 seconds.]*

> "Welcome back. Mod-9's specialness is now precise: the digit-summing trick. Other moduli are equally valid; they just don't have the trick."

## 6. Bridge (5:30–6:00)
> "Next lesson — Defend. We've shown what's special about mod-9 and what isn't. The next lens revisits Marko's stronger claim — that base 10 itself is non-arbitrary — with the formal mathematics now in hand."

*[Closing card: "Lesson 7 of 9 — Compare. Next: Defend."]*

---

## 7. Production sidecar
- Diagrams: D-97 (three modular cycles side-by-side: mod-7, mod-9, mod-11).
- Animations: A-49 — each mod cycle traces in turn; mod-9's digit-summing trick highlights.
- B-roll: none.
- Caption care: "mod-7", "mod-9", "mod-11" hyphenated.
- Music cue: comparative, neutral.
- Voice-pass note: honest both-sides answer; what's special, what isn't, with the qualifier explicit.
