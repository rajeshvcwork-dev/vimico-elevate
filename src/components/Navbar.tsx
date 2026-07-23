import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import vimicoLogo from "@/assets/logo-vimico.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const location = useLocation();

  const servicesSubmenu = [
    { name: "DomainIQ-Insight", path: "https://domainiq-insight.lovable.app/", external: true },
    { name: "Agile Methodology", path: "/services/agile" },
    { name: "Power BI Projects", path: "/services/powerbi" },
    { name: "Data Sanity", path: "/services/data-sanity" },
    { name: "Compliance & Security", path: "/services/compliance" },
    { name: "ERP Implementation", path: "/services/erp" },
    { name: "Website Development", path: "/services/website" },
    { name: "Portfolio Sites", path: "/services/portfolio-sites" },
    { name: "Jira & Salesforce", path: "/services/jira-salesforce" },
    { name: "Support Infrastructure", path: "/services/support-setup" },
  ];

  const productsSubmenu = [
    { name: "EnsurePeace", path: "/products#ensurepeace" },
    { name: "FlairHub.guru", path: "/products#flairhub" },
    { name: "Fewdrops.Succulents", path: "/products#fewdrops" },
  ];

  const resellersSubmenu = [
    { name: "Domain Services", path: "/resellers#domain-services" },
    { name: "FlexiSpy", path: "/resellers#flexispy" },
  ];

  const navLinks: Array<{
    name: string;
    path: string;
    submenu?: Array<{ name: string; path: string; external?: boolean }>;
  }> = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", submenu: servicesSubmenu },
    { name: "Products", path: "/products", submenu: productsSubmenu },
    { name: "Partnership", path: "/partnership" },
    { name: "Resellers", path: "/resellers", submenu: resellersSubmenu },
    { name: "Marketing", path: "/marketing" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-vimico-navy/95 backdrop-blur-xl border-b border-primary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={vimicoLogo} alt="Vimico" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.path} className="relative group">
                  <Link
                    to={link.path}
                    className={`nav-link text-base font-medium inline-flex items-center gap-1 ${
                      isActive(link.path)
                        ? "text-primary font-semibold"
                        : "text-primary-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="min-w-[240px] bg-vimico-navy border border-primary/30 rounded-xl shadow-2xl py-2">
                      {link.submenu.map((item) =>
                        item.external ? (
                          <a
                            key={item.name}
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-primary-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-primary-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                          >
                            {item.name}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link text-base font-medium ${
                    isActive(link.path)
                      ? "text-primary font-semibold"
                      : "text-primary-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact">
              <Button variant="gradient" size="default" className="gap-2 rounded-full border-2">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20 animate-fade-up bg-vimico-navy">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <div className="flex items-center">
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex-1 px-4 py-2 rounded-lg transition-colors text-base ${
                        isActive(link.path)
                          ? "bg-primary/20 text-primary font-semibold"
                          : "text-primary-foreground/80 hover:text-primary hover:bg-primary/10"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <button
                        aria-label={`Toggle ${link.name} submenu`}
                        onClick={() =>
                          setOpenMobileSub(openMobileSub === link.name ? null : link.name)
                        }
                        className="p-2 text-primary-foreground/80 hover:text-primary"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openMobileSub === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {link.submenu && openMobileSub === link.name && (
                    <div className="ml-4 mt-1 flex flex-col border-l border-primary/20 pl-3">
                      {link.submenu.map((item) =>
                        item.external ? (
                          <a
                            key={item.name}
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="px-3 py-2 text-sm text-primary-foreground/70 hover:text-primary"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="px-3 py-2 text-sm text-primary-foreground/70 hover:text-primary"
                          >
                            {item.name}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="gradient" size="lg" className="w-full">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
