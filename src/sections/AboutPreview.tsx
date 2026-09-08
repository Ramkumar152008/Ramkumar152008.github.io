import React from 'react';
import { ArrowRight, Compass, Lightbulb, Bot, Code2, RefreshCw, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const AboutPreview: React.FC = () => {
  const corePillars = [
    { title: "Product Thinking", text: "Deconstructing messy operational friction into crisp user requirements and product roadmaps.", icon: Lightbulb },
    { title: "AI & Intelligent Systems", text: "Implementing LLM pipelines, autonomous agents, and document intelligence where AI creates genuine leverage.", icon: Bot },
    { title: "Software Engineering", text: "Building robust, maintainable web architectures with React, TypeScript, Python, and modern REST APIs.", icon: Code2 },
    { title: "Deterministic Guardrails", text: "Eliminating hallucinations through deterministic statutory engines and verifiable citations.", icon: Compass },
    { title: "Continuous Learning", text: "Rapid prototyping, testing with real domain constraints, gathering feedback, and relentless iteration.", icon: RefreshCw },
    { title: "User Experience", text: "Designing clean, distraction-free interfaces that empower users to make confident decisions.", icon: Sparkles },
  ];

  const focusAreas = [
    { label: "Product Management & AI PM", detail: "Scoping user value, trade-offs, and metrics" },
    { label: "Autonomous Agentic Workflows", detail: "Multi-agent coordination & tool orchestration" },
    { label: "Full-Stack System Architecture", detail: "FastAPI, React, TypeScript, and clean state" },
    { label: "Document & Spatial Intelligence", detail: "OCR, bounding-box evidence, and rule engines" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>ABOUT B. RAMKUMAR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Building at the intersection of <span className="text-sky-500">AI</span>, <span className="text-sky-500">Product</span> & <span className="text-sky-500">Software</span>.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              I am a second-year Computer Science student passionate about turning complex, ambiguous real-world problems into usable, high-impact digital products. Rather than building toys, I focus on domain challenges—like GovTech compliance and FinTech smart routing—where deterministic engineering meets applied intelligence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {corePillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-sky-300 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="p-1 rounded bg-sky-50 text-sky-600">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-900">{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <Button href="/about" variant="secondary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Read Full Philosophy
              </Button>
              <Button href="/resume" variant="primary" size="md">
                View Resume
              </Button>
            </div>
          </div>

          {/* Right Column: Focus & Learning Matrix */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-card space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Core Technical & Product Focus
                  </h3>
                </div>
                <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                  Undergrad Focus
                </span>
              </div>

              <div className="space-y-3">
                {focusAreas.map((area, i) => (
                  <div
                    key={area.label}
                    className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start justify-between gap-3 text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">{area.label}</span>
                      <span className="text-slate-500 font-normal">{area.detail}</span>
                    </div>
                    <span className="text-xs font-bold text-sky-600 shrink-0 mt-0.5">0{i + 1}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-200 text-xs text-sky-900 leading-relaxed font-medium">
                "I am an undergraduate builder who loves decomposing hard problems, validating product ideas with real users, and writing production-grade code."
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
