import type { EnterpriseService } from "./types";
import { serviceHeroes } from "./heroes";

export const service: EnterpriseService = {
  slug: "powerbi",
  title: "Power BI & Business Intelligence",
  eyebrow: "Data & Decision Intelligence",
  tagline:
    "Turn scattered spreadsheets and disconnected systems into a single, trusted source of business truth that executives and frontline teams can act on with confidence.",
  heroImage: serviceHeroes.analytics,

  challengesIntro:
    "Most organisations don't have a data shortage — they have a trust and clarity shortage. Leaders are asked to make consequential decisions using numbers that were pulled from three different systems, refreshed at different times, and reconciled by hand.",
  challenges: [
    {
      title: "Every department has its own version of the truth",
      description:
        "Finance, sales and operations each maintain their own spreadsheets and definitions of the same metric, so leadership meetings start with arguing about whose number is right instead of what to do about it.",
    },
    {
      title: "Reports take days to produce and are outdated on arrival",
      description:
        "Analysts spend the majority of their week copying data between systems and formatting slides, leaving little time for the actual analysis that would help the business move faster.",
    },
    {
      title: "Executives can't see performance until the month is already over",
      description:
        "Without live dashboards, leadership is reacting to problems that happened weeks ago rather than catching and correcting them while they are still small.",
    },
    {
      title: "Self-service tools were rolled out without any governance",
      description:
        "Well-meaning teams built their own dashboards with inconsistent logic, duplicated data models, and no ownership, creating a sprawl that is now harder to untangle than having no tools at all.",
    },
    {
      title: "Data lives in silos across ERP, CRM and niche systems",
      description:
        "Getting a single view of a customer, product or project means manually stitching together exports from systems that were never designed to talk to each other.",
    },
    {
      title: "The business doesn't trust the numbers it already has",
      description:
        "Past experiences with broken reports or conflicting figures have left teams skeptical of dashboards, so they quietly fall back on personal spreadsheets to make decisions.",
    },
  ],

  whyItMattersIntro:
    "Delaying investment in disciplined business intelligence doesn't keep the organisation neutral — it keeps compounding the cost of decisions made on incomplete or incorrect information.",
  risks: [
    {
      title: "Operational inefficiency",
      description:
        "Teams spend hours each week manually assembling reports instead of using that time on analysis or execution.",
    },
    {
      title: "Revenue leakage",
      description:
        "Pricing errors, missed renewals and unnoticed churn signals go undetected without timely visibility into commercial performance.",
    },
    {
      title: "Poor customer experience",
      description:
        "Support and account teams lack a unified view of customer history, leading to slower responses and inconsistent service.",
    },
    {
      title: "Compliance and audit risk",
      description:
        "Manually reconciled figures are harder to trace and defend during audits, increasing exposure when regulators or auditors ask how a number was derived.",
    },
    {
      title: "Manual, repetitive work",
      description:
        "Skilled analysts are stuck copying and pasting data rather than contributing insight, which is both costly and demoralising.",
    },
    {
      title: "Constrained growth",
      description:
        "Expanding into new markets or product lines multiplies the manual reporting burden until the business physically cannot scale its current approach.",
    },
    {
      title: "Lack of real-time visibility",
      description:
        "Leadership discovers problems in monthly reviews that could have been caught and corrected days or weeks earlier with live data.",
    },
    {
      title: "Fragile scalability",
      description:
        "Spreadsheet-based reporting breaks down as data volume and organisational complexity grow, creating a ceiling on how far the business can expand without a rebuild.",
    },
  ],

  understanding: {
    whatItIs:
      "Business intelligence with Power BI is the discipline of turning raw operational data into governed, trusted, decision-ready information. It combines a well-designed semantic data model, secure data pipelines, and executive-grade dashboards so that every person in the organisation, from the CEO to a frontline supervisor, is working from the same numbers. Done properly, it is far more than dashboards — it is an information architecture that reflects how the business actually operates and measures success.",
    whyBusinessesNeedIt:
      "As organisations grow, the number of systems, teams and decisions multiplies faster than any individual's ability to manually track them. Business intelligence gives leadership a live, accurate picture of performance without waiting for someone to compile it. It shortens the distance between a signal appearing in the data and a decision being made in response. Without it, businesses are effectively driving using the rear-view mirror.",
    misconceptions: [
      {
        myth: "Power BI is just a reporting tool for pretty charts.",
        reality:
          "Power BI's real value is the semantic model underneath the visuals — the governed layer of business logic and relationships that ensures every report tells the same story.",
      },
      {
        myth: "Buying licenses and connecting a few data sources is enough.",
        reality:
          "Without data modelling, governance and a defined ownership structure, self-service BI quickly recreates the same silos and inconsistencies it was meant to solve.",
      },
      {
        myth: "Only the finance or IT team needs a BI strategy.",
        reality:
          "Sales, operations, HR and customer success all make daily decisions that improve dramatically with reliable, shared data — BI is a cross-functional capability, not a departmental tool.",
      },
      {
        myth: "More dashboards mean better decision-making.",
        reality:
          "Dozens of unmanaged dashboards create confusion; a smaller number of governed, purpose-built dashboards tied to real decisions drive far better outcomes.",
      },
      {
        myth: "Once it's built, a BI platform runs itself.",
        reality:
          "Data sources change, business logic evolves and new questions emerge, so a BI platform needs an ongoing operating model, not a one-time build.",
      },
    ],
    whoShouldInvest: [
      "Organisations relying on manually assembled spreadsheets for monthly or weekly reporting",
      "Businesses with data spread across ERP, CRM and multiple operational systems",
      "Leadership teams that disagree on which numbers are correct",
      "Companies scaling quickly and outgrowing ad-hoc reporting processes",
      "Organisations that have already invested in Power BI but are struggling with adoption or governance",
      "Businesses preparing for board reporting, fundraising or audit scrutiny that requires defensible numbers",
    ],
    benefits: [
      "A single, governed version of the truth across the organisation",
      "Faster, more confident decision-making at every level",
      "Significant reduction in time spent manually compiling reports",
      "Early visibility into risks and opportunities before they become urgent",
      "Consistent metric definitions across departments",
      "Self-service analytics that stay within governed guardrails",
      "Stronger audit trails for financial and compliance reporting",
      "A scalable data foundation that supports future growth and analytics maturity",
    ],
  },

  offerings: [
    {
      category: "Consulting & Advisory",
      description:
        "We help leadership define what 'good data' looks like for their business before a single dashboard is built.",
      items: [
        "BI strategy and roadmap development",
        "Data governance framework design",
        "Metric definition and KPI standardisation workshops",
        "BI platform and licensing assessment",
        "Data maturity assessments",
      ],
    },
    {
      category: "Implementation",
      description:
        "We build the underlying data models and dashboards that become the operational backbone of decision-making.",
      items: [
        "Semantic data model design",
        "Executive and operational dashboard build",
        "Row-level security and access control setup",
        "Power BI workspace and tenant configuration",
        "Report performance optimisation",
      ],
    },
    {
      category: "Integration",
      description:
        "We connect the systems that hold your data so information flows automatically instead of being manually collected.",
      items: [
        "ERP, CRM and finance system data integration",
        "API and connector development",
        "Data warehouse and lakehouse connectivity",
        "Cross-system data reconciliation logic",
      ],
    },
    {
      category: "Automation",
      description:
        "We remove the manual steps that slow reporting cycles down and introduce error into the numbers.",
      items: [
        "Automated data refresh scheduling",
        "Alerting and threshold-based notifications",
        "Automated report distribution",
        "Data quality validation pipelines",
      ],
    },
    {
      category: "Migration & Modernisation",
      description:
        "We move organisations off legacy reporting tools and spreadsheet-based processes onto a modern, governed BI platform.",
      items: [
        "Migration from legacy BI tools to Power BI",
        "Spreadsheet-to-dashboard conversion",
        "Data warehouse modernisation",
        "Consolidation of duplicate reports and models",
      ],
    },
    {
      category: "Training & Adoption",
      description:
        "We equip your teams to use, trust and extend the platform independently after launch.",
      items: [
        "Executive dashboard walkthroughs",
        "Power BI authoring training for analysts",
        "Data literacy workshops for business users",
        "Governance and ownership handover documentation",
      ],
    },
  ],

  differentiators: [
    {
      title: "We start with business questions, not technical builds",
      description:
        "Every dashboard we design traces back to a specific decision it needs to support, not a generic template.",
    },
    {
      title: "Vendor-neutral platform guidance",
      description:
        "We recommend the right combination of tools for your environment rather than defaulting to a single vendor's stack.",
    },
    {
      title: "Senior consultants, not junior analysts learning on your data",
      description:
        "Every engagement is led by consultants who have designed enterprise data models across multiple industries.",
    },
    {
      title: "Governance built in from day one",
      description:
        "We design ownership, definitions and access control alongside the dashboards, not as an afterthought once sprawl has already begun.",
    },
    {
      title: "Rigorous quality assurance on every data model",
      description:
        "We validate logic against source systems and business stakeholders before any dashboard is considered final.",
    },
    {
      title: "Built for long-term partnership",
      description:
        "We design platforms your internal team can extend, not ones that create permanent dependency on external consultants.",
    },
    {
      title: "Post-implementation support that outlasts go-live",
      description:
        "We stay engaged through hypercare and beyond to make sure adoption sticks and the platform evolves with the business.",
    },
  ],

  methodology: [
    {
      stage: "Discovery",
      purpose: "Understand how the business currently makes decisions and where data is falling short.",
      activities: ["Stakeholder interviews", "Current reporting process review", "Decision-mapping workshops"],
      deliverables: ["Discovery findings summary", "Decision-to-data map"],
    },
    {
      stage: "Assessment",
      purpose: "Evaluate the current data landscape, quality and governance maturity.",
      activities: ["Source system inventory", "Data quality audit", "Governance maturity scoring"],
      deliverables: ["Data landscape assessment report", "Governance maturity scorecard"],
    },
    {
      stage: "Planning",
      purpose: "Define scope, priorities and the roadmap for delivery.",
      activities: ["KPI prioritisation", "Roadmap sequencing", "Resourcing and licensing plan"],
      deliverables: ["BI roadmap", "Prioritised KPI backlog"],
    },
    {
      stage: "Solution Design",
      purpose: "Design the semantic model, security model and dashboard architecture.",
      activities: ["Data model design", "Security and access design", "Dashboard wireframing"],
      deliverables: ["Semantic model blueprint", "Dashboard wireframes"],
    },
    {
      stage: "Implementation",
      purpose: "Build the data pipelines, models and dashboards.",
      activities: ["Data pipeline development", "Model build", "Dashboard development"],
      deliverables: ["Working data model", "Draft dashboards"],
    },
    {
      stage: "Testing",
      purpose: "Validate accuracy, performance and security against real business scenarios.",
      activities: ["Data reconciliation testing", "Performance testing", "User acceptance testing"],
      deliverables: ["Test results report", "Sign-off documentation"],
    },
    {
      stage: "Training",
      purpose: "Prepare business users and analysts to use and maintain the platform.",
      activities: ["Executive walkthroughs", "Analyst authoring training", "Governance handover sessions"],
      deliverables: ["Training materials", "Governance runbook"],
    },
    {
      stage: "Go Live",
      purpose: "Deploy dashboards into production for the wider organisation.",
      activities: ["Production deployment", "Access rollout", "Launch communications"],
      deliverables: ["Live production dashboards", "Rollout communication pack"],
    },
    {
      stage: "Hypercare",
      purpose: "Provide close support immediately after launch to resolve issues quickly.",
      activities: ["Daily issue triage", "Rapid fixes", "Usage monitoring"],
      deliverables: ["Hypercare log", "Early adoption report"],
    },
    {
      stage: "Continuous Improvement",
      purpose: "Evolve the platform as the business and its data needs change.",
      activities: ["Quarterly model reviews", "New use case intake", "Performance tuning"],
      deliverables: ["Continuous improvement plan", "Updated roadmap"],
    },
  ],

  outcomes: [
    { metric: "Up to 70% reduction", title: "Less time spent compiling reports", description: "Automated data pipelines eliminate the manual assembly work that previously consumed analysts' weeks." },
    { metric: "Same-day visibility", title: "Faster access to performance data", description: "Leadership sees performance as it happens rather than waiting for month-end close." },
    { metric: "One shared model", title: "A single version of the truth", description: "Every department reports from the same governed data model, ending disputes over conflicting numbers." },
    { metric: "Fewer reporting errors", title: "Improved data accuracy", description: "Automated validation catches inconsistencies before they reach a dashboard or a decision." },
    { metric: "Higher adoption", title: "Self-service usage without chaos", description: "Business users explore data confidently within a governed structure instead of building their own shadow reports." },
    { metric: "Faster audits", title: "Stronger compliance readiness", description: "Traceable data lineage makes it easier to answer auditor and regulator questions about figures." },
    { metric: "Earlier warnings", title: "Proactive risk detection", description: "Threshold-based alerts flag anomalies before they escalate into larger operational or financial issues." },
    { metric: "Scalable foundation", title: "Reporting that grows with the business", description: "The data architecture supports new business units, products or markets without rebuilding from scratch." },
    { metric: "Reduced tool sprawl", title: "Consolidated reporting landscape", description: "Duplicate spreadsheets and disconnected dashboards are replaced by one governed platform." },
  ],

  industries: [
    { name: "Financial Services", description: "Consolidated, auditable reporting across products, branches and regulatory requirements." },
    { name: "Manufacturing", description: "Real-time visibility into production output, downtime and supply chain performance." },
    { name: "Retail & E-commerce", description: "Unified view of sales, inventory and customer behaviour across channels." },
    { name: "Healthcare", description: "Operational and clinical dashboards that respect data privacy while improving oversight." },
    { name: "Professional Services", description: "Utilisation, project margin and pipeline visibility across practices and offices." },
    { name: "Logistics & Supply Chain", description: "End-to-end tracking of shipments, costs and delivery performance across networks." },
    { name: "Public Sector", description: "Transparent, defensible reporting for budgets, programmes and citizen services." },
    { name: "Technology & SaaS", description: "Consolidated product usage, revenue and churn metrics for fast-moving leadership teams." },
  ],

  technologies: [
    "Microsoft Power BI",
    "Power BI Premium & Fabric",
    "Azure Synapse Analytics",
    "Azure Data Factory",
    "SQL Server",
    "Snowflake",
    "Microsoft Dataverse",
    "Excel & Power Query",
    "DAX",
    "Azure Data Lake",
    "Tableau",
    "SharePoint & Teams integration",
  ],

  engagementModels: [
    { name: "BI Strategy Sprint", bestFor: "Organisations that need clarity on data priorities before building anything", includes: "Discovery workshops, KPI prioritisation, governance recommendations and a roadmap" },
    { name: "Dashboard Implementation", bestFor: "Businesses ready to build a defined set of governed dashboards", includes: "Data modelling, dashboard build, testing and training for a scoped set of use cases" },
    { name: "Enterprise BI Platform Build", bestFor: "Organisations consolidating reporting across multiple departments and systems", includes: "End-to-end architecture, integration, governance framework and phased rollout" },
    { name: "Managed BI Support", bestFor: "Businesses that need ongoing platform evolution and support after go-live", includes: "Continuous model updates, new dashboard development and governance oversight" },
  ],

  faqs: [
    { q: "What does a Power BI consulting engagement actually include?", a: "It typically includes discovery of your current reporting process, design of a governed data model, dashboard development, integration with source systems, testing and training. The exact scope depends on how mature your existing data infrastructure is." },
    { q: "Why do businesses need a BI strategy instead of just building dashboards?", a: "Dashboards built without an underlying strategy tend to duplicate logic and create confusion rather than clarity. A strategy ensures every dashboard maps to a real decision and uses a consistent, governed definition of each metric." },
    { q: "How much does a Power BI implementation cost?", a: "Cost depends primarily on the number of data sources being integrated, the complexity of the data model, the number of dashboards required, and the level of governance and training needed. We scope this transparently after an initial assessment rather than quoting a flat number upfront." },
    { q: "How long does a typical Power BI project take?", a: "A focused dashboard implementation can take a matter of weeks, while an enterprise-wide BI platform consolidating multiple systems can take several months. We sequence delivery so early value is visible well before the full programme is complete." },
    { q: "Can Power BI integrate with our existing ERP and CRM systems?", a: "Yes, Power BI connects to most major ERP, CRM and finance systems through native connectors, APIs or a data warehouse layer. We design the integration approach based on your specific systems and data volumes." },
    { q: "Who in the organisation actually needs this?", a: "Any team making recurring decisions based on data benefits — finance, sales, operations, HR and executive leadership most commonly. The specific dashboards differ by function, but the underlying governed data model serves everyone." },
    { q: "What are the main benefits of investing in business intelligence?", a: "The core benefits are faster decision-making, a single trusted version of the truth, reduced manual reporting effort, and earlier visibility into risks and opportunities. Over time it also strengthens audit readiness and supports scalable growth." },
    { q: "What challenges typically arise during a BI implementation?", a: "The most common challenges are poor underlying data quality, unclear ownership of metric definitions, and resistance to moving away from familiar spreadsheets. Addressing these early, rather than after go-live, is central to our methodology." },
    { q: "How do we measure ROI from a Power BI investment?", a: "ROI is typically measured through time saved on manual reporting, faster decision cycles, reduced reporting errors, and improved ability to catch and correct issues early. We help define these baseline metrics before the project starts so improvement can be tracked." },
    { q: "How is data governance handled after go-live?", a: "We establish clear ownership for each data domain, document metric definitions, and set up processes for managing changes to the data model. This prevents the sprawl and inconsistency that often creeps back in after the initial build." },
    { q: "Do we need to migrate to a data warehouse before using Power BI?", a: "Not always — Power BI can connect directly to many source systems for smaller scopes. For larger, multi-system environments, a data warehouse or lakehouse layer typically improves performance, governance and long-term scalability." },
    { q: "What happens if our data quality is poor to begin with?", a: "We run a data quality assessment early in the engagement to identify gaps, and build validation and cleansing steps into the data pipeline. In some cases, source system process changes are recommended alongside the BI build." },
    { q: "Can existing dashboards and reports be migrated into Power BI?", a: "Yes, we regularly consolidate legacy BI tools and ad-hoc spreadsheets into a single governed Power BI environment, preserving the logic that matters while removing duplication." },
    { q: "How do you ensure adoption after the dashboards are delivered?", a: "We combine role-specific training, clear documentation and a hypercare period focused on real usage, not just technical functionality. Adoption is tracked and addressed actively rather than assumed." },
    { q: "Is Power BI suitable for small and mid-sized businesses, or only large enterprises?", a: "Power BI scales well for organisations of many sizes; the difference is in scope and complexity of the engagement, not suitability. Mid-sized businesses often see faster time-to-value because their data landscape is simpler to consolidate." },
    { q: "What is a semantic data model and why does it matter?", a: "A semantic model is the governed layer that defines business logic, relationships and calculations once, so every report built on top of it is automatically consistent. Without it, each dashboard risks calculating the same metric differently." },
    { q: "How do you handle sensitive or confidential data in dashboards?", a: "We implement row-level security and role-based access controls so users only see the data relevant to their role, alongside compliance with your existing data protection policies." },
    { q: "Can Power BI support real-time or near-real-time reporting?", a: "Yes, Power BI supports scheduled and near-real-time data refresh depending on the source system and licensing tier. We help determine the right refresh cadence based on how time-sensitive each decision actually is." },
    { q: "What ongoing support is available after implementation?", a: "We offer managed support engagements covering model updates, new dashboard requests, performance tuning and governance oversight, so the platform continues to evolve with the business." },
    { q: "How do you decide which KPIs and dashboards to build first?", a: "We run prioritisation workshops with stakeholders to identify which decisions are most time-sensitive or high-impact, and sequence delivery so the highest-value dashboards are available first." },
    { q: "Will our internal team be able to maintain the platform independently?", a: "Yes, we design for internal capability, providing documentation, training and governance frameworks so your team can extend and maintain the platform without ongoing dependency on external consultants." },
    { q: "What is the biggest mistake companies make when adopting Power BI?", a: "The most common mistake is treating it as a tool rollout rather than a data and governance discipline, which leads to fragmented dashboards that repeat the same trust problems the platform was meant to solve." },
  ],

  related: [
    { slug: "ai-strategy", title: "AI Strategy & Business AI Adoption", description: "Extend your governed data foundation into predictive and generative AI use cases." },
    { slug: "business-process-automation", title: "Business Process Automation", description: "Automate the manual data handling steps feeding your reports and dashboards." },
    { slug: "epm", title: "Enterprise Performance Management", description: "Connect planning, budgeting and reporting into one performance management cycle." },
    { slug: "business-transformation", title: "Business Transformation", description: "Align your data strategy with broader organisational change initiatives." },
  ],

  cta: {
    heading: "Ready to trust your data again?",
    body: "Let's assess your current reporting landscape and design a governed BI foundation that leadership can actually rely on for decisions.",
  },

  seo: {
    title: "Power BI & Business Intelligence Consulting | Vimico",
    description: "Build a governed Power BI platform that gives your organisation one trusted source of truth for faster, confident decision-making.",
    ogTitle: "Power BI & Business Intelligence Consulting | Vimico",
    ogDescription: "Turn scattered spreadsheets into governed, trusted dashboards with Vimico's Power BI consulting expertise.",
    imageAlt: "Executive team reviewing a Power BI business intelligence dashboard",
    primaryKeyword: "Power BI consulting",
    secondaryKeywords: [
      "business intelligence consulting",
      "Power BI implementation",
      "data governance consulting",
      "enterprise dashboards",
      "self-service BI",
      "data modelling consulting",
    ],
    semanticKeywords: [
      "semantic data model",
      "single version of truth",
      "executive dashboards",
      "governed self-service analytics",
      "data visualization",
      "KPI reporting",
      "data warehouse",
      "real-time reporting",
    ],
    longTailKeywords: [
      "how to build a governed Power BI dashboard for executives",
      "Power BI consulting for enterprise reporting",
      "business intelligence strategy for growing companies",
      "migrate spreadsheets to Power BI dashboards",
      "Power BI data governance framework consulting",
    ],
    entityKeywords: ["Microsoft Power BI", "Azure Synapse Analytics", "Power BI Premium", "DAX", "Microsoft Fabric"],
    questionKeywords: [
      "What is Power BI consulting?",
      "Why do businesses need business intelligence?",
      "How much does a Power BI implementation cost?",
      "How long does a Power BI project take?",
      "Can Power BI integrate with our ERP system?",
      "What is a semantic data model?",
    ],
  },
};
