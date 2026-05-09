Wk 22 — Theme: The Decoqubit — Lens 3: Build — Module C (Practical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Mock up a Decoqubit-inspired data structure. Code or pseudocode for a higher-dim-toroidal data structure.

## 1. Outcome
Student has written a basic data-structure mock-up for a Decoqubit-inspired lattice in code or pseudocode.

## 2. Hook (0:00–0:30)
*[A code snippet showing a multi-dim array indexed mod some periods, with neighbour-access methods.]*

> "Today: code or pseudocode a toroidal lattice. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 3 of 9. Mock up a Decoqubit-style data structure."

## 4. Body (1:00–4:30)

> "Today's build is *coding-flavoured*. You write a basic data structure — in code or pseudocode — that captures a Decoqubit-inspired toroidal lattice.
>
> The point isn't to build a working Decoqubit. The point is to *concretise* the structural ideas in something tractable.
>
> Open your build log. Title the page *Decoqubit-inspired data structure mock-up*.
>
> *[pause]*
>
> *Structure.* A toroidal lattice with multi-dimensional cyclic indexing.
>
> *Step 1 — define dimensions.*
>
> ```
> dimensions = [6, 24]   # ABHA Torus dimensions (start with 2D)
> # for higher-dim Decoqubit: dimensions = [6, 24, 6, 24, 6, 24, 6, 24, 6, 24]
> ```
>
> *Step 2 — define the lattice.*
>
> ```
> lattice = multi_dim_array(dimensions)
> # cells indexed by tuples (i₁, i₂, ..., i_n)
> ```
>
> *Step 3 — define cyclic-mod indexing.*
>
> ```
> def cell(*coords):
>     reduced = tuple(c % dimensions[k] for k, c in enumerate(coords))
>     return lattice[reduced]
> ```
>
> *Each coordinate is reduced mod its dimension; out-of-range indices wrap.*
>
> *Step 4 — define neighbour access.*
>
> ```
> def neighbours(coords):
>     result = []
>     for k in range(len(coords)):
>         for delta in [-1, +1]:
>             new_coords = list(coords)
>             new_coords[k] += delta
>             result.append(cell(*new_coords))
>     return result
> ```
>
> *Each cell has 2n neighbours (one in each direction along each axis).*
>
> *Step 5 — define value initialisation.*
>
> ```
> def initialise_cell(coords):
>     # for ABHA Torus: cell value = 2^row mod 9
>     row = coords[0]   # row index is first coordinate
>     return (2 ** row) % 9
> ```
>
> *For higher-dim Decoqubit: more complex cell value functions; **`[ORG-INPUT]`** would specify.*
>
> *[pause]*
>
> *Step 6 — basic operations.*
>
> *Doubling (analogous to Q1's doubling cycle).*
>
> ```
> def doubling_step(coords):
>     # advance one step along the doubling helix
>     new_coords = list(coords)
>     new_coords[0] = (new_coords[0] + 1) % dimensions[0]
>     return new_coords
> ```
>
> *Antipode (analogous to polar-pair partner).*
>
> ```
> def antipode(coords):
>     return tuple((c + dimensions[k] // 2) % dimensions[k] for k, c in enumerate(coords))
> ```
>
> *[pause]*
>
> *Step 7 — verify.*
>
> ```
> # Test on ABHA Torus (dim = [6, 24])
> assert cell(0, 0) == 1
> assert cell(6, 0) == 1   # wrap from row 6 to row 0
> assert antipode((0, 0)) == (3, 12)
> ```
>
> *[pause]*
>
> What you've written. *A basic toroidal-lattice data structure in code.* It works for the ABHA Torus (with 2 dimensions); it generalises to higher dimensions by adding more dimensions to the array.
>
> *For a 10D Decoqubit-inspired version*: just extend `dimensions` to a 10-tuple. The same code works (modulo memory limits — 10^10 cells is a lot).
>
> *[pause]*
>
> Three observations.
>
> *Observation one.* The structure is *standard programming* — multi-dim arrays with mod indexing. Most programming languages support this.
>
> *Observation two.* The Decoqubit-specific aspects (specific cell values, specific operations beyond doubling and antipode) require **`[ORG-INPUT]`**. The shell exists; the content is pending.
>
> *Observation three.* The mock-up is *runnable*. With a few hours of programming, you could implement and explore basic toroidal-lattice operations on your own machine.
>
> *[pause]*
>
> Practical takeaway. *Use code or pseudocode as a thinking tool.* Even speculative material becomes tractable when you write it as code. *Concrete operations beat abstract claims.*
>
> If you don't program, *write the same as pseudocode* — the structural reasoning is more important than the syntax."

## 5. Try it (4:30–5:30)
> "Pause. Sketch the data structure as pseudocode in your build log. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Hear. Powell on Decoqubit's engineering implications."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-504 (code mock-up).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (code snippet).
- Music cue: workshop, technical.
