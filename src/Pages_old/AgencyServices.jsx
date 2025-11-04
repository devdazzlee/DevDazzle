import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCode, FaMobile, FaPalette, FaShoppingCart, 
  FaBullhorn, FaLightbulb, FaCheckCircle, FaArrowRight 
} from 'react-icons/fa';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollReveal from '../components/animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';
import { AGENCY_SERVICES } from '../utils/constants';
import './ServicesPage.css';

const AgencyServices = () => {
  const iconMap = {
    FaCode,
    FaMobile,
    FaPalette,
    FaShoppingCart,
    FaBullhorn,
    FaLightbulb
  };

  return (
    <>
      <Helmet>
        <title>Agency Services - DevDazzle</title>
        <meta 
          name="description" 
          content="Comprehensive digital agency services including web development, mobile apps, UI/UX design, e-commerce, and digital marketing." 
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-bg"></div>
        <div className="container">
          <ScrollReveal>
            <div className="services-hero-content">
              <h1 className="services-hero-title">
                Agency <span className="gradient-text">Services</span>
              </h1>
              <p className="services-hero-subtitle">
                Full-service digital agency solutions to transform your business
                and elevate your brand presence
              </p>
              <Link to="/contact">
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
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
            {AGENCY_SERVICES.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <StaggerItem key={service.id}>
                  <motion.div
                    className="service-card card"
                    whileHover={{ y: -10 }}
                  >
                    <div className="service-icon-wrapper">
                      <Icon className="service-icon" />
                    </div>

                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>

                    <div className="service-features">
                      {service.features.map((feature, i) => (
                        <div key={i} className="service-feature-item">
                          <FaCheckCircle className="check-icon" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="service-technologies">
                      <p className="tech-label">Technologies:</p>
                      <div className="tech-tags">
                        {service.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="service-footer">
                      <span className="service-pricing">{service.pricing}</span>
                      <Link to="/contact">
                        <motion.button
                          className="btn btn-secondary btn-sm"
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

      {/* Process Section */}
      <section className="process-section section bg-dark">
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <h2>Our Process</h2>
              <p className="section-subtitle">
                A proven methodology to ensure project success
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="process-steps">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals and requirements' },
              { step: '02', title: 'Planning', desc: 'Creating a detailed project roadmap' },
              { step: '03', title: 'Design', desc: 'Crafting beautiful and functional designs' },
              { step: '04', title: 'Development', desc: 'Building with cutting-edge technology' },
              { step: '05', title: 'Testing', desc: 'Ensuring quality and performance' },
              { step: '06', title: 'Launch', desc: 'Deploying your project to the world' }
            ].map((process, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="process-step"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="process-number">{process.step}</div>
                  <h4 className="process-title">{process.title}</h4>
                  <p className="process-desc">{process.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section">
        <div className="container">
          <ScrollReveal>
            <div className="cta-content">
              <h2>Ready to Start Your Project?</h2>
              <p>Let's discuss how we can help bring your vision to life</p>
              <Link to="/contact">
                <motion.button
                  className="btn btn-primary btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us Today
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

export default AgencyServices;

