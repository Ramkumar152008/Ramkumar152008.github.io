import React from 'react';
import { cn } from '../../lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'surface' | 'glass' | 'interactive';
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  ...props
}) => {
  const baseStyles = 'rounded-2xl border transition-all duration-200';

  const variantStyles = {
    default: 'bg-white border-slate-200 text-slate-900 shadow-card',
    surface: 'bg-slate-50 border-slate-200 text-slate-900',
    glass: 'bg-white/90 backdrop-blur-md border-slate-200 text-slate-900 shadow-card',
    interactive:
      'bg-white border-slate-200 hover:border-sky-300 hover:shadow-card-hover hover:-translate-y-0.5 text-slate-900 cursor-pointer shadow-card group',
  };

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
