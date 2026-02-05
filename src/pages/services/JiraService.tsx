import { ArrowLeft, Check, Settings, Workflow, Users, Plug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jira1 from "@/assets/services/jira-1.jpg";
import jira2 from "@/assets/services/jira-2.jpg";
import jira3 from "@/assets/services/jira-3.jpg";

const benefits = [
  "End-to-end Jira configuration and customization",
  "Salesforce setup, integration, and optimization",
  "Custom workflow design for your processes",
  "User training and adoption support",
  "Third-party tool integrations",
  "Ongoing administration and maintenance",
];

const JiraService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Jira & Salesforce Setup | Vimico - Expert Configuration for MSMEs</title>
        <meta name="description" content="Vimico provides expert Jira and Salesforce setup, configuration, and integration services for MSME companies. Optimize your workflows and CRM from day one." />
        <meta name="keywords" content="Jira setup, Salesforce configuration, CRM implementation, workflow automation, MSME Jira, Vimico Jira services, Salesforce consulting" />
        <link rel="canonical" href="https://vimico.in/services/jira-salesforce" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={jira1} 
            alt="Jira and Salesforce Setup" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/80 to-vimico-navy/60" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6 ml-4">
              Enterprise Tools
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Jira & Salesforce{" "}
              <span className="gradient-text">Setup</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Vimico optimizes your workflow with expertly configured Jira and Salesforce solutions, ensuring your MSME teams work efficiently from day one.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Optimize Your Tools
              </Button>
            </Link>
          </div>
        </div>
      </section>

       {/* Back to Services Button */}
       <div className="container mx-auto px-4 lg:px-8 py-6">
         <div className="flex justify-end">
           <Link to="/services">
             <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
               <ArrowLeft className="w-4 h-4" />
               Back to Services
             </Button>
           </Link>
         </div>
       </div>
 
      {/* Why Vimico Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="gradient-text">Vimico</span> for Jira & Salesforce?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Jira and Salesforce are powerful tools, but their value depends entirely on how well they're configured for your business. Vimico brings extensive experience in setting up these platforms to match your unique processes and workflows.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We handle end-to-end setup, customization, and integration, ensuring your MSME gets maximum value from these enterprise tools without the enterprise-level complexity.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Settings, title: "Expert Setup", desc: "Configured for you" },
                  { icon: Workflow, title: "Custom Workflows", desc: "Match your processes" },
                  { icon: Users, title: "Team Training", desc: "Ensure adoption" },
                  { icon: Plug, title: "Integrations", desc: "Connect your tools" },
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
                src={jira2} 
                alt="Jira configuration" 
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
                src={jira3} 
                alt="Salesforce dashboard" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-up delay-200">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefits for Your <span className="gradient-text">MSME</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Vimico's Jira & Salesforce services help MSMEs leverage enterprise-grade tools with configurations that actually work for smaller teams.
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
              Ready to Optimize Your Tools?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let Vimico configure Jira and Salesforce to perfectly match your MSME's workflows and processes.
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

export default JiraService;
