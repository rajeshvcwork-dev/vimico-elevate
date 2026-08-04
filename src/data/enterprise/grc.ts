import type { EnterpriseService } from "./types";
import { serviceHeroes } from "./heroes";

export const service: EnterpriseService = {
  slug: "grc",
  title: "Governance, Risk & Compliance (GRC)",
  eyebrow: "Governance, Risk & Compliance",
  tagline:
    "Boards and regulators now expect proof, not promises, that risk is managed and controls actually work. We help leadership teams build governance, risk and compliance programmes that hold up under scrutiny and support the pace of the business.",
  heroImage: serviceHeroes.grc,

  challengesIntro:
    "Most organisations don't lack policies — they lack a working system that connects governance decisions, risk exposure and day-to-day controls. That gap shows up at the worst possible moments: during an audit, a regulatory inspection, a customer security review, or after an incident.",
  challenges: [
    {
      title: "Policies exist but nobody follows them",
      description:
        "Documents sit in a shared drive, disconnected from how teams actually work, so control breakdowns go unnoticed until an audit or incident exposes them.",
    },
    {
      title: "Risk registers are static and outdated",
      description:
        "Risks are logged once a year for a board pack rather than tracked, owned and revisited, leaving leadership with a false sense of visibility.",
    },
    {
      title: "Compliance is reactive, not designed in",
      description:
        "Teams scramble to assemble evidence a few weeks before an audit or customer questionnaire instead of operating controls continuously.",
    },
    {
      title: "No single owner for risk decisions",
      description:
        "Risk accountability is scattered across IT, legal, finance and operations, so issues are debated in meetings but never formally resolved.",
    },
    {
      title: "Regulatory change outpaces internal process",
      description:
        "New data protection, sector or industry regulations arrive faster than internal policy, training and control updates can keep up.",
    },
    {
      title: "Growth and M&A expose control gaps",
      description:
        "New entities, systems and geographies are added without governance keeping pace, creating inconsistent controls across the group.",
    },
  ],

  whyItMattersIntro:
    "A weak GRC foundation rarely fails loudly at first — it fails quietly, in the form of slow decisions, duplicated effort and risk exposure that only becomes visible when something goes wrong.",
  risks: [
    {
      title: "Operational inefficiency",
      description:
        "Teams repeat the same evidence-gathering and approval work across multiple audits and reviews because there is no shared control framework.",
    },
    {
      title: "Revenue leakage from stalled deals",
      description:
        "Enterprise customers delay or withdraw contracts when security and compliance questionnaires can't be answered with confidence and evidence.",
    },
    {
      title: "Poor experience for internal stakeholders",
      description:
        "Business units treat governance as a blocker rather than an enabler when risk and compliance requests are unclear or duplicated.",
    },
    {
      title: "Compliance and regulatory exposure",
      description:
        "Gaps in control design or evidence leave the organisation exposed to fines, remediation orders or loss of certifications and licences.",
    },
    {
      title: "Manual, error-prone tracking",
      description:
        "Spreadsheet-based risk registers and control logs introduce version errors and make it difficult to prove control operation over time.",
    },
    {
      title: "Constraints on growth",
      description:
        "Weak governance slows down new market entry, partnerships and funding rounds that require demonstrable risk management maturity.",
    },
    {
      title: "Limited visibility for leadership",
      description:
        "Executives and boards make decisions without a current, aggregated view of the organisation's real risk posture.",
    },
    {
      title: "Difficulty scaling the programme",
      description:
        "A framework built for one business unit or region cannot be extended cleanly as the organisation adds entities, products or markets.",
    },
  ],

  understanding: {
    whatItIs:
      "Governance, Risk and Compliance (GRC) is the coordinated set of structures, processes and controls an organisation uses to make decisions in line with its objectives, manage uncertainty, and meet legal and regulatory obligations. It brings together three previously separate functions — corporate governance, enterprise risk management and compliance — into one operating model with clear ownership. A mature GRC programme defines who is accountable for which risks, how controls are designed and tested, and how evidence is captured continuously rather than assembled under deadline pressure. It is as much an organisational design and cultural discipline as it is a documentation exercise.",
    whyBusinessesNeedIt:
      "As organisations grow, add systems, enter regulated markets or sell to enterprise customers, informal risk management stops being sufficient. Customers, insurers, investors and regulators increasingly require documented evidence that risk is actively managed, not just acknowledged. A structured GRC programme reduces the cost and disruption of audits, shortens enterprise sales cycles, and gives leadership a defensible basis for decisions when something does go wrong. It also creates the operational discipline needed to scale without proportionally scaling headcount dedicated to compliance firefighting.",
    misconceptions: [
      {
        myth: "GRC is only relevant to large, heavily regulated enterprises.",
        reality:
          "Mid-market and growth-stage companies increasingly need GRC to win enterprise customers, secure funding and pass vendor risk assessments long before regulation forces the issue.",
      },
      {
        myth: "Buying GRC software solves the problem.",
        reality:
          "Tooling helps track and automate evidence, but without defined risk ownership, control design and governance processes, software becomes an expensive spreadsheet replacement.",
      },
      {
        myth: "GRC is the sole responsibility of the compliance or legal team.",
        reality:
          "Effective GRC requires shared ownership across IT, operations, finance and business units, with governance coordinating rather than owning every control.",
      },
      {
        myth: "A strong GRC programme slows the business down.",
        reality:
          "Well-designed governance accelerates decision-making by giving teams clear authority boundaries and pre-approved risk tolerances, rather than requiring ad hoc escalation each time.",
      },
      {
        myth: "Once a framework is documented, the work is done.",
        reality:
          "Frameworks require continuous testing, evidence refresh and revalidation as regulations, systems and the business itself change.",
      },
    ],
    whoShouldInvest: [
      "Organisations preparing for ISO 27001, SOC 2 or sector-specific certification",
      "Companies expanding into regulated markets or geographies with new legal obligations",
      "Businesses responding to enterprise customer security and vendor risk questionnaires",
      "Organisations that have experienced a near-miss, incident or audit finding",
      "Companies undergoing M&A, private equity investment or IPO preparation",
      "Leadership teams that lack a current, consolidated view of enterprise risk",
    ],
    benefits: [
      "A single, current view of risk that leadership and the board can act on",
      "Faster, less disruptive audits and certification cycles",
      "Shorter enterprise sales cycles through ready security and compliance evidence",
      "Clear accountability for every material risk and control",
      "Reduced likelihood and impact of compliance breaches",
      "A governance structure that scales with new products, entities and markets",
      "Lower cost of ongoing compliance through automation and reuse of evidence",
      "Improved investor, insurer and regulator confidence",
    ],
  },

  offerings: [
    {
      category: "Governance framework design",
      description: "Establishing the decision rights and structures a GRC programme needs to function.",
      items: [
        "Governance operating model and committee structure design",
        "Policy and procedure architecture aligned to business risk",
        "Roles, responsibilities and accountability (RACI) mapping",
        "Board and executive risk reporting design",
        "Delegation of authority and escalation frameworks",
      ],
    },
    {
      category: "Enterprise risk management",
      description: "Building the processes that identify, assess and track risk continuously.",
      items: [
        "Enterprise risk register design and risk taxonomy",
        "Risk appetite and tolerance definition",
        "Risk assessment methodology and scoring models",
        "Third-party and vendor risk management processes",
        "Business continuity and operational resilience planning",
      ],
    },
    {
      category: "Compliance programme management",
      description: "Turning regulatory obligations into operational, testable controls.",
      items: [
        "Regulatory obligation mapping and gap analysis",
        "Control library design and control-to-obligation mapping",
        "Policy lifecycle and attestation management",
        "Compliance calendar and regulatory change monitoring",
        "Data protection and privacy compliance (GDPR, DPDP Act)",
      ],
    },
    {
      category: "Framework and certification readiness",
      description: "Preparing organisations for recognised frameworks and formal assessment.",
      items: [
        "ISO 27001 and ISO 31000 readiness",
        "SOC 2 Type I/II readiness",
        "NIST CSF and sector-specific framework alignment",
        "Internal audit programme design",
        "Certification body liaison and audit support (advisory only)",
      ],
    },
    {
      category: "Controls testing and assurance",
      description: "Verifying that documented controls are actually operating as designed.",
      items: [
        "Control design and operating effectiveness testing",
        "Internal control self-assessment programmes",
        "Evidence collection and audit trail design",
        "Remediation tracking and issue management",
      ],
    },
    {
      category: "GRC technology enablement",
      description: "Selecting and configuring platforms that reduce manual GRC overhead.",
      items: [
        "GRC and compliance automation platform selection",
        "Risk register and control workflow implementation",
        "Integration with ticketing, HR and IT systems for evidence automation",
        "Dashboard and executive reporting configuration",
      ],
    },
  ],

  differentiators: [
    {
      title: "We design for how your business actually operates",
      description:
        "Frameworks are built around real decision-making and workflows, not generic templates copied from a standard.",
    },
    {
      title: "Business risk before control documentation",
      description:
        "We start from the risks that matter to your revenue and reputation, then build controls to address them — not the reverse.",
    },
    {
      title: "Advisory, not certification issuance",
      description:
        "We prepare your organisation thoroughly for external audit; formal certification is always issued by an independent, accredited certification body.",
    },
    {
      title: "Evidence built for reuse",
      description:
        "Every control and artefact we help design is structured to support multiple frameworks and customer reviews, not one audit at a time.",
    },
    {
      title: "Ownership transfers to your team",
      description:
        "We build internal capability so your risk and compliance functions can run and evolve the programme without permanent dependency on us.",
    },
    {
      title: "Pragmatic sequencing",
      description:
        "We prioritise the highest-risk, highest-impact controls first rather than pursuing exhaustive documentation before any real risk reduction occurs.",
    },
    {
      title: "Technology-agnostic recommendations",
      description:
        "We recommend GRC tooling based on your scale and complexity, not a fixed platform partnership.",
    },
  ],

  methodology: [
    {
      stage: "Discovery",
      purpose: "Understand the current governance structure, risk landscape and regulatory obligations.",
      activities: [
        "Stakeholder interviews across leadership, IT, legal and operations",
        "Review of existing policies, registers and prior audit findings",
        "Regulatory and contractual obligation inventory",
      ],
      deliverables: ["Current-state governance and risk assessment", "Obligation inventory"],
    },
    {
      stage: "Assessment",
      purpose: "Identify gaps between current practice and target framework or regulatory requirements.",
      activities: [
        "Gap analysis against chosen frameworks (ISO 27001, SOC 2, NIST CSF)",
        "Risk scoring and prioritisation",
        "Control maturity assessment",
      ],
      deliverables: ["Gap analysis report", "Prioritised risk and control heat map"],
    },
    {
      stage: "Planning",
      purpose: "Translate findings into a sequenced, resourced programme roadmap.",
      activities: [
        "Roadmap and workstream definition",
        "Resourcing and governance committee alignment",
        "Success criteria and timeline agreement",
      ],
      deliverables: ["GRC programme roadmap", "RACI and governance charter"],
    },
    {
      stage: "Control & framework design",
      purpose: "Design the policies, controls and processes required to close identified gaps.",
      activities: [
        "Policy and control drafting",
        "Risk register and taxonomy build",
        "Workflow and evidence process design",
      ],
      deliverables: ["Policy and control library", "Risk register", "Process documentation"],
    },
    {
      stage: "Implementation",
      purpose: "Embed controls and governance processes into day-to-day operations.",
      activities: [
        "Control rollout across affected teams",
        "GRC platform configuration",
        "Integration with existing operational systems",
      ],
      deliverables: ["Configured GRC environment", "Control operating procedures"],
    },
    {
      stage: "Testing",
      purpose: "Validate that controls operate as designed before external scrutiny.",
      activities: [
        "Control design and operating effectiveness testing",
        "Mock audit / internal review",
        "Remediation of identified weaknesses",
      ],
      deliverables: ["Test results and remediation log", "Mock audit report"],
    },
    {
      stage: "Training",
      purpose: "Build the awareness and capability needed for controls to be sustained by staff.",
      activities: [
        "Role-based governance and compliance training",
        "Policy attestation rollout",
        "Control owner enablement sessions",
      ],
      deliverables: ["Training materials and completion records", "Attestation register"],
    },
    {
      stage: "Certification readiness",
      purpose: "Prepare the organisation and its evidence for formal external audit.",
      activities: [
        "Evidence package assembly",
        "Pre-audit readiness review",
        "Certification body coordination support",
      ],
      deliverables: ["Audit-ready evidence package", "Readiness sign-off report"],
    },
    {
      stage: "Hypercare",
      purpose: "Support the organisation through the live external audit period.",
      activities: [
        "On-call support during auditor fieldwork",
        "Rapid response to auditor evidence requests",
        "Issue triage and interim remediation",
      ],
      deliverables: ["Audit support log", "Interim remediation plan"],
    },
    {
      stage: "Continuous improvement",
      purpose: "Keep the programme current as regulation, systems and the business evolve.",
      activities: [
        "Periodic control effectiveness reviews",
        "Regulatory change monitoring",
        "Risk register refresh cadence",
      ],
      deliverables: ["Continuous improvement plan", "Annual programme review"],
    },
  ],

  outcomes: [
    { metric: "30-50%", title: "Reduction in audit preparation time", description: "Through reusable, continuously maintained evidence rather than annual scrambles." },
    { metric: "2-3x", title: "Faster enterprise security questionnaire turnaround", description: "With a documented control library ready to reference." },
    { metric: "Fewer", title: "Repeat audit findings", description: "As control design addresses root causes rather than surface symptoms." },
    { metric: "Single", title: "Consolidated risk view for leadership", description: "Replacing fragmented spreadsheets with one governed risk register." },
    { metric: "Shorter", title: "Sales cycles with security-conscious customers", description: "When compliance evidence is ready on demand." },
    { metric: "Lower", title: "Likelihood of material compliance breaches", description: "Through proactive obligation tracking and control testing." },
    { metric: "Improved", title: "Board and investor confidence", description: "Backed by demonstrable governance maturity and reporting." },
    { metric: "Scalable", title: "Framework across new entities and markets", description: "Designed to extend without a rebuild each time the business grows." },
    { metric: "Reduced", title: "Manual compliance workload", description: "As automation replaces spreadsheet-based tracking and reminders." },
  ],

  industries: [
    { name: "Financial services", description: "Faces some of the most demanding regulatory reporting and risk governance requirements of any sector." },
    { name: "Healthcare & life sciences", description: "Requires rigorous data protection and patient safety governance alongside clinical compliance." },
    { name: "Technology & SaaS", description: "Must demonstrate SOC 2 or ISO 27001 maturity to win and retain enterprise customers." },
    { name: "Manufacturing", description: "Needs operational risk and supply chain governance spanning multiple sites and vendors." },
    { name: "Retail & e-commerce", description: "Manages payment, data privacy and consumer protection compliance at scale." },
    { name: "Professional services", description: "Relies on client trust and confidentiality obligations that demand strong governance." },
    { name: "Public sector & government", description: "Operates under statutory accountability and audit requirements with high public scrutiny." },
    { name: "Energy & utilities", description: "Balances regulatory compliance with critical infrastructure risk management." },
  ],

  technologies: [
    "ISO 27001",
    "ISO 31000",
    "SOC 2",
    "NIST CSF",
    "GDPR",
    "DPDP Act",
    "PCI DSS",
    "HIPAA",
    "COSO Framework",
    "COBIT",
    "Vanta-style compliance automation",
    "Archer / GRC platforms",
    "Jira for risk and control tracking",
    "SIEM integration for evidence capture",
  ],

  engagementModels: [
    {
      name: "Readiness assessment",
      bestFor: "Organisations that need clarity on current gaps before committing to a full programme.",
      includes: "Gap analysis, risk assessment, prioritised roadmap and executive readout.",
    },
    {
      name: "Programme build",
      bestFor: "Organisations building a GRC function or preparing for a specific certification.",
      includes: "Framework design, policy and control library, GRC tooling configuration, training.",
    },
    {
      name: "Audit support",
      bestFor: "Organisations approaching an imminent external audit or certification cycle.",
      includes: "Evidence assembly, mock audit, auditor liaison support and remediation tracking.",
    },
    {
      name: "Managed GRC advisory",
      bestFor: "Organisations that want ongoing governance oversight without building a large internal team.",
      includes: "Periodic control testing, regulatory change monitoring, risk register maintenance and reporting.",
    },
  ],

  faqs: [
    { q: "What is Governance, Risk and Compliance (GRC)?", a: "GRC is the coordinated approach an organisation uses to make decisions aligned with its objectives (governance), manage uncertainty (risk) and meet legal and regulatory obligations (compliance). It combines structures, processes and controls into one operating model with clear ownership rather than treating these as three separate, disconnected functions." },
    { q: "Why does my business need a formal GRC programme?", a: "As organisations grow, add systems or sell to enterprise and regulated customers, informal risk management stops being sufficient. Customers, investors, insurers and regulators increasingly require documented evidence of active risk management. A formal programme reduces audit disruption, shortens sales cycles and gives leadership a defensible basis for decisions." },
    { q: "How long does it take to build a GRC programme?", a: "A focused readiness assessment can take a few weeks, while a full programme build — including policy design, control implementation and certification readiness — typically takes three to nine months depending on scope, number of frameworks targeted and organisational complexity." },
    { q: "What determines the cost of a GRC engagement?", a: "Cost is driven by the number of frameworks in scope, the number of business units, systems and locations covered, the maturity of existing controls, and whether tooling implementation is included. We scope engagements around your specific risk landscape rather than applying a flat fee." },
    { q: "Who within an organisation should be involved in a GRC programme?", a: "Effective GRC requires participation from executive leadership, IT and security, legal and compliance, HR, finance and operational business units. Governance coordinates the programme, but control ownership sits with the teams that operate the underlying processes." },
    { q: "What is the difference between a compliance audit and a risk assessment?", a: "A compliance audit verifies whether your organisation meets specific documented requirements or standards, typically resulting in a pass/fail or findings report. A risk assessment identifies and prioritises the threats and vulnerabilities facing the business, informing where controls and resources should be focused, independent of any single standard." },
    { q: "Should we pursue ISO 27001 or SOC 2?", a: "ISO 27001 is an internationally recognised information security management system standard, often preferred by organisations with global operations or government customers. SOC 2 is more common with North American SaaS and technology buyers and focuses on trust service criteria. Many organisations eventually pursue both; we help you sequence based on customer and market demand." },
    { q: "Does Vimico issue ISO 27001 or SOC 2 certification?", a: "No. We provide advisory and readiness services — building your governance framework, controls and evidence — but formal certification or audit opinions are always issued by an independent, accredited certification body or licensed auditor." },
    { q: "What does a penetration test have to do with GRC?", a: "Penetration testing is one control validation activity that feeds into a broader GRC programme, providing evidence that technical security controls are effective. It typically covers defined systems and networks within an agreed scope and timeframe, and its results inform risk register updates and remediation priorities." },
    { q: "How is evidence collected and maintained for audits?", a: "Evidence is collected continuously through a combination of documented processes, system logs, ticketing records and attestations, rather than assembled manually just before an audit. GRC tooling can automate much of this collection, reducing the burden on control owners." },
    { q: "What is continuous compliance and why does it matter?", a: "Continuous compliance means controls are monitored and evidenced on an ongoing basis rather than validated once a year. It reduces the risk of control drift between audits, shortens audit preparation time, and gives leadership real-time visibility into compliance posture." },
    { q: "What return on investment can we expect from a GRC programme?", a: "Organisations typically see faster audit cycles, shorter enterprise sales cycles due to ready security evidence, fewer repeat audit findings and reduced manual compliance effort. The specific return depends on your customer base, regulatory exposure and current process maturity." },
    { q: "What happens after an external audit is complete?", a: "Any findings or observations are triaged and assigned owners for remediation, control documentation is updated, and the risk register is refreshed to reflect new information. The programme then moves into a continuous improvement cycle rather than pausing until the next audit." },
    { q: "Can a small or mid-sized business benefit from GRC, or is it only for large enterprises?", a: "Mid-sized and growth-stage companies increasingly need structured GRC to win enterprise customers, pass vendor security reviews and prepare for investment or acquisition, often well before formal regulation requires it." },
    { q: "How does GRC relate to information security specifically?", a: "Information security is one significant risk domain within a broader GRC programme, alongside operational, financial, legal and reputational risk. Security controls are typically the most heavily scrutinised by customers and auditors, which is why many programmes start there." },
    { q: "What is a risk register and how should it be used?", a: "A risk register is a structured, living inventory of identified risks, their likelihood and impact, assigned owners and mitigation status. It should be reviewed and updated regularly, not treated as a static annual document." },
    { q: "Do we need GRC software, or can we manage this with spreadsheets?", a: "Spreadsheets can work for very small, simple risk landscapes, but they become error-prone and hard to audit as scope grows. Most organisations pursuing formal certification or serving multiple enterprise customers benefit from dedicated GRC or compliance automation tooling." },
    { q: "How do regulatory changes get incorporated into an existing programme?", a: "A mature programme includes a regulatory change monitoring process that flags new or amended obligations, assesses their impact on existing controls, and schedules necessary policy or process updates before deadlines arrive." },
    { q: "What industries have the most demanding GRC requirements?", a: "Financial services, healthcare, and public sector organisations typically face the most extensive statutory and regulatory requirements, though technology companies selling to these sectors increasingly face equivalent expectations from their customers." },
    { q: "How does GRC support mergers, acquisitions or investment readiness?", a: "Investors and acquirers conduct risk and compliance due diligence as part of any transaction. A documented GRC programme demonstrates operational maturity, reduces the time required for due diligence, and can directly affect valuation and deal terms." },
    { q: "What is the difference between governance and risk management?", a: "Governance defines who has authority to make which decisions and how those decisions are overseen. Risk management is the process of identifying, assessing and mitigating threats to achieving objectives. Governance structures typically oversee and are informed by the risk management process." },
    { q: "How do you ensure controls are sustained after the engagement ends?", a: "We prioritise building internal capability throughout the engagement — training control owners, embedding processes into existing workflows, and configuring tooling your team can operate independently — so the programme continues to function without ongoing dependency on external advisors." },
  ],

  related: [
    { slug: "information-security-audit", title: "Information Security & Compliance Audits", description: "Independent assessment and audit readiness for your security controls and evidence." },
    { slug: "business-technology-consulting", title: "Business & Technology Consulting", description: "Aligning technology decisions with enterprise risk and governance priorities." },
    { slug: "business-transformation", title: "Business Transformation", description: "Embedding governance and control discipline into broader organisational change." },
    { slug: "ai-strategy", title: "AI Strategy", description: "Governing AI adoption responsibly alongside your existing risk and compliance framework." },
  ],

  cta: {
    heading: "Get a clear view of where your governance and risk exposure stand today",
    body: "A short readiness conversation can tell you whether your current controls, policies and evidence would hold up to a customer review, an investor's due diligence, or a formal audit. Let's start there.",
  },

  seo: {
    title: "Governance, Risk & Compliance (GRC) Consulting | Vimico",
    description: "Build a GRC programme that holds up under audit, regulatory review and customer scrutiny. Governance design, risk management and compliance readiness advisory.",
    ogTitle: "Governance, Risk & Compliance (GRC) Consulting | Vimico",
    ogDescription: "Governance design, enterprise risk management and compliance readiness advisory to help your organisation pass audits and win enterprise trust.",
    imageAlt: "Executives reviewing a governance, risk and compliance dashboard",
    primaryKeyword: "GRC consulting",
    secondaryKeywords: [
      "governance risk and compliance",
      "risk management consulting",
      "compliance advisory services",
      "enterprise risk management",
      "ISO 27001 readiness",
      "SOC 2 readiness",
      "compliance programme design",
    ],
    semanticKeywords: [
      "risk register",
      "internal controls",
      "regulatory compliance",
      "control testing",
      "audit readiness",
      "risk appetite",
      "governance framework",
      "compliance automation",
    ],
    longTailKeywords: [
      "how to build a GRC programme",
      "GRC consulting for mid-sized companies",
      "ISO 27001 vs SOC 2 readiness advisory",
      "enterprise risk management consulting firm",
      "GRC framework design for growing companies",
    ],
    entityKeywords: ["ISO 27001", "SOC 2", "NIST CSF", "GDPR", "DPDP Act", "COSO", "COBIT"],
    questionKeywords: [
      "What is governance risk and compliance",
      "Why do businesses need a GRC programme",
      "How long does GRC implementation take",
      "How much does GRC consulting cost",
      "Who needs a GRC programme",
      "What is the difference between a risk assessment and an audit",
    ],
  },
};
