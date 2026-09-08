import React, { useState } from 'react';
import { JOURNEY_DATA } from '../data/journey';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export const ProductJourney: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(JOURNEY_DATA.length - 1);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="EVOLUTION"
          title="My Product Journey"
          subtitle="From writing my first lines of C/C++ to architecting AI-powered products and exploring Product Management."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline Navigation Column */}
          <div className="lg:col-span-5 space-y-3">
            {JOURNEY_DATA.map((milestone, idx) => {
              const isActive = activeIdx === idx;
              const isCurrent = milestone.year === 'CURRENT';

              return (
                <div
                  key={milestone.title}
                  onClick={() => setActiveIdx(idx)}
                  className={cn(
                    'p-4 rounded-2xl border transition-all duration-150 cursor-pointer flex items-center justify-between shadow-card',
                    isActive
                      ? 'bg-white border-sky-400 shadow-card-hover'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'w-10 h-10 rounded-xl text-xs font-bold flex items-center justify-center border',
                        isCurrent
                          ? 'bg-sky-50 border-sky-300 text-sky-700'
                          : isActive
                          ? 'bg-sky-500 text-white border-sky-500'
                          : 'bg-slate-50 border-slate-200 text-slate-600'
                      )}
                    >
                      {milestone.year === 'CURRENT' ? 'NOW' : milestone.year.slice(2)}
                    </div>
                    <div>
                      <h4 className={cn('text-sm font-bold tracking-tight', isActive ? 'text-slate-900' : 'text-slate-700')}>
                        {milestone.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">{milestone.period}</p>
                    </div>
                  </div>

                  <span
                    className={cn(
                      'text-xs px-2.5 py-0.5 rounded-md border font-medium',
                      isActive
                        ? 'bg-sky-50 text-sky-700 border-sky-200'
                        : 'bg-slate-50 text-slate-500 border-slate-200'
                    )}
                  >
                    {milestone.tag}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Milestone Detail Card */}
          <div className="lg:col-span-7">
            {(() => {
              const active = JOURNEY_DATA[activeIdx];
              return (
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-card relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100 mb-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
                      <Calendar className="w-3.5 h-3.5 text-sky-500" />
                      <span>{active.period} · {active.category}</span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                      Authentic Milestone
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                    {active.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                    {active.description}
                  </p>

                  <div className="space-y-2.5">
                    <span className="text-xs uppercase tracking-wider text-slate-500 block font-bold">
                      Key Learnings & Milestones
                    </span>
                    {active.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};
