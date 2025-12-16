import { Shield, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Simple Header Section */}
      <section className="pt-32 pb-8 px-4 lg:px-8 bg-muted/10">
        <div className="container mx-auto text-center animate-fade-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Effective Date: [Insert Date]
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-up delay-100">
            
            {/* Legal Text Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
              
              <p className="mb-8 text-lg">
                At <strong>Vimico.in</strong> (Vimico Private Limited), we value your trust more than your data. 
                This policy outlines how we handle information for our <strong>Domain Reselling Services</strong> and our <strong>Strategic Business Partnerships</strong>.
              </p>

              <div className="space-y-8">
                {/* Section 1 */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">1. Information We Collect</h3>
                  <p className="mb-3">We collect only what is necessary to do business:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>From Customers:</strong> Name, Email, Phone, Billing Address, and technical data required by ICANN.</li>
                    <li><strong>From Partners:</strong> Professional contact info, GSTIN/Tax IDs, and contractual data for collaborations.</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">2. How We Use Your Data</h3>
                  <p className="mb-3"><strong>For Domain Buyers:</strong> To register/renew domains, process payments, and comply with mandatory ICANN Whois accuracy programs.</p>
                  <p><strong>For Partners:</strong> To integrate services (APIs), manage joint operations, and process vendor payouts or commissions.</p>
                </div>

                {/* Section 3 */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">3. Data Sharing & Third Parties</h3>
                  <p className="mb-3">We do not sell data to ad networks. However, sharing is necessary for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Domain Fulfillment:</strong> We must transmit data to Upstream Registrars, Verisign/Registry Operators, and Escrow services as required by international law.</li>
                    <li><strong>Public WHOIS:</strong> Unless you purchase "Privacy Protection", your contact info may be visible
