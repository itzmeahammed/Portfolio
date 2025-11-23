import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaGitAlt, FaDocker, FaCheckCircle, FaTerminal, FaCodeBranch, FaServer, FaRocket
} from 'react-icons/fa';
import { SiGithubactions, SiJest, SiKubernetes, SiTerraform, SiPrometheus } from 'react-icons/si';
import { HiLightningBolt, HiChip } from 'react-icons/hi';

const DevOpsPipelineShowcase = () => {
    const [status, setStatus] = useState('idle'); // idle, running, success
    const [activeStage, setActiveStage] = useState(0);
    const [logs, setLogs] = useState([]);
    const scrollRef = useRef(null);

    const stages = [
        { id: 1, name: 'Source Control', icon: FaGitAlt, color: 'text-orange-500', bg: 'bg-orange-500/10 border-orange-500/50' },
        { id: 2, name: 'CI Pipeline', icon: SiGithubactions, color: 'text-blue-500', bg: 'bg-blue-500/10 border-blue-500/50' },
        { id: 3, name: 'Unit Testing', icon: SiJest, color: 'text-red-500', bg: 'bg-red-500/10 border-red-500/50' },
        { id: 4, name: 'Containerization', icon: FaDocker, color: 'text-cyan-500', bg: 'bg-cyan-500/10 border-cyan-500/50' },
        { id: 5, name: 'Orchestration', icon: SiKubernetes, color: 'text-indigo-500', bg: 'bg-indigo-500/10 border-indigo-500/50' },
    ];

    const terminalLogs = [
        { stage: 1, text: "git commit -m 'feat: optimized rendering engine'" },
        { stage: 1, text: "git push origin main" },
        { stage: 2, text: "Starting workflow: .github/workflows/deploy.yml" },
        { stage: 2, text: "Installing dependencies (npm ci)..." },
        { stage: 3, text: "Running tests (jest --coverage)..." },
        { stage: 3, text: "PASS src/components/Engine.test.js" },
        { stage: 4, text: "docker build -t app:latest ." },
        { stage: 4, text: "Pushing to registry..." },
        { stage: 5, text: "kubectl apply -f deployment.yaml" },
        { stage: 5, text: "Scaling replicas: 3/3 ready" },
        { stage: 6, text: "Deployment Successful! 🚀" },
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

        let logIndex = 0;

        for (let i = 0; i < stages.length; i++) {
            setActiveStage(i + 1);

            // Add logs for this stage
            const stageLogs = terminalLogs.filter(l => l.stage === i + 1);
            for (let log of stageLogs) {
                setLogs(prev => [...prev, log.text]);
                await new Promise(r => setTimeout(r, 400));
            }

            await new Promise(r => setTimeout(r, 800));
        }

        // Final success log
        setLogs(prev => [...prev, terminalLogs[terminalLogs.length - 1].text]);
        setStatus('success');
        setActiveStage(stages.length + 1);

        setTimeout(() => {
            setStatus('idle');
            setActiveStage(0);
            setLogs([]);
        }, 4000);
    };

    return (
        <section className="py-24 bg-gray-50 dark:bg-black overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Narrative */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-200 dark:border-blue-800"
                        >
                            <HiChip className="w-4 h-4" />
                            <span>DevOps Engineering</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
                        >
                            Automated <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                                Delivery Pipelines
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                        >
                            Architecting robust CI/CD workflows that accelerate development cycles.
                            From code commit to production deployment, ensuring reliability, scalability, and zero-downtime updates.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-3"
                        >
                            {['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus'].map((tech, i) => (
                                <span key={i} className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={runPipeline}
                            disabled={status === 'running'}
                            className={`px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 shadow-lg shadow-blue-500/20 transition-all ${status === 'running'
                                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-cyan-500/30'
                                }`}
                        >
                            {status === 'running' ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                    Deploying...
                                </>
                            ) : (
                                <>
                                    <FaRocket /> Trigger Deploy
                                </>
                            )}
                        </motion.button>
                    </div>

                    {/* Right Column: Interactive Visualization */}
                    <div className="relative">
                        <div className="relative bg-white dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-3xl p-6 shadow-2xl overflow-hidden">

                            {/* Header Bar */}
                            <div className="flex items-center justify-between mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs font-mono text-gray-400">pipeline-visualizer</div>
                            </div>

                            {/* Pipeline Stages */}
                            <div className="space-y-4 relative">
                                {/* Vertical Connecting Line */}
                                <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-800 -z-10"></div>

                                {stages.map((stage, index) => {
                                    const isActive = activeStage === index + 1;
                                    const isCompleted = activeStage > index + 1;

                                    return (
                                        <motion.div
                                            key={stage.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`relative flex items-center gap-4 p-3 rounded-xl border transition-all duration-500 ${isActive
                                                    ? `bg-gray-50 dark:bg-gray-800 ${stage.color.replace('text-', 'border-')} shadow-lg scale-[1.02]`
                                                    : 'bg-transparent border-transparent opacity-60'
                                                }`}
                                        >
                                            {/* Icon Node */}
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl transition-all duration-500 z-10 ${isActive || isCompleted
                                                    ? `${stage.bg} ${stage.color} shadow-[0_0_15px_rgba(0,0,0,0.2)]`
                                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
                                                }`}>
                                                {isCompleted ? <FaCheckCircle /> : <stage.icon />}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center mb-1">
                                                    <h3 className={`font-bold text-sm ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
                                                        {stage.name}
                                                    </h3>
                                                    {isActive && (
                                                        <span className="text-[10px] font-mono text-blue-500 animate-pulse">
                                                            IN PROGRESS
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Progress Bar for Active Stage */}
                                                <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className={`h-full ${stage.color.replace('text-', 'bg-')}`}
                                                        initial={{ width: "0%" }}
                                                        animate={{ width: isActive ? "100%" : isCompleted ? "100%" : "0%" }}
                                                        transition={{ duration: isActive ? 1.5 : 0.3 }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Active Glow Effect */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeGlow"
                                                    className={`absolute inset-0 rounded-xl ${stage.color.replace('text-', 'bg-')}/5 -z-10`}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Terminal Output */}
                            <div className="mt-8 bg-[#0d1117] rounded-xl border border-gray-800 p-4 font-mono text-xs h-40 overflow-hidden flex flex-col shadow-inner">
                                <div className="flex items-center gap-2 text-gray-500 border-b border-gray-800 pb-2 mb-2">
                                    <FaTerminal />
                                    <span>console output</span>
                                </div>
                                <div
                                    ref={scrollRef}
                                    className="flex-1 overflow-y-auto space-y-1 scrollbar-hide"
                                >
                                    <AnimatePresence>
                                        {logs.map((log, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className={`${log.includes('Error') ? 'text-red-400' : log.includes('Success') ? 'text-green-400' : 'text-gray-300'}`}
                                            >
                                                <span className="text-gray-600 mr-2">$</span>
                                                {log}
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                    {status === 'running' && (
                                        <motion.div
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.8 }}
                                            className="w-2 h-4 bg-blue-500 inline-block align-middle ml-1"
                                        />
                                    )}
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
