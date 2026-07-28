import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Partnership from "./pages/Partnership";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Admin from "./pages/Admin";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import ExpertTeam from "./pages/ExpertTeam";
import GlobalPartnership from "./pages/GlobalPartnership";
import Innovation from "./pages/Innovation";
import NotFound from "./pages/NotFound";

// Practice Area Pages (dynamic renderer)
import PracticeAreaPage from "./pages/services/PracticeAreaPage";
import { Navigate } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
         <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/resellers" element={<Navigate to="/partnership#reseller-products" replace />} />
          <Route path="/marketing" element={<Navigate to="/blogs" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/expert-team" element={<ExpertTeam />} />
          <Route path="/global-partnership" element={<GlobalPartnership />} />
          <Route path="/innovation" element={<Innovation />} />
          
          {/* Practice Area Routes (dynamic) */}
          <Route path="/services/:slug" element={<PracticeAreaPage />} />

          {/* Legacy redirects — map old slugs to new practice areas */}
          <Route path="/services/agile" element={<Navigate to="/services/delivery-excellence" replace />} />
          <Route path="/services/jira-salesforce" element={<Navigate to="/services/delivery-excellence" replace />} />
          <Route path="/services/support-setup" element={<Navigate to="/services/delivery-excellence" replace />} />
          <Route path="/services/portfolio-sites" element={<Navigate to="/services/website" replace />} />
          <Route path="/services/data-sanity" element={<Navigate to="/services/powerbi" replace />} />
          <Route path="/services/compliance" element={<Navigate to="/services/grc" replace />} />
          <Route path="/services/erp" element={<Navigate to="/services/business-transformation" replace />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
