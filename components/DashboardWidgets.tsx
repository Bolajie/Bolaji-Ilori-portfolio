import React, { useState, useEffect, memo } from 'react';

export const MetricsMonitor = memo(() => {
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(m => (m + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-10">
      {[
        { label: 'THROUGHPUT', val: '12.4k/s', active: activeMetric === 0 },
        { label: 'MEM_BUFFER', val: '64.2GB', active: activeMetric === 1 },
        { label: 'DB_HEALTH', val: '99.9%', active: activeMetric === 2 },
        { label: 'AI_LATENCY', val: '14ms', active: activeMetric === 3 }
      ].map((m, i) => (
        <div key={i} className={`p-4 sm:p-6 bg-black/20 rounded-2xl border transition-all duration-1000 ${m.active ? 'border-brand-orange/30' : 'border-white/5'}`}>
            <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-2">{m.label}</p>
            <p className={`text-2xl sm:text-3xl font-black text-white font-mono ${m.active ? 'text-brand-orange' : ''}`}>{m.val}</p>
        </div>
      ))}
    </div>
  );
});

export const SignalWaveform = memo(() => {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => (p + 1) % 100);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-24 bg-black/40 rounded-2xl border border-white/5 mb-10 overflow-hidden relative flex items-center justify-center px-8">
      <div className="flex items-end space-x-1.5 h-12 w-full">
        {[...Array(40)].map((_, i) => {
          const h = 10 + Math.sin((pulse + i) * 0.5) * 40 + Math.random() * 20;
          return (
            <div 
              key={i} 
              className={`flex-1 rounded-full bg-brand-orange opacity-20 transition-[height] duration-75 ease-linear`}
              style={{ height: `${Math.max(5, h)}%` }}
            ></div>
          );
        })}
      </div>
      <div className="absolute inset-x-0 top-0 p-3 flex justify-between">
        <span className="text-[8px] font-mono text-slate-700 tracking-widest uppercase">Signal Monitor</span>
      </div>
    </div>
  );
});

export const SystemTerminal = memo(() => {
  const [terminalLines, setTerminalLines] = useState<string[]>([
    '[13:21:11] VECTOR_MATCH: 0.98',
    '[13:21:11] AGENT_01: ACTIVE',
    '[13:21:11] n8n_FLOW: TRIGGERED',
    '[13:21:11] n8n_FLOW: TRIGGERED'
  ]);

  useEffect(() => {
    const logs = [
      '[13:21:11] VECTOR_MATCH: 0.98',
      '[13:21:11] AGENT_01: ACTIVE',
      '[13:21:11] n8n_FLOW: TRIGGERED',
      '[13:21:11] SYNC_STABLE: OK',
      '[13:21:11] DB_UPLINK: ACTIVE'
    ];
    const interval = setInterval(() => {
      setTerminalLines(prev => {
        const next = [...prev, logs[Math.floor(Math.random() * logs.length)]];
        return next.slice(-4);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/60 rounded-2xl p-6 font-mono text-[10px] space-y-2 border border-white/5 h-32 overflow-hidden">
      {terminalLines.map((line, i) => (
        <div key={i} className="flex space-x-4 opacity-40">
            <span className="text-brand-orange font-bold">{line.split(' ')[0]}</span>
            <span className="text-slate-400">{line.split(' ').slice(1).join(' ')}</span>
        </div>
      ))}
      <div className="flex space-x-4">
          <span className="text-brand-orange font-bold">[13:21:11]</span>
          <span className="w-2 h-4 bg-brand-orange animate-terminal-blink"></span>
      </div>
    </div>
  );
});