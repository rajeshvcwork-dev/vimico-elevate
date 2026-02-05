import { ArrowLeft, Check, BarChart3, PieChart, TrendingUp, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import powerbi1 from "@/assets/services/powerbi-1.jpg";
import powerbi2 from "@/assets/services/powerbi-2.jpg";
import powerbi3 from "@/assets/services/powerbi-3.jpg";

const benefits = [
  "Transform raw data into actionable business insights",
  "Real-time dashboards for instant decision making",
  "Custom reports tailored to your business needs",
  "Seamless integration with existing data sources",
  "Mobile-friendly analytics on any device",
  "Self-service BI empowering your teams",
];

const PowerBIService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Power BI Projects | Vimico - Business Intelligence & Data Analytics for MSMEs</title>
        <meta name="description" content="Vimico delivers expert Power BI solutions for MSME companies. Custom dashboards, data visualization, and analytics that drive data-driven decisions." />
        <meta name="keywords" content="Power BI consulting, business intelligence, data analytics, dashboard development, MSME analytics, Vimico Power BI, data visualization" />
        <link rel="canonical" href="https://vimico.in/services/powerbi" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={powerbi1} 
            alt="Power BI Analytics Dashboard" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/80 to-vimico-navy/60" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6 ml-4">
              Data Intelligence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Power BI{" "}
              <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Vimico transforms your complex data into clear, actionable insights through expert Power BI implementation, helping MSMEs make data-driven decisions with confidence.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Unlock Your Data Potential
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
                Why Choose <span className="gradient-text">Vimico</span> for Power BI?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Vimico brings deep expertise in Microsoft Power BI, combined with a thorough understanding of MSME business challenges. We don't just build dashboards – we create comprehensive analytics ecosystems that drive real business value.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team has successfully delivered Power BI solutions across retail, manufacturing, healthcare, and services sectors, enabling businesses to visualize trends, identify opportunities, and optimize operations.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: BarChart3, title: "Custom Dashboards", desc: "Tailored to your KPIs" },
                  { icon: Database, title: "Data Integration", desc: "Connect all your sources" },
                  { icon: PieChart, title: "Visual Analytics", desc: "Intuitive data stories" },
                  { icon: TrendingUp, title: "Predictive Insights", desc: "Forecast with confidence" },
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
                src={powerbi2} 
                alt="Power BI dashboard analysis" 
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
                src={powerbi3} 
                alt="Business intelligence results" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-up delay-200">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefits for Your <span className="gradient-text">Business</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Vimico's Power BI solutions deliver measurable business outcomes that help MSMEs compete with larger enterprises through data-driven strategies.
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
              Ready to Visualize Your Success?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let Vimico unlock the power of your data with expert Power BI implementation tailored for your MSME.
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

export default PowerBIService;
