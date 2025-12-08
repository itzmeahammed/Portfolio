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

import BlockchainNetworkShowcase from '../components/BlockchainNetworkShowcase';
import DevOpsPipelineShowcase from '../components/DevOpsPipelineShowcase';

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
    { icon: HiCode, number: "20+", label: "Projects Delivered" },
    { icon: HiStar, number: "2.5+", label: "Years Experience" },
    { icon: HiUsers, number: "3+", label: "Happy Clients" },
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
              <a href="https://www.linkedin.com/in/ahammed-s-5161b7288/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><FaLinkedin size={24} /></a>
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

      {/* Live Project Browser - Enhanced Placement */}
      <section className="py-20 relative bg-gray-50/50 dark:bg-black border-y border-gray-200 dark:border-gray-800 backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))] pointer-events-none" />
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <div className="text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 text-sm font-medium mb-2 border border-gray-200 dark:border-gray-700"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-500 dark:bg-gray-300"></span>
                </span>
                <span>Interactive Preview</span>
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">Applications</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Explore fully functional deployments of my latest work. Test the interfaces, responsive designs, and interactive elements directly.
              </p>
            </div>

            <InteractiveProjectBrowser />

            <div className="flex justify-center">
              <button
                onClick={() => navigate('/projects')}
                className="group flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                View All Projects <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div >
        </div >
      </section >

      {/* Showcases Stream */}
      < div className="relative" >
        {/* Connecting Line */}
        < div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent hidden md:block" ></div >

        <div className="space-y-0">
          <SystemDesignShowcase />
          <AIWorkflowShowcase />
          <CloudInfrastructureShowcase />
          <DevOpsPipelineShowcase />
          <MobileEcosystemShowcase />
          <DesktopEcosystemShowcase />
          <SaaSProductShowcase />
          <BlockchainNetworkShowcase />
          <RealTimeCollaborationShowcase />
          <AlgorithmVisualizer />
        </div>
      </div >



      {/* Tech Arsenal - Grid Visualization */}
      < TechStackGrid />

      {/* Impact Stats - Premium Redesign */}
      < section className="py-32 relative overflow-hidden" >
        {/* Background Gradients */}
        < div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] -translate-y-1/2" ></div >
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-[2rem] bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-white/20 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
              >
                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-amber-500/0 via-orange-500/0 to-yellow-500/0 group-hover:from-amber-500/10 group-hover:via-orange-500/10 group-hover:to-yellow-500/10 transition-all duration-500"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300" />
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-2">
                    {stat.number}
                  </h3>

                  <p className="text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* CTA Section - Ultra Modern */}
      < section className="py-32 relative overflow-hidden" >
        {/* Dynamic Background */}
        < div className="absolute inset-0 bg-black dark:bg-white" >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black to-amber-900/20 dark:from-gray-100/40 dark:via-white dark:to-amber-100/20"></div>
        </div >

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full border border-white/10 dark:border-black/10 bg-white/5 dark:bg-black/5 backdrop-blur-md text-sm font-medium text-amber-400 dark:text-amber-600">
              🚀 Open for Opportunities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white dark:text-black"
          >
            Ready to engineer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-400 dark:from-amber-600 dark:to-orange-600">
              the extraordinary?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 dark:text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Let's collaborate to transform your vision into a scalable, high-performance reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="group relative px-10 py-5 bg-white dark:bg-black text-black dark:text-white rounded-full font-bold text-xl overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] dark:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] transition-all"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-amber-200/50 dark:via-amber-700/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              <span className="relative flex items-center gap-3">
                Start Collaboration <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('mailto:ahammedmass24@gmail.com')}
              className="px-10 py-5 bg-transparent border-2 border-white/20 dark:border-black/20 text-white dark:text-black rounded-full font-bold text-xl hover:bg-white/10 dark:hover:bg-black/5 transition-colors backdrop-blur-sm"
            >
              Schedule a Call
            </motion.button>
          </motion.div>
        </div>
      </section >
    </div >
  );
};

export default Home;
