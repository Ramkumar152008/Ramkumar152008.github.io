import React, { useState } from 'react';
import { Bot, FileSearch, CheckCircle2, ShieldAlert, Database, FileText } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/Badge';

export const AIWorkflowVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ocr' | 'rules' | 'audit'>('ocr');

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Bot className="w-4 h-4 text-sky-500" />
            <h4 className="text-base font-bold text-slate-900">AI & Guardrails Interactive Pipeline</h4>
          </div>
          <p className="text-xs text-slate-500">
            How e-PRAMAAN and PayPilot enforce zero-hallucination compliance
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-xl border border-slate-200 text-xs font-medium">
          <button
            onClick={() => setActiveTab('ocr')}
            className={cn(
              'px-3 py-1 rounded-lg transition-colors',
              activeTab === 'ocr' ? 'bg-sky-500 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
            )}
          >
            1. Extraction & OCR
          </button>
          <button
            onClick={() => setActiveTab('rules')}
            className={cn(
              'px-3 py-1 rounded-lg transition-colors',
              activeTab === 'rules' ? 'bg-sky-500 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
            )}
          >
            2. Deterministic Rules
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={cn(
              'px-3 py-1 rounded-lg transition-colors',
              activeTab === 'audit' ? 'bg-sky-500 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
            )}
          >
            3. Audit Trail
          </button>
        </div>
      </div>

      {activeTab === 'ocr' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <FileSearch className="w-4 h-4 text-sky-600" />
              <span>Multi-Modal Spatial Layout Parser</span>
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tender documents arrive as multi-page scanned PDFs with varied layout structures. The extractor extracts raw text coordinates and isolates tabular regions.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-900 text-xs font-mono text-sky-300 space-y-1 border border-slate-800">
              <div className="text-slate-400">// Extracted Entity with Spatial BBox</div>
              <div>entity: "Annual Turnover FY 2024-25"</div>
              <div>value: "₹4,20,00,000"</div>
              <div>page: 14, bbox: [120, 340, 280, 410]</div>
              <div>confidence: 96.4%</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-center items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 border border-sky-200">
              <FileText className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-slate-900">Synchronized PDF Bounding Box</div>
            <p className="text-xs text-slate-600 max-w-xs leading-relaxed">
              Direct link between JSON entity output and visual highlight overlay on source document page.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'rules' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-500" />
              <span>Deterministic Statutory Engine</span>
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              No LLM guessing on math or validity dates. A strict rule validator checks statutory eligibility deterministically against tender requirements.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-900 text-xs font-mono text-sky-300 space-y-1 border border-slate-800">
              <div className="text-slate-400">// Deterministic Eligibility Check</div>
              <div>const isTurnoverValid = extracted.turnover &gt;= tender.minTurnover;</div>
              <div>const isGstActive = statutoryApi.checkGst(extracted.gstin);</div>
              <div>const isOemAuthorized = extracted.oemExpiry &gt; tender.bidDate;</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-center space-y-2.5">
            <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-200">
              <span className="text-slate-600">Turnover Threshold (₹3.0 Cr)</span>
              <Badge variant="success" size="sm">PASS (₹4.2 Cr)</Badge>
            </div>
            <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-200">
              <span className="text-slate-600">Active GSTIN Status</span>
              <Badge variant="success" size="sm">ACTIVE</Badge>
            </div>
            <div className="flex items-center justify-between text-xs py-1.5">
              <span className="text-slate-600">OEM Authorization Validity</span>
              <Badge variant="warning" size="sm">EXPIRING IN 30 DAYS</Badge>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'audit' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Database className="w-4 h-4 text-emerald-600" />
              <span>Tamper-Evident Defensible Audit Log</span>
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every manual confirmation, flag override, and AI extraction timestamp is recorded with officer sign-off to ensure audit defense.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-900 text-xs font-mono text-sky-300 space-y-1 border border-slate-800">
              <div className="text-slate-400">// Immutable Audit Trail</div>
              <div>timestamp: "2026-09-04T10:14:22Z"</div>
              <div>officer_id: "TEO_OFFICER_042"</div>
              <div>action: "ACCEPTED_FLAG_WITH_REMARKS"</div>
              <div>dossier_hash: "sha256_8f39b2..."</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-center items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-200">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-slate-900">1-Click Evaluation Summary Export</div>
            <p className="text-xs text-slate-600 max-w-xs leading-relaxed">
              Instantly exports signed PDF evaluation reports ready for tender committee review.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
