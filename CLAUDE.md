# CLAUDE.md — The Governor

> Authoritative rules for any AI assistant working in the **Bolaji-Ilori-portfolio** repo.
> Read `context.md` (repo facts) first, then this file. Follow both without exception.

---

## File Structure

| File         | What it holds                                             |
|--------------|-----------------------------------------------------------|
| `context.md` | Repo facts: owner, stack, structure, full stack, project inventory, active status, dev/deploy |
| `CLAUDE.md`  | This file — the non-negotiable rules governing AI work    |

Update `context.md` when facts change (projects, stack, availability). Update this file when the rules change.

## Content Rules

Non-negotiable. Applies to any AI working on this repo.

1. **Do not fabricate metrics.** Use only outcomes documented in `context.md` or confirmed by Bolaji in conversation.
2. **Client anonymity.** The job search management company (CVUnlocked) must not be named — reference as "a job search management company." Currently not featured on the site.
3. **ISTV anonymity optional.** Inside Success TV may be named or described as "a US-based media company" — Bolaji's preference in context.
4. **Tone:** Confident, direct, no fluff. No "passionate about" or "I love helping" language.
5. **Stack accuracy.** Always reference the 12-tool core stack in `context.md`. Do not add tools Bolaji hasn't used.
6. **Project count.** There are 9 projects, per `DESIGN.md` §5. Five are `[VERIFY]` drafts awaiting Bolaji's correction — do not publish or present them as confirmed before correction. Do not add or remove projects without Bolaji's confirmation.

## Design Rules

1. **Motion respects the user.** The site animates heavily; any new animation must honor `prefers-reduced-motion` (see `index.css`).
2. **Palette and fonts are fixed.** Follow `DESIGN.md`: Ink Black `#06090F`, Full Spectrum Blue `#0055FF`, Lavender `#EBF0FF`, Vanilla Custard `#F5E4A8`, Amber Honey `#E8A000`; Poppins + JetBrains Mono. Tokens live in `index.css` and `tailwind.config.js`. Do not introduce new hues or typefaces.
3. **Three.js scenes** must reuse the brand tool icons (`icons/*.png`) and match the palette above.

## Updating This File

Update whenever:

- Content or governance rules change
- Client anonymity rules change
- The file structure (context/CLAUDE split) changes

**Last updated:** August 2026
