import React from 'react';
import { motion } from 'framer-motion';
import { CORE_TOOLKIT } from '../constants';

const TechStackStrip: React.FC = () => {
  const duplicatedTools = [...CORE_TOOLKIT, ...CORE_TOOLKIT];

  return (
    <section className="w-full border-y border-white/[0.05] bg-brand-surface/40 overflow-hidden py-12 relative backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <p className="section-label mb-2">What I build with</p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-cream tracking-tight">
            The Engine Room<span className="text-brand-orange">.</span>
          </h2>
        </div>
        <p className="section-label max-w-xs leading-relaxed" style={{ lineHeight: '2' }}>
          14 tools · verified stack · no bloat
        </p>
      </div>

      <div className="flex relative w-full overflow-hidden mt-6">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 44, ease: 'linear', repeat: Infinity }}
        >
          {duplicatedTools.map((tool, idx) => (
            <div
              key={`${tool.name}-${idx}`}
              className="flex flex-col items-center justify-center mx-6 sm:mx-10 group min-w-[72px]"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl bg-brand-surface border border-white/[0.07] group-hover:border-brand-orange/40 transition-all duration-300">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <span className="mt-3 section-label opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontSize: '8px' }}>
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackStrip;
