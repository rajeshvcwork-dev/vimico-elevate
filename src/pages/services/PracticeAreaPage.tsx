import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero3D from "@/components/Hero3D";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { practiceAreaBySlug } from "@/data/practiceAreas";
import servicesHero from "@/assets/hero-services.jpg";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="py-14 border-b border-border/40 last:border-b-0">
    <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
        <span className="gradient-text">{title}</span>
      </h2>
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </div>
  </section>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="grid md:grid-cols-2 gap-4">
    {items.map((item) => (
      <li
        key={item}
        className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50"
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
          <Check className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="text-foreground text-sm md:text-base leading-relaxed">
          {item}
        </span>
      </li>
    ))}
  </ul>
);

const PracticeAreaPage = () => {
  const { slug } = useParams();
  const area = slug ? practiceAreaBySlug(slug) : undefined;

  if (!area) return <Navigate to="/services" replace />;

  const canonical = `https://vimico.in/services/${area.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{area.title} | Vimico Practice Areas</title>
        <meta name="description" content={area.seoDescription} />
        <meta name="keywords" content={area.keywords} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[560px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={servicesHero}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-vimico-navy/95 via-vimico-navy/85 to-vimico-navy/70" />
        </div>
        <Hero3D variant="practice" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-28 max-w-5xl">
          <Link to="/services">
            <Button
              variant="outline"
              size="sm"
              className="mb-8 rounded-full border-primary/40 bg-primary/10 text-primary-foreground hover:bg-primary/20 gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Button>
          </Link>
          <span className="inline-block px-4 py-1.5 rounded-full border-2 border-primary/40 bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
            Practice Area
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            {area.title}
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-3xl">
            {area.tagline}
          </p>
          {area.slug === "domainiq" && (
            <a
              href="https://domainiq-insight.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8"
            >
              <Button variant="gradient" size="lg" className="rounded-full gap-2">
                Launch DomainIQ Insight <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          )}
        </div>
      </section>

      {/* Executive Summary */}
      <Section title="Executive Summary">
        <p className="text-lg leading-relaxed">{area.executiveSummary}</p>
      </Section>

      <Section title="Business Challenges Addressed">
        <BulletList items={area.challenges} />
      </Section>

      <Section title="Target Customers">
        <BulletList items={area.targetCustomers} />
      </Section>

      <Section title="Scope of Services">
        <BulletList items={area.scope} />
      </Section>

      <Section title="Key Deliverables">
        <BulletList items={area.deliverables} />
      </Section>

      <Section title="Customer Outcomes / Business Value">
        <BulletList items={area.outcomes} />
      </Section>

      <Section title="Consulting Methodology">
        <ol className="space-y-4">
          {area.methodology.map((step, i) => (
            <li
              key={step}
              className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                {i + 1}
              </div>
              <span className="text-foreground leading-relaxed pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Recommended Engagement Model">
        <BulletList items={area.engagementModels} />
        <p className="mt-6 text-sm text-muted-foreground italic">
          Duration, commercials, and pricing are maintained separately and shared
          with prospective clients based on the engagement scope.
        </p>
      </Section>

      <Section title="Tools & Technologies">
        <div className="flex flex-wrap gap-3">
          {area.toolsTech.map((t) => (
            <span
              key={t}
              className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Sample Deliverables">
        <BulletList items={area.sampleDeliverables} />
      </Section>

      <Section title="Case Studies / Success Stories">
        <div className="space-y-4">
          {area.caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="p-6 rounded-2xl bg-card border border-border/50 shadow-card"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {cs.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {cs.summary}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Frequently Asked Questions">
        <Accordion type="single" collapsible className="w-full">
          {area.faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-foreground">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-vimico-navy via-vimico-navy to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Explore {area.title} for your business
          </h2>
          <p className="text-muted text-lg mb-8">
            Let's discuss scope, engagement, and commercials tailored to your context.
          </p>
          <Link to="/contact">
            <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
              Talk to Vimico <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PracticeAreaPage;