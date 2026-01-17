import React from 'react';
import { motion } from 'framer-motion';
import { CORE_TOOLKIT } from '../constants';

const TechStackStrip: React.FC = () => {
  // Duplicate icons for seamless infinite loop
  const duplicatedTools = [...CORE_TOOLKIT, ...CORE_TOOLKIT];

  return (
    <section className="w-full border-y border-white/5 bg-black/20 overflow-hidden py-10 mb-0 relative z-10 backdrop-blur-sm">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-slate-500 uppercase tracking-[0.3em] text-[10px] font-black mb-4">
          Core Toolkit
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-white">
          The Engine Room<span className="text-orange-500">.</span>
        </h3>
      </div>

      <div className="flex relative mt-10 w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedTools.map((tool, idx) => (
            <div 
              key={`${tool.name}-${idx}`} 
              className="flex flex-col items-center justify-center mx-6 sm:mx-10 group min-w-[80px]"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-brand-orange/50 transition-all duration-300 backdrop-blur-md">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  // Fallback for missing icons
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <span className="mt-4 text-[10px] font-black text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
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