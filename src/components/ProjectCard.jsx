import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCode, HiExternalLink, HiEye, HiStar, HiClock, HiAcademicCap, HiLightBulb, HiShieldCheck, HiMicrophone, HiCloudUpload, HiHeart, HiCog, HiPlay, HiPause, HiVolumeUp, HiMail } from 'react-icons/hi';
import { FaCar, FaStethoscope, FaSeedling, FaRobot, FaTrain, FaHospital, FaGraduationCap, FaBrain, FaLeaf, FaWarehouse, FaUtensils, FaDumbbell, FaBarcode, FaMobileAlt, FaCamera, FaChartLine, FaShoppingCart, FaUserMd, FaCalendarAlt, FaGamepad, FaMapMarkedAlt, FaTools, FaUsers, FaClipboardList, FaVideo, FaHeadphones } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  // Enhanced project-specific image and icon mapping with unique images for each project
  const getProjectVisuals = (project) => {
    const title = project.title.toLowerCase();
    const description = project.description.toLowerCase();
    const id = project.id;
    
    // Specific project mappings based on exact titles and content
    const projectMappings = {
      // Traffic & Security Projects
      'traffic violation detection system': {
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&auto=format',
        icon: FaCamera,
        gradient: 'from-red-600 to-orange-700',
        category: 'AI Detection',
        theme: 'security'
      },
      'petition management system': {
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&auto=format',
        icon: FaClipboardList,
        gradient: 'from-blue-600 to-indigo-700',
        category: 'Legal Tech',
        theme: 'management'
      },
      
      // Healthcare Projects
      'meditrack': {
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&auto=format',
        icon: FaUserMd,
        gradient: 'from-green-600 to-teal-700',
        category: 'Healthcare AI',
        theme: 'medical'
      },
      'medsy.ai': {
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&auto=format',
        icon: FaBrain,
        gradient: 'from-purple-600 to-pink-700',
        category: 'Medical AI',
        theme: 'ai-health'
      },
      'medswift': {
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format',
        icon: FaHospital,
        gradient: 'from-cyan-600 to-blue-700',
        category: 'Emergency',
        theme: 'swift-care'
      },
      
      // Inventory & Business
      'barcode generator system': {
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&auto=format',
        icon: FaBarcode,
        gradient: 'from-gray-700 to-slate-800',
        category: 'Inventory',
        theme: 'logistics'
      },
      'wms project': {
        image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&auto=format',
        icon: FaWarehouse,
        gradient: 'from-orange-600 to-red-700',
        category: 'Logistics',
        theme: 'warehouse'
      },
      
      // Education Projects
      'smart classroom': {
        image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop&auto=format',
        icon: FaGraduationCap,
        gradient: 'from-indigo-600 to-purple-700',
        category: 'EdTech',
        theme: 'education'
      },
      'questioncloud': {
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&auto=format',
        icon: HiCloudUpload,
        gradient: 'from-sky-600 to-cyan-700',
        category: 'AI Learning',
        theme: 'cloud-edu'
      },
      'career guidance system': {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format',
        icon: HiLightBulb,
        gradient: 'from-yellow-600 to-orange-700',
        category: 'AI Guidance',
        theme: 'career'
      },
      
      // Mobile & Voice Projects
      'smart agriculture app': {
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop&auto=format',
        icon: FaSeedling,
        gradient: 'from-green-700 to-emerald-800',
        category: 'AgriTech',
        theme: 'agriculture'
      },
      'voice assistant app': {
        image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop&auto=format',
        icon: HiVolumeUp,
        gradient: 'from-violet-600 to-purple-700',
        category: 'Voice AI',
        theme: 'voice-tech'
      },
      
      // E-commerce & Shopping
      'shoping': {
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop&auto=format',
        icon: FaShoppingCart,
        gradient: 'from-pink-600 to-rose-700',
        category: 'E-commerce',
        theme: 'shopping'
      },
      'dinesmart': {
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&auto=format',
        icon: FaUtensils,
        gradient: 'from-amber-600 to-orange-700',
        category: 'Restaurant',
        theme: 'dining'
      },
      
      // Utility & Tools
      'location-finder': {
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&h=400&fit=crop&auto=format',
        icon: FaMapMarkedAlt,
        gradient: 'from-teal-600 to-green-700',
        category: 'Navigation',
        theme: 'location'
      },
      'multi tool website': {
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop&auto=format',
        icon: FaTools,
        gradient: 'from-slate-600 to-gray-700',
        category: 'Utilities',
        theme: 'tools'
      },
      'parking': {
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&auto=format',
        icon: FaCar,
        gradient: 'from-blue-700 to-indigo-800',
        category: 'Smart City',
        theme: 'parking'
      },
      
      // AI & Automation
      'auto-gen-bolt': {
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&auto=format',
        icon: FaRobot,
        gradient: 'from-purple-700 to-indigo-800',
        category: 'AI Automation',
        theme: 'automation'
      },
      'text-to-speech': {
        image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop&auto=format',
        icon: FaHeadphones,
        gradient: 'from-emerald-600 to-teal-700',
        category: 'Speech AI',
        theme: 'tts'
      },
      
      // Senior & Accessibility
      'eldersync': {
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop&auto=format',
        icon: HiHeart,
        gradient: 'from-rose-600 to-pink-700',
        category: 'Elder Care',
        theme: 'senior-care'
      },
      
      // Study & Planning
      'aistudyscheduler': {
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&auto=format',
        icon: FaCalendarAlt,
        gradient: 'from-indigo-700 to-blue-800',
        category: 'Study AI',
        theme: 'scheduling'
      },
      'aistudyplanner-2': {
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop&auto=format',
        icon: FaChartLine,
        gradient: 'from-cyan-700 to-blue-800',
        category: 'Planning AI',
        theme: 'study-plan'
      },
      
      // Gaming & Entertainment
      'game': {
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&auto=format',
        icon: FaGamepad,
        gradient: 'from-purple-800 to-pink-800',
        category: 'Gaming',
        theme: 'entertainment'
      },
      
      // 3D & Visualization
      '3d-symptoms-mvp': {
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&auto=format',
        icon: FaVideo,
        gradient: 'from-teal-700 to-cyan-800',
        category: '3D Medical',
        theme: '3d-visualization'
      }
    };
    
    // Get specific mapping or create dynamic one
    const specificMapping = projectMappings[title];
    if (specificMapping) {
      return specificMapping;
    }
    
    // Dynamic fallback based on keywords and categories with unique images
    const categoryFallbacks = {
      'AI/ML': [
        { image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop', icon: FaBrain, gradient: 'from-purple-600 to-indigo-700' },
        { image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop', icon: FaRobot, gradient: 'from-blue-600 to-purple-700' },
        { image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop', icon: HiLightBulb, gradient: 'from-indigo-600 to-pink-700' }
      ],
      'Web Development': [
        { image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop', icon: HiCode, gradient: 'from-blue-600 to-cyan-700' },
        { image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop', icon: FaTools, gradient: 'from-green-600 to-blue-700' },
        { image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=400&fit=crop', icon: HiCog, gradient: 'from-teal-600 to-indigo-700' }
      ],
      'Mobile Development': [
        { image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop', icon: FaMobileAlt, gradient: 'from-pink-600 to-purple-700' },
        { image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop', icon: HiCode, gradient: 'from-orange-600 to-red-700' },
        { image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop', icon: FaUsers, gradient: 'from-emerald-600 to-teal-700' }
      ]
    };
    
    // Use project category and ID to ensure unique images
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

  // Contact Modal Component
  const ContactModal = () => (
    <AnimatePresence>
      {showContactModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowContactModal(false)}
        >
          <motion.div
            className="relative w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Gradient */}
            <div className={`relative h-20 bg-gradient-to-br ${gradient} overflow-hidden`}>
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-white rounded-full"
                    initial={{ 
                      x: Math.random() * 100 + '%', 
                      y: Math.random() * 100 + '%',
                      scale: 0 
                    }}
                    animate={{ 
                      y: '-20px',
                      scale: [0, 1, 0],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
              
              {/* Close Button */}
              <motion.button
                className="absolute top-3 right-3 p-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowContactModal(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Project Icon */}
              <div className="absolute bottom-2 left-4">
                <motion.div
                  className="p-2 bg-white/20 backdrop-blur-md rounded-xl border border-white/30"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <ProjectIcon className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  Interested in {project.title}?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  Get in touch with Ahammed to discuss this project
                </p>
              </motion.div>

              {/* Contact Options */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {/* Email */}
                <motion.a
                  href="mailto:ahammedmass24@gmail.com?subject=Inquiry about ${project.title}"
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 group border border-gray-200 dark:border-gray-600"
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-2 bg-blue-500 text-white rounded-lg group-hover:bg-blue-600 transition-colors">
                    <HiMail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Email</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">ahammedmass24@gmail.com</p>
                  </div>
                  <HiExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                </motion.a>

                {/* Phone */}
                <motion.a
                  href="tel:+971588544698"
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 group border border-gray-200 dark:border-gray-600"
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-2 bg-green-500 text-white rounded-lg group-hover:bg-green-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Phone</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">+971 588544698</p>
                  </div>
                  <HiExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/971588544698?text=Hi Ahammed! I'm interested in your ${project.title} project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl hover:from-green-100 hover:to-green-200 dark:hover:from-green-800/30 dark:hover:to-green-700/30 transition-all duration-300 group border border-green-200 dark:border-green-700"
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-2 bg-green-500 text-white rounded-lg group-hover:bg-green-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">WhatsApp</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Quick message</p>
                  </div>
                  <HiExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                </motion.a>
              </motion.div>

              {/* Footer Message */}
              <motion.div
                className="text-center pt-3 border-t border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Available for freelance projects and collaborations
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <motion.div
      className="group relative bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-700 overflow-hidden shadow-xl hover:shadow-2xl backdrop-blur-sm"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -12, scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Enhanced Project Image with Loading States */}
      <div className="relative h-56 overflow-hidden rounded-t-3xl">
        {/* Loading Placeholder */}
        {!imageLoaded && !imageError && (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} animate-pulse flex items-center justify-center`}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-white border-t-transparent rounded-full"
            />
          </div>
        )}
        
        {/* Main Image */}
        {!imageError ? (
          <motion.img
            src={image}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } group-hover:scale-110`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: imageLoaded ? 1 : 1.1, opacity: imageLoaded ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ) : (
          // Fallback gradient with project info
          <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <div className="text-center text-white p-4">
              <ProjectIcon className="w-16 h-16 mx-auto mb-3 opacity-90" />
              <h4 className="font-bold text-lg opacity-95 mb-1">{project.title}</h4>
              <p className="text-sm opacity-75">{category}</p>
            </div>
          </div>
        )}
        
        {/* Enhanced Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60 group-hover:opacity-75 transition-all duration-500`} />
        
        {/* Animated Particles Effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                  initial={{ 
                    x: Math.random() * 100 + '%', 
                    y: Math.random() * 100 + '%',
                    scale: 0 
                  }}
                  animate={{ 
                    y: '-20px',
                    scale: [0, 1, 0],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Animated Project Icon */}
        <motion.div 
          className="absolute top-6 left-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ProjectIcon className="w-7 h-7 text-white drop-shadow-lg" />
        </motion.div>
        
        {/* Enhanced Category Badge */}
        <div className="absolute top-6 right-6">
          <motion.span 
            className="px-4 py-2 text-xs font-bold bg-white/15 backdrop-blur-md text-white rounded-full border border-white/25 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            {category}
          </motion.span>
        </div>
        
        {/* Status Indicator */}
        <div className="absolute bottom-6 left-6">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className={`w-3 h-3 rounded-full ${
              project.status === 'Completed' ? 'bg-green-400 animate-pulse' : 
              project.status === 'In Progress' ? 'bg-yellow-400 animate-pulse' : 
              'bg-gray-400'
            }`} />
            <span className="text-white text-xs font-medium drop-shadow-md">
              {project.status}
            </span>
          </motion.div>
        </div>
        
        {/* Project Type Badge */}
        <div className="absolute bottom-6 right-6">
          <span className="px-3 py-1 text-xs font-semibold bg-black/20 backdrop-blur-sm text-white rounded-full border border-white/20">
            {project.type || 'Web App'}
          </span>
        </div>
      </div>
      
      {/* Enhanced Content Section */}
      <div className="p-6 space-y-5">
        {/* Title and Status */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <motion.h3 
              className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors line-clamp-2 flex-1 pr-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {project.title}
            </motion.h3>
            
            {/* Enhanced Status Indicator */}
            <motion.div 
              className="flex items-center space-x-1 shrink-0"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${
                project.status === 'Completed' ? 'bg-green-500 animate-pulse' : 
                project.status === 'In Progress' ? 'bg-yellow-500 animate-pulse' : 
                'bg-gray-400'
              }`} />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                {project.status || 'Completed'}
              </span>
            </motion.div>
          </div>
          
          {/* Enhanced Description */}
          <motion.p 
            className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {project.description}
          </motion.p>
        </div>

        {/* Enhanced Tech Stack with Staggered Animation */}
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {project.technologies?.slice(0, 4).map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 hover:from-gray-200 hover:to-gray-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-sm hover:shadow-md"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.6 + techIndex * 0.05 }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.span>
          ))}
          {(project.technologies?.length || project.techStack?.length || 0) > 4 && (
            <motion.span 
              className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-600 dark:text-gray-400 rounded-full hover:from-gray-300 hover:to-gray-200 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.8 }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              +{((project.technologies?.length || project.techStack?.length || 0) - 4)} more
            </motion.span>
          )}
        </motion.div>

        {/* Enhanced Footer with Better Actions */}
        <motion.div 
          className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.9 }}
        >
          {/* Project Stats */}
          <div className="flex items-center space-x-3">
            <motion.div 
              className="flex items-center space-x-1"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 1.0 }}
            >
              <HiStar className="w-4 h-4 text-yellow-500" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Featured</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-1"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 1.1 }}
            >
              <HiCode className="w-4 h-4 text-gray-500" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                {project.technologies?.length || 0} techs
              </span>
            </motion.div>
          </div>
          
          {/* Enhanced Action Buttons */}
          <div className="flex space-x-2">
            <motion.button
              onClick={() => setShowContactModal(true)}
              className="group/btn p-2.5 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 text-gray-600 dark:text-gray-400 rounded-xl hover:from-gray-200 hover:to-gray-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 1.2 }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              title="View Details"
            >
              <HiEye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            </motion.button>
            
            <motion.a
              href={project.githubUrl || "https://github.com/itzmeahammed"}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 rounded-xl hover:from-gray-800 hover:to-gray-700 dark:hover:from-gray-100 dark:hover:to-white transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-800 dark:border-gray-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 1.3 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              title="View on GitHub"
            >
              <HiExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              <span className="text-xs font-semibold">View Code</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-gray-800/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none"></div>
      
      {/* Contact Modal */}
      <ContactModal />
    </motion.div>
  );
};

export default ProjectCard;
