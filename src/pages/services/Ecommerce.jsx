import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, Package, TrendingUp, Check, ArrowRight } from 'lucide-react';
import MegaNavbar from '../../components/layout/MegaNavbar';
import NewFooter from '../../components/layout/NewFooter';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { HeroHighlight, Highlight } from '../../components/ui/hero-highlight';
import { ThreeDFeaturesGrid } from '../../components/ui/3d-feature-card';
import { Link } from 'react-router-dom';

const Ecommerce = () => {
  const features = [
    { icon: <ShoppingCart className="h-6 w-6 text-primary" />, title: "Complete Store Solution", description: "Product management, inventory, orders, and customer management all in one platform." },
    { icon: <CreditCard className="h-6 w-6 text-primary" />, title: "Payment Integration", description: "Accept payments via Stripe, PayPal, and 50+ payment gateways worldwide." },
    { icon: <Package className="h-6 w-6 text-primary" />, title: "Shipping & Fulfillment", description: "Automated shipping calculations, label printing, and real-time tracking." },
    { icon: <TrendingUp className="h-6 w-6 text-primary" />, title: "Marketing Tools", description: "SEO, email marketing, discount codes, and abandoned cart recovery built-in." }
  ];

  const pricing = [
    { name: "Basic Store", price: "$10,000", features: ["Up to 100 products", "Payment gateway", "Basic shipping", "Mobile responsive", "SEO basics", "3 months support"] },
    { name: "Professional", price: "$25,000", features: ["Unlimited products", "Multiple gateways", "Advanced shipping", "Marketing automation", "Analytics", "Multi-currency", "6 months support"], popular: true },
    { name: "Enterprise", price: "Custom", features: ["Multi-vendor", "Custom features", "API integrations", "Headless commerce", "Dedicated support", "SLA guarantee"] }
  ];

  return (
    <>
      <Helmet>
        <title>E-Commerce Development - Online Store Solutions | DevDazzle</title>
        <meta name="description" content="Build your online store with DevDazzle. Complete e-commerce solutions with payment, shipping, and marketing." />
      </Helmet>

      <MegaNavbar />
      
      {/* Hero Section */}
      <HeroHighlight containerClassName="pb-12 md:pb-16 lg:pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-5xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-tight">
            Launch Your{' '}<Highlight className="text-white">Online Store</Highlight>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto px-4">
            Complete e-commerce platforms that sell. Payment processing, inventory management, and marketing tools all integrated.
          </p>
          <Link to="/contact"><Button variant="gradient" size="xl">Build Your Store<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
        </motion.div>
      </HeroHighlight>

      <ThreeDFeaturesGrid 
        features={features}
        title="Why Choose Our E-Commerce Solutions?"
        subtitle="Complete online store platforms with everything you need to sell online and grow your business"
      />

      <section className="py-12 sm:py-16 md:py-20 px-4 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileHover={{ y: -10 }}>
                <Card className={plan.popular ? 'border-primary' : ''}>
                  {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm">Popular</div>}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="text-4xl font-display font-bold text-primary mt-4">{plan.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((f, idx) => <li key={idx} className="flex gap-2"><Check className="h-5 w-5 text-primary mt-0.5" /><span className="text-sm">{f}</span></li>)}
                    </ul>
                    <Link to="/contact"><Button variant={plan.popular ? "gradient" : "outline"} className="w-full">Get Started</Button></Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NewFooter />
    </>
  );
};

export default Ecommerce;

