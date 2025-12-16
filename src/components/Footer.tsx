import { Link } from "react-router-dom";
import vimicoLogo from "@/assets/logo-vimico.png";

const Footer = () => {
  return (
    <footer className="bg-vimico-navy text-card py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <img src={vimicoLogo} alt="Vimico" className="h-16 w-auto border-2" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering businesses with innovative technology solutions and strategic digital transformation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Agile Consulting</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">PowerBI Solutions</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Security & Compliance</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Jira & Salesforce</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Website Building</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Training & Mentoring</Link></li>
              
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
            <h4 className="font-semibold text-primary-foreground mb-4">Read</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Our Partners</Link></li>
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
              <a href="#" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
