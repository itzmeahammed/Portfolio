import { motion } from 'framer-motion';
import { HiCode, HiLightBulb, HiCube, HiSparkles, HiStar } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiJavascript, SiMongodb } from 'react-icons/si';

const FloatingElements = () => {
  const floatingIcons = [
    { Icon: HiCode, color: 'text-gray-600 dark:text-gray-400', size: 'w-8 h-8', delay: 0 },
    { Icon: FaReact, color: 'text-gray-500 dark:text-gray-500', size: 'w-6 h-6', delay: 0.5 },
    { Icon: HiLightBulb, color: 'text-gray-700 dark:text-gray-300', size: 'w-7 h-7', delay: 1 },
    { Icon: SiJavascript, color: 'text-gray-600 dark:text-gray-400', size: 'w-5 h-5', delay: 1.5 },
    { Icon: HiSparkles, color: 'text-gray-500 dark:text-gray-500', size: 'w-6 h-6', delay: 2 },
    { Icon: FaNodeJs, color: 'text-gray-600 dark:text-gray-400', size: 'w-7 h-7', delay: 2.5 },
    { Icon: HiCube, color: 'text-gray-700 dark:text-gray-300', size: 'w-8 h-8', delay: 3 },
    { Icon: SiMongodb, color: 'text-gray-500 dark:text-gray-500', size: 'w-6 h-6', delay: 3.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 rounded-full opacity-25"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-400 rounded-3xl opacity-15"
        animate={{
          rotate: [0, -90, -180, -270, -360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-600 dark:from-gray-400 dark:to-gray-300 rounded-lg opacity-30"
        animate={{
          y: [0, -40, 0],
          rotate: [0, 45, 90, 135, 180],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${
            index % 2 === 0 ? 'left-' + (10 + index * 15) : 'right-' + (10 + index * 10)
          } ${
            index % 3 === 0 ? 'top-' + (20 + index * 20) : 'bottom-' + (20 + index * 15)
          }`}
          style={{
            left: `${10 + (index * 12)}%`,
            top: `${15 + (index * 10)}%`,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <item.Icon className={`${item.size} ${item.color}`} />
        </motion.div>
      ))}

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.path
          d="M 50 100 Q 200 50 350 100 T 650 100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-gray-400 dark:text-gray-600"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 100 200 Q 300 150 500 200 T 800 200"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-gray-300 dark:text-gray-700"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
      </svg>

      {/* Particle Dots */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
