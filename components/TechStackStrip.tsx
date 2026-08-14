import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CORE_TOOLKIT } from '../constants';
import { TOOL_ICONS } from '../toolIcons';

const CATEGORIES = [...new Set(CORE_TOOLKIT.map(t => t.category))];

const ToolName: React.FC<{ name: string; category: string }> = ({ name, category }) => {
  const icon = TOOL_ICONS[name];
  return (
    <span className="flex items-center gap-2.5 flex-shrink-0">
      {icon && (
        <img
          src={icon}
          alt=""
          loading="lazy"
          className="w-6 h-6 rounded-md object-contain"
        />
      )}
      <span className="flex items-baseline gap-2.5">
        <span className="font-display font-black text-xl sm:text-2xl text-brand-bone whitespace-nowrap">
          {name}
        </span>
        <span className="font-mono text-[11px] tracking-wider text-brand-muted whitespace-nowrap">
          {category}
        </span>
      </span>
    </span>
  );
};

/* Separator, not a bullet: a hairline tick that reads as a delimiter in a manifest. */
const Tick: React.FC = () => (
  <span aria-hidden="true" className="w-px h-5 bg-brand-orange/40 flex-shrink-0" />
);

const TechStackStrip: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const marqueeItems = [...CORE_TOOLKIT, ...CORE_TOOLKIT];

  return (
    <section className="w-full border-y border-line bg-brand-sunken overflow-hidden py-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <p className="section-label mb-2">What I build with</p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-bone tracking-tight">
            The Engine Room<span className="text-brand-orange">.</span>
          </h2>
        </div>
        <p className="font-mono text-[11px] tracking-wider text-brand-muted sm:text-right">
          {CORE_TOOLKIT.length} tools across {CATEGORIES.length} areas
        </p>
      </div>

      {/* Reduced motion gets the full set laid out statically. A paused marquee would
          clip half the list off-screen, so the fallback is a different layout, not a
          frozen one. framer-motion animates via JS transforms, so the CSS
          prefers-reduced-motion block in index.css cannot reach it. */}
      {reduceMotion ? (
        <ul className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-wrap items-baseline gap-x-7 gap-y-4">
          {CORE_TOOLKIT.map(tool => (
            <li key={tool.name}>
              <ToolName name={tool.name} category={tool.category} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="relative flex w-full overflow-hidden">
          <motion.div
            className="flex items-center gap-7 pr-7"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 44, ease: 'linear', repeat: Infinity }}
          >
            {marqueeItems.map((tool, idx) => (
              <React.Fragment key={`${tool.name}-${idx}`}>
                <ToolName name={tool.name} category={tool.category} />
                <Tick />
              </React.Fragment>
            ))}
          </motion.div>

          {/* Edge fades so names dissolve into the surface instead of being sliced.
              These must match the section fill exactly or they read as a band. */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-brand-sunken to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-brand-sunken to-transparent" />
        </div>
      )}
    </section>
  );
};

export default TechStackStrip;
