import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Code, Smartphone, Brain, TrendingUp, Users, Star, Check, Play, Shield, Globe, Award, Rocket, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import AceternityNavbar from '../components/layout/AceternityNavbar';
import NewFooter from '../components/layout/NewFooter';
import { Button } from '../components/ui/button';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';
import { BackgroundGradient } from '../components/ui/background-gradient';
import founderImage from '../Images/profile-pic (1).png';
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards';
import { Spotlight } from '../components/ui/spotlight';
import { LampContainer } from '../components/ui/lamp';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { TESTIMONIALS } from '../utils/company-data';
import { cn } from '../lib/utils';

const NewHome = () => {
  const words = "Premium web development, AI solutions, and digital innovation that transforms businesses. Founded by Ahmed Raza in 2008.";

  return (
    <>
      <Helmet>
        <title>DevDazzle - Premium Web Development, AI & Digital Solutions | Founded by Ahmed Raza</title>
        <meta name="description" content="Transform your digital presence with DevDazzle. Expert web development, AI solutions, mobile apps. Founded by Ahmed Raza in 2008. Trusted by 250+ clients worldwide." />
      </Helmet>

      <AceternityNavbar />

      {/* SECTION 1: LAMP HERO - Dramatic Opening */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-6xl md:text-8xl font-display font-bold tracking-tight text-transparent"
        >
          Transforming
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Digital Dreams
          </span>
          <br />
          into Reality
        </motion.h1>
        <p className="text-neutral-300 text-xl text-center mt-6 max-w-3xl mx-auto">
          Founded by <span className="text-purple-400 font-bold">Ahmed Raza</span> in 2008. 
          500+ projects delivered · 250+ happy clients · 15+ years of excellence
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Link to="/contact">
            <Button variant="gradient" size="xl" className="text-lg px-8 py-6">
              <Rocket className="mr-2 h-5 w-5" />
              Start Your Project
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button variant="outline" size="xl" className="text-lg px-8 py-6 border-2 border-white/20">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </Link>
        </div>
      </LampContainer>

      {/* SECTION 2: 3D ANIMATED STATS CARDS */}
      <section className="py-32 px-4 bg-black relative">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              Why Global Leaders Choose DevDazzle
            </h2>
            <TextGenerateEffect words={words} className="text-center" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, value: "500+", label: "Projects Delivered", color: "from-purple-400 to-purple-600" },
              { icon: Users, value: "250+", label: "Happy Clients", color: "from-pink-400 to-pink-600" },
              { icon: Award, value: "15+", label: "Years Experience", color: "from-blue-400 to-blue-600" },
              { icon: Star, value: "98%", label: "Satisfaction Rate", color: "from-yellow-400 to-yellow-600" }
            ].map((stat, index) => (
              <CardContainer key={index} className="inter-var">
                <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="w-full"
                  >
                    <div className={cn("w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br", stat.color, "flex items-center justify-center")}>
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                  </CardItem>
                  <CardItem
                    as="div"
                    translateZ="60"
                    className="text-5xl font-display font-bold text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2"
                  >
                    {stat.value}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="40"
                    className="text-neutral-400 text-center text-sm"
                  >
                    {stat.label}
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: 3D ANIMATED SERVICE CARDS */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-slate-900 to-black relative overflow-hidden">
        <Spotlight className="top-0 left-0" fill="purple" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              Our Premium Services
            </h2>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
              Cutting-edge solutions powered by advanced technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI & Automation",
                desc: "Intelligent business agents, chatbots, and AI-powered automation",
                features: ["GPT-4 Powered", "24/7 Operation", "300% ROI Increase"],
                link: "/services/ai-business-agents",
                gradient: "from-purple-500 to-purple-700"
              },
              {
                icon: Code,
                title: "Web Development",
                desc: "Custom websites and web applications with modern frameworks",
                features: ["React & Next.js", "Lightning Fast", "SEO Optimized"],
                link: "/services/web-development",
                gradient: "from-blue-500 to-blue-700"
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                desc: "Native iOS and Android apps with exceptional UX",
                features: ["Native & Cross-platform", "10M+ Downloads", "4.8★ Rating"],
                link: "/services/mobile-apps",
                gradient: "from-green-500 to-green-700"
              },
              {
                icon: Target,
                title: "Digital Marketing",
                desc: "SEO, PPC, social media, and growth marketing",
                features: ["200% ROI", "Rank #1 on Google", "Expert Team"],
                link: "/services/digital-marketing",
                gradient: "from-pink-500 to-pink-700"
              },
              {
                icon: Sparkles,
                title: "UI/UX Design",
                desc: "Beautiful, intuitive interfaces that users love",
                features: ["User Research", "Prototypes", "Design Systems"],
                link: "/services/uiux-design",
                gradient: "from-yellow-500 to-yellow-700"
              },
              {
                icon: Shield,
                title: "E-Commerce",
                desc: "Complete online store solutions with payments",
                features: ["Shopify & Custom", "Payment Gateway", "Inventory System"],
                link: "/services/ecommerce",
                gradient: "from-red-500 to-red-700"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-slate-950 relative group/card hover:shadow-2xl hover:shadow-purple-500/[0.3] border-white/[0.2] w-full h-auto rounded-xl p-8 border">
                    <CardItem
                      translateZ="50"
                      className="w-full mb-6"
                    >
                      <div className={cn("w-20 h-20 rounded-2xl bg-gradient-to-br", service.gradient, "flex items-center justify-center shadow-lg")}>
                        <service.icon className="h-10 w-10 text-white" />
                      </div>
                    </CardItem>
                    
                    <CardItem
                      as="h3"
                      translateZ="60"
                      className="text-3xl font-bold text-neutral-50 mb-4"
                    >
                      {service.title}
                    </CardItem>
                    
                    <CardItem
                      as="p"
                      translateZ="50"
                      className="text-neutral-400 text-sm mb-6"
                    >
                      {service.desc}
                    </CardItem>

                    <CardItem translateZ="40" className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-neutral-300">
                          <Check className="h-4 w-4 text-green-400" />
                          {feature}
                        </div>
                      ))}
                    </CardItem>

                    <CardItem
                      translateZ="80"
                      as={Link}
                      to={service.link}
                      className="w-full"
                    >
                      <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-white hover:scale-105 transition-transform">
                        Explore Service →
                      </button>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US - 3D ANIMATED CARDS */}
      <section className="py-32 px-4 bg-black relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              Why Global Leaders Choose Us
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Enterprise-grade solutions with proven results across 30+ countries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Enterprise Security", desc: "Bank-level encryption, SOC 2, GDPR, HIPAA compliance. Your data is protected with military-grade security.", color: "from-blue-500 to-cyan-500" },
              { icon: Zap, title: "Lightning Performance", desc: "Sub-second load times, 99.9% uptime SLA. We obsess over every millisecond.", color: "from-yellow-500 to-orange-500" },
              { icon: Users, title: "Dedicated Teams", desc: "Expert developers, designers, and project managers assigned exclusively to your project.", color: "from-green-500 to-emerald-500" },
              { icon: Award, title: "Award-Winning", desc: "Industry recognition, 98% client satisfaction, featured in Forbes & TechCrunch.", color: "from-purple-500 to-pink-500" },
              { icon: TrendingUp, title: "Proven ROI", desc: "Average 300% ROI increase for clients. We deliver measurable business results.", color: "from-red-500 to-rose-500" },
              { icon: Globe, title: "Global Expertise", desc: "30+ countries served, 5 global offices, 24/7 support in your timezone.", color: "from-indigo-500 to-purple-500" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-slate-950 relative group/card hover:shadow-2xl hover:shadow-purple-500/[0.4] border-white/[0.2] w-full h-auto rounded-xl p-8 border">
                    <CardItem
                      translateZ="100"
                      className="w-full mb-6"
                    >
                      <div className={cn("w-20 h-20 rounded-2xl bg-gradient-to-br", item.color, "flex items-center justify-center shadow-2xl transform group-hover/card:scale-110 transition-transform duration-300")}>
                        <item.icon className="h-10 w-10 text-white" />
                      </div>
                    </CardItem>
                    
                    <CardItem
                      as="h3"
                      translateZ="80"
                      className="text-2xl font-bold text-neutral-50 mb-4"
                    >
                      {item.title}
                    </CardItem>
                    
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-400 text-sm leading-relaxed"
                    >
                      {item.desc}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS - Infinite Scroll */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              Loved by Clients Worldwide
            </h2>
            <p className="text-xl text-neutral-300">
              See what our clients say about working with Ahmed Raza and the DevDazzle team
            </p>
          </motion.div>

          <div className="mb-16">
            <InfiniteMovingCards
              items={TESTIMONIALS.map(t => ({ quote: t.quote, name: t.name, title: t.role }))}
              direction="right"
              speed="slow"
              pauseOnHover={true}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { value: "4.9/5", label: "Average Rating" },
              { value: "100%", label: "Project Success" },
              { value: "250+", label: "5-Star Reviews" },
              { value: "30+", label: "Countries" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="text-center p-8 bg-slate-900/50 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <div className="text-4xl font-display font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PORTFOLIO SHOWCASE - 3D Cards */}
      <section className="py-32 px-4 bg-black relative">
        <div className="absolute inset-0 bg-dot-thick-neutral-800" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Real projects, real results. See how we've transformed businesses globally.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "AI Analytics Platform", category: "AI & ML", result: "300% Productivity ↑", tech: "GPT-4, Python, React", gradient: "from-purple-600 via-pink-600 to-red-600" },
              { title: "Fashion E-Commerce", category: "E-Commerce", result: "250% Sales Growth", tech: "React Native, Node.js", gradient: "from-pink-600 via-rose-600 to-orange-600" },
              { title: "FinTech Platform", category: "Web3", result: "$2M Funding Raised", tech: "Next.js, Blockchain", gradient: "from-blue-600 via-cyan-600 to-teal-600" },
              { title: "Healthcare App", category: "Mobile", result: "50K+ Active Users", tech: "React Native, AWS", gradient: "from-green-600 via-emerald-600 to-cyan-600" },
              { title: "Real Estate Portal", category: "Web App", result: "2M Monthly Visitors", tech: "Next.js, Three.js", gradient: "from-yellow-600 via-amber-600 to-orange-600" },
              { title: "SaaS Dashboard", category: "Enterprise", result: "500+ Enterprise Clients", tech: "React, Node.js, K8s", gradient: "from-indigo-600 via-purple-600 to-pink-600" }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <CardContainer>
                  <CardBody className="bg-slate-950 relative group/card hover:shadow-2xl hover:shadow-purple-500/[0.4] border-white/[0.2] w-full h-auto rounded-xl border">
                    <CardItem translateZ="100" className="w-full h-48 mb-6">
                      <div className={cn("w-full h-full rounded-xl bg-gradient-to-br", project.gradient, "flex items-center justify-center text-white text-6xl font-bold shadow-2xl")}>
                        {project.title.charAt(0)}
                      </div>
                    </CardItem>
                    
                    <CardItem translateZ="50" as="div" className="px-6 pb-6">
                      <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold mt-4 mb-2 text-neutral-50">{project.title}</h3>
                      <p className="text-green-400 text-sm font-semibold mb-3">✓ {project.result}</p>
                      <p className="text-neutral-500 text-xs">{project.tech}</p>
                    </CardItem>

                    <CardItem
                      translateZ="80"
                      as={Link}
                      to="/portfolio"
                      className="px-6 pb-6 w-full"
                    >
                      <button className="w-full px-4 py-3 rounded-xl border border-purple-500/50 hover:bg-purple-500/10 text-purple-400 font-semibold transition-all">
                        View Case Study →
                      </button>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/portfolio">
              <Button variant="gradient" size="xl">
                View All 500+ Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: TECHNOLOGY MASTERY */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              We master the latest technologies to build future-proof solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["React", "Next.js", "Node.js", "Python", "TypeScript", "Tailwind", "GPT-4", "TensorFlow", "MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes", "Three.js", "Framer Motion", "Stripe", "Shopify", "Figma", "GraphQL", "Redis", "WebGL", "Solidity", "Flutter", "Swift"].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotateY: 10, rotateX: 5, z: 50 }}
                className="bg-slate-900/70 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/70 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 transition-all perspective-1000"
              >
                <div className="text-lg font-bold text-neutral-200">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: PROCESS WITH 3D CARDS */}
      <section className="py-32 px-4 bg-black relative">
        <Spotlight className="top-0 right-0" fill="pink" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              Our Proven Process
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              From concept to launch in 6-12 weeks with our battle-tested methodology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Deep-dive into your business, users, goals, and technical requirements", icon: Target },
              { step: "02", title: "Strategy", desc: "Detailed roadmap, architecture design, and technology selection", icon: Brain },
              { step: "03", title: "Design", desc: "User-centered designs, prototypes, and comprehensive design systems", icon: Sparkles },
              { step: "04", title: "Development", desc: "Agile development with bi-weekly sprints and continuous delivery", icon: Code },
              { step: "05", title: "Testing", desc: "Rigorous QA, security audits, and performance optimization", icon: Shield },
              { step: "06", title: "Launch", desc: "Smooth deployment, team training, and ongoing support", icon: Rocket }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
              >
                <CardContainer>
                  <CardBody className="bg-slate-950 relative group/card hover:shadow-2xl hover:shadow-pink-500/[0.3] border-white/[0.2] w-full h-auto rounded-xl p-8 border">
                    <CardItem translateZ="100" className="mb-6">
                      <div className="flex items-center justify-between">
                        <div className="text-8xl font-display font-bold text-purple-500/20">
                          {phase.step}
                        </div>
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                          <phase.icon className="h-7 w-7 text-white" />
                        </div>
                      </div>
                    </CardItem>
                    
                    <CardItem as="h3" translateZ="80" className="text-2xl font-bold text-neutral-50 mb-3">
                      {phase.title}
                    </CardItem>
                    
                    <CardItem as="p" translateZ="60" className="text-neutral-400 text-sm leading-relaxed">
                      {phase.desc}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FOUNDER SECTION - Ahmed Raza */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-purple-950/30 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BackgroundGradient className="rounded-[30px] p-1">
              <div className="bg-slate-950 rounded-[28px] p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center shadow-2xl shadow-purple-500/50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
                      <img 
                        src={founderImage} 
                        alt="Ahmed Raza - Founder & CEO" 
                        className="w-full h-full object-cover rounded-3xl relative z-10"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-4xl md:text-5xl font-display font-bold mb-4 text-neutral-50">
                      Meet Ahmed Raza
                    </h3>
                    <p className="text-2xl text-purple-400 mb-6 font-semibold">Founder & CEO</p>
                    <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                      Visionary entrepreneur with 15+ years of experience in digital innovation, AI, and software development. 
                      Ahmed founded DevDazzle in 2008 with a mission to democratize access to cutting-edge technology.
                    </p>
                    <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                      Under his leadership, DevDazzle has delivered 500+ successful projects, served 250+ clients globally, 
                      and pioneered innovative solutions in AI, Web3, and enterprise software.
                    </p>
                    <div className="flex gap-4">
                      <Link to="/about">
                        <Button variant="gradient" size="lg">
                          Learn More About Our Team
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>
        </div>
      </section>

      {/* SECTION 10: CTA WITH GLOW EFFECT */}
      <section className="py-32 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/30 rounded-full blur-[150px] animate-pulse"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-2xl text-neutral-300 mb-12 leading-relaxed">
              Join 250+ successful companies that trust DevDazzle with their digital transformation.
              <br />
              <span className="text-purple-400 font-semibold">Let's create your success story together.</span>
            </p>
            <div className="flex gap-6 justify-center flex-wrap mb-12">
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="gradient" size="xl" className="text-xl px-12 py-8 h-auto shadow-2xl shadow-purple-500/50">
                    <Zap className="mr-3 h-6 w-6" />
                    Start Your Project Today
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/portfolio">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="xl" className="text-xl px-12 py-8 h-auto border-2 border-white/20 hover:border-purple-500">
                    View Success Stories
                  </Button>
                </motion.div>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-12 flex-wrap text-sm text-gray-400">
              <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Free Consultation</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>No Hidden Fees</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>100% Satisfaction Guarantee</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <NewFooter />
    </>
  );
};

export default NewHome;

