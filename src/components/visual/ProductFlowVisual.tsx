import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

interface Step {
  step: string;
  action: string;
  outcome: string;
}

interface ProductFlowVisualProps {
  steps: Step[];
  className?: string;
}

export const ProductFlowVisual: React.FC<ProductFlowVisualProps> = ({ steps, className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4', className)}>
      {steps.map((item, idx) => (
        <div
          key={item.step}
          className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:border-sky-300 hover:shadow-card-hover transition-all shadow-card relative"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded-md text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200">
                {item.step}
              </span>
              {idx < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-slate-300 hidden lg:block" />
              )}
            </div>
            
            <h5 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
              {item.action}
            </h5>
          </div>

          <div className="pt-3 mt-3 border-t border-slate-100">
            <div className="flex items-start gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item.outcome}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
