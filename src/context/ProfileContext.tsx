import React, { createContext, useContext, useState } from 'react';

export interface CaseStudyItem {
  id: string;
  title: string;
  summary: string;
  metrics: string;
  link: string;
  tag: string;
}

export interface ProfileData {
  name: string;
  title: string;
  statusBadge: string;
  valueProposition: string;
  aboutTitle: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  email: string;
  linkedin: string;
  github: string;
  caseStudies: CaseStudyItem[];
}

const DEFAULT_PROFILE_DATA: ProfileData = {
  name: "B. Ramkumar",
  title: "AI Product Manager",
  statusBadge: "Available for AI PM Opportunities & Advisory",
  valueProposition:
    "I bridge the gap between foundation models and high-stakes enterprise reality by shipping production LLM workflows, robust guardrails, and deterministic evaluation suites. I transform ambiguous AI capabilities into resilient, measurable products that drive verifiable business value.",
  aboutTitle: "Engineering Defensible AI Products with Zero-Hallucination Guardrails",
  aboutParagraph1:
    "As an AI Product Manager, I operate at the intersection of generative AI, system architecture, and product ergonomics. Rather than chasing superficial demo impressions, I specialize in the hard engineering and operational challenges required to make AI enterprise-grade: architecting multi-stage RAG pipelines, enforcing deterministic schema compliance, and eliminating hallucinations in mission-critical environments.",
  aboutParagraph2:
    "From public procurement compliance engines (e-PRAMAAN) to autonomous agentic checkout telemetry (PayPilot), I believe production AI is won or lost on evaluation rigor. I establish quantitative offline eval harnesses, latency SLAs, and human-in-the-loop audit trails before anything touches real users.",
  email: "ramkumaroffical2008@gmail.com",
  linkedin: "https://www.linkedin.com/in/ramkumar-balamurugan-39a87b331",
  github: "https://github.com/Ramkumar152008",
  caseStudies: [
    {
      id: "e-pramaan",
      title: "e-PRAMAAN: AI Procurement Compliance & Rule Engine",
      summary:
        "Deterministic multi-modal document extraction and statutory rule-verification platform engineered for government procurement officers on GeM.",
      metrics: ">70% verification cycle reduction with 0% statutory hallucination risk",
      link: "/projects/e-pramaan",
      tag: "GovTech • LLM Workflows & Guardrails",
    },
    {
      id: "paypilot",
      title: "PayPilot: Autonomous Agentic Commerce & Routing",
      summary:
        "Intelligent payment orchestration and merchant growth engine with autonomous multi-agent failover and conversion telemetry.",
      metrics: "18.4% failed checkout recovery at sub-120ms latency",
      link: "/projects/paypilot",
      tag: "FinTech • Multi-Agent Telemetry & Evals",
    },
    {
      id: "shiksharika",
      title: "Shiksharika: AI-Assisted Curricular Knowledge Hub",
      summary:
        "Structured educational repository featuring semantic search, intelligent curriculum indexing, and collaborative peer learning.",
      metrics: "Sub-10s resource discovery and 4.8/5 CSAT rating",
      link: "/projects/shiksharika",
      tag: "EdTech • Semantic Search & RAG",
    },
  ],
};

const STORAGE_KEY = 'ai_pm_portfolio_profile_data_v1';
const AUTH_KEY = 'ai_pm_portfolio_is_unlocked_v1';
const CORRECT_PASSWORD = 'Ram123';

interface ProfileContextType {
  profile: ProfileData;
  isUnlocked: boolean;
  isPasswordModalOpen: boolean;
  isEditModalOpen: boolean;
  openPasswordModal: () => void;
  closePasswordModal: () => void;
  openEditModal: () => void;
  closeEditModal: () => void;
  unlockWithPassword: (password: string) => { success: boolean; message: string };
  lockEditor: () => void;
  saveProfile: (updatedData: ProfileData) => void;
  resetToDefaults: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_PROFILE_DATA, ...parsed };
      }
    } catch (e) {
      console.warn('Failed to load profile from localStorage:', e);
    }
    return DEFAULT_PROFILE_DATA;
  });

  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    return sessionStorage.getItem(AUTH_KEY) === 'true';
  });

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openPasswordModal = () => setIsPasswordModalOpen(true);
  const closePasswordModal = () => setIsPasswordModalOpen(false);

  const openEditModal = () => {
    if (isUnlocked) {
      setIsEditModalOpen(true);
    } else {
      setIsPasswordModalOpen(true);
    }
  };
  const closeEditModal = () => setIsEditModalOpen(false);

  const unlockWithPassword = (inputPassword: string) => {
    if (inputPassword === CORRECT_PASSWORD) {
      setIsUnlocked(true);
      sessionStorage.setItem(AUTH_KEY, 'true');
      setIsPasswordModalOpen(false);
      setIsEditModalOpen(true);
      return { success: true, message: 'Authentication successful! Welcome, Ramkumar.' };
    }
    return { success: false, message: 'Incorrect password. Access denied.' };
  };

  const lockEditor = () => {
    setIsUnlocked(false);
    sessionStorage.removeItem(AUTH_KEY);
    setIsEditModalOpen(false);
  };

  const saveProfile = (updatedData: ProfileData) => {
    setProfile(updatedData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
    } catch (e) {
      console.warn('Failed to save profile to localStorage:', e);
    }
  };

  const resetToDefaults = () => {
    setProfile(DEFAULT_PROFILE_DATA);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to clear profile from localStorage:', e);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        isUnlocked,
        isPasswordModalOpen,
        isEditModalOpen,
        openPasswordModal,
        closePasswordModal,
        openEditModal,
        closeEditModal,
        unlockWithPassword,
        lockEditor,
        saveProfile,
        resetToDefaults,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
