import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight } from 'lucide-react';
import { useProfile } from '../context/ProfileContext';

export const ContactClean: React.FC = () => {
  const { profile } = useProfile();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header (H2): 26px, Medium/Bold */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-[26px] font-semibold text-[#111827] tracking-tight mb-3">
            Contact & Connect
          </h2>
          <p className="text-[16px] font-normal leading-[1.6] text-[#4B5563]">
            Open to AI Product Management opportunities, technical advisory conversations, and high-impact discussions on shipping reliable LLM workflows.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* LinkedIn Direct Card */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#BFDBFE] p-7 shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center mb-4">
                <Linkedin className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#111827] mb-2">
                Connect on LinkedIn
              </h3>
              <p className="text-[16px] font-normal leading-[1.6] text-[#4B5563] mb-6">
                Direct message me for product discussions, case study walkthroughs, or recruitment opportunities.
              </p>
            </div>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] text-white text-[15px] font-semibold shadow-xs transition-all"
            >
              <span>Open LinkedIn Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Email Direct Card */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#BFDBFE] p-7 shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#111827] mb-2">
                Email Directly
              </h3>
              <p className="text-[16px] font-normal leading-[1.6] text-[#4B5563] mb-3">
                Send an email for in-depth inquiries, collaboration, or full case study deep-dives.
              </p>
              <p className="text-sm font-mono font-medium text-[#111827] bg-[#F9FAFB] p-2 rounded-lg border border-[#E5E7EB] mb-6 select-all break-all">
                {profile.email}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] text-white text-[15px] font-semibold shadow-xs transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
              <button
                onClick={copyEmail}
                className="px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#2563EB] text-[#111827] hover:text-[#2563EB] text-sm font-medium transition-colors flex items-center gap-2"
                title="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span className="text-xs font-semibold">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Footer Signature */}
        <div className="pt-10 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#4B5563]">
          <div>
            © {new Date().getFullYear()} {profile.name} — Built with strict Design Systems for AI Product Management.
          </div>
          <div className="flex items-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2563EB] transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2563EB] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
