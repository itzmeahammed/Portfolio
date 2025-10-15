import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-black/20 dark:border-white/20 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <HiMoon className="w-6 h-6 text-black" />
        ) : (
          <HiSun className="w-6 h-6 text-white" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
