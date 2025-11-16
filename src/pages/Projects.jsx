import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiEye, HiExternalLink, HiSearch, HiFilter, HiMail, HiPhone } from 'react-icons/hi';
import ProjectCard from '../components/ProjectCard';



const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const bigProjects = [
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
      id: 27,
      title: "rockpaperscissor",
      category: "Games",
      type: "Game",
      description: "Rock Paper Scissor game project.",
      technologies: ["JavaScript", "HTML", "CSS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
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
      id: 29,
      title: "AgriSmart",
      category: "Mobile Development",
      type: "Mobile / Agriculture",
      description: "Agriculture/farming app for farmers.",
      technologies: ["React Native", "Node.js"],
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
      id: 31,
      title: "Agrismart-2",
      category: "Mobile Development",
      type: "Mobile / Agriculture",
      description: "Iteration of AgriSmart app.",
      technologies: ["React Native", "Node.js"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 32,
      title: "app",
      category: "Mobile Development",
      type: "Mobile/Web",
      description: "Small web/mobile app project.",
      technologies: ["ReactJS", "Node.js"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 33,
      title: "public",
      category: "Web Development",
      type: "Web",
      description: "Public portal/project.",
      technologies: ["ReactJS", "Node.js"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 34,
      title: "image-caption",
      category: "AI/ML",
      type: "AI / Web",
      description: "AI project for generating image captions.",
      technologies: ["Python", "AI", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 35,
      title: "location-finder",
      category: "Web Development",
      type: "Web / Utility",
      description: "Tool/app for finding locations/services.",
      technologies: ["ReactJS", "Node.js"],
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
      id: 37,
      title: "Parking",
      category: "Web Development",
      type: "Web / Utility",
      description: "Parking management system.",
      technologies: ["ReactJS", "Node.js", "MongoDB"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 38,
      title: "auto-gen-bolt",
      category: "AI/ML",
      type: "AI / Web",
      description: "AI/code automation tool.",
      technologies: ["Python", "AI", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 39,
      title: "text-to-speech",
      category: "AI/ML",
      type: "AI / Web",
      description: "Voice synthesis tool.",
      technologies: ["Python", "AI", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 40,
      title: "dineSmart",
      category: "Web Development",
      type: "Web / Restaurant",
      description: "Restaurant ordering management tool.",
      technologies: ["ReactJS", "Node.js"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 41,
      title: "shoping",
      category: "Web Development",
      type: "E-commerce / Web",
      description: "Shopping/e-commerce project.",
      technologies: ["ReactJS", "Node.js", "MongoDB"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 42,
      title: "eldersync",
      category: "Web Development",
      type: "Web / Utility",
      description: "App for elders' reminders and management.",
      technologies: ["ReactJS", "Node.js"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 43,
      title: "login page",
      category: "Web Development",
      type: "Web",
      description: "Standalone login page project.",
      technologies: ["ReactJS", "Node.js"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 44,
      title: "image-caption - Copy",
      category: "AI/ML",
      type: "AI / Web",
      description: "Another version of image captioning project.",
      technologies: ["Python", "AI", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 45,
      title: "chatbot",
      category: "AI/ML",
      type: "AI / Web",
      description: "AI chat assistant project.",
      technologies: ["Python", "AI", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 46,
      title: "nutrition-detector",
      category: "AI/ML",
      type: "AI / Web",
      description: "Nutrition analysis tool.",
      technologies: ["Python", "AI", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 47,
      title: "kyc_duplicate_detector",
      category: "AI/ML",
      type: "Web / AI",
      description: "KYC validation/deduplication tool.",
      technologies: ["Python", "AI", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 48,
      title: "parking-phase2",
      category: "Web Development",
      type: "Web",
      description: "Phase 2 of Parking management system.",
      technologies: ["ReactJS", "Node.js"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 49,
      title: "AI-Powered Study Assistant",
      category: "AI/ML",
      type: "AI / Web",
      description: "AI tool for student guidance & study help.",
      technologies: ["Python", "AI", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 50,
      title: "documentAnalyzer",
      category: "AI/ML",
      type: "AI / Web",
      description: "AI/NLP tool to analyze documents.",
      technologies: ["Python", "AI", "ReactJS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 51,
      title: "agentsflow-main",
      category: "Web Development",
      type: "Web / Utility",
      description: "Workflow automation tool.",
      technologies: ["ReactJS", "Node.js"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 52,
      title: "Wedding photography website",
      category: "Web Development",
      type: "Web / UI",
      description: "Wedding photography portfolio website.",
      technologies: ["HTML", "CSS", "JS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 53,
      title: "whatsapp_automation",
      category: "Automation",
      type: "Web / Automation",
      description: "WhatsApp automation tool using scripts.",
      technologies: ["Python", "Selenium"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 54,
      title: "event-website",
      category: "Web Development",
      type: "Web",
      description: "Event management website.",
      technologies: ["HTML", "CSS", "JS"],
      status: "Completed",
      githubUrl: "https://github.com/itzmeahammed"
    },
    {
      id: 55,
      title: "Aistudyscheduler",
      category: "AI/ML",
      type: "AI / Web",
      description: "AI-based study scheduling tool.",
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
    }
  ];

  const allProjects = [...bigProjects, ...smallProjects];

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
        staggerChildren: 0.03,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-center space-y-8"
          >
            <motion.div variants={itemVariants}>
              <HiCode className="w-16 h-16 text-black dark:text-white mx-auto mb-6" />
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-elegant-heading text-black dark:text-white mb-6">
                My Projects
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-elegant-body">
                A showcase of innovative solutions addressing real-world challenges in healthcare, 
                education, agriculture, law enforcement, and more using cutting-edge technologies.
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div variants={itemVariants} className="max-w-6xl mx-auto space-y-8">
              {/* Search Bar */}
              <div className="relative">
                <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects by name, description, or technology..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white dark:bg-black border-2 border-black/20 dark:border-white/20 rounded-2xl text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-black dark:focus:border-white focus:outline-none transition-colors text-base sm:text-lg"
                />
              </div>

              {/* Project Size Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="text-black dark:text-white font-semibold mt-2">Project Size:</span>
                {sizes.map((size) => (
                  <motion.button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      selectedSize === size
                        ? 'bg-black dark:bg-white text-white dark:text-black'
                        : 'bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4">
                <HiFilter className="w-6 h-6 text-black dark:text-white mt-2" />
                <span className="text-black dark:text-white font-semibold mt-2">Category:</span>
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-black dark:bg-white text-white dark:text-black'
                        : 'bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
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
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
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
              <HiSearch className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">No Projects Found</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Try adjusting your search terms or category filter to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
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
                { number: allProjects.length, label: 'Total Projects', icon: HiCode },
                { number: bigProjects.length, label: 'Big Projects', icon: HiCode },
                { number: smallProjects.length, label: 'Small Projects', icon: HiCode },
                { number: allProjects.filter(p => p.category === 'AI/ML').length, label: 'AI/ML Projects', icon: HiCode },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-8 bg-white dark:bg-black rounded-2xl border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <stat.icon className="w-12 h-12 text-black dark:text-white mx-auto mb-4" />
                  <motion.h3 
                    className="text-4xl font-elegant-heading text-black dark:text-white mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black dark:bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              className="px-8 py-4 bg-white dark:bg-black text-black dark:text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300"
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
