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

// Nodes are differentiated by role and weight, not by hue. The orchestrator is
// the point of the diagram, so it is the only node that carries the accent.
const NODE_CFG: Record<NodeType, { border: string; bg: string; text: string; dot: string; tag: string }> = {
  trigger: { border: 'border-line-strong',      bg: 'bg-brand-sunken/60',      text: 'text-brand-muted',  dot: 'bg-brand-muted',  tag: 'TRIGGER' },
  hub:     { border: 'border-brand-orange/55',  bg: 'bg-brand-orange/[0.10]',  text: 'text-brand-orange', dot: 'bg-brand-orange', tag: 'ORCH' },
  ai:      { border: 'border-line-strong',      bg: 'bg-brand-sunken/60',      text: 'text-brand-muted',  dot: 'bg-brand-muted',  tag: 'AI' },
  output:  { border: 'border-line-strong',      bg: 'bg-brand-sunken/60',      text: 'text-brand-muted',  dot: 'bg-brand-muted',  tag: 'OUTPUT' },
};

const WORKFLOWS: Workflow[] = [
  {
    id: 'outreach', label: 'Cold Outreach', fileId: 'outreach_pipeline.n8n.json',
    trigger:  { type: 'trigger', label: 'Lead Scored',    sub: 'Webhook Trigger' },
    hub:      { type: 'hub',     label: 'n8n',            sub: 'Orchestrator' },
    aiNodes:  [{ type: 'ai', label: 'Ogilvy Engine', sub: 'Positioning' },
               { type: 'ai', label: 'Claude AI',  sub: 'Pitch Draft' }],
    outputs:  [{ type: 'output', label: 'GoHighLevel', sub: 'Send + Follow-up' },
               { type: 'output', label: 'Airtable',     sub: 'Tracking' }],
  },
  {
    id: 'research', label: 'Research Agent', fileId: 'company_research.n8n.json',
    trigger:  { type: 'trigger', label: 'Company Submitted', sub: 'HTTP Trigger' },
    hub:      { type: 'hub',     label: 'n8n',               sub: 'Orchestrator' },
    aiNodes:  [{ type: 'ai', label: 'Tavily',  sub: 'Live Research' },
               { type: 'ai', label: 'Claude',  sub: 'Brief Synthesis' }],
    outputs:  [{ type: 'output', label: 'Supabase',  sub: 'Cached Report' },
               { type: 'output', label: 'Brief Doc',  sub: 'Structured Output' }],
  },
  {
    id: 'video', label: 'Video Pipeline', fileId: 'video_design_studio.n8n.json',
    trigger:  { type: 'trigger', label: 'Brief Ready', sub: 'File Trigger' },
    hub:      { type: 'hub',     label: 'n8n',         sub: 'Orchestrator' },
    aiNodes:  [{ type: 'ai', label: 'Claude Code', sub: 'Plan + Sub-agents' },
               { type: 'ai', label: 'FFmpeg',     sub: 'Render' }],
    outputs:  [{ type: 'output', label: 'Design Tokens', sub: 'Brand System' },
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
        <span className={`section-label ${c.text}`} style={{ fontSize: '11px', letterSpacing: '0.1em' }}>{c.tag}</span>
      </div>
      <p className="font-display font-black text-[11px] text-brand-bone leading-tight">{node.label}</p>
      <p className="section-label" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>{node.sub}</p>
    </div>
  );
};

const WorkflowVisualizer: React.FC = () => {
  const [active, setActive] = useState(0);
  const wf = WORKFLOWS[active];

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 pb-8 border-b border-line">
          <div>
            <p className="section-label mb-3">Workflow Architecture</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-bone tracking-tight">
              How I Wire <span className="text-brand-orange">Systems.</span>
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
                  ? 'bg-brand-orange text-brand-deep shadow-[0_0_20px_rgba(255,65,3,0.25)]'
                  : 'border border-line-strong text-brand-muted hover:border-brand-orange/30 hover:text-brand-bone'
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>

        <div className="relative rounded-2xl border border-line bg-brand-surface overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-brand-orange opacity-40"></div>
          <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none"></div>

          <div className="relative z-10 flex items-center justify-between px-5 py-3 border-b border-line bg-brand-sunken/40">
            <span className="section-label">{wf.fileId}</span>
            <span className="section-label">6 nodes</span>
          </div>

          <div className="overflow-x-auto py-10 px-6">
            <div className="relative mx-auto" style={{ width: 700, height: 180 }} key={wf.id}>

              <svg className="absolute inset-0" width="700" height="180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="wv-arr" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                    <polygon points="0 0, 6 2, 0 4" fill="#FF4103" fillOpacity="0.55" />
                  </marker>
                </defs>

                <line x1="140" y1="90" x2="185" y2="90"
                  stroke="#FF4103" strokeOpacity="0.5" strokeWidth="1.5"
                  strokeDasharray="5 3" markerEnd="url(#wv-arr)"
                  className="flow-line" />

                <line x1="308" y1="82" x2="344" y2="47"
                  stroke="#FF4103" strokeOpacity="0.5" strokeWidth="1.5"
                  strokeDasharray="5 3" markerEnd="url(#wv-arr)"
                  className="flow-line" style={{ animationDelay: '0.3s' }} />

                <line x1="308" y1="98" x2="344" y2="133"
                  stroke="#FF4103" strokeOpacity="0.5" strokeWidth="1.5"
                  strokeDasharray="5 3" markerEnd="url(#wv-arr)"
                  className="flow-line" style={{ animationDelay: '0.6s' }} />

                <line x1="465" y1="47" x2="505" y2="47"
                  stroke="#FF4103" strokeOpacity="0.5" strokeWidth="1.5"
                  strokeDasharray="5 3" markerEnd="url(#wv-arr)"
                  className="flow-line" style={{ animationDelay: '0.9s' }} />

                <line x1="465" y1="133" x2="505" y2="133"
                  stroke="#FF4103" strokeOpacity="0.5" strokeWidth="1.5"
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
