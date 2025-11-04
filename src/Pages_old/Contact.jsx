import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import NewNavbar from '../components/layout/NewNavbar';
import NewFooter from '../components/layout/NewFooter';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { COMPANY_INFO } from '../utils/company-data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - DevDazzle | Get in Touch</title>
        <meta name="description" content="Contact DevDazzle for your web development, AI, and digital transformation needs. Founded by Ahmed Raza." />
      </Helmet>

      <NewNavbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? Get in touch and let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Your company (optional)"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    <Button type="submit" variant="gradient" className="w-full" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Office</div>
                      <p className="text-muted-foreground">
                        {COMPANY_INFO.address}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Global Offices</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {COMPANY_INFO.globalOffices.map((office, index) => (
                      <span key={index} className="px-3 py-1 bg-accent rounded-lg text-sm">
                        {office}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <NewFooter />
    </>
  );
};

export default Contact;
