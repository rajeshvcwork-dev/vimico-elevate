import heroBusinessTransformation from "@/assets/services/hero-business-transformation.jpg";
import heroErp from "@/assets/services/hero-erp.jpg";
import heroAi from "@/assets/services/hero-ai.jpg";
import heroAnalytics from "@/assets/services/hero-analytics.jpg";
import heroGrc from "@/assets/services/hero-grc.jpg";
import heroCoaching from "@/assets/services/hero-coaching.jpg";
import heroDomainiq from "@/assets/services/hero-domainiq.jpg";
import heroWebsite from "@/assets/services/hero-website.jpg";
import heroDomainServices from "@/assets/services/hero-domain-services.jpg";

export interface PracticeArea {
  slug: string;
  title: string;
  heroImage: string;
  tagline: string;
  executiveSummary: string;
  challenges: string[];
  targetCustomers: string[];
  scope: string[];
  deliverables: string[];
  outcomes: string[];
  methodology: string[];
  engagementModels: string[];
  toolsTech: string[];
  sampleDeliverables: string[];
  caseStudies: { title: string; summary: string }[];
  faqs: { q: string; a: string }[];
  seoDescription: string;
  keywords: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "business-transformation",
    title: "Business Transformation",
    tagline: "Redesign your operating model to scale intelligently and execute with precision.",
    executiveSummary:
      "Business transformation is the work of redesigning how your company is structured, governed, and run so growth stops breaking your operations. Vimico's business transformation consulting rebuilds your operating model, decision rights, organization design, and execution cadence so strategy actually lands in the day-to-day work of your teams. We start with the outcomes you are accountable for — revenue predictability, margin, delivery reliability, customer retention — then reshape the processes, roles, technology, and management rhythm that drive them. Whether you are scaling from 50 to 500 people, integrating an acquisition, standing up a global capability centre, or preparing a PE-backed business for its next stage, we work shoulder-to-shoulder with your leadership team so the new operating model is adopted, measured, and sustained long after the engagement ends.",
    challenges: [
      "Growth is outpacing structure, so execution breaks down as headcount and revenue increase",
      "Teams and business units operate as silos with no shared operating model or common language",
      "Ownership is blurry — decisions stall because roles, escalation paths, and decision rights are undefined",
      "Strategy decks never translate into quarterly execution, so priorities drift and results stay inconsistent",
      "Leaders lack the KPIs, dashboards, and cadences needed to see problems early enough to act",
      "Cost-to-serve keeps rising while margins and customer experience quietly erode",
    ],
    targetCustomers: [
      "Growth-stage companies scaling to 100+ employees",
      "Enterprise business units undergoing restructuring",
      "Global capability centers (GCCs) building new operating models",
      "PE-backed portfolio companies preparing for scale",
    ],
    scope: [
      "Current-state operating model diagnostic",
      "Target operating model (TOM) design",
      "Governance and decision-rights framework",
      "Organization design and role definition",
      "Execution KPIs, dashboards, and cadences",
      "Change management and rollout planning",
    ],
    deliverables: [
      "Operating model blueprint",
      "Governance charter with RACI",
      "Org design & role playbook",
      "Execution KPI framework",
      "90-day rollout roadmap",
    ],
    outcomes: [
      "Predictable, repeatable execution at scale",
      "Clear accountability across leadership tiers",
      "Faster time-to-decision and time-to-outcome",
      "Improved cost-to-serve and margin discipline",
      "Higher employee engagement and retention",
    ],
    methodology: [
      "Listen and diagnose — we interview your leaders and teams, review your data, and map where value leaks out of the current operating model.",
      "Agree the outcomes — we translate your strategy into a small set of measurable business outcomes so every design choice has a reason.",
      "Co-design with your leadership — target operating model, governance, org design, and decision rights are built with your team, never handed over as a template.",
      "Prove it in one area first — we pilot the new model on a business-critical area, capture the evidence, and refine before scaling.",
      "Scale with change management — rollout is sequenced with communication, enablement, and manager coaching so adoption sticks.",
      "Sustain and hand back — cadences, dashboards, and leadership coaching leave your team running the model independently.",
    ],
    engagementModels: [
      "Fixed-scope diagnostic (4–6 weeks)",
      "Transformation program (3–6 months)",
      "Embedded advisory (retainer, 6–12 months)",
    ],
    toolsTech: [
      "Jira / Jira Align",
      "Confluence",
      "Miro / Mural",
      "Power BI dashboards",
      "Smartsheet / Asana",
    ],
    sampleDeliverables: [
      "Operating model canvas (PDF/Miro)",
      "Executive readout deck",
      "Governance & cadence playbook",
      "Org design workbook",
    ],
    caseStudies: [
      {
        title: "Scaling delivery for a global technology firm",
        summary:
          "Redesigned the operating model and delivery governance across three geographies, enabling the client to scale headcount and revenue without losing execution predictability.",
      },
    ],
    faqs: [
      {
        q: "How long does a typical engagement run?",
        a: "A focused diagnostic runs 4–6 weeks; end-to-end transformation programs typically run 3–6 months with sustain support beyond.",
      },
      {
        q: "Do we need to pause the business during the transformation?",
        a: "No. We design the rollout to preserve operational continuity — pilots are scoped narrowly before enterprise scaling.",
      },
    ],
    seoDescription:
      "Business transformation consulting — operating model design, governance frameworks, and execution discipline that scale from growth-stage to enterprise.",
    keywords:
      "business transformation, operating model, organizational scaling, governance framework, delivery transformation",
  },
  {
    slug: "delivery-excellence",
    title: "Delivery Excellence",
    tagline: "Turn fragmented delivery into predictable, high-performing execution.",
    executiveSummary:
      "Delivery excellence is what turns effort into dependable outcomes. Vimico modernises how your organisation plans, delivers, and governs work — combining Agile and SAFe coaching, Jira and Salesforce enablement, portfolio visibility, and support operations design into one connected delivery system. Most teams do not have a motivation problem; they have a system problem: too much work in flight, tooling that fights the process, and no honest view of progress. We fix the system. Your teams get a right-sized Agile delivery framework, clean Jira workflows and automations, sensible ceremonies, service-level commitments that hold, and delivery KPIs your executives can trust. The result is predictable release cadence, faster cycle time, fewer escalations, and delivery leaders who can commit to dates with confidence.",
    challenges: [
      "Release dates slip repeatedly and nobody can explain why until it is too late",
      "Agile is adopted in name only — ceremonies happen, but flow, quality, and predictability do not improve",
      "Leadership has no trustworthy view of work in flight, dependencies, or capacity",
      "Jira, Jira Service Management, or Salesforce are configured against the way teams actually work",
      "Too many parallel priorities, so cycle time stretches and quality debt accumulates",
      "Customer support is reactive, SLAs are missed, and escalations pull engineers off roadmap work",
    ],
    targetCustomers: [
      "SaaS and product engineering organizations",
      "Enterprise IT and shared services",
      "Support and services operations teams",
      "PMOs and delivery leadership",
    ],
    scope: [
      "Agile / Scrum / Kanban implementation and coaching",
      "SAFe or scaled Agile enablement",
      "Jira and Salesforce configuration, workflows, automations",
      "Support operations design with SLAs and ticket routing",
      "Delivery KPIs and portfolio dashboards",
    ],
    deliverables: [
      "Delivery framework playbook",
      "Jira / Salesforce configuration package",
      "Team maturity assessment",
      "Ceremonies & cadence design",
      "Delivery health dashboards",
    ],
    outcomes: [
      "Higher on-time, on-scope delivery rates",
      "Reduced cycle time and lead time",
      "Clear team-level ownership and metrics",
      "Improved customer satisfaction and NPS",
    ],
    methodology: [
      "Assess honestly — we review your teams, portfolio, tooling, and metrics to find the real constraints on delivery.",
      "Right-size the framework — Scrum, Kanban, or scaled Agile is shaped to your context instead of imposing a rigid methodology.",
      "Make the tooling agree with the process — Jira, JSM, and Salesforce are reconfigured so the workflow reinforces the way of working.",
      "Coach the people who do the work — scrum masters, product owners, engineering managers, and support leads are coached in-flight, on real work.",
      "Measure what matters — predictability, cycle time, escalation volume, and SLA attainment are put on dashboards your executives review.",
      "Scale and transfer ownership — proven patterns are rolled out team by team, with your leaders owning the system at the end.",
    ],
    engagementModels: [
      "Delivery diagnostic (3–4 weeks)",
      "Implementation program (2–4 months)",
      "Fractional delivery leadership (retainer)",
    ],
    toolsTech: [
      "Jira, Jira Service Management, Jira Align",
      "Salesforce Service Cloud",
      "Confluence",
      "Zendesk / Freshdesk",
      "Power BI / Tableau",
    ],
    sampleDeliverables: [
      "Delivery framework guide",
      "Jira configuration blueprint",
      "Support SLA & workflow model",
      "Sprint / PI cadence templates",
    ],
    caseStudies: [
      {
        title: "From missed sprints to predictable release trains",
        summary:
          "Reset delivery cadence, Jira configuration, and team ceremonies for a scaling product org — improved on-time delivery materially within one quarter.",
      },
    ],
    faqs: [
      {
        q: "Do you replace our existing delivery leaders?",
        a: "No — we partner with your leaders, upskill them, and hand back a stronger system. We can also plug fractional leadership when needed.",
      },
      {
        q: "Can this coexist with our current tooling?",
        a: "Yes. We reconfigure and rationalize existing Jira / Salesforce setups rather than forcing a rebuild.",
      },
    ],
    seoDescription:
      "Delivery excellence consulting — Agile at scale, Jira/Salesforce enablement, and support operations design for predictable execution.",
    keywords:
      "delivery excellence, agile transformation, Jira consulting, Salesforce implementation, support operations, SAFe",
  },
  {
    slug: "ai-strategy",
    title: "AI Strategy & Adoption",
    tagline: "Move from AI experimentation to accountable, business-outcome-driven adoption.",
    executiveSummary:
      "An AI strategy is not a list of tools — it is a decision about where artificial intelligence will create measurable value in your business, and how you will govern it. Vimico helps leadership teams cut through generative AI hype and build a pragmatic enterprise AI adoption strategy: where AI belongs in your workflows, which use cases earn funding first, what data and platform foundations are required, and which guardrails keep you compliant and credible. We assess your data maturity, run structured use-case discovery across functions, size the business case for each opportunity, and design the responsible-AI governance that risk, legal, and security teams will sign off on. Then we help you move from scattered pilots to production — with adoption plans, AI literacy programmes for your workforce, and ROI measurement that proves the value to your board.",
    challenges: [
      "Pressure from the board to 'do something with AI' without a clear, prioritised strategy",
      "Dozens of disconnected pilots and copilot licences with no path to production or measurable value",
      "No AI governance, responsible-AI policy, or data-quality guardrails, creating real compliance and reputational risk",
      "Data foundations are not ready, so promising use cases stall at proof-of-concept",
      "Teams are anxious about AI replacing their work and AI literacy across the workforce is uneven",
      "Nobody can answer the simplest question: what returns has our AI spend actually delivered?",
    ],
    targetCustomers: [
      "CXOs defining an enterprise AI agenda",
      "Operations and functional leaders exploring AI in workflows",
      "Product teams embedding AI features",
      "Risk and compliance leaders shaping AI policy",
    ],
    scope: [
      "AI opportunity assessment across functions",
      "Use-case prioritization and business-case modeling",
      "AI governance, risk, and responsible-AI framework",
      "Reference architecture and vendor evaluation",
      "Adoption roadmap and workforce enablement",
    ],
    deliverables: [
      "AI opportunity portfolio",
      "Prioritized use-case backlog with ROI",
      "Responsible-AI policy and governance model",
      "Adoption roadmap",
      "Enablement / literacy plan",
    ],
    outcomes: [
      "Focused AI investment aligned to business value",
      "Faster movement from pilot to production",
      "Clear guardrails on risk, data, and ethics",
      "Higher workforce AI literacy and adoption",
    ],
    methodology: [
      "Understand your business first — we learn your value drivers, workflows, and data maturity before discussing any model or vendor.",
      "Discover use cases with your teams — cross-functional workshops surface where AI genuinely removes cost, risk, or delay.",
      "Prioritise with evidence — every opportunity is scored on business value, feasibility, data readiness, and risk, then sized into a business case.",
      "Set the guardrails — we co-write your responsible-AI policy, governance model, and ownership so adoption is safe and auditable.",
      "Pilot and prove — we help launch focused pilots with success metrics agreed up front, then decide honestly what scales.",
      "Enable your people — AI literacy, role-level playbooks, and change support so adoption reaches everyday work, not just a lab.",
    ],
    engagementModels: [
      "AI opportunity sprint (4–6 weeks)",
      "Strategy & governance program (2–3 months)",
      "Advisory retainer (ongoing)",
    ],
    toolsTech: [
      "OpenAI / Anthropic / Google models",
      "Azure AI, AWS Bedrock, Google Vertex AI",
      "Power Automate / Zapier / n8n",
      "Data platforms: Snowflake, Databricks, BigQuery",
      "MLOps: MLflow, Weights & Biases",
    ],
    sampleDeliverables: [
      "AI strategy readout deck",
      "Prioritized use-case backlog",
      "Responsible-AI policy",
      "Reference architecture diagram",
    ],
    caseStudies: [
      {
        title: "From scattered pilots to a governed AI portfolio",
        summary:
          "Rationalized 20+ ad-hoc AI initiatives into a governed portfolio with clear ROI targets, unlocking budget for the highest-value use cases.",
      },
    ],
    faqs: [
      {
        q: "We already run AI pilots — do we still need a strategy?",
        a: "Yes. Strategy converts pilots into portfolio-level value with governance, funding, and clear success metrics.",
      },
      {
        q: "Do you build the AI solutions too?",
        a: "We focus on strategy, governance, and adoption; we partner with implementation vendors or your internal teams for build.",
      },
    ],
    seoDescription:
      "AI strategy and adoption consulting — opportunity assessment, governance, responsible-AI, and enterprise adoption roadmaps.",
    keywords:
      "AI strategy, AI adoption, responsible AI, AI governance, enterprise AI, generative AI consulting",
  },
  {
    slug: "fpa-epm",
    title: "FP&A / EPM Consulting",
    tagline: "Plan, forecast, and close with confidence — with the numbers and the process to back it.",
    executiveSummary:
      "We modernize financial planning, budgeting, and performance management — integrating driver-based models, EPM platforms, and executive dashboards so finance becomes a strategic partner to the business.",
    challenges: [
      "Spreadsheet-heavy, error-prone planning cycles",
      "Long close cycles and manual reconciliation",
      "Weak linkage between strategy and financial plans",
      "Poor scenario and driver-based modeling",
      "Inconsistent management reporting",
    ],
    targetCustomers: [
      "CFOs and finance leadership teams",
      "FP&A and controllership functions",
      "Portfolio company CFOs preparing to scale",
      "Business-unit leaders needing better planning",
    ],
    scope: [
      "FP&A process diagnostic and re-design",
      "Driver-based planning and forecasting models",
      "EPM platform selection and implementation",
      "Management reporting and executive dashboards",
      "Close-cycle acceleration",
    ],
    deliverables: [
      "FP&A operating blueprint",
      "Driver-based planning model",
      "EPM tool selection & rollout plan",
      "Executive management-reporting pack",
    ],
    outcomes: [
      "Faster, more accurate planning cycles",
      "Reduced close time",
      "Better linkage between strategy and budget",
      "Stronger financial storytelling for the board",
    ],
    methodology: [
      "Diagnose current FP&A maturity",
      "Redesign planning process end-to-end",
      "Build driver-based models",
      "Enable EPM tooling and dashboards",
      "Coach the finance team on the new model",
    ],
    engagementModels: [
      "FP&A diagnostic (3–4 weeks)",
      "EPM implementation program (2–5 months)",
      "Fractional FP&A advisory (retainer)",
    ],
    toolsTech: [
      "Anaplan, Workday Adaptive Planning, Oracle EPM",
      "OneStream, Vena",
      "Power BI, Tableau",
      "Excel / Google Sheets (bridge state)",
    ],
    sampleDeliverables: [
      "FP&A process map",
      "Driver-based planning model",
      "Executive reporting pack",
      "Close-cycle playbook",
    ],
    caseStudies: [
      {
        title: "Cutting the monthly close in half",
        summary:
          "Redesigned the close process and reporting stack for a mid-market client, materially compressing close time and improving report reliability.",
      },
    ],
    faqs: [
      {
        q: "Are you tied to a specific EPM vendor?",
        a: "No. We are platform-agnostic and select tools based on your size, complexity, and budget.",
      },
      {
        q: "Can we keep using Excel?",
        a: "Yes for last-mile analysis, but core planning should live in a governed EPM environment.",
      },
    ],
    seoDescription:
      "FP&A and EPM consulting — planning, budgeting, forecasting, and executive reporting modernization.",
    keywords:
      "FP&A consulting, EPM implementation, driver-based planning, financial planning, close acceleration, Anaplan, Adaptive Planning",
  },
  {
    slug: "powerbi",
    title: "Power BI & Business Analytics",
    tagline: "Turn data into decisions — with dashboards leaders actually use.",
    executiveSummary:
      "We design and deliver Power BI and analytics solutions that connect fragmented data into decision-ready views, backed by strong data-quality and governance practices so leaders can trust the numbers.",
    challenges: [
      "Fragmented data across systems",
      "Dashboards no one uses",
      "Data-quality and reconciliation issues",
      "Lack of a single version of the truth",
      "Low analytics literacy across teams",
    ],
    targetCustomers: [
      "Executive teams needing decision dashboards",
      "Operations, finance, and revenue leaders",
      "Analytics and data teams scaling BI",
      "PMOs tracking portfolio delivery health",
    ],
    scope: [
      "Analytics use-case discovery",
      "Data model and semantic layer design",
      "Power BI dashboard development",
      "Data sanity, quality, and reconciliation practices",
      "Governance and rollout enablement",
    ],
    deliverables: [
      "Executive dashboard suite",
      "Semantic data model",
      "Data sanity playbook",
      "BI governance framework",
    ],
    outcomes: [
      "Trusted, single-source dashboards",
      "Faster decision-making at leadership level",
      "Reduced manual reporting effort",
      "Better operational and financial visibility",
    ],
    methodology: [
      "Interview leaders on decisions they need to make",
      "Map the data required to answer those questions",
      "Design a governed semantic model",
      "Build, test, and iterate dashboards",
      "Enable users and hand over the platform",
    ],
    engagementModels: [
      "Dashboard sprint (4–6 weeks)",
      "BI program (2–4 months)",
      "Analytics advisory retainer",
    ],
    toolsTech: [
      "Microsoft Power BI",
      "Microsoft Fabric",
      "Azure Synapse, Snowflake, BigQuery",
      "SQL Server, Postgres",
      "dbt, Airflow",
    ],
    sampleDeliverables: [
      "Executive KPI dashboard",
      "Delivery health dashboard",
      "Revenue / pipeline dashboard",
      "Data quality scorecard",
    ],
    caseStudies: [
      {
        title: "Single-pane executive dashboard for a global services firm",
        summary:
          "Unified 6+ data sources into one governed semantic model with executive dashboards used weekly by leadership.",
      },
    ],
    faqs: [
      {
        q: "Do you require Power BI, or do you work with other tools?",
        a: "Power BI is our strength, but we also work with Tableau and Looker where the client stack demands it.",
      },
      {
        q: "How do you handle data quality?",
        a: "Data sanity is a first-class part of every engagement — we audit sources, define quality rules, and instrument monitoring.",
      },
    ],
    seoDescription:
      "Power BI and business analytics consulting — executive dashboards, semantic models, and data sanity for trusted decisions.",
    keywords:
      "Power BI consulting, business analytics, executive dashboards, data sanity, semantic model, business intelligence",
  },
  {
    slug: "grc",
    title: "Governance, Risk & Compliance",
    tagline: "Strengthen controls, reduce risk, and satisfy auditors without slowing the business.",
    executiveSummary:
      "We help organizations design and mature their GRC programs — from policy and controls to information security, privacy, and audit readiness across regulated and unregulated environments.",
    challenges: [
      "Fragmented policies and controls",
      "Audit findings that keep recurring",
      "Weak information security or privacy posture",
      "Manual, evidence-heavy compliance work",
      "Unclear ownership across risk domains",
    ],
    targetCustomers: [
      "CIOs, CISOs, and compliance leaders",
      "Regulated financial services and insurance firms",
      "SaaS companies pursuing SOC 2 / ISO 27001",
      "Boards and audit committees",
    ],
    scope: [
      "GRC program design and maturity assessment",
      "Policy, standard, and control framework",
      "Information security and privacy program",
      "Audit readiness and remediation",
      "Third-party / vendor risk management",
    ],
    deliverables: [
      "GRC maturity assessment",
      "Control framework and policy set",
      "Risk register",
      "Audit-readiness pack",
    ],
    outcomes: [
      "Fewer and less severe audit findings",
      "Stronger security and privacy posture",
      "Clearer risk ownership across the business",
      "Reduced manual compliance overhead",
    ],
    methodology: [
      "Assess current GRC maturity",
      "Design a right-sized control framework",
      "Remediate gaps and evidence practices",
      "Automate controls where feasible",
      "Sustain with cadences and reporting",
    ],
    engagementModels: [
      "GRC diagnostic (3–4 weeks)",
      "Audit-readiness program (2–4 months)",
      "Fractional CISO / compliance advisory",
    ],
    toolsTech: [
      "Vanta, Drata, SecureFrame",
      "ServiceNow GRC, Archer",
      "OneTrust",
      "Jira for control tracking",
    ],
    sampleDeliverables: [
      "Policy set (ISMS-aligned)",
      "Risk register",
      "Audit evidence pack",
      "Vendor risk playbook",
    ],
    caseStudies: [
      {
        title: "Audit-ready in one quarter",
        summary:
          "Built the control framework, policy set, and evidence practices needed for a first-time external audit — passed with minimal findings.",
      },
    ],
    faqs: [
      {
        q: "Which frameworks do you support?",
        a: "SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, and industry-specific regimes across BFSI and insurance.",
      },
      {
        q: "Do you replace our internal auditor?",
        a: "No. We prepare you for audit — internal or external auditors remain independent.",
      },
    ],
    seoDescription:
      "Governance, risk, and compliance consulting — GRC program design, information security, privacy, and audit readiness.",
    keywords:
      "GRC consulting, compliance, information security, privacy, SOC 2, ISO 27001, audit readiness, risk management",
  },
  {
    slug: "executive-coaching",
    title: "Executive Coaching & Leadership Advisory",
    tagline: "Build the leadership capability your operating model depends on.",
    executiveSummary:
      "We coach leaders and leadership teams through the transitions that matter — scaling, restructuring, cross-cultural leadership, and execution maturity — combining 1:1 coaching with team-level advisory.",
    challenges: [
      "Leaders promoted faster than they were prepared",
      "Executive teams misaligned on strategy and priorities",
      "Weak execution discipline at leadership level",
      "Cross-cultural or global leadership friction",
      "Difficult stakeholder alignment across matrices",
    ],
    targetCustomers: [
      "CXOs and senior VPs navigating transitions",
      "Founders scaling into CEO roles",
      "Newly formed leadership teams",
      "Delivery, operations, and engineering leaders",
    ],
    scope: [
      "1:1 executive coaching",
      "Leadership team offsites and alignment",
      "Stakeholder mapping and influence coaching",
      "Execution discipline and cadence design",
      "Cross-cultural and global leadership advisory",
    ],
    deliverables: [
      "Personalized development plan",
      "Leadership team alignment charter",
      "Stakeholder influence map",
      "Execution cadence design",
    ],
    outcomes: [
      "Higher leadership effectiveness scores",
      "Aligned, faster-moving leadership teams",
      "Improved execution discipline",
      "Stronger cross-cultural collaboration",
    ],
    methodology: [
      "Chemistry check and goal setting",
      "360 / stakeholder inputs",
      "Cadenced coaching sessions",
      "Team-level interventions where needed",
      "Progress reviews with sponsors",
    ],
    engagementModels: [
      "3-month coaching sprint",
      "6-month coaching engagement",
      "Leadership team advisory retainer",
    ],
    toolsTech: [
      "360 assessments",
      "Leadership effectiveness frameworks",
      "Miro for alignment workshops",
    ],
    sampleDeliverables: [
      "Coaching plan",
      "360 readout",
      "Team alignment charter",
    ],
    caseStudies: [
      {
        title: "Aligning a newly formed leadership team",
        summary:
          "Ran a structured alignment program with a new C-suite, converting misalignment into a shared operating rhythm within one quarter.",
      },
    ],
    faqs: [
      {
        q: "How is progress measured?",
        a: "Through sponsor check-ins, stakeholder pulse inputs, and specific behavioral / business outcomes agreed at the start.",
      },
      {
        q: "Can coaching be delivered remotely?",
        a: "Yes — we work globally, though periodic in-person sessions add strong value.",
      },
    ],
    seoDescription:
      "Executive coaching and leadership advisory — 1:1 coaching, leadership team alignment, and execution discipline for senior leaders.",
    keywords:
      "executive coaching, leadership advisory, leadership team alignment, executive development, CXO coaching",
  },
  {
    slug: "domainiq",
    title: "DomainIQ Insight Platform",
    tagline: "AI-powered domain due diligence — from registration to valuation in one intelligence report.",
    executiveSummary:
      "DomainIQ Insight is Vimico's AI-powered platform for domain due diligence. Enter a domain and receive a synthesized intelligence report covering registration, history, SEO, security, brand, tech stack, and valuation — designed for investors, acquirers, and brand teams.",
    challenges: [
      "Slow, manual domain due-diligence processes",
      "Fragmented sources for registration, SEO, and security data",
      "Difficulty valuing domains objectively",
      "Hidden brand or trademark risks in acquisitions",
      "Lack of a single, shareable diligence report",
    ],
    targetCustomers: [
      "Domain investors and brokers",
      "M&A and corp-dev teams evaluating digital assets",
      "Brand and trademark teams",
      "SEO and marketing leaders",
    ],
    scope: [
      "Domain intelligence lookups",
      "AI-synthesized due-diligence report",
      "Registration, WHOIS, and history analysis",
      "SEO, backlink, and traffic signals",
      "Security, tech-stack, and brand risk indicators",
      "AI-assisted valuation estimation",
    ],
    deliverables: [
      "On-demand domain intelligence report",
      "Shareable PDF summary",
      "API access (roadmap)",
    ],
    outcomes: [
      "Faster due diligence",
      "More confident buy/sell decisions",
      "Reduced risk of brand and trademark exposure",
      "Objective, defensible valuations",
    ],
    methodology: [
      "Input a domain",
      "The platform gathers signals across sources",
      "AI synthesizes into an executive-ready report",
      "Export or share with stakeholders",
    ],
    engagementModels: [
      "Self-serve platform access",
      "Enterprise licensing (roadmap)",
      "Advisory-assisted diligence engagements",
    ],
    toolsTech: [
      "Proprietary AI synthesis engine",
      "WHOIS and DNS intelligence sources",
      "SEO and traffic data providers",
      "Security intelligence feeds",
    ],
    sampleDeliverables: [
      "Domain intelligence report (PDF)",
      "Valuation summary",
      "Risk indicators dashboard",
    ],
    caseStudies: [
      {
        title: "Compressing M&A domain diligence",
        summary:
          "Buyers used DomainIQ Insight to compress multi-day domain diligence into a single AI-synthesized report ahead of an acquisition.",
      },
    ],
    faqs: [
      {
        q: "How do I access DomainIQ Insight?",
        a: "Launch the platform at domainiq-insight.lovable.app and run a domain lookup.",
      },
      {
        q: "Is the valuation guaranteed?",
        a: "Valuations are AI-assisted estimates based on observable signals; treat them as directional inputs into your own decision.",
      },
    ],
    seoDescription:
      "DomainIQ Insight — AI-powered domain due diligence platform delivering registration, SEO, security, brand, and valuation intelligence.",
    keywords:
      "domain due diligence, domain valuation, WHOIS, SEO analysis, domain intelligence, AI due diligence",
  },
  {
    slug: "website",
    title: "Website Development & Digital Solutions",
    tagline: "High-performance websites and digital experiences that reflect the brand you're building.",
    executiveSummary:
      "We design, build, and evolve websites and digital experiences — from corporate sites and portfolio microsites to e-commerce and product marketing platforms — with a strong emphasis on performance, SEO, and craft.",
    challenges: [
      "Outdated websites that don't reflect brand quality",
      "Slow-loading, poorly optimized pages",
      "Weak SEO and organic discoverability",
      "Fragmented digital presence across surfaces",
      "Inability to iterate content quickly",
    ],
    targetCustomers: [
      "Growth-stage and enterprise B2B companies",
      "Founders and executives needing a personal digital brand",
      "Product marketing teams launching new offerings",
      "E-commerce and D2C brands",
    ],
    scope: [
      "Brand-aligned web design",
      "Responsive, SEO-optimized development",
      "CMS integration and content ops",
      "E-commerce and payment integration",
      "Analytics, tag management, and conversion tracking",
    ],
    deliverables: [
      "Design system and web components",
      "Production website",
      "CMS configuration",
      "Analytics and SEO setup",
    ],
    outcomes: [
      "Modern, credible digital presence",
      "Improved organic traffic and conversion",
      "Faster content iteration",
      "Better brand differentiation",
    ],
    methodology: [
      "Discovery — audiences, goals, brand",
      "Design — sitemap, wireframes, visual design",
      "Build — responsive development and CMS",
      "Launch — SEO, analytics, and QA",
      "Iterate — measure and improve",
    ],
    engagementModels: [
      "Fixed-scope website build",
      "Design and development retainer",
      "Ongoing digital experience partnership",
    ],
    toolsTech: [
      "React, Next.js, Vite",
      "Tailwind CSS, shadcn/ui",
      "Sanity, Contentful, Strapi",
      "Shopify, Stripe",
      "Google Analytics, GTM",
    ],
    sampleDeliverables: [
      "Design system in Figma",
      "Production website codebase",
      "SEO and analytics report",
    ],
    caseStudies: [
      {
        title: "GripNovaco — brand-forward corporate site",
        summary:
          "Delivered a modern, responsive website for GripNovaco, aligning the digital presence with the brand and enabling the client to engage their audience with a polished, high-performance site.",
      },
    ],
    faqs: [
      {
        q: "Do you handle content writing as well?",
        a: "We collaborate on messaging and can partner with copywriters when needed.",
      },
      {
        q: "Can you maintain the site after launch?",
        a: "Yes — we offer retainers for ongoing evolution, SEO, and iteration.",
      },
    ],
    seoDescription:
      "Website development and digital solutions — modern, responsive, SEO-optimized websites and digital experiences for B2B and consumer brands.",
    keywords:
      "website development, digital solutions, responsive design, SEO, e-commerce, corporate website, portfolio website",
  },
];

export const practiceAreaBySlug = (slug: string) =>
  practiceAreas.find((p) => p.slug === slug);