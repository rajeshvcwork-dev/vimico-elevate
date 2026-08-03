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
    { name: "Business Transformation", path: "/services/business-transformation" },
    { name: "ERP Implementation", path: "/services/erp-implementation" },
    { name: "AI Strategy & Adoption", path: "/services/ai-strategy" },
    { name: "EPM Consulting & Power BI Analytics", path: "/services/powerbi" },
    { name: "Governance, Risk & Compliance", path: "/services/grc" },
    { name: "Executive Coaching & Leadership", path: "/services/executive-coaching" },
    { name: "DomainIQ Insight Platform", path: "/services/domainiq" },
    { name: "Website Development & Hosting", path: "/services/website" },
    { name: "Domain Purchase & Domain Services", path: "/services/domain-services" },
  ];

  const productsSubmenu = [
    { name: "EnsurePeace", path: "/products#ensurepeace" },
    { name: "FlairHub.guru", path: "/products#flairhub" },
    { name: "Fewdrops.Succulents", path: "/products#fewdrops" },
  ];

  const partnershipSubmenu = [
    { name: "iZND SDN BHD", path: "/partnership" },
    { name: "RISP Consulting", path: "/partnership" },
    { name: "MediSure Healthcare", path: "/partnership" },
    { name: "FlexiSpy", path: "/partnership#flexispy" },
  ];

  const navLinks: Array<{
    name: string;
    path: string;
    submenu?: Array<{ name: string; path: string; external?: boolean }>;
  }> = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", submenu: servicesSubmenu },
    { name: "Products", path: "/products", submenu: productsSubmenu },
    { name: "Partnerships", path: "/partnership", submenu: partnershipSubmenu },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "About Vimico", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-vimico-navy/90 backdrop-blur-xl border-b border-primary/15 shadow-[0_2px_24px_hsl(var(--primary)/0.08)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={vimicoLogo}
              alt="Vimico"
              className="h-14 w-auto rounded-xl ring-1 ring-primary/20 shadow-sm transition-transform duration-200 hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.path} className="relative group">
                  <Link
                    to={link.path}
                    className={`relative inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[0.95rem] font-medium tracking-tight transition-all duration-200 hover:bg-primary/10 ${
                      isActive(link.path)
                        ? "text-primary font-semibold bg-primary/10"
                        : "text-primary-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform duration-200 group-hover:rotate-180" />
                    <span
                      className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-primary to-secondary transition-transform duration-200 origin-left ${
                        isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-[70]">
                    <div className="min-w-[260px] bg-vimico-navy border border-primary/25 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.55)] p-2 ring-1 ring-black/30">
                      {link.submenu.map((item) =>
                        item.external ? (
                          <a
                            key={item.name}
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-2 rounded-lg text-sm text-primary-foreground/75 hover:text-primary hover:bg-primary/10 transition-colors"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-3 py-2 rounded-lg text-sm text-primary-foreground/75 hover:text-primary hover:bg-primary/10 transition-colors"
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
                  className={`group relative px-3 py-2 rounded-lg text-[0.95rem] font-medium tracking-tight transition-all duration-200 hover:bg-primary/10 ${
                    isActive(link.path)
                      ? "text-primary font-semibold bg-primary/10"
                      : "text-primary-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span
                    className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-primary to-secondary transition-transform duration-200 origin-left ${
                      isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
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
