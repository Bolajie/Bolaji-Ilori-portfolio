import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MetricsMonitor, SignalWaveform, SystemTerminal } from '../components/DashboardWidgets';
import TechStackStrip from '../components/TechStackStrip';
import { CORE_TOOLKIT } from '../constants';

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
    tools: 'n8n + Gemini 2.5 Pro + Claude AI',
    title: 'Sales Call CRM Automation Pipeline',
    problem: 'Sales reps spending hours logging post-call data manually, creating CRM lag and inaccuracy.',
    solve: 'Built an end-to-end pipeline that eliminated 100% of manual post-call CRM entry.',
    breakdown: 'An n8n workflow triggers on call completion, feeds the recording through Gemini 2.5 Pro for transcription analysis, then routes structured data via Claude AI to both Airtable (CRM) and Google Sheets (reporting) — zero manual input required from rep to record.'
  },
  {
    id: 2,
    tools: 'n8n + Zep Knowledge Graph + OpenAI',
    title: 'FTC Compliance Auditing System',
    problem: 'Manual compliance reviews against FTC guidelines taking days per audit cycle.',
    solve: 'Deployed an AI auditing system that reduced compliance review time from days to seconds.',
    breakdown: 'n8n receives content submissions and routes them to OpenAI, which cross-references against FTC guidelines stored in a Zep Knowledge Graph. The Knowledge Graph enables consistent, context-aware regulatory reasoning. Structured audit results are delivered instantly to Slack via Block Kit.'
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

const CountUpAnimation: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1500; // ms

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(progress * target);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [target]);

  return <span>{count.toFixed(1)}</span>;
};

const IntegrityCheckWidget: React.FC = () => {
  const [isValidated, setIsValidated] = useState(false);

  return (
    <section className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className={`relative overflow-hidden rounded-[3rem] border transition-all duration-700 ${isValidated ? 'bg-slate-900/60 border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.1)]' : 'bg-slate-900/40 border-white/5'}`}>
          
          {/* Background Ambient Glow / Static Noise */}
          <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${isValidated ? 'opacity-0' : 'opacity-100'}`}>
             <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay"></div>
             {/* Static Noise Pattern */}
             <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")` }}></div>
          </div>
          
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl rounded-full blur-[100px] transition-colors duration-700 opacity-20 pointer-events-none ${isValidated ? 'bg-emerald-500' : 'bg-red-500/40'}`}></div>

          <div className="p-8 md:p-16 relative z-10 flex flex-col items-center text-center">
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
              Interactive <span className={isValidated ? 'text-emerald-500' : 'text-slate-500'}>Integrity Check</span>.
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mb-12">
              <span className="text-white">"Automation without Data Integrity is just making mistakes faster."</span> <br/>
              I build the filters, validators, and logic to ensure your business scales on a foundation of clean data.
            </p>

            {/* Toggle Switch */}
            <button 
              onClick={() => setIsValidated(!isValidated)}
              className="group flex items-center space-x-6 mb-16 focus:outline-none"
            >
              <span className={`text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${!isValidated ? 'text-white' : 'text-slate-600 group-hover:text-slate-400'}`}>Raw Stream</span>
              
              <div className={`w-20 h-10 rounded-full border transition-all duration-300 relative p-1 ${isValidated ? 'bg-emerald-900/20 border-emerald-500' : 'bg-red-900/20 border-red-500'}`}>
                <div className={`w-7 h-7 rounded-full shadow-lg transform transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isValidated ? 'translate-x-10 bg-emerald-500' : 'translate-x-0 bg-red-500'}`}></div>
              </div>
              
              <span className={`text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${isValidated ? 'text-white' : 'text-slate-600 group-hover:text-slate-400'}`}>With Validation</span>
            </button>

            {/* Dashboard Visualizer */}
            <div className="w-full max-w-3xl bg-black/40 rounded-3xl border border-white/10 h-64 md:h-80 relative overflow-hidden shadow-2xl">
              
              {/* Header Bar */}
              <div className="absolute top-0 inset-x-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 space-x-2">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                </div>
                <div className="flex-grow text-center">
                  <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Process_Monitor_v2.0</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="absolute top-10 inset-0 p-6 flex items-center justify-center">
                {isValidated ? (
                  <div className="flex flex-col items-center animate-reveal">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-30 animate-pulse"></div>
                      <div className="relative w-20 h-20 bg-emerald-500/10 rounded-2xl border border-emerald-500/50 flex items-center justify-center text-emerald-500">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      </div>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                       <span className="text-3xl font-black text-white tracking-tight drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">0 Errors Found</span>
                       <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                         <CountUpAnimation target={99.9} />% Accuracy
                       </span>
                    </div>
                    
                    {/* Simulated Clean Data Lines */}
                    <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
                       {[...Array(5)].map((_, i) => (
                         <div key={i} className="absolute h-px bg-emerald-500 w-full" style={{ top: `${20 + i * 20}%`, left: 0, animation: `data-stream ${2 + i}s linear infinite` }}></div>
                       ))}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full relative">
                    {/* Chaotic Data Stream */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full overflow-hidden opacity-60">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="bg-red-500/5 border border-red-500/10 p-3 rounded-lg flex flex-col justify-center items-start animate-pulse" style={{ animationDelay: `${Math.random()}s` }}>
                           <div className="w-8 h-8 mb-2 text-red-500/50">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                           </div>
                           <div className="w-full h-1.5 bg-red-500/20 rounded mb-1"></div>
                           <div className="w-2/3 h-1.5 bg-red-500/20 rounded"></div>
                           <span className="text-[8px] font-mono text-red-500 mt-2">ERR_NULL_POINTER</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Overlay Warning */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                       <div className="bg-red-500/10 border border-red-500 text-red-500 px-6 py-3 rounded-xl flex items-center space-x-3 animate-bounce">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                          <span className="text-xs font-black uppercase tracking-widest">Integrity Compromised</span>
                       </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IntegrationEcosystem: React.FC = () => {
  const services = [
    {
      name: 'n8n',
      iconUrl: 'https://cdn.simpleicons.org/n8n/FF656D',
      tooltip: 'Core Automation Orchestrator',
      pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
      line: { x1: '50%', y1: '50%', x2: '50%', y2: '15%' }
    },
    {
      name: 'Airtable',
      iconUrl: 'https://cdn.simpleicons.org/airtable/18BFFF',
      tooltip: 'CRM & No-Code Database',
      pos: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
      line: { x1: '50%', y1: '50%', x2: '85%', y2: '50%' }
    },
    {
      name: 'Gemini',
      iconUrl: 'https://cdn.simpleicons.org/googlegemini/8E75B2',
      tooltip: 'AI Reasoning & LLM Layer',
      pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
      line: { x1: '50%', y1: '50%', x2: '50%', y2: '85%' }
    },
    {
      name: 'Slack',
      iconUrl: 'https://cdn.simpleicons.org/slack/4A154B',
      tooltip: 'Real-time Alerts & Block Kit Reports',
      pos: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
      line: { x1: '50%', y1: '50%', x2: '15%', y2: '50%' }
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-16 tracking-tight">Integration <span className="text-gradient">Ecosystem</span>.</h2>
        
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto">
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
             <defs>
               <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
                 <stop offset="100%" stopColor="#f97316" stopOpacity="1" />
               </linearGradient>
             </defs>
             {services.map((s, i) => (
                <line 
                  key={i}
                  x1={s.line.x1} y1={s.line.y1} x2={s.line.x2} y2={s.line.y2} 
                  stroke="url(#lineGrad)" 
                  strokeWidth="2" 
                  strokeDasharray="4 4"
                  className="animate-[dash_1s_linear_infinite]"
                  style={{ animationDuration: `${2 + i * 0.5}s` }}
                />
             ))}
          </svg>

          {/* Center Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand-surface border-4 border-white/10 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.3)] z-10">
             <div className="w-10 h-10 bg-brand-surface border border-white/10 rounded-xl flex items-center justify-center text-white font-black">
                B<span className="text-brand-orange">I</span>
             </div>
             <div className="absolute -inset-2 border border-brand-orange/30 rounded-full animate-ping opacity-20"></div>
          </div>

          {/* Satellites */}
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`absolute ${service.pos} w-16 h-16 bg-brand-deep border border-white/10 rounded-2xl flex items-center justify-center hover:scale-110 hover:border-brand-orange transition-all duration-300 group z-20 cursor-pointer shadow-xl`}
            >
              <img src={service.iconUrl} alt={service.name} className="w-8 h-8 object-contain filter grayscale group-hover:grayscale-0 transition-all" />
              
              {/* Tooltip */}
              <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-48 bg-black/80 border border-white/10 backdrop-blur-md px-3 py-2 rounded-xl text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none transform translate-y-2 group-hover:translate-y-0 duration-300">
                <p className="text-[10px] font-black text-white uppercase tracking-widest">{service.name}</p>
                <p className="text-slate-400 text-[9px] font-medium mt-1">{service.tooltip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);

  return (
    <div className="bg-brand-deep min-h-screen">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden pt-20 pb-20">
        <div className="absolute inset-0 radial-glow z-0"></div>
        <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto animate-reveal">
          
          {/* Avatar Section */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-10 group">
            <div className="absolute -inset-1.5 accent-gradient rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative w-full h-full rounded-full border-4 border-brand-orange overflow-hidden bg-brand-surface shadow-2xl">
              <img 
                src="https://picsum.photos/400/400?grayscale" 
                alt="Bolaji Ilori" 
                className="w-full h-full object-cover grayscale brightness-110"
              />
            </div>
            {/* Lightning Badge */}
            <div className="absolute bottom-2 right-2 w-8 h-8 sm:w-10 sm:h-10 bg-brand-orange rounded-full flex items-center justify-center text-black border-4 border-brand-deep shadow-xl animate-float">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9v8l10-12h-9z"/>
              </svg>
            </div>
          </div>

          {/* Availability Status */}
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse"></span>
            <span className="text-emerald-400 text-[11px] font-black uppercase tracking-[0.3em]">Available · Remote · $25–40/hr</span>
          </div>

          {/* Role Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/5 px-5 py-2 rounded-full border border-white/10 mb-8 backdrop-blur-md">
            <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-slate-300">No-Code & Automation Engineer</span>
          </div>

          {/* Main Title - Updated */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-[900] text-white hero-title mb-8 tracking-tight leading-[1.1]">
            I Build High-Velocity Workflows with <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-rose">Absolute Data Integrity.</span>
          </h1>

          {/* Intro Text */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <p className="text-xl md:text-2xl font-bold text-white">Hi, I'm <span className="text-white underline decoration-brand-orange/40 decoration-4">Bolaji Ilori</span>.</p>
          </div>

          {/* Sub-headline */}
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            I build <span className="text-slate-200 font-bold">automation systems</span>, <span className="text-slate-200 font-bold">no-code products</span>, and <span className="text-slate-200 font-bold">AI workflows</span> that eliminate manual work and let operations scale without breaking.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-brand-orange text-black rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9v8l10-12h-9z"/>
              </svg>
              <span>Hire Me</span>
            </Link>
            <Link
              to="/case-studies"
              className="w-full sm:w-auto px-10 py-5 bg-[rgba(255,255,255,0.1)] border border-[#333] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-3 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>View Work</span>
            </Link>
          </div>

          {/* Stats Strip */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent top-0"></div>
            <div className="pt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-14">
              {[
                { value: '14+', label: 'Systems Deployed' },
                { value: '100%', label: 'CRM Entry Eliminated' },
                { value: 'Days → Secs', label: 'Compliance Review' },
                { value: '88%', label: 'Research Time Reduced' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">{stat.value}</span>
                  <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Engine Room - Tech Stack Marquee (Updated to use TechStackStrip Component) */}
      <TechStackStrip />

      {/* Featured Work Section - MOVED TO TOP */}
      <section className="py-24 px-4 sm:px-6 bg-slate-900/30 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.6em] mb-4">Selected Projects</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">Featured Work.</h3>
            <p className="text-slate-500 text-sm font-medium mt-4">From the <Link to="/case-studies" className="text-orange-500 hover:text-white transition-colors underline underline-offset-2">full portfolio of 14 systems →</Link></p>
          </div>

          {/* Grid Layout Updated for 1024px break */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {FEATURED_PROJECTS.map((project) => (
              <div key={project.id} className="group bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-brand-orange/30 hover:bg-white/10 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/10 transition-colors"></div>
                
                <div className="mb-8">
                  <span className="inline-block px-3 py-1.5 rounded-lg bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[9px] font-black uppercase tracking-widest mb-6">
                    {project.tools}
                  </span>
                  <h4 className="text-2xl font-black text-white mb-2 leading-tight">{project.title}</h4>
                </div>

                <div className="flex-grow space-y-6 mb-8">
                  <div>
                    <p className="text-[9px] font-black text-rose-500 uppercase tracking-widest mb-1">The Problem</p>
                    <p className="text-slate-400 text-base font-medium leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-1">The Solve</p>
                    <p className="text-slate-200 text-base font-bold leading-relaxed">{project.solve}</p>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-4 rounded-xl border border-white/10 bg-black/20 text-slate-300 text-[10px] font-black uppercase tracking-widest hover:text-white hover:border-brand-orange hover:bg-black/40 transition-all flex items-center justify-center space-x-2 group/btn"
                >
                  <span>View Technical Breakdown</span>
                  <svg className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/case-studies"
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-colors active:scale-95"
            >
              <span>Explore All Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Tactical Dashboard - Technical Proof Section */}
      <section className="py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tighter">
                Technical <br/> <span className="text-gradient">Underpinning.</span>
              </h2>
              <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Behind every system I scale is a high-velocity technical framework designed for zero-latency operations and predictive scalability.
              </p>
            </div>

            <div className="flex-1 w-full max-w-2xl relative animate-reveal">
              <div className="glass-card rounded-[3rem] p-8 lg:p-12 overflow-hidden border-white/10 shadow-2xl">
                 <div className="flex justify-between items-center mb-10">
                    <div className="flex space-x-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                       <span className="text-[9px] font-mono text-emerald-500 tracking-[0.3em]">ENGINE_ACTIVE</span>
                       <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>
                 </div>

                 {/* Widgets */}
                 <MetricsMonitor />
                 <SignalWaveform />
                 <SystemTerminal />
              </div>
              
              {/* Background Glows for dashboard */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-[100px] -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-rose/10 rounded-full blur-[100px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Integrity Check Widget */}
      <IntegrityCheckWidget />

      {/* Integration Ecosystem Section - NEW */}
      <IntegrationEcosystem />

      {/* Atmospheric Footer Space */}
      <div className="h-48"></div>

      {/* Technical Breakdown Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
          <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-2xl rounded-[2.5rem] p-8 md:p-12 relative z-10 shadow-2xl animate-reveal">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            
            <div className="mb-8">
              <span className="text-brand-orange text-[10px] font-black uppercase tracking-widest mb-2 block">System Architecture</span>
              <h3 className="text-3xl md:text-4xl font-black text-white">{selectedProject.title}</h3>
            </div>
            
            <div className="space-y-8 mb-10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="p-6 bg-rose-500/5 border border-rose-500/10 rounded-2xl">
                    <p className="text-[9px] font-black text-rose-500 uppercase tracking-widest mb-2">Constraint</p>
                    <p className="text-slate-300 text-sm font-medium">{selectedProject.problem}</p>
                 </div>
                 <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                    <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-2">Solution</p>
                    <p className="text-slate-300 text-sm font-medium">{selectedProject.solve}</p>
                 </div>
               </div>

               <div>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Technical Execution</p>
                 <p className="text-slate-300 leading-relaxed font-mono text-sm bg-black/40 p-6 rounded-2xl border border-white/5">
                   {selectedProject.breakdown}
                 </p>
               </div>
            </div>

            <div className="flex justify-end">
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-6 py-3 bg-white text-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-colors"
              >
                Close Terminal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;