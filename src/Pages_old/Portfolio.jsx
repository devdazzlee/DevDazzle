import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import NewNavbar from '../components/layout/NewNavbar';
import NewFooter from '../components/layout/NewFooter';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { PORTFOLIO_PROJECTS } from '../utils/company-data';

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - DevDazzle | Our Work & Case Studies</title>
        <meta name="description" content="Explore DevDazzle's portfolio of successful projects. Web apps, AI solutions, mobile apps, and more." />
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
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real projects, real results. See how we've helped businesses transform their digital presence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:border-primary transition-all">
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-t-lg flex items-center justify-center text-white text-4xl font-bold">
                    {project.title.charAt(0)}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {project.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold mb-2">Technologies:</div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, idx) => (
                            <span key={idx} className="text-xs bg-accent px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href={project.link}
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        View Case Study <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NewFooter />
    </>
  );
};

export default Portfolio;

