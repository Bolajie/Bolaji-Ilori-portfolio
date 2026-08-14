# Portfolio Website — Design Brief

> Fill in the blanks below, then hand this file to your build agent (Claude Code / Antigravity) with something like: "Build/improve my portfolio using this design.md." It's written so an agent can read it as a spec.

---

## 1. Instructions for the Building Agent

- Make this interactive, not a static generic template.
- Use **real brand icons** for every tool mentioned, not generic placeholder icons. Sources to use, in order of preference:
  - [Simple Icons](https://simpleicons.org/) — free SVG brand icons (n8n, Zapier, Airtable, HubSpot, Python, Supabase, etc. are all in here), installable as `simple-icons` npm package or pulled individually as raw SVG.
  - [Devicon](https://devicon.dev/) — for language/dev-tool icons.
  - [SVGL](https://svgl.app/) — good fallback for newer tool logos not yet in Simple Icons.
  - Never use a generic Font Awesome "gear" or "wrench" icon to represent a specific tool — always the tool's actual logo.
- Use **Three.js** for the animated/interactive layer (e.g. an interactive background, a 3D element that reacts to scroll or cursor, or tool icons arranged in an interactive orbit/constellation). Keep it performant — lazy-load it, don't block first paint.
- Before writing image-dependent sections, **ask the user for the actual images** listed in Section 5 below rather than using placeholders silently. If an image isn't provided, use a clearly-marked placeholder and flag it back to the user.
- Reference the brand tokens in Section 2 exactly — do not invent a new palette.

---

## 2. Brand

- Palette: Ink Black `#06090F`, Full Spectrum Blue `#0055FF`, Lavender `#EBF0FF`, Vanilla Custard `#F5E4A8`, Amber Honey `#E8A000`
- Font: Poppins
- Positioning (lead with this, not a tool name): "Operations and Automation Specialist" — "I help founders and small teams run leaner operations."

---

## 3. Bio / About Section

- One-paragraph bio: _____________________________________________
- Career arc / story you want told: _____________________________________________
- Location / availability (remote, timezone, etc.): _____________________________________________

---

## 4. Tools & Stack to Represent as Icons

Confirm/edit this list — each should render as its real logo, ideally with a hover tooltip or micro-interaction:

- n8n (Level 2 Certified)
- Claude API / Claude Code
- Supabase
- Make.com
- Zapier
- Airtable
- HubSpot
- Google Workspace
- GoHighLevel
- Python
- Codex
- Antigravity
- [ ] Any others to add: _____________________________________________

---

## 5. Projects to Feature

For each project, fill in what's missing. (Pulled from known work — confirm which ones make the cut and add any missing.)

| Project | One-line description | Tools used | Screenshot/demo image | Link |
|---|---|---|---|---|
| Jollofull WhatsApp Bot | | | [ ] need image | |
| Job Alert Automation | | | [ ] need image | |
| Lead Management System | | | [ ] need image | |
| Video Design Studio | | | [ ] need image | |
| YT Shorts Engine | | | [ ] need image | |
| Company Research Agent | | | [ ] need image | |
| Cold Outreach System | | | [ ] need image | |
| Plenteous Systems Architecture | | | [ ] need image | |
| Dynamo Task Authoring | | | [ ] need image | |
| _____________________ | | | [ ] need image | |

---

## 6. Images Needed From You

- [ ] Headshot / profile photo
- [ ] Screenshots or short screen-recording frames per project above
- [ ] Any logos you have rights to use (client logos, if applicable)
- [ ] Anything else you want visually featured: _____________________________________________

---

## 7. Interaction / Animation Ideas

- [ ] Tool icons arranged as an interactive Three.js constellation/orbit that responds to cursor movement
- [ ] Scroll-triggered reveal animations per project card
- [ ] Hover state on each tool icon showing a short note on how you use it
- [ ] Other idea: _____________________________________________

---

## 8. Open Questions / Notes

- _____________________________________________
- _____________________________________________