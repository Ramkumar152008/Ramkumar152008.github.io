import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SEOHead } from '../common/SEOHead';
import { PasswordModal } from '../profile/PasswordModal';
import { EditProfileModal } from '../profile/EditProfileModal';

export interface PageContainerProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  title,
  description,
  className,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#111827] selection:bg-[#2563EB] selection:text-white relative overflow-x-hidden font-sans">
      <SEOHead title={title} description={description} />
      
      {/* Subtle soft ambient background accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-[550px] h-[550px] rounded-full bg-blue-100/20 blur-[130px]" />
        <div className="absolute top-[45%] left-[-5%] w-[450px] h-[450px] rounded-full bg-blue-50/30 blur-[120px]" />
      </div>

      <Navbar />

      <main className={`flex-1 pt-20 sm:pt-24 pb-16 relative z-10 ${className || ''}`}>
        {children}
      </main>

      <Footer />

      {/* Profile Modals */}
      <PasswordModal />
      <EditProfileModal />
    </div>
  );
};
