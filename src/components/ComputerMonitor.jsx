import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlay, HiPause, HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const ComputerMonitor = ({ 
  images = [], 
  autoSlide = true, 
  slideInterval = 4000,
  className = "",
  showControls = true 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoSlide);

  // Auto slide functionality
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [isPlaying, images.length, slideInterval]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Computer Monitor Frame */}
      <div className="relative">
        {/* Monitor Stand Base */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 rounded-full shadow-lg"></div>
        
        {/* Monitor Stand */}
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-gradient-to-b from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-600 rounded-t-lg shadow-md"></div>
        
        {/* Monitor Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-200 dark:via-gray-300 dark:to-gray-400 rounded-2xl p-4 shadow-2xl"
        >
          {/* Monitor Bezel */}
          <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 dark:from-gray-300 dark:to-gray-400 rounded-xl p-3 shadow-inner">
            
            {/* Screen */}
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl aspect-video">
              {/* Screen Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
              
              {/* Image Display Area */}
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  {images.length > 0 && (
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={images[currentImageIndex]?.src || images[currentImageIndex]}
                        alt={images[currentImageIndex]?.alt || `Slide ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      
                      {/* Image Overlay with Info */}
                      {images[currentImageIndex]?.title && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                          <h3 className="text-white font-semibold text-lg mb-1">
                            {images[currentImageIndex].title}
                          </h3>
                          {images[currentImageIndex].description && (
                            <p className="text-gray-300 text-sm">
                              {images[currentImageIndex].description}
                            </p>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Default Screen Content when no images */}
                {images.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm">No images to display</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Screen Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none rounded-lg"></div>
            </div>
            
            {/* Monitor Brand/Logo */}
            <div className="absolute bottom-1 right-3 text-xs text-gray-500 dark:text-gray-400 font-mono">
              PORTFOLIO
            </div>
          </div>
          
          {/* Power LED */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full shadow-lg animate-pulse"></div>
        </motion.div>
        
        {/* Control Panel */}
        {showControls && images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            {/* Previous Button */}
            <motion.button
              onClick={prevImage}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiArrowLeft className="w-5 h-5" />
            </motion.button>
            
            {/* Play/Pause Button */}
            <motion.button
              onClick={togglePlayPause}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? <HiPause className="w-5 h-5" /> : <HiPlay className="w-5 h-5" />}
            </motion.button>
            
            {/* Next Button */}
            <motion.button
              onClick={nextImage}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiArrowRight className="w-5 h-5" />
            </motion.button>
            
            {/* Image Counter */}
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium px-2">
              {currentImageIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
        
        {/* Slide Indicators */}
        {images.length > 1 && (
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-4">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-gray-800 dark:bg-gray-200 scale-125'
                    : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComputerMonitor;
