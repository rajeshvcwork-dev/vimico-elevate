import { Linkedin, ExternalLink, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroMarketing from "@/assets/hero-marketing.jpg";

const Marketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroMarketing} 
            alt="Marketing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/80 to-vimico-navy/60" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              Promoting Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Connect With Us on{" "}
              <span className="gradient-text">LinkedIn</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Stay updated with our latest insights, industry trends, and company updates through our LinkedIn presence.
            </p>
            <a 
              href="https://www.linkedin.com/company/vimico-org" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                <Linkedin className="w-5 h-5" />
                Follow Us on LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* LinkedIn Posts Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest <span className="gradient-text">Updates</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Follow our journey and stay connected with our latest news and insights
            </p>
          </div>

          {/* LinkedIn Embed Placeholder */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50 animate-fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#0077B5] flex items-center justify-center">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Vimico on LinkedIn</h3>
                  <p className="text-muted-foreground">Technology Solutions Partner</p>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-2xl p-6 mb-6">
                <p className="text-muted-foreground text-center">
                  LinkedIn posts and updates will be displayed here. Visit our LinkedIn page to see our latest content.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="https://www.linkedin.com/company/vimico" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="gradient" className="gap-2 rounded-full border-2">
                    <Linkedin className="w-4 h-4" />
                    Visit Our LinkedIn Page
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Follow Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Follow <span className="gradient-text">Vimico</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center animate-fade-up">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Industry Insights</h3>
              <p className="text-sm text-muted-foreground">
                Get the latest trends and insights in technology and digital transformation
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center animate-fade-up delay-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Company Updates</h3>
              <p className="text-sm text-muted-foreground">
                Stay informed about our partnerships, projects, and team achievements
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center animate-fade-up delay-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Professional Network</h3>
              <p className="text-sm text-muted-foreground">
                Connect with our team and explore collaboration opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-vimico-navy via-vimico-navy to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Let's Connect
            </h2>
            <p className="text-muted text-lg mb-8">
              Have questions or want to discuss a potential collaboration? We'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketing;
