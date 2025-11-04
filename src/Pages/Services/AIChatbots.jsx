import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Globe, Clock, Users, TrendingUp, Check, ArrowRight, Sparkles, Bot } from 'lucide-react';
import MegaNavbar from '../../components/layout/MegaNavbar';
import NewFooter from '../../components/layout/NewFooter';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { HeroHighlight, Highlight } from '../../components/ui/hero-highlight';
import { BentoGrid, BentoGridItem } from '../../components/ui/bento-grid';
import { BackgroundGradient } from '../../components/ui/background-gradient';
import { Link } from 'react-router-dom';

const AIChatbots = () => {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Natural Conversations",
      description: "GPT-4 powered chatbots that understand context, maintain conversation history, and provide human-like responses."
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Multi-Language Support",
      description: "Support 100+ languages automatically. Communicate with global customers in their native language."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry. Your AI chatbot works around the clock, every day of the year."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Unlimited Conversations",
      description: "Handle thousands of simultaneous conversations without any performance degradation."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Instant Responses",
      description: "Sub-second response times keep customers engaged and satisfied with immediate answers."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Continuous Learning",
      description: "Chatbots improve over time, learning from interactions to provide better responses."
    }
  ];

  const useCases = [
    {
      title: "Customer Support Chatbot",
      description: "Answer FAQs, troubleshoot issues, create support tickets, and escalate to human agents when needed",
      features: ["Ticket Creation", "Knowledge Base", "Sentiment Analysis", "Live Agent Handoff"],
      metrics: ["90% query resolution", "70% cost reduction", "24/7 availability", "3sec avg response"]
    },
    {
      title: "Sales Assistant Chatbot",
      description: "Qualify leads, answer product questions, schedule demos, and guide customers through the sales funnel",
      features: ["Lead Qualification", "Product Recommendations", "Meeting Scheduling", "CRM Integration"],
      metrics: ["50% more qualified leads", "40% faster sales cycle", "85% customer satisfaction", "200% ROI"]
    },
    {
      title: "E-Commerce Shopping Bot",
      description: "Help customers find products, answer questions, process orders, and provide personalized recommendations",
      features: ["Product Search", "Order Tracking", "Recommendations", "Cart Management"],
      metrics: ["35% increase in sales", "45% cart abandonment reduction", "90% user engagement", "4.8★ rating"]
    },
    {
      title: "HR & Recruitment Bot",
      description: "Answer employee questions, screen candidates, schedule interviews, and assist with onboarding",
      features: ["FAQ Automation", "Candidate Screening", "Interview Scheduling", "Onboarding Assistant"],
      metrics: ["60% faster hiring", "80% HR time saved", "95% candidate satisfaction", "50% cost reduction"]
    },
    {
      title: "Booking & Reservation Bot",
      description: "Handle appointments, table reservations, class bookings, and service scheduling automatically",
      features: ["Calendar Integration", "Availability Check", "Confirmation Emails", "Reminder System"],
      metrics: ["99% booking accuracy", "24/7 availability", "Zero double-bookings", "85% automation rate"]
    },
    {
      title: "Educational Chatbot",
      description: "Provide course information, answer student questions, track progress, and offer personalized learning paths",
      features: ["Course Guidance", "Quiz Generation", "Progress Tracking", "Learning Recommendations"],
      metrics: ["40% engagement increase", "60% support time saved", "92% student satisfaction", "3x query volume"]
    }
  ];

  const platforms = [
    "Website Embed",
    "WhatsApp Business",
    "Facebook Messenger",
    "Instagram DM",
    "Telegram",
    "Slack",
    "Discord",
    "Microsoft Teams",
    "SMS/Text",
    "Mobile Apps",
    "Email",
    "Custom Platforms"
  ];

  const capabilities = [
    { name: "Natural Language Understanding", desc: "Understands intent and context" },
    { name: "Sentiment Analysis", desc: "Detects customer emotions" },
    { name: "Multi-turn Conversations", desc: "Maintains context across messages" },
    { name: "Entity Recognition", desc: "Extracts names, dates, locations" },
    { name: "Intent Classification", desc: "Identifies user goals" },
    { name: "Conversation Memory", desc: "Remembers past interactions" },
    { name: "Fallback Handling", desc: "Graceful error recovery" },
    { name: "Human Handoff", desc: "Seamless transfer to agents" },
    { name: "Rich Media Support", desc: "Images, videos, buttons, carousels" },
    { name: "API Integrations", desc: "Connect to any system" },
    { name: "Analytics & Insights", desc: "Comprehensive reporting" },
    { name: "A/B Testing", desc: "Optimize conversation flows" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Use Case Definition",
      description: "We analyze your customer journey, identify pain points, and define chatbot use cases with clear success metrics.",
      deliverables: ["Use case document", "Conversation flows", "Success metrics", "Integration requirements"],
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Conversation Design",
      description: "Create engaging conversation flows, design chatbot personality, and build comprehensive response libraries.",
      deliverables: ["Conversation scripts", "Bot personality guide", "Response templates", "Fallback strategies"],
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Development & Training",
      description: "Build the chatbot using GPT-4, train on your data, integrate with systems, and implement all required features.",
      deliverables: ["Trained chatbot", "API integrations", "Custom features", "Admin dashboard"],
      duration: "4-6 weeks"
    },
    {
      step: "04",
      title: "Testing & Refinement",
      description: "Rigorous testing across scenarios, platforms, and edge cases. Refine responses based on test results.",
      deliverables: ["Test reports", "Performance metrics", "Refined responses", "Bug fixes"],
      duration: "2-3 weeks"
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "Deploy to production, train your team, and launch with comprehensive monitoring and support.",
      deliverables: ["Production deployment", "Team training", "Documentation", "Launch support"],
      duration: "1 week"
    },
    {
      step: "06",
      title: "Optimization & Support",
      duration: "Ongoing",
      description: "Continuous monitoring, performance optimization, and regular updates based on user feedback and analytics.",
      deliverables: ["Monthly reports", "Performance optimization", "Feature updates", "24/7 support"]
    }
  ];

  const pricing = [
    {
      name: "Basic Bot",
      price: "$8,000",
      setup: "$3,000 setup fee",
      monthly: "$299/month maintenance",
      description: "Perfect for startups and small businesses",
      features: [
        "Single-purpose chatbot",
        "1 platform deployment",
        "500 conversations/month",
        "Knowledge base (100 articles)",
        "Email support",
        "Basic analytics",
        "3 months support"
      ]
    },
    {
      name: "Professional Bot",
      price: "$18,000",
      setup: "$6,000 setup fee",
      monthly: "$599/month maintenance",
      description: "For growing businesses with complex needs",
      features: [
        "Multi-purpose chatbot",
        "3 platform deployments",
        "5,000 conversations/month",
        "Knowledge base (500 articles)",
        "Priority support",
        "Advanced analytics",
        "A/B testing",
        "CRM integration",
        "6 months support",
        "Custom training"
      ],
      popular: true
    },
    {
      name: "Enterprise Bot",
      price: "Custom",
      setup: "Custom setup",
      monthly: "Custom pricing",
      description: "For large organizations with high volume",
      features: [
        "Unlimited chatbots",
        "Unlimited platforms",
        "Unlimited conversations",
        "Unlimited knowledge base",
        "24/7 priority support",
        "Real-time analytics",
        "Custom integrations",
        "Dedicated team",
        "SLA guarantee",
        "White-label option",
        "On-premise deployment"
      ]
    }
  ];

  const faqs = [
    {
      q: "How long does it take to build a custom chatbot?",
      a: "Depending on complexity, most chatbots can be built and deployed in 6-10 weeks. Simple FAQ bots can launch in 3-4 weeks, while complex multi-functional bots may take 12+ weeks."
    },
    {
      q: "Can the chatbot integrate with my existing tools?",
      a: "Yes! We integrate with 1000+ platforms including Salesforce, HubSpot, Shopify, Zendesk, Intercom, Slack, and custom APIs. If you have an API, we can connect to it."
    },
    {
      q: "What languages does the chatbot support?",
      a: "Our chatbots support 100+ languages using GPT-4's multilingual capabilities. The bot automatically detects the user's language and responds accordingly."
    },
    {
      q: "How accurate are the chatbot responses?",
      a: "Our chatbots achieve 90-95% accuracy on typical queries. For critical use cases, we implement confidence thresholds and human-in-the-loop workflows."
    },
    {
      q: "Can users talk to a human if needed?",
      a: "Absolutely! We implement seamless handoff to human agents. The bot transfers conversation history, context, and relevant data to your support team."
    },
    {
      q: "How do you ensure data privacy and security?",
      a: "We use enterprise-grade encryption (AES-256), comply with GDPR, HIPAA, and SOC 2, and can deploy on your infrastructure if needed. All data is encrypted at rest and in transit."
    },
    {
      q: "What happens if the chatbot doesn't know an answer?",
      a: "We design sophisticated fallback strategies: the bot can search the knowledge base, offer related articles, ask clarifying questions, or immediately connect to a human agent."
    },
    {
      q: "Can the chatbot handle multiple conversations simultaneously?",
      a: "Yes! Our chatbots can handle thousands of simultaneous conversations without any performance degradation or delays."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Custom AI Chatbots & Virtual Assistants - DevDazzle</title>
        <meta name="description" content="Build intelligent AI chatbots powered by GPT-4. 24/7 customer support, sales automation, and multi-language support." />
        <meta name="keywords" content="AI chatbot, virtual assistant, GPT-4 chatbot, customer support bot, AI assistant" />
      </Helmet>

      <MegaNavbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-24 md:h-32"></div>

      {/* Hero Section */}
      <HeroHighlight containerClassName="pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Powered by GPT-4 & Advanced NLP</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Custom AI{' '}
            <Highlight className="text-white">
              Chatbots & Virtual Assistants
            </Highlight>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Build intelligent conversational AI that understands your customers, answers questions 24/7, 
            and delivers exceptional experiences across every touchpoint. Reduce support costs by 70% while improving satisfaction.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button variant="gradient" size="xl">
                Build Your Chatbot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="xl">
              <Bot className="mr-2 h-5 w-5" />
              Try Live Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { value: "90%", label: "Query Resolution" },
              { value: "70%", label: "Cost Reduction" },
              { value: "100+", label: "Languages" },
              { value: "<3s", label: "Response Time" }
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

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Why Choose Our AI Chatbots?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced features powered by cutting-edge AI technology
            </p>
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

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Chatbot Solutions for Every Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized chatbots designed for your specific business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
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
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      <CardDescription>{useCase.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm font-semibold mb-2">Key Features:</div>
                          <div className="flex flex-wrap gap-2">
                            {useCase.features.map((feature, idx) => (
                              <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="pt-4 border-t border-border">
                          <div className="text-sm font-semibold mb-2">Results:</div>
                          <div className="grid grid-cols-2 gap-2">
                            {useCase.metrics.map((metric, idx) => (
                              <span key={idx} className="text-xs text-muted-foreground">✓ {metric}</span>
                            ))}
                          </div>
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

      {/* Platforms Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Deploy Anywhere
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your chatbot works seamlessly across all major platforms and channels
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary transition-all"
              >
                <div className="font-semibold text-sm">{platform}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Advanced AI Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:border-primary transition-all">
                  <CardContent className="pt-6">
                    <div className="mb-2 font-semibold text-sm">{capability.name}</div>
                    <div className="text-xs text-muted-foreground">{capability.desc}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven methodology for chatbot success
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
                    <div className="text-5xl font-display font-bold text-primary/20 mb-4">
                      {item.step}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold">Deliverables:</div>
                      {item.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Check className="h-3 w-3 text-primary flex-shrink-0 mt-0.5" />
                          {deliverable}
                        </div>
                      ))}
                      <div className="text-sm text-muted-foreground pt-2">
                        Duration: <span className="text-primary font-semibold">{item.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-accent/20">
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the package that fits your business needs
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
                    <div className="space-y-2 mt-4">
                      <div className="text-4xl font-display font-bold text-primary">
                        {plan.price}
                      </div>
                      <div className="text-sm text-muted-foreground">{plan.setup}</div>
                      <div className="text-sm text-muted-foreground">{plan.monthly}</div>
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

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:border-primary transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Build Your AI Chatbot?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transform customer experience with 24/7 AI-powered conversations. Get started today.
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
                  View Chatbot Case Studies
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

export default AIChatbots;

