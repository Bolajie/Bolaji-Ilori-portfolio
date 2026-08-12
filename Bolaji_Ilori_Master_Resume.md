# Master Resume — Bolaji Ilori
*(Career archive / "source code" — not for direct submission. Pull and tailor sections per application. Add real metrics as they become available; nothing here is estimated.)*

## Contact
- Email: ibolajie@gmail.com
- LinkedIn: linkedin.com/in/ibolajie
- Portfolio: https://bolaji-ilori-portfolio.vercel.app/
- Location: Lagos, Nigeria
- No phone number listed

## Positioning Note
Lead with operational value, not tools. Frame as: "helps founders and small teams run leaner operations" — with the automation/AI stack as proof points, not the headline. Career arc: data analytics (SQL, Excel, Power BI, Python) → no-code development (Bubble) → AI workflow engineering and automation (n8n, Claude API, Supabase, Make.com).

## Education
**B.Sc. Mathematics** | University 2019–2025
Federal University of Agriculture, Abeokuta (FUNAAB)

## Core Skills (grouped, pull subset per role)
- **Automation / Workflow:** n8n (Level 2 Certified), Make.com, Zapier, Claude API, GoHighLevel
- **Orchestration:** connecting and orchestrating automation platforms (n8n, Zapier, Make.com) with other business tools so they work together end-to-end — the core value of automation specialist work
- **Data & Backend:** Supabase, Bubble.io, SQL, Python, Power BI, Excel
- **Programming:** Python (only programming language known)
- **Agentic Coding Tools:** Claude Code, Codex, Antigravity, VS Code, GitHub Copilot
- **CRM / Ops Tools:** HubSpot, Airtable, Google Workspace, Google Drive
- **Office Suite:** Microsoft Word, Excel, PowerPoint
- **Knowledge Systems:** Zep knowledge graph, Slack Block Kit reporting
- **Domain:** compliance auditing, resume/recruitment screening, document generation, sales performance analysis, data migration, dashboarding

---

## Experience (full detail — trim per target role)

### Automation Specialist — Inside Success TV (ISTV)
*Feb–May 2026, remote contract*
> Naming note: do not reference "ISTV"/"Inside Success TV" by name in cover letters, proposals, or cold outreach — describe the work without the company name in those contexts. Resumes may name it directly.

Startup-like sales environment where closers (sales staff) made up the majority of headcount; automation work supported closers, fulfillment, and recruitment functions.

- Built a call-recording-to-CRM pipeline processing 200+ recordings/day: auto-transcription, Claude-based summarization, push to CRM
- Built an end-to-end transcript AI classification pipeline for sales-call leads: pulled VTT transcripts via the Zoom API, with a fallback path that downloaded audio and transcribed via Whisper/AssemblyAI when VTT was unavailable; matched recordings to leads via a lookup table (host, date, topic metadata); classified each lead with Gemini/GPT against a structured prompt (industry, objection, motivation, approval flag, notes); wrote results back to a master spreadsheet and handed classification output off to the CRM for tag/workflow mapping
- Built a compliance auditor using a Zep knowledge graph with automated Slack Block Kit reporting
- Built a resume screening/analyzer agent for recruitment
- Built a document generation workflow ("Greenlight PDF") for closers/fulfillment: pulled transcript from Zoom call, classified it (Google Gemini), drafted content via an AI agent on Mistral Cloud Chat Model with auto-fixing structured output parsing, then generated formatted PDF documents
- Built a sales performance analyzer: a "Performance Agent" on Claude (with Gemini as fallback model), triggered from Google Sheets updates, writing results to Airtable and posting Slack notifications
- Designed, built, and shipped "ISTV Engine," a podcast/YouTube thumbnail generation web app (deployed on Render) with a 5-stage AI pipeline: background removal (@imgly, local), variation planning (Claude), background/texture sourcing (Pexels API, 10 images/run), image compositing with lighting/color-grade/rim-light matching (Gemini), and deterministic typography/particles/branding (Sharp). Maintained a CLAUDE.md architecture doc and debugged production issues (e.g., a hardcoded array-length guard rejecting a widened query batch)
- Built LinkedIn lead-classification n8n workflows: one classifies leads by country-code presence via a text classifier + LLM chain with structured output parsing; another monitors a Google Drive folder on a schedule for new lead files
- Tracked LinkedIn lead-gen campaign performance in a spreadsheet with thousands of rows, tagged by source campaign
- Built active dashboards for select clients, sourcing data from Tally forms compiled into tables
- Migrated data from Tally (form platform) into a table via a Make.com integration; files arrived only as API links, so used an HTTP Request node to fetch the actual files
- Cleaned lead data sourced from a Google Form: separated dates, cleaned contact details such as emails
- Worked across the marketing and operations arms, primarily with the Chief of Staff (direct boss); also worked with a virtual assistant to review Slack automation output for call details
- Built/supported a Slack-based form for closers to document call outcomes, feeding a Google Sheet used to track sales closed and day-to-day call details
- Delivered various smaller one-off automations built as needed for immediate, shifting job requirements
- Tools used: Airtable, Make.com, n8n, Claude API, Google Gemini, Mistral, OpenAI, Zoom API, Whisper/AssemblyAI, Render, Sharp, @imgly

### Operations & Automation Specialist — IP Express Nigeria Limited
*Jan–Apr 2026, on-site, Lagos*

- Migrated data from spreadsheets into Bubble.io and Supabase
- Performed database planning for the migrated system
- Built a dashboard in Bubble.io
- Noted by self as one of the most technically difficult projects worked on to date

### Sales Analyst Intern — IJAN Africa
*Apr–Jun 2025, hybrid, Lagos*
(Education-sector business — courses/class hours as the core product)

- Cleaned and analyzed sales performance data
- Compared performance of courses/class hours to identify which sold better
- Participated in business deliberations on which areas of the business needed more focus, using this analysis
- Facilitated learning support for students, alongside analyst duties
- Taught a class covering SQL, taking students from zero to proficient; also privately mentored one struggling student who became the top performer in SQL for that cohort
- Had some input/delegation in deciding how data analysis would be used to benefit the company
- Did not build dashboards in this role (scope note — distinguishes from ISTV/IP Express dashboard work)

### Freelance Data Entry & Reporting Specialist — Remote
*Sep–Dec 2024*
(Client: NYC-based lead paint inspection company; no formal company name to cite)

- Performed data entry and reporting for a lead paint inspection business
- Freelance/self-employed engagement — no employer name to list

### Self-Employed — E-commerce Sole Proprietor (Apparel & Footwear)
*2019–2024*
(No registered brand name)

- Ran a dropshipping apparel/footwear business end-to-end
- Managed finances, business logistics, and accounting
- Handled customer service directly

### E-commerce Virtual Assistant — All Things Fashion
*Sep 2018–Jun 2019*

- Provided basic graphics design support using Canva
- Managed social media posting
- Handled customer service
- Managed inventory
- Supported operations for the store's physical fulfillment footprint (online store with a physical fulfillment component), working alongside the boss

### Other
- Taught at a primary school during a gap year (early teaching experience, predates IJAN Africa)

---

## Verified Credibility Anchors (use across summaries/outreach without necessarily naming employers)
- 200+ recordings/day transcript-to-CRM automation pipeline, plus a full Zoom→VTT/Whisper-fallback→AI-classification→CRM handoff system for sales leads
- Compliance auditor with knowledge-graph + Slack integration
- Resume screening/recruitment agent
- Multi-model document generator (Gemini classification + Mistral drafting agent → formatted PDF)
- Multi-model sales performance analyzer (Claude primary, Gemini fallback) writing to Airtable + Slack
- Shipped a production 5-stage AI image pipeline (thumbnail generator) orchestrating Claude, Gemini, and Pexels with a documented architecture (CLAUDE.md) and live-debugged production bugs
- Lead classification and lead-gen tracking workflows at scale (thousands of tracked leads)
- Supabase Edge Function architecture (Plenteous LLC — see [[plenteous-systems-architecture]])
- Three-portal no-code platform migration
- ~4–5 years earlier VA/e-commerce background: graphics, social, inventory, customer service, dropshipping finance/logistics

## Application Handling Rules
- Deliver resumes/documents as PDF (in addition to or instead of docx, depending on context)
- Never use placeholder contact details
- Do not invent company names for the first three roles; roles 4–5 are correctly listed as freelance/self-employed with no employer name
- No fabricated metrics anywhere in this file — add real numbers as they're confirmed, don't estimate
