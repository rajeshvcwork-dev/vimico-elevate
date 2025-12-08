import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const highlights = [
  "Mobile & Web Development",
  "Enterprise Solutions",
  "Digital Transformation",
  "Strategic Consulting",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Technology Solutions Partner</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-up delay-100">
              Transforming Ideas into{" "}
              <span className="gradient-text">Digital Excellence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
              Vimico delivers premium technology solutions that empower businesses to thrive in the digital age. From mobile innovation to enterprise transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up delay-300">
              <Link to="/services">
                <Button variant="gradient" size="xl" className="gap-2">
                  Explore Our Services <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="xl">
                  View Portfolio
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 animate-fade-up delay-400">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 shadow-sm"
                >
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="gradient-text">Vimico</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine technical expertise with strategic vision to deliver solutions that drive real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Seasoned professionals with deep expertise across mobile, enterprise, and web technologies.",
              },
              {
                title: "Global Partnerships",
                description: "Strategic alliances that extend our reach and capabilities across emerging markets.",
              },
              {
                title: "Innovation First",
                description: "Building cutting-edge products that solve real problems and create lasting impact.",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-card rounded-2xl p-8 shadow-card border border-border/50 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-primary-foreground">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-vimico-navy via-vimico-navy to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let's discuss how Vimico can help you achieve your technology goals and drive business growth.
            </p>
            <Button variant="gradient" size="xl">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
