import { Shield, Lock, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// You might want to use a specific image for privacy, or reuse the hero image
import heroPrivacy from "@/assets/hero-marketing.jpg"; 

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroPrivacy} 
            alt="Privacy Policy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/90 to-vimico-navy/70" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              Legal & Compliance
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Our <span className="gradient-text">Privacy Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Transparency is our currency. Whether you are a domain buyer or a strategic partner, 
              we treat your data with the highest respect and security.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="max-w-4xl mx-auto">
            {/* Main Content Card */}
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50 animate-fade-up">
              
              {/* Header Icon */}
              <div className="flex items-center gap-4 mb-8 border-b border-border/50 pb-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Vimico.in Data Protection</h3>
                  <p className="text-muted-foreground">Effective Date: [Insert Date]</p>
                </div>
              </div>

              {/* Legal Text Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                
                <p className="mb-6">
                  At <strong>Vimico.in</strong> (Vimico Private Limited), we value your trust more than your data. 
                  This policy outlines how we handle information for our <strong>Domain Reselling Services</strong> and our <strong>Strategic Business Partnerships</strong>.
                </p>

                <h3 className="text-xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">1</span>
                  Information We Collect
                </h3>
                <p className="mb-4">We collect only what is necessary to do business:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>From Customers:</strong> Name, Email, Phone, Billing Address, and technical data required by ICANN.</li>
                  <li><strong>From Partners:</strong> Professional contact info, GSTIN/Tax IDs, and contractual data for collaborations.</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center
