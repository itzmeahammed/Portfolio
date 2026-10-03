import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiX, HiDownload, HiArrowRight, HiChatAlt2, HiCode, HiBriefcase, HiMail } from 'react-icons/hi';
import cvFile from '../assets/Ahammed_CV.pdf';

const FirstVisitWelcomePopup = ({ onPopupStateChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('portfolioWelcomeShown')) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      localStorage.setItem('portfolioWelcomeShown', 'true');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (onPopupStateChange) {
      onPopupStateChange(isOpen);
    }
  }, [isOpen, onPopupStateChange]);

  // Lock page scroll and allow closing with Escape while the popup is open
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  const goTo = (path) => {
    close();
    if (path) navigate(path);
  };

  const quickLinks = [
    { icon: HiBriefcase, title: 'Experience', desc: 'AI automation & CRM work', path: '/about' },
    { icon: HiCode, title: 'Projects', desc: 'Live project showcase', path: '/projects' },
    { icon: HiChatAlt2, title: 'AI Chatbot', desc: 'Ask about my work', path: null },
    { icon: HiMail, title: 'Contact', desc: 'Get in touch with me', path: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm sm:p-4"
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-popup-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-lg max-h-[90dvh] overflow-y-auto bg-white dark:bg-gray-900 rounded-t-3xl sm:rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

            {/* Close Button */}
            <button
              type="button"
              onClick={close}
              aria-label="Close welcome popup"
              className="absolute top-3 right-3 z-20 flex items-center justify-center w-11 h-11 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <HiX className="w-6 h-6" />
            </button>

            <div className="px-5 pt-8 pb-6 sm:px-8 sm:pt-10 sm:pb-8">
              {/* Header */}
              <div className="pr-10">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-8 h-[1px] bg-amber-500"></span>
                  <span className="text-xs font-medium text-amber-600 dark:text-amber-500 uppercase tracking-widest">Welcome</span>
                </div>
                <h2 id="welcome-popup-title" className="text-2xl sm:text-3xl font-bold font-elegant-heading text-gray-900 dark:text-white leading-tight">
                  Hi, I'm Ahammed
                </h2>
                <p className="mt-1 text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400">
                  AI Automation Specialist <span className="mx-1 text-gray-300 dark:text-gray-700">|</span> Full Stack Developer
                </p>
                <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  I build end-to-end AI automation across CRM, WhatsApp, websites and APIs. Have a look around.
                </p>
              </div>

              {/* Quick links */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {quickLinks.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => goTo(item.path)}
                    className="group flex items-center sm:items-start gap-3 p-3 sm:p-4 rounded-2xl text-left bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 hover:border-amber-500/40 hover:shadow-md transition-all"
                  >
                    <span className="flex items-center justify-center w-9 h-9 flex-shrink-0 rounded-xl bg-white dark:bg-black border border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 group-hover:text-amber-500 transition-colors">
                      <item.icon className="w-5 h-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-gray-900 dark:text-white">{item.title}</span>
                      <span className="hidden sm:block text-xs text-gray-500 dark:text-gray-400">{item.desc}</span>
                    </span>
                  </button>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={cvFile}
                  download="Ahammed_CV.pdf"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition-opacity"
                >
                  <HiDownload className="w-5 h-5" />
                  Download CV
                </a>
                <button
                  type="button"
                  onClick={close}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Explore Portfolio
                  <HiArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FirstVisitWelcomePopup;
