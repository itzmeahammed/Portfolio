import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiArrowLeft, HiArrowRight, HiExternalLink, HiCode, HiStar, HiEye, HiSparkles, HiClock, HiX, HiPhone, HiMail } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const InteractiveProjectBrowser = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [direction, setDirection] = useState(0);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [projectTimer, setProjectTimer] = useState(0);
  const [showVisitPopup, setShowVisitPopup] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setSelectedProject((prev) => (prev + 1) % projects.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Timer for 2 minutes on same project
  useEffect(() => {
    const timer = setInterval(() => {
      setProjectTimer((prev) => {
        const newTime = prev + 1;
        // Show contact popup after 120 seconds (2 minutes)
        if (newTime === 120) {
          setShowContactPopup(true);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Reset timer when project changes
  useEffect(() => {
    setProjectTimer(0);
    setShowContactPopup(false);
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "3D Study Planner",
      description: "Interactive 3D study planning tool with immersive learning experience",
      url: "https://3d-study-planner.netlify.app/",
      category: "EdTech",
      technologies: ["React", "Three.js", "WebGL", "Animation"],
      stats: { views: "2.1K", stars: "45", techs: 4 }
    },
    {
      id: 8,
      title: "MediConnect 3D",
      description: "3D medical consultation platform with interactive health visualization",
      url: "https://mediconnect-3d.netlify.app/",
      category: "Healthcare",
      technologies: ["React", "Three.js", "WebRTC", "3D"],
      stats: { views: "2.7K", stars: "61", techs: 4 }
    },
    {
      id: 9,
      title: "Multi-Tool AI",
      description: "Comprehensive AI toolkit with multiple utility functions",
      url: "https://multi-tool-ai.netlify.app/",
      category: "AI/ML",
      technologies: ["React", "AI", "Python", "APIs"],
      stats: { views: "2.4K", stars: "51", techs: 4 }
    },
    {
      id: 11,
      title: "Scheme Seeker V2",
      description: "Government and business scheme discovery platform",
      url: "https://scheme-seeker-v2.netlify.app/",
      category: "Web",
      technologies: ["React", "Search", "MongoDB", "Analytics"],
      stats: { views: "1.8K", stars: "36", techs: 4 }
    },
    {
      id: 3,
      title: "Smart Farming V1",
      description: "Agricultural management platform with smart analytics and crop monitoring",
      url: "https://smart-farming-v1.netlify.app/",
      category: "Agriculture",
      technologies: ["React", "Node.js", "MongoDB", "Analytics"],
      stats: { views: "3.2K", stars: "68", techs: 4 }
    },
    {
      id: 4,
      title: "Document Analyzer V1",
      description: "Advanced document analysis with OCR and AI-powered insights",
      url: "https://document-analyzer-v1.netlify.app/",
      category: "AI/ML",
      technologies: ["Python", "React", "OCR", "NLP"],
      stats: { views: "1.9K", stars: "38", techs: 4 }
    },
    {
      id: 5,
      title: "Dine Smart",
      description: "Restaurant management and ordering system with real-time updates",
      url: "https://dine-smart.netlify.app/",
      category: "Web",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
      stats: { views: "2.5K", stars: "55", techs: 4 }
    },
    {
      id: 6,
      title: "AutoDev Bolt",
      description: "AI-powered code generation and automation platform",
      url: "https://auto-gen-bolt.netlify.app/",
      category: "AI/ML",
      technologies: ["React", "AI", "CodeGen", "Automation"],
      stats: { views: "3.5K", stars: "72", techs: 4 }
    },
    {
      id: 7,
      title: "Event AI",
      description: "Intelligent event management with AI scheduling and recommendations",
      url: "https://event-ai.netlify.app/",
      category: "AI/ML",
      technologies: ["React", "AI", "Node.js", "MongoDB"],
      stats: { views: "2.3K", stars: "48", techs: 4 }
    },
    {
      id: 10,
      title: "3D Parking Website",
      description: "Interactive 3D parking management and reservation system",
      url: "https://3d-parking-website.netlify.app/",
      category: "Web",
      technologies: ["React", "Three.js", "Node.js", "3D"],
      stats: { views: "2.0K", stars: "42", techs: 4 }
    },
    {
      id: 12,
      title: "Traffic Violation V1",
      description: "AI-powered traffic violation detection and reporting system",
      url: "https://traffic-violation-v1.netlify.app/",
      category: "AI/ML",
      technologies: ["Python", "OpenCV", "React", "Detection"],
      stats: { views: "3.1K", stars: "65", techs: 4 }
    },
    {
      id: 2,
      title: "3D Symptoms Analyzer",
      description: "AI-powered 3D symptom diagnosis system with interactive visualization",
      url: "https://3d-symptoms.netlify.app/",
      category: "AI/ML",
      technologies: ["React", "Three.js", "AI", "3D"],
      stats: { views: "2.8K", stars: "52", techs: 4 }
    }
  ];

  const currentProject = projects[selectedProject];

  const getCategoryColor = (category) => {
    const colors = {
      "AI/ML": "from-purple-500 to-pink-500",
      "Web": "from-blue-500 to-cyan-500",
      "EdTech": "from-green-500 to-emerald-500",
      "Healthcare": "from-red-500 to-rose-500",
      "Agriculture": "from-amber-500 to-orange-500"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  const handlePrev = () => {
    setDirection(-1);
    setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setDirection(1);
    setSelectedProject((prev) => (prev + 1) % projects.length);
    setIsAutoPlay(false);
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-black/50 dark:to-gray-900 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-gray-300/5 to-gray-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-gray-400/5 to-gray-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.2, 0.5],
            x: [0, -20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-r from-gray-200/5 to-gray-300/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="relative mx-auto px-6 sm:px-6 lg:px-8" style={{ maxWidth: '90rem' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full border border-gray-200 dark:border-gray-600 shadow-lg mb-6"
          >
            <span className="text-xs sm:text-sm font-elegant-caption text-gray-700 dark:text-gray-300">🚀 Live Projects Showcase</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-elegant-heading text-gray-900 dark:text-white mb-6"
          >
            Interactive Project
            <motion.span
              className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-200 dark:via-white dark:to-gray-300 bg-clip-text text-transparent block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Browser
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-elegant-body"
          >
            Explore my live projects with interactive browser experience. Click, navigate, and discover innovative solutions.
          </motion.p>
        </motion.div>

        {/* Enhanced Browser Section with Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Browser */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                {/* Browser Header */}
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full shadow-lg"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg"></div>
                    </div>
                    <motion.div
                      animate={{ rotate: isAutoPlay ? 360 : 0 }}
                      transition={{ duration: 2, repeat: isAutoPlay ? Infinity : 0 }}
                    >
                      <HiSparkles className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </motion.div>
                  </div>
                  <div className="flex items-center space-x-2 bg-white dark:bg-gray-900 rounded-lg px-3 py-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>🔒</span>
                    <span className="truncate font-mono">{currentProject.url}</span>
                  </div>
                </div>

                {/* Browser Content - Live Website Iframe */}
                <div className="relative aspect-video bg-white dark:bg-gray-900 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedProject}
                      initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="w-full h-full"
                    >
                      <iframe
                        src={currentProject.url}
                        title={currentProject.title}
                        className="w-full h-full border-none"
                        loading="lazy"
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Browser Footer */}
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 px-6 py-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <motion.button
                        onClick={handlePrev}
                        whileHover={{ scale: 1.15, backgroundColor: 'rgba(0,0,0,0.1)' }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg transition-all duration-200"
                      >
                        <HiArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </motion.button>
                      
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-elegant-caption text-gray-700 dark:text-gray-300 font-semibold">
                          {selectedProject + 1}
                        </span>
                        <span className="text-gray-400">/</span>
                        <span className="text-sm font-elegant-caption text-gray-600 dark:text-gray-400">
                          {projects.length}
                        </span>
                      </div>
                      
                      <motion.button
                        onClick={handleNext}
                        whileHover={{ scale: 1.15, backgroundColor: 'rgba(0,0,0,0.1)' }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg transition-all duration-200"
                      >
                        <HiArrowRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </motion.button>
                    </div>

                    {/* Auto-play Toggle */}
                    <motion.button
                      onClick={() => setIsAutoPlay(!isAutoPlay)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg font-elegant-caption text-sm transition-all duration-300 flex items-center space-x-2 ${
                        isAutoPlay
                          ? 'bg-gray-900 dark:bg-gray-200 text-white dark:text-black shadow-lg'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
                      }`}
                    >
                      <span>{isAutoPlay ? '⏸' : '▶'}</span>
                      <span>{isAutoPlay ? 'Pause' : 'Play'}</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-1.5"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl h-full flex flex-col justify-between"
                >
                  {/* Project Header */}
                  <div>
                    <motion.div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-elegant-caption mb-4 bg-gradient-to-r ${getCategoryColor(currentProject.category)}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-white">{currentProject.category}</span>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-lg md:text-xl font-elegant-heading text-gray-900 dark:text-white mb-3 line-clamp-2"
                    >
                      {currentProject.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-sm font-elegant-body text-gray-600 dark:text-gray-400 mb-6 line-clamp-3"
                    >
                      {currentProject.description}
                    </motion.p>

                    {/* Stats */}
                    <div className="space-y-3 mb-6">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <HiEye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-gray-700 dark:text-gray-300 font-elegant-caption">{currentProject.stats.views} views</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 }}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <HiStar className="w-4 h-4 text-yellow-500" />
                        <span className="text-gray-700 dark:text-gray-300 font-elegant-caption">{currentProject.stats.stars} stars</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <HiCode className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-gray-700 dark:text-gray-300 font-elegant-caption">{currentProject.stats.techs} technologies</span>
                      </motion.div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <p className="text-xs font-elegant-caption text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.map((tech, idx) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.35 + idx * 0.05 }}
                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-elegant-caption"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visit Button */}
                  <motion.button
                    onClick={() => {
                      setShowVisitPopup(true);
                      setTimeout(() => {
                       
                      }, 1500);
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-300 text-white dark:text-black rounded-lg font-elegant-caption text-sm font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                  >
                    <HiExternalLink className="w-4 h-4" />
                    <span>Visit Project</span>
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Floating Accent Elements */}
          <motion.div
            className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-gray-400/20 to-gray-500/20 rounded-full blur-2xl"
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-full blur-2xl"
            animate={{
              y: [15, -15, 15],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Enhanced Project Dots Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-3 mt-16 flex-wrap"
        >
          {projects.map((project, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setSelectedProject(index);
                setIsAutoPlay(false);
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.85 }}
              className={`transition-all duration-300 rounded-full group relative ${
                index === selectedProject
                  ? 'w-4 h-4 bg-gray-800 dark:bg-gray-200 shadow-lg'
                  : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {hoveredProject === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -30 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-full mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-200 text-white dark:text-black text-xs rounded-lg whitespace-nowrap font-elegant-caption"
                  >
                    {project.title}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </motion.div>

        {/* Visit Website Popup */}
        <AnimatePresence>
          {showVisitPopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowVisitPopup(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md shadow-2xl border border-gray-200 dark:border-gray-700"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block p-3 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-300 rounded-full mb-4"
                  >
                    <HiExternalLink className="w-6 h-6 text-white dark:text-black" />
                  </motion.div>
                  <h3 className="text-2xl font-elegant-heading text-gray-900 dark:text-white mb-2">
                    Opening Project
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-elegant-body mb-6">
                    Connect with me to explore this project completely and discuss collaboration opportunities!
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-2 mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <motion.a
                      href="tel:+971588544698"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center justify-center space-x-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <HiPhone className="w-4 h-4" />
                      <span className="font-elegant-caption text-sm">+971 588 544 698</span>
                    </motion.a>
                    <motion.a
                      href="mailto:ahammedmass24@gmail.com"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center justify-center space-x-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <HiMail className="w-4 h-4" />
                      <span className="font-elegant-caption text-sm">ahammedmass24@gmail.com</span>
                    </motion.a>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowVisitPopup(false)}
                    className="px-6 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-lg font-elegant-caption font-semibold"
                  >
                    Got it!
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Popup - After 2 minutes */}
        <AnimatePresence>
          {showContactPopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowContactPopup(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md shadow-2xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-elegant-heading text-gray-900 dark:text-white">
                      Let's Connect!
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-elegant-body mt-1">
                      Interested in this project? Get in touch!
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowContactPopup(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <HiX className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </motion.button>
                </div>

                <div className="space-y-3">
                  {/* WhatsApp */}
                  <motion.a
                    href="https://wa.me/971588544698"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700 hover:shadow-lg transition-all"
                  >
                    <FaWhatsapp className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <div>
                      <p className="font-elegant-caption font-semibold text-gray-900 dark:text-white">WhatsApp</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">+971 588 544 698</p>
                    </div>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:ahammedmass24@gmail.com"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all"
                  >
                    <HiMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="font-elegant-caption font-semibold text-gray-900 dark:text-white">Email</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">ahammedmass24@gmail.com</p>
                    </div>
                  </motion.a>

                  {/* Phone */}
                  <motion.a
                    href="tel:+971588544698"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all"
                  >
                    <HiPhone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <div>
                      <p className="font-elegant-caption font-semibold text-gray-900 dark:text-white">Phone</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">+971 588 544 698</p>
                    </div>
                  </motion.a>
                </div>

                <p className="text-xs text-center text-gray-500 dark:text-gray-500 mt-6 font-elegant-caption">
                  ✨ Timer resets when you change projects
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveProjectBrowser;
