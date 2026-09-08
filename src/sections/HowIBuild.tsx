import React, { useState } from 'react';
import { Search, Target, Layout, Code2, CheckCircle2, RefreshCw, ArrowRight } from 'lucide-react';
import { PERSONAL_CONFIG } from '../data/config';
import { SectionHeading } from '../components/ui/SectionHeading';
import { cn } from '../lib/utils';

export const HowIBuild: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const stages = PERSONAL_CONFIG.buildingStages;

  const icons = [Search, Target, Layout, Code2, CheckCircle2, RefreshCw];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="METHODOLOGY"
          title="How I Build Products"
          subtitle="From messy ambiguous problems to working software and validated iterations."
        />

        {/* 6 Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, idx) => {
            const Icon = icons[idx] || Search;
            const isSelected = activeStage === idx;

            return (
              <div
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                className={cn(
                  'p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-card',
                  isSelected
                    ? 'bg-white border-sky-400 shadow-card-hover scale-[1.01]'
                    : 'bg-white border-slate-200 hover:border-sky-300 hover:bg-sky-50/30'
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-md border border-sky-200">
                      STAGE {stage.step}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 group-hover:border-sky-300 transition-colors">
                      <Icon className="w-4 h-4 text-sky-600" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">
                    {stage.name}
                  </h3>
                  <p className="text-sm font-semibold text-sky-600 mb-3">
                    {stage.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="truncate font-medium">{stage.action}</span>
                  <ArrowRight
                    className={cn(
                      'w-3.5 h-3.5 shrink-0 transition-transform',
                      isSelected ? 'text-sky-600 translate-x-0.5' : 'opacity-40 group-hover:opacity-100 group-hover:text-sky-600'
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
