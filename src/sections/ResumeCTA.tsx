import React from 'react';
import { FileText, Download, ArrowRight, CheckCircle2, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_CONFIG } from '../data/config';
import { Button } from '../components/ui/Button';

export const ResumeCTA: React.FC = () => {
  return (
    <section id="resume" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-shadow relative overflow-hidden">
          
          {/* Subtle decorative background glow */}
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-sky-50 rounded-full blur-2xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                {/* Photo Thumbnail */}
                <div className="relative shrink-0">
                  <img
                    src={PERSONAL_CONFIG.heroPhoto}
                    alt={PERSONAL_CONFIG.name}
                    className="w-12 h-12 rounded-xl object-cover border border-sky-200 shadow-xs"
                  />
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-sky-50 border border-sky-200 text-[11px] font-bold text-sky-700">
                    <Sparkles className="w-3 h-3 text-sky-500" />
                    <span>CURRICULUM VITAE & CREDENTIALS</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                    {PERSONAL_CONFIG.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base font-semibold text-sky-600 flex items-center gap-2 flex-wrap">
                <span>{PERSONAL_CONFIG.role}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-700 font-medium">{PERSONAL_CONFIG.currentYear}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 font-normal">{PERSONAL_CONFIG.education.timeline}</span>
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
                Looking for a structured overview of technical skills, undergraduate coursework, verified project links, and hackathon milestones? Explore my online interactive resume or generate a print-ready PDF.
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-600 pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  B.E. Computer Science and Engineering
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  AI & Product Deep-Dive Case Studies
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  Open to Internships & AI PM Roles
                </span>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href={PERSONAL_CONFIG.links.resumePdfUrl}
                download={PERSONAL_CONFIG.links.resumeDownloadName}
                className="inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl tracking-tight select-none cursor-pointer text-base px-6 py-3 gap-2.5 bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 shadow-sm hover:shadow w-full sm:w-auto lg:w-full"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume PDF</span>
              </a>

              <Button
                href="/resume"
                size="lg"
                variant="secondary"
                leftIcon={<FileText className="w-4 h-4 text-sky-600" />}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto lg:w-full"
              >
                View Online Resume
              </Button>

              <Button
                href="/contact"
                size="lg"
                variant="secondary"
                leftIcon={<Mail className="w-4 h-4 text-sky-600" />}
                className="w-full sm:w-auto lg:w-full bg-slate-50 hover:bg-sky-50/50"
              >
                Contact Me
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
