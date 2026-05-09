Wk 19 — Theme: Antipodal Pairs in 3D — Lens 6: Apply — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Apply antipode map to digit-root reduction. Use antipodes as a fast tool for negation in mod-9 arithmetic.

## 1. Outcome
Student can use the antipode map as a substitute for additive negation in modular-9 arithmetic.

## 2. Hook (0:00–0:30)
*[A computation: digital_root(N) + digital_root(M); use antipode of M to find -M; faster than reducing M directly.]*

> "Antipode for negation. Three problems. Six minutes."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply antipodes for fast digit-root work."

## 4. Body (1:00–4:30)

> "Today's apply uses the antipode-equals-negation correspondence to compute digital roots involving subtraction.
>
> *[pause]*
>
> *Setup recap.* For cell (col, row) holding value v, the antipode-cell holds value 9 − v mod 9 (Mod B Lens 2). So *antipode of value v is its additive inverse mod 9*.
>
> This means: if you need −v mod 9 for some computation, look up the antipode-cell instead of negating directly.
>
> *[pause]*
>
> *Problem 1.* Compute digital_root(2¹⁰ × 10⁵ − 2³ × 10²).
>
> *Direct method.* 2¹⁰ = 1024; × 10⁵ = 102,400,000; digit sum 1+0+2+4+0+0+0+0+0 = 7. 2³ = 8; × 10² = 800; digit sum 8+0+0 = 8. Subtract: 7 − 8 = −1 mod 9 = 8.
>
> *Antipode method.* For first term: 2¹⁰ → row 10 mod 6 = 4 → cell value 7. For second term: 2³ → row 3 → cell value 8. Antipode of 8 is 1 (since 8 + 1 = 9). Then 7 + (antipode of 8) = 7 + 1 = 8 mod 9.
>
> Same answer: *8.*
>
> *Why antipode method is faster.* Avoids subtracting and modulo-reducing; does addition with antipode lookup instead.
>
> *[pause]*
>
> *Problem 2.* Compute digital_root(8 × 7 × 5).
>
> *Direct.* 8 × 7 = 56; 56 × 5 = 280; 2 + 8 + 0 = 10; 1 + 0 = 1.
>
> *Antipode method.* Each of 8, 7, 5 is the antipode of 1, 2, 4 respectively. So 8 × 7 × 5 = (−1)(−2)(−4) = −8 mod 9 = 1.
>
> Same answer: *1.*
>
> *Why antipode method is faster.* Recognising that 8, 7, 5 are negatives lets you compute (−1)(−2)(−4) = −8 = 1 in one step rather than three multiplications.
>
> *[pause]*
>
> *Problem 3.* Find an integer x such that 4x ≡ 7 mod 9.
>
> *Direct method.* Try x = 1, 2, 3, 4, 5, …; find that x = 4 gives 16 ≡ 7. So x = 4.
>
> *Antipode method.* 4 is the antipode of 5; 7 is the antipode of 2. The equation 4x ≡ 7 mod 9 becomes (−5)x ≡ (−2) mod 9, i.e., 5x ≡ 2 mod 9. Then 5 × 4 = 20 ≡ 2. So x = 4.
>
> Same answer: *4.*
>
> *Why antipode method might be slower here.* Direct trial is fast. Antipode method's advantage is in chains of operations where negation appears repeatedly.
>
> *[pause]*
>
> *General insight.*
>
> The antipode map is the *negation operation* for the value-set {1, 2, 4, 5, 7, 8} in mod 9. It commutes with multiplication: antipode(v × w) = (antipode v) × w = v × (antipode w) (because (−1)(v × w) = (−v)w = v(−w)).
>
> So you can *substitute antipodes freely* in modular-9 arithmetic without changing the answer.
>
> *Three observations.*
>
> *Observation one.* The antipode method is *fast for chains*. When computations involve subtraction or chains of negations, antipode lookup beats direct calculation.
>
> *Observation two.* The antipode method is *visual on the torus*. If you have the threaded torus in front of you, finding the antipode is a glance.
>
> *Observation three.* The antipode method *generalises*. For any modular system where the inverse map equals the antipodal map, antipodes can substitute for negation.
>
> *[pause]*
>
> Practical takeaway. *Use antipodes when subtraction or negation appears in modular-9 chains.* It's faster and more visually accessible.
>
> Q3 will use this implicitly when designing counter-stranded coils. The antipodal relation between strand-cells determines the cancellation pattern."

## 5. Try it (4:30–5:30)
> "Pause. Compute digital_root(7 + 5 − 2). Sixty seconds. Answer: 1 (since 7 + 5 − 2 = 10 ≡ 1 mod 9)."

*[Pause card.]*

## 6. Bridge (5:30–6:00)
> "Next: Compare. Antipodal involution vs additive inverse."

*[Closing card.]*

---

## 7. Production sidecar
- Diagrams: D-426 (three problems worked).
- Hook–bridge match (B-8): yesterday's bridge → today's hook (computation example).
- Music cue: working/applied.
