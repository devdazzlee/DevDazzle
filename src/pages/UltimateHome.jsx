import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Code, Smartphone, Brain, TrendingUp, Users, Star, Check, Play, Rocket, Shield, Globe, Award, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import MegaNavbar from '../components/layout/MegaNavbar';
import NewFooter from '../components/layout/NewFooter';
import { Button } from '../components/ui/button';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards';
import founderImage from '../Images/profile-pic (1).png';
import { LampContainer } from '../components/ui/lamp';
import { TESTIMONIALS } from '../utils/company-data';
import { cn } from '../lib/utils';

const UltimateHome = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <>
      <Helmet>
        <title>DevDazzle - Premium Web Development, AI & Digital Solutions | Founded by Ahmed Raza</title>
      </Helmet>

      <MegaNavbar />
      
      {/* Spacer for fixed navbar - Increased for proper clearance */}
      <div className="h-28 sm:h-32 md:h-36"></div>

      {/* SECTION 1: DRAMATIC LAMP HERO - NO COLLISION! */}
      <LampContainer className="pt-0 !min-h-[50vh] sm:!min-h-[60vh] md:!min-h-[80vh]">
        <motion.div
          style={{ opacity, scale }}
          className="flex flex-col items-center justify-center relative z-[1] -mt-4 sm:-mt-8 md:-mt-12"
        >
          {/* Founder Badge - Fixed Position */}
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-4 sm:mb-6 md:mb-8"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-400/50 md:border-2 rounded-full px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 shadow-2xl shadow-cyan-500/50 backdrop-blur-sm max-w-[calc(100vw-2rem)] sm:max-w-none">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-6 md:w-6 text-cyan-400 animate-pulse flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white text-center leading-tight whitespace-nowrap">
                <span className="hidden sm:inline">Founded by <span className="text-cyan-400">Ahmed Raza</span> | Est. 2008 | 250+ Clients</span>
                <span className="sm:hidden"><span className="text-cyan-400">Ahmed Raza</span> • 250+ Clients</span>
              </span>
            </div>
          </motion.div>

          {/* Main Headline - HUGE and Animated */}
          <motion.h1
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
              ease: "easeOut",
            }}
            className="bg-gradient-to-br mt-4 md:mt-8 from-white to-gray-400 py-4 md:py-6 bg-clip-text text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-transparent leading-tight px-4"
          >
            TRANSFORMING
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.2,
              duration: 1,
              ease: "backOut",
            }}
            className="my-4 md:my-8 px-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient leading-tight">
              DIGITAL DREAMS
            </h2>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white px-4 leading-tight"
          >
            INTO REALITY
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-8 md:mt-12 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-5xl text-center leading-relaxed font-medium px-4"
          >
            Premium Web Development • AI Solutions • Mobile Apps • Digital Innovation
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-cyan-400 font-bold">500+ Projects</span> • 
            <span className="text-purple-400 font-bold"> 98% Satisfaction</span> • 
            <span className="text-pink-400 font-bold"> 15+ Years</span>
          </motion.p>

          {/* CTA Buttons - Animated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            className="flex gap-4 md:gap-6 justify-center flex-wrap mt-8 md:mt-16 px-4"
          >
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl blur-xl animate-pulse"></div>
                <Button variant="gradient" size="xl" className="relative text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 h-auto font-bold shadow-2xl">
                  <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 animate-bounce" />
                  <span className="whitespace-nowrap">START PROJECT</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </Button>
              </motion.div>
            </Link>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="xl" className="text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 h-auto border-2 md:border-4 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 font-bold">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                <span className="whitespace-nowrap">WATCH DEMO</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </LampContainer>

      {/* SECTION 2: EXTREME 3D STATS CARDS - ENHANCED FOR MOBILE */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 bg-black relative overflow-hidden">
        {/* Animated Background Orbs - Enhanced */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/20 rounded-full blur-[120px] sm:blur-[150px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/20 rounded-full blur-[120px] sm:blur-[150px]"
        ></motion.div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <motion.h2 
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] px-4 leading-tight"
            >
              TRUSTED WORLDWIDE
            </motion.h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-medium px-4">
              Global leaders choose DevDazzle for digital excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: Code, value: "500+", label: "Projects Delivered", gradient: "from-cyan-400 to-blue-600", glow: "shadow-cyan-500/50", borderGradient: "from-cyan-500 to-blue-500" },
              { icon: Users, value: "250+", label: "Happy Clients", gradient: "from-purple-400 to-purple-600", glow: "shadow-purple-500/50", borderGradient: "from-purple-500 to-pink-500" },
              { icon: Award, value: "15+", label: "Years Excellence", gradient: "from-pink-400 to-red-600", glow: "shadow-pink-500/50", borderGradient: "from-pink-500 to-red-500" },
              { icon: Star, value: "98%", label: "Satisfaction", gradient: "from-yellow-400 to-orange-600", glow: "shadow-yellow-500/50", borderGradient: "from-yellow-500 to-orange-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="w-full"
              >
                <CardContainer className="w-full">
                  <CardBody className={cn(
                    "relative group/card w-full h-auto rounded-2xl sm:rounded-3xl p-6 sm:p-8",
                    "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950",
                    "border-2 border-transparent",
                    "hover:shadow-2xl transition-all duration-300",
                    stat.glow
                  )}>
                    {/* Animated Border Gradient */}
                    <motion.div
                      className={cn(
                        "absolute inset-0 rounded-2xl sm:rounded-3xl -z-10",
                        "bg-gradient-to-r", stat.borderGradient,
                        "opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                      )}
                      animate={{
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    ></motion.div>

                    {/* Floating Icon Container */}
                    <CardItem
                      translateZ="150"
                      rotateX={5}
                      className="w-full mb-4 sm:mb-6 md:mb-8"
                    >
                      <motion.div
                        animate={{
                          y: [0, -15, 0],
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                        className={cn(
                          "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto rounded-xl sm:rounded-2xl",
                          "bg-gradient-to-br", stat.gradient,
                          "flex items-center justify-center",
                          "shadow-2xl relative overflow-hidden"
                        )}
                      >
                        {/* Pulsing Glow Effect */}
                        <motion.div
                          className={cn("absolute inset-0 rounded-xl sm:rounded-2xl", "bg-gradient-to-br", stat.gradient)}
                          animate={{
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        ></motion.div>
                        <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white relative z-10" />
                      </motion.div>
                    </CardItem>
                    
                    {/* Animated Value */}
                    <CardItem
                      translateZ="100"
                      as="div"
                      className="text-center mb-3 sm:mb-4"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
                      >
                        {stat.value}
                      </motion.div>
                    </CardItem>
                    
                    {/* Label with Fade Animation */}
                    <CardItem
                      translateZ="80"
                      as="p"
                      className="text-gray-400 text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold"
                    >
                      <motion.span
                        animate={{
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.4
                        }}
                      >
                        {stat.label}
                      </motion.span>
                    </CardItem>

                    {/* Decorative Particles */}
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-50">
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-full h-full rounded-full bg-current"
                      ></motion.div>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: EXTREME 3D SERVICE CARDS */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 bg-gradient-to-b from-black via-purple-950/30 to-black relative">
        <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient px-4 leading-tight">
              OUR PREMIUM SERVICES
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-medium px-4">
              Cutting-edge solutions powered by advanced technology and creative excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {[
              {
                icon: Brain,
                title: "AI & Automation",
                desc: "Intelligent business agents, GPT-4 chatbots, content creation, and workflow automation",
                features: ["24/7 AI Agents", "GPT-4 Powered", "300% ROI Boost"],
                link: "/services/ai-business-agents",
                gradient: "from-purple-600 via-purple-500 to-pink-600",
                iconBg: "from-purple-500 to-purple-700"
              },
              {
                icon: Code,
                title: "Web Development",
                desc: "Custom websites, web applications, and SaaS platforms with React, Next.js, Node.js",
                features: ["React & Next.js", "Lightning Fast", "SEO Optimized"],
                link: "/services/web-development",
                gradient: "from-cyan-600 via-blue-500 to-blue-700",
                iconBg: "from-cyan-500 to-blue-700"
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                desc: "Native iOS & Android apps with 10M+ downloads and 4.8★ average rating",
                features: ["Native & Cross-platform", "10M+ Downloads", "4.8★ Rating"],
                link: "/services/mobile-apps",
                gradient: "from-green-600 via-emerald-500 to-teal-600",
                iconBg: "from-green-500 to-teal-700"
              },
              {
                icon: Target,
                title: "Digital Marketing",
                desc: "SEO, PPC, social media marketing that drives 200% ROI and ranks #1 on Google",
                features: ["200% ROI", "Rank #1 on Google", "Expert Team"],
                link: "/services/digital-marketing",
                gradient: "from-pink-600 via-rose-500 to-red-600",
                iconBg: "from-pink-500 to-red-700"
              },
              {
                icon: Sparkles,
                title: "UI/UX Design",
                desc: "Beautiful, intuitive interfaces with user research, prototypes, and design systems",
                features: ["User Research", "Prototypes", "Design Systems"],
                link: "/services/uiux-design",
                gradient: "from-yellow-600 via-amber-500 to-orange-600",
                iconBg: "from-yellow-500 to-orange-700"
              },
              {
                icon: Shield,
                title: "E-Commerce",
                desc: "Complete online stores with Shopify, payment gateways, and inventory management",
                features: ["Shopify & Custom", "Payment Gateway", "Inventory System"],
                link: "/services/ecommerce",
                gradient: "from-indigo-600 via-violet-500 to-purple-600",
                iconBg: "from-indigo-500 to-purple-700"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateY: -45, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 1,
                  type: "spring",
                  stiffness: 80
                }}
              >
                <Link to={service.link}>
                  <CardContainer className="inter-var">
                    <CardBody className={cn("bg-gradient-to-br", service.gradient, "relative group/card hover:shadow-2xl hover:shadow-purple-500/60 border-2 border-white/30 w-full h-auto rounded-3xl p-6 sm:p-8 md:p-10 transform-gpu")}>
                      {/* Floating Icon */}
                      <CardItem
                        translateZ="200"
                        rotateZ={10}
                        className="w-full mb-8"
                      >
                        <motion.div
                          animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className={cn("w-28 h-28 rounded-3xl bg-gradient-to-br", service.iconBg, "flex items-center justify-center shadow-2xl mx-auto")}
                        >
                          <service.icon className="h-14 w-14 text-white" />
                        </motion.div>
                      </CardItem>
                      
                      <CardItem
                        as="h3"
                        translateZ="120"
                        className="text-4xl font-bold text-white mb-6 text-center"
                      >
                        {service.title}
                      </CardItem>
                      
                      <CardItem
                        as="p"
                        translateZ="100"
                        className="text-white/90 text-lg leading-relaxed mb-8 text-center"
                      >
                        {service.desc}
                      </CardItem>

                      <CardItem translateZ="80" className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 2,
                              delay: idx * 0.2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="flex items-center gap-3 text-white text-base font-semibold"
                          >
                            <Check className="h-6 w-6 text-green-400" />
                            {feature}
                          </motion.div>
                        ))}
                      </CardItem>

                      <CardItem
                        translateZ="150"
                        className="w-full"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full px-6 py-4 rounded-2xl bg-white/20 backdrop-blur-sm hover:bg-white/30 font-bold text-white text-lg border-2 border-white/40 transition-all shadow-xl"
                        >
                          Explore Service →
                        </motion.button>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Link to="/services/web-development">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="gradient" size="xl" className="text-2xl px-16 py-8 h-auto font-bold shadow-2xl shadow-purple-500/50">
                  View All 30+ Services
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: WHY DEVDAZZLE - 3D Cards with Extreme Depth */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 bg-gradient-to-b from-black via-slate-900 to-black relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[200px] animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient px-4 leading-tight">
              WHY GLOBAL LEADERS CHOOSE US
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-medium px-4">
              Enterprise-grade solutions with proven results across 30+ countries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {[
              { icon: Shield, title: "Enterprise Security", desc: "Bank-level encryption, SOC 2, GDPR, HIPAA compliance. Military-grade protection for your data and users.", gradient: "from-blue-600 to-cyan-600" },
              { icon: Zap, title: "Lightning Performance", desc: "Sub-second load times, 99.9% uptime SLA. We obsess over every millisecond of performance.", gradient: "from-yellow-600 to-orange-600" },
              { icon: Users, title: "Dedicated Teams", desc: "Expert developers, designers, and PMs assigned exclusively to your project. Your success is our mission.", gradient: "from-green-600 to-emerald-600" },
              { icon: Award, title: "Award-Winning", desc: "Industry recognition, 98% client satisfaction, featured in Forbes, TechCrunch, and Inc Magazine.", gradient: "from-purple-600 to-pink-600" },
              { icon: TrendingUp, title: "Proven ROI", desc: "Average 300% ROI increase for clients. We deliver measurable business results every time.", gradient: "from-red-600 to-rose-600" },
              { icon: Globe, title: "Global Expertise", desc: "30+ countries served, 5 global offices, 50+ team members, 24/7 support in your timezone.", gradient: "from-indigo-600 to-purple-600" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                  type: "spring"
                }}
              >
                <div className="bg-slate-950 relative group/card hover:shadow-2xl hover:shadow-purple-500/60 border-2 border-white/20 w-full min-h-[400px] rounded-3xl p-8 lg:p-10 flex flex-col">
                  <motion.div
                    animate={{
                      rotateY: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className={cn("w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br", item.gradient, "flex items-center justify-center shadow-2xl mx-auto mb-6")}
                  >
                    <item.icon className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6 text-center">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed text-center flex-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS - Infinite Scroll */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient px-4 leading-tight">
              LOVED BY CLIENTS WORLDWIDE
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 px-4">
              See what global leaders say about Ahmed Raza and DevDazzle
            </p>
          </motion.div>

          <div className="mb-12 md:mb-16 lg:mb-20">
            <InfiniteMovingCards
              items={TESTIMONIALS.map(t => ({ quote: t.quote, name: t.name, title: `${t.role} - ${t.company}` }))}
              direction="right"
              speed="slow"
              pauseOnHover={true}
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: PORTFOLIO - Extreme 3D Project Cards */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 bg-gradient-to-b from-black via-pink-950/20 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient px-4 leading-tight">
              FEATURED PROJECTS
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto px-4">
              Real projects, real results. See how we've transformed businesses globally.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {[
              { title: "AI Analytics Platform", cat: "AI & ML", result: "300% Productivity", client: "TechFlow Inc", gradient: "from-purple-600 to-pink-600" },
              { title: "Fashion E-Commerce", cat: "E-Commerce", result: "250% Sales Growth", client: "StyleHub", gradient: "from-pink-600 to-red-600" },
              { title: "FinTech Platform", cat: "Blockchain", result: "$2M Funding Raised", client: "FinanceNext", gradient: "from-blue-600 to-cyan-600" },
              { title: "Healthcare App", cat: "Mobile", result: "50K+ Users", client: "HealthTech", gradient: "from-green-600 to-teal-600" },
              { title: "Real Estate Portal", cat: "Web3", result: "2M Visitors/mo", client: "PropFinder", gradient: "from-yellow-600 to-orange-600" },
              { title: "SaaS Dashboard", cat: "Enterprise", result: "500+ Clients", client: "DataCorp", gradient: "from-indigo-600 to-purple-600" }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 150, rotateX: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 1,
                  type: "spring"
                }}
              >
                <CardContainer>
                  <CardBody className="bg-slate-950 relative group/card hover:shadow-2xl hover:shadow-purple-500/60 border-2 border-white/20 w-full h-auto rounded-3xl overflow-hidden">
                    <CardItem translateZ="150" className="w-full h-64 mb-6">
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className={cn("w-full h-full bg-gradient-to-br", project.gradient, "flex flex-col items-center justify-center text-white shadow-2xl relative overflow-hidden")}
                      >
                        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
                        <div className="relative z-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">{project.title.charAt(0)}</div>
                      </motion.div>
                    </CardItem>
                    
                    <CardItem translateZ="100" as="div" className="px-8 pb-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full font-bold border border-cyan-500/50">
                          {project.cat}
                        </span>
                        <Heart className="h-5 w-5 text-pink-400" />
                      </div>
                      <h3 className="text-3xl font-bold mb-3 text-white">{project.title}</h3>
                      <p className="text-green-400 text-lg font-bold mb-2">✓ {project.result}</p>
                      <p className="text-gray-400 text-sm">Client: {project.client}</p>
                    </CardItem>

                    <CardItem translateZ="120" className="px-8 pb-8">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 font-bold text-white text-lg shadow-xl"
                      >
                        View Case Study →
                      </motion.button>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TECHNOLOGY - Rotating 3D Cards */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient px-4 leading-tight">
              TECHNOLOGY MASTERY
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["React", "Next.js", "Node.js", "Python", "TypeScript", "Tailwind", "GPT-4", "TensorFlow", "MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes", "Three.js", "WebGL", "Stripe", "Shopify", "Figma", "GraphQL", "Redis", "Solidity", "Flutter", "Swift", "Kotlin"].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: -180, rotateX: -90 }}
                whileInView={{ opacity: 1, rotateY: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.8,
                  type: "spring"
                }}
                whileHover={{
                  scale: 1.3,
                  rotateY: 20,
                  rotateX: 20,
                  z: 100
                }}
                className="perspective-1000"
              >
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-purple-500/30 rounded-2xl p-6 text-center hover:border-cyan-500 hover:shadow-2xl hover:shadow-purple-500/50 transition-all preserve-3d">
                  <div className="text-xl font-bold text-white">{tech}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FOUNDER - Ahmed Raza with 3D Card */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 bg-gradient-to-b from-black via-purple-950/40 to-black relative overflow-visible">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 w-full">
              <div className="bg-gradient-to-br from-slate-950 to-slate-900 relative group/card hover:shadow-2xl hover:shadow-cyan-500/60 rounded-3xl p-8 lg:p-12">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Founder Image */}
                  <div className="w-full flex justify-center md:justify-start">
                    <motion.div
                      animate={{
                        rotateY: [0, 10, -10, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-full max-w-[250px] sm:max-w-[300px] aspect-square rounded-3xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/50 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-400/20 animate-pulse"></div>
                      <img 
                        src={founderImage} 
                        alt="Ahmed Raza - Founder & CEO" 
                        className="w-full h-full object-cover rounded-3xl relative z-10"
                      />
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className="w-full space-y-6">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                      AHMED RAZA
                    </h3>
                    <p className="text-2xl md:text-3xl text-purple-400 font-bold">Founder & CEO</p>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      Visionary entrepreneur with <span className="text-cyan-400 font-bold">15+ years</span> pioneering digital innovation, AI, and software development.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      Founded DevDazzle in <span className="text-purple-400 font-bold">2008</span> with a mission to democratize cutting-edge technology. 
                      Under his leadership: <span className="text-pink-400 font-bold">500+ projects</span>, <span className="text-cyan-400 font-bold">250+ global clients</span>, 
                      and countless success stories.
                    </p>
                    <Link to="/about">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="gradient" size="xl" className="text-lg md:text-xl px-8 py-6">
                          Meet the Team →
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9: MEGA CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-[200px] animate-pulse"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 md:mb-12 text-white leading-tight px-4">
              READY TO BUILD
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                SOMETHING EXTRAORDINARY?
              </span>
            </h2>
            
            <p className="text-3xl text-gray-300 mb-16 leading-relaxed">
              Join <span className="text-purple-400 font-bold">250+ successful companies</span> that trust DevDazzle.
              <br />
              <span className="text-cyan-400 font-bold text-4xl">Let's create your success story together.</span>
            </p>
            
            <div className="flex gap-8 justify-center flex-wrap mb-16">
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl animate-pulse"></div>
                  <Button variant="gradient" size="xl" className="relative text-3xl px-16 py-10 h-auto font-bold shadow-2xl">
                    <Rocket className="mr-4 h-8 w-8 animate-bounce" />
                    START YOUR PROJECT NOW
                    <ArrowRight className="ml-4 h-8 w-8" />
                  </Button>
                </motion.div>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-16 flex-wrap text-lg text-gray-400">
              {[
                { icon: Check, text: "Free Consultation" },
                { icon: Shield, text: "No Hidden Fees" },
                { icon: Award, text: "100% Satisfaction" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="flex items-center gap-3"
                >
                  <item.icon className="h-7 w-7 text-green-400" />
                  <span className="font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <NewFooter />
    </>
  );
};

export default UltimateHome;

