import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const ThreeDFeatureCard = ({ icon, title, description, index = 0, gradient = 'from-purple-500 to-pink-500' }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative group"
    >
      <motion.div
        className="relative h-full w-full rounded-2xl bg-gradient-to-br from-background via-card to-background border border-border overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          animate={isHovered ? {
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          } : {}}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Content container with 3D effect */}
        <div
          className="relative p-8 h-full flex flex-col"
          style={{
            transform: 'translateZ(50px)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Icon container with extra 3D depth */}
          <motion.div
            className="mb-6 relative"
            style={{
              transform: 'translateZ(75px)',
            }}
            animate={isHovered ? {
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${gradient} shadow-xl relative`}>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
              <motion.div
                className="relative text-white"
                animate={isHovered ? {
                  y: [-2, 2, -2],
                } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {icon}
              </motion.div>
            </div>
            
            {/* Glow effect */}
            <motion.div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              style={{
                transform: 'translateZ(-10px)',
              }}
            />
          </motion.div>

          {/* Title with 3D depth */}
          <motion.h3
            className="text-2xl font-display font-bold mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent"
            style={{
              transform: 'translateZ(40px)',
            }}
          >
            {title}
          </motion.h3>

          {/* Description with subtle 3D effect */}
          <motion.p
            className="text-muted-foreground leading-relaxed flex-grow"
            style={{
              transform: 'translateZ(30px)',
            }}
          >
            {description}
          </motion.p>

          {/* Hover indicator */}
          <motion.div
            className="mt-6 flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              transform: 'translateZ(40px)',
            }}
          >
            <span>Learn more</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={isHovered ? {
                x: [0, 5, 0],
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.div>
        </div>

        {/* Edge glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, transparent 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)`,
            transform: 'translateZ(1px)',
          }}
        />

        {/* Border highlight */}
        <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/50 transition-colors duration-500" />
      </motion.div>

      {/* Shadow effect */}
      <motion.div
        className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/20 to-pink-500/20 -z-10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        style={{
          transform: 'translateZ(-50px)',
        }}
      />
    </motion.div>
  );
};

export const ThreeDFeaturesGrid = ({ features, title, subtitle }) => {
  const gradients = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-purple-500',
    'from-pink-500 to-rose-500',
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              {title}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{
            perspective: '1000px',
          }}
        >
          {features.map((feature, index) => (
            <ThreeDFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              gradient={gradients[index % gradients.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

