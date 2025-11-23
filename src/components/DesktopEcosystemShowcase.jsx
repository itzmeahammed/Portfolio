import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
    HiDesktopComputer, HiServer, HiCloud, HiCode, HiShieldCheck, HiDatabase, HiTerminal, HiLightningBolt, HiCube
} from 'react-icons/hi';

const DesktopEcosystemShowcase = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            id: 'frontend',
            label: 'Frontend',
            icon: HiDesktopComputer,
            color: 'text-cyan-600 dark:text-cyan-400',
            content: {
                title: 'Modern Frontend Architecture',
                description: 'Building immersive, high-performance user interfaces with state-of-the-art technologies.',
                features: ['React & Next.js Ecosystem', 'State Management (Redux/Zustand)', 'Micro-Frontend Architecture', 'WebGL & 3D Visualizations']
            }
        },
        {
            id: 'backend',
            label: 'Backend',
            icon: HiServer,
            color: 'text-indigo-600 dark:text-indigo-400',
            content: {
                title: 'Scalable Backend Systems',
                description: 'Designing robust, event-driven microservices that handle high concurrency and data throughput.',
                features: ['Node.js & Python Services', 'GraphQL & REST APIs', 'Real-time WebSockets', 'Distributed Systems Design']
            }
        },
        {
            id: 'devops',
            label: 'DevOps',
            icon: HiCloud,
            color: 'text-sky-600 dark:text-sky-400',
            content: {
                title: 'Cloud Native Infrastructure',
                description: 'Automating deployment pipelines and ensuring 99.9% system availability.',
                features: ['Docker & Kubernetes', 'CI/CD Pipelines (GitHub Actions)', 'AWS/Azure Cloud Services', 'Infrastructure as Code (Terraform)']
            }
        }
    ];

    // Auto-rotate tabs
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % tabs.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5 dark:opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Visualization (Desktop Mockup) */}
                    <div className="relative h-[500px] flex items-center justify-center perspective-1000 group">

                        {/* Monitor Stand */}
                        <div className="absolute bottom-10 w-32 h-24 bg-gray-300 dark:bg-gray-800 rounded-lg transform perspective-origin-bottom rotate-x-12 shadow-xl"></div>
                        <div className="absolute bottom-0 w-48 h-4 bg-gray-400 dark:bg-gray-700 rounded-full shadow-lg"></div>

                        {/* Monitor Screen */}
                        <motion.div
                            initial={{ rotateY: -5, rotateX: 2 }}
                            whileHover={{ rotateY: 0, rotateX: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-[500px] h-[320px] bg-gray-900 rounded-xl border-[12px] border-gray-800 shadow-2xl overflow-hidden flex flex-col"
                        >
                            {/* Screen Header */}
                            <div className="h-8 bg-gray-800 flex items-center px-4 gap-2 justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-xs text-gray-500 font-mono">dev_environment.exe</div>
                            </div>

                            {/* Screen Content */}
                            <div className="flex-1 bg-gray-900 p-6 relative overflow-hidden font-mono">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-3"
                                    >
                                        <div className="flex gap-2 text-sm">
                                            <span className="text-pink-400">class</span>
                                            <span className="text-yellow-300">{tabs[activeTab].content.title.split(' ')[1]}Service</span>
                                            <span className="text-white">{'{'}</span>
                                        </div>

                                        {tabs[activeTab].content.features.map((feature, i) => (
                                            <div key={i} className="flex gap-3 text-xs pl-4">
                                                <span className="text-gray-600">{i + 1}</span>
                                                <span className="text-cyan-300">implement</span>
                                                <span className="text-green-300">"{feature}"</span>;
                                            </div>
                                        ))}

                                        <div className="text-white text-sm">{'}'}</div>

                                        <div className="mt-4 pt-4 border-t border-gray-800">
                                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                                Build Successful...
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Scanline Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%] w-full animate-scanline pointer-events-none"></div>
                            </div>
                        </motion.div>

                        {/* Ambient Glow */}
                        <div className={`absolute inset-0 blur-[100px] -z-10 rounded-full opacity-40 transition-colors duration-500 ${activeTab === 0 ? 'bg-cyan-500/20' : activeTab === 1 ? 'bg-indigo-500/20' : 'bg-sky-500/20'
                            }`}></div>
                    </div>

                    {/* Right: Content with Tabs */}
                    <div className="space-y-8">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-4"
                            >
                                <HiTerminal className="text-gray-500 dark:text-gray-400" />
                                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Full Stack Ecosystem</span>
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                                Desktop <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400">Architecture</span>
                            </h2>
                        </div>

                        {/* Tabs Navigation */}
                        <div className="flex space-x-2 bg-gray-100 dark:bg-gray-900 p-1 rounded-xl w-fit">
                            {tabs.map((tab, idx) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === idx
                                            ? 'bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm'
                                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                        }`}
                                >
                                    <tab.icon className={activeTab === idx ? tab.color : ''} />
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Dynamic Content Area */}
                        <div className="relative min-h-[200px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {tabs[activeTab].content.title}
                                        </h3>
                                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {tabs[activeTab].content.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {tabs[activeTab].content.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                                                <div className={`p-2 rounded-lg bg-white dark:bg-black ${tabs[activeTab].color.replace('text-', 'text-opacity-100 text-')}`}>
                                                    <HiLightningBolt size={16} />
                                                </div>
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DesktopEcosystemShowcase;
