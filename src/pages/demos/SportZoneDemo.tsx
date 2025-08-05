import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, Target, Zap, ShoppingCart, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SportZoneDemo = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Pro Runner X1 Shoes",
      price: "$159",
      originalPrice: "$199",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      category: "Footwear",
      rating: 4.9,
      reviews: 234,
      brand: "Nike"
    },
    {
      id: 2,
      name: "Wireless Sport Earbuds",
      price: "$89",
      originalPrice: "$129",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      category: "Electronics",
      rating: 4.7,
      reviews: 156,
      brand: "Sony"
    },
    {
      id: 3,
      name: "Performance Training Set",
      price: "$79",
      originalPrice: "$99",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      category: "Apparel",
      rating: 4.8,
      reviews: 89,
      brand: "Adidas"
    },
    {
      id: 4,
      name: "Smart Fitness Watch",
      price: "$299",
      originalPrice: "$399",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      category: "Wearables",
      rating: 4.9,
      reviews: 445,
      brand: "Apple"
    }
  ];

  const sports = [
    { name: "Running", icon: Target, color: "bg-red-500" },
    { name: "Basketball", icon: Trophy, color: "bg-orange-500" },
    { name: "Soccer", icon: Zap, color: "bg-green-500" },
    { name: "Tennis", icon: Target, color: "bg-blue-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950 dark:to-red-950">
      {/* Header */}
      <header className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-orange-200 dark:border-orange-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold text-orange-800 dark:text-orange-200 flex items-center gap-2">
              <Trophy className="w-6 h-6" />
              SportZone
            </h1>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20" />
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-orange-900 dark:text-orange-100 mb-6">
              Unleash Your
              <span className="block text-orange-600 dark:text-orange-400">Potential</span>
            </h2>
            <p className="text-xl text-orange-700 dark:text-orange-300 mb-8 max-w-2xl mx-auto">
              Premium sports gear and equipment to help you reach your fitness goals and dominate your sport.
            </p>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg">
              Shop Sports Gear
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sports Categories */}
      <section className="py-16 px-4 bg-white/50 dark:bg-black/20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-orange-900 dark:text-orange-100 mb-12">Shop by Sport</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {sports.map((sport, index) => (
              <motion.div
                key={sport.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/80 dark:bg-black/40 border-orange-200 dark:border-orange-800 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className={`${sport.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <sport.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-orange-900 dark:text-orange-100">{sport.name}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-orange-900 dark:text-orange-100 mb-12">Top Performers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-black/40 border-orange-200 dark:border-orange-800 group">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-600 text-white">Best Seller</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        {product.category}
                      </Badge>
                      <span className="text-sm text-orange-600 dark:text-orange-400 font-medium">{product.brand}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-2">{product.name}</h4>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-orange-600 dark:text-orange-400">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-orange-900 dark:text-orange-100">{product.price}</span>
                        <span className="text-sm text-orange-500 line-through">{product.originalPrice}</span>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white"
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

      {/* Performance Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Trusted by Athletes Worldwide</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">500K+</div>
              <p className="text-orange-100">Active Athletes</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-orange-100">Customer Satisfaction</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">1M+</div>
              <p className="text-orange-100">Products Sold</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportZoneDemo;