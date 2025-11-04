import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const FadeInWhenVisible = ({ 
  children, 
  delay = 0,
  threshold = 0.1,
  className = ''
}) => {
  const { ref, inView } = useScrollAnimation(threshold, true);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;

