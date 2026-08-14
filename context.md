# Portfolio Context

Repo facts and reference data for the **Bolaji-Ilori-portfolio** repo.
Governance rules live in `CLAUDE.md` — read this file first, then `CLAUDE.md`.

---

## Repo Snapshot

**Owner:** Bolaji (Emmanuel) Ilori — Operations & Automation Specialist · Lagos, Nigeria · Remote  
**Contact:** ibolajie@gmail.com · [linkedin.com/in/ibolajie](https://linkedin.com/in/ibolajie) · [@ibolajie](https://x.com/ibolajie)

**What it is:** A personal portfolio site showcasing Bolaji's automation systems, AI workflows, and operations architecture. Design spec lives in `DESIGN.md`.

**Links:**
- Live: [bolaji-ilori-portfolio.vercel.app](https://bolaji-ilori-portfolio.vercel.app)
- Repo: [github.com/Bolajie/Bolaji-Ilori-portfolio](https://github.com/Bolajie/Bolaji-Ilori-portfolio)

## Design System

Per `DESIGN.md` — palette and fonts are fixed. Do not introduce new hues.

| Token | Hex | Role |
|-------|-----|------|
| Ink Black | `#06090F` | Base background |
| Full Spectrum Blue | `#0055FF` | Functional / availability only |
| Lavender | `#EBF0FF` | Primary text |
| Vanilla Custard | `#F5E4A8` | Warm secondary accent |
| Amber Honey | `#E8A000` | Main accent (maps to `--brand-orange`) |

Font: **Poppins** (body + display), JetBrains Mono for technical labels.

## Tech Stack

| Layer       | Technology                                             |
|-------------|--------------------------------------------------------|
| Framework   | React + TypeScript                                     |
| Build Tool  | Vite                                                   |
| Styling     | Tailwind CSS v3 (PostCSS build)                        |
| Animation   | Framer Motion · CSS keyframes                          |
| 3D / WebGL  | Three.js (hero background: particles, shapes, 12 tool icons) |
| Email       | Resend, via Vercel serverless function (`/api/contact`) |
| Deployment  | Vercel                                                 |

## Repo Structure

```
/
├── components/        # Reusable React components
├── icons/             # Real brand logo PNG assets (Simple Icons + official sources)
├── pages/             # Page-level components
├── App.tsx            # Root app component
├── constants.ts       # Global constants (project data, skills, etc.)
├── toolIcons.ts       # Tool name → brand icon map (keys match CORE_TOOLKIT)
├── types.ts           # TypeScript type definitions
├── index.tsx          # Entry point
├── index.html         # HTML shell
├── README.md          # Public-facing repo documentation
├── DESIGN.md          # Rebrand spec — palette, fonts, positioning, projects
├── CLAUDE.md          # Governance rules — AI context (read this + context.md)
├── context.md         # This file — repo facts and reference data
├── metadata.json      # App metadata
├── package.json       # Dependencies
├── vite.config.ts     # Vite config
└── vercel.json        # Vercel deployment config
```

## Core Stack (12 tools)

Reference when adding or updating project content. Do not add tools Bolaji hasn't used.

**CRM:** GoHighLevel (GHL) · HubSpot  
**Automation:** n8n · Make · Zapier  
**AI / LLM:** Claude · OpenAI Codex · Google Antigravity  
**Data:** Supabase (PostgreSQL) · Airtable  
**Ops:** Google Workspace  
**Dev:** Python

Supporting: FFmpeg · Tavily · WhatsApp Business API · GitHub CLI · structured output parsing · RAG patterns.

## Project Inventory (Source of Truth)

Canonical project reference for all portfolio content. Do not invent projects or outcomes.

Nine projects per `DESIGN.md` §5. Four are grounded in shipped systems (source noted). Five are drafts tagged `[VERIFY]` — written from project names + the core stack, **awaiting Bolaji's correction before the site goes public**. No fabricated metrics in any draft.

| #  | Project                    | Category        | Status | Source |
|----|----------------------------|-----------------|--------|--------|
| 1  | Jollofull WhatsApp Bot     | Automation & AI | `[VERIFY]` | — |
| 2  | Job Alert Automation       | Automation & AI | `[VERIFY]` | — |
| 3  | Lead Management System     | CRM & Data      | `[VERIFY]` | — |
| 4  | Video Design Studio        | AI & LLM        | Grounded | `freelance_startup\rnd\design-studio` + `freelance_startup\adapters\scripts\design-studio` (MotionForge) |
| 5  | YT Shorts Engine           | Media Automation| `[VERIFY]` | — |
| 6  | Company Research Agent     | AI & LLM        | `[VERIFY]` | — |
| 7  | Cold Outreach System       | GTM Engineering | Grounded | `freelance_startup\.opencode\skills\ogilvy-positioning-engine` + `freelance_startup\.opencode\agent\business-development.md` |
| 8  | Plenteous Systems Architecture | Data Engineering | Grounded | Supabase edge-function architecture (Master Resume) |
| 9  | Dynamo Task Authoring      | AI & LLM        | Grounded | `dynamo-551bf8a-data-querying-and-databases` (GitHub CLI fork/PR + rubric review) |

## Active Status

As of August 2026.

- **Open to:** Full-time roles (remote) + freelance contracts
- **Rate:** Not published on the site — quoted per engagement (see freelance_startup rate card)
- **Target clients:** Startups, digital agencies, ops-heavy businesses
- **Target roles:** Operations & Automation Specialist · Automation Engineer · AI Workflow Engineer

## Local Development

```bash
npm install
npm run dev
```

Requires `RESEND_API_KEY` in `.env.local` for the contact form (see `.env.example`).

## Deployment

Auto-deploys via Vercel on push to `main`. No manual deployment steps needed.
