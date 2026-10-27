import React from 'react';
import { ShieldCheck, Cpu, Target, FileCheck } from 'lucide-react';
import { useProfile } from '../context/ProfileContext';

export const AboutClean: React.FC = () => {
  const { profile } = useProfile();

  const competencies = [
    {
      title: "LLM Workflows & Orchestration",
      description: "Architecting multi-stage agent workflows, prompt chaining, and latency-optimized RAG pipelines that bridge raw model capability with reliable business tasks.",
      icon: Cpu,
    },
    {
      title: "Deterministic Guardrails & Safety",
      description: "Implementing strict JSON schemas, regex constraints, and source coordinate attribution to ensure zero statutory and financial hallucinations.",
      icon: ShieldCheck,
    },
    {
      title: "Quantitative Eval Harnesses",
      description: "Designing offline benchmark datasets, LLM-as-a-judge scoring protocols, and synthetic stress testing to measure regression before production releases.",
      icon: FileCheck,
    },
    {
      title: "Product Strategy & ROI",
      description: "Translating ambiguous domain friction into prioritized roadmaps, balancing token unit economics, and maximizing human-in-the-loop efficiency.",
      icon: Target,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header (H2): 26px, Medium/Bold */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-[26px] font-semibold text-[#111827] tracking-tight mb-3">
            About Me
          </h2>
          <p className="text-[16px] font-normal leading-[1.6] text-[#4B5563]">
            {profile.aboutTitle}
          </p>
        </div>

        {/* Narrative & Philosophy */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8 shadow-xs space-y-4">
            <h3 className="text-[18px] font-semibold text-[#111827]">
              Product Philosophy
            </h3>
            <p className="text-[16px] font-normal leading-[1.6] text-[#374151]">
              {profile.aboutParagraph1}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8 shadow-xs space-y-4">
            <h3 className="text-[18px] font-semibold text-[#111827]">
              Evaluation & Governance Over Vibes
            </h3>
            <p className="text-[16px] font-normal leading-[1.6] text-[#374151]">
              {profile.aboutParagraph2}
            </p>
          </div>
        </div>

        {/* Competency Grid */}
        <div className="space-y-6">
          <h3 className="text-[18px] font-semibold text-[#111827]">
            Core AI Product Management Pillars
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {competencies.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs hover:border-[#BFDBFE] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <h4 className="text-[16px] font-semibold text-[#111827] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[15px] font-normal leading-[1.6] text-[#4B5563]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
