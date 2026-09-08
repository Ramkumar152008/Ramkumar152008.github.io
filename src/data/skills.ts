import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "PRODUCT",
    description: "Thinking in user problems, constraints, value creation, and measurable impact.",
    skills: [
      { name: "Product Discovery", detail: "Uncovering user pain points and root causes" },
      { name: "Problem Solving", detail: "Structuring ambiguous problems into actionable paths" },
      { name: "Product Thinking", detail: "Balancing user value, feasibility, and product scope" },
      { name: "User Flows", detail: "Mapping intuitive step-by-step product journeys" },
      { name: "MVP Development", detail: "Scoping and shipping focused functional prototypes" },
      { name: "Product Strategy", detail: "Defining product hypotheses and target outcomes" },
      { name: "Feature Prioritization", detail: "Evaluating trade-offs and building what matters" },
      { name: "UX Thinking", detail: "Designing clean, distraction-free interface interactions" },
    ],
  },
  {
    category: "AI & INTELLIGENCE",
    description: "Harnessing LLMs, document extraction, and autonomous agent workflows.",
    skills: [
      { name: "Generative AI", detail: "Integrating generative capabilities into software" },
      { name: "LLMs & Prompt Engineering", detail: "Structured output formatting, few-shot prompting, JSON schemas" },
      { name: "AI Agents", detail: "Autonomous reasoning loops, multi-agent workflows, tool-calling" },
      { name: "RAG Pipelines", detail: "Retrieval-Augmented Generation with vector embeddings" },
      { name: "Document Intelligence", detail: "OCR, spatial layout parsing, bounding-box evidence extraction" },
      { name: "Evaluation & Guardrails", detail: "Confidence scoring, deterministic validation, hallucination checks" },
    ],
  },
  {
    category: "DEVELOPMENT",
    description: "Building robust, responsive, and maintainable software systems.",
    skills: [
      { name: "TypeScript / JavaScript", detail: "Modern ES6+, type-safe frontend and backend code" },
      { name: "React", detail: "Component architecture, hooks, state management, SPA routing" },
      { name: "Python", detail: "FastAPI, automation scripts, data extraction, AI pipelines" },
      { name: "C & C++", detail: "Core data structures, algorithms, memory management" },
      { name: "REST APIs", detail: "Designing clean API contracts and asynchronous integration" },
      { name: "Databases", detail: "Relational data modeling, SQL queries, document storage" },
      { name: "Tailwind CSS", detail: "Utility-first responsive layouts, tokens, and micro-animations" },
    ],
  },
  {
    category: "TOOLS & ENVIRONMENT",
    description: "Modern development toolchain and design environments.",
    skills: [
      { name: "Git & GitHub", detail: "Version control, branching, PR reviews, open-source workflow" },
      { name: "Figma", detail: "Wireframing, UI layout prototyping, component design" },
      { name: "VS Code & Antigravity", detail: "Modern IDE workflows, debugging, agentic pair programming" },
      { name: "AI Development Tools", detail: "LangChain/LlamaIndex concepts, OpenAI/Claude/Gemini APIs" },
      { name: "Vite & Node.js", detail: "Modern bundling, package management, local dev tooling" },
      { name: "Postman", detail: "API testing, validation, and documentation" },
    ],
  },
];
