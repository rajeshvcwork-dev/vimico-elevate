import type { EnterpriseService } from "./types";
import { serviceHeroes } from "./heroes";

export const service: EnterpriseService = {
  slug: "ai-strategy",
  title: "AI Strategy & Business AI Adoption",
  eyebrow: "AI Strategy & Adoption",
  tagline:
    "Move beyond scattered AI pilots to a governed, value-driven AI portfolio that improves real business outcomes and earns the trust of your people.",
  heroImage: serviceHeroes.ai,

  challengesIntro:
    "Most organisations aren't short on AI enthusiasm — they're short on a coherent path from experimentation to sustained business value. Pilots stall, budgets get questioned, and teams are left unsure what to trust.",
  challenges: [
    {
      title: "AI pilots never make it past a proof of concept",
      description:
        "Teams experiment with promising tools, but without a clear business case or ownership, the pilot quietly loses momentum and never reaches production.",
    },
    {
      title: "No one can agree on which use cases are worth pursuing",
      description:
        "Every department has an AI idea, but there is no consistent way to compare them or decide which ones justify investment first.",
    },
    {
      title: "Data isn't ready to support meaningful AI use cases",
      description:
        "Fragmented, inconsistent or poorly governed data undermines even well-designed AI initiatives before they get off the ground.",
    },
    {
      title: "Employees are quietly using AI tools without oversight",
      description:
        "Staff are already experimenting with generative AI tools on their own, creating unmanaged exposure to data privacy and quality risks.",
    },
    {
      title: "Leadership can't quantify the return on AI investment",
      description:
        "Without a way to measure impact, AI spending is difficult to justify or scale beyond the initial experiment.",
    },
    {
      title: "Concerns about risk and compliance are stalling adoption",
      description:
        "Legal, security and compliance teams raise valid concerns about AI use, but without a responsible AI framework, the default response is often to block progress entirely.",
    },
  ],

  whyItMattersIntro:
    "Delaying a coherent AI strategy doesn't avoid risk — it shifts the risk from a managed initiative to an unmanaged one, as competitors and even your own employees move ahead regardless.",
  risks: [
    { title: "Operational inefficiency", description: "Manual processes that AI could streamline continue consuming valuable staff time and slowing throughput." },
    { title: "Revenue leakage", description: "Missed opportunities to personalise offers, predict churn, or optimise pricing quietly erode margin over time." },
    { title: "Poor customer experience", description: "Competitors using AI to respond faster and more personally set a new customer expectation your organisation struggles to match." },
    { title: "Compliance and governance risk", description: "Unsanctioned use of AI tools with sensitive data creates exposure to data protection and regulatory violations." },
    { title: "Manual, repetitive work", description: "Employees remain burdened with tasks that mature AI capability could remove entirely, limiting focus on higher-value work." },
    { title: "Limited growth capacity", description: "Without AI-assisted processes, scaling operations requires proportional headcount growth rather than leveraged capability." },
    { title: "Lack of visibility into AI value", description: "Without a portfolio view of initiatives and their impact, leadership cannot make informed investment decisions." },
    { title: "Fragmented, unscalable pilots", description: "Isolated departmental experiments duplicate effort and fail to build the shared infrastructure needed for enterprise-wide AI capability." },
  ],

  understanding: {
    whatItIs:
      "AI strategy and adoption is the discipline of identifying, prioritising and implementing artificial intelligence use cases that produce measurable business value, supported by the data foundation, governance and change management needed to sustain them. It is not a single tool or model — it is an operating capability that spans use case identification, responsible AI governance, technical delivery and workforce adoption. A mature AI strategy treats AI as a portfolio of investments to be managed, not a series of isolated experiments.",
    whyBusinessesNeedIt:
      "Organisations that treat AI as a series of disconnected pilots rarely see sustained value, because each initiative starts from scratch without shared data, governance or lessons learned. A deliberate strategy ensures the highest-value use cases are prioritised first, that risk is managed responsibly, and that employees are brought along rather than left behind or replaced by fear. It also protects the business from the reputational and compliance risks of ungoverned AI use that is often already happening informally.",
    misconceptions: [
      { myth: "AI adoption means buying the latest large language model.", reality: "The technology is rarely the constraint — data readiness, process design and governance determine whether an AI use case actually delivers value." },
      { myth: "AI will replace most of our workforce quickly.", reality: "In most enterprise contexts, AI augments existing roles by removing repetitive work, and successful adoption depends heavily on how well employees are supported through the transition." },
      { myth: "You need a large data science team to get started.", reality: "Many high-value use cases can be delivered using existing enterprise platforms and vendor tools, without building bespoke models from scratch." },
      { myth: "One successful pilot proves AI is ready for the whole business.", reality: "A single pilot tells you about one use case in one context; scaling requires a repeatable framework for evaluating and governing many use cases." },
      { myth: "Responsible AI governance slows innovation down.", reality: "Clear governance actually accelerates safe adoption by giving teams a defined path to move ideas forward instead of stalling on ad-hoc risk debates." },
    ],
    whoShouldInvest: [
      "Organisations with multiple uncoordinated AI pilots and no shared roadmap",
      "Leadership teams under pressure to demonstrate AI value without a clear plan",
      "Businesses concerned about ungoverned employee use of generative AI tools",
      "Companies whose data is fragmented across systems and not yet AI-ready",
      "Organisations in regulated industries needing a responsible AI governance framework",
      "Businesses that have completed a successful pilot and need a path to scale",
    ],
    benefits: [
      "A prioritised, business-value-driven AI roadmap",
      "Clear governance reducing compliance and reputational risk",
      "Faster time from idea to production for high-value use cases",
      "Reduced manual and repetitive workload across teams",
      "Improved decision-making through predictive and generative capabilities",
      "Stronger employee trust and adoption through structured change management",
      "A reusable data and platform foundation for future AI initiatives",
      "Measurable return on AI investment tied to business outcomes",
    ],
  },

  offerings: [
    { category: "Consulting & Advisory", description: "We help leadership build a coherent, prioritised path from AI ambition to measurable value.", items: ["AI strategy and roadmap development", "Use case identification and prioritisation", "AI maturity and readiness assessment", "Responsible AI governance framework design", "Build-vs-buy technology advisory"] },
    { category: "Implementation", description: "We deliver the AI use cases that made it through prioritisation into production.", items: ["Predictive analytics model deployment", "Generative AI application development", "AI-assisted process design", "Model performance monitoring setup"] },
    { category: "Integration", description: "We connect AI capabilities into the systems your teams already use daily.", items: ["CRM and ERP AI feature integration", "API and data pipeline integration for AI tools", "Enterprise search and knowledge assistant integration", "Workflow tool integration for AI-generated outputs"] },
    { category: "Automation", description: "We combine AI with automation to remove manual work end to end.", items: ["Document and content generation automation", "Intelligent data extraction and classification", "AI-assisted customer service automation", "Automated quality and anomaly detection"] },
    { category: "Migration & Modernisation", description: "We help organisations move from siloed pilots to a scalable, governed AI platform.", items: ["Consolidation of fragmented AI pilots", "Legacy analytics-to-AI platform modernisation", "Data platform readiness upgrades"] },
    { category: "Training & Adoption", description: "We prepare your workforce to use AI capability confidently and responsibly.", items: ["Executive AI literacy briefings", "Role-based AI tool training", "Responsible AI usage guidelines", "Change management for AI-impacted roles"] },
  ],

  differentiators: [
    { title: "Business value comes before technology choice", description: "We identify the outcome you need first, then select the right AI approach — not the other way around." },
    { title: "Vendor-neutral technology recommendations", description: "We are not tied to a single AI platform vendor, so our recommendations reflect your context, not a partnership incentive." },
    { title: "Senior consultants with cross-industry AI experience", description: "Every engagement is led by consultants who have guided AI adoption across multiple sectors and regulatory environments." },
    { title: "Responsible AI governance built in from the start", description: "We design risk management and oversight alongside delivery, not as a compliance afterthought." },
    { title: "Rigorous validation before scale", description: "We test use cases against real data and real users before recommending wider rollout." },
    { title: "Change management, not just technology delivery", description: "We invest as much in workforce readiness and trust-building as we do in the technical solution itself." },
    { title: "Built for long-term internal ownership", description: "We design AI capability your team can govern and extend, rather than creating permanent external dependency." },
    { title: "Sustained post-implementation support", description: "We remain engaged through hypercare and ongoing optimisation as your AI portfolio matures." },
  ],

  methodology: [
    { stage: "Discovery", purpose: "Understand current AI activity, appetite and business priorities.", activities: ["Stakeholder interviews", "Existing pilot inventory", "Strategic priority mapping"], deliverables: ["Discovery findings summary", "AI activity inventory"] },
    { stage: "Assessment", purpose: "Evaluate data readiness, technical infrastructure and governance maturity.", activities: ["Data readiness assessment", "Technology stack review", "Governance maturity scoring"], deliverables: ["AI readiness assessment report", "Governance maturity scorecard"] },
    { stage: "Planning", purpose: "Prioritise use cases and sequence the roadmap.", activities: ["Use case scoring workshops", "Roadmap sequencing", "Investment case development"], deliverables: ["Prioritised use case backlog", "AI roadmap"] },
    { stage: "Solution Design", purpose: "Design the technical and governance approach for priority use cases.", activities: ["Solution architecture design", "Responsible AI risk assessment", "Data pipeline design"], deliverables: ["Solution design document", "Risk assessment report"] },
    { stage: "Implementation", purpose: "Build and configure the prioritised AI use cases.", activities: ["Model or tool configuration", "Integration development", "Iterative build cycles"], deliverables: ["Working AI solution", "Integration documentation"] },
    { stage: "Testing", purpose: "Validate accuracy, bias, performance and user experience.", activities: ["Model accuracy testing", "Bias and fairness review", "User acceptance testing"], deliverables: ["Test results report", "Sign-off documentation"] },
    { stage: "Training", purpose: "Prepare employees to use the solution confidently and responsibly.", activities: ["Role-based training sessions", "Responsible use guidelines rollout", "Manager enablement sessions"], deliverables: ["Training materials", "Usage guidelines document"] },
    { stage: "Go Live", purpose: "Deploy the solution into production for intended users.", activities: ["Production deployment", "Access rollout", "Launch communications"], deliverables: ["Live production solution", "Rollout communication pack"] },
    { stage: "Hypercare", purpose: "Provide close support to catch issues and reinforce adoption early.", activities: ["Daily usage monitoring", "Rapid issue resolution", "Feedback collection"], deliverables: ["Hypercare log", "Early adoption report"] },
    { stage: "Continuous Improvement", purpose: "Evolve the AI portfolio as capability and business needs mature.", activities: ["Model performance reviews", "New use case intake", "Governance framework updates"], deliverables: ["Continuous improvement plan", "Updated AI roadmap"] },
  ],

  outcomes: [
    { metric: "Faster time-to-value", title: "Shorter path from idea to production", description: "A structured prioritisation process gets high-value use cases into production faster than ad-hoc experimentation." },
    { metric: "Reduced manual effort", title: "Less repetitive work for teams", description: "AI-assisted processes remove significant manual effort from document handling, data entry and routine analysis." },
    { metric: "Clearer investment decisions", title: "Portfolio-level visibility into AI value", description: "Leadership can compare initiatives on a consistent basis and direct investment where it matters most." },
    { metric: "Stronger governance", title: "Reduced compliance exposure", description: "A responsible AI framework brings previously unsanctioned tool use under managed oversight." },
    { metric: "Higher adoption", title: "Employee trust and usage improvement", description: "Structured change management increases genuine day-to-day use of AI tools rather than passive resistance." },
    { metric: "Improved accuracy", title: "Better predictions and decisions", description: "Predictive and generative capabilities improve consistency and speed across forecasting, service and content tasks." },
    { metric: "Scalable foundation", title: "Reusable AI infrastructure", description: "Data pipelines and governance built for one use case accelerate the next, reducing marginal cost of scaling." },
    { metric: "Fewer stalled pilots", title: "Higher pilot-to-production conversion", description: "Clear business cases and ownership structures prevent promising pilots from losing momentum." },
    { metric: "Measurable ROI", title: "Demonstrable return on AI investment", description: "Defined success metrics let leadership track the financial and operational impact of AI initiatives over time." },
  ],

  industries: [
    { name: "Financial Services", description: "AI-assisted risk scoring, fraud detection and personalised customer engagement within regulatory constraints." },
    { name: "Manufacturing", description: "Predictive maintenance and quality inspection powered by AI-driven anomaly detection." },
    { name: "Retail & E-commerce", description: "Personalised recommendations, demand forecasting and AI-assisted customer service." },
    { name: "Healthcare", description: "Administrative automation and decision support that respects strict data privacy requirements." },
    { name: "Professional Services", description: "AI-assisted research, document generation and knowledge management across engagements." },
    { name: "Logistics & Supply Chain", description: "Demand forecasting and route optimisation informed by predictive AI models." },
    { name: "Public Sector", description: "Responsible AI adoption for citizen services with strong governance and transparency requirements." },
    { name: "Technology & SaaS", description: "AI-embedded product features and internal productivity gains across engineering and support." },
  ],

  technologies: [
    "Microsoft Azure AI",
    "Azure OpenAI Service",
    "Microsoft Copilot",
    "OpenAI GPT models",
    "Power Platform AI Builder",
    "Google Vertex AI",
    "AWS Bedrock",
    "LangChain",
    "Python & ML frameworks",
    "Databricks",
    "Power BI (for AI performance monitoring)",
    "Enterprise data platforms (Snowflake, Synapse)",
  ],

  engagementModels: [
    { name: "AI Readiness Assessment", bestFor: "Organisations unsure where to start with AI", includes: "Data and governance readiness review, use case identification workshop, and initial roadmap" },
    { name: "Use Case Pilot", bestFor: "Businesses ready to validate one high-priority AI use case", includes: "Solution design, build, testing and a defined success measurement plan" },
    { name: "Enterprise AI Programme", bestFor: "Organisations scaling AI across multiple business units", includes: "Portfolio governance, multi-use-case delivery, and change management at scale" },
    { name: "Managed AI Support", bestFor: "Businesses needing ongoing governance and optimisation post-deployment", includes: "Continuous monitoring, governance updates, and new use case evaluation" },
  ],

  faqs: [
    { q: "What does an AI strategy engagement actually involve?", a: "It typically starts with assessing your current AI activity and data readiness, then moves into identifying and prioritising use cases, designing a responsible AI governance framework, and building a roadmap for implementation. The scope adjusts to how much groundwork your organisation has already done." },
    { q: "Why do businesses need an AI strategy instead of just running pilots?", a: "Isolated pilots rarely share data, governance or infrastructure, so value doesn't compound across the organisation. A strategy ensures resources go toward the highest-value use cases and builds reusable foundations for future initiatives." },
    { q: "How much does an AI strategy or implementation cost?", a: "Cost depends on the number and complexity of use cases, the state of your existing data infrastructure, and the depth of governance and training required. We scope this transparently after an initial readiness assessment rather than quoting a fixed figure upfront." },
    { q: "How long does it take to see value from AI adoption?", a: "A focused pilot can demonstrate measurable value within weeks, while a broader enterprise AI programme typically unfolds over several months as use cases are sequenced and scaled. We prioritise early wins to build momentum and organisational confidence." },
    { q: "Can AI capabilities integrate with our existing systems?", a: "Yes, most AI use cases are designed to work within your existing CRM, ERP or productivity platforms rather than requiring standalone tools. Integration approach depends on your specific systems and data architecture." },
    { q: "Who in the organisation should be involved in AI strategy?", a: "Executive sponsorship is essential, alongside representatives from IT, data, legal or compliance, and the business functions expected to use the AI capability day to day. Broad involvement early reduces resistance later." },
    { q: "What are the main benefits of a structured AI strategy?", a: "The key benefits are faster and safer adoption, clearer prioritisation of investment, reduced compliance risk, and measurable returns tied to specific business outcomes rather than vague technology aspirations." },
    { q: "What challenges commonly arise during AI adoption?", a: "The most frequent challenges are poor data quality, unclear ownership of use cases, and employee apprehension about how AI will affect their roles. Addressing these early through governance and change management significantly improves outcomes." },
    { q: "How do you measure ROI from AI investment?", a: "We define success metrics for each use case before implementation, whether that's time saved, error reduction, revenue impact or customer experience improvement, and track them through hypercare and beyond." },
    { q: "How is AI governance and risk managed after deployment?", a: "We establish clear ownership, monitoring processes and escalation paths for each AI use case, alongside guidelines for responsible use that evolve as regulations and internal policy mature." },
    { q: "Do we need a large data science team to adopt AI?", a: "Not necessarily. Many valuable use cases can be delivered using existing enterprise platforms and vendor AI features, with specialist support brought in for more custom or complex initiatives." },
    { q: "What happens if our data isn't ready for AI use cases?", a: "We assess data readiness early and can sequence quick, lower-data-dependency use cases first while building toward the data infrastructure needed for more advanced initiatives." },
    { q: "Can existing AI pilots be brought into a broader strategy?", a: "Yes, we regularly assess and consolidate existing pilots, retaining what's working while addressing gaps in governance, scalability and integration with the rest of the business." },
    { q: "How do you ensure employee adoption of new AI tools?", a: "We combine role-specific training, transparent communication about how roles will change, and a hypercare period focused on real usage patterns rather than assuming adoption will happen automatically." },
    { q: "Is AI adoption relevant for small and mid-sized businesses?", a: "Yes, though the scope and complexity differ. Many mid-sized organisations see faster returns because their data landscape and decision structures are simpler to align around a small number of high-value use cases." },
    { q: "What is responsible AI governance and why does it matter?", a: "It is the set of policies, oversight structures and risk controls that ensure AI is used safely, fairly and transparently. It matters because ungoverned AI use creates compliance, reputational and quality risks that are far more costly to fix after the fact." },
    { q: "How do you handle sensitive data in AI use cases?", a: "We design data handling processes in line with your existing data protection policies, including access controls and, where appropriate, techniques that limit exposure of sensitive information to AI models." },
    { q: "Can AI reduce the need for future headcount growth?", a: "In many cases, AI-assisted processes allow existing teams to absorb increased volume without proportional headcount growth, though this is best framed as capacity creation rather than headcount reduction." },
    { q: "What ongoing support is available after go-live?", a: "We offer managed support covering performance monitoring, governance updates and evaluation of new use cases, ensuring the AI portfolio continues to mature alongside the business." },
    { q: "How do you decide which AI use cases to prioritise first?", a: "We score potential use cases against business value, feasibility and risk in a structured workshop with stakeholders, and sequence delivery so the most impactful, achievable use cases come first." },
    { q: "Will our internal team be able to manage AI capability independently over time?", a: "Yes, we design governance frameworks and documentation so your team can evaluate, extend and manage AI use cases without permanent dependency on external consultants." },
    { q: "What is the biggest mistake companies make with AI adoption?", a: "The most common mistake is chasing technology trends without a clear business case, which leads to a graveyard of unused pilots rather than sustained value." },
  ],

  related: [
    { slug: "powerbi", title: "Power BI & Business Intelligence", description: "Build the governed data foundation that high-value AI use cases depend on." },
    { slug: "business-process-automation", title: "Business Process Automation", description: "Combine AI with workflow automation to remove manual work end to end." },
    { slug: "business-transformation", title: "Business Transformation", description: "Align AI adoption with your organisation's broader transformation agenda." },
    { slug: "grc", title: "Governance, Risk & Compliance", description: "Strengthen the governance framework needed for responsible AI at scale." },
  ],

  cta: {
    heading: "Ready to turn AI experiments into business value?",
    body: "Let's assess your current AI activity and data readiness, then build a prioritised roadmap toward a governed, value-driven AI portfolio.",
  },

  seo: {
    title: "AI Strategy & Business AI Adoption Consulting | Vimico",
    description: "Move from scattered AI pilots to a governed, value-driven AI portfolio with Vimico's business-first AI strategy consulting.",
    ogTitle: "AI Strategy & Business AI Adoption Consulting | Vimico",
    ogDescription: "Build a prioritised, responsibly governed AI roadmap that delivers measurable business outcomes.",
    imageAlt: "Executive team discussing an enterprise AI strategy roadmap",
    primaryKeyword: "AI strategy consulting",
    secondaryKeywords: [
      "business AI adoption",
      "responsible AI governance",
      "AI use case prioritisation",
      "enterprise AI strategy",
      "AI readiness assessment",
      "generative AI consulting",
    ],
    semanticKeywords: [
      "AI portfolio management",
      "data readiness for AI",
      "AI governance framework",
      "predictive analytics",
      "workforce AI adoption",
      "AI change management",
      "AI roadmap",
      "AI risk management",
    ],
    longTailKeywords: [
      "how to build an AI strategy for enterprise adoption",
      "moving from AI pilots to production at scale",
      "responsible AI governance framework consulting",
      "AI use case prioritisation for business value",
      "enterprise generative AI adoption consulting",
    ],
    entityKeywords: ["Azure OpenAI Service", "Microsoft Copilot", "OpenAI", "Google Vertex AI", "AWS Bedrock"],
    questionKeywords: [
      "What is an AI strategy?",
      "Why do businesses need a responsible AI framework?",
      "How much does AI adoption cost?",
      "How long does it take to see AI ROI?",
      "Can AI integrate with our existing systems?",
      "What is AI use case prioritisation?",
    ],
  },
};
