Wk 06 — Theme: Polar Number Pairs — Lens 2: Count — Module C (Practical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Strand counting in a multi-strand Polar-Pair build. Six strands, three pairs, specific arrangement.

## 1. Outcome
Student can specify the strand count and pair assignments for a Wk-35 multi-strand Rodin Coil.

## 2. Hook (0:00–0:30)
*[Spec card: 6 strands, 3 pairs, 24 turns × 6 = 144 total turns.]*

> "Six strands. Three pairs. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Counting strands. Six minutes."

## 4. Body (1:00–4:30)

> "The Wk-35 multi-strand build adds strand counting to the build log. Specifications:
>
> *Strands: 6.* One strand per polar-pair-half. Each strand is a complete Doubling-Circuit winding starting from one of the six units {1, 2, 4, 5, 7, 8}.
>
> *Pairs: 3.* Strands are paired (1↔8), (2↔7), (4↔5). Pair members start at antipodal vertices.
>
> *Turns per strand: 24.* Same as Wk-33's single-strand build.
>
> *Total turns: 144.* Six strands × 24 turns. Reduce: *1 + 4 + 4 = 9*. Vertex 9.
>
> *Wire length: 24 m.* Six strands × 4 m each. Plus 6 m extra for terminations and routing. Total: 30 m of magnet wire.
>
> *Build time: 12 hours.* Roughly twice the single-strand build, plus an hour of strand-organisation overhead.
>
> *[pause — show the spec card]*
>
> The strand-pair structure introduces a new build-log field: *strand index*. Each turn of the wind is logged not just by *turn number* but also by *which strand is being wound right now*. The full log entry is *strand-N, turn-M, vertex-V*. This lets you reconstruct the full build state from the log alone.
>
> *[pause]*
>
> Practical implication. With six strands, you don't wind one at a time. You wind all six in parallel — bringing all six wire spools to the workbench, advancing each strand by one position in turn. This is much harder than single-strand winding. The Wk-35 build is intentionally a step up in complexity.
>
> The strand-pair organisation matters for two reasons. First — it determines the field structure. Second — it determines the wiring termination structure (which strand-end connects to which other strand-end at the coil's terminals). Wk 35 will give the canonical termination spec.
>
> *[pause]*
>
> One verification trick. The total turn count's digital root — *144 → 9* — corresponds to the fixed-point vertex 9. This isn't a coincidence; it's a property of *six strands × 24 turns*. *24 mod 9 = 6*; *6 × 6 = 36 mod 9 = 0 (= 9)*. The build's verification milestone is at turn 144 = vertex 9.
>
> Same digital-root milestone-check trick from Wk 3. Just applied to the larger build."

## 5. Try it (4:30–5:30)
> "Pause. Add to your build log under *Builds*: *Wk 35 spec — 6 strands, 3 pairs, 24 turns each, 144 total, 30 m wire, 12 hours.* The Wk-35 build is now in your log. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. The two-strand mock-up."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-160 (multi-strand spec card).
- Music cue: workshop, precise.
