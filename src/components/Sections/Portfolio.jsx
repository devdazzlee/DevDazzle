import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ScrollReveal from '../animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '../animations/StaggerContainer';
import { PORTFOLIO_PROJECTS } from '../../utils/constants';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(PORTFOLIO_PROJECTS.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

  return (
    <section className="portfolio section">
      <div className="container">
        <ScrollReveal>
          <div className="section-title">
            <h2>Our Recent Work</h2>
            <p className="section-subtitle">
              Explore our portfolio of successful projects across various industries
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={0.2}>
          <div className="portfolio-filters">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="portfolio-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="portfolio-card card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <div className="project-image-placeholder">
                    <span>{project.title.charAt(0)}</span>
                  </div>
                  <div className="project-overlay">
                    <motion.a
                      href={project.link}
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>

                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        <ScrollReveal delay={0.6}>
          <div className="portfolio-cta">
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Portfolio;

