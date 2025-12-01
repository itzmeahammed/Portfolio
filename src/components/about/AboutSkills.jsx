import { motion } from 'framer-motion';
import {
    HiDesktopComputer,
    HiDatabase,
    HiLightBulb,
    HiGlobeAlt,
    HiCog,
    HiEye,
    HiDeviceMobile,
    HiCode
} from 'react-icons/hi';
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaDatabase as FaDb,
    FaGithub,
    FaLaptopCode,
    FaAws,
    FaDocker,
    FaJava,
    FaHtml5,
    FaCss3Alt,
    FaFigma,
    FaBrain
} from 'react-icons/fa';
import {
    SiMongodb,
    SiFlutter,
    SiJavascript,
    SiNextdotjs,
    SiMysql,
    SiExpress,
    SiOpencv,
    SiNginx,
    SiHeroku,
    SiJira,
    SiBitbucket,
    SiGit
} from 'react-icons/si';

const skillCategories = [
    {
        title: "Front-End Development",
        icon: HiDesktopComputer,
        description: "Modern UI/UX with responsive design",
        skills: [
            { name: "ReactJS", icon: FaReact, level: 95 },
            { name: "Next.js", icon: SiNextdotjs, level: 90 },
            { name: "React Native", icon: FaReact, level: 88 },
            { name: "Flutter", icon: SiFlutter, level: 85 },
            { name: "HTML5", icon: FaHtml5, level: 95 },
            { name: "CSS3", icon: FaCss3Alt, level: 92 },
            { name: "JavaScript", icon: SiJavascript, level: 95 }
        ]
    },
    {
        title: "Back-End Development",
        icon: HiDatabase,
        description: "Scalable server-side solutions",
        skills: [
            { name: "Java", icon: FaJava, level: 88 },
            { name: "Python", icon: FaPython, level: 90 },
            { name: "Node.js", icon: FaNodeJs, level: 92 },
            { name: "Express.js", icon: SiExpress, level: 88 }
        ]
    },
    {
        title: "Database Management",
        icon: FaDb,
        description: "Efficient data storage & retrieval",
        skills: [
            { name: "MySQL", icon: SiMysql, level: 90 },
            { name: "MongoDB", icon: SiMongodb, level: 92 }
        ]
    },
    {
        title: "AI/ML & Computer Vision",
        icon: FaBrain,
        description: "Intelligent automation solutions",
        skills: [
            { name: "LLM Implementation", icon: HiLightBulb, level: 85 },
            { name: "OpenCV", icon: SiOpencv, level: 80 },
            { name: "Tesseract OCR", icon: HiEye, level: 85 },
            { name: "LLaMA", icon: FaBrain, level: 82 },
            { name: "NLP", icon: HiGlobeAlt, level: 88 }
        ]
    },
    {
        title: "Design & Tools",
        icon: HiCog,
        description: "Development workflow & design",
        skills: [
            { name: "Figma", icon: FaFigma, level: 85 },
            { name: "Git", icon: SiGit, level: 95 },
            { name: "GitHub", icon: FaGithub, level: 92 },
            { name: "Bitbucket", icon: SiBitbucket, level: 88 },
            { name: "Jira", icon: SiJira, level: 85 }
        ]
    },
    {
        title: "Deployment & DevOps",
        icon: HiGlobeAlt,
        description: "Cloud deployment & infrastructure",
        skills: [
            { name: "AWS", icon: FaAws, level: 85 },
            { name: "Docker", icon: FaDocker, level: 80 },
            { name: "NGINX", icon: SiNginx, level: 78 },
            { name: "Heroku", icon: SiHeroku, level: 85 }
        ]
    }
];

const areasOfInterest = [
    { name: "Mobile Development", icon: HiDeviceMobile, description: "Cross-platform mobile apps" },
    { name: "Web Development", icon: HiDesktopComputer, description: "Modern web applications" },
    { name: "Front-End Development", icon: FaLaptopCode, description: "Interactive user interfaces" },
    { name: "Back-End Development", icon: HiDatabase, description: "Server-side architecture" },
    { name: "Full Stack Development", icon: HiCode, description: "End-to-end solutions" },
    { name: "Software Development", icon: HiCog, description: "Custom software solutions" }
];

const AboutSkills = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white dark:bg-black">
            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-bold font-elegant-heading text-gray-900 dark:text-white mb-6"
                    >
                        Skills & Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Proficient in modern technologies and frameworks for building scalable applications
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-white dark:bg-black flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 border border-gray-100 dark:border-gray-800">
                                    <category.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="group/skill">
                                        <div className="flex justify-between items-center mb-1.5">
                                            <div className="flex items-center gap-2">
                                                <skill.icon className="text-gray-400 group-hover/skill:text-amber-500 transition-colors" />
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                            </div>
                                            <span className="text-xs font-bold text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                                                className="h-full bg-amber-500 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Areas of Interest */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Areas of Interest</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {areasOfInterest.map((area, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl text-center border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all group"
                        >
                            <div className="w-10 h-10 mx-auto mb-3 bg-white dark:bg-black rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:text-amber-500 transition-colors">
                                <area.icon className="w-5 h-5" />
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{area.name}</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{area.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSkills;
