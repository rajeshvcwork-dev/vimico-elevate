import { ExternalLink, Globe, Handshake, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portfolioHero from "@/assets/hero-portfolio.jpg";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={portfolioHero} 
            alt="Portfolio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/80 to-vimico-navy/60" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              Strategic Partnerships
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Building <span className="gradient-text">Global Alliances</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">
              Vimico partners with industry leaders to deliver exceptional value and expand reach across emerging markets worldwide.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Explore Partnership Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* iZND Partnership */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-primary">Global Partner</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                iZND SDN BHD
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Vimico has forged a strategic partnership with <strong className="text-foreground">iZND SDN BHD</strong>, a pioneering technology solutions provider based in Malaysia. iZND Group specializes in delivering innovative digital transformation solutions, enterprise software, and cutting-edge technology services to businesses across Southeast Asia.
                </p>
                <p>
                  Through this collaboration, Vimico is positioned to bring iZND's comprehensive product offerings to new market segments, including India, Thailand, and the African region. iZND's portfolio encompasses advanced enterprise solutions, digital platforms, and technology consulting services that address the evolving needs of modern businesses.
                </p>
                <p>
                  This partnership enables both companies to leverage their combined expertise, extending reach to untapped markets while delivering world-class technology solutions that drive digital innovation and business growth across emerging economies.
                </p>
              </div>
              <a 
                href="https://www.izndgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6"
              >
                <Button variant="gradient" className="gap-2 rounded-full border-2">
                  Visit iZND Group <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
            <div className="relative animate-fade-up delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-muted/50 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                    <div className="text-sm font-bold text-gray-900">New Markets</div>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text mb-2">India</div>
                    <div className="text-sm font-bold text-gray-900">Key Expansion</div>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text mb-2">Thailand</div>
                    <div className="text-sm font-bold text-gray-900">Growth Region</div>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text mb-2">Africa</div>
                    <div className="text-sm font-bold text-gray-900">Emerging Market</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RISP Partnership */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-primary">Global Partner</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                RISP Consulting
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Vimico has forged a strategic partnership with <strong className="text-foreground">RISP Consulting</strong>, a pioneering technology solutions provider. RISP Consulting specializes in compliance requirements and implementing secure controls and practices.
                </p>
                <p>
                  Through this collaboration, Vimico is positioned to bring RISP Consulting's comprehensive product offerings to new market segments, including Thailand, and Malaysia region. RISP Consulting's portfolio encompasses advanced enterprise solutions, security consulting, compliance and governance audit consulting services that address the evolving needs of modern businesses.
                </p>
                <p>
                  This partnership enables both companies to leverage their combined expertise, extending reach to untapped markets while delivering world-class technology solutions that drive digital innovation and business growth across emerging economies.
                </p>
              </div>
              <a 
                href="https://www.risp-consult.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6"
              >
                <Button variant="gradient" className="gap-2 rounded-full border-2">
                  Visit RISP Consulting <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
            <div className="relative animate-fade-up delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-muted/50 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text mb-2">Security</div>
                    <div className="text-sm font-bold text-gray-900">IMPLEMENT & AUDIT: ISO-27001, SOC-1 & 2 Configuration</div>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text mb-2">Privacy</div>
                    <div className="text-sm font-bold text-gray-900">IMPLEMENT & GAP ASSESSMENT: ISO27701, GDPR/DPDPA/CCPA, DPIA, ROPA </div>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text mb-2">Compliance</div>
                    <div className="text-sm font-bold text-gray-900">FRAMEWORKS: RBI/SEBI/PCI-DSS/HIPAA/Taxation</div>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text mb-2">Governance</div>
                    <div className="text-sm font-bold text-gray-900">DEVELOP: Process Controls, Financial Controls, Internal Audits, Continuous Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MediSure Partnership */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative animate-fade-up">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border/50">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-2xl">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Brand Transformation</h4>
                      <p className="text-sm text-muted-foreground">Complete rebranding and digital presence overhaul</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-2xl">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Website Development</h4>
                      <p className="text-sm text-muted-foreground">Modern, user-centric healthcare platform design</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-2xl">
                    <div className="w-10 h-10 rounded-lg bg-accent/30 flex items-center justify-center flex-shrink-0">
                      <Handshake className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Strategic Marketing</h4>
                      <p className="text-sm text-muted-foreground">Targeted campaigns for deeper market penetration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-up delay-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-secondary">Healthcare Partner</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                MediSure Healthcare SDN BHD
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">MediSure Healthcare SDN BHD</strong> is a leading healthcare solutions provider in Malaysia, dedicated to delivering accessible and quality healthcare services to communities across the nation. Their comprehensive offerings span medical services, healthcare management, and patient care solutions.
                </p>
                <p>
                  The collaboration between Vimico and MediSure Healthcare represents a synergistic partnership aimed at mutual expansion and market growth. Vimico brings its expertise in digital transformation, branding, and technology to help MediSure Healthcare elevate its market presence and reach a broader audience in Malaysia.
                </p>
                <p>
                  Through this partnership, Vimico is spearheading the complete rebranding of MediSure Healthcare, including the development of modern, patient-centric websites, implementation of strategic marketing initiatives, and alignment of their product portfolios. This comprehensive approach enables MediSure to penetrate deeper into the Malaysian healthcare market while establishing a stronger digital footprint.
                </p>
              </div>
              <a 
                href="https://medisurehc.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6"
              >
                <Button variant="gradient" className="gap-2 rounded-full border-2">
                  Visit MediSure Healthcare <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-vimico-navy via-vimico-navy to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Partner With Vimico
            </h2>
            <p className="text-muted text-lg mb-8">
              Join our growing network of strategic partners and unlock new opportunities for growth and innovation.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Explore Partnership Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
