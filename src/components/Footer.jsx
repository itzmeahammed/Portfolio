import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiHeart } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/ahammed', label: 'GitHub', color: 'hover:text-gray-700 dark:hover:text-gray-300' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ahammed-s-5161b7288/', label: 'LinkedIn', color: 'hover:text-gray-700 dark:hover:text-gray-300' },
    { icon: FaTwitter, href: 'https://twitter.com/ahammed', label: 'Twitter', color: 'hover:text-gray-700 dark:hover:text-gray-300' },
    { icon: FaInstagram, href: 'https://instagram.com/ahammed', label: 'Instagram', color: 'hover:text-gray-700 dark:hover:text-gray-300' },
  ];

  const contactInfo = [
    { icon: HiMail, text: 'ahammedmass24@gmail.com', href: 'mailto:ahammedmass24@gmail.com' },
    { icon: HiPhone, text: '+971 588544698', href: 'tel:+971588544698' },
    { icon: HiLocationMarker, text: 'Dubai, United Arab Emirates', href: '#' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-gray-200/20 to-gray-300/20 dark:from-gray-700/20 dark:to-gray-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-r from-gray-300/15 to-gray-400/15 dark:from-gray-600/15 dark:to-gray-500/15 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              <motion.h3
                className="text-3xl font-bold bg-gradient-to-r from-gray-800 via-black to-gray-700 dark:from-gray-200 dark:via-white dark:to-gray-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ahammed's Portfolio
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Full Stack Developer passionate about creating innovative solutions and building exceptional digital experiences that make a difference.
              </motion.p>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-black dark:text-white">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-black dark:text-white">Get In Touch</h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.text}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                    <contact.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <span className="text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Crafted with passion ✨ by Ahammed • Powered by innovation 🚀
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
