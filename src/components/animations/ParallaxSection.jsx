import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  className = '',
  style = {}
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, speed * 100]);

  return (
    <motion.div
      style={{ y, ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;

