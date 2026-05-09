Wk 20 — Theme: The 3-6-9 Axis (Orthogonal) — Lens 6: Apply — Module C (Practical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Axial drive electronics for a coil. Specifications and circuit considerations for the axial wire's power supply and connections.

## 1. Outcome
Student can specify the electrical parameters and circuit components for axial drive.

## 2. Hook (0:00–0:30)
*[A simple circuit diagram showing axial wire connected to a variable DC power supply with current limiting.]*

> "Today: axial drive electronics. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Plan the axial drive electronics."

## 4. Body (1:00–4:30)

> "Today's apply specifies the *electrical setup* for the axial wire. Power supply, current limits, waveforms, and circuit considerations.
>
> *[pause]*
>
> *Axial wire characteristics.*
>
> *Wire.* AWG 22 insulated copper. Length: ~30 cm.
>
> *Resistance.* About 0.18 Ω for 30 cm of AWG 22. *Very low.* The wire is essentially a short circuit; current is limited by the power supply, not by the wire's resistance.
>
> *Inductance.* Negligible for a straight wire of this length. *Effectively zero* for our purposes.
>
> *Current capacity.* AWG 22 can carry several amperes for short durations. For our experimental work, *0.1 to 1 A* is the range of interest.
>
> *[pause]*
>
> *Power supply requirements.*
>
> *Voltage.* 0-12 V variable. Most experiments will use 1-5 V.
>
> *Current.* 0.1-1 A, current-limited to prevent damage. *Always use a current-limited supply* for axial drive.
>
> *DC vs AC.* For initial experiments, DC is simpler. *Variable DC voltage* is the recommended starting point. AC requires phase-locked synchronisation with the toroidal supply, which is more complex.
>
> *Cost.* Bench DC supply with current limiting: $30-80.
>
> *[pause]*
>
> *Circuit configuration.*
>
> *Simplest configuration.* Power supply +V → axial wire → power supply ground. Direct connection; no other components.
>
> *With current limiting.* Power supply +V → series resistor (1-10 Ω) → axial wire → ground. The resistor protects against accidental shorts.
>
> *With current measurement.* Power supply +V → ammeter → axial wire → ground. Read current during operation.
>
> *Recommended starter circuit.* Power supply with built-in current limiting + ammeter integrated, plus a switch to enable / disable axial current quickly during experiments.
>
> *[pause]*
>
> *Variations to test.*
>
> *Variation 1 — DC at fixed current.* Set 0.5 A axial current. Measure resulting field. Compare to no-axial baseline.
>
> *Variation 2 — DC current sweep.* Vary axial current 0 to 1 A in 0.1 A steps. Plot field vs current. *Linear response is expected* for ordinary EM behaviour.
>
> *Variation 3 — AC at single frequency.* Once DC behaviour is characterised, try AC at 60 Hz, 1 kHz, 10 kHz. *Plot field vs frequency.*
>
> *Variation 4 — combined toroidal + axial.* Energise both supplies. Vary one independently. *Cross-coupling effects* (if any) appear here.
>
> *[pause]*
>
> *Safety considerations.*
>
> *Safety 1 — current limits.* Keep current under 1 A unless you know what you're doing. AWG 22 can heat up at high currents.
>
> *Safety 2 — voltage isolation.* The axial wire and the toroidal coil should be electrically isolated. *Don't accidentally short them through the supply.*
>
> *Safety 3 — heat dissipation.* Long-duration operation can heat components. *Run experiments for short durations* and let the system cool.
>
> *Safety 4 — scope sensitivity.* When using oscilloscopes near energised coils, induced voltages on probe leads can damage the scope. *Use proper grounding* and avoid loops in measurement leads.
>
> *[pause]*
>
> Three observations.
>
> *Observation one.* The electronics are *standard*. No specialised parts. Commodity bench supplies and instruments.
>
> *Observation two.* The setup is *simple*. A few components, a few wires. Most of the difficulty is in *interpretation* — what does the measurement mean? — not in *construction*.
>
> *Observation three.* The setup *scales*. Start with DC + multimeter. Add oscilloscope when you want waveforms. Add function generator when you want AC. Add phase-locking for advanced multi-supply experiments.
>
> *[pause]*
>
> Practical takeaway. *Plan the simplest version first.* DC + multimeter. Even this minimal setup reveals interesting behaviour. *Build complexity only when the simpler experiments raise specific questions.*"

## 5. Try it (4:30–5:30)
> "Pause. Note in your build log: *axial supply specs* — voltage range 0-12 V, current 0-1 A, DC starter. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. Axial vs surface drive in mainstream coils."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-458 (axial drive circuit diagram).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (circuit diagram).
- Music cue: working/applied.
