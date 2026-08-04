import type { EnterpriseService } from "./types";
import { serviceHeroes } from "./heroes";

export const service: EnterpriseService = {
  slug: "website",
  title: "Website Design & Development",
  heroImage: serviceHeroes.website,
  eyebrow: "Corporate Website Design & Development",
  tagline:
    "Your website is often the first and most scrutinised interaction a prospect, investor or candidate has with your business. We design and build corporate websites that translate credibility into qualified enquiries, not just visits.",

  challengesIntro:
    "For most growing businesses, the website has quietly become a liability rather than an asset. Leadership teams describe the same recurring frustrations.",
  challenges: [
    { title: "The site looks dated next to competitors", description: "Prospects compare you against peers before ever speaking to sales, and a tired design quietly signals that the business itself may be behind the times." },
    { title: "Visitors arrive but rarely enquire", description: "Traffic exists, but the path from landing page to a completed enquiry form is unclear, slow, or simply missing a compelling reason to act." },
    { title: "No one internally can update it safely", description: "Every content change requires a developer, an agency ticket, or a person who has since left the company, so the site stagnates." },
    { title: "It is slow, especially on mobile", description: "Pages take seconds to load on a phone at a trade show or in a meeting, and prospects abandon before the message even lands." },
    { title: "Messaging is technical, not commercial", description: "The homepage describes features and capabilities in isolation, but never answers the buyer's real question: what problem does this solve for me?" },
    { title: "SEO and content are an afterthought", description: "The business ranks for its own name but nowhere else, so most of the search demand for the problems it solves goes to competitors instead." },
  ],

  whyItMattersIntro:
    "A website that underperforms does not fail loudly — it fails quietly, in enquiries that never get submitted and deals that never enter the pipeline.",
  risks: [
    { title: "Lost pipeline", description: "Every week the site converts poorly, qualified visitors leave without enquiring, and that demand rarely returns organically." },
    { title: "Diminished credibility with buyers", description: "Enterprise buyers use the website as a proxy for operational maturity; a weak site raises doubts before a conversation even starts." },
    { title: "Manual, duplicated marketing effort", description: "Teams patch gaps with one-off landing pages, PDFs and email attachments because the core site cannot support campaigns." },
    { title: "Poor visibility into buyer intent", description: "Without proper tracking and forms, leadership has no reliable data on what prospects actually look at before they buy or walk away." },
    { title: "Accessibility and compliance exposure", description: "Sites built without accessibility standards in mind risk excluding users and creating legal exposure in regulated markets." },
    { title: "Security and uptime risk", description: "Ageing platforms and unpatched plugins are a common entry point for breaches, and downtime during a launch or campaign is costly." },
    { title: "Inability to scale with the business", description: "As the company adds products, regions or business units, a rigid site architecture becomes a bottleneck rather than an enabler." },
    { title: "Talent and investor perception", description: "Candidates and investors research the site before engaging; a weak digital presence undermines recruitment and fundraising conversations alike." },
  ],

  understanding: {
    whatItIs:
      "Corporate website design and development is the practice of building a business's primary digital presence — strategy, information architecture, visual design, content, and engineering — around a clear commercial objective. It goes beyond aesthetics to include how the site is found, how it loads, how it converts, and how it is maintained over time. A well-built corporate site functions as a always-on sales and credibility asset rather than a static brochure. It sits at the intersection of marketing, brand and engineering, which is why it is so often handled poorly by any one discipline alone. Done properly, it is treated as a business system with owners, metrics and a roadmap, not a one-time project.",
    whyBusinessesNeedIt:
      "Buyers, partners, candidates and investors form an opinion about a company within seconds of landing on its website, long before any conversation takes place. A weak website undermines every other investment the business makes in sales, marketing and brand. Conversely, a strong site compounds the value of every campaign, press mention and referral by giving that traffic somewhere credible and persuasive to land. It also gives the business a durable channel it owns outright, unlike social platforms or marketplaces where reach and rules can change overnight. For most B2B and B2C businesses, the website is the single highest-leverage marketing asset they control.",
    misconceptions: [
      { myth: "A website is a one-time project you finish and forget.", reality: "A corporate website is a living asset that needs content, performance and security maintenance to keep converting and ranking over time." },
      { myth: "A bigger budget or more pages always means a better site.", reality: "Conversion performance is driven far more by clarity of message and user journey design than by page count or visual complexity." },
      { myth: "SEO is something you add after the site is built.", reality: "Information architecture, page structure and technical performance decisions made during build directly determine long-term search visibility." },
      { myth: "Design is mostly about how it looks.", reality: "The highest-impact design decisions are about hierarchy, flow and calls to action — visual polish alone rarely moves conversion rates." },
      { myth: "Once it launches, the job is done.", reality: "The first version of a site is a hypothesis; the sites that perform best are refined continuously using real visitor behaviour." },
    ],
    whoShouldInvest: [
      "Businesses launching a new brand, product line or market entry that need a credible digital front door",
      "Companies whose current site predates their current positioning, offerings or leadership team",
      "Organisations generating traffic through marketing spend but struggling to convert it into enquiries",
      "Enterprises consolidating multiple regional or legacy sites into one governed platform",
      "Businesses preparing for fundraising, M&A due diligence or a major RFP cycle",
      "Leadership teams that need non-technical staff to manage content without developer dependency",
    ],
    benefits: [
      "A clear, credible narrative that speaks to buyer problems rather than internal jargon",
      "Higher enquiry and lead conversion rates from existing traffic and marketing spend",
      "Faster load times and stronger technical foundations for organic search visibility",
      "A content management workflow that marketing and comms teams can own independently",
      "Consistent brand presentation across desktop, mobile and regional variants",
      "Built-in accessibility that widens the addressable audience and reduces legal exposure",
      "Analytics and tracking that give leadership real visibility into buyer behaviour",
      "A scalable architecture that supports future products, regions and campaigns",
    ],
  },

  offerings: [
    { category: "Discovery & Digital Strategy", description: "Establishing the commercial objectives, audiences and success metrics before any design work begins.", items: ["Stakeholder and competitor discovery workshops", "Audience segmentation and buyer journey mapping", "Site objectives and KPI definition", "Content and information architecture audit", "Technology and platform selection"] },
    { category: "UX & Information Architecture", description: "Structuring the site so visitors find what they need and take the intended action.", items: ["Sitemap and navigation design", "Wireframing and user flow design", "Conversion path and CTA design", "Mobile-first responsive planning", "Usability review and iteration"] },
    { category: "Visual Design & Brand Expression", description: "Translating brand identity into a coherent, professional visual system across every page.", items: ["Visual design systems and UI kits", "Landing page and campaign page templates", "Imagery, iconography and motion direction", "Design QA across devices and browsers"] },
    { category: "Content Strategy & Copywriting", description: "Writing and structuring content that speaks to business problems and builds buyer confidence.", items: ["Messaging and positioning frameworks", "Homepage, product and service page copy", "Case study and proof-point structuring", "SEO-aligned content briefs"] },
    { category: "Engineering & Performance", description: "Building a fast, secure, and maintainable site on a platform matched to the business's needs.", items: ["Front-end and CMS development", "Core Web Vitals and performance tuning", "Accessibility (WCAG) implementation", "Integration with CRM, marketing and analytics tools", "Secure hosting and deployment pipelines"] },
    { category: "SEO Foundations & Ongoing Support", description: "Ensuring the site is discoverable at launch and continues to perform after go-live.", items: ["Technical SEO setup and schema markup", "Analytics, tag management and dashboards", "Post-launch monitoring and maintenance", "Content refresh and iteration cadence", "Security patching and uptime monitoring"] },
  ],

  differentiators: [
    { title: "Commercial outcomes over visual trends", description: "Every design decision is tied back to an enquiry, sign-up or engagement goal, not to what looks fashionable this quarter." },
    { title: "Business-first content, not agency filler", description: "Copy is written to answer the buyer's actual questions, informed by direct conversations with your sales and delivery teams." },
    { title: "Performance and accessibility by default", description: "Speed, mobile responsiveness and WCAG accessibility are treated as launch requirements, not optional extras." },
    { title: "Built for internal ownership", description: "Sites are handed over with a content model your team can operate confidently, without ongoing dependency on us." },
    { title: "Search-ready architecture from day one", description: "Information architecture and technical setup are built with SEO in mind from the first wireframe, not retrofitted later." },
    { title: "Transparent, staged delivery", description: "Work progresses through visible milestones with sign-off at each stage, so there are no surprises at launch." },
    { title: "Proven on real enterprise delivery", description: "Our approach has been applied to live corporate website engagements, including the GripNovaco corporate website." },
    { title: "Support beyond launch", description: "We remain available for iteration, monitoring and content evolution after go-live rather than disappearing once the site ships." },
  ],

  methodology: [
    { stage: "Discovery & Objective Setting", purpose: "Align on what the site needs to achieve commercially before any design begins.", activities: ["Stakeholder interviews", "Competitor and market review", "Current site audit"], deliverables: ["Discovery findings report", "Success metrics document"] },
    { stage: "Audience & Content Strategy", purpose: "Understand who the site must persuade and what they need to hear.", activities: ["Buyer persona definition", "Content inventory and gap analysis", "Messaging framework workshop"], deliverables: ["Messaging framework", "Content plan"] },
    { stage: "Information Architecture", purpose: "Structure the site so navigation supports the buyer's journey.", activities: ["Sitemap design", "User flow mapping", "Navigation testing"], deliverables: ["Approved sitemap", "User flow diagrams"] },
    { stage: "Wireframing & UX Design", purpose: "Define layout and interaction before visual design is applied.", activities: ["Low-fidelity wireframes", "CTA and conversion path design", "Stakeholder review rounds"], deliverables: ["Wireframe set", "Annotated UX spec"] },
    { stage: "Visual Design", purpose: "Apply brand identity into a polished, on-brand interface.", activities: ["Design system creation", "Page-level visual design", "Design QA and revisions"], deliverables: ["Design system", "Approved page designs"] },
    { stage: "Content Production", purpose: "Write and refine the words that will do the persuading.", activities: ["Copywriting per page", "SEO keyword integration", "Stakeholder copy review"], deliverables: ["Final approved copy", "SEO content brief"] },
    { stage: "Development & Integration", purpose: "Build the site on a secure, performant, maintainable foundation.", activities: ["Front-end and CMS build", "Third-party and CRM integrations", "Accessibility implementation"], deliverables: ["Staging environment", "Integration documentation"] },
    { stage: "QA & Performance Tuning", purpose: "Confirm the site works correctly, quickly and accessibly everywhere.", activities: ["Cross-browser and device testing", "Performance and Core Web Vitals tuning", "Accessibility audit"], deliverables: ["QA report", "Performance benchmark report"] },
    { stage: "Launch", purpose: "Go live with minimal risk and maximum readiness.", activities: ["DNS and hosting cutover", "Analytics and tracking verification", "Launch checklist sign-off"], deliverables: ["Live production site", "Launch runbook"] },
    { stage: "Post-Launch Optimisation", purpose: "Improve performance using real visitor behaviour.", activities: ["Analytics review cadence", "Conversion rate testing", "Content and SEO refresh"], deliverables: ["Monthly performance summary", "Optimisation roadmap"] },
  ],

  outcomes: [
    { metric: "+30-60%", title: "Improved enquiry conversion", description: "Clearer messaging and conversion paths typically lift form completions from existing traffic." },
    { metric: "-40-70%", title: "Faster page load times", description: "Performance-focused engineering reduces load times, cutting bounce on mobile and slower connections." },
    { metric: "2-3x", title: "Growth in organic search visibility", description: "Search-ready architecture and content typically expand ranking keywords within two to three quarters." },
    { metric: "Hours to minutes", title: "Reduced content update time", description: "A proper CMS lets marketing teams publish updates without waiting on developer support." },
    { metric: "WCAG-aligned", title: "Broader accessible reach", description: "Accessibility-first builds widen the addressable audience and reduce legal exposure." },
    { metric: "Single platform", title: "Consolidated regional presence", description: "Multiple legacy or regional sites unified into one governed, brand-consistent platform." },
    { metric: "Improved investor confidence", title: "Stronger fundraising and RFP readiness", description: "A credible digital presence removes a recurring point of friction in due diligence conversations." },
    { metric: "Lower total cost", title: "Reduced marketing workaround spend", description: "Fewer one-off landing pages and PDFs needed once the core site can support campaigns directly." },
    { metric: "Improved uptime", title: "Reduced security and downtime incidents", description: "Modern hosting and patching practices reduce the frequency and impact of outages." },
  ],

  industries: [
    { name: "Professional & Financial Services", description: "Credibility and compliance-aware content are critical to converting high-value enquiries." },
    { name: "Technology & SaaS", description: "Fast, conversion-focused sites are essential for demo requests and trial sign-ups." },
    { name: "Manufacturing & Industrial", description: "Corporate sites often serve as the primary channel for RFPs, distributor and investor enquiries." },
    { name: "Healthcare & Life Sciences", description: "Accessibility and regulatory-aware content are non-negotiable for patient and partner trust." },
    { name: "Education & Training Providers", description: "Clear programme information architecture drives enrolment and admissions enquiries." },
    { name: "Nonprofits & NGOs", description: "Credible storytelling and simple donation paths directly influence funding outcomes." },
    { name: "Retail & Consumer Brands", description: "Fast, mobile-first experiences underpin both brand perception and e-commerce conversion." },
    { name: "Public Sector & Institutions", description: "Accessibility standards and clear service information are mandatory, not optional." },
  ],

  technologies: ["WordPress", "Webflow", "React", "Next.js", "Tailwind CSS", "HubSpot CMS", "Contentful", "Figma", "Google Analytics 4", "Google Tag Manager", "Cloudflare", "AWS / Azure hosting", "Semrush", "Google Search Console"],

  engagementModels: [
    { name: "New Site Build", bestFor: "Businesses launching a new brand, product or market presence.", includes: "Full discovery, design, content, development and launch support." },
    { name: "Website Redesign", bestFor: "Organisations whose existing site no longer reflects their positioning or converts well.", includes: "Audit, re-architecture, redesign and migration onto a modern platform." },
    { name: "Landing Page & Campaign Support", bestFor: "Marketing teams running specific campaigns needing dedicated conversion pages.", includes: "Rapid design, copy and build of standalone campaign pages." },
    { name: "Ongoing Optimisation & Support", bestFor: "Businesses with a live site needing continuous improvement and maintenance.", includes: "Performance monitoring, content updates, SEO refresh and security patching." },
  ],

  faqs: [
    { q: "How long does a corporate website project typically take?", a: "A full corporate website build typically runs across several structured stages from discovery through launch, with timelines depending on content readiness and integration complexity. Smaller redesigns move faster than full rebuilds involving CRM or CMS migration. We share a stage-by-stage timeline during discovery so leadership can plan around it. Rushed timelines usually come at the expense of content quality or QA, which we flag transparently." },
    { q: "Do we need a full redesign, or can our current site be improved incrementally?", a: "Not always — many sites can be improved significantly through targeted UX, content and performance work without a full rebuild. A short audit usually reveals whether the underlying architecture and platform can support incremental change. If the platform itself is limiting (outdated CMS, poor performance foundation), a redesign becomes the more efficient path. We recommend the least disruptive option that still meets the commercial objective." },
    { q: "Will we be able to update the website ourselves after launch?", a: "Yes, sites are built on a content management system your team can operate without developer support for routine updates. We include training and documentation as part of handover. More complex structural changes, like adding new page templates, typically still involve development support. The goal is independence for day-to-day content, not zero ongoing collaboration." },
    { q: "How do you approach SEO during a website build?", a: "SEO is built into information architecture, page structure and technical performance from the first wireframe, not added afterward. We align page structure with search intent, implement schema markup, and ensure technical fundamentals like site speed and mobile usability are met. Content is written with target keywords in mind without compromising readability. Post-launch, we track ranking movement and recommend ongoing content refresh." },
    { q: "What platform do you recommend for a corporate website?", a: "Platform choice depends on your team's technical capability, integration needs and growth plans, not a single default recommendation. WordPress and Webflow suit most marketing-led corporate sites; React or Next.js suit businesses needing custom functionality or tight product integration. We assess this during discovery and explain the trade-offs before recommending a direction. The right platform is the one your team can actually operate long-term." },
    { q: "How do you ensure the website is accessible?", a: "We design and build to WCAG accessibility guidelines covering colour contrast, keyboard navigation, screen reader compatibility and semantic markup. Accessibility is treated as a launch requirement, tested during QA rather than retrofitted afterward. This widens your addressable audience and reduces legal exposure in regulated markets. We can also provide an accessibility conformance summary on request." },
    { q: "Can you integrate the website with our CRM and marketing tools?", a: "Yes, integration with CRM, marketing automation and analytics platforms is a standard part of our development process. This includes form routing, lead scoring triggers, and tracking setup so leadership has visibility into buyer behaviour. We work with your existing tool stack rather than requiring you to switch platforms. Integration requirements are scoped during discovery to avoid surprises later." },
    { q: "How do you measure whether the new website is performing better?", a: "We define success metrics during discovery, typically covering conversion rate, page load speed, organic visibility and engagement. Analytics and tag management are configured at launch so these are trackable from day one. We recommend a post-launch review cadence to compare performance against the pre-launch baseline. This turns the website into a measurable business asset rather than a subjective visual project." },
    { q: "What happens if our brand identity changes after the site is built?", a: "A well-structured design system makes rebranding far less disruptive because visual tokens like colour and typography are centralised. Content and layout structures typically remain valid even when visual branding shifts. We can support a brand refresh as a smaller, targeted engagement rather than a full rebuild. This is one reason we recommend a proper design system from the outset." },
    { q: "Do you write the website content, or do we need to provide it?", a: "We typically lead content strategy and copywriting, informed by workshops with your sales, product and delivery teams. This ensures the content reflects your actual value proposition rather than generic industry language. You can also provide existing content for us to restructure and refine if preferred. Either way, content is reviewed and approved by your team before development begins." },
    { q: "How do you handle multi-region or multi-language websites?", a: "We design a governed information architecture that supports regional or language variants without duplicating maintenance effort. This typically involves a shared design system with localised content managed through the CMS. We also account for regional SEO and hosting considerations during technical planning. This approach keeps brand consistency while allowing regional flexibility." },
    { q: "Will the website work well on mobile devices?", a: "Yes, every project is designed mobile-first, since most B2B and B2C traffic now arrives from mobile devices. We test layouts, load times and interactions across a range of devices and screen sizes before launch. Mobile performance is treated as a primary success metric, not a secondary consideration. Poor mobile experience is one of the most common causes of lost enquiries, so we prioritise it early." },
    { q: "What is included in ongoing website support?", a: "Ongoing support typically includes security patching, uptime monitoring, content updates, and periodic performance and SEO reviews. We tailor the scope to your internal capability, covering only what your team cannot reasonably manage in-house. This keeps the site secure and performing well long after launch. Support arrangements are agreed separately from the initial build." },
    { q: "How do you keep the website secure?", a: "We use secure hosting environments, keep platforms and dependencies patched, and implement standard protections like HTTPS and firewall rules. For CMS-based sites, we recommend a patching cadence to avoid known vulnerabilities. Ongoing monitoring can flag unusual activity or downtime early. Security is treated as an operational responsibility, not a one-time setup task." },
    { q: "Can you migrate content from our existing website?", a: "Yes, we audit existing content and migrate what remains relevant and performing well into the new structure. This is also an opportunity to retire outdated pages and consolidate duplicated content. We manage redirects carefully to preserve existing search rankings during migration. Migration planning is scoped explicitly to avoid content or SEO loss at launch." },
    { q: "How involved does our team need to be during the project?", a: "Meaningful input is needed during discovery, content review and design sign-off stages, but day-to-day production is handled by us. We structure review points to respect your team's time while keeping stakeholders aligned. The more responsive feedback is during key milestones, the smoother the overall timeline runs. We recommend naming a single internal point of contact to streamline decisions." },
    { q: "What if we already have a brand identity but no website presence?", a: "We work from your existing brand guidelines and extend them into a digital design system suited to web use. If guidelines are incomplete, we can recommend lightweight extensions needed specifically for the website. The goal is consistency with your existing brand, not reinventing it. This keeps the website aligned with other brand touchpoints from day one." },
    { q: "Do you offer landing pages separate from a full website rebuild?", a: "Yes, we regularly design and build standalone landing pages for specific campaigns, product launches or events. These can be built quickly and tested independently of the main site's release cycle. Landing pages are still held to the same conversion and performance standards as the core site. This is a useful option for marketing teams needing speed without committing to a full rebuild." },
    { q: "How do you handle website performance on slow connections or older devices?", a: "We optimise image delivery, code structure and hosting configuration to keep load times low even on constrained connections. This is particularly important in markets or industries where mobile data speeds vary widely. We test against realistic performance budgets, not just ideal-condition benchmarks. This ensures the site performs for your actual audience, not just in a lab environment." },
    { q: "Can the website support future growth, like new products or regions?", a: "Yes, we design information architecture and CMS structures with anticipated growth in mind wherever possible. This avoids a costly full rebuild every time the business adds a product line, market or business unit. We discuss growth plans explicitly during discovery so the architecture can accommodate them. A scalable foundation is usually far cheaper than repeated rebuilds." },
    { q: "What does the GripNovaco website project demonstrate about your approach?", a: "The GripNovaco corporate website reflects our standard approach: business-first messaging, a clear information architecture, and a build that the client's team can maintain independently. It demonstrates our ability to deliver a full corporate website engagement from discovery through launch. It is one reference point among the broader delivery approach we apply across engagements. We are happy to discuss the project in more detail during a consultation." },
    { q: "Do you provide analytics reporting after launch?", a: "Yes, we configure analytics and can provide periodic performance summaries covering traffic, conversion and engagement metrics. This gives leadership ongoing visibility into how the website is performing against its original objectives. Reporting cadence and depth are agreed based on your internal needs and resourcing. This turns the website into a measurable, managed asset rather than a static deliverable." },
    { q: "How do you price a website project?", a: "Pricing depends on scope — page count, integrations, content needs and platform complexity all factor into the engagement design. We do not use fixed public pricing because every business's requirements and starting point differ. We provide a clear proposal after discovery so there are no surprises once work begins. The focus is on matching investment to the commercial outcome the website needs to deliver." },
  ],

  related: [
    { slug: "portfolio-branding", title: "Portfolio & Leadership Branding", description: "Personal websites and positioning for founders and senior leaders." },
    { slug: "business-technology-consulting", title: "Business & Technology Consulting", description: "Objective advisory on technology spend, process and roadmap sequencing." },
    { slug: "business-process-automation", title: "Business Process Automation", description: "Automate the workflows behind your digital presence and lead handling." },
    { slug: "ai-strategy", title: "AI Strategy", description: "Apply AI to content, search and customer engagement responsibly." },
  ],

  cta: {
    heading: "Let's talk about what your website should be doing for your business",
    body: "If your current site isn't generating qualified enquiries, the fix is rarely more traffic — it's a clearer strategy, structure and experience. Talk to us about where your website is underperforming and what a focused rebuild or redesign could realistically achieve.",
  },

  seo: {
    title: "Website Design & Development Services | Vimico",
    description: "Corporate website design and development that turns traffic into qualified enquiries — strategy, UX, content, SEO and secure hosting.",
    ogTitle: "Website Design & Development | Vimico",
    ogDescription: "We design and build corporate websites focused on credibility, conversion and long-term performance, not just visual design.",
    imageAlt: "Corporate website design and development services by Vimico",
    primaryKeyword: "corporate website design and development",
    secondaryKeywords: ["business website design", "website redesign services", "enterprise web development", "corporate web design agency", "website UX and conversion design", "SEO-friendly website development"],
    semanticKeywords: ["website strategy", "information architecture", "conversion rate optimisation", "web accessibility", "content management system", "website performance", "responsive web design", "technical SEO"],
    longTailKeywords: ["how to redesign a corporate website for conversions", "corporate website design and development company", "website design services for B2B businesses", "improve website enquiry conversion rate", "accessible business website development"],
    entityKeywords: ["WordPress", "Webflow", "WCAG accessibility", "Google Analytics 4", "Core Web Vitals"],
    questionKeywords: ["how long does a website redesign take", "how much does a corporate website cost", "why is my website not converting", "what makes a good corporate website", "how do I improve my website's SEO"],
  },
};
