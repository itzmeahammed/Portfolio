import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiEye, HiCode, HiExternalLink, HiStar } from 'react-icons/hi';

const CarouselWithDepth = ({ projects = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  );

  // Sample projects if none provided
  const defaultProjects = [
    {
      id: 1,
      title: "AI Traffic Detection System",
      category: "AI/ML",
      description: "Advanced computer vision system for detecting traffic violations using OCR and object detection algorithms.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      technologies: ["Python", "OpenCV", "Flask", "ReactJS", "TensorFlow"],
      status: "Completed",
      metrics: { views: 1250, stars: 89, commits: 156 },
      liveUrl: "#",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 2,
      title: "Meditrack Healthcare",
      category: "Healthcare",
      description: "Medical inventory management system with AI-powered stock prediction and prescription analysis.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      technologies: ["React", "MongoDB", "Node.js", "NLP", "Python"],
      status: "Completed",
      metrics: { views: 890, stars: 67, commits: 203 },
      liveUrl: "#",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 3,
      title: "QuestionCloud AI Platform",
      category: "Education",
      description: "AI-driven learning platform with automatic question generation from syllabus content using embeddings.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      technologies: ["Python", "AI", "ReactJS", "MongoDB", "OpenAI"],
      status: "Completed",
      metrics: { views: 2100, stars: 134, commits: 287 },
      liveUrl: "#",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 4,
      title: "FabFlow Management",
      category: "Enterprise",
      description: "Comprehensive steel fabrication management system with company and customer portals.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      technologies: ["ReactJS", "Node.js", "MongoDB", "Express"],
      status: "Completed",
      metrics: { views: 756, stars: 45, commits: 178 },
      liveUrl: "#",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 5,
      title: "Medswift Mobile App",
      category: "Healthcare",
      description: "Ambulance booking and remote health monitoring application for hospitals and patients.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      status: "Completed",
      metrics: { views: 1340, stars: 78, commits: 234 },
      liveUrl: "#",
      githubUrl: "https://github.com/itzmeahammed"
    }
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayProjects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isDragging, displayProjects.length]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % displayProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + displayProjects.length) % displayProjects.length);
  };

  const getProjectPosition = (index) => {
    const diff = index - currentIndex;
    const totalProjects = displayProjects.length;
    
    if (diff > totalProjects / 2) {
      return diff - totalProjects;
    } else if (diff < -totalProjects / 2) {
      return diff + totalProjects;
    }
    return diff;
  };

  const ProjectCard = ({ project, position, index }) => {
    const isCenter = position === 0;
    const isVisible = Math.abs(position) <= 2;

    if (!isVisible) return null;

    const scale = isCenter ? 1 : 0.8 - Math.abs(position) * 0.1;
    const rotateY = position * 25;
    const translateX = position * 300;
    const translateZ = isCenter ? 0 : -Math.abs(position) * 200;
    const opacity = isCenter ? 1 : 0.6 - Math.abs(position) * 0.2;

    return (
      <motion.div
        key={project.id}
        className="absolute cursor-pointer"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale,
          rotateY,
          x: translateX,
          z: translateZ,
          opacity,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut"
        }}
        onClick={() => setCurrentIndex(index)}
        whileHover={isCenter ? { scale: 1.05 } : {}}
      >
        <div className="w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                project.status === 'Completed' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-yellow-500 text-black'
              }`}>
                {project.status}
              </span>
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-black/70 text-white rounded-full text-xs font-medium">
                {project.category}
              </span>
            </div>

            {/* Overlay for center card */}
            {isCenter && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <motion.a
                    href={project.liveUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <HiEye className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <HiCode className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies?.slice(0, 3).map((tech, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies?.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Metrics */}
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <HiEye className="w-4 h-4" />
                  <span>{project.metrics?.views || 0}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <HiStar className="w-4 h-4" />
                  <span>{project.metrics?.stars || 0}</span>
                </span>
              </div>
              {isCenter && (
                <motion.button
                  className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs font-medium">View Details</span>
                  <HiExternalLink className="w-3 h-3" />
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative w-full py-8 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full border border-purple-200 dark:border-purple-700 mb-3">
          <span className="text-sm font-medium text-purple-700 dark:text-purple-300">🎪 3D Carousel</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Immersive Project Experience
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Navigate through projects with depth and perspective
        </p>
      </motion.div>

      {/* 3D Carousel Container */}
      <div 
        className="relative h-[500px] flex items-center justify-center"
        style={{ perspective: '1000px' }}
        ref={constraintsRef}
      >
        {/* Projects */}
        <div className="relative w-full h-full flex items-center justify-center">
          {displayProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              position={getProjectPosition(index)}
              index={index}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <motion.button
          onClick={prevProject}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <HiChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </motion.button>

        <motion.button
          onClick={nextProject}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <HiChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </motion.button>
      </div>

      {/* Project Details Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-8 px-4"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Project Info */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {displayProjects[currentIndex]?.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {displayProjects[currentIndex]?.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {displayProjects[currentIndex]?.technologies?.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    href={displayProjects[currentIndex]?.liveUrl}
                    className="px-6 py-3 bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white text-white dark:text-black rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiEye className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={displayProjects[currentIndex]?.githubUrl}
                    className="px-6 py-3 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiCode className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </div>

              {/* Project Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {displayProjects[currentIndex]?.metrics?.views || 0}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Views</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {displayProjects[currentIndex]?.metrics?.stars || 0}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Stars</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {displayProjects[currentIndex]?.metrics?.commits || 0}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Commits</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="flex justify-center mt-12 space-x-2">
        {displayProjects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gray-800 dark:bg-gray-200 scale-125'
                : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <div className="flex justify-center mt-8">
        <motion.button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isAutoPlay
              ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-black'
              : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isAutoPlay ? 'Pause Auto-play' : 'Resume Auto-play'}
        </motion.button>
      </div>
    </div>
  );
};

export default CarouselWithDepth;
