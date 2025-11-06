import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Smartphone, Apple, Clock, Shield, Zap, Users, Check, ArrowRight } from 'lucide-react';
import MegaNavbar from '../../components/layout/MegaNavbar';
import NewFooter from '../../components/layout/NewFooter';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { HeroHighlight, Highlight } from '../../components/ui/hero-highlight';
import { ThreeDFeaturesGrid } from '../../components/ui/3d-feature-card';
import { Link } from 'react-router-dom';

const MobileApps = () => {
  const features = [
    {
      icon: <Apple className="h-6 w-6 text-primary" />,
      title: "Native iOS & Android",
      description: "Build high-performance native apps with Swift/Kotlin or cross-platform with React Native/Flutter."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Lightning Performance",
      description: "Optimized for speed with native performance, smooth animations, and instant load times."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Bank-Level Security",
      description: "Encryption, secure storage, biometric authentication, and compliance with app store guidelines."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Offline Capability",
      description: "Apps work offline with local data storage and sync when connection is restored."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Push Notifications",
      description: "Engage users with smart push notifications, in-app messaging, and real-time updates."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "App Store Optimization",
      description: "Optimized for discoverability with ASO, compelling screenshots, and keyword strategy."
    }
  ];

  const pricing = [
    {
      name: "Basic App",
      price: "$15,000",
      description: "Simple utility or content apps",
      features: [
        "iOS OR Android (one platform)",
        "5-10 screens",
        "Basic features",
        "API integration",
        "App Store submission",
        "3 months support"
      ]
    },
    {
      name: "Professional App",
      price: "$35,000",
      description: "Feature-rich apps with backend",
      features: [
        "iOS AND Android",
        "15-25 screens",
        "Advanced features",
        "Backend development",
        "Push notifications",
        "Analytics integration",
        "6 months support",
        "App Store optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise App",
      price: "Custom",
      description: "Complex apps with custom requirements",
      features: [
        "Full custom development",
        "Unlimited screens",
        "Complex integrations",
        "Scalable backend",
        "Real-time features",
        "Advanced security",
        "12 months support",
        "Dedicated team",
        "SLA guarantee"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mobile App Development - iOS & Android Apps | DevDazzle</title>
        <meta name="description" content="Professional mobile app development for iOS and Android. Native and cross-platform solutions." />
      </Helmet>

      <MegaNavbar />
      
      {/* Hero Section */}
      <HeroHighlight containerClassName="pb-12 md:pb-16 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-5xl mx-auto px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-tight">
            Build Your Dream{' '}
            <Highlight className="text-white">
              Mobile App
            </Highlight>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto px-4">
            Native iOS and Android apps that users love. From concept to App Store, we build mobile experiences that drive growth.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button variant="gradient" size="xl">
                Start Your App
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { value: "200+", label: "Apps Built" },
              { value: "10M+", label: "Downloads" },
              { value: "4.8★", label: "Avg Rating" },
              { value: "98%", label: "Approval Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-display font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </HeroHighlight>

      {/* Features */}
      <ThreeDFeaturesGrid 
        features={features}
        title="Why Choose Our Mobile App Development?"
        subtitle="Build powerful native and cross-platform mobile apps with cutting-edge technology"
      />

      {/* Pricing */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className={`h-full ${plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
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
                      <Button variant={plan.popular ? "gradient" : "outline"} className="w-full" size="lg">
                        Get Started
                      </Button>
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

export default MobileApps;

