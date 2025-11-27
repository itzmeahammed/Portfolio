import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink, HiEye, HiMail, HiChevronLeft, HiChevronRight, HiCode, HiCloudUpload, HiLightBulb, HiMicrophone, HiVolumeUp, HiShieldCheck, HiCog } from 'react-icons/hi';
import { FaCamera, FaClipboardList, FaUserMd, FaBrain, FaHospital, FaBarcode, FaWarehouse, FaGraduationCap, FaSeedling, FaUtensils, FaMapMarkedAlt, FaTools, FaRobot, FaLeaf, FaChartLine, FaVideo, FaHandPaper, FaMobileAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa';

// Static Data Mappings
const projectMappings = {
  // Traffic & Security Projects
  'traffic violation detection system': {
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&auto=format',
    icon: FaCamera,
    gradient: 'from-gray-800 to-gray-900',
    category: 'AI Detection',
    theme: 'security'
  },
  'petition management system': {
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&auto=format',
    icon: FaClipboardList,
    gradient: 'from-zinc-800 to-zinc-900',
    category: 'Legal Tech',
    theme: 'management'
  },
  // Healthcare Projects
  'meditrack': {
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&auto=format',
    icon: FaUserMd,
    gradient: 'from-slate-800 to-slate-900',
    category: 'Healthcare AI',
    theme: 'medical'
  },
  'medsy.ai': {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&auto=format',
    icon: FaBrain,
    gradient: 'from-neutral-800 to-neutral-900',
    category: 'Medical AI',
    theme: 'ai-health'
  },
  'medswift': {
    image: 'https://images.unsplash.com/photo-15711019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format', // Fixed URL typo if any, or kept same
    icon: FaHospital,
    gradient: 'from-stone-800 to-stone-900',
    category: 'Emergency',
    theme: 'swift-care'
  },
  // Inventory & Business
  'barcode generator system': {
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&auto=format',
    icon: FaBarcode,
    gradient: 'from-gray-700 to-gray-800',
    category: 'Inventory',
    theme: 'logistics'
  },
  'wms project': {
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&auto=format',
    icon: FaWarehouse,
    gradient: 'from-zinc-700 to-zinc-800',
    category: 'Logistics',
    theme: 'warehouse'
  },
  // Education Projects
  'smart classroom': {
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop&auto=format',
    icon: FaGraduationCap,
    gradient: 'from-slate-700 to-slate-800',
    category: 'EdTech',
    theme: 'education'
  },
  'questioncloud': {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&auto=format',
    icon: HiCloudUpload,
    gradient: 'from-neutral-700 to-neutral-800',
    category: 'AI Learning',
    theme: 'cloud-edu'
  },
  'career guidance system': {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format',
    icon: HiLightBulb,
    gradient: 'from-stone-700 to-stone-800',
    category: 'AI Guidance',
    theme: 'career'
  },
  // Mobile & Voice Projects
  'smart agriculture app': {
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop&auto=format',
    icon: FaSeedling,
    gradient: 'from-gray-800 to-zinc-800',
    category: 'AgriTech',
    theme: 'nature'
  },
  'voice assistant app': {
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da9e2f58?w=600&h=400&fit=crop&auto=format',
    icon: HiMicrophone,
    gradient: 'from-slate-800 to-gray-800',
    category: 'Voice AI',
    theme: 'voice'
  },
  // E-commerce & Shopping
  'dinesmart': {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&auto=format',
    icon: FaUtensils,
    gradient: 'from-neutral-800 to-stone-800',
    category: 'FoodTech',
    theme: 'dining'
  },
  // Utility & Tools
  'location-finder': {
    image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&h=400&fit=crop&auto=format',
    icon: FaMapMarkedAlt,
    gradient: 'from-zinc-800 to-slate-800',
    category: 'Navigation',
    theme: 'location'
  },
  'multi tool website': {
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop&auto=format',
    icon: FaTools,
    gradient: 'from-gray-800 to-neutral-800',
    category: 'Utilities',
    theme: 'tools'
  },
  // AI & Automation
  'auto-gen-bolt': {
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop&auto=format',
    icon: FaRobot,
    gradient: 'from-slate-800 to-gray-800',
    category: 'Automation',
    theme: 'tech'
  },
  'text-to-speech': {
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=400&fit=crop&auto=format',
    icon: HiVolumeUp,
    gradient: 'from-zinc-800 to-stone-800',
    category: 'Audio AI',
    theme: 'audio'
  },
  'image-caption': {
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop&auto=format',
    icon: FaCamera,
    gradient: 'from-neutral-800 to-gray-800',
    category: 'Vision AI',
    theme: 'vision'
  },
  'chatbot': {
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop&auto=format',
    icon: FaRobot,
    gradient: 'from-stone-800 to-zinc-800',
    category: 'Chat AI',
    theme: 'chat'
  },
  'nutrition-detector': {
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop&auto=format',
    icon: FaLeaf,
    gradient: 'from-gray-800 to-slate-800',
    category: 'Health AI',
    theme: 'nutrition'
  },
  'kyc_duplicate_detector': {
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop&auto=format',
    icon: HiShieldCheck,
    gradient: 'from-zinc-800 to-neutral-800',
    category: 'Security AI',
    theme: 'security'
  },
  'ai-powered study assistant': {
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&auto=format',
    icon: FaBrain,
    gradient: 'from-slate-800 to-stone-800',
    category: 'Edu AI',
    theme: 'study'
  },
  'documentanalyzer': {
    image: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?w=600&h=400&fit=crop&auto=format',
    icon: FaChartLine,
    gradient: 'from-gray-800 to-zinc-800',
    category: 'Doc AI',
    theme: 'docs'
  },
  'agentsflow-main': {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
    icon: FaRobot,
    gradient: 'from-neutral-800 to-slate-800',
    category: 'Agent AI',
    theme: 'workflow'
  },
  '3d-symptoms-mvp': {
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&auto=format',
    icon: FaVideo,
    gradient: 'from-stone-800 to-gray-800',
    category: '3D Medical',
    theme: '3d-visualization'
  },
  'aistudyplanner-2': {
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&auto=format',
    icon: FaCalendarAlt,
    gradient: 'from-indigo-800 to-purple-900',
    category: 'Study AI',
    theme: 'planning'
  },
  // New Projects
  'hand-gesture-detector': {
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&auto=format',
    icon: FaHandPaper,
    gradient: 'from-zinc-800 to-black',
    category: 'Computer Vision',
    theme: 'gesture'
  }
};

const categoryFallbacks = {
  'AI/ML': [
    { image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop', icon: FaBrain, gradient: 'from-gray-900 to-black' },
    { image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop', icon: FaRobot, gradient: 'from-zinc-900 to-black' },
    { image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop', icon: HiCode, gradient: 'from-slate-900 to-black' }
  ],
  'Web Development': [
    { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', icon: HiCode, gradient: 'from-neutral-900 to-black' },
    { image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop', icon: FaTools, gradient: 'from-stone-900 to-black' },
    { image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=400&fit=crop', icon: HiCog, gradient: 'from-gray-800 to-black' }
  ],
  'Mobile Development': [
    { image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop', icon: FaMobileAlt, gradient: 'from-zinc-800 to-black' },
    { image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop', icon: HiCode, gradient: 'from-slate-800 to-black' },
    { image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop', icon: FaUsers, gradient: 'from-neutral-800 to-black' }
  ]
};

const ProjectCard = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Enhanced project-specific image and icon mapping
  const getProjectVisuals = (project) => {
    const title = project.title.toLowerCase();
    const id = project.id;

    const specificMapping = projectMappings[title];
    if (specificMapping) {
      return specificMapping;
    }

    const category = project.category || 'Web Development';
    const fallbacks = categoryFallbacks[category] || categoryFallbacks['Web Development'];
    const fallbackIndex = (id - 1) % fallbacks.length;
    const fallback = fallbacks[fallbackIndex];

    return {
      image: fallback.image,
      icon: fallback.icon,
      gradient: fallback.gradient,
      category: category,
      theme: 'dynamic'
    };
  };

  const { image, icon: ProjectIcon, gradient, category } = getProjectVisuals(project);

  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => setImageError(true);

  const hasLocalImages = project.images && project.images.length > 0;
  const displayImage = hasLocalImages ? project.images[currentImageIndex] : image;

  const nextImage = (e) => {
    e.stopPropagation();
    if (hasLocalImages) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (hasLocalImages) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  // Contact Modal
  const ContactModal = () => (
    <AnimatePresence>
      {showContactModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowContactModal(false)}
        >
          <motion.div
            className="relative w-full max-w-md bg-black border border-gray-800 rounded-3xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative h-24 bg-gradient-to-br ${gradient} overflow-hidden`}>
              <div className="absolute inset-0 bg-black/40" />
              <motion.button
                className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm text-white rounded-full hover:bg-black/40 transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowContactModal(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              <div className="absolute -bottom-6 left-6">
                <motion.div
                  className="p-3 bg-black rounded-2xl shadow-lg border-4 border-black"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <ProjectIcon className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </div>
            <div className="pt-10 pb-6 px-6 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  Let's discuss how we can collaborate on this project or something similar.
                </p>
              </motion.div>

              <motion.div className="space-y-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <a
                  href={`mailto:ahammedmass24@gmail.com?subject=Inquiry about ${project.title}`}
                  className="flex items-center p-4 bg-gray-900 rounded-2xl hover:bg-gray-800 group transition-colors duration-300 border border-gray-800 hover:border-gray-700"
                >
                  <div className="p-3 bg-gray-800 text-white rounded-xl group-hover:scale-110 transition-transform">
                    <HiMail className="w-6 h-6" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-bold text-white">Email Me</h4>
                    <p className="text-sm text-gray-500">ahammedmass24@gmail.com</p>
                  </div>
                  <HiExternalLink className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={`https://wa.me/971588544698?text=Hi Ahammed! I'm interested in your ${project.title} project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-900 rounded-2xl hover:bg-gray-800 group transition-colors duration-300 border border-gray-800 hover:border-gray-700"
                >
                  <div className="p-3 bg-gray-800 text-white rounded-xl group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" /></svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-bold text-white">WhatsApp</h4>
                    <p className="text-sm text-gray-500">Chat directly</p>
                  </div>
                  <HiExternalLink className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <motion.div
      className="group relative flex flex-col gap-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Computer Monitor Look - MONOCHROME */}
      <div className="relative w-full">
        {/* Monitor Frame */}
        <div className="relative bg-gray-900 rounded-t-xl rounded-b-md p-2 shadow-2xl border-4 border-gray-800 ring-1 ring-black/50">

          {/* Screen Area */}
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden border border-gray-800/50">

            {/* Background Gradient/Pattern - MONOCHROME */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`} />

            {/* Image Logic */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              {!imageLoaded && !imageError && !hasLocalImages && (
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} animate-pulse flex items-center justify-center z-10`}>
                  <ProjectIcon className="w-12 h-12 text-white opacity-50" />
                </div>
              )}

              <AnimatePresence mode="wait">
                {/* Blurred Background for Fill */}
                <motion.div
                  key={`bg-${hasLocalImages ? currentImageIndex : 'static'}`}
                  className="absolute inset-0 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <img
                    src={displayImage}
                    alt=""
                    className="w-full h-full object-cover blur-xl opacity-50 scale-110"
                  />
                </motion.div>

                <motion.img
                  key={hasLocalImages ? currentImageIndex : 'static'}
                  src={displayImage}
                  alt={project.title}
                  className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {/* Fallback Icon if Image Fails */}
              {imageError && !hasLocalImages && (
                <div className={`absolute inset-0 z-20 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center p-6 text-center`}>
                  <ProjectIcon className="w-16 h-16 text-white mb-4 opacity-90 drop-shadow-lg" />
                  <h4 className="font-bold text-white text-lg opacity-90">{project.title}</h4>
                </div>
              )}

              {/* Manual Navigation Arrows */}
              {hasLocalImages && project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-30"
                  >
                    <HiChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-30"
                  >
                    <HiChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Carousel Indicators */}
            {hasLocalImages && project.images.length > 1 && isHovered && (
              <div className="absolute bottom-3 left-0 right-0 flex gap-1.5 justify-center z-30">
                {project.images.map((_, idx) => (
                  <motion.div
                    key={idx}
                    className={`h-1 rounded-full shadow-sm backdrop-blur-sm ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/40 w-1'}`}
                    layout
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Monitor Chin / Stand */}
        <div className="relative mx-auto w-full h-6 bg-gray-800 rounded-b-xl flex items-center justify-center border-t border-gray-900 shadow-lg">
          <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]" />
        </div>

        {/* Monitor Base Stand */}
        <div className="mx-auto w-1/3 h-2 bg-gray-800 mt-0.5 rounded-b-lg opacity-80" />
      </div>

      {/* Project Details (Below the Monitor) */}
      <div className="flex flex-col gap-4 px-1">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700`}>
                {category}
              </span>
              <span className="flex items-center gap-1 text-[10px] font-semibold text-gray-500 dark:text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                {project.status || 'Completed'}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
          </div>

          <motion.button
            onClick={() => setShowContactModal(true)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiEye className="w-5 h-5" />
          </motion.button>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {project.technologies?.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800 rounded-md">
              {tech}
            </span>
          ))}
          {(project.technologies?.length || 0) > 4 && (
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-500 border border-gray-200 dark:border-gray-800 rounded-md">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-2 pt-4 border-t border-gray-200 dark:border-gray-800">
          <a
            href={project.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black font-semibold text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            <HiCode className="w-4 h-4" />
            Source Code
          </a>
          <button
            onClick={() => setShowContactModal(true)}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <HiMail className="w-4 h-4" />
            Contact Me
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal />
    </motion.div>
  );
};

export default ProjectCard;
