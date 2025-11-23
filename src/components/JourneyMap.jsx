import { motion } from 'framer-motion';
import { HiAcademicCap, HiBriefcase, HiCode, HiStar } from 'react-icons/hi';

const JourneyMap = () => {
    const milestones = [
        {
            year: '2023',
            title: 'Full Stack Beginnings',
            description: 'Started the journey with MERN stack, building robust web applications and mastering the fundamentals of scalable architecture.',
            icon: HiCode,
            color: 'bg-blue-500',
            align: 'left'
        },
        {
            year: '2024',
            title: 'Freelance & Open Source',
            description: 'Delivered 50+ projects for global clients. Contributed to major open-source repositories, sharpening skills in React & Node.js.',
            icon: HiBriefcase,
            color: 'bg-purple-500',
            align: 'right'
        },
        {
            year: '2025',
            title: 'AI & Cloud Engineering',
            description: 'Pioneering AI-integrated solutions. Architecting cloud-native systems on AWS and deploying autonomous agents.',
            icon: HiStar,
            color: 'bg-cyan-500',
            align: 'left'
        },
        {
            year: 'Future',
            title: 'Next Gen Tech',
            description: 'Exploring Quantum Computing interfaces and Web3 decentralized protocols to build the internet of tomorrow.',
            icon: HiAcademicCap,
            color: 'bg-emerald-500',
            align: 'right'
        }
    ];

    return (
        <section className="py-32 bg-gray-50 dark:bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Journey</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A timeline of continuous evolution, learning, and engineering excellence.
                    </p>
                </div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800">
                        <motion.div
                            className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "linear" }}
                        />
                    </div>

                    <div className="space-y-24">
                        {milestones.map((item, index) => (
                            <div key={index} className={`flex items-center justify-between w-full ${item.align === 'right' ? 'flex-row-reverse' : ''}`}>

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="w-5/12"
                                >
                                    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 transition-colors group">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`px-4 py-1 rounded-full text-xs font-bold text-white ${item.color}`}>
                                                {item.year}
                                            </span>
                                            <item.icon className={`w-6 h-6 ${item.color.replace('bg-', 'text-')}`} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Center Node */}
                                <div className="relative z-10 w-12 h-12 rounded-full bg-white dark:bg-black border-4 border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-lg">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, type: "spring" }}
                                        className={`w-4 h-4 rounded-full ${item.color}`}
                                    />
                                </div>

                                {/* Empty Space for alignment */}
                                <div className="w-5/12"></div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default JourneyMap;
