import { Lightbulb, Zap, Rocket, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/innovation-hero.jpg";

const innovationAreas = [
  {
    title: "Agile Innovation",
    description: "Pioneering adaptive methodologies that accelerate product development cycles and enhance team collaboration for modern enterprises.",
  },
  {
    title: "Digital Transformation",
    description: "Leveraging emerging technologies to reimagine business processes, customer experiences, and operational efficiency.",
  },
  {
    title: "Data-Driven Insights",
    description: "Harnessing the power of analytics, Power BI, and business intelligence to turn data into actionable strategic advantages.",
  },
  {
    title: "Process Automation",
    description: "Implementing intelligent workflow automation to eliminate manual bottlenecks and scale operations seamlessly.",
  },
  {
    title: "Platform Integration",
    description: "Creating seamless connections between Jira, Salesforce, and enterprise systems for unified business operations.",
  },
  {
    title: "Future-Ready Solutions",
    description: "Building scalable, secure, and adaptable technology foundations that evolve with your business needs.",
  },
];

const innovationPrinciples = [
  "Customer-centric problem solving",
  "Iterative experimentation and learning",
  "Cross-functional collaboration",
  "Technology-enabled transformation",
  "Measurable business outcomes",
  "Continuous improvement culture",
];

const Innovation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Innovation | Vimico - Cutting-Edge Technology Solutions & Digital Transformation</title>
        <meta name="description" content="Discover Vimico's innovation-first approach to digital transformation. We build cutting-edge solutions using Agile methodologies, data analytics, and emerging technologies for lasting business impact." />
        <meta name="keywords" content="Vimico innovation, digital transformation, technology innovation, Agile innovation, business intelligence, process automation, enterprise solutions, India technology company" />
        <link rel="canonical" href="https://vimico.in/innovation" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Innovation concept with lightbulb and circuit patterns representing technology transformation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vimico-navy/90 via-vimico-navy/80 to-vimico-navy/70" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32 flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              Innovation First
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Driving <span className="gradient-text">Innovation Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              At Vimico, innovation isn't just a buzzword—it's our core philosophy. We build cutting-edge solutions that solve real problems and create lasting business impact.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Innovate With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Innovation Philosophy */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Innovation Philosophy</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Vimico believes that true innovation emerges from the intersection of technology excellence, customer understanding, and agile execution. We don't just adopt new technologies—we strategically apply them to create measurable business value.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Lightbulb, label: "Think Differently" },
                { icon: Zap, label: "Move Fast" },
                { icon: Rocket, label: "Scale Smart" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border/50">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Areas of <span className="gradient-text">Innovation</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Vimico innovates across multiple dimensions to help organizations transform and thrive in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovationAreas.map((area, index) => (
              <div
                key={area.title}
                className="group bg-card rounded-2xl p-8 shadow-card border border-border/50 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Principles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Vimico's <span className="gradient-text">Innovation Principles</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our approach to innovation is guided by proven principles that ensure every solution we create delivers tangible value and sustainable competitive advantage for our clients.
              </p>
              <Link to="/services">
                <Button variant="gradient" size="lg" className="gap-2 rounded-full">
                  Explore Our Services <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 animate-fade-up delay-200">
              {innovationPrinciples.map((principle, index) => (
                <div
                  key={principle}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-foreground">{principle}</span>
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
              Ready to Innovate with Vimico?
            </h2>
            <p className="text-muted text-lg mb-8">
              Transform your business with cutting-edge solutions and an innovation-first partner committed to your success.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Start Your Innovation Journey <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Innovation;
