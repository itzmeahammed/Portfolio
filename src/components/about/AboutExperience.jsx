import { motion } from 'framer-motion';
import { FaRocket, FaLaptopCode, FaRobot } from 'react-icons/fa';
import { HiLocationMarker, HiClock, HiStar } from 'react-icons/hi';

const workExperience = [
    {
        position: "AI Automation & Full Stack Developer",
        company: "Travnook",
        location: "Dubai, United Arab Emirates",
        duration: "NOV 2025 - PRESENT",
        type: "Full-time",
        icon: FaRobot,
        current: true,
        achievements: [
            "Built and managed end-to-end AI automation infrastructure for customer communication, lead management, sales and business operations",
            "Customized Bitrix24 CRM and Odoo ERP with scripts and automated workflows for lead management, sales and internal operations",
            "Developed WhatsApp, website and CRM automation covering customer enquiries, lead tracking, source attribution and follow-ups",
            "Built API and webhook integrations connecting CRM, WhatsApp, booking systems, marketing platforms and other business applications",
            "Implemented AI-powered conversational workflows, OCR pipelines and NLP-based document processing to reduce manual work",
            "Developing a custom ERP with full AI integration, including a face recognition model for attendance workflows",
            "Deployed production systems on AWS (EC2, Lambda, S3) with backend services and databases",
            "Team Lead — hired and managed 3 assistant engineers, owning sprint planning and end-to-end delivery"
        ]
    },
    {
        position: "Freelance AI Automation & Full Stack Developer",
        company: "Independent",
        location: "Remote",
        duration: "APRIL 2023 - PRESENT",
        type: "Freelance",
        icon: FaLaptopCode,
        current: true,
        achievements: [
            "Delivered AI-powered applications and business automation solutions across multiple domains",
            "Built LLM-driven features, conversational workflows, chatbots and AI-assisted UX on the frontend and backend",
            "Developed Python AI services: RAG pipelines, vector search (FAISS, Pinecone), document processing and embedding workflows",
            "Integrated OpenAI, LLaMA and Hugging Face models with prompt engineering and fine-tuning",
            "Built an n8n job-application pipeline (ScrapingBee + OpenAI) with human-in-the-loop approval",
            "Built an intelligent email auto-response bot (n8n, NLP, Docker) for intent detection and urgency classification",
            "Owned end-to-end delivery from PoC to deployment, with client scoping, sprint planning and post-launch support"
        ]
    },
    {
        position: "Full Stack Developer",
        company: "WizzGeeks Technologies",
        location: "Electronic City, Bangalore",
        duration: "MAY 2022 - AUGUST 2025",
        type: "Full-time",
        icon: FaRocket,
        current: false,
        achievements: [
            "Contributed to QuestionCloud, an AI-driven learning platform with admin and user web panels",
            "Integrated Tesseract OCR to extract syllabus content and convert it into embeddings",
            "Enabled AI-generated question generation from syllabus content and integrated a RAG model for retrieval-augmented Q&A",
            "Contributed to GUVI Zen Class platform focusing on ReactJS front-end development",
            "Played a major role in Medsy.ai, an AI-based medical platform, across admin and user panels with full AI integration"
        ]
    }
];

const AboutExperience = () => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-bold font-elegant-heading text-gray-900 dark:text-white mb-6"
                    >
                        Work Experience
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Professional journey delivering impactful projects and innovative solutions
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12 relative">
                    {/* Connecting Line */}
                    <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block" />

                    {workExperience.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative pl-0 md:pl-24"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 top-0 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl border-2 border-blue-500 hidden md:flex items-center justify-center z-10 shadow-lg">
                                <exp.icon className="w-8 h-8 text-blue-500" />
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.position}</h3>
                                        <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">{exp.company}</div>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="flex items-center gap-1">
                                                <HiLocationMarker /> {exp.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <HiClock /> {exp.duration}
                                            </span>
                                        </div>
                                    </div>
                                    <span className={`px-4 py-1.5 rounded-full text-sm font-semibold self-start ${exp.current
                                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                            : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                                        }`}>
                                        {exp.type}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                        <HiStar className="text-yellow-500" /> Key Achievements
                                    </h4>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, aIdx) => (
                                            <li key={aIdx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Professional Summary Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mt-16"
                >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-1">
                        <div className="bg-white dark:bg-gray-900 rounded-[1.3rem] p-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Summary</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                I bring <span className="font-semibold text-blue-600 dark:text-blue-400">commitment, reliability, and leadership</span>, backed by a proven track record of delivering impactful projects for startups, businesses, and enterprise-level clients, including <span className="font-semibold text-blue-600 dark:text-blue-400">AI automation systems, CRM workflows, and complex web applications</span>.
                                Experienced across the full lifecycle, from requirements and architecture to API integration, deployment on AWS and Docker, monitoring, and production support.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutExperience;
