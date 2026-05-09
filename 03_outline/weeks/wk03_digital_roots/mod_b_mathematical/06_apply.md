Wk 03 — Theme: Digital Roots & Mod-9 — Lens 6: Apply — Module B (Mathematical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
Mod-9 (and modular arithmetic generally) in real-world use cases: ISBN checksums, banking routing numbers, error-correcting codes. Concrete examples. The student leaves knowing that the operation they just learned is the basis of multiple infrastructures of modern life.

## 1. Outcome
By the end of these 6 minutes, the student can name three real-world systems that use modular-arithmetic checksums.

## 2. Hook (0:00–0:30)
*[On screen: three real-world artefacts — a book with ISBN, a bank check with routing number, a credit card. Each has a checksum digit highlighted.]*

> "Three things in your wallet or on your shelf. Each uses modular arithmetic to check itself. Today: where the math lives."

## 3. Setup (0:30–1:00)
> "Lens 6 of 9. Apply, mathematical edition. Mod-9 — and modular arithmetic generally — is engineering used in physical systems daily. Three examples."

## 4. Body (1:00–4:30)

> "**Application one — ISBN checksums.** Every book published since the 1970s has an ISBN — a 10-digit (older) or 13-digit (newer) International Standard Book Number. The last digit of an ISBN is a *checksum digit*, computed from the other digits using modular arithmetic. For a 10-digit ISBN, the checksum is the value that makes the *weighted sum* of all ten digits divisible by 11. So *d₁ × 1 + d₂ × 2 + ... + d₁₀ × 10 ≡ 0 (mod 11)*. The checksum digit is whatever value makes that equation hold. Type one digit wrong when entering an ISBN, and the equation fails — the system catches the typo. The check uses mod 11 rather than mod 9 because 11 catches more transposition errors, but the principle is the same: a modular-arithmetic checksum digit at the end of a longer code, used to verify integrity.
>
> **Application two — banking routing numbers.** US bank routing numbers are 9 digits. The ninth digit is a checksum, computed by *(3 × (d₁ + d₄ + d₇) + 7 × (d₂ + d₅ + d₈) + (d₃ + d₆ + d₉)) ≡ 0 (mod 10)*. Different formula, same principle. When you enter a routing number into an online form and the system tells you *invalid routing number*, the system isn't checking if the number exists — it's running this modular equation and seeing it fail. Faster than a database lookup. Catches most typos.
>
> **Application three — credit card numbers.** The Luhn algorithm — the validity check on every credit card number — uses modular arithmetic with a digit-doubling step that should look familiar. You double every other digit, sum the doubled digits' digit-roots, add the un-doubled digits, and check if the total is divisible by 10. *Doubling and digit-summing.* Sound familiar? Marko's Doubling Circuit lives at the heart of the algorithm that validates every credit card transaction in the world.
>
> *[pause — show the three checksum mechanisms side by side]*
>
> Three engineering applications. Three real-world systems built on the math we proved yesterday. Marko didn't invent modular arithmetic — and he doesn't claim he did. What he claims is that the modular arithmetic underneath the world's checksums is the same modular arithmetic underneath the physical structure of the universe. Whether you accept that stronger claim or not, the engineering use cases are real and visible everywhere.
>
> *[pause]*
>
> One observation. The Luhn algorithm uses the same digit-doubling-and-summing operation Marko's Doubling Circuit uses. This isn't coincidence — it's structure. Both pieces of math are using the same property of modular arithmetic to catch errors and to encode patterns."

## 5. Try it (4:30–5:30)
> "Pause. Pick a book on your shelf. Read the ISBN. Compute the checksum by hand using the formula. Verify the last digit matches. The math you proved yesterday is now validating your bookshelf. Sixty seconds."

*[Pause card on screen for 60 seconds.]*

> "Welcome back. One book's ISBN now verified by the operation in your hand."

## 6. Bridge (5:30–6:00)
> "Next lesson — Compare. We've shown mod-9 in engineering. The next lens places mod-9 next to mod-7 and mod-11 — what's special about 9, what's not. Lens 7."

*[Closing card: "Lesson 6 of 9 — Apply. Next: Compare."]*

---

## 7. Production sidecar
- Diagrams: D-96 (the three checksum systems with their formulas — ISBN, banking, Luhn).
- Animations: A-48 — each checksum verifies in turn.
- B-roll: hand running ISBN math on a real book; credit card with Luhn verification.
- Caption care: "ISBN", "Luhn" capitalised; mod expressions in KaTeX.
- Music cue: engineering-precise underscore.
- Voice-pass note: three applications, three paragraphs, each with concrete formula and concrete artefact.
