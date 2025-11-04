import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRobot, FaBrain, FaEye, FaPen, 
  FaChartLine, FaCog, FaCheckCircle, FaArrowRight 
} from 'react-icons/fa';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollReveal from '../components/animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';
import { AI_SERVICES } from '../utils/constants';
import './ServicesPage.css';

const AIServices = () => {
  const iconMap = {
    FaRobot,
    FaBrain,
    FaEye,
    FaPen,
    FaChartLine,
    FaCog
  };

  return (
    <>
      <Helmet>
        <title>AI Solutions - DevDazzle</title>
        <meta 
          name="description" 
          content="Advanced AI solutions including chatbots, machine learning, computer vision, content generation, and data analytics." 
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="services-hero ai-hero">
        <div className="services-hero-bg ai-gradient"></div>
        <div className="container">
          <ScrollReveal>
            <div className="services-hero-content">
              <h1 className="services-hero-title">
                AI <span className="gradient-text ai-gradient-text">Solutions</span>
              </h1>
              <p className="services-hero-subtitle">
                Harness the power of artificial intelligence to automate, analyze,
                and innovate your business processes
              </p>
              <Link to="/contact">
                <motion.button
                  className="btn btn-primary ai-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore AI Solutions
                  <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section section">
        <div className="container">
          <StaggerContainer className="services-grid">
            {AI_SERVICES.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <StaggerItem key={service.id}>
                  <motion.div
                    className="service-card card ai-card"
                    whileHover={{ y: -10 }}
                  >
                    <div className="service-icon-wrapper ai-icon-wrapper">
                      <Icon className="service-icon" />
                    </div>

                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>

                    <div className="service-features">
                      {service.features.map((feature, i) => (
                        <div key={i} className="service-feature-item">
                          <FaCheckCircle className="check-icon ai-check" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="service-technologies">
                      <p className="tech-label">Technologies:</p>
                      <div className="tech-tags">
                        {service.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag ai-tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="service-footer">
                      <span className="service-pricing">{service.pricing}</span>
                      <Link to="/contact">
                        <motion.button
                          className="btn btn-secondary btn-sm ai-btn-secondary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Get Quote
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="ai-capabilities section bg-dark">
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <h2>AI Capabilities</h2>
              <p className="section-subtitle">
                What artificial intelligence can do for your business
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="capabilities-grid">
            {[
              { title: 'Automation', desc: 'Automate repetitive tasks and workflows', icon: '🤖' },
              { title: 'Prediction', desc: 'Forecast trends and make data-driven decisions', icon: '🔮' },
              { title: 'Personalization', desc: 'Deliver personalized experiences at scale', icon: '🎯' },
              { title: 'Optimization', desc: 'Optimize processes for maximum efficiency', icon: '⚡' },
              { title: 'Insights', desc: 'Extract valuable insights from complex data', icon: '💡' },
              { title: 'Intelligence', desc: 'Add smart features to your applications', icon: '🧠' }
            ].map((capability, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="capability-card card"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="capability-icon">{capability.icon}</div>
                  <h4>{capability.title}</h4>
                  <p>{capability.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section ai-cta">
        <div className="container">
          <ScrollReveal>
            <div className="cta-content">
              <h2>Ready to Integrate AI?</h2>
              <p>Transform your business with cutting-edge AI solutions</p>
              <Link to="/contact">
                <motion.button
                  className="btn btn-primary btn-lg ai-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Consultation
                  <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AIServices;

