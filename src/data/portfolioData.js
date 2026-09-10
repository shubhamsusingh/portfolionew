export const portfolioData = {
  personal: {
    name: "Shubham Kumar",
    firstName: "Shubham",
    lastName: "Kumar",
    role: "Junior Software Developer & MCA Candidate",
    typingRoles: [
      "Junior Software Developer",
      "React & Frontend Developer",
      "MCA Student & Tech Enthusiast",
      "Full Stack Web Developer",
      "Problem Solver"
    ],
    status: {
      available: true,
      text: "Open to Software Engineering Roles & Opportunities"
    },
    location: "India • Available for Remote & On-Site",
    email: "singhshubham68738@gmail.com",
    tagline: "BCA Graduate & MCA Candidate with 1 year of professional industry experience as a Junior Software Developer at Geosafe.",
    shortBio: "Hands-on experience at Geosafe developing web interfaces and services. Currently pursuing MCA while continuously architecting modern, performant web applications.",
    longBio: [
      "Hello! I'm Shubham Kumar. After graduating with a Bachelor of Computer Applications (BCA), I started my professional journey at Geosafe as a Junior Software Developer. During my 1 year at Geosafe, I worked on frontend component development, bug remediation, and REST API integration.",
      "To further elevate my computer science principles, system architecture understanding, and technical depth, I decided to pursue my Master of Computer Applications (MCA). I combine hands-on production experience with advanced academic study, continuously building modern web applications using React, JavaScript, and Node.js."
    ],
    resumeUrl: "#contact",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:singhshubham68738@gmail.com"
    }
  },

  stats: [
    { label: "Industry Experience", value: "1 Year", suffix: "" },
    { label: "Featured Projects", value: "4", suffix: "" },
    { label: "Technologies Mastered", value: "12+", suffix: "" },
    { label: "Code Commits", value: "500+", suffix: "" }
  ],

  highlights: [
    {
      title: "Production Experience",
      description: "1 full year of industry software development experience at Geosafe delivering reliable features.",
      icon: "Layers"
    },
    {
      title: "Strong CS Foundation",
      description: "Solid theoretical and practical background spanning BCA graduate studies and ongoing MCA curriculum.",
      icon: "BookOpen"
    },
    {
      title: "Modern Frontend Craft",
      description: "Proficient in React, ES6+ JavaScript, responsive CSS layouts, and modern tooling.",
      icon: "Sparkles"
    },
    {
      title: "Rapid Adaptability",
      description: "Quick at understanding requirements, debugging issues, and writing clean, maintainable code.",
      icon: "Zap"
    }
  ],

  skills: {
    frontend: [
      { name: "React.js", level: 90, icon: "Code2" },
      { name: "JavaScript (ES6+)", level: 90, icon: "FileCode2" },
      { name: "HTML5 & Semantic UI", level: 95, icon: "LayoutTemplate" },
      { name: "CSS3 & Modern Layouts", level: 92, icon: "Palette" },
      { name: "Responsive Design", level: 92, icon: "Smartphone" },
      { name: "State Management", level: 85, icon: "Cpu" }
    ],
    backend: [
      { name: "Node.js", level: 82, icon: "Server" },
      { name: "Express.js", level: 84, icon: "Workflow" },
      { name: "RESTful API Integration", level: 88, icon: "Network" },
      { name: "Database & SQL/MongoDB", level: 80, icon: "Database" }
    ],
    tools: [
      { name: "Git & GitHub", level: 90, icon: "GitBranch" },
      { name: "Vite & Build Tools", level: 88, icon: "Flame" },
      { name: "Postman & API Debugging", level: 85, icon: "Terminal" },
      { name: "Figma to Code", level: 82, icon: "Figma" }
    ]
  },

  projects: [
    {
      id: "devpulse",
      title: "DevPulse - Engineering Metrics Hub",
      category: "Full Stack",
      featured: true,
      shortDescription: "Developer productivity analytics dashboard with real-time GitHub activity tracking and sprint velocity metrics.",
      longDescription: "DevPulse helps software engineering teams gain transparency into deployment cadences, pull request cycles, and test coverage trends through sleek interactive visual charts and automated digests.",
      tags: ["React", "Vite", "Node.js", "Chart.js", "REST API"],
      color: "from-blue-500 to-cyan-400",
      githubUrl: "https://github.com",
      highlights: [
        "Interactive real-time charts with custom filtering ranges",
        "OAuth integration with GitHub & GitLab API",
        "Sub-100ms dashboard widget loading via optimized caching"
      ]
    },
    {
      id: "apexcommerce",
      title: "ApexCommerce - Headless Storefront",
      category: "Frontend",
      featured: true,
      shortDescription: "Ultra-fast headless e-commerce experience featuring instant search, glassmorphic cart drawer, and responsive checkout.",
      longDescription: "A blazing fast static e-commerce storefront architected for speed and conversions. Features client-side state synchronization, fuzzy product search, dynamic filtering by price/category, and high conversion UX.",
      tags: ["React", "Zustand", "Vanilla CSS", "Mobile-First"],
      color: "from-emerald-500 to-teal-400",
      githubUrl: "https://github.com",
      highlights: [
        "Zero-latency cart drawer with persistence in localStorage",
        "Complex multi-faceted product filter system with instant updates",
        "Clean responsive mobile-first navigation and checkout layout"
      ]
    },
    {
      id: "flowspace",
      title: "FlowSpace - Infinite Creative Canvas",
      category: "Frontend",
      featured: true,
      shortDescription: "Interactive browser whiteboard and diagramming tool built on HTML5 Canvas with export capabilities.",
      longDescription: "An intuitive web canvas allowing designers and developers to sketch architecture diagrams, freehand mind maps, and sticky workflows with zero lag and instant SVG/PNG export.",
      tags: ["React", "HTML5 Canvas", "Vector Math", "IndexedDB", "Vite"],
      color: "from-purple-500 to-pink-500",
      githubUrl: "https://github.com",
      highlights: [
        "Hardware-accelerated 60fps panning, zooming, and vector drawing",
        "Local auto-save with revision rollback via IndexedDB",
        "Export directly to high-res PNG or SVG presets"
      ]
    },
    {
      id: "neuroprompt",
      title: "NeuroPrompt - AI Workflow Studio",
      category: "AI & Tools",
      featured: false,
      shortDescription: "Interactive studio to test, version, and benchmark LLM prompt templates with comparative token analysis.",
      longDescription: "A developer tool designed to optimize generative AI prompts. Allows side-by-side prompt comparisons, token cost estimation, and template export in Python and Node.js formats.",
      tags: ["React", "Prompt Engineering", "CSS Grid", "REST API"],
      color: "from-amber-500 to-orange-500",
      githubUrl: "https://github.com",
      highlights: [
        "Side-by-side response diffing with token highlight",
        "Custom parameter controls (temperature, top_p, frequency penalty)",
        "Prompt template library with easy variable interpolation"
      ]
    }
  ],

  experience: [
    {
      role: "Junior Software Developer",
      company: "Geosafe",
      period: "1 Year (Post-BCA)",
      location: "India",
      type: "Full-Time",
      description: "Worked as a Junior Software Developer following my BCA degree, contributing to web applications, user interface development, and API integration.",
      achievements: [
        "Developed and maintained responsive web application modules and client-facing interfaces.",
        "Collaborated with senior engineers on bug fixing, cross-browser performance, and code reviews.",
        "Integrated REST APIs and streamlined data presentation across multiple dashboard views."
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Currently Pursuing",
      period: "Present",
      description: "Deepening knowledge in Advanced Software Engineering, Distributed Systems, Web Architectures, and Database Optimization."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Degree College",
      period: "Completed",
      description: "Graduated with strong foundations in Computer Science, Data Structures & Algorithms, Object-Oriented Programming, and Web Development."
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Engineering Lead",
      role: "Former Mentor & Tech Lead",
      content: "Shubham demonstrated immense enthusiasm, fast learning capability, and attention to detail during his time with us. He was always eager to take on challenges and write clean code.",
      avatar: "EL"
    },
    {
      id: 2,
      name: "Senior Colleague",
      role: "Full Stack Developer",
      content: "A reliable and dedicated team player. Shubham picks up new tools rapidly, communicates clearly, and takes genuine pride in delivering polished UI and well-structured code.",
      avatar: "SC"
    }
  ],

  faqs: [
    {
      question: "What is your professional background?",
      answer: "I completed my BCA, worked for 1 year as a Junior Software Developer at Geosafe, and am currently pursuing my MCA while continuing to build full-stack web applications."
    },
    {
      question: "Are you open to software engineering opportunities?",
      answer: "Yes! I am actively looking for software developer roles (Full-time / Intern / Remote) where I can contribute my frontend and full-stack skills."
    }
  ]
};
