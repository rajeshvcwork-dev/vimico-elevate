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
    heroImage: heroBusinessTransformation,
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
    slug: "erp-implementation",
    title: "ERP Implementation",
    heroImage: heroErp,
    tagline:
      "Open-source ERP implementation for small businesses — get inventory, accounting, and receivables under control.",
    executiveSummary:
      "ERP implementation is how a growing small business finally replaces spreadsheets, notebooks, and disconnected apps with one system that tells the truth. Vimico implements open-source ERP platforms such as ERPNext and iDempiere for small business owners who are losing money to stock they cannot track, books that never reconcile, and customer invoices that stay unpaid far too long. Because the software is open source, you avoid heavy per-user licence fees and still get full inventory management, accounting, billing, purchase, and accounts receivable in a single connected system. We configure the ERP around how your business actually runs, migrate your existing item, customer, and ledger data, train your team on day-to-day transactions, and stay with you through the first closing cycles so the system is genuinely adopted — not abandoned after go-live.",
    challenges: [
      "Inventory is tracked in spreadsheets, so stock-outs, excess stock, and shrinkage go unnoticed until they hurt cash flow",
      "Accounting is disconnected from operations — sales, purchases, and stock movements are re-entered by hand",
      "Accounts receivable is unmanaged: invoices are raised late, follow-ups are inconsistent, and outstanding payments keep growing",
      "Owners have no reliable view of profitability, margin, or cash position without waiting for the accountant",
      "Commercial ERP quotes are far beyond a small business budget, so digitisation keeps getting postponed",
      "Earlier software attempts failed because nobody configured it to the business or trained the team",
    ],
    targetCustomers: [
      "Small business owners struggling with inventory and stock accuracy",
      "Traders, distributors, retailers, and small manufacturers",
      "Businesses with growing accounts receivable and delayed collections",
      "Owner-led firms outgrowing spreadsheets and standalone accounting software",
    ],
    scope: [
      "Open-source ERP selection and fitment (ERPNext, iDempiere)",
      "Inventory, warehouse, batch, and stock valuation setup",
      "Accounting, chart of accounts, GST/tax, and bank reconciliation",
      "Sales, purchase, billing, and accounts receivable workflows with payment follow-up",
      "Data migration, user training, and post go-live hand-holding",
    ],
    deliverables: [
      "Configured ERP instance ready for daily operations",
      "Item, customer, supplier, and opening-balance data migration",
      "Inventory and accounting process documentation",
      "AR ageing, stock, and profitability reports",
      "Team training and go-live support plan",
    ],
    outcomes: [
      "Accurate, real-time stock visibility and fewer stock-outs",
      "Books that reconcile without manual re-entry",
      "Faster collections and a shrinking receivables ageing",
      "Lower software cost through open-source licensing",
      "Owner-level visibility of cash, margin, and profitability",
    ],
    methodology: [
      "Understand the business — we sit with you and your team to map how goods, invoices, and money actually move today.",
      "Choose the right open-source platform — ERPNext or iDempiere is selected on fitment, not on preference, and scoped to what you need first.",
      "Configure around your reality — items, warehouses, taxes, pricing, credit terms, and approval flows are set up to match your operations.",
      "Migrate clean data — stock, customers, suppliers, and opening balances are cleaned and loaded so you start from a trustworthy baseline.",
      "Train the people who use it daily — billing staff, storekeepers, and accountants are trained on real transactions, not slideware.",
      "Stabilise and improve — we support the first month-end and receivables cycles, then tune reports and automation as you grow.",
    ],
    engagementModels: [
      "ERP readiness assessment (1–2 weeks)",
      "Small business ERP implementation (6–12 weeks)",
      "Post go-live support and enhancement retainer",
    ],
    toolsTech: [
      "ERPNext / Frappe",
      "iDempiere",
      "PostgreSQL / MariaDB",
      "Tally & Excel data migration",
      "Power BI for ERP reporting",
    ],
    sampleDeliverables: [
      "ERP configuration workbook",
      "Inventory and warehouse process guide",
      "Accounts receivable follow-up playbook",
      "Owner dashboard: stock, cash, and AR ageing",
    ],
    caseStudies: [
      {
        title: "Small distributor gains stock and receivables control",
        summary:
          "Implemented open-source ERP for a small distribution business — replaced spreadsheet inventory, connected billing to accounting, and introduced structured AR follow-up that visibly reduced overdue invoices.",
      },
    ],
    faqs: [
      {
        q: "Is open-source ERP really suitable for a small business?",
        a: "Yes. Platforms like ERPNext and iDempiere cover inventory, accounting, billing, and receivables without heavy licence fees — the investment goes into implementation and training instead of software rent.",
      },
      {
        q: "Can you migrate our existing Tally or Excel data?",
        a: "Yes. We clean and migrate items, customers, suppliers, stock, and opening balances so you begin with an accurate baseline.",
      },
      {
        q: "How long does implementation take?",
        a: "A focused small business implementation covering inventory, accounting, and AR typically runs 6–12 weeks depending on data quality and number of locations.",
      },
      {
        q: "Will our team be able to use it?",
        a: "That is the core of our approach — we train billing, stores, and accounts users on their own daily transactions and support the first month-end together.",
      },
    ],
    seoDescription:
      "Open-source ERP implementation for small businesses — ERPNext and iDempiere setup for inventory management, accounting, billing, and accounts receivable control.",
    keywords:
      "ERP implementation, open source ERP, ERPNext implementation, iDempiere, small business ERP, inventory management software, accounting software implementation, accounts receivable, ERP for small business India",
  },
  {
    slug: "ai-strategy",
    title: "AI Strategy & Adoption",
    heroImage: heroAi,
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
    slug: "powerbi",
    title: "EPM Consulting & Power BI Analytics",
    heroImage: heroAnalytics,
    tagline:
      "Plan, forecast, and report with numbers your leadership team can trust.",
    executiveSummary:
      "EPM consulting and Power BI analytics belong together: planning is only as good as the data behind it, and dashboards are only useful if they connect to how you budget and forecast. Vimico modernises enterprise performance management — budgeting, forecasting, close, and management reporting — and delivers the Power BI models and dashboards that make performance visible week to week. We replace spreadsheet-heavy planning cycles with driver-based models, shorten the close, unify fragmented data into a governed semantic layer, and build executive dashboards leaders actually open. The result is one version of the truth spanning finance, operations, and revenue, with the analytics discipline and data quality practices to keep it reliable.",
    challenges: [
      "Spreadsheet-heavy, error-prone budgeting and forecasting cycles",
      "Long month-end close with manual reconciliation",
      "Fragmented data across ERP, CRM, and finance systems",
      "Dashboards nobody uses because the numbers are not trusted",
      "No single version of the truth between finance and operations",
      "Weak linkage between strategy, budget, and reported performance",
    ],
    targetCustomers: [
      "CFOs, FP&A, and controllership functions",
      "Executive teams needing decision-ready dashboards",
      "Operations, finance, and revenue leaders",
      "Analytics teams scaling Power BI across the business",
    ],
    scope: [
      "Planning, budgeting, and forecasting process redesign",
      "Driver-based planning and scenario models",
      "EPM platform selection and implementation",
      "Power BI semantic models and dashboard development",
      "Data sanity, quality, reconciliation, and BI governance",
      "Close-cycle acceleration and management reporting",
    ],
    deliverables: [
      "EPM and planning operating blueprint",
      "Driver-based planning and forecast model",
      "Power BI executive dashboard suite",
      "Governed semantic data model",
      "Data quality and BI governance framework",
    ],
    outcomes: [
      "Faster, more accurate planning and forecasting",
      "Reduced close time and manual reporting effort",
      "Trusted, single-source dashboards for leadership",
      "Clear linkage between strategy, budget, and performance",
      "Stronger financial and operational storytelling for the board",
    ],
    methodology: [
      "Start with the decisions — we interview leaders on the calls they need to make and the numbers those calls depend on.",
      "Diagnose planning and data maturity — the planning calendar, close process, and source systems are assessed honestly.",
      "Redesign the planning process — budgeting and forecasting move to driver-based models with clear ownership.",
      "Build the governed data layer — sources are reconciled into one semantic model with documented quality rules.",
      "Deliver dashboards in short cycles — Power BI reports are built, tested, and iterated with the people who will use them.",
      "Enable and hand over — finance and business teams are trained to own the models, dashboards, and cadence.",
    ],
    engagementModels: [
      "Planning and analytics diagnostic (3–4 weeks)",
      "EPM + Power BI implementation program (2–5 months)",
      "Fractional FP&A / analytics advisory retainer",
    ],
    toolsTech: [
      "Microsoft Power BI, Microsoft Fabric",
      "Anaplan, Workday Adaptive Planning, Oracle EPM",
      "OneStream, Vena",
      "Azure Synapse, Snowflake, BigQuery, SQL Server, Postgres",
      "dbt, Airflow, Excel (bridge state)",
    ],
    sampleDeliverables: [
      "Driver-based planning model",
      "Executive KPI dashboard",
      "Close-cycle playbook",
      "Data quality scorecard",
    ],
    caseStudies: [
      {
        title: "Cutting the monthly close in half",
        summary:
          "Redesigned the close process and reporting stack for a mid-market client, materially compressing close time and improving report reliability.",
      },
      {
        title: "Single-pane executive dashboard for a global services firm",
        summary:
          "Unified 6+ data sources into one governed semantic model with Power BI dashboards used weekly by leadership.",
      },
    ],
    faqs: [
      {
        q: "Are you tied to a specific EPM or BI vendor?",
        a: "No. Power BI is our analytics strength, but we are platform-agnostic on EPM and select tools based on your size, complexity, and budget.",
      },
      {
        q: "Can we keep using Excel?",
        a: "Yes for last-mile analysis, but core planning and reporting should live in a governed EPM and BI environment.",
      },
      {
        q: "How do you handle data quality?",
        a: "Data sanity is a first-class part of every engagement — we audit sources, define quality rules, and instrument monitoring before dashboards go live.",
      },
    ],
    seoDescription:
      "EPM consulting and Power BI analytics — driver-based planning, forecasting, close acceleration, executive dashboards, and governed data models.",
    keywords:
      "EPM consulting, Power BI consulting, business analytics, driver-based planning, forecasting, close acceleration, executive dashboards, semantic model, business intelligence",
  },
  {
    slug: "grc",
    title: "Governance, Risk & Compliance",
    heroImage: heroGrc,
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
    heroImage: heroCoaching,
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
    heroImage: heroDomainiq,
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
    title: "Website Development & Hosting",
    heroImage: heroWebsite,
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
  {
    slug: "domain-services",
    title: "Domain Purchase & Domain Services",
    heroImage: heroDomainServices,
    tagline:
      "Buy, manage, and protect your domain names with full DNS control and privacy protection.",
    executiveSummary:
      "Your domain name is the foundation of your digital presence — and the first thing that breaks a launch when it is registered badly, expires quietly, or sits with a registrar nobody can access. Vimico offers domain purchase and domain management services with competitive pricing across popular extensions, full DNS management, and domain privacy protection. Whether you are registering your first .com, consolidating a scattered portfolio, moving domains to a single account, or pairing a new domain with website development and hosting, we handle registration, DNS records, renewals, and transfers so your brand stays online and under your control.",
    challenges: [
      "Domains scattered across multiple registrars and personal accounts",
      "Missed renewals that take a live website or business email offline",
      "No clear DNS ownership, so website and email changes take days",
      "Personal contact details exposed in public WHOIS records",
      "Uncertainty about which extensions to secure for brand protection",
    ],
    targetCustomers: [
      "Small business owners registering their first domain",
      "Startups and founders launching a new brand",
      "Businesses consolidating a scattered domain portfolio",
      "Clients pairing a domain with website development and hosting",
    ],
    scope: [
      "Domain search, purchase, and registration across popular extensions",
      "Domain transfers and portfolio consolidation",
      "Full DNS management for websites, email, and subdomains",
      "Domain privacy protection and WHOIS management",
      "Renewal tracking and expiry protection",
    ],
    deliverables: [
      "Registered domains under a managed account",
      "Configured DNS records for web and email",
      "Privacy protection enabled where supported",
      "Renewal and expiry calendar",
    ],
    outcomes: [
      "One place to buy, renew, and manage every domain",
      "No surprise expiries or downtime",
      "Faster DNS changes during launches and migrations",
      "Protected brand and private registrant details",
    ],
    methodology: [
      "Check availability and advise on the right extensions for your brand.",
      "Register or transfer domains into a single managed account.",
      "Configure DNS for your website, hosting, and business email.",
      "Enable privacy protection and set renewal reminders.",
      "Support ongoing changes as your digital presence grows.",
    ],
    engagementModels: [
      "Self-service domain purchase via the Vimico domain store",
      "Managed domain registration and DNS setup",
      "Domain portfolio management (annual)",
    ],
    toolsTech: [
      "Vimico domain store",
      "DNS management console",
      "WHOIS privacy protection",
      "Cloudflare / hosting DNS integration",
    ],
    sampleDeliverables: [
      "Domain portfolio inventory",
      "DNS record configuration sheet",
      "Renewal schedule",
    ],
    caseStudies: [
      {
        title: "Domain and DNS set up alongside a new website launch",
        summary:
          "Registered the client domain, configured DNS for hosting and business email, and enabled privacy protection so the new website went live without downtime.",
      },
    ],
    faqs: [
      {
        q: "Which domain extensions can I buy?",
        a: "A wide range including .com, .in, .co, .io and many more, with competitive pricing and full DNS management included.",
      },
      {
        q: "Can you move my existing domains to Vimico?",
        a: "Yes. We handle transfers and consolidate scattered domains into one managed account.",
      },
      {
        q: "Do you also provide hosting?",
        a: "Yes — domain purchase pairs directly with our website development and hosting services.",
      },
    ],
    seoDescription:
      "Buy domain names with Vimico — domain purchase, transfers, DNS management, and domain privacy protection with competitive pricing on .com, .in, .io and more.",
    keywords:
      "buy domain name, domain purchase, domain registration, domain services, DNS management, domain privacy protection, domain transfer, cheap domain names",
  },
];

export const practiceAreaBySlug = (slug: string) =>
  practiceAreas.find((p) => p.slug === slug);