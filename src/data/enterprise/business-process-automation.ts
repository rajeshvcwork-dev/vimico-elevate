import type { EnterpriseService } from "./types";
import { serviceHeroes } from "./heroes";

export const service: EnterpriseService = {
  slug: "business-process-automation",
  title: "Business Process Automation",
  eyebrow: "Process & Workflow Automation",
  tagline:
    "Replace manual handoffs, spreadsheet reconciliation and approval delays with automated workflows that free your teams to focus on higher-value work.",
  heroImage: serviceHeroes.automation,

  challengesIntro:
    "Many organisations have grown around manual workarounds that made sense at a smaller scale but now quietly drain time, introduce errors and slow every approval down.",
  challenges: [
    { title: "Approvals get stuck in email chains for days", description: "Simple decisions requiring sign-off get lost in inboxes, with no visibility into where a request is stuck or who is responsible for the delay." },
    { title: "Data is manually re-entered across multiple systems", description: "The same information is typed into a spreadsheet, then an ERP, then a CRM, multiplying both effort and the risk of transcription errors." },
    { title: "Month-end reconciliation takes days of manual effort", description: "Finance and operations teams spend the final days of every month cross-checking spreadsheets that should already agree with each other." },
    { title: "No one has full visibility into where a process stands", description: "When a customer or internal stakeholder asks for a status update, someone has to manually chase down the answer across departments." },
    { title: "Document handling is slow and error-prone", description: "Contracts, invoices and forms are processed manually, creating bottlenecks and inconsistent handling depending on who is doing the work." },
    { title: "Process knowledge lives in individual employees' heads", description: "Critical steps are undocumented and dependent on specific people, creating risk whenever someone is unavailable or leaves the organisation." },
  ],

  whyItMattersIntro:
    "Every manual step left unaddressed becomes a recurring cost, and as the business grows, that cost multiplies rather than staying fixed.",
  risks: [
    { title: "Operational inefficiency", description: "Manual handoffs and re-keyed data slow down processes that should take minutes rather than days." },
    { title: "Revenue leakage", description: "Delayed invoicing, missed follow-ups and approval bottlenecks quietly cost the business real money each month." },
    { title: "Poor customer experience", description: "Slow internal processes translate directly into slow responses and unclear status updates for customers." },
    { title: "Compliance risk", description: "Manual processes are harder to audit consistently, increasing exposure when a process fails to meet a regulatory requirement." },
    { title: "Repetitive manual work", description: "Skilled employees spend significant time on tasks that add no strategic value and could be automated." },
    { title: "Constrained growth", description: "Manual processes require proportional headcount growth to handle increased volume, limiting scalability." },
    { title: "Lack of process visibility", description: "Without automated tracking, leadership cannot see where bottlenecks are occurring or measure process performance." },
    { title: "Fragile scalability", description: "Processes that work at a small scale often break down entirely as transaction volume and organisational complexity increase." },
  ],

  understanding: {
    whatItIs:
      "Business process automation is the practice of redesigning manual, repetitive workflows so that software handles the routine steps, freeing people to focus on judgment, exceptions and relationship-based work. It spans everything from simple approval routing and document generation to more advanced use of robotic process automation and system integrations. Done well, it starts with genuinely understanding how a process works today, including its inefficiencies, before any automation is introduced.",
    whyBusinessesNeedIt:
      "As organisations grow, the number of transactions, approvals and handoffs increases far faster than headcount can reasonably scale. Automation allows a business to absorb that growth without a proportional increase in manual effort or errors. It also creates the consistent, auditable process trail that compliance, quality and customer experience increasingly demand. Left unaddressed, manual processes become one of the biggest hidden constraints on how fast a company can grow.",
    misconceptions: [
      { myth: "Automation means replacing employees with software.", reality: "Most automation removes repetitive manual tasks so employees can focus on exception handling, judgment calls and customer relationships." },
      { myth: "You need robotic process automation for every workflow.", reality: "Many processes are better solved with straightforward workflow tools or system integration rather than RPA, which should be reserved for cases with no better alternative." },
      { myth: "Automating a broken process fixes it.", reality: "Automating an inefficient process just makes the inefficiency happen faster; process redesign has to come before automation." },
      { myth: "Automation projects are purely an IT initiative.", reality: "The business teams who run the process day to day need to be central to design, since they understand the exceptions and edge cases that matter most." },
      { myth: "Once automated, a process needs no further attention.", reality: "Processes change as the business evolves, so automated workflows need periodic review to stay aligned with current operations." },
    ],
    whoShouldInvest: [
      "Organisations relying on manual approval chains via email or paper",
      "Finance and operations teams spending days on manual reconciliation",
      "Businesses experiencing errors from repeated manual data entry",
      "Companies scaling transaction volume faster than headcount can grow",
      "Organisations with critical processes dependent on specific individuals",
      "Businesses needing stronger audit trails for compliance purposes",
    ],
    benefits: [
      "Significant reduction in manual, repetitive task volume",
      "Faster approval and turnaround times across key processes",
      "Fewer errors from manual data entry and reconciliation",
      "Improved visibility into process status and bottlenecks",
      "Stronger audit trails supporting compliance requirements",
      "Ability to scale transaction volume without proportional headcount growth",
      "Reduced dependency on individual employees for critical process knowledge",
      "Freed-up staff capacity for higher-value, judgment-based work",
    ],
  },

  offerings: [
    { category: "Consulting & Advisory", description: "We help leadership understand which processes to automate first and why.", items: ["Process discovery and mapping", "Automation opportunity assessment", "ROI and prioritisation modelling", "Process redesign workshops"] },
    { category: "Implementation", description: "We build and deploy the automated workflows that replace manual steps.", items: ["Workflow automation build", "Approval routing configuration", "Document automation setup", "Robotic process automation (RPA) development"] },
    { category: "Integration", description: "We connect systems so data flows automatically instead of being manually transferred.", items: ["ERP and CRM system integration", "API development for cross-system data flow", "Legacy system connectivity", "Data synchronisation and reconciliation logic"] },
    { category: "Automation", description: "We target the highest-friction manual tasks across finance, operations and customer service.", items: ["Invoice and payment processing automation", "Automated reporting and reconciliation", "Customer onboarding automation", "Notification and escalation automation"] },
    { category: "Migration & Modernisation", description: "We move organisations off spreadsheet and paper-based processes onto modern workflow platforms.", items: ["Spreadsheet-to-workflow migration", "Legacy system modernisation", "Paper and manual form digitisation"] },
    { category: "Training & Adoption", description: "We ensure teams understand and trust the newly automated processes.", items: ["Process owner training", "Exception-handling guidelines", "Change management support", "Governance and ownership documentation"] },
  ],

  differentiators: [
    { title: "We redesign the process before automating it", description: "We never automate inefficiency; we fix the underlying process design first." },
    { title: "Vendor-neutral automation platform guidance", description: "We recommend the right mix of workflow, integration and RPA tools for your specific environment." },
    { title: "Senior consultants with real operational experience", description: "Our consultants have designed and implemented processes across finance, operations and customer service functions." },
    { title: "Quality assurance built into every workflow", description: "We test automated processes against real exception scenarios, not just the happy path." },
    { title: "Built for long-term ownership by your team", description: "We document and hand over automated workflows so your team can maintain and extend them independently." },
    { title: "Change management alongside technical delivery", description: "We invest in helping process owners and staff trust and adopt new automated workflows." },
    { title: "Post-implementation support that outlasts go-live", description: "We remain engaged through hypercare and beyond to ensure automated processes perform reliably at scale." },
  ],

  methodology: [
    { stage: "Discovery", purpose: "Understand how the process currently works, including its inefficiencies.", activities: ["Process walkthroughs", "Stakeholder interviews", "Volume and exception analysis"], deliverables: ["Current-state process map", "Discovery findings summary"] },
    { stage: "Assessment", purpose: "Identify automation opportunities and their potential value.", activities: ["Automation opportunity scoring", "Technology fit assessment", "ROI modelling"], deliverables: ["Automation opportunity assessment", "ROI model"] },
    { stage: "Planning", purpose: "Define scope, sequencing and success criteria for the automation programme.", activities: ["Roadmap sequencing", "Success metric definition", "Resourcing plan"], deliverables: ["Automation roadmap", "Success criteria document"] },
    { stage: "Solution Design", purpose: "Design the redesigned, future-state process and its automation architecture.", activities: ["Future-state process design", "Integration architecture design", "Exception handling design"], deliverables: ["Future-state process blueprint", "Integration design document"] },
    { stage: "Implementation", purpose: "Build the automated workflows and integrations.", activities: ["Workflow configuration", "Integration development", "RPA bot development where applicable"], deliverables: ["Working automated workflow", "Integration build documentation"] },
    { stage: "Testing", purpose: "Validate the automation against normal and exception scenarios.", activities: ["Functional testing", "Exception scenario testing", "User acceptance testing"], deliverables: ["Test results report", "Sign-off documentation"] },
    { stage: "Training", purpose: "Prepare process owners and staff to operate within the new workflow.", activities: ["Process owner training", "Exception-handling walkthroughs", "Documentation handover"], deliverables: ["Training materials", "Process runbook"] },
    { stage: "Go Live", purpose: "Deploy the automated process into production.", activities: ["Production deployment", "Cutover planning", "Launch communications"], deliverables: ["Live production workflow", "Cutover plan"] },
    { stage: "Hypercare", purpose: "Provide close support to resolve early issues and reinforce adoption.", activities: ["Daily monitoring", "Rapid issue resolution", "Process owner check-ins"], deliverables: ["Hypercare log", "Early performance report"] },
    { stage: "Continuous Improvement", purpose: "Refine the automated process as volume and business needs evolve.", activities: ["Performance reviews", "Exception pattern analysis", "Roadmap updates for further automation"], deliverables: ["Continuous improvement plan", "Updated automation roadmap"] },
  ],

  outcomes: [
    { metric: "Up to 80% faster", title: "Reduced process turnaround time", description: "Automated approval routing and data handling eliminate the delays inherent in manual handoffs." },
    { metric: "Fewer manual errors", title: "Improved data accuracy", description: "Automated data transfer removes the transcription errors that come from manual re-entry across systems." },
    { metric: "Reduced reconciliation time", title: "Faster month-end close", description: "Automated reconciliation replaces days of manual cross-checking with a process that runs continuously." },
    { metric: "Freed staff capacity", title: "More time for higher-value work", description: "Employees previously tied up in repetitive tasks are redeployed to judgment-based, higher-impact work." },
    { metric: "Full process visibility", title: "Real-time status tracking", description: "Leadership and staff can see exactly where any given process stands without manually chasing updates." },
    { metric: "Stronger audit trails", title: "Improved compliance readiness", description: "Automated workflows produce a consistent, traceable record of every step for audit and regulatory purposes." },
    { metric: "Scalable capacity", title: "Growth without proportional headcount", description: "Automated processes absorb higher transaction volume without requiring a matching increase in staff." },
    { metric: "Reduced key-person risk", title: "Less dependency on individual employees", description: "Documented, automated workflows reduce reliance on specific people holding undocumented process knowledge." },
  ],

  industries: [
    { name: "Financial Services", description: "Automated reconciliation, approval routing and compliance reporting across financial operations." },
    { name: "Manufacturing", description: "Automated procurement, inventory and quality documentation workflows." },
    { name: "Retail & E-commerce", description: "Order processing, returns and supplier reconciliation automation across channels." },
    { name: "Healthcare", description: "Administrative workflow automation that reduces manual burden on clinical and support staff." },
    { name: "Professional Services", description: "Automated onboarding, time tracking and invoicing workflows across client engagements." },
    { name: "Logistics & Supply Chain", description: "Automated shipment tracking, exception handling and supplier communication workflows." },
    { name: "Public Sector", description: "Digitised, auditable workflows for citizen services and internal approvals." },
    { name: "Technology & SaaS", description: "Automated customer onboarding, billing and internal operational workflows." },
  ],

  technologies: [
    "Microsoft Power Automate",
    "Microsoft Power Apps",
    "UiPath",
    "Automation Anywhere",
    "Zapier",
    "Microsoft SharePoint & Dataverse",
    "Azure Logic Apps",
    "ServiceNow",
    "SAP Workflow",
    "DocuSign & document automation tools",
    "SQL Server & data integration tools",
    "Salesforce Flow",
  ],

  engagementModels: [
    { name: "Process Discovery Sprint", bestFor: "Organisations unsure which processes to automate first", includes: "Process mapping, automation opportunity assessment and a prioritised roadmap" },
    { name: "Workflow Automation Build", bestFor: "Businesses ready to automate a defined set of processes", includes: "Process redesign, workflow build, testing and training for scoped processes" },
    { name: "Enterprise Automation Programme", bestFor: "Organisations automating processes across multiple departments", includes: "End-to-end architecture, integration, phased rollout and change management" },
    { name: "Managed Automation Support", bestFor: "Businesses needing ongoing optimisation after go-live", includes: "Performance monitoring, exception handling review, and continuous process improvement" },
  ],

  faqs: [
    { q: "What does a business process automation engagement include?", a: "It typically starts with mapping how a process works today, identifying automation opportunities, redesigning the process, then building and testing the automated workflow. Scope depends on how many processes and systems are involved." },
    { q: "Why do businesses need to redesign a process before automating it?", a: "Automating an inefficient process simply makes the inefficiency happen faster, without solving the underlying issue. Redesigning first ensures the automation actually removes friction rather than encoding it." },
    { q: "How much does business process automation cost?", a: "Cost depends on the complexity of the process, the number of systems being integrated, and whether robotic process automation is required. We scope this after an initial process assessment rather than quoting a flat figure." },
    { q: "How long does a typical automation project take?", a: "A focused workflow automation project can take a few weeks, while a broader multi-process programme can take several months. We sequence delivery so early value is visible before the full programme completes." },
    { q: "Can automation integrate with our existing ERP and CRM systems?", a: "Yes, most automation platforms connect to major ERP and CRM systems through native connectors or APIs. We assess your specific systems to determine the right integration approach." },
    { q: "Who should be involved in an automation project?", a: "Process owners and the staff who run the workflow day to day should be closely involved, alongside IT for system integration. Their knowledge of exceptions and edge cases is critical to designing automation that actually works." },
    { q: "What are the main benefits of business process automation?", a: "The core benefits are faster turnaround times, fewer manual errors, improved visibility into process status, and the ability to scale volume without proportional headcount growth." },
    { q: "What challenges commonly arise during automation projects?", a: "The most common challenges are underestimating exception scenarios, involving the wrong stakeholders, and automating a process before addressing its underlying design issues." },
    { q: "How do you measure ROI from process automation?", a: "We define baseline metrics such as processing time, error rate and staff hours consumed before implementation, then track improvement against those same metrics after go-live." },
    { q: "How is governance handled for automated workflows after go-live?", a: "We document process ownership, exception-handling procedures and change management processes so the workflow can be maintained and updated responsibly over time." },
    { q: "Do we need robotic process automation, or is workflow automation enough?", a: "Many processes are better solved with straightforward workflow tools or system integration; RPA is reserved for cases where no direct integration or workflow solution is available." },
    { q: "What happens if the underlying process has a lot of exceptions?", a: "We map exception scenarios explicitly during discovery and design handling paths for them, rather than assuming every case follows the same straightforward path." },
    { q: "Can existing manual workflows be migrated to an automated platform?", a: "Yes, we regularly convert spreadsheet-based and email-driven processes into structured, automated workflows on modern platforms." },
    { q: "How do you ensure staff adoption of newly automated processes?", a: "We combine role-specific training, clear exception-handling guidelines, and a hypercare period focused on real usage to build confidence in the new process." },
    { q: "Is process automation relevant for small and mid-sized businesses?", a: "Yes, automation scales to the size and complexity of the process rather than the size of the company; mid-sized businesses often see fast returns because their processes are simpler to redesign." },
    { q: "What is the difference between automation and digitisation?", a: "Digitisation moves a manual process onto a digital tool without necessarily removing manual effort; automation actively removes repetitive manual steps by having software execute them." },
    { q: "How do you handle sensitive data within automated workflows?", a: "We design access controls and data handling steps in line with your existing data protection policies, ensuring sensitive information is only accessible to authorised roles." },
    { q: "Can automated processes scale as transaction volume grows?", a: "Yes, that scalability is one of the primary benefits; automated workflows are designed to handle increased volume without a proportional increase in manual effort." },
    { q: "What ongoing support is available after implementation?", a: "We offer managed support covering performance monitoring, exception pattern analysis and continuous refinement of automated workflows as business needs evolve." },
    { q: "How do you decide which processes to automate first?", a: "We score potential processes on volume, error rate, manual effort and business impact during a discovery and assessment phase, then sequence delivery around the highest-value opportunities." },
    { q: "Will our internal team be able to maintain automated workflows independently?", a: "Yes, we provide documentation, training and governance frameworks so your team can maintain, adjust and extend automated workflows without ongoing dependency on external consultants." },
    { q: "What is the biggest mistake companies make with process automation?", a: "The most common mistake is automating a broken process without redesigning it first, which locks in inefficiency rather than removing it." },
  ],

  related: [
    { slug: "powerbi", title: "Power BI & Business Intelligence", description: "Gain visibility into the performance of your newly automated processes." },
    { slug: "ai-strategy", title: "AI Strategy & Business AI Adoption", description: "Combine automation with AI for intelligent document handling and decision support." },
    { slug: "erp-implementation", title: "ERP Implementation", description: "Align process automation with the core ERP systems that run your business." },
    { slug: "business-transformation", title: "Business Transformation", description: "Embed automation within a broader organisational transformation programme." },
  ],

  cta: {
    heading: "Ready to remove manual work from your core processes?",
    body: "Let's map your highest-friction processes and design automated workflows that free your teams to focus on what actually needs human judgment.",
  },

  seo: {
    title: "Business Process Automation Consulting | Vimico",
    description: "Replace manual handoffs and spreadsheet reconciliation with automated workflows that scale with your business. Explore Vimico's automation consulting.",
    ogTitle: "Business Process Automation Consulting | Vimico",
    ogDescription: "Design and implement automated workflows that remove manual bottlenecks and scale with your business.",
    imageAlt: "Team reviewing an automated business process workflow diagram",
    primaryKeyword: "business process automation consulting",
    secondaryKeywords: [
      "workflow automation",
      "robotic process automation",
      "process redesign consulting",
      "document automation",
      "approval workflow automation",
      "operational efficiency consulting",
    ],
    semanticKeywords: [
      "manual process elimination",
      "workflow optimisation",
      "system integration automation",
      "exception handling design",
      "process discovery and mapping",
      "digital workflow transformation",
      "RPA implementation",
      "automated reconciliation",
    ],
    longTailKeywords: [
      "how to automate manual approval workflows",
      "business process automation consulting for enterprises",
      "reduce manual reconciliation with automation",
      "robotic process automation vs workflow automation",
      "process redesign before automation consulting",
    ],
    entityKeywords: ["Microsoft Power Automate", "UiPath", "Automation Anywhere", "Azure Logic Apps", "ServiceNow"],
    questionKeywords: [
      "What is business process automation?",
      "Why redesign a process before automating it?",
      "How much does process automation cost?",
      "How long does an automation project take?",
      "Can automation integrate with our ERP system?",
      "What is the difference between automation and digitisation?",
    ],
  },
};
