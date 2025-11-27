import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiMail, HiHeart, HiPhone } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/itzmeahammed", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ahammed-s-5161b7288/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" }
  ];

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
              Ahammed<span className="text-gray-400">.dev</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm">
              Crafting digital experiences with code and creativity.
              Specializing in scalable web applications and AI integration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:ahammedmass24@gmail.com" className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <HiMail /> ahammedmass24@gmail.com
                </a>
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Dubai, United Arab Emirates
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            © {currentYear} Ahammed. Made with <HiHeart className="text-red-500" /> and React.
          </p>

          <div className="flex gap-6">
            <a href="tel:+971588544698" className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <HiPhone /> +971 588 544 698
            </a>
            <a href="https://github.com/itzmeahammed" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ahammed-s-5161b7288/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
