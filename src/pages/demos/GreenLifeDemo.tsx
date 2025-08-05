import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Leaf, Recycle, Heart, ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const GreenLifeDemo = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Bamboo Fiber Bedding Set",
      price: "$89",
      originalPrice: "$120",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      category: "Bedding",
      ecoRating: 5,
      material: "100% Organic Bamboo"
    },
    {
      id: 2,
      name: "Reusable Glass Water Bottles",
      price: "$34",
      originalPrice: "$45",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
      category: "Kitchen",
      ecoRating: 5,
      material: "Borosilicate Glass"
    },
    {
      id: 3,
      name: "Organic Cotton Tote Bag",
      price: "$19",
      originalPrice: "$28",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      category: "Accessories",
      ecoRating: 4,
      material: "Organic Cotton"
    },
    {
      id: 4,
      name: "Solar Power Bank",
      price: "$65",
      originalPrice: "$85",
      image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400&h=300&fit=crop",
      category: "Electronics",
      ecoRating: 5,
      material: "Recycled Plastic"
    }
  ];

  const features = [
    {
      icon: Leaf,
      title: "100% Organic",
      description: "All products made from natural, organic materials"
    },
    {
      icon: Recycle,
      title: "Zero Waste",
      description: "Sustainable packaging and production processes"
    },
    {
      icon: Heart,
      title: "Ethically Sourced",
      description: "Fair trade and ethically sourced materials"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-950">
      {/* Header */}
      <header className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-green-200 dark:border-green-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold text-green-800 dark:text-green-200 flex items-center gap-2">
              <Leaf className="w-6 h-6" />
              GreenLife
            </h1>
            <Button variant="ghost" size="sm">
              <ShoppingBag className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-green-900 dark:text-green-100 mb-6">
              Live
              <span className="block text-green-600 dark:text-green-400">Sustainably</span>
            </h2>
            <p className="text-xl text-green-700 dark:text-green-300 mb-8 max-w-2xl mx-auto">
              Discover eco-friendly products that help you live a more sustainable lifestyle while protecting our planet.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg">
              Shop Eco-Friendly
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/50 dark:bg-black/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">{feature.title}</h3>
                <p className="text-green-600 dark:text-green-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-green-900 dark:text-green-100 mb-12">Eco-Friendly Collection</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-black/40 border-green-200 dark:border-green-800 group">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-600 text-white">Eco-Friendly</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                        {[...Array(product.ecoRating)].map((_, i) => (
                          <Leaf key={i} className="w-3 h-3 fill-green-500 text-green-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="text-green-600 border-green-600 mb-2">
                      {product.category}
                    </Badge>
                    <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">{product.name}</h4>
                    <p className="text-sm text-green-600 dark:text-green-400 mb-4">{product.material}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-green-900 dark:text-green-100">{product.price}</span>
                        <span className="text-sm text-green-500 line-through">{product.originalPrice}</span>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Our Environmental Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <p className="text-green-100">Plastic bottles saved</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25,000kg</div>
              <p className="text-green-100">CO2 emissions reduced</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-green-100">Trees planted</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreenLifeDemo;