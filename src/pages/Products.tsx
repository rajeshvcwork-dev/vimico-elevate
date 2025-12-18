import { Sparkles, Palette, Leaf, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroProducts from "@/assets/hero-products.jpg";

const products = [
  {
    name: "EnsurePeace",
    tagline: "Insurance Claims Made Effortless",
    description: "EnsurePeace is revolutionizing the way people handle medical insurance claims. This intelligent platform eliminates the hassle of submitting medical bills to insurance companies by automating the entire documentation process.",
    features: [
      "Smart document preparation in insurance-required formats",
      "Automatic bill summarization and categorization",
      "No more manual photography or paperwork arrangement",
      "Intelligent organization by category and sequence",
      "Seamless submission to insurance providers"
    ],
    status: "Under Development",
    icon: Sparkles,
    gradient: "from-primary to-secondary",
  },
  {
    name: "FlairHub.guru",
    tagline: "Where Young Artists Shine",
    description: "FlairHub.guru is an innovative platform designed to nurture and showcase the creative potential of children through the art of painting. This unique social platform transforms how young artists explore their imagination and share their masterpieces with the world.",
    features: [
      "Dedicated space for children to publish their paintings",
      "Social media experience designed for young artists",
      "Encourages creative exploration and imagination",
      "Safe, moderated community for all painters",
      "Tools to inspire and develop artistic skills"
    ],
    status: "Coming Soon",
    icon: Palette,
    gradient: "from-secondary to-accent",
  },
  {
    name: "Fewdrops.Succulents",
    tagline: "The Succulent Enthusiast's Paradise",
    description: "Fewdrops.Succulents is the ultimate destination for succulent plant lovers and gardening enthusiasts. This comprehensive platform connects people who share a passion for these beautiful, low-maintenance plants, creating a thriving community marketplace.",
    features: [
      "Buy, sell, and trade succulent plants",
      "Connect with fellow succulent enthusiasts",
      "One-stop solution for all succulent needs",
      "Community-driven plant exchange",
      "Expert tips and care guides"
    ],
    status: "Under Construction",
    icon: Leaf,
    gradient: "from-accent to-primary",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Products | Vimico - Innovative Solutions in Development</title>
        <meta name="description" content="Discover Vimico's innovative products: EnsurePeace for insurance claims automation, FlairHub.guru for young artists, and Fewdrops.Succulents marketplace for plant enthusiasts." />
        <meta name="keywords" content="Vimico products, EnsurePeace, FlairHub.guru, Fewdrops.Succulents, insurance automation, art platform, succulent marketplace" />
        <link rel="canonical" href="https://vimico.in/products" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroProducts} 
            alt="Products" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/80 to-vimico-navy/60" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              Innovation Lab
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Products <span className="gradient-text">in Development</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover the innovative solutions we're building to solve real-world problems and create meaningful experiences.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Get Early Access
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="group relative bg-card rounded-3xl p-8 lg:p-12 shadow-card border border-border/50 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    {product.status}
                  </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                  <div>
                    <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} items-center justify-center mb-6`}>
                      <product.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                      {product.name}
                    </h2>
                    <p className="text-primary font-medium mb-4">
                      {product.tagline}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-2xl p-6">
                    <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${product.gradient} mt-2 flex-shrink-0`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap gap-4">
                  <Button variant="gradient" disabled className="opacity-70">
                    Get Early Access
                  </Button>
                  <Button variant="outline" disabled className="opacity-70">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="py-20 bg-gradient-to-br from-vimico-navy via-vimico-navy to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Be the First to Know
            </h2>
            <p className="text-muted text-lg mb-8">
              Stay updated on our product launches and be among the first to experience these innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-xl bg-card/10 border border-card/20 text-primary-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button variant="gradient" size="lg" disabled className="opacity-70">
                Notify Me
              </Button>
            </div>
            <div className="mt-6">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Contact Us Instead
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
