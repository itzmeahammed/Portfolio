import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
    HiShieldCheck, HiLockClosed, HiKey, HiFingerPrint, HiEye, HiDatabase
} from 'react-icons/hi';

const SecurityArchitectureShowcase = () => {
    const [attackSimulated, setAttackSimulated] = useState(false);
    const [securityScore, setSecurityScore] = useState(100);

    const layers = [
        { id: 'waf', name: 'WAF & DDoS Protection', icon: HiShieldCheck, color: 'text-emerald-500' },
        { id: 'auth', name: 'OAuth 2.0 / JWT', icon: HiKey, color: 'text-teal-500' },
        { id: 'encryption', name: 'End-to-End Encryption', icon: HiLockClosed, color: 'text-cyan-500' },
        { id: 'audit', name: 'Real-time Audit Logs', icon: HiEye, color: 'text-blue-500' },
    ];

    const simulateAttack = () => {
        setAttackSimulated(true);
        setSecurityScore(40); // Drop score momentarily
        setTimeout(() => {
            setSecurityScore(100); // Recover
            setAttackSimulated(false);
        }, 3000);
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50 overflow-hidden relative">
            {/* Matrix Background Effect */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-emerald-500 font-mono text-xs"
                        initial={{ top: -20, left: `${i * 5}%` }}
                        animate={{ top: '100%' }}
                        transition={{
                            duration: Math.random() * 5 + 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                    >
                        {Math.random().toString(36).substring(2, 15)}
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-bold mb-4"
                    >
                        Cybersecurity & Compliance
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Fortress Architecture
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Implementing defense-in-depth strategies to secure data, identity, and infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left: Security Dashboard */}
                    <div className="lg:col-span-7">
                        <div className="bg-white dark:bg-black rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6 relative overflow-hidden">
                            {/* Attack Overlay */}
                            <AnimatePresence>
                                {attackSimulated && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 bg-red-500/20 z-20 flex items-center justify-center backdrop-blur-sm"
                                    >
                                        <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold animate-pulse">
                                            THREAT DETECTED - BLOCKING
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <HiFingerPrint className="text-emerald-500" /> Security Status
                                </h3>
                                <div className="flex items-center gap-2">
                                    <span className={`w-3 h-3 rounded-full ${attackSimulated ? 'bg-red-500 animate-ping' : 'bg-emerald-500'}`}></span>
                                    <span className="text-sm font-mono text-gray-500">{attackSimulated ? 'UNDER ATTACK' : 'SECURE'}</span>
                                </div>
                            </div>

                            {/* Layers Visualization */}
                            <div className="space-y-4 relative">
                                {layers.map((layer, index) => (
                                    <motion.div
                                        key={layer.id}
                                        className="relative z-10 bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center justify-between group hover:border-emerald-500/50 transition-colors"
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-lg bg-white dark:bg-black shadow-sm ${layer.color}`}>
                                                <layer.icon className="w-6 h-6" />
                                            </div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">{layer.name}</span>
                                        </div>

                                        {/* Animated Shield Line */}
                                        <div className="h-1 w-24 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full ${attackSimulated ? 'bg-red-500' : 'bg-emerald-500'}`}
                                                animate={{ width: attackSimulated ? '100%' : '100%' }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Connecting Line */}
                                <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-emerald-500/20 to-transparent -z-0"></div>
                            </div>

                            {/* Database Vault */}
                            <div className="mt-8 p-4 bg-gray-900 rounded-xl border border-gray-800 flex items-center justify-center gap-4">
                                <HiDatabase className="text-gray-500 w-8 h-8" />
                                <div className="text-center">
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">Data Vault</div>
                                    <div className="text-emerald-500 font-mono text-sm">AES-256 ENCRYPTED</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Controls & Stats */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-white dark:bg-black p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-4">System Integrity</h4>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200">
                                            Score
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-semibold inline-block text-emerald-600">
                                            {securityScore}%
                                        </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-emerald-200">
                                    <motion.div
                                        style={{ width: `${securityScore}%` }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500 transition-all duration-500"
                                    ></motion.div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-black p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Threat Simulation</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                                Test the resilience of the architecture against simulated DDoS and injection attacks.
                            </p>
                            <button
                                onClick={simulateAttack}
                                disabled={attackSimulated}
                                className={`w-full py-3 rounded-xl font-bold text-white transition-all ${attackSimulated
                                    ? 'bg-gray-500 cursor-not-allowed'
                                    : 'bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-red-500/30'
                                    }`}
                            >
                                {attackSimulated ? 'Mitigating Threat...' : 'Simulate Cyber Attack'}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SecurityArchitectureShowcase;
