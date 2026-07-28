import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export const ADMIN_EMAIL = "administrator@vimico.in";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    { auth: { persistSession: false } },
  );

  try {
    // Does an admin already exist?
    const { count, error: countError } = await admin
      .from("user_roles")
      .select("id", { count: "exact", head: true })
      .eq("role", "admin");

    if (countError) throw countError;

    if (req.method === "GET") {
      return json({ initialized: (count ?? 0) > 0, adminEmail: ADMIN_EMAIL });
    }

    if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

    if ((count ?? 0) > 0) {
      return json({ error: "Administrator account already exists." }, 409);
    }

    const { password } = await req.json().catch(() => ({ password: "" }));

    if (typeof password !== "string" || password.length < 10 || password.length > 200) {
      return json({ error: "Password must be between 10 and 200 characters." }, 400);
    }

    const { data: created, error: createError } = await admin.auth.admin.createUser({
      email: ADMIN_EMAIL,
      password,
      email_confirm: true,
      user_metadata: { username: "administrator" },
    });

    if (createError || !created?.user) {
      return json({ error: createError?.message ?? "Could not create account." }, 400);
    }

    const { error: roleError } = await admin
      .from("user_roles")
      .insert({ user_id: created.user.id, role: "admin" });

    if (roleError) {
      await admin.auth.admin.deleteUser(created.user.id);
      return json({ error: roleError.message }, 400);
    }

    return json({ success: true, adminEmail: ADMIN_EMAIL });
  } catch (e) {
    console.error("admin-bootstrap error", e);
    return json({ error: "Unexpected error." }, 500);
  }
});