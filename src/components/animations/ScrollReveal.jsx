import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  direction = 'up',
  className = '' 
}) => {
  const { ref, inView } = useScrollAnimation(0.1, true);

  const variants = {
    up: {
      hidden: { opacity: 0, y: 60 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, delay, ease: [0.6, -0.05, 0.01, 0.99] }
      }
    },
    down: {
      hidden: { opacity: 0, y: -60 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, delay, ease: [0.6, -0.05, 0.01, 0.99] }
      }
    },
    left: {
      hidden: { opacity: 0, x: -60 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, delay, ease: 'easeOut' }
      }
    },
    right: {
      hidden: { opacity: 0, x: 60 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, delay, ease: 'easeOut' }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration, delay, ease: 'easeOut' }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants[direction]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

