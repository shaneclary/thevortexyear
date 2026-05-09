Wk 27 — Theme: Doubling Circuit Revisited (as Coil Winding) — Lens 2: Count — Module B (Mathematical)

Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Prove circuit-as-helix-closure. Mathematical proof that the doubling cycle's six steps close into the helix that returns to the starting position.

## 1. Outcome
Student can prove that the doubling-cycle helix closes after six steps and articulate which mathematical conditions guarantee closure.

## 2. Hook (0:00–0:30)
*[A proof sketch: six discrete steps; (θ₆, φ₆) computed; modular reduction shows ≡ (θ₀, φ₀); closure verified.]*

> "Prove the circuit closes. Six steps; back to start. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Prove circuit-as-helix-closure."

## 4. Body (1:00–4:30)

> "Lens 1 parametrised the helix. Today: *prove the circuit closes mathematically*.
>
> *[pause]*
>
> *What 'closure' means.*
>
> A *closed cycle* is a sequence of steps that *returns to its starting point*. *For the doubling cycle, six steps must return to position 1*.
>
> Mathematically: position 1 is at toroidal coordinates (θ₀, φ₀) = (0, 0). After six steps, the helix lands at (θ₆, φ₆). *Closure requires (θ₆, φ₆) ≡ (θ₀, φ₀) modulo (2π, 2π)*.
>
> *[pause]*
>
> *The proof, step by step.*
>
> *Setup.* From Lens 1: *θₖ = k × (2π/6); φₖ = n × k × (2π/6)*, for some integer n (the minor winding number).
>
> *Step 1 — compute θ₆.*
>
> *θ₆ = 6 × (2π/6) = 2π.*
>
> *Modulo 2π:* *θ₆ ≡ 0 (mod 2π)*. *Major-circle returns to start.*
>
> *Step 2 — compute φ₆.*
>
> *φ₆ = n × 6 × (2π/6) = 2π × n.*
>
> *Modulo 2π:* *φ₆ ≡ 0 (mod 2π) for any integer n.* *Minor-circle returns to start regardless of n.*
>
> *Step 3 — combine.*
>
> *(θ₆, φ₆) ≡ (0, 0) ≡ (θ₀, φ₀) (mod 2π).*
>
> *Closure verified.* *The cycle returns to starting position after six steps for any integer n ≥ 1.*
>
> *Three lines of proof; mainstream modular arithmetic.*
>
> *[pause]*
>
> *What the proof establishes.*
>
> *Establish 1 — closure is automatic given the construction.* *Six discrete steps × (1/6 × 2π) per step = 2π = closure*. *The closure is structural; not dependent on specific n.*
>
> *Establish 2 — the doubling cycle's length and the helix's closure are related.* *6 steps = 1/6 fraction = closure when full cycle traversed.* *If the cycle had length 5, it wouldn't close on the same major-progression scheme.*
>
> *Establish 3 — n is a free parameter for closure.* *Any integer n closes; foundation picks one for engineering reasons.* *Closure is a topological constraint; specific n is engineering choice.*
>
> *[pause]*
>
> *Three observations on the proof.*
>
> *Observation one — proofs short and clean.* *The closure proof is three lines of modular arithmetic*. *Mainstream-defendable; hand-checkable.*
>
> *Observation two — the doubling cycle's length is essential.* *Six is not arbitrary*. *6 is the order of 2 in (Z/9Z)*; that's why the cycle has length 6; that's why the helix closes on a 6-fold-symmetric major-progression*. *The arithmetic determines the helix.*
>
> *Observation three — the proof connects Q1 and Q3.* *Q1's modular arithmetic gives the cycle length; Q3's helix needs that length for closure*. *The proof uses Q1 content to verify Q3 content; spiral pedagogy demonstrated.*
>
> *[pause]*
>
> *Why the proof matters for Q3 engineering.*
>
> *Reason 1 — coil specifications.* *The closure proof confirms that a 6-position coil winding will close back on itself*. *Engineers can rely on this; it's not a guess.*
>
> *Reason 2 — multi-strand designs.* *If multiple coils are wound together (multi-strand), each must close*. *The proof generalises to multi-strand designs straightforwardly.*
>
> *Reason 3 — manufacturability.* *Closed-cycle coils are manufacturable*; non-closing helices would have free wire ends mid-pattern. *Closure is engineering-prerequisite.*
>
> *[pause]*
>
> *Comparison to mainstream toroidal coils.*
>
> *Mainstream toroidal coils* don't typically have *six-fold major-circle symmetry*; they typically wind continuously around the small-circle with *high minor-turn count* and *minimal major-progression*. *Different topology; different closure conditions; different proof structure.*
>
> *The Rodin Coil's six-step helical closure* is a *specific Rodin Coil property*; mainstream toroidal coils have different closure properties.
>
> *[pause]*
>
> Practical takeaway. *Prove circuit-as-helix-closure: six steps × (1/6 × 2π) = 2π = closure for any integer n.* Three-line proof; mainstream modular arithmetic; engineering-prerequisite. *Q1's cycle length determines Q3's coil topology.*"

## 5. Try it (4:30–5:30)
> "Pause. Write the three-line closure proof in your notebook. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Construct the path as a function of (col, row)."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-609 (closure proof; θ₆ ≡ 0; φ₆ ≡ 0; cycle returns).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (proof sketch).
- Music cue: counting/proving.
