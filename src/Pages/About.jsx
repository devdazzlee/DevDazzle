import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin, Twitter, Github, Award, Users, Target, Heart, Rocket, Globe, Zap, Shield, TrendingUp, Star, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import MegaNavbar from '../components/layout/MegaNavbar';
import NewFooter from '../components/layout/NewFooter';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';
import { BackgroundGradient } from '../components/ui/background-gradient';
import { LampContainer } from '../components/ui/lamp';
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards';
import { Button } from '../components/ui/button';
import { COMPANY_INFO, TEAM_MEMBERS, STATS, TESTIMONIALS } from '../utils/company-data';
import { cn } from '../lib/utils';

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  const values = [
    { icon: Rocket, title: "Innovation First", description: "We push boundaries and embrace cutting-edge technology to deliver solutions that shape tomorrow." },
    { icon: Target, title: "Client Success", description: "Your success is our mission. We measure our success by the impact we create for our clients." },
    { icon: Heart, title: "Passion & Excellence", description: "We're driven by passion and committed to excellence in every project we undertake." },
    { icon: Globe, title: "Global Impact", description: "From startups to enterprises, we empower businesses worldwide with transformative digital solutions." },
    { icon: Shield, title: "Trust & Integrity", description: "We build lasting relationships through transparency, honesty, and delivering on our promises." },
    { icon: Zap, title: "Agile & Fast", description: "We move fast, adapt quickly, and deliver results without compromising on quality." }
  ];

  const milestones = [
    { year: "2008", title: "Foundation", description: "DevDazzle founded by Ahmed Raza with a vision to democratize cutting-edge technology." },
    { year: "2012", title: "First 100 Projects", description: "Reached 100 successful projects milestone, serving clients across 10 countries." },
    { year: "2015", title: "AI Division Launch", description: "Launched AI & Automation division, pioneering business AI solutions." },
    { year: "2018", title: "Global Expansion", description: "Opened offices in New York, London, and Dubai, expanding global reach." },
    { year: "2020", title: "250+ Clients", description: "Achieved 250+ global clients milestone with 98% satisfaction rate." },
    { year: "2023", title: "500+ Projects", description: "Crossed 500+ projects milestone, serving 30+ countries worldwide." }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - DevDazzle | Founded by Ahmed Raza in 2008</title>
        <meta name="description" content="Learn about DevDazzle, founded by Ahmed Raza in 2008. Our mission, team, values, and commitment to digital excellence." />
      </Helmet>

      <MegaNavbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-24 md:h-32"></div>

      {/* SECTION 1: DRAMATIC HERO */}
      <LampContainer className="pb-20">
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
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border-2 border-cyan-400/50 rounded-full px-8 py-4 shadow-2xl shadow-cyan-500/50">
              <Sparkles className="h-6 w-6 text-cyan-400 animate-pulse" />
              <span className="text-lg font-bold text-white">
                Founded by <span className="text-cyan-400">Ahmed Raza</span> | Est. 2008 | 15+ Years of Excellence
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="bg-gradient-to-br from-white to-gray-400 py-6 bg-clip-text text-center text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tight text-transparent leading-none"
          >
            ABOUT US
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 text-xl md:text-2xl text-white/90 max-w-4xl text-center leading-relaxed font-medium px-4"
          >
            Transforming digital dreams into reality since 2008. We're not just developers—we're innovators, creators, and digital transformation partners.
          </motion.p>
        </motion.div>
      </LampContainer>

      {/* SECTION 2: FOUNDER - 3D CARD */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Meet Our Founder
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Visionary entrepreneur leading the digital transformation revolution
            </p>
          </motion.div>

          <div className="flex justify-center mb-20 px-4">
            <CardContainer className="inter-var w-full max-w-6xl">
              <CardBody className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative w-full h-auto p-6 md:p-10 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardItem translateZ="100" className="w-full">
                  <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                    <CardItem translateZ="50" className="flex-shrink-0 w-full lg:w-auto flex justify-center">
                      <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-6xl lg:text-8xl font-bold shadow-2xl shadow-purple-500/50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-pink-400/20 animate-pulse"></div>
                        <span className="relative z-10">AR</span>
                      </div>
                    </CardItem>
                    <CardItem translateZ="60" className="flex-1 w-full lg:w-auto">
                      <h3 className="text-3xl lg:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        {COMPANY_INFO.founder.name}
                      </h3>
                      <p className="text-lg lg:text-xl text-purple-400 mb-4 lg:mb-6 font-semibold">{COMPANY_INFO.founder.title}</p>
                      <p className="text-gray-300 mb-4 lg:mb-6 leading-relaxed text-base lg:text-lg">
                        {COMPANY_INFO.founder.bio}
                      </p>
                      <p className="text-gray-400 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base">
                        Under his leadership, DevDazzle has delivered <span className="text-cyan-400 font-bold">500+ projects</span> to <span className="text-purple-400 font-bold">250+ global clients</span> across <span className="text-pink-400 font-bold">30+ countries</span>, achieving a <span className="text-cyan-400 font-bold">98% satisfaction rate</span> and industry recognition from Forbes, TechCrunch, and Inc Magazine.
                      </p>
                      <div className="flex gap-4 justify-center lg:justify-start">
                        {[
                          { icon: Linkedin, href: COMPANY_INFO.founder.social.linkedin, color: "from-blue-500 to-blue-600" },
                          { icon: Twitter, href: COMPANY_INFO.founder.social.twitter, color: "from-sky-500 to-sky-600" },
                          { icon: Github, href: COMPANY_INFO.founder.social.github, color: "from-gray-500 to-gray-600" }
                        ].map((social, idx) => (
                          <motion.a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className={cn("w-12 h-12 rounded-xl bg-gradient-to-br", social.color, "flex items-center justify-center shadow-lg hover:shadow-xl transition-all")}
                          >
                            <social.icon className="h-6 w-6 text-white" />
                          </motion.a>
                        ))}
                      </div>
                    </CardItem>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* SECTION 3: STATS WITH 3D CARDS */}
      <section className="py-32 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.15),transparent)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Impact
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Numbers that tell our story of excellence and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="w-full"
              >
                <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 h-full">
                  <div className="bg-black/90 rounded-2xl p-4 md:p-6 text-center backdrop-blur-sm h-full flex flex-col items-center justify-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 md:mb-3 w-full overflow-hidden">
                      <span className="inline-block">{stat.number}{stat.suffix}</span>
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: MISSION & VISION */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 relative w-full h-full p-10 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <CardItem translateZ="50">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-6">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-4xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      Our Mission
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      To democratize access to cutting-edge technology and empower businesses of all sizes to transform their digital presence. We believe every company deserves world-class digital solutions, regardless of their size or budget.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      Through innovation, expertise, and unwavering commitment to excellence, we help our clients achieve their digital dreams and reach new heights of success.
                    </p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gradient-to-br from-gray-900 via-pink-900/30 to-gray-900 relative w-full h-full p-10 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all">
                  <CardItem translateZ="50">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-4xl font-display font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Our Vision
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      To be the world's most trusted partner for digital transformation, recognized for our innovation, expertise, and unwavering commitment to client success. We envision a future where every business can leverage cutting-edge technology to achieve extraordinary results.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      By 2030, we aim to have transformed the digital landscape for 10,000+ businesses worldwide, setting new standards for excellence and innovation in the industry.
                    </p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: VALUES WITH 3D CARDS */}
      <section className="py-32 px-4 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative w-full h-full p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                    <CardItem translateZ="50">
                      <div className={cn(
                        "w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6",
                        index % 3 === 0 ? "from-cyan-500 to-cyan-600" :
                        index % 3 === 1 ? "from-purple-500 to-purple-600" :
                        "from-pink-500 to-pink-600"
                      )}>
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-4 text-white">{value.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{value.description}</p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TIMELINE */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Milestones that shaped our story
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={cn(
                    "relative flex items-center gap-8",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  <div className={cn(
                    "flex-1",
                    index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  )}>
                    <BackgroundGradient className="rounded-2xl p-6">
                      <div className="bg-black/80 rounded-xl p-8 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                            {milestone.year}
                          </div>
                          <h3 className="text-3xl font-display font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">{milestone.description}</p>
                      </div>
                    </BackgroundGradient>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center border-4 border-black shadow-xl z-10">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TEAM WITH 3D CARDS */}
      <section className="py-32 px-4 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Amazing Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative w-full h-full p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                    <CardItem translateZ="50" className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-pink-400/20 animate-pulse"></div>
                        <span className="relative z-10">{member.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-2 text-white">{member.name}</h3>
                      <p className="text-purple-400 mb-4 font-semibold">{member.role}</p>
                      <p className="text-gray-400 mb-6 leading-relaxed">{member.bio}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.expertise.map((skill, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg text-sm text-cyan-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted by industry leaders worldwide
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

      {/* SECTION 9: CTA */}
      <section className="py-32 px-4 bg-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join 250+ global clients who trust DevDazzle for their digital transformation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button variant="gradient" size="lg" className="text-lg px-8 py-6">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
                  View Our Work
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

export default About;
