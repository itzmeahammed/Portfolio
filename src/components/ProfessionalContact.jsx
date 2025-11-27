import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiClock,
  HiCheckCircle,
  HiArrowRight,
  HiSparkles
} from 'react-icons/hi';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaTelegram
} from 'react-icons/fa';

const ProfessionalContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form or show success message
      console.log('Form submitted:', formData);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: "Email",
      value: "ahammedmass24@gmail.com",
      href: "mailto:ahammedmass24@gmail.com",
      color: "from-red-400 to-red-600"
    },
    {
      icon: HiPhone,
      label: "Phone",
      value: "+971 588 544 698",
      href: "tel:+971588544698",
      color: "from-green-400 to-green-600"
    },
    {
      icon: HiLocationMarker,
      label: "Location",
      value: "Dubai, United Arab Emirates",
      href: "#",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: HiClock,
      label: "Availability",
      value: "Available for new projects",
      href: "#",
      color: "from-purple-400 to-purple-600"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      href: "https://github.com/itzmeahammed",
      color: "hover:text-gray-900",
      followers: "150+"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ahammed-s-5161b7288/",
      color: "hover:text-blue-600",
      followers: "500+"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      href: "https://twitter.com/itzmeahammed",
      color: "hover:text-blue-400",
      followers: "200+"
    },
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      href: "https://wa.me/971588544698",
      color: "hover:text-green-500",
      followers: "Direct"
    },
    {
      icon: FaTelegram,
      name: "Telegram",
      href: "https://t.me/itzmeahammed",
      color: "hover:text-blue-500",
      followers: "Direct"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Scrolling Email Header */}
      <motion.div
        className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex items-center space-x-8 text-white whitespace-nowrap"
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              <HiMail className="w-5 h-5" />
              <span className="font-elegant-caption">ahammedmass24@gmail.com</span>
              <span className="text-gray-400">•</span>
              <span className="font-elegant-caption">Available for Projects</span>
              <span className="text-gray-400">•</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 pt-16">
        <motion.div
          className="absolute top-32 left-20 w-40 h-40 bg-gradient-to-r from-coral-400/10 to-rose-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-teal-400/10 to-amber-400/10 rounded-full blur-2xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full border border-gray-200 shadow-lg mb-6"
          >
            <span className="text-sm font-elegant-caption text-gray-700">💬 Let's Connect</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-elegant-heading text-gray-900 mb-6"
          >
            Ready to{' '}
            <motion.span
              className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Work Together?
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-elegant-body text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            I'm always excited to discuss new opportunities, collaborate on innovative projects,
            or simply have a conversation about technology and development.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-elegant-heading text-gray-900 mb-4">
                Send me a message
              </h3>
              <p className="text-gray-600 font-elegant-body">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-elegant-caption text-gray-700 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-gray-800 focus:outline-none transition-colors duration-200 font-elegant-body"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-elegant-caption text-gray-700 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-gray-800 focus:outline-none transition-colors duration-200 font-elegant-body"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-sm font-elegant-caption text-gray-700 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-gray-800 focus:outline-none transition-colors duration-200 font-elegant-body"
                  placeholder="Project Discussion"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-sm font-elegant-caption text-gray-700 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-gray-800 focus:outline-none transition-colors duration-200 font-elegant-body resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-elegant-caption shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <HiSparkles className="w-5 h-5" />
                    <span>Send Message</span>
                    <HiArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div>
              <h3 className="text-2xl font-elegant-heading text-gray-900 mb-6">
                Get in touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 group"
                  >
                    <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg text-white group-hover:scale-110 transition-transform duration-200`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-elegant-caption text-gray-500 uppercase tracking-wide">
                        {info.label}
                      </div>
                      <div className="text-gray-900 font-elegant-body font-medium">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200"
            >
              <div className="flex items-center space-x-3 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                />
                <span className="text-green-800 font-elegant-caption font-semibold">
                  Available for New Projects
                </span>
              </div>
              <p className="text-green-700 font-elegant-body text-sm">
                I'm currently accepting new freelance projects and full-time opportunities.
                Let's discuss how we can work together!
              </p>
            </motion.div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-elegant-heading text-gray-900 mb-4">
                Connect with me
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center space-y-2 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 group ${social.color}`}
                  >
                    <social.icon className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-transform duration-200" />
                    <div className="text-center">
                      <div className="text-sm font-elegant-caption text-gray-900 font-medium">
                        {social.name}
                      </div>
                      <div className="text-xs font-elegant-body text-gray-500">
                        {social.followers}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalContact;
