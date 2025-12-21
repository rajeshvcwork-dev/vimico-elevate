import { Globe, Handshake, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/global-partnership-hero.jpg";

const regions = [
  {
    name: "India",
    description: "Headquarters with strong delivery capabilities and local market expertise for South Asian enterprises.",
  },
  {
    name: "Malaysia",
    description: "Strategic presence serving Southeast Asian markets with cultural understanding and regional partnerships.",
  },
  {
    name: "Thailand",
    description: "Expanding footprint supporting digital transformation initiatives across the ASEAN region.",
  },
];

const partnershipBenefits = [
  {
    title: "Extended Reach",
    description: "Access new markets through Vimico's established network across Asia-Pacific and emerging economies.",
  },
  {
    title: "Complementary Expertise",
    description: "Combine your strengths with our Agile, technology, and digital transformation capabilities.",
  },
  {
    title: "Shared Success",
    description: "Collaborative business models designed for mutual growth and long-term partnership value.",
  },
  {
    title: "Local Knowledge",
    description: "Leverage our deep understanding of regional markets, regulations, and business practices.",
  },
];

const GlobalPartnership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Global Partnerships | Vimico - Strategic Alliances Across Continents</title>
        <meta name="description" content="Explore Vimico's global partnership opportunities spanning India, Malaysia, and Thailand. Join our network of strategic alliances driving digital transformation and business growth worldwide." />
        <meta name="keywords" content="Vimico partnerships, global alliances, India technology partner, Malaysia consulting, Thailand digital transformation, Asia-Pacific business expansion, strategic partnerships" />
        <link rel="canonical" href="https://vimico.in/global-partnership" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Global partnership handshake representing international business collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vimico-navy/90 via-vimico-navy/80 to-vimico-navy/70" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32 flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              Strategic Alliances
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Building <span className="gradient-text">Global Partnerships</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Vimico partners with forward-thinking organizations across continents to deliver exceptional technology solutions and drive mutual business growth.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Global Presence</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Vimico operates across three continents, bringing local expertise and global best practices to every partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div
                key={region.name}
                className="group bg-card rounded-2xl p-8 shadow-card border border-border/50 card-hover text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {region.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {region.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partnership <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join the Vimico partner ecosystem and unlock new opportunities for growth and collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 shadow-sm animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Types of <span className="gradient-text">Partnerships</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Technology Partners",
                description: "Collaborate on joint technology solutions, integrations, and platform development to serve shared customers.",
              },
              {
                icon: Users,
                title: "Reseller Partners",
                description: "Extend Vimico's services to your client base with attractive partnership terms and support.",
              },
              {
                icon: Handshake,
                title: "Strategic Alliances",
                description: "Long-term partnerships focused on market expansion, joint ventures, and co-innovation initiatives.",
              },
            ].map((type, index) => (
              <div
                key={type.title}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-6">
                  <type.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{type.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-vimico-navy via-vimico-navy to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Start Your Partnership Journey with Vimico
            </h2>
            <p className="text-muted text-lg mb-8">
              Ready to explore how a partnership with Vimico can drive growth for your organization? Let's connect.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Contact Us Today <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GlobalPartnership;
