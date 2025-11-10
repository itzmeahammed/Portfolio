import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon, HiSparkles, HiHome, HiUser, HiCode, HiMail, HiPhone } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaRocket } from 'react-icons/fa';
import { RiCodeSSlashLine } from 'react-icons/ri';
import profileImage from '../assets/image.png';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/', icon: HiHome },
    { name: 'About', path: '/about', icon: HiUser },
    { name: 'Projects', path: '/projects', icon: HiCode },
    { name: 'Contact', path: '/contact', icon: HiMail }
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/itzmeahammed", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ahammed-s-5161b7288/", label: "LinkedIn" },
    { icon: HiPhone, href: "tel:+971588544698", label: "Phone: 588544698" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 dark:bg-black/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/30 dark:border-gray-700/30' 
            : 'bg-white/90 dark:bg-black/90 backdrop-blur-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              <Link 
                to="/" 
                className="flex items-center space-x-3 group"
              >
                <motion.div
                  className="relative w-12 h-12 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-300 dark:border-gray-600"
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img 
                    src={profileImage} 
                    alt="Ahammed"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Background Animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-800/20 dark:from-gray-300/20 dark:to-gray-100/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <HiSparkles className="w-3 h-3 text-gray-300 dark:text-gray-700" />
                  </motion.div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-gray-800/10 dark:from-gray-300/10 dark:to-gray-100/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white bg-clip-text text-transparent">
                    Ahammed
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                    Full Stack Developer
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    to={item.path}
                    className={`relative px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 group flex items-center space-x-2 ${
                      location.pathname === item.path
                        ? 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-900 dark:text-white shadow-lg'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <item.icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    <span>{item.name}</span>
                    
                    {/* Active indicator */}
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-600/50 rounded-xl"
                        layoutId="activeTab"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Theme Toggle & Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Social Links */}
              <div className="flex items-center space-x-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="relative p-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  {theme === 'light' ? (
                    <HiMoon className="w-5 h-5 text-gray-700" />
                  ) : (
                    <HiSun className="w-5 h-5 text-yellow-400" />
                  )}
                </motion.div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/0 via-yellow-300/20 to-yellow-200/0 dark:from-blue-200/0 dark:via-blue-300/20 dark:to-blue-200/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Mobile Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === 'light' ? (
                  <HiMoon className="w-5 h-5 text-gray-700" />
                ) : (
                  <HiSun className="w-5 h-5 text-yellow-400" />
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <HiX className="w-6 h-6" />
                  ) : (
                    <HiMenu className="w-6 h-6" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-700/30 md:hidden shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-3 px-4 py-4 rounded-xl transition-all duration-300 text-base ${
                        location.pathname === item.path
                          ? 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-900 dark:text-white'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      <span className="font-semibold">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 border-t border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-xl transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
