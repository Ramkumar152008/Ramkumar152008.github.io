import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../sections/Hero';
import { CaseStudiesClean } from '../sections/CaseStudiesClean';
import { AboutClean } from '../sections/AboutClean';
import { ContactClean } from '../sections/ContactClean';
import { PasswordModal } from '../components/profile/PasswordModal';
import { EditProfileModal } from '../components/profile/EditProfileModal';
import { useProfile } from '../context/ProfileContext';

export const HomePage: React.FC = () => {
  const { profile } = useProfile();

  React.useEffect(() => {
    document.title = `${profile.name} — ${profile.title}`;
  }, [profile.name, profile.title]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] flex flex-col selection:bg-[#2563EB] selection:text-white">
      {/* Clean Navigation: 'Home', 'About', 'Contact/LinkedIn' */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* Hero Section: Name, Title (AI Product Manager), 2-sentence value proposition */}
        <Hero />

        {/* Case Study Cards: Grid featuring 2-3 case study cards */}
        <CaseStudiesClean />

        {/* About Section */}
        <AboutClean />

        {/* Contact / LinkedIn Section */}
        <ContactClean />
      </main>

      {/* Administrator Authentication Modal */}
      <PasswordModal />

      {/* Profile Edit Modal / Drawer */}
      <EditProfileModal />
    </div>
  );
};

export default HomePage;
