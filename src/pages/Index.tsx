import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";

const highlights = [
  "Agile Transformation",
  "Enterprise Consulting",
  "Digital Solutions",
  "Strategic Partnerships",
  "Technology Excellence",
];

const stats = [
  { value: "17+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "20+", label: "Team Experts" },
  { value: "2+", label: "Decades Experience" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Vimico | Digital Transformation & Agile Consulting Experts</title>
        <meta name="description" content="Vimico transforms ideas into digital reality. Expert Agile consulting, Jira & Salesforce implementation, Power BI solutions, and enterprise digital transformation services worldwide." />
        <meta name="keywords" content="digital transformation, agile consulting, Jira implementation, Salesforce consulting, Power BI, enterprise solutions, business consulting, technology partners, IT consulting India" />
        <link rel="canonical" href="https://vimico.in" />
        <meta property="og:title" content="Vimico | Digital Transformation & Agile Consulting Experts" />
        <meta property="og:description" content="Transform your business with Vimico's expert Agile consulting, digital transformation, and enterprise technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vimico.in" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Digital transformation visualization with circuit patterns and organic elements" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vimico-navy/90 via-vimico-navy/80 to-vimico-navy/70" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-foreground">Technology Solutions Partner</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up">
              Transforming Ideas into <span className="gradient-text">Digital Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto animate-fade-up">
              Vimico partners with ambitious businesses to unlock their full potential through strategic consulting, innovative solutions, and transformative growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up delay-300">
              <Link to="/services">
                <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                  Explore Our Services <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="gap-2 rounded-full border-2">   
                  Schedule Consultation <ArrowRight className="w-5 h-5" />
                </Button>  
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-2 animate-fade-up delay-400">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 border border-border/30 backdrop-blur-sm"
                >
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="gradient-text">Vimico</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine technical expertise with strategic vision to deliver solutions that drive real business value.
            </p>
          </header>

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
              <article
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-vimico-navy via-vimico-navy to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Digital Transformation Journey?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let's discuss how Vimico can help you achieve your technology goals and drive business growth.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
