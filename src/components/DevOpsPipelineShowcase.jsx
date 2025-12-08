import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaGitAlt, FaDocker, FaCheckCircle, FaTerminal, FaRocket
} from 'react-icons/fa';
import { SiGithubactions, SiJest, SiKubernetes } from 'react-icons/si';
import { HiLightningBolt, HiChip } from 'react-icons/hi';

const DevOpsPipelineShowcase = () => {
    const [status, setStatus] = useState('idle'); // idle, running, success
    const [activeStage, setActiveStage] = useState(0);
    const [logs, setLogs] = useState([]);
    const scrollRef = useRef(null);

    const stages = [
        { id: 1, name: 'Source Control', icon: FaGitAlt, color: 'text-orange-500', border: 'border-orange-500/50', shadow: 'shadow-orange-500/20' },
        { id: 2, name: 'CI Pipeline', icon: SiGithubactions, color: 'text-amber-500', border: 'border-amber-500/50', shadow: 'shadow-amber-500/20' },
        { id: 3, name: 'Unit Testing', icon: SiJest, color: 'text-green-500', border: 'border-green-500/50', shadow: 'shadow-green-500/20' },
        { id: 4, name: 'Containerization', icon: FaDocker, color: 'text-blue-500', border: 'border-blue-500/50', shadow: 'shadow-blue-500/20' },
        { id: 5, name: 'Orchestration', icon: SiKubernetes, color: 'text-purple-500', border: 'border-purple-500/50', shadow: 'shadow-purple-500/20' },
    ];

    const terminalLogs = [
        { stage: 1, text: "> git commit -m 'feat: optimized rendering engine'", color: 'text-orange-400' },
        { stage: 1, text: "> git push origin main", color: 'text-orange-400' },
        { stage: 2, text: "> Starting workflow: .github/workflows/deploy.yml", color: 'text-amber-400' },
        { stage: 2, text: "> Installing dependencies (npm ci)...", color: 'text-gray-400' },
        { stage: 3, text: "> Running tests (jest --coverage)...", color: 'text-green-400' },
        { stage: 3, text: "> PASS src/components/Engine.test.js", color: 'text-green-500 font-bold' },
        { stage: 4, text: "> docker build -t app:latest .", color: 'text-blue-400' },
        { stage: 4, text: "> Pushing to registry...", color: 'text-blue-400' },
        { stage: 5, text: "> kubectl apply -f deployment.yaml", color: 'text-purple-400' },
        { stage: 5, text: "> Scaling replicas: 3/3 ready", color: 'text-purple-400' },
        { stage: 6, text: "> Deployment Successful! 🚀", color: 'text-green-500 font-bold' },
    ];

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    const runPipeline = async () => {
        if (status === 'running') return;
        setStatus('running');
        setActiveStage(0);
        setLogs([]);

        for (let i = 0; i < stages.length; i++) {
            setActiveStage(i + 1);

            // Add logs for this stage
            const stageLogs = terminalLogs.filter(l => l.stage === i + 1);
            for (let log of stageLogs) {
                setLogs(prev => [...prev, log]);
                await new Promise(r => setTimeout(r, 400));
            }

            await new Promise(r => setTimeout(r, 800));
        }

        // Final success log
        setLogs(prev => [...prev, terminalLogs[terminalLogs.length - 1]]);
        setStatus('success');
        setActiveStage(stages.length + 1);

        setTimeout(() => {
            setStatus('idle');
            setActiveStage(0);
            setLogs([]);
        }, 4000);
    };

    return (
        <section className="py-32 bg-white dark:bg-black overflow-hidden relative border-y border-gray-100 dark:border-gray-900 transition-colors duration-300">
            {/* Background Grid - "Awesome" Style */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-black/50 dark:to-black"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Column: Narrative */}
                    <div className="lg:w-1/2 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm"
                        >
                            <HiChip className="w-4 h-4 text-orange-500" />
                            <span className="text-sm font-medium text-orange-600 dark:text-orange-400">DevOps Architecture</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Intelligent <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                                Delivery Pipelines
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
                        >
                            Orchestrating complex deployment workflows with precision. From automated testing to containerized orchestration, ensuring scalable and resilient infrastructure.
                        </motion.p>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={runPipeline}
                            disabled={status === 'running'}
                            className={`px-8 py-4 rounded-full font-bold text-sm tracking-wide flex items-center gap-3 transition-all border ${status === 'running'
                                ? 'bg-gray-100 dark:bg-gray-900 text-gray-400 border-transparent cursor-wait'
                                : 'bg-black dark:bg-white text-white dark:text-black border-transparent hover:shadow-[0_0_30px_-5px_orange] dark:hover:shadow-[0_0_30px_-5px_orange]'
                                }`}
                        >
                            {status === 'running' ? (
                                <>
                                    <HiLightningBolt className="animate-pulse text-amber-500" />
                                    <span>EXECUTING PIPELINE...</span>
                                </>
                            ) : (
                                <>
                                    <FaRocket className="text-orange-500" /> <span>INITIATE DEPLOYMENT</span>
                                </>
                            )}
                        </motion.button>
                    </div>

                    {/* Right Column: Visualization */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative">
                            {/* Circuit Board Container */}
                            <div className="relative bg-gray-50/50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-[2rem] p-8 shadow-2xl overflow-hidden min-h-[500px] flex flex-col justify-between backdrop-blur-xl">

                                {/* Header Status */}
                                <div className="flex justify-between items-start relative z-10 mb-10">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${status === 'running' ? 'bg-amber-400 animate-pulse' : status === 'success' ? 'bg-green-400' : 'bg-gray-300 dark:bg-gray-700'}`}></div>
                                        <span className="text-xs font-mono uppercase text-gray-400 tracking-widest">
                                            {status === 'idle' ? 'System Ready' : status === 'running' ? 'Processing...' : 'Deployed'}
                                        </span>
                                    </div>
                                    <FaTerminal className="text-gray-300 dark:text-gray-700" />
                                </div>

                                {/* Central active stage display */}
                                <div className="relative z-10 flex-1 flex flex-col items-center justify-center space-y-8">
                                    <div className="flex justify-center items-center gap-4 md:gap-8 w-full max-w-sm">
                                        {stages.map((stage, index) => {
                                            const isActive = activeStage === index + 1;
                                            const isPast = activeStage > index + 1;

                                            // Dynamic Colors based on stage state
                                            const activeColorClass = stage.color;
                                            const activeBorderClass = stage.border;
                                            const activeShadowClass = stage.shadow;

                                            return (
                                                <div key={stage.id} className="relative group">
                                                    {/* Connector Line */}
                                                    {index < stages.length - 1 && (
                                                        <div className="absolute top-1/2 left-full w-4 md:w-8 h-[2px] -translate-y-1/2 bg-gray-200 dark:bg-gray-800 z-0">
                                                            <motion.div
                                                                initial={{ width: "0%" }}
                                                                animate={{ width: isPast ? "100%" : "0%" }}
                                                                className="h-full bg-green-500"
                                                                transition={{ duration: 0.5 }}
                                                            />
                                                        </div>
                                                    )}

                                                    {/* Node */}
                                                    <motion.div
                                                        animate={{
                                                            scale: isActive ? 1.15 : 1,
                                                            borderColor: isActive ? 'var(--border-active)' : 'var(--border-inactive)',
                                                        }}
                                                        className={`relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center border-2 bg-white dark:bg-black transition-all duration-500
                                                            ${isActive
                                                                ? `${activeBorderClass} ${activeColorClass} ${activeShadowClass} shadow-lg ring-2 ring-offset-2 ring-offset-white dark:ring-offset-black ring-transparent`
                                                                : isPast
                                                                    ? 'border-green-500 text-green-500 dark:border-green-500 dark:text-green-500'
                                                                    : 'border-gray-200 dark:border-gray-800 text-gray-300 dark:text-gray-700'
                                                            }`}
                                                    >
                                                        {isPast ? <FaCheckCircle className="text-sm" /> : <stage.icon className="text-sm md:text-base" />}
                                                    </motion.div>

                                                    {/* Tooltip Label */}
                                                    <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono whitespace-nowrap transition-opacity duration-300 ${isActive ? `opacity-100 ${stage.color}` : 'opacity-0'}`}>
                                                        {stage.name}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Terminal Window */}
                                    <motion.div
                                        layout
                                        className="w-full mt-8"
                                    >
                                        <div className="bg-[#1e1e1e] rounded-xl p-4 font-mono text-xs h-32 overflow-hidden border border-gray-800 shadow-2xl relative">
                                            {/* Terminal Header */}
                                            <div className="absolute top-0 left-0 right-0 h-6 bg-[#252526] border-b border-gray-800 flex items-center px-2 space-x-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                                            </div>

                                            <div
                                                ref={scrollRef}
                                                className="h-full pt-6 overflow-y-auto space-y-1 scrollbar-none"
                                            >
                                                <AnimatePresence mode="popLayout">
                                                    {logs.map((log, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            className={`${log.color || 'text-gray-300'}`}
                                                        >
                                                            {log.text}
                                                        </motion.div>
                                                    ))}
                                                </AnimatePresence>
                                                {status === 'running' && (
                                                    <motion.span
                                                        animate={{ opacity: [0, 1, 0] }}
                                                        transition={{ repeat: Infinity, duration: 1 }}
                                                        className="inline-block w-2 h-4 bg-orange-500 align-middle ml-1"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DevOpsPipelineShowcase;
