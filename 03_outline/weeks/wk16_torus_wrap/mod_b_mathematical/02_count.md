Wk 16 — Theme: Wrapping to a Torus — Lens 2: Count — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Verify the wrap closes — confirm 24 mod 24 = 0 and 6 mod 6 = 0 mean the wraps complete.

## 1. Outcome
Student can verify computationally that the wrap closes — that walking around either cycle on the torus returns to the starting point.

## 2. Hook (0:00–0:30)
*[A path traced on the torus that loops back to its start, illustrated with a simple animation.]*

> "Walk around the torus. Return to start. Verify."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Verify the wrap closes."

## 4. Body (1:00–4:30)

> "Today's count is a verification. We confirm computationally that the two equivalence relations from Lens 1 produce a closed surface — that no matter which way you walk on the torus, you return to your starting point.
>
> *[pause]*
>
> *Test 1 — horizontal walk closes.*
>
> Start at cell (0, 0). Walk *right* (column-by-column) one column at a time:
>
> (0, 0) → (0, 1) → (0, 2) → … → (0, 23).
>
> What's the next step? *(0, 24).* Apply the horizontal equivalence: (0, 24) ≡ (0, 0).
>
> *We're back where we started.* The horizontal walk closes after 24 steps.
>
> *Verification.* 24 mod 24 = 0. The column index returns to 0 after 24 increments.
>
> *[pause]*
>
> *Test 2 — vertical walk closes.*
>
> Start at cell (0, 0). Walk *down* (row-by-row):
>
> (0, 0) → (1, 0) → (2, 0) → (3, 0) → (4, 0) → (5, 0).
>
> Next step? *(6, 0).* Apply the vertical equivalence: (6, 0) ≡ (0, 0).
>
> *We're back where we started.* The vertical walk closes after 6 steps.
>
> *Verification.* 6 mod 6 = 0. The row index returns to 0 after 6 increments.
>
> *[pause]*
>
> *Test 3 — combined walk closes (least common multiple).*
>
> Start at cell (0, 0). Walk *diagonally* — one row down and one column right per step:
>
> (0, 0) → (1, 1) → (2, 2) → … → (5, 5) → (6, 6).
>
> Apply both equivalences: (6, 6) ≡ (0, 6).
>
> Continue diagonally: (0, 6) → (1, 7) → (2, 8) → … → (5, 11) → (6, 12) ≡ (0, 12).
>
> And again: → (5, 17) → (6, 18) ≡ (0, 18).
>
> And once more: → (5, 23) → (6, 24) ≡ (0, 0).
>
> *We're back at the starting point.* The diagonal walk closes after 24 steps (= LCM(6, 24)).
>
> *Verification.* The diagonal walk's closure period is LCM(6, 24) = 24. After 24 diagonal steps, both row and column indices return to 0 simultaneously.
>
> *[pause]*
>
> *What this verifies.*
>
> *Verifies one.* The torus is a *closed* surface. Any walk on it eventually returns to its starting point.
>
> *Verifies two.* The two cycles (horizontal of period 24 and vertical of period 6) are *independent generators* of the abelian group ℤ/6ℤ × ℤ/24ℤ. The torus is the Cayley diagram of this group acting on itself.
>
> *Verifies three.* The wrap is *consistent*. The two equivalence relations don't contradict each other; they jointly define a coherent quotient.
>
> *[pause]*
>
> *Three observations.*
>
> *Observation one.* The closure happens exactly because the equivalence relations are *modular*. The integers mod n form a cyclic group, and the torus is the product of two such cyclic groups. No new theory is needed beyond Q1.
>
> *Observation two.* Different walking strategies have different closure periods. Horizontal: 24. Vertical: 6. Diagonal (one each): LCM(6, 24) = 24. *More general directions (like 2 right per 1 down) would have different closure periods*; the closure always happens at LCM(periods).
>
> *Observation three.* The closure is *fast on small tori*. Walking around the major axis takes 24 steps; walking around the minor axis takes 6 steps. *You can verify the closure by hand on the paper torus from yesterday* — pick a cell, walk around it, count steps.
>
> *[pause]*
>
> Practical takeaway. *The wrap closes; computation verifies it.* The torus is genuinely closed; nothing is hand-waved. The equivalence relations are well-defined and produce a well-defined quotient surface."

## 5. Try it (4:30–5:30)
> "Pause. On your paper torus, walk one cell at a time around the major axis (column direction). Count steps to return to start. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. Construct the quotient (ℤ/24) × (ℤ/6) unaided."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-351 (paths traced on torus showing closures).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (path looping).
- Music cue: counting motif.
