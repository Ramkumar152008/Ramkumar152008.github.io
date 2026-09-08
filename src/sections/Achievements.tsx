import React from 'react';
import { ACHIEVEMENTS_DATA } from '../data/achievements';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Trophy, Award, BookOpen, Sparkles } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

export const Achievements: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Hackathon':
        return Trophy;
      case 'Competition':
        return Award;
      case 'Academic':
        return BookOpen;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="EVIDENCE & RECOGNITION"
          title="Achievements & Competitions"
          subtitle="Honest, evidence-based milestones from collegiate hackathons, innovation sprints, and academic progression."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS_DATA.map((item) => {
            const Icon = getIcon(item.category);
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-card-hover transition-all duration-200 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded bg-sky-50 border border-sky-200 text-sky-600">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <Badge variant="accent" size="sm">
                        {item.category}
                      </Badge>
                    </div>
                    <span className="text-xs font-semibold text-slate-500">{item.year}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 tracking-tight mb-1.5 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs font-semibold text-sky-700 mb-3">
                    {item.issuerOrEvent}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-medium text-slate-400">
                  {item.evidencePlaceholder}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
