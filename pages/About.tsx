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
          stars: repo.stargazers_count
        })));
      } else {
        throw new Error('Could not synchronize GitHub data.');
      }
    } catch (err) {
      console.error('GitHub API Error:', err);
      setToast({ message: 'GitHub Uplink Failed: Unable to load live repositories.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubRepos();
  }, []);

  const socials = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/ibolajie/', 
      icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
      color: 'hover:text-[#0077b5]',
      bg: 'hover:bg-[#0077b5]/10'
    },
    { 
      name: 'X', 
      url: 'https://x.com/ibolajie', 
      icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
      color: 'hover:text-white',
      bg: 'hover:bg-white/10'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/Bolajie', 
      icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 4.365 9.754 10.399 11.334.6.111.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
      color: 'hover:text-orange-500',
      bg: 'hover:bg-orange-500/10'
    },
    { 
      name: 'Email', 
      url: 'mailto:ibolajie@gmail.com', 
      icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.58 6.062a2.25 2.25 0 01-2.316 0L2.25 6.75',
      color: 'hover:text-rose-500',
      bg: 'hover:bg-rose-500/10'
    },
  ];

  return (
    <div className="pt-48 pb-24 bg-slate-950">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Intro */}
        <section className="mb-48 flex flex-col lg:flex-row items-center gap-16 lg:gap-32 animate-reveal">
          <div className="relative flex-shrink-0">
             <div className="absolute -inset-4 accent-gradient rounded-[3rem] blur-3xl opacity-10"></div>
             <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden bg-slate-900 border border-white/10 relative z-10 shadow-2xl">
                <img 
                  src="https://picsum.photos/800/800?grayscale" 
                  alt="Bolaji Ilori" 
                  className="w-full h-full object-cover brightness-110 grayscale"
                />
             </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">The Architect.</h1>
            <p className="text-2xl text-slate-400 font-medium mb-10 max-w-2xl leading-relaxed">
              I streamline business operations by combining <span className="text-orange-500 font-bold">data integrity</span>, <span className="text-rose-500 font-bold">intelligent automation</span>, and systems thinking — building workflows that scale fast without breaking accuracy or trust.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
               {['Data Integrity', 'Automation Systems', 'Operational Analytics', 'GTM Engineering'].map(tag => (
                 <span key={tag} className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500">{tag}</span>
               ))}
            </div>

            {/* Social Connect Uplink */}
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white/[0.03] border border-white/5 text-slate-500 transition-all duration-500 ${social.color} ${social.bg} hover:border-white/20 hover:scale-110 active:scale-95`}
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
              <div className="w-px h-8 bg-white/10 mx-2 hidden sm:block"></div>
              <span className="hidden sm:inline text-[9px] font-black uppercase tracking-[0.4em] text-slate-600">Secure Uplink_</span>
            </div>
          </div>
        </section>

        {/* GitHub Repos with AJAX handling */}
        <section className="mb-48">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="text-left">
              <h2 className="text-xs font-black text-slate-600 uppercase tracking-[0.6em] mb-4">Open Source Nexus</h2>
              <p className="text-white text-4xl font-black tracking-tight italic">Live Project Matrix.</p>
            </div>
            {!loading && (
              <button onClick={fetchGithubRepos} className="text-orange-500 text-[10px] font-black uppercase tracking-widest flex items-center hover:text-white transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Retry Uplink
              </button>
            )}
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="p-10 bg-slate-900/40 border border-white/5 rounded-[2.5rem] relative overflow-hidden h-full min-h-[300px] flex flex-col">
                  {/* Star Skeleton */}
                  <div className="absolute top-10 right-10 w-12 h-4 bg-white/5 rounded animate-pulse"></div>
                  
                  {/* Title Skeleton */}
                  <div className="w-3/4 h-8 bg-white/5 rounded mb-6 animate-pulse"></div>
                  
                  {/* Description Skeleton */}
                  <div className="space-y-3 mb-8 flex-grow">
                    <div className="w-full h-3 bg-white/5 rounded animate-pulse"></div>
                    <div className="w-full h-3 bg-white/5 rounded animate-pulse"></div>
                    <div className="w-2/3 h-3 bg-white/5 rounded animate-pulse"></div>
                  </div>
                  
                  {/* Tags Skeleton */}
                  <div className="flex gap-2">
                    <div className="w-16 h-6 bg-white/5 rounded-lg animate-pulse"></div>
                    <div className="w-20 h-6 bg-white/5 rounded-lg animate-pulse"></div>
                    <div className="w-12 h-6 bg-white/5 rounded-lg animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dynamicRepos.length > 0 ? dynamicRepos.map((repo, idx) => (
                <a 
                  key={idx} 
                  href={repo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-10 bg-slate-900/40 border border-white/5 rounded-[2.5rem] hover:border-orange-500/30 hover:bg-slate-900 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
                >
                  <div className="absolute top-0 right-0 p-6 flex items-center space-x-2">
                    <span className="text-orange-500 text-[10px] font-bold">★ {repo.stars || 0}</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 group-hover:text-orange-500 transition-colors truncate pr-8">{repo.name}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 line-clamp-3 flex-grow">{repo.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {repo.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              )) : (
                 <div className="col-span-full p-20 bg-slate-900/40 border border-white/5 rounded-[3.5rem] text-center">
                  <p className="text-slate-500 font-mono text-sm uppercase tracking-widest mb-6">Uplink Offline. Displaying Static Fallback.</p>
                  <a href="https://github.com/Bolajie" target="_blank" rel="noreferrer" className="inline-block px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white/10 transition-all">Visit GitHub Hub Directly</a>
                </div>
              )}
            </div>
          )}
        </section>

        {/* GTM Systems Expertise Section - NEW */}
        <section className="mb-48">
          <div className="text-left mb-16">
            <h2 className="text-xs font-black text-slate-600 uppercase tracking-[0.6em] mb-4">Specialized Focus</h2>
            <p className="text-white text-4xl font-black tracking-tight italic">GTM Systems Expertise.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SKILL_GROUPS.find(g => g.name === 'Automation & GTM Systems')?.skills.map((skill, idx) => (
              <div key={idx} className="group p-8 bg-slate-900/40 border border-white/5 rounded-[2rem] hover:border-orange-500/30 hover:bg-slate-900 transition-all duration-300 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 mb-6 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                     <path strokeLinecap="round" strokeLinejoin="round" d={skill.icon} />
                   </svg>
                </div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skill Groups - Bento Style */}
        <section className="mb-48">
          <h2 className="text-center text-xs font-black text-slate-600 uppercase tracking-[0.6em] mb-20">Core Competencies</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {SKILL_GROUPS.map((group, idx) => (
              <div key={group.name} className={`p-12 bg-slate-900/40 rounded-[3.5rem] border border-white/5 shadow-2xl transition-all duration-500 hover:border-orange-500/20 group`}>
                <div className="flex items-center space-x-6 mb-12">
                   <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-xl accent-gradient shadow-lg group-hover:scale-110 transition-transform`}>
                      {idx + 1}
                   </div>
                   <h3 className="text-3xl font-black text-white tracking-tight">{group.name}</h3>
                </div>
                <div className="grid gap-3">
                  {group.skills.map(skill => (
                    <div key={skill.name} className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center space-x-4 group/item hover:bg-white/10 transition-colors">
                       <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-orange-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                             <path strokeLinecap="round" strokeLinejoin="round" d={skill.icon}></path>
                          </svg>
                       </div>
                       <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest group-hover/item:text-white transition-colors">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-48 border-t border-white/5 pt-48">
           <div className="text-center mb-24">
             <h2 className="text-xs font-black text-slate-600 uppercase tracking-[0.6em] mb-4">The Trajectory</h2>
             <p className="text-white text-4xl font-black tracking-tight italic">Evolution of Efficiency.</p>
           </div>
           
           <div className="max-w-4xl mx-auto space-y-24 relative">
             <div className="absolute left-[63px] top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>
             {TIMELINE.map((item, idx) => (
               <div key={idx} className="flex flex-col md:flex-row gap-12 items-start group relative">
                 <div className="w-32 flex-shrink-0 text-slate-600 font-black text-[10px] uppercase tracking-[0.4em] pt-6 md:text-right">
                   {item.year}
                 </div>
                 <div className="flex-grow p-12 bg-slate-900/60 border border-white/5 rounded-[3rem] group-hover:border-orange-500/30 transition-all shadow-2xl relative z-10">
                   <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-2xl font-black text-white">{item.role}</h4>
                        <p className="text-orange-500 font-bold text-[10px] uppercase tracking-widest mt-1">{item.company}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-600 group-hover:text-orange-500 transition-colors">
                         {idx === 0 ? '🚀' : idx === 1 ? '📊' : '🏢'}
                      </div>
                   </div>
                   <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.description}</p>
                 </div>
               </div>
             ))}
           </div>
        </section>

        {/* Foundations */}
        <section className="pb-24 border-t border-white/5 pt-48">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-none">Logical <br/> <span className="text-gradient">Bedrock</span>.</h2>
                 <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-md">My foundation in Mathematics, combined with advanced Data Science training at WorldQuant University, equips me to design automation systems grounded in statistical rigor, reliable data, and real-world business constraints.</p>
              </div>
              <div className="space-y-8">
                 {EDUCATION.map((edu, idx) => (
                   <div key={idx} className="p-10 bg-slate-900 border border-white/5 rounded-[2.5rem] shadow-2xl group hover:border-rose-500/30 transition-all">
                      <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-4">{edu.year} • {edu.institution}</p>
                      <h4 className="text-2xl font-black text-white mb-4">{edu.degree}</h4>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">{edu.details}</p>
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