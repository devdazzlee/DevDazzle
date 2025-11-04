import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaRobot, FaPalette, FaRocket, FaShieldAlt } from 'react-icons/fa';
import ScrollReveal from '../animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '../animations/StaggerContainer';
import './Features.css';

const features = [
  {
    id: 1,
    icon: FaCode,
    title: 'Web Development',
    description: 'Custom websites built with cutting-edge technologies for optimal performance and user experience.',
    color: '#6366f1'
  },
  {
    id: 2,
    icon: FaMobile,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android with seamless functionality.',
    color: '#ec4899'
  },
  {
    id: 3,
    icon: FaRobot,
    title: 'AI Solutions',
    description: 'Intelligent AI-powered applications using machine learning and natural language processing.',
    color: '#10b981'
  },
  {
    id: 4,
    icon: FaPalette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with user-centered principles and modern aesthetics.',
    color: '#f59e0b'
  },
  {
    id: 5,
    icon: FaRocket,
    title: 'Performance',
    description: 'Lightning-fast applications optimized for speed, scalability, and exceptional performance.',
    color: '#8b5cf6'
  },
  {
    id: 6,
    icon: FaShieldAlt,
    title: 'Security',
    description: 'Enterprise-grade security measures to protect your data and ensure compliance.',
    color: '#06b6d4'
  }
];

const Features = () => {
  return (
    <section className="features section">
      <div className="container">
        <ScrollReveal>
          <div className="section-title">
            <h2>Why Choose DevDazzle?</h2>
            <p className="section-subtitle">
              We combine technical expertise with creative innovation to deliver
              exceptional digital solutions
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="features-grid">
          {features.map((feature, index) => (
            <StaggerItem key={feature.id}>
              <motion.div
                className="feature-card card"
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 20px 40px ${feature.color}20`
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="feature-icon-wrapper"
                  style={{ background: `${feature.color}15` }}
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon 
                    className="feature-icon" 
                    style={{ color: feature.color }}
                  />
                </motion.div>

                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>

                <motion.div 
                  className="feature-learn-more"
                  whileHover={{ x: 5 }}
                >
                  Learn More →
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Background Elements */}
      <div className="features-bg-dots bg-dots"></div>
    </section>
  );
};

export default Features;

