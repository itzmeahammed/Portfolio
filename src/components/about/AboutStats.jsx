import { motion } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi';

const AboutStats = () => {
    return (
        <section className="py-20 bg-white dark:bg-black border-y border-gray-100 dark:border-gray-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-gray-900 p-12 text-center shadow-2xl border border-gray-100 dark:border-gray-800 group">
                        {/* Decorative Background - Amber Theme */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-700" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-700" />

                        <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
                            <div className="w-20 h-20 bg-gray-50 dark:bg-black rounded-2xl flex items-center justify-center shadow-inner border border-gray-100 dark:border-gray-800 text-amber-600 dark:text-amber-500 group-hover:scale-110 transition-transform duration-500">
                                <HiBriefcase className="w-10 h-10" />
                            </div>

                            <div className="space-y-2">
                                <h2 className="text-6xl md:text-7xl font-bold font-elegant-heading text-gray-900 dark:text-white tracking-tight">
                                    3.5+ <span className="text-2xl md:text-3xl text-gray-400 font-light">Years</span>
                                </h2>
                                <p className="text-xl text-amber-600 dark:text-amber-500 font-medium tracking-wide uppercase">
                                    Total Professional Experience
                                </p>
                            </div>

                            <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
                                Combining <span className="font-semibold text-gray-900 dark:text-white">1.5+ years</span> of corporate industry expertise with <span className="font-semibold text-gray-900 dark:text-white">3+ years</span> of high-level freelance projects.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutStats;
