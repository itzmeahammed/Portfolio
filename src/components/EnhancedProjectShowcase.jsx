import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  HiArrowRight, 
  HiExternalLink, 
  HiCode,
  HiEye,
  HiStar,
  HiPlay,
  HiPause
} from 'react-icons/hi';
import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiFirebase,
  SiTypescript,
  SiJavascript
} from 'react-icons/si';

const EnhancedProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setSelectedProject((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const projects = [
    {
      id: 1,
      title: "AI Traffic Detection System",
      description: "Advanced computer vision system for real-time traffic monitoring and analysis using deep learning algorithms.",
      image: "/api/placeholder/600/400",
      technologies: [SiPython, SiReact, SiMongodb, SiNodedotjs],
      category: "AI/ML",
      status: "Completed",
      features: ["Real-time Detection", "Analytics Dashboard", "Alert System"],
      github: "https://github.com/itzmeahammed",
      live: "https://traffic-ai-demo.com",
      stats: { views: "2.5K", stars: "45", forks: "12" }
    },
    {
      id: 2,
      title: "Meditrack Healthcare Platform",
      description: "Comprehensive healthcare management system with patient tracking, appointment scheduling, and medical records.",
      image: "/api/placeholder/600/400",
      technologies: [SiReact, SiNodedotjs, SiMongodb, SiTailwindcss],
      category: "Healthcare",
      status: "In Progress",
      features: ["Patient Management", "Appointment System", "Medical Records"],
      github: "https://github.com/itzmeahammed",
      live: "https://meditrack-demo.com",
      stats: { views: "1.8K", stars: "32", forks: "8" }
    },
    {
      id: 3,
      title: "QuestionCloud AI Assistant",
      description: "Intelligent Q&A platform powered by natural language processing for automated customer support.",
      image: "/api/placeholder/600/400",
      technologies: [SiPython, SiReact, SiFirebase, SiTypescript],
      category: "AI/NLP",
      status: "Completed",
      features: ["NLP Processing", "Auto Responses", "Learning System"],
      github: "https://github.com/itzmeahammed",
      live: "https://questioncloud-ai.com",
      stats: { views: "3.2K", stars: "67", forks: "18" }
    },
    {
      id: 4,
      title: "FabFlow Management System",
      description: "Modern inventory and workflow management solution for manufacturing and textile industries.",
      image: "/api/placeholder/600/400",
      technologies: [SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss],
      category: "Business",
      status: "Completed",
      features: ["Inventory Tracking", "Workflow Automation", "Analytics"],
      github: "https://github.com/itzmeahammed",
      live: "https://fabflow-demo.com",
      stats: { views: "1.5K", stars: "28", forks: "6" }
    },
    {
      id: 5,
      title: "Medswift Mobile App",
      description: "Cross-platform mobile application for quick medical consultations and prescription management.",
      image: "/api/placeholder/600/400",
      technologies: [SiFlutter, SiFirebase, SiNodedotjs, SiMongodb],
      category: "Mobile",
      status: "In Progress",
      features: ["Video Consultations", "Prescription Tracking", "Health Records"],
      github: "https://github.com/itzmeahammed",
      live: "https://medswift-app.com",
      stats: { views: "2.1K", stars: "41", forks: "14" }
    }
  ];

  const currentProject = projects[selectedProject];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50/30 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-coral-400/10 to-rose-400/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-teal-400/10 to-amber-400/10 rounded-full blur-2xl"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-block px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full border border-gray-200 shadow-lg mb-6"
          >
            <span className="text-sm font-elegant-caption text-gray-700">🚀 Featured Work</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-elegant-heading text-gray-900 mb-6"
          >
            Projects That{' '}
            <motion.span
              className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent"
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
              Define Me
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-elegant-body text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore my portfolio of innovative solutions, from AI-powered applications 
            to full-stack web platforms that solve real-world problems.
          </motion.p>
        </motion.div>

        {/* Main Project Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Project Preview */}
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Browser Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Browser Header */}
              <div className="flex items-center space-x-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-500 border">
                    {currentProject.live}
                  </div>
                </div>
              </div>
              
              {/* Project Image */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <motion.div
                  className="text-6xl opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <HiCode />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Project Stats Overlay */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-medium text-gray-700 flex items-center space-x-1">
                    <HiEye className="w-3 h-3" />
                    <span>{currentProject.stats.views}</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-medium text-gray-700 flex items-center space-x-1">
                    <HiStar className="w-3 h-3" />
                    <span>{currentProject.stats.stars}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-coral-400 to-rose-400 rounded-full opacity-60"
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
          </motion.div>

          {/* Project Details */}
          <motion.div
            key={`details-${selectedProject}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Category & Status */}
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-elegant-caption">
                {currentProject.category}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-elegant-caption ${
                currentProject.status === 'Completed' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-amber-100 text-amber-700'
              }`}>
                {currentProject.status}
              </span>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-3xl md:text-4xl font-elegant-heading text-gray-900 mb-4">
                {currentProject.title}
              </h3>
              <p className="text-lg font-elegant-body text-gray-600 leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-elegant-caption text-gray-500 uppercase tracking-wide mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-3">
                {currentProject.technologies.map((Tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200"
                  >
                    <Tech className="w-6 h-6 text-gray-700" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-sm font-elegant-caption text-gray-500 uppercase tracking-wide mb-3">
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {currentProject.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-sm font-elegant-body text-gray-600"
                  >
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href={currentProject.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-elegant-caption shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <HiExternalLink className="w-5 h-5" />
                <span>View Live Demo</span>
              </motion.a>
              
              <motion.a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-xl font-elegant-caption hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                <HiCode className="w-5 h-5" />
                <span>View Code</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Project Navigation */}
        <div className="flex flex-col items-center space-y-6">
          {/* Auto-play Control */}
          <motion.button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            {isAutoPlay ? <HiPause className="w-4 h-4" /> : <HiPlay className="w-4 h-4" />}
            <span className="text-sm font-elegant-caption text-gray-700">
              {isAutoPlay ? 'Pause' : 'Play'} Auto-scroll
            </span>
          </motion.button>

          {/* Project Dots */}
          <div className="flex space-x-3">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedProject(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedProject 
                    ? 'bg-gray-800 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Project Thumbnails */}
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => setSelectedProject(index)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 p-4 rounded-xl border-2 transition-all duration-300 ${
                  index === selectedProject
                    ? 'border-gray-800 bg-gray-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="text-center space-y-2">
                  <div className="w-16 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    {(() => {
                      const TechIcon = project.technologies[0];
                      return <TechIcon className="w-6 h-6 text-gray-600" />;
                    })()}
                  </div>
                  <div className="text-xs font-elegant-caption text-gray-600 max-w-20 truncate">
                    {project.title}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedProjectShowcase;
