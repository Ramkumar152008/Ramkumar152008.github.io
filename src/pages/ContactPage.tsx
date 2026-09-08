import React, { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PERSONAL_CONFIG } from '../data/config';
import { Button } from '../components/ui/Button';
import { Mail, Linkedin, Github, Copy, Check, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
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
    <PageContainer
      title="Contact & Connect — B. Ramkumar"
      description="Connect with B. Ramkumar regarding Product Management, AI building, internships, or collaborations."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <SectionHeading
          eyebrow="LET'S TALK"
          title="Get in Touch"
          subtitle="Whether you have an internship opportunity, a project idea, or want to discuss AI product architecture, I'd love to hear from you."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Direct Communication Channels */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-card">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Email Direct</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Send an email directly. I respond quickly to inquiries about product management, engineering internships, and collaborations.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-900 font-bold">{emailRaw}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white hover:bg-sky-50 text-slate-600 hover:text-sky-600 transition-colors border border-slate-200 shadow-xs"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <Button
                href={emailHref}
                variant="primary"
                size="md"
                className="w-full"
                rightIcon={<Send className="w-4 h-4" />}
              >
                Send Direct Email
              </Button>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-card">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600">
                  <Linkedin className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Professional Network</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Connect on LinkedIn for professional updates, project milestones, and network chats.
              </p>

              <Button
                href={PERSONAL_CONFIG.links.linkedin}
                variant="secondary"
                size="md"
                className="w-full"
                leftIcon={<Linkedin className="w-4 h-4" />}
              >
                Connect on LinkedIn
              </Button>
            </div>
          </div>

          {/* Right Column: Code & Availability */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-card">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600">
                  <Github className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900">GitHub Profile</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Explore open source repositories, architecture blueprints, and code commits.
              </p>

              <Button
                href={PERSONAL_CONFIG.links.github}
                variant="outline"
                size="md"
                className="w-full"
                leftIcon={<Github className="w-4 h-4" />}
              >
                View GitHub Repos
              </Button>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-3 shadow-card">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-800">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>CURRENT AVAILABILITY</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Open to Summer & Fall 2026 Internships
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Excited about Product Management, AI Product Management, and Full-Stack Engineering roles. Located in India, open to remote opportunities and relocation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
