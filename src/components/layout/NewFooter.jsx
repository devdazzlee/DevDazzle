import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Github, Twitter, Linkedin, Instagram, Mail, 
  MapPin, Phone, ArrowRight 
} from 'lucide-react';
import { Button } from '../ui/button';

const NewFooter = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services/web-development' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile Apps', path: '/services/mobile-apps' },
    { name: 'AI Solutions', path: '/services/ai-solutions' },
    { name: 'UI/UX Design', path: '/services/uiux-design' },
    { name: 'E-commerce', path: '/services/ecommerce' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/devdazzle', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/devdazzle', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/devdazzle', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/devdazzle', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-slate-950 border-t border-border">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h3 className="text-3xl font-display font-bold mb-4">
            Stay Updated with DevDazzle
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get the latest insights on web development, AI, and digital innovation
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button variant="gradient" size="lg">
              Subscribe
            </Button>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-display font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                DevDazzle
              </h2>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Founded by Ahmed Raza in 2008, DevDazzle transforms digital dreams into reality with cutting-edge technology and creative excellence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Innovation Drive, San Francisco, CA 94105</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contact@devdazzle.com" className="hover:text-primary transition-colors">
                  contact@devdazzle.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 mb-6">
              {legal.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-accent hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} DevDazzle. Founded by Ahmed Raza. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span>Made with ❤️ in San Francisco</span>
            <span>•</span>
            <span>Trusted by 250+ clients worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;

