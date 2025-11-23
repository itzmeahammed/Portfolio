import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
    HiChartBar, HiChartPie, HiUsers, HiCurrencyDollar, HiTrendingUp, HiRefresh
} from 'react-icons/hi';

const SaaSProductShowcase = () => {
    const [activeMetric, setActiveMetric] = useState('revenue');

    // Mock data animation
    const [dataPoints, setDataPoints] = useState([30, 45, 35, 60, 50, 75, 65]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDataPoints(prev => prev.map(p => Math.max(20, Math.min(90, p + (Math.random() * 20 - 10)))));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const metrics = [
        {
            id: 'revenue',
            label: 'Revenue',
            value: '$124,500',
            change: '+12.5%',
            icon: HiCurrencyDollar,
            color: 'text-violet-600 dark:text-violet-400',
            bg: 'bg-violet-100 dark:bg-violet-400/10',
            chartColor: 'bg-violet-500'
        },
        {
            id: 'users',
            label: 'Active Users',
            value: '45.2k',
            change: '+8.2%',
            icon: HiUsers,
            color: 'text-fuchsia-600 dark:text-fuchsia-400',
            bg: 'bg-fuchsia-100 dark:bg-fuchsia-400/10',
            chartColor: 'bg-fuchsia-500'
        },
        {
            id: 'growth',
            label: 'Growth',
            value: '24.8%',
            change: '+2.1%',
            icon: HiTrendingUp,
            color: 'text-pink-600 dark:text-pink-400',
            bg: 'bg-pink-100 dark:bg-pink-400/10',
            chartColor: 'bg-pink-500'
        }
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-700 mb-4 shadow-sm"
                            >
                                <HiChartPie className="text-violet-500" />
                                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Enterprise Solutions</span>
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                                SaaS <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">Analytics</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                Empowering businesses with real-time data visualization and actionable insights through intuitive dashboard interfaces.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {metrics.map((metric) => (
                                <button
                                    key={metric.id}
                                    onClick={() => setActiveMetric(metric.id)}
                                    className={`p-4 rounded-2xl border text-left transition-all duration-300 ${activeMetric === metric.id
                                            ? 'bg-white dark:bg-gray-800 border-violet-500 shadow-lg scale-105'
                                            : 'bg-transparent border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800'
                                        }`}
                                >
                                    <div className={`w-10 h-10 rounded-xl ${metric.bg} ${metric.color} flex items-center justify-center mb-3`}>
                                        <metric.icon size={20} />
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{metric.value}</div>
                                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400">{metric.label}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visualization (Tablet Mockup) */}
                    <div className="relative h-[500px] flex items-center justify-center perspective-1000 order-1 lg:order-2">

                        {/* Tablet Device */}
                        <motion.div
                            initial={{ rotateY: 10, rotateX: 5 }}
                            whileHover={{ rotateY: 0, rotateX: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-[400px] h-[520px] bg-gray-900 rounded-[2rem] border-[12px] border-gray-800 shadow-2xl overflow-hidden"
                        >
                            {/* Camera Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-xl z-20"></div>

                            {/* Screen Content */}
                            <div className="h-full bg-white dark:bg-gray-900 p-6 pt-10 flex flex-col">

                                {/* Header */}
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Dashboard</h3>
                                        <p className="text-xs text-gray-500">Real-time Overview</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                                </div>

                                {/* Main Chart Area */}
                                <div className="flex-1 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 mb-6 relative overflow-hidden">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                            {metrics.find(m => m.id === activeMetric).label} Trend
                                        </span>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${metrics.find(m => m.id === activeMetric).bg} ${metrics.find(m => m.id === activeMetric).color}`}>
                                            {metrics.find(m => m.id === activeMetric).change}
                                        </span>
                                    </div>

                                    {/* Animated Bars */}
                                    <div className="flex items-end justify-between h-32 gap-2">
                                        {dataPoints.map((h, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: `${h}%` }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                className={`w-full rounded-t-md ${metrics.find(m => m.id === activeMetric).chartColor} opacity-80`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Recent Activity List */}
                                <div className="space-y-3">
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Recent Activity</h4>
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/30">
                                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                                <HiRefresh className="text-gray-400 w-4 h-4" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
                                                <div className="h-2 w-16 bg-gray-100 dark:bg-gray-800 rounded"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>

                            {/* Reflection/Gloss */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-20 -right-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
                        >
                            <HiChartBar className="text-violet-500 w-8 h-8" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-40 -left-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
                        >
                            <HiUsers className="text-fuchsia-500 w-8 h-8" />
                        </motion.div>

                        {/* Ambient Glow */}
                        <div className="absolute inset-0 bg-violet-500/20 blur-[100px] -z-10 rounded-full opacity-50"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SaaSProductShowcase;
