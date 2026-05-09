Wk 09 — Theme: Powers of Ten & Scale Invariance — Lens 6: Apply — Module C (Practical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Practical scaling rules for builders. How to scale a build up or down while preserving the math.

## 1. Outcome
Student can apply the three scaling rules to size a Rodin Coil for a specific application.

## 2. Hook (0:00–0:30)
*[Three rules in a card.]*

> "Three rules. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply scaling rules."

## 4. Body (1:00–4:30)

> "When scaling a Rodin Coil up or down, three rules preserve the math while adjusting the physics.
>
> *Rule one — preserve the winding count.* Always 24 positions per traversal, 4 traversals, 96 total turns. The count comes from the math, not from the size. *Don't scale the count; scale only the size.*
>
> *Rule two — scale linear dimensions proportionally.* If you want a coil 2× larger, scale the major diameter, minor diameter, wire diameter (for power capacity), and any drilled features by 2× each. *Maintain aspect ratio.*
>
> *Rule three — adjust wire gauge for current capacity.* Larger coils carrying more current need thicker wire. AWG 22 is fine for small/medium coils at low currents (sub-ampere). Larger or higher-current builds need AWG 18 or even AWG 16. *Wire diameter scales sub-linearly with size; check ampacity tables.*
>
> *[pause]*
>
> Worked example: scaling from medium (200 mm) to small (100 mm).
>
> *Major diameter:* 200 → 100 mm (half).
>
> *Minor diameter:* 50 → 25 mm (half).
>
> *Wire length per turn:* roughly halves. Total wire: 6 m → 3 m (half).
>
> *Wire gauge:* AWG 22 stays AWG 22 — current capacity is unchanged for the same drive voltage.
>
> *Inductance:* roughly quarters (scales as size² for similar coils).
>
> *Resonant frequency:* roughly doubles (scales inversely with size for similar coils).
>
> *Build time:* roughly halves (less wire to manage).
>
> *Cost:* halves to thirds (less material).
>
> *[pause]*
>
> One subtlety. Coils that are *too small* run into manufacturing limits — minimum wire gauge, minimum drilled hole size, finger dexterity for hand-winding. Coils smaller than ≈50 mm major diameter are typically built with specialised tools.
>
> Coils that are *too large* run into different limits — wire weight, mechanical stress, cost of materials, time. Coils larger than ≈500 mm major are typically built with mechanical winding aids.
>
> The 50-500 mm range is the *practical-handcraft window* for a single builder.
>
> *[pause]*
>
> Build log entry. *Scaling rule: 24-pos × 4-trav × 96-turn count is fixed; linear dimensions scale proportionally; wire gauge by current capacity. Practical range: 50-500 mm major.*"

## 5. Try it (4:30–5:30)
> "Pause. Apply the rules: if you wanted a 250-mm major coil (1.25× the canonical 200-mm medium), what's the wire length? *Roughly 7.5 m.* Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. Engineering scaling laws."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-211 (scaling rules card).
- Music cue: precise.
