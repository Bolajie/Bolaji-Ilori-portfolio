import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isMobile = window.innerWidth < 768;
      
      if (isMobile) {
        // Hide on scroll down, show on scroll up
        if (currentY > lastY + 20) {
          setIsVisible(false);
        } else if (currentY < lastY - 20) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      
      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Work', path: '/case-studies', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { name: 'CV', path: '/about', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Contact', path: '/contact', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
  ];

  return (
    <>
      {/* Top Left Branding */}
      <Link to="/" className="fixed top-6 left-6 z-[60] flex items-center space-x-3 group cursor-pointer">
        <div className="w-10 h-10 bg-brand-surface border border-white/10 rounded-xl flex items-center justify-center text-white font-black group-hover:border-brand-orange/50 transition-all shadow-lg active:scale-95">
          B<span className="text-brand-orange">I</span>
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-white transition-colors hidden sm:inline-block">Bolaji Ilori</span>
      </Link>

      {/* Top Right Call to Action */}
      <div className="fixed top-6 right-6 z-[60] hidden md:block">
        <Link 
          to="/contact" 
          className="accent-gradient text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all active:scale-95 hover:scale-105 block"
        >
          Work with me
        </Link>
      </div>

      {/* Floating Bottom Navigation */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-auto max-w-[90vw] transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-[200%]'}`}>
        <div className="bg-[#0f0f0f]/90 backdrop-blur-2xl border border-white/10 px-4 py-3 rounded-[2.5rem] flex items-center space-x-2 shadow-2xl">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex flex-col items-center justify-center w-16 sm:w-20 py-2.5 rounded-3xl transition-all duration-300 relative group active:scale-95 ${isActive ? 'bg-brand-orange text-black' : 'text-slate-500 hover:text-white'}`}
              >
                <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d={link.icon}></path>
                </svg>
                <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider hidden sm:block">{link.name}</span>
                {!isActive && (
                  <span className="absolute -top-1 w-1 h-1 rounded-full bg-brand-orange scale-0 group-hover:scale-100 transition-transform"></span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;