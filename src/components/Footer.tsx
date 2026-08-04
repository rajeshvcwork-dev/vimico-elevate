import { Link } from "react-router-dom";
import vimicoLogo from "@/assets/logo-vimico.png";

const Footer = () => {
  return (
    <footer className="bg-vimico-navy text-card py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <img
              src={vimicoLogo}
              alt="Vimico"
              className="h-16 w-auto rounded-xl ring-1 ring-border/60 shadow-md"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering businesses with innovative technology solutions and strategic digital transformation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/erp-implementation" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">ERP Implementation & Consulting</Link></li>
              <li><Link to="/services/epm" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Enterprise Performance Management</Link></li>
              <li><Link to="/services/powerbi" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Power BI & Business Intelligence</Link></li>
              <li><Link to="/services/ai-strategy" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">AI Strategy & Adoption</Link></li>
              <li><Link to="/services/business-process-automation" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Business Process Automation</Link></li>
              <li><Link to="/services/business-transformation" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Business Transformation</Link></li>
              <li><Link to="/services/agile-transformation" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Agile Transformation</Link></li>
              <li><Link to="/services/jira-consulting" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Jira & PM Consulting</Link></li>
              <li><Link to="/services/grc" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Governance, Risk & Compliance</Link></li>
              <li><Link to="/services/information-security-audit" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Information Security Audits</Link></li>
              <li><Link to="/services/portfolio-branding" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Portfolio & Leadership Branding</Link></li>
              <li><Link to="/services/business-technology-consulting" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Business & Technology Consulting</Link></li>
              <li><Link to="/services/domainiq" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">DomainIQ Insight</Link></li>
              <li><Link to="/services/domain-services" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Domain Purchase</Link></li>
              <li><Link to="/services/website" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Website Design & Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">EnsurePeace</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">FlairHub.guru</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Fewdrops.Succulents</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Refund Policy</Link></li>
              <li><Link to="/partnership" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Partnerships & Resellers</Link></li>
              <li><Link to="/testimonials" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Testimonials</Link></li>
              <li><Link to="/blogs" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      
        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Vimico. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
