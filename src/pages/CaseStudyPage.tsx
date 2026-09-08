import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { PROJECTS_DATA } from '../data/projects';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProductFlowVisual } from '../components/visual/ProductFlowVisual';
import { ArchitectureDiagram } from '../components/visual/ArchitectureDiagram';
import { AIWorkflowVisual } from '../components/visual/AIWorkflowVisual';
import { 
  ArrowLeft, 
  ArrowRight, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Scale
} from 'lucide-react';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project || !project.caseStudy) {
    return <Navigate to="/work" replace />;
  }

  const cs = project.caseStudy;
  const currentIdx = PROJECTS_DATA.findIndex((p) => p.slug === slug);
  const prevProject = currentIdx > 0 ? PROJECTS_DATA[currentIdx - 1] : null;
  const nextProject = currentIdx < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[currentIdx + 1] : null;

  return (
    <PageContainer
      title={`${project.name} — Case Study | B. Ramkumar`}
      description={project.shortDescription}
    >
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Link & Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Products</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">{project.category}</span>
          </div>
        </div>

        {/* Case Study Header */}
        <header className="space-y-6 pb-12 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-md border border-sky-200">
              PRODUCT CASE STUDY {project.number}
            </span>
            {project.isFlagship && (
              <Badge variant="accent" size="sm" dot>
                Flagship Build
              </Badge>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            {project.name}
          </h1>

          <p className="text-lg sm:text-xl font-semibold text-sky-600 leading-snug">
            {project.tagline}
          </p>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl font-normal">
            {cs.overview}
          </p>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1 font-bold">
                Domain
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-900">{project.domain}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1 font-bold">
                Role / Contribution
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-900">{project.myContribution}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1 font-bold">
                Core Stack
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-900">{project.technologies.slice(0, 3).join(', ')}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button href={project.githubUrl} variant="secondary" size="sm" leftIcon={<Github className="w-4 h-4" />}>
              View Repository
            </Button>
            {project.demoUrl && (
              <Button href={project.demoUrl} variant="outline" size="sm" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                Live Prototype
              </Button>
            )}
          </div>
        </header>

        {/* 20-Step PM Story Breakdown */}
        <div className="py-12 space-y-16">
          {/* 01 & 02: Problem & Context */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
              <span>02. THE PROBLEM & CONTEXT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why this problem matters
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {cs.problem}
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-sky-500 text-xs sm:text-sm text-slate-700">
              <strong>Context: </strong> {cs.context}
            </div>
          </section>

          {/* 03: Target Users */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
              <span>03. TARGET USERS & PERSONAS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Who are we solving this for?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cs.targetUsers.map((user) => (
                <div key={user.role} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-card">
                  <h4 className="text-sm font-bold text-slate-900">{user.role}</h4>
                  <p className="text-xs text-slate-600">{user.description}</p>
                  <div className="pt-2 border-t border-slate-100 text-xs text-rose-600 font-medium">
                    <strong>Pain Point:</strong> {user.painPoint}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 04 & 05: Pain Points & Research */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
              <span>05 & 06. USER RESEARCH & DISCOVERY INSIGHTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Uncovering operational bottlenecks
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Methodology: {cs.research.methodology}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-card">
                <h4 className="text-xs uppercase tracking-wider text-rose-600 font-bold">
                  Documented Pain Points
                </h4>
                <ul className="space-y-2">
                  {cs.painPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-card">
                <h4 className="text-xs uppercase tracking-wider text-sky-700 font-bold">
                  Key Research Insights
                </h4>
                <ul className="space-y-2">
                  {cs.research.keyInsights.map((insight, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <span className="text-sky-500 font-bold">✓</span>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 07 & 08: Opportunity & Product Hypothesis */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
              <span>08. PRODUCT HYPOTHESIS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Framing the Solution
            </h3>
            <blockquote className="p-4 rounded-xl bg-white border-l-4 border-sky-500 text-sm sm:text-base font-semibold text-sky-900 leading-relaxed italic shadow-xs">
              "{cs.hypothesis}"
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-600">
              <strong>Opportunity: </strong> {cs.opportunity}
            </p>
          </section>

          {/* 09 & 10: Solution & User Journey */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
              <span>10. END-TO-END PRODUCT FLOW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              User Journey & Core Workflow
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 font-normal">
              {cs.solution}
            </p>
            <ProductFlowVisual steps={cs.userJourney} />
          </section>

          {/* 11: Key Features */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
              <span>11. KEY PRODUCT FEATURES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Engineered for precision and clarity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cs.features.map((feat) => (
                <div key={feat.title} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-card">
                  <h4 className="text-base font-bold text-slate-900">{feat.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.description}</p>
                  {feat.impact && (
                    <div className="pt-2 text-xs font-semibold text-emerald-700">
                      <strong>Impact:</strong> {feat.impact}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 12: Product Decisions & Trade-offs (Crucial for PM role!) */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
              <span>12. PRODUCT DECISIONS & TRADE-OFFS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              What I chose to build — and what I chose NOT to build
            </h2>

            <div className="space-y-4">
              {cs.productDecisions.map((dec) => (
                <div key={dec.decision} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-card">
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>Decision: {dec.decision}</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1 font-bold">
                        Rationale (Why)
                      </span>
                      <p className="text-slate-700">{dec.why}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1 font-bold">
                        Alternative Considered
                      </span>
                      <p className="text-slate-700">{dec.alternativeConsidered}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1 font-bold">
                        Conscious Trade-off
                      </span>
                      <p className="text-slate-700">{dec.tradeoff}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 13: AI Architecture & Pipeline */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
              <span>13. AI ARCHITECTURE & GUARDRAILS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why AI is actually useful here
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {cs.aiArchitecture.whyAI}
            </p>

            <AIWorkflowVisual />

            <div className="mt-6">
              <ArchitectureDiagram
                title={`${project.name} AI Pipeline`}
                components={cs.aiArchitecture.components}
                type="ai"
              />
            </div>
          </section>

          {/* 14: Technical Architecture */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
              <span>14. TECHNICAL ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              System Engineering & Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-sky-700 font-bold block mb-1">Frontend UI</span>
                <p className="text-slate-700">{cs.technicalArchitecture.frontend}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-sky-700 font-bold block mb-1">Backend & Services</span>
                <p className="text-slate-700">{cs.technicalArchitecture.backendAndServices}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-sky-700 font-bold block mb-1">Data & Storage</span>
                <p className="text-slate-700">{cs.technicalArchitecture.dataAndStorage}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-sky-700 font-bold block mb-1">Deployment</span>
                <p className="text-slate-700">{cs.technicalArchitecture.deployment}</p>
              </div>
            </div>
          </section>

          {/* 16 & 17: Challenges & Iterations */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
              <span>17. PRODUCT ITERATIONS & EVOLUTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              What changed through building and testing
            </h2>

            <div className="space-y-4">
              {cs.iterations.map((iter) => (
                <div key={iter.version} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs sm:text-sm shadow-card">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200">{iter.version}</span>
                    <span className="text-xs text-slate-500 font-medium">Trigger: {iter.trigger}</span>
                  </div>
                  <p className="text-slate-900"><strong>Change Implemented:</strong> {iter.change}</p>
                  <p className="text-emerald-700 font-medium text-xs"><strong>Learning:</strong> {iter.learning}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 18 & 19: Outcome & Learnings */}
          <section className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-sky-700 mb-2">
                <span>19. PRODUCT BUILDER LEARNINGS</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                What I learned building {project.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {cs.outcome}
              </p>
            </div>

            <div className="space-y-2.5">
              {cs.learnings.map((learn, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{learn}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 20: Future Roadmap */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
              <span>20. FUTURE ROADMAP</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Where this product goes next
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cs.futureRoadmap.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1 shadow-card">
                  <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">Phase 0{idx + 1}</span>
                  <p className="pt-1">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Project Navigation Footer */}
        <div className="pt-12 mt-12 border-t border-slate-200 flex items-center justify-between">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: {prevProject.name}</span>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors"
            >
              <span>Next: {nextProject.name}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>
      </article>
    </PageContainer>
  );
};
