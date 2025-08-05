import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Zap, Palette, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

const themeData = {
  1: {
    name: "Luxe Fashion",
    category: "Fashion",
    price: "$89",
    rating: 4.9,
    reviews: 847,
    sales: "2.4k",
    preview: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
    description: "Luxe Fashion is a premium ecommerce theme designed for high-end fashion retailers. With its sophisticated design and advanced features, it's perfect for brands that want to showcase their products with elegance and style.",
    features: [
      { icon: Smartphone, title: "Mobile Responsive", desc: "Optimized for all devices" },
      { icon: Zap, title: "Fast Loading", desc: "Lightning-fast performance" },
      { icon: Palette, title: "Customizable", desc: "Easy color and layout options" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop"
    ]
  },
  2: {
    name: "TechCore",
    category: "Electronics",
    price: "$99",
    rating: 4.8,
    reviews: 623,
    sales: "1.8k",
    preview: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
    description: "TechCore is a modern, sleek theme designed for electronics and gadget stores. With its clean interface and powerful features, it's perfect for showcasing the latest technology products.",
    features: [
      { icon: Smartphone, title: "Dark Mode", desc: "Beautiful dark theme option" },
      { icon: Zap, title: "Product Filters", desc: "Advanced filtering system" },
      { icon: Palette, title: "Quick View", desc: "Instant product previews" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    ]
  },
  3: {
    name: "GreenLife",
    category: "Lifestyle",
    price: "$79",
    rating: 4.7,
    reviews: 934,
    sales: "3.2k",
    preview: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop",
    description: "GreenLife is an eco-friendly theme perfect for sustainable and lifestyle brands. With its natural design and environmental focus, it's ideal for businesses promoting green living.",
    features: [
      { icon: Smartphone, title: "Eco Theme", desc: "Environmentally conscious design" },
      { icon: Zap, title: "Subscription Box", desc: "Built-in subscription features" },
      { icon: Palette, title: "Blog Integration", desc: "Seamless content management" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=400&fit=crop"
    ]
  },
  4: {
    name: "SportZone",
    category: "Sports",
    price: "$94",
    rating: 4.9,
    reviews: 756,
    sales: "1.5k",
    preview: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
    description: "SportZone is a dynamic, energetic theme designed for sports and fitness retailers. With its bold design and athletic aesthetic, it's perfect for showcasing sports equipment and apparel.",
    features: [
      { icon: Smartphone, title: "Size Guide", desc: "Interactive size charts" },
      { icon: Zap, title: "Wishlist", desc: "Advanced wishlist functionality" },
      { icon: Palette, title: "Live Chat", desc: "Real-time customer support" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop"
    ]
  }
};

const ThemeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const theme = themeData[Number(id) as keyof typeof themeData];

  if (!theme) {
    return <div>Theme not found</div>;
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <motion.div 
        className="bg-muted/30 py-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Themes
          </Button>
          
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{theme.category}</Badge>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{theme.rating}</span>
              <span className="text-muted-foreground">({theme.reviews} reviews)</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{theme.name}</h1>
          
          <div className="flex items-center gap-6">
            <span className="text-3xl font-bold text-primary">{theme.price}</span>
            <span className="text-muted-foreground">{theme.sales} sales</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Gallery */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <img 
                src={theme.preview} 
                alt={theme.name}
                className="w-full rounded-lg shadow-glow"
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {theme.gallery.map((image, index) => (
                <motion.img 
                  key={index}
                  src={image} 
                  alt={`${theme.name} preview ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="sticky top-24 shadow-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-bold text-primary">{theme.price}</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Button size="lg" className="w-full mb-4 group">
                  <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Purchase Theme
                </Button>

                <Button size="lg" variant="outline" className="w-full mb-6">
                  Live Preview
                </Button>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Features</h3>
                  <div className="space-y-4">
                    {theme.features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      >
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <feature.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="shadow-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">About {theme.name}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {theme.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ThemeDetails;