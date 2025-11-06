import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {  FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoutube,
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaExternalLinkAlt
} from 'react-icons/fa';
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from '../../utils/constants';
import ScrollReveal from '../animations/ScrollReveal';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribeStatus('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => setSubscribeStatus(''), 3000);
    }
  };

  const iconMap = {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaGithub,
    FaYoutube,
    FaExternalLinkAlt
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Company Info */}
          <ScrollReveal direction="left" className="footer-column">
            <div className="footer-brand">
              <h3 className="footer-logo gradient-text">DevDazzle</h3>
              <p className="footer-description">
                Transforming ideas into reality with cutting-edge web development,
                mobile apps, and AI solutions.
              </p>
              <div className="footer-social">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal direction="up" delay={0.1} className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-link">
                    <FaArrowRight className="link-icon" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal direction="up" delay={0.2} className="footer-column">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/services/agency" className="footer-link">
                  <FaArrowRight className="link-icon" />
                  Agency Services
                </Link>
              </li>
              <li>
                <Link to="/services/ai" className="footer-link">
                  <FaArrowRight className="link-icon" />
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  <FaArrowRight className="link-icon" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  <FaArrowRight className="link-icon" />
                  Mobile Apps
                </Link>
              </li>
            </ul>
          </ScrollReveal>

          {/* Contact & Newsletter */}
          <ScrollReveal direction="right" delay={0.3} className="footer-column">
            <h4 className="footer-heading">Stay Connected</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="newsletter">
              <p className="newsletter-text">Subscribe to our newsletter</p>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <motion.button
                  type="submit"
                  className="newsletter-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaArrowRight />
                </motion.button>
              </form>
              {subscribeStatus && (
                <motion.p
                  className="subscribe-status"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {subscribeStatus}
                </motion.p>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} DevDazzle. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="divider">•</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="divider">•</span>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="footer-bg-gradient"></div>
      <motion.div
        className="footer-float-shape"
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
    </footer>
  );
};

export default Footer;

