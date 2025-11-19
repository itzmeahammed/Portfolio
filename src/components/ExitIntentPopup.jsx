import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiX, HiDownload, HiMail, HiPhone } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      // Only trigger if mouse leaves from top of page and hasn't shown yet
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        
        // Track exit intent
        if (window.gtag) {
          window.gtag('event', 'exit_intent_triggered');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
    if (window.gtag) {
      window.gtag('event', 'exit_intent_closed');
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/Ahammed S.pdf (5) (1).pdf';
    link.download = 'Ahammed-Portfolio-CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (window.gtag) {
      window.gtag('event', 'cv_download_from_exit_popup');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-elegant-heading text-gray-900 dark:text-white">
                  Wait! Don't Leave Yet
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-elegant-body mt-1">
                  Let's stay connected
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <HiX className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </motion.button>
            </div>

            <p className="text-gray-600 dark:text-gray-400 font-elegant-body mb-6">
              Download my CV or connect with me before you go!
            </p>

            <div className="space-y-3">
              {/* Download CV */}
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-300 text-white dark:text-black hover:shadow-lg transition-all"
              >
                <HiDownload className="w-5 h-5" />
                <div className="text-left">
                  <p className="font-elegant-caption font-semibold">Download CV</p>
                  <p className="text-xs opacity-80">Get my resume instantly</p>
                </div>
              </motion.button>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/971588544698"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (window.gtag) {
                    window.gtag('event', 'whatsapp_click_exit_popup');
                  }
                }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700 hover:shadow-lg transition-all"
              >
                <FaWhatsapp className="w-5 h-5 text-green-600 dark:text-green-400" />
                <div className="text-left">
                  <p className="font-elegant-caption font-semibold text-gray-900 dark:text-white">WhatsApp</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">+971 588 544 698</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:ahammedmass24@gmail.com"
                onClick={() => {
                  if (window.gtag) {
                    window.gtag('event', 'email_click_exit_popup');
                  }
                }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all"
              >
                <HiMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div className="text-left">
                  <p className="font-elegant-caption font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">ahammedmass24@gmail.com</p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+971588544698"
                onClick={() => {
                  if (window.gtag) {
                    window.gtag('event', 'phone_click_exit_popup');
                  }
                }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all"
              >
                <HiPhone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <div className="text-left">
                  <p className="font-elegant-caption font-semibold text-gray-900 dark:text-white">Phone</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">+971 588 544 698</p>
                </div>
              </motion.a>
            </div>

            <p className="text-xs text-center text-gray-500 dark:text-gray-500 mt-6 font-elegant-caption">
              ✨ I'd love to hear from you!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
