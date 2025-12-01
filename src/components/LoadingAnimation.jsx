import { motion, AnimatePresence } from 'framer-motion';
import { HiCode, HiSparkles, HiLightningBolt } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import profileImage from '../assets/image.png';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full opacity-30"
          style={{
            left: `${20 + i * 10}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-12 relative z-10">
        {/* Main Loading Container */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Outer Ring */}
          <motion.div
            className="w-32 h-32 border-2 border-gray-300 dark:border-gray-700 rounded-full relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            {/* Progress Ring */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent border-t-black dark:border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />

            {/* Tech Icons Orbiting */}
            <motion.div
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center shadow-lg"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FaReact className="w-3 h-3 text-white dark:text-black" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 bg-gray-800 dark:bg-gray-200 rounded-full flex items-center justify-center shadow-lg"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
            >
              <FaNodeJs className="w-3 h-3 text-white dark:text-black" />
            </motion.div>

            <motion.div
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-700 dark:bg-gray-300 rounded-full flex items-center justify-center shadow-lg"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }}
            >
              <FaPython className="w-3 h-3 text-white dark:text-black" />
            </motion.div>
          </motion.div>

          {/* Center Profile Photo */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden shadow-2xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
              <motion.img
                src={profileImage}
                alt="Ahammed"
                className="w-full h-full object-cover"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" }
                }}
              />
            </div>

            {/* Subtle glow effect around photo */}
            <motion.div
              className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-gray-400/20 to-gray-600/20 dark:from-gray-200/20 dark:to-gray-400/20 blur-md"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Sparkle Effects */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"
              style={{
                left: `${30 + Math.cos(i * 60 * Math.PI / 180) * 80}px`,
                top: `${30 + Math.sin(i * 60 * Math.PI / 180) * 80}px`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            className="text-4xl font-bold text-black dark:text-white tracking-wide"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Ahammed
          </motion.h1>

          <motion.div
            className="flex items-center justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            />
          </motion.div>

          <motion.p
            className="text-sm text-gray-600 dark:text-gray-400 font-medium tracking-wider uppercase"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Loading Portfolio Experience
          </motion.p>
        </motion.div>
      </div>

      {/* Add CSS for grid animation */}
      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
