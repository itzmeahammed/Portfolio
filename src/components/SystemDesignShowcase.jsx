import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HiServer,
    HiDatabase,
    HiShieldCheck,
    HiLightningBolt,
    HiCode,
    HiCloud,
    HiArrowRight,
    HiCheck
} from 'react-icons/hi';
import { SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiDocker } from 'react-icons/si';

const SystemDesignShowcase = () => {
    const [activeTab, setActiveTab] = useState('api'); // 'api' or 'db'

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const features = {
        api: {
            title: "API Architecture",
            icon: HiServer,
            color: "text-amber-400",
            gradient: "from-amber-500 to-yellow-400",
            description: "Building scalable, type-safe, and self-documenting APIs using modern standards.",
            points: [
                { title: "Type Safety", desc: "End-to-end type validation using TypeScript & Zod", icon: SiTypescript },
                { title: "Performance", desc: "Response compression & Edge caching strategies", icon: HiLightningBolt },
                { title: "Security", desc: "JWT rotation, Rate limiting & Input sanitization", icon: HiShieldCheck },
            ],
            codeSnippet: `// Robust API Handler Pattern
export const createOrder = async (req, res) => {
  // 1. Input Validation
  const data = OrderSchema.parse(req.body);
  
  // 2. Business Logic
  const order = await OrderService.process(data);
  
  // 3. Standardized Response
  return ApiResponse.success(res, {
    data: order,
    message: "Order created successfully"
  });
};`
        },
        db: {
            title: "Database Design",
            icon: HiDatabase,
            color: "text-teal-400",
            gradient: "from-teal-500 to-emerald-400",
            description: "Designing optimized data models for high availability and data integrity.",
            points: [
                { title: "Scalability", desc: "Horizontal partitioning & Read replicas", icon: HiCloud },
                { title: "Optimization", desc: "Compound indexing & Query analysis", icon: HiCode },
                { title: "Caching", desc: "Redis implementation for hot data", icon: SiRedis },
            ],
            codeSnippet: `// Optimized Schema Design
const UserSchema = new Schema({
  email: { 
    type: String, 
    index: true, // Fast lookups
    unique: true 
  },
  metadata: {
    lastLogin: Date,
    preferences: Map // Flexible storage
  },
  // Compound index for common queries
  role: { type: String, index: true }
}).index({ role: 1, lastLogin: -1 });`
        }
    };

    return (
        <section className="py-24 relative overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-black to-black"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    {/* Section Header */}
                    <div className="text-center space-y-6">
                        <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                            <HiLightningBolt className="text-yellow-400" />
                            <span className="text-sm font-medium text-gray-300">Engineering Excellence</span>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-teal-400">Scalable Systems</span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            My approach to backend development focuses on reliability, performance, and maintainability.
                            Here is how I structure robust applications.
                        </motion.p>
                    </div>

                    {/* Interactive Flow Diagram */}
                    <div className="relative">
                        {/* Connecting Lines */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                            {/* Step 1: Client/Gateway */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-6 rounded-2xl hover:border-blue-500/50 transition-colors duration-300 group"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 group-hover:scale-110 transition-transform">
                                        <HiCloud className="w-8 h-8" />
                                    </div>
                                    <span className="text-xs font-mono text-gray-500">01</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Gateway & Security</h3>
                                <p className="text-gray-400 text-sm">
                                    Request validation, rate limiting, and load balancing before hitting services.
                                </p>
                            </motion.div>

                            {/* Step 2: Core Logic (Active Selection) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 p-1 rounded-2xl shadow-2xl transform lg:-translate-y-4"
                            >
                                <div className="bg-black rounded-xl p-6 h-full relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-teal-500"></div>
                                    <div className="flex justify-center space-x-4 mb-6">
                                        <button
                                            onClick={() => setActiveTab('api')}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'api'
                                                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                                : 'text-gray-500 hover:text-gray-300'
                                                }`}
                                        >
                                            API Structure
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('db')}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'db'
                                                ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                                                : 'text-gray-500 hover:text-gray-300'
                                                }`}
                                        >
                                            DB Schema
                                        </button>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2">Core Architecture</h3>
                                        <p className="text-gray-400 text-sm">
                                            Centralized logic handling and data orchestration.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 3: Data/Cache */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-6 rounded-2xl hover:border-green-500/50 transition-colors duration-300 group"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-teal-500/10 rounded-xl text-teal-400 group-hover:scale-110 transition-transform">
                                        <HiDatabase className="w-8 h-8" />
                                    </div>
                                    <span className="text-xs font-mono text-gray-500">03</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Persistence & Cache</h3>
                                <p className="text-gray-400 text-sm">
                                    Optimized data storage with intelligent caching layers for speed.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Detailed View Area */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                        >
                            {/* Left: Explanation & Pros */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${features[activeTab].gradient} mb-4`}>
                                        {features[activeTab].title}
                                    </h3>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {features[activeTab].description}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-white font-semibold flex items-center gap-2">
                                        <HiCheck className="text-gray-500" />
                                        Why this approach?
                                    </h4>
                                    <div className="grid gap-4">
                                        {features[activeTab].points.map((point, idx) => (
                                            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                                <div className={`p-2 rounded-lg bg-black/50 ${features[activeTab].color}`}>
                                                    <point.icon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h5 className="text-white font-medium">{point.title}</h5>
                                                    <p className="text-gray-400 text-sm mt-1">{point.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Code/Visual Representation */}
                            <div className="relative group">
                                <div className={`absolute -inset-1 bg-gradient-to-r ${features[activeTab].gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}></div>
                                <div className="relative rounded-2xl bg-[#0d1117] border border-gray-800 overflow-hidden shadow-2xl">
                                    {/* Mac-style Window Header */}
                                    <div className="flex items-center px-4 py-3 border-b border-gray-800 bg-gray-900/50">
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                        </div>
                                        <div className="ml-4 text-xs text-gray-500 font-mono">
                                            {activeTab === 'api' ? 'controller.ts' : 'schema.ts'}
                                        </div>
                                    </div>

                                    {/* Code Content */}
                                    <div className="p-6 overflow-x-auto">
                                        <pre className="font-mono text-sm leading-relaxed">
                                            <code className="text-gray-300">
                                                {features[activeTab].codeSnippet.split('\n').map((line, i) => (
                                                    <div key={i} className="table-row">
                                                        <span className="table-cell text-gray-700 select-none pr-4 text-right w-8">{i + 1}</span>
                                                        <span className="table-cell">
                                                            {line.replace('//', '___COMMENT___').split('___COMMENT___').map((part, idx) => (
                                                                idx === 1
                                                                    ? <span key={idx} className="text-gray-500 italic">// {part}</span>
                                                                    : <span key={idx} dangerouslySetInnerHTML={{
                                                                        __html: part
                                                                            .replace(/\b(const|await|async|return|export|class|new)\b/g, '<span class="text-amber-400">$1</span>')
                                                                            .replace(/\b(String|Date|Map|Boolean|Number)\b/g, '<span class="text-teal-400">$1</span>')
                                                                            .replace(/\b(function|=>)\b/g, '<span class="text-yellow-400">$1</span>')
                                                                    }} />
                                                            ))}
                                                        </span>
                                                    </div>
                                                ))}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default SystemDesignShowcase;
