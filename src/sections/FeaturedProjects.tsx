import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink, FileText, CheckCircle2, ShieldAlert, Sparkles, Bot } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

export const FeaturedProjects: React.FC = () => {
  const flagshipProjects = PROJECTS_DATA.filter((p) => p.isFlagship);

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="PORTFOLIO HIGHLIGHTS"
          title="Selected Products & Engineering Builds"
          subtitle="Things I've designed, built, and learned from."
          action={
            <Button href="/work" variant="secondary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
              View All Products
            </Button>
          }
        />

        <div className="space-y-12">
          {flagshipProjects.map((project, idx) => {
            const isFirst = idx === 0;
            return (
              <div
                key={project.id}
                className="rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-card-hover transition-all duration-200 shadow-card p-6 sm:p-8 lg:p-10 relative overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Column: Product Information & Story */}
                  <div className="lg:col-span-7 space-y-5">
                    {/* Header Row: Category & Status */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-xs font-bold text-sky-700 px-3 py-1 rounded-md bg-sky-50 border border-sky-200">
                        FLAGSHIP {project.number}
                      </span>
                      <span className="text-xs font-semibold text-slate-600 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                        {project.category}
                      </span>
                      <span className="text-xs font-medium text-emerald-700 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {project.status}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {project.name}
                      </h3>
                      <p className="mt-1.5 text-base sm:text-lg font-semibold text-sky-600 leading-snug">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Problem & Solution Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 mb-1">
                          <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                          <span>The Problem</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                          {project.domain || project.shortDescription}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-sky-50/50 border border-sky-200/80">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800 mb-1">
                          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                          <span>The Solution</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Role & Key Outcome */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 text-xs">
                        <span className="font-bold text-slate-500 uppercase tracking-wider block mb-1">
                          My Role
                        </span>
                        <p className="font-medium text-slate-800 leading-snug">
                          {project.role}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-xs">
                        <span className="font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                          Key Outcome & Impact
                        </span>
                        <p className="font-semibold text-emerald-900 leading-snug">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-500 block mb-2 font-bold">
                        Technology Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700 border border-slate-200/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Button
                        href={`/projects/${project.slug}`}
                        size="md"
                        variant="primary"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        View Product Case Study
                      </Button>

                      {project.demoUrl && (
                        <Button
                          href={project.demoUrl}
                          size="md"
                          variant="secondary"
                          rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                        >
                          Live Project
                        </Button>
                      )}

                      <Button
                        href={project.githubUrl}
                        size="md"
                        variant="secondary"
                        leftIcon={<Github className="w-4 h-4" />}
                      >
                        GitHub
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Visual Product Preview Card */}
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 shadow-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                          <span className="text-slate-900 font-bold">
                            {isFirst ? 'e-PRAMAAN Verification Engine' : 'PayPilot Agent Visualizer'}
                          </span>
                        </div>
                        <span className="text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded text-[11px] font-semibold">
                          Working Prototype
                        </span>
                      </div>

                      {isFirst ? (
                        /* e-PRAMAAN UI Mockup Fragment */
                        <div className="space-y-3 text-xs">
                          <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 shadow-xs">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-500">GSTIN Verification</span>
                              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Active & Verified
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-500">3-Year Turnover</span>
                              <span className="text-emerald-700 font-semibold">₹4.20 Cr &gt; ₹3.0 Cr (PASS)</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-500">OEM Authorization</span>
                              <span className="text-amber-700 font-semibold">Valid till Oct 2026</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed shadow-xs">
                            <div className="text-sky-700 font-bold mb-1 flex items-center gap-1">
                              <FileText className="w-3.5 h-3.5 text-sky-600" />
                              <span>Audit-Defensible Citation</span>
                            </div>
                            "Extracted from Page 14, Section 3.2 of Bidder Submission Dossier. Bounding coordinates verified."
                          </div>
                        </div>
                      ) : (
                        /* PayPilot UI Mockup Fragment */
                        <div className="space-y-3 text-xs">
                          <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 shadow-xs">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-500">Telemetry Status</span>
                              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Live Streaming
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-500">Gateway Cascade</span>
                              <span className="text-sky-700 font-semibold">Dynamic Smart Route</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-500">Conversion Recovery</span>
                              <span className="text-emerald-700 font-semibold">+18.4% (Simulated)</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed shadow-xs">
                            <div className="text-sky-700 font-bold mb-1 flex items-center gap-1">
                              <Bot className="w-3.5 h-3.5 text-sky-600" />
                              <span>Agent Telemetry Insight</span>
                            </div>
                            "Detected OTP latency spike on Gateway A. Auto-switching low-value transactions to Gateway B."
                          </div>
                        </div>
                      )}

                      <div className="pt-3 mt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                        <span>{project.metricsPlaceholder}</span>
                      </div>
                    </div>

                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-800 py-1.5 transition-colors group/link"
                    >
                      <span>Read Deep-Dive Product Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
