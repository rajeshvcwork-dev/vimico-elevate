
create policy "Public can read testimonial logos" on storage.objects for select using (bucket_id = 'testimonial-logos');
create policy "Admins can upload testimonial logos" on storage.objects for insert to authenticated with check (bucket_id = 'testimonial-logos' and public.has_role(auth.uid(),'admin'));
create policy "Admins can update testimonial logos" on storage.objects for update to authenticated using (bucket_id = 'testimonial-logos' and public.has_role(auth.uid(),'admin'));
create policy "Admins can delete testimonial logos" on storage.objects for delete to authenticated using (bucket_id = 'testimonial-logos' and public.has_role(auth.uid(),'admin'));
