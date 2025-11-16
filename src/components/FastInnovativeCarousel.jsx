import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiChevronLeft, 
  HiChevronRight, 
  HiCode, 
  HiEye,
  HiStar,
  HiPlay,
  HiPause,
  HiSparkles
} from 'react-icons/hi';

// Optimized project data with placeholder boxes (no external images)
const projectsData = {
  "carouselStyle": "innovative-enhanced-ui",
  "transition": "smooth-slide-fade",
  "cardShape": "neumorphic-rounded-glass",
  "placeholderType": "empty-box",
  "projects": [
    {
      "id": 1,
      "title": "Traffic Violation Detection System",
      "description": "AI-powered OCR & object detection system that auto-detects traffic violations with real-time processing.",
      "techStack": ["Python", "OpenCV", "OCR", "Deep Learning"],
      "placeholderBox": true,
      "cta": "View Details",
      "gradient": "from-blue-500 to-cyan-500",
      "bgPattern": "traffic"
    },
    {
      "id": 2,
      "title": "Petition Management System",
      "description": "AI-based classification of police petitions with multi-tier admin portals and automated routing.",
      "techStack": ["MERN", "NLP", "AI Classification"],
      "placeholderBox": true,
      "cta": "Explore",
      "gradient": "from-purple-500 to-pink-500",
      "bgPattern": "legal"
    },
    {
      "id": 3,
      "title": "Smart Classroom",
      "description": "Live face recognition attendance system with Google Meet integration and analytics dashboard.",
      "techStack": ["React", "Python", "Face Recognition"],
      "placeholderBox": true,
      "cta": "Learn More",
      "gradient": "from-green-500 to-teal-500",
      "bgPattern": "education"
    },
    {
      "id": 4,
      "title": "Medswift",
      "description": "Ambulance locator with live tracking and medical emergency assistant mobile application.",
      "techStack": ["Flutter", "Maps API", "Firebase"],
      "placeholderBox": true,
      "cta": "Check App",
      "gradient": "from-red-500 to-orange-500",
      "bgPattern": "medical"
    },
    {
      "id": 5,
      "title": "Career Guidance System",
      "description": "AI-powered career prediction platform with integrated task management and progress tracking.",
      "techStack": ["React", "Python", "AI", "NLP"],
      "placeholderBox": true,
      "cta": "View Project",
      "gradient": "from-indigo-500 to-purple-500",
      "bgPattern": "career"
    }
  ]
};

// Memoized placeholder patterns for performance
const PlaceholderBox = React.memo(({ pattern, gradient }) => {
  const patterns = {
    traffic: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-2 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`w-4 h-4 bg-gradient-to-br ${gradient} rounded`} />
          ))}
        </div>
      </div>
    ),
    legal: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="space-y-2 opacity-20">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`h-2 bg-gradient-to-r ${gradient} rounded`} style={{ width: `${80 - i * 10}%` }} />
          ))}
        </div>
      </div>
    ),
    education: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex space-x-2 opacity-20">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`w-6 h-8 bg-gradient-to-t ${gradient} rounded-t`} />
          ))}
        </div>
      </div>
    ),
    medical: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-8 h-8 bg-gradient-to-br ${gradient} rounded-full opacity-20 relative`}>
          <div className="absolute inset-2 bg-white rounded-full" />
        </div>
      </div>
    ),
    career: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-end space-x-1 opacity-20">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`w-2 bg-gradient-to-t ${gradient} rounded-t`} style={{ height: `${(i + 1) * 8}px` }} />
          ))}
        </div>
      </div>
    )
  };

  return (
    <div className={`w-full h-48 bg-gradient-to-br ${gradient} rounded-2xl relative overflow-hidden`}>
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
      {patterns[pattern]}
      <div className="absolute bottom-4 right-4 opacity-30">
        <HiCode className="w-6 h-6 text-white" />
      </div>
    </div>
  );
});

PlaceholderBox.displayName = 'PlaceholderBox';

// Memoized project card for performance
const ProjectCard = React.memo(({ project, index, currentIndex, onCardClick }) => {
  const isActive = index === currentIndex;
  const distance = Math.abs(index - currentIndex);
  const isVisible = distance <= 2;

  const cardVariants = {
    active: {
      scale: 1,
      opacity: 1,
      x: 0,
      rotateY: 0,
      z: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    inactive: {
      scale: 0.85,
      opacity: 0.6,
      x: (index - currentIndex) * 300,
      rotateY: (index - currentIndex) * 15,
      z: -distance * 100,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hidden: {
      scale: 0.7,
      opacity: 0,
      x: (index - currentIndex) * 400,
      transition: { duration: 0.4 }
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="absolute cursor-pointer"
      variants={cardVariants}
      animate={isActive ? "active" : "inactive"}
      onClick={() => onCardClick(index)}
      whileHover={isActive ? { y: -10 } : { y: -5 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="w-80 h-[420px] relative">
        {/* Glowing background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-20`}
          animate={{
            scale: isActive ? 1.1 : 0.9,
            opacity: isActive ? 0.3 : 0.1,
          }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Main card */}
        <div className="relative w-full h-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 overflow-hidden shadow-2xl">
          {/* Placeholder image */}
          <div className="p-4">
            <PlaceholderBox pattern={project.bgPattern} gradient={project.gradient} />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Title with animated underline */}
            <div className="relative">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                {project.title}
              </h3>
              <motion.div
                className={`h-0.5 bg-gradient-to-r ${project.gradient} rounded-full`}
                animate={{ width: isActive ? "100%" : "0%" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                  className="px-2 py-1 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200/30 dark:border-gray-700/30"
                >
                  {tech}
                </motion.span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-2 py-1 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200/30 dark:border-gray-700/30">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>

            {/* CTA Button */}
            {isActive && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`w-full py-2 px-4 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiEye className="w-4 h-4" />
                <span>{project.cta}</span>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const FastInnovativeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const projects = useMemo(() => projectsData.projects, []);

  // Optimized navigation functions
  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const handleCardClick = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play with performance optimization
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered, projects.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      }
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }
      if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [projects.length]);

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-full border border-blue-200 dark:border-blue-700 mb-3">
          <HiSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">🚀 Fast Innovative Carousel</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Lightning-Fast Project Showcase
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Optimized for performance with placeholder designs and smooth animations
        </p>
      </motion.div>

      {/* Carousel container */}
      <div className="relative h-[460px] flex items-center justify-center overflow-hidden">
        {/* Background glow */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${projects[currentIndex]?.gradient || 'from-blue-500 to-purple-500'} opacity-5 blur-3xl`}
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

        {/* Project cards */}
        <div className="relative flex items-center justify-center" style={{ perspective: '1000px' }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              currentIndex={currentIndex}
              onCardClick={handleCardClick}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <motion.button
          onClick={prevProject}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl rounded-full shadow-xl hover:bg-white/20 dark:hover:bg-gray-900/20 transition-all duration-300 border border-white/20 dark:border-gray-700/20"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous project"
        >
          <HiChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </motion.button>

        <motion.button
          onClick={nextProject}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl rounded-full shadow-xl hover:bg-white/20 dark:hover:bg-gray-900/20 transition-all duration-300 border border-white/20 dark:border-gray-700/20"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next project"
        >
          <HiChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </motion.button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="relative overflow-hidden rounded-full"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to project ${index + 1}`}
          >
            <div className={`w-10 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gray-800 dark:bg-gray-200'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-400'
            }`} />
            {index === currentIndex && (
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${projects[currentIndex]?.gradient} rounded-full opacity-50`}
                layoutId="activeIndicator"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Auto-play control */}
      <div className="flex justify-center mt-3">
        <motion.button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
            isAutoPlay
              ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-black'
              : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
          } shadow-lg hover:shadow-xl`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isAutoPlay ? <HiPause className="w-3 h-3" /> : <HiPlay className="w-3 h-3" />}
          <span>{isAutoPlay ? 'Pause' : 'Play'}</span>
        </motion.button>
      </div>
    </div>
  );
};

export default FastInnovativeCarousel;
