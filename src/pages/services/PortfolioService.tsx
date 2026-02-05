import { ArrowLeft, Check, User, Briefcase, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portfolio1 from "@/assets/services/portfolio-1.jpg";
import portfolio2 from "@/assets/services/portfolio-2.jpg";
import portfolio3 from "@/assets/services/portfolio-3.jpg";

const benefits = [
  "Personalized designs that reflect your unique brand",
  "Showcase your skills, projects, and achievements",
  "Mobile-optimized for viewing on any device",
  "Fast loading for great user experience",
  "SEO-friendly to attract potential clients",
  "Easy content management and updates",
];

const PortfolioService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portfolio Sites for Individuals | Vimico - Personal Branding Websites</title>
        <meta name="description" content="Vimico creates stunning portfolio websites for professionals, freelancers, and creatives. Showcase your work, skills, and achievements with a personalized online presence." />
        <meta name="keywords" content="portfolio website, personal website, freelancer portfolio, professional portfolio, Vimico portfolio sites, personal branding" />
        <link rel="canonical" href="https://vimico.in/services/portfolio-sites" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={portfolio1} 
            alt="Portfolio Websites" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/80 to-vimico-navy/60" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6 ml-4">
              Personal Branding
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Portfolio Sites for{" "}
              <span className="gradient-text">Individuals</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Vimico crafts visually striking, memorable portfolio websites that showcase your skills, projects, and achievements to potential clients and employers.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Create Your Portfolio
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
                Why Choose <span className="gradient-text">Vimico</span> for Your Portfolio?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In today's competitive market, a professional portfolio website is essential for standing out. Vimico understands how to present your unique story and accomplishments in a way that resonates with your target audience.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're a freelancer, creative professional, consultant, or job seeker, we create personalized portfolio sites that highlight your expertise and help you land more opportunities.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: User, title: "Personal Brand", desc: "Unique to you" },
                  { icon: Briefcase, title: "Work Showcase", desc: "Display your best" },
                  { icon: Star, title: "Stand Out", desc: "Make an impression" },
                  { icon: Eye, title: "Get Noticed", desc: "Attract opportunities" },
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
                src={portfolio2} 
                alt="Portfolio design process" 
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
                src={portfolio3} 
                alt="Portfolio website examples" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-up delay-200">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefits for <span className="gradient-text">You</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Vimico's portfolio website service helps professionals establish their personal brand and attract the right opportunities.
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
              Ready to Showcase Your Work?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let Vimico create a stunning portfolio website that helps you stand out and land more opportunities.
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

export default PortfolioService;
