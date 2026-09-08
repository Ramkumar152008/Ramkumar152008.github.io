import React, { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { PERSONAL_CONFIG } from '../data/config';
import { Button } from '../components/ui/Button';
import { 
  Download,
  Printer, 
  Mail, 
  Github, 
  Linkedin, 
  Sparkles,
  GraduationCap, 
  Code2, 
  Layers,
  ArrowRight,
  Copy,
  Check,
  Globe,
  Briefcase,
  BookOpen,
  Award,
  Eye,
  FileCheck
} from 'lucide-react';

export const ResumePage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'modern' | 'ats'>('modern');

  const emailRaw = PERSONAL_CONFIG.links.email.replace(/^mailto:/, '');
  const emailHref = `mailto:${emailRaw}`;
  const linkedinUrl = PERSONAL_CONFIG.links.linkedin;
  const linkedinDisplay = "linkedin.com/in/ramkumar-balamurugan-39a87b331";
  const githubUrl = PERSONAL_CONFIG.links.github;
  const githubDisplay = "github.com/Ramkumar152008";
  const portfolioUrl = "https://ramkumar152008.github.io/";
  const portfolioDisplay = "ramkumar152008.github.io";

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const markdownResume = `# B. Ramkumar
**AI Product Builder · Product Engineer · 2nd Year CSE Student**
**AI × Product × Software**
GitHub: ${githubDisplay} | LinkedIn: ${linkedinDisplay} | Email: ${emailRaw} | Portfolio: ${portfolioDisplay}

---

## PROFESSIONAL SUMMARY
Computer Science and Engineering undergraduate with hands-on Product Engineer experience and a strong interest in AI product management. Combines software development, product thinking, problem framing, and user-centered design to turn real-world problems into practical digital products. Currently developing product management skills through an AI Product Manager course at Product Space.

---

## EXPERIENCE
**Product Engineer** — *Independent Product Builder / Projects* (2025 – Present)
• Contributed to product development by translating requirements and user problems into practical software solutions.
• Worked across product and engineering tasks, connecting product goals with implementation decisions and user needs.
• Applied development, testing, iteration, and problem-solving to improve product functionality and usability.
• Collaborated on product ideas and technical execution while building hands-on product engineering experience.

---

## EDUCATION
**B.E. Computer Science and Engineering** (2025 – 2029)
2nd Year Undergraduate

---

## TECHNICAL & PRODUCT SKILLS
- **Programming**: C (Intermediate), Python
- **Product**: Product Thinking, Problem Solving, User-Centered Product Development
- **AI**: Artificial Intelligence, AI Product Concepts, AI Product Management
- **Development & Tools**: React, Next.js, Node.js, Firebase, OpenAI, Figma

---

## PRODUCT MANAGEMENT LEARNING
**AI Product Manager Course — Product Space**
Developing practical knowledge of product discovery, problem framing, user needs, AI product concepts, prioritization, and product development workflows.

---

## SELECTED PROJECTS
### e-PRAMAAN · AI / Product / Software
AI-powered procurement compliance verification platform for GeM. Engineered hybrid OCR document layout parser paired with deterministic statutory rule validation (GSTIN, MCA CIN, MSME Udyam) to eliminate hallucination risks, cutting review cycle time by >70%.
- Technologies: React, TypeScript, Python/FastAPI, Document Intelligence OCR, Statutory Rule Engine, Vector Embeddings.
- Links: GitHub (${githubUrl}) | Demo (https://ramkumar152008.github.io/e-PRAMAAN/)

### PayPilot · AI / Commerce / Software
Autonomous agentic commerce & payment telemetry platform recovering up to 18.4% of failed checkouts with dynamic gateway fallback cascades and merchant natural-language diagnostics.
- Technologies: React, TypeScript, Node.js, AI Agents, Event Stream Telemetry.

---

## RELEVANT COURSEWORK
Data Structures · Algorithms · Object-Oriented Programming · Database Management · Discrete Mathematics · Computer Science Fundamentals

---

## CORE STRENGTHS
Problem Solving · Product Thinking · User-Centered Thinking · AI & Technology Exploration · Communication · Continuous Learning · Practical Project Building

---

## LINKS
GitHub: ${githubUrl} | LinkedIn: ${linkedinUrl} | Portfolio: ${portfolioUrl} | Email: ${emailRaw}
`;

    navigator.clipboard.writeText(markdownResume).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <PageContainer
      title={`Resume — ${PERSONAL_CONFIG.name}`}
      description={`Official resume and curriculum vitae of ${PERSONAL_CONFIG.name}: AI Product Builder, Product Engineer, 2nd-Year CSE student.`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* ========================================================================= */}
        {/* INTERACTIVE CONTROLS TOOLBAR (Hidden during window.print())               */}
        {/* ========================================================================= */}
        <div className="no-print p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200 uppercase tracking-wider">
                CURRICULUM VITAE
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Updated with Contact Links
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {PERSONAL_CONFIG.name} — Resume
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              Print-ready, high-scannability format with email and LinkedIn integrated.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            {/* View Mode Toggle */}
            <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 text-xs font-medium">
              <button
                onClick={() => setViewMode('modern')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  viewMode === 'modern'
                    ? 'bg-white text-sky-700 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Modern View</span>
              </button>
              <button
                onClick={() => setViewMode('ats')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  viewMode === 'ats'
                    ? 'bg-white text-slate-900 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileCheck className="w-3.5 h-3.5" />
                <span>ATS View</span>
              </button>
            </div>

            {/* Primary Download PDF Button */}
            <a
              href={PERSONAL_CONFIG.links.resumePdfUrl}
              download={PERSONAL_CONFIG.links.resumeDownloadName}
              className="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl tracking-tight select-none cursor-pointer text-sm px-4.5 py-2.5 gap-2 bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 shadow-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            {/* Print / Save PDF Button */}
            <Button
              onClick={handlePrint}
              variant="secondary"
              size="md"
              leftIcon={<Printer className="w-4 h-4" />}
            >
              Print / Save
            </Button>

            {/* Copy Markdown Resume */}
            <button
              onClick={handleCopyMarkdown}
              className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:text-sky-600 hover:border-sky-300 hover:bg-sky-50/50 shadow-xs transition-colors flex items-center gap-1.5"
              title="Copy plain markdown text for online job applications"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Copy Markdown</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EXACT STRUCTURED RESUME DOCUMENT VIEW                                     */}
        {/* ========================================================================= */}
        <div className={`resume-paper bg-white border border-slate-200 rounded-3xl shadow-card transition-all ${
          viewMode === 'modern' ? 'p-6 sm:p-12 space-y-7' : 'p-6 sm:p-10 space-y-6'
        }`}>
          
          {/* ----------------------------------------------------------------------- */}
          {/* HEADER SECTION (Executive profile + Photo on top right)                 */}
          {/* ----------------------------------------------------------------------- */}
          <header className="pb-5 border-b border-slate-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              
              {/* Left Details */}
              <div className="space-y-1.5 flex-1">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {PERSONAL_CONFIG.name}
                </h1>

                <p className="text-sm sm:text-base font-semibold text-slate-800">
                  AI Product Builder · Product Engineer · 2nd Year CSE Student
                </p>

                <p className="text-xs sm:text-sm font-medium text-sky-700">
                  AI × Product × Software
                </p>

                {/* Contact Bar with real verified links */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-600 pt-1.5">
                  <span className="flex items-center gap-1">
                    <Github className="w-3.5 h-3.5 text-slate-700" />
                    <span className="font-semibold text-slate-800">GitHub:</span>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-medium">
                      {githubDisplay}
                    </a>
                  </span>
                  <span className="text-slate-300">|</span>

                  <span className="flex items-center gap-1">
                    <Linkedin className="w-3.5 h-3.5 text-sky-600" />
                    <span className="font-semibold text-slate-800">LinkedIn:</span>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-medium">
                      {linkedinDisplay}
                    </a>
                  </span>
                  <span className="text-slate-300">|</span>

                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-red-500" />
                    <span className="font-semibold text-slate-800">Email:</span>
                    <a href={emailHref} className="text-sky-600 hover:underline font-medium">
                      {emailRaw}
                    </a>
                  </span>
                </div>
              </div>

              {/* Right: Portrait Photo (Featured in Modern View & Print) */}
              {viewMode === 'modern' && (
                <div className="shrink-0 relative group self-start sm:self-center">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-50 shadow-md">
                    <img
                      src={PERSONAL_CONFIG.heroPhoto}
                      alt={PERSONAL_CONFIG.name}
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  </div>
                </div>
              )}
            </div>
          </header>

          {/* ----------------------------------------------------------------------- */}
          {/* 01. PROFESSIONAL SUMMARY                                                */}
          {/* ----------------------------------------------------------------------- */}
          <section className="space-y-2 break-inside-avoid">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>PROFESSIONAL SUMMARY</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              Computer Science and Engineering undergraduate with hands-on Product Engineer experience and a strong interest in AI product management. Combines software development, product thinking, problem framing, and user-centered design to turn real-world problems into practical digital products. Currently developing product management skills through an AI Product Manager course at Product Space.
            </p>
          </section>

          {/* ----------------------------------------------------------------------- */}
          {/* 02. EXPERIENCE                                                          */}
          {/* ----------------------------------------------------------------------- */}
          <section className="space-y-2.5 break-inside-avoid">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-sky-600" />
              <span>EXPERIENCE</span>
            </h2>

            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-1">
                <div>
                  <span className="font-bold text-slate-900">Product Engineer</span>
                  <span className="text-slate-600 font-medium"> — Independent Product Builder / Projects</span>
                </div>
                <span className="text-xs font-semibold text-slate-500">2025 – Present</span>
              </div>

              <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <li>Contributed to product development by translating requirements and user problems into practical software solutions.</li>
                <li>Worked across product and engineering tasks, connecting product goals with implementation decisions and user needs.</li>
                <li>Applied development, testing, iteration, and problem-solving to improve product functionality and usability.</li>
                <li>Collaborated on product ideas and technical execution while building hands-on product engineering experience.</li>
              </ul>
            </div>
          </section>

          {/* ----------------------------------------------------------------------- */}
          {/* 03. EDUCATION                                                           */}
          {/* ----------------------------------------------------------------------- */}
          <section className="space-y-2 break-inside-avoid">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
              <span>EDUCATION</span>
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-1">
              <div>
                <span className="font-bold text-slate-900">B.E. Computer Science and Engineering</span>
                <p className="text-xs text-slate-600 font-medium">2nd Year Undergraduate</p>
              </div>
              <span className="text-xs font-semibold text-slate-500">2025 – 2029</span>
            </div>
          </section>

          {/* ----------------------------------------------------------------------- */}
          {/* 04. TECHNICAL & PRODUCT SKILLS                                          */}
          {/* ----------------------------------------------------------------------- */}
          <section className="space-y-2 break-inside-avoid">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-sky-600" />
              <span>TECHNICAL & PRODUCT SKILLS</span>
            </h2>

            <div className="space-y-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p><strong className="font-semibold text-slate-900">Programming: </strong>C (Intermediate), Python</p>
              <p><strong className="font-semibold text-slate-900">Product: </strong>Product Thinking, Problem Solving, User-Centered Product Development</p>
              <p><strong className="font-semibold text-slate-900">AI: </strong>Artificial Intelligence, AI Product Concepts, AI Product Management</p>
              <p><strong className="font-semibold text-slate-900">Development & Tools: </strong>React, Next.js, Node.js, Firebase, OpenAI, Figma</p>
            </div>
          </section>

          {/* ----------------------------------------------------------------------- */}
          {/* 05. PRODUCT MANAGEMENT LEARNING                                         */}
          {/* ----------------------------------------------------------------------- */}
          <section className="space-y-2 break-inside-avoid">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-sky-600" />
              <span>PRODUCT MANAGEMENT LEARNING</span>
            </h2>

            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-1">
                <span className="font-bold text-slate-900">AI Product Manager Course — Product Space</span>
                <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 w-fit">Active</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Developing practical knowledge of product discovery, problem framing, user needs, AI product concepts, prioritization, and product development workflows.
              </p>
            </div>
          </section>

          {/* ----------------------------------------------------------------------- */}
          {/* 06. SELECTED PROJECTS                                                   */}
          {/* ----------------------------------------------------------------------- */}
          <section className="space-y-3 break-inside-avoid">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              <span>SELECTED PROJECTS</span>
            </h2>

            {/* Project 1: e-PRAMAAN */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <span className="font-bold text-xs sm:text-sm text-slate-900">
                  e-PRAMAAN · AI / Product / Software
                </span>
                <div className="flex items-center gap-2 text-xs no-print">
                  <a href={githubUrl + "/e-PRAMAAN"} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-medium">
                    GitHub Repo
                  </a>
                  <span>·</span>
                  <a href="https://ramkumar152008.github.io/e-PRAMAAN/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-medium">
                    Live Demo
                  </a>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                AI-powered procurement compliance verification platform for GeM. Engineered hybrid OCR document layout parser paired with deterministic statutory rule validation (GSTIN, MCA CIN, MSME Udyam) to eliminate hallucination risks, cutting review cycle time by &gt;70%.
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500">
                <strong className="text-slate-700">Technologies: </strong>React, TypeScript, Python/FastAPI, Document Intelligence OCR, Statutory Rule Engine, Vector Embeddings.
              </p>
            </div>

            {/* Project 2: PayPilot */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <span className="font-bold text-xs sm:text-sm text-slate-900">
                  PayPilot · AI / Commerce / Software
                </span>
                <a href="/projects/paypilot" className="text-xs text-sky-600 hover:underline font-medium no-print">
                  Case Study
                </a>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Autonomous agentic commerce & payment telemetry platform recovering up to 18.4% of failed checkouts with dynamic gateway fallback cascades and merchant natural-language diagnostics.
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500">
                <strong className="text-slate-700">Technologies: </strong>React, TypeScript, Node.js, AI Agents, Event Stream Telemetry.
              </p>
            </div>
          </section>

          {/* ----------------------------------------------------------------------- */}
          {/* 07. RELEVANT COURSEWORK                                                 */}
          {/* ----------------------------------------------------------------------- */}
          <section className="space-y-1.5 break-inside-avoid">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-sky-600" />
              <span>RELEVANT COURSEWORK</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              Data Structures · Algorithms · Object-Oriented Programming · Database Management · Discrete Mathematics · Computer Science Fundamentals
            </p>
          </section>

          {/* ----------------------------------------------------------------------- */}
          {/* 08. CORE STRENGTHS                                                      */}
          {/* ----------------------------------------------------------------------- */}
          <section className="space-y-1.5 break-inside-avoid">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>CORE STRENGTHS</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              Problem Solving · Product Thinking · User-Centered Thinking · AI & Technology Exploration · Communication · Continuous Learning · Practical Project Building
            </p>
          </section>

          {/* ----------------------------------------------------------------------- */}
          {/* 09. LINKS (Footer Contact Bar)                                          */}
          {/* ----------------------------------------------------------------------- */}
          <section className="space-y-2 pt-2 border-t border-slate-200 break-inside-avoid">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-sky-600" />
              <span>LINKS</span>
            </h2>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-slate-700" />
                <span className="font-semibold text-slate-800">GitHub:</span>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-medium">
                  {githubDisplay}
                </a>
              </span>
              <span className="text-slate-300">|</span>

              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-sky-600" />
                <span className="font-semibold text-slate-800">LinkedIn:</span>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-medium">
                  {linkedinDisplay}
                </a>
              </span>
              <span className="text-slate-300">|</span>

              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold text-slate-800">Portfolio:</span>
                <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-medium">
                  {portfolioDisplay}
                </a>
              </span>
              <span className="text-slate-300">|</span>

              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-red-500" />
                <span className="font-semibold text-slate-800">Email:</span>
                <a href={emailHref} className="text-sky-600 hover:underline font-medium">
                  {emailRaw}
                </a>
              </span>
            </div>

            <p className="text-[11px] text-slate-400 italic pt-1">
              Portfolio / HR version. For strict ATS-only applications, use a photo-free copy and keep contact details as selectable text.
            </p>
          </section>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM CALL-TO-ACTION (Hidden during print)                               */}
        {/* ========================================================================= */}
        <div className="no-print text-center pt-2 pb-6 space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-lg mx-auto">
            Looking for an ambitious builder for Product Management, AI PM, or Software Engineering internship roles? Let's connect!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Get in Touch
            </Button>
            <Button href="/work" variant="secondary" size="md" leftIcon={<Briefcase className="w-4 h-4" />}>
              Explore All Projects
            </Button>
          </div>
        </div>

      </div>
    </PageContainer>
  );
};
