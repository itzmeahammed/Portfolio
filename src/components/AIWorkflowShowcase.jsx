import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HiChip,
    HiLightningBolt,
    HiSparkles,
    HiCode,
    HiChatAlt2,
    HiSearch
} from 'react-icons/hi';
import { SiOpenai, SiPython, SiTensorflow, SiPytorch } from 'react-icons/si';

const AIWorkflowShowcase = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isSimulating, setIsSimulating] = useState(false);

    // Auto-play simulation
    useEffect(() => {
        if (!isSimulating) return;

        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 4);
        }, 2000);

        return () => clearInterval(interval);
    }, [isSimulating]);

    const steps = [
        {
            id: 0,
            title: "Data Ingestion & Vectorization",
            icon: HiSearch,
            color: "text-red-400",
            bg: "bg-red-500/10",
            border: "border-red-500/20",
            desc: "Raw data is processed, chunked, and converted into high-dimensional vector embeddings for semantic search.",
            tech: [SiPython, SiOpenai],
            code: `async function ingestData(docs) {
  // 1. Split text into chunks
  const chunks = await textSplitter.split(docs);
  
  // 2. Generate embeddings
  const vectors = await embeddings.embedDocuments(chunks);
  
  // 3. Store in Vector DB
  await vectorStore.upsert(vectors);
}`
        },
        {
            id: 1,
            title: "Neural Context Retrieval",
            icon: HiChip,
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            border: "border-amber-500/20",
            desc: "Relevant context is retrieved using cosine similarity search to ground the AI's responses in your specific data.",
            tech: [HiLightningBolt],
            code: `// Semantic Search Implementation
const retrieveContext = async (query) => {
  const queryVector = await embed(query);
  
  // Find nearest neighbors
  const matches = await index.query({
    vector: queryVector,
    topK: 5,
    includeMetadata: true
  });
  
  return matches.map(m => m.metadata.text);
}`
        },
        {
            id: 2,
            title: "LLM Inference Engine",
            icon: HiLightningBolt,
            color: "text-teal-400",
            bg: "bg-teal-500/10",
            border: "border-teal-500/20",
            desc: "The augmented prompt is fed into a fine-tuned Large Language Model to generate human-like, accurate responses.",
            tech: [SiOpenai, SiPytorch],
            code: `// RAG Generation Chain
const generateResponse = async (query, context) => {
  const prompt = ChatPromptTemplate.fromTemplate(\`
    Context: {context}
    Question: {query}
    Answer based ONLY on context.
  \`);

  const chain = prompt.pipe(model).pipe(parser);
  
  return await chain.stream({
    context: context,
    query: query
  });
}`
        },
        {
            id: 3,
            title: "Response Streaming",
            icon: HiChatAlt2,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20",
            desc: "The final output is streamed in real-time to the client, ensuring a snappy and responsive user experience.",
            tech: [HiSparkles],
            code: `// Real-time Client Stream
for await (const chunk of stream) {
  // Process markdown chunks
  const content = processMarkdown(chunk);
  
  // Push to SSE stream
  res.write(\`data: \${JSON.stringify({
    token: content,
    done: false
  })}\\n\\n\`);
}`
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-black">
            {/* Cyberpunk Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black"></div>
            <div className="absolute inset-0 opacity-30"
                style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <motion.div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-sm">
                            <HiSparkles className="text-red-400" />
                            <span className="text-sm font-medium text-red-200">Next-Gen AI Integration</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                            Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-teal-400">Neural Workflows</span>
                        </h2>

                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            I build sophisticated AI pipelines that bridge the gap between raw data and actionable intelligence using RAG and LLMs.
                        </p>
                    </div>

                    {/* Main Interactive Area */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                        {/* Left: Pipeline Visualization */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-white">Processing Pipeline</h3>
                                <button
                                    onClick={() => setIsSimulating(!isSimulating)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${isSimulating
                                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                        : 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30'
                                        }`}
                                >
                                    {isSimulating ? 'Stop Simulation' : 'Start Simulation'}
                                </button>
                            </div>

                            <div className="relative">
                                {/* Vertical Line */}
                                <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gray-800"></div>

                                {/* Steps */}
                                <div className="space-y-6">
                                    {steps.map((step, index) => (
                                        <motion.div
                                            key={step.id}
                                            onClick={() => { setActiveStep(index); setIsSimulating(false); }}
                                            className={`relative pl-20 pr-6 py-5 rounded-2xl border transition-all duration-300 cursor-pointer ${activeStep === index
                                                ? `${step.bg} ${step.border} border-opacity-50`
                                                : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
                                                }`}
                                            whileHover={{ x: 4 }}
                                        >
                                            {/* Node Icon */}
                                            <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 transition-colors duration-300 ${activeStep === index
                                                ? `bg-black ${step.color} ${step.border}`
                                                : 'bg-gray-900 border-gray-700 text-gray-600'
                                                }`}>
                                                <step.icon className="w-5 h-5" />
                                            </div>

                                            {/* Active Pulse */}
                                            {activeStep === index && (
                                                <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full ${step.bg} animate-ping opacity-20`}></div>
                                            )}

                                            <h4 className={`font-bold text-lg mb-1 ${activeStep === index ? 'text-white' : 'text-gray-400'}`}>
                                                {step.title}
                                            </h4>
                                            <div className="flex gap-2">
                                                {step.tech.map((Icon, i) => (
                                                    <Icon key={i} className={`w-4 h-4 ${activeStep === index ? step.color : 'text-gray-600'}`} />
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Code & Details */}
                        <div className="lg:col-span-7">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full flex flex-col"
                                >
                                    {/* Description Card */}
                                    <div className="mb-6 p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
                                        <h3 className={`text-2xl font-bold mb-3 ${steps[activeStep].color}`}>
                                            {steps[activeStep].title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed text-lg">
                                            {steps[activeStep].desc}
                                        </p>
                                    </div>

                                    {/* Code Window */}
                                    <div className="flex-grow rounded-2xl bg-[#0d1117] border border-gray-800 overflow-hidden shadow-2xl relative group">
                                        {/* Glow Effect */}
                                        <div className={`absolute -inset-1 bg-gradient-to-r from-transparent via-${steps[activeStep].color.split('-')[1]}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-xl`}></div>

                                        {/* Window Header */}
                                        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-900/50 relative z-10">
                                            <div className="flex space-x-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                                                <HiCode className="w-4 h-4" />
                                                <span>ai_pipeline.py</span>
                                            </div>
                                        </div>

                                        {/* Code Content */}
                                        <div className="p-6 overflow-x-auto relative z-10">
                                            <pre className="font-mono text-sm leading-relaxed">
                                                <code className="text-gray-300">
                                                    {steps[activeStep].code.split('\n').map((line, i) => (
                                                        <div key={i} className="table-row">
                                                            <span className="table-cell text-gray-700 select-none pr-4 text-right w-8">{i + 1}</span>
                                                            <span className="table-cell">
                                                                {line.replace('//', '___COMMENT___').split('___COMMENT___').map((part, idx) => (
                                                                    idx === 1
                                                                        ? <span key={idx} className="text-gray-500 italic">// {part}</span>
                                                                        : <span key={idx} dangerouslySetInnerHTML={{
                                                                            __html: part
                                                                                .replace(/\b(const|await|async|return|export|function|class)\b/g, '<span class="text-red-400">$1</span>')
                                                                                .replace(/\b(query|context|docs|vectors|prompt|chain)\b/g, '<span class="text-amber-400">$1</span>')
                                                                                .replace(/\b(split|embed|upsert|pipe|stream)\b/g, '<span class="text-teal-400">$1</span>')
                                                                        }} />
                                                                ))}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AIWorkflowShowcase;
