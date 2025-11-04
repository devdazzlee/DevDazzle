import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { NAV_LINKS } from '../../utils/constants';
import MagneticButton from '../animations/MagneticButton';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  const toggleSubmenu = (name) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-text gradient-text">DevDazzle</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-menu desktop-menu">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="nav-item">
              {link.submenu ? (
                <div 
                  className="nav-link-wrapper"
                  onMouseEnter={() => setActiveSubmenu(link.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <span className="nav-link">
                    {link.name}
                    <FaChevronDown className="chevron-icon" />
                  </span>
                  
                  <AnimatePresence>
                    {activeSubmenu === link.name && (
                      <motion.div
                        className="submenu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.path}
                            className="submenu-link"
                          >
                            <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              {sublink.name}
                            </motion.div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="navbar-cta desktop-only">
          <Link to="/contact">
            <MagneticButton className="btn btn-primary">
              Get Started
            </MagneticButton>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-list">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.name}
                  className="mobile-nav-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.submenu ? (
                    <div>
                      <button
                        className="mobile-nav-link"
                        onClick={() => toggleSubmenu(link.name)}
                      >
                        {link.name}
                        <motion.span
                          animate={{ rotate: activeSubmenu === link.name ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {activeSubmenu === link.name && (
                          <motion.div
                            className="mobile-submenu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.name}
                                to={sublink.path}
                                className="mobile-submenu-link"
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.li>
              ))}
              <motion.li
                className="mobile-nav-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
              >
                <Link to="/contact" className="mobile-cta-btn btn btn-primary">
                  Get Started
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

