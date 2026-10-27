import React from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Activity, Cpu } from 'lucide-react';
import { useProfile } from '../context/ProfileContext';

export const Hero: React.FC = () => {
  const { profile } = useProfile();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] shadow-xs mb-8">
          <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse"></span>
          <span className="text-xs font-medium text-[#4B5563]">
            {profile.statusBadge}
          </span>
        </div>

        {/* Minimalist Introduction */}
        <div className="space-y-4 max-w-3xl">
          {/* Main Page Title (H1): 36px, Bold, Charcoal gray */}
          <h1 className="text-[36px] font-bold text-[#111827] tracking-tight leading-tight">
            {profile.name}
          </h1>

          {/* Subsection Header (H3): 18px, Semi-bold */}
          <h3 className="text-[18px] font-semibold text-[#2563EB] tracking-normal">
            {profile.title}
          </h3>

          {/* 2-Sentence Value Proposition: 16px, Regular, line-height 1.5 to 1.6 */}
          <p className="text-[16px] font-normal leading-[1.6] text-[#374151] pt-2">
            {profile.valueProposition}
          </p>
        </div>

        {/* Tech PM Core Focus Badges (LLM Workflows, Guardrails, Evals) */}
        <div className="pt-8 pb-10 flex flex-wrap gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E5E7EB] text-xs font-semibold text-[#111827]">
            <Cpu className="w-3.5 h-3.5 text-[#2563EB]" />
            Production LLM Workflows
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E5E7EB] text-xs font-semibold text-[#111827]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
            Deterministic Guardrails & Safety
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E5E7EB] text-xs font-semibold text-[#111827]">
            <Activity className="w-3.5 h-3.5 text-[#2563EB]" />
            Offline & Online Evals
          </span>
        </div>

        {/* Action Buttons: Tech Blue for primary focus */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollToSection('case-studies')}
            className="px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] text-white text-[15px] font-semibold shadow-xs transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>View Case Studies</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#2563EB] text-[#111827] hover:text-[#2563EB] text-[15px] font-medium shadow-xs transition-all flex items-center gap-2"
          >
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 text-[#2563EB]" />
          </a>
        </div>

      </div>
    </section>
  );
};
