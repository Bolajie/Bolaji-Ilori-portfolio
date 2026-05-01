import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';

const FILTERS = [
  { label: 'All',        value: 'all' },
  { label: 'Automation', value: 'automation' },
  { label: 'AI & LLM',   value: 'ai-llm' },
  { label: 'No-Code',    value: 'no-code' },
  { label: 'Data',       value: 'data' },
] as const;

type FilterValue = (typeof FILTERS)[number]['value'];

const CATEGORY_FILTER: Record<string, FilterValue> = {
  'Automation & AI':      'automation',
  'Finance Automation':   'automation',
  'GTM Engineering':      'automation',
  'Media Automation':     'automation',
  'Data Extraction':      'automation',
  'Operations Automation':'automation',
  'Compliance Automation':'ai-llm',
  'Content Automation':   'ai-llm',
  'HR Automation':        'ai-llm',
  'No-Code Product':      'no-code',
  'Data Engineering':     'data',
};

const filterCount = (value: FilterValue) =>
  value === 'all'
    ? CASE_STUDIES.length
    : CASE_STUDIES.filter(s => CATEGORY_FILTER[s.category] === value).length;

const CaseStudyList: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const filtered =
    activeFilter === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter(s => CATEGORY_FILTER[s.category] === activeFilter);

  return (
    <div className="pt-32 sm:pt-48 pb-32 bg-brand-deep min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <div className="mb-16 animate-reveal">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <p className="section-label mb-3">Operational Impact</p>
              <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-brand-cream tracking-tight leading-none">
                The <span className="text-gradient">Portfolio.</span>
              </h1>
            </div>
            <p className="section-label hidden sm:block text-right" style={{ lineHeight: '2' }}>
              {CASE_STUDIES.length} projects · automation · AI · no-code · data
            </p>
          </div>
          <p className="text-brand-muted text-base sm:text-lg font-medium max-w-xl leading-relaxed">
            Automation systems, AI pipelines, and no-code products built for measurable operational impact.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
          {FILTERS.map(f => {
            const count = filterCount(f.value);
            const isActive = activeFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg border font-display font-bold text-xs uppercase tracking-widest transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-orange border-brand-orange text-black shadow-[0_0_16px_rgba(255,107,43,0.28)]'
                    : 'bg-transparent border-white/[0.07] text-brand-muted hover:border-white/20 hover:text-brand-cream'
                }`}
              >
                {f.label}
                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${isActive ? 'bg-black/20 text-black' : 'bg-white/[0.06] text-brand-muted'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <p className="section-label mb-12">
          {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
          {activeFilter !== 'all' ? ` · ${FILTERS.find(f => f.value === activeFilter)?.label}` : ''}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filtered.map((study, idx) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.id}`}
              className="group relative flex flex-col bg-brand-surface border border-white/[0.06] rounded-2xl overflow-hidden hover:border-brand-orange/30 transition-all duration-500 hover:scale-[1.01] active:scale-[0.99]"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              {/* Project panel */}
              <div className="relative h-52 sm:h-64 overflow-hidden bg-brand-deep border-b border-white/[0.06]">
                <div className="absolute inset-0 grid-pattern opacity-40"></div>
                <div className="absolute top-0 left-0 right-0 h-px accent-gradient opacity-60"></div>
                {/* Faded index watermark */}
                <div className="absolute -right-2 -bottom-4 font-display font-black leading-none text-white/[0.04] select-none pointer-events-none" style={{ fontSize: 'clamp(80px, 14vw, 128px)' }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                {/* Ambient glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/[0.06] rounded-full blur-[60px] group-hover:bg-brand-orange/[0.12] transition-all duration-700 pointer-events-none"></div>
                <div className="absolute bottom-5 left-6 right-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] border border-white/[0.08] rounded-lg section-label text-brand-muted mb-2.5">
                    {study.category}
                  </span>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-brand-cream leading-tight tracking-tight group-hover:text-gradient transition-all duration-500">
                    {study.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex flex-col gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="section-label mb-1.5" style={{ color: 'var(--brand-orange)' }}>Key Outcome</p>
                    <p className="font-display font-black text-base text-brand-cream leading-snug">
                      {study.impact.split('.')[0]}.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center text-brand-muted group-hover:text-brand-orange group-hover:border-brand-orange/25 transition-all duration-300">
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed line-clamp-2">{study.problem}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {study.tools.slice(0, 4).map(tool => (
                    <span key={tool} className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.05] rounded-lg section-label group-hover:text-brand-cream group-hover:border-white/10 transition-colors" style={{ fontSize: '8px' }}>
                      {tool}
                    </span>
                  ))}
                  {study.tools.length > 4 && (
                    <span className="px-2.5 py-1 section-label" style={{ fontSize: '8px' }}>+{study.tools.length - 4}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-32">
            <p className="section-label">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const study = CASE_STUDIES.find(s => s.id === id);
  const currentIndex = CASE_STUDIES.findIndex(s => s.id === id);
  const nextStudy = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  if (!study) return null;

  return (
    <div className="pt-32 sm:pt-48 pb-32 bg-brand-deep min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        <Link to="/case-studies" className="inline-flex items-center gap-3 text-brand-muted hover:text-brand-cream transition-all mb-16 group active:scale-95">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="section-label" style={{ color: 'inherit' }}>Back to Index</span>
        </Link>

        <header className="mb-24 animate-reveal">
          <div className="flex items-center gap-4 mb-8">
            <span className="section-label" style={{ color: 'var(--brand-orange)' }}>{study.category}</span>
            <div className="w-8 h-px bg-white/10"></div>
            <span className="section-label">SYS_{study.id.toUpperCase()}</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-brand-cream leading-tight tracking-tight mb-14">
            {study.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-8 bg-brand-orange/5 border border-brand-orange/15 rounded-2xl">
              <p className="section-label mb-4" style={{ color: 'var(--brand-orange)' }}>Core Result</p>
              <p className="font-display font-black text-2xl text-brand-cream leading-tight">{study.impact}</p>
            </div>
            <div className="md:col-span-2 p-8 bg-brand-surface border border-white/[0.06] rounded-2xl">
              <p className="section-label mb-5">Automation Stack</p>
              <div className="flex flex-wrap gap-2">
                {study.tools.map(tool => (
                  <span key={tool} className="px-4 py-2 bg-white/[0.04] border border-white/[0.06] rounded-lg section-label hover:border-brand-orange/25 transition-all cursor-default" style={{ letterSpacing: '0.15em' }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-28">

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
            <div className="lg:col-span-4 lg:sticky lg:top-48 self-start">
              <p className="section-label mb-3">Phase 01</p>
              <h2 className="font-display font-black text-3xl text-brand-cream tracking-tight italic">The Friction Point.</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-brand-muted text-xl sm:text-2xl font-medium leading-relaxed mb-10">{study.problem}</p>
              <div className="h-px bg-gradient-to-r from-white/[0.08] to-transparent"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
            <div className="lg:col-span-4 lg:sticky lg:top-48 self-start">
              <p className="section-label mb-3">Phase 02</p>
              <h2 className="font-display font-black text-3xl text-brand-cream tracking-tight italic">System Architecture.</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-brand-muted text-lg font-medium leading-relaxed mb-10">{study.solution}</p>
              {study.architecture && (
                <div className="bg-brand-surface border border-white/[0.06] rounded-2xl p-8 sm:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/8 rounded-full blur-[60px]"></div>
                  <p className="section-label mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Logical Flow
                  </p>
                  <div className="font-mono text-brand-orange text-sm leading-loose p-5 bg-black/50 rounded-xl border border-white/[0.05] overflow-x-auto">
                    {study.architecture}
                  </div>
                </div>
              )}
            </div>
          </div>

          {study.workflowGallery && (
            <div className="animate-reveal">
              <div className="mb-10">
                <p className="section-label mb-3">System Visuals</p>
                <h2 className="font-display font-black text-3xl text-brand-cream tracking-tight italic">Architecture & Data Flow.</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {study.workflowGallery.map((img, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-brand-surface hover:border-brand-orange/25 transition-all duration-500">
                    <div className="aspect-video overflow-hidden">
                      <img src={img.url} alt={img.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { e.currentTarget.src = `https://placehold.co/1200x800/141210/EDE8E0?text=${encodeURIComponent(img.caption)}`; }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-5 left-6 right-6">
                      <p className="font-display font-bold text-brand-cream text-base">{img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {study.process && (
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 animate-reveal">
              <div className="lg:col-span-4 lg:sticky lg:top-48 self-start">
                <p className="section-label mb-3">Phase 03</p>
                <h2 className="font-display font-black text-3xl text-brand-cream tracking-tight italic">Execution Protocol.</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-white/[0.06]">
                  {study.process.map((step, idx) => (
                    <div key={idx} className="relative pl-10 group">
                      <div className="absolute left-0 top-1 w-6 h-6 bg-brand-deep border border-white/10 rounded-lg flex items-center justify-center section-label group-hover:border-brand-orange/40 group-hover:text-brand-orange transition-colors z-10">
                        {idx + 1}
                      </div>
                      <h4 className="font-display font-black text-lg text-brand-cream mb-1.5 group-hover:text-brand-orange transition-colors">{step.step}</h4>
                      <p className="text-brand-muted text-sm leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {study.keyFeatures && (
            <div className="animate-reveal">
              <div className="mb-10">
                <p className="section-label mb-3">Engineering Details</p>
                <h2 className="font-display font-black text-3xl text-brand-cream tracking-tight italic">Key Features.</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {study.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 bg-brand-surface border border-white/[0.06] rounded-xl hover:border-brand-orange/20 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
                      <span className="section-label" style={{ color: 'var(--brand-orange)', fontSize: '8px' }}>{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-brand-muted text-sm font-medium leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {study.results && (
            <section className="animate-reveal">
              <div className="text-center mb-16">
                <p className="section-label mb-4">Validation</p>
                <h3 className="font-display font-black text-4xl sm:text-5xl text-brand-cream tracking-tight italic">Measured Output.</h3>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
                {study.results.map((res, i) => (
                  <div key={i} className="group p-8 bg-brand-surface border border-white/[0.06] rounded-2xl text-center hover:border-brand-orange/25 transition-all duration-500">
                    <p className="section-label mb-4">{res.label}</p>
                    <p className="font-display font-black text-3xl sm:text-4xl text-brand-cream mb-3 group-hover:text-gradient transition-all">{res.value}</p>
                    <span className="px-3 py-1.5 bg-brand-orange/10 rounded-lg section-label" style={{ color: 'var(--brand-orange)' }}>{res.improvement}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {study.testimonial && (
            <section className="animate-reveal">
              <div className="p-10 sm:p-14 bg-brand-surface border border-white/[0.06] rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/5 rounded-full blur-[60px]"></div>
                <svg className="w-10 h-10 mb-7" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'rgba(255,107,43,0.2)' }}>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="font-display font-medium text-xl sm:text-2xl text-brand-cream/80 leading-relaxed italic mb-8 max-w-2xl">"{study.testimonial.text}"</p>
                <div>
                  <p className="font-display font-black text-brand-cream">{study.testimonial.author}</p>
                  <p className="section-label mt-1">{study.testimonial.role}</p>
                </div>
              </div>
            </section>
          )}

          <section className="flex flex-col sm:flex-row gap-5">
            {study.demoUrl && (
              <a href={study.demoUrl} target="_blank" rel="noopener noreferrer"
                className="flex-1 p-7 accent-gradient text-white rounded-2xl font-display font-black text-base uppercase tracking-wider shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                Launch System
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            )}
            {study.repoUrl && (
              <a href={study.repoUrl} target="_blank" rel="noopener noreferrer"
                className="flex-1 p-7 bg-brand-surface border border-white/10 text-brand-cream rounded-2xl font-display font-black text-base uppercase tracking-wider hover:border-white/20 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                Review Source
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            )}
          </section>

          <Link to={`/case-studies/${nextStudy.id}`}
            className="block group p-10 sm:p-14 bg-brand-surface border border-white/[0.06] rounded-2xl hover:border-brand-orange/30 transition-all text-center active:scale-[0.99]"
          >
            <p className="section-label mb-5">Continue the Sequence</p>
            <h4 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-brand-cream group-hover:text-gradient transition-all tracking-tight leading-tight">
              {nextStudy.title}
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CaseStudies: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return id ? <CaseStudyDetail /> : <CaseStudyList />;
};

export default CaseStudies;
