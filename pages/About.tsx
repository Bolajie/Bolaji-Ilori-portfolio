import React, { useState, useEffect } from 'react';
import { SKILL_GROUPS, TIMELINE, EDUCATION } from '../constants';
import { GithubProject } from '../types';
import Toast, { ToastProps } from '../components/Toast';

const About: React.FC = () => {
  const [dynamicRepos, setDynamicRepos] = useState<GithubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<Pick<ToastProps, 'message' | 'type'> | null>(null);

  const fetchGithubRepos = async () => {
    setLoading(true);
    setToast(null);
    try {
      const response = await fetch('https://api.github.com/users/Bolajie/repos?sort=stargazers&per_page=6');
      if (response.ok) {
        const data = await response.json();
        setDynamicRepos(data.map((repo: any) => ({
          name: repo.name,
          description: repo.description || 'System architecture and automation workflow.',
          url: repo.html_url,
          tech: [repo.language].filter(Boolean),
          stars: repo.stargazers_count,
        })));
      } else {
        throw new Error('Could not synchronize GitHub data.');
      }
    } catch (err) {
      setToast({ message: 'GitHub sync failed — unable to load live repositories.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchGithubRepos(); }, []);

  const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ibolajie/', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { name: 'X',        url: 'https://x.com/ibolajie',                  icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
    { name: 'GitHub',   url: 'https://github.com/Bolajie',              icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 4.365 9.754 10.399 11.334.6.111.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
    { name: 'Email',    url: 'mailto:ibolajie@gmail.com',               icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.58 6.062a2.25 2.25 0 01-2.316 0L2.25 6.75' },
  ];

  return (
    <div className="pt-32 sm:pt-48 pb-32 bg-brand-deep min-h-screen">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        {/* ── INTRO ──────────────────────────────────────── */}
        <section className="mb-32 animate-reveal">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">

            {/* Monogram avatar */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-4 accent-gradient rounded-2xl blur-3xl opacity-10"></div>
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-brand-surface border border-white/[0.07] shadow-2xl flex items-center justify-center">
                <div className="absolute inset-0 grid-pattern opacity-30"></div>
                <div className="absolute top-0 left-0 right-0 h-px accent-gradient opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/[0.08] rounded-full blur-[50px] pointer-events-none"></div>
                <span className="relative z-10 font-display font-black text-[88px] md:text-[100px] tracking-tight leading-none select-none">
                  B<span className="text-brand-orange">I</span>
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="section-label mb-4">The Architect</p>
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-brand-cream tracking-tight leading-none mb-7">
                Bolaji Ilori<span className="text-brand-orange">.</span>
              </h1>
              <p className="text-brand-muted text-base sm:text-lg font-medium mb-8 max-w-xl leading-relaxed">
                No-Code & Automation Engineer based in Lagos, Nigeria — building{' '}
                <span className="text-brand-orange font-semibold">AI-powered workflows</span>,{' '}
                <span className="text-brand-rose font-semibold">no-code SaaS products</span>, and{' '}
                <span className="text-brand-cream font-semibold">data pipelines</span> for startups and ops-heavy businesses. Open to remote roles and freelance contracts.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['No-Code Development', 'Automation Engineering', 'AI Workflows', 'Operations Systems'].map(tag => (
                  <span key={tag} className="px-3.5 py-1.5 bg-brand-surface border border-white/[0.06] rounded-lg section-label" style={{ color: 'var(--text-muted)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Socials */}
              <div className="flex items-center gap-2.5">
                {socials.map(s => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-brand-surface border border-white/[0.07] text-brand-muted hover:text-brand-cream hover:border-brand-orange/30 transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label={s.name}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── AVAILABILITY STRIP ─────────────────────────── */}
        <section className="mb-32 py-8 border-y border-white/[0.06]">
          <div className="flex flex-wrap gap-10 sm:gap-16">
            {[
              { label: 'Status',   value: 'Open to Work',          color: 'text-emerald-400', dot: true },
              { label: 'Type',     value: 'Full-time · Freelance',  color: 'text-brand-cream', dot: false },
              { label: 'Location', value: 'Remote · Lagos, Nigeria', color: 'text-brand-cream', dot: false },
              { label: 'Rate',     value: '$25–40/hr',              color: 'text-brand-orange', dot: false },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <span className="section-label">{item.label}</span>
                <div className="flex items-center gap-2">
                  {item.dot && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]"></span>}
                  <span className={`font-display font-bold text-base ${item.color}`}>{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SKILL GROUPS ───────────────────────────────── */}
        <section className="mb-32">
          <div className="mb-12 pb-6 border-b border-white/[0.06]">
            <p className="section-label mb-3">Core Competencies</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-cream tracking-tight">Automation & No-Code Expertise.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SKILL_GROUPS.map((group, idx) => (
              <div key={group.name} className="p-8 sm:p-10 bg-brand-surface border border-white/[0.06] rounded-2xl hover:border-brand-orange/20 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-9 h-9 rounded-lg accent-gradient flex items-center justify-center font-display font-black text-white text-sm shadow-md group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <h3 className="font-display font-black text-xl text-brand-cream tracking-tight">{group.name}</h3>
                </div>
                <div className="grid gap-2">
                  {group.skills.map(skill => (
                    <div key={skill.name} className="flex items-center gap-3 px-4 py-3 bg-white/[0.03] border border-white/[0.04] rounded-xl hover:border-brand-orange/20 hover:bg-white/[0.05] transition-all group/item">
                      <div className="w-6 h-6 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d={skill.icon} />
                        </svg>
                      </div>
                      <span className="section-label group-hover/item:text-brand-cream transition-colors" style={{ letterSpacing: '0.2em' }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TIMELINE ───────────────────────────────────── */}
        <section className="mb-32 pt-12 border-t border-white/[0.06]">
          <div className="mb-12">
            <p className="section-label mb-3">Career Arc</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-cream tracking-tight">The Trajectory.</h2>
          </div>

          <div className="max-w-3xl space-y-5">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="group flex items-start gap-6 p-7 bg-brand-surface border border-white/[0.06] rounded-2xl hover:border-brand-orange/25 transition-all duration-500">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="section-label leading-relaxed" style={{ lineHeight: '1.6' }}>{item.year}</span>
                </div>
                <div className="w-px self-stretch bg-white/[0.06] flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-black text-lg text-brand-cream mb-0.5">{item.role}</h4>
                  <p className="section-label text-brand-orange mb-3" style={{ color: 'var(--brand-orange)' }}>{item.company}</p>
                  <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── GITHUB REPOS ───────────────────────────────── */}
        <section className="mb-32 pt-12 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="section-label mb-3">Open Source</p>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-cream tracking-tight">GitHub Projects.</h2>
            </div>
            {!loading && (
              <button onClick={fetchGithubRepos} className="section-label text-brand-orange hover:text-brand-cream transition-colors flex items-center gap-2 self-start sm:self-auto">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>
            )}
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="p-7 bg-brand-surface border border-white/[0.06] rounded-2xl h-48 flex flex-col gap-3">
                  <div className="w-2/3 h-4 bg-white/[0.05] rounded-lg animate-pulse"></div>
                  <div className="w-full h-3 bg-white/[0.05] rounded-lg animate-pulse"></div>
                  <div className="w-4/5 h-3 bg-white/[0.05] rounded-lg animate-pulse"></div>
                  <div className="flex gap-2 mt-auto">
                    <div className="w-14 h-5 bg-white/[0.05] rounded-lg animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : dynamicRepos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {dynamicRepos.map((repo, idx) => (
                <a key={idx} href={repo.url} target="_blank" rel="noopener noreferrer"
                  className="group p-7 bg-brand-surface border border-white/[0.06] rounded-2xl hover:border-brand-orange/25 transition-all duration-400 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display font-black text-base text-brand-cream group-hover:text-brand-orange transition-colors truncate pr-4">{repo.name}</h3>
                    <span className="section-label text-brand-orange flex-shrink-0">★ {repo.stars || 0}</span>
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed line-clamp-3 flex-grow mb-5">{repo.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {repo.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] rounded-lg section-label group-hover:text-brand-cream transition-colors" style={{ fontSize: '8px' }}>{t}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="p-12 bg-brand-surface border border-white/[0.06] rounded-2xl text-center">
              <p className="section-label mb-6">GitHub sync offline — view directly</p>
              <a href="https://github.com/Bolajie" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-xl font-display font-bold text-xs text-brand-cream uppercase tracking-widest hover:border-brand-orange/30 transition-all"
              >
                Visit GitHub
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25" />
                </svg>
              </a>
            </div>
          )}
        </section>

        {/* ── EDUCATION ──────────────────────────────────── */}
        <section className="pb-16 pt-12 border-t border-white/[0.06]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="section-label mb-4">Educational Foundation</p>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-cream tracking-tight leading-tight mb-6">
                Logical<br/><span className="text-gradient">Bedrock.</span>
              </h2>
              <p className="text-brand-muted text-base leading-relaxed max-w-sm">
                A foundation in Mathematics, combined with advanced Data Science training, equips me to design automation systems grounded in statistical rigor and real-world business constraints.
              </p>
            </div>
            <div className="space-y-5">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-7 bg-brand-surface border border-white/[0.06] rounded-2xl hover:border-brand-rose/20 transition-all group">
                  <p className="section-label text-brand-rose mb-3" style={{ color: 'var(--brand-rose)' }}>{edu.year} · {edu.institution}</p>
                  <h4 className="font-display font-black text-lg text-brand-cream mb-2">{edu.degree}</h4>
                  <p className="text-brand-muted text-sm leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
