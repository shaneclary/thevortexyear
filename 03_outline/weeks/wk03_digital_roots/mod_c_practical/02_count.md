Wk 03 — Theme: Digital Roots & Mod-9 — Lens 2: Count — Module C (Practical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
A series of stopwatch readings from a simulated winding session. Reduce each to its digital root. Watch what the digit-roots do across the session. The Lens 2 numerical-precise voice. The student leaves seeing how reduction-over-time produces a sequence of vertices on the Symbol.

## 1. Outcome
By the end of these 6 minutes, the student can reduce a series of timestamps and identify the cycle of vertices that emerges across a session.

## 2. Hook (0:00–0:30)
*[On screen: a stopwatch. A series of times appears: 0:00, 0:42, 1:23, 2:07, 2:48, 3:31. Each reduces to a vertex.]*

> "Six readings from a winding session. Six vertices. Today: the cycle of a session, on the Symbol."

## 3. Setup (0:30–1:00)
> "Lens 2 of 9. Yesterday — measurements. Today — measurements *over time*. Six minutes. Pencil ready."

## 4. Body (1:00–4:30)

> "A first-time Rodin Coil winder takes about three to four minutes per traversal of the doubling circuit. A six-strand build takes longer; a single-strand starter coil with twenty-four turns goes faster. Imagine timestamps from a typical first build.
>
> *[show timestamps]*
>
> 0:00. Start.
> 0:42. End of first half-revolution.
> 1:23. End of first full revolution.
> 2:07. Two revolutions in.
> 2:48. Three.
> 3:31. Four.
>
> Reduce each timestamp as seconds.
>
> 0 seconds. Reduces to 9 (the convention).
> 42 seconds. 4 + 2 = 6. Vertex 6.
> 83 seconds (1:23). 8 + 3 = 11. 1 + 1 = 2. Vertex 2.
> 127 seconds (2:07). 1 + 2 + 7 = 10. 1 + 0 = 1. Vertex 1.
> 168 seconds (2:48). 1 + 6 + 8 = 15. 1 + 5 = 6. Vertex 6.
> 211 seconds (3:31). 2 + 1 + 1 = 4. Vertex 4.
>
> *[pause — show the sequence of vertices on the Symbol]*
>
> The sequence of vertices: 9, 6, 2, 1, 6, 4. Six checkpoints in the session, six different Symbol vertices visited. Some vertices recur — 6 shows up at the second and fifth checkpoints — because of how digital-root reduction handles addition: adding a fixed interval (like 41 seconds between checkpoints) cycles through the digital roots in a predictable way.
>
> *[pause]*
>
> What's useful here. *The vertex sequence is a fingerprint of the session*. A different winding speed, a different number of revolutions, a different starting time would give a different sequence of vertices. If you record the timestamps in your build log, the digital-root reductions give you a compressed signature of the session that you can compare to other sessions later.
>
> *[pause]*
>
> Notice the *interval* between consecutive checkpoints. About 41 seconds, then 41 seconds, then 44 seconds, then 41 seconds, then 43 seconds. Reduce each interval: 41 → 5; 41 → 5; 44 → 8; 41 → 5; 43 → 7. The interval-vertex sequence is 5, 5, 8, 5, 7. A more uniform session — same interval each time — would produce a constant sequence. Variation in the interval-vertices flags variation in your winding pace. Build log analysis by digit-root.
>
> *[pause]*
>
> One observation worth noting. The cycle of digit-roots over a sequence of timestamps depends on the spacing. Adding a constant *k* moves you *k mod 9* positions around the Symbol each step. That's the *additive* structure on `ℤ/9ℤ`. We met it briefly in Mod A's worksheet — it's what made consecutive integers cycle through the nine vertices in order. Today's stopwatch sequence is the same operation, applied to timestamps."

## 5. Try it (4:30–5:30)
> "Pause. Pick three timestamps from your day — when you woke up, when you started this lesson, when something interesting happened. Convert each to seconds-since-midnight. Reduce. Three vertices. Sixty seconds."

*[Pause card on screen for 60 seconds.]*

> "Welcome back. Three points from your day, on the Symbol."

## 6. Bridge (5:30–6:00)
> "Next lesson — Build. We've reduced timestamps by hand. Tomorrow we automate — a spreadsheet macro that does digital-root reduction in one cell. Once is fine; once a thousand times is what tools are for."

*[Closing card: "Lesson 2 of 9 — Count. Next: Build."]*

---

## 7. Production sidecar
- Diagrams: D-101 (timestamps reducing in sequence on the Symbol).
- Animations: A-53 — six timestamps reduce to vertices, sequence highlighted.
- B-roll: hand on stopwatch with running time visible.
- Caption care: time formats consistent (mm:ss).
- Music cue: rhythmic, ticking underscore.
- Voice-pass note: numerical precision throughout.
