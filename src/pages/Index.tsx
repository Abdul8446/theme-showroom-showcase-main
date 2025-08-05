import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThemeShowcase from "@/components/ThemeShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ThemeShowcase />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default Index;
