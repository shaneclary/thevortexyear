# Q2 — The Geometric Turn (Weeks 14–26)

*Goal: rise from flat numbers to 3D structure. The torus, the Decoqubit, the geometric framework that the rest of the course rests on.*

---

## Wk 14 — From Circle to Strip
*Anchor:* Why the flat circle isn't enough; the move from 1D to 2D.

| Lens | Mod A — Foundations | Mod B — Mathematical | Mod C — Practical |
|---|---|---|---|
| 1. See | The Symbol unfolded into a strip | Two axes: scale and operation | Strip as a wiring template |
| 2. Count | Count cells in a 1×6, then 2×6 strip | Prove the strip is the natural carrier of doubling+scale | Count winding-positions per strip column |
| 3. Build | Cut your printed Symbol into a strip | Construct the 6-row strip from axioms | First paper strip on a former |
| 4. Hear | Rodin on "I needed a wider canvas" | Rodin on the two-axis insight | Powell on strip-thinking for builders |
| 5. Feel | Unfolding = giving the math room | The dimensional jump felt | Holding the strip — feels different |
| 6. Apply | Strip used as a study-aid bookmark | Strip as the substrate for next week's grid | First sketch of strip-as-coil |
| 7. Compare | Strip vs. flat circle | Strip vs. cylinder unrolling in topology | Strip-coils in mainstream electronics |
| 8. Defend | "Isn't this just a fancy table?" — yes, with structure | Why the strip is well-defined topologically | Why builders should embrace the strip view |
| 9. Connect | Strip → next week's Number Map | Strip carries doubling + scale together | Strip becomes coil winding-plan in Q3 |

---

## Wk 15 — The Rodin Number Map (2D)
*Anchor:* The 6×24 grid that, when wrapped, gives the ABHA Torus.

| Lens | Mod A — Foundations | Mod B — Mathematical | Mod C — Practical |
|---|---|---|---|
| 1. See | The full 6×24 grid coloured by digit-root | Every cell as `digit_root(2ʳ × 10ᶜ)` | Grid as a coil-layout chart |
| 2. Count | Count cells; verify row periodicity | Prove `10 ≡ 1 mod 9` ⇒ column-constancy | Count the unique winding positions |
| 3. Build | Pencil-draw the full grid by hand | Construct the grid from generators | Print the grid; pin it to your build wall |
| 4. Hear | Rodin on the Number Map as a discovery | Rodin on why 24 columns | Powell narrating the grid as a wiring chart |
| 5. Feel | The grid as a window onto pattern | The compression of structure into 144 cells | The grid as a builder's blueprint |
| 6. Apply | Read off any (col, row) as a digit-root | Use grid for fast modular computation | Use grid as the coil's logical schematic |
| 7. Compare | Number Map vs. multiplication table | Grid as a coloured Cayley diagram | Wiring chart vs. PCB schematic |
| 8. Defend | Why 24 columns? — LCM rationale | The 24 is not arbitrary — show the LCM | Why builders need the full 24 columns |
| 9. Connect | Map → next week's wrap | Grid is the right object for `S¹ × S¹` | Grid is the substrate of every Q3 build |

---

## Wk 16 — Wrapping to a Torus
*Anchor:* Glue the strip's edges. Get a torus.

| Lens | Mod A — Foundations | Mod B — Mathematical | Mod C — Practical |
|---|---|---|---|
| 1. See | Animation of strip → cylinder → torus | The two equivalence relations spelled out | Folding a paper torus by hand |
| 2. Count | Count edges before and after wrapping | Verify wrap closes (24 mod 24 = 0; 6 mod 6 = 0) | Count physical seams on the paper torus |
| 3. Build | Make a paper torus from the printed grid | Construct the quotient `(ℤ/24) × (ℤ/6)` | A 3D-printed torus former (download STL) |
| 4. Hear | Rodin on "the surface that isn't surfaces" | Rodin on the torus as natural | Powell on builders' first torus |
| 5. Feel | The 2D becomes 3D in your hands | Topology felt, not just defined | The donut feels different than the strip |
| 6. Apply | Use your paper torus to read off antipodes | Use quotient view to compute intersection numbers | Torus former as the substrate for Q3 builds |
| 7. Compare | Torus vs. sphere vs. cylinder | `S¹ × S¹` vs. `S²` vs. `S¹ × ℝ` | Torus former vs. cylinder former |
| 8. Defend | "But the universe isn't really a donut" — Rodin's response | Why this surface, not another | Why the torus former is the right starting point |
| 9. Connect | Wrap → next week's full surface | Surface admits coordinates we can derive | Torus is the canonical Q3 build platform |

---

## Wk 17 — The ABHA Torus — Surface Structure
*Anchor:* Coordinates, polar pair antipodes, and the doubling helix on the surface.

| Lens | Mod A — Foundations | Mod B — Mathematical | Mod C — Practical |
|---|---|---|---|
| 1. See | The decorated torus — every cell labelled | Coordinate atlas: (col, row) | The torus as the coil substrate, finally complete |
| 2. Count | Count surface cells (24 × 6 = 144) | Prove the (col, row) coordinate is well-defined | Count winding positions on the torus |
| 3. Build | Decorate your paper torus with digit-roots | Construct the coordinate transformation | Mark your former with the canonical positions |
| 4. Hear | Rodin/Powell on the ABHA as universe-template | Rodin on the surface's symmetries | Powell on torus-surface as engineering object |
| 5. Feel | The donut speaks back | The decorated surface as a single coherent object | First moment your former feels real |
| 6. Apply | Use the decorated torus to find any digit-root spatially | Coordinate-based fast computation | Decorated torus as the canonical reference |
| 7. Compare | ABHA Torus vs. plain mathematical torus | `S¹ × S¹` decorated vs. flat | Decorated former vs. blank former |
| 8. Defend | "Why call it the ABHA?" — naming chosen, not random | Show the symmetries are well-defined | Why we don't ship a blank former in Q3 |
| 9. Connect | Surface → next week's helix | Sets up the helical doubling path | Marked former is ready for Q3 winding |

*Connects to:* **Week 40 ★** revisits the ABHA Torus after Aetheron and the Decoqubit.

---

## Wk 18 — Helical Doubling on the Torus
*Anchor:* The Doubling Circuit, embedded as a 3D helix.

| Lens | Mod A — Foundations | Mod B — Mathematical | Mod C — Practical |
|---|---|---|---|
| 1. See | Watch the 1-2-4-8-7-5 path become a spiral | Helix parametrisation explicit | The helix that *is* the coil winding |
| 2. Count | Count helix turns per traversal | Prove helix closes after 24 surface-steps | Count winding turns in your planned coil |
| 3. Build | Trace the helix on your paper torus | Compute helix winding numbers | Mark the helix on your physical former |
| 4. Hear | Rodin on the helix as energy path | Rodin on the period-6 closure | Powell on helical winding feel |
| 5. Feel | The 2D path emergent in 3D | Helix as a stable cycle in product space | The helix you'll trace with your hand in wk 33 |
| 6. Apply | Helix as a navigation aid on the surface | Helical structure of DNA vs. doubling helix | Helix as your coil's exact winding path |
| 7. Compare | Helix vs. solenoid vs. spiral | Toroidal helix vs. straight-axis helix | Rodin Coil helix vs. RF coil helix |
| 8. Defend | Is the helix really doing energy work? | Why the helix is forced by the math | Why builders measure helical effect, don't assume it |
| 9. Connect | Helix → next week's antipodes | Helix structure feeds into wk 19 | This is your coil-path; you'll wind it in wk 33 |

---

## Wk 19 — Antipodal Pairs in 3D
*Anchor:* Polar Pairs revealed as topological antipodes.

| Lens | Mod A — Foundations | Mod B — Mathematical | Mod C — Practical |
|---|---|---|---|
| 1. See | Find the 8 across the donut from any 1 | Antipodal map on `S¹ × S¹` visualised | Counter-wound strands across the former |
| 2. Count | Count antipodal pairs on the torus surface | Show pairs sum to 9 *and* are antipodal | Count strands needed for full antipodal coverage |
| 3. Build | Mark every (1,8), (2,7), (4,5) pair | Construct the antipodal involution | Plan a paired-strand winding |
| 4. Hear | Rodin on "across the donut, not around" | Rodin on antipode as canonical opposite | Powell on counter-winding for cancellation |
| 5. Feel | Antipodes felt physically with your finger | Mathematical mirror symmetry | The hand spans the donut for the first time |
| 6. Apply | Antipodes as fastest cancellation in coil design | Apply antipode map to digit-root reduction | Counter-strand layout in your Q3 build |
| 7. Compare | Antipode in topology vs. opposite in algebra | Antipodal involution vs. additive inverse | Counter-wound vs. bifilar in mainstream EM |
| 8. Defend | "The pairs aren't *exactly* antipodal" — show they are, on the torus | Antipodal proof | Why this matters for your build's symmetry |
| 9. Connect | Antipodes → next week's 3-6-9 axis | Sets up the orthogonal structure | Counter-stranding ships in your wk 33 build |

*Connects to:* **Week 28 ★** revisits Polar Pairs explicitly through this antipode lens.

---

## Wk 20 — The 3-6-9 Axis (Orthogonal)
*Anchor:* The 3-6-9 numbers do not live on the torus surface — they live on the axis.

| Lens | Mod A — Foundations | Mod B — Mathematical | Mod C — Practical |
|---|---|---|---|
| 1. See | Where 3, 6, 9 *would* be — and aren't | The orthogonal axis through the torus centre | The axial wire in a coil rig |
| 2. Count | Verify {3,6,9} cannot appear on the surface grid | Prove `2ⁿ` never hits 3ℤ mod 9 | Count axial features in a real coil rig |
| 3. Build | Drill a hole through your paper torus; thread a stick | Construct the orthogonal axis formally | Add an axial component to your former |
| 4. Hear | Rodin on Spirit moving through the centre | Rodin on the orthogonal axis | Powell on axial-driven coils |
| 5. Feel | The axis you can put your finger through | Orthogonality felt structurally | The third dimension you didn't see in Q1 |
| 6. Apply | The axis in physical-system geometry | Orthogonality applied to vector decomposition | Axial drive electronics for a coil |
| 7. Compare | 3-6-9 axis vs. solenoid axis | Orthogonal axis in `S¹ × S¹` vs. in spherical surfaces | Axial vs. surface drive in mainstream coils |
| 8. Defend | "Aren't 3, 6, 9 just left out?" — no, they're elsewhere | The axis is forced by the partition of `(ℤ/9ℤ)*` | Builders need both surface and axis |
| 9. Connect | Axis → next week's enneagram | Axis is the bridge from VBM to physics | Axis becomes Aetheron flow trigger in wk 30 |

*Connects to:* **Week 29 ★** is the Q3 revisit of this axis as an Aetheron-flow trigger.

---

## Wk 21 — The Enneagram & Enneatruth
*Anchor:* The classical 9-pointed figure as a rotational equivalent of the Symbol.

| Lens | Mod A — Foundations | Mod B — Mathematical | Mod C — Practical |
|---|---|---|---|
| 1. See | Side-by-side: Symbol vs. classical enneagram | Rotation showing geometric equivalence | The enneagram printed and overlaid on the Symbol |
| 2. Count | Count 9 vertices, 9 edges, 1 cycle | Prove the two figures are graph-isomorphic under rotation | Count alignment angles in physical overlay |
| 3. Build | Trace both figures on the same circle | Compute the rotation that aligns them | Make a transparent overlay of one on the other |
| 4. Hear | Rodin on Enneatruth | Rodin on the geometry of unity | Powell on cross-tradition symbol catalogue |
| 5. Feel | Two traditions, one geometry | The mathematical bridge between symbols | The visceral *click* of overlap |
| 6. Apply | Use the enneagram to access cross-tradition material | Apply rotation alignment to other 9-fold symbols | Use the overlay as a teaching tool |
| 7. Compare | Gurdjieff enneagram vs. Rodin Symbol | Both as graphs on `K_9` | Enneagram personality typology vs. VBM Symbol |
| 8. Defend | "The enneagram is from a different tradition" — yes; the geometry is shared | Geometric equivalence is well-defined | Why builders use the enneagram visually too |
| 9. Connect | Enneagram → next week's Decoqubit | Cross-tradition geometric grounding | Symbol library expanded for builders |

---

## Wk 22 — The Decoqubit
*Anchor:* Rodin's "Holographic Hypersphere" — the 4D-and-up generalisation.

| Lens | Mod A — Foundations | Mod B — Mathematical | Mod C — Practical |
|---|---|---|---|
| 1. See | Decoqubit illustrations from *Sanctified Mirrors* | The Decoqubit as a higher-dim torus generalisation | Decoqubit-inspired computing structures |
| 2. Count | Count the Decoqubit's symmetry orbits [`[ORG-INPUT]`] | Cardinality of the Decoqubit lattice | Decoqubit components in a quantum-computing analogy |
| 3. Build | Sketch a Decoqubit projection by hand | Construct a low-dimensional Decoqubit example | Mock up a Decoqubit-inspired data structure |
| 4. Hear | Rodin on the Decoqubit as Divine Algorithm | Rodin on holographic encoding | Powell on Decoqubit's engineering implications |
| 5. Feel | The "everything contains the whole" claim | Holography felt structurally | The Decoqubit as a builder's high-end target |
| 6. Apply | Decoqubit as a memory aid for the year | Apply holographic principle to information | Decoqubit-inspired AI / data architecture |
| 7. Compare | Decoqubit vs. holographic principle (Susskind) | Decoqubit vs. higher-dim torus / hypercube | Decoqubit-inspired vs. mainstream quantum computing |
| 8. Defend | Is the Decoqubit *real*? — careful unpacking | Mathematical content vs. metaphysical claim | Why builders should engage despite ambiguity |
| 9. Connect | Decoqubit → next week's Sanctified Mirrors | Decoqubit subsumes the torus | Decoqubit as Q4 target |

---

## Wk 23 — Sanctified Mirrors
*Anchor:* The 2023 framing — visual representations of the Decoqubit.

| Lens | Mod A — Foundations | Mod B — Mathematical | Mod C — Practical |
|---|---|---|---|
| 1. See | Pages from *Sanctified Mirrors* | Mirrors as 2D projections of the Decoqubit | Use of mirrors as a teaching aid |
| 2. Count | Count distinct mirrors in the canonical set [`[ORG-INPUT]`] | Project the Decoqubit to known 2D mirrors | Catalog the mirrors in your build space |
| 3. Build | Sketch one mirror by hand | Compute a mirror projection | Print a set of mirrors for daily contemplation |
| 4. Hear | Rodin on the mirrors as portals | Rodin on the projection mathematics | Powell on the mirrors in workshops |
| 5. Feel | Each mirror as a portal | Projection as compression | Live with the mirrors |
| 6. Apply | Mirrors as study aids | Apply projection theorem | Use mirrors in a practical contemplative session |
| 7. Compare | Mirrors vs. Mandala / Yantra traditions | Projections vs. shadows in higher-dim geometry | Mirror-rich vs. mirror-light teaching styles |
| 8. Defend | "Are mirrors more than pretty pictures?" | Mathematical content of each mirror | Engineering motivation of the mirrors |
| 9. Connect | Mirrors → next week's Holographic Hypersphere | Mirrors as the projection family of one object | Mirrors as the builder's design library |

---

## Wk 24 — Holographic Hypersphere
*Anchor:* Each piece contains the whole. The strongest VBM cosmological claim.

| Lens | Mod A — Foundations | Mod B — Mathematical | Mod C — Practical |
|---|---|---|---|
| 1. See | The hypersphere as a fractal-like nested structure | Holographic encoding diagram | What it would mean to engineer holographically |
| 2. Count | Count nested levels of self-similarity | Mathematical sense of "every part contains the whole" | Count holographic-coded systems we already use |
| 3. Build | Draw a self-similar nested figure | Construct an explicit holographic encoding | Sketch a holographic memory architecture |
| 4. Hear | Rodin on holographic universe | Rodin on encoding in every neighbourhood | Powell on holographic engineering implications |
| 5. Feel | Vastness, contained | Holography as the deepest VBM claim | Holographic engineering as a horizon |
| 6. Apply | Holographic memory aids | Apply holographic encoding to data | Holographic data structures in code |
| 7. Compare | Susskind/Bekenstein vs. Rodin holographic | Mathematical holography vs. metaphor | Holographic optical storage vs. Rodin Decoqubit |
| 8. Defend | Strongest physics-side challenge to VBM | Acknowledge unproven status; show defensible parts | Engineering must measure, not assert, holography |
| 9. Connect | Hypersphere → next week's Bahá'í roots | Most ambitious claim of the year | Q3 builds will *not* yet test holography — set expectations |

---

## Wk 25 — Bahá'í Origins & "ABHA"
*Anchor:* "Abha" is the Most Great Name in Bahá'í tradition; reduces to 9 via Abjad.

| Lens | Mod A — Foundations | Mod B — Mathematical | Mod C — Practical |
|---|---|---|---|
| 1. See | The word ABHA in calligraphy | Abjad numerology computation | The naming as a design decision |
| 2. Count | Compute "Abha" → 9 via Abjad letter values | Show the reduction explicitly | Count occurrences of "9" in Bahá'í texts |
| 3. Build | Write out the Abjad calculation in your notebook | Construct the letter-to-number table | Print the Abjad table; pin it for reference |
| 4. Hear | Rodin on his Bahá'í context | Rodin on the naming choice | Powell on respecting the spiritual lineage |
| 5. Feel | The depth of the choice | Numerology as a serious calculation | Naming as commitment |
| 6. Apply | Apply Abjad to other names from the tradition | Use Abjad for fast reductions of words | Use the name as a contemplative anchor |
| 7. Compare | Abjad vs. gematria / kabbalah | Abjad numerology mathematically | Naming traditions in scientific work |
| 8. Defend | "Should I have to engage with religion to learn this?" | The math stands alone; the name is *Marko's* choice | Builders are free to use the math under any name |
| 9. Connect | Naming → next week's Q2 synthesis | The name closes the conceptual loop | Naming respected, build is yours |

---

## Wk 26 — ▲ Q2 Synthesis
*Anchor:* The geometric library is built. Prepare for engineering.

| Lens | Mod A — Foundations | Mod B — Mathematical | Mod C — Practical |
|---|---|---|---|
| 1. See | All Q2 diagrams replayed as a tour | The complete geometric proof tree | Your portfolio so far — drawings, paper torus, decorated former |
| 2. Count | 26 weeks down; 26 to go | Count distinct geometric proofs you can reproduce | Count items ready for the Q3 build |
| 3. Build | Final integrated diagram: Symbol+Map+Torus+Axis | Re-derive the wrap unaided | A polished decorated torus former |
| 4. Hear | Marko on the half-year mark | Marko on the geometric turn | Powell on builders' readiness |
| 5. Feel | The half-year arc, completed | The geometric framework as one object | The portfolio as a snapshot of growth |
| 6. Apply | Apply the full Q1+Q2 vocabulary to one chosen example | Compose Q1 and Q2 into one integrated derivation | Apply Q2 to a chosen mini-build |
| 7. Compare | Q1+Q2 vs. typical math curriculum | Q1+Q2 vs. survey of modular arithmetic + topology | Q1+Q2 vs. typical engineering primer |
| 8. Defend | Articulate the half-year arc to a sceptical friend | Defend the integrated derivation | Defend the half-year build state |
| 9. Connect | Look back: 25 themes • Look forward: the spiral begins | Q3 revisits the deepest concepts | Q3 starts building from Q2's substrate |

*Connects to:* Q3 begins with the first spiral revisit — the Doubling Circuit, now seen as a coil winding pattern.
