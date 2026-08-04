import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type {
  ChallengeCard,
  DifferentiatorItem,
  EnterpriseService,
  FaqItem,
  IndustryCard,
  MethodologyStage,
  OfferingCategory,
  OutcomeCard,
  RelatedServiceLink,
  RiskItem,
} from "@/data/enterprise/types";

/* ---------------------------------------------------------------- shells */

export const ServiceSection = ({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "default",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  tone?: "default" | "muted";
}) => (
  <section
    id={id}
    className={`py-16 lg:py-24 ${tone === "muted" ? "bg-muted/30" : ""}`}
  >
    <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
      <header className="max-w-3xl mb-10 lg:mb-14">
        {eyebrow && (
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-foreground leading-tight">
          {title}
        </h2>
        {intro && (
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            {intro}
          </p>
        )}
      </header>
      {children}
    </div>
  </section>
);

/* ------------------------------------------------------- challenge cards */

export const ChallengeCards = ({ items }: { items: ChallengeCard[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {items.map((item) => (
      <article
        key={item.title}
        className="group relative p-6 rounded-2xl bg-card border border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_-24px_hsl(var(--primary)/0.5)]"
      >
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
          <AlertTriangle className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </article>
    ))}
  </div>
);

/* ------------------------------------------------------------ risk cards */

export const RiskCards = ({ items }: { items: RiskItem[] }) => (
  <div className="grid sm:grid-cols-2 gap-5">
    {items.map((item) => (
      <article
        key={item.title}
        className="flex gap-4 p-6 rounded-2xl bg-card border border-border/60"
      >
        <span className="mt-1 w-1.5 h-auto rounded-full bg-gradient-to-b from-primary to-secondary" />
        <div>
          <h3 className="text-base font-semibold text-foreground mb-1.5">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </div>
      </article>
    ))}
  </div>
);

/* ------------------------------------------------------- understanding */

export const UnderstandingBlock = ({
  data,
}: {
  data: EnterpriseService["understanding"];
}) => (
  <div className="space-y-10">
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="p-7 rounded-2xl bg-card border border-border/60">
        <h3 className="text-lg font-semibold text-foreground mb-3">
          What it actually is
        </h3>
        <p className="text-muted-foreground leading-relaxed">{data.whatItIs}</p>
      </div>
      <div className="p-7 rounded-2xl bg-card border border-border/60">
        <h3 className="text-lg font-semibold text-foreground mb-3">
          Why businesses invest in it
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {data.whyBusinessesNeedIt}
        </p>
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Common misconceptions
      </h3>
      <div className="overflow-hidden rounded-2xl border border-border/60">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-5 py-3 font-semibold text-foreground w-1/2">
                What people assume
              </th>
              <th className="px-5 py-3 font-semibold text-foreground">
                What we see in practice
              </th>
            </tr>
          </thead>
          <tbody>
            {data.misconceptions.map((m) => (
              <tr key={m.myth} className="border-t border-border/60">
                <td className="px-5 py-4 text-muted-foreground align-top">
                  {m.myth}
                </td>
                <td className="px-5 py-4 text-foreground align-top">
                  {m.reality}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Who should invest
        </h3>
        <BenefitList items={data.whoShouldInvest} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Business benefits
        </h3>
        <BenefitList items={data.benefits} />
      </div>
    </div>
  </div>
);

export const BenefitList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-0.5 w-5 h-5 rounded-md bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
          <Check className="w-3 h-3 text-primary-foreground" />
        </span>
        <span className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {item}
        </span>
      </li>
    ))}
  </ul>
);

/* --------------------------------------------------------- offering cards */

export const OfferingCards = ({ items }: { items: OfferingCategory[] }) => (
  <div className="grid md:grid-cols-2 gap-6">
    {items.map((cat) => (
      <article
        key={cat.category}
        className="p-7 rounded-2xl bg-card border border-border/60 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[0_18px_40px_-24px_hsl(var(--primary)/0.45)]"
      >
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {cat.category}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {cat.description}
        </p>
        <ul className="space-y-2.5">
          {cat.items.map((i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
              <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">{i}</span>
            </li>
          ))}
        </ul>
      </article>
    ))}
  </div>
);

/* ------------------------------------------------------ differentiators */

export const DifferentiatorCards = ({
  items,
}: {
  items: DifferentiatorItem[];
}) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {items.map((item, i) => (
      <article
        key={item.title}
        className="p-6 rounded-2xl bg-card border border-border/60"
      >
        <span className="block text-xs font-semibold text-primary tracking-widest mb-3">
          {String(i + 1).padStart(2, "0")}
        </span>
        <h3 className="text-base font-semibold text-foreground mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </article>
    ))}
  </div>
);

/* --------------------------------------------------- methodology timeline */

export const MethodologyTimeline = ({
  stages,
}: {
  stages: MethodologyStage[];
}) => (
  <ol className="relative border-l border-border/70 ml-4 space-y-8">
    {stages.map((stage, i) => (
      <li key={stage.stage} className="relative pl-8">
        <span className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground text-xs font-bold flex items-center justify-center ring-4 ring-background">
          {i + 1}
        </span>
        <div className="p-6 rounded-2xl bg-card border border-border/60">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {stage.stage}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            <span className="font-medium text-foreground">Purpose: </span>
            {stage.purpose}
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                Activities
              </h4>
              <ul className="space-y-1.5">
                {stage.activities.map((a) => (
                  <li key={a} className="text-sm text-muted-foreground leading-relaxed">
                    • {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                Deliverables
              </h4>
              <ul className="space-y-1.5">
                {stage.deliverables.map((d) => (
                  <li key={d} className="text-sm text-muted-foreground leading-relaxed">
                    • {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ol>
);

/* ------------------------------------------------------- outcome cards */

export const OutcomeCards = ({ items }: { items: OutcomeCard[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {items.map((item) => (
      <article
        key={item.title}
        className="p-6 rounded-2xl bg-card border border-border/60"
      >
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="text-xl font-bold gradient-text">{item.metric}</span>
        </div>
        <h3 className="text-base font-semibold text-foreground mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </article>
    ))}
  </div>
);

/* ------------------------------------------------------- industry cards */

export const IndustryCards = ({ items }: { items: IndustryCard[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {items.map((item) => (
      <article
        key={item.name}
        className="p-5 rounded-xl bg-card border border-border/60"
      >
        <h3 className="text-sm font-semibold text-foreground mb-1.5">
          {item.name}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </article>
    ))}
  </div>
);

/* ------------------------------------------------------ technology grid */

export const TechnologyGrid = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-3">
    {items.map((t) => (
      <span
        key={t}
        className="px-4 py-2 rounded-full bg-card border border-border/60 text-sm text-foreground"
      >
        {t}
      </span>
    ))}
  </div>
);

/* --------------------------------------------------- engagement table */

export const EngagementTable = ({
  items,
}: {
  items: EnterpriseService["engagementModels"];
}) => (
  <div className="overflow-x-auto rounded-2xl border border-border/60">
    <table className="w-full text-left text-sm min-w-[640px]">
      <thead className="bg-muted/50">
        <tr>
          <th className="px-5 py-3 font-semibold text-foreground">Engagement model</th>
          <th className="px-5 py-3 font-semibold text-foreground">Best suited for</th>
          <th className="px-5 py-3 font-semibold text-foreground">What it includes</th>
        </tr>
      </thead>
      <tbody>
        {items.map((m) => (
          <tr key={m.name} className="border-t border-border/60">
            <td className="px-5 py-4 font-medium text-foreground align-top">{m.name}</td>
            <td className="px-5 py-4 text-muted-foreground align-top">{m.bestFor}</td>
            <td className="px-5 py-4 text-muted-foreground align-top">{m.includes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ---------------------------------------------------------- faq accordion */

export const FaqAccordion = ({ items }: { items: FaqItem[] }) => (
  <Accordion type="single" collapsible className="w-full">
    {items.map((f, i) => (
      <AccordionItem key={f.q} value={`faq-${i}`}>
        <AccordionTrigger className="text-left text-foreground text-base">
          {f.q}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">
          {f.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

/* ------------------------------------------------------- related services */

export const RelatedServices = ({ items }: { items: RelatedServiceLink[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {items.map((item) => (
      <Link
        key={item.slug}
        to={`/services/${item.slug}`}
        className="group p-6 rounded-2xl bg-card border border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
      >
        <h3 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
          {item.title}
          <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </Link>
    ))}
  </div>
);

/* ------------------------------------------------------------- cta banner */

export const CtaBanner = ({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) => (
  <section className="py-20 bg-gradient-to-br from-vimico-navy via-vimico-navy to-secondary/30">
    <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-5">
        {heading}
      </h2>
      <p className="text-muted text-lg mb-8 leading-relaxed">{body}</p>
      <Link to="/contact">
        <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
          Request a Consultation <ArrowRight className="w-5 h-5" />
        </Button>
      </Link>
    </div>
  </section>
);