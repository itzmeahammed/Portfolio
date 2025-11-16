import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiJavascript, 
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAmazon,
  SiGit,
  SiFirebase,
  SiFlutter,
  SiExpress,
  SiFastapi
} from 'react-icons/si';

const FloatingSkills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB", level: 95 },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 90 },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 85 },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 95 },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 90 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 90 },
        { name: "Python", icon: SiPython, color: "#3776AB", level: 85 },
        { name: "Express", icon: SiExpress, color: "#000000", level: 88 },
        { name: "FastAPI", icon: SiFastapi, color: "#009688", level: 80 }
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 85 },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: 80 },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 85 },
        { name: "AWS", icon: SiAmazon, color: "#FF9900", level: 75 }
      ]
    },
    {
      title: "Tools & Mobile",
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED", level: 80 },
        { name: "Git", icon: SiGit, color: "#F05032", level: 90 },
        { name: "Flutter", icon: SiFlutter, color: "#02569B", level: 85 }
      ]
    }
  ];

  const floatingSkills = [
    { name: "React", icon: SiReact, color: "#61DAFB", x: 10, y: 20 },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", x: 80, y: 15 },
    { name: "Python", icon: SiPython, color: "#3776AB", x: 15, y: 70 },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", x: 85, y: 65 },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", x: 50, y: 10 },
    { name: "Docker", icon: SiDocker, color: "#2496ED", x: 20, y: 45 },
    { name: "AWS", icon: SiAmazon, color: "#FF9900", x: 75, y: 40 },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", x: 60, y: 75 }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50/30 to-white overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0">
        {floatingSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="absolute opacity-10"
            style={{
              left: `${skill.x}%`,
              top: `${skill.y}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5
            }}
          >
            <skill.icon className="w-12 h-12" style={{ color: skill.color }} />
          </motion.div>
        ))}
      </div>

      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-coral-400/20 to-rose-400/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-teal-400/20 to-amber-400/20 rounded-full blur-2xl"
        animate={{
          x: mousePosition.x * -0.03,
          y: mousePosition.y * -0.03,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full border border-gray-200 shadow-lg mb-6"
          >
            <span className="text-sm font-elegant-caption text-gray-700">⚡ Skills & Expertise</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-elegant-heading text-gray-900 mb-6"
          >
            Technologies I{' '}
            <motion.span
              className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Master
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-elegant-body text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From frontend frameworks to cloud infrastructure, I leverage cutting-edge technologies 
            to build scalable, performant, and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.5 + categoryIndex * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="group"
            >
              {/* Category Header */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50"
              >
                <motion.h3
                  className="text-xl font-elegant-subheading text-gray-900 mb-6 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  {category.title}
                </motion.h3>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.7 + categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50/50 transition-all duration-200 cursor-pointer group/skill"
                    >
                      {/* Skill Icon */}
                      <motion.div
                        className="flex-shrink-0 p-2 bg-gray-100 rounded-lg group-hover/skill:shadow-md transition-all duration-200"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <skill.icon 
                          className="w-5 h-5" 
                          style={{ color: skill.color }}
                        />
                      </motion.div>

                      {/* Skill Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-elegant-body text-gray-800 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-xs font-elegant-caption text-gray-500">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <motion.div
                            className="h-1.5 rounded-full bg-gradient-to-r from-gray-600 to-gray-800"
                            initial={{ width: 0 }}
                            animate={isVisible ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1.5, 
                              delay: 1 + categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl font-elegant-caption shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Explore My Projects</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FloatingSkills;
