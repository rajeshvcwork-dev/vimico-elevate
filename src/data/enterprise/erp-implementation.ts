import type { EnterpriseService } from "./types";
import { serviceHeroes } from "./heroes";

export const service: EnterpriseService = {
  slug: "erp-implementation",
  title: "ERP Implementation & ERP Consulting",
  eyebrow: "ERP Implementation & Consulting",
  tagline:
    "Replace disconnected spreadsheets and manual reconciliations with a single system of record for inventory, accounting, sales and operations, implemented at a cost and pace that fits a growing business.",
  heroImage: serviceHeroes.erp,

  challengesIntro:
    "Most small and mid-size businesses do not start with a broken system, they end up with one. Every new product line, warehouse or hire adds another spreadsheet, another workaround, another person who has to be asked before a number can be trusted.",
  challenges: [
    {
      title: "Inventory numbers nobody trusts",
      description:
        "Stock counts in the system rarely match the warehouse. Teams keep a separate shadow spreadsheet to know what is actually available, and orders still get promised against stock that does not exist.",
    },
    {
      title: "Month-end close takes weeks, not days",
      description:
        "Finance spends the first two weeks of every month reconciling sales, purchases and bank data across disconnected tools before anyone can trust the numbers enough to report them.",
    },
    {
      title: "Receivables slipping through the cracks",
      description:
        "Invoices are raised late, follow-ups happen from memory, and there is no single view of who owes what and since when, so cash gets tied up longer than it should.",
    },
    {
      title: "Every department has its own spreadsheet truth",
      description:
        "Sales, warehouse and finance each keep their own version of the same data. Reconciling them consumes hours every week and still leaves gaps that surface during audits or investor reviews.",
    },
    {
      title: "Growth outpacing the tools",
      description:
        "The accounting software that worked for one location or one product line breaks down the moment a second warehouse, currency or sales channel is added.",
    },
    {
      title: "Fear of picking the wrong ERP",
      description:
        "Owners have heard horror stories of ERP projects that ran over budget, over time, or were abandoned midway, so they keep delaying a decision while the manual cost keeps compounding.",
    },
  ],

  whyItMattersIntro:
    "Delaying an ERP decision does not freeze the cost of the current setup, it compounds it. Every quarter without a unified system adds more manual reconciliation, more stock write-offs and more decisions made on outdated numbers.",
  risks: [
    {
      title: "Operational inefficiency",
      description:
        "Staff spend hours re-entering the same data into different tools instead of doing work that grows the business.",
    },
    {
      title: "Revenue leakage",
      description:
        "Missed invoices, unbilled services and pricing errors go unnoticed without a system that ties orders to billing automatically.",
    },
    {
      title: "Poor customer experience",
      description:
        "Sales teams promise delivery dates against inventory numbers that are wrong, damaging trust with repeat customers.",
    },
    {
      title: "Compliance and audit risk",
      description:
        "Inconsistent records across spreadsheets make statutory filings, audits and lender due diligence slower and riskier.",
    },
    {
      title: "Manual, error-prone work",
      description:
        "Reconciling spreadsheets by hand introduces mistakes that ripple into financial statements and inventory valuation.",
    },
    {
      title: "Ceiling on growth",
      description:
        "Without a scalable system, adding a warehouse, a branch or a new sales channel means adding more manual work rather than more revenue efficiently.",
    },
    {
      title: "Lack of real-time visibility",
      description:
        "Leadership makes decisions on numbers that are days or weeks old because consolidating current data takes that long.",
    },
    {
      title: "Difficulty scaling the team",
      description:
        "New hires take longer to become productive when processes live in someone's head or in undocumented spreadsheets rather than a structured system.",
    },
  ],

  understanding: {
    whatItIs:
      "An ERP (Enterprise Resource Planning) system is a single platform that connects inventory, accounting, sales, purchasing and operations so that everyone works off the same numbers. Instead of five tools and three spreadsheets, a transaction such as a sales order updates stock, triggers an invoice and reflects in the ledger automatically. Implementation is the process of configuring, migrating data into, and rolling out that system so it matches how the business actually operates, not a generic template.",
    whyBusinessesNeedIt:
      "As a business adds products, locations or people, manual coordination between spreadsheets stops scaling and starts costing money in errors, delays and lost visibility. An ERP gives owners and managers one accurate, current view of stock, cash and orders instead of five conflicting ones. It also creates the structure needed to raise funding, pass audits, or bring in new hires without re-explaining how things are tracked. Businesses that implement ERP thoughtfully typically see faster closes, fewer stockouts, and better cash collection within the first year.",
    misconceptions: [
      {
        myth: "ERP is only for large enterprises with big budgets.",
        reality:
          "Open-source platforms such as ERPNext, iDempiere and Odoo bring ERP-grade functionality to small and mid-size businesses at a fraction of traditional licensing costs.",
      },
      {
        myth: "Implementing ERP means changing how the business runs.",
        reality:
          "Good implementations configure the system around existing, working processes and only recommend process changes where they genuinely reduce effort or risk.",
      },
      {
        myth: "Once it is live, the ERP runs itself.",
        reality:
          "Systems need periodic tuning, user training refreshers and support as the business changes; ongoing support is part of a realistic plan, not an afterthought.",
      },
      {
        myth: "Data migration is a simple export-import task.",
        reality:
          "Migrating years of inconsistent spreadsheet data is usually the most time-consuming and risk-laden part of the project, and needs dedicated cleansing and validation.",
      },
      {
        myth: "Any consultant can implement any ERP equally well.",
        reality:
          "Outcomes depend heavily on whether the implementer understands the specific platform's data model and the client's industry workflows, not just its screens.",
      },
    ],
    whoShouldInvest: [
      "Businesses still running core operations on spreadsheets or basic accounting software",
      "Companies opening a second location, warehouse or sales channel",
      "Organizations preparing for external audits, investment or lender due diligence",
      "Distributors and manufacturers struggling with inventory accuracy",
      "Service businesses that need project, billing and resource data in one place",
      "Companies that have outgrown or are unhappy with a previous ERP attempt",
    ],
    benefits: [
      "One accurate, shared source of truth for inventory, sales and finance",
      "Faster month-end close through automated reconciliation",
      "Fewer stockouts and less dead inventory through real-time stock visibility",
      "Improved receivables collection through automated invoicing and reminders",
      "Reduced manual data entry and fewer reconciliation errors",
      "Easier onboarding of new staff through documented, systemized processes",
      "Better decisions from real-time dashboards instead of week-old spreadsheets",
      "A platform that scales with new locations, currencies and product lines",
    ],
  },

  offerings: [
    {
      category: "ERP Selection & Advisory",
      description:
        "Vendor-neutral guidance to choose the right platform for the business, not the platform with the biggest sales team.",
      items: [
        "Current-state process and pain point assessment",
        "Requirements definition workshops",
        "Platform shortlisting across open-source and commercial ERPs",
        "Total cost of ownership comparison",
        "Vendor and implementation partner evaluation",
      ],
    },
    {
      category: "Implementation",
      description:
        "End-to-end configuration of ERPNext, iDempiere, Odoo or comparable platforms around real business workflows.",
      items: [
        "Module configuration for inventory, sales, purchase and accounting",
        "Chart of accounts and workflow design",
        "Multi-location and multi-currency setup",
        "Custom fields, print formats and approval workflows",
        "User role and permission structuring",
      ],
    },
    {
      category: "Data Migration",
      description:
        "Careful extraction, cleansing and validation of historical data so the new system starts accurate, not just live.",
      items: [
        "Legacy data audit and cleansing",
        "Master data structuring (items, customers, vendors, chart of accounts)",
        "Historical transaction migration",
        "Opening balance reconciliation",
        "Post-migration data validation and sign-off",
      ],
    },
    {
      category: "Integration",
      description:
        "Connecting the ERP with the other tools the business already relies on, so data enters once and flows everywhere it is needed.",
      items: [
        "E-commerce and POS integration",
        "Payment gateway and banking integration",
        "CRM and marketing tool integration",
        "Third-party logistics and shipping integration",
        "Custom API integrations for legacy tools",
      ],
    },
    {
      category: "Automation & Reporting",
      description:
        "Turning routine, manual tasks into automated workflows and giving leadership dashboards they can act on.",
      items: [
        "Automated invoicing and payment reminders",
        "Low-stock and reorder alerts",
        "Approval workflow automation",
        "Custom management dashboards",
        "Scheduled financial and inventory reports",
      ],
    },
    {
      category: "Training & Managed Support",
      description:
        "Making sure the system is actually adopted and stays reliable long after go-live.",
      items: [
        "Role-based user training",
        "Process documentation and SOPs",
        "Post-go-live hypercare support",
        "Ongoing managed support and enhancement",
        "Periodic system health reviews",
      ],
    },
  ],

  differentiators: [
    {
      title: "Business-first, not platform-first",
      description:
        "We start with how the business actually operates and only then decide which platform and configuration fits, instead of forcing operations into a vendor template.",
    },
    {
      title: "Vendor-neutral advice",
      description:
        "We are not tied to a single ERP vendor's license revenue, so recommendations are based on fit and cost, including open-source options like ERPNext, iDempiere and Odoo.",
    },
    {
      title: "Senior consultants on delivery, not just sales",
      description:
        "The people who scope the project are the same people accountable for its configuration and go-live, reducing the handoff gaps that derail many ERP projects.",
    },
    {
      title: "Data migration treated as its own discipline",
      description:
        "We budget real time for cleansing and validating historical data rather than treating migration as a checkbox before go-live.",
    },
    {
      title: "Adoption over activation",
      description:
        "A system nobody uses correctly is not a success. We measure the project by whether staff use it accurately day to day, not just whether it went live on schedule.",
    },
    {
      title: "Transparent, phased delivery",
      description:
        "Work is broken into visible phases with sign-off at each stage, so there are no surprises in scope, timeline or cost.",
    },
    {
      title: "Long-term partnership, not a one-time project",
      description:
        "We stay engaged after go-live to tune the system as the business changes, rather than disappearing once the invoice is settled.",
    },
    {
      title: "Quality assurance before go-live",
      description:
        "Every configuration is tested against real business scenarios before users ever see it, reducing costly post-launch firefighting.",
    },
  ],

  methodology: [
    {
      stage: "Discovery",
      purpose: "Understand how the business actually runs today, beyond what the org chart says.",
      activities: [
        "Stakeholder interviews across finance, operations and sales",
        "Review of existing spreadsheets and tools",
        "Identification of critical pain points and workarounds",
      ],
      deliverables: ["Current-state process map", "Pain point summary"],
    },
    {
      stage: "Assessment",
      purpose: "Evaluate readiness, data quality and platform fit before committing to a solution.",
      activities: [
        "Data quality audit of existing records",
        "Technical and process readiness assessment",
        "Platform shortlisting against requirements",
      ],
      deliverables: ["Readiness assessment report", "Platform recommendation"],
    },
    {
      stage: "Planning",
      purpose: "Define scope, timeline and success criteria before configuration starts.",
      activities: [
        "Scope and phasing definition",
        "Project timeline and resourcing plan",
        "Risk and dependency mapping",
      ],
      deliverables: ["Project charter", "Implementation roadmap"],
    },
    {
      stage: "Solution Design",
      purpose: "Translate business processes into a concrete system configuration.",
      activities: [
        "Module and workflow design",
        "Chart of accounts and approval hierarchy design",
        "Integration and reporting requirements design",
      ],
      deliverables: ["Solution design document", "Configuration blueprint"],
    },
    {
      stage: "Implementation",
      purpose: "Configure and build the system according to the agreed design.",
      activities: [
        "Module configuration",
        "Custom field and workflow build",
        "Integration development",
      ],
      deliverables: ["Configured system environment", "Integration build notes"],
    },
    {
      stage: "Data Migration & Testing",
      purpose: "Move historical data across accurately and confirm the system behaves as expected.",
      activities: [
        "Master and transactional data migration",
        "Reconciliation of opening balances",
        "User acceptance testing against real scenarios",
      ],
      deliverables: ["Migration validation report", "UAT sign-off"],
    },
    {
      stage: "Training",
      purpose: "Prepare users to operate the system confidently from day one.",
      activities: [
        "Role-based training sessions",
        "Process documentation walkthroughs",
        "Practice runs in a sandbox environment",
      ],
      deliverables: ["Training materials", "SOP documentation"],
    },
    {
      stage: "Go Live",
      purpose: "Transition operations onto the new system with minimal disruption.",
      activities: [
        "Cutover planning and execution",
        "Final data validation",
        "On-site or remote go-live support",
      ],
      deliverables: ["Go-live checklist", "Cutover report"],
    },
    {
      stage: "Hypercare",
      purpose: "Provide intensive support immediately after go-live while users adjust.",
      activities: [
        "Daily issue triage and resolution",
        "Usage monitoring and quick fixes",
        "Feedback collection from frontline users",
      ],
      deliverables: ["Hypercare log", "Issue resolution summary"],
    },
    {
      stage: "Continuous Improvement",
      purpose: "Keep the system aligned with the business as it evolves.",
      activities: [
        "Periodic system health reviews",
        "Enhancement requests prioritization",
        "New module or process rollouts",
      ],
      deliverables: ["Quarterly review report", "Enhancement roadmap"],
    },
  ],

  outcomes: [
    { metric: "40-60%", title: "Faster month-end close", description: "Automated reconciliation replaces manual spreadsheet consolidation." },
    { metric: "Days → hours", title: "Faster inventory visibility", description: "Real-time stock data replaces periodic manual counts." },
    { metric: "20-30%", title: "Reduction in stockouts", description: "Reorder alerts and accurate stock levels prevent lost sales." },
    { metric: "15-25%", title: "Faster receivables collection", description: "Automated invoicing and reminders reduce days sales outstanding." },
    { metric: "2x", title: "Reporting speed", description: "Dashboards replace manually assembled spreadsheet reports." },
    { metric: "30-50%", title: "Less manual data entry", description: "Integrated workflows eliminate duplicate entry across tools." },
    { metric: "Single source", title: "Of truth across departments", description: "Finance, sales and warehouse work from the same live data." },
    { metric: "Audit-ready", title: "Financial records", description: "Structured data and workflows simplify audits and due diligence." },
  ],

  industries: [
    { name: "Distribution & Wholesale", description: "Multi-warehouse inventory accuracy and purchase order automation." },
    { name: "Manufacturing", description: "Bill of materials, production planning and shop floor data integration." },
    { name: "Retail & E-commerce", description: "Unified inventory across online and offline sales channels." },
    { name: "Professional Services", description: "Project costing, resource allocation and billing in one system." },
    { name: "Healthcare & Pharma Distribution", description: "Batch tracking, expiry management and regulatory record-keeping." },
    { name: "Construction & Real Estate", description: "Project-wise cost tracking and vendor payment management." },
    { name: "F&B and FMCG", description: "Perishable inventory management and demand-driven replenishment." },
    { name: "Logistics", description: "Fleet, warehouse and order fulfillment data unified in one platform." },
  ],

  technologies: [
    "ERPNext",
    "iDempiere",
    "Odoo",
    "Frappe Framework",
    "MySQL / MariaDB",
    "PostgreSQL",
    "Power BI",
    "Zapier / Make",
    "REST & webhook integrations",
    "Payment gateway APIs",
    "Shopify / WooCommerce",
    "Tally migration tooling",
    "Docker for deployment",
    "Jira for project tracking",
  ],

  engagementModels: [
    {
      name: "ERP Selection Advisory",
      bestFor: "Businesses unsure which platform fits their needs",
      includes: "Requirements workshops, platform shortlisting, TCO comparison and vendor-neutral recommendation.",
    },
    {
      name: "Full Implementation",
      bestFor: "Businesses ready to commit to a platform and migrate operations",
      includes: "Discovery through go-live, including configuration, migration, integration and training. Commercials shared based on scope.",
    },
    {
      name: "Phased Rollout",
      bestFor: "Businesses wanting to de-risk by starting with core finance and inventory before expanding scope",
      includes: "Prioritized module rollout in stages, with each phase validated before the next begins.",
    },
    {
      name: "Managed Support",
      bestFor: "Businesses live on an ERP that needs ongoing tuning, fixes or enhancements",
      includes: "Ongoing support, periodic health reviews and enhancement delivery on a retainer basis.",
    },
  ],

  faqs: [
    { q: "What is ERP implementation?", a: "ERP implementation is the process of configuring an enterprise resource planning system, migrating existing data into it, and rolling it out so that inventory, accounting, sales and operations run on one connected platform. It covers everything from selecting the right platform to training users and supporting the business after go-live." },
    { q: "Why do small and mid-size businesses need an ERP?", a: "As a business grows past one product line or one location, spreadsheets and disconnected tools stop scaling. An ERP gives owners a single, accurate view of stock, cash and orders, which reduces errors, speeds up reporting and makes it far easier to add new locations, products or staff." },
    { q: "How much does ERP implementation cost?", a: "Cost depends on the platform chosen, the number of modules, data volume, integrations needed and the complexity of existing processes. Open-source platforms like ERPNext, iDempiere and Odoo generally reduce licensing costs significantly compared to traditional enterprise ERPs. We share detailed commercials after a scoping discussion rather than quoting a flat number upfront." },
    { q: "How long does an ERP implementation take?", a: "A focused implementation covering core finance and inventory modules for a single location typically takes a few months from discovery to go-live. Multi-location, multi-currency or heavily customized implementations take longer. Phasing the rollout can get core functionality live sooner while expanding scope afterward." },
    { q: "Can our existing tools integrate with the ERP?", a: "Most modern ERPs, including ERPNext and Odoo, support integration with e-commerce platforms, payment gateways, CRMs and shipping tools through APIs. We assess your existing toolset during discovery and design integrations so data flows automatically instead of being re-entered manually." },
    { q: "Who should be involved from our side during implementation?", a: "At minimum, a decision-maker from finance and one from operations should be involved, along with day-to-day users who understand current workarounds. Their input during discovery and testing is what makes the configuration actually match how the business runs." },
    { q: "What is the biggest risk in an ERP project?", a: "Poor data migration and lack of user adoption are the two most common causes of ERP project failure. Data that is not cleansed properly leads to inaccurate reports post go-live, and if users are not trained and supported, they revert to spreadsheets, undoing the investment." },
    { q: "Is open-source ERP reliable for a growing business?", a: "Yes. Platforms like ERPNext, iDempiere and Odoo are used by thousands of businesses globally and offer the same core functionality as commercial ERPs, including inventory, accounting, manufacturing and CRM modules, at a lower total cost of ownership." },
    { q: "Can you migrate data from Tally, Excel or QuickBooks?", a: "Yes. We routinely migrate master data and historical transactions from Tally, Excel-based records and QuickBooks into ERP platforms, including opening balance reconciliation to ensure the new system starts with accurate figures." },
    { q: "What happens after go-live?", a: "We provide a hypercare period immediately after go-live to resolve issues quickly as users adjust, followed by an ongoing managed support option for ongoing tuning, fixes and enhancements as the business evolves." },
    { q: "Do we need to change our processes to fit the ERP?", a: "Not necessarily. We configure the system around your existing, working processes wherever possible and only recommend process changes where they clearly reduce manual effort, risk or error, explaining the trade-offs before any change is made." },
    { q: "How do we know which ERP platform is right for us?", a: "The right platform depends on your industry, transaction volume, budget, and the specific modules you need, such as manufacturing, multi-currency or advanced inventory tracking. We run a vendor-neutral selection process comparing options against your actual requirements rather than recommending a single default platform." },
    { q: "Will implementing ERP disrupt daily operations?", a: "There will be a transition period around go-live, but a phased approach, thorough testing and a hypercare period minimize disruption. Running the old and new systems in parallel briefly for critical processes is a common way to reduce risk during cutover." },
    { q: "What is the ROI of ERP implementation?", a: "ROI typically comes from reduced manual labor, fewer stockouts and write-offs, faster receivables collection and faster month-end close. While the exact figure varies by business, most companies recover the investment through operational efficiency within the first one to two years." },
    { q: "Can ERP handle multiple warehouses or locations?", a: "Yes, ERPs like ERPNext and Odoo natively support multi-warehouse and multi-location inventory tracking, including inter-warehouse transfers, location-wise stock valuation and consolidated reporting across sites." },
    { q: "Do you provide training for our staff?", a: "Yes, training is a core part of implementation. We provide role-based training sessions, documented standard operating procedures, and sandbox practice environments so users are confident operating the system before and after go-live." },
    { q: "What if our previous ERP implementation failed?", a: "This is common. We start with a diagnostic review to understand what went wrong, whether it was data quality, configuration mismatch with real processes, or lack of user adoption, and design a remediation or re-implementation plan that addresses the specific root cause." },
    { q: "Can ERP help with GST, VAT or other tax compliance?", a: "Yes, most ERP platforms include configurable tax modules that automate tax calculation, invoicing formats and compliance reporting based on your jurisdiction's requirements." },
    { q: "How is data security handled?", a: "Data security is addressed through role-based access controls, encrypted backups, and secure hosting practices, whether the ERP is self-hosted or cloud-hosted, and can be assessed alongside a broader information security review if needed." },
    { q: "Can the ERP scale as we grow?", a: "Yes, platforms like ERPNext and Odoo are built to scale from a single location to multi-entity, multi-currency operations, and modules can be added incrementally as the business grows rather than requiring a system change." },
    { q: "What is the difference between ERP implementation and ERP consulting?", a: "ERP consulting includes advisory work such as platform selection, process assessment and roadmap definition, while implementation is the hands-on configuration, migration and go-live delivery. Many engagements start with consulting and move into implementation once the direction is clear." },
    { q: "How do we measure whether the implementation was successful?", a: "Success is measured by whether the business actually uses the system accurately day to day, not just whether it went live on schedule. Key indicators include close time, inventory accuracy, receivables aging and reduced manual reconciliation, tracked before and after implementation." },
  ],

  related: [
    { slug: "epm", title: "Enterprise Performance Management", description: "Extend your ERP data into planning, budgeting and forecasting." },
    { slug: "powerbi", title: "Power BI & Analytics", description: "Turn ERP data into real-time dashboards for leadership." },
    { slug: "business-process-automation", title: "Business Process Automation", description: "Automate the workflows surrounding your ERP for further efficiency." },
    { slug: "business-transformation", title: "Business Transformation", description: "Align ERP implementation with broader operational change goals." },
  ],

  cta: {
    heading: "Not sure where to start with ERP?",
    body: "Talk to us about how your business runs today. We will help you decide whether ERP is the right next step, and if so, which platform and approach fits your budget and timeline.",
  },

  seo: {
    title: "ERP Implementation & ERP Consulting | Vimico",
    description: "Vendor-neutral ERP implementation and consulting for growing businesses, including ERPNext, iDempiere and Odoo, from selection to go-live and support.",
    ogTitle: "ERP Implementation & Consulting for Growing Businesses",
    ogDescription: "Replace spreadsheets with one connected system for inventory, accounting and sales. Vendor-neutral ERP consulting and implementation.",
    imageAlt: "ERP implementation consulting for small and mid-size businesses",
    primaryKeyword: "ERP implementation consulting",
    secondaryKeywords: ["ERP consulting", "ERPNext implementation", "open source ERP", "small business ERP", "ERP for SMB", "iDempiere consulting", "Odoo implementation"],
    semanticKeywords: ["inventory management system", "accounting software integration", "business process automation", "data migration", "system of record", "financial reporting automation"],
    longTailKeywords: ["ERP implementation for small business", "cost effective ERP for growing business", "how to choose an ERP system", "open source ERP vs commercial ERP", "ERP consulting for inventory accuracy"],
    entityKeywords: ["ERPNext", "iDempiere", "Odoo", "Frappe", "enterprise resource planning"],
    questionKeywords: ["What is ERP implementation?", "How much does ERP implementation cost?", "Which ERP is best for small business?", "How long does ERP implementation take?", "Can ERP integrate with existing tools?", "Is open source ERP reliable?"],
  },
};
