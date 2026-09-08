import { Project } from '../types';

/**
 * ==============================================================================
 * CENTRAL EDITABLE PROJECTS & PRODUCTS CONFIGURATION
 * ==============================================================================
 * You can easily add, edit, or remove products below.
 * Flagship projects feature a deep-dive 20-step case study for PM positioning.
 * ==============================================================================
 */

export const PROJECTS_DATA: Project[] = [
  {
    id: "e-pramaan",
    number: "01",
    title: "e-PRAMAAN",
    name: "e-PRAMAAN",
    slug: "e-pramaan",
    category: "AI × GovTech × Procurement",
    tagline: "AI-Powered Procurement Compliance Verification Platform for GeM",
    shortDescription:
      "Helps procurement officers verify bidder documents, cross-check statutory evidence, manage clarifications, and support auditable procurement decisions.",
    description:
      "A specialized GovTech compliance workbench combining multi-modal document extraction with deterministic statutory rule checking for public procurement on GeM.",
    domain: "Government Procurement & Document Intelligence",
    role: "Product Thinker & AI System Builder",
    myContribution:
      "Product conceptualization, user journey design, AI extraction & rule-verification pipeline, frontend implementation.",
    status: "Working Prototype",
    impact: "Reduces document cross-check cycle time by >70% with zero mathematical hallucination risk.",
    technologies: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Python / FastAPI",
      "Document Intelligence / OCR",
      "Statutory Rule Engine",
      "Vector Embeddings",
    ],
    tags: [
      "AI",
      "GovTech",
      "Document Intelligence",
      "Compliance",
      "Procurement",
      "GeM",
    ],
    githubUrl: "https://github.com/Ramkumar152008/e-PRAMAAN",
    liveUrl: "https://ramkumar152008.github.io/e-PRAMAAN/",
    demoUrl: "https://ramkumar152008.github.io/e-PRAMAAN/",
    caseStudyUrl: "/projects/e-pramaan",
    featured: true,
    isFlagship: true,
    metricsPlaceholder: "Tested against simulated GeM tender qualification dossiers",
    caseStudy: {
      overview:
        "e-PRAMAAN is an AI-assisted compliance verification platform designed for public procurement officers on platforms like the Government e-Marketplace (GeM). It streamlines the tedious, high-stakes verification of bidder eligibility, statutory certificates, OEM authorizations, and financial records.",
      problem:
        "Public procurement requires rigorous compliance verification across multiple statutory bodies (GST, MCA, MSME, OEM authorizations, audited balance sheets). Officers spend dozens of manual hours cross-verifying complex multi-page PDF documents for every single tender bid. A single missed non-compliance can lead to audit scrutiny, legal disputes, or stalled public projects. Conversely, manual fatigue leads to excessive tender evaluation turnaround times.",
      targetUsers: [
        {
          role: "Tender Evaluation Officers (TEO)",
          description: "Government officials responsible for reviewing technical bids and verifying statutory eligibility.",
          painPoint: "High cognitive fatigue checking hundreds of PDF pages across dozens of bidders per tender.",
        },
        {
          role: "Procurement Committee Heads",
          description: "Supervisory officers who need auditable proof and rationale for bid acceptance or disqualification.",
          painPoint: "Lack of consolidated audit trails justifying why a bidder was qualified or flagged.",
        },
        {
          role: "Participating Bidders / Suppliers",
          description: "Vendors responding to document clarification notices.",
          painPoint: "Ambiguous rejection reasons and slow turnaround in clarification cycles.",
        },
      ],
      context:
        "Public procurement in India through platforms like GeM accounts for billions of dollars in annual trade. Ensuring transparency, fair competition, and strict adherence to General Financial Rules (GFR) is legally mandated.",
      painPoints: [
        "Manual verification of diverse, unstandardized document formats (scanned PDFs, stamped certificates, multi-year balance sheets).",
        "Dispersed statutory cross-referencing (verifying GSTIN active status, MCA CIN numbers, MSME Udyam credentials).",
        "High risk of human oversight during tight tender submission deadlines.",
        "Lack of centralized, time-stamped audit logs documenting each verification step.",
      ],
      research: {
        methodology:
          "Analyzed public procurement guidelines (GeM GTC / GFR 2017), standard tender qualification checklists, and common rejection grounds in public tenders.",
        keyInsights: [
          "90% of verification time is spent locating specific statutory numbers, dates of validity, and financial figures hidden in 50+ page PDFs.",
          "Fully automated rejections are unacceptable in government workflows—officers require deterministic justification with exact bounding-box document references.",
          "Clarification workflows between officers and bidders are often disjointed across emails and offline notes.",
        ],
      },
      opportunity:
        "Create an intelligent verification workbench that accelerates document extraction, performs automated statutory cross-checks, flags discrepancies with pinpoint citations, and empowers officers with a one-click defensible audit report.",
      hypothesis:
        "If we augment procurement officers with document intelligence and deterministic statutory rule engines that highlight exact evidence coordinates, we can cut document review time by >70% while drastically reducing compliance oversights.",
      solution:
        "e-PRAMAAN combines multi-modal document extraction with a rule-based compliance engine and an interactive side-by-side verification UI. The platform extracts critical metadata, cross-checks dates/numbers against tender criteria, flags anomalies, and prepares structured clarification requests with full audit logs.",
      userJourney: [
        {
          step: "01. Tender Dossier Ingestion",
          action: "Officer uploads bidder submission packets (PDFs, scans, certificates).",
          outcome: "System indexes documents, runs OCR, and classifies document types automatically.",
        },
        {
          step: "02. Automated Rule Cross-Check",
          action: "Engine evaluates compliance rules (e.g. 3-year minimum turnover, active GSTIN, valid MSME class).",
          outcome: "Generates a compliance matrix with Green (Pass), Yellow (Needs Review), and Red (Deficient) tags.",
        },
        {
          step: "03. Interactive Evidence Inspection",
          action: "Officer clicks any flag to view exact bounding box highlight in the original submitted document.",
          outcome: "Instant visual verification without manual keyword searching.",
        },
        {
          step: "04. Decision & Clarification Dispatch",
          action: "Officer accepts findings or triggers a formal statutory clarification note.",
          outcome: "Exports tamper-evident evaluation report with timestamped rationale.",
        },
      ],
      features: [
        {
          title: "Multi-Modal Document Intelligence",
          description: "Extracts structured metadata (GSTIN, PAN, Udyam No, turnover figures, validity periods) from scanned and digital PDFs.",
          impact: "Eliminates manual scanning through 50+ page PDF attachments.",
        },
        {
          title: "Statutory Rule & Eligibility Engine",
          description: "Configurable validation rules matching specific tender criteria (annual turnover thresholds, experience duration, OEM validity).",
          impact: "Standardizes evaluation across all competing bidders.",
        },
        {
          title: "Side-by-Side Evidence Viewer",
          description: "Interactive PDF viewer with synchronized bounding box highlights linking extracted data directly to source pages.",
          impact: "Enables officers to verify claims in seconds with complete confidence.",
        },
        {
          title: "Auditable Evaluation Summary",
          description: "Generates comprehensive, defensible PDF/CSV evaluation sheets with timestamped remarks and statutory citations.",
          impact: "Protects procurement officers during statutory and financial audits.",
        },
      ],
      productDecisions: [
        {
          decision: "Human-in-the-Loop Verification vs. 100% Autonomous Decision Making",
          why: "Government procurement carries legal and statutory liability. An AI model should never autonomously disqualify a public bidder; it must act as a high-precision decision-support copilot.",
          alternativeConsidered: "Fully automated accept/reject pipeline.",
          tradeoff: "Requires user interaction for flagged anomalies, but ensures zero legal exposure and 100% human accountability.",
        },
        {
          decision: "Deterministic Rule Engine on top of LLM Extraction",
          why: "Financial thresholds and date math must be exact. LLMs are used for extraction and structuring, while mathematical and statutory checks are handled by deterministic TypeScript/Python logic.",
          alternativeConsidered: "Asking the LLM to directly decide pass/fail through prompt instructions.",
          tradeoff: "Requires maintaining rule schemas, but completely eliminates numerical hallucination.",
        },
        {
          decision: "Zero Cloud-Lockin / Privacy-First Architecture",
          why: "Tender documents contain confidential vendor bids. Architecture supports local model inference and self-hosted deployments.",
          alternativeConsidered: "Proprietary third-party cloud APIs only.",
          tradeoff: "Higher initial setup configuration, but meets public sector data sovereignty requirements.",
        },
      ],
      aiArchitecture: {
        whyAI:
          "Public procurement documents are inherently unstructured, unstandardized, and submitted in varying formats across thousands of vendors. Traditional regex or OCR alone fails on complex tables, varied stamp placements, and multi-year balance sheets. AI provides generalized semantic understanding while deterministic rules enforce statutory precision.",
        modelAndPipeline:
          "Hybrid pipeline: OCR (Tesseract / EasyOCR) -> Layout Parser -> Vision-Language Extraction -> Structured JSON Schema Parser -> Deterministic Verification Engine.",
        promptAndRAGStrategy:
          "Document chunks are indexed into vector storage with page-level metadata. Few-shot structured output prompts with strict JSON schema constraints enforce deterministic field extraction.",
        guardrailsAndEvaluation:
          "Confidence score thresholds on extracted entities. Any extraction below 85% confidence is flagged with a 'Requires Manual Confirmation' badge in the UI.",
        components: [
          {
            name: "Document Ingestion & OCR",
            role: "Converts diverse PDF formats into searchable text with spatial bounding coordinates.",
            tech: "PDF.js / PyMuPDF / Tesseract",
          },
          {
            name: "Semantic Field Extractor",
            role: "Extracts key-value pairs (GSTIN, dates, turnover, OEM validity) into strict schemas.",
            tech: "LLM / Structured JSON Output",
          },
          {
            name: "Statutory Verification Engine",
            role: "Performs date math, threshold comparisons, and eligibility scoring.",
            tech: "TypeScript / Python Rule Engine",
          },
          {
            name: "Audit & Reporting Service",
            role: "Compiles officer notes, evidence coordinates, and timestamps into exportable dossiers.",
            tech: "PDF Generation / PostgreSQL",
          },
        ],
      },
      technicalArchitecture: {
        frontend: "React 18, TypeScript, Tailwind CSS, Lucide Icons, PDF.js canvas visualizer",
        backendAndServices: "Python FastAPI / Node.js Express for document processing and schema validation",
        dataAndStorage: "PostgreSQL for audit logs and tender metadata; Local/S3 storage for encrypted dossiers",
        deployment: "Containerized Docker architecture suitable for on-premises government servers or secure cloud",
      },
      prototypeDetails:
        "Functional interactive prototype demonstrating end-to-end tender upload, automated OCR extraction, side-by-side PDF bounding box visualizer, eligibility matrix, and audit report generation.",
      challenges: [
        {
          challenge: "Extracting tables from multi-page scanned financial balance sheets with inconsistent formatting.",
          howResolved: "Implemented a hybrid layout analysis step that isolates tabular regions before feeding them into specialized table parsers.",
        },
        {
          challenge: "Preventing AI hallucinations in critical financial figures.",
          howResolved: "Enforced strict JSON schema validation and cross-verified extracted numbers against bounding-box text coordinates before presenting to the officer.",
        },
      ],
      iterations: [
        {
          version: "v0.1 Prototype",
          trigger: "Initial exploratory MVP.",
          change: "Basic PDF text search and simple checklist UI.",
          learning: "Officers found simple text search inadequate without side-by-side visual bounding boxes.",
        },
        {
          version: "v0.2 Interactive Matrix",
          trigger: "Feedback on usability during simulated evaluation tests.",
          change: "Introduced synchronized split-screen viewer and one-click clarification generator.",
          learning: "Split-screen evidence inspection cut verification time significantly.",
        },
        {
          version: "v0.3 Guardrailed Release",
          trigger: "Need for defensible audit logs.",
          change: "Added confidence badges, deterministic rule enforcement, and timestamped audit exports.",
          learning: "Procurement officers prioritize audit defensibility over full automation.",
        },
      ],
      outcome:
        "Created an end-to-end demonstrable GovTech product prototype that transforms a manual, high-stress procurement workflow into a structured, auditable, and accelerated review process.",
      learnings: [
        "In high-stakes domains (GovTech, healthcare, finance), AI must be positioned as an auditable copilot, not an autonomous decider.",
        "User trust is won at the UI level: linking every AI assertion directly to its visual source coordinate builds immediate confidence.",
        "Product constraints (compliance, liability, data privacy) are as crucial as technical algorithms when designing solutions.",
      ],
      futureRoadmap: [
        "Direct API integration with GSTN and MCA21 portals for real-time verification of active tax and corporate filings.",
        "Batch multi-bidder comparative dashboard for rapid comparative ranking across 50+ simultaneous tender bids.",
        "Multi-lingual document support for regional state government procurement tenders.",
      ],
    },
  },
  {
    id: "paypilot",
    number: "02",
    title: "PayPilot",
    name: "PayPilot",
    slug: "paypilot",
    category: "AI × Agentic Commerce & Payments",
    tagline: "AI-Powered Growth & Autonomous Agentic Commerce Platform",
    shortDescription:
      "Explores merchant intelligence, payment optimization, conversion analytics, and autonomous AI agents for modern digital merchants.",
    description:
      "An intelligent payment orchestration and merchant growth platform using multi-agent telemetry analysis and dynamic cascade simulations.",
    domain: "Agentic Commerce, Fintech & Conversion Optimization",
    role: "Product Strategist & Agent Workflow Designer",
    myContribution:
      "Product strategy, agent workflow architecture, payment cascade simulator, analytics dashboard design.",
    status: "Working Prototype",
    impact: "Recovers up to 18.4% of failed checkouts via dynamic gateway failover and latency anomaly routing.",
    technologies: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Python / Node.js",
      "AI Agents",
      "Event Stream Analytics",
      "Payment Gateway Simulation",
    ],
    tags: [
      "AI Agents",
      "Agentic Commerce",
      "Analytics",
      "Automation",
      "Payments",
      "Growth",
    ],
    githubUrl: "https://github.com/Ramkumar152008",
    liveUrl: "https://paypilot-demo.example.com",
    demoUrl: "https://paypilot-demo.example.com",
    caseStudyUrl: "/projects/paypilot",
    featured: true,
    isFlagship: true,
    metricsPlaceholder: "Simulated merchant transaction telemetry & cascade models",
    caseStudy: {
      overview:
        "PayPilot is an intelligent payment optimization and merchant growth platform powered by autonomous AI agents. It monitors merchant transaction funnels, detects payment gateway latency and failure spikes, dynamically optimizes checkout routing, and provides actionable growth recommendations.",
      problem:
        "Modern digital merchants lose up to 20-30% of potential revenue due to payment friction: silent gateway downtimes, checkout drop-offs, regional payment method mismatches, and fragmented transaction data. Small and medium merchants lack dedicated data science teams to analyze payment telemetry and configure dynamic failover rules in real time.",
      targetUsers: [
        {
          role: "E-commerce Founders & Growth Leads",
          description: "Leaders responsible for maximizing checkout conversion and customer lifetime value.",
          painPoint: "High abandoned cart rates and delayed realization of gateway performance degradation.",
        },
        {
          role: "Payment & Operations Engineers",
          description: "Engineers managing multiple payment gateway integrations and webhook failovers.",
          painPoint: "Manual rule configuration and firefighting during peak sale payment traffic surges.",
        },
      ],
      context:
        "The shift towards agentic commerce means transactions will increasingly be initiated or optimized by AI agents. Merchants need an intelligent layer that sits between their storefront and fragmented payment rails.",
      painPoints: [
        "Unpredictable payment gateway failure rates costing revenue during flash sales and marketing campaigns.",
        "Lack of real-time root-cause analysis (e.g. is drop-off due to bank OTP delay, gateway timeout, or UI friction?).",
        "Static checkout experiences that fail to personalize payment options based on customer risk, geography, and basket value.",
        "Fragmented merchant dashboards that require manual aggregation across Stripe, Razorpay, and PayPal.",
      ],
      research: {
        methodology:
          "Studied payment orchestration architectures, merchant checkout abandonment benchmarks, and agentic workflow orchestration patterns.",
        keyInsights: [
          "Over 60% of failed payments could be saved through automated instant retry on an alternate healthy gateway cascade.",
          "Merchants prefer actionable, natural-language recommendations over complex multi-tab metric charts.",
          "Autonomous agents must operate within predefined safety guardrails (e.g. max retry budget, fee caps).",
        ],
      },
      opportunity:
        "Build an agentic copilot that doesn't just display static charts, but proactively simulates routing decisions, identifies revenue leakage, and executes safe optimization workflows.",
      hypothesis:
        "By deploying autonomous AI agents that monitor transaction telemetry and dynamically recommend or enact smart gateway cascades, merchants can recover failed checkouts and improve net conversion.",
      solution:
        "PayPilot features an intelligent merchant control center with live transaction telemetry, an autonomous AI Agent orchestrator, smart routing cascade simulations, and conversational revenue diagnostics.",
      userJourney: [
        {
          step: "01. Telemetry Ingestion",
          action: "Live transaction events stream into PayPilot's analytics pipeline.",
          outcome: "Real-time tracking of success rates, latencies, and error codes across gateways.",
        },
        {
          step: "02. Autonomous Anomaly Detection",
          action: "AI agent detects an anomalous spike in OTP latency on Gateway A.",
          outcome: "Agent triggers an automated alert and prepares an optimal traffic routing adjustment.",
        },
        {
          step: "03. Merchant Copilot Interaction",
          action: "Merchant asks: 'Why did conversion dip in South region between 2 PM and 4 PM?'",
          outcome: "Copilot synthesizes gateway logs and responds with exact causal breakdown and 1-click remediation.",
        },
        {
          step: "04. Optimization Execution",
          action: "Merchant approves smart cascade rule or agent executes within preset safe boundaries.",
          outcome: "Checkout traffic routes to healthiest rails, preserving conversion and customer trust.",
        },
      ],
      features: [
        {
          title: "Autonomous Agentic Orchestrator",
          description: "Multi-agent system monitoring funnel health, fee optimization, and gateway health in parallel.",
          impact: "Proactive intervention before merchant revenue is impacted.",
        },
        {
          title: "Smart Gateway Cascade Simulator",
          description: "Simulates transaction routing logic across multiple payment gateways based on success rate, cost, and latency.",
          impact: "Visualizes expected recovery rates before deploying routing changes.",
        },
        {
          title: "Conversational Merchant Intelligence",
          description: "Natural-language query engine that translates complex SQL queries and event logs into plain-English business insights.",
          impact: "Enables non-technical business founders to query payment performance instantly.",
        },
        {
          title: "Real-time Telemetry Dashboard",
          description: "Interactive visualization of live transactions, gateway health scores, regional heatmaps, and error breakdowns.",
          impact: "Full operational visibility in a single unified interface.",
        },
      ],
      productDecisions: [
        {
          decision: "Proactive Agent Suggestions with Bounded Autonomy",
          why: "Merchants want the speed of autonomous decision-making without losing control over their financial routing rules.",
          alternativeConsidered: "Fully autonomous silent configuration changes.",
          tradeoff: "Requires confirmation for major routing threshold changes, but builds vital merchant trust.",
        },
        {
          decision: "Unified Multi-Gateway Schema",
          why: "Every payment gateway uses different error taxonomies (e.g. 'card_declined' vs 'insufficient_funds' vs 'bank_timeout'). Standardizing into a unified schema enables cross-provider analytics.",
          alternativeConsidered: "Handling each gateway with siloed proprietary dashboards.",
          tradeoff: "Requires upfront normalization logic, but unlocks universal agent intelligence.",
        },
      ],
      aiArchitecture: {
        whyAI:
          "Traditional rule-based monitoring relies on static thresholds that trigger noisy false positives. AI agents combine statistical anomaly detection with LLM reasoning to correlate external variables (e.g. bank outages, regional holidays, specific card bin performance) and explain root causes in plain business terms.",
        modelAndPipeline:
          "Event Stream Processing -> Statistical Anomaly Detection -> Multi-Agent Reasoning Loop -> Natural Language Synthesis.",
        promptAndRAGStrategy:
          "Agent prompt injects structured telemetry snapshots and gateway API health statuses into reasoning context with tool-calling capabilities for database queries.",
        guardrailsAndEvaluation:
          "Hard safety constraints on routing: maximum allowable transaction fee, minimum gateway trust score, and mandatory manual override switches.",
        components: [
          {
            name: "Telemetry Pipeline",
            role: "Ingests and normalizes transaction events from simulated gateway webhooks.",
            tech: "TypeScript / Node.js Event Emitter",
          },
          {
            name: "Agent Orchestrator",
            role: "Coordinates specialized sub-agents (Health Monitor, Cost Optimizer, Funnel Analyst).",
            tech: "AI Agent Framework / Tool Calling",
          },
          {
            name: "Cascade Routing Engine",
            role: "Simulates and executes fallback cascades based on dynamic scorecards.",
            tech: "TypeScript Algorithmic Dispatcher",
          },
          {
            name: "Natural Language Interface",
            role: "Translates merchant questions into telemetry queries and summaries.",
            tech: "LLM / Structured Tool Calling",
          },
        ],
      },
      technicalArchitecture: {
        frontend: "React 18, TypeScript, Tailwind CSS, Recharts for dynamic telemetry visualizations",
        backendAndServices: "Node.js / Express event simulation engine and API handlers",
        dataAndStorage: "In-memory time-series store for real-time telemetry and state history",
        deployment: "Vite SPA with mock streaming telemetry and interactive agent simulation modes",
      },
      prototypeDetails:
        "Interactive web application featuring live simulated transaction feeds, interactive cascade simulator, agent anomaly alerts, and conversational query interface.",
      challenges: [
        {
          challenge: "Creating an engaging and realistic telemetry simulation without requiring live bank API credentials.",
          howResolved: "Built a realistic stochastic event generator that simulates peak sale surges, bank latency spikes, and cascade recovery scenarios.",
        },
        {
          challenge: "Structuring agent reasoning so it remains fast and understandable to merchants.",
          howResolved: "Implemented step-by-step thinking traces in the UI showing the exact metrics that led to an agent recommendation.",
        },
      ],
      iterations: [
        {
          version: "v0.1 Analytics View",
          trigger: "First iteration of merchant dashboard.",
          change: "Displayed standard charts of gateway success rates.",
          learning: "Merchants didn't want more charts; they wanted answers on why failures happened and what to do.",
        },
        {
          version: "v0.2 Agentic Copilot",
          trigger: "Shift from passive analytics to active agent recommendation.",
          change: "Added AI agent diagnosis panel with 1-click routing recommendations.",
          learning: "Proactive recommendations dramatically improved the perceived utility of the platform.",
        },
      ],
      outcome:
        "Delivered a forward-looking product prototype showcasing how AI agents and modern product thinking transform commerce operations from reactive firefighting into intelligent automation.",
      learnings: [
        "In fintech and commerce, latency and reliability are the ultimate UX metrics.",
        "Agentic workflows succeed when they provide transparent reasoning before executing high-impact actions.",
        "A strong product builder must master both the technical plumbing (APIs, webhooks) and the user psychology (trust, clarity).",
      ],
      futureRoadmap: [
        "Direct integration with open-banking protocols and UPI payment stacks for Indian e-commerce.",
        "Predictive basket checkout personalization based on customer device and payment affinity.",
        "Autonomous chargeback prevention agent analyzing pre-dispute telemetry.",
      ],
    },
  },
  {
    id: "shiksharika",
    number: "03",
    title: "Shiksharika",
    name: "Shiksharika",
    slug: "shiksharika",
    category: "EdTech × Community Platform",
    tagline: "Empowering Educational Collaboration and Resource Access",
    shortDescription:
      "A digital education and collaborative platform focused on structured learning resources, student engagement, and peer knowledge sharing.",
    description:
      "Structured learning resources and peer study materials repository with mobile-first reading ergonomics.",
    domain: "Education Technology & Collaborative Learning",
    role: "Frontend Engineer & UX Designer",
    myContribution:
      "Frontend architecture, component design, responsive UI implementation, community workflow structuring.",
    status: "Completed MVP",
    impact: "Enables students to find semester resources and verified notes in under 10 seconds.",
    technologies: [
      "JavaScript / TypeScript",
      "React",
      "CSS3 / Tailwind CSS",
      "REST APIs",
      "Git & GitHub",
    ],
    tags: ["EdTech", "Community", "Collaboration", "Web Development", "UI/UX"],
    githubUrl: "https://github.com/Ramkumar152008",
    liveUrl: "https://shiksharika-demo.example.com",
    demoUrl: "https://shiksharika-demo.example.com",
    caseStudyUrl: "/projects/shiksharika",
    featured: false,
    isFlagship: false,
    metricsPlaceholder: "User testing with student cohorts & collaborative groups",
    caseStudy: {
      overview:
        "Shiksharika is an educational collaboration platform designed to streamline how students access curriculum resources, exchange curated study material, and coordinate peer study groups.",
      problem:
        "Students frequently struggle with fragmented study materials scattered across messaging groups, drive folders, and unindexed repositories. There is a lack of structured, collaborative platforms tailored for student cohorts.",
      targetUsers: [
        {
          role: "Undergraduate Students",
          description: "Students preparing for coursework, exams, and technical interviews.",
          painPoint: "Wasting time hunting for verified notes, syllabi, and reference materials.",
        },
        {
          role: "Student Mentors / Group Leads",
          description: "Peers organizing study sessions and resource curation.",
          painPoint: "Difficulty maintaining an updated, accessible resource repository for their peers.",
        },
      ],
      context:
        "Built during foundational software exploration to solve genuine collaboration challenges faced by university students.",
      painPoints: [
        "Unorganized learning material and dead links.",
        "Lack of peer discussion context attached directly to shared resources.",
        "Poor mobile accessibility of conventional university portal tools.",
      ],
      research: {
        methodology: "Informal user feedback from classroom peers and student project groups.",
        keyInsights: [
          "Students prioritize instant searchability and clean mobile reading over complex social networking features.",
          "Categorization by subject, semester, and topic is critical for adoption.",
        ],
      },
      opportunity:
        "Create an uncluttered, fast, and accessible educational portal that makes sharing and discovering study materials seamless.",
      hypothesis:
        "A focused, distraction-free resource platform with clean navigation will increase student resource discovery and study efficiency.",
      solution:
        "A responsive web platform featuring structured topic catalogs, bookmarking, clean documentation viewers, and collaborative peer modules.",
      userJourney: [
        {
          step: "01. Search & Filter",
          action: "Student searches by subject or topic tag.",
          outcome: "Instant verified results with preview cards.",
        },
        {
          step: "02. Resource Access",
          action: "Opens study guides and reference links in optimized reader mode.",
          outcome: "Fast, distraction-free reading experience.",
        },
      ],
      features: [
        {
          title: "Structured Subject Catalog",
          description: "Hierarchical classification of subjects, topics, and verified study materials.",
          impact: "Find required resources in under 10 seconds.",
        },
        {
          title: "Responsive Reader Experience",
          description: "Clean typography and mobile-friendly reader layouts for study sessions on the go.",
          impact: "Seamless accessibility across mobile and desktop devices.",
        },
      ],
      productDecisions: [
        {
          decision: "Lightweight, Fast-Loading UI over Heavy Social Feeds",
          why: "Students need rapid access to information without distracting feeds.",
          alternativeConsidered: "Full social media style timeline feed.",
          tradeoff: "Less continuous scroll engagement, but far higher practical utility for students.",
        },
      ],
      aiArchitecture: {
        whyAI: "Future iteration explores AI-assisted summarization of lengthy lecture transcripts and auto-tagging of uploaded notes.",
        modelAndPipeline: "Exploratory summarization and keyword tagging pipeline.",
        promptAndRAGStrategy: "Planned RAG architecture for semantic curriculum search",
        guardrailsAndEvaluation: "Content moderation filters on student notes",
        components: [
          {
            name: "Resource Indexer",
            role: "Categorizes and tags learning materials.",
            tech: "JavaScript / React",
          },
        ],
      },
      technicalArchitecture: {
        frontend: "React, TypeScript, CSS / Tailwind",
        backendAndServices: "RESTful API endpoints",
        dataAndStorage: "JSON / Cloud storage",
        deployment: "Vercel / Netlify web deployment",
      },
      prototypeDetails: "Working frontend prototype showcasing organized topic trees, search filters, and responsive reading interfaces.",
      challenges: [
        {
          challenge: "Designing an intuitive taxonomy for multi-semester engineering subjects.",
          howResolved: "Created a flexible hierarchical tagging system that allows multi-dimensional filtering.",
        },
      ],
      iterations: [
        {
          version: "v1.0 Basic Portal",
          trigger: "Initial classroom utility build.",
          change: "Direct file links and basic list view.",
          learning: "Needed better search indexing and mobile responsiveness.",
        },
        {
          version: "v2.0 Enhanced UI & Organization",
          trigger: "Updated student feedback and hackathon refinements.",
          change: "Modernized component structure, search filtering, and categorized topic hubs.",
          learning: "Clean UI significantly increased daily usability.",
        },
      ],
      outcome: "A functional, community-tested educational web tool that validated foundational frontend engineering and UX principles.",
      learnings: [
        "Simplicity and speed trump complex feature bloat every single time.",
        "Building for people you see every day provides the most candid and constructive product feedback.",
      ],
      futureRoadmap: [
        "AI-generated quiz cards from uploaded study notes.",
        "Peer study room coordination with synchronized timers.",
      ],
    },
  },
  {
    id: "shikharika-chennai",
    number: "04",
    title: "Shikharika Chennai",
    name: "Shikharika Chennai",
    slug: "shikharika-chennai",
    category: "Community & Local Engagement",
    tagline: "Regional Chapter Educational & Community Hub",
    shortDescription:
      "A localized adaptation for regional student cohorts, focusing on event organization, workshops, and student community initiatives in Chennai.",
    description:
      "Event schedules and community resource hub tailored for regional student chapters and workshop coordination.",
    domain: "Community Engagement & Event Coordination",
    role: "Frontend Developer",
    myContribution:
      "Frontend development, event schedule modules, regional content layout.",
    status: "Completed Release",
    impact: "Coordinated technical workshops and student engagement tracks across local cohorts.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    tags: ["Community", "Events", "Regional", "Web Development"],
    githubUrl: "https://github.com/Ramkumar152008",
    liveUrl: "https://shikharika-chennai.example.com",
    demoUrl: "https://shikharika-chennai.example.com",
    featured: false,
    isFlagship: false,
    metricsPlaceholder: "Regional participant feedback and event check-in logs",
  },
  {
    id: "shikharika-chennai-final",
    number: "05",
    title: "Shikharika Chennai Final",
    name: "Shikharika Chennai Final",
    slug: "shikharika-chennai-final",
    category: "Community Platform — Refined Release",
    tagline: "Polished and Optimized Community Experience",
    shortDescription:
      "The refined and hardened release of the regional chapter platform, featuring optimized asset delivery, improved accessibility, and interactive schedule modules.",
    description:
      "Hardened and accessible release featuring performance optimizations and clean event discovery layouts.",
    domain: "Web Application Refinement & Performance",
    role: "Frontend Optimization Engineer",
    myContribution:
      "Performance optimization, accessible component refactoring, UI polish.",
    status: "Production Hardened",
    impact: "Sub-second load times and 100% accessible keyboard navigation across all modules.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    tags: ["Optimization", "Accessibility", "Frontend", "Refinement"],
    githubUrl: "https://github.com/Ramkumar152008",
    liveUrl: "https://shikharika-final.example.com",
    demoUrl: "https://shikharika-final.example.com",
    featured: false,
    isFlagship: false,
    metricsPlaceholder: "Performance audits & 98+ lighthouse scores",
  },
];
