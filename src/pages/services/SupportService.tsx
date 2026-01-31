import { ArrowLeft, Check, Headphones, Clock, BarChart, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import support1 from "@/assets/services/support-1.jpg";
import support2 from "@/assets/services/support-2.jpg";
import support3 from "@/assets/services/support-3.jpg";

const benefits = [
  "Custom ticketing workflows tailored to your needs",
  "SLA management and escalation rules",
  "Automated issue routing and prioritization",
  "Customer portal for self-service support",
  "Reporting dashboards for support metrics",
  "Integration with communication tools",
];

const SupportService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Support Infrastructure Setup | Vimico - Jira Service Desk for MSMEs</title>
        <meta name="description" content="Vimico establishes robust support systems using Jira with custom workflows and SLA management. Design ticketing systems that track, prioritize, and resolve issues efficiently." />
        <meta name="keywords" content="Jira service desk, support infrastructure, ticketing system, SLA management, MSME support, Vimico support setup, help desk configuration" />
        <link rel="canonical" href="https://vimico.in/services/support-setup" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={support1} 
            alt="Support Infrastructure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/80 to-vimico-navy/60" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6 ml-4">
              Customer Success
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Support Infrastructure{" "}
              <span className="gradient-text">Setup</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Vimico establishes robust support systems using Jira with custom workflows and SLA management, helping your MSME deliver exceptional customer service.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Build Your Support System
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Vimico Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="gradient-text">Vimico</span> for Support Setup?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Great customer support is a competitive advantage. Vimico designs and implements support infrastructure that helps MSMEs track, prioritize, and resolve customer issues efficiently while maintaining service level commitments.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Using Jira Service Management and best practices from enterprise support operations, we create systems that scale with your business and keep customers happy.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Headphones, title: "Help Desk Setup", desc: "Complete configuration" },
                  { icon: Clock, title: "SLA Management", desc: "Meet commitments" },
                  { icon: BarChart, title: "Support Analytics", desc: "Track performance" },
                  { icon: Settings, title: "Custom Workflows", desc: "Match your process" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                    <item.icon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-up delay-200">
              <img 
                src={support2} 
                alt="Support ticketing system" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative animate-fade-up">
              <img 
                src={support3} 
                alt="Customer support dashboard" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-up delay-200">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefits for Your <span className="gradient-text">MSME</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Vimico's support infrastructure setup helps MSMEs deliver enterprise-level customer service with systems designed for efficiency and scalability.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
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
              Ready to Transform Your Support?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let Vimico build a support infrastructure that helps your MSME deliver exceptional customer experiences.
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

export default SupportService;
