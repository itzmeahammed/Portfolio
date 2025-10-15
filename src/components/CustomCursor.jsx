import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [cursorType, setCursorType] = useState('default');
  const [trail, setTrail] = useState([]);
  const [particles, setParticles] = useState([]);
  const moveTimeoutRef = useRef(null);
  const trailRef = useRef([]);
  const idCounterRef = useRef(0);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Add to trail
      idCounterRef.current += 1;
      trailRef.current = [
        { x: e.clientX, y: e.clientY, id: `trail-${idCounterRef.current}` },
        ...trailRef.current.slice(0, 8)
      ];
      setTrail([...trailRef.current]);

      // Clear moving state after delay
      clearTimeout(moveTimeoutRef.current);
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      // Create click particles
      const baseId = idCounterRef.current;
      const newParticles = Array.from({ length: 8 }, (_, i) => {
        idCounterRef.current += 1;
        return {
          id: `particle-${idCounterRef.current}`,
          x: e.clientX,
          y: e.clientY,
          angle: (i * 45) * (Math.PI / 180),
          velocity: Math.random() * 3 + 2,
          life: 1,
        };
      });
      setParticles(prev => [...prev, ...newParticles]);
    };

    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.matches('a, button, [role="button"]')) {
        setIsHovering(true);
        setCursorType('pointer');
      } else if (target.matches('input, textarea, select')) {
        setIsHovering(true);
        setCursorType('text');
      } else if (target.matches('img, video')) {
        setIsHovering(true);
        setCursorType('media');
      } else if (target.matches('.project-card, .skill-card')) {
        setIsHovering(true);
        setCursorType('card');
      } else {
        setIsHovering(false);
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorType('default');
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter, true);
    document.addEventListener('mouseout', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter, true);
      document.removeEventListener('mouseout', handleMouseLeave, true);
      clearTimeout(moveTimeoutRef.current);
    };
  }, []);

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return;

    const animateParticles = () => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: particle.x + Math.cos(particle.angle) * particle.velocity,
          y: particle.y + Math.sin(particle.angle) * particle.velocity,
          life: particle.life - 0.02,
          velocity: particle.velocity * 0.98,
        })).filter(particle => particle.life > 0)
      );
    };

    const interval = setInterval(animateParticles, 16);
    return () => clearInterval(interval);
  }, [particles.length]);

  const getCursorElements = () => {
    switch (cursorType) {
      case 'pointer':
        return {
          rocketSize: 'w-7 h-7',
          color: 'text-gray-800 dark:text-gray-200',
          scale: isClicking ? 0.7 : 1.4,
        };
      case 'text':
        return {
          rocketSize: 'w-5 h-5',
          color: 'text-gray-800 dark:text-gray-200',
          scale: isClicking ? 0.8 : 1,
        };
      case 'media':
        return {
          rocketSize: 'w-8 h-8',
          color: 'text-gray-700 dark:text-gray-300',
          scale: isClicking ? 0.6 : 1.6,
        };
      case 'card':
        return {
          rocketSize: 'w-10 h-10',
          color: 'text-gray-600 dark:text-gray-400',
          scale: isClicking ? 0.5 : 1.8,
        };
      default:
        return {
          rocketSize: 'w-6 h-6',
          color: 'text-black dark:text-white',
          scale: isClicking ? 0.8 : 1,
        };
    }
  };

  const cursorProps = getCursorElements();

  return (
    <>
      {/* Mouse Trail */}
      <AnimatePresence>
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            className="fixed top-0 left-0 w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full pointer-events-none z-[9995]"
            style={{
              x: point.x,
              y: point.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{ 
              scale: 0.2, 
              opacity: 0,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: "easeOut"
            }}
          />
        ))}
      </AnimatePresence>

      {/* Click Particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed top-0 left-0 w-1.5 h-1.5 bg-gray-800 dark:bg-gray-200 rounded-full pointer-events-none z-[9996]"
            style={{
              x: particle.x,
              y: particle.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ scale: 1, opacity: 1 }}
            animate={{ 
              scale: 0,
              opacity: 0,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
          />
        ))}
      </AnimatePresence>

      {/* Rocket Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorProps.scale,
          rotate: isClicking ? 360 : isMoving ? [0, 15, -15, 0] : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          rotate: isClicking 
            ? { duration: 0.4 } 
            : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <HiOutlineRocketLaunch 
          className={`${cursorProps.rocketSize} ${cursorProps.color} drop-shadow-lg`}
        />
      </motion.div>

      {/* Magnetic Field Effect */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9996]"
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full"
              animate={{
                x: Math.cos((i * 60) * (Math.PI / 180)) * 30,
                y: Math.sin((i * 60) * (Math.PI / 180)) * 30,
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
