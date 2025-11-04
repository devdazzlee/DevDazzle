// Constants and Data for the Website

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    submenu: [
      { name: 'Agency Services', path: '/services/agency' },
      { name: 'AI Services', path: '/services/ai' }
    ]
  },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' }
];

// Agency Services Data
export const AGENCY_SERVICES = [
  {
    id: 1,
    title: 'Web Development',
    icon: 'FaCode',
    description: 'Custom websites and web applications built with modern technologies',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Fast Performance',
      'Cross-browser Compatible'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    pricing: 'Starting at $2,999'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    icon: 'FaMobile',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    features: [
      'Native Performance',
      'Offline Capability',
      'Push Notifications',
      'App Store Optimization'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    pricing: 'Starting at $4,999'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    icon: 'FaPalette',
    description: 'Beautiful and intuitive user interfaces with exceptional user experience',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Design Systems'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
    pricing: 'Starting at $1,999'
  },
  {
    id: 4,
    title: 'E-commerce Solutions',
    icon: 'FaShoppingCart',
    description: 'Complete e-commerce platforms with payment integration and inventory management',
    features: [
      'Product Management',
      'Payment Gateway',
      'Order Tracking',
      'Analytics Dashboard'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
    pricing: 'Starting at $5,999'
  },
  {
    id: 5,
    title: 'Digital Marketing',
    icon: 'FaBullhorn',
    description: 'Comprehensive digital marketing strategies to grow your online presence',
    features: [
      'SEO Strategy',
      'Social Media Marketing',
      'Content Marketing',
      'Email Campaigns'
    ],
    technologies: ['Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp'],
    pricing: 'Starting at $999/month'
  },
  {
    id: 6,
    title: 'Brand Identity',
    icon: 'FaLightbulb',
    description: 'Create a memorable brand identity that resonates with your audience',
    features: [
      'Logo Design',
      'Brand Guidelines',
      'Marketing Materials',
      'Brand Strategy'
    ],
    technologies: ['Adobe Illustrator', 'Photoshop', 'After Effects'],
    pricing: 'Starting at $2,499'
  }
];

// AI Services Data
export const AI_SERVICES = [
  {
    id: 1,
    title: 'AI Chatbot Development',
    icon: 'FaRobot',
    description: 'Intelligent chatbots powered by GPT and custom ML models',
    features: [
      'Natural Language Processing',
      '24/7 Availability',
      'Multi-language Support',
      'Custom Training'
    ],
    technologies: ['OpenAI GPT', 'TensorFlow', 'Dialogflow', 'Rasa'],
    pricing: 'Starting at $3,999'
  },
  {
    id: 2,
    title: 'Machine Learning Solutions',
    icon: 'FaBrain',
    description: 'Custom ML models for predictive analytics and automation',
    features: [
      'Data Analysis',
      'Predictive Modeling',
      'Pattern Recognition',
      'Automated Decision Making'
    ],
    technologies: ['Python', 'Scikit-learn', 'PyTorch', 'Keras'],
    pricing: 'Starting at $6,999'
  },
  {
    id: 3,
    title: 'Computer Vision',
    icon: 'FaEye',
    description: 'Image and video analysis using advanced AI algorithms',
    features: [
      'Object Detection',
      'Face Recognition',
      'Image Classification',
      'Video Analytics'
    ],
    technologies: ['OpenCV', 'YOLO', 'TensorFlow', 'AWS Rekognition'],
    pricing: 'Starting at $5,999'
  },
  {
    id: 4,
    title: 'AI Content Generation',
    icon: 'FaPen',
    description: 'Automated content creation using advanced AI models',
    features: [
      'Blog Post Generation',
      'Product Descriptions',
      'Social Media Content',
      'SEO-Optimized Copy'
    ],
    technologies: ['GPT-4', 'Claude', 'DALL-E', 'Midjourney'],
    pricing: 'Starting at $1,999'
  },
  {
    id: 5,
    title: 'AI Data Analytics',
    icon: 'FaChartLine',
    description: 'Transform your data into actionable insights with AI',
    features: [
      'Data Visualization',
      'Trend Analysis',
      'Anomaly Detection',
      'Predictive Analytics'
    ],
    technologies: ['Python', 'Tableau', 'Power BI', 'Apache Spark'],
    pricing: 'Starting at $4,999'
  },
  {
    id: 6,
    title: 'AI Integration Services',
    icon: 'FaCog',
    description: 'Integrate AI capabilities into your existing systems',
    features: [
      'API Integration',
      'Custom Solutions',
      'Performance Optimization',
      'Ongoing Support'
    ],
    technologies: ['REST APIs', 'GraphQL', 'Cloud Services', 'Docker'],
    pricing: 'Starting at $3,499'
  }
];

// Portfolio Projects
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/portfolio/ecommerce.jpg',
    description: 'A full-featured e-commerce platform with payment integration',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'AI Chatbot',
    category: 'AI Development',
    image: '/portfolio/chatbot.jpg',
    description: 'Customer service chatbot with natural language understanding',
    technologies: ['Python', 'OpenAI', 'TensorFlow', 'React'],
    link: '#'
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    image: '/portfolio/banking.jpg',
    description: 'Secure mobile banking application for iOS and Android',
    technologies: ['React Native', 'Node.js', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 4,
    title: 'Brand Identity Design',
    category: 'Design',
    image: '/portfolio/brand.jpg',
    description: 'Complete brand identity for a tech startup',
    technologies: ['Adobe Illustrator', 'Photoshop', 'Figma'],
    link: '#'
  },
  {
    id: 5,
    title: 'ML Prediction Model',
    category: 'AI Development',
    image: '/portfolio/ml.jpg',
    description: 'Sales prediction model using machine learning',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
    link: '#'
  },
  {
    id: 6,
    title: 'Social Media Dashboard',
    category: 'Web Development',
    image: '/portfolio/dashboard.jpg',
    description: 'Analytics dashboard for social media management',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    link: '#'
  }
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    image: '/testimonials/sarah.jpg',
    rating: 5,
    text: 'DevDazzle transformed our online presence completely. The team\'s expertise in web development and AI integration exceeded our expectations.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, FinanceApp',
    image: '/testimonials/michael.jpg',
    rating: 5,
    text: 'Outstanding work on our mobile app. The attention to detail and commitment to quality is unmatched. Highly recommend!'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, ShopNow',
    image: '/testimonials/emily.jpg',
    rating: 5,
    text: 'The e-commerce platform they built increased our sales by 300%. Professional, responsive, and incredibly talented team.'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'CTO, DataCorp',
    image: '/testimonials/david.jpg',
    rating: 5,
    text: 'Their AI solutions revolutionized our data analytics process. Excellent communication throughout the project.'
  }
];

// Team Members
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Founder & CEO',
    image: '/team/john.jpg',
    bio: 'Visionary leader with 10+ years in tech',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Lead Developer',
    image: '/team/jane.jpg',
    bio: 'Full-stack expert specializing in React and Node.js',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 3,
    name: 'Alex Johnson',
    role: 'AI Specialist',
    image: '/team/alex.jpg',
    bio: 'Machine learning expert with PhD in Computer Science',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 4,
    name: 'Lisa Brown',
    role: 'UI/UX Designer',
    image: '/team/lisa.jpg',
    bio: 'Creative designer focused on user-centered design',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
];

// Statistics
export const STATS = [
  { id: 1, number: 500, label: 'Projects Completed', suffix: '+' },
  { id: 2, number: 250, label: 'Happy Clients', suffix: '+' },
  { id: 3, number: 50, label: 'Team Members', suffix: '+' },
  { id: 4, number: 15, label: 'Years Experience', suffix: '+' }
];

// FAQ Data
export const FAQ_DATA = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer: 'We offer comprehensive web development, mobile app development, AI solutions, UI/UX design, digital marketing, and brand identity services.'
  },
  {
    id: 2,
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. A basic website takes 4-6 weeks, while complex applications can take 3-6 months.'
  },
  {
    id: 3,
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer maintenance packages and ongoing support for all our projects to ensure optimal performance.'
  },
  {
    id: 4,
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing based on project scope. Contact us for a detailed quote tailored to your needs.'
  }
];

// Social Media Links
export const SOCIAL_LINKS = [
  { name: 'Facebook', icon: 'FaFacebook', url: '#' },
  { name: 'Twitter', icon: 'FaTwitter', url: 'https://twitter.com/DevDazzle798' },
  { name: 'LinkedIn', icon: 'FaLinkedin', url: '#' },
  { name: 'Instagram', icon: 'FaInstagram', url: '#' },
  { name: 'GitHub', icon: 'FaGithub', url: '#' }
];

// Contact Information
export const CONTACT_INFO = {
  email: 'info@devdazzle.com',
  phone: '+1 (555) 123-4567',
  address: '123 Tech Street, San Francisco, CA 94105',
  hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST'
};

export default {
  NAV_LINKS,
  AGENCY_SERVICES,
  AI_SERVICES,
  PORTFOLIO_PROJECTS,
  TESTIMONIALS,
  TEAM_MEMBERS,
  STATS,
  FAQ_DATA,
  SOCIAL_LINKS,
  CONTACT_INFO
};

