Wk 03 — Theme: Digital Roots & Mod-9 — Lens 3: Build — Module C (Practical)
Runtime: 6:00. Author: draft. Status: Draft.

---

## 0. Authoring notes
A spreadsheet formula or macro for digit-root reduction. The student opens Excel, Google Sheets, or LibreOffice and types in a one-cell formula that produces the digit-root for any input. By the end they have a tool for reducing arbitrary numbers without hand-cascading. Imperative voice. The lesson is the typing.

## 1. Outcome
By the end of these 6 minutes, the student has a working spreadsheet formula that computes digit-roots and has tested it on three numbers.

## 2. Hook (0:00–0:30)
*[On screen: a spreadsheet. Cell A1 contains 8927365. Cell B1 contains the formula. Cell C1 displays the result: 4.]*

> "One formula. Any number in. Digit-root out. Six minutes to build it."

## 3. Setup (0:30–1:00)
> "Lens 3 of 9. We've reduced by hand. Today: a tool that does it for you. Open Excel, Sheets, or LibreOffice. Type along."

## 4. Body (1:00–4:30)

> "Open a new spreadsheet. Cell A1: type any whole number. The example I'll use is 8927365. You can use any number you like.
>
> *[pause]*
>
> Cell B1: the formula. There are two ways to compute digital root in a spreadsheet — both are short.
>
> *Method one — direct mod-9.* Type:
>
> *= IF(MOD(A1, 9) = 0, 9, MOD(A1, 9))*
>
> Read it: if A1 mod 9 equals zero, return 9 (the Symbol convention); otherwise return A1 mod 9. The IF wrapper handles the zero-equals-nine case from yesterday.
>
> *Method two — iterated digit-sum.* For students who want the explicit cascade:
>
> *= 1 + MOD(A1 - 1, 9)*
>
> This is a clever one-liner. It maps every number to its digit-root in {1, 2, ..., 9}, with multiples of 9 going to 9. No IF needed. The math: if A1 ≡ 0 (mod 9), then A1 - 1 ≡ 8 (mod 9), so 1 + 8 = 9. If A1 ≡ k (mod 9) for k ≥ 1, then A1 - 1 ≡ k - 1 (mod 9), so 1 + (k - 1) = k. Same answer, no branching.
>
> *[pause]*
>
> Pick whichever you prefer. Type it into B1. Press enter. The cell should display the digit-root of A1.
>
> *[pause for typing and verification]*
>
> If you typed 8927365 in A1, B1 should display 4. If it displays something else, check: is the formula syntax correct for your spreadsheet? (Excel and Sheets accept the formulas as written. LibreOffice may want semicolons instead of commas in some locales.) Is A1 a whole number, not a string? Is the formula referencing A1 correctly?
>
> *[pause]*
>
> Now extend. Drag B1 down to B10. Or copy and paste. Now you have a column of formulas. Type ten different numbers in A1 through A10 and watch B1 through B10 give you the digit-roots. The tool is built.
>
> *[pause — show the populated spreadsheet]*
>
> Save the file. Name it *Digit-Root Tool* or whatever you like. Keep it accessible. From here on, when you have a list of numbers — measurements, page counts, transaction amounts — paste them into column A and read off the digit-roots in column B. The fifty-number worksheet from Mod A took you fifteen minutes by hand. The same fifty numbers in this spreadsheet take fifteen seconds.
>
> *[pause]*
>
> One use case to keep in mind. By Q3 you'll be tracking measurements during builds. Putting your raw measurements in column A and the digit-roots in column B gives you a *secondary view* on your data — two reads of the same numbers, one literal, one Symbol-positioned. The literal column is what physics cares about. The Symbol column is what *you* care about, when you're using VBM as a lens on your data."

## 5. Try it (4:30–5:30)
> "Pause. Test your tool on three numbers — your birthday as a number, today's date, and a number you got from yesterday's build log. Three test cases. The tool should give you the same digit-roots you got by hand. Sixty seconds."

*[Pause card on screen for 60 seconds.]*

> "Welcome back. The tool works. Reductions are now seconds, not minutes."

## 6. Bridge (5:30–6:00)
> "Next lesson — Hear from Marko. We've built the tool. Tomorrow Marko speaks on what the operation *means* — not as computation, but as an act of seeing. Lens 4."

*[Closing card: "Lesson 3 of 9 — Build. Next: Hear from Marko."]*

---

## 7. Production sidecar
- Diagrams: D-102 (the spreadsheet shot with formula and result).
- Animations: A-54 — the formula types out, the result appears.
- B-roll: hand on keyboard typing the formula.
- Caption care: spreadsheet formula syntax in monospace; "Excel", "Sheets", "LibreOffice" capitalised.
- Music cue: light, precise.
- Voice-pass note: imperative; both methods given because students will have different preferences.
