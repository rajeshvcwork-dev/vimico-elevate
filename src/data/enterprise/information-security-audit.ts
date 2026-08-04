import type { EnterpriseService } from "./types";
import { serviceHeroes } from "./heroes";

export const service: EnterpriseService = {
  slug: "information-security-audit",
  title: "Information Security & Compliance Audits",
  eyebrow: "Information Security & Audit",
  tagline:
    "Enterprise customers, regulators and boards no longer accept assurances about security — they expect evidence. We help organisations assess their real security posture, close gaps before external scrutiny, and prepare confidently for audit and certification.",
  heroImage: serviceHeroes.infosec,

  challengesIntro:
    "Security teams are frequently asked to prove control effectiveness on short notice — for a customer questionnaire, a regulator, an investor, or an internal board request — and discover that documentation, testing and evidence are not where they assumed.",
  challenges: [
    {
      title: "Uncertainty about actual security posture",
      description:
        "Leadership cannot say with confidence whether existing controls would withstand a real audit, penetration test or incident.",
    },
    {
      title: "Security questionnaires stall enterprise deals",
      description:
        "Sales cycles slow down or deals are lost when customers request evidence of security controls that isn't readily available.",
    },
    {
      title: "Fragmented and outdated documentation",
      description:
        "Policies, network diagrams and control descriptions are scattered, inconsistent, or no longer reflect the current environment.",
    },
    {
      title: "No internal audit function or independent testing",
      description:
        "Controls are designed and self-assessed by the same team that operates them, with no independent verification of effectiveness.",
    },
    {
      title: "Vulnerability findings pile up unaddressed",
      description:
        "Scan results and penetration test findings accumulate without a prioritised remediation plan or clear ownership.",
    },
    {
      title: "Approaching certification with no readiness plan",
      description:
        "A certification deadline is set — often driven by a customer or contract requirement — without a realistic plan to get there.",
    },
  ],

  whyItMattersIntro:
    "Security gaps that go unaddressed rarely stay hidden. They surface during a breach, a failed audit, or a lost deal — at which point the cost of remediation and reputational impact is far higher than if they had been identified proactively.",
  risks: [
    {
      title: "Operational inefficiency",
      description:
        "Security and IT teams spend disproportionate time responding to ad hoc audit and questionnaire requests instead of operating controls.",
    },
    {
      title: "Revenue leakage from delayed or lost deals",
      description:
        "Enterprise buyers increasingly require SOC 2, ISO 27001 or equivalent evidence before signing, and gaps can stall procurement indefinitely.",
    },
    {
      title: "Poor experience for customers and partners",
      description:
        "Slow, inconsistent responses to security due diligence requests damage trust with prospective and existing customers.",
    },
    {
      title: "Regulatory and contractual exposure",
      description:
        "Failure to meet data protection or sector security obligations can result in fines, contract termination or loss of licences.",
    },
    {
      title: "Manual, inconsistent evidence gathering",
      description:
        "Without a structured process, evidence collection for each audit or questionnaire is repeated from scratch, consuming significant effort.",
    },
    {
      title: "Constraints on growth into regulated markets",
      description:
        "Expansion into sectors like finance or healthcare stalls without demonstrable, independently assessed security controls.",
    },
    {
      title: "Limited visibility into real risk exposure",
      description:
        "Without independent testing, leadership relies on assumptions rather than evidence about where the organisation is genuinely vulnerable.",
    },
    {
      title: "Difficulty scaling security operations",
      description:
        "Ad hoc security practices that worked at a smaller scale break down as systems, staff and data volumes grow.",
    },
  ],

  understanding: {
    whatItIs:
      "An information security and compliance audit is an independent, structured assessment of an organisation's security controls, policies and practices against a defined standard, framework or set of contractual obligations. It typically combines documentation review, control testing, technical assessment such as vulnerability scanning or penetration testing, and interviews with control owners. The outcome is a clear picture of where controls are operating effectively, where gaps exist, and what evidence is available to support customer, regulatory or certification requirements. Audits can be conducted internally as a readiness exercise or externally by an accredited third party for formal certification.",
    whyBusinessesNeedIt:
      "Security audits give leadership an evidence-based understanding of risk exposure rather than relying on assumptions from the teams that built and operate the systems. They are increasingly a commercial necessity, as enterprise customers, insurers and investors require independent verification before entering into agreements. Regular audits also reduce the likelihood of a breach going undetected and shorten the time needed to respond when a customer, regulator or auditor requests evidence. For organisations pursuing ISO 27001, SOC 2 or sector-specific certification, an audit is a required step toward formal attestation.",
    misconceptions: [
      {
        myth: "A penetration test and a security audit are the same thing.",
        reality:
          "A penetration test is a technical, time-boxed simulation of an attack against defined systems, while a security audit is a broader review of governance, policies, controls and evidence across the organisation.",
      },
      {
        myth: "Passing an audit means the organisation is fully secure.",
        reality:
          "An audit confirms controls meet a defined standard at a point in time; security posture must still be maintained continuously between audits.",
      },
      {
        myth: "Only large enterprises need formal security audits.",
        reality:
          "Small and mid-sized companies are frequently required to demonstrate audited security controls to win enterprise contracts, secure cyber insurance, or meet vendor requirements.",
      },
      {
        myth: "An internal review is equivalent to an independent audit.",
        reality:
          "Internal reviews are useful for readiness, but customers, regulators and certification bodies generally require independent, third-party verification for formal assurance.",
      },
      {
        myth: "Once certified, no further testing is required.",
        reality:
          "Certifications such as ISO 27001 and SOC 2 require ongoing surveillance audits and continuous evidence to maintain the credential.",
      },
    ],
    whoShouldInvest: [
      "Organisations responding to enterprise customer security questionnaires or vendor risk reviews",
      "Companies preparing for ISO 27001, SOC 2, PCI DSS or HIPAA certification",
      "Businesses that have never had an independent security assessment",
      "Organisations that have experienced a security incident or near-miss",
      "Companies expanding into regulated industries or new geographies",
      "Businesses seeking cyber insurance or preparing for investment or acquisition",
    ],
    benefits: [
      "An evidence-based, independent view of real security posture",
      "Faster response to customer and vendor security questionnaires",
      "Reduced likelihood of undetected vulnerabilities being exploited",
      "A prioritised, actionable remediation roadmap",
      "Stronger position when negotiating enterprise contracts",
      "Reduced audit fatigue through reusable evidence and documentation",
      "Improved investor, insurer and board confidence",
      "A clear path toward recognised certifications",
    ],
  },

  offerings: [
    {
      category: "Security posture assessment",
      description: "Establishing an accurate, independent baseline of current security maturity.",
      items: [
        "Security controls gap analysis",
        "Policy and documentation review",
        "Network and infrastructure architecture review",
        "Data classification and handling assessment",
        "Third-party and vendor security review",
      ],
    },
    {
      category: "Technical security testing",
      description: "Validating whether technical controls actually withstand real-world attack techniques.",
      items: [
        "Vulnerability scanning and management",
        "Penetration testing (network, application, cloud)",
        "Configuration and hardening reviews",
        "Social engineering and phishing simulations",
      ],
    },
    {
      category: "Compliance framework readiness",
      description: "Preparing your organisation against specific regulatory and industry standards.",
      items: [
        "ISO 27001 readiness and gap assessment",
        "SOC 2 Type I/II readiness",
        "PCI DSS scoping and gap assessment",
        "HIPAA and healthcare data compliance review",
        "GDPR and DPDP Act privacy compliance review",
      ],
    },
    {
      category: "Internal audit and control testing",
      description: "Building repeatable, independent verification of control effectiveness.",
      items: [
        "Internal audit programme design",
        "Control design and operating effectiveness testing",
        "Evidence collection process design",
        "Audit finding remediation tracking",
      ],
    },
    {
      category: "Remediation and control uplift",
      description: "Closing identified gaps with practical, prioritised action.",
      items: [
        "Prioritised remediation roadmap",
        "Security policy and procedure development",
        "Access management and identity control uplift",
        "Incident response plan development and testing",
      ],
    },
    {
      category: "Audit and certification support",
      description: "Guiding your organisation through the formal external audit process.",
      items: [
        "Pre-audit readiness review and mock audit",
        "Evidence package assembly",
        "Auditor liaison and fieldwork support",
        "Post-audit remediation and surveillance audit preparation",
      ],
    },
  ],

  differentiators: [
    {
      title: "Independent, evidence-based assessment",
      description: "We assess your environment as an external party would, not as an extension of your existing security team.",
    },
    {
      title: "Advisory role, not certifying body",
      description: "We prepare and support your organisation thoroughly; formal certification decisions are always made by accredited, independent auditors or certification bodies.",
    },
    {
      title: "Business risk prioritisation",
      description: "Findings are prioritised by business impact and likelihood, not just technical severity, so remediation effort goes where it matters most.",
    },
    {
      title: "Built for reuse across frameworks",
      description: "Evidence and controls are structured to support multiple certifications and customer reviews rather than a single one-off audit.",
    },
    {
      title: "Practical remediation, not just findings reports",
      description: "We help implement fixes and process changes, not only document gaps for someone else to resolve.",
    },
    {
      title: "Technology-agnostic tooling recommendations",
      description: "Scanning, SIEM and compliance automation tools are recommended based on your environment, not a fixed vendor relationship.",
    },
    {
      title: "Capability transfer to your team",
      description: "We train internal staff to sustain control testing and evidence collection after the engagement ends.",
    },
  ],

  methodology: [
    {
      stage: "Discovery",
      purpose: "Understand the current environment, systems and prior audit or incident history.",
      activities: ["Stakeholder interviews", "System and network inventory review", "Review of prior audit and incident reports"],
      deliverables: ["Current-state environment summary", "Scope and objectives document"],
    },
    {
      stage: "Assessment",
      purpose: "Evaluate current controls against the target framework or standard.",
      activities: ["Documentation and policy review", "Control walkthroughs with owners", "Gap analysis against target standard"],
      deliverables: ["Gap analysis report", "Risk-prioritised findings"],
    },
    {
      stage: "Planning",
      purpose: "Build a sequenced roadmap to close gaps ahead of formal audit or certification.",
      activities: ["Remediation roadmap development", "Resourcing and timeline alignment", "Success criteria definition"],
      deliverables: ["Remediation roadmap", "Audit readiness timeline"],
    },
    {
      stage: "Control design",
      purpose: "Design the specific controls, policies and processes needed to close identified gaps.",
      activities: ["Policy and control drafting", "Evidence and logging process design", "Access and identity control design"],
      deliverables: ["Updated policy and control library", "Evidence collection framework"],
    },
    {
      stage: "Implementation",
      purpose: "Deploy technical and procedural controls across the environment.",
      activities: ["Technical control configuration", "Process rollout to control owners", "Tooling implementation (scanning, SIEM, GRC platform)"],
      deliverables: ["Implemented control set", "Configured monitoring and evidence tooling"],
    },
    {
      stage: "Testing",
      purpose: "Independently verify that controls are operating effectively.",
      activities: ["Vulnerability scanning and penetration testing", "Control effectiveness testing", "Mock audit exercise"],
      deliverables: ["Technical testing report", "Mock audit findings and remediation log"],
    },
    {
      stage: "Training",
      purpose: "Build staff awareness and ownership of ongoing security and compliance practices.",
      activities: ["Security awareness training", "Control owner enablement sessions", "Incident response tabletop exercise"],
      deliverables: ["Training completion records", "Incident response plan and exercise report"],
    },
    {
      stage: "Certification readiness",
      purpose: "Assemble and validate evidence in preparation for external, accredited audit.",
      activities: ["Evidence package assembly", "Final readiness review", "Certification body coordination support"],
      deliverables: ["Audit-ready evidence package", "Readiness sign-off"],
    },
    {
      stage: "Hypercare",
      purpose: "Support the organisation through live external audit fieldwork.",
      activities: ["On-call support during auditor fieldwork", "Rapid evidence request response", "Interim issue triage"],
      deliverables: ["Audit support log", "Interim remediation actions"],
    },
    {
      stage: "Continuous improvement",
      purpose: "Sustain and mature the security programme after certification or audit completion.",
      activities: ["Periodic vulnerability and control reviews", "Surveillance audit preparation", "Threat landscape monitoring"],
      deliverables: ["Continuous monitoring plan", "Annual programme review"],
    },
  ],

  outcomes: [
    { metric: "40-60%", title: "Reduction in critical vulnerability backlog", description: "Through prioritised, tracked remediation rather than ad hoc patching." },
    { metric: "2-3x", title: "Faster security questionnaire response", description: "With reusable, documented control evidence ready on demand." },
    { metric: "Fewer", title: "Repeat audit findings", description: "As root-cause remediation replaces surface-level fixes." },
    { metric: "Shorter", title: "Enterprise sales cycles", description: "When security evidence is available before customers ask for it." },
    { metric: "Higher", title: "Confidence in incident readiness", description: "Through tested incident response plans and tabletop exercises." },
    { metric: "Reduced", title: "Manual evidence-gathering effort", description: "As automated scanning and GRC tooling replace manual tracking." },
    { metric: "Clear", title: "Path to certification", description: "With a realistic, sequenced readiness plan ahead of external audit." },
    { metric: "Improved", title: "Board and investor confidence", description: "Backed by independent assessment findings and remediation tracking." },
    { metric: "Sustainable", title: "Ongoing compliance posture", description: "Through continuous monitoring rather than point-in-time effort." },
  ],

  industries: [
    { name: "Financial services", description: "Faces stringent regulatory expectations for data protection and operational resilience." },
    { name: "Healthcare & life sciences", description: "Must protect sensitive patient data under strict privacy and security regulations." },
    { name: "Technology & SaaS", description: "Requires SOC 2 or ISO 27001 evidence as a baseline expectation from enterprise customers." },
    { name: "Retail & e-commerce", description: "Handles payment card data requiring PCI DSS compliance and strong access controls." },
    { name: "Manufacturing", description: "Increasingly targeted by ransomware, requiring stronger operational technology security." },
    { name: "Professional services", description: "Manages confidential client data that demands demonstrable security controls." },
    { name: "Public sector & government", description: "Subject to statutory security requirements and high public accountability." },
    { name: "Education", description: "Manages sensitive student and research data across widely distributed systems." },
  ],

  technologies: [
    "ISO 27001",
    "SOC 2",
    "NIST CSF",
    "PCI DSS",
    "HIPAA",
    "GDPR",
    "DPDP Act",
    "Vanta-style compliance automation",
    "SIEM platforms",
    "Vulnerability scanners",
    "Penetration testing frameworks (OWASP, PTES)",
    "Identity and access management tooling",
    "Cloud security posture management",
  ],

  engagementModels: [
    {
      name: "Security posture assessment",
      bestFor: "Organisations that need an independent baseline before committing to a certification path.",
      includes: "Gap analysis, documentation review, prioritised findings and executive readout.",
    },
    {
      name: "Certification readiness programme",
      bestFor: "Organisations preparing for ISO 27001, SOC 2 or another formal certification.",
      includes: "Control design, remediation, evidence assembly and mock audit ahead of external audit.",
    },
    {
      name: "Technical testing engagement",
      bestFor: "Organisations needing independent vulnerability or penetration testing on a defined scope.",
      includes: "Scoped technical assessment, findings report, remediation guidance and retest.",
    },
    {
      name: "Ongoing security & compliance advisory",
      bestFor: "Organisations wanting continuous assurance without a large internal security team.",
      includes: "Periodic testing, control monitoring, surveillance audit prep and remediation tracking.",
    },
  ],

  faqs: [
    { q: "What is an information security audit?", a: "An information security audit is an independent, structured review of an organisation's security controls, policies and practices against a defined standard or set of requirements. It typically combines documentation review, control testing, technical assessment and interviews to determine whether controls are designed and operating effectively." },
    { q: "Why does my business need a security audit?", a: "Security audits give leadership an evidence-based understanding of risk exposure, are increasingly required by enterprise customers and regulators, and reduce the likelihood of an undetected breach. They also form a required step toward formal certifications like ISO 27001 or SOC 2." },
    { q: "How long does a security audit take?", a: "A focused readiness assessment can take two to four weeks, while a full certification readiness programme — including remediation and evidence assembly — typically takes two to six months depending on scope, environment complexity and current control maturity." },
    { q: "What determines the cost of a security audit engagement?", a: "Cost is driven by the number of systems and locations in scope, the depth of technical testing required, the target framework, and the current state of documentation and controls. We scope engagements to your specific environment rather than applying a flat rate." },
    { q: "Who needs an information security audit?", a: "Organisations responding to enterprise security questionnaires, pursuing certification, expanding into regulated markets, or that have never had an independent assessment should consider a security audit. It is not limited to large enterprises." },
    { q: "What is the difference between a security audit and a security assessment?", a: "A security audit typically evaluates controls against a defined, formal standard and can result in a certification decision by an accredited body. A security assessment is a broader diagnostic exercise that identifies risks and gaps without necessarily being tied to a specific certifiable standard." },
    { q: "Should we pursue ISO 27001 or SOC 2 certification?", a: "ISO 27001 is a globally recognised information security management system standard often expected by international and government customers. SOC 2 is more common with North American SaaS buyers and evaluates controls against defined trust service criteria. The right choice depends on your customer base and target markets; we help assess and sequence accordingly." },
    { q: "Does Vimico issue security certifications?", a: "No. We provide independent readiness assessment, remediation and audit preparation services. Formal certification decisions and audit opinions are always issued by accredited, independent certification bodies or licensed auditors." },
    { q: "What is included in a penetration test scope?", a: "A penetration test scope defines the specific systems, applications, networks or environments to be tested, the testing window, permitted techniques, and any systems explicitly excluded. Scope is agreed in advance to ensure testing is safe, targeted and legally authorised." },
    { q: "How is evidence collected for a security audit?", a: "Evidence is gathered from system logs, configuration exports, policy documents, ticketing records and interviews with control owners. Where possible, evidence collection is automated through GRC or compliance tooling to reduce manual effort and support continuous readiness." },
    { q: "What is continuous compliance monitoring?", a: "Continuous compliance monitoring uses automated tooling and defined processes to track control status on an ongoing basis rather than validating controls only once a year. It reduces the risk of control drift and shortens preparation time for surveillance or renewal audits." },
    { q: "What return on investment does a security audit provide?", a: "Organisations typically see faster response to customer security questionnaires, reduced vulnerability backlogs, fewer repeat audit findings, and improved standing with enterprise customers and insurers. The specific return depends on your customer base and current security maturity." },
    { q: "What happens after the audit is complete?", a: "Findings are triaged and assigned for remediation, documentation and controls are updated accordingly, and the organisation moves into ongoing monitoring. For certifications, this typically includes preparing for periodic surveillance audits to maintain the credential." },
    { q: "Can a small or mid-sized business benefit from a security audit?", a: "Yes. Small and mid-sized companies are increasingly required to demonstrate independently assessed security controls to win enterprise contracts, qualify for cyber insurance, or meet vendor requirements, often earlier in their growth than they expect." },
    { q: "How does a security audit relate to a GRC programme?", a: "A security audit typically assesses one significant risk domain — information security — within a broader governance, risk and compliance programme that also covers operational, financial and legal risk. Findings from a security audit feed directly into the organisation's risk register." },
    { q: "What is a vulnerability scan and how often should it be run?", a: "A vulnerability scan is an automated process that identifies known weaknesses in systems, applications and configurations. Most organisations run scans monthly or quarterly, with more frequent scanning for internet-facing or high-risk systems." },
    { q: "Do we need in-house security tooling, or can we manage with external testing alone?", a: "Periodic external testing is valuable for independent verification, but most organisations also benefit from in-house monitoring tools such as SIEM and vulnerability scanners for continuous visibility between formal audits." },
    { q: "How do regulatory changes affect an existing security programme?", a: "New or amended data protection and security regulations require reassessment of existing controls and evidence. A mature programme includes a process for monitoring regulatory change and updating policies and controls proactively." },
    { q: "What industries have the strictest information security audit requirements?", a: "Financial services, healthcare and government sectors typically face the strictest statutory security requirements, though technology and retail companies handling payment or personal data face substantial equivalent obligations from customers and card networks." },
    { q: "How does a security audit support investment or acquisition readiness?", a: "Investors and acquirers routinely conduct security due diligence as part of a transaction. A recent, well-documented audit demonstrates operational maturity, reduces due diligence time, and can positively influence deal terms and valuation." },
    { q: "What is the difference between control design and control operating effectiveness?", a: "Control design effectiveness assesses whether a control, if operated as intended, would adequately address the identified risk. Control operating effectiveness tests whether that control is actually functioning consistently in practice over a defined period." },
    { q: "How do you ensure our team can sustain security practices after the engagement?", a: "We prioritise training control owners, documenting repeatable processes, and configuring monitoring and evidence tooling your internal team can operate independently, so security posture is maintained without ongoing dependency on external advisors." },
  ],

  related: [
    { slug: "grc", title: "Governance, Risk & Compliance (GRC)", description: "Embedding security audit findings into a broader enterprise risk and governance programme." },
    { slug: "business-technology-consulting", title: "Business & Technology Consulting", description: "Aligning security investment with broader technology and business strategy." },
    { slug: "business-process-automation", title: "Business Process Automation", description: "Automating evidence collection and compliance workflows to reduce manual audit effort." },
    { slug: "ai-strategy", title: "AI Strategy", description: "Assessing the security and data governance implications of adopting AI systems." },
  ],

  cta: {
    heading: "Find out where your security posture would stand under real scrutiny",
    body: "A focused readiness assessment tells you whether your current controls, documentation and evidence would withstand a customer review, a regulator's request, or a formal certification audit. Let's start there.",
  },

  seo: {
    title: "Information Security & Compliance Audits | Vimico",
    description: "Independent security posture assessment, penetration testing and audit readiness advisory for ISO 27001, SOC 2, PCI DSS and more.",
    ogTitle: "Information Security & Compliance Audits | Vimico",
    ogDescription: "Assess your real security posture and prepare confidently for external audit and certification with independent, evidence-based advisory.",
    imageAlt: "Security analysts reviewing an information security audit dashboard",
    primaryKeyword: "information security audit",
    secondaryKeywords: [
      "security compliance audit",
      "ISO 27001 readiness assessment",
      "SOC 2 readiness advisory",
      "penetration testing services",
      "vulnerability assessment consulting",
      "security posture assessment",
      "compliance audit preparation",
    ],
    semanticKeywords: [
      "control testing",
      "audit readiness",
      "vulnerability management",
      "security controls",
      "risk-based remediation",
      "certification readiness",
      "evidence collection",
      "continuous compliance",
    ],
    longTailKeywords: [
      "how to prepare for a SOC 2 audit",
      "information security audit consulting firm",
      "ISO 27001 gap analysis and remediation",
      "penetration testing and audit readiness advisory",
      "security compliance audit for mid-sized companies",
    ],
    entityKeywords: ["ISO 27001", "SOC 2", "PCI DSS", "HIPAA", "NIST CSF", "GDPR", "DPDP Act"],
    questionKeywords: [
      "What is an information security audit",
      "Why do businesses need a security audit",
      "How long does a security audit take",
      "How much does a security audit cost",
      "What is the difference between a penetration test and an audit",
      "Who needs an information security compliance audit",
    ],
  },
};
