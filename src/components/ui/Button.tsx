import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:pointer-events-none rounded-xl tracking-tight select-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 font-medium',
    md: 'text-sm px-4.5 py-2.5 gap-2 font-medium',
    lg: 'text-base px-6 py-3 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 shadow-sm hover:shadow transition-colors',
    glow:
      'bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 shadow-sm hover:shadow transition-colors',
    secondary:
      'bg-white text-sky-700 border border-sky-200 hover:bg-sky-50/80 hover:border-sky-300 shadow-sm transition-colors',
    outline:
      'bg-white text-slate-800 border border-slate-200 hover:border-sky-400 hover:text-sky-600 hover:bg-slate-50/60 shadow-sm transition-colors',
    ghost:
      'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors',
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0 transition-transform group-hover:translate-x-0.5">{rightIcon}</span>}
    </>
  );

  if (href) {
    if (isExternal || href.startsWith('http') || href.startsWith('mailto:') || href.endsWith('.pdf')) {
      return (
        <a
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          className={cn(combinedClasses, 'group')}
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={cn(combinedClasses, 'group')}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(combinedClasses, 'group')} {...props}>
      {content}
    </button>
  );
};
