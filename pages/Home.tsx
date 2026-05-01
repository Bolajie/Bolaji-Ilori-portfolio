import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TechStackStrip from '../components/TechStackStrip';
import WorkflowVisualizer from '../components/WorkflowVisualizer';

interface FeaturedProject {
  id: number;
  tools: string;
  title: string;
  problem: string;
  solve: string;
  breakdown: string;
}

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 1,
    tools: 'n8n · Gemini 2.5 Pro · Claude AI',
    title: 'Sales Call CRM Automation Pipeline',
    problem: 'Sales reps spending hours logging post-call data manually, creating CRM lag and inaccuracy.',
    solve: 'Built an end-to-end pipeline that eliminated 100% of manual post-call CRM entry.',
    breakdown: 'An n8n workflow triggers on call completion, feeds the recording through Gemini 2.5 Pro for transcription analysis, then routes structured data via Claude AI to both Airtable (CRM) and Google Sheets (reporting) — zero manual input required from rep to record.'
  },
  {
    id: 2,
    tools: 'n8n · Zep Knowledge Graph · OpenAI',
    title: 'FTC Compliance Auditing System',
    problem: 'Manual compliance reviews against FTC guidelines taking days per audit cycle.',
    solve: 'Deployed an AI auditing system that reduced compliance review time from days to seconds.',
    breakdown: 'n8n receives content submissions and routes them to OpenAI, which cross-references against FTC guidelines stored in a Zep Knowledge Graph. Structured audit results are delivered instantly to Slack via Block Kit.'
  },
  {
    id: 3,
    tools: 'Bubble.io',
    title: 'Three-Portal SaaS Platform',
    problem: 'A job search management company needed a production-grade multi-role app without a long dev timeline.',
    solve: 'Architected a complete three-portal SaaS in Bubble.io — client, associate, and admin portals in one app.',
    breakdown: 'Built a full no-code SaaS with role-based routing across three distinct portals. Clients track job search progress, associates manage their active candidate workload, and administrators oversee the full operation — all within a single Bubble.io application with clean permission separation.'
  }
];

const WHAT_I_AUTOMATE = [
  {
    title: 'CRM & Sales Automation',
    tools: 'n8n · Airtable · Google Sheets',
    desc: 'Eliminate post-call data entry. Log contacts, notes, and deal stages the moment a call ends.',
    color: { bg: 'bg-emerald-500/[0.07]', border: 'border-emerald-500/20', text: 'text-emerald-400', icon: 'bg-emerald-500/10 border-emerald-500/20' },
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0',
    iconColor: 'text-emerald-400',
  },
  {
    title: 'AI-Powered Analysis',
    tools: 'Claude · Gemini · OpenAI',
    desc: 'Route data through LLMs for scoring, summarization, compliance checks, and structured output.',
    color: { bg: 'bg-violet-500/[0.07]', border: 'border-violet-500/20', text: 'text-violet-400', icon: 'bg-violet-500/10 border-violet-500/20' },
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    iconColor: 'text-violet-400',
  },
  {
    title: 'Slack Integration',
    tools: 'Slack · Block Kit · n8n',
    desc: 'Push real-time alerts, audit results, and reports directly into Slack with rich Block Kit formatting.',
    color: { bg: 'bg-purple-500/[0.07]', border: 'border-purple-500/20', text: 'text-purple-400', icon: 'bg-purple-500/10 border-purple-500/20' },
    iconPath: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    iconColor: 'text-purple-400',
  },
  {
    title: 'Document Generation',
    tools: 'Google Docs · docx-js · n8n',
    desc: 'Auto-generate SOPs, reports, and structured documents from raw data or transcript sources.',
    color: { bg: 'bg-sky-500/[0.07]', border: 'border-sky-500/20', text: 'text-sky-400', icon: 'bg-sky-500/10 border-sky-500/20' },
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    iconColor: 'text-sky-400',
  },
  {
    title: 'Data Migration Pipelines',
    tools: 'Supabase · Bubble API · Sheets',
    desc: 'Move and transform data between platforms without downtime or manual mapping errors.',
    color: { bg: 'bg-amber-500/[0.07]', border: 'border-amber-500/20', text: 'text-amber-400', icon: 'bg-amber-500/10 border-amber-500/20' },
    iconPath: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    iconColor: 'text-amber-400',
  },
  {
    title: 'Compliance & Auditing',
    tools: 'Zep KG · OpenAI · Slack',
    desc: 'Audit content against regulatory rules in seconds. Cross-reference a knowledge graph, deliver instant verdicts.',
    color: { bg: 'bg-rose-500/[0.07]', border: 'border-rose-500/20', text: 'text-rose-400', icon: 'bg-rose-500/10 border-rose-500/20' },
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    iconColor: 'text-rose-400',
  },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Audit',  desc: 'Map every manual process. Identify the highest-ROI automation targets first.' },
  { num: '02', title: 'Design', desc: 'Architect the workflow — nodes, APIs, triggers, data models, error paths.' },
  { num: '03', title: 'Build',  desc: 'Implement in n8n, wired to your existing stack. Each step tested in isolation.' },
  { num: '04', title: 'Test',   desc: 'End-to-end run with live data. Edge cases handled, error paths confirmed.' },
  { num: '05', title: 'Deploy', desc: 'Go live. Monitor in production, document the system for team handoff.' },
];

const WhatIAutomate: React.FC = () => (
  <section className="py-24 px-6 sm:px-10 lg:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16 pb-8 border-b border-white/[0.06]">
        <div>
          <p className="section-label mb-3">Automation Domains</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-cream tracking-tight">
            What I <span className="text-gradient">Automate.</span>
          </h2>
        </div>
        <p className="text-brand-muted text-sm font-medium max-w-xs leading-relaxed">
          Six categories. One goal: eliminate every task your team shouldn't be doing manually.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {WHAT_I_AUTOMATE.map((item, i) => (
          <div
            key={i}
            className={`group p-6 sm:p-7 rounded-2xl border ${item.color.bg} ${item.color.border} hover:scale-[1.01] transition-all duration-300 flex flex-col gap-5`}
          >
            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${item.color.icon}`}>
              <svg className={`w-5 h-5 ${item.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-display font-black text-base text-brand-cream mb-2 leading-tight">{item.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-4">{item.desc}</p>
              <span className={`section-label ${item.color.text}`} style={{ fontSize: '8px' }}>{item.tools}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowIWork: React.FC = () => (
  <section className="py-24 px-6 sm:px-10 lg:px-16 bg-brand-surface/30 border-y border-white/[0.05]">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16 pb-8 border-b border-white/[0.06]">
        <div>
          <p className="section-label mb-3">Engagement Model</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-cream tracking-tight">
            How I <span className="text-gradient">Work.</span>
          </h2>
        </div>
        <p className="text-brand-muted text-sm font-medium max-w-xs leading-relaxed">
          Five phases from first call to production system — no ambiguity at any step.
        </p>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/[0.05]" style={{ zIndex: 0 }}></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl accent-gradient flex items-center justify-center flex-shrink-0 shadow-[0_0_24px_rgba(255,107,43,0.18)]">
                <span className="font-display font-black text-lg text-white">{step.num}</span>
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-brand-cream mb-2">{step.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);

  return (
    <div className="bg-brand-deep min-h-screen">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-10 px-6 sm:px-10 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 dot-pattern z-0 opacity-60"></div>
        <div className="absolute inset-0 radial-glow z-0"></div>

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse"></span>
            <span className="section-label text-emerald-400">Available for Work</span>
          </div>
          <span className="section-label hidden sm:block">Lagos, Nigeria · Remote · $25–40/hr</span>
        </div>

        <div className="relative z-10 -mx-2 sm:-mx-4 mt-6 md:mt-0">
          <div className="overflow-hidden">
            <h1 className="hero-title text-[19vw] sm:text-[17vw] lg:text-[14vw] text-brand-cream font-display font-black uppercase animate-slide-up" style={{ animationFillMode: 'both' }}>
              Bolaji
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-title text-[19vw] sm:text-[17vw] lg:text-[14vw] font-display font-black uppercase text-gradient animate-slide-up" style={{ animationDelay: '0.12s', animationFillMode: 'both' }}>
              Ilori
            </h1>
          </div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mt-6">
          <div className="max-w-lg">
            <p className="section-label mb-3">No-Code & Automation Engineer</p>
            <p className="text-base sm:text-lg font-medium text-brand-muted leading-relaxed">
              I build automation systems, no-code products, and AI workflows that eliminate manual work and let operations scale without breaking.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 accent-gradient text-white font-display font-bold text-sm uppercase tracking-wide rounded-xl shadow-[0_0_24px_rgba(255,107,43,0.3)] hover:shadow-[0_0_40px_rgba(255,107,43,0.5)] hover:scale-[1.03] active:scale-95 transition-all">
              Hire Me
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25" />
              </svg>
            </Link>
            <Link to="/case-studies" className="px-7 py-3 border border-white/10 text-brand-cream font-display font-bold text-sm uppercase tracking-wide rounded-xl hover:border-brand-orange/40 hover:bg-white/[0.04] active:scale-95 transition-all">
              View Work
            </Link>
          </div>
        </div>

        <div className="relative z-10 mt-8 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-wrap gap-x-10 sm:gap-x-16 gap-y-5">
            {[
              { value: '14+',         label: 'Systems Deployed' },
              { value: '100%',        label: 'CRM Entry Eliminated' },
              { value: 'Days → Secs', label: 'Compliance Review' },
              { value: '88%',         label: 'Research Time Reduced' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-display font-black text-2xl sm:text-3xl text-brand-cream tracking-tight">{stat.value}</span>
                <span className="section-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK MARQUEE ───────────────────────────── */}
      <TechStackStrip />

      {/* ── WORKFLOW VISUALIZER ──────────────────────────── */}
      <WorkflowVisualizer />

      {/* ── WHAT I AUTOMATE ──────────────────────────────── */}
      <WhatIAutomate />

      {/* ── HOW I WORK ───────────────────────────────────── */}
      <HowIWork />

      {/* ── FEATURED WORK ────────────────────────────────── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-brand-surface/30 border-t border-white/[0.05] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16 pb-8 border-b border-white/[0.06]">
            <div>
              <p className="section-label mb-3">Selected Projects</p>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-cream tracking-tight">Featured Work.</h2>
            </div>
            <Link to="/case-studies" className="section-label text-brand-orange hover:text-brand-cream transition-colors self-start sm:self-auto">
              All 14 projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {FEATURED_PROJECTS.map((project, i) => (
              <div key={project.id} className="group relative bg-brand-surface border border-white/[0.06] rounded-2xl p-7 sm:p-8 hover:border-brand-orange/25 transition-all duration-500 overflow-hidden flex flex-col">

                <div className="flex items-center justify-between mb-8">
                  <span className="section-label">Project_{String(i + 1).padStart(2, '0')}</span>
                  <div className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center text-brand-muted group-hover:text-brand-orange group-hover:border-brand-orange/30 transition-all">
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>

                <span className="inline-flex items-center px-3 py-1.5 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange rounded-lg mb-5" style={{ fontSize: '9px', fontFamily: 'JetBrains Mono', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {project.tools}
                </span>

                <h3 className="font-display font-black text-lg text-brand-cream mb-5 leading-tight group-hover:text-gradient transition-all">{project.title}</h3>

                <div className="space-y-4 flex-grow mb-7">
                  <div>
                    <p className="section-label text-rose-400 mb-1.5">The Constraint</p>
                    <p className="text-brand-muted text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="section-label text-emerald-400 mb-1.5">The Resolution</p>
                    <p className="text-brand-cream text-sm font-medium leading-relaxed">{project.solve}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 border border-white/[0.08] text-brand-muted rounded-xl hover:border-brand-orange/30 hover:text-brand-cream transition-all flex items-center justify-center gap-2 font-display font-bold text-xs uppercase tracking-widest cursor-pointer"
                >
                  Technical Breakdown
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>

                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL BREAKDOWN MODAL ────────────────────── */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
          <div className="bg-brand-surface border border-white/[0.08] w-full sm:max-w-xl rounded-t-3xl sm:rounded-2xl p-8 sm:p-10 relative z-10 shadow-2xl animate-reveal">
            <button onClick={() => setSelectedProject(null)} className="absolute top-5 right-5 p-2 text-brand-muted hover:text-brand-cream transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <p className="section-label text-brand-orange mb-2">System Architecture</p>
            <h3 className="font-display font-black text-2xl text-brand-cream mb-7 pr-8">{selectedProject.title}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-5 bg-rose-500/5 border border-rose-500/10 rounded-xl">
                <p className="section-label text-rose-400 mb-2">Constraint</p>
                <p className="text-brand-muted text-sm leading-relaxed">{selectedProject.problem}</p>
              </div>
              <div className="p-5 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                <p className="section-label text-emerald-400 mb-2">Resolution</p>
                <p className="text-brand-cream text-sm font-medium leading-relaxed">{selectedProject.solve}</p>
              </div>
            </div>

            <div className="mb-7">
              <p className="section-label mb-3">Technical Execution</p>
              <p className="text-brand-muted text-sm leading-relaxed font-mono bg-black/40 p-5 rounded-xl border border-white/[0.05]">
                {selectedProject.breakdown}
              </p>
            </div>

            <div className="flex justify-end">
              <button onClick={() => setSelectedProject(null)} className="px-6 py-2.5 bg-brand-cream text-brand-deep font-display font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-colors cursor-pointer">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
