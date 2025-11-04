import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Pen, Image, Video, FileText, Sparkles, Check, ArrowRight, TrendingUp, Clock } from 'lucide-react';
import MegaNavbar from '../../components/layout/MegaNavbar';
import NewFooter from '../../components/layout/NewFooter';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { HeroHighlight, Highlight } from '../../components/ui/hero-highlight';
import { BentoGrid, BentoGridItem } from '../../components/ui/bento-grid';
import { BackgroundGradient } from '../../components/ui/background-gradient';
import { Link } from 'react-router-dom';

const AIContentCreation = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Blog & Article Writing",
      description: "Generate SEO-optimized blog posts, articles, and long-form content that ranks on Google and engages readers."
    },
    {
      icon: <Pen className="h-6 w-6 text-primary" />,
      title: "Marketing Copy",
      description: "Create compelling ad copy, email campaigns, product descriptions, and landing page content that converts."
    },
    {
      icon: <Image className="h-6 w-6 text-primary" />,
      title: "AI Image Generation",
      description: "Generate stunning visuals, product mockups, social media graphics, and marketing materials using DALL-E and Midjourney."
    },
    {
      icon: <Video className="h-6 w-6 text-primary" />,
      title: "Video Scripts",
      description: "Write engaging video scripts, YouTube descriptions, social media captions, and video marketing content."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Social Media Content",
      description: "Generate posts, captions, hashtags, and content calendars for all social media platforms automatically."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "10x Faster Production",
      description: "Create content in minutes, not hours. AI-powered workflows dramatically accelerate your content production."
    }
  ];

  const contentTypes = [
    {
      title: "Blog Posts & Articles",
      examples: ["SEO articles", "How-to guides", "Listicles", "Industry insights", "News articles", "Thought leadership"],
      turnaround: "30 min - 2 hours",
      pricing: "Starting at $99/article"
    },
    {
      title: "Marketing Copy",
      examples: ["Ad copy", "Email campaigns", "Landing pages", "Product descriptions", "Sales letters", "CTAs"],
      turnaround: "15-60 min",
      pricing: "Starting at $49/piece"
    },
    {
      title: "Social Media Content",
      examples: ["Instagram posts", "Twitter threads", "LinkedIn articles", "Facebook posts", "TikTok scripts", "Pinterest pins"],
      turnaround: "5-30 min",
      pricing: "Starting at $199/month (30 posts)"
    },
    {
      title: "Website Content",
      examples: ["Homepage copy", "About pages", "Service pages", "FAQ sections", "Testimonials", "Case studies"],
      turnaround: "1-3 hours",
      pricing: "Starting at $299/page"
    },
    {
      title: "Video Scripts",
      examples: ["YouTube scripts", "Explainer videos", "Product demos", "Tutorial videos", "Social video ads", "Webinar scripts"],
      turnaround: "1-2 hours",
      pricing: "Starting at $149/script"
    },
    {
      title: "E-Commerce Content",
      examples: ["Product titles", "Descriptions", "Category pages", "Brand stories", "Meta descriptions", "Alt text"],
      turnaround: "10-30 min",
      pricing: "Starting at $399/100 products"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses and solopreneurs",
      features: [
        "20 blog posts/month (500-800 words)",
        "50 social media posts",
        "Basic SEO optimization",
        "2 content revisions",
        "Email support",
        "Content calendar",
        "Analytics dashboard"
      ]
    },
    {
      name: "Professional",
      price: "$1,499",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "60 blog posts/month (1000-1500 words)",
        "150 social media posts",
        "Advanced SEO optimization",
        "Unlimited revisions",
        "Priority support",
        "Multi-brand support",
        "Content strategy consultation",
        "A/B testing",
        "Custom brand voice training",
        "Dedicated account manager"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with high volume needs",
      features: [
        "Unlimited content creation",
        "White-label solution",
        "Custom AI model training",
        "API access",
        "Multi-language support",
        "Dedicated content team",
        "24/7 priority support",
        "SLA guarantee",
        "Custom integrations",
        "Advanced analytics",
        "Compliance support"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered Content Creation - DevDazzle | Blog Posts, Copy & More</title>
        <meta name="description" content="Generate high-quality content 10x faster with AI. Blog posts, marketing copy, social media, and more. Powered by GPT-4." />
      </Helmet>

      <MegaNavbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-24 md:h-32"></div>

      <HeroHighlight containerClassName="pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-5xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Powered by GPT-4, DALL-E & Midjourney</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            AI-Powered{' '}
            <Highlight className="text-white">
              Content Creation
            </Highlight>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Generate blog posts, marketing copy, social media content, and visuals 10x faster. 
            SEO-optimized, brand-consistent, and ready to publish.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button variant="gradient" size="xl">
                Start Creating Content
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="xl">
              See Examples
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { value: "10x", label: "Faster Creation" },
              { value: "90%", label: "Cost Savings" },
              { value: "SEO", label: "Optimized" },
              { value: "100+", label: "Languages" }
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              What We Create
            </h2>
          </motion.div>

          <BentoGrid>
            {features.map((feature, index) => (
              <BentoGridItem
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                className={index === 0 || index === 3 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 px-4 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Content Types & Pricing
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BackgroundGradient className="rounded-[22px] p-1">
                  <Card className="h-full bg-background">
                    <CardHeader>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <div className="text-2xl font-display font-bold text-primary mt-2">{type.pricing}</div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm font-semibold mb-2">Examples:</div>
                          <div className="flex flex-wrap gap-2">
                            {type.examples.map((example, idx) => (
                              <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md">
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Turnaround: <span className="text-primary font-semibold">{type.turnaround}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </BackgroundGradient>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Monthly Packages
            </h2>
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
                      Best Value
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <div className="text-4xl font-display font-bold text-primary">
                        {plan.price}<span className="text-xl text-muted-foreground">{plan.period}</span>
                      </div>
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

      {/* CTA */}
      <section className="py-20 px-4 bg-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Scale Your Content Production with AI
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Create unlimited content, publish faster, and dominate your niche with AI-powered content creation.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl">
                Start Creating Content
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <NewFooter />
    </>
  );
};

export default AIContentCreation;

