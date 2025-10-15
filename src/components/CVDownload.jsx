import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiDownload, HiDocument, HiCheck, HiX, HiEye } from 'react-icons/hi';
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
      color: 'text-red-500',
      size: '1.2 MB',
      description: 'Professional PDF format'
    },
    word: {
      name: 'Ahammed_S_CV.docx',
      icon: FaFileWord,
      color: 'text-blue-500',
      size: '1.8 MB',
      description: 'Editable Word document (PDF will be downloaded)'
    }
  };

  const handleDownload = async (format = selectedFormat) => {
    setIsDownloading(true);
    setDownloadComplete(false);

    // Simulate download process with realistic timing
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Trigger the actual file download
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = format === 'pdf' ? 'Ahammed_S_CV.pdf' : 'Ahammed_S_CV.docx';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsDownloading(false);
    setDownloadComplete(true);

    // Reset after showing success
    setTimeout(() => {
      setDownloadComplete(false);
    }, 3000);
  };

  const handlePreview = () => {
    // Open CV in a new tab for preview
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
          className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white text-white dark:text-black rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
          whileHover={{
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-800/20 dark:from-gray-300/20 dark:to-gray-100/20"
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
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <FaSpinner className="w-6 h-6" />
                </motion.div>
              ) : downloadComplete ? (
                <motion.div
                  key="complete"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <HiCheck className="w-6 h-6 text-green-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="download"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <HiDownload className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>

            <span className="font-bold">
              {isDownloading ? 'Downloading...' : downloadComplete ? 'Downloaded!' : 'Download CV'}
            </span>
          </div>

          {/* Progress bar for download */}
          {isDownloading && (
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          )}
        </motion.button>

        {/* Floating particles effect */}
        <AnimatePresence>
          {downloadComplete && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-green-400 rounded-full"
                  initial={{
                    x: '50%',
                    y: '50%',
                    scale: 0,
                    opacity: 1
                  }}
                  animate={{
                    x: `${50 + (Math.random() - 0.5) * 200}%`,
                    y: `${50 + (Math.random() - 0.5) * 200}%`,
                    scale: [0, 1, 0],
                    opacity: [1, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Format Selection & Additional Options */}
      <motion.div
        className="mt-4 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* Format Selection */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Format:</span>
          {Object.entries(cvFormats).map(([format, data]) => (
            <motion.button
              key={format}
              onClick={() => setSelectedFormat(format)}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                selectedFormat === format
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <data.icon className={`w-4 h-4 ${data.color}`} />
              <span className="uppercase font-medium">{format}</span>
            </motion.button>
          ))}
        </div>

        {/* Preview Button */}
        <motion.button
          onClick={handlePreview}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HiEye className="w-4 h-4" />
          <span className="text-sm font-medium">Preview</span>
        </motion.button>
      </motion.div>

      {/* CV Info Card */}
      <motion.div
        className="mt-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <HiDocument className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {cvFormats[selectedFormat].name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {cvFormats[selectedFormat].description} • {cvFormats[selectedFormat].size}
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Latest Version</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Updated Dec 2024</p>
          </div>
        </div>

        {/* CV Highlights */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">CV Highlights:</p>
          <div className="flex flex-wrap gap-2">
            {[
              '2+ Years Experience',
              '50+ Projects',
              'AI/ML Specialist',
              'Full Stack Developer',
              '100% Client Satisfaction'
            ].map((highlight, index) => (
              <motion.span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {highlight}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Preview Modal Overlay */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiEye className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  CV Preview
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  CV preview functionality will be available soon. For now, you can download the full CV using the download button.
                </p>
                <motion.button
                  onClick={() => setShowPreview(false)}
                  className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CVDownload;
