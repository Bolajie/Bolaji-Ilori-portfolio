import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep border-t border-white/[0.06] pt-24 pb-40 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Large name block */}
        <div className="mb-16 pb-16 border-b border-white/[0.06]">
          <p className="section-label mb-6">Let's build something that works.</p>
          <h2 className="font-display font-black text-[15vw] sm:text-[10vw] text-brand-cream leading-none tracking-tight">
            Bolaji<span className="text-gradient">.</span>
          </h2>
        </div>

        {/* Bottom grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">

          {/* Role + availability */}
          <div>
            <p className="font-display font-bold text-brand-cream text-sm mb-2">No-Code & Automation Engineer</p>
            <p className="section-label mb-6">Lagos, Nigeria · Remote</p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]"></span>
              <span className="section-label text-emerald-400">Open to work · $25–40/hr</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="section-label mb-2">Navigation</p>
            {[
              { name: 'Home', path: '/' },
              { name: 'Work', path: '/case-studies' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="font-display font-bold text-brand-muted hover:text-brand-cream text-sm transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <p className="section-label mb-2">Connect</p>
            {[
              { name: 'ibolajie@gmail.com',         href: 'mailto:ibolajie@gmail.com' },
              { name: 'linkedin.com/in/ibolajie',   href: 'https://www.linkedin.com/in/ibolajie/' },
              { name: 'x.com/ibolajie',             href: 'https://x.com/ibolajie' },
              { name: 'github.com/Bolajie',         href: 'https://github.com/Bolajie' },
            ].map(s => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-bold text-brand-muted hover:text-brand-orange text-sm transition-colors w-fit"
              >
                {s.name} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Copyright row */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="section-label">© {year} Bolaji Ilori. All rights reserved.</p>
          <p className="section-label">Built for impact. Deployed for scale.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
