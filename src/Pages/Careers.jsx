import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, DollarSign, Users, Heart, Zap, Award, Globe, Coffee, Rocket, ArrowRight, CheckCircle, Sparkles, TrendingUp, Code, Brain, Palette, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import MegaNavbar from '../components/layout/MegaNavbar';
import NewFooter from '../components/layout/NewFooter';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';
import { LampContainer } from '../components/ui/lamp';
import { Button } from '../components/ui/button';
import { cn } from '../lib/utils';

const Careers = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  const openings = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "San Francisco / Remote",
      type: "Full-time",
      salary: "$120k - $180k",
      description: "Build scalable web applications with React, Node.js, and cloud technologies.",
      requirements: [
        "5+ years of full-stack development experience",
        "Expert in React, Node.js, TypeScript",
        "Experience with cloud platforms (AWS, GCP, Azure)",
        "Strong problem-solving and communication skills"
      ],
      icon: Code,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "AI & Research",
      location: "Remote",
      type: "Full-time",
      salary: "$140k - $200k",
      description: "Develop cutting-edge AI solutions using GPT, TensorFlow, and PyTorch.",
      requirements: [
        "PhD or Master's in Computer Science or related field",
        "Experience with ML frameworks (TensorFlow, PyTorch)",
        "Strong background in NLP and computer vision",
        "Published research papers preferred"
      ],
      icon: Brain,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Senior UI/UX Designer",
      department: "Design",
      location: "San Francisco / Hybrid",
      type: "Full-time",
      salary: "$100k - $150k",
      description: "Create beautiful, user-centered designs for web and mobile applications.",
      requirements: [
        "5+ years of UI/UX design experience",
        "Proficient in Figma, Sketch, Adobe Creative Suite",
        "Strong portfolio demonstrating design thinking",
        "Experience with design systems and component libraries"
      ],
      icon: Palette,
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      salary: "$130k - $190k",
      description: "Manage cloud infrastructure, CI/CD pipelines, and deployment automation.",
      requirements: [
        "4+ years of DevOps/SRE experience",
        "Expert in Kubernetes, Docker, Terraform",
        "Experience with monitoring and logging tools",
        "Strong scripting skills (Python, Bash)"
      ],
      icon: Shield,
      color: "from-cyan-500 to-purple-600"
    },
    {
      id: 5,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco / Remote",
      type: "Full-time",
      salary: "$130k - $180k",
      description: "Lead product strategy and roadmap for innovative digital solutions.",
      requirements: [
        "5+ years of product management experience",
        "Experience with agile methodologies",
        "Strong analytical and strategic thinking",
        "Excellent communication and leadership skills"
      ],
      icon: Rocket,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 6,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$70k - $100k",
      description: "Drive growth through digital marketing campaigns and content strategy.",
      requirements: [
        "3+ years of digital marketing experience",
        "Expert in SEO, SEM, social media marketing",
        "Experience with analytics tools (Google Analytics, Mixpanel)",
        "Strong content creation skills"
      ],
      icon: TrendingUp,
      color: "from-pink-500 to-pink-600"
    }
  ];

  const benefits = [
    { icon: DollarSign, title: "Competitive Salary", description: "Top-tier compensation packages with equity options" },
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive health, dental, and vision insurance" },
    { icon: Coffee, title: "Flexible Work", description: "Remote work options and flexible hours" },
    { icon: Award, title: "Learning Budget", description: "$5,000 annual learning and development budget" },
    { icon: Globe, title: "Global Team", description: "Work with talented professionals worldwide" },
    { icon: Zap, title: "Cutting-Edge Tech", description: "Work on exciting projects with latest technologies" },
    { icon: Users, title: "Team Events", description: "Regular team building events and company retreats" },
    { icon: Rocket, title: "Career Growth", description: "Clear career progression paths and mentorship" }
  ];

  const cultureValues = [
    { icon: Sparkles, title: "Innovation", description: "We encourage creative thinking and experimentation" },
    { icon: Heart, title: "Work-Life Balance", description: "We believe in sustainable productivity and wellbeing" },
    { icon: Users, title: "Collaboration", description: "We work together to achieve extraordinary results" },
    { icon: Award, title: "Excellence", description: "We strive for excellence in everything we do" },
    { icon: Globe, title: "Diversity", description: "We celebrate diverse perspectives and backgrounds" },
    { icon: Zap, title: "Growth Mindset", description: "We embrace challenges and continuous learning" }
  ];

  const process = [
    { step: 1, title: "Apply", description: "Submit your resume and portfolio through our application form" },
    { step: 2, title: "Review", description: "Our team reviews your application within 2-3 business days" },
    { step: 3, title: "Interview", description: "Initial screening call followed by technical/cultural interviews" },
    { step: 4, title: "Assessment", description: "Complete a practical assessment relevant to the role" },
    { step: 5, title: "Final Round", description: "Meet the team and discuss your role in detail" },
    { step: 6, title: "Offer", description: "Receive your offer and join the DevDazzle family!" }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Join DevDazzle | Founded by Ahmed Raza</title>
        <meta name="description" content="Join the DevDazzle team. Work on exciting projects with cutting-edge technology. Remote and office positions available." />
      </Helmet>

      <MegaNavbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-24 md:h-32"></div>

      {/* SECTION 1: DRAMATIC HERO */}
      <LampContainer className="pb-20">
        <motion.div
          style={{ opacity, scale }}
          className="flex flex-col items-center justify-center relative z-50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border-2 border-cyan-400/50 rounded-full px-8 py-4 shadow-2xl shadow-cyan-500/50">
              <Sparkles className="h-6 w-6 text-cyan-400 animate-pulse" />
              <span className="text-lg font-bold text-white">
                50+ Team Members • 30+ Countries • Remote-First
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="bg-gradient-to-br from-white to-gray-400 py-6 bg-clip-text text-center text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tight text-transparent leading-none"
          >
            JOIN OUR TEAM
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 text-xl md:text-2xl text-white/90 max-w-4xl text-center leading-relaxed font-medium px-4"
          >
            Build the future of digital innovation with DevDazzle. Work with talented people on exciting projects using cutting-edge technology.
          </motion.p>
        </motion.div>
      </LampContainer>

      {/* SECTION 2: WHY JOIN US */}
      <section className="py-32 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Why Join DevDazzle?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Be part of a team that's transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
            {[
              { icon: Rocket, number: "500+", label: "Projects", description: "Work on diverse, impactful projects" },
              { icon: Users, number: "250+", label: "Clients", description: "Serve global industry leaders" },
              { icon: Award, number: "98%", label: "Satisfaction", description: "Exceed client expectations" },
              { icon: Globe, number: "30+", label: "Countries", description: "Make global impact" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="w-full"
              >
                <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 h-full">
                  <div className="bg-black/90 rounded-xl p-6 lg:p-8 text-center backdrop-blur-sm h-full flex flex-col items-center justify-center">
                    <div className={cn(
                      "w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br flex items-center justify-center",
                      index % 4 === 0 ? "from-cyan-500 to-cyan-600" :
                      index % 4 === 1 ? "from-purple-500 to-purple-600" :
                      index % 4 === 2 ? "from-pink-500 to-pink-600" :
                      "from-cyan-500 to-pink-600"
                    )}>
                      <stat.icon className="h-7 w-7 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 w-full overflow-hidden">
                      <span className="inline-block">{stat.number}</span>
                    </div>
                    <div className="text-base lg:text-lg font-semibold text-white mb-2">{stat.label}</div>
                    <div className="text-xs lg:text-sm text-gray-400">{stat.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: BENEFITS */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Perks & Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We take care of our team with comprehensive benefits
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative w-full h-full p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                    <CardItem translateZ="50" className="text-center">
                      <div className={cn(
                        "w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br flex items-center justify-center",
                        index % 4 === 0 ? "from-cyan-500 to-cyan-600" :
                        index % 4 === 1 ? "from-purple-500 to-purple-600" :
                        index % 4 === 2 ? "from-pink-500 to-pink-600" :
                        "from-cyan-500 to-pink-600"
                      )}>
                        <benefit.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-4 text-white">{benefit.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CULTURE */}
      <section className="py-32 px-4 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Culture
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The values that shape how we work together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 h-full">
                  <div className="bg-black/90 rounded-xl p-6 lg:p-8 backdrop-blur-sm h-full">
                    <div className={cn(
                      "w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 lg:mb-6",
                      index % 3 === 0 ? "from-cyan-500 to-cyan-600" :
                      index % 3 === 1 ? "from-purple-500 to-purple-600" :
                      "from-pink-500 to-pink-600"
                    )}>
                      <value.icon className="h-7 w-7 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-display font-bold mb-3 lg:mb-4 text-white">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm lg:text-base">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HIRING PROCESS */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hiring Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Simple, transparent, and designed to find the right fit
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 md:transform md:-translate-x-1/2 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 hidden md:block"></div>
            <div className="space-y-12">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={cn(
                    "relative flex items-center gap-8",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  <div className={cn(
                    "flex-1",
                    index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  )}>
                    <CardContainer className="inter-var">
                      <CardBody className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative w-full p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                        <CardItem translateZ="50">
                          <div className="flex items-center gap-6 mb-4">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                              {item.step}
                            </div>
                            <h3 className="text-3xl font-display font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                        </CardItem>
                      </CardBody>
                    </CardContainer>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center border-4 border-black shadow-xl z-10">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OPEN POSITIONS */}
      <section className="py-32 px-4 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find your perfect role and join our amazing team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {openings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative w-full h-full p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                    <CardItem translateZ="50">
                      <div className="flex items-start gap-6 mb-6">
                        <div className={cn("w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0", job.color)}>
                          <job.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg text-sm text-cyan-300">
                              {job.department}
                            </span>
                            <span className="px-3 py-1 bg-gray-800 rounded-lg text-sm text-gray-300">
                              {job.type}
                            </span>
                          </div>
                          <h3 className="text-2xl font-display font-bold text-white mb-2">{job.title}</h3>
                          <p className="text-gray-400 mb-4">{job.description}</p>
                        </div>
                      </div>
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-300">
                          <MapPin className="h-5 w-5 text-cyan-400" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <DollarSign className="h-5 w-5 text-purple-400" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.slice(0, 3).map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-400">
                              <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link to="/contact">
                        <Button variant="gradient" className="w-full" size="lg">
                          Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Don't See the Right Position?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities!
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="lg" className="text-lg px-8 py-6">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
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
