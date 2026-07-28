
create type public.app_role as enum ('admin','user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

create policy "Users can read own roles" on public.user_roles for select to authenticated using (auth.uid() = user_id);

create table public.testimonials (
  id uuid primary key default gen_random_uuid(),
  brand_name text not null,
  logo_url text,
  quote text not null,
  person_name text not null,
  person_title text,
  website_url text,
  display_order integer not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.testimonials to anon;
grant select, insert, update, delete on public.testimonials to authenticated;
grant all on public.testimonials to service_role;
alter table public.testimonials enable row level security;

create policy "Anyone can view published testimonials" on public.testimonials for select using (published = true or public.has_role(auth.uid(),'admin'));
create policy "Admins can insert testimonials" on public.testimonials for insert to authenticated with check (public.has_role(auth.uid(),'admin'));
create policy "Admins can update testimonials" on public.testimonials for update to authenticated using (public.has_role(auth.uid(),'admin'));
create policy "Admins can delete testimonials" on public.testimonials for delete to authenticated using (public.has_role(auth.uid(),'admin'));

create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = public as $$
begin new.updated_at = now(); return new; end; $$;

create trigger testimonials_updated_at before update on public.testimonials
for each row execute function public.set_updated_at();
