import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const AboutCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="py-24">
            <div className="container-custom text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold font-elegant-heading text-gray-900 dark:text-white">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Ready to bring your ideas to life? Let's discuss your next project and create something amazing.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/contact')}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                    >
                        Start a Project
                        <HiArrowRight className="text-xl" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutCTA;
