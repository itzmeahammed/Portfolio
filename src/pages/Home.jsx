import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import {
  HiArrowRight,
  HiCode,
  HiUsers,
  HiStar,
  HiSparkles,
  HiTrendingUp,
  HiHeart,
  HiEye,
  HiLocationMarker,
  HiMail,
  HiPhone
} from 'react-icons/hi';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaGithub,
  FaLinkedin,
  FaTwitter
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

const Home = () => {
  const navigate = useNavigate();
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [techRef, techInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
  };

  const techStack = [
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { icon: FaPython, name: 'Python', color: '#3776AB' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: SiFlutter, name: 'Flutter', color: '#02569B' },
    { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: FaAws, name: 'AWS', color: '#FF9900' }
  ];

  const stats = [
    { icon: HiCode, number: "50+", label: "Projects Delivered", color: "from-gray-700 to-black" },
    { icon: HiStar, number: "1.5+", label: "Industry Experience", color: "from-gray-600 to-gray-800" },
    { icon: HiUsers, number: "2+", label: "Freelance Experience", color: "from-gray-500 to-gray-700" },
    { icon: HiTrendingUp, number: "20+", label: "Technologies Mastered", color: "from-gray-800 to-black" }
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/itzmeahammed", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/ahammed", label: "LinkedIn" },
    { icon: HiPhone, href: "tel:+971588544698", label: "Phone: 588544698" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <EnhancedBackground />

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative pt-24 md:pt-32 lg:pt-20 pb-10 px-4 sm:px-6">
        {/* GravityStarsBackground - Dark Mode Only */}
        <div className="hidden dark:block absolute inset-0">
          <GravityStarsBackground className="absolute inset-0" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
          >
            {/* Left Side - Text Content */}
            <motion.div variants={itemVariants} className="text-center lg:text-left space-y-6 md:space-y-8 flex flex-col items-center lg:items-start">
              <div className="space-y-3 md:space-y-4 w-full">
                <motion.div
                  variants={itemVariants}
                  className="flex justify-center lg:justify-start"
                >
                  <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-600">
                    👋 Welcome to my portfolio
                  </span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-elegant-heading leading-tight"
                >
                  <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                  <motion.span
                    className="bg-gradient-to-r from-gray-800 via-black to-gray-700 dark:from-gray-200 dark:via-white dark:to-gray-300 bg-clip-text text-transparent block sm:inline"
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
                    Ahammed
                  </motion.span>
                </motion.h1>

                <motion.h2
                  variants={itemVariants}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-elegant-subheading text-gray-700 dark:text-gray-300"
                >
                  Full Stack Developer
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-elegant-body mx-auto lg:mx-0"
                >
                  2+ years specializing in AI-powered web & mobile applications. Proficient in ReactJS, Next.js, Node.js, Python, with expertise in LLaMA, NLP, and ML automation.
                </motion.p>

              </div>

              {/* Contact Info */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-elegant-caption justify-center lg:justify-start w-full">
                <div className="flex items-center space-x-2 justify-center lg:justify-start">
                  <HiLocationMarker className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">Dubai, UAE</span>
                </div>
                <div className="flex items-center space-x-2 justify-center lg:justify-start">
                  <HiMail className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">ahammedmass24@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 justify-center lg:justify-start">
                  <HiEye className="w-4 h-4 flex-shrink-0" />
                  <span>Available for work</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center lg:justify-start">
                <motion.button
                  onClick={() => navigate('/projects')}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white text-white dark:text-black rounded-2xl font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>View My Work</span>
                    <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.button
                  onClick={() => navigate('/contact')}
                  className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 rounded-2xl font-semibold text-base sm:text-lg hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-white dark:hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <HiHeart className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Let's Connect</span>
                  </span>
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start w-full">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-colors duration-200 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Hero Illustration */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            >
              <div className="w-full max-w-md lg:max-w-full">
                <HeroIllustration />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Project Browser */}
      <InteractiveProjectBrowser />

      {/* Tech Stack Section */}
      <section ref={techRef} className="py-12 sm:py-16 md:py-20 relative">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/90 to-gray-100/80 dark:from-gray-900/80 dark:via-black/90 dark:to-gray-800/80 backdrop-blur-sm"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={techInView ? "visible" : "hidden"}
            className="text-center space-y-10 sm:space-y-12 md:space-y-16"
          >
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full border border-gray-200 dark:border-gray-600">
                <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">💻 Tech Stack</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-elegant-heading text-gray-900 dark:text-white px-4">
                Technologies I
                <span className="bg-gradient-to-r from-gray-700 via-black to-gray-600 dark:from-gray-300 dark:via-white dark:to-gray-400 bg-clip-text text-transparent"> Master</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-elegant-body px-4">
                Building innovative solutions with cutting-edge technologies and modern frameworks
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group relative flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-black/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100/0 via-gray-200/20 to-gray-100/0 dark:from-gray-700/0 dark:via-gray-600/20 dark:to-gray-700/0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <motion.div
                      className="relative p-2.5 sm:p-3 md:p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <tech.icon
                        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-all duration-300 group-hover:scale-110"
                        style={{ color: tech.color }}
                      />

                      {/* Tech Icon Glow */}
                      <div
                        className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"
                        style={{ backgroundColor: tech.color }}
                      ></div>
                    </motion.div>
                  </div>

                  <span className="relative z-10 text-xs sm:text-sm font-elegant-caption text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 text-center">
                    {tech.name}
                  </span>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent"
                    style={{
                      background: `linear-gradient(45deg, ${tech.color}20, transparent, ${tech.color}20)`,
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack Footer */}
            <motion.div variants={itemVariants} className="text-center px-4">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 font-elegant-body">
                Always learning and exploring new technologies to stay ahead of the curve
              </p>
              <motion.button
                onClick={() => navigate('/projects')}
                className="inline-flex items-center space-x-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>See Projects Built</span>
                <HiArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 sm:py-16 md:py-20 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="space-y-8 sm:space-y-10 md:space-y-12"
          >
            {/* Stats Header */}
            <motion.div variants={itemVariants} className="text-center space-y-3 sm:space-y-4">
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full border border-gray-200 dark:border-gray-600">
                <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">📊 My Journey</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant-heading text-gray-900 dark:text-white px-4">
                Numbers That Tell My Story
              </h2>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group relative text-center p-6 sm:p-8 bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-gray-200/60 dark:border-gray-700/60 shadow-2xl hover:shadow-3xl transition-all duration-500"
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl sm:rounded-3xl transition-opacity duration-500`}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />

                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                  </motion.div>

                  {/* Number with Counter Animation */}
                  <motion.h3
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                      {stat.number}
                    </motion.span>
                  </motion.h3>

                  {/* Label */}
                  <p className="text-gray-600 dark:text-gray-400 font-semibold text-sm sm:text-base md:text-lg group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {stat.label}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full opacity-30 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Hover Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent"
                    style={{
                      background: `linear-gradient(135deg, transparent, rgba(156, 163, 175, 0.1), transparent)`,
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Footer */}
            <motion.div variants={itemVariants} className="text-center px-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Every project is a step forward in my journey of creating impactful digital solutions
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-gray-800 dark:via-black dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/20 to-transparent dark:via-gray-700/20"></div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-gray-300/30 to-gray-400/30 dark:from-gray-600/30 dark:to-gray-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-gray-400/20 to-gray-500/20 dark:from-gray-500/20 dark:to-gray-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-8 sm:space-y-10 md:space-y-12"
          >
            {/* Header */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full border border-gray-300 dark:border-gray-600 shadow-lg"
              >
                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">🚀 Let's Work Together</span>
              </motion.div>

              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-elegant-heading text-gray-900 dark:text-white leading-tight px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                Ready to Build Something
                <span className="bg-gradient-to-r from-gray-700 via-black to-gray-600 dark:from-gray-300 dark:via-white dark:to-gray-400 bg-clip-text text-transparent block">
                  Amazing?
                </span>
              </motion.h2>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-elegant-body px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Let's collaborate and create innovative solutions that make a difference. I'm always excited to work on new projects and challenges.
              </motion.p>
            </div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <motion.button
                onClick={() => navigate('/contact')}
                className="group relative px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 bg-gradient-to-r from-gray-800 via-black to-gray-700 dark:from-gray-200 dark:via-white dark:to-gray-300 text-white dark:text-black rounded-2xl sm:rounded-3xl font-bold text-base sm:text-lg md:text-xl overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-3xl border-2 border-transparent hover:border-gray-600 dark:hover:border-gray-400 w-full sm:w-auto"
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button Background Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black dark:from-white dark:via-gray-200 dark:to-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Button Content */}
                <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                  <span>🚀</span>
                  <span>Start a Project</span>
                  <HiSparkles className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                </span>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-800/20 dark:from-gray-300/20 dark:to-gray-100/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </motion.button>

              <motion.button
                onClick={() => navigate('/about')}
                className="group relative px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 bg-white/90 dark:bg-black/90 backdrop-blur-lg border-2 sm:border-3 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 rounded-2xl sm:rounded-3xl font-bold text-base sm:text-lg md:text-xl hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-white dark:hover:text-black transition-all duration-500 shadow-2xl hover:shadow-3xl w-full sm:w-auto"
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button Content */}
                <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                  <span>👨‍💻</span>
                  <span>Learn More About Me</span>
                  <HiArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </span>

                {/* Hover Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="text-center space-y-3 sm:space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.35 }}
            >
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 font-elegant-body px-4">
                ✨ Available for freelance projects and full-time opportunities
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400 dark:text-gray-600 font-elegant-caption">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available Now</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Response within 24h</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
