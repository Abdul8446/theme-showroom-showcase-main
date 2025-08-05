import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const themes = [
  {
    id: 1,
    name: "Luxe Fashion",
    category: "Fashion",
    price: "$89",
    rating: 4.9,
    sales: "2.4k",
    preview: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    description: "Elegant fashion store with premium aesthetics",
    features: ["Mobile Responsive", "Fast Loading", "SEO Optimized"]
  },
  {
    id: 2,
    name: "TechCore",
    category: "Electronics",
    price: "$99",
    rating: 4.8,
    sales: "1.8k",
    preview: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    description: "Modern tech store with clean design",
    features: ["Dark Mode", "Product Filters", "Quick View"]
  },
  {
    id: 3,
    name: "GreenLife",
    category: "Lifestyle",
    price: "$79",
    rating: 4.7,
    sales: "3.2k",
    preview: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
    description: "Eco-friendly store with natural vibes",
    features: ["Eco Theme", "Subscription Box", "Blog Integration"]
  },
  {
    id: 4,
    name: "SportZone",
    category: "Sports",
    price: "$94",
    rating: 4.9,
    sales: "1.5k",
    preview: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    description: "Dynamic sports store with energy",
    features: ["Size Guide", "Wishlist", "Live Chat"]
  }
];

const ThemeShowcase = () => {
  const navigate = useNavigate();

  const handleViewTheme = (themeId: number) => {
    // Navigate to internal demo pages
    const demoRoutes = {
      1: '/demo/luxe-fashion',
      2: '/demo/techcore', 
      3: '/demo/greenlife',
      4: '/demo/sportzone'
    };
    navigate(demoRoutes[themeId as keyof typeof demoRoutes] || '/');
  };

  return (
    <section id="themes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Premium Themes Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Handcrafted themes designed to convert visitors into customers. Each theme is optimized for performance and user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden group cursor-pointer shadow-card hover:shadow-glow transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src={theme.preview} 
                    alt={theme.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {theme.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{theme.rating}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{theme.name}</h3>
                    <span className="text-lg font-bold text-primary">{theme.price}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm">{theme.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {theme.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{theme.sales} sales</span>
                    <Button 
                      size="sm" 
                      className="group"
                      onClick={() => handleViewTheme(theme.id)}
                    >
                      Live Preview
                      <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button size="lg" variant="outline" className="group">
            View All Themes
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ThemeShowcase;