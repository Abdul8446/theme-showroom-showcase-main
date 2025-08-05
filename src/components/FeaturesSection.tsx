import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Smartphone, 
  ShoppingCart, 
  Palette, 
  Lock, 
  TrendingUp 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with 95+ PageSpeed scores. Your customers won't wait."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive designs that look perfect on every device and screen size."
  },
  {
    icon: ShoppingCart,
    title: "Conversion Optimized", 
    description: "Built with proven UX patterns that turn visitors into paying customers."
  },
  {
    icon: Palette,
    title: "Easy Customization",
    description: "Flexible design system allows complete brand customization without coding."
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with PCI compliance and SSL integration."
  },
  {
    icon: TrendingUp,
    title: "SEO Optimized",
    description: "Built-in SEO best practices to help your store rank higher in search results."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Nexa Commerce?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't just create themes, we build complete ecommerce solutions 
            that drive growth and maximize your online potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border border-white/10 hover:bg-card/80 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;