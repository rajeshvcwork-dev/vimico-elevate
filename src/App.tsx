import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Partnership from "./pages/Partnership";
import Products from "./pages/Products";
import Resellers from "./pages/Resellers";
import Marketing from "./pages/Marketing";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import ExpertTeam from "./pages/ExpertTeam";
import GlobalPartnership from "./pages/GlobalPartnership";
import Innovation from "./pages/Innovation";
import NotFound from "./pages/NotFound";

// Service Detail Pages
import AgileService from "./pages/services/AgileService";
import PowerBIService from "./pages/services/PowerBIService";
import DataSanityService from "./pages/services/DataSanityService";
import ComplianceService from "./pages/services/ComplianceService";
import WebsiteService from "./pages/services/WebsiteService";
import PortfolioService from "./pages/services/PortfolioService";
import JiraService from "./pages/services/JiraService";
import SupportService from "./pages/services/SupportService";
import ERPService from "./pages/services/ERPService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/products" element={<Products />} />
          <Route path="/resellers" element={<Resellers />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/expert-team" element={<ExpertTeam />} />
          <Route path="/global-partnership" element={<GlobalPartnership />} />
          <Route path="/innovation" element={<Innovation />} />
          
          {/* Service Detail Routes */}
          <Route path="/services/agile" element={<AgileService />} />
          <Route path="/services/powerbi" element={<PowerBIService />} />
          <Route path="/services/data-sanity" element={<DataSanityService />} />
          <Route path="/services/compliance" element={<ComplianceService />} />
          <Route path="/services/website" element={<WebsiteService />} />
          <Route path="/services/portfolio-sites" element={<PortfolioService />} />
          <Route path="/services/jira-salesforce" element={<JiraService />} />
          <Route path="/services/support-setup" element={<SupportService />} />
          <Route path="/services/erp" element={<ERPService />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
