export interface ChallengeCard {
  title: string;
  description: string;
}

export interface RiskItem {
  title: string;
  description: string;
}

export interface OfferingCategory {
  category: string;
  description: string;
  items: string[];
}

export interface DifferentiatorItem {
  title: string;
  description: string;
}

export interface MethodologyStage {
  stage: string;
  purpose: string;
  activities: string[];
  deliverables: string[];
}

export interface OutcomeCard {
  metric: string;
  title: string;
  description: string;
}

export interface IndustryCard {
  name: string;
  description: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface RelatedServiceLink {
  slug: string;
  title: string;
  description: string;
}

export interface ServiceSeo {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  imageAlt: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  semanticKeywords: string[];
  longTailKeywords: string[];
  entityKeywords: string[];
  questionKeywords: string[];
}

/**
 * Reusable enterprise service page content contract.
 * Every service page renders the same section sequence from this shape.
 */
export interface EnterpriseService {
  slug: string;
  /** H1 / page title */
  title: string;
  /** Short eyebrow label above the H1, e.g. "ERP Consulting" */
  eyebrow: string;
  /** One or two sentence executive positioning line under the H1 */
  tagline: string;
  heroImage: string;

  /** SECTION 1 — customer pain points, stated before anything about Vimico */
  challengesIntro: string;
  challenges: ChallengeCard[];

  /** SECTION 2 — the cost of inaction */
  whyItMattersIntro: string;
  risks: RiskItem[];

  /** SECTION 3 — understanding the service, in business language */
  understanding: {
    whatItIs: string;
    whyBusinessesNeedIt: string;
    misconceptions: { myth: string; reality: string }[];
    whoShouldInvest: string[];
    benefits: string[];
  };

  /** SECTION 4 — grouped service offerings */
  offerings: OfferingCategory[];

  /** SECTION 5 — consulting philosophy */
  differentiators: DifferentiatorItem[];

  /** SECTION 6 — delivery methodology timeline */
  methodology: MethodologyStage[];

  /** SECTION 7 — measurable business outcomes */
  outcomes: OutcomeCard[];

  /** Industries served */
  industries: IndustryCard[];

  /** Technology / platform grid (secondary to business content) */
  technologies: string[];

  /** Engagement models */
  engagementModels: { name: string; bestFor: string; includes: string }[];

  /** SECTION 8 — 20-25 FAQs */
  faqs: FaqItem[];

  /** SECTION 9 — internal linking */
  related: RelatedServiceLink[];

  /** SECTION 10 — consultative CTA */
  cta: { heading: string; body: string };

  seo: ServiceSeo;
}