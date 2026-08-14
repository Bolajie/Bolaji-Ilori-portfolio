import React, { useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import TechStackStrip from '../components/TechStackStrip';
import WorkflowVisualizer from '../components/WorkflowVisualizer';

const ThreeBackground = lazy(() => import('../components/ThreeBackground'));

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
    tools: 'Claude Code · Python · FFmpeg',
    title: 'Video Design Studio',
    problem: 'Hand-built video production that drifted off-brand — no shared tokens, no repeatable pipeline.',
    solve: 'Built MotionForge, an agentic pipeline that produces brand-consistent clips from one token set.',
    breakdown: 'An orchestrator agent plans the clip, delegates script and scene work to focused sub-agents, and renders via FFmpeg. Every scene draws from the same design-system tokens — type, color, spacing — so output stays on-brand clip after clip, programmatically.'
  },
  {
    id: 2,
    tools: 'Claude · GoHighLevel · n8n',
    title: 'Cold Outreach System',
    problem: 'Generic cold messages that never tied to the prospect\'s actual situation.',
    solve: 'Built a positioning engine that generates a personalized Ogilvy 4-part pitch for every lead.',
    breakdown: 'Each lead\'s context feeds an Ogilvy-style engine — hook, promise, proof, bridge — and Claude drafts the message per lead. n8n orchestrates the send and follow-up inside GoHighLevel, so no two messages read generic.'
  },
  {
    id: 3,
    tools: 'Supabase · PostgreSQL · n8n',
    title: 'Plenteous Systems Architecture',
    problem: 'Client backends needed scalable auth, structured data, and server-side logic — without a bespoke server to maintain.',
    solve: 'Architected the backend on Supabase — Postgres, edge functions, and row-level security.',
    breakdown: 'Postgres is the source of truth, edge functions handle server-side logic, and row-level security gates multi-user access. n8n keeps external systems in sync with the database, replacing a bespoke server entirely.'
  }
];

const WHAT_I_AUTOMATE = [
  {
    title: 'CRM & Sales Automation',
    tools: 'GoHighLevel · n8n · HubSpot',
    desc: 'Sync calls, leads, and pipeline updates across your CRM — no manual entry.',
  },
  {
    title: 'AI-Powered Analysis',
    tools: 'Claude · Codex · Antigravity',
    desc: 'Route data through LLMs for scoring, synthesis, research, and structured output.',
  },
  {
    title: 'Content & Media Pipelines',
    tools: 'n8n · FFmpeg · Python',
    desc: 'Turn topics and transcripts into captioned videos, docs, and versioned assets.',
  },
  {
    title: 'Data Architecture',
    tools: 'Supabase · PostgreSQL · n8n',
    desc: 'Postgres backends, edge functions, and clean sync between systems.',
  },
  {
    title: 'Lead & Outreach Operations',
    tools: 'GHL · Airtable · Claude',
    desc: 'Capture, enrich, and follow up on every lead from one pipeline.',
  },
  {
    title: 'WhatsApp & Conversational Ops',
    tools: 'WhatsApp · Claude · n8n',
    desc: '24/7 automated conversations with human handoff when it matters.',
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
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14 pb-8 border-b border-line">
        <div>
          <p className="section-label mb-3">Automation Domains</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-bone tracking-tight">
            What I Automate<span className="text-brand-orange">.</span>
          </h2>
        </div>
        <p className="text-brand-muted text-sm font-medium max-w-xs leading-relaxed">
          Six domains. Each one removes work a person is doing by hand today.
        </p>
      </div>

      <dl className="divide-y divide-line border-b border-line">
        {WHAT_I_AUTOMATE.map((item, i) => (
          <div
            key={item.title}
            className="group grid grid-cols-[2.5rem_minmax(0,1fr)] lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.15fr)] gap-x-6 lg:gap-x-10 gap-y-2 py-7 lg:py-9"
          >
            <span
              aria-hidden="true"
              className="font-mono text-2xl lg:text-3xl font-bold leading-none text-brand-muted/40 group-hover:text-brand-orange transition-colors duration-500 tabular-nums row-span-2 lg:row-span-1"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <dt className="flex flex-col gap-2 min-w-0">
              <span className="font-display font-black text-lg lg:text-xl text-brand-bone leading-tight">{item.title}</span>
              <span className="font-mono text-[11px] tracking-wider text-brand-muted">{item.tools}</span>
            </dt>
            <dd className="col-start-2 lg:col-start-3 text-brand-muted text-sm leading-relaxed lg:pt-1">{item.desc}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

const HowIWork: React.FC = () => (
  <section className="py-24 px-6 sm:px-10 lg:px-16 bg-brand-surface/30 border-y border-line">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16 pb-8 border-b border-line">
        <div>
          <p className="section-label mb-3">Engagement Model</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-bone tracking-tight">
            How I <span className="text-brand-orange">Work.</span>
          </h2>
        </div>
        <p className="text-brand-muted text-sm font-medium max-w-xs leading-relaxed">
          Five phases from first call to production system — no ambiguity at any step.
        </p>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-line" style={{ zIndex: 0 }}></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl bg-brand-orange flex items-center justify-center flex-shrink-0 shadow-[0_0_24px_rgba(232,160,0,0.18)]">
                <span className="font-display font-black text-lg text-brand-deep">{step.num}</span>
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-brand-bone mb-2">{step.title}</h3>
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
      {/* pb clears the fixed bottom nav (78px tall + 20px offset = 98px), otherwise
          the receipts land underneath it on short viewports. */}
      <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 dot-pattern z-0 opacity-60"></div>
        <div className="absolute inset-0 radial-glow z-0"></div>
        <Suspense fallback={null}>
          <ThreeBackground className="absolute inset-0 z-0" />
        </Suspense>

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-signal shadow-[0_0_8px_rgba(0,85,255,0.9)] animate-pulse"></span>
            <span className="section-label text-brand-cream">Available for Work</span>
          </div>
          <span className="section-label hidden sm:block">Remote · Worldwide</span>
        </div>

        {/* Fluid, not stepped: at 19vw the six letters of "Bolaji" overflowed their
            box by 71px at 375px and got sliced by the overflow-hidden reveal wrapper.
            The clamp is tuned so the longer of the two lines always fits. */}
        <div className="relative z-10 -mx-2 sm:-mx-4 mt-6 md:mt-0">
          <div className="overflow-hidden">
            <h1 className="hero-title text-[clamp(3.25rem,15vw,17rem)] text-brand-bone font-display font-black uppercase animate-slide-up" style={{ animationFillMode: 'both' }}>
              Bolaji
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-title text-[clamp(3.25rem,15vw,17rem)] font-display font-black uppercase text-brand-orange animate-slide-up" style={{ animationDelay: '0.12s', animationFillMode: 'both' }}>
              Ilori
            </h1>
          </div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mt-6">
          <div className="max-w-lg">
            <p className="section-label mb-3">Operations & Automation Specialist</p>
            <p className="text-base sm:text-lg font-medium text-brand-muted leading-relaxed">
              I help founders and small teams run leaner operations — automating the manual work, wiring the systems, and building the AI workflows that let ops scale without breaking.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-brand-orange text-brand-deep font-display font-bold text-sm uppercase tracking-wide rounded-xl shadow-[0_0_24px_rgba(232,160,0,0.3)] hover:shadow-[0_0_40px_rgba(232,160,0,0.5)] hover:scale-[1.03] active:scale-95 transition-all">
              Hire Me
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25" />
              </svg>
            </Link>
            <Link to="/case-studies" className="px-7 py-3 border border-line-strong text-brand-bone font-display font-bold text-sm uppercase tracking-wide rounded-xl hover:border-brand-orange/40 hover:bg-line active:scale-95 transition-all">
              View Work
            </Link>
          </div>
        </div>

        {/* Claims carry receipts: the outcome is the sentence, the source sits under it.
            Every line below traces to a shipped system in the project inventory. */}
        <div className="relative z-10 mt-8 pt-8 border-t border-line">
          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-y-4 gap-x-10 lg:gap-x-14">
            {[
              { claim: 'Every lead turned into a personalized 4-part pitch', source: 'Cold Outreach System' },
              { claim: 'Agentic pipeline, one brand token set, consistent video', source: 'Video Design Studio' },
              { claim: 'Fork, build, PR — each task graded by rubric', source: 'Dynamo Task Authoring' },
            ].map(item => (
              <li key={item.source} className="flex items-start gap-3 max-w-xs">
                <span aria-hidden="true" className="w-1 h-1 mt-[7px] rounded-full bg-brand-orange flex-shrink-0" />
                <span>
                  <span className="block text-sm text-brand-bone leading-snug">{item.claim}</span>
                  <span className="block font-mono text-[11px] tracking-wider text-brand-muted mt-1.5">{item.source}</span>
                </span>
              </li>
            ))}
          </ul>
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
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-brand-surface/30 border-t border-line relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16 pb-8 border-b border-line">
            <div>
              <p className="section-label mb-3">Selected Projects</p>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-bone tracking-tight">Featured Work.</h2>
            </div>
            <Link to="/case-studies" className="section-label text-brand-orange hover:text-brand-bone transition-colors self-start sm:self-auto">
              View all work →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {FEATURED_PROJECTS.map((project, i) => (
              <div key={project.id} className="group relative bg-brand-surface border border-line rounded-2xl p-7 sm:p-8 hover:border-brand-orange/25 transition-all duration-500 overflow-hidden flex flex-col">

                <div className="flex items-center justify-between mb-8">
                  <span className="section-label">Project_{String(i + 1).padStart(2, '0')}</span>
                  <div className="w-7 h-7 rounded-lg border border-line-strong flex items-center justify-center text-brand-muted group-hover:text-brand-orange group-hover:border-brand-orange/30 transition-all">
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>

                <span className="inline-flex items-center px-3 py-1.5 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange rounded-lg mb-5" style={{ fontSize: '11px', fontFamily: 'JetBrains Mono', letterSpacing: '0.12em' }}>
                  {project.tools}
                </span>

                <h3 className="font-display font-black text-lg text-brand-bone mb-5 leading-tight group-hover:text-brand-orange transition-all">{project.title}</h3>

                <div className="space-y-4 flex-grow mb-7">
                  <div>
                    <p className="section-label mb-1.5">The Constraint</p>
                    <p className="text-brand-muted text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="section-label text-brand-orange mb-1.5">The Resolution</p>
                    <p className="text-brand-bone text-sm font-medium leading-relaxed">{project.solve}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 border border-line-strong text-brand-muted rounded-xl hover:border-brand-orange/30 hover:text-brand-bone transition-all flex items-center justify-center gap-2 font-display font-bold text-xs uppercase tracking-widest cursor-pointer"
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
          <div className="absolute inset-0 bg-brand-sunken/80 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
          <div className="bg-brand-surface border border-line-strong w-full sm:max-w-xl rounded-t-3xl sm:rounded-2xl p-8 sm:p-10 relative z-10 shadow-2xl animate-reveal">
            <button onClick={() => setSelectedProject(null)} className="absolute top-5 right-5 p-2 text-brand-muted hover:text-brand-bone transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <p className="section-label text-brand-orange mb-2">System Architecture</p>
            <h3 className="font-display font-black text-2xl text-brand-bone mb-7 pr-8">{selectedProject.title}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-5 bg-brand-sunken/50 border border-line rounded-xl">
                <p className="section-label mb-2">Constraint</p>
                <p className="text-brand-muted text-sm leading-relaxed">{selectedProject.problem}</p>
              </div>
              <div className="p-5 bg-brand-orange/[0.07] border border-brand-orange/20 rounded-xl">
                <p className="section-label text-brand-orange mb-2">Resolution</p>
                <p className="text-brand-bone text-sm font-medium leading-relaxed">{selectedProject.solve}</p>
              </div>
            </div>

            <div className="mb-7">
              <p className="section-label mb-3">Technical Execution</p>
              <p className="text-brand-muted text-sm leading-relaxed font-mono bg-brand-sunken/60 p-5 rounded-xl border border-line">
                {selectedProject.breakdown}
              </p>
            </div>

            <div className="flex justify-end">
              <button onClick={() => setSelectedProject(null)} className="px-6 py-2.5 bg-brand-bone text-brand-deep font-display font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-brand-bone/85 transition-colors cursor-pointer">
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
