import { motion } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGithub, FaAndroid, FaApple
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql,
    SiRedis, SiGraphql, SiFirebase, SiFlutter, SiTensorflow, SiOpenai, SiKubernetes
} from 'react-icons/si';

const TechStackGrid = () => {
    const categories = [
        {
            title: "Frontend & Mobile",
            description: "Crafting responsive, interactive user interfaces.",
            color: "from-blue-500 to-cyan-500",
            techs: [
                { icon: FaReact, name: "React" },
                { icon: SiNextdotjs, name: "Next.js" },
                { icon: SiTypescript, name: "TypeScript" },
                { icon: SiTailwindcss, name: "Tailwind" },
                { icon: SiFlutter, name: "Flutter" },
                { icon: FaApple, name: "iOS" },
                { icon: FaAndroid, name: "Android" },
            ]
        },
        {
            title: "Backend & Database",
            description: "Building robust, scalable server-side logic.",
            color: "from-emerald-500 to-teal-500",
            techs: [
                { icon: FaNodeJs, name: "Node.js" },
                { icon: FaPython, name: "Python" },
                { icon: SiMongodb, name: "MongoDB" },
                { icon: SiPostgresql, name: "PostgreSQL" },
                { icon: SiRedis, name: "Redis" },
                { icon: SiGraphql, name: "GraphQL" },
            ]
        },
        {
            title: "DevOps & AI",
            description: "Automating deployment and integrating intelligence.",
            color: "from-violet-500 to-purple-500",
            techs: [
                { icon: FaAws, name: "AWS" },
                { icon: FaDocker, name: "Docker" },
                { icon: SiKubernetes, name: "K8s" },
                { icon: SiTensorflow, name: "TensorFlow" },
                { icon: SiOpenai, name: "OpenAI" },
                { icon: FaGithub, name: "GitHub" },
            ]
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Arsenal</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        A comprehensive ecosystem of tools and technologies powering scalable, high-performance solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className={`h-2 w-20 bg-gradient-to-r ${cat.color} rounded-full mb-6 group-hover:w-full transition-all duration-500`}></div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{cat.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">{cat.description}</p>

                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-4">
                                {cat.techs.map((tech, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2 group/icon">
                                        <div className="w-14 h-14 bg-white dark:bg-black rounded-2xl flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover/icon:text-gray-900 dark:group-hover/icon:text-white group-hover/icon:scale-110 group-hover/icon:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800">
                                            <tech.icon size={28} />
                                        </div>
                                        <span className="text-xs font-medium text-gray-400 dark:text-gray-500 group-hover/icon:text-gray-900 dark:group-hover/icon:text-white transition-colors">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStackGrid;
