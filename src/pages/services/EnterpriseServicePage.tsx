import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ChallengeCards,
  CtaBanner,
  DifferentiatorCards,
  EngagementTable,
  FaqAccordion,
  IndustryCards,
  MethodologyTimeline,
  OfferingCards,
  OutcomeCards,
  RelatedServices,
  RiskCards,
  ServiceSection,
  TechnologyGrid,
  UnderstandingBlock,
} from "@/components/service/ServiceSections";
import type { EnterpriseService } from "@/data/enterprise/types";

const SITE = "https://vimico.lovable.app";

const EnterpriseServicePage = ({ service }: { service: EnterpriseService }) => {
  const canonical = `${SITE}/services/${service.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.seo.primaryKeyword,
    description: service.seo.description,
    url: canonical,
    provider: {
      "@type": "ProfessionalService",
      name: "Vimico",
      url: SITE,
    },
    areaServed: "Global",
    audience: {
      "@type": "BusinessAudience",
      name: service.industries.map((i) => i.name).join(", "),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: canonical },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{service.seo.title}</title>
        <meta name="description" content={service.seo.description} />
        <meta
          name="keywords"
          content={[
            service.seo.primaryKeyword,
            ...service.seo.secondaryKeywords,
            ...service.seo.semanticKeywords,
          ].join(", ")}
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={service.seo.ogTitle} />
        <meta property="og:description" content={service.seo.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.seo.ogTitle} />
        <meta name="twitter:description" content={service.seo.ogDescription} />
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <header className="relative min-h-[600px] pt-20 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.seo.imageAlt}
            className="w-full h-full object-cover"
            width={1536}
            height={768}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/96 via-vimico-navy/88 to-vimico-navy/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-28 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-primary-foreground/60">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-primary">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-primary-foreground/90">{service.title}</span>
          </nav>
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/15 text-primary-foreground text-xs font-semibold uppercase tracking-[0.18em] mb-6">
            {service.eyebrow}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-bold text-primary-foreground mb-6 leading-[1.1] max-w-4xl">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-3xl">
            {service.tagline}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact">
              <Button variant="gradient" size="lg" className="rounded-full gap-2 border-2">
                Request a Consultation <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="#offerings" className="inline-flex">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
              >
                Explore our offerings
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* 1 — Business challenges */}
      <ServiceSection
        id="challenges"
        eyebrow="Business challenges"
        title="The problems leadership teams bring to us"
        intro={service.challengesIntro}
      >
        <ChallengeCards items={service.challenges} />
      </ServiceSection>

      {/* 2 — Why it matters */}
      <ServiceSection
        id="why-it-matters"
        eyebrow="Cost of inaction"
        title="What these challenges cost the business"
        intro={service.whyItMattersIntro}
        tone="muted"
      >
        <RiskCards items={service.risks} />
      </ServiceSection>

      {/* 3 — Understanding the service */}
      <ServiceSection
        id="understanding"
        eyebrow="Understanding the service"
        title={`${service.title} explained in business terms`}
      >
        <UnderstandingBlock data={service.understanding} />
      </ServiceSection>

      {/* 4 — Offerings */}
      <ServiceSection
        id="offerings"
        eyebrow="Our service offerings"
        title="How we can help"
        tone="muted"
      >
        <OfferingCards items={service.offerings} />
      </ServiceSection>

      {/* 5 — Why Vimico */}
      <ServiceSection
        id="why-vimico"
        eyebrow="Why Vimico"
        title="Our consulting philosophy"
      >
        <DifferentiatorCards items={service.differentiators} />
      </ServiceSection>

      {/* 6 — Methodology */}
      <ServiceSection
        id="methodology"
        eyebrow="Delivery methodology"
        title="How the engagement runs, stage by stage"
        tone="muted"
      >
        <MethodologyTimeline stages={service.methodology} />
      </ServiceSection>

      {/* 7 — Outcomes */}
      <ServiceSection
        id="outcomes"
        eyebrow="Business outcomes"
        title="The value you should expect to measure"
      >
        <OutcomeCards items={service.outcomes} />
      </ServiceSection>

      {/* Industries */}
      <ServiceSection
        id="industries"
        eyebrow="Industries served"
        title="Where this work creates the most value"
        tone="muted"
      >
        <IndustryCards items={service.industries} />
      </ServiceSection>

      {/* Engagement + technology */}
      <ServiceSection
        id="engagement"
        eyebrow="Engagement models"
        title="Ways to work with us"
      >
        <EngagementTable items={service.engagementModels} />
        <h3 className="text-lg font-semibold text-foreground mt-12 mb-4">
          Platforms and tooling we work with
        </h3>
        <TechnologyGrid items={service.technologies} />
      </ServiceSection>

      {/* 8 — FAQs */}
      <ServiceSection
        id="faqs"
        eyebrow="Frequently asked questions"
        title={`${service.title}: questions decision makers ask`}
        tone="muted"
      >
        <FaqAccordion items={service.faqs} />
      </ServiceSection>

      {/* 9 — Related services */}
      <ServiceSection
        id="related"
        eyebrow="Related services"
        title="Explore adjacent capabilities"
      >
        <RelatedServices items={service.related} />
      </ServiceSection>

      {/* 10 — CTA */}
      <CtaBanner heading={service.cta.heading} body={service.cta.body} />

      <Footer />
    </div>
  );
};

export default EnterpriseServicePage;
