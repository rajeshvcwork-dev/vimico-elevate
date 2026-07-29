import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Package,
  Handshake,
  Megaphone,
  Quote,
  Mail,
  Sparkles,
} from "lucide-react";

const CARDS = [
  { name: "Services", path: "/services", Icon: Briefcase },
  { name: "Products", path: "/products", Icon: Package },
  { name: "Partnerships", path: "/partnership", Icon: Handshake },
  { name: "Blogs", path: "/blogs", Icon: Megaphone },
  { name: "Testimonials", path: "/testimonials", Icon: Quote },
  { name: "Contact", path: "/contact", Icon: Mail },
  { name: "About Vimico", path: "/about", Icon: Sparkles },
];

/**
 * Scroll-driven 3D carousel of the primary site sections.
 * The ring rotates as the section moves through the viewport.
 */
const MenuScrollScene = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress =
        1 - (rect.top + rect.height / 2) / (window.innerHeight + rect.height / 2);
      setRotation(progress * 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const radius = 340;

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-vimico-navy via-vimico-navy to-secondary/20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.18),transparent_65%)]" />
      <div className="relative container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
          Explore the <span className="gradient-text">Vimico Ecosystem</span>
        </h2>
        <p className="text-muted mt-3">Scroll to spin through everything we offer.</p>
      </div>

      <div className="relative h-[280px] flex items-center justify-center" style={{ perspective: "1400px" }}>
        <div
          className="relative w-[200px] h-[130px] transition-transform duration-300 ease-out"
          style={{ transformStyle: "preserve-3d", transform: `rotateX(-8deg) rotateY(${rotation}deg)` }}
        >
          {CARDS.map(({ name, path, Icon }, i) => {
            const angle = (360 / CARDS.length) * i;
            return (
              <Link
                key={path}
                to={path}
                className="absolute inset-0 group"
                style={{ transform: `rotateY(${angle}deg) translateZ(${radius}px)` }}
              >
                <div className="w-full h-full rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-md shadow-[0_0_40px_hsl(var(--primary)/0.3)] flex flex-col items-center justify-center gap-2 transition-colors group-hover:border-primary group-hover:from-primary/35 group-hover:to-secondary/35">
                  <Icon className="w-8 h-8 text-primary-foreground/90" />
                  <span className="text-sm font-semibold text-primary-foreground">{name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuScrollScene;
