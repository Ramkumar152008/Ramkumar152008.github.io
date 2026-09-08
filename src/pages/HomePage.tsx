import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Hero } from '../sections/Hero';
import { TechnologyStrip } from '../sections/TechnologyStrip';
import { RecruiterSnapshot } from '../sections/RecruiterSnapshot';
import { FeaturedProjects } from '../sections/FeaturedProjects';
import { HowIBuild } from '../sections/HowIBuild';
import { WhatIBring } from '../sections/WhatIBring';
import { SecondaryProjects } from '../sections/SecondaryProjects';
import { ProductJourney } from '../sections/ProductJourney';
import { SkillsCapabilities } from '../sections/SkillsCapabilities';
import { GitHubCredibility } from '../sections/GitHubCredibility';
import { ResumeCTA } from '../sections/ResumeCTA';
import { AboutPreview } from '../sections/AboutPreview';
import { Achievements } from '../sections/Achievements';
import { ContactSection } from '../sections/ContactSection';
import { PERSONAL_CONFIG } from '../data/config';

export const HomePage: React.FC = () => {
  return (
    <PageContainer
      title={`${PERSONAL_CONFIG.name} — ${PERSONAL_CONFIG.role}`}
      description={PERSONAL_CONFIG.supportingCopy}
    >
      <Hero />
      <TechnologyStrip />
      <RecruiterSnapshot />
      <FeaturedProjects />
      <HowIBuild />
      <WhatIBring />
      <SecondaryProjects />
      <ProductJourney />
      <SkillsCapabilities />
      <GitHubCredibility />
      <ResumeCTA />
      <AboutPreview />
      <Achievements />
      <ContactSection />
    </PageContainer>
  );
};
