import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { PERSONAL_CONFIG } from '../data/config';
import { Button } from '../components/ui/Button';
import { 
  Compass, 
  Lightbulb, 
  Bot, 
  RefreshCw, 
  GraduationCap, 
  Sparkles, 
  ArrowRight,
  FileText,
  Mail,
  Github,
  Linkedin,
  Cpu
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const principles = [
    {
      title: "Problems Over Features",
      description: "Features are cheap; understanding what hurts the user and why existing workarounds fail is where real product insight begins.",
    },
    {
      title: "Deterministic AI Guardrails",
      description: "AI shouldn't be a black box making risky guesses in high-stakes domains. Pairing semantic AI extraction with strict deterministic validation ensures reliability.",
    },
    {
      title: "Building to Learn",
      description: "The fastest way to test a hypothesis is to ship a working prototype, put it in front of people, and learn from real friction points.",
    },
  ];

  return (
    <PageContainer
      title={`About & Philosophy — ${PERSONAL_CONFIG.name}`}
      description={`Computer Science student building AI-powered digital products and exploring Product Management.`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-14">
        
        {/* Profile Spotlight Header with Photo */}
        <header className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Portrait Photo with Badges */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-sky-200 bg-sky-50 shadow-lg relative">
                  <img
                    src={PERSONAL_CONFIG.heroPhoto}
                    alt={PERSONAL_CONFIG.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-white px-3 py-0.5 rounded-full border border-sky-200 shadow-xs text-xs font-bold text-sky-700 flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {PERSONAL_CONFIG.name}
                </div>
              </div>

              <div className="mt-5 space-y-1">
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">{PERSONAL_CONFIG.role}</p>
                <p className="text-xs text-slate-500 font-medium">{PERSONAL_CONFIG.education.currentYear}</p>
              </div>

              {/* Quick Socials */}
              <div className="flex items-center gap-2 mt-3 text-slate-600">
                <a href={PERSONAL_CONFIG.links.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-50 border border-slate-200 hover:text-sky-600 hover:border-sky-300 transition-colors" aria-label="GitHub">
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a href={PERSONAL_CONFIG.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-50 border border-slate-200 hover:text-sky-600 hover:border-sky-300 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a href={`mailto:${PERSONAL_CONFIG.links.email}`} className="p-2 rounded-lg bg-slate-50 border border-slate-200 hover:text-sky-600 hover:border-sky-300 transition-colors" aria-label="Email">
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Story & Mindset */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700">
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                <span>ABOUT & PRODUCT PHILOSOPHY</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Building at the intersection of <span className="text-sky-500">AI</span>, <span className="text-sky-500">Product</span> & <span className="text-sky-500">Software</span>.
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                I am a second-year Computer Science and Engineering undergraduate passionate about turning complex, ambiguous real-world problems into usable, high-impact digital products.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border-l-4 border-sky-500 text-xs sm:text-sm text-slate-700 leading-relaxed">
                "I am a student. But I build. I am learning. But I experiment. I am technical. But I also think deeply about users, product trade-offs, and metrics."
              </div>

              <div className="pt-2 flex flex-wrap gap-2.5">
                <Button href="/resume" variant="primary" size="sm" leftIcon={<FileText className="w-3.5 h-3.5" />}>
                  View Full Resume
                </Button>
                <Button href="/work" variant="secondary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Explore Products
                </Button>
              </div>
            </div>

          </div>
        </header>

        {/* What Drives My Work */}
        <section className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Cpu className="w-5 h-5 text-sky-600" />
            <span>What Drives My Work</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-card hover:border-sky-300 transition-colors">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600">
                  <Compass className="w-4 h-4" />
                </div>
                <span>Finding Real-World Problems</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Digging into manual government procurement bottlenecks, merchant checkout drop-offs, and student study friction.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-card hover:border-sky-300 transition-colors">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <span>Understanding Users & Heuristics</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Observing how people currently solve problems with spreadsheets, notes, and emails to design natural workflows.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-card hover:border-sky-300 transition-colors">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600">
                  <Bot className="w-4 h-4" />
                </div>
                <span>Exploring Practical AI & Agents</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Integrating LLMs, document extraction, and autonomous agent loops where AI genuinely creates a 10x improvement.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-card hover:border-sky-300 transition-colors">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <span>Learning Through Iteration</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Treating every prototype as a learning experiment; analyzing what failed and refining architecture and UX.
              </p>
            </div>
          </div>
        </section>

        {/* Product Principles */}
        <section className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            How I Think About Products
          </h2>

          <div className="space-y-3.5">
            {principles.map((principle, idx) => (
              <div key={principle.title} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5 shadow-card">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">0{idx + 1}</span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">{principle.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Current Focus */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Education & Academic Background</h3>
            </div>
            <span className="text-xs font-semibold text-slate-500">{PERSONAL_CONFIG.education.timeline}</span>
          </div>

          <p className="text-sm font-bold text-slate-900">
            {PERSONAL_CONFIG.education.degree} — {PERSONAL_CONFIG.education.currentYear}
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Studying core algorithms, system architecture, database theory, and modern software engineering while building independent AI products and participating in hackathons.
          </p>

          <div className="pt-2">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-2">
              Relevant Coursework:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {PERSONAL_CONFIG.education.coursework.map((course) => (
                <span key={course} className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            <Button href="/resume" variant="primary" size="sm" leftIcon={<FileText className="w-3.5 h-3.5" />}>
              Open Curriculum Vitae
            </Button>
            <Button href="/contact" variant="secondary" size="sm">
              Get in Touch
            </Button>
          </div>
        </section>
      </div>
    </PageContainer>
  );
};
