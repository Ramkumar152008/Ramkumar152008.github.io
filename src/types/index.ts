export interface ProjectFeature {
  title: string;
  description: string;
  impact?: string;
  icon?: string;
}

export interface ProductDecision {
  decision: string;
  why: string;
  alternativeConsidered: string;
  tradeoff: string;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  targetUsers: {
    role: string;
    description: string;
    painPoint: string;
  }[];
  context: string;
  painPoints: string[];
  research: {
    methodology: string;
    keyInsights: string[];
  };
  opportunity: string;
  hypothesis: string;
  solution: string;
  userJourney: {
    step: string;
    action: string;
    outcome: string;
  }[];
  features: ProjectFeature[];
  productDecisions: ProductDecision[];
  aiArchitecture: {
    whyAI: string;
    modelAndPipeline: string;
    promptAndRAGStrategy: string;
    guardrailsAndEvaluation: string;
    components: {
      name: string;
      role: string;
      tech: string;
    }[];
  };
  technicalArchitecture: {
    frontend: string;
    backendAndServices: string;
    dataAndStorage: string;
    deployment: string;
  };
  prototypeDetails: string;
  challenges: {
    challenge: string;
    howResolved: string;
  }[];
  iterations: {
    version: string;
    trigger: string;
    change: string;
    learning: string;
  }[];
  outcome: string;
  learnings: string[];
  futureRoadmap: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  shortDescription: string;
  description?: string;
  domain: string;
  role: string;
  myContribution: string;
  technologies: string[];
  status: string;
  impact: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  isFlagship: boolean;
  image?: string;
  caseStudy?: CaseStudy;
  metricsPlaceholder?: string;
}

export interface JourneyMilestone {
  year: string;
  period: string;
  title: string;
  category: 'Education' | 'AI & Products' | 'Hackathons & Innovation' | 'Current Focus';
  description: string;
  highlights: string[];
  tag: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    detail: string;
    highlight?: boolean;
  }[];
}

export interface Achievement {
  title: string;
  category: 'Hackathon' | 'Competition' | 'Certification' | 'Academic' | 'Project Milestone';
  year: string;
  issuerOrEvent: string;
  description: string;
  evidencePlaceholder?: string;
  link?: string;
}

export interface EducationInfo {
  degree: string;
  timeline: string;
  currentYear: string;
  status: string;
  institution: string;
  coursework: string[];
}
