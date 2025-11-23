import { motion } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaPython, FaAws, FaGithub, FaDocker, FaAndroid, FaApple
} from 'react-icons/fa';
import {
    SiMongodb, SiTailwindcss, SiFlutter, SiFirebase, SiTypescript, SiJavascript,
    SiNextdotjs, SiPostgresql, SiGraphql, SiRedis, SiTensorflow, SiPytorch, SiOpenai
} from 'react-icons/si';

const TechOrbit = () => {
    // Center Icon (Core)
    const coreTech = { icon: FaReact, color: '#61DAFB', name: 'React Ecosystem' };

    // Inner Orbit (Frontend/Mobile)
    const innerOrbit = [
        { icon: SiNextdotjs, color: '#000000', name: 'Next.js' },
        { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind' },
        { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
        { icon: SiFlutter, color: '#02569B', name: 'Flutter' },
        { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
    ];

    // Middle Orbit (Backend/Cloud)
    const middleOrbit = [
        { icon: FaNodeJs, color: '#339933', name: 'Node.js' },
        { icon: FaPython, color: '#3776AB', name: 'Python' },
        { icon: FaAws, color: '#FF9900', name: 'AWS' },
        { icon: FaDocker, color: '#2496ED', name: 'Docker' },
        { icon: SiFirebase, color: '#FFCA28', name: 'Firebase' },
        { icon: SiPostgresql, color: '#336791', name: 'PostgreSQL' },
        { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
    ];

    // Outer Orbit (AI/Advanced)
    const outerOrbit = [
        { icon: SiOpenai, color: '#412991', name: 'OpenAI' },
        { icon: SiTensorflow, color: '#FF6F00', name: 'TensorFlow' },
        { icon: SiPytorch, color: '#EE4C2C', name: 'PyTorch' },
        { icon: SiRedis, color: '#DC382D', name: 'Redis' },
        { icon: SiGraphql, color: '#E10098', name: 'GraphQL' },
        { icon: FaGithub, color: '#181717', name: 'DevOps' },
    ];

    return (
        <div className="relative w-full h-[800px] flex items-center justify-center overflow-hidden bg-white dark:bg-black">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100/50 via-transparent to-transparent dark:from-gray-800/20"></div>

            {/* Core Center */}
            <motion.div
                className="relative z-10 w-32 h-32 bg-white dark:bg-gray-900 rounded-full shadow-2xl flex items-center justify-center border border-gray-100 dark:border-gray-800"
                animate={{
                    boxShadow: ['0 0 20px rgba(97, 218, 251, 0.2)', '0 0 60px rgba(97, 218, 251, 0.4)', '0 0 20px rgba(97, 218, 251, 0.2)']
                }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <coreTech.icon className="w-16 h-16 text-[#61DAFB]" />
                <div className="absolute -bottom-12 text-sm font-bold text-gray-500 dark:text-gray-400">Core Stack</div>
            </motion.div>

            {/* Inner Orbit Ring */}
            <div className="absolute w-[300px] h-[300px] border border-gray-200 dark:border-gray-800 rounded-full opacity-50"></div>
            <motion.div
                className="absolute w-[300px] h-[300px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                {innerOrbit.map((tech, i) => (
                    <motion.div
                        key={tech.name}
                        className="absolute w-12 h-12 bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-800"
                        style={{
                            top: '50%',
                            left: '50%',
                            marginLeft: '-24px',
                            marginTop: '-24px',
                            transform: `rotate(${i * (360 / innerOrbit.length)}deg) translate(150px) rotate(-${i * (360 / innerOrbit.length)}deg)`
                        }}
                    >
                        <motion.div
                            animate={{ rotate: -360 }} // Counter-rotate to keep icon upright
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Middle Orbit Ring */}
            <div className="absolute w-[500px] h-[500px] border border-gray-200 dark:border-gray-800 rounded-full opacity-40"></div>
            <motion.div
                className="absolute w-[500px] h-[500px]"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
                {middleOrbit.map((tech, i) => (
                    <motion.div
                        key={tech.name}
                        className="absolute w-14 h-14 bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-800"
                        style={{
                            top: '50%',
                            left: '50%',
                            marginLeft: '-28px',
                            marginTop: '-28px',
                            transform: `rotate(${i * (360 / middleOrbit.length)}deg) translate(250px) rotate(-${i * (360 / middleOrbit.length)}deg)`
                        }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        >
                            <tech.icon className="w-7 h-7" style={{ color: tech.color }} />
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Outer Orbit Ring */}
            <div className="absolute w-[700px] h-[700px] border border-gray-200 dark:border-gray-800 rounded-full opacity-30"></div>
            <motion.div
                className="absolute w-[700px] h-[700px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            >
                {outerOrbit.map((tech, i) => (
                    <motion.div
                        key={tech.name}
                        className="absolute w-16 h-16 bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-800"
                        style={{
                            top: '50%',
                            left: '50%',
                            marginLeft: '-32px',
                            marginTop: '-32px',
                            transform: `rotate(${i * (360 / outerOrbit.length)}deg) translate(350px) rotate(-${i * (360 / outerOrbit.length)}deg)`
                        }}
                    >
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        >
                            <tech.icon className="w-8 h-8" style={{ color: tech.color }} />
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Title Overlay */}
            <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Technological Universe</h3>
                <p className="text-gray-500 dark:text-gray-400">Constantly expanding ecosystem of tools & frameworks</p>
            </div>
        </div>
    );
};

export default TechOrbit;
