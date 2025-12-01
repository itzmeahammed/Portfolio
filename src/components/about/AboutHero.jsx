import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HiMail, HiLocationMarker, HiPhone, HiArrowRight, HiDownload } from 'react-icons/hi';
import profileImage from '../../assets/image.png';
import cvFile from '../../assets/Ahammed S.pdf (5) (1).pdf';
import CVDownload from '../CVDownload';

const AboutHero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-24 lg:py-36 overflow-hidden bg-white dark:bg-black">
            {/* Subtle Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50"></div>
            </div>

            {/* Ambient Glow - Monochrome/Amber */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-gray-100/50 to-transparent dark:from-gray-900/50 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-amber-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Content Column - Editorial Style (Now Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="w-full lg:w-7/12 text-center lg:text-left space-y-10 order-2 lg:order-1"
                    >
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="inline-flex items-center gap-3 justify-center lg:justify-start"
                            >
                                <span className="w-12 h-[1px] bg-amber-500"></span>
                                <span className="text-sm font-medium text-amber-600 dark:text-amber-500 uppercase tracking-widest">Available for Hire</span>
                            </motion.div>

                            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-elegant-heading tracking-tight text-gray-900 dark:text-white leading-[0.9]">
                                I'm <br />
                                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-400 dark:to-white">
                                    Ahammed
                                </span>
                            </h1>

                            <h2 className="text-2xl sm:text-3xl font-light text-gray-500 dark:text-gray-400">
                                Full Stack Developer <span className="mx-2 text-gray-300 dark:text-gray-700">|</span> AI Specialist
                            </h2>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light border-l-0 lg:border-l-2 border-gray-200 dark:border-gray-800 lg:pl-6">
                            Architecting <span className="font-medium text-gray-900 dark:text-white">intelligent digital ecosystems</span>.
                            I merge robust engineering with cutting-edge AI to build scalable solutions that define the future of web technology.
                        </p>

                        {/* Minimalist Contact Grid */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <a href="mailto:ahammedmass24@gmail.com" className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors">
                                <HiMail className="text-lg" /> ahammedmass24@gmail.com
                            </a>
                            <div className="flex items-center gap-2">
                                <HiLocationMarker className="text-lg" /> Dubai, UAE
                            </div>
                            <a href="tel:+971588544698" className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors">
                                <HiPhone className="text-lg" /> +971 588544698
                            </a>
                        </div>

                        {/* Actions - High Contrast */}
                        <div className="flex flex-col sm:flex-row items-start justify-center lg:justify-start gap-6 pt-8">
                            <CVDownload />

                            <button
                                onClick={() => navigate('/contact')}
                                className="group px-8 py-4 bg-transparent border border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold text-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 flex items-center gap-3"
                            >
                                Let's Talk
                                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Image Column - Minimalist & Sharp (Now Right) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-5/12 flex justify-center lg:justify-start relative order-1 lg:order-2"
                    >
                        <div className="relative w-72 h-72 sm:w-96 sm:h-96 group">
                            {/* Geometric Frame */}
                            <div className="absolute inset-0 border border-gray-200 dark:border-gray-800 rounded-[2rem] rotate-3 transition-transform duration-700 group-hover:rotate-6" />
                            <div className="absolute inset-0 border border-gray-200 dark:border-gray-800 rounded-[2rem] -rotate-3 transition-transform duration-700 group-hover:-rotate-6" />

                            {/* Main Image */}
                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-out">
                                <img
                                    src={profileImage}
                                    alt="Ahammed - Full Stack Developer"
                                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>

                            {/* Minimalist Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute -bottom-6 -left-6 bg-white dark:bg-black p-6 rounded-none border border-gray-100 dark:border-gray-800 shadow-2xl flex flex-col items-start gap-1"
                            >
                                <span className="text-4xl font-bold text-gray-900 dark:text-white font-elegant-heading">3.5+</span>
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">Years Exp.</span>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutHero;
