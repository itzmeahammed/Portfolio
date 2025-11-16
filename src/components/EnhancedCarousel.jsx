import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { 
  HiChevronLeft, 
  HiChevronRight, 
  HiEye, 
  HiCode, 
  HiExternalLink, 
  HiStar,
  HiPlay,
  HiPause,
  HiSparkles,
  HiLightningBolt
} from 'react-icons/hi';

const EnhancedCarousel = ({ projects = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const constraintsRef = useRef(null);

  // Sample projects if none provided
  const defaultProjects = [
    {
      id: 1,
      title: "AI Traffic Detection System",
      category: "AI/ML",
      description: "Advanced computer vision system for detecting traffic violations using OCR and object detection algorithms with real-time processing capabilities.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      technologies: ["Python", "OpenCV", "Flask", "ReactJS", "TensorFlow"],
      status: "Completed",
      metrics: { views: 1250, stars: 89, commits: 156 },
      liveUrl: "#",
      githubUrl: "https://github.com/itzmeahammed",
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Meditrack Healthcare",
      category: "Healthcare",
      description: "Medical inventory management system with AI-powered stock prediction and prescription analysis for modern healthcare facilities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      technologies: ["React", "MongoDB", "Node.js", "NLP", "Python"],
      status: "Completed",
      metrics: { views: 890, stars: 67, commits: 203 },
      liveUrl: "#",
      githubUrl: "https://github.com/itzmeahammed",
      gradient: "from-green-500 via-teal-500 to-blue-500"
    },
    {
      id: 3,
      title: "QuestionCloud AI Platform",
      category: "Education",
      description: "AI-driven learning platform with automatic question generation from syllabus content using advanced embeddings and natural language processing.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      technologies: ["Python", "AI", "ReactJS", "MongoDB", "OpenAI"],
      status: "Completed",
      metrics: { views: 2100, stars: 134, commits: 287 },
      liveUrl: "#",
      githubUrl: "https://github.com/itzmeahammed",
      gradient: "from-purple-500 via-pink-500 to-red-500"
    },
    {
      id: 4,
      title: "FabFlow Management",
      category: "Enterprise",
      description: "Comprehensive steel fabrication management system with company and customer portals for streamlined operations and workflow management.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      technologies: ["ReactJS", "Node.js", "MongoDB", "Express"],
      status: "Completed",
      metrics: { views: 756, stars: 45, commits: 178 },
      liveUrl: "#",
      githubUrl: "https://github.com/itzmeahammed",
      gradient: "from-orange-500 via-red-500 to-pink-500"
    },
    {
      id: 5,
      title: "Medswift Mobile App",
      category: "Healthcare",
      description: "Ambulance booking and remote health monitoring application for hospitals and patients with real-time tracking and emergency services.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      status: "Completed",
      metrics: { views: 1340, stars: 78, commits: 234 },
      liveUrl: "#",
      githubUrl: "https://github.com/itzmeahammed",
      gradient: "from-cyan-500 via-blue-500 to-purple-500"
    }
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayProjects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, displayProjects.length]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % displayProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + displayProjects.length) % displayProjects.length);
  };

  const ProjectCard = ({ project, index, isActive }) => {
    const isHovered = hoveredCard === index;
    
    return (
      <motion.div
        className={`relative cursor-pointer transition-all duration-700 ${
          isActive ? 'z-20' : 'z-10'
        }`}
        style={{
          transform: `translateX(${(index - currentIndex) * 320}px) scale(${isActive ? 1 : 0.85})`,
          opacity: Math.abs(index - currentIndex) > 2 ? 0 : isActive ? 1 : 0.6,
        }}
        onClick={() => setCurrentIndex(index)}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
        whileHover={{ y: isActive ? -10 : -5 }}
      >
        {/* Floating Card Container */}
        <div className="relative w-80 h-[480px] perspective-1000">
          {/* Glowing Background */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-20`}
            animate={{
              scale: isActive ? 1.1 : 0.9,
              opacity: isActive ? 0.3 : 0.1,
            }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Main Card */}
          <motion.div
            className="relative w-full h-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 overflow-hidden shadow-2xl"
            animate={{
              rotateY: isActive ? 0 : (index - currentIndex) * 15,
              rotateX: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Animated Border */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0`}
              animate={{
                opacity: isActive ? 0.1 : 0,
              }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Project Image with Overlay */}
            <div className="relative h-48 overflow-hidden rounded-t-3xl">
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`} />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 flex space-x-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className={`px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-white text-xs font-semibold shadow-lg`}>
                  {project.status}
                </div>
              </motion.div>
              
              <motion.div
                className="absolute top-4 left-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                  {project.category}
                </div>
              </motion.div>

              {/* Hover Action Buttons */}
              <AnimatePresence>
                {isHovered && isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center space-x-4"
                  >
                    <motion.a
                      href={project.liveUrl}
                      className={`p-3 bg-gradient-to-r ${project.gradient} rounded-full text-white shadow-lg hover:shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <HiEye className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <HiCode className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              {/* Title with Animated Underline */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <motion.div
                  className={`h-0.5 bg-gradient-to-r ${project.gradient} rounded-full`}
                  animate={{
                    width: isActive ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Technologies with Animated Pills */}
              <div className="flex flex-wrap gap-2">
                {project.technologies?.slice(0, 3).map((tech, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                    className="px-3 py-1 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200/30 dark:border-gray-700/30"
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.technologies?.length > 3 && (
                  <span className="px-3 py-1 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200/30 dark:border-gray-700/30">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Metrics with Icons */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200/30 dark:border-gray-700/30">
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <motion.div 
                    className="flex items-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <HiEye className="w-4 h-4" />
                    <span>{project.metrics?.views || 0}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <HiStar className="w-4 h-4" />
                    <span>{project.metrics?.stars || 0}</span>
                  </motion.div>
                </div>
                
                {isActive && (
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex items-center space-x-1 px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs font-medium shadow-lg hover:shadow-xl`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiSparkles className="w-3 h-3" />
                    <span>Explore</span>
                  </motion.button>
                )}
              </div>
            </div>

            {/* Floating Particles */}
            {isActive && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${project.gradient} rounded-full`}
                    animate={{
                      x: [0, Math.random() * 300],
                      y: [0, Math.random() * 400],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                    style={{
                      left: Math.random() * 100 + '%',
                      top: Math.random() * 100 + '%',
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative w-full py-2 overflow-hidden">
      {/* Enhanced Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-blue-900/30 rounded-full border border-purple-200 dark:border-purple-700 mb-3">
          <HiLightningBolt className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-purple-700 dark:text-purple-300">🎪 Enhanced 3D Carousel</span>
          <HiSparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Immersive Project Gallery
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Experience projects in a stunning 3D environment with interactive animations
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative h-[520px] flex items-center justify-center overflow-hidden">
        {/* Background Glow */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${displayProjects[currentIndex]?.gradient || 'from-blue-500 to-purple-500'} opacity-5 blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Project Cards */}
        <div className="relative flex items-center justify-center" ref={constraintsRef}>
          {displayProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isActive={index === currentIndex}
            />
          ))}
        </div>

        {/* Enhanced Navigation */}
        <motion.button
          onClick={prevProject}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 p-4 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl rounded-full shadow-2xl hover:bg-white/20 dark:hover:bg-gray-900/20 transition-all duration-300 border border-white/20 dark:border-gray-700/20"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <HiChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </motion.button>

        <motion.button
          onClick={nextProject}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 p-4 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl rounded-full shadow-2xl hover:bg-white/20 dark:hover:bg-gray-900/20 transition-all duration-300 border border-white/20 dark:border-gray-700/20"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <HiChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </motion.button>
      </div>

      {/* Enhanced Indicators */}
      <div className="flex justify-center mt-4 space-x-3">
        {displayProjects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="relative overflow-hidden rounded-full"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={`w-12 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gray-800 dark:bg-gray-200'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-400'
            }`} />
            {index === currentIndex && (
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${displayProjects[currentIndex]?.gradient} rounded-full opacity-50`}
                layoutId="activeIndicator"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Auto-play Control */}
      <div className="flex justify-center mt-3">
        <motion.button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isAutoPlay
              ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-black'
              : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
          } shadow-lg hover:shadow-xl`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isAutoPlay ? <HiPause className="w-4 h-4" /> : <HiPlay className="w-4 h-4" />}
          <span>{isAutoPlay ? 'Pause' : 'Play'} Auto-rotation</span>
        </motion.button>
      </div>
    </div>
  );
};

export default EnhancedCarousel;
