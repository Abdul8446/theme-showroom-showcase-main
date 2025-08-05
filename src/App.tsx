import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LuxeFashionDemo from "./pages/demos/LuxeFashionDemo";
import TechCoreDemo from "./pages/demos/TechCoreDemo";
import GreenLifeDemo from "./pages/demos/GreenLifeDemo";
import SportZoneDemo from "./pages/demos/SportZoneDemo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/demo/luxe-fashion" element={<LuxeFashionDemo />} />
          <Route path="/demo/techcore" element={<TechCoreDemo />} />
          <Route path="/demo/greenlife" element={<GreenLifeDemo />} />
          <Route path="/demo/sportzone" element={<SportZoneDemo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
