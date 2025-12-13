import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import servicesHero from "@/assets/services-hero.jpg";

const services = [
  {
    title: "Agile Methodology Implementation",
    description: "Accelerate your project delivery with proven Agile practices. We guide small to mid-level companies through Agile transformation, implementing Scrum or Kanban frameworks tailored to your team's needs.",
  },
  {
    title: "Power BI Projects",
    description: "Turn your data into actionable insights with Microsoft Power BI. Our experts design custom dashboards and reports that visualize complex data, enabling data-driven decision-making across your organization.",
  },
  {
    title: "Data Sanity",
    description: "A specialized service that detects anomalies, fixes inconsistencies, and keeps your data continuously business-ready.",
  },
  {
    title: "Compliance & Security",
    description: "Expertise in Compliance, Business & Financial Analysis and Digital Transformation across various sectors like Banking, Insurance, Product Marketing, Cyber/Information Security, GRC, Privacy & Financial Audits and controls.",
  },
 
  {
    title: "Website Development",
    description: "Create stunning, high-performance websites that captivate your audience. From corporate portals to e-commerce platforms, we build responsive, SEO-optimized websites that represent your brand excellence.",
  },
  {
    title: "Portfolio Sites for Individuals",
    description: "Showcase your professional journey with a personalized portfolio website. We craft visually striking, memorable sites that highlight your skills, projects, and achievements to potential clients and employers.",
  },
  {
    title: "Jira & Salesforce Setup",
    description: "Optimize your workflow with expertly configured Jira and Salesforce solutions. We handle end-to-end setup, customization, and integration to ensure your teams work efficiently from day one.",
  },
  {
    title: "Support Infrastructure Setup",
    description: "Establish robust support systems using Jira with custom workflows and SLA management. We design ticketing systems that track, prioritize, and resolve issues while maintaining service level commitments.",
  },
  ];


const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={servicesHero} 
            alt="Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/80 to-vimico-navy/60" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              From Project Chaos to{" "}
              <span className="gradient-text">Predictable Success</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">
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
              <div
                key={service.title}
                className="service-check group animate-fade-up"
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
              <Link to="/portfolio">
                <Button variant="hero" size="xl" className="gap-2 rounded-full border-2">
                  View Our Work
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
