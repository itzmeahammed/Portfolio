import React from 'react';
import { motion } from 'framer-motion';
import InteractiveDashboard from './InteractiveDashboard';
import FastInnovativeCarousel from './FastInnovativeCarousel';

const ProjectShowcase = ({ projects = [] }) => {

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full border border-gray-200 dark:border-gray-600 mb-4">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">🚀 Project Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Interactive Project Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my projects through innovative interfaces with live metrics and immersive 3D experience
          </p>
        </motion.div>

        {/* Interactive Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <InteractiveDashboard projects={projects} />
        </motion.div>

        {/* Fast Innovative Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <FastInnovativeCarousel projects={projects} />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
