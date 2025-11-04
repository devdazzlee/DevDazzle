import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Custom hook for scroll-triggered animations
export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return { ref, inView };
};

// Custom hook for parallax effect
export const useParallax = (speed = 0.5) => {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        setOffsetY((scrolled - rect.top) * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offsetY };
};

// Custom hook for element visibility on scroll
export const useScrollVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isVisible };
};

// Custom hook for mouse position tracking
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};

// Custom hook for scroll direction
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return scrollDirection;
};

// Custom hook for window dimensions
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default {
  useScrollAnimation,
  useParallax,
  useScrollVisibility,
  useMousePosition,
  useScrollDirection,
  useWindowSize,
};

