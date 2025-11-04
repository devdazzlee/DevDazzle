import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';
import NewNavbar from '../components/layout/NewNavbar';
import NewFooter from '../components/layout/NewFooter';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { COMPANY_INFO, TEAM_MEMBERS, STATS } from '../utils/company-data';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - DevDazzle | Founded by Ahmed Raza</title>
        <meta name="description" content="Learn about DevDazzle, founded by Ahmed Raza in 2008. Our mission, team, and commitment to digital excellence." />
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
              About DevDazzle
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded by Ahmed Raza in 2008, DevDazzle has been transforming digital dreams into reality for over 15 years.
            </p>
          </motion.div>

          {/* Founder Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-6xl font-bold">
                    AR
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold mb-4">
                    {COMPANY_INFO.founder.name}
                  </h2>
                  <p className="text-xl text-primary mb-4">{COMPANY_INFO.founder.title}</p>
                  <p className="text-muted-foreground mb-6">
                    {COMPANY_INFO.founder.bio}
                  </p>
                  <div className="flex gap-4">
                    <a href={COMPANY_INFO.founder.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <div className="w-10 h-10 rounded-lg bg-accent hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                        <Linkedin className="h-5 w-5" />
                      </div>
                    </a>
                    <a href={COMPANY_INFO.founder.social.twitter} target="_blank" rel="noopener noreferrer">
                      <div className="w-10 h-10 rounded-lg bg-accent hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                        <Twitter className="h-5 w-5" />
                      </div>
                    </a>
                    <a href={COMPANY_INFO.founder.social.github} target="_blank" rel="noopener noreferrer">
                      <div className="w-10 h-10 rounded-lg bg-accent hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                        <Github className="h-5 w-5" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-display font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-center mb-12">Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center hover:border-primary transition-all">
                    <CardHeader>
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.expertise.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <NewFooter />
    </>
  );
};

export default About;
