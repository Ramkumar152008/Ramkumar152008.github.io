import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles, FileText } from 'lucide-react';
import { PERSONAL_CONFIG } from '../../data/config';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = PERSONAL_CONFIG.navItems;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200 px-4 sm:px-6 lg:px-8',
        isScrolled
          ? 'py-3 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm'
          : 'py-4 bg-white/90 backdrop-blur-sm border-b border-slate-100'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl p-1"
          aria-label={`${PERSONAL_CONFIG.name} - Home`}
        >
          {/* RK Logo box */}
          <div className="w-9 h-9 rounded-xl bg-white border-2 border-sky-400 group-hover:border-sky-500 group-hover:shadow-sm flex items-center justify-center transition-all">
            <span className="font-extrabold text-sm text-slate-900 tracking-tight">RK</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
              {PERSONAL_CONFIG.name}
            </span>
            <span className="text-[11px] font-semibold text-slate-500 hidden sm:block">
              {PERSONAL_CONFIG.role}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-50/90 border border-slate-200/80 px-2 py-1.5 rounded-full shadow-subtle">
          {navLinks.map((item) => {
            const isActive =
              (item.path === '/' && location.pathname === '/') ||
              (item.path !== '/' && location.pathname === item.path) ||
              (item.path === '/work' && location.pathname.startsWith('/projects'));
            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  'px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-150',
                  isActive
                    ? 'bg-sky-500 text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Resume button: Sky blue background with white text */}
          <Button
            href="/resume"
            size="sm"
            variant="primary"
            leftIcon={<FileText className="w-3.5 h-3.5" />}
            className="shadow-xs"
          >
            Resume / CV
          </Button>

          {/* Let's Connect button: White background with sky-blue border */}
          <Button
            href="/contact"
            size="sm"
            variant="secondary"
            rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            Let's Connect
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-xl animate-fade-in space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-medium text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              {PERSONAL_CONFIG.statusBadge}
            </span>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const isActive =
                (item.path === '/' && location.pathname === '/') ||
                (item.path !== '/' && location.pathname === item.path) ||
                (item.path === '/work' && location.pathname.startsWith('/projects'));
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={cn(
                    'px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-sky-50 text-sky-700 font-semibold border border-sky-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Button
              href="/resume"
              size="md"
              variant="primary"
              className="w-full"
              leftIcon={<FileText className="w-4 h-4" />}
            >
              Resume / CV
            </Button>
            <Button
              href="/contact"
              size="md"
              variant="secondary"
              className="w-full"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
