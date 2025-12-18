import { RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Refund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Refund Policy | Vimico - Returns & Cancellations</title>
        <meta name="description" content="Vimico's refund policy covers domain services, consulting engagements, and product purchases. Learn about our fair and transparent refund process." />
        <meta name="keywords" content="refund policy, cancellation, returns, money back, Vimico refund, domain refund" />
        <link rel="canonical" href="https://vimico.in/refund" />
      </Helmet>
      
      <Navbar />

      {/* Simple Header Section */}
      <section className="pt-32 pb-8 px-4 lg:px-8 bg-muted/10">
        <div className="container mx-auto text-center animate-fade-up">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
            <RefreshCcw className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Refund Policy
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
                At <strong>Vimico</strong>, we strive to ensure complete satisfaction with all our services and products. 
                This refund policy outlines the terms and conditions for refunds across our different service categories.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">1. Domain Registration Services</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>New Domain Registrations:</strong> Domain registrations are non-refundable once the domain has been registered with the registry. This is due to the nature of domain registration with ICANN-accredited registrars.</li>
                    <li><strong>Domain Renewals:</strong> Renewal fees are non-refundable once processed.</li>
                    <li><strong>Domain Transfers:</strong> Transfer fees are non-refundable once the transfer process has been initiated.</li>
                    <li><strong>Grace Period:</strong> Some TLDs offer a grace period for deletion. Please contact us within 5 days of registration if you wish to cancel.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">2. Consulting & Professional Services</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Pre-Project Cancellation:</strong> Full refund available if cancelled before project commencement.</li>
                    <li><strong>During Project:</strong> Partial refund based on work completed, calculated pro-rata.</li>
                    <li><strong>Post-Delivery:</strong> No refunds once deliverables have been accepted and signed off.</li>
                    <li><strong>Retainer Services:</strong> Unused retainer hours may be refunded within 30 days of the billing period.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">3. Reseller Products (FlexiSpy, etc.)</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Digital Products:</strong> Refunds are subject to the original vendor's refund policy.</li>
                    <li><strong>Software Licenses:</strong> Once activated, software licenses are typically non-refundable.</li>
                    <li><strong>Technical Issues:</strong> If you experience technical issues, contact our support team for assistance before requesting a refund.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">4. Website Development Services</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Deposit:</strong> 50% deposit is non-refundable once work has commenced.</li>
                    <li><strong>Milestone Payments:</strong> Payments for completed milestones are non-refundable.</li>
                    <li><strong>Cancellation:</strong> If you cancel mid-project, you will be billed for work completed plus any third-party costs incurred.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">5. How to Request a Refund</h3>
                  <p className="mb-3">To request a refund, please follow these steps:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Email us at <strong>care@vimico.in</strong> with your order details</li>
                    <li>Include your order number and reason for the refund request</li>
                    <li>Our team will review your request within 3-5 business days</li>
                    <li>If approved, refunds will be processed within 7-10 business days</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">6. Refund Methods</h3>
                  <p>Refunds will be issued using the original payment method:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Credit/Debit Card payments will be refunded to the same card</li>
                    <li>Bank transfers will be refunded to the originating account</li>
                    <li>UPI payments will be refunded to the same UPI ID</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">7. Exceptions</h3>
                  <p>Refunds will not be provided in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Violation of our terms of service</li>
                    <li>Fraudulent transactions</li>
                    <li>Services that have been fully rendered and accepted</li>
                    <li>Requests made after the applicable refund period</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">8. Contact Us</h3>
                  <p>For refund-related inquiries, please contact us at:</p>
                  <p className="mt-2"><strong>Email:</strong> care@vimico.in</p>
                  <p><strong>Response Time:</strong> Within 24-48 business hours</p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  This refund policy was last updated on January 1, 2025. We reserve the right to modify this policy at any time. Changes will be posted on this page with an updated effective date.
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
            Need Help With a Refund?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our support team is here to assist you with any refund-related questions.
          </p>
          <Link to="/contact">
            <Button variant="gradient" size="lg" className="rounded-full">
              Contact Support
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Refund;
