import { ExternalLink, Globe, Handshake, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portfolioHero from "@/assets/hero-portfolio.jpg";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={portfolioHero}
            alt="Strategic Partnerships"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text on top of the image */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-fade-up text-white">

              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                Strategic Partnerships
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Building <span className="text-white">Global Alliances</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Vimico partners with industry leaders to deliver exceptional value and expand reach
                across emerging markets worldwide.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* iZND Partnership */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-primary">Global Partner</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                iZND SDN BHD
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Vimico has forged a strategic partnership with{" "}
                  <strong className="text-foreground">iZND SDN BHD</strong>, a pioneering technology
                  solutions provider based in Malaysia. iZND Group specializes in delivering innovative
                  digital transformation solutions, enterprise software, and cutting-edge services
                  across Southeast Asia.
                </p>
                <p>
                  Through this collaboration, Vimico is positioned to bring iZND's comprehensive product
                  offerings to new market segments, including India, Thailand, and the African region.
                  Their portfolio encompasses enterprise solutions, digital platforms, and consulting
                  services for emerging markets.
                </p>
                <p>
                  This partnership enables both companies to leverage combined expertise and deliver
                  world-class technology solutions that accelerate business innovation across
                  developing economies.
                </p>
              </div>

              <a
                href="https://www.izndgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6"
              >
                <Button variant="gradient" className="gap-2 rounded-full border-2">
                  Visit iZND Group <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>

            <div className="relative animate-fade-up delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border/50">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "3+", label: "New Markets" },
                    { value: "India", label: "Key Expansion" },
                    { value: "Thailand", label: "Growth Region" },
                    { value: "Africa", label: "Emerging Market" },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-6 bg-muted/50 rounded-2xl">
                      <div className="text-3xl font-bold gradient-text mb-2">{item.value}</div>
                      <div className="text-sm font-bold text-gray-900">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
