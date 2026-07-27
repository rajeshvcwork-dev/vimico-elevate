import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Package,
  Handshake,
  Users,
  Megaphone,
  Mail,
  Sparkles,
} from "lucide-react";

interface MenuItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  blurb: string;
}

const items: MenuItem[] = [
  {
    name: "Services",
    path: "/services",
    icon: Briefcase,
    blurb: "Nine practice areas from transformation to analytics.",
  },
  {
    name: "Products",
    path: "/products",
    icon: Package,
    blurb: "In-house products built for real customer problems.",
  },
  {
    name: "Resellers",
    path: "/resellers",
    icon: Users,
    blurb: "Curated third-party solutions we resell and support.",
  },
  {
    name: "Partnerships",
    path: "/partnership",
    icon: Handshake,
    blurb: "Strategic alliances across markets and industries.",
  },
  {
    name: "Marketing",
    path: "/marketing",
    icon: Megaphone,
    blurb: "Our voice, our reach, our story in the market.",
  },
  {
    name: "Contact",
    path: "/contact",
    icon: Mail,
    blurb: "Start a conversation about your next move.",
  },
  {
    name: "About Vimico",
    path: "/about",
    icon: Sparkles,
    blurb: "Founder, practice areas, industry expertise.",
  },
];

/**
 * Scroll-driven 3D scene:
 *  - Section is 7x viewport tall
 *  - A sticky stage holds a 3D "carousel" of cards on a perspective plane
 *  - Scroll progress rotates the ring and advances the focused card
 */
const MenuScrollScene = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0); // 0..1

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const count = items.length;
  // Continuous rotation across the whole ring
  const ringRotation = progress * 360;
  // Which card is "front-facing"
  const activeIndex = Math.min(
    count - 1,
    Math.floor(progress * count * 0.999),
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-vimico-navy"
      style={{ height: `${count * 90}vh` }}
      aria-label="Explore Vimico"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--secondary)/0.25),transparent_60%)]" />
      </div>

      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="relative z-20 text-center px-4 mb-8 max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full border-2 border-primary/40 bg-primary/10 text-primary-foreground text-xs font-medium mb-4 tracking-widest uppercase">
            Explore Vimico
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Scroll through the{" "}
            <span className="gradient-text">Vimico universe</span>
          </h2>
          <p className="mt-3 text-muted text-sm md:text-base">
            Each surface below is a live entry point — click any card to dive in.
          </p>
        </div>

        {/* 3D stage */}
        <div
          className="relative z-10 w-full flex items-center justify-center"
          style={{ perspective: "1400px" }}
        >
          <div
            className="relative"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(-8deg) rotateY(${ringRotation}deg)`,
              transition: "transform 120ms linear",
              width: "260px",
              height: "320px",
            }}
          >
            {items.map((item, i) => {
              const angle = (360 / count) * i;
              const isActive = i === activeIndex;
              const Icon = item.icon;
              return (
                <Link
                  to={item.path}
                  key={item.name}
                  className="absolute inset-0 group"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(360px)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className={`w-full h-full rounded-2xl border backdrop-blur-md flex flex-col items-center justify-center gap-4 p-6 text-center transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-primary/30 to-secondary/30 border-primary/60 shadow-[0_0_60px_hsl(var(--primary)/0.4)] scale-105"
                        : "bg-vimico-navy/60 border-primary/20 opacity-70"
                    }`}
                    style={{ transform: "translateZ(0.01px)" }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-foreground mb-2">
                        {item.name}
                      </h3>
                      <p className="text-xs md:text-sm text-muted leading-relaxed">
                        {item.blurb}
                      </p>
                    </div>
                    <span className="mt-2 text-xs font-semibold text-primary-foreground/80 group-hover:text-primary transition-colors">
                      Enter →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Progress ticks */}
        <div className="relative z-20 mt-8 flex items-center gap-2">
          {items.map((it, i) => (
            <span
              key={it.name}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8 bg-gradient-to-r from-primary to-secondary"
                  : "w-3 bg-primary-foreground/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuScrollScene;