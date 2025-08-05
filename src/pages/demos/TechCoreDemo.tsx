import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Monitor, Smartphone, Laptop, Headphones, ShoppingCart, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TechCoreDemo = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "MacBook Pro 16\"",
      price: "$2,399",
      specs: "M3 Pro, 18GB RAM, 512GB SSD",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      category: "Laptops",
      inStock: true
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: "$999",
      specs: "A17 Pro, 128GB, Titanium",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
      category: "Smartphones",
      inStock: true
    },
    {
      id: 3,
      name: "Dell UltraSharp 4K",
      price: "$649",
      specs: "32\" 4K, USB-C, HDR",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
      category: "Monitors",
      inStock: false
    },
    {
      id: 4,
      name: "Sony WH-1000XM5",
      price: "$399",
      specs: "Noise Cancelling, 30hrs Battery",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
      category: "Audio",
      inStock: true
    }
  ];

  const categories = [
    { name: "Laptops", icon: Laptop, count: 24 },
    { name: "Smartphones", icon: Smartphone, count: 18 },
    { name: "Monitors", icon: Monitor, count: 12 },
    { name: "Audio", icon: Headphones, count: 16 }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="text-white hover:bg-slate-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold text-blue-400">TechCore</h1>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <Button variant="ghost" size="sm" className="text-white hover:bg-slate-800">
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Tech
              <span className="block text-blue-400">Innovation</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Discover cutting-edge technology and premium electronics. From laptops to smartphones, we have everything you need.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
              Shop Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Shop by Category</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <category.icon className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-semibold text-white mb-2">{category.name}</h4>
                    <p className="text-slate-400">{category.count} products</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Featured Products</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-slate-800 border-slate-700 group">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant={product.inStock ? "default" : "destructive"} className="bg-blue-600">
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <Badge variant="outline" className="text-blue-400 border-blue-400 mb-2">
                        {product.category}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{product.name}</h4>
                    <p className="text-slate-400 text-sm mb-4">{product.specs}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-400">{product.price}</span>
                      <Button 
                        size="sm" 
                        disabled={!product.inStock}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-slate-900">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Upgrade Your Tech?</h3>
          <p className="text-xl text-slate-300 mb-8">Join thousands of satisfied customers who trust TechCore for their technology needs.</p>
          <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
            Start Shopping
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TechCoreDemo;