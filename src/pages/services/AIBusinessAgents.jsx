import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Bot, Brain, Zap, TrendingUp, Shield, Check, ArrowRight, Sparkles, BarChart3, Users, Clock } from 'lucide-react';
import MegaNavbar from '../../components/layout/MegaNavbar';
import NewFooter from '../../components/layout/NewFooter';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { HeroHighlight, Highlight } from '../../components/ui/hero-highlight';
import { BackgroundGradient } from '../../components/ui/background-gradient';
import { ThreeDFeaturesGrid } from '../../components/ui/3d-feature-card';
import { Link } from 'react-router-dom';

const AIBusinessAgents = () => {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "24/7 Autonomous Operation",
      description: "Your AI agents work round the clock, handling tasks, responding to queries, and making decisions without human intervention."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Increased Productivity",
      description: "Boost team efficiency by 300% - AI agents handle repetitive tasks while your team focuses on strategic initiatives."
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Intelligent Decision Making",
      description: "Leverages machine learning to analyze data, identify patterns, and make informed decisions based on your business rules."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Seamless Integration",
      description: "Integrates with your existing tools - CRM, project management, communication platforms, and databases."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-level encryption, role-based access control, and compliance with GDPR, HIPAA, and SOC 2 standards."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Real-Time Analytics",
      description: "Track performance metrics, KPIs, and ROI with comprehensive dashboards and automated reporting."
    }
  ];

  const useCases = [
    {
      title: "Sales Automation Agent",
      description: "Automates lead qualification, follow-ups, meeting scheduling, and CRM updates",
      features: ["Lead Scoring", "Email Sequences", "Calendar Integration", "Pipeline Management"],
      roi: "40% increase in qualified leads"
    },
    {
      title: "Customer Support Agent",
      description: "Handles customer inquiries, resolves issues, and escalates complex cases to human agents",
      features: ["Multi-channel Support", "Ticket Management", "Knowledge Base", "Sentiment Analysis"],
      roi: "60% reduction in response time"
    },
    {
      title: "Data Analysis Agent",
      description: "Analyzes business data, generates insights, and creates automated reports",
      features: ["Data Processing", "Trend Analysis", "Predictive Modeling", "Automated Reporting"],
      roi: "50% faster decision making"
    },
    {
      title: "HR & Recruitment Agent",
      description: "Screens resumes, schedules interviews, and manages candidate communication",
      features: ["Resume Parsing", "Candidate Matching", "Interview Scheduling", "Follow-up Automation"],
      roi: "70% reduction in hiring time"
    },
    {
      title: "Marketing Automation Agent",
      description: "Creates content, manages campaigns, and optimizes ad spend across channels",
      features: ["Content Generation", "Campaign Management", "A/B Testing", "Budget Optimization"],
      roi: "200% improvement in ROI"
    },
    {
      title: "Finance & Operations Agent",
      description: "Handles invoicing, expense tracking, and financial reporting automatically",
      features: ["Invoice Processing", "Expense Management", "Financial Reports", "Compliance Checking"],
      roi: "80% faster month-end close"
    }
  ];

  const capabilities = [
    "Natural Language Understanding & Generation",
    "Multi-language Support (100+ languages)",
    "Contextual Memory & Learning",
    "Task Scheduling & Prioritization",
    "Email & Communication Automation",
    "Document Processing & Analysis",
    "Database Query & Management",
    "API Integration & Webhooks",
    "Workflow Orchestration",
    "Predictive Analytics",
    "Sentiment Analysis",
    "Custom Business Logic"
  ];

  const technologies = [
    "OpenAI GPT-4",
    "Google PaLM",
    "Anthropic Claude",
    "LangChain",
    "Vector Databases",
    "Python",
    "TensorFlow",
    "PyTorch",
    "Hugging Face",
    "Redis",
    "PostgreSQL",
    "Docker/Kubernetes"
  ];

  const implementation = [
    {
      phase: "Discovery & Planning",
      duration: "1-2 weeks",
      activities: [
        "Business process analysis",
        "Use case identification",
        "Requirements gathering",
        "ROI projection",
        "Technology selection",
        "Architecture design"
      ]
    },
    {
      phase: "Agent Design & Training",
      duration: "3-4 weeks",
      activities: [
        "Agent personality design",
        "Training data preparation",
        "Model fine-tuning",
        "Prompt engineering",
        "Testing & validation",
        "Safety guardrails"
      ]
    },
    {
      phase: "Integration & Development",
      duration: "4-6 weeks",
      activities: [
        "API integrations",
        "Database connections",
        "Workflow automation",
        "User interface development",
        "Security implementation",
        "Performance optimization"
      ]
    },
    {
      phase: "Testing & Quality Assurance",
      duration: "2-3 weeks",
      activities: [
        "Unit testing",
        "Integration testing",
        "User acceptance testing",
        "Load testing",
        "Security audit",
        "Bug fixes"
      ]
    },
    {
      phase: "Deployment & Training",
      duration: "1-2 weeks",
      activities: [
        "Production deployment",
        "Team training",
        "Documentation",
        "Monitoring setup",
        "Gradual rollout",
        "Go-live support"
      ]
    },
    {
      phase: "Optimization & Support",
      duration: "Ongoing",
      activities: [
        "Performance monitoring",
        "Continuous learning",
        "Feature enhancements",
        "Bug fixes",
        "24/7 technical support",
        "Monthly reviews"
      ]
    }
  ];

  const pricing = [
    {
      name: "Starter Agent",
      price: "$15,000",
      setup: "$5,000 setup fee",
      description: "Perfect for small businesses starting with AI",
      features: [
        "Single AI Business Agent",
        "Up to 5 integrations",
        "10,000 tasks/month",
        "Email support",
        "Basic analytics",
        "Monthly optimization",
        "3 months support"
      ]
    },
    {
      name: "Professional Suite",
      price: "$35,000",
      setup: "$10,000 setup fee",
      description: "For growing businesses with multiple needs",
      features: [
        "3 AI Business Agents",
        "Up to 15 integrations",
        "50,000 tasks/month",
        "Priority support",
        "Advanced analytics",
        "Weekly optimization",
        "6 months support",
        "Custom workflows",
        "Dedicated account manager"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      setup: "Custom setup",
      description: "Unlimited AI agents for large organizations",
      features: [
        "Unlimited AI Agents",
        "Unlimited integrations",
        "Unlimited tasks",
        "24/7 priority support",
        "Real-time analytics",
        "Daily optimization",
        "Lifetime support",
        "Custom everything",
        "Dedicated team",
        "SLA guarantee",
        "White-label options"
      ]
    }
  ];

  const faqs = [
    {
      q: "How quickly can an AI Business Agent be deployed?",
      a: "Depending on complexity, most agents can be deployed in 8-12 weeks. Simple agents can go live in as little as 4-6 weeks."
    },
    {
      q: "Will the AI agent work with my existing tools?",
      a: "Yes! Our agents integrate with 1000+ tools including Salesforce, HubSpot, Slack, Microsoft Teams, Google Workspace, Notion, and more."
    },
    {
      q: "How accurate are the AI agents?",
      a: "Our agents achieve 95%+ accuracy on typical business tasks. They continuously learn and improve over time."
    },
    {
      q: "What happens if the agent makes a mistake?",
      a: "Agents can be configured with approval workflows for critical decisions. We also provide audit logs and rollback capabilities."
    },
    {
      q: "Can the agent learn our specific business processes?",
      a: "Absolutely! We fine-tune agents on your data, workflows, and business rules to match your exact requirements."
    },
    {
      q: "Is my data secure?",
      a: "Yes. We use enterprise-grade encryption, comply with all major regulations (GDPR, HIPAA, SOC 2), and can deploy on-premise if needed."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Business Agents - Intelligent Automation | DevDazzle</title>
        <meta name="description" content="Deploy intelligent AI business agents that automate tasks, make decisions, and boost productivity 24/7. Custom AI agents for sales, support, marketing, and operations." />
        <meta name="keywords" content="AI business agents, AI automation, intelligent agents, business automation, AI assistant, virtual agents" />
      </Helmet>

      <MegaNavbar />
      
      {/* Hero Section */}
      <HeroHighlight containerClassName="pb-12 md:pb-16 lg:pb-20">
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
            <span className="text-sm font-medium">Powered by GPT-4 & Advanced AI</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-tight">
            Deploy Intelligent{' '}
            <Highlight className="text-white">
              AI Business Agents
            </Highlight>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto px-4">
            Transform your business with autonomous AI agents that work 24/7. 
            Automate sales, support, marketing, operations, and more with intelligent agents 
            that learn, adapt, and deliver results.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button variant="gradient" size="xl">
                Deploy Your AI Agent
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="xl">
              Watch Demo
              <Bot className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { value: "300%", label: "Productivity Increase" },
              { value: "24/7", label: "Autonomous Operation" },
              { value: "95%+", label: "Task Accuracy" },
              { value: "60%", label: "Cost Reduction" }
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

      {/* Benefits Section */}
      <ThreeDFeaturesGrid 
        features={benefits}
        title="Why AI Business Agents?"
        subtitle="Intelligent agents that understand context, learn from interactions, and execute complex tasks autonomously"
      />

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              AI Agents for Every Business Function
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deploy specialized agents tailored to your specific business needs
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
                          <div className="text-sm font-semibold mb-2 text-white">Key Features:</div>
                          <div className="flex flex-wrap gap-2">
                            {useCase.features.map((feature, idx) => (
                              <span key={idx} className="text-xs bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-lg font-semibold shadow-lg shadow-purple-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="pt-4 border-t border-border">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Expected ROI:</span>
                            <span className="text-sm font-bold text-cyan-400">{useCase.roi}</span>
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

      {/* Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powered by cutting-edge AI technologies and models
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{capability}</span>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Technology Stack</h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary transition-all"
                  >
                    <span className="text-sm font-semibold">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment in 8-12 weeks
            </p>
          </motion.div>

          <div className="space-y-8">
            {implementation.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:border-primary transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-5xl font-display font-bold bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {phase.duration}
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{phase.phase}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-3">
                      {phase.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Investment Options
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing for AI business agents that deliver ROI
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
                    <div className="space-y-1 mt-4">
                      <div className="text-4xl font-display font-bold text-primary">
                        {plan.price}
                      </div>
                      <div className="text-sm text-muted-foreground">{plan.setup}</div>
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
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-accent/20">
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
                <Card>
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
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Deploy Your AI Business Agent?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your business with intelligent automation. Schedule a free consultation today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button variant="gradient" size="xl">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="xl">
                Download Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <NewFooter />
    </>
  );
};

export default AIBusinessAgents;

