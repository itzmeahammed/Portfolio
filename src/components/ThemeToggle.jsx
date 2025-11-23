import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative flex items-center p-1 rounded-full w-16 h-9 transition-colors duration-300 focus:outline-none shadow-lg ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-200 border border-gray-300'
        }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className={`w-7 h-7 rounded-full shadow-md flex items-center justify-center transition-colors duration-300 ${isDark ? 'bg-black text-amber-400' : 'bg-white text-orange-500'
          }`}
        animate={{
          x: isDark ? 28 : 0,
          rotate: isDark ? 360 : 0
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? <HiMoon className="w-4 h-4" /> : <HiSun className="w-4 h-4" />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
