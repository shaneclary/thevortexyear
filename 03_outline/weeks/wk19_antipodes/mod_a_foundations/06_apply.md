Wk 19 — Theme: Antipodal Pairs in 3D — Lens 6: Apply — Module A (Foundations)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Antipodes as fastest cancellation in coil design. Apply antipodal pairs to the engineering principle of counter-current cancellation.

## 1. Outcome
Student can describe how antipodal pairs enable EM cancellation in counter-wound multi-strand coils.

## 2. Hook (0:00–0:30)
*[A schematic showing two parallel wires with currents flowing in opposite directions; magnetic fields cancelling.]*

> "Counter currents. Cancellation. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Antipodal pairs and EM cancellation."

## 4. Body (1:00–4:30)

> "Today's apply uses antipodal pairs to understand a key principle of multi-strand Rodin Coil design: *counter-current cancellation*.
>
> *[pause]*
>
> *The principle (mainstream EM).* Two parallel wires carrying equal currents in opposite directions produce *zero net magnetic field at large distances* — the fields cancel. This is called *common-mode cancellation* or *bifilar* arrangement.
>
> If the wires are *very* close together, the fields cancel almost completely. As distance grows, cancellation degrades.
>
> *[pause]*
>
> *Application to Rodin Coils.* In a multi-strand Rodin Coil, paired strands can be wound to carry currents in opposite directions through their antipodal positions.
>
> When strand A has current *I* flowing through cell (0, 0), the paired strand B has current *−I* flowing through cell (12, 3) — the antipode.
>
> Distance between (0, 0) and (12, 3): the *chord through the doughnut hole*, which is shorter than the surface distance.
>
> *Through-hole cancellation* exploits this proximity. The two opposite currents partially cancel each other's fields *through the central hole*.
>
> *[pause]*
>
> *Why this matters for the coil's behaviour.*
>
> *Reason 1 — internal field shape.* Through-hole cancellation produces a specific magnetic field configuration *inside* the doughnut hole. The field is sometimes claimed to be *non-Hertzian* or *toroidal* in a specialised sense. Q3 measurement will test these claims.
>
> *Reason 2 — external field reduction.* Fields outside the torus are reduced compared to a uniform-wound coil. *The Rodin Coil leaks less field externally* — useful for some applications.
>
> *Reason 3 — selective amplification.* Some field components are *amplified* by the cancellation pattern; others are *cancelled*. The selective behaviour depends on the doubling structure.
>
> *[pause]*
>
> *Implications for builds.*
>
> *Implication 1 — strand pairing.* In a six-strand Rodin Coil, strands are typically paired by polar partners. Strand 1 (going through value-1 cells) is paired with strand 8 (going through value-8 cells). Currents flow opposite.
>
> *Implication 2 — phasing.* Current direction is set by *terminal connections*. Connecting strand A's start to power supply +V and strand B's start to −V (with ends connected) gives opposite currents through the pair.
>
> *Implication 3 — verification.* If you wind a paired Rodin Coil and measure the external magnetic field, the cancellation should be visible (lower field than expected for a uniform coil). *Failure to measure cancellation suggests construction errors.*
>
> *[pause]*
>
> *A practical worked example for the canonical six-strand four-traversal coil.*
>
> Six strands, paired into three polar pairs:
>
> *Pair 1.* Strand 1 (through value-1 cells) with strand 8 (through value-8 cells). Counter-wound.
>
> *Pair 2.* Strand 2 (value-2) with strand 7 (value-7). Counter-wound.
>
> *Pair 3.* Strand 4 (value-4) with strand 5 (value-5). Counter-wound.
>
> Each pair has its own through-hole cancellation. *Three cancellations operating simultaneously.*
>
> *[pause]*
>
> Three observations.
>
> *Observation one.* The cancellation principle *isn't unique to Rodin Coils*. Mainstream bifilar transformers use the same idea. *What's distinctive is the specific antipodal-pair structure*, which the doubling cycle determines.
>
> *Observation two.* The cancellation is *partial*, not complete. Even ideal counter-wound strands don't fully cancel because the wires are at finite distance. *Real cancellation depends on construction precision.*
>
> *Observation three.* The cancellation behaviour *can be measured*. Q3's Wk 34 (Measurement) will guide measurement protocols.
>
> *[pause]*
>
> Practical takeaway. *Counter-stranding by polar pairs is one of the Rodin Coil's distinctive engineering features.* When designing your coil, plan terminal connections such that paired strands carry opposite currents. The cancellation behaviour is what gives the Rodin Coil its specific field properties."

## 5. Try it (4:30–5:30)
> "Pause. In your build log, sketch a paired-strand wiring diagram for two paired strands. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. Antipode in topology vs opposite in algebra."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-418 (counter-current cancellation diagram with paired strands).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (cancellation schematic).
- Music cue: working/applied.
