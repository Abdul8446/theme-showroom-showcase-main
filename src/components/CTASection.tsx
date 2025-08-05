import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <Card className="bg-gradient-primary border-0 text-center">
          <CardContent className="p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that trust Nexa Commerce 
              for their ecommerce solutions. Start your journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="lg" className="group">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                <Mail className="w-4 h-4" />
                Get in Touch
              </Button>
            </div>
            
            <div className="mt-8 text-white/80 text-sm">
              Free consultation • 30-day money back guarantee
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;