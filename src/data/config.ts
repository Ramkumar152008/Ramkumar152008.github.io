import { EducationInfo } from '../types';

/**
 * ==============================================================================
 * CENTRAL EDITABLE PORTFOLIO CONFIGURATION
 * ==============================================================================
 * Edit any of the values below to update your personal details, contact info,
 * links, education, and brand messaging across the entire portfolio website.
 * ==============================================================================
 */

export const PERSONAL_CONFIG = {
  // Personal Branding & Identity
  name: "B. Ramkumar",
  role: "AI Product Builder",
  currentYear: "2nd Year CSE Student",
  educationPeriod: "2025 – 2029",
  secondaryRoles: [
    "Computer Science Student",
    "Product Thinker",
    "Software Developer",
    "Future Product Manager",
  ],
  heroBadge: "Turning Ideas into Real-World Impact",
  tagline: "I build products, not just projects.",
  heroHighlightWord: "products",
  supportingCopy:
    "I turn real-world problems into AI-powered digital products by combining product thinking, user experience, artificial intelligence, and software engineering.",
  positioning: "AI × Product × Software",
  statusBadge: "Open to Internships & PM Opportunities",
  heroPhoto: "/ramkumar.jpg",

  // Role identity tags under description
  heroRolePills: [
    { label: "AI Product Builder", primary: true },
    { label: "2nd Year CSE", primary: false },
    { label: "Product Thinker", primary: false },
    { label: "Software Developer", primary: false },
  ],

  // Floating highlight badges around hero photo
  heroFloatingCards: [
    {
      badge: "Focused on",
      highlight: "AI × Product × Software",
      position: "top-left",
    },
    {
      badge: "Building solutions",
      highlight: "for real-world problems",
      position: "bottom-right",
    },
  ],

  // Technologies I work with (actual stack used in portfolio)
  technologies: [
    { name: "Python", category: "Backend / AI", icon: "Code2" },
    { name: "React", category: "Frontend", icon: "Layers" },
    { name: "TypeScript", category: "Type Safety", icon: "FileCode2" },
    { name: "Node.js", category: "Runtime", icon: "Server" },
    { name: "FastAPI", category: "API Framework", icon: "Zap" },
    { name: "Tailwind CSS", category: "Styling", icon: "Palette" },
    { name: "OpenAI & LLMs", category: "AI & Agents", icon: "Sparkles" },
    { name: "Document Intelligence", category: "OCR & Parsers", icon: "FileSearch" },
    { name: "Figma", category: "Product Design", icon: "Figma" },
    { name: "Git & GitHub", category: "Version Control", icon: "GitBranch" },
  ],

  // Quick Impact & Portfolio Process Metrics (IDEA -> BUILD -> LEARN -> IMPACT)
  portfolioMetrics: [
    {
      step: "01",
      phase: "IDEA",
      label: "Real-World Problems",
      description: "Targeting high-friction workflows in GovTech, FinTech & EdTech.",
      icon: "Lightbulb",
    },
    {
      step: "02",
      phase: "BUILD",
      label: "Working AI Products",
      description: "Deterministic rules, agentic architectures, and intuitive UIs.",
      icon: "Hammer",
    },
    {
      step: "03",
      phase: "LEARN",
      label: "Continuous Learning",
      description: "Rigorous edge-case stress testing with real domain constraints.",
      icon: "GraduationCap",
    },
    {
      step: "04",
      phase: "IMPACT",
      label: "Product Thinking",
      description: "70%+ time savings with auditable trace & zero hallucinations.",
      icon: "Compass",
    },
  ],

  // Education Details
  education: {
    degree: "B.E. Computer Science and Engineering",
    timeline: "2025 – 2029",
    currentYear: "2nd Year CSE Student",
    status: "Active Undergraduate",
    institution: "Computer Science & Engineering Department",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "Database Management",
      "Discrete Mathematics",
    ],
  } as EducationInfo,

  // Recruiter Snapshot data
  recruiterSnapshot: {
    role: "AI Product Builder",
    currently: "2nd Year CSE Student",
    focus: "AI × Product × Software",
    building: "AI-powered digital products & Agentic workflows",
    openTo: "Product Management / AI PM / Software Engineering Internships",
    location: "India (Open to Remote & Relocation)",
  },

  // Central Contact & Social Links
  links: {
    email: "ramkumaroffical2008@gmail.com",                  // e.g. "ramkumar@example.com"
    github: "https://github.com/Ramkumar152008",            // e.g. "https://github.com/ramkumar"
    linkedin: "https://www.linkedin.com/in/ramkumar-balamurugan-39a87b331",        // e.g. "https://linkedin.com/in/ramkumar"
    resumeUrl: "/resume",                                   // Internal interactive & printable resume
    resumePdfUrl: "/B_Ramkumar_Resume.pdf",                 // Direct downloadable PDF asset
    resumeDownloadName: "B_Ramkumar_Resume.pdf",
    calendly: "https://calendly.com",
  },

  // Navigation Links
  navItems: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/work" },
    { label: "Journey", path: "/journey" },
    { label: "Resume", path: "/resume" },
    { label: "Contact", path: "/contact" },
  ],

  // Credibility chips in Hero
  heroChips: [
    "2nd Year CSE",
    "AI Builder",
    "Product Thinker",
    "Software Developer",
  ],

  // What I Bring Cards
  whatIBring: [
    {
      number: "01",
      title: "Product Thinking",
      quote: "I enjoy breaking ambiguous problems into clear product opportunities.",
      description: "Focusing first on user pain points, value proposition, and user workflows before writing code.",
      tags: ["Problem Framing", "User Journeys", "Feature Prioritization"],
    },
    {
      number: "02",
      title: "AI Building",
      quote: "I experiment with AI, LLMs, intelligent workflows and AI agents.",
      description: "Applying document intelligence, RAG pipelines, and agentic commerce workflows where AI creates genuine leverage.",
      tags: ["Agentic Workflows", "Document Intelligence", "RAG & LLM Integration"],
    },
    {
      number: "03",
      title: "Technical Execution",
      quote: "I can move from product idea to a working prototype.",
      description: "Turning wireframes and architectural diagrams into functional, responsive web applications with modern frontend and backend tooling.",
      tags: ["React & TypeScript", "Full-Stack APIs", "System Architecture"],
    },
    {
      number: "04",
      title: "Learning Through Building",
      quote: "I learn by building, testing, and iterating.",
      description: "Constantly seeking feedback from real users, identifying shortcomings, and iteratively improving both UX and code quality.",
      tags: ["Rapid Prototyping", "Continuous Feedback", "Iterative Refinement"],
    },
  ],

  // Product Building Lifecycle Steps
  buildingStages: [
    {
      step: "01",
      name: "DISCOVER",
      tagline: "Understand the problem.",
      description: "Deep dive into the operational context, observe friction, analyze existing workarounds, and isolate root causes rather than symptoms.",
      icon: "Search",
      action: "Identify bottlenecks & user friction",
    },
    {
      step: "02",
      name: "DEFINE",
      tagline: "Identify users and pain points.",
      description: "Map target user personas, quantify their immediate pain points, establish success criteria, and write a clear product hypothesis.",
      icon: "Target",
      action: "Map personas & prioritize constraints",
    },
    {
      step: "03",
      name: "DESIGN",
      tagline: "Create the product experience.",
      description: "Architect intuitive user flows, draft wireframes, design edge cases, and design human-in-the-loop AI interaction patterns.",
      icon: "Layout",
      action: "Architect user flows & UI states",
    },
    {
      step: "04",
      name: "BUILD",
      tagline: "Turn ideas into working MVPs.",
      description: "Engineer the frontend, integrate deterministic rule engines and AI pipelines, connect data models, and build accessible interfaces.",
      icon: "Code2",
      action: "Implement core loop & AI integration",
    },
    {
      step: "05",
      name: "VALIDATE",
      tagline: "Test assumptions and gather feedback.",
      description: "Test prototypes with representative scenarios, stress-test edge cases, verify AI output correctness, and collect honest feedback.",
      icon: "CheckCircle2",
      action: "Stress test with real tender/merchant data",
    },
    {
      step: "06",
      name: "ITERATE",
      tagline: "Improve based on what I learn.",
      description: "Refactor architecture, refine UI ergonomics, tighten validation guardrails, and update product roadmaps based on learnings.",
      icon: "RefreshCw",
      action: "Refine guardrails & optimize flows",
    },
  ],
};
