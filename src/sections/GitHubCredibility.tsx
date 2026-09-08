import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { PERSONAL_CONFIG } from '../data/config';
import { Button } from '../components/ui/Button';

export const GitHubCredibility: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-card">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
              <Github className="w-4 h-4 text-sky-500" />
              <span>EVIDENCE & OPEN SOURCE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Built in Public.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Explore the code, experiments, and products behind my work. See commit histories, architecture choices, and reproducible repos.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              href={PERSONAL_CONFIG.links.github}
              size="lg"
              variant="primary"
              leftIcon={<Github className="w-4 h-4" />}
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
            >
              Explore GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
