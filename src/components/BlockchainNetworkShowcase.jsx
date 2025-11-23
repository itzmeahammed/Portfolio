import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCube, HiShieldCheck, HiLightningBolt, HiCollection } from 'react-icons/hi';
import { FaEthereum, FaNetworkWired } from 'react-icons/fa';

const BlockchainNetworkShowcase = () => {
    const [blocks, setBlocks] = useState([{ id: 1, hash: '0xGen...00' }]);
    const [isMining, setIsMining] = useState(false);
    const [nodes, setNodes] = useState([
        { id: 1, status: 'idle' },
        { id: 2, status: 'idle' },
        { id: 3, status: 'idle' },
        { id: 4, status: 'idle' },
        { id: 5, status: 'idle' },
    ]);

    const mineBlock = async () => {
        if (isMining) return;
        setIsMining(true);

        // 1. Propagate Transaction
        setNodes(prev => prev.map(n => ({ ...n, status: 'receiving' })));
        await new Promise(r => setTimeout(r, 600));

        // 2. Consensus / Validation
        setNodes(prev => prev.map(n => ({ ...n, status: 'validating' })));
        await new Promise(r => setTimeout(r, 1000));

        // 3. Block Added
        setNodes(prev => prev.map(n => ({ ...n, status: 'consensus' })));
        const newBlock = {
            id: blocks.length + 1,
            hash: `0x${Math.random().toString(16).substr(2, 8)}...`
        };
        setBlocks(prev => [...prev, newBlock]);

        await new Promise(r => setTimeout(r, 500));
        setNodes(prev => prev.map(n => ({ ...n, status: 'idle' })));
        setIsMining(false);
    };

    return (
        <section className="py-24 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visualization */}
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-3xl"></div>
                        <div className="relative bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 overflow-hidden min-h-[500px] flex flex-col justify-between">

                            {/* Network Layer */}
                            <div className="relative h-64 flex items-center justify-center">
                                {/* Connecting Lines */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                    {nodes.map((node, i) => (
                                        nodes.map((target, j) => {
                                            if (i >= j) return null;
                                            return (
                                                <motion.line
                                                    key={`${i}-${j}`}
                                                    x1={50 + 35 * Math.cos(2 * Math.PI * i / 5) + "%"}
                                                    y1={50 + 35 * Math.sin(2 * Math.PI * i / 5) + "%"}
                                                    x2={50 + 35 * Math.cos(2 * Math.PI * j / 5) + "%"}
                                                    y2={50 + 35 * Math.sin(2 * Math.PI * j / 5) + "%"}
                                                    stroke={isMining ? "#f59e0b" : "#374151"}
                                                    strokeWidth="1"
                                                    strokeOpacity="0.2"
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                />
                                            );
                                        })
                                    ))}
                                </svg>

                                {/* Nodes */}
                                {nodes.map((node, i) => {
                                    const angle = (2 * Math.PI * i) / 5;
                                    const x = 50 + 35 * Math.cos(angle);
                                    const y = 50 + 35 * Math.sin(angle);

                                    return (
                                        <motion.div
                                            key={node.id}
                                            className={`absolute w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors duration-300 z-10
                        ${node.status === 'idle' ? 'bg-gray-800 border-gray-700 text-gray-500' : ''}
                        ${node.status === 'receiving' ? 'bg-blue-900/50 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : ''}
                        ${node.status === 'validating' ? 'bg-yellow-900/50 border-yellow-500 text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.5)]' : ''}
                        ${node.status === 'consensus' ? 'bg-green-900/50 border-green-500 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.5)]' : ''}
                      `}
                                            style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                                        >
                                            <FaNetworkWired className="w-5 h-5" />
                                        </motion.div>
                                    );
                                })}

                                {/* Central Hub/Status */}
                                <div className="absolute text-center">
                                    <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Status</div>
                                    <div className={`text-sm font-bold transition-colors duration-300
                    ${isMining ? 'text-amber-400' : 'text-gray-400'}
                  `}>
                                        {isMining ? 'CONSENSUS...' : 'IDLE'}
                                    </div>
                                </div>
                            </div>

                            {/* Blockchain Layer */}
                            <div className="relative mt-8">
                                <div className="text-xs font-mono text-gray-500 mb-4 flex justify-between items-center">
                                    <span>IMMUTABLE LEDGER</span>
                                    <span>HEIGHT: {blocks.length}</span>
                                </div>
                                <div className="flex gap-4 overflow-x-auto pb-4 mask-linear-fade">
                                    <AnimatePresence>
                                        {blocks.slice().reverse().map((block, index) => (
                                            <motion.div
                                                key={block.id}
                                                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                                className="flex-shrink-0 w-32 p-4 bg-white dark:bg-black border border-amber-500/30 rounded-xl relative group"
                                            >
                                                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                                                    <HiShieldCheck className="text-amber-500" />
                                                </div>
                                                <div className="text-xs text-gray-500 mb-1">Block #{block.id}</div>
                                                <div className="font-mono text-[10px] text-amber-400 truncate">{block.hash}</div>
                                                <div className="mt-2 h-1 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-amber-500 w-full"></div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-sm font-medium">
                            <FaEthereum className="w-4 h-4" />
                            <span>Web3 Architecture</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Decentralized <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                                Consensus Systems
                            </span>
                        </h2>

                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Architecting trustless systems using blockchain technology.
                            Visualizing how distributed nodes reach consensus to maintain an immutable ledger
                            without a central authority.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: HiCube, label: 'Smart Contracts', desc: 'Automated Logic' },
                                { icon: HiShieldCheck, label: 'Cryptography', desc: 'Zero-Knowledge' },
                                { icon: HiCollection, label: 'Distributed Ledger', desc: 'Immutable Data' },
                                { icon: HiLightningBolt, label: 'High Throughput', desc: 'L2 Scaling' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start space-x-3">
                                    <div className="p-2 bg-amber-100 dark:bg-amber-900/20 rounded-lg text-amber-600 dark:text-amber-400">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-sm">{item.label}</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <button
                                onClick={mineBlock}
                                disabled={isMining}
                                className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-xl"
                            >
                                {isMining ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                        Verifying...
                                    </>
                                ) : (
                                    <>
                                        <HiCube /> Mine New Block
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BlockchainNetworkShowcase;
