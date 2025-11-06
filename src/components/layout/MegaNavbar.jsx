import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';

const MegaNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const servicesButtonRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const allServices = [
    // AI & Automation
    { name: 'AI Business Agents', path: '/services/ai-business-agents', cat: '🧠 AI & Automation' },
    { name: 'Custom AI Chatbots', path: '/services/ai-chatbots', cat: '🧠 AI & Automation' },
    { name: 'AI Content Creation', path: '/services/ai-content-creation', cat: '🧠 AI & Automation' },
    { name: 'AI Marketing Automation', path: '/services/ai-marketing', cat: '🧠 AI & Automation' },
    { name: 'Predictive Analytics', path: '/services/predictive-analytics', cat: '🧠 AI & Automation' },
    { name: 'LLM/GPT Integration', path: '/services/llm-integration', cat: '🧠 AI & Automation' },
    { name: 'AI Workflow Automation', path: '/services/ai-workflow', cat: '🧠 AI & Automation' },
    { name: 'Computer Vision', path: '/services/computer-vision', cat: '🧠 AI & Automation' },
    
    // Web & App
    { name: 'Web Development', path: '/services/web-development', cat: '💻 Web & App' },
    { name: 'Web App Development', path: '/services/web-app-development', cat: '💻 Web & App' },
    { name: 'Mobile Apps', path: '/services/mobile-apps', cat: '💻 Web & App' },
    { name: 'E-Commerce', path: '/services/ecommerce', cat: '💻 Web & App' },
    { name: 'API Integration', path: '/services/api-integration', cat: '💻 Web & App' },
    { name: 'CMS Solutions', path: '/services/cms-solutions', cat: '💻 Web & App' },
    { name: 'SEO Optimization', path: '/services/seo-optimization', cat: '💻 Web & App' },
    
    // Design
    { name: 'UI/UX Design', path: '/services/uiux-design', cat: '🎨 Design' },
    { name: 'Brand Identity', path: '/services/brand-identity', cat: '🎨 Design' },
    { name: 'Interface Animation', path: '/services/interface-animation', cat: '🎨 Design' },
    { name: 'Motion Design', path: '/services/motion-design', cat: '🎨 Design' },
    { name: 'Logo Design', path: '/services/logo-design', cat: '🎨 Design' },
    
    // Marketing
    { name: 'Digital Marketing', path: '/services/digital-marketing', cat: '📈 Marketing' },
    { name: 'Social Media', path: '/services/social-media', cat: '📈 Marketing' },
    { name: 'Email Marketing', path: '/services/email-marketing', cat: '📈 Marketing' },
    { name: 'Conversion Optimization', path: '/services/conversion-optimization', cat: '📈 Marketing' },
    { name: 'Analytics Dashboard', path: '/services/analytics-dashboard', cat: '📈 Marketing' },
  ];

  const groupedServices = {};
  allServices.forEach(service => {
    if (!groupedServices[service.cat]) groupedServices[service.cat] = [];
    groupedServices[service.cat].push(service);
  });

  // Calculate dropdown position to prevent overflow
  useEffect(() => {
    if (servicesOpen && servicesButtonRef.current && dropdownRef.current) {
      const buttonRect = servicesButtonRef.current.getBoundingClientRect();
      const dropdown = dropdownRef.current;
      const viewportWidth = window.innerWidth;
      const dropdownMaxWidth = 850;
      const dropdownWidth = Math.min(dropdownMaxWidth, viewportWidth - 40);
      
      // Calculate left position (align to button left edge)
      let leftPosition = 0;
      
      // Check if dropdown would overflow on the right
      const dropdownRightEdge = buttonRect.left + dropdownWidth;
      if (dropdownRightEdge > viewportWidth - 20) {
        // Adjust to prevent overflow - position from right edge
        leftPosition = viewportWidth - buttonRect.left - dropdownWidth - 20;
      }
      
      setDropdownStyle({
        width: `${dropdownWidth}px`,
        maxWidth: `${dropdownWidth}px`,
        left: `${leftPosition}px`,
        transform: 'translateX(0)'
      });
    }
  }, [servicesOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-[9999] px-4 md:px-[5%]"
    >
      <div className="w-full md:w-[90%] mx-auto mt-4 md:mt-6 bg-black/40 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 md:gap-3"
            >
              <Sparkles className="h-5 w-5 md:h-8 md:w-8 text-cyan-400 animate-pulse" />
              <span className="text-xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                DevDazzle
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                "text-base font-medium transition-all hover:text-cyan-400 hover:scale-110",
                location.pathname === "/" ? "text-cyan-400" : "text-white"
              )}
            >
              Home
            </Link>

            {/* MEGA Services Dropdown */}
            <div
              ref={servicesButtonRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center space-x-2 text-base font-medium text-white hover:text-cyan-400 transition-all hover:scale-110">
                <span>Services</span>
                <motion.div
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    ref={dropdownRef}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 mt-4 bg-black/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-purple-500/30 p-4 md:p-8 max-h-[80vh] overflow-y-auto z-50"
                    style={dropdownStyle}
                  >
                    <div className="grid grid-cols-2 gap-8">
                      {Object.entries(groupedServices).map(([category, items]) => (
                        <div key={category}>
                          <div className="text-sm font-bold text-cyan-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                            {category}
                          </div>
                          <div className="space-y-1">
                            {items.map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                className="block p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all group"
                              >
                                <motion.div
                                  whileHover={{ x: 5 }}
                                  className="text-sm font-medium text-gray-200 group-hover:text-cyan-400 transition-colors"
                                >
                                  {service.name}
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/portfolio"
              className={cn(
                "text-base font-medium transition-all hover:text-cyan-400 hover:scale-110",
                location.pathname === "/portfolio" ? "text-cyan-400" : "text-white"
              )}
            >
              Portfolio
            </Link>

            <Link
              to="/about"
              className={cn(
                "text-base font-medium transition-all hover:text-cyan-400 hover:scale-110",
                location.pathname === "/about" ? "text-cyan-400" : "text-white"
              )}
            >
              About
            </Link>

            <Link
              to="/careers"
              className={cn(
                "text-base font-medium transition-all hover:text-cyan-400 hover:scale-110",
                location.pathname === "/careers" ? "text-cyan-400" : "text-white"
              )}
            >
              Careers
            </Link>

            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="gradient" size="lg" className="shadow-lg shadow-purple-500/50">
                  Get Started
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="h-7 w-7 text-cyan-400" /> : <Menu className="h-7 w-7 text-cyan-400" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden px-4 pb-6 max-h-[70vh] overflow-y-auto"
            >
              <div className="space-y-2">
                <Link to="/" className="block px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                
                <div className="px-4 py-2 font-bold text-cyan-400 text-sm">ALL SERVICES</div>
                {allServices.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-6 py-2 text-sm rounded-lg hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}

                <Link to="/portfolio" className="block px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20" onClick={() => setIsOpen(false)}>
                  Portfolio
                </Link>
                <Link to="/about" className="block px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link to="/careers" className="block px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20" onClick={() => setIsOpen(false)}>
                  Careers
                </Link>
                
                <Link to="/contact" className="block px-4 py-3" onClick={() => setIsOpen(false)}>
                  <Button variant="gradient" className="w-full">Get Started</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default MegaNavbar;

