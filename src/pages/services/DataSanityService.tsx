import { ArrowLeft, Check, Shield, Search, RefreshCw, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import datasanity1 from "@/assets/services/datasanity-1.jpg";
import datasanity2 from "@/assets/services/datasanity-2.jpg";
import datasanity3 from "@/assets/services/datasanity-3.jpg";

const benefits = [
  "Detect and fix data anomalies before they impact decisions",
  "Automated data quality monitoring and alerts",
  "Consistent, reliable data across all systems",
  "Reduced manual data cleanup efforts",
  "Compliance-ready data management",
  "Improved reporting accuracy and trust",
];

const DataSanityService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Data Sanity Services | Vimico - Data Quality & Anomaly Detection for MSMEs</title>
        <meta name="description" content="Vimico's Data Sanity service ensures your business data is clean, consistent, and business-ready. Anomaly detection, data cleansing, and continuous monitoring for MSMEs." />
        <meta name="keywords" content="data quality, data sanity, anomaly detection, data cleansing, MSME data management, Vimico data services, data consistency" />
        <link rel="canonical" href="https://vimico.in/services/data-sanity" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={datasanity1} 
            alt="Data Sanity and Quality" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/80 to-vimico-navy/60" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6 ml-4">
              Data Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Data{" "}
              <span className="gradient-text">Sanity</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Vimico's specialized Data Sanity service detects anomalies, fixes inconsistencies, and keeps your data continuously business-ready for confident decision making.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Clean Your Data Today
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
                Why Choose <span className="gradient-text">Vimico</span> for Data Sanity?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dirty data costs businesses millions in poor decisions, wasted resources, and missed opportunities. Vimico's Data Sanity service provides a comprehensive approach to ensuring your data is always accurate, consistent, and trustworthy.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We combine automated tools with expert analysis to identify data quality issues, implement fixes, and establish ongoing monitoring that keeps your MSME's data ecosystem healthy and reliable.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Search, title: "Anomaly Detection", desc: "Spot issues automatically" },
                  { icon: RefreshCw, title: "Data Cleansing", desc: "Fix inconsistencies fast" },
                  { icon: Shield, title: "Quality Monitoring", desc: "Continuous oversight" },
                  { icon: AlertTriangle, title: "Proactive Alerts", desc: "Catch problems early" },
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
                src={datasanity2} 
                alt="Data quality analysis" 
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
                src={datasanity3} 
                alt="Clean data outcomes" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-up delay-200">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefits for Your <span className="gradient-text">MSME</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Vimico's Data Sanity service ensures your business decisions are built on a foundation of accurate, reliable data that you can trust.
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
              Ready for Clean, Reliable Data?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let Vimico transform your data quality with our comprehensive Data Sanity service tailored for MSMEs.
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

export default DataSanityService;
