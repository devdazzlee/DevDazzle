import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowDown, FaPlay } from 'react-icons/fa';
import MagneticButton from '../animations/MagneticButton';
import ScrollReveal from '../animations/ScrollReveal';
import { particlesConfig } from '../../utils/animations';
import './Hero.css';

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="particles-container"
      />

      {/* Gradient Overlay */}
      <div className="hero-gradient-overlay" />

      {/* Background Shapes */}
      <motion.div
        className="hero-shape shape-1"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.div
        className="hero-shape shape-2"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
          <ScrollReveal delay={0.2}>
            <motion.div
              className="hero-badge"
              whileHover={{ scale: 1.05 }}
            >
              <span className="badge-dot"></span>
              <span>Transforming Ideas into Reality</span>
            </motion.div>
          </ScrollReveal>

          {/* Main Heading */}
          <ScrollReveal delay={0.4}>
            <h1 className="hero-title">
              We Build
              <br />
              <span className="gradient-text">
                <TypeAnimation
                  sequence={[
                    'Amazing Websites',
                    2000,
                    'Mobile Apps',
                    2000,
                    'AI Solutions',
                    2000,
                    'Digital Experiences',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal delay={0.6}>
            <p className="hero-subtitle">
              Cutting-edge web development, mobile apps, and AI-powered solutions
              <br />
              tailored to elevate your business to new heights.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={0.8}>
            <div className="hero-cta">
              <Link to="/contact">
                <MagneticButton className="btn btn-primary hero-btn">
                  Get Started
                </MagneticButton>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  className="btn btn-secondary hero-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPlay className="btn-icon" />
                  View Portfolio
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={1}>
            <div className="hero-stats">
              <div className="stat-item">
                <motion.h3
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
                >
                  500+
                </motion.h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <motion.h3
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: 'spring', stiffness: 100 }}
                >
                  250+
                </motion.h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <motion.h3
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6, type: 'spring', stiffness: 100 }}
                >
                  15+
                </motion.h3>
                <p>Years Experience</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          onClick={scrollToContent}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown />
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

