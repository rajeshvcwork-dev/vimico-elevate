import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Loader2, LogOut, Plus, Trash2, Pencil, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Testimonial } from "./Testimonials";

const ADMIN_USERNAME = "administrator";
const ADMIN_EMAIL = "administrator@vimico.in";
const LOGO_BUCKET = "testimonial-logos";
const TEN_YEARS = 60 * 60 * 24 * 365 * 10;

interface FormState {
  id?: string;
  brand_name: string;
  quote: string;
  person_name: string;
  person_title: string;
  website_url: string;
  logo_url: string;
  rating: string;
  display_order: number;
  published: boolean;
}

const emptyForm: FormState = {
  brand_name: "",
  quote: "",
  person_name: "",
  person_title: "",
  website_url: "",
  logo_url: "",
  rating: "",
  display_order: 0,
  published: true,
};

const Admin = () => {
  const { toast } = useToast();
  const [checking, setChecking] = useState(true);
  const [initialized, setInitialized] = useState<boolean | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [items, setItems] = useState<Testimonial[]>([]);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [uploading, setUploading] = useState(false);

  const loadTestimonials = useCallback(async () => {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("display_order", { ascending: true });
    if (error) {
      toast({ title: "Could not load testimonials", description: error.message, variant: "destructive" });
      return;
    }
    setItems((data as Testimonial[]) ?? []);
  }, [toast]);

  const refreshSession = useCallback(async () => {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      setIsAdmin(false);
      return;
    }
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userData.user.id)
      .eq("role", "admin")
      .maybeSingle();
    const admin = !!roles;
    setIsAdmin(admin);
    if (admin) await loadTestimonials();
  }, [loadTestimonials]);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      setTimeout(() => { refreshSession(); }, 0);
    });
    (async () => {
      try {
        const { data } = await supabase.functions.invoke("admin-bootstrap", { method: "GET" });
        setInitialized(!!data?.initialized);
      } catch {
        setInitialized(true);
      }
      await refreshSession();
      setChecking(false);
    })();
    return () => sub.subscription.unsubscribe();
  }, [refreshSession]);

  const handleBootstrap = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const { data, error } = await supabase.functions.invoke("admin-bootstrap", {
      body: { password },
    });
    setBusy(false);
    if (error || data?.error) {
      toast({
        title: "Could not create administrator",
        description: data?.error ?? error?.message,
        variant: "destructive",
      });
      return;
    }
    toast({ title: "Administrator created", description: "You can now sign in." });
    setInitialized(true);
    setPassword("");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: ADMIN_EMAIL,
      password,
    });
    setBusy(false);
    if (error) {
      toast({ title: "Sign in failed", description: error.message, variant: "destructive" });
      return;
    }
    setPassword("");
    await refreshSession();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
    setItems([]);
  };

  const handleLogoUpload = async (file: File) => {
    setUploading(true);
    const ext = file.name.split(".").pop() ?? "png";
    const path = `${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage.from(LOGO_BUCKET).upload(path, file, {
      cacheControl: "3600",
      upsert: false,
    });
    if (error) {
      setUploading(false);
      toast({ title: "Upload failed", description: error.message, variant: "destructive" });
      return;
    }
    const { data: signed } = await supabase.storage
      .from(LOGO_BUCKET)
      .createSignedUrl(path, TEN_YEARS);
    setUploading(false);
    if (signed?.signedUrl) {
      setForm((f) => ({ ...f, logo_url: signed.signedUrl }));
      toast({ title: "Logo uploaded" });
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const payload = {
      brand_name: form.brand_name.trim(),
      quote: form.quote.trim(),
      person_name: form.person_name.trim(),
      person_title: form.person_title.trim() || null,
      website_url: form.website_url.trim() || null,
      logo_url: form.logo_url.trim() || null,
      rating: form.rating.trim() ? Number(form.rating) : null,
      display_order: Number(form.display_order) || 0,
      published: form.published,
    };
    const { error } = form.id
      ? await supabase.from("testimonials").update(payload).eq("id", form.id)
      : await supabase.from("testimonials").insert(payload);
    setBusy(false);
    if (error) {
      toast({ title: "Save failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: form.id ? "Testimonial updated" : "Testimonial added" });
    setForm(emptyForm);
    await loadTestimonials();
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("testimonials").delete().eq("id", id);
    if (error) {
      toast({ title: "Delete failed", description: error.message, variant: "destructive" });
      return;
    }
    if (form.id === id) setForm(emptyForm);
    await loadTestimonials();
  };

  const shell = (children: React.ReactNode) => (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Administrator | Vimico</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 container mx-auto px-4 lg:px-8">{children}</main>
      <Footer />
    </div>
  );

  if (checking) {
    return shell(
      <div className="flex justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>,
    );
  }

  if (!isAdmin) {
    const firstRun = initialized === false;
    return shell(
      <div className="max-w-md mx-auto bg-card rounded-3xl p-8 shadow-card border border-border/50">
        <ShieldCheck className="w-10 h-10 text-primary mb-4" />
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {firstRun ? "Create administrator account" : "Administrator sign in"}
        </h1>
        <p className="text-muted-foreground text-sm mb-6">
          {firstRun
            ? "Set the password for the administrator account. It is stored securely (hashed) in the backend — never in the code."
            : "Sign in to manage testimonials."}
        </p>
        <form onSubmit={firstRun ? handleBootstrap : handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="username">User ID</Label>
            <Input id="username" value={ADMIN_USERNAME} readOnly className="mt-1 bg-muted/50" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete={firstRun ? "new-password" : "current-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={firstRun ? 10 : undefined}
              required
              className="mt-1"
            />
            {firstRun && (
              <p className="text-xs text-muted-foreground mt-1">Minimum 10 characters.</p>
            )}
          </div>
          <Button type="submit" variant="gradient" className="w-full rounded-full border-2" disabled={busy}>
            {busy && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
            {firstRun ? "Create administrator" : "Sign in"}
          </Button>
        </form>
      </div>,
    );
  }

  return shell(
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Testimonials</h1>
          <p className="text-muted-foreground text-sm">Signed in as {ADMIN_USERNAME}</p>
        </div>
        <Button variant="outline" className="gap-2 rounded-full border-2" onClick={handleLogout}>
          <LogOut className="w-4 h-4" /> Sign out
        </Button>
      </div>

      <form onSubmit={handleSave} className="bg-card rounded-3xl p-8 shadow-card border border-border/50 space-y-5">
        <h2 className="text-xl font-semibold text-foreground">
          {form.id ? "Edit testimonial" : "Add a testimonial"}
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="brand">Brand name *</Label>
            <Input id="brand" required maxLength={120} value={form.brand_name}
              onChange={(e) => setForm({ ...form, brand_name: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="site">Company / product website</Label>
            <Input id="site" type="url" maxLength={300} placeholder="https://example.com"
              value={form.website_url}
              onChange={(e) => setForm({ ...form, website_url: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="person">Person's name *</Label>
            <Input id="person" required maxLength={120} value={form.person_name}
              onChange={(e) => setForm({ ...form, person_name: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="title">Title / designation</Label>
            <Input id="title" maxLength={120} value={form.person_title}
              onChange={(e) => setForm({ ...form, person_title: e.target.value })} className="mt-1" />
          </div>
        </div>

        <div>
          <Label htmlFor="quote">Short description *</Label>
          <Textarea id="quote" required maxLength={800} rows={4} value={form.quote}
            onChange={(e) => setForm({ ...form, quote: e.target.value })} className="mt-1" />
        </div>

        <div className="grid md:grid-cols-2 gap-5 items-start">
          <div>
            <Label htmlFor="logo">Company logo</Label>
            <Input id="logo" type="file" accept="image/*" className="mt-1"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleLogoUpload(f); }} />
            {uploading && <p className="text-xs text-muted-foreground mt-1">Uploading…</p>}
            {form.logo_url && (
              <img src={form.logo_url} alt="Logo preview" className="mt-3 max-h-16 w-auto object-contain" />
            )}
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="rating">Rating (out of 5)</Label>
              <Input id="rating" type="number" step="0.1" min="0" max="5" value={form.rating}
                onChange={(e) => setForm({ ...form, rating: e.target.value })} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="order">Display order</Label>
              <Input id="order" type="number" value={form.display_order}
                onChange={(e) => setForm({ ...form, display_order: Number(e.target.value) })} className="mt-1" />
            </div>
            <div className="flex items-center gap-3">
              <Switch id="published" checked={form.published}
                onCheckedChange={(v) => setForm({ ...form, published: v })} />
              <Label htmlFor="published">Published on the website</Label>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit" variant="gradient" className="gap-2 rounded-full border-2" disabled={busy}>
            {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            {form.id ? "Save changes" : "Add testimonial"}
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
        {items.length === 0 && (
          <p className="text-muted-foreground">No testimonials yet.</p>
        )}
        {items.map((t) => (
          <div key={t.id} className="bg-card rounded-2xl p-6 border border-border/50 shadow-card flex gap-6 items-start">
            {t.logo_url && (
              <img src={t.logo_url} alt={`${t.brand_name} logo`} className="h-12 w-auto object-contain" />
            )}
            <div className="flex-1">
              <div className="font-semibold text-foreground">
                {t.brand_name}{" "}
                {!t.published && <span className="text-xs text-muted-foreground">(draft)</span>}
              </div>
              <p className="text-sm text-muted-foreground italic mt-1">"{t.quote}"</p>
              <div className="text-sm text-foreground mt-2">
                {t.person_name}
                {t.person_title ? `, ${t.person_title}` : ""}
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" onClick={() => setForm({
                id: t.id,
                brand_name: t.brand_name,
                quote: t.quote,
                person_name: t.person_name,
                person_title: t.person_title ?? "",
                website_url: t.website_url ?? "",
                logo_url: t.logo_url ?? "",
                rating: t.rating != null ? String(t.rating) : "",
                display_order: t.display_order,
                published: t.published,
              })}>
                <Pencil className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" onClick={() => handleDelete(t.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>,
  );
};

export default Admin;