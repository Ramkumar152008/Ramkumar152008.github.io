import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_CONFIG } from '../data/config';
import { Button } from '../components/ui/Button';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const emailRaw = PERSONAL_CONFIG.links.email.replace(/^mailto:/, '');
  const emailHref = PERSONAL_CONFIG.links.email.startsWith('mailto:')
    ? PERSONAL_CONFIG.links.email
    : `mailto:${PERSONAL_CONFIG.links.email}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200 relative overflow-hidden" id="contact">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-50/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-7">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-sky-500" />
          <span>LET'S CONNECT</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
          Let's build something <span className="text-sky-500">meaningful</span>.
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
          I'm actively exploring Product Management, AI Product Management, and Software Engineering opportunities. Whether you have a project idea, an open internship, or want to discuss AI systems, my inbox is always open.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <Button
            href={emailHref}
            size="lg"
            variant="primary"
            leftIcon={<Mail className="w-4 h-4" />}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="shadow-sm hover:shadow-sky-glow"
          >
            Let's Connect →
          </Button>

          <Button
            href={PERSONAL_CONFIG.links.linkedin}
            size="lg"
            variant="secondary"
            leftIcon={<Linkedin className="w-4 h-4 text-sky-600" />}
          >
            LinkedIn
          </Button>

          <Button
            href={PERSONAL_CONFIG.links.github}
            size="lg"
            variant="secondary"
            leftIcon={<Github className="w-4 h-4" />}
          >
            GitHub
          </Button>
        </div>

        {/* Copyable email card */}
        <div className="pt-2">
          <div className="inline-flex items-center gap-3 p-2.5 px-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 shadow-xs">
            <span className="text-slate-400 font-medium">Direct Email:</span>
            <span className="text-slate-900 font-bold tracking-tight">{emailRaw}</span>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded-lg bg-white hover:bg-sky-50 text-slate-600 hover:text-sky-600 transition-colors border border-slate-200"
              title="Copy email to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
