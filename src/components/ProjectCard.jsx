import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiExternalLink, HiEye, HiStar, HiClock, HiAcademicCap, HiLightBulb, HiShieldCheck, HiMicrophone, HiCloudUpload, HiHeart, HiCog } from 'react-icons/hi';
import { FaCar, FaStethoscope, FaSeedling, FaRobot, FaTrain, FaHospital, FaGraduationCap, FaBrain, FaLeaf, FaWarehouse, FaUtensils, FaDumbbell } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  // Enhanced project-specific image and icon mapping
  const getProjectVisuals = (project) => {
    const title = project.title.toLowerCase();
    const description = project.description.toLowerCase();
    const category = project.category.toLowerCase();
    
    // Traffic & Transportation
    if (title.includes('traffic') || title.includes('violation')) {
      return {
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&auto=format',
        icon: FaCar,
        gradient: 'from-slate-600 to-gray-800',
        category: 'AI Detection'
      };
    } else if (title.includes('railway') || title.includes('train')) {
      return {
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop&auto=format',
        icon: FaTrain,
        gradient: 'from-slate-700 to-gray-900',
        category: 'Transport'
      };
    } else if (title.includes('taxi') || title.includes('booking')) {
      return {
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop&auto=format',
        icon: FaCar,
        gradient: 'from-gray-600 to-slate-800',
        category: 'Booking'
      };
    }
    
    // Healthcare & Medical
    else if (title.includes('meditrack') || title.includes('medsy') || title.includes('medswift')) {
      return {
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&auto=format',
        icon: FaStethoscope,
        gradient: 'from-slate-600 to-gray-800',
        category: 'Healthcare AI'
      };
    } else if (description.includes('ambulance') || description.includes('health')) {
      return {
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format',
        icon: FaHospital,
        gradient: 'from-gray-700 to-slate-900',
        category: 'Emergency'
      };
    }
    
    // Education & Learning
    else if (title.includes('classroom') || title.includes('smart classroom')) {
      return {
        image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop&auto=format',
        icon: FaGraduationCap,
        gradient: 'from-slate-600 to-gray-800',
        category: 'EdTech'
      };
    } else if (title.includes('question') || title.includes('cloud')) {
      return {
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&auto=format',
        icon: FaBrain,
        gradient: 'from-gray-600 to-slate-800',
        category: 'AI Learning'
      };
    }
    
    // AI & Technology
    else if (title.includes('voice') || title.includes('assistant')) {
      return {
        image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop&auto=format',
        icon: HiMicrophone,
        gradient: 'from-slate-700 to-gray-900',
        category: 'Voice AI'
      };
    } else if (title.includes('career') || title.includes('guidance')) {
      return {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format',
        icon: HiLightBulb,
        gradient: 'from-gray-600 to-slate-800',
        category: 'AI Guidance'
      };
    } else if (title.includes('autodev') || title.includes('squad')) {
      return {
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&auto=format',
        icon: FaRobot,
        gradient: 'from-slate-700 to-black',
        category: 'AI Dev'
      };
    }
    
    // Agriculture & Environment
    else if (title.includes('agriculture') || title.includes('smart agriculture')) {
      return {
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop&auto=format',
        icon: FaLeaf,
        gradient: 'from-slate-600 to-gray-800',
        category: 'AgriTech'
      };
    }
    
    // Business & Management
    else if (title.includes('police') || title.includes('petition')) {
      return {
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&auto=format',
        icon: HiShieldCheck,
        gradient: 'from-gray-700 to-slate-900',
        category: 'Gov Tech'
      };
    } else if (title.includes('wms') || title.includes('warehouse')) {
      return {
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&auto=format',
        icon: FaWarehouse,
        gradient: 'from-slate-600 to-gray-800',
        category: 'Logistics'
      };
    } else if (title.includes('barcode') || title.includes('inventory')) {
      return {
        image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&auto=format',
        icon: HiCode,
        gradient: 'from-gray-600 to-slate-800',
        category: 'Inventory'
      };
    } else if (title.includes('fabflow') || title.includes('steel')) {
      return {
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop&auto=format',
        icon: HiCog,
        gradient: 'from-slate-700 to-black',
        category: 'Industrial'
      };
    }
    
    // Finance & Business
    else if (title.includes('expense') || title.includes('tracker')) {
      return {
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&auto=format',
        icon: HiCog,
        gradient: 'from-slate-600 to-gray-800',
        category: 'FinTech'
      };
    }
    
    // Food & Restaurant
    else if (title.includes('restaurant') || title.includes('cafe')) {
      return {
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&auto=format',
        icon: FaUtensils,
        gradient: 'from-gray-700 to-slate-900',
        category: 'Food Tech'
      };
    }
    
    // Fitness & Health
    else if (title.includes('givegainz') || title.includes('fitness')) {
      return {
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format',
        icon: FaDumbbell,
        gradient: 'from-slate-600 to-gray-800',
        category: 'Fitness'
      };
    }
    
    // Default
    else {
      return {
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop&auto=format',
        icon: HiCode,
        gradient: 'from-slate-700 to-black',
        category: 'Development'
      };
    }
  };

  const { image, icon: ProjectIcon, gradient, category } = getProjectVisuals(project);

  return (
    <motion.div
      className="group relative bg-white dark:bg-black rounded-3xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Enhanced Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-70 group-hover:opacity-80 transition-opacity duration-300`} />
        
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
      
      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors line-clamp-2">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Enhanced Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies?.slice(0, 4).map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.span>
          ))}
          {(project.technologies?.length || project.techStack?.length || 0) > 4 && (
            <motion.span 
              className="px-3 py-1.5 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              +{((project.technologies?.length || project.techStack?.length || 0) - 4)} more
            </motion.span>
          )}
        </div>

        {/* Enhanced Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
          {/* Project Stats */}
          <div className="flex items-center space-x-4">
            <motion.div 
              className="flex items-center space-x-1"
              whileHover={{ scale: 1.05 }}
            >
              <HiStar className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Featured</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-1"
              whileHover={{ scale: 1.05 }}
            >
              <HiClock className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">2024</span>
            </motion.div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3">
            <motion.button
              className="p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              title="View Details"
            >
              <HiEye className="w-4 h-4" />
            </motion.button>
            
            <motion.a
              href={project.githubUrl || "https://github.com/itzmeahammed"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              title="View on GitHub"
            >
              <HiExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-gray-800/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none"></div>
    </motion.div>
  );
};

export default ProjectCard;
