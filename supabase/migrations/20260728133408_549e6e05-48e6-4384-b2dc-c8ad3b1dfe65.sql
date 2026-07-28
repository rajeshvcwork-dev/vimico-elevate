
drop policy "Anyone can view published testimonials" on public.testimonials;
create policy "Anyone can view published testimonials" on public.testimonials for select using (published = true);
create policy "Admins can view all testimonials" on public.testimonials for select to authenticated using (public.has_role(auth.uid(),'admin'));
revoke execute on function public.has_role(uuid, public.app_role) from anon, public;
grant execute on function public.has_role(uuid, public.app_role) to authenticated, service_role;
