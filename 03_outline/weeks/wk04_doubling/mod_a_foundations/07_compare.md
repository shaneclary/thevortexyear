Wk 04 — Theme: The Doubling Circuit — Lens 7: Compare — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Compare the Doubling Circuit to ordinary arithmetic progression. Both are about *what happens when you add or multiply repeatedly*. Arithmetic progression: add a fixed number each step, get an unbounded sequence. Doubling Circuit: double and reduce, get a closed cycle. The contrast highlights what's distinctive about the digit-root reduction.

## 1. Outcome
By the end of these 6 minutes, the student can compare the Doubling Circuit to an arithmetic progression and identify what makes the cycle close where the progression doesn't.

## 2. Hook (0:00–0:30)
*[On screen: two sequences side by side. Left: 1, 2, 4, 8, 7, 5, 1, 2, 4, ... (closed cycle). Right: 1, 3, 5, 7, 9, 11, 13, ... (unbounded progression).]*

> "One sequence cycles. The other goes forever. What's the difference?"

## 3. Setup (0:30–1:00)
> "Lens 7 of 9. Compare. Today: doubling cycle vs. arithmetic progression. The contrast names what makes VBM's cycles distinctive."

## 4. Body (1:00–4:30)

> "An arithmetic progression is a sequence where you add a fixed number at each step. *1, 3, 5, 7, 9, 11, ...* — start at 1, add 2 each step. Or *2, 5, 8, 11, 14, 17, ...* — start at 2, add 3 each step. The sequence runs forever, growing without bound.
>
> The Doubling Circuit looks similar at first. Start at 1, apply an operation, get the next number. *1, 2, 4, 8, 7, 5, 1, 2, ...* — except the sequence *closes*. After six steps it returns to where it started.
>
> Two differences. Both matter.
>
> *[pause]*
>
> First difference — the operation. Arithmetic progression *adds* a constant. Doubling Circuit *multiplies* (specifically, multiplies by 2) and reduces.
>
> Multiplication and addition behave differently under modular arithmetic. Adding 2 each step in the integers gives you 1, 3, 5, 7, 9, 11, 13, ... — adding 2 each step *in `ℤ/9ℤ`* gives you 1, 3, 5, 7, 0, 2, 4, 6, 8, 1, 3, ... — eventually cycles, but visits all 9 residue classes.
>
> Multiplying by 2 each step in the integers gives you 1, 2, 4, 8, 16, 32, 64, ... — unbounded. Multiplying by 2 each step *in `ℤ/9ℤ`* gives you 1, 2, 4, 8, 7, 5, 1, ... — cycles after six, visits only six of the nine residue classes.
>
> *[pause]*
>
> Second difference — what gets visited. Arithmetic progression in mod 9 — adding any non-zero step — eventually visits *every* residue class before repeating. Multiplicative cycle in mod 9 — doubling — visits *only six* of the nine, and skips {0, 3, 6} entirely. The multiplicative structure is *more selective*.
>
> Why? Because addition and multiplication interact differently with the modulus 9. The additive group of `ℤ/9ℤ` is the full nine elements. The multiplicative group `(ℤ/9ℤ)*` — the units, the elements coprime to 9 — has only six elements: {1, 2, 4, 5, 7, 8}. That's exactly the Doubling Circuit. The non-units {0, 3, 6} aren't in the multiplicative group, which is why the doubling map skips them.
>
> *[pause — show two-column comparison]*
>
> So the Doubling Circuit's cycle is *selectivity in the operation* — multiplication picks out the units, leaves the non-units behind. Arithmetic progression's cycle is *exhaustive* — addition by any fixed step eventually visits everything.
>
> *[pause]*
>
> One implication for VBM. The Doubling Circuit's six-cycle and the 3-6-9 separation aren't accidents of base 10 — they're structural facts about the multiplicative group of ℤ mod 9. Switch to base 12 (mod 11), and the multiplicative group has 10 elements, the doubling cycle has length 10, and there's no analogous *family of three* outside it. Mod 9's specific number-theoretic structure produces the specific cycle structure VBM studies.
>
> Whether base 10 — and therefore mod 9 — is privileged in the way Marko claims is a separate question (the one we settled in Week 3's Defend lesson). The cycle structure itself, given mod 9, is forced."

## 5. Try it (4:30–5:30)
> "Pause. In your notebook, write two short sequences. *Arithmetic progression mod 9*: start at 0, add 4, take 10 steps. *Doubling cycle mod 9*: start at 1, double, take 10 steps. Compare. Which visits more residues? Which closes earlier? Sixty seconds."

*[Pause card on screen for 60 seconds.]*

> "Welcome back. The contrast is in your hand."

## 6. Bridge (5:30–6:00)
> "Next lesson — Defend. We've compared the cycle to its arithmetic cousin. The next lens answers: *why this pattern, and not the 3-6-9?* Why is the Doubling Circuit central in VBM rather than the 3-6 oscillation? Lens 8."

*[Closing card: "Lesson 7 of 9 — Compare. Next: Defend."]*

---

## 7. Production sidecar
- Diagrams: D-112 (two-column comparison: arithmetic progression vs. doubling cycle, both in mod 9).
- Animations: A-63 — both sequences trace simultaneously, one closes, one cycles broadly.
- B-roll: hand writing both sequences.
- Caption care: KaTeX `(ℤ/9ℤ)*`; "non-units" lowercase technical term.
- Music cue: comparative.
- Voice-pass note: two specific differences, each named clearly.
