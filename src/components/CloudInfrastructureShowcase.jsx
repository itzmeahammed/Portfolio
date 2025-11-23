import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    HiCloud,
    HiServer,
    HiShieldCheck,
    HiTerminal,
    HiRefresh,
    HiGlobe
} from 'react-icons/hi';
import { SiDocker, SiKubernetes, SiAmazonaws, SiGithubactions, SiTerraform, SiNginx } from 'react-icons/si';

const CloudInfrastructureShowcase = () => {
    const [activeRegion, setActiveRegion] = useState('us-east-1');

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

    const services = [
        { id: 'compute', name: 'Elastic Compute', icon: SiDocker, status: 'Running', load: '45%', color: 'text-orange-500' },
        { id: 'db', name: 'RDS Cluster', icon: HiServer, status: 'Healthy', load: '28%', color: 'text-blue-500' },
        { id: 'cdn', name: 'Global CDN', icon: HiGlobe, status: 'Active', load: '92%', color: 'text-purple-500' },
        { id: 'security', name: 'WAF Shield', icon: HiShieldCheck, status: 'Protected', load: '100%', color: 'text-green-500' },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm">
                            <HiCloud className="text-orange-500" />
                            <span className="text-sm font-medium text-orange-600 dark:text-orange-400">Cloud Native Architecture</span>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                            Resilient <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Infrastructure</span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Orchestrating scalable microservices with Kubernetes, Terraform, and automated CI/CD pipelines.
                        </motion.p>
                    </div>

                    {/* Interactive Dashboard */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                        {/* Left: Control Panel */}
                        <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-xl backdrop-blur-sm">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="font-mono text-sm text-gray-600 dark:text-gray-400">SYSTEM_STATUS: ONLINE</span>
                                </div>
                                <select
                                    value={activeRegion}
                                    onChange={(e) => setActiveRegion(e.target.value)}
                                    className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-1 text-sm text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                                >
                                    <option value="us-east-1">us-east-1 (N. Virginia)</option>
                                    <option value="eu-west-1">eu-west-1 (Ireland)</option>
                                    <option value="ap-southeast-1">ap-southeast-1 (Singapore)</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {services.map((service) => (
                                    <div key={service.id} className="p-4 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:border-orange-500/50 transition-colors group">
                                        <div className="flex justify-between items-start mb-3">
                                            <service.icon className={`w-6 h-6 ${service.color}`} />
                                            <span className="text-xs font-mono text-gray-400">{service.load}</span>
                                        </div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">{service.name}</h4>
                                        <span className="text-xs text-green-500 flex items-center gap-1 mt-1">
                                            <HiCheck className="w-3 h-3" /> {service.status}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CI/CD Pipeline Visual */}
                            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <SiGithubactions className="text-gray-500" /> Active Pipeline
                                </h4>
                                <div className="flex items-center justify-between text-xs">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
                                            <SiGithubactions />
                                        </div>
                                        <span className="text-gray-500">Build</span>
                                    </div>
                                    <div className="h-0.5 flex-1 bg-gray-200 dark:bg-gray-800 mx-2 relative">
                                        <div className="absolute inset-0 bg-green-500 w-full animate-pulse"></div>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                                            <SiDocker />
                                        </div>
                                        <span className="text-gray-500">Containerize</span>
                                    </div>
                                    <div className="h-0.5 flex-1 bg-gray-200 dark:bg-gray-800 mx-2"></div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 border border-gray-200 dark:border-gray-700">
                                            <SiKubernetes />
                                        </div>
                                        <span className="text-gray-500">Deploy</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Terminal/Code */}
                        <motion.div variants={itemVariants} className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative rounded-2xl bg-[#1e1e1e] border border-gray-800 overflow-hidden shadow-2xl">
                                <div className="flex items-center px-4 py-3 border-b border-gray-800 bg-[#252526]">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                    </div>
                                    <div className="ml-4 text-xs text-gray-400 font-mono flex items-center gap-2">
                                        <HiTerminal /> terraform apply
                                    </div>
                                </div>
                                <div className="p-6 font-mono text-sm text-gray-300 space-y-2">
                                    <div className="flex gap-2">
                                        <span className="text-green-400">➜</span>
                                        <span className="text-blue-400">~</span>
                                        <span>terraform apply -auto-approve</span>
                                    </div>
                                    <div className="text-gray-500">Initializing the backend...</div>
                                    <div className="text-gray-500">Successfully configured the backend "s3"!</div>
                                    <br />
                                    <div className="text-green-400">Terraform will perform the following actions:</div>
                                    <div className="pl-4 border-l-2 border-gray-700">
                                        <span className="text-green-400">+</span> resource <span className="text-orange-400">"aws_eks_cluster" "main"</span> {'{'}
                                        <br />
                                        &nbsp;&nbsp;name = <span className="text-yellow-400">"production-cluster"</span>
                                        <br />
                                        &nbsp;&nbsp;version = <span className="text-yellow-400">"1.27"</span>
                                        <br />
                                        {'}'}
                                    </div>
                                    <br />
                                    <div className="flex gap-2 items-center">
                                        <span className="text-green-400">Apply complete!</span>
                                        <span className="text-gray-400">Resources: 1 added, 0 changed, 0 destroyed.</span>
                                    </div>
                                    <div className="flex gap-2 animate-pulse">
                                        <span className="text-green-400">➜</span>
                                        <span className="text-blue-400">~</span>
                                        <span className="w-2 h-4 bg-gray-500 block"></span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Helper Icon
const HiCheck = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

export default CloudInfrastructureShowcase;
