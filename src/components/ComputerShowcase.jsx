import React from 'react';
import { motion } from 'framer-motion';
import ComputerMonitor from './ComputerMonitor';

const ComputerShowcase = ({ 
  title = "Featured Projects", 
  subtitle = "Showcasing innovative solutions and creative implementations",
  images = [],
  className = "" 
}) => {
  // Default sample images if none provided
  const defaultImages = [
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop&crop=entropy&auto=format&q=80",
      title: "Web Development",
      description: "Modern responsive web applications"
    },
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop&crop=entropy&auto=format&q=80",
      title: "Mobile Apps",
      description: "Cross-platform mobile solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=450&fit=crop&crop=entropy&auto=format&q=80",
      title: "AI & Machine Learning",
      description: "Intelligent automation systems"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&crop=entropy&auto=format&q=80",
      title: "Data Analytics",
      description: "Business intelligence solutions"
    }
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            💻 {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Computer Monitor Display */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Ambient Lighting Effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-2xl animate-pulse"></div>
            
            {/* Computer Monitor */}
            <ComputerMonitor
              images={displayImages}
              autoSlide={true}
              slideInterval={5000}
              showControls={true}
              className="relative z-10 max-w-4xl"
            />
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🚀 Interactive Portfolio Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Experience my work through this interactive computer monitor display. Each project showcases 
              different aspects of my expertise in web development, mobile applications, AI integration, 
              and data analytics. The monitor automatically cycles through projects, or you can manually 
              navigate using the controls below.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComputerShowcase;
