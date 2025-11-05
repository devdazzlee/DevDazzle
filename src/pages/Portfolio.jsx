import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Award, TrendingUp, Users, Star, CheckCircle, ArrowRight, Sparkles, Code, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import MegaNavbar from '../components/layout/MegaNavbar';
import NewFooter from '../components/layout/NewFooter';
import { LampContainer } from '../components/ui/lamp';
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards';
import { Button } from '../components/ui/button';
import { PORTFOLIO_PROJECTS, TESTIMONIALS } from '../utils/company-data';
import { cn } from '../lib/utils';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  const categories = ['All', ...new Set(PORTFOLIO_PROJECTS.map(p => p.category))];
  const filteredProjects = selectedCategory === 'All' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  const featuredProjects = PORTFOLIO_PROJECTS.filter(p => p.featured);

  return (
    <>
      <Helmet>
        <title>Portfolio - DevDazzle | Our Work & Case Studies</title>
        <meta name="description" content="Explore DevDazzle's portfolio of successful projects. Web apps, AI solutions, mobile apps, e-commerce, and more." />
      </Helmet>

      <MegaNavbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-20 sm:h-24 md:h-28"></div>

      {/* SECTION 1: DRAMATIC HERO */}
      <LampContainer className="pb-10 md:pb-20 pt-8 sm:pt-12 md:pt-16">
        <motion.div
          style={{ opacity, scale }}
          className="flex flex-col items-center justify-center relative z-50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-400/50 md:border-2 rounded-full px-4 md:px-8 py-2 md:py-4 shadow-2xl shadow-cyan-500/50 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 md:h-6 md:w-6 text-cyan-400 animate-pulse flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-lg font-bold text-white text-center">
                500+ Projects • 250+ Clients • 30+ Countries
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="bg-gradient-to-br from-white to-gray-400 py-4 md:py-6 bg-clip-text text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-transparent leading-tight px-4"
          >
            OUR PORTFOLIO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 text-xl md:text-2xl text-white/90 max-w-4xl text-center leading-relaxed font-medium px-4"
          >
            Real projects, real results. See how we've transformed businesses worldwide with cutting-edge technology and innovative solutions.
          </motion.p>
        </motion.div>
      </LampContainer>

      {/* SECTION 2: PORTFOLIO STATS */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Briefcase, number: "500+", label: "Projects", color: "from-cyan-500 to-cyan-600" },
              { icon: Users, number: "250+", label: "Clients", color: "from-purple-500 to-purple-600" },
              { icon: Award, number: "98%", label: "Satisfaction", color: "from-pink-500 to-pink-600" },
              { icon: TrendingUp, number: "30+", label: "Countries", color: "from-cyan-500 to-pink-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="w-full"
              >
                <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 h-full">
                  <div className="bg-black/90 rounded-2xl p-6 md:p-8 text-center backdrop-blur-sm h-full flex flex-col items-center justify-center">
                    <div className={cn("w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br", stat.color, "flex items-center justify-center")}>
                      <stat.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 w-full overflow-hidden">
                      <span className="inline-block">{stat.number}</span>
                    </div>
                    <div className="text-xs md:text-sm lg:text-base text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PROJECTS */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent px-4 leading-tight">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our most impactful work that transformed businesses
            </p>
          </motion.div>

          <div className="space-y-32 mb-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className={cn(
                  "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center",
                  index % 2 === 1 && "lg:grid-flow-dense"
                )}>
                  {/* Project Visual/Mockup */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "relative rounded-2xl overflow-hidden h-[400px] lg:h-[500px]",
                      index % 2 === 1 && "lg:col-start-2"
                    )}
                  >
                    <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 h-full">
                      <div className="bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 relative w-full h-full rounded-2xl overflow-hidden">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
                        
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="h-full w-full" style={{
                            backgroundImage: 'linear-gradient(rgba(120,119,198,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(120,119,198,0.3) 1px, transparent 1px)',
                            backgroundSize: '50px 50px'
                          }}></div>
                        </div>
                        
                        {/* Large Letter */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-[12rem] lg:text-[16rem] font-bold bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 bg-clip-text text-transparent select-none"
                          >
                            {project.title.charAt(0)}
                          </motion.div>
                        </div>
                        
                        {/* Bottom Info Card */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className="px-4 py-1.5 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-500/50 rounded-full text-sm font-semibold text-cyan-300 backdrop-blur-sm">
                              {project.category}
                            </span>
                            <span className="text-sm text-gray-400 font-medium">{project.year}</span>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-2">{project.title}</h3>
                          <p className="text-gray-300 text-sm lg:text-base line-clamp-2">{project.description}</p>
                        </div>

                        {/* Decorative Corner Elements */}
                        <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-2xl"></div>
                        <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-pink-500/30 rounded-bl-2xl"></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Details */}
                  <div className={cn(
                    "space-y-8",
                    index % 2 === 1 && "lg:col-start-1 lg:row-start-1"
                  )}>
                    <div className="space-y-4">
                      <h3 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                        {project.client && <span className="text-purple-400 font-semibold">Client: {project.client}</span>}
                      </p>
                      <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Key Results */}
                    <div className="space-y-4">
                      <h4 className="text-xl lg:text-2xl font-semibold text-white flex items-center gap-2">
                        <Star className="h-6 w-6 text-cyan-400" />
                        Key Results
                      </h4>
                      <div className="space-y-3 pl-2">
                        {project.results.map((result, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-1" />
                            <span className="text-gray-300 text-base lg:text-lg">{result}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-4">
                      <h4 className="text-xl lg:text-2xl font-semibold text-white flex items-center gap-2">
                        <Code className="h-6 w-6 text-purple-400" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 + 0.5 }}
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 hover:border-cyan-500/70 rounded-xl text-sm font-semibold text-cyan-300 transition-all cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="gradient" size="lg" className="w-full lg:w-auto text-base lg:text-lg px-8 py-6">
                        View Case Study <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ALL PROJECTS WITH FILTERS */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              All Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Explore our complete portfolio
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-6 py-3 rounded-xl font-semibold transition-all duration-300",
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                )}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative w-full h-full rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all overflow-hidden">
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
                    <div className="h-64 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center">
                        <div className="text-8xl font-bold text-white/20">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-sm text-white border border-white/20">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-sm text-white border border-white/20">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg text-xs text-cyan-300">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-gray-800 rounded-lg text-xs text-gray-400">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 pt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          View Details <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              What our clients say about working with us
            </p>
          </motion.div>

          <InfiniteMovingCards
            items={TESTIMONIALS.map(t => ({
              quote: t.quote,
              name: t.name,
              title: `${t.role}, ${t.company}`
            }))}
            direction="right"
            speed="slow"
            className="mb-20"
          />
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch and let's discuss your next big project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button variant="gradient" size="lg" className="text-lg px-8 py-6">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
                  Learn More About Us
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

export default Portfolio;
