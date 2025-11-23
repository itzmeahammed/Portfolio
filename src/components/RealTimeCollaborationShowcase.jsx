import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
    HiUserGroup, HiServer, HiLightningBolt, HiCode, HiChatAlt2, HiGlobeAlt
} from 'react-icons/hi';

const RealTimeCollaborationShowcase = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    // Simulation Steps
    const steps = [
        {
            id: 'connect',
            title: 'WebSocket Handshake',
            description: 'Establishing persistent bi-directional connection.',
            icon: HiGlobeAlt,
            color: 'text-yellow-500'
        },
        {
            id: 'sync',
            title: 'State Synchronization',
            description: 'Broadcasting operational transforms (OT) to all clients.',
            icon: HiLightningBolt,
            color: 'text-orange-500'
        },
        {
            id: 'conflict',
            title: 'Conflict Resolution',
            description: 'Merging concurrent edits using CRDT algorithms.',
            icon: HiCode,
            color: 'text-red-500'
        }
    ];

    // Auto-play simulation
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Simulate typing effect
    useEffect(() => {
        if (activeStep === 1) {
            setIsTyping(true);
            const timeout = setTimeout(() => {
                setMessages(prev => [...prev, { id: Date.now(), text: 'Update received!', user: 'User B' }]);
                setIsTyping(false);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [activeStep]);

    return (
        <section className="py-20 bg-white dark:bg-black overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-bold mb-4"
                    >
                        Real-Time Engineering
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Live Collaboration Engine
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Architecting high-concurrency systems with WebSockets, CRDTs, and Event-Driven Architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Interactive Visualization */}
                    <div className="relative">
                        {/* Server Core */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gray-900 dark:bg-gray-800 rounded-full flex items-center justify-center z-20 border-4 border-yellow-500 shadow-[0_0_50px_rgba(234,179,8,0.3)]">
                            <HiServer className="w-16 h-16 text-white" />
                            <div className="absolute -bottom-8 text-xs font-mono text-gray-500">Socket Server</div>
                        </div>

                        {/* User A */}
                        <motion.div
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-10 w-48"
                            animate={{ x: activeStep === 1 ? 20 : 0 }}
                        >
                            <div className="flex items-center gap-2 mb-2 border-b border-gray-100 dark:border-gray-800 pb-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
                                <div className="text-sm font-bold text-gray-900 dark:text-white">User A</div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded w-3/4"></div>
                                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded w-1/2"></div>
                                {activeStep === 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        className="h-2 bg-blue-500 rounded"
                                    />
                                )}
                            </div>
                        </motion.div>

                        {/* User B */}
                        <motion.div
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-10 w-48"
                            animate={{ x: activeStep === 1 ? -20 : 0 }}
                        >
                            <div className="flex items-center gap-2 mb-2 border-b border-gray-100 dark:border-gray-800 pb-2">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">B</div>
                                <div className="text-sm font-bold text-gray-900 dark:text-white">User B</div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded w-3/4"></div>
                                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded w-1/2"></div>
                                {messages.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="h-2 bg-green-500 rounded w-full"
                                    />
                                )}
                            </div>
                        </motion.div>

                        {/* Data Packets */}
                        <svg className="w-full h-[400px] visible">
                            {/* Connection Lines */}
                            <path d="M 100 200 L 300 200" stroke="currentColor" className="text-gray-200 dark:text-gray-800" strokeWidth="2" strokeDasharray="4 4" />
                            <path d="M 500 200 L 300 200" stroke="currentColor" className="text-gray-200 dark:text-gray-800" strokeWidth="2" strokeDasharray="4 4" />

                            {/* Moving Packet A -> Server */}
                            {activeStep === 1 && (
                                <motion.circle
                                    r="6"
                                    fill="#3B82F6"
                                    initial={{ cx: 100, cy: 200 }}
                                    animate={{ cx: 300, cy: 200 }}
                                    transition={{ duration: 0.5, ease: "linear" }}
                                />
                            )}

                            {/* Moving Packet Server -> B */}
                            {activeStep === 1 && (
                                <motion.circle
                                    r="6"
                                    fill="#22C55E"
                                    initial={{ cx: 300, cy: 200 }}
                                    animate={{ cx: 500, cy: 200 }}
                                    transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
                                />
                            )}
                        </svg>
                    </div>

                    {/* Right: Steps & Code */}
                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-6 rounded-2xl border transition-all duration-300 ${activeStep === index
                                        ? 'bg-gray-50 dark:bg-gray-900 border-yellow-500 shadow-lg scale-105'
                                        : 'bg-transparent border-gray-100 dark:border-gray-800 opacity-50'
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-lg bg-white dark:bg-black shadow-sm ${step.color}`}>
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RealTimeCollaborationShowcase;
