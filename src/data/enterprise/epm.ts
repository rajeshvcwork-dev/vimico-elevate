import type { EnterpriseService } from "./types";
import { serviceHeroes } from "./heroes";

export const service: EnterpriseService = {
  slug: "epm",
  title: "Enterprise Performance Management (EPM)",
  eyebrow: "Enterprise Performance Management",
  tagline:
    "Move planning, budgeting, forecasting and consolidation off spreadsheets and onto a system finance leaders can trust, control and close faster with.",
  heroImage: serviceHeroes.epm,

  challengesIntro:
    "For most finance teams, the pain is not a lack of data, it is the effort spent wrangling it. Every planning cycle and every close feels like starting from scratch in Excel, with version control problems layered on top.",
  challenges: [
    {
      title: "Budgeting cycles that take months",
      description:
        "Building next year's budget means chasing spreadsheet templates across departments, consolidating manually, and starting over every time a number changes upstream.",
    },
    {
      title: "Forecasts that are outdated the moment they are published",
      description:
        "By the time a forecast is consolidated and reviewed, the business has already moved, and the model has to be rebuilt rather than simply adjusted.",
    },
    {
      title: "Month-end close dragging on",
      description:
        "Consolidating entities, currencies and intercompany eliminations by hand pushes close timelines to weeks when the business needs answers in days.",
    },
    {
      title: "No single version of the truth",
      description:
        "Finance, FP&A and business units each maintain their own spreadsheet version of the numbers, and reconciling differences eats into time that should go toward analysis.",
    },
    {
      title: "Scenario planning that is nearly impossible",
      description:
        "Modeling a change in headcount, pricing or demand means manually rebuilding formulas across multiple linked spreadsheets, so scenario analysis rarely happens until it is too late.",
    },
    {
      title: "Reporting built manually every cycle",
      description:
        "Management packs are assembled by copying numbers into slides and spreadsheets each month, consuming days that could go into actually interpreting the results.",
    },
  ],

  whyItMattersIntro:
    "Spreadsheet-based planning does not fail dramatically, it fails slowly, through missed forecast accuracy, delayed decisions, and finance teams spending their time consolidating instead of advising the business.",
  risks: [
    {
      title: "Operational inefficiency",
      description:
        "FP&A analysts spend most of their time on data consolidation rather than analysis, limiting the value finance can add to strategic decisions.",
    },
    {
      title: "Delayed decision-making",
      description:
        "By the time consolidated numbers are ready, the window to act on them has often already narrowed.",
    },
    {
      title: "Compliance and audit risk",
      description:
        "Manually maintained consolidation and eliminations increase the risk of errors that surface during statutory audits or regulatory reporting.",
    },
    {
      title: "Manual, error-prone work",
      description:
        "Broken formulas, overwritten cells and version mismatches in shared spreadsheets are a constant source of reporting errors.",
    },
    {
      title: "Limited scenario visibility",
      description:
        "Without driver-based models, leadership cannot quickly evaluate the financial impact of a market shift, pricing change or new investment.",
    },
    {
      title: "Ceiling on growth",
      description:
        "Adding new entities, currencies or business units multiplies spreadsheet complexity rather than simply extending an existing structure.",
    },
    {
      title: "Lack of real-time visibility",
      description:
        "Executives make decisions on numbers that are days or weeks old rather than a live, trusted view of performance against plan.",
    },
    {
      title: "Talent retention risk",
      description:
        "Skilled FP&A professionals leave roles that consist mostly of manual spreadsheet consolidation rather than analysis and business partnering.",
    },
  ],

  understanding: {
    whatItIs:
      "Enterprise Performance Management is the set of processes and systems finance teams use to plan, budget, forecast, consolidate and report on business performance. Rather than each of these living in separate spreadsheets, an EPM platform connects them so a change in one assumption flows through budgets, forecasts and consolidated statements automatically. It covers everything from annual budgeting and rolling forecasts to month-end consolidation and management reporting.",
    whyBusinessesNeedIt:
      "As organizations grow across entities, currencies or business units, spreadsheet-based planning becomes a bottleneck rather than a tool. EPM gives finance leaders a controlled, auditable process for budgeting and forecasting, and gives the wider business a faster, more reliable close. It also frees FP&A teams from manual consolidation so they can spend time on driver-based analysis and scenario planning that actually informs decisions. For CFOs, EPM is what turns finance from a reporting function into a forward-looking advisory function.",
    misconceptions: [
      {
        myth: "EPM is only needed by large multinational corporations.",
        reality:
          "Mid-size businesses with multiple entities, cost centers or a growing planning burden benefit just as much, often seeing faster payback because their current process is entirely manual.",
      },
      {
        myth: "Implementing EPM means replacing Excel entirely.",
        reality:
          "Modern EPM platforms integrate with Excel as a familiar interface while running the underlying calculations, consolidation and controls in a governed system.",
      },
      {
        myth: "EPM projects take years to deliver value.",
        reality:
          "A focused first phase covering budgeting or consolidation can go live in a few months, with additional capabilities layered on afterward.",
      },
      {
        myth: "EPM is purely a finance system with no business input needed.",
        reality:
          "The best EPM implementations involve business unit leaders early, since driver-based planning depends on operational assumptions finance alone cannot define.",
      },
      {
        myth: "Once configured, the model never needs to change.",
        reality:
          "Planning models need periodic review and adjustment as the business, its structure, or its strategy evolves; treating it as a one-time build limits long-term value.",
      },
    ],
    whoShouldInvest: [
      "CFOs and finance leaders managing multi-entity or multi-currency consolidation",
      "Organizations whose budgeting cycle takes months instead of weeks",
      "Businesses that need faster, more accurate rolling forecasts",
      "Companies preparing for investment, acquisition or IPO readiness",
      "FP&A teams spending most of their time consolidating rather than analyzing",
      "Businesses wanting driver-based, scenario-ready planning models",
    ],
    benefits: [
      "Faster, more accurate month-end and year-end close",
      "Shorter budgeting and forecasting cycles",
      "Driver-based models that support real scenario planning",
      "One consolidated version of the truth across entities and business units",
      "Reduced manual, spreadsheet-based reconciliation",
      "Management reporting generated automatically instead of assembled manually",
      "More time for FP&A teams to focus on analysis over data wrangling",
      "Better audit trail and control over planning assumptions and changes",
    ],
  },

  offerings: [
    {
      category: "Consulting & Advisory",
      description:
        "Assessing current planning and reporting processes and defining the right EPM roadmap for the business.",
      items: [
        "Current-state FP&A process assessment",
        "EPM platform selection and business case",
        "Target operating model design",
        "Chart of accounts and hierarchy rationalization",
        "Roadmap and phasing definition",
      ],
    },
    {
      category: "Planning, Budgeting & Forecasting",
      description:
        "Building driver-based models that make annual budgets and rolling forecasts faster and more reliable.",
      items: [
        "Driver-based planning model design",
        "Annual budgeting workflow build",
        "Rolling forecast automation",
        "Workforce and capital expenditure planning modules",
        "Scenario and what-if modeling",
      ],
    },
    {
      category: "Consolidation & Close",
      description:
        "Automating multi-entity consolidation, intercompany eliminations and currency translation to shorten the close.",
      items: [
        "Multi-entity consolidation configuration",
        "Intercompany eliminations automation",
        "Currency translation and adjustment rules",
        "Close process workflow and task management",
        "Journal entry and allocation automation",
      ],
    },
    {
      category: "Data Integration",
      description:
        "Connecting the EPM platform to ERP, HR and other source systems so numbers flow in without manual uploads.",
      items: [
        "ERP and general ledger integration",
        "HRIS integration for workforce planning",
        "Data warehouse and BI tool integration",
        "Automated data validation rules",
        "Master data and hierarchy synchronization",
      ],
    },
    {
      category: "Management Reporting & Analytics",
      description:
        "Replacing manually built board packs with automated, drillable reporting.",
      items: [
        "Executive dashboard design",
        "Variance and driver analysis reporting",
        "Board and investor reporting packs",
        "Self-service reporting for business units",
        "KPI and metric standardization",
      ],
    },
    {
      category: "Training & Managed Support",
      description:
        "Ensuring finance teams are confident owning and evolving the platform after go-live.",
      items: [
        "Role-based training for finance and business users",
        "Model documentation and governance guidelines",
        "Post-go-live hypercare support",
        "Ongoing managed support and model updates",
        "Periodic planning model health reviews",
      ],
    },
  ],

  differentiators: [
    {
      title: "Business-first, not tool-first",
      description:
        "We start by understanding how the finance team plans and closes today, then design a model that fits, rather than forcing a generic template.",
    },
    {
      title: "Vendor-neutral platform guidance",
      description:
        "We help evaluate options across major EPM platforms based on your entity structure and complexity, not a fixed vendor relationship.",
    },
    {
      title: "Senior finance-literate consultants",
      description:
        "Our consultants understand FP&A and consolidation concepts, not just software configuration, so models reflect real financial logic.",
    },
    {
      title: "Focus on adoption, not just go-live",
      description:
        "A planning model finance does not trust or use is not a success. We measure success by whether the team actually plans and closes through the new system.",
    },
    {
      title: "Phased delivery with visible milestones",
      description:
        "We typically start with one high-value process, such as consolidation or budgeting, and expand scope once value is proven.",
    },
    {
      title: "Rigorous testing before go-live",
      description:
        "Every model is validated against historical actuals before it is trusted for live planning or reporting.",
    },
    {
      title: "Long-term partnership",
      description:
        "Planning needs change as the business changes. We stay engaged to tune models rather than delivering a static, one-time build.",
    },
  ],

  methodology: [
    {
      stage: "Discovery",
      purpose: "Understand current planning, budgeting and close processes in detail.",
      activities: [
        "Stakeholder interviews with finance and FP&A",
        "Review of existing spreadsheet models and reporting packs",
        "Mapping of current close and planning calendars",
      ],
      deliverables: ["Current-state process map", "Pain point summary"],
    },
    {
      stage: "Assessment",
      purpose: "Evaluate data quality, systems landscape and platform fit.",
      activities: [
        "Chart of accounts and hierarchy review",
        "Source system and data quality assessment",
        "Platform shortlisting against requirements",
      ],
      deliverables: ["Readiness assessment report", "Platform recommendation"],
    },
    {
      stage: "Planning",
      purpose: "Define scope, phasing and success criteria for the engagement.",
      activities: [
        "Scope and phasing definition",
        "Project timeline and resourcing plan",
        "Governance and sign-off structure",
      ],
      deliverables: ["Project charter", "Implementation roadmap"],
    },
    {
      stage: "Solution Design",
      purpose: "Design the planning, consolidation and reporting model structure.",
      activities: [
        "Driver-based model architecture design",
        "Consolidation and elimination rule design",
        "Reporting and dashboard layout design",
      ],
      deliverables: ["Solution design document", "Model architecture blueprint"],
    },
    {
      stage: "Implementation",
      purpose: "Build the models, workflows and integrations in the platform.",
      activities: [
        "Model and workflow build",
        "Integration development with ERP and HRIS",
        "Report and dashboard build",
      ],
      deliverables: ["Configured EPM environment", "Integration build notes"],
    },
    {
      stage: "Testing",
      purpose: "Validate the model against historical actuals and business scenarios.",
      activities: [
        "Historical actuals reconciliation",
        "Scenario and stress testing",
        "User acceptance testing with finance team",
      ],
      deliverables: ["Validation report", "UAT sign-off"],
    },
    {
      stage: "Training",
      purpose: "Prepare finance and business users to operate the system confidently.",
      activities: [
        "Role-based training sessions",
        "Model documentation walkthroughs",
        "Practice cycles in a sandbox environment",
      ],
      deliverables: ["Training materials", "Governance documentation"],
    },
    {
      stage: "Go Live",
      purpose: "Run the first live planning or close cycle on the new platform.",
      activities: [
        "Cutover planning and execution",
        "Parallel run against legacy process where needed",
        "Live cycle support",
      ],
      deliverables: ["Go-live checklist", "Cutover report"],
    },
    {
      stage: "Hypercare",
      purpose: "Support the finance team closely through the first few live cycles.",
      activities: [
        "Daily issue triage during first close or budget cycle",
        "Quick model adjustments based on feedback",
        "Usage monitoring",
      ],
      deliverables: ["Hypercare log", "Issue resolution summary"],
    },
    {
      stage: "Continuous Improvement",
      purpose: "Evolve the model as the business, structure and strategy change.",
      activities: [
        "Periodic model health reviews",
        "Enhancement requests prioritization",
        "New entity or module onboarding",
      ],
      deliverables: ["Quarterly review report", "Enhancement roadmap"],
    },
  ],

  outcomes: [
    { metric: "40-60%", title: "Faster close", description: "Automated consolidation and eliminations shorten the month-end close cycle." },
    { metric: "50-70%", title: "Shorter budgeting cycle", description: "Driver-based workflows replace manual spreadsheet consolidation across departments." },
    { metric: "2-3x", title: "More frequent forecasting", description: "Rolling forecasts become practical instead of a quarterly heavy lift." },
    { metric: "Single source", title: "Of consolidated truth", description: "Finance and business units work from the same governed numbers." },
    { metric: "Hours → minutes", title: "Management reporting", description: "Board packs and dashboards generate automatically instead of manually." },
    { metric: "30-40%", title: "Less manual reconciliation", description: "Integrated data feeds eliminate repetitive spreadsheet consolidation work." },
    { metric: "Higher accuracy", title: "Forecast vs actuals", description: "Driver-based models improve forecast reliability over static spreadsheets." },
    { metric: "Audit-ready", title: "Planning and consolidation trail", description: "Governed workflows create a clear audit trail for assumptions and changes." },
  ],

  industries: [
    { name: "Manufacturing", description: "Multi-plant cost consolidation and capital expenditure planning." },
    { name: "Retail & E-commerce", description: "Demand-driven revenue forecasting across channels and regions." },
    { name: "Financial Services", description: "Regulatory reporting and multi-entity consolidation at pace." },
    { name: "Professional Services", description: "Resource and utilization-driven revenue and cost planning." },
    { name: "Healthcare", description: "Departmental budgeting and cost center performance tracking." },
    { name: "Real Estate & Construction", description: "Project-based forecasting and cash flow planning." },
    { name: "Technology & SaaS", description: "Recurring revenue forecasting and headcount-driven cost planning." },
    { name: "Logistics", description: "Fuel, fleet and route-driven cost forecasting across regions." },
  ],

  technologies: [
    "Oracle EPM Cloud",
    "Anaplan",
    "SAP BPC",
    "Workday Adaptive Planning",
    "Power BI",
    "Board",
    "Jedox",
    "Excel integration layers",
    "ERP integrations (ERPNext, SAP, Oracle)",
    "HRIS integrations",
    "Jira for project tracking",
    "Data warehouse platforms",
  ],

  engagementModels: [
    {
      name: "EPM Advisory",
      bestFor: "Finance leaders evaluating whether and how to modernize planning and close",
      includes: "Process assessment, platform evaluation and business case development.",
    },
    {
      name: "Full Implementation",
      bestFor: "Organizations ready to implement planning, budgeting or consolidation on a platform",
      includes: "Discovery through go-live including model build, integration, testing and training. Commercials shared based on scope.",
    },
    {
      name: "Phased Rollout",
      bestFor: "Organizations wanting to prove value with one process before expanding",
      includes: "Starting with budgeting or consolidation, then adding forecasting and reporting in later phases.",
    },
    {
      name: "Managed Support",
      bestFor: "Organizations live on an EPM platform needing ongoing model tuning",
      includes: "Ongoing support, periodic model reviews and enhancement delivery on a retainer basis.",
    },
  ],

  faqs: [
    { q: "What is Enterprise Performance Management (EPM)?", a: "EPM refers to the processes and systems finance teams use to plan, budget, forecast, consolidate and report on business performance. Instead of managing these separately in spreadsheets, an EPM platform connects them so changes flow through automatically, reducing manual reconciliation and improving accuracy." },
    { q: "How is EPM different from ERP?", a: "ERP manages day-to-day transactional data such as sales, inventory and accounting entries, while EPM sits on top of that data to support planning, budgeting, forecasting and consolidated reporting. Many organizations run both, with ERP as the transaction system and EPM as the planning and analysis layer." },
    { q: "How much does an EPM implementation cost?", a: "Cost depends on the platform, the number of entities and currencies involved, the complexity of the consolidation rules, and how many planning processes are in scope. We share detailed commercials after understanding your entity structure and planning maturity rather than quoting a flat number upfront." },
    { q: "How long does an EPM implementation take?", a: "A focused first phase, such as budgeting or consolidation for a defined set of entities, typically takes a few months. More complex, multi-entity, multi-currency implementations covering planning, consolidation and reporting together take longer, and phasing is usually recommended." },
    { q: "Can EPM integrate with our existing ERP?", a: "Yes. EPM platforms are designed to integrate with ERP and general ledger systems to pull in actuals automatically, along with HRIS systems for workforce planning data, reducing manual uploads and keeping the model current." },
    { q: "Who needs EPM in an organization?", a: "CFOs, FP&A teams and finance leaders managing multi-entity consolidation or lengthy budgeting cycles benefit most directly, but business unit leaders also gain from faster, more accurate forecasts and driver-based scenario planning." },
    { q: "What is driver-based planning?", a: "Driver-based planning builds budgets and forecasts around the operational drivers that actually cause financial outcomes, such as units sold, headcount or occupancy rate, rather than simple percentage increases on prior year figures. This makes scenario analysis and what-if modeling far more meaningful." },
    { q: "How does EPM speed up the month-end close?", a: "EPM platforms automate multi-entity consolidation, intercompany eliminations and currency translation, and provide close process workflows with task tracking, which removes much of the manual reconciliation that extends close timelines in spreadsheet-based processes." },
    { q: "What is the ROI of implementing EPM?", a: "ROI typically comes from faster close and budgeting cycles, fewer errors from manual spreadsheet work, and FP&A time redirected from data consolidation to analysis that actually informs decisions. The exact payback period varies with organizational complexity, but efficiency gains are usually visible within the first couple of planning cycles." },
    { q: "Can EPM handle multi-currency consolidation?", a: "Yes, EPM platforms are built to handle multi-entity, multi-currency consolidation, including currency translation adjustments and intercompany eliminations, which is one of the most time-consuming parts of a manual, spreadsheet-based close." },
    { q: "Do we need to replace Excel entirely?", a: "No. Most EPM platforms offer Excel-based interfaces so users retain a familiar experience, while the underlying calculations, consolidation logic and controls run in a governed, auditable system rather than in disconnected files." },
    { q: "What happens if our organizational structure changes?", a: "EPM models are built with hierarchy and structure flexibility in mind, so adding or restructuring entities, cost centers or business units is a configuration change rather than a full model rebuild, provided the initial design accounted for this." },
    { q: "How do you choose the right EPM platform for us?", a: "We assess your entity structure, currency complexity, planning maturity, integration needs and budget, then compare relevant platforms such as Oracle EPM, Anaplan, SAP BPC or Workday Adaptive Planning against those requirements before recommending a fit." },
    { q: "Can EPM support scenario and what-if analysis?", a: "Yes, this is one of the core benefits. Driver-based models let finance and business leaders quickly model the impact of changes such as pricing, headcount or demand shifts without manually rebuilding spreadsheet formulas." },
    { q: "What is involved in EPM data migration?", a: "Migration typically involves mapping historical actuals, budget versions and organizational hierarchies from existing spreadsheets or legacy systems into the new platform, along with validating that migrated figures reconcile with previously reported numbers." },
    { q: "How is user adoption ensured after go-live?", a: "We provide role-based training, documented governance guidelines, and a hypercare period covering the first live planning or close cycle, so users are supported through the transition rather than left to figure out the new system alone." },
    { q: "Can EPM improve management reporting?", a: "Yes, EPM platforms can automate the generation of board packs, variance reports and executive dashboards that would otherwise be assembled manually each cycle, and allow drill-down into underlying drivers rather than static numbers." },
    { q: "Is EPM only relevant for large multinational companies?", a: "No, mid-size businesses with multiple cost centers, entities or a growing planning burden benefit significantly, often with faster payback because their current process is entirely manual and time-consuming." },
    { q: "What ongoing support is needed after implementation?", a: "Planning models need periodic review as the business, strategy or structure changes. We offer managed support for ongoing model tuning, new entity onboarding and enhancement requests beyond the initial implementation." },
    { q: "How does EPM reduce compliance risk?", a: "By automating consolidation, eliminations and currency translation with a clear audit trail of assumptions and changes, EPM reduces the manual errors and lack of traceability that create risk during statutory audits and regulatory reporting." },
    { q: "Can we start with just one process, like budgeting?", a: "Yes, we typically recommend starting with the highest-value process, often budgeting or consolidation, proving value, and then expanding to forecasting, workforce planning or advanced reporting in subsequent phases." },
    { q: "What skills does our finance team need to maintain the EPM platform?", a: "With proper training and documentation, most finance teams can maintain day-to-day model updates and reporting themselves. More complex changes such as new integrations or major structural changes typically benefit from ongoing specialist support." },
  ],

  related: [
    { slug: "erp-implementation", title: "ERP Implementation & Consulting", description: "Connect your EPM platform to a solid transactional system of record." },
    { slug: "powerbi", title: "Power BI & Analytics", description: "Extend EPM outputs into interactive dashboards across the business." },
    { slug: "business-transformation", title: "Business Transformation", description: "Align finance transformation with broader organizational change." },
    { slug: "ai-strategy", title: "AI Strategy", description: "Explore how AI-driven forecasting can complement your EPM investment." },
  ],

  cta: {
    heading: "Ready to rethink how your finance team plans and closes?",
    body: "Tell us about your current budgeting and close process. We will help you understand whether EPM makes sense now, and what a realistic first phase would look like.",
  },

  seo: {
    title: "Enterprise Performance Management (EPM) Consulting | Vimico",
    description: "EPM consulting and implementation for planning, budgeting, forecasting and consolidation, helping finance teams close faster and plan smarter.",
    ogTitle: "Enterprise Performance Management (EPM) Consulting",
    ogDescription: "Move planning, budgeting, forecasting and consolidation off spreadsheets with expert EPM implementation for finance teams.",
    imageAlt: "Enterprise Performance Management consulting for finance teams",
    primaryKeyword: "Enterprise Performance Management consulting",
    secondaryKeywords: ["EPM implementation", "financial planning and analysis", "budgeting and forecasting software", "consolidation software", "FP&A consulting", "driver-based planning"],
    semanticKeywords: ["month-end close automation", "rolling forecasts", "scenario modelling", "management reporting", "multi-entity consolidation", "financial consolidation"],
    longTailKeywords: ["EPM implementation for finance teams", "how to speed up month end close", "driver based planning consulting", "EPM vs ERP difference", "consolidation software for multi entity business"],
    entityKeywords: ["Oracle EPM", "Anaplan", "SAP BPC", "Workday Adaptive Planning", "FP&A"],
    questionKeywords: ["What is Enterprise Performance Management?", "How much does EPM implementation cost?", "How long does EPM implementation take?", "Can EPM integrate with our ERP?", "What is driver-based planning?", "How does EPM speed up month-end close?"],
  },
};
