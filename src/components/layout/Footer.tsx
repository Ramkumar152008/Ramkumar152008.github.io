import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { PERSONAL_CONFIG } from '../../data/config';

export const Footer: React.FC = () => {
  const emailHref = PERSONAL_CONFIG.links.email.startsWith('mailto:') 
    ? PERSONAL_CONFIG.links.email 
    : `mailto:${PERSONAL_CONFIG.links.email}`;

  return (
    <footer className="border-t border-slate-200 bg-slate-50/90 pt-14 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-200">
          
          {/* Brand & Positioning */}
          <div className="md:col-span-6 space-y-3">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white border-2 border-sky-400 flex items-center justify-center shadow-xs">
                <span className="font-extrabold text-xs text-slate-900">RK</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900">
                {PERSONAL_CONFIG.name}
              </span>
            </Link>
            <p className="text-xs font-semibold text-sky-700">
              {PERSONAL_CONFIG.role} · {PERSONAL_CONFIG.positioning}
            </p>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed font-normal">
              {PERSONAL_CONFIG.supportingCopy}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-sky-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-sky-600 transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/journey" className="hover:text-sky-600 transition-colors">
                  Journey
                </Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-sky-600 transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
              Connect
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <a
                  href={PERSONAL_CONFIG.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-sky-600 transition-colors group"
                >
                  <Github className="w-4 h-4 text-slate-500 group-hover:text-sky-600" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_CONFIG.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-sky-600 transition-colors group"
                >
                  <Linkedin className="w-4 h-4 text-slate-500 group-hover:text-sky-600" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={emailHref}
                  className="inline-flex items-center gap-2 hover:text-sky-600 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-slate-500 group-hover:text-sky-600" />
                  <span>Email</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 {PERSONAL_CONFIG.name}. All rights reserved.</p>
          <p className="text-slate-400 font-medium">
            AI × Product × Software
          </p>
        </div>
      </div>
    </footer>
  );
};
