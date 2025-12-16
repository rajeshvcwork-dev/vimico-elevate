import { Target, Users, Award, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroAbout from "@/assets/hero-about.jpg";

const coreServices = [
  "Agile methodology implementation and enterprise Agile transformation",
  "Jira and Salesforce consulting, implementation, and optimization",
  "Operations and delivery process optimization",
  "Customer support and service operations design",
  "Professional website development and digital presence enablement",
  "Compliance and security audits for process, platform, and data governance",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroAbout} 
            alt="About Vimico" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vimico-navy/90 via-vimico-navy/80 to-vimico-navy/70" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Agile, Technology &{" "}
              <span className="gradient-text">Delivery Transformation</span> Experts
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Vimico is a global business consulting and delivery transformation company specializing in Agile implementation, digital transformation, and operational excellence.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over two decades of experience, we help organizations improve execution, scale operations, and achieve sustainable growth across SaaS, enterprise, and technology-driven environments.
                </p>
                <p>
                  Operating across multiple geographies and three continents, Vimico has successfully built and scaled multimillion-dollar organizations by aligning Agile practices, delivery governance, technology platforms, and customer experience.
                </p>
                <p>
                  Our leadership brings deep expertise across Agile frameworks, Jira and Salesforce implementations, operations optimization, and enterprise systems.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-up delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-muted/50 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text mb-2">17+</div>
                    <div className="text-sm font-medium text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text mb-2">2+</div>
                    <div className="text-sm font-medium text-muted-foreground">Decades Experience</div>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text mb-2">3</div>
                    <div className="text-sm font-medium text-muted-foreground">Continents</div>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                    <div className="text-sm font-medium text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions to transform your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-card border border-border/50 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="text-foreground leading-relaxed">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Who We <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We work with small and mid-sized businesses as well as large enterprises, helping them overcome delivery bottlenecks, improve operational efficiency, strengthen compliance, and build scalable, future-ready organizations.
            </p>
            <p className="text-lg font-medium text-foreground">
              Vimico is committed to enabling execution excellence, operational resilience, and long-term business success.
            </p>
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
              Let's discuss how Vimico can help transform your business through technology and innovation.
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
