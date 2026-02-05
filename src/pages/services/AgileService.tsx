import { ArrowLeft, Check, Users, Zap, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import agile1 from "@/assets/services/agile-1.jpg";
import agile2 from "@/assets/services/agile-2.jpg";
import agile3 from "@/assets/services/agile-3.jpg";

const benefits = [
  "Faster time-to-market with iterative delivery",
  "Improved team collaboration and communication",
  "Better adaptability to changing requirements",
  "Increased customer satisfaction through continuous feedback",
  "Reduced project risks with early issue detection",
  "Enhanced productivity and team morale",
];

const AgileService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Agile Methodology Implementation | Vimico - Expert Agile Consulting for MSMEs</title>
        <meta name="description" content="Vimico helps MSME companies implement Agile methodologies including Scrum and Kanban. Transform your project delivery with proven Agile practices tailored to your team." />
        <meta name="keywords" content="Agile implementation, Scrum consulting, Kanban methodology, Agile transformation, MSME Agile, project management, Vimico Agile services" />
        <link rel="canonical" href="https://vimico.in/services/agile" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={agile1} 
            alt="Agile Methodology Implementation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/80 to-vimico-navy/60" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6 ml-4">
              Methodology Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Agile Methodology{" "}
              <span className="gradient-text">Implementation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Vimico empowers MSME companies to embrace Agile practices, transforming how teams collaborate, deliver, and succeed in today's fast-paced business environment.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Start Your Agile Journey
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
                Why Choose <span className="gradient-text">Vimico</span> for Agile?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over two decades of experience in enterprise transformation, Vimico has mastered the art of implementing Agile methodologies that truly work. We don't just teach Agile – we transform how your organization thinks, collaborates, and delivers value.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our proven approach has helped countless MSME companies transition from traditional waterfall methods to dynamic Agile frameworks, resulting in faster delivery cycles, improved product quality, and happier teams.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Users, title: "Team Coaching", desc: "Hands-on training for your teams" },
                  { icon: Zap, title: "Quick Wins", desc: "See results within weeks" },
                  { icon: Target, title: "Tailored Approach", desc: "Customized to your needs" },
                  { icon: Clock, title: "Ongoing Support", desc: "Continuous improvement guidance" },
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
                src={agile2} 
                alt="Agile team collaboration" 
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
                src={agile3} 
                alt="Agile transformation results" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-up delay-200">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefits for Your <span className="gradient-text">MSME</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                When Vimico implements Agile in your organization, you'll experience transformative benefits that directly impact your bottom line and team satisfaction.
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
              Ready to Go Agile?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let Vimico guide your MSME through a successful Agile transformation. Contact us to discuss your unique needs.
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

export default AgileService;
