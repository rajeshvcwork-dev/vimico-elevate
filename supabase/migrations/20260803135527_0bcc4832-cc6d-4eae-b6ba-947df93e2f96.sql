ALTER TABLE public.testimonials ADD COLUMN IF NOT EXISTS rating numeric(2,1);

INSERT INTO public.testimonials (brand_name, quote, person_name, person_title, website_url, rating, display_order, published)
SELECT 'GripNova', 'Vimico delivered our website end to end with real ownership — clear discovery, fast iterations, and a polished, responsive site that reflects our brand and converts visitors into patients. Communication was excellent throughout and the result exceeded what we expected.', 'Client Sponsor', 'Founder, GripNova', 'https://gripnova.com', 4.5, 0, true
WHERE NOT EXISTS (SELECT 1 FROM public.testimonials WHERE brand_name = 'GripNova');