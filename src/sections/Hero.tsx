import React from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail, Sparkles, CheckCircle2, Cpu } from 'lucide-react';
import { PERSONAL_CONFIG } from '../data/config';
import { Button } from '../components/ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-20 md:pt-12 md:pb-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background Subtle Gradient & Grid Accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative">
        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: Positioning, Headline, Description, Tags, CTAs */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 z-10">
            
            {/* 1. Positioning Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 shadow-xs">
              <Sparkles className="w-4 h-4 text-sky-500 animate-pulse-subtle" />
              <span className="text-xs sm:text-sm font-semibold text-sky-700 tracking-tight">
                {PERSONAL_CONFIG.heroBadge}
              </span>
            </div>

            {/* 2. Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              I build <span className="text-sky-500 relative inline-block">
                products
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2 text-sky-300 -z-10"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,8 Q50,0 100,8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>,<br />
              not just projects.
            </h1>

            {/* 3. Hero Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-[650px]">
              {PERSONAL_CONFIG.supportingCopy}
            </p>

            {/* 4. Role / Identity Tags (Pills) */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {PERSONAL_CONFIG.heroRolePills.map((pill) => (
                <span
                  key={pill.label}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    pill.primary
                      ? 'bg-sky-50 text-sky-700 border border-sky-300 font-semibold shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-sky-200 hover:bg-slate-50'
                  }`}
                >
                  {pill.label}
                </span>
              ))}
            </div>

            {/* 5. CTAs and Social Channels */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                href="/work"
                size="lg"
                variant="primary"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shadow-sm hover:shadow-sky-glow"
              >
                Explore My Products
              </Button>

              <Button
                href="/resume"
                size="lg"
                variant="secondary"
                leftIcon={<FileText className="w-4 h-4 text-sky-600" />}
              >
                View Resume
              </Button>

              {/* Social Channels */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={PERSONAL_CONFIG.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-300 hover:bg-sky-50/50 shadow-xs transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_CONFIG.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-300 hover:bg-sky-50/50 shadow-xs transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_CONFIG.links.email ? `mailto:${PERSONAL_CONFIG.links.email}` : '/contact'}
                  className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-300 hover:bg-sky-50/50 shadow-xs transition-colors"
                  aria-label="Email Contact"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Real Personal Photo with Premium Composition */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            
            <div className="relative w-full max-w-[480px]">
              
              {/* Decorative Geometric Framing & Light Blue Backdrop */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-sky-100 via-sky-50 to-white rounded-3xl -rotate-1 border border-sky-200/70 -z-10 shadow-sm" />
              <div className="absolute -inset-1.5 sm:-inset-2 bg-white rounded-3xl rotate-1 border border-slate-200 -z-10" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-slate-200/90 shadow-xl group">
                <img
                  src={PERSONAL_CONFIG.heroPhoto}
                  alt={`${PERSONAL_CONFIG.name} — ${PERSONAL_CONFIG.role}`}
                  className="w-full h-auto object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-300"
                  loading="eager"
                  style={{ maxHeight: '560px' }}
                />

                {/* Subtle bottom gradient overlay for smooth contrast */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent pointer-events-none" />

                {/* Personal Brand Name Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200/80 shadow-md">
                    <p className="text-xs font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                      {PERSONAL_CONFIG.name}
                    </p>
                    <p className="text-[10px] font-medium text-slate-500">
                      {PERSONAL_CONFIG.role} · {PERSONAL_CONFIG.positioning}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 bg-slate-900/85 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-slate-700/60 text-[10px] text-white font-medium">
                    <Cpu className="w-3 h-3 text-sky-400" />
                    <span>Active Builder</span>
                  </div>
                </div>
              </div>

              {/* FLOATING CARD 1: Top Left / Top Right */}
              <div className="absolute -top-4 sm:-top-5 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md border border-sky-200 p-3 sm:p-3.5 rounded-2xl shadow-card-hover z-20 flex items-center gap-3 animate-fade-in">
                <div className="w-8 h-8 rounded-xl bg-sky-500 flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Focused on
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">
                    AI × Product × Software
                  </p>
                </div>
              </div>

              {/* FLOATING CARD 2: Bottom Right */}
              <div className="absolute -bottom-4 sm:-bottom-5 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md border border-slate-200/90 p-3 sm:p-3.5 rounded-2xl shadow-card-hover z-20 flex items-center gap-3 animate-fade-in">
                <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-xs">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Building solutions
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">
                    for real-world problems
                  </p>
                </div>
              </div>

              {/* Personal Brand Signature Accent (Point 9) */}
              <div className="hidden sm:flex items-center gap-2 absolute -bottom-10 left-4 z-10 select-none">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 text-[10px]">
                  Verified Signature:
                </span>
                <span className="font-signature text-2xl text-slate-700 tracking-wide transform -rotate-2">
                  {PERSONAL_CONFIG.name}
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
