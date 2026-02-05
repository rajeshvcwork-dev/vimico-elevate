import { ArrowLeft, Check, Building, ShoppingCart, Factory, Layers } from "lucide-react";
 import { Code, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import erp1 from "@/assets/services/erp-1.jpg";
import erp2 from "@/assets/services/erp-2.jpg";
import erp3 from "@/assets/services/erp-3.jpg";

const benefits = [
   "End-to-end ERPNext and iDempiere implementation",
  "Retail-specific modules for inventory and POS",
  "Manufacturing and supply chain optimization",
  "Financial management and reporting integration",
  "Custom workflows tailored to your business",
   "Consulting services on a contractual basis",
  "Training and ongoing support for your team",
];
 
 const platforms = [
   {
     name: "ERPNext",
     description: "Open-source ERP with comprehensive modules for manufacturing, retail, healthcare, and more.",
     features: ["Inventory Management", "Accounting", "HR & Payroll", "CRM", "Manufacturing"],
   },
   {
     name: "iDempiere",
     description: "Enterprise-grade open-source ERP and CRM solution with powerful customization capabilities.",
     features: ["Financial Management", "Supply Chain", "Distribution", "Point of Sale", "Business Intelligence"],
   },
 ];

const ERPService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>ERP Implementation | Vimico - Enterprise Resource Planning for Retail & Business</title>
        <meta name="description" content="Vimico delivers expert ERP implementation for retail and enterprises. Streamline operations, inventory, finance, and supply chain with tailored ERP solutions for MSMEs." />
        <meta name="keywords" content="ERP implementation, enterprise resource planning, retail ERP, business ERP, MSME ERP solutions, Vimico ERP services, inventory management" />
        <link rel="canonical" href="https://vimico.in/services/erp" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={erp1} 
            alt="ERP Implementation" 
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
              Enterprise Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              ERP{" "}
              <span className="gradient-text">Implementation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
               Vimico brings expertise in implementing open-source ERP systems like ERPNext and iDempiere for retail and enterprises, helping businesses streamline operations, manage inventory, and optimize their entire value chain.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Transform Your Operations
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
                Why Choose <span className="gradient-text">Vimico</span> for ERP?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                 ERP implementation is one of the most impactful investments a business can make – but only when done right. Vimico has deep expertise in implementing open-source ERP solutions like ERPNext and iDempiere that actually deliver on their promise of unified operations and improved efficiency.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                 Whether you're a retail business needing inventory and POS integration, or a manufacturing company seeking supply chain optimization, Vimico tailors ERP implementations to your specific industry needs. We also offer consulting services on a contractual basis for companies seeking expert guidance.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: ShoppingCart, title: "Retail ERP", desc: "Inventory & POS ready" },
                  { icon: Factory, title: "Manufacturing", desc: "Supply chain optimized" },
                   { icon: Code, title: "Open Source", desc: "ERPNext & iDempiere" },
                   { icon: Handshake, title: "Consulting", desc: "Contractual services" },
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
                src={erp2} 
                alt="ERP system implementation" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

       {/* ERP Platforms Section */}
       <section className="py-20 lg:py-28 bg-muted/30">
         <div className="container mx-auto px-4 lg:px-8">
           <div className="text-center mb-12 animate-fade-up">
             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
               Open Source <span className="gradient-text">ERP Platforms</span>
             </h2>
             <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
               Vimico specializes in two industry-leading open-source ERP platforms, giving your business the flexibility and cost-effectiveness of open-source with enterprise-grade capabilities.
             </p>
           </div>
           <div className="grid md:grid-cols-2 gap-8">
             {platforms.map((platform) => (
               <div key={platform.name} className="bg-background rounded-2xl p-8 shadow-lg animate-fade-up">
                 <h3 className="text-2xl font-bold text-foreground mb-4">{platform.name}</h3>
                 <p className="text-muted-foreground mb-6">{platform.description}</p>
                 <div className="space-y-3">
                   {platform.features.map((feature, index) => (
                     <div key={index} className="flex items-center gap-3">
                       <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                         <Check className="w-3 h-3 text-primary-foreground" />
                       </div>
                       <span className="text-foreground text-sm">{feature}</span>
                     </div>
                   ))}
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>
 
      {/* Benefits Section */}
       <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative animate-fade-up">
              <img 
                src={erp3} 
                alt="ERP integration modules" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-up delay-200">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefits for Your <span className="gradient-text">Business</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                 Vimico's ERP implementation service helps businesses of all sizes unify their operations with open-source solutions. We also offer consulting services on a contractual basis for companies that need expert guidance without full implementation.
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
              Ready to Unify Your Operations?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let Vimico implement an ERP solution that transforms how your business operates and grows.
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

export default ERPService;
