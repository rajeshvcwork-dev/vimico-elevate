import { Target, Users, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroAbout from "@/assets/hero-about.jpg";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to delivering technology solutions that create real, measurable impact for our clients and partners.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Every solution is tailored to meet the unique needs and challenges of our clients, ensuring their success is our success.",
  },
  {
    icon: Award,
    title: "Excellence First",
    description: "We maintain the highest standards of quality in everything we do, from consulting to implementation.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "With partnerships spanning India, Malaysia, Thailand, and Africa, we bring diverse insights to every project.",
  },
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
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/80 to-vimico-navy/60" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Empowering Businesses Through{" "}
              <span className="gradient-text">Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">
              Vimico is a technology solutions partner dedicated to transforming ideas into digital reality, helping businesses thrive in the modern digital landscape.
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
                  Founded with a vision to bridge the gap between technology and business success, Vimico has grown into a trusted partner for organizations seeking digital transformation.
                </p>
                <p>
                  With over two decades of combined experience in enterprise solutions, agile methodologies, and digital innovation, our team brings deep expertise across mobile development, enterprise performance management, business intelligence, and web technologies.
                </p>
                <p>
                  We believe in building lasting partnerships, not just delivering projects. Our approach combines strategic thinking with technical excellence to create solutions that drive real business value.
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
                    <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                    <div className="text-sm font-medium text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text mb-2">4</div>
                    <div className="text-sm font-medium text-muted-foreground">Global Regions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Vimico
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group bg-card rounded-2xl p-6 shadow-card border border-border/50 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
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
