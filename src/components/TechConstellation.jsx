import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGithub, FaLock, FaShieldAlt
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql,
    SiRedis, SiGraphql, SiFirebase, SiFlutter, SiTensorflow, SiOpenai
} from 'react-icons/si';

const TechConstellation = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const technologies = [
        { icon: FaReact, name: "React", color: "#61DAFB", size: 60 },
        { icon: SiNextdotjs, name: "Next.js", color: "#ffffff", size: 55 },
        { icon: SiTypescript, name: "TypeScript", color: "#3178C6", size: 50 },
        { icon: FaNodeJs, name: "Node.js", color: "#339933", size: 55 },
        { icon: FaPython, name: "Python", color: "#3776AB", size: 50 },
        { icon: FaAws, name: "AWS", color: "#FF9900", size: 60 },
        { icon: FaDocker, name: "Docker", color: "#2496ED", size: 55 },
        { icon: SiMongodb, name: "MongoDB", color: "#47A248", size: 50 },
        { icon: SiPostgresql, name: "PostgreSQL", color: "#336791", size: 50 },
        { icon: SiRedis, name: "Redis", color: "#DC382D", size: 45 },
        { icon: SiGraphql, name: "GraphQL", color: "#E10098", size: 50 },
        { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4", size: 45 },
        { icon: SiFirebase, name: "Firebase", color: "#FFCA28", size: 50 },
        { icon: SiFlutter, name: "Flutter", color: "#02569B", size: 55 },
        { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00", size: 50 },
        { icon: SiOpenai, name: "OpenAI", color: "#412991", size: 60 },
    ];

    // Generate random positions for stars
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const newStars = technologies.map((tech, i) => ({
            ...tech,
            id: i,
            x: Math.random() * 100, // percent
            y: Math.random() * 100, // percent
            duration: 15 + Math.random() * 20,
            delay: Math.random() * 5,
        }));
        setStars(newStars);
    }, []);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height,
        });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-[800px] bg-black overflow-hidden flex items-center justify-center perspective-1000"
        >
            {/* Deep Space Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black"></div>

            {/* Grid Floor */}
            <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-cyan-900/20 to-transparent transform perspective-[500px] rotate-x-60 scale-150 opacity-30 pointer-events-none">
                <div className="w-full h-full grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] border-t border-l border-cyan-500/20">
                    {Array.from({ length: 400 }).map((_, i) => (
                        <div key={i} className="border-r border-b border-cyan-500/10"></div>
                    ))}
                </div>
            </div>

            {/* Constellation Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                {stars.map((star, i) => (
                    stars.slice(i + 1).map((target, j) => (
                        <motion.line
                            key={`${i}-${j}`}
                            x1={`${star.x}%`}
                            y1={`${star.y}%`}
                            x2={`${target.x}%`}
                            y2={`${target.y}%`}
                            stroke="white"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: [0, 1, 0],
                                opacity: [0, 0.3, 0]
                            }}
                            transition={{
                                duration: 5 + Math.random() * 5,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "linear"
                            }}
                        />
                    ))
                ))}
            </svg>

            {/* Floating Tech Nodes */}
            {stars.map((tech, i) => (
                <motion.div
                    key={i}
                    className="absolute flex flex-col items-center justify-center cursor-pointer group"
                    style={{
                        left: `${tech.x}%`,
                        top: `${tech.y}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: tech.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: tech.delay,
                    }}
                    whileHover={{ scale: 1.5, zIndex: 50 }}
                >
                    {/* Glowing Orb */}
                    <div className="relative">
                        <div
                            className="absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                            style={{ backgroundColor: tech.color }}
                        ></div>
                        <div
                            className="relative z-10 bg-gray-900/80 backdrop-blur-md p-4 rounded-full border border-gray-700 group-hover:border-white/50 transition-colors duration-300"
                        >
                            <tech.icon
                                size={tech.size / 1.5}
                                style={{ color: tech.color }}
                                className="transition-transform duration-300 group-hover:rotate-12"
                            />
                        </div>
                    </div>

                    {/* Label */}
                    <motion.span
                        className="mt-2 text-sm font-bold text-gray-400 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm"
                        initial={{ y: -10 }}
                        whileHover={{ y: 0 }}
                    >
                        {tech.name}
                    </motion.span>
                </motion.div>
            ))}

            {/* Central Core Title */}
            <div className="absolute pointer-events-none text-center z-0">
                <motion.h2
                    className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-black dark:from-gray-800 dark:to-black opacity-20 select-none"
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    UNIVERSE
                </motion.h2>
            </div>
        </div>
    );
};

export default TechConstellation;
