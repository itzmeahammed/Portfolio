import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiArrowLeft, HiArrowRight, HiExternalLink, HiCode, HiStar, HiEye } from 'react-icons/hi';

const InteractiveProjectBrowser = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setSelectedProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

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
      id: 2,
      title: "3D Symptoms Analyzer",
      description: "AI-powered 3D symptom diagnosis system with interactive visualization",
      url: "https://3d-symptoms.netlify.app/",
      category: "AI/ML",
      technologies: ["React", "Three.js", "AI", "3D"],
      stats: { views: "2.8K", stars: "52", techs: 4 }
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
      url: "http://event-ai.netlify.app/",
      category: "AI/ML",
      technologies: ["React", "AI", "Node.js", "MongoDB"],
      stats: { views: "2.3K", stars: "48", techs: 4 }
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
      id: 10,
      title: "3D Parking Website",
      description: "Interactive 3D parking management and reservation system",
      url: "https://3d-parking-website.netlify.app/",
      category: "Web",
      technologies: ["React", "Three.js", "Node.js", "3D"],
      stats: { views: "2.0K", stars: "42", techs: 4 }
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
      id: 12,
      title: "Traffic Violation V1",
      description: "AI-powered traffic violation detection and reporting system",
      url: "https://traffic-violation-v1.netlify.app/",
      category: "AI/ML",
      technologies: ["Python", "OpenCV", "React", "Detection"],
      stats: { views: "3.1K", stars: "65", techs: 4 }
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
    setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setSelectedProject((prev) => (prev + 1) % projects.length);
    setIsAutoPlay(false);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-black/30 dark:to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-gray-300/10 to-gray-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-gray-400/10 to-gray-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Browser Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          {/* Browser Frame */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            {/* Browser Header */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-900 rounded-lg px-3 py-2 text-xs text-gray-500 dark:text-gray-400">
                <span>🔒</span>
                <span className="truncate">{currentProject.url}</span>
              </div>
            </div>

            {/* Browser Content - Live Website Iframe */}
            <div className="relative aspect-video bg-white dark:bg-gray-900 overflow-hidden">
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
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

            </div>

            {/* Browser Footer */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 px-6 py-4 border-t border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.button
                    onClick={handlePrev}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <HiArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </motion.button>
                  
                  <span className="text-sm font-elegant-caption text-gray-700 dark:text-gray-300">
                    {selectedProject + 1} / {projects.length}
                  </span>
                  
                  <motion.button
                    onClick={handleNext}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <HiArrowRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </motion.button>
                </div>

                {/* Auto-play Toggle */}
                <motion.button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg font-elegant-caption text-sm transition-all ${
                    isAutoPlay
                      ? 'bg-gray-900 dark:bg-gray-200 text-white dark:text-black'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {isAutoPlay ? '⏸ Pause' : '▶ Play'}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full opacity-60"
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-40"
            animate={{
              y: [10, -10, 10],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Project Dots Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center gap-2 mt-12 flex-wrap"
        >
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setSelectedProject(index);
                setIsAutoPlay(false);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedProject
                  ? 'bg-gray-800 dark:bg-gray-200 scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveProjectBrowser;
