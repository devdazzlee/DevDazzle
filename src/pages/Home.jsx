import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Globe, Award, Shield, Code, Smartphone, Brain, TrendingUp, Users, Star, Check, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewNavbar from '../components/layout/NewNavbar';
import NewFooter from '../components/layout/NewFooter';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { BackgroundGradient } from '../components/ui/background-gradient';
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards';
import { Spotlight } from '../components/ui/spotlight';
import { TESTIMONIALS, COMPANY_INFO } from '../utils/company-data';
import { cn } from '../lib/utils';
import founderImage from '../Images/profile-pic (1).png';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DevDazzle - Premium Web Development, AI & Digital Solutions | Founded by Ahmed Raza</title>
        <meta name="description" content="Transform your digital presence with DevDazzle. Expert web development, AI solutions, mobile apps. Founded by Ahmed Raza in 2008. Trusted by 250+ clients worldwide." />
      </Helmet>

      <NewNavbar />

      {/* HERO SECTION - Dark with Spotlight */}
      <div className="w-full relative bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden flex items-center justify-center" style={{ marginTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="p-4 max-w-7xl mx-auto relative z-10 w-full text-center py-20"
        >
            {/* Founder Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-8"
            >
              <Sparkles className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-medium text-gray-200">Founded by Ahmed Raza | Est. 2008 | 250+ Clients Worldwide</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
              Transforming
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
                Digital Dreams
              </span>
              <br />
              into Reality
            </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed"
          >
            Premium web development, AI solutions, mobile apps, and digital innovation.
            <br />
            <span className="text-purple-400 font-semibold">500+ projects delivered</span> · <span className="text-pink-400 font-semibold">98% client satisfaction</span> · <span className="text-red-400 font-semibold">15+ years experience</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex gap-4 justify-center flex-wrap mt-12"
          >
            <Link to="/contact">
              <Button variant="gradient" size="xl" className="text-lg px-8 py-6 h-auto">
                <Zap className="mr-2 h-5 w-5" />
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="xl" className="text-lg px-8 py-6 h-auto border-2 border-white/20 hover:border-purple-500">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </Link>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-5xl mx-auto"
          >
            {[
              { value: "500+", label: "Projects Delivered", icon: Code },
              { value: "250+", label: "Happy Clients", icon: Users },
              { value: "15+", label: "Years Experience", icon: Award },
              { value: "98%", label: "Satisfaction Rate", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                  <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* SERVICES SECTION - Bento Grid */}
      <section className="py-32 px-4 bg-black relative">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Our Services
            </h2>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
              Comprehensive digital solutions powered by cutting-edge technology
            </p>
          </motion.div>

          <BentoGrid className="mb-12">
            {[
              { icon: <Brain className="h-8 w-8 text-purple-400" />, title: "AI & Automation", description: "Intelligent business agents, chatbots, content creation, and workflow automation powered by GPT-4 and advanced AI.", link: "/services/ai-business-agents", className: "md:col-span-2" },
              { icon: <Code className="h-8 w-8 text-blue-400" />, title: "Web Development", description: "Custom websites and web applications built with React, Next.js, and modern technologies.", link: "/services/web-development" },
              { icon: <Smartphone className="h-8 w-8 text-green-400" />, title: "Mobile Apps", description: "Native iOS and Android apps with exceptional performance and user experience.", link: "/services/mobile-apps" },
              { icon: <Award className="h-8 w-8 text-pink-400" />, title: "UI/UX Design", description: "Beautiful, intuitive interfaces designed with user-centered principles and modern aesthetics.", link: "/services/uiux-design", className: "md:col-span-2" },
              { icon: <TrendingUp className="h-8 w-8 text-yellow-400" />, title: "Digital Marketing", description: "SEO, PPC, social media, and content marketing that drives measurable growth.", link: "/services/digital-marketing" }
            ].map((service, index) => (
              <Link key={index} to={service.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <BentoGridItem
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    className={cn("cursor-pointer h-full", service.className)}
                  />
                </motion.div>
              </Link>
            ))}
          </BentoGrid>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/services/web-development">
              <Button variant="outline" size="lg" className="border-2 border-purple-500/50 hover:bg-purple-500/10">
                View All 30+ Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Why DevDazzle?
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              15+ years of excellence in digital innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Enterprise Security", desc: "Bank-level encryption, SOC 2, GDPR, HIPAA compliant" },
              { icon: Zap, title: "Lightning Fast", desc: "Sub-second load times, optimized for performance" },
              { icon: Users, title: "Dedicated Team", desc: "Expert developers, designers, and project managers" },
              { icon: Award, title: "Award-Winning", desc: "Industry recognition and 98% client satisfaction" },
              { icon: TrendingUp, title: "Proven Results", desc: "Average 300% ROI increase for our clients" },
              { icon: Globe, title: "Global Reach", desc: "Serving clients in 30+ countries worldwide" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BackgroundGradient className="rounded-[22px] p-1">
                  <Card className="h-full bg-slate-900 border-none">
                    <CardContent className="pt-8">
                      <item.icon className="h-12 w-12 text-purple-400 mb-4" />
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </CardContent>
                  </Card>
                </BackgroundGradient>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Loved by Clients Worldwide
            </h2>
            <p className="text-xl text-neutral-300">
              See what our clients say about working with DevDazzle
            </p>
          </motion.div>

          <InfiniteMovingCards
            items={TESTIMONIALS.map(t => ({ quote: t.quote, name: t.name, title: t.role }))}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      {/* PORTFOLIO PREVIEW SECTION */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Featured Projects
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Real projects, real results. See how we've transformed businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "AI Analytics Platform", category: "AI & ML", result: "300% productivity increase", tech: "GPT-4, Python, React" },
              { title: "Fashion E-Commerce", category: "E-Commerce", result: "250% sales growth", tech: "React Native, Node.js" },
              { title: "FinTech Platform", category: "Web App", result: "$2M funding raised", tech: "Next.js, Blockchain" },
              { title: "Healthcare App", category: "Mobile", result: "50K+ active users", tech: "React Native, AWS" },
              { title: "Real Estate Portal", category: "Web App", result: "2M monthly visitors", tech: "Next.js, Three.js" },
              { title: "SaaS Dashboard", category: "Web App", result: "500+ enterprise clients", tech: "React, Node.js" }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <BackgroundGradient className="rounded-[22px] p-1">
                  <div className="bg-slate-900 rounded-[20px] p-8 h-full">
                    <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center text-white text-5xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">{project.category}</span>
                    <h3 className="text-2xl font-bold mt-4 mb-2">{project.title}</h3>
                    <p className="text-green-400 text-sm mb-3">✓ {project.result}</p>
                    <p className="text-gray-500 text-sm">{project.tech}</p>
                  </div>
                </BackgroundGradient>
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
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-32 px-4 bg-black relative">
        <div className="absolute inset-0 bg-dot-thick-neutral-800" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Our Process
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              From concept to launch in 6-12 weeks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals, users, and requirements" },
              { step: "02", title: "Strategy", desc: "Creating a detailed roadmap and technical architecture" },
              { step: "03", title: "Design", desc: "Crafting beautiful, user-centered designs and prototypes" },
              { step: "04", title: "Development", desc: "Building with cutting-edge technology and best practices" },
              { step: "05", title: "Testing", desc: "Rigorous QA, security audits, and performance optimization" },
              { step: "06", title: "Launch", desc: "Smooth deployment with ongoing support and maintenance" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-slate-900/50 border-white/10 hover:border-purple-500/50 transition-all h-full">
                  <CardContent className="pt-8">
                    <div className="text-7xl font-display font-bold text-purple-500/20 mb-4">{phase.step}</div>
                    <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                    <p className="text-gray-400">{phase.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Cutting-Edge Tech Stack
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              We work with the latest and greatest technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["React", "Next.js", "Node.js", "Python", "TypeScript", "TailwindCSS", "GPT-4", "TensorFlow", "MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes", "Three.js", "Framer Motion", "Stripe", "Shopify", "Figma"].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="bg-slate-900/50 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 transition-all"
              >
                <div className="text-lg font-semibold">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BackgroundGradient className="rounded-[30px] p-1">
              <div className="bg-slate-950 rounded-[28px] p-8 lg:p-12">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                    <p className="text-2xl text-purple-400 mb-6 font-semibold">{COMPANY_INFO.founder.title}</p>
                    <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                      {COMPANY_INFO.founder.bio}
                    </p>
                    <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                      Under his leadership, DevDazzle has delivered <span className="text-purple-400 font-bold">500+ successful projects</span>, served <span className="text-pink-400 font-bold">250+ clients globally</span>, 
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

      {/* CTA SECTION */}
      <section className="py-32 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Ready to Transform Your Business?
            </h2>
            <p className="text-2xl text-neutral-300 mb-12 leading-relaxed">
              Join 250+ successful companies that trust DevDazzle with their digital transformation.
              <br />
              <span className="text-purple-400 font-semibold">Let's build something amazing together.</span>
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link to="/contact">
                <Button variant="gradient" size="xl" className="text-xl px-12 py-8 h-auto">
                  <Zap className="mr-3 h-6 w-6" />
                  Start Your Project Today
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="xl" className="text-xl px-12 py-8 h-auto border-2 border-white/20 hover:border-purple-500">
                  View Case Studies
                </Button>
              </Link>
            </div>

            <div className="mt-16 flex items-center justify-center gap-12 flex-wrap text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <NewFooter />
    </>
  );
};

export default Home;
