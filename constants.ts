import { CaseStudy, SkillGroup, TimelineItem, EducationItem } from './types';

export const CORE_TOOLKIT = [
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', category: 'Core' },
  { name: 'Google Sheets', icon: 'https://cdn.simpleicons.org/googlesheets/34A853', category: 'Data' },
  { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/ffffff', category: 'Ops' },
  { name: 'Airtable', icon: 'https://cdn.simpleicons.org/airtable/18BFFF', category: 'Data' },
  { name: 'Zapier', icon: 'https://cdn.simpleicons.org/zapier/FF4F00', category: 'Automation' },
  { name: 'Make', icon: 'https://cdn.simpleicons.org/make/61549D', category: 'Automation' },
  { name: 'n8n', icon: 'https://cdn.simpleicons.org/n8n/FF656D', category: 'Automation' },
  { name: 'Slack', icon: 'https://cdn.simpleicons.org/slack/4A154B', category: 'Comm' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/ffffff', category: 'Dev' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', category: 'Database' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', category: 'Database' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', category: 'Dev' },
  { name: 'Google Cloud', icon: 'https://cdn.simpleicons.org/googlecloud/4285F4', category: 'Cloud' },
  { name: 'Stripe', icon: 'https://cdn.simpleicons.org/stripe/008CDD', category: 'Payments' },
  { name: 'Google Calendar', icon: 'https://cdn.simpleicons.org/googlecalendar/4285F4', category: 'Automation' },
  { name: 'HubSpot', icon: 'https://cdn.simpleicons.org/hubspot/FF7A59', category: 'CRM' },
  { name: 'Neo4j', icon: 'https://cdn.simpleicons.org/neo4j/008CC1', category: 'Database' },
  { name: 'ElevenLabs', icon: 'https://cdn.simpleicons.org/elevenlabs/ffffff', category: 'AI' },
  { name: 'Brevo', icon: 'https://cdn.simpleicons.org/brevo/0092FF', category: 'Marketing' }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Automation & GTM Systems',
    skills: [
      {
        name: 'n8n / Make.com',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z'
      },
      {
        name: 'RAG Agent Architecture',
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
      },
      {
        name: 'CRM Automations',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
      },
      {
        name: 'GTM Inbound/Outbound',
        icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
      },
      {
        name: 'Lead Gen & Enrichment',
        icon: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
      },
      {
        name: 'AI-Powered Chatbots',
        icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
      },
      {
        name: 'Workflow Logic Design',
        icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
      }
    ]
  },
  {
    name: 'Data Analytics & Reporting',
    skills: [
      {
        name: 'SQL (Postgres/MySQL)',
        icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
      },
      {
        name: 'Python for Data Analysis',
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      },
      {
        name: 'Power BI (DAX/Modeling)',
        icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
      },
      {
        name: 'Advanced Excel',
        icon: 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
      },
      {
        name: 'ETL Pipeline Engineering',
        icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
      },
      {
        name: 'Statistical Analysis',
        icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
      },
      {
        name: 'KPI Dashboarding',
        icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'
      }
    ]
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: 'Present',
    role: 'Data and automation specialist',
    company: 'Independent / Consulting',
    description: 'Deploying AI-driven automation workflows and analytics infrastructures for high-growth operations.'
  },
  {
    year: '2024 - 2025',
    role: 'Data Analyst',
    company: 'Strategic Operations',
    description: 'Leveraging advanced SQL and Python to deliver actionable insights and predictive modeling for operational efficiency.'
  },
  {
    year: '2019 - 2024',
    role: 'Entrepreneur (Self-Employed)',
    company: 'E-commerce & Retail',
    description: 'Managed a digital storefront focused on footwear, optimizing inventory tracking and customer data management while completing my degree.'
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
    details: 'Rigorous training in quantitative analysis, statistical modeling, and logical reasoning—the foundational bedrock for my career in data and automation.'
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
      { step: 'Agentic Reasoning', description: 'Gemini 3 Pro acts as the reasoning engine, orchestrating tool calls to verify every citation before responding.' }
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
    impact: 'Reduced processing time from 15h/week to ~10 mins/week.',
    description: 'Architected a webhook-based listener in n8n that triggers upon email receipt. Utilized OpenAI Vision API for extraction of unstructured PDF data into strict JSON schemas. Implemented a validation layer against existing POs in PostgreSQL before final injection into Xero.',
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
    solution: 'Architected a multi-step enrichment kit using Make.com and Python scripts. The system captures new leads via webhooks, enriches them through Clearbit/Apollo APIs, performs sentiment analysis on company news, and scores them for immediate CRM prioritization.',
    tools: ['Make.com', 'Python', 'Apollo API', 'Clearbit', 'HubSpot'],
    impact: 'Reclaimed 20+ hours of weekly sales capacity and improved lead conversion rate by 34%.',
    description: 'This solution automated the entire lead lifecycle. I built custom Python scripts to handle complex data transformation that standard integration blocks could not manage, such as fuzzy matching company names across multiple databases and calculating a proprietary "Propensity to Buy" score based on recent hiring trends and tech stack changes.',
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
    title: 'Data Warehouse Project - Medallion Architecture with SSMS',
    category: 'Data Engineering',
    problem: 'Raw transactional data from multiple sources was fragmented and unstructured, making it difficult to generate accurate sales reports and analyze customer behavior efficiently.',
    solution: 'Designed and implemented a Data Warehouse using the Medallion Architecture within SQL Server Management Studio (SSMS). This layered approach transforms raw data into a structured Star Schema optimized for business intelligence.',
    tools: ['SSMS', 'SQL Server', 'SQL', 'Medallion Architecture', 'ETL'],
    impact: 'Established a scalable data foundation, enabling accurate sales reporting, customer segmentation, and executive decision-making based on reliable, structured data.',
    description: 'This project demonstrates the design and implementation of a Data Warehouse using SQL Server Management Studio (SSMS), combined with the Medallion Architecture, to efficiently process, clean, and structure raw data for business analysis. The project follows a layered data processing approach to ensure data quality, scalability, and efficient reporting, simulating how businesses structure their data for decision-making.',
    architecture: 'Raw Source -> Bronze (Ingestion) -> Silver (Transformation) -> Gold (Star Schema)',
    keyFeatures: [
      'Layered data pipeline using Medallion principles',
      'Data cleaning and transformation within SQL Server',
      'Star Schema design (Fact & Dimension tables)',
      'Example business-focused analytical queries'
    ],
    process: [
      { step: 'Bronze Layer', description: 'Raw data ingestion into SQL Server tables directly from transactional sources.' },
      { step: 'Silver Layer', description: 'Data cleaning, transformation, and standardization using SQL queries to ensure consistency.' },
      { step: 'Gold Layer', description: 'Final, analytics-ready data modeled into a star schema (Fact & Dimension tables) for high-performance reporting.' }
    ],
    results: [
      { label: 'Data Quality', value: '100%', improvement: 'Structured' },
      { label: 'Reporting', value: 'Reliable', improvement: 'Single Source of Truth' },
      { label: 'Architecture', value: 'Medallion', improvement: 'Scalable Design' },
      { label: 'Query Speed', value: 'High', improvement: 'Optimized Schema' }
    ],
    repoUrl: 'https://github.com/Bolajie/data-warehouse-project'
  }
];