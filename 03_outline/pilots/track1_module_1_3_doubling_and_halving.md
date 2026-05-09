# Module 1.3 — Doubling and Halving

**Track:** Foundations
**Estimated runtime:** 12 min (video) + 15 min (exercise) = **~27 min**
**Prerequisites:** Module 1.1 *Welcome to a Living Mathematics*, Module 1.2 *The Symbol of Enlightenment*
**Status:** Draft — pilot for org review

---

## 0. Authoring notes (non-student-facing)

This is the lesson that turns the static circle from 1.2 into a *dynamic pattern*. Once a student sees the doubling trace once, they own it for life. Keep this lesson tactile — actual paper, actual pencil. The math is just digit-doubling and digit-summing; resist the urge to introduce "modular arithmetic" by name (that lives in Track 2). Cite Rodin in voice: *"Numbers are real and alive."* The Skeptics' Corner here is short — main objections (base-10 dependence, modular arithmetic ≠ physics) belong to Track 2.

Canonical terminology used: **Doubling Circuit**, **Halving Circuit**, **Symbol of Enlightenment**. Per `01_sources/KEY_CONCEPTS.md`, the org should ratify the spelling **Doubling Circuit** (not "doubling sequence" or "doubling pattern").

---

## 1. Learning outcomes

By the end of this module, a student can:

1. Trace the **Doubling Circuit** — 1, 2, 4, 8, 7, 5 — on the Symbol of Enlightenment without prompting.
2. Reduce any whole number to a single digit using digit-summing.
3. Trace the **Halving Circuit** — 1, 5, 7, 8, 4, 2 — and explain why it's the same path traversed backwards.
4. Identify which numbers (3, 6, 9) sit *outside* the doubling circuit and notice that they form a separate pattern of their own.

---

## 2. Setup (1–2 min)

> "In the last lesson we drew the Symbol of Enlightenment — nine numbers around a circle. It's a beautiful diagram, but it doesn't *do* anything yet. Today we're going to make it move. By the end of the next ten minutes, you'll have traced a pattern that, once you see it, you cannot unsee — and that pattern is the heart of everything else we'll teach."

[DIAGRAM: D-01 — Symbol of Enlightenment, clean ring]

Prior-module callback: in 1.2 we placed 1 through 9 around the circle, with 9 at the top. Today we use that placement.

---

## 3. Concept (8–15 min)

### 3.1 Doubling, with a twist

Marko Rodin's first observation is disarmingly simple: *what happens when you keep doubling?*

> Start at **1**. Double it: **2**. Double again: **4**. Again: **8**. Now double 8 — and you get **16**. We don't have a "16" on our circle. So we add the digits: **1 + 6 = 7**. So 16 *reduces to* 7.

This is the move Rodin asks us to make over and over: **whenever a number gets too big for the circle, sum its digits until you have a single digit again.** In Rodin's words, drawn from RodinAerodynamics.org:

> "Numbers are real and alive, not merely symbols for other things." *(Source: P1-1, RodinAerodynamics.org)*

Continue doubling, reducing as we go:

| Step | Calculation | Digit sum | On the circle |
|------|-------------|-----------|---------------|
| Start | 1 | — | **1** |
| ×2 | 2 | — | **2** |
| ×2 | 4 | — | **4** |
| ×2 | 8 | — | **8** |
| ×2 | 16 | 1+6 = 7 | **7** |
| ×2 | 14 | 1+4 = 5 | **5** |
| ×2 | 10 | 1+0 = 1 | **1** ← back to start |

We have a **closed cycle**: 1 → 2 → 4 → 8 → 7 → 5 → 1. Six numbers. Forever. This is the **Doubling Circuit**.

[DIAGRAM: D-02 — Doubling Circuit traced as flowing line on the ring]

### 3.2 Why this is not a coincidence

Try it from any starting point inside the circuit:
- Start at 2: 2 → 4 → 8 → 7 → 5 → 1 → 2. Same cycle.
- Start at 7: 7 → 5 → 1 → 2 → 4 → 8 → 7. Same cycle.

Wherever you enter, you stay on the rails. This is what Rodin means when he says the system has "no anomalies".

### 3.3 What about 3, 6, and 9?

Notice: our cycle visits 1, 2, 4, 5, 7, 8 — but never **3**, **6**, or **9**. Try doubling them:

| Start | ×2 | Digit-reduce | Next ×2 | Digit-reduce |
|-------|-----|--------------|---------|--------------|
| 3 | 6 | 6 | 12 | 3 |
| 6 | 12 | 3 | 6 | 6 |
| 9 | 18 | 9 | 18 | 9 |

3 and 6 trade places forever. 9 stays 9. They aren't broken — they're *outside the circuit on purpose*. We'll meet them again in Module 1.5 *The 3-6-9 Pulse*. For now: **mark this** — there's something distinct about these three.

### 3.4 Halving — the same path, backwards

What if instead of doubling, we *halve*? Start at 1 again. Half of 1 is 0.5 — but we don't allow fractions on the circle. So we use a trick: **halving on the circle is the same as multiplying by 5.**

(This works because 2 × 5 = 10, and 10 reduces to 1 — so 5 acts like "the inverse of 2" in this system. Track 2 will prove this rigorously; for Track 1, take it on the dance floor.)

| Step | Calculation | Digit sum | On the circle |
|------|-------------|-----------|---------------|
| Start | 1 | — | **1** |
| ×5 | 5 | — | **5** |
| ×5 | 25 | 2+5 = 7 | **7** |
| ×5 | 35 | 3+5 = 8 | **8** |
| ×5 | 40 | 4+0 = 4 | **4** |
| ×5 | 20 | 2+0 = 2 | **2** |
| ×5 | 10 | 1+0 = 1 | **1** ← back to start |

The **Halving Circuit**: 1 → 5 → 7 → 8 → 4 → 2 → 1. Same six numbers. Same closed loop. Just traversed in the other direction.

[DIAGRAM: D-03 — Halving Circuit traced as flowing line, mirror of D-02]

[ANIMATION: A-01 — Doubling and halving animations side by side, looping]

### 3.5 Why this matters

What we've drawn is the first piece of mechanism. The Symbol of Enlightenment isn't just decoration — it's a clock face for a process that runs in two directions and cycles forever without losing energy. Rodin calls this the **non-decaying pattern**, and from here every other piece of VBM hangs off this single observation.

> "I have not added anything to mathematics. The pattern was already there. I have only drawn it." *(Paraphrased from Rodin lectures — `[ORG-REVIEW] confirm exact quote and source.`)*

---

## 4. Walkthrough (10–20 min)

**Materials:** A printed copy of the Symbol of Enlightenment (or draw your own), a pencil, an eraser.

### Step 1 — Draw the doubling circuit yourself.
Place your pencil tip on **1**. Draw a smooth curve to **2**. To **4**. To **8**. From **8**, your line crosses the centre region of the circle — that's expected — to **7**. Then to **5**. Then back to **1**. You have just drawn an infinity-like figure. Trace it three more times until your hand remembers the path.

### Step 2 — Trace the halving circuit on top.
Now reverse: **1 → 5 → 7 → 8 → 4 → 2 → 1**. Use a different colour if you have one. You should see the *same shape*, traced the other way.

### Step 3 — Reduce a big number on your own.
Pick a number larger than 100. Try **47**. Sum the digits: 4 + 7 = 11. Eleven is still two digits, so reduce again: 1 + 1 = 2. So 47 reduces to **2**.

Try doubling 47 in your head and reducing each step:
- 47 → 94 → 188 → 376 → 752 → 1504 → 3008 → ...

Now reduce each: 47→2, 94→4 (9+4=13→4), 188→8 (1+8+8=17→8), 376→7, 752→5, 1504→1, 3008→2... There's the circuit again: **2, 4, 8, 7, 5, 1, 2**. The numbers got large; the *pattern* never changed.

This is the moment most students stop and stare for a minute. Let them.

---

## 5. Practice

**Exercise 1.** Reduce the following to a single digit: (a) 19  (b) 144  (c) 999  (d) 2026.
**Exercise 2.** Starting at 2, write out the next eight steps of the doubling circuit.
**Exercise 3.** Starting at 4, write out the next eight steps of the halving circuit.
**Exercise 4.** Reduce **365** (days in a year). Reduce **24** (hours in a day). Reduce **7** (days in a week). Notice anything?
**Exercise 5.** Try doubling starting from **3**. What cycle do you get? How is it different from the doubling circuit you just learned?

<details><summary>Answers</summary>

1. (a) 1+9=10→1. (b) 1+4+4=9. (c) 9+9+9=27→9. (d) 2+0+2+6=10→1.
2. 2, 4, 8, 7, 5, 1, 2, 4, 8.
3. 4, 2, 1, 5, 7, 8, 4, 2, 1.
4. 365→3+6+5=14→5. 24→6. 7→7. (No "right" answer; encourage students to play with calendar/time numbers and note the patterns.)
5. 3 → 6 → 3 → 6 ... A two-step oscillation. 3 and 6 are *outside* the doubling circuit — they trade places. We meet them again in Module 1.5.

</details>

---

## 6. Skeptics' corner (3–5 min)

> *"Isn't this just digit-summing in base 10? It works because we chose ten fingers. In binary or base 12, the pattern would be different."*

That's right — the specific cycle 1-2-4-8-7-5 is a property of base-10 arithmetic, where summing digits is equivalent to reduction modulo 9. In base 12 you'd reduce mod 11 and get a different (but also closed) cycle.

Rodin's response, when this comes up, is that **base 10 is not arbitrary** — that the decimal system is itself a discovery, not an invention, and that the number 9 carries a unique status across many traditions. You're free to find that compelling or not. What this lesson is *not* claiming is that digit-doubling proves anything about physics. It claims one thing: *here is a stable, closed pattern in the arithmetic, and it's worth looking at*. Whether it means more than that is a question for later modules.

`[ORG-REVIEW]` — confirm the org's preferred phrasing of this response.

---

## 7. Further reading

- **P1-1** — RodinAerodynamics.org, sections "Doubling" and "Halving". (Primary source for everything in this lesson.)
- **P3-22** — Natural Philosophy Wiki entry on Marko Rodin (cross-reference biography).
- **P1-13** — Randy Powell, Red Ice Radio Hour 1 (audio): Powell narrates the same cycle in his own voice — recommended listening before Track 2.
- `[NEEDS-SOURCE]` — *Marko Rodin's Vortex Based Mathematics* (Rodin/Elkins/Willman, current ed.) — chapter on the Doubling Circuit.

---

## 8. Assessment

**Quiz (single question):**
> Without looking at the diagram, list the six numbers of the Doubling Circuit in order, starting from 1. Then list the three numbers that are *not* part of it.

*Pass criterion:* `1, 2, 4, 8, 7, 5` and `3, 6, 9`.

---

## 9. Production notes

- **Diagrams needed:** D-01, D-02, D-03 (see `05_assets/DIAGRAM_INVENTORY.md`).
- **Animation:** A-01 — synchronised doubling/halving loops.
- **B-roll:** student's hand tracing the figure on paper; close-up of the pencil mark closing the loop at "1".
- **Caption care:** "Doubling Circuit" capitalised consistently; "digit-summing" hyphenated.
- **Music cue:** none — keep this lesson silent under the trace so the visual sells itself.
