Wk 16 — Theme: Wrapping to a Torus — Lens 7: Compare — Module C (Practical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Torus former vs cylinder former. Why builders choose torus formers for Rodin Coils rather than the more common cylinder formers.

## 1. Outcome
Student can articulate why torus formers are required for Rodin Coils and what cylinder formers can't accommodate.

## 2. Hook (0:00–0:30)
*[A cylinder former on one side, a torus former on the other, both wound with example wires.]*

> "Cylinder. Torus. Different formers, different windings."

## 3. Setup (0:30–1:00)
> "Lens 7 of 9. Compare formers."

## 4. Body (1:00–4:30)

> "Most coil work in mainstream electronics uses *cylinder formers* — straight tubes around which wire is wound helically. Why does the Rodin Coil require a *torus former* instead?
>
> *[pause]*
>
> *Cylinder former.* Topologically: a tube with two open ends. Used for solenoids, RF inductors, transformers. Wire is wound around the cylinder's circumference, advancing along the cylinder's length per turn. The wind is *uniform* — every turn is geometrically equivalent.
>
> *Torus former.* Topologically: a closed doughnut. No open ends. Used for toroidal inductors, common-mode chokes, and Rodin Coils. Wire is wound through the doughnut hole and around the doughnut's body, advancing around the major circumference per turn.
>
> *[pause]*
>
> Three reasons Rodin Coils need torus formers.
>
> *Reason one — cyclic closure.* The Rodin Coil's wind pattern follows the doubling cycle, which is *cyclic*. After 24 columns × 4 traversals, the wire returns to its starting position. *A cylinder has open ends; the wire would *terminate* before closing the cycle.* The torus's closure (no ends) accommodates the cyclic pattern naturally.
>
> *Reason two — antipodal pairing.* Rodin Coils have polar pairs at antipodal positions. *On a cylinder, no two points are 'antipodal' in the relevant sense* — opposite ends are different topological locations. *On a torus, antipodal points are well-defined* — each cell has exactly one antipode through the torus body.
>
> *Reason three — the second cyclic axis.* The Rodin Coil's wind has *both* a cyclic angular position (around the major axis) *and* a cyclic strand assignment (around the minor axis). Two cyclic axes require a torus, not a cylinder. The minor circumference of the torus accommodates the strand cycle.
>
> *[pause]*
>
> *Could you wind a Rodin pattern on a cylinder?*
>
> Technically: *partially*. You could lay out 24 angular positions around the cylinder's circumference and wind a single-strand single-traversal pattern. The result would be a *helix* on the cylinder, similar in some ways to the doubling helix on a torus.
>
> But: the wire would *terminate at the cylinder's ends*. You'd need *two terminal connections* (top and bottom), not one. The four-traversal pattern would extend off the cylinder's length; you'd need a very long cylinder or you'd lose the pattern.
>
> Worse: the cylinder doesn't accommodate *antipodal pairing*. Polar pair (1, 8) lives at angularly-opposite positions, but on a cylinder these positions are *also* at different lengths. The pairing breaks down.
>
> *Bottom line.* You can wind a *partial* Rodin pattern on a cylinder, but not the *full* pattern. The torus is required for the canonical structure.
>
> *[pause]*
>
> *Why mainstream electronics still uses cylinders.*
>
> Mainstream coils don't need cyclic closure or antipodal pairing. Solenoids care about *induction along an axis*, which a cylinder provides cleanly. Transformers care about *flux linkage between coupled coils*, which is also fine on a cylinder.
>
> The cylinder is *easier to manufacture*, *easier to wind*, *easier to integrate into circuits*. For most coil applications, it's the right choice.
>
> The Rodin Coil is *not* a typical coil application; the torus is required for *its* specific structure. Different applications, different formers.
>
> *[pause]*
>
> Useful framing. *Mainstream coil engineering uses cylinders because cylinders fit mainstream coil purposes. Rodin Coil engineering uses tori because tori fit Rodin Coil purposes. Neither former is universally better; they fit different structures.*
>
> Practical takeaway. *When you acquire a torus former, you're committing to Rodin-specific work.* The former isn't useful for solenoid winding. It's specialised hardware for specialised work. The specialisation is the point."

## 5. Try it (4:30–5:30)
> "Pause. One sentence: which feature of the Rodin Coil requires a torus rather than a cylinder? Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Defend. Why the torus former is the right starting point."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-363 (cylinder vs torus formers, side-by-side).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (two formers).
- Music cue: comparative, neutral.
