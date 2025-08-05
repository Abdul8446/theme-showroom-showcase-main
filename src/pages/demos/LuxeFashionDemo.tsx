import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, ShoppingBag, Star, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LuxeFashionDemo = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Silk Evening Dress",
      price: "$299",
      originalPrice: "$399",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 2,
      name: "Cashmere Coat",
      price: "$599",
      originalPrice: "$799",
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 3,
      name: "Designer Handbag",
      price: "$899",
      originalPrice: "$1199",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop",
      rating: 5.0,
      reviews: 67
    },
    {
      id: 4,
      name: "Pearl Necklace",
      price: "$199",
      originalPrice: "$299",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop",
      rating: 4.7,
      reviews: 45
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-950 dark:to-pink-950">
      {/* Header */}
      <header className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-rose-200 dark:border-rose-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold text-rose-800 dark:text-rose-200">Luxe Fashion</h1>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <ShoppingBag className="w-4 h-4" />
              </Button>
            </div>
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
            <h2 className="text-5xl md:text-7xl font-bold text-rose-900 dark:text-rose-100 mb-6">
              Elegance
              <span className="block text-rose-600 dark:text-rose-400">Redefined</span>
            </h2>
            <p className="text-xl text-rose-700 dark:text-rose-300 mb-8 max-w-2xl mx-auto">
              Discover our exclusive collection of luxury fashion pieces, crafted with the finest materials and timeless design.
            </p>
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white shadow-lg">
              Shop Collection
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white/50 dark:bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Truck className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-lg font-semibold text-rose-800 dark:text-rose-200 mb-2">Free Shipping</h3>
              <p className="text-rose-600 dark:text-rose-400">On orders over $200</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-lg font-semibold text-rose-800 dark:text-rose-200 mb-2">Premium Quality</h3>
              <p className="text-rose-600 dark:text-rose-400">Handcrafted excellence</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-lg font-semibold text-rose-800 dark:text-rose-200 mb-2">Lifetime Support</h3>
              <p className="text-rose-600 dark:text-rose-400">Expert care & guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-rose-900 dark:text-rose-100 mb-12">Featured Collection</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-black/40 border-rose-200 dark:border-rose-800">
                  <div className="relative group">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-rose-600 text-white">Sale</Badge>
                    </div>
                    <Button 
                      size="sm" 
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-rose-600 hover:bg-rose-700"
                    >
                      Add to Cart
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-rose-900 dark:text-rose-100 mb-2">{product.name}</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-rose-600 dark:text-rose-400">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-rose-900 dark:text-rose-100">{product.price}</span>
                        <span className="text-sm text-rose-500 line-through">{product.originalPrice}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuxeFashionDemo;