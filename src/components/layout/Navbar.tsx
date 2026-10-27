import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Lock, Unlock, Edit3 } from 'lucide-react';
import { useProfile } from '../../context/ProfileContext';

export const Navbar: React.FC = () => {
  const { profile, isUnlocked, openEditModal, openPasswordModal, lockEditor } = useProfile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 px-6 sm:px-8 ${
        isScrolled
          ? 'py-3.5 bg-[#F9FAFB]/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-xs'
          : 'py-5 bg-[#F9FAFB]/90 backdrop-blur-xs border-b border-[#E5E7EB]/70'
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg"
          aria-label={`${profile.name} - Home`}
        >
          <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center font-bold text-sm text-[#111827] group-hover:border-[#2563EB] group-hover:text-[#2563EB] transition-colors">
            RK
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[15px] sm:text-[16px] text-[#111827] tracking-tight group-hover:text-[#2563EB] transition-colors leading-tight">
              {profile.name}
            </span>
            <span className="text-[12px] font-medium text-[#4B5563] leading-tight">
              {profile.title}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Minimal: Just 'Home', 'About', 'Contact/LinkedIn' */}
        <nav className="hidden md:flex items-center gap-7">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-[15px] font-medium text-[#111827] hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className="text-[15px] font-medium text-[#4B5563] hover:text-[#111827] transition-colors cursor-pointer"
          >
            About
          </button>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-medium text-[#4B5563] hover:text-[#2563EB] transition-colors inline-flex items-center gap-1"
          >
            <span>Contact/LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB]" />
          </a>
        </nav>

        {/* Action button: Edit Profile (password protected) */}
        <div className="hidden md:flex items-center gap-3">
          {isUnlocked ? (
            <div className="flex items-center gap-2">
              <button
                onClick={openEditModal}
                className="px-3.5 py-1.5 text-xs font-semibold text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] hover:bg-[#DBEAFE] rounded-lg transition-colors flex items-center gap-1.5"
                title="Open Profile Editor"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>
              <button
                onClick={lockEditor}
                className="p-1.5 text-[#4B5563] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Lock Editor"
              >
                <Lock className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={openPasswordModal}
              className="px-3 py-1.5 text-xs font-medium text-[#4B5563] hover:text-[#111827] bg-white border border-[#E5E7EB] hover:border-[#D1D5DB] rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
              title="Edit Profile (Requires password)"
            >
              <Lock className="w-3.5 h-3.5 text-[#6B7280]" />
              <span>Edit Profile</span>
            </button>
          )}
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => (isUnlocked ? openEditModal() : openPasswordModal())}
            className="p-2 text-[#4B5563] hover:text-[#111827] bg-white border border-[#E5E7EB] rounded-lg"
            title="Edit Profile"
          >
            {isUnlocked ? <Unlock className="w-4 h-4 text-[#2563EB]" /> : <Lock className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#111827] hover:bg-white rounded-lg border border-[#E5E7EB] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-lg animate-fade-in space-y-3">
          <nav className="flex flex-col space-y-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left px-3 py-2 text-sm font-semibold text-[#111827] hover:bg-[#F9FAFB] rounded-lg transition-colors"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="text-left px-3 py-2 text-sm font-medium text-[#4B5563] hover:text-[#111827] hover:bg-[#F9FAFB] rounded-lg transition-colors"
            >
              About
            </button>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-medium text-[#2563EB] hover:bg-[#EFF6FF] rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Contact/LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-[#2563EB]" />
            </a>
          </nav>

          <div className="pt-3 border-t border-[#E5E7EB]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (isUnlocked) {
                  openEditModal();
                } else {
                  openPasswordModal();
                }
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-[#111827] bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#2563EB] rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              {isUnlocked ? <Unlock className="w-3.5 h-3.5 text-[#2563EB]" /> : <Lock className="w-3.5 h-3.5 text-[#4B5563]" />}
              <span>{isUnlocked ? 'Edit Profile Details' : 'Edit Profile (Passkey Protected)'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
