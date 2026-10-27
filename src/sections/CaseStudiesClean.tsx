import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { useProfile, CaseStudyItem } from '../context/ProfileContext';
import { Link } from 'react-router-dom';

export const CaseStudiesClean: React.FC = () => {
  const { profile } = useProfile();

  return (
    <section id="case-studies" className="py-20 md:py-28 border-t border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header (H2): 26px, Medium/Bold */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-[26px] font-semibold text-[#111827] tracking-tight mb-3">
            Featured Case Studies
          </h2>
          <p className="text-[16px] font-normal leading-[1.6] text-[#4B5563]">
            Selected AI product systems spanning autonomous agents, statutory document intelligence, and eval harnesses.
          </p>
        </div>

        {/* Case Study Cards: Grid featuring 2-3 cards with generous whitespace */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.caseStudies.map((card: CaseStudyItem) => (
            <article
              key={card.id}
              className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#BFDBFE] p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 group"
            >
              <div>
                {/* Tag badge */}
                <div className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#4B5563] bg-[#F3F4F6] px-2.5 py-1 rounded-md mb-4">
                  {card.tag}
                </div>

                {/* Subsection Header (H3): 18px, Semi-bold, Charcoal */}
                <h3 className="text-[18px] font-semibold text-[#111827] group-hover:text-[#2563EB] transition-colors mb-2.5 leading-snug">
                  {card.title}
                </h3>

                {/* 1-Line Summary: 16px, Regular, line-height 1.5 - 1.6 */}
                <p className="text-[16px] font-normal leading-[1.6] text-[#4B5563] mb-6">
                  {card.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3F4F6] space-y-4">
                {/* Tech Blue Callout Metric */}
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span className="text-[13px] font-semibold text-[#2563EB] tracking-tight">
                    {card.metrics}
                  </span>
                </div>

                {/* Tech Blue "View Case Study" Button */}
                <div>
                  <Link
                    to={card.link}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] text-white text-[14px] font-semibold shadow-xs transition-all"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
