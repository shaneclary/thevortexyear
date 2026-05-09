Wk 21 — Theme: Enneagram & Enneatruth — Lens 1: See — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Rotation showing geometric equivalence. The graph isomorphism between Rodin Symbol (with family-3 triangle added) and the classical enneagram, made explicit by relabelling.

## 1. Outcome
Student can describe the relabelling that maps the Rodin Symbol's structure onto the classical enneagram.

## 2. Hook (0:00–0:30)
*[An animation showing the Rodin Symbol's vertex labels rotating to match the classical enneagram's labels.]*

> "Relabel the vertices. The figure becomes the enneagram. Six minutes."

## 3. Setup (0:30–1:00)
*[Carry-over: yesterday closed Mod-A with the spiral and Mod B pulsing.]*

> "Lens 1 of 9, Module B. The relabelling that aligns the figures."

## 4. Body (1:00–4:30)

> "Mod A established that the Rodin Symbol (with family-3 triangle) and the classical enneagram are *graph-isomorphic*. Today we make the isomorphism explicit by writing the *relabelling map*.
>
> *[pause]*
>
> *Setup.*
>
> Both figures have 9 vertices on a circle. Both have an outer 6-cycle and (in the extended Rodin / classical) an inner 3-triangle.
>
> *Outer 6-cycles:*
>
> Rodin doubling cycle: 1 → 2 → 4 → 8 → 7 → 5 → 1.
>
> Classical enneagram: 1 → 4 → 2 → 8 → 5 → 7 → 1.
>
> The cycles visit the same vertices in different orders.
>
> *[pause]*
>
> *The relabelling.*
>
> Define a map ψ: {1, 2, 4, 5, 7, 8} → {1, 2, 4, 5, 7, 8} that sends Rodin labels to classical labels in matching cycle positions.
>
> Position 1 in Rodin cycle (start): 1. Position 1 in classical cycle: 1. So ψ(1) = 1.
>
> Position 2 in Rodin cycle: 2. Position 2 in classical cycle: 4. So ψ(2) = 4.
>
> Position 3 in Rodin cycle: 4. Position 3 in classical cycle: 2. So ψ(4) = 2.
>
> Position 4 in Rodin cycle: 8. Position 4 in classical cycle: 8. So ψ(8) = 8.
>
> Position 5 in Rodin cycle: 7. Position 5 in classical cycle: 5. So ψ(7) = 5.
>
> Position 6 in Rodin cycle: 5. Position 6 in classical cycle: 7. So ψ(5) = 7.
>
> *Mapping summary:* ψ(1) = 1; ψ(2) = 4; ψ(4) = 2; ψ(5) = 7; ψ(7) = 5; ψ(8) = 8.
>
> Family 3 fixed: ψ(3) = 3; ψ(6) = 6; ψ(9) = 9.
>
> *[pause]*
>
> *Verify the map.*
>
> Apply ψ to Rodin's cycle 1 → 2 → 4 → 8 → 7 → 5 → 1.
>
> ψ(1) = 1. ψ(2) = 4. ψ(4) = 2. ψ(8) = 8. ψ(7) = 5. ψ(5) = 7. ψ(1) = 1.
>
> Resulting sequence: 1 → 4 → 2 → 8 → 5 → 7 → 1.
>
> *That's the classical enneagram cycle.* ✓
>
> The relabelling ψ takes Rodin's cycle to the classical enneagram's cycle.
>
> *[pause]*
>
> *Algebraic structure of ψ.*
>
> ψ swaps elements: 2 ↔ 4 and 5 ↔ 7. Fixes 1, 8, 3, 6, 9.
>
> In group-theoretic terms, ψ is the permutation (2 4)(5 7) — two disjoint transpositions. Order: 2 (it's an involution).
>
> *Note.* This is NOT a rotation of the Rodin Symbol's cycle (which would cycle through positions); it's a *relabelling* that sends some labels to each other.
>
> Geometrically, ψ corresponds to *reflecting* the Rodin Symbol's cycle across a particular axis — the axis that fixes 1, 8, and the family-3 triangle.
>
> *[pause]*
>
> Three observations.
>
> *Observation one.* The two figures *are* graph-isomorphic, with explicit map ψ. *Mathematical equivalence is precisely stated.*
>
> *Observation two.* The map is *non-trivial* but small — just two swaps. The structure is preserved with minimal effort.
>
> *Observation three.* The map is *not unique*. Other graph isomorphisms exist (involving rotations and other reflections). ψ is one canonical choice; mathematicians might pick others.
>
> *[pause]*
>
> Practical takeaway. *Memorise ψ: 2 ↔ 4 and 5 ↔ 7.* This is the relabelling that aligns Rodin and classical-enneagram cycles."

## 5. Try it (4:30–5:30)
> "Pause. Verify ψ on a path: ψ(2) → ψ(4) = 4 → 2. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Count. Prove the two figures are graph-isomorphic."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-470 (relabelling map ψ visualised).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (relabel animation).
- Music cue: structural, organised.
