import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Globe, CheckCircle, ArrowRight, Sparkles, Zap, Users, Award, Star, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import MegaNavbar from '../components/layout/MegaNavbar';
import NewFooter from '../components/layout/NewFooter';
import { LampContainer } from '../components/ui/lamp';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/toast';
import { COMPANY_INFO, STATS } from '../utils/company-data';
import { API_ENDPOINTS } from '../utils/api';
import { cn } from '../lib/utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(API_ENDPOINTS.contact, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
        setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        showToast(data.error || 'Failed to send message. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showToast('Network error. Please check your connection and try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    { icon: Mail, label: "Email", value: COMPANY_INFO.email, color: "from-cyan-500 to-cyan-600", href: `mailto:${COMPANY_INFO.email}` },
    { icon: Phone, label: "Phone", value: COMPANY_INFO.phone, color: "from-purple-500 to-purple-600", href: `tel:${COMPANY_INFO.phone}` },
    { icon: MapPin, label: "Address", value: COMPANY_INFO.address, color: "from-pink-500 to-pink-600", href: "#" },
    { icon: Clock, label: "Business Hours", value: "Mon-Fri: 9AM-6PM PST", color: "from-cyan-500 to-pink-600", href: "#" }
  ];

  const offices = [
    { city: "San Francisco", country: "USA", icon: Globe, color: "from-cyan-500 to-cyan-600" },
    { city: "New York", country: "USA", icon: Globe, color: "from-purple-500 to-purple-600" },
    { city: "London", country: "UK", icon: Globe, color: "from-pink-500 to-pink-600" },
    { city: "Dubai", country: "UAE", icon: Globe, color: "from-cyan-500 to-purple-600" },
    { city: "Singapore", country: "Singapore", icon: Globe, color: "from-purple-500 to-pink-600" },
    { city: "Mumbai", country: "India", icon: Globe, color: "from-pink-500 to-pink-600" }
  ];

  const reasons = [
    { icon: Zap, title: "Fast Response", description: "We respond to all inquiries within 24 hours" },
    { icon: Users, title: "Expert Team", description: "50+ experienced professionals ready to help" },
    { icon: Award, title: "Proven Track Record", description: "500+ successful projects delivered" },
    { icon: Star, title: "98% Satisfaction", description: "Client satisfaction is our top priority" }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - DevDazzle | Get in Touch</title>
        <meta name="description" content="Contact DevDazzle for your web development, AI, and digital transformation needs. Founded by Ahmed Raza." />
      </Helmet>

      <MegaNavbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-28 sm:h-32 md:h-36"></div>

      {/* SECTION 1: DRAMATIC HERO */}
      <LampContainer className="pb-6 md:pb-10 pt-0 !min-h-[40vh] md:!min-h-[50vh]">
        <motion.div
          style={{ opacity, scale }}
          className="flex flex-col items-center justify-center relative z-[100] -mt-16 sm:-mt-20 md:-mt-24"
        >
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 sm:mb-6 md:mb-8"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-400/50 md:border-2 rounded-full px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 shadow-2xl shadow-cyan-500/50 backdrop-blur-sm max-w-[calc(100vw-2rem)] sm:max-w-none">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-6 md:w-6 text-cyan-400 animate-pulse flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white text-center leading-tight whitespace-nowrap">
                <span className="hidden sm:inline">24/7 Support • 24hr Response • Global Offices</span>
                <span className="sm:hidden">24/7 Support • <span className="text-cyan-400">Global</span></span>
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="bg-gradient-to-br from-white to-gray-400 py-4 md:py-6 bg-clip-text text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-transparent leading-tight px-4"
          >
            LET'S WORK TOGETHER
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 md:mt-12 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl text-center leading-relaxed font-medium px-4"
          >
            Have a project in mind? Get in touch and let's create something amazing together. We're here to help transform your digital dreams into reality.
          </motion.p>
        </motion.div>
      </LampContainer>

      {/* SECTION 2: CONTACT METHODS */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <a href={method.href} className="block w-full h-full">
                  <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative w-full h-full p-6 lg:p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                    <div className="text-center">
                      <div className={cn("w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 lg:mb-6 rounded-xl bg-gradient-to-br flex items-center justify-center", method.color)}>
                        <method.icon className="h-7 w-7 lg:h-8 lg:w-8 text-white" />
                      </div>
                      <h3 className="text-lg lg:text-xl font-display font-bold mb-2 lg:mb-3 text-white">{method.label}</h3>
                      <p className="text-gray-400 leading-relaxed text-sm lg:text-base break-words">{method.value}</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CONTACT FORM & INFO */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative w-full p-6 lg:p-10 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                <div className="w-full">
                    <h3 className="text-3xl lg:text-4xl font-display font-bold mb-4 lg:mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Send Us a Message
                    </h3>
                    <p className="text-gray-400 mb-6 lg:mb-8 text-base lg:text-lg">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl p-8 text-center"
                      >
                        <CheckCircle className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
                        <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                        <p className="text-gray-300">We'll get back to you soon.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label className="text-sm font-medium text-gray-300 mb-2 block">Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-300 mb-2 block">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-300 mb-2 block">Company</label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              disabled={loading}
                              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                              placeholder="Your company"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-300 mb-2 block">Phone</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              disabled={loading}
                              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-300 mb-2 block">Subject *</label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="What's this about?"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-300 mb-2 block">Message *</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            rows="6"
                            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Tell us about your project..."
                          ></textarea>
                        </div>
                        <Button 
                          type="submit" 
                          variant="gradient" 
                          className="w-full" 
                          size="lg"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-8 w-full"
            >
              <div className="bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 relative w-full p-6 lg:p-10 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                <div className="w-full">
                    <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4 lg:mb-6 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                      Why Choose DevDazzle?
                    </h3>
                    <div className="space-y-4 lg:space-y-6">
                      {reasons.map((reason, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 lg:gap-4"
                        >
                          <div className={cn(
                            "w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0",
                            index % 4 === 0 ? "from-cyan-500 to-cyan-600" :
                            index % 4 === 1 ? "from-purple-500 to-purple-600" :
                            index % 4 === 2 ? "from-pink-500 to-pink-600" :
                            "from-cyan-500 to-pink-600"
                          )}>
                            <reason.icon className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg lg:text-xl font-semibold text-white mb-1 lg:mb-2">{reason.title}</h4>
                            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">{reason.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative w-full p-6 lg:p-10 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                <div className="w-full">
                    <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4 lg:mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                      Quick Stats
                    </h3>
                    <div className="grid grid-cols-2 gap-4 lg:gap-6">
                      {STATS.slice(0, 4).map((stat, index) => (
                        <div key={stat.id} className="text-center">
                          <div className="text-3xl lg:text-4xl font-display font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                            {stat.number}{stat.suffix}
                          </div>
                          <div className="text-xs lg:text-sm text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: GLOBAL OFFICES */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Global Offices
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Serving clients worldwide from our global network
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative w-full h-full p-6 lg:p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <div className="text-center">
                    <div className={cn("w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 lg:mb-6 rounded-xl bg-gradient-to-br flex items-center justify-center", office.color)}>
                      <office.icon className="h-7 w-7 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-display font-bold mb-2 text-white">{office.city}</h3>
                    <p className="text-gray-400 text-sm lg:text-base">{office.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch today and let's discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gradient" size="lg" className="text-lg px-8 py-6" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Send Message <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <NewFooter />
    </>
  );
};

export default Contact;
