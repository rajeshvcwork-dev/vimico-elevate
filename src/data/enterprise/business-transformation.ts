import type { EnterpriseService } from "./types";
import { serviceHeroes } from "./heroes";

export const service: EnterpriseService = {
  slug: "business-transformation",
  title: "Business Transformation Consulting",
  eyebrow: "Business Transformation",
  tagline: "For leadership teams under pressure to scale, restructure or perform, we redesign the operating model, decision rights and execution cadence that make growth repeatable rather than accidental.",
  heroImage: serviceHeroes.businessTransformation,

  challengesIntro: "Growth exposes the gaps in how a business actually runs. Leaders come to us when the org chart no longer matches how work gets done, when decisions stall in committees, or when a new investor, acquisition or strategy demands an operating model the current business was never built to support.",
  challenges: [
    { title: "Strategy that doesn't translate into execution", description: "Leadership agrees on direction in offsites, but day-to-day priorities across departments don't reflect it, and initiatives compete for the same limited capacity." },
    { title: "Decisions stall in committees", description: "Approvals require input from too many stakeholders with unclear authority, so even routine decisions take weeks and get relitigated after they're made." },
    { title: "Organizational structure lags the business", description: "The org chart reflects who was hired when, not how work actually needs to flow between functions, creating handoff friction and duplicated effort." },
    { title: "Growth outpacing management capacity", description: "Headcount and revenue have scaled faster than the leadership layer meant to coordinate them, leaving founders or senior leaders as the bottleneck for every decision." },
    { title: "Post-acquisition integration friction", description: "Two businesses with different operating rhythms, reporting lines and decision norms are trying to function as one, and neither model has clearly won." },
    { title: "Leadership time consumed by firefighting", description: "Senior leaders spend the majority of their week resolving cross-functional conflict and escalations instead of running the business forward." }
  ],

  whyItMattersIntro: "An operating model that isn't redesigned deliberately gets redesigned by accident \u2014 through hiring, attrition, and whichever team shouts loudest. The longer that drift continues, the more expensive and disruptive it becomes to correct.",
  risks: [
    { title: "Operational inefficiency", description: "Unclear ownership means the same work gets duplicated across teams while other work falls through the cracks entirely." },
    { title: "Revenue leakage", description: "Slow decision cycles delay go-to-market moves, pricing changes and deal approvals long enough for competitors or market windows to close." },
    { title: "Poor customer experience", description: "Fragmented internal handoffs surface externally as inconsistent service, conflicting commitments and slow issue resolution." },
    { title: "Compliance and governance risk", description: "Undefined decision rights create audit gaps where no one can clearly demonstrate who approved what, and why." },
    { title: "Manual, ad hoc coordination", description: "Without a defined operating cadence, alignment happens through informal hallway conversations and status-chasing emails rather than structured review." },
    { title: "Limits on growth capacity", description: "An operating model built for last year's revenue can't absorb this year's headcount, geographic expansion or acquisition without breaking down." },
    { title: "Lack of leadership visibility", description: "Executives find out about problems after they've escalated, because there's no structured forum surfacing risks early." },
    { title: "Scalability constraints", description: "Every new market, product line or acquisition requires bespoke workarounds instead of plugging into a repeatable operating model." }
  ],

  understanding: {
    whatItIs: "Business transformation consulting is the deliberate redesign of how a company organizes, decides and executes \u2014 its operating model, governance structure, organizational design and performance cadence \u2014 so that strategy translates into consistent execution. It is not a rebrand, a reorg for its own sake, or a slide deck of aspirational values. It is structural work: who owns what decision, how work flows between functions, what gets measured, and how leadership spends its time. Done well, it changes how the business behaves under pressure, not just how it looks on paper.",
    whyBusinessesNeedIt: "Businesses that scale past a certain size or complexity outgrow the informal coordination that worked when the founding team could fit around one table. Private equity ownership, M&A integration, new leadership, or entry into new markets all demand an operating model built for the business the company is becoming, not the one it was. Without this work, growth produces friction: duplicated effort, conflicting priorities, slow decisions and leadership teams that spend more time resolving ambiguity than running the business. Transformation work closes that gap before it becomes a performance problem.",
    misconceptions: [
      { myth: "Business transformation means a reorg.", reality: "Org charts are one output, not the starting point. The real work is decision rights, governance and execution cadence \u2014 structure follows those choices, not the other way around." },
      { myth: "It's a project with an end date.", reality: "Operating model change has a defined design and rollout phase, but the discipline of running against it \u2014 reviews, cadence, accountability \u2014 has to continue indefinitely or the business reverts to its old habits." },
      { myth: "It only applies to large enterprises.", reality: "Mid-market and PE-backed businesses often need this work more urgently, because they are scaling faster than their informal structures can absorb." },
      { myth: "Culture change and operating model change are the same thing.", reality: "Culture shifts as a consequence of new decision rights, incentives and cadence being lived consistently \u2014 it isn't achieved directly through communication campaigns alone." },
      { myth: "More layers of management fix coordination problems.", reality: "Added layers usually slow decisions further; the fix is almost always clearer accountability and fewer, better-defined handoffs." }
    ],
    whoShouldInvest: ["Private equity-backed companies preparing for growth, add-on acquisitions, or an exit", "Businesses that have scaled headcount or revenue faster than their management structure", "Companies integrating an acquisition or merging two operating models", "New CEOs or leadership teams resetting how the organization runs", "Organizations where strategic decisions consistently stall or get relitigated", "Multi-entity or multi-geography businesses needing a common operating rhythm"],
    benefits: ["Faster, clearer decision-making with defined ownership at every level", "An organizational structure that matches how work actually needs to flow", "A leadership cadence that surfaces problems early instead of after the quarter closes", "Reduced duplication of effort and conflicting priorities across functions", "Clear accountability for outcomes rather than diffuse, shared ownership", "An operating model that can absorb growth or acquisitions without rebuilding from scratch", "Improved investor and board confidence in execution discipline", "A leadership team spending time on decisions that matter, not resolving ambiguity"],
  },

  offerings: [
    { category: "Operating Model Design", description: "We define how the business should run \u2014 the structure, processes and decision flows that connect strategy to execution.", items: ["Target operating model design", "Process and workflow architecture across functions", "Shared services and centre-of-excellence design", "Capacity and resourcing model alignment", "Operating model options analysis and business case"] },
    { category: "Governance & Decision Rights", description: "We clarify who decides what, at which level, so approvals move at the speed the business needs.", items: ["Decision rights and RACI mapping", "Governance committee and forum design", "Approval threshold and escalation frameworks", "Board and investor reporting structures", "Policy and delegation-of-authority frameworks"] },
    { category: "Organizational Design", description: "We design org structures around how value actually gets delivered, not historical reporting lines.", items: ["Org structure and span-of-control redesign", "Role and accountability definition", "Leadership team topology design", "Post-merger organizational integration", "Job architecture and role levelling support"] },
    { category: "Execution Cadence & Performance Management", description: "We build the rhythm of meetings, reviews and metrics that keeps execution on track.", items: ["Business review cadence design (weekly/monthly/quarterly)", "OKR and KPI framework design", "Performance dashboard and scorecard design", "Strategic planning and annual operating plan process", "Escalation and issue-resolution protocols"] },
    { category: "Change & Adoption", description: "We manage the human side of transformation so new structures and behaviours actually stick.", items: ["Change impact and readiness assessment", "Leadership alignment workshops", "Communication and engagement planning", "Manager enablement and coaching", "Adoption tracking and reinforcement planning"] },
    { category: "M&A & Growth Integration", description: "We design the operating model that lets acquisitions and rapid growth integrate cleanly rather than bolt on.", items: ["Pre-close operating model due diligence", "Day-one and 100-day integration planning", "Synergy identification and tracking", "Multi-entity operating rhythm harmonization", "Post-acquisition governance design"] }
  ],

  differentiators: [
    { title: "We start with decisions, not org charts", description: "Structure is the output of clarifying who decides what \u2014 we never redesign a chart without first mapping decision rights." },
    { title: "We design for the business you're becoming", description: "Every operating model is built against your growth plan and investment thesis, not just current-state pain points." },
    { title: "We stay through the messy middle", description: "We don't hand over a design document and leave; we support the rollout period when old habits are hardest to break." },
    { title: "We measure adoption, not just design completion", description: "Success is defined by whether leaders actually run the new cadence three months later, not whether the framework was delivered." },
    { title: "We work at the pace leadership can absorb", description: "Transformation sequencing accounts for organizational change capacity, avoiding the fatigue that kills adoption." },
    { title: "We're allergic to templates", description: "Operating models are shaped by your industry, ownership structure and growth stage \u2014 we don't reuse generic frameworks." },
    { title: "We build governance leaders actually use", description: "Every committee, forum or review we design has a clear owner, cadence and decision output, not a standing meeting nobody prepares for." },
    { title: "We keep the board and investors in the loop", description: "For PE-backed and investor-governed businesses, we design reporting that satisfies governance needs without adding administrative burden." }
  ],

  methodology: [
    { stage: "Discovery", purpose: "Understand the current operating reality and the strategic ambition it needs to support.", activities: ["Leadership interviews across functions", "Review of org structure, governance and reporting artefacts", "Strategic plan and investment thesis review"], deliverables: ["Current-state operating model summary", "Stakeholder findings brief"] },
    { stage: "Assessment", purpose: "Diagnose where the operating model is constraining execution.", activities: ["Decision rights and process mapping", "Capacity and workload analysis", "Governance and cadence effectiveness review"], deliverables: ["Operating model diagnostic report", "Prioritized gap and opportunity list"] },
    { stage: "Planning", purpose: "Define the future operating model and sequence the path to get there.", activities: ["Target operating model options workshop", "Change impact and risk assessment", "Transformation roadmap sequencing"], deliverables: ["Target operating model blueprint", "Transformation roadmap and timeline"] },
    { stage: "Solution Design", purpose: "Design the structural, governance and cadence elements in detail.", activities: ["Org structure and role design", "Governance and decision rights framework design", "Performance cadence and KPI design"], deliverables: ["Detailed org design package", "Governance charter and RACI"] },
    { stage: "Implementation", purpose: "Stand up the new structure, governance and cadence.", activities: ["Role transitions and communication rollout", "Governance forum launch", "Cadence and reporting tool setup"], deliverables: ["Implementation plan tracker", "Launch communication package"] },
    { stage: "Testing", purpose: "Pilot new decision processes and cadences before full rollout.", activities: ["Pilot governance cycle facilitation", "Feedback collection from pilot participants", "Refinement of decision thresholds and forums"], deliverables: ["Pilot results summary", "Refined governance framework"] },
    { stage: "Training", purpose: "Equip leaders and managers to run the new model themselves.", activities: ["Leadership cadence facilitation training", "Manager enablement workshops", "Decision-rights and RACI walkthroughs"], deliverables: ["Training materials and playbooks", "Facilitator guides for recurring forums"] },
    { stage: "Go Live", purpose: "Launch the full operating model across the organization.", activities: ["Organization-wide rollout communication", "First full cycle of governance forums", "Issue triage and rapid-response support"], deliverables: ["Go-live readiness checklist", "Launch retrospective"] },
    { stage: "Hypercare", purpose: "Provide close support while new habits form.", activities: ["Weekly check-ins with leadership team", "Real-time coaching during governance forums", "Rapid adjustment of processes that aren't working"], deliverables: ["Hypercare log and issue tracker", "Adjusted operating procedures"] },
    { stage: "Continuous Improvement", purpose: "Institutionalize the discipline of reviewing and refining the model.", activities: ["Quarterly operating model health checks", "Metrics review against original goals", "Ongoing governance refinement"], deliverables: ["Operating model health scorecard", "Continuous improvement backlog"] }
  ],

  outcomes: [
    { metric: "30\u201345% faster", title: "Decision cycle time", description: "Approval and escalation timelines shorten meaningfully once decision rights and thresholds are clarified." },
    { metric: "20\u201335% reduction", title: "Duplicated effort", description: "Clear accountability reduces the overlapping work that occurs when multiple teams believe they own the same outcome." },
    { metric: "15\u201325% improvement", title: "Leadership time on strategic work", description: "Structured cadence and forums reduce the ad hoc firefighting that consumes senior leaders' calendars." },
    { metric: "Meaningful reduction", title: "Escalations reaching the CEO", description: "Defined decision thresholds mean fewer issues need to travel to the top of the organization for resolution." },
    { metric: "Faster", title: "Time to integrate acquisitions", description: "A repeatable operating model template shortens the time needed to bring newly acquired entities into a common rhythm." },
    { metric: "Higher", title: "Board and investor confidence", description: "Structured governance and reporting cadences improve the quality and consistency of information reaching the board." },
    { metric: "Improved", title: "Cross-functional alignment", description: "Shared cadence and forums reduce the friction between functions that previously operated on separate priorities." },
    { metric: "Stronger", title: "Change adoption durability", description: "Embedded coaching and hypercare increase the likelihood that new structures and habits persist after go-live." },
    { metric: "Greater", title: "Organizational scalability", description: "A defined operating model absorbs new markets, products or acquisitions without requiring a full redesign each time." }
  ],

  industries: [
    { name: "Private Equity Portfolio Companies", description: "Operating model work that supports value-creation plans and prepares businesses for exit." },
    { name: "Professional & Financial Services", description: "Governance and cadence design for partnership and multi-office structures." },
    { name: "Manufacturing & Industrials", description: "Operating model alignment across plants, supply chain and commercial functions." },
    { name: "Technology & SaaS", description: "Organizational design that keeps pace with rapid headcount and product scaling." },
    { name: "Healthcare & Life Sciences", description: "Governance frameworks that balance regulatory requirements with execution speed." },
    { name: "Retail & Consumer", description: "Decision rights and cadence design across corporate, regional and store operations." },
    { name: "Energy & Utilities", description: "Operating model redesign supporting large capital programs and regulatory change." },
    { name: "Nonprofit & Public Sector", description: "Governance structures that improve accountability across funded programs and stakeholders." }
  ],

  technologies: ["OKR and KPI platforms (e.g. Lattice, Ally)", "Org design tools (e.g. OrgVue, Pingboard)", "Miro and Mural for design workshops", "Confluence for governance documentation", "Power BI for performance dashboards", "Smartsheet for transformation tracking", "Microsoft Teams and SharePoint for cadence artefacts", "Workday and other HRIS platforms for org data", "Process mapping tools (e.g. Lucidchart, Visio)", "Survey and pulse-check tools for change readiness"],

  engagementModels: [
    { name: "Operating Model Diagnostic", bestFor: "Leadership teams needing an independent read on current-state constraints before committing to a full redesign.", includes: "Discovery, assessment and a prioritized findings report with recommended next steps." },
    { name: "Full Operating Model Redesign", bestFor: "Businesses ready to redesign structure, governance and cadence end to end.", includes: "Discovery through implementation and hypercare, covering org design, governance and performance cadence." },
    { name: "M&A Integration Support", bestFor: "Companies integrating an acquisition or merging operating models.", includes: "Pre-close due diligence, day-one planning, 100-day execution support and governance harmonization." },
    { name: "Ongoing Governance Advisory", bestFor: "Leadership teams that want continued facilitation and coaching after the initial redesign.", includes: "Periodic health checks, cadence facilitation and refinement of governance as the business evolves." }
  ],

  faqs: [
    { q: "What does a business transformation consultant actually do?", a: "A business transformation consultant diagnoses how decisions, structure and execution cadence are currently working, then redesigns them so strategy consistently translates into results. The work spans operating model design, governance, organizational structure and leadership cadence rather than a single functional fix. Engagements typically combine diagnostic work, design workshops and hands-on support through rollout." },
    { q: "Why does a growing business need an operating model redesign?", a: "As headcount, revenue or complexity increase, the informal coordination that worked at a smaller scale breaks down, causing slow decisions, duplicated work and unclear accountability. A deliberate operating model gives the business a structure built for where it's going rather than one it has outgrown. Without this work, growth tends to produce friction rather than performance." },
    { q: "How long does a business transformation engagement take?", a: "A diagnostic phase typically runs four to eight weeks, while a full operating model redesign with implementation support commonly spans four to nine months depending on organizational size and complexity. Post-acquisition integrations often extend into a 100-day plan followed by ongoing governance support. Timelines are shaped by how many business units and decision layers are involved." },
    { q: "What factors drive the cost of business transformation consulting?", a: "Cost is primarily driven by organizational scope \u2014 how many functions, business units and geographies are involved \u2014 along with the depth of design work required and how much hands-on implementation and hypercare support is included. Engagements that include full organizational redesign and change management cost more than a diagnostic-only assessment. We scope cost drivers transparently before proposing an approach." },
    { q: "Can operating model redesign integrate with our existing systems and tools?", a: "Yes. Operating model design is largely about decisions, structure and cadence, and it's typically layered onto your existing HRIS, project management and reporting tools rather than requiring new systems. Where reporting or governance tooling gaps exist, we recommend the minimum viable tooling needed to support the new cadence." },
    { q: "Who typically needs business transformation consulting?", a: "Private equity-backed companies preparing for growth or exit, businesses integrating acquisitions, and organizations where leadership decisions consistently stall are the most common candidates. New CEOs resetting how a business runs, and multi-entity businesses needing a common operating rhythm, also benefit significantly." },
    { q: "What are the main benefits of redesigning our operating model?", a: "The most consistent benefits are faster decision-making, reduced duplication of effort, clearer accountability, and a leadership cadence that surfaces problems before they escalate. Over time, businesses also see improved investor confidence and a structure that can absorb growth without breaking down." },
    { q: "What are the biggest challenges companies face during transformation?", a: "The most common challenges are leadership teams reverting to old habits once initial energy fades, unclear ownership of the transformation itself, and underestimating how much coaching is needed for new governance forums to run well without external facilitation. Sequencing change at a pace the organization can absorb is also a frequent challenge." },
    { q: "How do we measure ROI from business transformation work?", a: "ROI shows up as faster decision cycles, reduced duplicated effort, fewer escalations reaching senior leadership, and measurable improvement in how quickly strategic initiatives move from plan to execution. We define baseline metrics during discovery so improvement can be tracked against a clear starting point." },
    { q: "What happens after go-live?", a: "We provide a hypercare period with close coaching support while leaders build the muscle of running new governance forums and cadences independently. After hypercare, we typically recommend periodic health checks to catch drift before old habits re-establish themselves." },
    { q: "Is this the same as a reorganization?", a: "No. A reorganization changes reporting lines; operating model redesign changes how decisions get made, how work flows, and how performance is managed \u2014 the org chart is one output of that broader work, not the objective itself." },
    { q: "Do you only work with large enterprises?", a: "No. Mid-market and PE-backed businesses are some of the most common clients for this work, because they're often scaling faster than their informal structures can support." },
    { q: "How is this different from management consulting on strategy?", a: "Strategy consulting typically defines what the business should do; business transformation consulting defines how the organization needs to be structured and governed to actually execute that strategy consistently." },
    { q: "Can this work run alongside an ERP or systems implementation?", a: "Yes, and it often should. Operating model clarity \u2014 who owns which decisions and processes \u2014 significantly improves the quality of requirements and adoption for a concurrent ERP or systems project." },
    { q: "What's included in a governance redesign?", a: "Governance redesign typically includes decision rights mapping, committee and forum design, approval thresholds, escalation protocols, and board or investor reporting structures tailored to your ownership model." },
    { q: "How do you handle resistance to organizational change?", a: "We run structured change impact assessments early, involve affected leaders in the design process rather than presenting a finished structure, and provide manager-level coaching through the transition period to reduce resistance." },
    { q: "Do you work with private equity portfolio companies specifically?", a: "Yes, PE-backed operating model work is a core focus area, including pre-close diagnostics, value-creation-plan-aligned redesigns, and exit-readiness governance." },
    { q: "What size company is this suited for?", a: "This work is relevant for organizations from roughly 100 to several thousand employees; the design approach scales but the core discipline of clarifying decisions and cadence applies across that range." },
    { q: "Can you support multiple business units or geographies?", a: "Yes, multi-entity and multi-geography operating model harmonization \u2014 creating a common cadence and governance structure across dispersed units \u2014 is a common engagement type." },
    { q: "What's the difference between OKRs and an operating model?", a: "OKRs are one tool within a broader operating cadence; the operating model defines the structure, decision rights and review rhythm that make OKRs (or any goal framework) function consistently." },
    { q: "How do you avoid disrupting day-to-day operations during the redesign?", a: "We sequence rollout in phases, pilot new governance forums with a subset of the organization first, and maintain existing decision processes until the new ones are proven, minimizing operational disruption." },
    { q: "What deliverables do we walk away with?", a: "Deliverables typically include a target operating model blueprint, governance charter and RACI, org design documentation, performance cadence framework, and a transformation roadmap with clear ownership for each phase." }
  ],

  related: [
    { slug: "agile-transformation", title: "Agile Transformation", description: "Build the delivery capability and execution predictability that a redesigned operating model depends on." },
    { slug: "business-technology-consulting", title: "Business Technology Consulting", description: "Align technology investment and roadmap decisions with your new operating model." },
    { slug: "grc", title: "Governance, Risk & Compliance", description: "Extend governance design into formal risk and compliance frameworks." },
    { slug: "epm", title: "Enterprise Performance Management", description: "Turn your new cadence and KPIs into a connected planning and performance platform." }
  ],

  cta: { heading: "Ready to redesign how your business actually runs?", body: "Talk to us about the operating model, governance and execution gaps standing between your strategy and consistent results. We'll start with a candid assessment of what's working and what isn't." },

  seo: {
    title: "Business Transformation Consulting | Vimico",
    description: "Operating model, governance and org design consulting that turns strategy into consistent execution for scaling and PE-backed businesses.",
    ogTitle: "Business Transformation Consulting | Vimico",
    ogDescription: "Redesign decision rights, org structure and execution cadence so strategy translates into results.",
    imageAlt: "Leadership team in a business transformation strategy workshop",
    primaryKeyword: "business transformation consulting",
    secondaryKeywords: ["operating model design", "organizational transformation", "corporate governance design", "change management consulting", "PE portfolio operating model", "M&A integration consulting"],
    semanticKeywords: ["decision rights", "governance framework", "organizational design", "execution cadence", "target operating model", "leadership alignment", "change adoption", "post-merger integration"],
    longTailKeywords: ["business transformation consulting for private equity portfolio companies", "how to redesign operating model for scaling business", "organizational design consulting for growth companies", "governance and decision rights consulting"],
    entityKeywords: ["operating model", "RACI", "OKR framework", "target operating model", "PE value creation plan", "100-day integration plan"],
    questionKeywords: ["what is business transformation consulting", "why do businesses need operating model redesign", "how long does business transformation take", "how much does business transformation consulting cost", "who needs business transformation consulting"],
  },
};
