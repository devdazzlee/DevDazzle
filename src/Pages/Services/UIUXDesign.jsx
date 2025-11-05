import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Palette, Users, Zap, Award, Check, ArrowRight } from 'lucide-react';
import MegaNavbar from '../../components/layout/MegaNavbar';
import NewFooter from '../../components/layout/NewFooter';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { HeroHighlight, Highlight } from '../../components/ui/hero-highlight';
import { ThreeDFeaturesGrid } from '../../components/ui/3d-feature-card';
import { Link } from 'react-router-dom';

const UIUXDesign = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "User Research",
      description: "In-depth user research, personas, journey mapping, and usability testing to understand your users deeply."
    },
    {
      icon: <Palette className="h-6 w-6 text-primary" />,
      title: "Beautiful Interfaces",
      description: "Stunning visual designs that align with your brand and captivate your audience."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Interactive Prototypes",
      description: "Clickable prototypes to test and validate designs before development."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Design Systems",
      description: "Scalable design systems with reusable components and comprehensive style guides."
    }
  ];

  const pricing = [
    {
      name: "Basic Design",
      price: "$5,000",
      features: ["5-10 screens", "2 revisions", "High-fidelity mockups", "Style guide", "1 month support"]
    },
    {
      name: "Professional",
      price: "$12,000",
      features: ["15-25 screens", "Unlimited revisions", "Interactive prototype", "Design system", "User testing", "3 months support"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Unlimited screens", "Full design system", "User research", "Usability testing", "Development handoff", "12 months support"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>UI/UX Design Services - DevDazzle | User-Centered Design</title>
        <meta name="description" content="Professional UI/UX design services. Beautiful, intuitive interfaces that users love." />
      </Helmet>

      <MegaNavbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-20 sm:h-24 md:h-28"></div>

      <HeroHighlight containerClassName="pb-12 md:pb-16 lg:pb-20 pt-8 md:pt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-5xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-tight">
            Design{' '}<Highlight className="text-white">Experiences</Highlight>{' '}Users Love
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto px-4">
            Beautiful, intuitive UI/UX design that combines aesthetics with functionality. Increase conversions by 200%.
          </p>
          <Link to="/contact">
            <Button variant="gradient" size="xl">
              Start Your Design<ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </HeroHighlight>

      <ThreeDFeaturesGrid 
        features={features}
        title="Why Choose Our UI/UX Design Services?"
        subtitle="Beautiful, intuitive designs that combine aesthetics with functionality to create exceptional user experiences"
      />

      <section className="py-12 sm:py-16 md:py-20 px-4 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div key={index} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileHover={{ y: -10 }}>
                <Card className={plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}>
                  {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Best Value</div>}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="text-4xl font-display font-bold text-primary mt-4">{plan.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button variant={plan.popular ? "gradient" : "outline"} className="w-full">Get Started</Button>
                    </Link>
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

export default UIUXDesign;

