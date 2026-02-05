import { ArrowLeft, Check, Shield, Lock, FileCheck, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import compliance1 from "@/assets/services/compliance-1.jpg";
import compliance2 from "@/assets/services/compliance-2.jpg";
import compliance3 from "@/assets/services/compliance-3.jpg";

const benefits = [
  "Comprehensive compliance gap assessments",
  "Risk identification and mitigation strategies",
  "Regulatory framework implementation (GDPR, HIPAA, PCI-DSS)",
  "Internal audit and control development",
  "Security policy creation and enforcement",
  "Continuous compliance monitoring and reporting",
];

const ComplianceService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Compliance & Security | Vimico - GRC, Audit & Cybersecurity for MSMEs</title>
        <meta name="description" content="Vimico provides comprehensive compliance, governance, and security consulting for MSMEs. Expert guidance on GDPR, HIPAA, PCI-DSS, and cybersecurity best practices." />
        <meta name="keywords" content="compliance consulting, security audit, GRC, GDPR compliance, cybersecurity, MSME compliance, Vimico security services, risk management" />
        <link rel="canonical" href="https://vimico.in/services/compliance" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={compliance1} 
            alt="Compliance and Security" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/80 to-vimico-navy/60" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6 ml-4">
              GRC Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Compliance &{" "}
              <span className="gradient-text">Security</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Vimico brings expertise in Compliance, Business Analysis, and Digital Transformation across Banking, Insurance, Cybersecurity, GRC, Privacy, and Financial Audits.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Secure Your Business
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
                Why Choose <span className="gradient-text">Vimico</span> for Compliance?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In today's regulatory landscape, compliance isn't optional – it's essential for survival. Vimico has deep expertise across multiple regulatory frameworks and industry standards, helping MSMEs navigate complex compliance requirements with confidence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team includes certified professionals with experience in Banking, Insurance, Product Marketing, Cyber Security, GRC, Privacy & Financial Audits, ensuring comprehensive coverage of your compliance needs.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: "Security Audits", desc: "Comprehensive assessments" },
                  { icon: Lock, title: "Data Protection", desc: "GDPR, DPDPA compliance" },
                  { icon: FileCheck, title: "Policy Development", desc: "Custom frameworks" },
                  { icon: Scale, title: "Risk Management", desc: "Identify and mitigate" },
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
                src={compliance2} 
                alt="Compliance audit process" 
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
                src={compliance3} 
                alt="Security compliance results" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-up delay-200">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefits for Your <span className="gradient-text">MSME</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Vimico's Compliance & Security services protect your business from regulatory penalties while building trust with customers and partners.
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
              Ready to Strengthen Your Compliance?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let Vimico guide your MSME through compliance requirements with expert consulting tailored to your industry.
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

export default ComplianceService;
