import React, { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { JOURNEY_DATA } from '../data/journey';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/Button';

export const JourneyPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Education', 'AI & Products', 'Hackathons & Innovation', 'Current Focus'];

  const filteredMilestones = JOURNEY_DATA.filter((m) => {
    if (selectedCategory === 'All') return true;
    return m.category === selectedCategory;
  });

  return (
    <PageContainer
      title="Product Journey & Evolution — B. Ramkumar"
      description="Interactive timeline of B. Ramkumar's journey in Computer Science, software development, AI building, and Product Management."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <SectionHeading
          eyebrow="CHRONOLOGY"
          title="My Product Journey"
          subtitle="An authentic timeline of how I went from writing core C/C++ algorithms to architecting AI-powered products and exploring Product Management."
        />

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-slate-200 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                'px-4 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 border',
                selectedCategory === cat
                  ? 'bg-sky-500 text-white border-sky-500 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vertical Timeline Stack */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 md:before:left-8 before:w-0.5 before:bg-slate-200">
          {filteredMilestones.map((milestone) => {
            const isCurrent = milestone.year === 'CURRENT';

            return (
              <div key={milestone.title} className="relative flex items-start gap-6 group">
                {/* Timeline node icon */}
                <div
                  className={cn(
                    'w-12 h-12 md:w-16 md:h-16 rounded-2xl flex flex-col items-center justify-center font-bold text-xs shrink-0 border shadow-sm relative z-10 transition-transform group-hover:scale-105',
                    isCurrent
                      ? 'bg-sky-500 text-white border-sky-500 shadow-sky-glow'
                      : 'bg-white border-slate-200 text-sky-700'
                  )}
                >
                  <span>{milestone.year === 'CURRENT' ? 'NOW' : milestone.year}</span>
                  <span className="text-[10px] opacity-80 font-normal">
                    {milestone.period.includes('Early') ? 'Q1' : milestone.period.includes('Mid') ? 'Q2' : 'Q3'}
                  </span>
                </div>

                {/* Content Card */}
                <div className="flex-1 p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-card-hover transition-all shadow-card space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200">
                      {milestone.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{milestone.period}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {milestone.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {milestone.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {milestone.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
          <Button href="/work" variant="secondary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
            View Selected Products
          </Button>
          <Button href="/resume" variant="primary" size="sm">
            View Complete Resume
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};
