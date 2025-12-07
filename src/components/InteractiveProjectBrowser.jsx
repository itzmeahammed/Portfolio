import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  HiArrowLeft,
  HiArrowRight,
  HiExternalLink,
  HiCode,
  HiStar,
  HiEye,
  HiPlay,
  HiPause
} from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 102,
    title: "APT.OS - Property Orchestrator",
    description: "Premium SaaS ERP for real estate with immersive 3D command center",
    url: "https://multi-tenant-erp.netlify.app/",
    category: "SaaS",
    technologies: ["React", "Three.js", "TypeScript", "Tailwind"],
    stats: { views: "1.2K", stars: "45", techs: 5 },
    color: "from-gray-800 to-zinc-900"
  },
  {
    id: 101,
    title: "Memory Rewriter AI",
    description: "Privacy-first cognitive reframing tool running entirely in-browser",
    url: "https://memory-rewriter-ai.netlify.app/",
    category: "AI/ML",
    technologies: ["WebLLM", "React", "TypeScript", "AI"],
    stats: { views: "850", stars: "32", techs: 5 },
    color: "from-indigo-900 to-slate-800"
  },
  {
    id: 1,
    title: "3D Study Planner",
    description: "Interactive 3D study planning tool with immersive learning experience",
    url: "https://3d-study-planner.netlify.app/",
    category: "EdTech",
    technologies: ["React", "Three.js", "WebGL", "Animation"],
    stats: { views: "2.1K", stars: "45", techs: 4 },
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 8,
    title: "MediConnect 3D",
    description: "3D medical consultation platform with interactive health visualization",
    url: "https://mediconnect-3d.netlify.app/",
    category: "Healthcare",
    technologies: ["React", "Three.js", "WebRTC", "3D"],
    stats: { views: "2.7K", stars: "61", techs: 4 },
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 9,
    title: "Multi-Tool AI",
    description: "Comprehensive AI toolkit with multiple utility functions",
    url: "https://multi-tool-ai.netlify.app/",
    category: "AI/ML",
    technologies: ["React", "AI", "Python", "APIs"],
    stats: { views: "2.4K", stars: "51", techs: 4 },
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 11,
    title: "Scheme Seeker V2",
    description: "Government and business scheme discovery platform",
    url: "https://scheme-seeker-v2.netlify.app/",
    category: "Web",
    technologies: ["React", "Search", "MongoDB", "Analytics"],
    stats: { views: "1.8K", stars: "36", techs: 4 },
    color: "from-orange-500 to-amber-500"
  },
  {
    id: 3,
    title: "Smart Farming V1",
    description: "Agricultural management platform with smart analytics and crop monitoring",
    url: "https://smart-farming-v1.netlify.app/",
    category: "Agriculture",
    technologies: ["React", "Node.js", "MongoDB", "Analytics"],
    stats: { views: "3.2K", stars: "68", techs: 4 },
    color: "from-green-500 to-lime-500"
  },
  {
    id: 4,
    title: "Document Analyzer V1",
    description: "Advanced document analysis with OCR and AI-powered insights",
    url: "https://document-analyzer-v1.netlify.app/",
    category: "AI/ML",
    technologies: ["Python", "React", "OCR", "NLP"],
    stats: { views: "1.9K", stars: "38", techs: 4 },
    color: "from-indigo-500 to-violet-500"
  },
  {
    id: 5,
    title: "Dine Smart",
    description: "Restaurant management and ordering system with real-time updates",
    url: "https://dine-smart.netlify.app/",
    category: "Web",
    technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
    stats: { views: "2.5K", stars: "55", techs: 4 },
    color: "from-red-500 to-rose-500"
  },
  {
    id: 6,
    title: "AutoDev Bolt",
    description: "AI-powered code generation and automation platform",
    url: "https://auto-gen-bolt.netlify.app/",
    category: "AI/ML",
    technologies: ["React", "AI", "CodeGen", "Automation"],
    stats: { views: "3.5K", stars: "72", techs: 4 },
    color: "from-violet-500 to-purple-500"
  },
  {
    id: 7,
    title: "Event AI",
    description: "Intelligent event management with AI scheduling and recommendations",
    url: "https://event-ai.netlify.app/",
    category: "AI/ML",
    technologies: ["React", "AI", "Node.js", "MongoDB"],
    stats: { views: "2.3K", stars: "48", techs: 4 },
    color: "from-pink-500 to-fuchsia-500"
  },
  {
    id: 10,
    title: "3D Parking Website",
    description: "Interactive 3D parking management and reservation system",
    url: "https://3d-parking-website.netlify.app/",
    category: "Web",
    technologies: ["React", "Three.js", "Node.js", "3D"],
    stats: { views: "2.0K", stars: "42", techs: 4 },
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 12,
    title: "Traffic Violation V1",
    description: "AI-powered traffic violation detection and reporting system",
    url: "https://traffic-violation-v1.netlify.app/",
    category: "AI/ML",
    technologies: ["Python", "OpenCV", "React", "Detection"],
    stats: { views: "3.1K", stars: "65", techs: 4 },
    color: "from-orange-500 to-red-500"
  },
  {
    id: 2,
    title: "3D Symptoms Analyzer",
    description: "AI-powered 3D symptom diagnosis system with interactive visualization",
    url: "https://3d-symptoms.netlify.app/",
    category: "AI/ML",
    technologies: ["React", "Three.js", "AI", "3D"],
    stats: { views: "2.8K", stars: "52", techs: 4 },
    color: "from-teal-500 to-emerald-500"
  }
];

const InteractiveProjectBrowser = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const currentProject = projects[selectedProject];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setSelectedProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <div className="w-full max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Control Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center space-x-4 bg-white dark:bg-gray-900 p-2 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${isAutoPlay
              ? 'bg-red-500/10 text-red-600 dark:text-red-400'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
              }`}
          >
            {isAutoPlay ? <HiPause /> : <HiPlay />}
            {isAutoPlay ? 'Pause Demo' : 'Auto Play'}
          </button>
          <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2"></div>
          <span className="text-sm font-medium text-gray-500">
            Showing Project <span className="text-gray-900 dark:text-white font-bold">{selectedProject + 1}</span> of {projects.length}
          </span>
        </div>

        {/* Project Indicators */}
        <div className="flex gap-1.5 flex-wrap justify-center max-w-xl">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedProject(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${selectedProject === idx
                ? 'w-8 bg-gray-900 dark:bg-white'
                : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch h-auto lg:h-[600px]">
        {/* Browser Frame - WIDER */}
        <div className="lg:col-span-9 h-[400px] lg:h-full relative group order-2 lg:order-1">
          <motion.div
            layout
            className="w-full h-full bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border-[1px] border-gray-800 flex flex-col"
          >
            {/* Browser Header */}
            <div className="bg-[#1a1b26] px-4 py-3 flex items-center gap-4 border-b border-gray-800 shrink-0">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>

              {/* Navigation Controls */}
              <div className="flex gap-2 text-gray-500">
                <HiArrowLeft className="cursor-pointer hover:text-white" />
                <HiArrowRight className="cursor-pointer hover:text-white" />
              </div>

              {/* URL Bar */}
              <div className="flex-1 bg-[#16161e] rounded-lg px-4 py-1.5 text-xs text-gray-400 font-mono flex items-center justify-between border border-gray-800">
                <span className="truncate flex items-center gap-2">
                  <span className="text-green-500">🔒</span>
                  {currentProject.url}
                </span>
                <HiExternalLink className="hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* Iframe Content */}
            <div className="flex-1 bg-white relative">
              <AnimatePresence mode="wait">
                <motion.iframe
                  key={currentProject.url}
                  src={currentProject.url}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full border-none"
                  title={currentProject.title}
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Decorative Glow */}
          <div className={`absolute -inset-1 bg-gradient-to-r ${currentProject.color} opacity-20 blur-xl -z-10 transition-colors duration-500`}></div>
        </div>

        {/* Project Details Sidebar */}
        <div className="lg:col-span-3 h-auto lg:h-full flex flex-col order-1 lg:order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 h-full flex flex-col shadow-xl"
            >
              {/* Header Info */}
              <div className="mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4 bg-gradient-to-r ${currentProject.color}`}>
                  {currentProject.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                  {currentProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {currentProject.description}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-100 dark:border-gray-700">
                  <HiEye className="w-4 h-4 mx-auto mb-1 text-gray-400" />
                  <div className="font-bold text-gray-900 dark:text-white text-sm">{currentProject.stats.views}</div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-100 dark:border-gray-700">
                  <HiStar className="w-4 h-4 mx-auto mb-1 text-yellow-500" />
                  <div className="font-bold text-gray-900 dark:text-white text-sm">{currentProject.stats.stars}</div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-100 dark:border-gray-700">
                  <HiCode className="w-4 h-4 mx-auto mb-1 text-blue-500" />
                  <div className="font-bold text-gray-900 dark:text-white text-sm">{currentProject.stats.techs}</div>
                </div>
              </div>

              {/* Tech Stack - Fixed Visibility */}
              <div className="mb-auto">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg text-xs font-bold border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length)}
                    className="flex-1 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 font-semibold text-sm group"
                  >
                    <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => setSelectedProject((prev) => (prev + 1) % projects.length)}
                    className="flex-1 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 font-semibold text-sm group"
                  >
                    <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default InteractiveProjectBrowser;
