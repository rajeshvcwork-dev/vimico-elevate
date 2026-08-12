import { useCallback, useEffect, useState } from "react";
import { Loader2, Plus, Pencil, Trash2, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type BlogPost = Tables<"blog_posts">;

interface FormState {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image_url: string;
  linkedin_url: string;
  author: string;
  tags: string;
  published_at: string;
  display_order: number;
  published: boolean;
}

const emptyForm: FormState = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  cover_image_url: "",
  linkedin_url: "",
  author: "",
  tags: "",
  published_at: "",
  display_order: 0,
  published: true,
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);

const BlogPostsManager = () => {
  const { toast } = useToast();
  const [items, setItems] = useState<BlogPost[]>([]);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("display_order", { ascending: true })
      .order("published_at", { ascending: false });
    if (error) {
      toast({ title: "Could not load blog posts", description: error.message, variant: "destructive" });
      return;
    }
    setItems(data ?? []);
  }, [toast]);

  useEffect(() => {
    load();
  }, [load]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const payload = {
      title: form.title.trim(),
      slug: (form.slug.trim() || slugify(form.title)).trim(),
      excerpt: form.excerpt.trim() || null,
      content: form.content,
      cover_image_url: form.cover_image_url.trim() || null,
      linkedin_url: form.linkedin_url.trim() || null,
      author: form.author.trim() || null,
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      published_at: form.published_at ? new Date(form.published_at).toISOString() : new Date().toISOString(),
      display_order: Number(form.display_order) || 0,
      published: form.published,
    };
    const { error } = form.id
      ? await supabase.from("blog_posts").update(payload).eq("id", form.id)
      : await supabase.from("blog_posts").insert(payload);
    setBusy(false);
    if (error) {
      toast({ title: "Save failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: form.id ? "Blog post updated" : "Blog post published" });
    setForm(emptyForm);
    await load();
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) {
      toast({ title: "Delete failed", description: error.message, variant: "destructive" });
      return;
    }
    if (form.id === id) setForm(emptyForm);
    await load();
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSave} className="bg-card rounded-3xl p-8 shadow-card border border-border/50 space-y-5">
        <h2 className="text-xl font-semibold text-foreground">
          {form.id ? "Edit blog post" : "Add a blog post"}
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="bp-title">Title *</Label>
            <Input id="bp-title" required maxLength={200} value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="bp-slug">URL slug</Label>
            <Input id="bp-slug" maxLength={100} placeholder="auto-generated from title"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="bp-linkedin">LinkedIn post URL</Label>
            <Input id="bp-linkedin" type="url" placeholder="https://www.linkedin.com/posts/..."
              value={form.linkedin_url}
              onChange={(e) => setForm({ ...form, linkedin_url: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="bp-cover">Cover image URL</Label>
            <Input id="bp-cover" type="url" value={form.cover_image_url}
              onChange={(e) => setForm({ ...form, cover_image_url: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="bp-author">Author</Label>
            <Input id="bp-author" maxLength={120} value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="bp-tags">Tags (comma separated)</Label>
            <Input id="bp-tags" value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })} className="mt-1" />
          </div>
        </div>

        <div>
          <Label htmlFor="bp-excerpt">Short summary</Label>
          <Textarea id="bp-excerpt" rows={2} maxLength={400} value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })} className="mt-1" />
        </div>

        <div>
          <Label htmlFor="bp-content">Post content</Label>
          <Textarea id="bp-content" rows={10} value={form.content}
            placeholder="Paste the full LinkedIn post text here."
            onChange={(e) => setForm({ ...form, content: e.target.value })} className="mt-1" />
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-end">
          <div>
            <Label htmlFor="bp-date">Publish date</Label>
            <Input id="bp-date" type="date" value={form.published_at}
              onChange={(e) => setForm({ ...form, published_at: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="bp-order">Display order</Label>
            <Input id="bp-order" type="number" value={form.display_order}
              onChange={(e) => setForm({ ...form, display_order: Number(e.target.value) })} className="mt-1" />
          </div>
          <div className="flex items-center gap-3">
            <Switch id="bp-published" checked={form.published}
              onCheckedChange={(v) => setForm({ ...form, published: v })} />
            <Label htmlFor="bp-published">Published on the website</Label>
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit" variant="gradient" className="gap-2 rounded-full border-2" disabled={busy}>
            {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            {form.id ? "Save changes" : "Add blog post"}
          </Button>
          {form.id && (
            <Button type="button" variant="outline" className="rounded-full border-2"
              onClick={() => setForm(emptyForm)}>
              Cancel
            </Button>
          )}
        </div>
      </form>

      <div className="space-y-4">
        {items.length === 0 && <p className="text-muted-foreground">No blog posts yet.</p>}
        {items.map((p) => (
          <div key={p.id} className="bg-card rounded-2xl p-6 border border-border/50 shadow-card flex gap-6 items-start">
            <div className="flex-1">
              <div className="font-semibold text-foreground">
                {p.title}{" "}
                {!p.published && <span className="text-xs text-muted-foreground">(draft)</span>}
              </div>
              {p.excerpt && <p className="text-sm text-muted-foreground mt-1">{p.excerpt}</p>}
              <div className="text-xs text-muted-foreground mt-2 flex items-center gap-3">
                <span>{new Date(p.published_at).toLocaleDateString()}</span>
                {p.linkedin_url && (
                  <span className="inline-flex items-center gap-1">
                    <Linkedin className="w-3 h-3" /> linked
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" onClick={() => setForm({
                id: p.id,
                title: p.title,
                slug: p.slug,
                excerpt: p.excerpt ?? "",
                content: p.content ?? "",
                cover_image_url: p.cover_image_url ?? "",
                linkedin_url: p.linkedin_url ?? "",
                author: p.author ?? "",
                tags: (p.tags ?? []).join(", "),
                published_at: p.published_at ? p.published_at.slice(0, 10) : "",
                display_order: p.display_order,
                published: p.published,
              })}>
                <Pencil className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" onClick={() => handleDelete(p.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostsManager;
