import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiDownload, HiDocument, HiCheck, HiEye } from 'react-icons/hi';
import { FaFilePdf, FaFileWord, FaSpinner } from 'react-icons/fa';
import cvFile from '../assets/Ahammed S.pdf (5) (1).pdf';

const CVDownload = ({ className = "" }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('pdf');

  // CV data for different formats
  const cvFormats = {
    pdf: {
      name: 'Ahammed_S_CV.pdf',
      icon: FaFilePdf,
      color: 'text-gray-900 dark:text-white',
      size: '1.2 MB',
      description: 'Professional PDF format'
    },
    word: {
      name: 'Ahammed_S_CV.docx',
      icon: FaFileWord,
      color: 'text-gray-900 dark:text-white',
      size: '1.8 MB',
      description: 'Editable Word document'
    }
  };

  const handleDownload = async (format = selectedFormat) => {
    setIsDownloading(true);
    setDownloadComplete(false);

    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Trigger file download
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = format === 'pdf' ? 'Ahammed_S_CV.pdf' : 'Ahammed_S_CV.docx';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsDownloading(false);
    setDownloadComplete(true);

    setTimeout(() => {
      setDownloadComplete(false);
    }, 3000);
  };

  const handlePreview = () => {
    window.open(cvFile, '_blank');
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Download Button */}
      <motion.div
        className="relative group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.button
          onClick={() => handleDownload()}
          disabled={isDownloading}
          className="relative overflow-hidden px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-none font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group border border-transparent hover:border-amber-500/50"
        >
          {/* Animated background sheen */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className="relative z-10 flex items-center space-x-3">
            <AnimatePresence mode="wait">
              {isDownloading ? (
                <motion.div
                  key="downloading"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <FaSpinner className="w-5 h-5" />
                </motion.div>
              ) : downloadComplete ? (
                <motion.div
                  key="complete"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <HiCheck className="w-5 h-5 text-amber-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="download"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <HiDownload className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>

            <span className="tracking-wide">
              {isDownloading ? 'DOWNLOADING...' : downloadComplete ? 'DOWNLOADED' : 'DOWNLOAD CV'}
            </span>
          </div>

          {/* Progress bar */}
          {isDownloading && (
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-amber-500"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          )}
        </motion.button>
      </motion.div>

      {/* Format Selection & Options */}
      <motion.div
        className="mt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center space-x-2">
          {Object.entries(cvFormats).map(([format, data]) => (
            <button
              key={format}
              onClick={() => setSelectedFormat(format)}
              className={`px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors ${selectedFormat === format
                  ? 'text-amber-600 dark:text-amber-500 border-b-2 border-amber-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
            >
              {format}
            </button>
          ))}
        </div>

        <button
          onClick={handlePreview}
          className="flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <HiEye className="w-4 h-4" />
          <span>Preview</span>
        </button>
      </motion.div>

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 p-8 max-w-md w-full border border-gray-200 dark:border-gray-800"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiEye className="w-8 h-8 text-gray-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-elegant-heading">
                  CV Preview
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 font-light">
                  Preview is opening in a new tab...
                </p>
                <button
                  onClick={() => setShowPreview(false)}
                  className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CVDownload;
