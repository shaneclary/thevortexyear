Wk 17 — Theme: The ABHA Torus — Surface Structure — Lens 6: Apply — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Use the decorated torus to find any digit-root spatially. Three worked spatial-lookup examples.

## 1. Outcome
Student can use the labelled torus as a 3D lookup tool for digital roots.

## 2. Hook (0:00–0:30)
*[Hands rotating the torus, finger landing on a specific cell, value visible.]*

> "Spatial lookup. Three problems. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Use the torus surface for fast digit-root lookup."

## 4. Body (1:00–4:30)

> "Today's apply uses the labelled torus as a working tool. The 3D version of the grid lookup from Wk 15 is sometimes faster (and always more memorable) for handling questions involving cyclic structure.
>
> *[pause]*
>
> *Problem 1.* Find digital_root(2³⁰ × 10²⁰).
>
> *Method.*
>
> r = 30 mod 6 = 0. Row 0 on the torus.
>
> c = 20 mod 24 = 20. Column 20 on the torus.
>
> Find cell (0, 20) on the torus. Read the label.
>
> *Answer:* row 0 holds value 1. *Digital root = 1.*
>
> Direct verification: 2³⁰ = 1,073,741,824. Digital root: 1+0+7+3+7+4+1+8+2+4 = 37 → 3+7 = 10 → 1+0 = 1. ✓
>
> *[pause]*
>
> *Problem 2.* Find digital_root(2¹⁰⁰ × 10⁵⁰⁰).
>
> *Method.*
>
> r = 100 mod 6 = 4 (since 100 = 96 + 4).
>
> c = 500 mod 24 = ? 500 / 24 = 20 remainder 20. So c = 20.
>
> Find cell (4, 20). Read.
>
> *Answer:* row 4 holds value 7. *Digital root = 7.*
>
> *[pause]*
>
> *Problem 3.* Find digital_root(2⁵⁰ × 10⁵⁰ × 2³⁰).
>
> Combined: 2⁸⁰ × 10⁵⁰.
>
> r = 80 mod 6 = 2 (since 80 = 78 + 2; 78 = 13 × 6).
>
> c = 50 mod 24 = 2.
>
> Find cell (2, 2). Read.
>
> *Answer:* row 2 holds value 4. *Digital root = 4.*
>
> *[pause]*
>
> *What just happened.*
>
> Three modular-9 questions answered in seconds *via spatial lookup on the torus*. The tool is functionally equivalent to the flat-grid lookup from Wk 15, but the 3D version has memory affordances the flat version doesn't.
>
> *[pause]*
>
> *Why the torus version sometimes beats the grid version.*
>
> *Reason one — proximity.* The torus is on your desk; the grid is on the wall. For quick lookups, the torus wins by proximity.
>
> *Reason two — embodied recall.* You handled the torus while labelling it. Your hand remembers where the rows are. *Muscle memory* assists recall.
>
> *Reason three — structure visibility.* On the torus, you can see *all* the family-1 cells together (one colour) and *all* the family-2 cells together (another colour). Pattern recognition is faster.
>
> *[pause]*
>
> *Three observations.*
>
> *Observation one.* Spatial lookup is *not always faster than computational lookup*. For one-off problems, mental modular arithmetic often wins. The torus shines for *repeated* lookups in similar form.
>
> *Observation two.* The torus has *limits as a lookup tool*. It handles 2ʳ × 10ᶜ. For other structures (3ʳ, 5ʳ, etc.) you'd need different tori.
>
> *Observation three.* The torus is *memorable*. Even if you never use it for actual lookups, it's a *mnemonic* that anchors the structure of mod 9 in your spatial memory.
>
> *[pause]*
>
> Practical takeaway. *Use the torus actively this week.* Pose yourself problems and look them up on the torus. The handling will deepen the embodied vocabulary.
>
> By Q3, the same torus (in its 3D-printed form) becomes the wiring substrate. The lookup-tool use this week is preparation for the structural-substrate use later."

## 5. Try it (4:30–5:30)
> "Pause. Pose a digital_root question of form 2ʳ × 10ᶜ. Look it up on your torus. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. ABHA Torus vs plain mathematical torus."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-370 (three lookups worked on torus).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (rotating torus, finger lookup).
- Music cue: working/applied.
