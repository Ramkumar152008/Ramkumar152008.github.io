import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  action?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
  action,
}) => {
  return (
    <div
      className={cn(
        'mb-10 md:mb-14',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl',
        className
      )}
    >
      {eyebrow && (
        <div className={cn('flex items-center gap-2 mb-3', align === 'center' ? 'justify-center' : 'justify-start')}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-50 border border-sky-200/80 text-xs font-semibold uppercase tracking-wider text-sky-700">
            {eyebrow}
          </span>
        </div>
      )}

      <div className={cn('flex flex-col md:flex-row md:items-end justify-between gap-4', align === 'center' && 'md:flex-col md:items-center')}>
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2.5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
        {action && <div className="shrink-0 mt-2 md:mt-0">{action}</div>}
      </div>
    </div>
  );
};
