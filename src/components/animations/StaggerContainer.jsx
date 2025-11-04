import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1,
  delayChildren = 0.3,
  className = ''
}) => {
  const { ref, inView } = useScrollAnimation(0.1, true);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '' }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
};

export default StaggerContainer;

