# Production Prompt — Self-Contained Instruction to Resume

This file holds the prompt that resumes Rodin-course production. Paste it into Claude Code to continue, or use with `/loop` for self-paced autonomous runs.

---

## How to use

### Option 1 — Paste-and-run (manual cadence)

Paste the block below into a fresh Claude Code session in the `c:\shaneclary\Rodin` directory. Claude will produce as many lessons as fit in one response, update the tracker, and tell you the next cursor.

### Option 2 — `/loop` (self-paced autonomous run)

Type:

```
/loop continue Rodin course production per c:\shaneclary\Rodin\03_outline\PRODUCTION_PROMPT.md
```

`/loop` without an interval lets Claude self-pace — each iteration produces a batch of lessons, updates state, and schedules itself again. This is the closest to "don't stop" available in the harness.

`/loop` will run until you stop it, the work completes, or it errors. Check progress in `PRODUCTION_TRACKER.md`.

---

## The prompt (paste between the lines)

```
Continue Rodin VBM course production.

1. Read these files in order:
   - c:\shaneclary\Rodin\PRODUCTION_TRACKER.md     (find current cursor)
   - c:\shaneclary\Rodin\03_outline\PRODUCTION_RULES.md   (rules — read fully)
   - c:\shaneclary\Rodin\03_outline\LESSON_TEMPLATE.md    (format)
   - c:\shaneclary\Rodin\03_outline\quarters\Q{N}_outline.md  (matching the cursor week — Q1 for wks 1-13, Q2 for 14-26, Q3 for 27-39, Q4 for 40-52)
   - c:\shaneclary\Rodin\01_sources\KEY_CONCEPTS.md       (canonical terminology)
   - c:\shaneclary\Rodin\01_sources\SOURCE_LIBRARY.md     (citations)

2. For continuity, also read the previous lesson written (cursor - 1 in the same module if it exists) and the next outline cell (cursor + 1) so the bridges align.

3. Produce lessons in cursor order. Each lesson:
   - Lives at c:\shaneclary\Rodin\03_outline\weeks\wk{NN}_{slug}\mod_{a|b|c}_{lens}\{LL}_{lens}.md
   - Follows LESSON_TEMPLATE.md exactly
   - Obeys every rule in PRODUCTION_RULES.md
   - Body section: 500-550 spoken words

4. After each lesson is written, update PRODUCTION_TRACKER.md:
   - Move the cursor to the next lesson
   - Increment done_count
   - Append a line to "Recent completions"

5. Produce as many lessons as fit in one response. Use parallel Write tool calls where possible.

6. Stop when output budget is near limit. End with one line:
   "Next up: W{NN}-M{X}-L{N} ({lens name})"

7. If a [ORG-INPUT] / [ORG-CLIP] would block content: write the lesson with the placeholder flag in the production sidecar. Don't stall.

Quality bar:
- Every lesson must follow the lens it claims
- Every lesson must hook-continuity-match the previous lesson
- Every lesson's bridge must name the next lesson explicitly
- Use canonical terminology
- Cite primary sources by source key

Begin.
```

---

## Notes for whoever resumes this work

- **Don't change the rules mid-build.** If a rule is wrong, document it in `04_notes/PRODUCTION_ISSUES.md` and continue. Fix retroactively in a curation pass.
- **Don't skip ahead** — even if a future week feels exciting, the spiral depends on prior weeks being settled.
- **The 52-week outline is the source of truth for content.** Don't invent topics; expand the outline cells.
- **`[ORG-REVIEW]` flags are batched at the end** — the org will resolve them in a curation pass, not in real time.
- **If two lessons in the same module both want the same primary-source quote**, prefer the earlier lesson and find a different quote for the later one. Variety matters across the year.

## Slowdown signals (when to take a longer break)

Pause for human review if:
- More than 5 consecutive lessons produced without any [ORG-*] flag (suspicious — usually means a flag was missed)
- Body word counts drift outside 500-550 for 3+ consecutive lessons
- Citation source keys repeat for 5+ consecutive lessons (probably need to widen source variety)
- The same example/metaphor appears in 3+ consecutive lessons across different lenses

These are signs the spiral is starting to compress on itself. Stop, scan, fix, continue.
