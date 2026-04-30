import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Automation', value: 'automation' },
  { label: 'AI & LLM', value: 'ai-llm' },
  { label: 'No-Code', value: 'no-code' },
  { label: 'Data', value: 'data' },
] as const;

type FilterValue = (typeof FILTERS)[number]['value'];

const CATEGORY_FILTER: Record<string, FilterValue> = {
  'Automation & AI': 'automation',
  'Finance Automation': 'automation',
  'GTM Engineering': 'automation',
  'Compliance Automation': 'ai-llm',
  'Media Automation': 'automation',
  'Content Automation': 'ai-llm',
  'Data Extraction': 'automation',
  'HR Automation': 'ai-llm',
  'Operations Automation': 'automation',
  'No-Code Product': 'no-code',
  'Data Engineering': 'data',
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
    <div className="pt-32 sm:pt-48 pb-32 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16 text-center animate-reveal">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316] animate-pulse"></span>
            <span className="text-orange-500 text-[9px] font-black uppercase tracking-[0.3em]">Operational Impact</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white mb-6 tracking-tighter leading-none">
            The <span className="text-gradient">Portfolio</span>.
          </h1>
          <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Automation systems, AI pipelines, and no-code products built for measurable operational impact.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          {FILTERS.map(f => {
            const count = filterCount(f.value);
            const isActive = activeFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`group flex items-center gap-2 px-5 py-2.5 rounded-full border text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? 'bg-orange-500 border-orange-500 text-black shadow-[0_0_20px_rgba(249,115,22,0.35)]'
                    : 'bg-white/[0.03] border-white/10 text-slate-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {f.label}
                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full transition-colors ${
                  isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-slate-500 group-hover:bg-white/20 group-hover:text-white'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project count */}
        <p className="text-center text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] mb-16">
          {filtered.length} {filtered.length === 1 ? 'project' : 'projects'} {activeFilter !== 'all' ? `· ${FILTERS.find(f => f.value === activeFilter)?.label}` : ''}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filtered.map((study, idx) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.id}`}
              className="group relative flex flex-col bg-slate-900/40 border border-white/5 rounded-[3rem] sm:rounded-[3.5rem] overflow-hidden hover:border-orange-500/40 transition-all duration-500 hover:scale-[1.01] active:scale-[0.99]"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-[260px] sm:h-[380px] overflow-hidden">
                <img
                  src={`https://picsum.photos/1200/800?random=${study.id}`}
                  alt={study.title}
                  className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-75 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                {/* Category + Title overlay */}
                <div className="absolute bottom-6 left-7 right-7 sm:bottom-8 sm:left-9 sm:right-9">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-black text-white uppercase tracking-widest mb-3">
                    {study.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight group-hover:text-gradient transition-all duration-500">
                    {study.title}
                  </h3>
                </div>

                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </div>

              {/* Card body */}
              <div className="p-7 sm:p-10 flex flex-col gap-6">

                {/* Impact metric */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-black text-orange-500 uppercase tracking-widest mb-1.5">Key Outcome</p>
                    <p className="text-white text-lg sm:text-xl font-black leading-snug">
                      {study.impact.split('.')[0]}.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-2xl border border-white/5 bg-white/[0.03] flex items-center justify-center text-slate-600 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-all duration-300">
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>

                {/* Problem — 2-line clamp */}
                <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-2">{study.problem}</p>

                {/* Tool tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {study.tools.slice(0, 4).map(tool => (
                    <span key={tool} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-slate-300 group-hover:border-white/10 transition-colors">
                      {tool}
                    </span>
                  ))}
                  {study.tools.length > 4 && (
                    <span className="px-3 py-1.5 text-slate-600 text-[10px] font-black uppercase tracking-widest">
                      +{study.tools.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-32">
            <p className="text-slate-600 font-mono text-sm uppercase tracking-widest">No projects in this category yet.</p>
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
    <div className="pt-32 sm:pt-48 pb-32 bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Link to="/case-studies" className="inline-flex items-center text-slate-500 hover:text-white transition-all mb-16 text-[10px] font-black uppercase tracking-[0.4em] group active:scale-95">
          <svg className="w-5 h-5 mr-4 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Index
        </Link>

        <header className="mb-32 animate-reveal">
          <div className="flex items-center space-x-4 mb-10">
            <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.5em]">{study.category}</span>
            <div className="w-12 h-px bg-white/10"></div>
            <span className="text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">SYSTEM_ID: {study.id.toUpperCase()}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-[9rem] font-black text-white leading-[0.85] tracking-tighter mb-16">
            {study.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white/[0.03] border border-white/5 rounded-[3rem] backdrop-blur-xl">
              <p className="text-[9px] font-black text-orange-500 uppercase tracking-widest mb-4">Core Result</p>
              <p className="text-3xl font-black text-white leading-tight">{study.impact}</p>
            </div>
            <div className="md:col-span-2 p-10 bg-slate-900/60 border border-white/5 rounded-[3rem]">
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-6">Automation Stack</p>
              <div className="flex flex-wrap gap-2">
                {study.tools.map(tool => (
                  <span key={tool} className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-2xl text-[11px] font-black text-slate-300 uppercase tracking-widest hover:border-orange-500/30 transition-all cursor-default">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-48">
          {/* Phase 01 */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4 sticky top-48 self-start">
              <h2 className="text-xs font-black text-slate-600 uppercase tracking-[0.6em] mb-4">Phase 01</h2>
              <p className="text-white text-3xl font-black italic tracking-tight">The Friction Point.</p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-2xl sm:text-3xl text-slate-400 font-medium leading-relaxed mb-12">{study.problem}</p>
              <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
          </div>

          {/* Phase 02 */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4 sticky top-48 self-start">
              <h2 className="text-xs font-black text-slate-600 uppercase tracking-[0.6em] mb-4">Phase 02</h2>
              <p className="text-white text-3xl font-black italic tracking-tight">System Architecture.</p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-16">{study.solution}</p>
              {study.architecture && (
                <div className="bg-slate-900 border border-white/5 rounded-[4rem] p-8 sm:p-12 lg:p-20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px]"></div>
                  <div className="relative z-10">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-8 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mr-3 animate-pulse"></span>
                      Logical Flow Definition
                    </p>
                    <div className="font-mono text-orange-500 text-sm sm:text-base leading-loose p-6 sm:p-10 bg-black/60 rounded-3xl border border-white/5 shadow-2xl overflow-x-auto">
                      {study.architecture}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Workflow Gallery */}
          {study.workflowGallery && (
            <div className="animate-reveal">
              <div className="mb-12">
                <h2 className="text-xs font-black text-slate-600 uppercase tracking-[0.6em] mb-4">System Visuals</h2>
                <p className="text-white text-3xl font-black italic tracking-tight">Architecture & Data Flow.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {study.workflowGallery.map((img, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-slate-900/50 hover:border-orange-500/30 transition-all duration-500">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/1200x800/1a1a1a/FFF?text=${encodeURIComponent(img.caption)}`;
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-6 left-8 right-8">
                      <p className="text-white font-black text-lg">{img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Phase 03 — Process */}
          {study.process && (
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 animate-reveal">
              <div className="lg:col-span-4 sticky top-48 self-start">
                <h2 className="text-xs font-black text-slate-600 uppercase tracking-[0.6em] mb-4">Phase 03</h2>
                <p className="text-white text-3xl font-black italic tracking-tight">Execution Protocol.</p>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-12 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                  {study.process.map((step, idx) => (
                    <div key={idx} className="relative pl-12 group">
                      <div className="absolute left-0 top-1 w-6 h-6 bg-slate-950 border border-white/20 rounded-full flex items-center justify-center text-[9px] font-black text-slate-500 group-hover:border-orange-500 group-hover:text-orange-500 transition-colors z-10">
                        {idx + 1}
                      </div>
                      <h4 className="text-xl font-black text-white mb-2 group-hover:text-orange-500 transition-colors">{step.step}</h4>
                      <p className="text-slate-400 font-medium leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Key Features */}
          {study.keyFeatures && (
            <div className="animate-reveal">
              <div className="mb-12">
                <h2 className="text-xs font-black text-slate-600 uppercase tracking-[0.6em] mb-4">Engineering Details</h2>
                <p className="text-white text-3xl font-black italic tracking-tight">Key Features.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {study.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-orange-500/20 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                      <span className="text-orange-500 text-[9px] font-black">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-slate-300 text-sm font-medium leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {study.results && (
            <section className="animate-reveal">
              <div className="text-center mb-24">
                <h2 className="text-xs font-black text-slate-600 uppercase tracking-[0.6em] mb-6">Validation</h2>
                <h3 className="text-6xl font-black text-white tracking-tighter italic">Measured Output.</h3>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                {study.results.map((res, i) => (
                  <div key={i} className="group p-10 bg-slate-900/40 border border-white/5 rounded-[3.5rem] text-center hover:bg-slate-900 hover:border-orange-500/30 transition-all duration-500">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-4">{res.label}</p>
                    <p className="text-4xl sm:text-5xl font-black text-white mb-4 group-hover:text-gradient transition-all">{res.value}</p>
                    <span className="px-4 py-1.5 bg-orange-500/10 rounded-full text-[10px] font-black text-orange-500 uppercase tracking-widest">
                      {res.improvement}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Testimonial */}
          {study.testimonial && (
            <section className="animate-reveal">
              <div className="p-12 sm:p-16 bg-white/[0.02] border border-white/5 rounded-[4rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px]"></div>
                <svg className="w-12 h-12 text-orange-500/30 mb-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-2xl sm:text-3xl text-slate-300 font-medium leading-relaxed mb-10 max-w-3xl italic">
                  "{study.testimonial.text}"
                </p>
                <div>
                  <p className="text-white font-black">{study.testimonial.author}</p>
                  <p className="text-slate-500 text-sm font-medium">{study.testimonial.role}</p>
                </div>
              </div>
            </section>
          )}

          {/* CTAs */}
          <section className="pt-24 flex flex-col md:flex-row gap-8">
            {study.demoUrl && (
              <a href={study.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 p-8 sm:p-10 accent-gradient text-white rounded-[3rem] font-black text-xl uppercase tracking-[0.2em] shadow-2xl hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center text-center">
                Launch System
                <svg className="w-6 h-6 ml-4 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            )}
            {study.repoUrl && (
              <a href={study.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 p-8 sm:p-10 bg-slate-900 border border-white/10 text-white rounded-[3rem] font-black text-xl uppercase tracking-[0.2em] hover:bg-white/5 active:scale-95 transition-all flex items-center justify-center text-center">
                Review Source
                <svg className="w-6 h-6 ml-4 hidden sm:block" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            )}
          </section>

          {/* Next project */}
          <Link to={`/case-studies/${nextStudy.id}`} className="block group p-12 sm:p-16 bg-white/[0.02] border border-white/5 rounded-[4rem] hover:border-orange-500/40 transition-all text-center active:scale-[0.98]">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em] mb-6">Continue the Sequence</p>
            <h4 className="text-4xl md:text-7xl font-black text-white group-hover:text-gradient transition-all tracking-tighter leading-none">
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
