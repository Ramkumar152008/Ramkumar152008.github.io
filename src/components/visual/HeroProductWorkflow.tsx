import React, { useState, useEffect } from 'react';
import { 
  AlertCircle, 
  Search, 
  Lightbulb, 
  Layers, 
  Code2, 
  CheckCircle, 
  RefreshCw, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Bot,
  ChevronRight
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/Badge';

interface WorkflowStage {
  id: string;
  name: string;
  short: string;
  icon: React.FC<{ className?: string }>;
  tag: string;
  color: string;
  artifact: string;
  pmFocus: string;
  aiRole: string;
  previewCode: string;
  metrics: string;
}

const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    id: 'problem',
    name: 'PROBLEM',
    short: '01. Problem',
    icon: AlertCircle,
    tag: 'Friction Analysis',
    color: 'text-rose-600 border-rose-200 bg-rose-50',
    artifact: 'Problem Statement & Opportunity Canvas',
    pmFocus: 'Identifying 10x bottlenecks in manual procurement verification & merchant checkout drop-offs.',
    aiRole: 'Analyzing unstructured document volume & high cognitive fatigue during audits.',
    previewCode: '// Problem Framing\nconst painPoint = {\n  domain: "GovTech Procurement",\n  friction: "Manual cross-check of 50+ page PDFs",\n  risk: "Statutory non-compliance & delayed tenders"\n};',
    metrics: '90% time spent locating clauses',
  },
  {
    id: 'research',
    name: 'RESEARCH',
    short: '02. Research',
    icon: Search,
    tag: 'User & System Insights',
    color: 'text-amber-600 border-amber-200 bg-amber-50',
    artifact: 'User Journey Maps & GeM GFR Guidelines',
    pmFocus: 'Mapping officer heuristics, statutory GFR checklists, and multi-gateway failure logs.',
    aiRole: 'Synthesizing document schemas and common rejection reasons.',
    previewCode: '// Research Insight\nconst insights = [\n  "Officers need deterministic proof, not black-box guesses",\n  "Bounding box citations build immediate trust"\n];',
    metrics: 'Evaluated GeM tender rules',
  },
  {
    id: 'idea',
    name: 'IDEA',
    short: '03. Idea',
    icon: Lightbulb,
    tag: 'Hypothesis Scoping',
    color: 'text-sky-600 border-sky-200 bg-sky-50',
    artifact: 'Product Hypothesis & Scope Doc',
    pmFocus: 'Framing AI as an auditable verification copilot with deterministic statutory guardrails.',
    aiRole: 'Designing multi-modal extraction with deterministic rule engines.',
    previewCode: '// Hypothesis\nif (aiCopilot.withDeterministicRules) {\n  return "70% review speedup + 0% hallucination risk";\n}',
    metrics: 'Human-in-the-loop copilot model',
  },
  {
    id: 'design',
    name: 'DESIGN',
    short: '04. Design',
    icon: Layers,
    tag: 'UI & Interaction',
    color: 'text-cyan-600 border-cyan-200 bg-cyan-50',
    artifact: 'Split-Screen Evidence UI Wireframes',
    pmFocus: 'Designing synchronized PDF viewer with spatial bounding boxes and 1-click clarification notes.',
    aiRole: 'Mapping bounding coordinates (x, y, w, h) directly to UI highlight overlays.',
    previewCode: '<SplitView>\n  <SourcePdfViewer highlight={extractedField.bbox} />\n  <ComplianceMatrix status="NEEDS_REVIEW" />\n</SplitView>',
    metrics: 'Zero-search document inspection',
  },
  {
    id: 'build',
    name: 'BUILD',
    short: '05. Build',
    icon: Code2,
    tag: 'Engineering MVP',
    color: 'text-sky-600 border-sky-200 bg-sky-50',
    artifact: 'TypeScript + FastAPI + OCR Pipeline',
    pmFocus: 'Building clean component contracts, schema validators, and event telemetry simulators.',
    aiRole: 'Tesseract OCR + JSON Schema parser + deterministic threshold validator.',
    previewCode: 'async function verifyTurnover(dossier, rule) {\n  const extracted = await ocrExtractor.parse(dossier);\n  return extracted.turnover >= rule.minThreshold;\n}',
    metrics: 'Modular, type-safe architecture',
  },
  {
    id: 'validate',
    name: 'VALIDATE',
    short: '06. Validate',
    icon: CheckCircle,
    tag: 'Stress Testing',
    color: 'text-emerald-600 border-emerald-200 bg-emerald-50',
    artifact: 'Tender Dossier Evaluation Matrix',
    pmFocus: 'Testing real simulated tender packs across GST, MSME, and OEM authorization scenarios.',
    aiRole: 'Confidence thresholding (flagging extractions <85% confidence for manual sign-off).',
    previewCode: '// Validation Rule Matrix\nconst evaluation = {\n  gstStatus: "PASS",\n  turnoverCriteria: "PASS (₹4.2 Cr > ₹3 Cr)",\n  auditTrailLogged: true\n};',
    metrics: 'Defensible audit trail generated',
  },
  {
    id: 'iterate',
    name: 'ITERATE',
    short: '07. Iterate',
    icon: RefreshCw,
    tag: 'Continuous Learning',
    color: 'text-indigo-600 border-indigo-200 bg-indigo-50',
    artifact: 'Roadmap & Architecture Hardening',
    pmFocus: 'Translating friction into roadmap features (e.g. GSTN API integration & multi-bidder matrix).',
    aiRole: 'Refining prompt templates and improving edge-case layout parsing.',
    previewCode: '// Next Iteration Milestone\nconst roadmap = [\n  "Direct MCA21 & GSTN API verification",\n  "Batch comparative scoring across 50+ bids"\n];',
    metrics: 'Evolution towards production readiness',
  },
];

export const HeroProductWorkflow: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activePreset, setActivePreset] = useState<'epramaan' | 'paypilot'>('epramaan');

  const currentStage = WORKFLOW_STAGES[activeStageIndex];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % WORKFLOW_STAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="w-full rounded-2xl bg-white border border-slate-200 shadow-card p-4 sm:p-6 lg:p-7 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Top Header bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-800">
              Product Builder Interactive System
            </span>
          </div>
          <Badge variant="accent" size="sm">
            Live Simulator
          </Badge>
        </div>

        {/* Project Context Toggle */}
        <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-xl border border-slate-200 text-xs font-medium">
          <button
            onClick={() => setActivePreset('epramaan')}
            className={cn(
              'px-3 py-1 rounded-lg transition-all',
              activePreset === 'epramaan'
                ? 'bg-sky-500 text-white font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            )}
          >
            e-PRAMAAN (GovTech)
          </button>
          <button
            onClick={() => setActivePreset('paypilot')}
            className={cn(
              'px-3 py-1 rounded-lg transition-all',
              activePreset === 'paypilot'
                ? 'bg-sky-500 text-white font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            )}
          >
            PayPilot (Agents)
          </button>
        </div>
      </div>

      {/* Interactive Workflow Node Track */}
      <div className="relative z-10 py-5">
        <div className="flex items-center justify-between overflow-x-auto pb-2 scrollbar-none gap-2">
          {WORKFLOW_STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={stage.id}
                onClick={() => {
                  setActiveStageIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all shrink-0 border',
                  isActive
                    ? 'bg-sky-500 text-white border-sky-500 shadow-sm scale-[1.02]'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50'
                )}
              >
                <span className={cn('p-1 rounded-md', isActive ? 'bg-white/20 text-white' : stage.color)}>
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="font-semibold">{stage.name}</span>
                {idx < WORKFLOW_STAGES.length - 1 && (
                  <ChevronRight className={cn('w-3 h-3 hidden lg:block opacity-40 ml-1', isActive ? 'text-white' : 'text-slate-300')} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage Inspector Panel */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 mt-2">
        {/* Left: Product & AI Decision Context */}
        <div className="lg:col-span-7 bg-slate-50/80 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200">
                  STAGE {currentStage.short}
                </span>
                <span className="text-xs font-medium text-slate-500">{currentStage.tag}</span>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                {currentStage.metrics}
              </span>
            </div>

            <h4 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
              {currentStage.artifact}
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 mt-3">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>Product Manager Focus</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {currentStage.pmFocus}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1">
                  <Bot className="w-3.5 h-3.5 text-sky-500" />
                  <span>AI & Architecture Implementation</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {currentStage.aiRole}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Context Summary */}
          <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>
              Active Context: <strong className="text-slate-900 font-semibold">{activePreset === 'epramaan' ? 'e-PRAMAAN (GovTech)' : 'PayPilot (Agentic Commerce)'}</strong>
            </span>
            <button
              onClick={() => {
                setActiveStageIndex((prev) => (prev + 1) % WORKFLOW_STAGES.length);
                setIsAutoPlaying(false);
              }}
              className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-800 font-semibold transition-colors"
            >
              <span>Next Stage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Code / Schema / Live Node Fragment */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between text-xs">
          <div>
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 mb-3 text-slate-400">
              <span className="flex items-center gap-1.5 text-xs font-medium text-sky-400">
                <Code2 className="w-3.5 h-3.5" />
                <span>Execution Spec / Logic</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500">system_node.ts</span>
            </div>

            <pre className="p-3 rounded-lg bg-slate-950 text-xs font-mono text-sky-300 overflow-x-auto leading-relaxed border border-slate-800">
              <code>{currentStage.previewCode}</code>
            </pre>

            {/* Micro simulation status indicator */}
            <div className="mt-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Deterministic Guardrails</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Active
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Decision Transparency</span>
                <span className="text-sky-400 font-semibold flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> Audit Logged
                </span>
              </div>
            </div>
          </div>

          <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Step {activeStageIndex + 1} of 7</span>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-slate-300 hover:text-white text-xs px-2.5 py-1 rounded bg-slate-800 border border-slate-700 transition-colors"
            >
              {isAutoPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
