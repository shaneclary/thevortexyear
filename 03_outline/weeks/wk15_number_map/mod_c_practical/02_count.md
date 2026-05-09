Wk 15 — Theme: The Rodin Number Map (2D) — Lens 2: Count — Module C (Practical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Count the unique winding positions. Distinguish geometric positions from wind events. Engineering counts the student needs.

## 1. Outcome
Student can count and distinguish the geometric positions, wind events, and per-strand wind events of a canonical Rodin Coil.

## 2. Hook (0:00–0:30)
*[Three counter readouts: positions = 144, wind events = 576, per-strand turns = 96.]*

> "Three numbers. Count carefully."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Counting positions, wind events, and per-strand turns."

## 4. Body (1:00–4:30)

> "Today we count the engineering quantities that the grid generates. Three numbers, each subtly distinct, each useful for different parts of the build process.
>
> *[pause]*
>
> *Number 1 — Geometric positions.* These are *cells in the grid*. 6 rows × 24 columns = *144 geometric positions*.
>
> What this counts: distinct points on the torus surface where wires can pass. Each cell corresponds to one such point.
>
> When you use this number: when calculating *surface area allocation* of the coil. The 144 positions are evenly distributed around the torus; each position gets approximately the same area on the torus surface.
>
> *[pause]*
>
> *Number 2 — Wind events.* These are *individual wire passages through positions*. For a six-strand coil with four traversals: 6 × 24 × 4 = *576 wind events*.
>
> What this counts: how many times any wire passes through any position. With six strands each making four passes, each position is passed through 4 × 6 / 6 = 4 times… *wait, let me re-examine.* Six strands × four traversals = 24 strand-passes across the coil. Each strand pass touches all 24 columns. *Each column position is touched by all six strands across all four traversals* — but if we count *cell-strand* combinations:
>
> Per strand per traversal: 24 cell visits.
>
> Per strand all four traversals: 96 cell visits.
>
> Per coil all six strands: 576 cell visits.
>
> Each *unique cell* is visited 576 / 144 = 4 times. (Once per traversal.)
>
> *[pause]*
>
> So:
>
> *576 total wind events.*
>
> *4 wind events per cell.*
>
> *96 wind events per strand.*
>
> *24 wind events per strand per traversal.*
>
> When you use this number (576): when estimating *total wire length needed*. Each wind event traverses a small portion of the wire; multiplying total wind events by per-event wire length gives total wire length.
>
> *[pause]*
>
> *Number 3 — Per-strand turns.* For a single strand: 24 columns × 4 traversals = *96 turns*.
>
> What this counts: *how many full circuits* one strand makes around the torus. Each strand goes around 96 times in a canonical four-traversal six-strand build.
>
> When you use this number (96): when calculating *per-strand resistance, inductance, and length*. These properties scale with the number of turns of *one strand*.
>
> *[pause]*
>
> Three numbers, three different uses.
>
> *144.* Surface area calculations.
>
> *576.* Total wire length calculations.
>
> *96.* Per-strand resistance, inductance, length calculations.
>
> *[pause]*
>
> *Sanity check.* All three numbers come from the grid:
>
> 144 = 6 × 24 (rows × columns).
>
> 576 = 6 × 24 × 4 = 24² (because the four traversals give 24 strand-passes total, but each strand-pass covers all 24 columns).
>
> 96 = 24 × 4 (columns × traversals).
>
> The numbers are arithmetic consequences of the grid dimensions, not arbitrary engineering choices.
>
> *[pause]*
>
> Practical observation. *Most engineering tasks for a Rodin Coil reduce to one of these three numbers.* Knowing which to use prevents calculation errors. Total wire length calculation that uses 144 instead of 576 will be off by a factor of 4 — a meaningful mistake.
>
> Practical takeaway. *Memorise: 144 positions, 576 events, 96 turns per strand.* Annotate the back of your bookmark strip with these numbers if you didn't already in last week's count lesson."

## 5. Try it (4:30–5:30)
> "Pause. Add 144 / 576 / 96 to your bookmark's annotations. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. Print the grid; pin it."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-335 (three counter readouts with their uses).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (counter readouts).
- Music cue: counting motif.
