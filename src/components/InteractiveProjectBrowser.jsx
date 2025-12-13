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
    id: 110,
    title: "Climo Group",
    description: "Modern corporate agency platform with immersive animations and detailed service portfolio showcase",
    url: "https://climo-group.netlify.app/",
    category: "Agency",
    technologies: ["React", "Framer Motion", "Tailwind", "Vite"],
    stats: { views: "1.5K+", stars: "45", techs: 4 },
    color: "from-zinc-900 to-black"
  },
  {
    id: 111,
    title: "Nova Stream",
    description: "Next-generation video streaming interface with high-performance content delivery and premium UI",
    url: "https://nova-stream-v1.netlify.app/",
    category: "Entertainment",
    technologies: ["React", "API Integration", "Tailwind", "Media Player"],
    stats: { views: "2.1K", stars: "52", techs: 4 },
    color: "from-neutral-900 to-zinc-900"
  },
  {
    id: 102,
    title: "APT.OS - Property Orchestrator",
    description: "Premium SaaS ERP for real estate with immersive 3D command center",
    url: "https://multi-tenant-erp.netlify.app/",
    category: "SaaS",
    technologies: ["React", "Three.js", "TypeScript", "Tailwind"],
    stats: { views: "1.2K", stars: "45", techs: 5 },
    color: "from-stone-900 to-black"
  },
  {
    id: 101,
    title: "Memory Rewriter AI",
    description: "Privacy-first cognitive reframing tool running entirely in-browser",
    url: "https://memory-rewriter-ai.netlify.app/",
    category: "AI/ML",
    technologies: ["WebLLM", "React", "TypeScript", "AI"],
    stats: { views: "850", stars: "32", techs: 5 },
    color: "from-gray-900 to-slate-900"
  },
  {
    id: 103,
    title: "Learn Anything with AI 🧠✨",
    description: "Interactive AI-powered learning platform with 3D knowledge roadmaps and Socratic tutoring.",
    url: "https://learn-anything-with-ai.netlify.app/",
    category: "AI/EdTech",
    technologies: ["React", "Three.js", "AI", "Tailwind"],
    stats: { views: "900+", stars: "40", techs: 5 },
    color: "from-slate-900 to-zinc-900"
  },
  {
    id: 1,
    title: "3D Study Planner",
    description: "Interactive 3D study planning tool with immersive learning experience",
    url: "https://3d-study-planner.netlify.app/",
    category: "EdTech",
    technologies: ["React", "Three.js", "WebGL", "Animation"],
    stats: { views: "2.1K", stars: "45", techs: 4 },
    color: "from-zinc-800 to-neutral-900"
  },
  {
    id: 8,
    title: "MediConnect 3D",
    description: "3D medical consultation platform with interactive health visualization",
    url: "https://mediconnect-3d.netlify.app/",
    category: "Healthcare",
    technologies: ["React", "Three.js", "WebRTC", "3D"],
    stats: { views: "2.7K", stars: "61", techs: 4 },
    color: "from-stone-800 to-gray-900"
  },
  {
    id: 9,
    title: "Multi-Tool AI",
    description: "Comprehensive AI toolkit with multiple utility functions",
    url: "https://multi-tool-ai.netlify.app/",
    category: "AI/ML",
    technologies: ["React", "AI", "Python", "APIs"],
    stats: { views: "2.4K", stars: "51", techs: 4 },
    color: "from-neutral-800 to-stone-900"
  },
  {
    id: 11,
    title: "Scheme Seeker V2",
    description: "Government and business scheme discovery platform",
    url: "https://scheme-seeker-v2.netlify.app/",
    category: "Web",
    technologies: ["React", "Search", "MongoDB", "Analytics"],
    stats: { views: "1.8K", stars: "36", techs: 4 },
    color: "from-gray-800 to-zinc-800"
  },
  {
    id: 3,
    title: "Smart Farming V1",
    description: "Agricultural management platform with smart analytics and crop monitoring",
    url: "https://smart-farming-v1.netlify.app/",
    category: "Agriculture",
    technologies: ["React", "Node.js", "MongoDB", "Analytics"],
    stats: { views: "3.2K", stars: "68", techs: 4 },
    color: "from-slate-800 to-gray-800"
  },
  {
    id: 4,
    title: "Document Analyzer V1",
    description: "Advanced document analysis with OCR and AI-powered insights",
    url: "https://document-analyzer-v1.netlify.app/",
    category: "AI/ML",
    technologies: ["Python", "React", "OCR", "NLP"],
    stats: { views: "1.9K", stars: "38", techs: 4 },
    color: "from-zinc-800 to-stone-800"
  },
  {
    id: 5,
    title: "Dine Smart",
    description: "Restaurant management and ordering system with real-time updates",
    url: "https://dine-smart.netlify.app/",
    category: "Web",
    technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
    stats: { views: "2.5K", stars: "55", techs: 4 },
    color: "from-stone-800 to-neutral-800"
  },
  {
    id: 6,
    title: "AutoDev Bolt",
    description: "AI-powered code generation and automation platform",
    url: "https://auto-gen-bolt.netlify.app/",
    category: "AI/ML",
    technologies: ["React", "AI", "CodeGen", "Automation"],
    stats: { views: "3.5K", stars: "72", techs: 4 },
    color: "from-neutral-900 to-zinc-800"
  },
  {
    id: 7,
    title: "Event AI",
    description: "Intelligent event management with AI scheduling and recommendations",
    url: "https://event-ai.netlify.app/",
    category: "AI/ML",
    technologies: ["React", "AI", "Node.js", "MongoDB"],
    stats: { views: "2.3K", stars: "48", techs: 4 },
    color: "from-gray-900 to-stone-900"
  },
  {
    id: 10,
    title: "3D Parking Website",
    description: "Interactive 3D parking management and reservation system",
    url: "https://3d-parking-website.netlify.app/",
    category: "Web",
    technologies: ["React", "Three.js", "Node.js", "3D"],
    stats: { views: "2.0K", stars: "42", techs: 4 },
    color: "from-slate-900 to-gray-900"
  },
  {
    id: 12,
    title: "Traffic Violation V1",
    description: "AI-powered traffic violation detection and reporting system",
    url: "https://traffic-violation-v1.netlify.app/",
    category: "AI/ML",
    technologies: ["Python", "OpenCV", "React", "Detection"],
    stats: { views: "3.1K", stars: "65", techs: 4 },
    color: "from-zinc-900 to-neutral-900"
  },
  {
    id: 2,
    title: "3D Symptoms Analyzer",
    description: "AI-powered 3D symptom diagnosis system with interactive visualization",
    url: "https://3d-symptoms.netlify.app/",
    category: "AI/ML",
    technologies: ["React", "Three.js", "AI", "3D"],
    stats: { views: "2.8K", stars: "52", techs: 4 },
    color: "from-stone-900 to-zinc-900"
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
    <div className="w-full max-w-[98%] mx-auto px-2 sm:px-4 pb-12">
      {/* Main Grid: Stacked for Max Width */}
      <div className="flex flex-col gap-6">

        {/* Browser Frame - Maximized Width */}
        <div className="w-full h-[60vh] md:h-[70vh] lg:h-[75vh] relative group rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-[#0a0a0a]">
          {/* Browser Header - Dark Industrial */}
          <div className="bg-zinc-950 px-6 py-4 flex items-center gap-6 border-b border-zinc-800 absolute top-0 left-0 right-0 z-20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
            </div>

            {/* Navigation Controls */}
            <div className="flex gap-4 text-zinc-500">
              <button
                onClick={() => setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length)}
                className="hover:text-white transition-colors"
              >
                <HiArrowLeft size={20} />
              </button>
              <div className="h-5 w-px bg-zinc-800"></div>
              <button
                onClick={() => setSelectedProject((prev) => (prev + 1) % projects.length)}
                className="hover:text-white transition-colors"
              >
                <HiArrowRight size={20} />
              </button>
            </div>

            {/* URL Bar - Sleek & Wide */}
            <div className="flex-1 bg-zinc-900 rounded-xl px-4 py-2 text-xs text-zinc-400 font-mono flex items-center justify-between border border-zinc-800">
              <span className="truncate flex items-center gap-3">
                <span className="text-zinc-500">🔒</span>
                <span className="opacity-70">https://</span>
                <span className="text-white font-medium">{currentProject.url.replace('https://', '').replace(/\/$/, '')}</span>
              </span>
              <a
                href={currentProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white cursor-pointer transition-colors p-1 hover:bg-zinc-800 rounded"
              >
                <HiExternalLink size={16} />
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Live Preview
              </span>
            </div>
          </div>

          {/* Iframe Content */}
          <div className="w-full h-full pt-[68px] bg-zinc-900 relative">
            <AnimatePresence mode="wait">
              <motion.iframe
                key={currentProject.url}
                src={currentProject.url}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full border-none bg-white"
                title={currentProject.title}
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Control Deck - High Contrast Monochrome */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Info Card - Dark Block */}
          <motion.div
            layout
            className="lg:col-span-8 bg-zinc-950 p-6 md:p-8 rounded-3xl flex flex-col justify-between border border-zinc-900 shadow-xl"
          >
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="px-4 py-1.5 rounded-full bg-zinc-800 text-white text-xs font-bold tracking-wider uppercase border border-zinc-700">
                  {currentProject.category}
                </span>
                <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono">
                  <span>PROJECT ID</span>
                  <span className="text-zinc-300">#{currentProject.id.toString().padStart(3, '0')}</span>
                </div>
              </div>

              <div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                  {currentProject.title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                  {currentProject.description}
                </p>
              </div>
            </div>

            {/* Tech Stack - Bottom of Card */}
            <div className="mt-8 pt-8 border-t border-zinc-900">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 block">Technologies Used</span>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats & Actions Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Stats Row - Light Cards for Contrast */}
            <div className="grid grid-cols-3 gap-3 flex-1">
              {[
                { icon: HiEye, val: currentProject.stats.views, label: "Views" },
                { icon: HiStar, val: currentProject.stats.stars, label: "Stars" },
                { icon: HiCode, val: currentProject.stats.techs, label: "Stack" },
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-zinc-200 p-4 rounded-3xl flex flex-col items-center justify-center text-center shadow-sm h-full min-h-[120px]">
                  <stat.icon className="w-6 h-6 text-zinc-400 mb-3" />
                  <span className="text-2xl font-black text-black tracking-tight">{stat.val}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Play/Pause Control - Dark */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`py-6 rounded-3xl font-bold transition-all flex items-center justify-center gap-3 text-sm tracking-widest uppercase ${isAutoPlay
                  ? 'bg-zinc-100 text-black border border-zinc-200 hover:bg-zinc-200'
                  : 'bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800'
                }`}
            >
              {isAutoPlay ? <HiPause className="w-5 h-5" /> : <HiPlay className="w-5 h-5" />}
              <span>{isAutoPlay ? 'Pause Demo' : 'Auto Play'}</span>
            </button>

            {/* Progress Bar */}
            <div className="bg-zinc-100 rounded-full h-2 overflow-hidden w-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((selectedProject + 1) / projects.length) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-black"
              />
            </div>
            <div className="flex justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-wider px-1">
              <span>01</span>
              <span>{String(projects.length).padStart(2, '0')}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default InteractiveProjectBrowser;
