import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaRocket } from 'react-icons/fa';

const FlyingRocket = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      setIsVisible(true);
      
      // Simple left to right trajectory
      const startX = -50;
      const startY = Math.random() * (window.innerHeight * 0.6) + 100;
      const endX = window.innerWidth + 50;
      const endY = startY + (Math.random() * 200 - 100); // Slight vertical variation

      controls.start({
        x: endX,
        y: endY,
        rotate: Math.random() * 20 - 10, // Slight rotation
        transition: {
          duration: 6,
          ease: "linear"
        }
      }).then(() => {
        setIsVisible(false);
        // Schedule next rocket after random delay
        setTimeout(startAnimation, Math.random() * 8000 + 5000); // 5-13 seconds
      });
    };

    // Start first rocket after initial delay
    const initialDelay = setTimeout(startAnimation, 2000);
    
    return () => clearTimeout(initialDelay);
  }, [controls]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        animate={controls}
        initial={{ x: -50, y: 300, rotate: 0 }}
        className="absolute"
      >
        {/* Simple Rocket with Smoke Trail */}
        <div className="relative">
          {/* Smoke Trail Behind Rocket */}
          <motion.div
            className="absolute -left-8 top-1/2 transform -translate-y-1/2"
            animate={{
              opacity: [0.4, 0.2, 0],
              scale: [0.5, 1, 1.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeOut"
            }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full opacity-60"
                style={{
                  left: `${i * -6}px`,
                  top: `${(i % 2) * 4 - 2}px`,
                }}
                animate={{
                  opacity: [0.6, 0.3, 0],
                  scale: [0.5, 1, 1.2],
                  x: [-2, -8, -15],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>

          {/* Simple Rocket Icon */}
          <FaRocket className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </div>
      </motion.div>
    </div>
  );
};

export default FlyingRocket;
