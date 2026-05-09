Wk 27 — Theme: Doubling Circuit Revisited (as Coil Winding) — Lens 3: Build — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Construct the path as a function of (col, row). Build a tabular construction of the helix in (column, row) coordinates suitable for code or a hand calculation.

## 1. Outcome
Student can construct the doubling-cycle helix path as a tabular (col, row) function and verify closure.

## 2. Hook (0:00–0:30)
*[A clean table: step, position, column, row, computed (θ, φ); six rows; final row showing closure to first.]*

> "Build the path as a table. (col, row) coordinates. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 3 of 9. Construct the path tabularly."

## 4. Body (1:00–4:30)

> "Lens 1 gave continuous parametrisation. Lens 2 proved closure. Today: *construct the path as a discrete (col, row) table*. *Code-ready or hand-calculation-ready.*
>
> *[pause]*
>
> *Why (col, row) coordinates.*
>
> *Reason 1 — discrete-friendly.* *Continuous (θ, φ) is for analytical work*; *(col, row) is for engineering specification*. *Practitioners building coils want discrete coordinates*.
>
> *Reason 2 — code-translatable.* *(col, row) maps directly to indexed loops in code*. *For students writing simulation code, (col, row) is the natural representation.*
>
> *Reason 3 — visual-grid alignment.* *(col, row) corresponds to a grid wrap of the torus*. *Easier to mark on the decorated former; easier to communicate.*
>
> *[pause]*
>
> *The (col, row) construction.*
>
> *Define a 6 × n grid wrapped onto the torus.*
>
> *col* (column): 0 through 5, corresponding to major-circle position (each column is 60° of major arc).
>
> *row* (row): 0 through (n - 1), corresponding to minor-circle position. With n = 1, only one row; with n = 2, two rows; with n = 3, three rows.
>
> *The grid wraps*: *col 6 ≡ col 0; row n ≡ row 0*. *Toroidal topology.*
>
> *[pause]*
>
> *The path function.*
>
> For each step k ∈ {0, 1, 2, 3, 4, 5}, the helix occupies position (col, row) where:
>
> *col(k) = k mod 6.*
>
> *row(k) = (n × k) mod n.*
>
> *Step-by-step computation, with n = 2 (a candidate canonical value):*
>
> *Step 0 — col 0, row 0. (Cycle position 1.)*
>
> *Step 1 — col 1, row 2 mod 2 = 0. (Cycle position 2.)*
>
> *Wait — n × k = 2 × 1 = 2; 2 mod 2 = 0. So row 0.* But that means step 1 is at (1, 0), same row as step 0. Linear in row.
>
> Reconsidering. *The helix should wind through row positions, not stay at row 0.* Let me re-examine.
>
> *Reformulation.* The helix's row coordinate isn't *(n × k) mod n* — that's always 0. Instead:
>
> *row(k) = n × k × (1/6).*
>
> But this isn't integer-valued for n = 2 and k = 1. *(n × k × 1/6) = 2/6 = 1/3.*
>
> The (col, row) construction needs *finer grid* than the discrete cycle steps.
>
> *Revised grid.* If row resolution is 6n positions per minor-circle-loop:
>
> *col(k) = k.*
>
> *row(k) = n × k.*
>
> Mod (6, 6n).
>
> For n = 2:
>
> *Step 0 — col 0, row 0.*
>
> *Step 1 — col 1, row 2.*
>
> *Step 2 — col 2, row 4.*
>
> *Step 3 — col 3, row 6 ≡ row 0 mod 12... wait, 6n = 12 for n = 2.* Actually let's use minor-grid resolution 12 = 6n with n = 2.
>
> *Step 3 — col 3, row 6.*
>
> *Step 4 — col 4, row 8.*
>
> *Step 5 — col 5, row 10.*
>
> *Step 6 — col 0 (mod 6), row 12 ≡ row 0 (mod 12). Closure verified.*
>
> *Six (col, row) positions; closure at step 6.* For n = 2.
>
> *[pause]*
>
> *Three observations on the construction.*
>
> *Observation one — discretization choice.* *Different minor-row resolutions give different (col, row) representations*. The choice depends on how finely the engineer wants to specify the helix.
>
> *Observation two — closure verifiable.* *The (col, row) table directly verifies closure*. *Last entry = first entry (mod grid wrapping).* *Hand-checkable.*
>
> *Observation three — (col, row) is code-friendly.* *Translating to a code loop*: `for k in range(6): mark(k % 6, (n*k) % (6*n))`. *Direct implementation.*
>
> *[pause]*
>
> *Three uses of the (col, row) table.*
>
> *Use 1 — physical marking.* *The decorated former can be marked with a (col, row) grid; helix positions follow from the table*. *Marking precision matches engineering need.*
>
> *Use 2 — simulation code.* *For students writing electromagnetic simulations*, *the (col, row) table specifies coil geometry parametrically*. *Code-input ready.*
>
> *Use 3 — communication.* *The (col, row) table is communicable to collaborators*. *Universal language: 'positions (0,0), (1,2), (2,4), ...'.* *Engineering communication.*
>
> *[pause]*
>
> Practical takeaway. *Construct the helix path as a (col, row) table.* col(k) = k mod 6; row(k) = (n × k) mod (6n) for canonical resolution. *Six positions; closure at step 6; **`[ORG-INPUT]`** for canonical n.* *Code-ready, marking-ready, communication-ready.*"

## 5. Try it (4:30–5:30)
> "Pause. Write the (col, row) table for n = 1, then for n = 3. Verify closure for each. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Rodin on the unification."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-610 ((col, row) table; six rows; closure verified).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (clean table).
- Music cue: building/computational.
