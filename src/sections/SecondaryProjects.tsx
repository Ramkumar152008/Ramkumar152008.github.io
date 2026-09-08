import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { SectionHeading } from '../components/ui/SectionHeading';

export const SecondaryProjects: React.FC = () => {
  const secondaryProjects = PROJECTS_DATA.filter((p) => !p.isFlagship);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="EXPLORATIONS & UTILITIES"
          title="More Things I've Built"
          subtitle="Foundational tools, student collaboration platforms, and regional community applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-card-hover transition-all duration-200 shadow-card flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{project.number}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2 group-hover:text-sky-600 transition-colors">
                  {project.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                  {project.shortDescription}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-50 text-xs font-medium text-slate-600 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                {project.caseStudy ? (
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-sky-600 hover:text-sky-800 transition-colors"
                  >
                    <span>View Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <span className="text-slate-500 font-medium text-xs">Utility Module</span>
                )}

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-50 text-slate-600 hover:text-sky-600 hover:bg-sky-50 border border-slate-200 transition-colors"
                    aria-label={`${project.name} GitHub Repository`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
