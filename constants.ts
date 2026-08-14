import { CaseStudy, SkillGroup, TimelineItem, EducationItem } from './types';

// The 12-tool core stack, per DESIGN.md. Names match TOOL_ICONS keys (toolIcons.ts).
// The strip is typographic: the name is the content.
export const CORE_TOOLKIT = [
  { name: 'GoHighLevel', category: 'CRM' },
  { name: 'n8n', category: 'Automation' },
  { name: 'Claude', category: 'AI' },
  { name: 'Supabase', category: 'Data' },
  { name: 'Make', category: 'Automation' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'Airtable', category: 'Data' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Google Workspace', category: 'Ops' },
  { name: 'Python', category: 'Dev' },
  { name: 'Codex', category: 'AI' },
  { name: 'Antigravity', category: 'AI' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Automation & Operations',
    skills: [
      {
        name: 'n8n / Make / Zapier',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z'
      },
      {
        name: 'Workflow Logic Design',
        icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
      },
      {
        name: 'GoHighLevel (GHL)',
        icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
      },
      {
        name: 'Airtable / HubSpot',
        icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
      },
      {
        name: 'Google Workspace',
        icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
      },
      {
        name: 'CRM & API Integrations',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
      },
      {
        name: 'SOP & Process Documentation',
        icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
      }
    ]
  },
  {
    name: 'AI / LLM & Data',
    skills: [
      {
        name: 'Claude / Codex / Antigravity',
        icon: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z'
      },
      {
        name: 'RAG Pipeline Architecture',
        icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
      },
      {
        name: 'Structured Output Parsers',
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      },
      {
        name: 'Supabase / PostgreSQL',
        icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
      },
      {
        name: 'Python / FFmpeg',
        icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
      },
      {
        name: 'Web Research & Scraping',
        icon: 'M12 8v8m-4-4h8M12 21a9 9 0 100-18 9 9 0 000 18z'
      }
    ]
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: 'Present',
    role: 'Operations & Automation Specialist',
    company: 'Independent · Remote',
    description: 'Building AI-powered automation workflows, operations systems, and data pipelines for startups, digital agencies, and ops-heavy businesses.'
  },
  {
    year: 'Feb – May 2026',
    role: 'Automation Specialist',
    company: 'Inside Success TV (ISTV) · Remote contract',
    description: 'Automation across sales, fulfillment, and recruitment in a startup-like sales environment.',
    highlights: [
      'Call-recording-to-CRM pipeline processing 200+ recordings a day — transcription, Claude-based summarization, CRM sync',
      'End-to-end transcript AI classification for sales leads (Zoom API with a Whisper/AssemblyAI fallback), matched to leads and handed to the CRM',
      'Compliance auditor built on a Zep knowledge graph with automated Slack Block Kit reporting',
      'Resume screening / analyzer agent for recruitment',
      'Multi-model document generator — Gemini classification + Mistral drafting with structured-output fixes — producing formatted PDFs',
      'Sales performance analyzer (Claude primary, Gemini fallback) triggered from Sheets, writing to Airtable and Slack',
      'Shipped "ISTV Engine" — a 5-stage AI thumbnail pipeline (Claude, Gemini, Pexels, Sharp) deployed on Render'
    ]
  },
  {
    year: 'Jan – Apr 2026',
    role: 'Operations & Automation Specialist',
    company: 'IP Express Nigeria Limited · On-site, Lagos',
    description: 'Led one of the most technically demanding migrations to date — spreadsheet data onto a modern stack.',
    highlights: [
      'Migrated data from spreadsheets into Bubble.io and Supabase',
      'Planned the database schema for the migrated system',
      'Built a client dashboard in Bubble.io'
    ]
  },
  {
    year: 'Apr – Jun 2025',
    role: 'Sales Analyst Intern',
    company: 'IJAN Africa · Hybrid, Lagos',
    description: 'Sales analytics for an education-sector business, plus hands-on training delivery.',
    highlights: [
      'Cleaned and analyzed sales performance data; compared courses and class hours to surface best sellers',
      'Fed findings into business decisions on where to focus',
      'Taught SQL — took a class from zero to proficient and mentored a student to top performer in the cohort'
    ]
  },
  {
    year: 'Sep – Dec 2024',
    role: 'Freelance Data Entry & Reporting Specialist',
    company: 'Remote · US client (lead paint inspection)',
    description: 'Freelance data entry and reporting for a NYC-based lead paint inspection business.'
  },
  {
    year: '2019 – 2024',
    role: 'Entrepreneur (Self-Employed)',
    company: 'E-commerce · Apparel & Footwear',
    description: 'Ran a dropshipping apparel and footwear business end-to-end while completing a B.Sc. in Mathematics.',
    highlights: [
      'Managed finances, logistics, and accounting',
      'Handled customer service directly'
    ]
  },
  {
    year: 'Sep 2018 – Jun 2019',
    role: 'E-commerce Virtual Assistant',
    company: 'All Things Fashion',
    description: 'Operations support for an online store with a physical fulfillment footprint.',
    highlights: [
      'Graphic design (Canva), social media management, customer service, and inventory management'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    year: '2024 – Present',
    institution: 'WorldQuant University',
    degree: 'Applied Data Science Lab',
    details:
      'Intensive, credentialed program focused on applied data analysis, statistical modeling, and machine learning skills, leading to a certificate.'
  },
  {
    year: '2019 - 2024',
    degree: 'B.Sc. Mathematics',
    institution: 'Federal University of Agriculture, Abeokuta (FUNAAB)',
    details: 'Rigorous training in quantitative analysis, statistical modeling, and logical reasoning — the foundational bedrock for my career in automation and AI systems.'
  }
];

// 9 projects, per DESIGN.md §5. Four are grounded in shipped systems (see sources).
// Five are drafted from project names + the core stack and carry a [VERIFY] flag in
// `description` — correct those before publishing, no fabricated metrics.
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'jollofull-whatsapp-bot',
    title: 'Jollofull WhatsApp Bot',
    category: 'Automation & AI',
    problem: 'Customer inquiries arrived on WhatsApp at all hours, and with a small team there was no way to answer instantly or route requests without someone glued to a screen.',
    solution: 'Built a WhatsApp automation where Claude answers common questions naturally, captures customer details, and hands high-intent conversations to a human — running 24/7.',
    tools: ['n8n', 'WhatsApp', 'Claude', 'Supabase'],
    impact: '24/7 automated WhatsApp conversations — questions answered instantly, leads captured, humans called in when needed.',
    description: '[VERIFY] Draft from the project name + stack. Replace with the real build: what the bot answers, how it was built, and the outcome you want to feature. Current shape: an n8n workflow wired to the WhatsApp Business API; Claude classifies intent and replies to FAQs while n8n routes sales/high-intent messages to the team and logs every conversation to Supabase.',
    architecture: 'WhatsApp Inbound → n8n Webhook → Claude (Intent + Reply) → Supabase (Log) / Team (Escalation)',
    keyFeatures: [
      'Instant FAQ responses around the clock',
      'Conversation logging to Supabase',
      'Human handoff for high-intent messages'
    ],
    process: [
      { step: 'Ingestion', description: 'n8n webhook receives inbound WhatsApp messages and normalizes sender + message metadata.' },
      { step: 'Classification', description: 'Claude classifies intent and either answers from the FAQ or flags the conversation for escalation.' },
      { step: 'Logging', description: 'Every conversation is written to Supabase, preserving context for follow-up.' }
    ]
  },
  {
    id: 'job-alert-automation',
    title: 'Job Alert Automation',
    category: 'Automation & AI',
    problem: 'Finding relevant roles meant manually checking job boards, company pages, and inboxes multiple times a day — with no central record of what had been seen or applied for.',
    solution: 'Built a job-monitoring pipeline that watches sources, filters roles against a target profile, and delivers a daily digest — with applications tracked in one table.',
    tools: ['n8n', 'Gmail', 'Python', 'Airtable', 'Claude'],
    impact: 'A daily digest of matched roles with application tracking — no more manual board-checking.',
    description: '[VERIFY] Draft from the project name + stack. Replace with the real build. Current shape: n8n schedules scrapes of job sources, Python handles pagination/dedup, Claude scores each role against the target profile, matched roles land in a daily email digest, and application status lives in Airtable.',
    architecture: 'Job Sources → n8n (Scheduled) → Python (Fetch + Dedup) → Claude (Match Score) → Digest Email + Airtable Tracker',
    keyFeatures: [
      'Scheduled source monitoring with dedup',
      'Profile-aware match scoring',
      'Application status tracker in Airtable'
    ],
    process: [
      { step: 'Fetch', description: 'n8n triggers on schedule; Python pulls new postings across the configured sources.' },
      { step: 'Score', description: 'Claude evaluates each role against the target profile and returns a structured match decision.' },
      { step: 'Deliver', description: 'Matched roles go to a daily digest; every application is logged to Airtable.' }
    ]
  },
  {
    id: 'lead-management-system',
    title: 'Lead Management System',
    category: 'CRM & Data',
    problem: 'Leads arrived from multiple channels — ads, forms, referrals — and lived in different places, so follow-ups were missed and nobody had a single view of the pipeline.',
    solution: 'Centralized every lead source into one system with automated capture, enrichment, assignment, and follow-up reminders.',
    tools: ['n8n', 'Airtable', 'HubSpot', 'Zapier', 'GoHighLevel'],
    impact: 'Every lead captured, enriched, and followed up from one place — no channel left behind.',
    description: '[VERIFY] Draft from the project name + stack. Replace with the real build. Current shape: n8n ingests leads from each channel, HubSpot enriches contact records, everything lands in a unified Airtable pipeline, and GoHighLevel/Zapier drive follow-up reminders.',
    architecture: 'Lead Sources → n8n → HubSpot (Enrich) → Airtable (Pipeline) → GHL / Zapier (Follow-up)',
    keyFeatures: [
      'Unified lead inbox from every channel',
      'Automatic enrichment and deduplication',
      'Automated follow-up reminders'
    ],
    process: [
      { step: 'Capture', description: 'Webhooks and form triggers push new leads into the pipeline from every channel.' },
      { step: 'Enrich', description: 'HubSpot appends firmographic and contact data before the lead is scored.' },
      { step: 'Assign', description: 'Leads route to the right owner with follow-up reminders wired into the CRM.' }
    ]
  },
  {
    id: 'video-design-studio',
    title: 'Video Design Studio',
    category: 'AI & LLM',
    problem: 'Producing consistent, on-brand video content required hand-building each piece — apply brand tokens, keep style coherent, repeat — a slow process that drifted visually from clip to clip.',
    solution: 'Built MotionForge, an agentic video design system: Claude Code orchestrates focused sub-agents that plan, write, and assemble motion-graphics clips from one shared design-system token set, producing on-brand video programmatically.',
    tools: ['Claude Code', 'Python', 'n8n', 'FFmpeg', 'Supabase'],
    impact: 'Brand-consistent motion-graphics clips produced by an agentic pipeline instead of hand-built frames.',
    description: 'MotionForge: an orchestrator agent plans a clip, delegates script and scene work to focused sub-agents, and renders the final motion-graphics video. Style stays on-brand because every scene draws from the same design-system tokens — type, color, spacing — so output is consistent clip after clip. (Source: rnd/design-studio + adapters/scripts/design-studio.)',
    architecture: 'Brief → Orchestrator Agent → Planner + Script + Scene Sub-agents → Design Tokens → FFmpeg (Render) → Final Clip',
    keyFeatures: [
      'Agentic planning with sub-agent delegation',
      'Shared design-system tokens for brand consistency',
      'Scripted, deterministic render pipeline'
    ],
    process: [
      { step: 'Plan', description: 'The orchestrator turns the brief into a scene plan with reference to the brand tokens.' },
      { step: 'Delegate', description: 'Script and scene sub-agents work from the plan, constrained by the token set.' },
      { step: 'Render', description: 'FFmpeg assembles the final clip; the asset is versioned for reuse.' }
    ]
  },
  {
    id: 'yt-shorts-engine',
    title: 'YT Shorts Engine',
    category: 'Media Automation',
    problem: 'Producing a YouTube Short from a topic meant scripting, recording, editing, captioning, and scheduling by hand — too slow to post consistently.',
    solution: 'Built an automated engine that takes a topic, writes a short-form script, generates the voiceover and visuals, assembles captioned clips with FFmpeg, and stages the upload.',
    tools: ['n8n', 'Python', 'FFmpeg', 'Claude', 'Gemini'],
    impact: 'Topic to finished, captioned Short — fully automated.',
    description: '[VERIFY] Draft from the project name + stack. Replace with the real build. Current shape: n8n orchestrates; an LLM writes the script from the topic, TTS produces the voiceover, FFmpeg assembles visuals with captions, and the finished asset is staged for upload.',
    architecture: 'Topic → n8n → LLM (Script) → TTS + FFmpeg (Assemble) → Captioned Short Output',
    keyFeatures: [
      'Script generation from a bare topic',
      'Automatic caption burn-in',
      'FFmpeg assembly and export'
    ],
    process: [
      { step: 'Script', description: 'An LLM converts the topic into a timed short-form script with scene direction.' },
      { step: 'Voice', description: 'TTS produces the narration track from the script.' },
      { step: 'Assemble', description: 'FFmpeg composes visuals, narration, and captions into the final Short.' }
    ]
  },
  {
    id: 'company-research-agent',
    title: 'Company Research Agent',
    category: 'AI & LLM',
    problem: 'Preparing for outreach or a call meant hours of digging through a company\'s site, funding news, tech stack, and recent hires — most of which went stale within weeks.',
    solution: 'Built a research agent that compiles a structured company brief — positioning, stack, signals, and talking points — on demand from live web sources.',
    tools: ['Claude', 'Python', 'n8n', 'Tavily', 'Supabase'],
    impact: 'A structured, up-to-date company brief in minutes instead of hours of manual research.',
    description: '[VERIFY] Draft from the project name + stack. Replace with the real build. Current shape: n8n triggers research on a company name, Tavily pulls live web sources, Claude synthesizes a structured brief, and reports are cached in Supabase and refreshed on demand.',
    architecture: 'Company Name → n8n → Tavily (Research) → Claude (Brief Synthesis) → Supabase (Cache) + Output',
    keyFeatures: [
      'Live web research via Tavily',
      'Structured company brief output',
      'Cached reports that refresh on demand'
    ],
    process: [
      { step: 'Research', description: 'Tavily queries live sources for the company across news, sites, and hiring signals.' },
      { step: 'Synthesize', description: 'Claude compiles the findings into a structured brief with positioning, stack, and talking points.' },
      { step: 'Store', description: 'Briefs cache in Supabase; the pipeline re-runs to keep them fresh.' }
    ]
  },
  {
    id: 'cold-outreach-system',
    title: 'Cold Outreach System',
    category: 'GTM Engineering',
    problem: 'Cold outreach that didn\'t convert was burning inboxes and time — messages were generic and never tied to the prospect\'s actual situation.',
    solution: 'Built a positioning engine that applies the Ogilvy 4-part pitch structure to each prospect — a hook that names their world, a promise, the proof, and a bridge to the next step — generated per lead and orchestrated in n8n.',
    tools: ['Claude', 'GoHighLevel', 'n8n', 'Supabase'],
    impact: 'Every outreach message built on a proven persuasion structure — hook, promise, proof, bridge.',
    description: 'A cold-outreach system powered by an Ogilvy-style positioning engine. Each lead\'s context feeds the engine, which generates the 4-part pitch — the world they live in, the promise, the proof it holds, and the bridge to the next step — so no two messages read generic. (Source: ogilvy-positioning-engine skill + business-development agent spec.)',
    architecture: 'Lead Context → Ogilvy Engine (Hook / Promise / Proof / Bridge) → Draft → GHL (Send) + Follow-up Logic',
    keyFeatures: [
      'Ogilvy 4-part pitch structure',
      'Personalized per-lead messaging',
      'n8n-orchestrated send and follow-up in GHL'
    ],
    process: [
      { step: 'Position', description: 'The engine maps the lead\'s context to the four pitch components.' },
      { step: 'Generate', description: 'Claude drafts the message from the positioned structure, per lead.' },
      { step: 'Send', description: 'n8n pushes the draft into GoHighLevel with follow-up logic attached.' }
    ]
  },
  {
    id: 'plenteous-systems-architecture',
    title: 'Plenteous Systems Architecture',
    category: 'Data Engineering',
    problem: 'Client systems needed a scalable backend — reliable auth, structured data, and server-side logic — without the weight of a bespoke server to maintain.',
    solution: 'Architected the backend on Supabase: Postgres for data, edge functions for server-side logic, and row-level security for safe multi-user access.',
    tools: ['Supabase', 'PostgreSQL', 'n8n', 'Airtable'],
    impact: 'A scalable Postgres + edge-function backend with row-level security, replacing a bespoke server.',
    description: 'Reference architecture for the Plenteous systems build: Supabase provides Postgres storage, RLS-gated multi-user access, and edge functions for server-side logic, while n8n keeps external systems in sync. (Source: Supabase edge-function architecture in the master resume.)',
    architecture: 'Clients → Supabase Edge Function → Postgres (RLS) + n8n (Sync) → Airtable / External Systems',
    keyFeatures: [
      'Postgres backend with row-level security',
      'Edge functions for server-side logic',
      'n8n sync to external systems'
    ],
    process: [
      { step: 'Model', description: 'Schema and RLS policies are designed around the client\'s data and roles.' },
      { step: 'Serve', description: 'Edge functions handle server-side logic without a dedicated server.' },
      { step: 'Sync', description: 'n8n keeps external systems in step with the Postgres source of truth.' }
    ]
  },
  {
    id: 'dynamo-task-authoring',
    title: 'Dynamo Task Authoring',
    category: 'AI & LLM',
    problem: 'Distributing coding tasks to many learners meant manual setup — cloning repos, handing out branches, collecting submissions, and grading each one individually.',
    solution: 'Built an authoring pipeline that forks a task repo per participant via the GitHub CLI, wires up the exercise, and collects each PR for rubric-based review.',
    tools: ['Claude', 'GitHub CLI', 'Python', 'n8n'],
    impact: 'Per-participant task repos with fork → build → PR submission and rubric review, fully scripted.',
    description: 'Dynamo Task Authoring automates the mechanics of assigning and grading coding tasks: each participant works from their own fork created via the GitHub CLI, submits a PR, and the submission is checked against a rubric before merge. (Source: dynamo-551bf8a-data-querying-and-databases task-authoring workflow.)',
    architecture: 'Task Repo → GitHub CLI (Fork per Participant) → Exercise → PR Submit → Rubric Review → Merge',
    keyFeatures: [
      'Automated per-participant forks via GitHub CLI',
      'PR-based submission flow',
      'Rubric-based review gate'
    ],
    process: [
      { step: 'Author', description: 'The task repo is prepared with exercise and rubric definitions.' },
      { step: 'Fork', description: 'GitHub CLI forks the repo per participant and wires up the exercise.' },
      { step: 'Review', description: 'Each PR is checked against the rubric before it merges.' }
    ]
  }
];
