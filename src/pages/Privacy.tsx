import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | Vimico - Data Protection & Privacy</title>
        <meta name="description" content="Vimico's privacy policy outlines how we collect, use, and protect your personal information. Learn about our commitment to data security and GDPR compliance." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal data, Vimico privacy, information security" />
        <link rel="canonical" href="https://vimico.in/privacy" />
      </Helmet>
      
      <Navbar />

      {/* Simple Header Section */}
      <section className="pt-32 pb-8 px-4 lg:px-8 bg-muted/10">
        <div className="container mx-auto text-center animate-fade-up">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Effective Date: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-up delay-100">
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
              <p className="mb-8 text-lg">
                At <strong>Vimico.in</strong> (Vimico Private Limited), we value your trust more than your data. 
                This policy outlines how we handle information for our <strong>Domain Reselling Services</strong> and our <strong>Strategic Business Partnerships</strong>.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">1. Information We Collect</h3>
                  <p className="mb-3">We collect only what is necessary to do business:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>From Customers:</strong> Name, Email, Phone, Billing Address, and technical data required by ICANN.</li>
                    <li><strong>From Partners:</strong> Professional contact info, GSTIN/Tax IDs, and contractual data for collaborations.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">2. How We Use Your Data</h3>
                  <p className="mb-3"><strong>For Domain Buyers:</strong> To register/renew domains, process payments, and comply with mandatory ICANN Whois accuracy programs.</p>
                  <p><strong>For Partners:</strong> To integrate services (APIs), manage joint operations, and process vendor payouts or commissions.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">3. Data Sharing & Third Parties</h3>
                  <p className="mb-3">We do not sell data to ad networks. However, sharing is necessary for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Domain Fulfillment:</strong> We must transmit data to Upstream Registrars, Verisign/Registry Operators, and Escrow services as required by international law.</li>
                    <li><strong>Public WHOIS:</strong> Unless you purchase "Privacy Protection", your contact info may be visible in public domain directories.</li>
                    <li><strong>Partner Operations:</strong> Shared data is governed by separate NDAs and data processing agreements.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">4. Data Retention</h3>
                  <p>Domain registration data is retained for 3 years post-expiration (per ICANN rules). Partner contracts and transaction data are retained for 7 years for legal and tax compliance.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">5. Your Rights</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access & Correction:</strong> Request a copy of your data or correct inaccuracies.</li>
                    <li><strong>Deletion:</strong> Request deletion where legally permissible (some data must be retained per ICANN requirements).</li>
                    <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">6. Security Measures</h3>
                  <p>We implement industry-standard security measures including SSL encryption, secure payment processing, and regular security audits to protect your personal information.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">7. Contact Us</h3>
                  <p>For privacy-related inquiries, please contact us at:</p>
                  <p className="mt-2"><strong>Email:</strong> care@vimico.in</p>
                  <p><strong>Address:</strong> Vimico Private Limited, India</p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  This privacy policy was last updated on January 1, 2025. We reserve the right to update this policy at any time. Changes will be posted on this page with an updated effective date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Have Questions About Your Data?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We're committed to transparency. Contact us for any privacy-related concerns.
          </p>
          <Link to="/contact">
            <Button variant="gradient" size="lg" className="rounded-full">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
