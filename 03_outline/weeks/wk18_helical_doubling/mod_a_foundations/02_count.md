Wk 18 — Theme: Helical Doubling on the Torus — Lens 2: Count — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Count helix turns per traversal. The (p, q) winding numbers and what they mean for coil engineering.

## 1. Outcome
Student can count the helix's major-axis turns, minor-axis turns, and total cells visited per traversal.

## 2. Hook (0:00–0:30)
*[Counter readouts: 1 major turn, 4 minor turns, 24 cells per single traversal; multiplied by 4 for the canonical four-traversal coil.]*

> "One. Four. Twenty-four. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Count the helix's turns and cells."

## 4. Body (1:00–4:30)

> "Today we count what the helix does in one full traversal and across the canonical four-traversal coil.
>
> *[pause]*
>
> *One traversal of the doubling helix.*
>
> *Major-axis turns: 1.* The helix winds *once* around the torus's major axis (the long way around the doughnut) before closing.
>
> *Minor-axis turns: 4.* The helix winds *four times* around the torus's minor axis (the short way through the tube) before closing.
>
> *Cells visited: 24.* The helix passes through 24 distinct cells in one traversal.
>
> *Closure: at cell (24 mod 24, 24 mod 6) = (0, 0).* Same as the start.
>
> *Wait* — let me re-check the minor turns. Starting at row 0, advancing 1 row per column-step over 24 column-steps: row 24 mod 6 = 0. Total minor steps: 24 / 6 = 4 full minor circuits. ✓ *Four minor turns is correct.*
>
> So *(p, q) = (1, 4)* — one major turn, four minor turns per traversal.
>
> *[pause]*
>
> *Verification.*
>
> Cells visited: at column c, the helix is at row (c mod 6). Cells: (0, 0), (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 0), (7, 1), (8, 2), (9, 3), (10, 4), (11, 5), (12, 0), (13, 1), …, (23, 5). Total: 24 cells.
>
> Cell at column 24 is (0, 0) — same as start by wrap. Closure confirmed.
>
> *[pause]*
>
> *Four-traversal canonical coil.*
>
> The single-strand single-traversal helix has 24 cells. The canonical Rodin Coil has *four traversals* — four passes around the doubling helix, each starting at a different angular offset.
>
> *Total cells visited across four traversals:* 24 × 4 = 96. *Each strand makes 96 turns* in the canonical four-traversal build. (Of which 24 are major-axis turns and 72 = 24 × 3 are minor-axis turns. Wait — that's not right. Let me reconsider.)
>
> *Re-examining.* Each traversal: 1 major turn, 4 minor turns. Four traversals: 4 major turns, 16 minor turns. Per strand.
>
> Total turns per strand: 4 + 16 = 20. *Hmm, this doesn't match the 96 I had earlier.*
>
> Let me reconcile. *Turn* is ambiguous — it could mean 'time around an axis' or 'time through a coil position'. The 96 number is *cell visits*: 24 cells per traversal × 4 traversals. The 20 number is *axis revolutions*: 4 major + 16 minor.
>
> Both are correct counts of different things. The relevant number for coil engineering is *cell visits* = 96 per strand.
>
> *[pause]*
>
> *Across all six strands.*
>
> *Total cell visits per six-strand four-traversal coil:* 96 per strand × 6 strands = *576 cell visits total*. Same number as Wk 14 Mod C established. ✓
>
> *[pause]*
>
> *Three observations on the count.*
>
> *Observation one — the (p, q) = (1, 4) helix is unique to this dimensioning.* For a different torus (e.g., 6 × 12), the helix would have different winding numbers. The (1, 4) helix is specific to 6 × 24 with the doubling generator.
>
> *Observation two — the q = 4 explains 'four traversals'.* Each traversal of the helix winds 4 times around the minor axis. To complete a *four-traversal coil*, the wire winds 4 × 4 = 16 minor circuits. This is engineering vocabulary; the math is consistent.
>
> *Observation three — every cell is visited four times across the canonical coil.* 144 cells × 4 visits per cell = 576. Equivalent to 96 per strand × 6 strands. Sanity check passes.
>
> *[pause]*
>
> *Memorise: (1, 4) per traversal, 24 cells, 96 cells per strand for four traversals, 576 cells total.*
>
> Practical takeaway. *These numbers translate directly to wire length.* When you wind copper, the wire length is approximately (cells × cell-arc-length). For 96 cells per strand at ~3 cm cell-arc-length: ~3 m of wire per strand."

## 5. Try it (4:30–5:30)
> "Pause. Verify on your paper torus: starting at (0, 0), trace 24 cells. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. Trace the helix on your paper torus."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-391 (helix winding number diagram with (1, 4) labelled).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (counter readouts).
- Music cue: counting motif.
