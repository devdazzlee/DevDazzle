import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AnimatedCounter = ({ 
  value, 
  duration = 2,
  suffix = '',
  prefix = '',
  className = ''
}) => {
  const { ref, inView } = useScrollAnimation(0.5, true);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const spring = useSpring(0, { 
    damping: 50, 
    stiffness: 50,
    duration: duration * 1000 
  });
  
  const display = useTransform(spring, (current) => 
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (inView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [inView, value, spring, hasAnimated]);

  return (
    <motion.div ref={ref} className={className}>
      <motion.span>{prefix}</motion.span>
      <motion.span>{display}</motion.span>
      <motion.span>{suffix}</motion.span>
    </motion.div>
  );
};

export default AnimatedCounter;

