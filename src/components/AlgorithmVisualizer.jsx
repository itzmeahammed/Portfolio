import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    HiChip, HiLightningBolt, HiCube, HiCode, HiDatabase, HiCloud
} from 'react-icons/hi';

const AlgorithmVisualizer = () => {
    const [activeAlgo, setActiveAlgo] = useState(0);

    const algorithms = [
        {
            id: 'sorting',
            title: 'Sorting Algorithms',
            description: 'Visualizing Quick Sort & Merge Sort efficiency.',
            icon: HiChip,
            color: 'text-emerald-400',
            bg: 'bg-emerald-400/10',
            border: 'border-emerald-400/20',
            barColor: 'bg-emerald-500',
            stats: ['O(n log n)', 'Divide & Conquer']
        },
        {
            id: 'pathfinding',
            title: 'Pathfinding',
            description: 'A* and Dijkstra algorithm real-time traversal.',
            icon: HiLightningBolt,
            color: 'text-amber-400',
            bg: 'bg-amber-400/10',
            border: 'border-amber-400/20',
            cellColor: 'bg-amber-500',
            stats: ['Shortest Path', 'Heuristic Search']
        },
        {
            id: 'structures',
            title: 'Data Structures',
            description: 'Interactive Binary Trees and Graph networks.',
            icon: HiCube,
            color: 'text-rose-400',
            bg: 'bg-rose-400/10',
            border: 'border-rose-400/20',
            nodeColor: 'bg-rose-500',
            stats: ['Balanced Trees', 'Graph Theory']
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-block px-4 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm font-bold border border-gray-200 dark:border-gray-700"
                        >
                            Computer Science Fundamentals
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                            Algorithmic <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                                Mastery
                            </span>
                        </h2>

                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Deep understanding of core CS concepts, optimizing performance through efficient algorithms and data structures.
                        </p>

                        <div className="space-y-4">
                            {algorithms.map((algo, idx) => (
                                <motion.div
                                    key={algo.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => setActiveAlgo(idx)}
                                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${activeAlgo === idx
                                            ? `bg-gray-50 dark:bg-gray-900 ${algo.border} shadow-lg scale-105`
                                            : 'bg-transparent border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-lg ${algo.bg} ${algo.color}`}>
                                            <algo.icon size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900 dark:text-white">{algo.title}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{algo.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visualization */}
                    <div className="relative h-[500px] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-800 flex items-center justify-center p-8">
                        {/* Background Grid */}
                        <div className="absolute inset-0 opacity-20"
                            style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                        ></div>

                        {/* Dynamic Visual Content */}
                        <div className="relative z-10 w-full max-w-md">
                            {activeAlgo === 0 && (
                                <div className="flex items-end justify-center gap-2 h-64">
                                    {[40, 70, 30, 85, 50, 20, 90, 60].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ duration: 0.5, delay: i * 0.05 }}
                                            className={`w-8 ${algorithms[0].barColor} rounded-t-md opacity-80 hover:opacity-100 transition-colors`}
                                        />
                                    ))}
                                </div>
                            )}

                            {activeAlgo === 1 && (
                                <div className="grid grid-cols-5 gap-2">
                                    {Array.from({ length: 25 }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: i * 0.02 }}
                                            className={`w-12 h-12 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${[0, 6, 12, 18, 24].includes(i) ? `${algorithms[1].cellColor} text-black` : 'bg-gray-800 text-gray-600'
                                                }`}
                                        >
                                            {i}
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {activeAlgo === 2 && (
                                <div className="flex justify-center items-center h-full">
                                    <div className="relative w-64 h-64">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className={`absolute inset-0 border-2 border-dashed border-rose-500/30 rounded-full`}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className={`w-16 h-16 ${algorithms[2].nodeColor} rounded-full flex items-center justify-center shadow-lg shadow-rose-500/50`}>
                                                <HiDatabase className="text-white text-2xl" />
                                            </div>
                                        </div>
                                        {[0, 90, 180, 270].map((deg, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-12 h-12 bg-gray-800 rounded-xl border border-rose-500/50 flex items-center justify-center"
                                                style={{
                                                    top: '50%',
                                                    left: '50%',
                                                    marginTop: '-24px',
                                                    marginLeft: '-24px',
                                                    transform: `rotate(${deg}deg) translate(100px) rotate(-${deg}deg)`
                                                }}
                                            >
                                                <HiCode className="text-rose-400" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Stats Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                            {algorithms[activeAlgo].stats.map((stat, i) => (
                                <div key={i} className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10 text-xs font-mono text-white">
                                    {stat}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AlgorithmVisualizer;
