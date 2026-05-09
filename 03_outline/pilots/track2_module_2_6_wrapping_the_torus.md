# Module 2.6 — Wrapping the Map onto the Torus

**Track:** Intermediate (STEM-literate)
**Estimated runtime:** 35 min (video) + 30 min (exercise) = **~65 min**
**Prerequisites:** Modules 2.1 *Digital Roots and Modular Arithmetic*, 2.2 *The Doubling Circuit, Derived*, 2.3 *The Nine Multiplication Series*. Comfort with: addition mod 9, basic 2D coordinates, the idea of a parameterised surface.
**Status:** Draft — pilot for org review

---

## 0. Authoring notes (non-student-facing)

This is the lesson where the math stops being a curiosity and becomes a *geometry*. The student moves from "neat number cycle" to "this lives on a specific 3D surface, with coordinates we can write down." We're walking the line carefully: present the construction *as Rodin gives it* and as Powell narrates it, while being honest that the geometry of the wrap is a *modelling choice* — there are several ways to embed a 24-cell number map on a torus, and the org should ratify which one the course teaches as canonical.

Two quotes carry the lesson:
- Rodin: *"The Symbol of Enlightenment is a 2D shadow of the Decoqubit."* (P1-1; `[ORG-REVIEW]` exact quote.)
- Powell: *"This math has no anomalies and shows the dimensional shape and function of the universe as being a toroid."* (P1-13, Red Ice Hour 1.)

We use the term **Rodin Number Map** (the 2D grid) and **ABHA Torus** (the 3D surface), per `01_sources/KEY_CONCEPTS.md`. We avoid "Rodin Torus" in the lesson body to reduce confusion; it appears once with a parenthetical note that some sources use the names interchangeably.

---

## 1. Learning outcomes

By the end of this module, a student can:

1. Construct the **Rodin Number Map** as a 24-column grid of digital roots and identify the doubling-circuit row, the halving-circuit row, and the family-number-group columns.
2. Define the **wrap operation** that takes the 2D grid to a torus: identify cells along (col, row) and explain why the grid edges glue.
3. State the relationship between the **Doubling Circuit** and the **Family Number Groups** as they sit on the torus surface.
4. Read the resulting torus as the **ABHA Torus** as presented by Rodin and Powell, and articulate why Powell calls it *"the dimensional template of the universe"*.
5. Explain in one paragraph why the **3-6-9 axis** is treated as orthogonal to the doubling circuit on this surface.

---

## 2. Setup (1–2 min)

> "Up to now we've drawn the Doubling Circuit on a flat circle. That works, but it hides something. The decimal system has *more* structure than nine numbers in a ring — it has scale, and direction, and a way of repeating that turns out to fit perfectly onto a 3D shape. Today we're going to build that shape from scratch. By the end you'll see why every Rodin diagram you've ever seen of a torus has the colours it has — and why both Rodin and Powell call this the dimensional template of the universe."

[DIAGRAM: D-10 — 2D number map (Scot Nelson grid)]

---

## 3. Concept (8–15 min)

### 3.1 From the circle to a strip

Recall from 2.2 that the Doubling Circuit isn't really six numbers — it's the orbit of `2ⁿ mod 9` starting from 1:

$$\{2^0, 2^1, 2^2, 2^3, 2^4, 2^5\} \pmod 9 \;=\; \{1, 2, 4, 8, 7, 5\}$$

That's one direction of motion. The other direction is digit-place: 1, 10, 100, 1000... All reduce to **1**. The decimal system has a *scaling* axis on which 1, 10, 100 are "the same" — and an *operating* axis on which doubling rotates through the circuit.

If we lay these out as a grid — scaling along columns, doubling along rows — we get the **Rodin Number Map**: a 2D table of digital roots.

### 3.2 Constructing the Rodin Number Map

Build the table. The cell at column *c*, row *r* contains `digital_root(2^r × 10^c)`. Because `10 ≡ 1 (mod 9)`, the column index *c* doesn't change the digital root — every row repeats. That repetition is the point: it tells us the grid is **periodic**, with a period that closes up on itself.

Specifically, the row period is 6 (the doubling circuit length), and we let the columns extend to 24 — four full periods of the doubling circuit, which gives us a grid that closes into a particular 3D surface. (We'll see in §3.4 why "24" is the right column count; for now take it on the construction, prove it on the practice sheet.)

[DIAGRAM: D-10 — 2D Rodin Number Map laid out as a grid]

The grid has, by construction:
- **Rows along the doubling axis:** each row repeats 1, 2, 4, 8, 7, 5 (or its halving counterpart) over and over.
- **Columns along the scaling axis:** every column has the same digital-root value top to bottom — because multiplying by 10 doesn't change a digital root.
- **Two missing residue classes:** the values 3, 6, 9 don't appear in this grid. They're the **3-6-9 axis** and live on a separate, perpendicular structure.

### 3.3 The wrap operation

To turn a 2D grid into a torus, we glue the edges. Specifically:

- **Top edge ↔ bottom edge.** When the doubling circuit completes (row 6 = row 0), the grid wraps vertically. This makes a cylinder.
- **Left edge ↔ right edge.** When we've stepped through the full 24-column period, the grid wraps horizontally. The cylinder closes into a **torus**.

Formally, identify points: `(c, r) ≡ (c + 24, r) ≡ (c, r + 6)`. The result is a torus with two natural integer coordinates — a "small loop" of length 6 and a "big loop" of length 24.

[DIAGRAM: D-11 — Number map wrapping onto torus surface]
[ANIMATION: A-03 — Number map → torus wrap, then Aetheron activation pattern]

This is the **ABHA Torus**. As a topological object it's just `S¹ × S¹`. As a *number-decorated* object — with each cell carrying a digital root — it's the substrate Rodin and Powell point to when they say:

> "This math has no anomalies and shows the dimensional shape and function of the universe as being a toroid." *(P1-13, Randy Powell, Red Ice Radio Hour 1, 2012)*

### 3.4 Why 24 columns?

The choice of 24 columns isn't arbitrary in Rodin's construction. It comes from the lowest common multiple of the structures we want to see simultaneously close on the surface:
- The Doubling Circuit (period 6).
- The Family Number Groups, which step in increments of +3 around the circle (period 3 on the doubling axis).
- The polar-pair antiphase (period 2).

LCM(6, 3, 2) × 2 = 12 → and Rodin extends to 24 to expose two full polar-pair traversals visibly on the surface. *(Provenance:* `[ORG-REVIEW]` — *this rationale is reconstructed from the geometry of the published diagrams; if the org has Rodin's own derivation of the 24-count, we should quote it directly.)*

### 3.5 What lives on the torus

Once you've wrapped, three structures appear naturally on the surface:

1. **The Doubling Circuit traces a helix** around the small loop. This is the path of "doubling motion" — what Rodin posits is the natural path of energy.
2. **The Polar Number Pairs sit on opposite sides of the torus.** 1 and 8 are antipodal; so are 2 and 7, and 4 and 5. The torus has a built-in antipodal symmetry the flat circle could only suggest.
3. **The Family Number Groups (+3, +6, +9) tile the surface in three colours.** Every point on the torus belongs to exactly one family. This tiling is what Rodin uses to explain "Aetheron flow" in the next module (2.9).

[DIAGRAM: D-12 — Rodin Torus Number Map (3D coloured)]

### 3.6 Where the 3-6-9 axis goes

The numbers 3, 6, 9 *don't appear* in the wrapped grid. They live on a separate axis — the *axis of the torus itself*, perpendicular to the surface we just built. In Rodin's language: the doubling circuit is the surface flow; the 3-6-9 oscillation is **Spirit moving through the centre**.

This is the modelling claim Rodin treats as foundational. We'll meet it again in 2.9 (*Aetheron Flux*) and 2.10 (*The 3-6-9 Pulse, Reframed*). For now: it's enough to see *that* 3, 6, 9 don't fit on the wrap and *that* the geometry needs them somewhere else.

---

## 4. Walkthrough (10–20 min)

**Materials:** Graph paper or a spreadsheet; coloured pencils; a printable torus template (see asset T-01) or — better — a 3D-printable torus model.

### Step 1 — Build the 2D map.
On graph paper, draw a 24-column by 6-row grid. Fill in each cell with `digital_root(2^r × 10^c)`. Verify that:
- Every row reads `1, 2, 4, 8, 7, 5` (or its rotation).
- Every column is constant.

### Step 2 — Colour the polar pairs.
Pick three colours. Colour all 1s and 8s in colour A. All 2s and 7s in colour B. All 4s and 5s in colour C. You should see vertical stripes — the polar-pair structure is *already visible* in the flat grid before we wrap.

### Step 3 — Cut and wrap (paper version).
Cut the grid out as a strip. Glue the left and right edges (1 ↔ 1) — you have a cylinder. Bring the cylinder's two ends around and glue (top ↔ bottom). You have a paper torus with a number map on its surface.

### Step 4 — Trace the doubling helix.
With a marker, trace the path 1 → 2 → 4 → 8 → 7 → 5 → 1 *on the torus surface*. Notice it spirals. That spiral is the **doubling helix** — the path you've drawn in 2D in every prior lesson, now embedded in 3D.

### Step 5 — Identify the antipodes.
Pick any cell labelled "1" on your torus. Find its physical antipode (the point diametrically opposite *through the body of the torus*). What number is there? *(It should be an 8 — confirming the polar pair geometry.)*

---

## 5. Practice

**Exercise 1.** Verify by hand that `digital_root(2^r × 10^c)` is independent of *c*. Show the proof in two lines using `10 ≡ 1 (mod 9)`.

**Exercise 2.** Construct the Rodin Number Map as a 12 × 6 grid (instead of 24 × 6). What changes? What stays the same?

**Exercise 3.** On your torus, pick the cell at row 0, column 0 (value 1). Walk *one step doubling* (one cell down) and *one step scaling* (one cell right). Repeat 12 times, recording the (row, column) coordinates. Where do you end up?

**Exercise 4.** The Family Number Group +3 contains the digital roots 3, 6, 9. Show that none of these can appear in the Rodin Number Map as constructed in §3.2. What does this imply about the geometric role of the 3-6-9 axis?

**Exercise 5.** *(Open-ended.)* If we built the same grid but used base-12 instead of base-10, what would change? What would the equivalent "doubling circuit" look like? Why might Rodin argue this isn't a fair comparison?

<details><summary>Answers</summary>

1. `2^r × 10^c ≡ 2^r × 1^c ≡ 2^r (mod 9)`. The column index drops out.
2. With 12 columns, you still get a torus, but the surface only shows one full polar-pair traversal — the 1↔8, 2↔7, 4↔5 antipodal symmetry is harder to see at a glance. The doubling helix still closes.
3. After 12 steps, you return to (row 0, column 12). After 24 steps, back to (row 0, column 0) — the closing of the torus. Specific path tabulated separately in solutions appendix.
4. The grid's values are `2^r mod 9`, which (for r = 0..5) hits {1, 2, 4, 5, 7, 8}. The set {3, 6, 9} is the complement in {1..9}; equivalently, `2^r` never hits a multiple of 3 mod 9 because 2 and 9 are coprime. Geometrically: the 3-6-9 numbers belong to a *different* orbit and require a separate axis (the torus's central axis) to live on.
5. In base 12, digital-summing reduces mod 11. The doubling cycle becomes the orbit of `2^r mod 11`: {1, 2, 4, 8, 5, 10, 9, 7, 3, 6, 1...} — period 10, hitting *every* nonzero residue. Rodin would argue the natural status of base 10 *is* the point being made: the rich structure of the decimal system is itself evidence of natural law, not an artefact of choice. This is exactly the kind of objection Module 2.14 *Engaging Critics with Rigor* addresses head-on.

</details>

---

## 6. Skeptics' corner (3–5 min)

> *"You've embedded a 6×24 grid on a torus. So has every textbook on tilings of `S¹ × S¹`. Where's the physics?"*

That's a fair pushback, and the lesson should not pretend otherwise. What we've shown today is *geometric*: the digital-root structure of base-10 arithmetic admits a clean toroidal embedding with helical doubling-circuit structure and antipodal polar pairs. This is a true mathematical fact about modular arithmetic — and it would be true in any number system that produces a similar orbit structure.

What Rodin and Powell *additionally* claim is that this geometry is **physically instantiated** — that the torus is not a metaphor for energy flow but the actual shape of it, with the Aetheron framework giving the mechanism. That's a much stronger claim. We separate the two levels carefully:

- **Module 2.6 (this lesson):** establishes the geometry. Defensible as straightforward modular arithmetic, no physical claim required.
- **Module 2.9 (*Aetheron Flux and Monopole Emanations*):** introduces Rodin's physical model. Presented as Rodin's hypothesis with explicit acknowledgement that it has not been independently validated.
- **Track 3 (Builder):** tests engineering-level claims (coil efficiency, antenna performance) with measurement protocols.

A student who finishes Track 2 should be able to defend the geometric content as solid math, hold the physical claims as *Rodin's framework* — interesting but unproven — and treat the engineering claims as testable hypotheses awaiting reproducible measurement.

`[ORG-REVIEW]` — confirm the org is comfortable with this layered framing. The alternative is to present all claims as established, which we can do if instructed but does not survive contact with a critical audience.

---

## 7. Further reading

- **P1-1** — RodinAerodynamics.org, sections on the Number Map and the Torus.
- **P1-13** / **P1-14** — Powell, Red Ice Radio Hours 1 & 2 (2012). Powell narrates the wrap construction in §1 and the surface structure in §2.
- **P3-22**, **P3-23** — Natural Philosophy Wiki and Organic Design Wiki entries (cross-reference biography and related frameworks).
- **P2-18** — *Sanctified Mirrors in a Holographic Universe* (2023). The Decoqubit construction is Rodin's higher-dimensional refinement of this same wrap.
- `[NEEDS-SOURCE]` — *The Rodin Number Map and Rodin Coil* (2010, Rodin) — primary technical source for the construction.

---

## 8. Assessment

**Problem set:**

1. Reproduce Practice Exercise 1 with full justification.
2. Show the 24-column grid wraps to a torus (i.e., write the equivalence relation explicitly).
3. *Novel problem.* Define the **inverse map** that takes a point on the torus back to a (column, row) coordinate. Show that this is a homeomorphism between the torus and the quotient grid `(ℤ/24ℤ) × (ℤ/6ℤ)` once we specify a continuous interpolation.
4. *Reflection paragraph (200 words max).* In your own words, explain why the 3-6-9 axis must live on a different geometric structure than the doubling circuit. Reference the construction in §3.2.

---

## 9. Production notes

- **Diagrams needed:** D-10, D-11, D-12 (see `05_assets/DIAGRAM_INVENTORY.md`).
- **Animation:** A-03 — number-map-to-torus wrap with stepwise reveal of structure.
- **3D asset:** torus mesh with number-map texture (commission once org confirms canonical colour scheme).
- **B-roll:** student building paper torus by hand from a printed strip.
- **Caption care:** "ABHA Torus" capitalised; "Rodin Number Map" capitalised; "digital root" lowercase.
- **Music cue:** soft underlay for §3.3 (the wrap reveal); silent for §3.4 onwards.
- **Estimated production complexity:** **HIGH** — this lesson lives or dies by D-11/A-03. Budget accordingly.
