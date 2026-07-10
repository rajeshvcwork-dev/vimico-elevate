import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

// Escape HTML entities to prevent injection into email HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return String(text).replace(/[&<>"']/g, (m) => map[m]);
}

// Simple in-memory IP-based rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(identifier: string, maxRequests = 5, windowMs = 3600000): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limit by client IP to prevent spam/abuse
    const clientIP =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    if (!checkRateLimit(clientIP)) {
      console.warn("Rate limit exceeded for IP:", clientIP);
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, company, phone, service, message }: ContactFormRequest = await req.json();

    console.log("Received contact form submission:", { name, email, company, service });

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format:", email);
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Escape all user-provided values before embedding into HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = company ? escapeHtml(company) : "";
    const safePhone = phone ? escapeHtml(phone) : "";
    const safeService = service ? escapeHtml(service) : "";
    const safeMessage = escapeHtml(message);

    // Send notification email to Vimico
    const notificationEmail = await resend.emails.send({
      from: "Vimico Website <onboarding@resend.dev>",
      to: ["care@vimico.in"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #e5e7eb;" />
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            ${safeCompany ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ""}
            ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ""}
            ${safeService ? `<p><strong>Service Interest:</strong> ${safeService}</p>` : ""}
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="color: #4b5563; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          
          <hr style="border: 1px solid #e5e7eb; margin-top: 30px;" />
          <p style="color: #9ca3af; font-size: 12px;">
            This email was sent from the Vimico website contact form.
          </p>
        </div>
      `,
    });

    console.log("Notification email sent to Vimico:", notificationEmail);

    // Send confirmation email to the customer
    const confirmationEmail = await resend.emails.send({
      from: "Vimico <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Vimico!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f;">Thank You, ${safeName}!</h2>
          
          <p style="color: #4b5563; line-height: 1.6;">
            We have received your message and appreciate you reaching out to us. 
            Our team will review your inquiry and get back to you within 1-2 business days.
          </p>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Your Message:</h3>
            <p style="color: #4b5563; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          
          <p style="color: #4b5563; line-height: 1.6;">
            In the meantime, feel free to explore our services and portfolio on our website.
          </p>
          
          <hr style="border: 1px solid #e5e7eb; margin-top: 30px;" />
          <p style="color: #9ca3af; font-size: 12px;">
            Best regards,<br />
            The Vimico Team<br />
            <a href="mailto:care@vimico.in" style="color: #e91e63;">care@vimico.in</a>
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent to customer:", confirmationEmail);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Your message has been sent successfully!" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
