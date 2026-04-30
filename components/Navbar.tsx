import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);

      if (window.innerWidth < 768) {
        if (currentY > lastY + 20) setIsVisible(false);
        else if (currentY < lastY - 20) setIsVisible(true);
      } else {
        setIsVisible(true);
      }
      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home',    path: '/',             icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
    { name: 'Work',    path: '/case-studies',  icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { name: 'About',   path: '/about',         icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Contact', path: '/contact',       icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];

  return (
    <>
      {/* Top-left wordmark */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-[60] flex items-center gap-3 group"
      >
        <div className="w-9 h-9 bg-brand-surface border border-white/10 rounded-lg flex items-center justify-center font-display font-black text-sm text-brand-cream group-hover:border-brand-orange/40 transition-all shadow-lg active:scale-95">
          B<span className="text-brand-orange">I</span>
        </div>
        <span className="hidden sm:block font-display font-bold text-[11px] uppercase tracking-[0.3em] text-brand-muted group-hover:text-brand-cream transition-colors">
          Bolaji Ilori
        </span>
      </Link>

      {/* Top-right CTA */}
      <div className="fixed top-6 right-6 z-[60] hidden md:flex items-center gap-3">
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.06] bg-brand-surface/80 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]"></span>
          <span className="section-label text-emerald-400">Available</span>
        </div>
        <Link
          to="/contact"
          className="accent-gradient text-white px-6 py-2.5 rounded-lg font-display font-bold text-[11px] uppercase tracking-wider hover:shadow-[0_0_25px_rgba(255,107,43,0.35)] hover:scale-[1.03] active:scale-95 transition-all"
        >
          Work with me
        </Link>
      </div>

      {/* Floating bottom nav */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] transition-transform duration-500 ease-in-out ${
          isVisible ? 'translate-y-0' : 'translate-y-[200%]'
        }`}
      >
        <div className="bg-brand-surface/95 backdrop-blur-2xl border border-white/[0.08] px-3 py-2.5 rounded-2xl flex items-center gap-1 shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex flex-col items-center justify-center w-16 sm:w-20 py-2 rounded-xl transition-all duration-300 relative group active:scale-95 ${
                  isActive
                    ? 'bg-brand-orange text-black shadow-[0_0_16px_rgba(255,107,43,0.4)]'
                    : 'text-brand-muted hover:text-brand-cream hover:bg-white/[0.04]'
                }`}
              >
                <svg className="w-4 h-4 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                </svg>
                <span className="section-label hidden sm:block" style={{ color: 'inherit', letterSpacing: '0.2em' }}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
