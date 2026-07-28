import {
  Briefcase,
  Package,
  Handshake,
  Megaphone,
  Mail,
  Sparkles,
  Quote,
  BarChart3,
  Brain,
  ShieldCheck,
  Globe,
  Rocket,
  Users,
  Star,
  Store,
  PenTool,
  Building2,
  Layers,
  Smartphone,
  MessageSquare,
  Target,
  LineChart,
} from "lucide-react";

export type Hero3DVariant =
  | "home"
  | "services"
  | "products"
  | "partnership"
  | "blogs"
  | "contact"
  | "about"
  | "testimonials"
  | "practice";

const SETS: Record<Hero3DVariant, React.ComponentType<{ className?: string }>[]> = {
  home: [Sparkles, Briefcase, Package, Handshake, Megaphone, Mail, Rocket, Globe],
  services: [Briefcase, Brain, BarChart3, ShieldCheck, Target, LineChart, Layers, Rocket],
  products: [Package, Sparkles, Smartphone, Rocket, Layers, PenTool, Star, Globe],
  partnership: [Handshake, Globe, Store, ShieldCheck, Building2, Users, Package, Rocket],
  blogs: [Megaphone, PenTool, MessageSquare, Globe, Users, Star, LineChart, Sparkles],
  contact: [Mail, MessageSquare, Users, Globe, Handshake, Sparkles, Rocket, Star],
  about: [Sparkles, Users, Building2, Globe, Target, Brain, Handshake, Star],
  testimonials: [Quote, Star, Users, Handshake, MessageSquare, Building2, Globe, Sparkles],
  practice: [Layers, Brain, BarChart3, Target, ShieldCheck, Rocket, LineChart, Users],
};

interface Hero3DProps {
  variant: Hero3DVariant;
  className?: string;
}

/**
 * Decorative 3D scene rendered behind hero content.
 * A slowly rotating ring of glass tiles whose icons are driven by the page (menu option).
 */
const Hero3D = ({ variant, className = "" }: Hero3DProps) => {
  const icons = SETS[variant] ?? SETS.home;
  const outer = icons.slice(0, 6);
  const inner = icons.slice(6).concat(icons.slice(0, 4)).slice(0, 4);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-70 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.18),transparent_65%)]" />
      <div
        className="absolute inset-0 flex items-center justify-center animate-float-soft"
        style={{ perspective: "1200px" }}
      >
        {/* Outer ring */}
        <div
          className="relative animate-ring-spin"
          style={{
            transformStyle: "preserve-3d",
            width: "112px",
            height: "112px",
          }}
        >
          {outer.map((Icon, i) => {
            const angle = (360 / outer.length) * i;
            return (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${angle}deg) translateZ(230px)`,
                }}
              >
                <div className="w-full h-full rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/25 to-secondary/25 backdrop-blur-md shadow-[0_0_50px_hsl(var(--primary)/0.35)] flex items-center justify-center">
                  <Icon className="w-10 h-10 text-primary-foreground/90" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Inner counter-rotating ring */}
        <div
          className="absolute animate-ring-spin-rev"
          style={{
            transformStyle: "preserve-3d",
            width: "64px",
            height: "64px",
          }}
        >
          {inner.map((Icon, i) => {
            const angle = (360 / inner.length) * i;
            return (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${angle}deg) translateZ(120px) rotateX(12deg)`,
                }}
              >
                <div className="w-full h-full rounded-2xl border border-secondary/40 bg-secondary/20 backdrop-blur-md flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-foreground/80" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero3D;