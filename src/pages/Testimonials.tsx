import { useEffect, useState } from "react";
import { Quote, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import gripnovaLogo from "@/assets/gripnovaco-logo.png";
import heroTestimonials from "@/assets/hero-testimonials.jpg";

const localLogos: Record<string, string> = {
  gripnova: gripnovaLogo,
  gripnovaco: gripnovaLogo,
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1 mb-4" aria-label={`Rated ${rating} out of 5`}>
    {[0, 1, 2, 3, 4].map((i) => {
      const fill = Math.max(0, Math.min(1, rating - i));
      return (
        <span key={i} className="relative w-5 h-5">
          <Star className="w-5 h-5 absolute inset-0 text-muted-foreground/40" />
          <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
            <Star className="w-5 h-5 text-primary fill-primary" />
          </span>
        </span>
      );
    })}
    <span className="ml-2 text-sm font-semibold text-foreground">{rating.toFixed(1)} / 5</span>
  </div>
);

export interface Testimonial {
  id: string;
  brand_name: string;
  logo_url: string | null;
  quote: string;
  person_name: string;
  person_title: string | null;
  website_url: string | null;
  rating: number | null;
  display_order: number;
  published: boolean;
}

const Testimonials = () => {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("testimonials")
        .select("*")
        .eq("published", true)
        .order("display_order", { ascending: true })
        .order("created_at", { ascending: false });
      setItems(((data ?? []) as unknown as Testimonial[]));
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Testimonials | Vimico Client Success Stories</title>
        <meta
          name="description"
          content="Read what clients and partners say about working with Vimico — real feedback on transformation, delivery excellence, analytics and digital solutions."
        />
        <link rel="canonical" href="https://vimico.in/testimonials" />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroTestimonials}
            alt="Vimico client testimonials"
            className="w-full h-full object-cover"
            width={1536}
            height={768}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/85 to-vimico-navy/65" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              Client Voices
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              What our clients <span className="gradient-text">say about us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Outcomes speak louder than promises. Here is what leaders across our engagements have to say.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Start Your Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {loading ? (
            <p className="text-center text-muted-foreground">Loading testimonials…</p>
          ) : items.length === 0 ? (
            <div className="max-w-xl mx-auto text-center bg-card rounded-3xl p-10 border border-border/50 shadow-card">
              <Star className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-3">Testimonials coming soon</h2>
              <p className="text-muted-foreground">
                We are collecting feedback from our clients and partners. Check back shortly.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((t, i) => {
                const logoSrc =
                  t.logo_url ?? localLogos[t.brand_name.toLowerCase().replace(/[^a-z]/g, "")];
                const Logo = (
                  <div className="h-16 flex items-center justify-start mb-6">
                    {logoSrc ? (
                      <img
                        src={logoSrc}
                        alt={`${t.brand_name} logo`}
                        loading="lazy"
                        className="max-h-16 w-auto object-contain"
                      />
                    ) : (
                      <span className="text-xl font-bold text-foreground">{t.brand_name}</span>
                    )}
                  </div>
                );
                return (
                  <article
                    key={t.id}
                    className="bg-card rounded-3xl p-8 shadow-card border border-border/50 card-hover animate-fade-up flex flex-col"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    {t.website_url ? (
                      <a href={t.website_url} target="_blank" rel="noopener noreferrer">
                        {Logo}
                      </a>
                    ) : (
                      Logo
                    )}
                    {t.rating != null && <StarRating rating={Number(t.rating)} />}
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <p className="text-muted-foreground leading-relaxed italic flex-1">"{t.quote}"</p>
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <div className="font-semibold text-foreground">{t.person_name}</div>
                      {t.person_title && (
                        <div className="text-sm text-muted-foreground">{t.person_title}</div>
                      )}
                      <div className="text-sm font-semibold text-primary mt-1">{t.brand_name}</div>
                      {t.website_url && (
                        <a
                          href={t.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                        >
                          Visit website <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-vimico-navy via-vimico-navy to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to write the next success story?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let's talk about the outcomes you want and how we can get you there.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                Request a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;