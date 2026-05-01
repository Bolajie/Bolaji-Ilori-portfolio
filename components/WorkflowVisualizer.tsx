import React, { useState } from 'react';

type NodeType = 'trigger' | 'hub' | 'ai' | 'output';

interface FlowNode {
  type: NodeType;
  label: string;
  sub: string;
}

interface Workflow {
  id: string;
  label: string;
  fileId: string;
  trigger: FlowNode;
  hub: FlowNode;
  aiNodes: [FlowNode, FlowNode];
  outputs: [FlowNode, FlowNode];
}

const NODE_CFG: Record<NodeType, { border: string; bg: string; text: string; dot: string; tag: string }> = {
  trigger: { border: 'border-emerald-500/40', bg: 'bg-emerald-500/[0.07]', text: 'text-emerald-300', dot: 'bg-emerald-400',  tag: 'TRIGGER' },
  hub:     { border: 'border-orange-500/50',  bg: 'bg-orange-500/[0.08]',  text: 'text-orange-300',  dot: 'bg-orange-400',   tag: 'ORCH' },
  ai:      { border: 'border-violet-400/40',  bg: 'bg-violet-500/[0.07]',  text: 'text-violet-300',  dot: 'bg-violet-400',   tag: 'AI' },
  output:  { border: 'border-sky-400/40',     bg: 'bg-sky-500/[0.07]',     text: 'text-sky-300',     dot: 'bg-sky-400',      tag: 'OUTPUT' },
};

const WORKFLOWS: Workflow[] = [
  {
    id: 'crm', label: 'CRM Pipeline', fileId: 'crm_automation.n8n.json',
    trigger:  { type: 'trigger', label: 'Call Complete',     sub: 'Webhook Trigger' },
    hub:      { type: 'hub',     label: 'n8n',               sub: 'Orchestrator' },
    aiNodes:  [{ type: 'ai', label: 'Gemini 2.5', sub: 'Transcription' },
               { type: 'ai', label: 'Claude AI',  sub: 'Analysis' }],
    outputs:  [{ type: 'output', label: 'Airtable',      sub: 'CRM Update' },
               { type: 'output', label: 'Google Sheets', sub: 'Reporting' }],
  },
  {
    id: 'compliance', label: 'Compliance Audit', fileId: 'ftc_compliance.n8n.json',
    trigger:  { type: 'trigger', label: 'Content Submitted', sub: 'HTTP Trigger' },
    hub:      { type: 'hub',     label: 'n8n',               sub: 'Orchestrator' },
    aiNodes:  [{ type: 'ai', label: 'Zep KG',  sub: 'Rule Lookup' },
               { type: 'ai', label: 'OpenAI',  sub: 'Audit Review' }],
    outputs:  [{ type: 'output', label: 'Audit Report', sub: 'Structured PDF' },
               { type: 'output', label: 'Slack Alert',  sub: 'Block Kit' }],
  },
  {
    id: 'content', label: 'Content Pipeline', fileId: 'content_gen.n8n.json',
    trigger:  { type: 'trigger', label: 'Transcript Ready', sub: 'File Trigger' },
    hub:      { type: 'hub',     label: 'n8n',              sub: 'Orchestrator' },
    aiNodes:  [{ type: 'ai', label: 'LLM Prompt', sub: 'Script Gen' },
               { type: 'ai', label: 'FFmpeg',     sub: 'Video Build' }],
    outputs:  [{ type: 'output', label: 'Google Docs', sub: 'Document' },
               { type: 'output', label: 'GitHub',      sub: 'Versioned Asset' }],
  },
];

const Node: React.FC<{ node: FlowNode; style: React.CSSProperties }> = ({ node, style }) => {
  const c = NODE_CFG[node.type];
  return (
    <div
      className={`absolute flex flex-col gap-1 px-3 py-2.5 rounded-xl border ${c.border} ${c.bg}`}
      style={{ width: 120, ...style }}
    >
      <div className="flex items-center gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`}></span>
        <span className={`section-label ${c.text}`} style={{ fontSize: '7px' }}>{c.tag}</span>
      </div>
      <p className="font-display font-black text-[11px] text-brand-cream leading-tight">{node.label}</p>
      <p className="section-label" style={{ fontSize: '7px' }}>{node.sub}</p>
    </div>
  );
};

const WorkflowVisualizer: React.FC = () => {
  const [active, setActive] = useState(0);
  const wf = WORKFLOWS[active];

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 pb-8 border-b border-white/[0.06]">
          <div>
            <p className="section-label mb-3">Workflow Architecture</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-cream tracking-tight">
              How I Wire <span className="text-gradient">Systems.</span>
            </h2>
          </div>
          <p className="text-brand-muted text-sm font-medium max-w-sm leading-relaxed">
            n8n as the central orchestrator — every tool connected, every handoff automated.
          </p>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {WORKFLOWS.map((w, i) => (
            <button
              key={w.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-lg font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                active === i
                  ? 'accent-gradient text-white shadow-[0_0_20px_rgba(255,107,43,0.25)]'
                  : 'border border-white/[0.08] text-brand-muted hover:border-brand-orange/30 hover:text-brand-cream'
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>

        <div className="relative rounded-2xl border border-white/[0.06] bg-brand-surface overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px accent-gradient opacity-40"></div>
          <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none"></div>

          <div className="relative z-10 flex items-center justify-between px-5 py-3 border-b border-white/[0.05] bg-black/20">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
              </div>
              <span className="section-label">{wf.fileId}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="section-label text-emerald-400">executing</span>
            </div>
          </div>

          <div className="overflow-x-auto py-10 px-6">
            <div className="relative mx-auto" style={{ width: 700, height: 180 }} key={wf.id}>

              <svg className="absolute inset-0" width="700" height="180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="wv-arr" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                    <polygon points="0 0, 6 2, 0 4" fill="#FF6B2B" fillOpacity="0.55" />
                  </marker>
                </defs>

                <line x1="140" y1="90" x2="185" y2="90"
                  stroke="#FF6B2B" strokeOpacity="0.5" strokeWidth="1.5"
                  strokeDasharray="5 3" markerEnd="url(#wv-arr)"
                  className="flow-line" />

                <line x1="308" y1="82" x2="344" y2="47"
                  stroke="#FF6B2B" strokeOpacity="0.5" strokeWidth="1.5"
                  strokeDasharray="5 3" markerEnd="url(#wv-arr)"
                  className="flow-line" style={{ animationDelay: '0.3s' }} />

                <line x1="308" y1="98" x2="344" y2="133"
                  stroke="#FF6B2B" strokeOpacity="0.5" strokeWidth="1.5"
                  strokeDasharray="5 3" markerEnd="url(#wv-arr)"
                  className="flow-line" style={{ animationDelay: '0.6s' }} />

                <line x1="465" y1="47" x2="505" y2="47"
                  stroke="#FF6B2B" strokeOpacity="0.5" strokeWidth="1.5"
                  strokeDasharray="5 3" markerEnd="url(#wv-arr)"
                  className="flow-line" style={{ animationDelay: '0.9s' }} />

                <line x1="465" y1="133" x2="505" y2="133"
                  stroke="#FF6B2B" strokeOpacity="0.5" strokeWidth="1.5"
                  strokeDasharray="5 3" markerEnd="url(#wv-arr)"
                  className="flow-line" style={{ animationDelay: '1.2s' }} />
              </svg>

              {/* Trigger: left=20, top=62 → right-center=(140, 90) */}
              <Node node={wf.trigger}    style={{ left: 20,  top: 62 }} />
              {/* Hub: left=185, top=62 → right-center=(305, 90) */}
              <Node node={wf.hub}        style={{ left: 185, top: 62 }} />
              {/* AI 1: left=345, top=19 → right-center=(465, 47) */}
              <Node node={wf.aiNodes[0]} style={{ left: 345, top: 19 }} />
              {/* AI 2: left=345, top=105 → right-center=(465, 133) */}
              <Node node={wf.aiNodes[1]} style={{ left: 345, top: 105 }} />
              {/* Output 1: left=505, top=19 */}
              <Node node={wf.outputs[0]} style={{ left: 505, top: 19 }} />
              {/* Output 2: left=505, top=105 */}
              <Node node={wf.outputs[1]} style={{ left: 505, top: 105 }} />
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-brand-orange/[0.05] rounded-full blur-[80px] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowVisualizer;
