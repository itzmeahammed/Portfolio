import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiPhone, HiLocationMarker, HiUser, HiChat, HiPaperAirplane, HiCheckCircle } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { sendContactEmail, validateContactForm } from '../utils/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [infoRef, infoInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form data using utility function
      const validation = validateContactForm(formData);
      if (!validation.isValid) {
        const errorMessages = Object.values(validation.errors).join('\n');
        alert(`Please fix the following errors:\n\n${errorMessages}`);
        setIsSubmitting(false);
        return;
      }

      // Simulate processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Send email using the email service
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        // Success - show confirmation and reset form
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
        
        // Show success message with method used
        console.log(`Email sent successfully using ${result.method}`);
      } else {
        throw new Error(result.error || 'Failed to send email');
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
      setIsSubmitting(false);
      
      // Show user-friendly error message
      alert(
        'There was an error sending your message. Please try one of these alternatives:\n\n' +
        '1. Email me directly at: ahammedmass24@gmail.com\n' +
        '2. Connect with me on LinkedIn\n' +
        '3. Try submitting the form again\n\n' +
        'I apologize for the inconvenience!'
      );
    }
  };

  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      value: 'ahammedmass24@gmail.com',
      href: 'mailto:ahammedmass24@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: HiPhone,
      title: 'Phone',
      value: '+971 588544698',
      href: 'tel:+971588544698',
      description: 'Call me during business hours'
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      value: 'Dubai, United Arab Emirates',
      href: '#',
      description: 'Dubai, United Arab Emirates'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub', color: 'hover:text-gray-600' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-gray-700' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-gray-800' },
  ];

  const services = [
    'Full Stack Web Development',
    'Mobile App Development (React Native & Flutter)',
    'AI/ML Integration & Development',
    'Database Design & Optimization',
    'API Development & Integration',
    'Cloud Deployment & DevOps',
    'UI/UX Design & Prototyping',
    'Technical Consulting & Code Review'
  ];

  const quickFacts = [
    { label: 'Experience', value: '2+ Years' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Current Role', value: 'Full Stack Developer' },
    { label: 'Specialization', value: 'AI-Integrated Solutions' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-center space-y-8"
          >
            <motion.div variants={itemVariants}>
              <HiChat className="w-16 h-16 text-black dark:text-white mx-auto mb-6" />
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-elegant-heading text-black dark:text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-elegant-body">
                Ready to bring your ideas to life? Let's discuss your next project and create 
                something amazing together. I'm always excited to work on innovative solutions.
              </p>
            </motion.div>

            {/* Quick Contact */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="mailto:your.email@example.com"
                className="group px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiMail className="w-5 h-5" />
                <span>Send Email</span>
              </motion.a>
              <motion.a
                href="tel:+91XXXXXXXXX"
                className="group px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-semibold text-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiPhone className="w-5 h-5" />
                <span>Call Now</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              variants={containerVariants}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-elegant-heading text-black dark:text-white mb-4">Send Me a Message</h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-elegant-body">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </motion.div>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center space-x-3"
                >
                  <HiCheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <div>
                    <h3 className="font-semibold text-green-800 dark:text-green-200">Message Sent Successfully!</h3>
                    <p className="text-green-600 dark:text-green-400">Thank you for reaching out. I'll respond within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs sm:text-sm font-elegant-caption text-black dark:text-white">
                      Full Name *
                    </label>
                    <div className="relative">
                      <HiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-900 border-2 border-black/20 dark:border-white/20 rounded-xl text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-elegant-caption text-black dark:text-white">
                      Email Address *
                    </label>
                    <div className="relative">
                      <HiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-900 border-2 border-black/20 dark:border-white/20 rounded-xl text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-elegant-caption text-black dark:text-white">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-900 border-2 border-black/20 dark:border-white/20 rounded-xl text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-elegant-caption text-black dark:text-white">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-900 border-2 border-black/20 dark:border-white/20 rounded-xl text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-black dark:focus:border-white focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              ref={infoRef}
              variants={containerVariants}
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-elegant-heading text-black dark:text-white mb-4">Contact Information</h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-elegant-body">
                  Prefer direct contact? Reach out through any of these channels.
                </p>
              </motion.div>

              {/* Contact Methods */}
              <motion.div variants={itemVariants} className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.title}
                    href={contact.href}
                    className="block p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-black dark:bg-white rounded-lg group-hover:scale-110 transition-transform">
                        <contact.icon className="w-6 h-6 text-white dark:text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black dark:text-white">{contact.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">{contact.value}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{contact.description}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-xl font-bold text-black dark:text-white">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <social.icon className="w-6 h-6 text-black dark:text-white" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Facts */}
              <motion.div variants={itemVariants} className="p-6 bg-black dark:bg-white rounded-xl">
                <h3 className="text-xl font-bold text-white dark:text-black mb-4">Quick Facts</h3>
                <div className="grid grid-cols-2 gap-4">
                  {quickFacts.map((fact, index) => (
                    <div key={fact.label} className="text-center">
                      <p className="text-2xl font-bold text-white dark:text-black">{fact.value}</p>
                      <p className="text-gray-300 dark:text-gray-700 text-sm">{fact.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-6">Services I Offer</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Comprehensive development services to bring your ideas to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  className="p-6 bg-white dark:bg-black rounded-xl border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{service}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black dark:bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white dark:text-black">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-700 max-w-3xl mx-auto">
              Let's turn your vision into reality. I'm here to help you build something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="mailto:your.email@example.com"
                className="px-8 py-4 bg-white dark:bg-black text-black dark:text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
              </motion.a>
              <motion.a
                href="#"
                className="px-8 py-4 border-2 border-white dark:border-black text-white dark:text-black rounded-full font-semibold text-lg hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
