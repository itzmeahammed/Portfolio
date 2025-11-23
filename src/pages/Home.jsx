import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HiArrowRight,
  HiCode,
  HiUsers,
  HiStar,
  HiTrendingUp,
  HiMail
} from 'react-icons/hi';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import {
  SiMongodb,
  SiTailwindcss,
  SiFlutter,
  SiDocker,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiFirebase
} from 'react-icons/si';

import EnhancedBackground from '../components/EnhancedBackground';
import HeroIllustration from '../components/HeroIllustration';
import InteractiveProjectBrowser from '../components/InteractiveProjectBrowser';
import { GravityStarsBackground } from '../components/animate-ui/components/backgrounds/gravity-stars';
import SystemDesignShowcase from '../components/SystemDesignShowcase';
import AIWorkflowShowcase from '../components/AIWorkflowShowcase';
import CloudInfrastructureShowcase from '../components/CloudInfrastructureShowcase';
import MobileEcosystemShowcase from '../components/MobileEcosystemShowcase';
import DesktopEcosystemShowcase from '../components/DesktopEcosystemShowcase';
import SaaSProductShowcase from '../components/SaaSProductShowcase';
import RealTimeCollaborationShowcase from '../components/RealTimeCollaborationShowcase';
import AlgorithmVisualizer from '../components/AlgorithmVisualizer';
import TechStackGrid from '../components/TechStackGrid';

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const stats = [
    { icon: HiCode, number: "50+", label: "Projects Delivered" },
    { icon: HiStar, number: "1.5+", label: "Years Experience" },
    { icon: HiUsers, number: "2+", label: "Happy Clients" },
    { icon: HiTrendingUp, number: "20+", label: "Tech Stack" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white selection:bg-gray-200 dark:selection:bg-gray-800 overflow-hidden">
      <EnhancedBackground />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="hidden dark:block absolute inset-0 z-0">
          <GravityStarsBackground />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Available for Hire</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight">
              Building <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-white dark:via-gray-400 dark:to-white animate-gradient-x">
                The Future
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I am Ahammed, a Full Stack Developer architecting scalable digital solutions.
              Specializing in AI integration, Cloud Infrastructure, and Modern Web Technologies.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => navigate('/projects')}
                className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
              >
                View Projects <HiArrowRight />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-300"
              >
                Contact Me
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center justify-center lg:justify-start gap-6 text-gray-500 dark:text-gray-400">
              <a href="https://github.com/itzmeahammed" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors"><FaGithub size={24} /></a>
              <a href="https://linkedin.com/in/ahammed" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><FaLinkedin size={24} /></a>
              <a href="mailto:ahammedmass24@gmail.com" className="hover:text-red-500 transition-colors"><HiMail size={26} /></a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <HeroIllustration />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-current rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Showcases Stream */}
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent hidden md:block"></div>

        <div className="space-y-0">
          <SystemDesignShowcase />
          <AIWorkflowShowcase />
          <CloudInfrastructureShowcase />
          <MobileEcosystemShowcase />
          <DesktopEcosystemShowcase />
          <SaaSProductShowcase />
          <RealTimeCollaborationShowcase />
          <AlgorithmVisualizer />
        </div>
      </div>

      {/* Live Project Browser */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Live Project <span className="text-gray-500">Explorer</span></h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Interact with my deployed applications directly from this portfolio.
              </p>
            </div>
            <InteractiveProjectBrowser />
          </motion.div>
        </div>
      </section>

      {/* Tech Arsenal - Grid Visualization */}
      <TechStackGrid />

      {/* Impact Stats */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-3xl bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm"
              >
                <div className="inline-flex p-4 rounded-2xl bg-white dark:bg-black mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-gray-900 dark:text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 dark:bg-white transform -skew-y-3 origin-bottom-left scale-110"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white dark:text-black"
          >
            Ready to engineer the extraordinary?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 dark:text-gray-600"
          >
            Let's collaborate to transform your vision into a scalable, high-performance reality.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="px-10 py-5 bg-white dark:bg-black text-black dark:text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-white/20 dark:hover:shadow-black/20 transition-all"
          >
            Start Collaboration
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Home;
