import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewNavbar from '../components/layout/NewNavbar';
import NewFooter from '../components/layout/NewFooter';
import { Button } from '../components/ui/button';
import { HeroHighlight, Highlight } from '../components/ui/hero-highlight';
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';

const Home = () => {
  const services = [
    {
      title: "AI & Automation",
      description: "Intelligent business agents, chatbots, and AI-powered automation solutions",
      icon: <Sparkles className="h-6 w-6 text-purple-500" />,
      link: "/services/ai-business-agents"
    },
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      link: "/services/web-development"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: <Zap className="h-6 w-6 text-green-500" />,
      link: "/services/mobile-apps"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love",
      icon: <Award className="h-6 w-6 text-pink-500" />,
      link: "/services/uiux-design"
    }
  ];

  return (
    <>
      <Helmet>
        <title>DevDazzle - Web Development, AI & Digital Solutions | Founded by Ahmed Raza</title>
        <meta name="description" content="Transform your digital presence with DevDazzle. Expert web development, AI solutions, and mobile apps. Founded by Ahmed Raza in 2008." />
      </Helmet>

      <NewNavbar />

      <HeroHighlight containerClassName="pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-5xl mx-auto px-4"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            Transforming{' '}
            <Highlight className="text-white">
              Digital Dreams
            </Highlight>
            {' '}into Reality
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Premium web development, AI solutions, and digital innovation.
            Founded by Ahmed Raza. Trusted by 250+ clients worldwide since 2008.
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
                View Portfolio
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { value: "500+", label: "Projects" },
              { value: "250+", label: "Clients" },
              { value: "15+", label: "Years" },
              { value: "98%", label: "Satisfaction" }
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

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions for modern businesses
            </p>
          </motion.div>

          <BentoGrid>
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <BentoGridItem
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  className="cursor-pointer hover:border-primary transition-all"
                />
              </Link>
            ))}
          </BentoGrid>
        </div>
      </section>

      <NewFooter />
    </>
  );
};

export default Home;
