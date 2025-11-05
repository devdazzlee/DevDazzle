import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { TrendingUp, Target, BarChart, Check, ArrowRight } from 'lucide-react';
import MegaNavbar from '../../components/layout/MegaNavbar';
import NewFooter from '../../components/layout/NewFooter';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { HeroHighlight, Highlight } from '../../components/ui/hero-highlight';
import { ThreeDFeaturesGrid } from '../../components/ui/3d-feature-card';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
  const features = [
    { icon: <TrendingUp className="h-6 w-6 text-primary" />, title: "SEO & Content Marketing", description: "Rank #1 on Google with data-driven SEO strategies and high-quality content." },
    { icon: <Target className="h-6 w-6 text-primary" />, title: "Paid Advertising (PPC)", description: "Google Ads, Facebook Ads, LinkedIn Ads managed for maximum ROI." },
    { icon: <BarChart className="h-6 w-6 text-primary" />, title: "Social Media Marketing", description: "Grow your audience and engagement across all social platforms." }
  ];

  const pricing = [
    { name: "Starter", price: "$1,500/mo", features: ["SEO basics", "5 blog posts/month", "Social media (2 platforms)", "Monthly reports"] },
    { name: "Growth", price: "$3,500/mo", features: ["Advanced SEO", "12 blog posts/month", "Paid ads management", "Social media (all platforms)", "Email marketing", "Weekly reports"], popular: true },
    { name: "Enterprise", price: "Custom", features: ["Full-service marketing", "Unlimited content", "Multi-channel campaigns", "Dedicated team", "Real-time dashboard"] }
  ];

  return (
    <>
      <Helmet><title>Digital Marketing Services - SEO, PPC, Social Media | DevDazzle</title></Helmet>
      <MegaNavbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-20 sm:h-24 md:h-28"></div>

      <HeroHighlight containerClassName="pb-12 md:pb-16 lg:pb-20 pt-8 md:pt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-5xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-tight">
            Grow Your Business with{' '}<Highlight className="text-white">Digital Marketing</Highlight>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 px-4">SEO, PPC, Social Media, and Content Marketing that drives results.</p>
          <Link to="/contact"><Button variant="gradient" size="xl">Get Started<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
        </motion.div>
      </HeroHighlight>

      <ThreeDFeaturesGrid 
        features={features}
        title="Why Choose Our Digital Marketing Services?"
        subtitle="Data-driven strategies that deliver measurable results and grow your business online"
      />

      <section className="py-12 sm:py-16 md:py-20 px-4 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <Card key={i} className={plan.popular ? 'border-primary' : ''}>
                {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm">Popular</div>}
                <CardHeader><CardTitle>{plan.name}</CardTitle><div className="text-4xl font-display font-bold text-primary mt-4">{plan.price}</div></CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">{plan.features.map((f, idx) => <li key={idx} className="flex gap-2"><Check className="h-5 w-5 text-primary" /><span className="text-sm">{f}</span></li>)}</ul>
                  <Link to="/contact"><Button variant={plan.popular ? "gradient" : "outline"} className="w-full">Get Started</Button></Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <NewFooter />
    </>
  );
};

export default DigitalMarketing;

