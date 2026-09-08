import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/skills';
import { SectionHeading } from '../components/ui/SectionHeading';
import { cn } from '../lib/utils';
import { Check } from 'lucide-react';

export const SkillsCapabilities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0].category);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="CAPABILITIES"
          title="Skills & Tooling"
          subtitle="Grouped capabilities across product discovery, AI architecture, software development, and modern tooling."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-200 mb-8">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={cn(
                'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border',
                activeCategory === cat.category
                  ? 'bg-sky-500 text-white border-sky-500 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50'
              )}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        {(() => {
          const current = SKILL_CATEGORIES.find((c) => c.category === activeCategory) || SKILL_CATEGORIES[0];
          return (
            <div>
              <p className="text-sm text-slate-600 mb-6 font-medium">
                {current.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {current.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4.5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-card-hover transition-all flex flex-col justify-between shadow-card"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-slate-900 tracking-tight">
                          {skill.name}
                        </span>
                        <div className="p-1 rounded bg-sky-50 text-sky-600">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {skill.detail}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] font-medium text-slate-400">
                      Applied in real projects
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
