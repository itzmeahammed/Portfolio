import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiEye, HiExternalLink, HiSearch, HiFilter, HiMail, HiPhone, HiSparkles, HiLightningBolt, HiCube } from 'react-icons/hi';
import ProjectCard from '../components/ProjectCard';

// Memory Rewriter AI Images
import memory1 from '../assets/projects/memory-rewriter-ai/Screenshot 2025-12-07 203057.png';
import memory2 from '../assets/projects/memory-rewriter-ai/Screenshot 2025-12-07 203114.png';
import memory3 from '../assets/projects/memory-rewriter-ai/Screenshot 2025-12-07 203127.png';
import memory4 from '../assets/projects/memory-rewriter-ai/Screenshot 2025-12-07 203146.png';
import memory5 from '../assets/projects/memory-rewriter-ai/Screenshot 2025-12-07 203220.png';
import memory6 from '../assets/projects/memory-rewriter-ai/Screenshot 2025-12-07 203230.png';
import memory7 from '../assets/projects/memory-rewriter-ai/Screenshot 2025-12-07 203250.png';

// APT.OS Images
import aptos1 from '../assets/projects/multi-tenant-erp/Screenshot 2025-12-07 203716.png';
import aptos2 from '../assets/projects/multi-tenant-erp/Screenshot 2025-12-07 203742.png';
import aptos3 from '../assets/projects/multi-tenant-erp/Screenshot 2025-12-07 203804.png';
import aptos4 from '../assets/projects/multi-tenant-erp/Screenshot 2025-12-07 203819.png';
import aptos5 from '../assets/projects/multi-tenant-erp/Screenshot 2025-12-07 203843.png';
import aptos6 from '../assets/projects/multi-tenant-erp/Screenshot 2025-12-07 203859.png';
import aptos7 from '../assets/projects/multi-tenant-erp/Screenshot 2025-12-07 203914.png';
import aptos8 from '../assets/projects/multi-tenant-erp/Screenshot 2025-12-07 204737.png';

// Learn Anything AI Images
import learn1 from '../assets/projects/learn-anything-with-ai/Screenshot 2025-12-08 212225.png';
import learn2 from '../assets/projects/learn-anything-with-ai/Screenshot 2025-12-08 214512.png';
import learn3 from '../assets/projects/learn-anything-with-ai/Screenshot 2025-12-08 214525.png';
import learn4 from '../assets/projects/learn-anything-with-ai/Screenshot 2025-12-08 214454.png';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const bigProjects = [
    {
      id: 110,
      title: "Climo Group",
      category: "Web Development",
      type: "Agency / Corporate",
      description: "Modern corporate agency platform with immersive animations, detailed service portfolio showcase, and interactive UI elements.",
      technologies: ["React", "Framer Motion", "TailwindCSS", "Vite"],
      status: "Live",
      githubUrl: "https://github.com/itzmeahammed",
      featured: true,
      // Images will be auto-loaded by getImagesForProject('Climo Group') matching 'climo-group' folder
    },
    {
      id: 111,
      title: "Nova Stream",
      category: "Web Development",
      type: "Entertainment / Streaming",
      description: "Next-generation video streaming interface featuring high-performance content delivery, responsive design, and premium user experience.",
      technologies: ["React", "API Integration", "TailwindCSS", "Media Player"],
      status: "Live",
      githubUrl: "https://github.com/itzmeahammed",
      featured: true,
      // Images will be auto-loaded by getImagesForProject('Nova Stream') matching 'nova-stream' folder
    },
    {
      id: 61,
      title: "multi-tenant-erp",
      category: "Web Development",
      type: "SaaS / ERP",
      description: "Premium, multi-tenant SaaS ERP for real estate with 'Luxe Noir' aesthetic and 3D visualization.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Three.js", "Framer Motion"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed/Multi-tenant-platform",
      featured: true,
      images: [aptos1, aptos2, aptos3, aptos4, aptos5, aptos6, aptos7, aptos8]
    },
    {
      id: 62,
      title: "Memory Rewriter AI",
      category: "AI/ML",
      type: "AI / Web",
      description: "Privacy-first app to reframe negative thoughts using local-first AI (WebLLM) and Stoic principles.",
      technologies: ["React", "TypeScript", "WebLLM", "TailwindCSS", "Three.js"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed/memory-rewrite-ai",
      featured: true,
      images: [memory1, memory2, memory3, memory4, memory5, memory6, memory7]
    },
    {
      id: 103,
      title: "Learn-Anything-with-AI",
      category: "AI/ML",
      type: "AI / EdTech",
      description: "Interactive AI-powered learning platform using 3D roadmaps and Socratic tutoring to visualize and master any topic.",
      technologies: ["React", "Three.js", "AI", "TailwindCSS", "Zustand"],
      status: "Production",
      githubUrl: "https://github.com/itzmeahammed/learn-anything-with-ai",
      featured: true,
      images: [learn1, learn2, learn3, learn4]
    },
    {
      id: 57,
      title: "AiStudyPlanner-2",
      category: "AI/ML",
      type: "AI / Web",
      description: "AI study planning project.",
      technologies: ["Python", "AI", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 56,
      title: "mediConnect-2",
      category: "Web Development",
      type: "Web / Healthcare",
      description: "Healthcare communication platform.",
      technologies: ["ReactJS", "Node.js", "MongoDB"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 36,
      title: "Multi tool website",
      category: "Web Development",
      type: "Web",
      description: "Website integrating multiple small tools.",
      technologies: ["ReactJS", "Node.js"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 30,
      title: "schemeSeeker",
      category: "Web Development",
      type: "Web / Utility",
      description: "Tool to find government/business schemes.",
      technologies: ["ReactJS", "Node.js"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 1,
      title: "Traffic Violation Detection System",
      category: "AI/ML",
      type: "AI / Web",
      description: "Detects traffic violations & number plates using OCR & object detection; generates automatic reports.",
      technologies: ["Python", "OpenCV", "OCR", "Flask", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 2,
      title: "Petition Management System",
      category: "Web Development",
      type: "Web / AI",
      description: "Three-portal system for police petitions with AI-based severity classification.",
      technologies: ["Python", "Django", "NLP", "MongoDB", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 3,
      title: "Meditrack",
      category: "AI/ML",
      type: "Web / Healthcare",
      description: "Medical inventory management with AI stock prediction & prescription analysis using OCR & NLP.",
      technologies: ["Python", "MongoDB", "ReactJS", "OCR", "NLP"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 4,
      title: "Barcode Generator System",
      category: "Web Development",
      type: "Web / Inventory",
      description: "Multi-role inventory management system with barcode generation & scanning.",
      technologies: ["Python", "Flask", "MongoDB", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 5,
      title: "Smart Classroom",
      category: "AI/ML",
      type: "Web / EdTech",
      description: "Face recognition for attendance, automated report generation, Google Meet integration.",
      technologies: ["Python", "OpenCV", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 6,
      title: "Career Guidance System",
      category: "AI/ML",
      type: "Web / AI",
      description: "AI-guided career suggestions with to-do list & personalized learning paths.",
      technologies: ["Python", "AI", "NLP", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 7,
      title: "Smart Agriculture App",
      category: "Mobile Development",
      type: "Mobile / Agriculture",
      description: "Enables farmers to sell directly to customers; includes translator integration.",
      technologies: ["React Native", "Node.js", "MongoDB"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 8,
      title: "Voice Assistant App",
      category: "AI/ML",
      type: "Mobile / AI",
      description: "Voice commands and chat functionality with WebSocket integration.",
      technologies: ["React Native", "Node.js", "WebSocket"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 9,
      title: "WMS Project",
      category: "Web Development",
      type: "Web / Logistics",
      description: "Warehouse Management System for inventory & logistics operations.",
      technologies: ["ReactJS", "Next.js", "Python", "Node.js", "MongoDB"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 10,
      title: "QuestionCloud",
      category: "AI/ML",
      type: "AI / Web",
      description: "Educational AI platform with content generation and syllabus embedding.",
      technologies: ["Python", "AI", "ReactJS", "MongoDB"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 11,
      title: "Medsy.ai",
      category: "AI/ML",
      type: "AI / Healthcare",
      description: "AI platform for medical content generation, reporting, and assistance.",
      technologies: ["Python", "AI", "ReactJS", "MongoDB"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 13,
      title: "FabFlow",
      category: "Web Development",
      type: "Web / Enterprise",
      description: "Steel fabrication management with company & customer portals, product/job tracking.",
      technologies: ["ReactJS", "Node.js", "MongoDB"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 14,
      title: "Railway Management System",
      category: "Web Development",
      type: "Web / Transport",
      description: "Ticketing, scheduling, and resource management for railways.",
      technologies: ["ReactJS", "Node.js", "MongoDB"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 15,
      title: "Medswift",
      category: "Mobile Development",
      type: "Mobile / Healthcare",
      description: "Ambulance booking & remote health monitoring app for hospitals and users.",
      technologies: ["React Native", "Node.js", "MongoDB"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 16,
      title: "Expense Tracker Web App",
      category: "Web Development",
      type: "Web / Finance",
      description: "Salary management, expense categories, and month/year navigation.",
      technologies: ["ReactJS", "Python", "MongoDB"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 17,
      title: "AutoDev Squad",
      category: "AI/ML",
      type: "AI / Software",
      description: "Self-collaborating AI team for planning, developing, testing, and documenting software.",
      technologies: ["Microsoft AutoGen", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 18,
      title: "Small Restaurant & Cafe Web App",
      category: "Web Development",
      type: "Web / SaaS",
      description: "Restaurant registration, server accounts, menu management, QR ordering, order assignment.",
      technologies: ["ReactJS", "Node.js", "MongoDB"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 19,
      title: "TaxiBookingSystem",
      category: "Web Development",
      type: "Web / Transport",
      description: "Full-featured cab booking system with location & fare management.",
      technologies: ["ReactJS", "Node.js", "MongoDB"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 20,
      title: "AI-Powered Travel Itinerary Builder",
      category: "AI/ML",
      type: "AI / Web",
      description: "AI tool to create optimized travel itineraries and suggestions.",
      technologies: ["Python", "AI", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    }
  ];

  const smallProjects = [
    {
      id: 28,
      title: "personal kg builder",
      category: "Web Development",
      type: "Web / Fitness",
      description: "Personal fitness & diet tracking tool.",
      technologies: ["ReactJS", "Node.js"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },

    {
      id: 58,
      title: "automate-schedule",
      category: "Web Development",
      type: "Web / Utility",
      description: "Task/schedule automation tool.",
      technologies: ["ReactJS", "Node.js"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 59,
      title: "3d-symptoms-mvp",
      category: "Web Development",
      type: "Web / 3D / Healthcare",
      description: "3D visualization of medical symptoms (MVP).",
      technologies: ["Three.js", "ReactJS", "Node.js"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 60,
      title: "hand-gesture-detector",
      category: "AI/ML",
      type: "AI / Web",
      description: "Real-time hand gesture recognition system using computer vision.",
      technologies: ["Python", "Streamlit", "ML", "OpenCV"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    }
  ];

  // Dynamic Image Import
  const projectImagesGlob = import.meta.glob('/src/assets/projects/**/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });

  const getImagesForProject = (title) => {
    const normalizedTitle = title.toLowerCase().trim();

    return Object.keys(projectImagesGlob)
      .filter(path => {
        const parts = path.split('/');
        const folderName = parts[parts.length - 2].toLowerCase().trim();

        // Direct match or fuzzy match
        return folderName === normalizedTitle ||
          folderName === normalizedTitle.replace(/\s+/g, '-') ||
          folderName.replace(/-/g, ' ') === normalizedTitle;
      })
      .map(path => projectImagesGlob[path]);
  };

  const allProjects = [...bigProjects, ...smallProjects].map(project => ({
    ...project,
    images: getImagesForProject(project.title)
  })).sort((a, b) => {
    // Prioritize featured projects
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    // Sort projects with images first
    const aHasImages = a.images && a.images.length > 0;
    const bHasImages = b.images && b.images.length > 0;
    if (aHasImages && !bHasImages) return -1;
    if (!aHasImages && bHasImages) return 1;
    return 0;
  });

  const categories = ['All', 'AI/ML', 'Web Development', 'Mobile Development', 'UI/UX', 'Tools', 'Games', 'Automation'];
  const sizes = ['All', 'Big Projects', 'Small Projects'];

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSize = selectedSize === 'All' ||
      (selectedSize === 'Big Projects' && bigProjects.includes(project)) ||
      (selectedSize === 'Small Projects' && smallProjects.includes(project));
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSize && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white dark:bg-black pt-20 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px] animate-pulse" />
        <div className="absolute right-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-500 opacity-20 blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 rounded-full blur-[120px] animate-spin-slow" />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-center space-y-8"
          >
            <motion.div variants={itemVariants} className="relative z-10">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-elegant-heading text-black dark:text-white mb-8 tracking-tighter drop-shadow-sm">
                My Projects
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                Exploring the frontiers of <span className="text-blue-600 dark:text-blue-400 font-semibold">AI, Web, and Mobile</span> technology to build solutions that matter.
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div variants={itemVariants} className="max-w-6xl mx-auto space-y-8">
              {/* Search Bar */}
              <div className="relative group max-w-2xl mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                <div className="relative transform transition-transform duration-300 group-hover:scale-[1.01]">
                  <HiSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-16 pr-6 py-5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-2xl text-black dark:text-white placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-0 focus:outline-none transition-all text-lg shadow-xl"
                  />
                </div>
              </div>

              {/* Project Size Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="text-black dark:text-white font-semibold mt-2 flex items-center gap-2">
                  <HiFilter className="w-5 h-5" /> Filter by Size:
                </span>
                {sizes.map((size) => (
                  <motion.button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedSize === size
                      ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg shadow-blue-500/20'
                      : 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${selectedCategory === category
                      ? 'bg-blue-600 text-white border-transparent shadow-lg shadow-blue-600/30'
                      : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700'
                      }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Project Count Display */}
              <div className="text-center">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Showing <span className="font-bold text-black dark:text-white">{filteredProjects.length}</span> of{' '}
                  <span className="font-bold text-black dark:text-white">{allProjects.length}</span> projects
                  {selectedSize !== 'All' && (
                    <span className="ml-2 px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm">
                      {selectedSize}
                    </span>
                  )}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center">
                <HiSearch className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">No Projects Found</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Try adjusting your search terms or category filter to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-3xl relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-12"
          >
            <h2 className="text-4xl font-elegant-heading text-black dark:text-white">Project Statistics</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: allProjects.length, label: 'Total Projects', icon: HiCode, color: 'blue' },
                { number: bigProjects.length, label: 'Big Projects', icon: HiLightningBolt, color: 'yellow' },
                { number: smallProjects.length, label: 'Small Projects', icon: HiSparkles, color: 'purple' },
                { number: allProjects.filter(p => p.category === 'AI/ML').length, label: 'AI/ML Projects', icon: HiCube, color: 'green' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative group p-8 bg-white dark:bg-black rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-500 overflow-hidden shadow-lg"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/5 to-${stat.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10 transform transition-transform duration-500 group-hover:translate-z-10">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-${stat.color}-50 dark:bg-${stat.color}-900/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <stat.icon className={`w-8 h-8 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                    </div>
                    <motion.h3
                      className="text-4xl sm:text-5xl font-elegant-heading text-black dark:text-white mb-3"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                    >
                      {stat.number}
                    </motion.h3>
                    <p className="text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black dark:bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-elegant-heading text-white dark:text-black">
              Have a Project in Mind?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-700 max-w-3xl mx-auto font-elegant-body">
              Let's collaborate and bring your innovative ideas to life with cutting-edge technology.
            </p>

            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
              <a
                href="mailto:ahammedmass24@gmail.com"
                className="flex items-center space-x-2 text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors duration-200"
              >
                <HiMail className="w-5 h-5" />
                <span>ahammedmass24@gmail.com</span>
              </a>
              <a
                href="tel:+971588544698"
                className="flex items-center space-x-2 text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors duration-200"
              >
                <HiPhone className="w-5 h-5" />
                <span>+971 588544698</span>
              </a>
            </div>

            <motion.button
              className="px-8 py-4 bg-white dark:bg-black text-black dark:text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-white/20 dark:shadow-black/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
