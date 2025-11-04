import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ScrollReveal from '../animations/ScrollReveal';
import { TESTIMONIALS } from '../../utils/constants';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="testimonials section">
      <div className="container">
        <ScrollReveal>
          <div className="section-title">
            <h2>What Our Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
        </ScrollReveal>

        <div className="testimonials-wrapper">
          <motion.button
            className="testimonial-nav-btn prev"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </motion.button>

          <div className="testimonial-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>

                <div className="testimonial-rating">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <FaStar className="star-icon" />
                    </motion.span>
                  ))}
                </div>

                <p className="testimonial-text">"{currentTestimonial.text}"</p>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    <span>{currentTestimonial.name.charAt(0)}</span>
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{currentTestimonial.name}</h4>
                    <p className="author-role">{currentTestimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="testimonial-dots">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <motion.button
            className="testimonial-nav-btn next"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </motion.button>
        </div>

        {/* Client Logos/Stats */}
        <ScrollReveal delay={0.4}>
          <div className="testimonial-stats">
            <div className="stat-box">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-box">
              <h3>250+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-box">
              <h3>4.9/5</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Background Gradient */}
      <div className="testimonials-bg-gradient"></div>
    </section>
  );
};

export default Testimonials;

