import React from 'react';
import { PERSONAL_CONFIG } from '../data/config';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Lightbulb, Bot, Code, RefreshCw } from 'lucide-react';

export const WhatIBring: React.FC = () => {
  const cards = PERSONAL_CONFIG.whatIBring;
  const icons = [Lightbulb, Bot, Code, RefreshCw];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="TEAM VALUE"
          title="What I Bring"
          subtitle="Combining product curiosity, modern AI engineering, and rapid prototype execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => {
            const Icon = icons[idx] || Lightbulb;
            return (
              <div
                key={card.number}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-card-hover transition-all duration-200 shadow-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-md border border-sky-200">
                      {card.number}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 group-hover:border-sky-300 transition-colors">
                      <Icon className="w-4 h-4 text-sky-600" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                    {card.title}
                  </h3>

                  <blockquote className="text-sm sm:text-base font-semibold text-sky-700 italic border-l-3 border-sky-400 pl-3.5 py-0.5 my-3 bg-sky-50/40 rounded-r-lg">
                    "{card.quote}"
                  </blockquote>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-50 text-xs font-medium text-slate-600 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
