import { motion } from 'framer-motion';
import { HiCode, HiSparkles, HiLightBulb } from 'react-icons/hi';

const AnimatedAvatar = () => {
  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Main Avatar Circle */}
      <motion.div
        className="w-full h-full bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 rounded-full border-4 border-gray-300 dark:border-gray-600 shadow-2xl flex items-center justify-center relative overflow-hidden"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Inner Glow Effect */}
        <div className="absolute inset-4 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full opacity-50"></div>
        
        {/* Avatar Icon */}
        <motion.div
          className="relative z-10 w-32 h-32 bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white rounded-full flex items-center justify-center shadow-xl"
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <HiCode className="w-16 h-16 text-white dark:text-black" />
        </motion.div>

        {/* Floating Elements Around Avatar */}
        <motion.div
          className="absolute top-8 right-8 w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-700 dark:from-gray-400 dark:to-gray-200 rounded-full flex items-center justify-center shadow-lg"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <HiSparkles className="w-4 h-4 text-white dark:text-black" />
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-8 w-6 h-6 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 rounded-full flex items-center justify-center shadow-lg"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <HiLightBulb className="w-3 h-3 text-white dark:text-black" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-4 w-4 h-4 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 rounded-full"
          animate={{
            x: [0, -8, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute top-1/2 right-4 w-4 h-4 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 rounded-full"
          animate={{
            x: [0, 8, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </motion.div>

      {/* Orbiting Elements */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-3 h-3 bg-gradient-to-r from-gray-500 to-gray-700 dark:from-gray-400 dark:to-gray-200 rounded-full shadow-lg"></div>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 rounded-full shadow-lg"></div>
      </motion.div>

      {/* Pulse Rings */}
      <motion.div
        className="absolute inset-0 border-2 border-gray-300 dark:border-gray-600 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0 border border-gray-400 dark:border-gray-500 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default AnimatedAvatar;
