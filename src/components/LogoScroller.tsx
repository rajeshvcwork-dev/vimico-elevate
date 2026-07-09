import { Link } from "react-router-dom";
import { Building2, Handshake, Rocket } from "lucide-react";

type ScrollItem = {
  name: string;
  category: string;
  to: string;
  icon: typeof Building2;
};

const items: ScrollItem[] = [
  { name: "iZND Group", category: "Partner", to: "/partnership", icon: Handshake },
  { name: "MediSure Healthcare", category: "Partner", to: "/partnership", icon: Handshake },
  { name: "RISP Consulting", category: "Partner", to: "/partnership", icon: Handshake },
  { name: "EnsurePeace", category: "Upcoming Product", to: "/products", icon: Rocket },
  { name: "FlairHub.guru", category: "Upcoming Product", to: "/products", icon: Rocket },
  { name: "Fewdrops.Succulents", category: "Upcoming Product", to: "/products", icon: Rocket },
  { name: "ERPNext Implementations", category: "Delivered", to: "/services/erp", icon: Building2 },
  { name: "iDempiere Solutions", category: "Delivered", to: "/services/erp", icon: Building2 },
  { name: "Power BI Dashboards", category: "Delivered", to: "/services/powerbi", icon: Building2 },
  { name: "Agile Transformations", category: "Delivered", to: "/services/agile", icon: Building2 },
  { name: "GripNovaco Website", category: "Delivered", to: "/services/website", icon: Building2 },
];

const LogoCard = ({ item }: { item: ScrollItem }) => {
  const Icon = item.icon;
  return (
    <Link
      to={item.to}
      className="group flex-shrink-0 w-64 mx-3 flex items-center gap-4 rounded-2xl border border-border/50 bg-card px-6 py-5 shadow-card transition-all hover:border-primary/40 hover:shadow-lg"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <div className="min-w-0">
        <div className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
          {item.name}
        </div>
        <div className="text-xs text-muted-foreground">{item.category}</div>
      </div>
    </Link>
  );
};

const LogoScroller = () => {
  const doubled = [...items, ...items];
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Trusted <span className="gradient-text">Partnerships & Deliveries</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The partners we collaborate with, the products we're building, and the services we've delivered.
        </p>
      </div>
      <div className="marquee-container relative w-full">
        <div className="flex w-max animate-marquee">
          {doubled.map((item, index) => (
            <LogoCard key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default LogoScroller;