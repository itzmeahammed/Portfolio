import { motion } from 'framer-motion';
import { HiCode, HiSparkles, HiLightBulb, HiCube, HiStar } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiJavascript, SiMongodb } from 'react-icons/si';
import profileImage from '../assets/image.png';

const HeroIllustration = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main Illustration Container */}
      <div className="relative w-96 h-96 mx-auto">
        
        {/* Central Profile Card */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-600 overflow-hidden"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-100/50 to-gray-200/50 dark:from-transparent dark:via-gray-700/50 dark:to-gray-800/50"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center">
            {/* Profile Image */}
            <motion.div
              className="w-32 h-32 rounded-full mb-6 overflow-hidden shadow-xl border-4 border-gray-300 dark:border-gray-600"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={profileImage} 
                alt="Ahammed - Full Stack Developer"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
            
            {/* Name */}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Ahammed</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Full Stack Developer</p>
            
            {/* Status Indicator */}
            <div className="flex items-center space-x-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">Available for work</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.div
          className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
          animate={{
            rotate: [0, 10, -10, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaReact className="w-8 h-8 text-white" />
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg"
          animate={{
            rotate: [0, -10, 10, 0],
            y: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <FaNodeJs className="w-7 h-7 text-white" />
        </motion.div>

        <motion.div
          className="absolute top-1/4 -left-6 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg"
          animate={{
            x: [0, -5, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <SiJavascript className="w-6 h-6 text-white" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 -right-6 w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
          animate={{
            x: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <FaPython className="w-5 h-5 text-white" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 -right-8 w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg"
          animate={{
            y: [0, -8, 0],
            rotate: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <SiMongodb className="w-4 h-4 text-white" />
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-8 left-8 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-70"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-8 right-8 w-4 h-4 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full opacity-60"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <motion.path
            d="M 50 50 Q 150 100 250 50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-gray-400 dark:text-gray-600"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M 100 200 Q 200 150 300 200"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-gray-300 dark:text-gray-700"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
        </svg>

        {/* Sparkle Effects */}
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              left: `${20 + (index * 45)}%`,
              top: `${15 + (index * 35)}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-gradient-to-t from-gray-200/50 to-transparent dark:from-gray-700/50 rounded-full blur-2xl -z-10"></div>
    </div>
  );
};

export default HeroIllustration;
