// Animation Configurations for Framer Motion and GSAP

// Framer Motion Variants
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -100 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 100 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

// Card hover animations
export const cardHover = {
  rest: { 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  hover: { 
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
};

// Page transition animations
export const pageTransition = {
  initial: { 
    opacity: 0,
    y: 20
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

// Navigation animation
export const navAnimation = {
  hidden: { 
    opacity: 0, 
    y: -50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

// Modal animations
export const modalAnimation = {
  hidden: { 
    opacity: 0,
    scale: 0.9
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2
    }
  }
};

// Floating animation
export const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Rotate animation
export const rotateAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

// Pulse animation
export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Text reveal animation
export const textReveal = {
  hidden: { 
    opacity: 0,
    y: 100
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  })
};

// Scroll reveal variants
export const scrollReveal = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

// Feature card animation
export const featureCardAnimation = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
};

// GSAP Animation Configs
export const gsapConfig = {
  fadeIn: {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  },
  slideIn: {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  },
  scaleUp: {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.7)'
  },
  parallax: {
    y: (i, target) => {
      const speed = target.getAttribute('data-speed') || 0.5;
      return window.scrollY * speed;
    }
  }
};

// Particles configuration
export const particlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#6366f1'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#6366f1',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    }
  },
  retina_detect: true
};

// Lottie animation options
export const lottieOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
  staggerItem,
  cardHover,
  pageTransition,
  navAnimation,
  modalAnimation,
  floatingAnimation,
  rotateAnimation,
  pulseAnimation,
  textReveal,
  scrollReveal,
  featureCardAnimation,
  gsapConfig,
  particlesConfig,
  lottieOptions
};

