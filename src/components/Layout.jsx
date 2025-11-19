import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import ThemeToggle from './ThemeToggle';
import LoadingAnimation from './LoadingAnimation';
import FlyingRocket from './FlyingRocket';
import FloatingChatbot from './FloatingChatbot';
import FirstVisitWelcomePopup from './FirstVisitWelcomePopup';
import AdvancedAnalytics from './AdvancedAnalytics';
import FormAnalytics from './FormAnalytics';
import EmailCapture from './EmailCapture';
import EngagementTracker from './EngagementTracker';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();

  // Initialize Google Analytics
  useEffect(() => {
    // Add Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-R6YZYCBC8E';
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-R6YZYCBC8E');
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    
    // Initial loading
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  // Show loader for 1.5 seconds on each page change and track page views
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1500);
    
    // Track page view with Google Analytics
    if (window.gtag) {
      window.gtag('config', 'G-R6YZYCBC8E', {
        page_path: location.pathname,
        page_title: document.title
      });
    }
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Analytics & Tracking Components */}
      <AdvancedAnalytics />
      <FormAnalytics />
      <EmailCapture />
      <EngagementTracker />

      {/* UI Components */}
      <CustomCursor />
      <FlyingRocket />
      <FloatingChatbot />
      <FirstVisitWelcomePopup onPopupStateChange={setIsPopupOpen} />

      <motion.div
        animate={{ filter: isPopupOpen ? 'blur(8px)' : 'blur(0px)' }}
        transition={{ duration: 0.3 }}
        className="relative z-20"
      >
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </motion.div>
      
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative z-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Layout;
