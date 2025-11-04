import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaRocket } from 'react-icons/fa';
import MagneticButton from '../animations/MagneticButton';
import ScrollReveal from '../animations/ScrollReveal';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section section">
      <div className="cta-gradient-bg"></div>
      
      <div className="container">
        <div className="cta-content">
          <ScrollReveal>
            <motion.div
              className="cta-icon"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <FaRocket />
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="cta-title">
              Ready to Transform Your
              <br />
              <span className="gradient-text">Digital Presence?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="cta-description">
              Let's collaborate to bring your vision to life with cutting-edge technology
              and innovative solutions tailored to your business needs.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="cta-buttons">
              <Link to="/contact">
                <MagneticButton className="btn btn-primary cta-btn">
                  Get Started Now
                  <FaArrowRight className="btn-icon" />
                </MagneticButton>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  className="btn btn-secondary cta-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <div className="cta-features">
              <div className="cta-feature">
                <div className="feature-check">✓</div>
                <span>Free Consultation</span>
              </div>
              <div className="cta-feature">
                <div className="feature-check">✓</div>
                <span>24/7 Support</span>
              </div>
              <div className="cta-feature">
                <div className="feature-check">✓</div>
                <span>Money-Back Guarantee</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="cta-shape shape-1"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.div
        className="cta-shape shape-2"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </section>
  );
};

export default CTASection;

