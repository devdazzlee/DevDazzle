import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  // ALL SERVICES - Complete List
  const services = [
    // AI & Automation
    { name: 'AI Business Agents', path: '/services/ai-business-agents', category: 'AI & Automation' },
    { name: 'Custom AI Chatbots', path: '/services/ai-chatbots', category: 'AI & Automation' },
    { name: 'AI Content Creation', path: '/services/ai-content-creation', category: 'AI & Automation' },
    { name: 'AI Marketing Automation', path: '/services/ai-marketing', category: 'AI & Automation' },
    { name: 'Predictive Analytics', path: '/services/predictive-analytics', category: 'AI & Automation' },
    { name: 'LLM/GPT Integration', path: '/services/llm-integration', category: 'AI & Automation' },
    { name: 'AI Workflow Automation', path: '/services/ai-workflow', category: 'AI & Automation' },
    { name: 'Computer Vision', path: '/services/computer-vision', category: 'AI & Automation' },
    
    // Web & App Development
    { name: 'Web Development', path: '/services/web-development', category: 'Web & App' },
    { name: 'Web App Development', path: '/services/web-app-development', category: 'Web & App' },
    { name: 'Mobile Apps', path: '/services/mobile-apps', category: 'Web & App' },
    { name: 'E-Commerce', path: '/services/ecommerce', category: 'Web & App' },
    { name: 'API Integration', path: '/services/api-integration', category: 'Web & App' },
    { name: 'CMS Solutions', path: '/services/cms-solutions', category: 'Web & App' },
    { name: 'SEO Optimization', path: '/services/seo-optimization', category: 'Web & App' },
    
    // Design
    { name: 'UI/UX Design', path: '/services/uiux-design', category: 'Design & Branding' },
    { name: 'Brand Identity', path: '/services/brand-identity', category: 'Design & Branding' },
    { name: 'Interface Animation', path: '/services/interface-animation', category: 'Design & Branding' },
    { name: 'Motion Design', path: '/services/motion-design', category: 'Design & Branding' },
    { name: 'Logo Design', path: '/services/logo-design', category: 'Design & Branding' },
    
    // Marketing
    { name: 'Digital Marketing', path: '/services/digital-marketing', category: 'Marketing & Growth' },
    { name: 'Social Media', path: '/services/social-media', category: 'Marketing & Growth' },
    { name: 'Email Marketing', path: '/services/email-marketing', category: 'Marketing & Growth' },
    { name: 'Conversion Optimization', path: '/services/conversion-optimization', category: 'Marketing & Growth' },
    { name: 'Analytics Dashboard', path: '/services/analytics-dashboard', category: 'Marketing & Growth' },
    
    // Advanced Solutions
    { name: 'Custom AI Tools', path: '/services/custom-ai-tools', category: 'Advanced Solutions' },
    { name: 'Smart Dashboards', path: '/services/smart-dashboards', category: 'Advanced Solutions' },
    { name: 'Automation Bots', path: '/services/automation-bots', category: 'Advanced Solutions' },
    { name: 'AI Customer Support', path: '/services/ai-customer-support', category: 'Advanced Solutions' },
  ];

  // Group services by category
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-display font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
            >
              DevDazzle
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={cn("text-sm font-medium transition-colors hover:text-purple-400", location.pathname === "/" ? "text-purple-400" : "text-gray-300")}>
              Home
            </Link>

            {/* Services Mega Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full -left-20 mt-2 w-[650px] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {Object.entries(groupedServices).map(([category, items]) => (
                        <div key={category}>
                          <div className="text-xs font-semibold text-purple-400 mb-3 uppercase tracking-wider">{category}</div>
                          <div className="space-y-2">
                            {items.map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                className="block p-2 rounded-lg hover:bg-white/5 transition-colors group/item"
                              >
                                <div className="text-sm font-medium text-gray-200 group-hover/item:text-purple-400 transition-colors">
                                  {service.name}
                                </div>
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

            <Link to="/portfolio" className={cn("text-sm font-medium transition-colors hover:text-purple-400", location.pathname === "/portfolio" ? "text-purple-400" : "text-gray-300")}>
              Portfolio
            </Link>

            <Link to="/about" className={cn("text-sm font-medium transition-colors hover:text-purple-400", location.pathname === "/about" ? "text-purple-400" : "text-gray-300")}>
              About
            </Link>

            <Link to="/careers" className={cn("text-sm font-medium transition-colors hover:text-purple-400", location.pathname === "/careers" ? "text-purple-400" : "text-gray-300")}>
              Careers
            </Link>

            <Link to="/contact">
              <Button variant="gradient" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4 space-y-4 max-h-[80vh] overflow-y-auto"
            >
              <Link to="/" className="block px-4 py-2 rounded-lg hover:bg-white/5" onClick={() => setIsOpen(false)}>Home</Link>
              
              <div className="space-y-2">
                <div className="px-4 py-2 font-medium text-sm text-purple-400">Services</div>
                {services.map((service) => (
                  <Link key={service.path} to={service.path} className="block px-6 py-2 text-sm rounded-lg hover:bg-white/5" onClick={() => setIsOpen(false)}>
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link to="/portfolio" className="block px-4 py-2 rounded-lg hover:bg-white/5" onClick={() => setIsOpen(false)}>Portfolio</Link>
              <Link to="/about" className="block px-4 py-2 rounded-lg hover:bg-white/5" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/careers" className="block px-4 py-2 rounded-lg hover:bg-white/5" onClick={() => setIsOpen(false)}>Careers</Link>
              <Link to="/contact" className="block px-4 py-2" onClick={() => setIsOpen(false)}>
                <Button variant="gradient" className="w-full">Get Started</Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NewNavbar;
