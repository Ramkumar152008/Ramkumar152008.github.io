import React, { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PROJECTS_DATA } from '../data/projects';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ArrowRight, Github, Filter, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export const WorkPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'flagship', label: 'Flagship Products' },
    { id: 'ai', label: 'AI & Intelligence' },
    { id: 'community', label: 'Community & EdTech' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'flagship') return project.isFlagship;
    if (filter === 'ai') return project.tags.includes('AI') || project.tags.includes('AI Agents');
    if (filter === 'community') return project.tags.includes('Community') || project.tags.includes('EdTech');
    return true;
  });

  return (
    <PageContainer
      title="Selected Products & Case Studies — B. Ramkumar"
      description="Explore product case studies, AI architectures, and functional prototypes built by B. Ramkumar."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SectionHeading
          eyebrow="PORTFOLIO WORK"
          title="Products & Case Studies"
          subtitle="Real problems identified, framed into product opportunities, and engineered into working software."
        />

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 border-b border-slate-200 mb-10 scrollbar-none">
          <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={cn(
                'px-4 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 border',
                filter === cat.id
                  ? 'bg-sky-500 text-white border-sky-500 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={cn(
                'rounded-2xl border transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between shadow-card group',
                project.isFlagship
                  ? 'bg-white border-slate-200 hover:border-sky-300 hover:shadow-card-hover lg:col-span-2'
                  : 'bg-white border-slate-200 hover:border-sky-300 hover:shadow-card-hover'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-sky-700 px-3 py-1 rounded-md bg-sky-50 border border-sky-200">
                      {project.number}
                    </span>
                    {project.isFlagship && (
                      <Badge variant="accent" size="sm" dot>
                        Flagship Product
                      </Badge>
                    )}
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-500">{project.category}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-1.5">
                  {project.name}
                </h3>

                <p className="text-sm sm:text-base font-semibold text-sky-600 mb-3">
                  {project.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                  {project.shortDescription}
                </p>

                {/* Key Impact callout if present */}
                {project.impact && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-5 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Impact: </strong>{project.impact}</span>
                  </div>
                )}

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-50 text-xs font-medium text-slate-600 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {project.caseStudy ? (
                    <Button
                      href={`/projects/${project.slug}`}
                      size="sm"
                      variant="primary"
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      Read Case Study
                    </Button>
                  ) : (
                    <span className="text-xs font-medium text-slate-500">Experimental Tool</span>
                  )}

                  <Button
                    href={project.githubUrl}
                    size="sm"
                    variant="secondary"
                    leftIcon={<Github className="w-3.5 h-3.5" />}
                  >
                    GitHub
                  </Button>
                </div>

                <span className="text-xs font-medium text-slate-400">
                  {project.domain}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};
