import { CaseStudy, SkillGroup, TimelineItem, EducationItem } from './types';

export const CORE_TOOLKIT = [
  { name: 'n8n', icon: 'https://cdn.simpleicons.org/n8n/FF656D', category: 'Automation' },
  { name: 'Make', icon: 'https://cdn.simpleicons.org/make/61549D', category: 'Automation' },
  { name: 'Zapier', icon: 'https://cdn.simpleicons.org/zapier/FF4F00', category: 'Automation' },
  { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai/ffffff', category: 'AI' },
  { name: 'Gemini', icon: 'https://cdn.simpleicons.org/googlegemini/8E75B2', category: 'AI' },
  { name: 'Airtable', icon: 'https://cdn.simpleicons.org/airtable/18BFFF', category: 'Data' },
  { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/3ECF8E', category: 'Data' },
  { name: 'Google Sheets', icon: 'https://cdn.simpleicons.org/googlesheets/34A853', category: 'Data' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', category: 'Dev' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', category: 'Dev' },
  { name: 'Playwright', icon: 'https://cdn.simpleicons.org/playwright/2EAD33', category: 'Dev' },
  { name: 'Slack', icon: 'https://cdn.simpleicons.org/slack/4A154B', category: 'Comm' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/ffffff', category: 'Dev' },
  { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/ffffff', category: 'Ops' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Automation & No-Code',
    skills: [
      {
        name: 'n8n / Make / Zapier',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z'
      },
      {
        name: 'Bubble.io App Development',
        icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
      },
      {
        name: 'GoHighLevel (GHL)',
        icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
      },
      {
        name: 'Workflow Logic Design',
        icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
      },
      {
        name: 'CRM & API Integrations',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
      },
      {
        name: 'SOP & Process Documentation',
        icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
      },
      {
        name: 'Data Migration Pipelines',
        icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
      }
    ]
  },
  {
    name: 'AI / LLM & Data',
    skills: [
      {
        name: 'Gemini 2.5 Pro / Claude / OpenAI',
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
      },
      {
        name: 'RAG Pipeline Architecture',
        icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
      },
      {
        name: 'Zep Knowledge Graph',
        icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064'
      },
      {
        name: 'Structured Output Parsers',
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      },
      {
        name: 'Airtable / Supabase / Google Sheets',
        icon: 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
      },
      {
        name: 'Playwright / Zoom / GitHub APIs',
        icon: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
      },
      {
        name: 'Python / Node.js / FFmpeg / docx-js',
        icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
      }
    ]
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: 'Present',
    role: 'No-Code & Automation Engineer',
    company: 'Freelance · Remote',
    description: 'Building AI-powered automation workflows, no-code SaaS products, and data pipelines for startups, digital agencies, and ops-heavy businesses.'
  },
  {
    year: '2024 - 2025',
    role: 'Automation & Data Specialist',
    company: 'Independent Consulting',
    description: 'Delivered automation and data workflow solutions for clients, leveraging n8n, AI integrations, and no-code platforms to streamline operations.'
  },
  {
    year: '2019 - 2024',
    role: 'Entrepreneur (Self-Employed)',
    company: 'E-commerce & Retail',
    description: 'Managed a digital storefront focused on footwear, optimizing inventory tracking and customer data management while completing a B.Sc. in Mathematics at FUNAAB.'
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

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'nigeria-tax-ai',
    title: 'AI-Powered Nigerian Tax Advisory System',
    category: 'Automation & AI',
    problem: 'A leading Lagos-based tax consultancy was losing 60% of billable hours to manual research in the 400+ page Nigeria Tax Act 2025. This caused inconsistencies, client delays, and high staff burnout.',
    solution: 'Built an intelligent, zero-hallucination AI advisor using a three-tier retrieval system (Semantic Search + Knowledge Graph + Vector Store). The system ensures every answer is backed by exact statutory text and citations.',
    tools: ['n8n', 'Google Gemini', 'PostgreSQL', 'Neo4j', 'Redis', 'Mistral AI', 'Cohere'],
    impact: '88% reduction in research time and $180K additional revenue in Year 1.',
    description: 'Implemented a sophisticated hierarchy-aware chunking algorithm that preserves legal structure. The system generally takes 8-15 seconds to respond, a deliberate latency that ensures extremely high accuracy. It achieves this by leveraging the dynamic memory provided in the Knowledge Graph to cross-reference every claim against statutory text before generating an answer.',
    architecture: 'PDF Upload -> n8n Pipeline -> Mistral Vision -> Smart Chunker -> Neo4j (Relationships) + pgVector (Statutory Text) -> Gemini Agent',
    keyFeatures: [
      'Hierarchy-Aware Chunking (preserving Chapter/Section relationship)',
      'Multi-Tier RAG Orchestration (Semantic + Knowledge Graph)',
      'Autonomous Citation Verification (Anti-hallucination layer)',
      'High-Speed PDF Ingestion & OCR Processing'
    ],
    process: [
      { step: 'Ingestion', description: 'Raw PDFs are ingested via n8n and processed using Mistral Vision to capture tables and complex formatting.' },
      { step: 'Knowledge Mapping', description: 'Legal relationships are mapped into Neo4j to allow for contextual cross-referencing between sections.' },
      { step: 'Vectorization', description: 'Statutory text is embedded and stored in pgVector with high-dimensional metadata for precise retrieval.' },
      { step: 'Agentic Reasoning', description: 'Gemini Pro acts as the reasoning engine, orchestrating tool calls to verify every citation before responding.' }
    ],
    workflowGallery: [
      {
        url: 'https://drive.google.com/uc?export=view&id=1B6Zc4HLkhHn1yDyrQGychvpjP2bPR1dr',
        caption: 'Agent Orchestration & Handshake Logic'
      },
      {
        url: 'https://drive.google.com/uc?export=view&id=1QkSSNbYtJ1W1Yb7LDDZQUS6sQMVFHrRz',
        caption: 'ETL Pipeline: Extraction, Transform & Knowledge Loading'
      }
    ],
    results: [
      { label: 'Research Time', value: '30 mins/day', improvement: '88% reduction' },
      { label: 'Response Time', value: '8-15 secs', improvement: 'High Precision' },
      { label: 'Citation Accuracy', value: '99.2%', improvement: '+17.2% gain' },
      { label: 'Revenue Growth', value: '$180K+', improvement: 'Year 1 Impact' }
    ],
    testimonial: {
      text: "This AI system transformed our practice. What used to take our team hours of manual research now happens in seconds—with perfect citations every time.",
      author: "Oluwaseun Adebayo",
      role: "Managing Partner"
    },
    demoUrl: 'https://nigeria-tax-law-bot.vercel.app',
    repoUrl: 'https://github.com/Bolajie/Nigeria-Tax-Law-bot'
  },
  {
    id: 'autonomous-invoice-ops',
    title: 'Autonomous Invoice Ops',
    category: 'Finance Automation',
    problem: 'Finance team was burning 15h/week on manual data entry from unstructured invoices.',
    solution: 'Deployed an OCR pipeline using n8n and OpenAI Vision to extract, validate, and inject invoice data into Xero.',
    tools: ['n8n', 'OpenAI', 'PostgreSQL', 'Xero'],
    impact: 'Reduced processing time from 15h/week to under 10 mins/week.',
    description: 'Architected a webhook-based listener in n8n that triggers upon email receipt. Utilized OpenAI Vision API for extraction of unstructured PDF data into strict JSON schemas. Implemented a validation layer against existing POs in PostgreSQL before final injection into Xero.',
    architecture: 'Email Receipt (IMAP) -> n8n Webhook -> OpenAI Vision (OCR) -> PO Validation (PostgreSQL) -> Xero Injection',
    process: [
      { step: 'Webhook Listener Setup', description: 'Configured n8n to listen for incoming emails via IMAP and trigger the workflow upon PDF attachment detection.' },
      { step: 'OCR Data Extraction', description: 'Leveraged OpenAI Vision capabilities to parse unstructured invoice PDFs and extract key fields (Date, Vendor, Amount) into a strict JSON schema.' },
      { step: 'Validation & Injection', description: 'Implemented a logic layer to validate extracted amounts against open Purchase Orders in PostgreSQL, then auto-posted clean data to Xero.' }
    ],
    results: [
      { label: 'Manual Hours', value: '0', improvement: '100% Removed' },
      { label: 'Processing Speed', value: '< 2 min', improvement: 'Real-time' },
      { label: 'Error Rate', value: '0.02%', improvement: 'Near Zero' }
    ]
  },
  {
    id: 'autonomous-gtm-engine',
    title: 'Autonomous GTM Enrichment & Scoring Engine',
    category: 'GTM Engineering',
    problem: 'A high-growth B2B SaaS startup struggled with stale lead data and slow response times. Their sales team was wasting 20 hours a week manually verifying email addresses and LinkedIn profiles from Apollo.io exports.',
    solution: 'Architected a multi-step enrichment pipeline using Make.com and Python scripts. The system captures new leads via webhooks, enriches them through Apollo APIs, and scores them for immediate CRM prioritization.',
    tools: ['Make.com', 'Python', 'Apollo API', 'Clearbit', 'HubSpot'],
    impact: 'Reclaimed 20+ hours of weekly sales capacity and improved lead conversion rate by 34%.',
    description: 'Built custom Python scripts to handle complex data transformation that standard integration blocks could not manage — including fuzzy matching company names across multiple databases and calculating a proprietary Propensity to Buy score based on recent hiring trends and tech stack changes.',
    architecture: 'Apollo Webhook -> Make.com Switchboard -> Python Enrichment Module -> HubSpot CRM Sync',
    results: [
      { label: 'Sales Capacity', value: '+20 Hours', improvement: 'Weekly reclaimed' },
      { label: 'Conversion Rate', value: '34%', improvement: 'Increase' },
      { label: 'Data Accuracy', value: '98%', improvement: 'Up from 70%' },
      { label: 'Enrichment Time', value: '< 2 Mins', improvement: 'Instantaneous' }
    ],
    repoUrl: 'https://github.com/Bolajie/autonomous-enrichment-kit'
  },
  {
    id: 'data-warehouse-medallion',
    title: 'Data Warehouse — Medallion Architecture',
    category: 'Data Engineering',
    problem: 'Raw transactional data from multiple sources was fragmented and unstructured, making it impossible to generate accurate sales reports or analyze customer behavior efficiently.',
    solution: 'Designed and implemented a Data Warehouse using the Medallion Architecture within SQL Server Management Studio (SSMS), transforming raw data into a Star Schema optimized for business intelligence.',
    tools: ['SSMS', 'SQL Server', 'SQL', 'Medallion Architecture', 'ETL'],
    impact: 'Established a scalable, single-source-of-truth data foundation enabling accurate sales reporting and customer segmentation.',
    description: 'Designed and implemented a full Data Warehouse in SSMS using the Medallion Architecture. The project follows a three-layer processing approach — Bronze for ingestion, Silver for transformation, Gold for analytics-ready Star Schema — ensuring data quality, scalability, and reliable reporting.',
    architecture: 'Raw Source -> Bronze (Ingestion) -> Silver (Transformation) -> Gold (Star Schema)',
    keyFeatures: [
      'Layered data pipeline using Medallion principles',
      'Data cleaning and transformation within SQL Server',
      'Star Schema design (Fact & Dimension tables)',
      'Business-focused analytical queries'
    ],
    process: [
      { step: 'Bronze Layer', description: 'Raw data ingestion into SQL Server tables directly from transactional sources.' },
      { step: 'Silver Layer', description: 'Data cleaning, transformation, and standardization using SQL queries to ensure consistency.' },
      { step: 'Gold Layer', description: 'Final, analytics-ready data modeled into a Star Schema (Fact & Dimension tables) for high-performance reporting.' }
    ],
    results: [
      { label: 'Data Quality', value: '100%', improvement: 'Structured' },
      { label: 'Reporting', value: 'Reliable', improvement: 'Single Source of Truth' },
      { label: 'Architecture', value: 'Medallion', improvement: 'Scalable Design' },
      { label: 'Query Speed', value: 'High', improvement: 'Optimized Schema' }
    ],
    repoUrl: 'https://github.com/Bolajie/data-warehouse-project'
  },
  {
    id: 'sales-crm-automation',
    title: 'Sales Call CRM Automation Pipeline',
    category: 'Automation & AI',
    problem: 'Sales reps spent significant time manually logging call data and updating CRM records after every customer interaction — creating lag, inconsistency, and wasted hours that should have gone to selling.',
    solution: 'Built an end-to-end n8n automation pipeline that captures call data, extracts structured information using Gemini 2.5 Pro and Claude AI, and writes clean records directly to both Airtable and Google Sheets — with zero manual input.',
    tools: ['n8n', 'Gemini 2.5 Pro', 'Claude AI', 'Airtable', 'Google Sheets'],
    impact: 'Eliminated 100% of manual post-call CRM entry.',
    description: 'Designed and deployed an n8n workflow that processes sales call data end-to-end. Gemini 2.5 Pro handles transcription analysis while Claude AI extracts structured deal data. Clean records route automatically to Airtable for CRM management and Google Sheets for reporting — replacing a fully manual post-call process.',
    architecture: 'Call Recording → n8n Trigger → Gemini 2.5 Pro (Transcription) → Claude AI (Data Extraction) → Airtable (CRM) + Google Sheets (Reporting)',
  },
  {
    id: 'ftc-compliance-auditing',
    title: 'FTC Compliance Auditing System',
    category: 'Compliance Automation',
    problem: 'Compliance reviews required manual cross-referencing of marketing content against FTC guidelines — a process taking days per audit cycle and prone to human error and inconsistency.',
    solution: 'Deployed an AI auditing pipeline using n8n to orchestrate submissions, a Zep Knowledge Graph to hold persistent regulatory memory, and OpenAI for intelligent content analysis, with results delivered instantly via Slack Block Kit.',
    tools: ['n8n', 'Zep Knowledge Graph', 'OpenAI', 'Slack Block Kit'],
    impact: 'Compliance review time reduced from days to seconds.',
    description: 'Built a compliance automation system where n8n receives content submissions and routes them to OpenAI, which analyzes content against FTC guidelines stored in a persistent Zep Knowledge Graph. The Knowledge Graph enables consistent, context-aware regulatory reasoning across all reviews. Structured audit results are delivered instantly to Slack via Block Kit.',
    architecture: 'Content Submission → n8n → OpenAI + Zep Knowledge Graph (Compliance Check) → Slack Block Kit (Audit Report)',
  },
  {
    id: 'three-portal-saas',
    title: 'Three-Portal SaaS Platform',
    category: 'No-Code Product',
    problem: 'A job search management company needed a production-grade multi-role web application — with separate interfaces for clients, associates, and administrators — without an extended development timeline.',
    solution: 'Architected and built a complete three-portal SaaS platform in Bubble.io, with distinct role-based interfaces and permission levels for all three user types within a single unified application.',
    tools: ['Bubble.io'],
    impact: 'Delivered a production-grade three-portal SaaS application for a job search management company.',
    description: 'Designed and built a full no-code SaaS product for a job search management company. The platform serves three distinct user roles: clients track their job search progress via a personal dashboard, associates manage their active candidate workload, and administrators oversee the full operation — all within a single Bubble.io application with clean permission separation.',
    architecture: 'Bubble.io Single App → Role-Based Routing → Client Portal + Associate Portal + Admin Portal',
  },
  {
    id: 'data-migration-pipelines',
    title: 'Data Migration Pipelines',
    category: 'Data Engineering',
    problem: 'Business data was fragmented across Bubble.io and Google Sheets, requiring clean migration to Supabase for a more scalable infrastructure — plus a reverse pipeline for ongoing data ingestion.',
    solution: 'Built two bidirectional n8n migration pipelines: one extracting from Bubble.io via its API and loading into Supabase with schema transformation, and a second syncing Google Sheets data back to Bubble.io.',
    tools: ['n8n', 'Bubble API', 'Supabase', 'Google Sheets'],
    impact: 'Clean bidirectional migration: Bubble → Supabase and Sheets → Bubble.',
    description: 'Engineered two production n8n pipelines to solve a multi-source data challenge. The primary pipeline extracts records from Bubble.io via its API, applies transformation logic to match the Supabase schema, and loads clean data. The second pipeline handles Google Sheets to Bubble sync, maintaining data consistency across both systems.',
    architecture: 'Bubble API → n8n (Transform) → Supabase  |  Google Sheets → n8n (Map) → Bubble API',
  },
  {
    id: 'ai-content-generation',
    title: 'AI Content Generation Pipeline',
    category: 'Content Automation',
    problem: 'Converting raw transcripts into two distinct formatted document types required significant manual editing effort — a bottleneck for content teams producing at volume.',
    solution: 'Built an n8n pipeline that accepts transcript input, applies structured LLM prompt engineering to generate two distinct document formats simultaneously, and publishes directly to Google Docs via API.',
    tools: ['n8n', 'LLM Prompt Engineering', 'Google Docs API'],
    impact: 'Automated dual-format document generation directly from transcripts.',
    description: 'Designed a content automation workflow in n8n that takes raw transcript data as input. Structured LLM prompts generate two distinct output formats in parallel. Both documents are published automatically to Google Docs via API, eliminating manual editing and reformatting entirely.',
    architecture: 'Transcript Input → n8n → LLM (Format A Prompt) + LLM (Format B Prompt) → Google Docs API (Publish)',
  },
  {
    id: 'thumbnail-generator',
    title: 'Thumbnail Generator',
    category: 'Media Automation',
    problem: 'Creating and versioning thumbnail assets for content production was a manual, repetitive task with no organized version history — making it difficult to track changes and maintain consistent output.',
    solution: 'Built an n8n automation that applies image processing logic for thumbnail generation and commits versioned outputs directly to GitHub for organized asset management.',
    tools: ['n8n', 'GitHub API', 'Image Processing'],
    impact: 'Automated thumbnail production with built-in GitHub versioning.',
    description: 'Engineered an automated thumbnail production pipeline in n8n. The workflow applies image processing logic to generate final thumbnail assets and uses the GitHub API to commit each output as a versioned file — giving the team a fully automated production-to-archive workflow with a clean audit trail.',
    architecture: 'Content Input → n8n → Image Processing (Thumbnail) → GitHub API (Versioned Commit)',
  },
  {
    id: 'short-video-automation',
    title: 'Short Video Automation',
    category: 'Media Automation',
    problem: 'Producing short-form video content from a raw idea involved multiple manual steps across different tools — a time-intensive process difficult to repeat at volume.',
    solution: 'Built a fully automated end-to-end pipeline in n8n where an LLM converts the initial idea into a structured script and scene direction, and FFmpeg handles all video assembly and rendering.',
    tools: ['n8n', 'FFmpeg', 'LLM'],
    impact: 'Full pipeline: idea → produced video clip, completely automated.',
    description: 'Designed an end-to-end video production automation in n8n. An LLM processes the content idea to generate a structured script and scene layout. FFmpeg then handles video assembly, clip rendering, and output — delivering a finished short-form video with no manual editing required.',
    architecture: 'Content Idea → n8n → LLM (Script + Direction) → FFmpeg (Assembly + Render) → Final Video Output',
  },
  {
    id: 'zoom-transcript-extraction',
    title: 'Zoom Transcript Extraction',
    category: 'Data Extraction',
    problem: 'Extracting transcripts from Zoom recordings required navigating both OAuth API access and browser-based flows depending on account configuration — with no reliable automated solution that handled both cases.',
    solution: 'Engineered a hybrid extraction system combining Zoom OAuth API as the primary method with Playwright browser automation as a fallback, plus a custom VTT parser to normalize transcript output across both paths.',
    tools: ['n8n', 'Playwright', 'Zoom API', 'VTT Parser'],
    impact: 'Reliable hybrid OAuth + Playwright transcript extraction system.',
    description: 'Built a resilient transcript extraction pipeline in n8n. The system first attempts extraction via Zoom\'s OAuth API. When API access is restricted, Playwright browser automation handles extraction as a fallback. A custom VTT parser normalizes raw transcript files into clean, structured data regardless of which path was used.',
    architecture: 'Zoom Recording → n8n → Zoom OAuth API (Primary) / Playwright (Fallback) → VTT Parser → Structured Transcript',
  },
  {
    id: 'resume-screening',
    title: 'Sales Closer Resume Screening',
    category: 'HR Automation',
    problem: 'High-volume hiring for sales closer roles meant reviewing large numbers of resumes manually — a slow, inconsistent process that introduced bias and delayed hiring decisions.',
    solution: 'Built an n8n automation using Gemini and a Structured Output Parser to analyze each resume against defined scoring criteria and return a ranked, structured candidate shortlist automatically.',
    tools: ['n8n', 'Gemini', 'Structured Output Parser'],
    impact: 'AI candidate scoring for high-volume sales closer hiring.',
    description: 'Deployed an n8n resume screening pipeline where Gemini analyzes each submitted resume against a defined scoring rubric and returns structured JSON output via a Structured Output Parser. Candidates are ranked automatically, giving hiring teams a prioritized shortlist without manual review.',
    architecture: 'Resume Submission → n8n → Gemini (Scoring Analysis) → Structured Output Parser (JSON) → Ranked Candidate Report',
  },
  {
    id: 'sop-documentation',
    title: 'Workflow SOP Documentation System',
    category: 'Operations Automation',
    problem: 'Documenting complex n8n workflows as Standard Operating Procedures required manually recreating workflow logic in Word documents — a tedious, error-prone process that rarely stayed current.',
    solution: 'Built a Node.js system using docx-js that reads n8n JSON workflow exports and auto-generates structured, formatted .docx SOP documents.',
    tools: ['n8n', 'docx-js', 'Node.js'],
    impact: '.docx SOP generation automated from n8n JSON workflow exports.',
    description: 'Engineered a documentation automation system where n8n workflow JSON exports are fed into a Node.js script using docx-js. The system parses workflow structure, interprets node configurations and logic connections, and generates formatted .docx SOP documents — turning a manual documentation task into a single-step operation.',
    architecture: 'n8n Workflow Export (JSON) → Node.js (docx-js Parser) → Formatted .docx SOP Document',
  },
];
