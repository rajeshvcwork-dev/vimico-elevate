import { Store, Globe, Shield, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroResellers from "@/assets/hero-resellers.jpg";

const resellerProducts = [
  {
    name: "Domain Services",
    description: "Register and manage domain names through Vimico. We offer competitive pricing on popular domain extensions with full DNS management and domain privacy protection.",
    features: [
      "Wide range of domain extensions (.com, .in, .co, .io, etc.)",
      "Easy domain management dashboard",
      "Domain privacy protection",
      "DNS management included",
    ],
    link: "", // Placeholder for reseller link
    icon: Globe,
    gradient: "from-primary to-secondary",
  },
  {
    name: "FlexiSpy",
    description: "FlexiSpy is a powerful monitoring solution for parents and employers. Track device activity, monitor communications, and ensure digital safety with this comprehensive tool.",
    features: [
      "Call and message monitoring",
      "GPS location tracking",
      "Social media monitoring",
      "Remote camera and microphone access",
    ],
    link: "", // Placeholder for reseller link
    icon: Shield,
    gradient: "from-secondary to-accent",
  },
];

const Resellers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Reseller Products | Vimico - Domain Services & FlexiSpy</title>
        <meta name="description" content="Vimico is an authorized reseller for domain registration services and FlexiSpy monitoring solutions. Get competitive pricing on domains and premium security tools." />
        <meta name="keywords" content="domain reseller, FlexiSpy reseller, domain registration India, monitoring software, DNS management, domain privacy" />
        <link rel="canonical" href="https://vimico.in/resellers" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroResellers} 
            alt="Resellers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vimico-navy/90 via-vimico-navy/80 to-vimico-navy/70" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              Authorized Reseller
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Partner <span className="gradient-text">Products</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Vimico is an authorized reseller for premium products and services. Get access to trusted solutions through our platform.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {resellerProducts.map((product, index) => (
              <div
                key={product.name}
                className="group relative bg-card rounded-3xl p-8 lg:p-12 shadow-card border border-border/50 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                  <div>
                    <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} items-center justify-center mb-6`}>
                      <product.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {product.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-2xl p-6">
                    <h4 className="font-semibold text-foreground mb-4">Features</h4>
                    <ul className="space-y-3">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${product.gradient} mt-2 flex-shrink-0`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap gap-4">
                  {product.link ? (
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="gradient" className="gap-2 rounded-full border-2">
                        Purchase Now
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  ) : (
                    <Button variant="gradient" disabled className="opacity-70 gap-2 rounded-full border-2">
                      Coming Soon
                    </Button>
                  )}
                  <Link to="/contact">
                    <Button variant="outline" className="gap-2 rounded-full border-2">
                      Contact for Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add More Products CTA */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-card border border-border/50 text-center animate-fade-up">
            <Store className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              More Products Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We're continuously expanding our reseller portfolio to bring you more trusted products and services. Stay tuned for new additions.
            </p>
            <Link to="/contact">
              <Button variant="gradient" className="gap-2 rounded-full border-2">
                Request a Product
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-vimico-navy via-vimico-navy to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Need Help Choosing?
            </h2>
            <p className="text-muted text-lg mb-8">
              Our team can help you select the right products for your needs. Contact us for personalized recommendations.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resellers;
