import { CheckCircle, Building2, Hotel, Landmark, Stethoscope, ShoppingBag, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero3D from "@/components/Hero3D";
import { practiceAreas } from "@/data/practiceAreas";
import heroAbout from "@/assets/hero-about.jpg";

const founderStrengths = [
  "Operating Models & Governance Frameworks",
  "Organizational Change Management & Delivery Transformation",
  "Business Growth Strategy & Adaptability",
  "Leadership Capability & Workforce Enablement",
  "Operational Excellence, Predictability & Execution Discipline",
  "Stakeholder Alignment across Global Environments",
];

const industries = [
  {
    icon: Cpu,
    name: "Enterprise Technology",
    clients: ["Dell Technologies", "Digital Endpoint", "Glovia", "TCIL BellSouth Ltd."],
  },
  {
    icon: Landmark,
    name: "Financial Services & Insurance",
    clients: ["AXA", "MSCI", "EY"],
  },
  {
    icon: Stethoscope,
    name: "Healthcare, Therapy & Life Sciences",
    clients: ["AstraZeneca", "MediSure Healthcare", "GripNovaco (physiotherapy & pain-free motion)"],
  },
  {
    icon: Smartphone,
    name: "Mobile Applications",
    clients: ["Consumer and enterprise mobile apps across iOS and Android"],
  },
  {
    icon: ShoppingBag,
    name: "Retail & Consumer",
    clients: ["Ajinomoto", "RaceTrac"],
  },
  {
    icon: Hotel,
    name: "Hospitality",
    clients: [
      "Marriott International",
      "Hyatt",
      "Sheraton Hotels and Resorts",
      "Shangri-La Hotels and Resorts",
    ],
  },
  {
    icon: Building2,
    name: "Global Capability Centers",
    clients: ["Multi-geography delivery organizations across 3 continents"],
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Vimico | Founder, Practice Areas & Industry Expertise</title>
        <meta name="description" content="Meet the founder of Vimico and explore our practice areas and industry expertise — 25+ years driving business transformation, delivery excellence, and leadership advisory across 3 continents." />
        <meta name="keywords" content="about Vimico, founder, business transformation, delivery excellence, AI strategy, executive coaching, industry expertise" />
        <link rel="canonical" href="https://vimico.in/about" />
      </Helmet>
      
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroAbout} 
            alt="About Vimico" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vimico-navy/90 via-vimico-navy/80 to-vimico-navy/70" />
        </div>
        <Hero3D variant="about" />
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              About Vimico
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Great execution is never accidental —{" "}
              <span className="gradient-text">it is intentionally designed.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Vimico is a global business transformation practice — helping organizations scale intelligently, execute with precision, and build high-performing operating models that align strategy, people, process, and technology.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#founder">
                <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                  Meet the Founder
                </Button>
              </a>
              <a href="#practice-areas">
                <Button variant="hero" size="xl" className="gap-2 rounded-full border-2">
                  Practice Areas <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section id="founder" className="py-20 lg:py-28 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-2 animate-fade-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl" />
                <div className="relative aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-vimico-navy via-vimico-navy to-secondary/40 border border-primary/30 shadow-card flex items-center justify-center overflow-hidden">
                  <div className="text-center px-6">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-5xl font-bold mb-6">
                      V
                    </div>
                    <div className="text-primary-foreground font-semibold text-lg">Vimico</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 animate-fade-up delay-200">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                Meet the Founder
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                AI Innovation, Global Business Transformation &{" "}
                <span className="gradient-text">Organizational Change Leader</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
                <p>
                  Accomplished global business and organizational leader with{" "}
                  <span className="text-foreground font-semibold">25+ years</span> of experience driving business transformation, organizational change management, global delivery leadership, operational excellence, and leadership enablement across diverse industries and international markets.
                </p>
                <p>
                  Known for helping organizations scale intelligently, execute with precision, and build high-performing operating models that align strategy, people, process, and technology to deliver measurable business outcomes.
                </p>
                <p>
                  Demonstrated success supporting organizations in scaling from growth-stage operations to 100+ employee structures, contributing to multi-million-dollar annual revenues through the design and implementation of scalable operating models, governance frameworks, and leadership structures.
                </p>
                <p>
                  Expertise centered on bridging the gap between strategy and execution — transforming underperforming or fragmented delivery organizations into structured, scalable, high-performance business functions.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3">Core strengths</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {founderStrengths.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <blockquote className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border-l-4 border-primary italic text-foreground">
                "Great execution is never accidental — it is intentionally designed."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-20 lg:py-28 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14 animate-fade-up max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Practice Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Where we create <span className="gradient-text">measurable impact</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Nine focused practices — each backed by a repeatable methodology and outcome-driven engagement model. Our work spans enterprise transformation as well as specialised domains such as therapy and healthcare platforms and mobile applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {practiceAreas.map((p, i) => (
              <Link
                to={`/services/${p.slug}`}
                key={p.slug}
                className="group bg-card rounded-2xl p-6 shadow-card border border-border/50 card-hover animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 text-primary-foreground font-bold">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section id="industry-expertise" className="py-20 lg:py-28 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14 animate-fade-up max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Industry Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Deep experience across <span className="gradient-text">complex, regulated, and global industries</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Representative clients served across enterprise, financial services, healthcare, retail, and hospitality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border/50 animate-fade-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{ind.name}</h3>
                  <ul className="space-y-1.5">
                    {ind.clients.map((c) => (
                      <li key={c} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-16 max-w-4xl mx-auto animate-fade-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-6 bg-card rounded-2xl border border-border/50">
                <div className="text-3xl font-bold gradient-text mb-2">25+</div>
                <div className="text-xs font-medium text-muted-foreground">Years of Experience</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border border-border/50">
                <div className="text-3xl font-bold gradient-text mb-2">3</div>
                <div className="text-xs font-medium text-muted-foreground">Continents</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border border-border/50">
                <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                <div className="text-xs font-medium text-muted-foreground">Leaders Enabled</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border border-border/50">
                <div className="text-3xl font-bold gradient-text mb-2">$M+</div>
                <div className="text-xs font-medium text-muted-foreground">Revenue Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-vimico-navy via-vimico-navy to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let's discuss how Vimico can help you scale intelligently and execute with precision.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
