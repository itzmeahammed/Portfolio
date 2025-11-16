import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';

const AnimatedHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Split text into individual letters for staggered animation
  const animateText = (text, delay = 0) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.5,
          delay: delay + index * 0.05,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="inline-block"
        style={{ minWidth: char === ' ' ? '0.3em' : 'auto' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };

  const trustIndicators = [
    { name: 'Client A', avatar: '👨‍💻' },
    { name: 'Client B', avatar: '👩‍💼' },
    { name: 'Client C', avatar: '👨‍🎨' }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-white"></div>
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-coral-400 to-rose-400 rounded-full opacity-20 blur-xl"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-teal-400 to-amber-400 rounded-full opacity-20 blur-xl"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="flex -space-x-2">
          {trustIndicators.map((client, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center text-sm shadow-sm"
            >
              {client.avatar}
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gray-600 text-sm font-elegant-body"
        >
          Trusted by clients worldwide.
        </motion.p>
      </motion.div>

      {/* Main heading with staggered animation */}
      <div className="text-center max-w-6xl mx-auto">
        <div className="text-4xl md:text-6xl lg:text-7xl font-elegant-heading text-gray-900 leading-tight mb-6">
          <div className="mb-2">
            {animateText("Creative", 1.0)}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 2.5 }}
              className="inline-block mx-4"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-coral-400 to-rose-400 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                ✨
              </div>
            </motion.span>
            {animateText("Full Stack", 3.0)}
          </div>
          <div className="mb-2">
            {animateText("Developer", 4.5)}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 6.0 }}
              className="inline-block mx-4"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-amber-400 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                🚀
              </div>
            </motion.span>
            {animateText("Based in", 6.5)}
          </div>
          <div>
            {animateText("Dubai, UAE", 8.0)}
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 9.5 }}
          className="text-lg md:text-xl font-elegant-body text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          I create innovative web solutions and mobile applications that help businesses 
          grow, scale, and succeed in the digital world.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 10.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-xl font-elegant-caption shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            View My Work
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 10.5 }}
            className="flex items-center gap-6 text-sm text-gray-600 font-elegant-body"
          >
            <div className="flex items-center gap-2">
              <HiLocationMarker className="text-coral-500" />
              <span>Dubai, United Arab Emirates</span>
            </div>
            <div className="flex items-center gap-2">
              <HiPhone className="text-teal-500" />
              <span>+971588544698</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 11.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AnimatedHero;
