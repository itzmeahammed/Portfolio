import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiX, HiDownload, HiSparkles, HiArrowRight, HiStar, HiLightningBolt, HiCube } from 'react-icons/hi';

const FirstVisitWelcomePopup = ({ onPopupStateChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('portfolioWelcomeShown');
    if (!hasVisited) {
      setTimeout(() => {
        setIsFirstVisit(true);
        setIsOpen(true);
        localStorage.setItem('portfolioWelcomeShown', 'true');
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (onPopupStateChange) {
      onPopupStateChange(isOpen && isFirstVisit);
    }
  }, [isOpen, isFirstVisit, onPopupStateChange]);

  const handleDownloadCV = () => {
    // Download CV from assets
    const link = document.createElement('a');
    link.href = '/src/assets/Ahammed S.pdf (5) (1).pdf';
    link.download = 'Ahammed-Portfolio-CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && isFirstVisit && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-10 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <HiX className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </motion.button>

            {/* Enhanced 3D Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Top Right Orb */}
              <motion.div
                className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-gray-300/15 to-gray-400/15 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                  x: [0, 40, 0],
                  y: [0, 50, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {/* Bottom Left Orb */}
              <motion.div
                className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-gray-300/15 to-gray-400/15 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.2, 0.5],
                  x: [0, -40, 0],
                  y: [0, -50, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
              {/* Center Orb */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-gray-200/10 to-gray-300/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.4, 0.3],
                  x: [0, 20, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              />
              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gray-400/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10 px-6 py-8 md:px-10 md:py-12"
            >
              {/* Header Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                {/* Left Side - Welcome Text */}
                <motion.div variants={itemVariants}>
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="inline-block p-4 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-300 rounded-full mb-6"
                  >
                    <HiSparkles className="w-8 h-8 text-white dark:text-black" />
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl font-elegant-heading text-gray-900 dark:text-white mb-3">
                    Welcome to My
                    <motion.span
                      className="block bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-200 dark:via-white dark:to-gray-300 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      style={{
                        backgroundSize: '200% 200%',
                      }}
                    >
                      Portfolio
                    </motion.span>
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 text-lg font-elegant-body mb-6">
                    Explore my innovative projects, skills, and experience. Let's create something amazing together!
                  </p>

                  <div className="flex gap-3">
                    <div className="w-3 h-3 rounded-full bg-gray-800 dark:bg-gray-200"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-600 dark:bg-gray-400"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                  </div>
                </motion.div>

                {/* Right Side - Features Guide */}
                <motion.div variants={itemVariants} className="space-y-4">
                  {[
                    { icon: '🤖', title: 'AI Chatbot', desc: 'Ask me anything about my work' },
                    { icon: '🚀', title: 'Live Projects', desc: 'Interactive project showcase' },
                    { icon: '📊', title: 'Portfolio', desc: 'Explore my full portfolio' },
                    { icon: '💬', title: 'Contact', desc: 'Get in touch with me' },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1 }}
                      whileHover={{ x: 8 }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                    >
                      <div className="text-3xl flex-shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="font-elegant-heading text-gray-900 dark:text-white font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-sm font-elegant-body text-gray-600 dark:text-gray-400">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {/* Download CV Button */}
                <motion.button
                  whileHover={{ scale: 1.08, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                  whileTap={{ scale: 0.92 }}
                  onClick={handleDownloadCV}
                  className="relative flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-200 dark:via-gray-300 dark:to-gray-200 text-white dark:text-black rounded-2xl font-elegant-caption font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-2xl overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <HiDownload className="w-5 h-5 relative z-10" />
                  </motion.div>
                  <span className="relative z-10">Download CV</span>
                </motion.button>

                {/* Explore Button */}
                <motion.button
                  whileHover={{ scale: 1.08, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setIsOpen(false)}
                  className="relative flex items-center justify-center space-x-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-800 dark:border-gray-200 rounded-2xl font-elegant-caption font-semibold text-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700 group overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent dark:via-white/5"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                  <span className="relative z-10">Explore Portfolio</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <HiArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </motion.div>

              {/* Bottom Text */}
              <motion.p
                variants={itemVariants}
                className="text-center text-xs text-gray-500 dark:text-gray-500 mt-8 font-elegant-caption"
              >
                ✨ This popup appears only on your first visit
              </motion.p>
            </motion.div>

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 0, 0, 0.1)',
                  '0 0 40px rgba(0, 0, 0, 0.2)',
                  '0 0 20px rgba(0, 0, 0, 0.1)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FirstVisitWelcomePopup;
