import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'outline' | 'glass';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  dot,
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-colors';

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-2',
  };

  const variantStyles = {
    default: 'bg-slate-100 text-slate-700 border border-slate-200/80',
    accent: 'bg-sky-50 text-sky-700 border border-sky-200 font-semibold',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200',
    outline: 'bg-white text-slate-600 border border-slate-200',
    glass: 'bg-white/80 backdrop-blur-md text-slate-800 border border-slate-200',
  };

  const dotColors = {
    default: 'bg-slate-400',
    accent: 'bg-sky-500 animate-pulse',
    success: 'bg-emerald-500 animate-pulse',
    warning: 'bg-amber-500',
    outline: 'bg-slate-400',
    glass: 'bg-sky-500',
  };

  return (
    <span className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', dotColors[variant])} />}
      <span>{children}</span>
    </span>
  );
};
