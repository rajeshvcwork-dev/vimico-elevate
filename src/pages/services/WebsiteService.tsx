import { ArrowLeft, Check, Globe, Smartphone, Zap, Search, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import website1 from "@/assets/services/website-1.jpg";
import website2 from "@/assets/services/website-2.jpg";
import website3 from "@/assets/services/website-3.jpg";
import gripnovacoLogoAsset from "@/assets/gripnovacologo.png.asset.json";

const benefits = [
  "Stunning, modern designs that captivate visitors",
  "Mobile-first responsive development",
  "SEO-optimized for better search rankings",
  "Fast loading speeds for optimal user experience",
  "E-commerce integration capabilities",
  "Ongoing maintenance and support options",
];

const WebsiteService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Website Development | Vimico - Professional Web Design for MSMEs</title>
        <meta name="description" content="Vimico creates stunning, high-performance websites for MSME businesses. From corporate portals to e-commerce platforms, we build responsive, SEO-optimized sites that drive results." />
        <meta name="keywords" content="website development, web design, MSME websites, e-commerce development, responsive design, Vimico web services, SEO websites" />
        <link rel="canonical" href="https://vimico.in/services/website" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={website1} 
            alt="Website Development" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/80 to-vimico-navy/60" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6 ml-4">
              Digital Presence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Website{" "}
              <span className="gradient-text">Development</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Vimico creates stunning, high-performance websites that captivate your audience and represent your MSME brand with excellence across every device.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Build Your Website
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
                Why Choose <span className="gradient-text">Vimico</span> for Web Development?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your website is often the first impression customers have of your business. Vimico understands the unique needs of MSMEs and creates websites that not only look stunning but also drive conversions and business growth.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From corporate portals to e-commerce platforms, our team delivers responsive, SEO-optimized websites that represent your brand excellence and help you compete in the digital marketplace.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Globe, title: "Modern Design", desc: "Stunning visual appeal" },
                  { icon: Smartphone, title: "Fully Responsive", desc: "Perfect on all devices" },
                  { icon: Zap, title: "Fast Performance", desc: "Lightning-quick loading" },
                  { icon: Search, title: "SEO Optimized", desc: "Rank higher in search" },
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
                src={website2} 
                alt="Web development process" 
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
                src={website3} 
                alt="Website results showcase" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-up delay-200">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefits for Your <span className="gradient-text">MSME</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Vimico's website development service helps MSMEs establish a powerful online presence that attracts customers and drives business growth.
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

      {/* GripNovaco Success Story / Testimonial */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-4">
                Success Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Delivered with <span className="gradient-text">Utmost Satisfaction</span>
              </h2>
            </div>

            <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50 card-hover overflow-hidden">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <a
                  href="https://gripnovaco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GripNovaco website"
                  className="mb-6 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
                >
                  <img
                    src={gripnovacoLogoAsset.url}
                    alt="GripNovaco logo"
                    width={280}
                    height={140}
                    loading="lazy"
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </a>

                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 max-w-2xl">
                  "Vimico delivered our website with exceptional professionalism. The team understood our vision, executed flawlessly, and launched a modern, responsive site that truly represents our brand. We are delighted with the results and the seamless experience."
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold">
                    GN
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">GripNovaco Team</div>
                    <div className="text-sm text-muted-foreground">Happy Client</div>
                  </div>
                </div>

                <a
                  href="https://gripnovaco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:underline"
                >
                  Visit GripNovaco.com
                  <Globe className="w-4 h-4" />
                </a>
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
              Ready to Launch Your New Website?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let Vimico create a stunning website that helps your MSME stand out and succeed online.
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

export default WebsiteService;
