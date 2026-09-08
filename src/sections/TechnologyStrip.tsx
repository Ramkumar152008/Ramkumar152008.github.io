import React from 'react';
import { PERSONAL_CONFIG } from '../data/config';
import {
  Code2,
  Layers,
  FileCode2,
  Server,
  Zap,
  Palette,
  Sparkles,
  FileSearch,
  Figma,
  GitBranch,
  Terminal,
} from 'lucide-react';

export const TechnologyStrip: React.FC = () => {
  const techIcons: Record<string, React.ReactNode> = {
    Python: <Code2 className="w-4 h-4 text-sky-600" />,
    React: <Layers className="w-4 h-4 text-sky-500" />,
    TypeScript: <FileCode2 className="w-4 h-4 text-blue-600" />,
    'Node.js': <Server className="w-4 h-4 text-emerald-600" />,
    FastAPI: <Zap className="w-4 h-4 text-teal-600" />,
    'Tailwind CSS': <Palette className="w-4 h-4 text-cyan-500" />,
    'OpenAI & LLMs': <Sparkles className="w-4 h-4 text-amber-500" />,
    'Document Intelligence': <FileSearch className="w-4 h-4 text-indigo-500" />,
    Figma: <Figma className="w-4 h-4 text-purple-500" />,
    'Git & GitHub': <GitBranch className="w-4 h-4 text-slate-700" />,
  };

  return (
    <section className="py-8 sm:py-10 bg-slate-50/80 border-y border-slate-200/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
            TECHNOLOGIES I WORK WITH
          </p>
        </div>

        {/* Tech Badges Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {PERSONAL_CONFIG.technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-sky-300 hover:shadow-card-hover transition-all duration-150 group"
            >
              <div className="p-1 rounded-md bg-slate-50 group-hover:bg-sky-50 transition-colors">
                {techIcons[tech.name] || <Terminal className="w-4 h-4 text-slate-600" />}
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
