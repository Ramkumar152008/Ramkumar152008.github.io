import React from 'react';
import {
  Lightbulb,
  Hammer,
  GraduationCap,
  Compass,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_CONFIG } from '../data/config';

export const RecruiterSnapshot: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Lightbulb: <Lightbulb className="w-4 h-4 text-amber-500" />,
    Hammer: <Hammer className="w-4 h-4 text-sky-500" />,
    GraduationCap: <GraduationCap className="w-4 h-4 text-indigo-500" />,
    Compass: <Compass className="w-4 h-4 text-emerald-500" />,
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header Row with Process Flow */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                PORTFOLIO METHODOLOGY & IMPACT
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              From Real Problems to Defensible Digital Products
            </h2>
          </div>

          {/* Process Breadcrumb Indicator: IDEA -> BUILD -> LEARN -> IMPACT */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-sky-50/70 border border-sky-200 text-xs font-bold text-sky-800 self-start md:self-auto">
            <span>IDEA</span>
            <ArrowRight className="w-3 h-3 text-sky-400" />
            <span>BUILD</span>
            <ArrowRight className="w-3 h-3 text-sky-400" />
            <span>LEARN</span>
            <ArrowRight className="w-3 h-3 text-sky-400" />
            <span className="text-sky-600">IMPACT</span>
          </div>
        </div>

        {/* 4 Clean Statement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PERSONAL_CONFIG.portfolioMetrics.map((item) => (
            <div
              key={item.phase}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-card hover:border-sky-300 hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 px-2 py-0.5 rounded-md bg-sky-50 border border-sky-200">
                    {item.step} · {item.phase}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 group-hover:border-sky-300 transition-colors">
                    {iconMap[item.icon] || <Sparkles className="w-4 h-4 text-sky-500" />}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-1.5">
                  {item.label}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-sky-600 transition-colors">
                <span>Phase Outcome</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
