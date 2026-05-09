Wk 18 — Theme: Helical Doubling on the Torus — Lens 6: Apply — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Helix as a navigation aid on the surface. Use the helix to find positions, count cell-distances, navigate the torus.

## 1. Outcome
Student can use the helix as a navigation tool on the torus surface — finding positions and distances along the wind path.

## 2. Hook (0:00–0:30)
*[Hands on the traced torus, finger following the helix from a starting cell to a target cell.]*

> "The helix as path. Three nav problems. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Use the helix to navigate the torus."

## 4. Body (1:00–4:30)

> "The helix isn't just a wire path; it's a *navigation aid* on the torus surface. Today's apply uses the helix to solve three navigation problems.
>
> *[pause]*
>
> *Problem 1 — find a target cell from a start cell along the helix.*
>
> Start at cell (0, 0). Walk along the helix (one column right, one row down) for 10 steps. Where do you arrive?
>
> *Method.*
>
> col after 10 steps: 0 + 10 = 10 (no wrap, since 10 < 24).
>
> row after 10 steps: (0 + 10) mod 6 = 10 mod 6 = 4.
>
> *Answer: cell (10, 4).*
>
> Verify: cell (10, 4) holds value 7 (since row 4 = 2⁴ = 16 mod 9 = 7).
>
> *[pause]*
>
> *Problem 2 — count cell-distance between two cells along the helix.*
>
> How many cells along the helix between (3, 3) and (15, 3)?
>
> *Method.*
>
> Both cells are on the helix? Check: helix passes through (col, col mod 6). (3, 3): is 3 mod 6 = 3? Yes. (15, 3): is 15 mod 6 = 3? Yes (15 = 12 + 3). Both on the helix. ✓
>
> Distance along helix: difference in column index = 15 − 3 = 12 cells.
>
> *Answer: 12 cells along the helix.*
>
> Note: the *toroidal distance* (Wk 16 Mod B) might be smaller if 24 − 12 = 12 (same), but the *helix distance* is constrained to follow the helical path. Often these differ.
>
> *[pause]*
>
> *Problem 3 — find the antipode of a cell along the helix.*
>
> Where on the helix is the antipode of cell (5, 5)?
>
> *Method.*
>
> Antipode of (5, 5): (5 + 12 mod 24, 5 + 3 mod 6) = (17, 2).
>
> Is (17, 2) on the helix? Check: 17 mod 6 = 5, but row index for cell on helix at column 17 should be 17 mod 6 = 5. Cell (17, 2) has row 2, which is *not* 5. *So (17, 2) is not on the helix.*
>
> Hmm. Antipode of a helix cell isn't generally on the helix itself.
>
> *Refined understanding.* The doubling helix doesn't pass through every cell — it passes through 24 of the 144 cells. The antipodes of helix cells form a *different* set. Those antipodes form the *halving helix* — the inverse cycle.
>
> So *antipodes of doubling-helix cells are halving-helix cells*. The two helices are antipodal partners.
>
> *Answer: cell (17, 2) is on the halving helix, the antipodal partner of the doubling helix.*
>
> *[pause]*
>
> *Three observations from these three problems.*
>
> *Observation one.* The helix gives a *natural metric* on its 24 cells: the 'distance along the helix' is just the column-index difference (mod 24). This is faster than the general toroidal-distance computation.
>
> *Observation two.* The helix only covers *24 of the 144 cells*. To navigate cells off the helix, you need other paths or just direct coordinates.
>
> *Observation three.* The doubling and halving helices together cover *48 cells* — about a third of the surface. The remaining 96 cells are *not on either helix*. They're off-path positions; in coil-engineering terms, they're either *strand crossings* or *empty regions*.
>
> *[pause]*
>
> *Practical takeaway.* The helix is a *primary path* on the torus — useful for navigating between cells *on the path*. For cells off the path, use coordinates and toroidal distance.
>
> When winding a coil, you follow the helix exclusively. Wire only goes on the helix. The off-helix cells are between strands and don't carry wire."

## 5. Try it (4:30–5:30)
> "Pause. Find on your torus: cell 8 cells along the helix from (4, 4). Sixty seconds. Answer: (12, 0)."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. Helix vs solenoid vs spiral."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-394 (three navigation problems worked).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (finger following helix).
- Music cue: working/applied.
