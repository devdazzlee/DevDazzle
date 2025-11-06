import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Code, Zap, Shield, Smartphone, Globe, TrendingUp, Check, ArrowRight } from 'lucide-react';
import MegaNavbar from '../../components/layout/MegaNavbar';
import NewFooter from '../../components/layout/NewFooter';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { HeroHighlight, Highlight } from '../../components/ui/hero-highlight';
import { ThreeDFeaturesGrid } from '../../components/ui/3d-feature-card';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const features = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Custom Web Applications",
      description: "Tailored solutions built with modern frameworks like React, Vue.js, and Angular for optimal performance and user experience."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Lightning-Fast Performance",
      description: "Optimized for speed with server-side rendering, lazy loading, and advanced caching strategies."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-level security with SSL, encryption, and compliance with GDPR, HIPAA, and SOC 2 standards."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Fully Responsive",
      description: "Perfect experience across all devices - desktop, tablet, and mobile with mobile-first approach."
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "SEO Optimized",
      description: "Built for search engines with semantic HTML, meta tags, and structured data for maximum visibility."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Scalable Architecture",
      description: "Cloud-native architecture that grows with your business, handling millions of users effortlessly."
    }
  ];

  const technologies = [
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "GraphQL", category: "API" },
    { name: "Redis", category: "Cache" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "Terraform", category: "Infrastructure" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, understand your users, and create a detailed technical roadmap.",
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes to visualize the final product.",
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with bi-weekly sprints, continuous integration, and regular demos.",
      duration: "6-12 weeks"
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing including unit tests, integration tests, and end-to-end testing.",
      duration: "2-3 weeks"
    },
    {
      step: "05",
      title: "Deployment",
      description: "Smooth production deployment with zero downtime and rollback capabilities.",
      duration: "1 week"
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, security patches, and performance optimization.",
      duration: "Ongoing"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$5,000",
      description: "Perfect for small businesses and startups",
      features: [
        "5-10 Pages",
        "Responsive Design",
        "Basic SEO",
        "Contact Forms",
        "Social Integration",
        "3 Months Support"
      ]
    },
    {
      name: "Professional",
      price: "$15,000",
      description: "Ideal for growing businesses",
      features: [
        "15-25 Pages",
        "Custom CMS",
        "Advanced SEO",
        "API Integrations",
        "Analytics Dashboard",
        "6 Months Support",
        "Priority Support",
        "Performance Optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale applications",
      features: [
        "Unlimited Pages",
        "Custom Everything",
        "Advanced Security",
        "Load Balancing",
        "24/7 Support",
        "Dedicated Team",
        "SLA Guarantee",
        "White Glove Service"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Web Development Services - DevDazzle | Custom Web Applications</title>
        <meta name="description" content="Professional web development services by DevDazzle. Custom web applications built with React, Node.js, and modern technologies." />
      </Helmet>

      <MegaNavbar />
      
      {/* Hero Section */}
      <HeroHighlight containerClassName="pb-12 md:pb-16 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-tight">
            Build Your Dream{' '}
            <Highlight className="text-white">
              Website
            </Highlight>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
            Custom web development solutions that combine stunning design with powerful functionality. 
            From startups to enterprises, we build websites that drive results.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button variant="gradient" size="xl">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="xl">
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { value: "500+", label: "Websites Built" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "15+", label: "Years Experience" },
              { value: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </HeroHighlight>

      {/* Features Section - Enhanced with 3D Cards */}
      <ThreeDFeaturesGrid 
        features={features}
        title="Why Choose Our Web Development Services?"
        subtitle="We combine cutting-edge technology with creative excellence to deliver exceptional web experiences"
      />

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We use industry-leading technologies to build fast, secure, and scalable web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-all"
              >
                <div className="font-semibold mb-1">{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary transition-all">
                  <CardHeader>
                    <div className="text-5xl font-display font-bold bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
                      {item.step}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      Duration: <span className="text-primary font-semibold">{item.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the package that fits your needs and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className={`h-full relative ${plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="text-4xl font-display font-bold text-primary mt-4">
                      {plan.price}
                    </div>
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
                      <Button 
                        variant={plan.popular ? "gradient" : "outline"} 
                        className="w-full"
                        size="lg"
                      >
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

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your project and create a custom web solution that exceeds your expectations
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button variant="gradient" size="xl">
                  Start Your Project Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="xl">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <NewFooter />
    </>
  );
};

export default WebDevelopment;

