import React from 'react';
import { Server, Cpu, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ArchitectureComponent {
  name: string;
  role: string;
  tech: string;
}

interface ArchitectureDiagramProps {
  title?: string;
  components: ArchitectureComponent[];
  type?: 'ai' | 'technical';
  className?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  title = "Architecture Workflow",
  components,
  type = 'ai',
  className,
}) => {
  return (
    <div className={cn('rounded-2xl bg-white border border-slate-200 p-6 shadow-card', className)}>
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-sky-50 text-sky-600 border border-sky-200">
            {type === 'ai' ? <Cpu className="w-4 h-4" /> : <Server className="w-4 h-4" />}
          </div>
          <h4 className="text-base font-bold text-slate-900 tracking-tight">{title}</h4>
        </div>
        <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
          {type === 'ai' ? 'AI Pipeline & Guardrails' : 'System Components'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {components.map((comp, idx) => (
          <div
            key={comp.name}
            className="flex flex-col justify-between p-4.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/30 transition-all relative group shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-sky-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                  0{idx + 1}
                </span>
                {idx < components.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden lg:block group-hover:text-sky-600 transition-colors" />
                )}
              </div>
              <h5 className="text-sm font-bold text-slate-900 mb-1.5">{comp.name}</h5>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">{comp.role}</p>
            </div>

            <div className="pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
              <span className="font-medium">Stack:</span>
              <span className="text-slate-900 font-semibold text-[11px]">{comp.tech}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
