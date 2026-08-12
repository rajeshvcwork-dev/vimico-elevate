import { useEffect, useState } from "react";
import { Linkedin, ExternalLink, TrendingUp, Users, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import heroMarketing from "@/assets/hero-marketing.jpg";

type BlogPost = Tables<"blog_posts">;

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("display_order", { ascending: true })
        .order("published_at", { ascending: false });
      setPosts(data ?? []);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blogs & Insights | Vimico - Industry Updates on LinkedIn</title>
        <meta name="description" content="Read Vimico blogs and insights. Industry trends, Agile tips, delivery excellence and digital transformation updates from our expert team." />
        <meta name="keywords" content="Vimico blogs, technology insights, Agile insights, digital transformation news, company updates, industry trends" />
        <link rel="canonical" href="https://vimico.in/blogs" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroMarketing} 
            alt="Vimico blogs and insights" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vimico-navy/95 via-vimico-navy/80 to-vimico-navy/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 gap-2 rounded-full border-2 bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              Blogs & Insights
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Ideas, insights &{" "}
              <span className="gradient-text">field notes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              Our latest writing on transformation, delivery, analytics and leadership — published regularly on LinkedIn.
            </p>
            <a 
              href="https://www.linkedin.com/company/vimico-org" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="gradient" size="xl" className="gap-2 rounded-full border-2">
                <Linkedin className="w-5 h-5" />
                Read on LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* LinkedIn Posts Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest <span className="gradient-text">Posts</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Follow our journey and stay connected with our latest news and insights
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {loading && (
              <div className="flex justify-center py-10">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
            )}

            {!loading && posts.length === 0 && (
              <p className="text-center text-muted-foreground mb-8">
                New posts are on the way — follow us on LinkedIn in the meantime.
              </p>
            )}

            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card rounded-3xl p-8 shadow-card border border-border/50 animate-fade-up"
                >
                  {post.cover_image_url && (
                    <img
                      src={post.cover_image_url}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-56 object-cover rounded-2xl mb-6"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-foreground mb-2">{post.title}</h3>
                  <div className="text-sm text-muted-foreground mb-4">
                    {new Date(post.published_at).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    {post.author ? ` · ${post.author}` : ""}
                  </div>
                  {post.excerpt && (
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  )}
                  {post.content && (
                    <div className="text-foreground/90 whitespace-pre-line leading-relaxed">
                      {post.content}
                    </div>
                  )}
                  {post.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {post.linkedin_url && (
                    <a
                      href={post.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-6"
                    >
                      <Button variant="outline" className="gap-2 rounded-full border-2">
                        <Linkedin className="w-4 h-4" />
                        View on LinkedIn
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  )}
                </article>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-10">
                <a 
                  href="https://www.linkedin.com/company/vimico-org/posts/?feedView=all"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="gradient" className="gap-2 rounded-full border-2">
                    <Linkedin className="w-4 h-4" />
                    Visit Our LinkedIn Posts
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Follow Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Read <span className="gradient-text">Vimico</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center animate-fade-up">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Industry Insights</h3>
              <p className="text-sm text-muted-foreground">
                Get the latest trends and insights in technology and digital transformation
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center animate-fade-up delay-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Company Updates</h3>
              <p className="text-sm text-muted-foreground">
                Stay informed about our partnerships, projects, and team achievements
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center animate-fade-up delay-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Professional Network</h3>
              <p className="text-sm text-muted-foreground">
                Connect with our team and explore collaboration opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-vimico-navy via-vimico-navy to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Let's Connect
            </h2>
            <p className="text-muted text-lg mb-8">
              Have questions or want to discuss a potential collaboration? We'd love to hear from you.
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

export default Blogs;
