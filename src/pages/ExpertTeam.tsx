import { Users, Award, Globe, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/expert-team-hero.jpg";

const teamStats = [
  { value: "25+", label: "Years Combined Experience" },
  { value: "50+", label: "Successful Projects" },
  { value: "3", label: "Continents Served" },
  { value: "100%", label: "Client Satisfaction" },
];

const expertise = [
  {
    title: "Agile & Scrum Mastery",
    description: "Certified Scrum Masters and Agile coaches with hands-on experience transforming enterprise teams across industries.",
  },
  {
    title: "Technology Leadership",
    description: "Deep expertise in Jira, Salesforce, Power BI, and enterprise platforms driving digital transformation initiatives.",
  },
  {
    title: "Delivery Excellence",
    description: "Proven track record in project governance, sprint planning, and delivery optimization for complex technology projects.",
  },
  {
    title: "Business Analysis",
    description: "Strong analytical skills translating business requirements into actionable technical solutions and measurable outcomes.",
  },
  {
    title: "Compliance & Security",
    description: "Expertise in GRC, privacy audits, financial controls, and regulatory compliance across banking and insurance sectors.",
  },
  {
    title: "Customer Success Focus",
    description: "Dedicated professionals ensuring client satisfaction through proactive communication and quality delivery.",
  },
];

const ExpertTeam = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Expert Team | Vimico - Seasoned Agile & Technology Professionals</title>
        <meta name="description" content="Meet Vimico's expert team of seasoned Agile consultants, technology leaders, and digital transformation specialists with 25+ years combined experience across 3 continents." />
        <meta name="keywords" content="Vimico team, Agile experts, technology consultants, Scrum masters, digital transformation specialists, enterprise consulting team, India" />
        <link rel="canonical" href="https://vimico.in/expert-team" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Vimico expert team of professionals" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vimico-navy/90 via-vimico-navy/80 to-vimico-navy/70" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32 flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              Our People
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Meet the <span className="gradient-text">Vimico Experts</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Seasoned professionals with deep expertise across Agile methodologies, enterprise technology, and digital transformation delivering excellence worldwide.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Work With Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vimico Team Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="gradient-text">Vimico Experts</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our team brings unmatched expertise in Agile transformation, technology implementation, and business consulting to every engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={item.title}
                className="group bg-card rounded-2xl p-8 shadow-card border border-border/50 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Users, title: "Collaboration", desc: "Working together with clients as partners" },
                { icon: Award, title: "Excellence", desc: "Delivering quality in every engagement" },
                { icon: Globe, title: "Global Mindset", desc: "Thinking globally, acting locally" },
                { icon: Target, title: "Results Focus", desc: "Driving measurable business outcomes" },
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-vimico-navy via-vimico-navy to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Partner with Vimico Experts?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let our experienced team help you achieve your digital transformation goals and drive business excellence.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Get in Touch Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpertTeam;
