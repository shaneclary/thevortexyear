Wk 21 — Theme: Enneagram & Enneatruth — Lens 2: Count — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Prove the two figures are graph-isomorphic. Formal proof using the relabelling map.

## 1. Outcome
Student can prove the graph isomorphism between Rodin Symbol (extended) and classical enneagram.

## 2. Hook (0:00–0:30)
*[A theorem statement: "Rodin Symbol with family-3 triangle ≅ classical enneagram."]*

> "Theorem. Graphs isomorphic. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Prove graph isomorphism formally."

## 4. Body (1:00–4:30)

> "Today we prove the graph isomorphism between the (extended) Rodin Symbol and the classical enneagram.
>
> *[pause]*
>
> *State the claim.* The Rodin Symbol (vertices {1, 2, 4, 5, 7, 8} forming a 6-cycle 1-2-4-8-7-5 plus vertices {3, 6, 9} forming a 3-triangle 3-6-9) is graph-isomorphic to the classical enneagram.
>
> *Proof.*
>
> *Step 1 — define vertex sets.*
>
> Rodin Symbol vertex set: V_R = {1, 2, 4, 5, 7, 8} ∪ {3, 6, 9} = {1, 2, 3, 4, 5, 6, 7, 8, 9}.
>
> Classical enneagram vertex set: V_E = {1, 2, 3, 4, 5, 6, 7, 8, 9}.
>
> *V_R = V_E.* Same nine vertices.
>
> *Step 2 — define edge sets.*
>
> Rodin edges: {(1,2), (2,4), (4,8), (8,7), (7,5), (5,1)} (cycle) ∪ {(3,6), (6,9), (9,3)} (triangle) = 9 edges.
>
> Classical enneagram edges: {(1,4), (4,2), (2,8), (8,5), (5,7), (7,1)} (cycle) ∪ {(3,6), (6,9), (9,3)} (triangle) = 9 edges.
>
> *Step 3 — define the relabelling map.*
>
> ψ: V_R → V_E defined by:
>
> ψ(1) = 1, ψ(8) = 8 (fixed).
>
> ψ(2) = 4, ψ(4) = 2, ψ(5) = 7, ψ(7) = 5 (swapped).
>
> ψ(3) = 3, ψ(6) = 6, ψ(9) = 9 (fixed).
>
> *Step 4 — verify ψ is a bijection.*
>
> Domain: V_R, 9 elements. Codomain: V_E, 9 elements. ψ defined on each element of V_R, and each element of V_E is hit exactly once (by checking the formula). *Bijection.* ✓
>
> *Step 5 — verify ψ preserves edges.*
>
> Map each Rodin edge through ψ and check it appears in the enneagram edge set.
>
> ψ(1, 2) = (1, 4). Is (1, 4) ∈ enneagram edges? Yes. ✓
>
> ψ(2, 4) = (4, 2). Same as (4, 2) ∈ enneagram edges? Yes. ✓
>
> ψ(4, 8) = (2, 8). ∈ enneagram edges? Yes. ✓
>
> ψ(8, 7) = (8, 5). ∈ enneagram edges? Yes. ✓
>
> ψ(7, 5) = (5, 7). ∈ enneagram edges? Yes. ✓
>
> ψ(5, 1) = (7, 1). ∈ enneagram edges? Yes. ✓
>
> ψ(3, 6) = (3, 6). ∈ enneagram edges? Yes. ✓
>
> ψ(6, 9) = (6, 9). ∈ enneagram edges? Yes. ✓
>
> ψ(9, 3) = (9, 3). ∈ enneagram edges? Yes. ✓
>
> *All 9 Rodin edges map to 9 enneagram edges. ψ preserves edges.* ✓
>
> *Step 6 — conclude.*
>
> ψ is a bijective vertex map preserving edges. *Therefore the Rodin Symbol (extended) is graph-isomorphic to the classical enneagram.*
>
> *Q.E.D.*
>
> *[pause]*
>
> *What the proof establishes.*
>
> *Establishes 1.* The two figures have the *same graph structure* up to vertex relabelling.
>
> *Establishes 2.* The relabelling ψ is *explicit* and *finite* — easy to write, easy to check.
>
> *Establishes 3.* The traditions can *meaningfully discuss the same figure* in graph-theoretic terms, even if their interpretive vocabularies differ.
>
> *[pause]*
>
> Three observations.
>
> *Observation one.* The proof is *short* — about 9 lines of edge-checking. The brevity reflects the small size of the structures.
>
> *Observation two.* The proof *generalises* — graph-isomorphism for small graphs is mechanical once the map is known. Finding the map can be hard; verifying it is easy.
>
> *Observation three.* The two figures share *more* than the abstract graph: they share the *cycle-and-triangle* topology (a 6-cycle plus a 3-cycle, disjoint). *This is a substantive structural sharing, not just abstract isomorphism.*
>
> *[pause]*
>
> Practical takeaway. *Pin the proof in your notebook.* When asked whether the two traditions share structure, you have the formal answer: yes, with explicit isomorphism ψ."

## 5. Try it (4:30–5:30)
> "Pause. Write the bijection ψ in your notebook. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Build. Compute the rotation that aligns them."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-471 (worked proof).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (theorem statement).
- Music cue: focused, quiet.
