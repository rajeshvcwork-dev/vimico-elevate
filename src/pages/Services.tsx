import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import servicesHero from "@/assets/hero-services.jpg";

import { practiceAreas } from "@/data/practiceAreas";

const services = practiceAreas.map((p) => ({
  title: p.title,
  description: p.tagline,
  link: `/services/${p.slug}`,
}));


const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Services | Vimico - Agile Consulting, Jira & Salesforce Implementation</title>
        <meta name="description" content="Transform your business with Vimico's expert services: Agile methodology implementation, Power BI solutions, Jira & Salesforce setup, website development, ERP implementation, and compliance consulting." />
        <meta name="keywords" content="agile consulting, Jira implementation, Salesforce setup, Power BI, website development, compliance audit, digital transformation services, enterprise consulting, ERP implementation" />
        <link rel="canonical" href="https://vimico.in/services" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={servicesHero} 
            alt="Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/80 to-vimico-navy/60" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              From Project Chaos to{" "}
              <span className="gradient-text">Predictable Success</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Empowering Tech Teams to Deliver Better, Faster, and Smarter, we deliver tailored solutions that drive business growth and digital excellence — the Vimico Way
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We <span className="gradient-text">Deliver</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive services designed to transform your business operations and digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={service.title}
                className="service-check group animate-fade-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}   
          </div>
        </div>
      </section>

      {/* Delivered Projects */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recently <span className="gradient-text">Delivered</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real solutions we've built for real businesses
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-fade-up">
            <Link
              to="/services/website"
              className="group block bg-card rounded-2xl p-8 shadow-card border border-border/50 card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Check className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Website Development</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    GripNovaco Website
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A modern, responsive website delivered for GripNovaco, designed to showcase their brand and engage their audience with a polished digital presence.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-vimico-navy via-vimico-navy to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let's discuss how our expertise can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/partnership">
                <Button variant="hero" size="xl" className="gap-2 rounded-full border-2">
                  View Our Partnerships
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
