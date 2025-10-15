import { motion } from 'framer-motion';

const EnhancedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800"></div>
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-gray-200/30 to-gray-300/30 dark:from-gray-700/30 dark:to-gray-600/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-gray-300/20 to-gray-400/20 dark:from-gray-600/20 dark:to-gray-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gray-400/15 to-gray-500/15 dark:from-gray-500/15 dark:to-gray-400/15 rounded-full blur-2xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-32 right-1/4 w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full opacity-40"
        animate={{
          y: [0, -30, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gray-300 dark:bg-gray-700 transform rotate-45 opacity-30"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/3 w-3 h-3 bg-gray-500 dark:bg-gray-500 rounded-full opacity-50"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-8 h-full">
          {Array.from({ length: 144 }).map((_, index) => (
            <motion.div
              key={index}
              className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.05,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.path
          d="M 0 100 Q 400 50 800 100 T 1600 100"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-gray-400 dark:text-gray-600"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 0 300 Q 600 250 1200 300 T 2400 300"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-gray-300 dark:text-gray-700"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
      </svg>

      {/* Particle System */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default EnhancedBackground;
