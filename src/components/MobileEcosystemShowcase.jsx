import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HiDeviceMobile,
    HiWifi,
    HiLightningBolt,
    HiCode,
    HiCheckCircle
} from 'react-icons/hi';
import { SiFlutter, SiReact, SiAndroid, SiIos, SiFirebase } from 'react-icons/si';

const MobileEcosystemShowcase = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            id: 0,
            title: "Cross-Platform Core",
            icon: SiFlutter,
            color: "text-cyan-400",
            desc: "Single codebase running natively on both iOS and Android with 60fps performance.",
            stats: ["98% Code Share", "Native Performance"]
        },
        {
            id: 1,
            title: "Offline-First Architecture",
            icon: HiWifi,
            color: "text-emerald-400",
            desc: "Robust local databases (Hive/SQLite) ensuring full functionality without internet.",
            stats: ["Background Sync", "Local Caching"]
        },
        {
            id: 2,
            title: "Real-time State Sync",
            icon: HiLightningBolt,
            color: "text-amber-400",
            desc: "Instant data propagation across devices using WebSockets and reactive streams.",
            stats: ["<100ms Latency", "Live Updates"]
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
            {/* Dot Pattern Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20"
                            >
                                <HiDeviceMobile className="text-lime-600 dark:text-lime-400" />
                                <span className="text-sm font-medium text-lime-700 dark:text-lime-300">Mobile Engineering</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
                            >
                                Native Quality <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-500">Everywhere</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
                            >
                                Delivering fluid, high-performance mobile experiences that feel at home on any device.
                            </motion.p>
                        </div>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setActiveFeature(index)}
                                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${activeFeature === index
                                        ? 'bg-gray-100 dark:bg-gray-900 border-lime-500/50 shadow-lg'
                                        : 'bg-transparent border-transparent hover:bg-gray-50 dark:hover:bg-gray-900/50'
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-xl bg-gray-200 dark:bg-gray-800 ${feature.color}`}>
                                            <feature.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{feature.desc}</p>
                                            <div className="flex gap-3">
                                                {feature.stats.map((stat, i) => (
                                                    <span key={i} className="inline-flex items-center text-xs font-medium text-gray-500 dark:text-gray-500 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">
                                                        <HiCheckCircle className="w-3 h-3 mr-1" /> {stat}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual - Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative flex justify-center"
                    >
                        {/* Abstract Shapes */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-lime-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>

                        {/* Phone Frame */}
                        <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden z-10">
                            {/* Dynamic Island */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20"></div>

                            {/* Screen Content */}
                            <div className="w-full h-full bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeFeature}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="p-6 pt-12 h-full flex flex-col"
                                    >
                                        {/* Mock UI Header */}
                                        <div className="flex justify-between items-center mb-8">
                                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                                            <div className="w-24 h-4 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                                        </div>
                                        ``
                                        {/* Mock UI Content */}
                                        <div className="space-y-4 flex-1">
                                            <div className={`w-full h-40 rounded-2xl mb-6 flex items-center justify-center ${activeFeature === 0 ? 'bg-cyan-500/10' :
                                                activeFeature === 1 ? 'bg-emerald-500/10' : 'bg-amber-500/10'
                                                }`}>
                                                {React.createElement(features[activeFeature].icon, {
                                                    className: `w-16 h-16 ${features[activeFeature].color}`
                                                })}
                                            </div>

                                            <div className="w-3/4 h-6 rounded-lg bg-gray-200 dark:bg-gray-800"></div>
                                            <div className="w-full h-24 rounded-xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-4">
                                                <div className="w-1/2 h-4 rounded bg-gray-200 dark:bg-gray-700 mb-2"></div>
                                                <div className="w-full h-2 rounded bg-gray-200 dark:bg-gray-700 mb-1"></div>
                                                <div className="w-2/3 h-2 rounded bg-gray-200 dark:bg-gray-700"></div>
                                            </div>

                                            {/* Code Snippet for Techy Feel */}
                                            <div className="mt-auto bg-black rounded-xl p-4 font-mono text-[10px] text-green-400 overflow-hidden">
                                                <p>$ flutter run -d all</p>
                                                <p className="text-gray-500">Launching lib/main.dart on iPhone 14 Pro...</p>
                                                <p className="text-gray-500">Launching lib/main.dart on Pixel 7...</p>
                                                <p className="text-blue-400">✓ Built build/app/outputs/flutter-apk/app-debug.apk</p>
                                                <p className="text-blue-400">✓ Built build/ios/iphoneos/Runner.app</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default MobileEcosystemShowcase;
