import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiX, HiMail } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const ScrollTriggeredPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      // Trigger at 50% scroll and only once
      if (scrollPercentage >= 50 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);

        if (window.gtag) {
          window.gtag('event', 'scroll_popup_triggered', { scroll_depth: '50%' });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTriggered]);

  const handleClose = () => {
    setIsOpen(false);
    if (window.gtag) {
      window.gtag('event', 'scroll_popup_closed');
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      if (window.gtag) {
        window.gtag('event', 'email_signup', {
          email_domain: email.split('@')[1] || 'unknown',
        });
      }
      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-elegant-heading text-gray-900 dark:text-white">
                {isSubmitted ? '🎉 Success!' : 'Interested?'}
              </h3>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <HiX className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </motion.button>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                <p className="text-gray-600 dark:text-gray-400 font-elegant-body mb-2">
                  Thanks for your interest! I'll be in touch soon.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Check your email for updates!
                </p>
              </motion.div>
            ) : (
              <>
                <p className="text-gray-600 dark:text-gray-400 font-elegant-body mb-6">
                  Let's stay connected! Get updates about my latest projects and opportunities.
                </p>

                <form onSubmit={handleEmailSubmit} className="space-y-4 mb-6">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-200 font-elegant-body"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-300 text-white dark:text-black rounded-lg font-elegant-caption font-semibold transition-all"
                  >
                    Subscribe
                  </motion.button>
                </form>

                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                      or connect directly
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <motion.a
                    href="https://wa.me/971588544698"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (window.gtag) {
                        window.gtag('event', 'whatsapp_click_scroll_popup');
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:shadow-lg transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span className="font-elegant-caption text-sm">WhatsApp</span>
                  </motion.a>
                  <motion.a
                    href="mailto:ahammedmass24@gmail.com"
                    onClick={() => {
                      if (window.gtag) {
                        window.gtag('event', 'email_click_scroll_popup');
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:shadow-lg transition-all"
                  >
                    <HiMail className="w-4 h-4" />
                    <span className="font-elegant-caption text-sm">Email</span>
                  </motion.a>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollTriggeredPopup;
