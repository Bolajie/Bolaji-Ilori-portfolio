import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-40 border-t border-white/5 relative z-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black tracking-tighter">Bolaji <span className="text-orange-500">Ilori</span></h3>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mt-2">Data and automation specialist</p>
          </div>
          
          <div className="flex items-center space-x-8">
            <a 
              href="https://x.com/ibolajie" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-white transition-all transform hover:scale-125 duration-300"
              aria-label="Twitter / X"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/ibolajie/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-white transition-all transform hover:scale-125 duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="mailto:ibolajie@gmail.com" 
              className="text-slate-500 hover:text-white transition-all transform hover:scale-125 duration-300"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.58 6.062a2.25 2.25 0 01-2.316 0L2.25 6.75" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Bolaji Ilori. Designed for impact.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            <p>Built with Precision</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;