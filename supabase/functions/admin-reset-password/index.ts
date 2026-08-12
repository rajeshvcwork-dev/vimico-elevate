import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const ADMIN_EMAIL = "administrator@vimico.in";

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  const secret = req.headers.get("x-reset-token");
  if (secret !== Deno.env.get("ADMIN_RESET_TOKEN")) {
    return new Response("Forbidden", { status: 403 });
  }
  const { password } = await req.json();
  if (typeof password !== "string" || password.length < 10) {
    return new Response("Bad password", { status: 400 });
  }
  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    { auth: { persistSession: false } },
  );
  const { data, error } = await admin.auth.admin.listUsers({ page: 1, perPage: 200 });
  if (error) return new Response(error.message, { status: 500 });
  const user = data.users.find((u) => u.email === ADMIN_EMAIL);
  if (!user) return new Response("Admin user not found", { status: 404 });
  const { error: upErr } = await admin.auth.admin.updateUserById(user.id, { password });
  if (upErr) return new Response(upErr.message, { status: 400 });
  return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
});
