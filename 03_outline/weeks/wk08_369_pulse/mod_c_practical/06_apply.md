Wk 08 — Theme: The 3-6-9 Pulse — Lens 6: Apply — Module C (Practical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
3-6-9 axis in coil-drive electronics. Specific drive configurations using the trigger axis.

## 1. Outcome
Student can describe three drive configurations using the 3-6-9 trigger axis.

## 2. Hook (0:00–0:30)
*[Three drive configurations with trigger axis at f, 6f, 3f.]*

> "Three drive timings. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply."

## 4. Body (1:00–4:30)

> "When the trigger axis is implemented and connected to drive electronics, three configurations are common.
>
> *Configuration one — passive sensor.* Trigger axis acts as a pickup coil; main coil is driven at *f*. The trigger sees *6f* signal naturally. Useful for: harmonic analysis, phase-locked measurement, baseline characterisation. The trigger doesn't add energy to the system; it just observes.
>
> *Configuration two — driven at 6f for resonance.* Trigger axis driven at *6f* in addition to the main coil at *f*. The two drives interact electromagnetically. If the geometry is right, you get *constructive interference* at the 3-6-9 positions on the torus surface. Field intensity at those positions can be tuned by adjusting the trigger drive's phase relative to the main drive. Useful for: localised field amplification, focused-energy experiments.
>
> *Configuration three — driven at 3f for sub-harmonic.* Trigger axis driven at *3f* — half the natural 6f rate of the helix's interaction with the trigger positions. This produces a *sub-harmonic resonance* between the trigger and the main coil. Some practitioners report unusual measured behaviour at this configuration; whether the unusual behaviour is reproducible is a question for Q3 testing.
>
> *[pause]*
>
> What hardware you need.
>
> *Function generator* with two synchronised outputs. Most modern bench function generators support synchronised dual outputs; older single-output generators require an external phase-locked loop.
>
> *Phase shifter*. To control the relative phase between main and trigger drives. Some function generators have built-in phase control.
>
> *Power amplifiers (×2)*. One for the main coil, one for the trigger axis. Standard audio amplifiers in the 10–100 watt range work for low-frequency Rodin Coil drives.
>
> *Oscilloscope (4-channel)*. To monitor main drive, trigger drive, main coil current, trigger coil current. Phase relationships visible at a glance.
>
> *[pause]*
>
> Total cost for the trigger-axis-enabled drive setup, beyond the basic Rodin Coil bench: roughly $500-1500 depending on equipment quality. This is research-grade hardware, not casual home-lab.
>
> *[pause]*
>
> One observation. The trigger axis turns the Rodin Coil from a *passive* electromagnetic device into an *actively-controlled* one with two independent drive parameters. The control space is larger; the experimental possibilities are larger; the engineering complexity is also larger.
>
> Most students never enable the trigger axis. The Wk-33 single-strand and Wk-35 polar-pair builds work fine without it. The trigger axis is for builders specifically interested in the 3-6-9 family's role and willing to invest in dual-drive electronics."

## 5. Try it (4:30–5:30)
> "Pause. List the three drive configurations and what each tests. Sixty seconds."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. 3-phase electrical vs. Rodin 3-6-9."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-193 (three drive configs).
- Music cue: precise.
