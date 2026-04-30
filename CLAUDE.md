# CLAUDE.md — The Governor

### Bolaji-Ilori-portfolio

> This file is the authoritative context document for Claude (and any AI assistant) working inside this repository. Read this before touching any file.

-----

## Who Owns This Repo

**Bolaji (Emmanuel) Ilori**  
No-Code & Automation Engineer · Lagos, Nigeria · Remote  
ibolajie@gmail.com · [linkedin.com/in/ibolajie](https://linkedin.com/in/ibolajie) · [@ibolajie](https://x.com/ibolajie)

-----

## What This Repo Is

A personal portfolio site built with React + TypeScript, deployed on Vercel. It showcases Bolaji's automation projects, Bubble.io product builds, and professional background.

**Live URL:** [bolaji-ilori-portfolio.vercel.app](https://bolaji-ilori-portfolio.vercel.app)  
**Repo:** [github.com/Bolajie/Bolaji-Ilori-portfolio](https://github.com/Bolajie/Bolaji-Ilori-portfolio)

-----

## Tech Stack

|Layer         |Technology                                   |
|--------------|---------------------------------------------|
|Framework     |React + TypeScript                           |
|Build Tool    |Vite                                         |
|Deployment    |Vercel                                       |
|AI Integration|Gemini API (`GEMINI_API_KEY` in `.env.local`)|
|Styling       |CSS (component-level)                        |

-----

## Repo Structure

```
/
├── components/        # Reusable React components
├── icons/             # SVG icon assets
├── pages/             # Page-level components
├── App.tsx            # Root app component
├── constants.ts       # Global constants (project data, skills, etc.)
├── types.ts           # TypeScript type definitions
├── index.tsx          # Entry point
├── index.html         # HTML shell
├── README.md          # Public-facing repo documentation
├── CLAUDE.md          # This file — AI context and governance
├── metadata.json      # App metadata
├── package.json       # Dependencies
├── vite.config.ts     # Vite config
└── vercel.json        # Vercel deployment config
```

-----

## Bolaji's Full Stack (for reference when adding/updating project content)

**Automation:** n8n · Make · Zapier · GoHighLevel (GHL)  
**No-Code / App Dev:** Bubble.io  
**AI / LLM:** Gemini 2.5 Pro · Claude AI · OpenAI · Zep Knowledge Graph · RAG · Structured Output Parsers  
**Data & CRM:** Airtable · Supabase · Google Sheets · Pandas · Microsoft Excel  
**APIs:** Zoom API · Slack API · Google Docs API · Google Drive API · GitHub API  
**Dev:** JavaScript · Node.js · Python · HTML/CSS/JS · Playwright · FFmpeg · docx-js  
**Platforms:** Slack Block Kit · Vercel · Vite

-----

## Project Inventory (Source of Truth)

When updating the portfolio, use this list as the canonical project reference. Do not invent projects or outcomes.

|# |Project                           |Stack                                                      |Key Outcome                                              |
|--|----------------------------------|-----------------------------------------------------------|---------------------------------------------------------|
|1 |Sales Call CRM Automation Pipeline|n8n · Gemini 2.5 Pro · Claude AI · Airtable · Google Sheets|Eliminated 100% of manual post-call CRM entry            |
|2 |FTC Compliance Auditing System    |n8n · Zep Knowledge Graph · OpenAI · Slack Block Kit       |Compliance review: days → seconds                        |
|3 |Three-Portal SaaS Platform        |Bubble.io                                                  |Client dashboard + associate + admin portal (client anon)|
|4 |Data Migration Pipelines          |n8n · Bubble API · Supabase · Google Sheets                |Bubble → Supabase · Sheets → Bubble                      |
|5 |AI Content Generation Pipeline    |n8n · LLM Prompt Engineering · Google Docs API             |Dual-format document generation from transcripts         |
|6 |Thumbnail Generator               |n8n · GitHub API · Image Processing                        |Automated thumbnail production + GitHub versioning       |
|7 |Short Video Automation            |n8n · FFmpeg · LLM                                         |Idea → produced video clip, fully automated              |
|8 |Zoom Transcript Extraction        |n8n · Playwright · Zoom API · VTT Parser                   |Hybrid OAuth + Playwright extraction system              |
|9 |Sales Closer Resume Screening     |n8n · Gemini · Structured Output Parser                    |AI candidate scoring for high-volume hiring              |
|10|Workflow SOP Documentation System |n8n · docx-js · Node.js                                    |.docx SOP generation from n8n JSON exports               |

-----

## Content Rules

These rules apply to any AI working on this repo:

1. **Do not fabricate metrics.** Only use outcomes that are documented in this file or confirmed by Bolaji in conversation.
1. **Client anonymity.** The three-portal Bubble.io client (CVUnlocked) must not be named — reference as "a job search management company."
1. **ISTV anonymity optional.** Inside Success TV can be named or described as "a US-based media company" — Bolaji's preference in context.
1. **Tone:** Confident, direct, no fluff. No "passionate about" or "I love helping" language.
1. **Stack accuracy.** Always reference the stack table above. Do not add tools Bolaji hasn't used.
1. **Project count.** There are 10 projects. Do not add or remove without Bolaji's confirmation.

-----

## Active Status (as of April 2026)

- **Open to:** Full-time roles (remote) + freelance contracts
- **Rate:** $25–40/hr (freelance)
- **Target clients:** Startups, digital agencies, ops-heavy businesses
- **Target roles:** Automation Engineer · No-Code Developer · AI Workflow Engineer

-----

## Local Development

```bash
npm install
npm run dev
```

Requires `GEMINI_API_KEY` in `.env.local`.

-----

## Deployment

Auto-deploys via Vercel on push to `main`. No manual deployment steps needed.

-----

## Updating This File

Update `CLAUDE.md` whenever:

- A new project is added to the portfolio
- Stack changes (new tools adopted)
- Availability / rate / target role changes
- Client anonymity rules change

**Last updated:** April 2026
