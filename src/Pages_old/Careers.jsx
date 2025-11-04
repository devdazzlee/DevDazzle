import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewNavbar from '../components/layout/NewNavbar';
import NewFooter from '../components/layout/NewFooter';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';

const Careers = () => {
  const openings = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "San Francisco / Remote",
      type: "Full-time",
      description: "Build scalable web applications with React, Node.js, and cloud technologies."
    },
    {
      title: "AI/ML Engineer",
      department: "AI & Research",
      location: "Remote",
      type: "Full-time",
      description: "Develop cutting-edge AI solutions using GPT, TensorFlow, and PyTorch."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "San Francisco / Hybrid",
      type: "Full-time",
      description: "Create beautiful, user-centered designs for web and mobile applications."
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description: "Manage cloud infrastructure, CI/CD pipelines, and deployment automation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Join DevDazzle | Founded by Ahmed Raza</title>
        <meta name="description" content="Join the DevDazzle team. Work on exciting projects with cutting-edge technology. Remote and office positions available." />
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
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build the future of digital innovation with DevDazzle. 
              Work with talented people on exciting projects using cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {job.department}
                      </span>
                      <span className="text-xs bg-accent px-2 py-1 rounded">
                        {job.type}
                      </span>
                    </div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Apply Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-display font-bold mb-4">
              Don't see the right position?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented people. Send us your resume!
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="lg">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <NewFooter />
    </>
  );
};

export default Careers;

