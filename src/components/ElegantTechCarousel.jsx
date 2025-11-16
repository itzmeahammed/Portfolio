import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaAws, 
  FaGithub,
  FaDocker
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiTailwindcss, 
  SiFlutter, 
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiKubernetes
} from 'react-icons/si';

const ElegantTechCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const technologies = [
    { name: 'React', icon: FaReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933', category: 'Backend' },
    { name: 'Python', icon: FaPython, color: '#3776AB', category: 'Backend' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Language' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Language' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'Framework' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', category: 'Database' },
    { name: 'AWS', icon: FaAws, color: '#FF9900', category: 'Cloud' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED', category: 'DevOps' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', category: 'DevOps' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', category: 'Backend' },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B', category: 'Mobile' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Styling' },
    { name: 'Express', icon: SiExpress, color: '#000000', category: 'Framework' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098', category: 'API' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'Database' },
    { name: 'GitHub', icon: FaGithub, color: '#181717', category: 'Tools' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTechs = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + technologies.length) % technologies.length;
      visible.push({ ...technologies[index], position: i });
    }
    return visible;
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-green-100/30 to-teal-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-50 to-white px-6 py-3 rounded-full shadow-lg border border-gray-100 mb-6"
          >
            <span className="text-2xl">⚡</span>
            <span className="text-sm font-elegant-caption text-gray-700 tracking-wider uppercase">
              Technology Stack
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-elegant-heading text-gray-900 mb-4">
            Tools & Technologies
          </h2>
          <p className="text-lg font-elegant-body text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technologies I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative h-80 flex items-center justify-center perspective-1000">
          <div className="relative w-full max-w-4xl">
            {getVisibleTechs().map((tech, index) => {
              const IconComponent = tech.icon;
              const position = tech.position;
              const isCenter = position === 0;
              
              return (
                <motion.div
                  key={`${tech.name}-${currentIndex}`}
                  className={`absolute left-1/2 top-1/2 cursor-pointer ${
                    isCenter ? 'z-30' : position === -1 || position === 1 ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${position * 200}px) translateZ(${isCenter ? 0 : -100}px) rotateY(${position * 15}deg)`,
                  }}
                  animate={{
                    scale: isCenter ? 1.2 : position === -1 || position === 1 ? 0.9 : 0.7,
                    opacity: Math.abs(position) > 2 ? 0 : isCenter ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  whileHover={{ 
                    scale: isCenter ? 1.3 : 1.0,
                    y: -10 
                  }}
                  onClick={() => setCurrentIndex((currentIndex + position + technologies.length) % technologies.length)}
                >
                  <div className={`
                    relative bg-white rounded-3xl shadow-xl border-2 border-gray-100
                    ${isCenter ? 'w-32 h-32 p-8' : 'w-24 h-24 p-6'}
                    flex flex-col items-center justify-center
                    hover:shadow-2xl transition-all duration-300
                    group overflow-hidden
                  `}>
                    {/* Gradient overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl"
                      style={{ backgroundColor: tech.color }}
                    />
                    
                    {/* Icon */}
                    <IconComponent 
                      size={isCenter ? 48 : 32} 
                      style={{ color: tech.color }}
                      className="group-hover:scale-110 transition-transform duration-300 relative z-10"
                    />
                    
                    {/* Name (only for center item) */}
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center"
                      >
                        <p className="font-elegant-caption text-gray-900 font-semibold text-lg">
                          {tech.name}
                        </p>
                        <p className="font-elegant-body text-gray-500 text-sm">
                          {tech.category}
                        </p>
                      </motion.div>
                    )}
                    
                    {/* Floating particles */}
                    <motion.div
                      className="absolute top-2 right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100"
                      style={{ backgroundColor: tech.color }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-12 gap-2"
        >
          {technologies.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gray-800 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: '18+', label: 'Technologies', icon: '⚡' },
            { number: '50+', label: 'Projects Built', icon: '🚀' },
            { number: '3+', label: 'Years Experience', icon: '💼' },
            { number: '100%', label: 'Passion Driven', icon: '❤️' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-elegant-heading text-gray-900 mb-2">
                  {stat.number}
                </div>
                <p className="text-sm font-elegant-body text-gray-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ElegantTechCarousel;
