import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGithub
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiGraphql
} from 'react-icons/si';
import { HiChip, HiCloud, HiDatabase, HiCode } from 'react-icons/hi';

const HeroIllustration = () => {
  const orbitDuration = 20;

  const techIcons = [
    { Icon: FaReact, color: "text-cyan-400", delay: 0, radius: 140 },
    { Icon: FaNodeJs, color: "text-green-500", delay: 2, radius: 140 },
    { Icon: SiTypescript, color: "text-blue-500", delay: 4, radius: 140 },
    { Icon: FaAws, color: "text-orange-500", delay: 6, radius: 140 },
    { Icon: SiNextdotjs, color: "text-white", delay: 1, radius: 220 },
    { Icon: SiMongodb, color: "text-green-400", delay: 3, radius: 220 },
    { Icon: FaDocker, color: "text-blue-400", delay: 5, radius: 220 },
    { Icon: SiGraphql, color: "text-pink-500", delay: 7, radius: 220 },
  ];

  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center perspective-1000">

      {/* Central Core */}
      <div className="relative z-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 relative flex items-center justify-center"
        >
          {/* Core Glow */}
          <div className="absolute inset-0 bg-cyan-500/30 blur-3xl rounded-full animate-pulse"></div>

          {/* Core Structure */}
          <div className="relative w-24 h-24 bg-black/80 backdrop-blur-xl border border-cyan-500/50 rounded-2xl transform rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            <HiCode className="text-4xl text-cyan-400 transform -rotate-45" />
          </div>
          <div className="absolute w-24 h-24 border border-cyan-500/30 rounded-2xl transform rotate-[22.5deg]"></div>
          <div className="absolute w-24 h-24 border border-cyan-500/30 rounded-2xl transform rotate-[67.5deg]"></div>
        </motion.div>
      </div>

      {/* Inner Orbit Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: orbitDuration, repeat: Infinity, ease: "linear" }}
        className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-gray-700/50"
      />

      {/* Outer Orbit Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: orbitDuration * 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-gray-700/30"
      />

      {/* Orbiting Tech Icons */}
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          className="absolute top-1/2 left-1/2"
          animate={{ rotate: 360 }}
          transition={{
            duration: tech.radius === 140 ? orbitDuration : orbitDuration * 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: -tech.delay * (tech.radius === 140 ? 2.5 : 3.75) // Offset start positions
          }}
          style={{
            width: tech.radius * 2,
            height: tech.radius * 2,
            marginLeft: -tech.radius,
            marginTop: -tech.radius
          }}
        >
          <motion.div
            className={`absolute top-0 left-1/2 -ml-6 -mt-6 w-12 h-12 bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-xl flex items-center justify-center shadow-lg ${tech.color}`}
            style={{ transformOrigin: "center center" }}
            animate={{ rotate: -360 }} // Counter-rotate to keep icon upright
            transition={{
              duration: tech.radius === 140 ? orbitDuration : orbitDuration * 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: -tech.delay * (tech.radius === 140 ? 2.5 : 3.75)
            }}
            whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
          >
            <tech.Icon size={24} />
          </motion.div>
        </motion.div>
      ))}

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-50"
          animate={{
            y: [-20, 20, -20],
            x: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
        />
      ))}

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-[100px] rounded-full -z-10"></div>
    </div>
  );
};

export default HeroIllustration;
