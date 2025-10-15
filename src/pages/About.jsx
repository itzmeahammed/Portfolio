import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/image.png';
import cvFile from '../assets/Ahammed S.pdf (5) (1).pdf';
import CVDownload from '../components/CVDownload';
import { 
  HiAcademicCap, 
  HiBriefcase, 
  HiCode,
  HiStar,
  HiSparkles,
  HiArrowRight,
  HiLocationMarker,
  HiMail,
  HiPhone,
  HiDownload,
  HiClock,
  HiChartBar,
  HiBadgeCheck,
  HiEye,
  HiLightBulb,
  HiGlobeAlt,
  HiCog,
  HiDatabase,
  HiDesktopComputer,
  HiDeviceMobile
} from 'react-icons/hi';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDatabase as FaDb, 
  FaGithub,
  FaLinkedin,
  FaRocket,
  FaLaptopCode,
  FaMobile,
  FaAws,
  FaDocker,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaBrain
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiTailwindcss, 
  SiFlutter, 
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiTensorflow,
  SiMysql,
  SiExpress,
  SiReactos,
  SiOpencv,
  SiNginx,
  SiHeroku,
  SiJira,
  SiBitbucket,
  SiGit
} from 'react-icons/si';

const About = () => {
  const navigate = useNavigate();
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [journeyRef, journeyInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const personalStats = [
    { label: "Industry Experience", value: "1.5+", icon: HiBriefcase, color: "from-gray-700 to-black" },
    { label: "Freelance Experience", value: "2+", icon: HiClock, color: "from-gray-600 to-gray-800" },
    { label: "Projects Delivered", value: "50+", icon: HiChartBar, color: "from-gray-500 to-gray-700" },
    { label: "Technologies Mastered", value: "20+", icon: HiCode, color: "from-gray-800 to-black" }
  ];

  const skillCategories = [
    {
      title: "Front-End Development",
      icon: HiDesktopComputer,
      description: "Modern UI/UX with responsive design",
      skills: [
        { name: "ReactJS", icon: FaReact, level: 95 },
        { name: "Next.js", icon: SiNextdotjs, level: 90 },
        { name: "React Native", icon: FaReact, level: 88 },
        { name: "Flutter", icon: SiFlutter, level: 85 },
        { name: "HTML5", icon: FaHtml5, level: 95 },
        { name: "CSS3", icon: FaCss3Alt, level: 92 },
        { name: "JavaScript", icon: SiJavascript, level: 95 }
      ]
    },
    {
      title: "Back-End Development",
      icon: HiDatabase,
      description: "Scalable server-side solutions",
      skills: [
        { name: "Java", icon: FaJava, level: 88 },
        { name: "Python", icon: FaPython, level: 90 },
        { name: "Node.js", icon: FaNodeJs, level: 92 },
        { name: "Express.js", icon: SiExpress, level: 88 }
      ]
    },
    {
      title: "Database Management",
      icon: FaDb,
      description: "Efficient data storage & retrieval",
      skills: [
        { name: "MySQL", icon: SiMysql, level: 90 },
        { name: "MongoDB", icon: SiMongodb, level: 92 }
      ]
    },
    {
      title: "AI/ML & Computer Vision",
      icon: FaBrain,
      description: "Intelligent automation solutions",
      skills: [
        { name: "LLM Implementation", icon: HiLightBulb, level: 85 },
        { name: "OpenCV", icon: SiOpencv, level: 80 },
        { name: "Tesseract OCR", icon: HiEye, level: 85 },
        { name: "LLaMA", icon: FaBrain, level: 82 },
        { name: "NLP", icon: HiGlobeAlt, level: 88 }
      ]
    },
    {
      title: "Design & Tools",
      icon: HiCog,
      description: "Development workflow & design",
      skills: [
        { name: "Figma", icon: FaFigma, level: 85 },
        { name: "Git", icon: SiGit, level: 95 },
        { name: "GitHub", icon: FaGithub, level: 92 },
        { name: "Bitbucket", icon: SiBitbucket, level: 88 },
        { name: "Jira", icon: SiJira, level: 85 }
      ]
    },
    {
      title: "Deployment & DevOps",
      icon: HiGlobeAlt,
      description: "Cloud deployment & infrastructure",
      skills: [
        { name: "AWS", icon: FaAws, level: 85 },
        { name: "Docker", icon: FaDocker, level: 80 },
        { name: "NGINX", icon: SiNginx, level: 78 },
        { name: "Heroku", icon: SiHeroku, level: 85 }
      ]
    }
  ];

  const workExperience = [
    {
      position: "Full Stack Developer",
      company: "WizzGeeks Technologies",
      location: "Electronic City, Bangalore",
      duration: "MAY 2024 - AUGUST 2025",
      type: "Full-time",
      icon: FaRocket,
      current: false,
      achievements: [
        "Contributed to QuestionCloud, an AI-driven learning platform with admin and user web panels",
        "Integrated Tesseract OCR to extract syllabus content and convert it into embeddings",
        "Enabled AI-generated question generation from uploaded syllabus content",
        "Contributed to GUVI Zen Class platform focusing on ReactJS front-end development",
        "Built AI-integrated Expense Tracker with budget suggestions and analytics dashboards",
        "Worked on Medsy.ai, an AI-based medical platform with full AI functionalities integration"
      ]
    },
    {
      position: "Freelance Full Stack Developer",
      company: "Independent",
      location: "Remote",
      duration: "APRIL 2023 - PRESENT",
      type: "Freelance",
      icon: FaLaptopCode,
      current: true,
      achievements: [
        "Built and delivered custom web and mobile applications for clients across multiple domains",
        "Developed responsive websites and cross-platform mobile apps using React Native, Flutter, and ReactJS",
        "Handled full-stack responsibilities including front-end, back-end, database integration, and deployment",
        "Managed complete project lifecycles from requirements gathering to ongoing maintenance",
        "Collaborated directly with clients to deliver tailored solutions within deadlines"
      ]
    }
  ];

  const areasOfInterest = [
    { name: "Mobile Development", icon: HiDeviceMobile, description: "Cross-platform mobile apps" },
    { name: "Web Development", icon: HiDesktopComputer, description: "Modern web applications" },
    { name: "Front-End Development", icon: FaLaptopCode, description: "Interactive user interfaces" },
    { name: "Back-End Development", icon: HiDatabase, description: "Server-side architecture" },
    { name: "Full Stack Development", icon: HiCode, description: "End-to-end solutions" },
    { name: "Software Development", icon: HiCog, description: "Custom software solutions" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50/50 via-white to-gray-100/50 dark:from-gray-900/50 dark:via-black dark:to-gray-800/50"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-gray-200/20 to-gray-300/20 dark:from-gray-700/20 dark:to-gray-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-gray-300/15 to-gray-400/15 dark:from-gray-600/15 dark:to-gray-500/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gray-400/10 to-gray-500/10 dark:from-gray-500/10 dark:to-gray-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center space-y-12"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 shadow-lg"
            >
              <HiSparkles className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Professional Full Stack Developer</span>
            </motion.div>

            {/* Profile Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -50 }}
                animate={heroInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="relative"
              >
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative w-full h-full rounded-3xl border-4 border-gray-300 dark:border-gray-600 shadow-lg overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Ahammed - Full Stack Developer"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-200/20 to-gray-300/20 dark:from-transparent dark:via-gray-700/20 dark:to-gray-600/20"></div>
                    <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
                  </div>
                </div>
              </motion.div>

              {/* Name and Description */}
              <div className="flex-1 text-left lg:text-left space-y-6 max-w-3xl">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  <span className="bg-gradient-to-r from-gray-800 via-black to-gray-700 dark:from-gray-200 dark:via-white dark:to-gray-300 bg-clip-text text-transparent">
                    Ahammed
                  </span>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="space-y-4"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                    Full Stack Developer & AI Specialist
                  </h2>
                  
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl">
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">1.5+ years industry experience</span> and <span className="font-semibold text-gray-800 dark:text-gray-200">2+ years freelancing</span>, 
                      specializing in <span className="font-semibold text-gray-800 dark:text-gray-200">AI-powered</span> and scalable web & mobile applications. 
                      Proficient in ReactJS, Next.js, Node.js, Python, with hands-on expertise in 
                      <span className="font-semibold text-gray-800 dark:text-gray-200"> LLaMA, NLP, OCR, and ML-based automation</span>.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['ReactJS', 'Next.js', 'Node.js', 'Python', 'AI/ML', 'AWS'].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.2, delay: 0.25 + index * 0.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white text-white dark:text-black rounded-full text-sm font-medium shadow-lg"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Contact Information */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="flex flex-wrap gap-3 sm:gap-4 pt-4"
                  >
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <HiMail className="w-5 h-5" />
                      <span className="text-sm">ahammedmass24@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <HiLocationMarker className="w-5 h-5" />
                      <span className="text-sm">Bangalore, India</span>
                    </div>
                    <a 
                      href="tel:+918428957895"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    >
                      <HiPhone className="w-5 h-5" />
                      <span className="text-sm">+91 8428957895</span>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Enhanced CV Download Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="pt-8"
            >
              <CVDownload className="mb-6" />
              
              <div className="flex justify-center">
                <motion.button
                  onClick={() => navigate('/contact')}
                  className="group px-8 py-4 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 rounded-2xl font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-white dark:hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-2">
                    <HiMail className="w-5 h-5" />
                    <span>Get In Touch</span>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {personalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-center group"
              >
                <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${stat.color} dark:from-gray-300 dark:to-white rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <stat.icon className="w-8 h-8 text-white dark:text-black" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Skills & Expertise
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Proficient in modern technologies and frameworks for building scalable applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: categoryIndex * 0.075 }}
                className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-500"
              >
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-700 via-gray-800 to-black dark:from-gray-300 dark:via-gray-200 dark:to-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <category.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white dark:text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 leading-tight">{category.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.25, delay: categoryIndex * 0.075 + skillIndex * 0.05 }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                          <skill.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400 group-hover/skill:text-gray-800 dark:group-hover/skill:text-gray-200 transition-colors flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-800 dark:text-gray-200 font-medium truncate">{skill.name}</span>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 font-semibold ml-2 flex-shrink-0">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 sm:h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-gray-600 via-gray-700 to-black dark:from-gray-300 dark:via-gray-200 dark:to-white rounded-full shadow-sm"
                          initial={{ width: 0 }}
                          animate={skillsInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 0.6, delay: categoryIndex * 0.075 + skillIndex * 0.05 + 0.15, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Areas of Interest */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-20"
          >
            <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">Areas of Interest</h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">Passionate about diverse aspects of software development</p>
            </div>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {areasOfInterest.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.25, delay: 0.3 + index * 0.05 }}
                  className="group text-center p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-black" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-1 leading-tight">{area.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section ref={journeyRef} className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={journeyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Work Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Professional journey delivering impactful projects and innovative solutions
            </p>
          </motion.div>

          <div className="space-y-12">
            {workExperience.map((experience, index) => (
              <motion.div
                key={experience.position + experience.company}
                initial={{ opacity: 0, y: 50 }}
                animate={journeyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${experience.current ? 'from-gray-800 via-black to-gray-700 dark:from-gray-200 dark:via-white dark:to-gray-300' : 'from-gray-600 via-gray-700 to-gray-800 dark:from-gray-400 dark:via-gray-300 dark:to-gray-500'} rounded-2xl flex items-center justify-center shadow-md`}>
                        <experience.icon className="w-8 h-8 text-white dark:text-black" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{experience.position}</h3>
                          {experience.current && (
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold rounded-full border border-green-200 dark:border-green-700">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">{experience.company}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 dark:text-gray-400">
                          <span className="flex items-center space-x-2">
                            <HiLocationMarker className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </span>
                          <span className="flex items-center space-x-2">
                            <HiClock className="w-4 h-4" />
                            <span>{experience.duration}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${experience.type === 'Full-time' ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200' : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'}`}>
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                      <HiStar className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      <span>Key Achievements</span>
                    </h4>
                    
                    <div className="grid gap-4">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={journeyInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.25, delay: index * 0.15 + achievementIndex * 0.05 + 0.1 }}
                          className="flex items-start space-x-3 p-4 bg-gray-50/80 dark:bg-gray-700/50 rounded-xl border border-gray-200/50 dark:border-gray-600/50"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-black dark:from-gray-300 dark:to-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connection Line */}
                {index < workExperience.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-12 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 dark:to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={journeyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-md"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Summary</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                I bring <span className="font-semibold text-gray-800 dark:text-gray-200">commitment, reliability, and leadership</span>, backed by a proven track record of delivering impactful projects for startups, businesses, and enterprise-level clients, including <span className="font-semibold text-gray-800 dark:text-gray-200">automation platforms, AI tools, and complex web applications</span>. 
                Experienced in designing RESTful APIs, managing databases, and deploying solutions on AWS, Heroku, and Docker, with strong focus on performance, testing, and clean code practices.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
            
            <motion.button
              onClick={() => navigate('/contact')}
              className="group px-10 py-5 bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white text-white dark:text-black rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-3">
                <span>Start a Project</span>
                <HiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
