import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChat, HiX, HiPaperAirplane, HiUser, HiSparkles, HiDownload, HiMail, HiPhone, HiLocationMarker, HiCode, HiAcademicCap, HiBriefcase, HiLightBulb, HiStar, HiClock } from 'react-icons/hi';
import { FaRobot, FaGithub, FaLinkedin, FaReact, FaNodeJs, FaPython, FaAws } from 'react-icons/fa';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "🚀 Welcome! I'm Ahammed's AI Portfolio Assistant!\n\nI can help you with:\n• 💼 Professional Experience & Skills\n• 🛠️ Technical Projects & Achievements\n• 📧 Contact & Collaboration Info\n• 🎓 Education & Certifications\n• 🤖 AI/ML Expertise\n• 📱 Services & Availability\n\nWhat would you like to know about Ahammed?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState([
    "Tell me about skills",
    "Show projects",
    "Contact info",
    "Experience details"
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Comprehensive portfolio data for the chatbot
  const portfolioData = {
    personal: {
      name: "Ahammed",
      title: "AI Automation Specialist & Full Stack Developer",
      location: "Dubai, United Arab Emirates",
      email: "ahammedmass24@gmail.com",
      phone: "+971 521352484",
      github: "https://github.com/itzmeahammed",
      linkedin: "https://www.linkedin.com/in/ahammed-s-5161b7288/",
      age: "22 years old",
      languages: ["English", "Tamil", "Malayalam"],
      availability: "Available for freelance projects and full-time opportunities"
    },
    experience: {
      current: "AI Automation & Full Stack Developer at Travnook, Dubai (Nov 2025 - Present) - CURRENT; also freelancing since April 2023",
      previous: "Full Stack Developer at WizzGeeks Technologies (May 2022 - August 2025) - Completed",
      totalExperience: "4+ years professional experience",
      industryExperience: "3.5+ years",
      freelanceExperience: "Since April 2023",
      specialization: "AI automation, CRM workflows and full-stack development",
      projectsCompleted: "50+ projects delivered",
      clientSatisfaction: "100% client satisfaction rate"
    },
    skills: {
      frontend: ["ReactJS (Expert)", "Next.js (Advanced)", "React Native (Advanced)", "Flutter (Advanced)", "HTML5 (Expert)", "CSS3 (Expert)", "JavaScript (Expert)", "TypeScript (Advanced)", "Tailwind CSS (Expert)"],
      backend: ["Node.js (Expert)", "Python (Expert)", "Java (Advanced)", "Express.js (Expert)", "Django (Intermediate)", "Flask (Advanced)"],
      database: ["MongoDB (Expert)", "MySQL (Advanced)", "Firebase (Advanced)", "PostgreSQL (Intermediate)"],
      aiml: ["TensorFlow (Advanced)", "OpenCV (Expert)", "NLP (Advanced)", "OCR/Tesseract (Expert)", "LLaMA (Advanced)", "Machine Learning (Advanced)", "Computer Vision (Expert)", "Data Analysis (Advanced)"],
      cloud: ["AWS (Advanced)", "Docker (Advanced)", "Heroku (Advanced)", "Nginx (Intermediate)", "CI/CD (Advanced)"],
      tools: ["Git (Expert)", "GitHub (Expert)", "Figma (Advanced)", "Jira (Advanced)", "VS Code (Expert)", "Postman (Advanced)"],
      softSkills: ["Time Management", "Communication", "Problem Solving", "Creativity", "Teamwork", "Leadership", "Client Management"]
    },
    projects: {
      major: [
        {
          name: "Traffic Violation Detection System",
          description: "AI/ML project using OCR and object detection to detect traffic violations and generate automatic reports",
          technologies: ["Python", "OpenCV", "OCR", "Flask", "ReactJS"],
          category: "AI/ML",
          status: "Completed"
        },
        {
          name: "Police Petition Management System",
          description: "Three-portal system for police petitions with AI-based severity classification using NLP",
          technologies: ["Python", "Django", "NLP", "MongoDB", "ReactJS"],
          category: "Web Development",
          status: "Completed"
        },
        {
          name: "Meditrack AI",
          description: "Medical inventory management with AI stock prediction and prescription analysis using OCR & NLP",
          technologies: ["Python", "MongoDB", "ReactJS", "OCR", "NLP"],
          category: "Healthcare AI",
          status: "Completed"
        },
        {
          name: "Smart Classroom Management",
          description: "IoT-based classroom automation system with attendance tracking and environment control",
          technologies: ["IoT", "Python", "ReactJS", "MongoDB"],
          category: "IoT",
          status: "Completed"
        },
        {
          name: "AI Career Guidance Platform",
          description: "Personalized career recommendations using machine learning algorithms",
          technologies: ["Python", "ML", "ReactJS", "MongoDB"],
          category: "AI/ML",
          status: "Completed"
        },
        {
          name: "Smart Agriculture App",
          description: "IoT sensors for crop monitoring with predictive analytics for farming optimization",
          technologies: ["IoT", "Python", "React Native", "MongoDB"],
          category: "Agriculture Tech",
          status: "Completed"
        },
        {
          name: "QuestionCloud",
          description: "AI-driven learning platform with admin and user web panels, OCR integration for syllabus content",
          technologies: ["Python", "AI", "ReactJS", "OCR", "NLP"],
          category: "EdTech",
          status: "Completed"
        },
        {
          name: "Medsy.ai",
          description: "AI-based medical platform with full AI functionalities integration for healthcare solutions",
          technologies: ["Python", "AI", "ReactJS", "MongoDB", "ML"],
          category: "HealthTech AI",
          status: "Completed"
        }
      ],
      totalProjects: "10+ major projects",
      domains: ["Healthcare", "Education", "Law Enforcement", "Agriculture", "IoT", "AI/ML", "Web Development"]
    },
    education: {
      degree: "Bachelor's Degree",
      college: "Excel Engineering College",
      cgpa: "8.0 CGPA",
      graduationYear: "2024",
      specialization: "Computer Science & Engineering"
    },
    certifications: [
      "MERN Stack Development (Udemy) - Full Stack Web Development",
      "Python Programming (GUVI) - Advanced Python & Data Science",
      "MongoDB Database (Official) - Database Management",
      "Typing A+ Grade - Professional Typing Skills"
    ],
    internships: [
      "Web Development Internship (90 days) - Full Stack Development",
      "Python Development Internship (20 days) - Backend Development",
      "Python Basics Internship (14 days) - Programming Fundamentals"
    ],
    services: [
      "Full Stack Web Development",
      "Mobile App Development (React Native & Flutter)",
      "AI/ML Integration & Development",
      "Database Design & Optimization",
      "API Development & Integration",
      "Cloud Deployment & DevOps",
      "UI/UX Design & Prototyping",
      "Technical Consulting & Code Review",
      "IoT Solutions Development",
      "Computer Vision Applications",
      "Natural Language Processing",
      "OCR & Document Processing"
    ],
    achievements: [
      "50+ successful project deliveries",
      "100% client satisfaction rate",
      "Expert in AI/ML integration",
      "Proficient in 20+ technologies",
      "4+ years professional experience",
      "Multiple domain expertise",
      "Strong problem-solving skills",
      "Excellent communication abilities"
    ]
  };

  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes('skill') || message.includes('technology') || message.includes('tech stack') || message.includes('technologies')) {
      return `🛠️ **Technical Skills & Expertise:**

**🎨 Frontend Development:**
• ReactJS (Expert) - 4+ years experience
• Next.js (Advanced) - Server-side rendering
• React Native (Advanced) - Cross-platform mobile
• Flutter (Advanced) - Mobile app development
• TypeScript (Advanced) - Type-safe development
• Tailwind CSS (Expert) - Modern styling

**⚙️ Backend Development:**
• Node.js (Expert) - Server-side JavaScript
• Python (Expert) - AI/ML & web development
• Java (Advanced) - Enterprise applications
• Express.js (Expert) - RESTful APIs
• Django & Flask (Advanced) - Python frameworks

**🗄️ Database & Storage:**
• MongoDB (Expert) - NoSQL database
• MySQL (Advanced) - Relational database
• Firebase (Advanced) - Real-time database
• PostgreSQL (Intermediate) - Advanced SQL

**🤖 AI/ML Specialization:**
• TensorFlow (Advanced) - Machine learning
• OpenCV (Expert) - Computer vision
• NLP (Advanced) - Natural language processing
• OCR/Tesseract (Expert) - Text extraction
• LLaMA (Advanced) - Large language models

**☁️ Cloud & DevOps:**
• AWS (Advanced) - Cloud deployment
• Docker (Advanced) - Containerization
• Heroku (Advanced) - Platform as a service
• CI/CD (Advanced) - Automated deployment

**🎯 Soft Skills:**
• Leadership & Team Management
• Client Communication & Consultation
• Problem Solving & Critical Thinking
• Time Management & Project Planning

*Proficient in 20+ technologies with 4+ years professional experience!*`;
    }

    if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('career')) {
      return `💼 **Professional Experience & Career Journey:**

**🚀 Current Position:**
• **AI Automation & Full Stack Developer at Travnook** (Nov 2025 - Present)
• Location: Dubai, United Arab Emirates
• End-to-end AI automation for customer communication, lead management and CRM
• Bitrix24 CRM and Odoo ERP customization and workflow automation
• WhatsApp, website and CRM automation with API and webhook integrations
• AWS deployments (EC2, Lambda, S3) and custom AI-integrated ERP
• Team Lead managing 3 assistant engineers

**💻 Freelance (April 2023 - Present):**
• **Freelance AI Automation & Full Stack Developer**
• LLM features, chatbots, RAG pipelines and n8n automation workflows
• End-to-end delivery from PoC to deployment

**🏢 Previous Experience:**
• **Full Stack Developer at WizzGeeks Technologies**
• Duration: May 2022 - August 2025 (Completed)
• Location: Electronic City, Bangalore
• Key Projects: QuestionCloud, GUVI Zen Class, Medsy.ai
• Contributed to AI-driven learning and medical platforms

**📊 Career Highlights:**
• **Total Experience:** 4+ years professional
• **Industry Experience:** 3.5+ years (WizzGeeks + Travnook)
• **Freelance Experience:** Since April 2023
• **Projects Completed:** 50+ successful deliveries
• **Client Satisfaction:** 100% positive feedback
• **Specialization:** AI automation, CRM workflows & full-stack development

**🎯 Expertise Areas:**
• Healthcare Technology Solutions
• Educational Platform Development
• Law Enforcement Systems
• IoT & Agriculture Technology
• AI/ML Integration & Automation

**📈 Career Growth:**
Started as a junior developer and quickly advanced to handling complex AI-integrated projects. Currently leading freelance projects while exploring full-time opportunities in innovative tech companies.

*Available for both freelance projects and full-time positions!*`;
    }

    if (message.includes('project') || message.includes('portfolio') || message.includes('work samples')) {
      return `🚀 **Major Projects & Portfolio Highlights:**

**🤖 AI/ML Projects:**
• **Traffic Violation Detection System**
  - OCR & object detection for automatic violation reports
  - Technologies: Python, OpenCV, OCR, Flask, ReactJS
  - Impact: Automated traffic monitoring solution

• **Meditrack AI**
  - Medical inventory with AI stock prediction
  - OCR prescription analysis & NLP integration
  - Technologies: Python, MongoDB, ReactJS, AI/ML

• **AI Career Guidance Platform**
  - Personalized career recommendations using ML
  - Advanced algorithms for career path analysis
  - Technologies: Python, ML, ReactJS, MongoDB

**🏥 Healthcare Solutions:**
• **Medsy.ai** - AI-based medical platform
• **Meditrack** - Smart inventory management
• Advanced healthcare automation systems

**🎓 Educational Technology:**
• **QuestionCloud** - AI-driven learning platform
• **Smart Classroom Management** - IoT automation
• Interactive learning solutions with AI integration

**🏛️ Government & Law Enforcement:**
• **Police Petition Management System**
  - Three-portal system with AI severity classification
  - NLP-based petition analysis and routing
  - Technologies: Python, Django, NLP, MongoDB

**🌱 IoT & Agriculture:**
• **Smart Agriculture App**
  - IoT sensors for crop monitoring
  - Predictive analytics for farming optimization
  - Technologies: IoT, Python, React Native

**📊 Project Statistics:**
• **Total Projects:** 10+ major projects completed
• **Domains Covered:** Healthcare, Education, Law Enforcement, Agriculture, IoT
• **Success Rate:** 100% project completion
• **Client Satisfaction:** Consistently positive feedback
• **Technology Integration:** Advanced AI/ML in every project

*Each project demonstrates real-world problem-solving with cutting-edge technology!*`;
    }

    if (message.includes('contact') || message.includes('reach') || message.includes('hire') || message.includes('email') || message.includes('phone') || message.includes('connect')) {
      return `📞 **Contact & Collaboration Information:**

**📧 Primary Contact:**
• **Email:** ahammedmass24@gmail.com
• **Phone:** +971 521352484
• **Location:** Dubai, United Arab Emirates

**🌐 Professional Profiles:**
• **GitHub:** https://github.com/itzmeahammed
• **LinkedIn:** https://www.linkedin.com/in/ahammed-s-5161b7288/
• **Portfolio:** This website showcases my work

**💼 Availability & Services:**
• **Status:** Available for new projects
• **Work Arrangements:** Remote, On-site, Hybrid
• **Project Types:** Freelance & Full-time opportunities
• **Response Time:** Within 24 hours
• **Consultation:** Free initial project discussion

**🛠️ Services Offered:**
• Full Stack Web Development
• Mobile App Development (React Native & Flutter)
• AI/ML Integration & Development
• Database Design & Optimization
• API Development & Integration
• Cloud Deployment & DevOps
• UI/UX Design & Prototyping
• Technical Consulting & Code Review
• IoT Solutions Development
• Computer Vision Applications
• Natural Language Processing
• OCR & Document Processing

**🌍 Global Reach:**
Currently serving clients worldwide with remote work capabilities. Open to international projects and collaborations.

**💬 Let's Discuss Your Project:**
Ready to bring your ideas to life with cutting-edge technology. Contact me to discuss your requirements and get a free consultation!

*Available for immediate start on exciting projects!*`;
    }

    if (message.includes('education') || message.includes('degree') || message.includes('college') || message.includes('study') || message.includes('certification')) {
      return `🎓 **Education & Professional Development:**

**🏫 Academic Background:**
• **Degree:** Bachelor's in Computer Science & Engineering
• **College:** Excel Engineering College
• **CGPA:** 8.0/10.0
• **Graduation Year:** 2024
• **Specialization:** Software Development & AI/ML

**📜 Professional Certifications:**
• **MERN Stack Development (Udemy)**
  - Full Stack Web Development
  - Advanced React.js & Node.js
  
• **Python Programming (GUVI)**
  - Advanced Python & Data Science
  - AI/ML implementation
  
• **MongoDB Database (Official)**
  - Database design & optimization
  - Advanced querying & aggregation
  
• **Typing A+ Grade**
  - Professional typing skills
  - Enhanced productivity

**💼 Professional Internships:**
• **Web Development Internship (90 days)**
  - Full Stack Development experience
  - Real-world project implementation
  
• **Python Development Internship (20 days)**
  - Backend development focus
  - API design & implementation
  
• **Python Basics Internship (14 days)**
  - Programming fundamentals
  - Best practices & coding standards

**🌐 Languages:**
• **English** - Professional proficiency
• **Tamil** - Native speaker
• **Malayalam** - Conversational

**📚 Continuous Learning:**
• Staying updated with latest technology trends
• Regular participation in tech communities
• Contributing to open-source projects
• Attending webinars and tech conferences

**🏆 Academic Achievements:**
• Consistent academic performance (8.0 CGPA)
• Multiple internship completions
• Strong foundation in computer science principles
• Practical project-based learning approach

*Committed to lifelong learning and professional growth!*`;
    }

    if (message.includes('ai') || message.includes('machine learning') || message.includes('ml') || message.includes('artificial intelligence') || message.includes('computer vision') || message.includes('nlp')) {
      return `🤖 **AI/ML Expertise & Specializations:**

**🧠 Machine Learning:**
• **TensorFlow (Advanced)** - Model training & deployment
• **Scikit-learn** - Classical ML algorithms
• **Model Development** - From concept to production
• **Data Preprocessing** - Feature engineering & optimization
• **Predictive Analytics** - Forecasting & trend analysis

**👁️ Computer Vision:**
• **OpenCV (Expert)** - Image processing & analysis
• **Object Detection** - Real-time detection systems
• **Image Recognition** - Classification & identification
• **Video Processing** - Motion tracking & analysis
• **Medical Imaging** - Healthcare applications

**💬 Natural Language Processing:**
• **Text Analysis** - Sentiment analysis & classification
• **Language Models** - Custom NLP solutions
• **Text Processing** - Tokenization & parsing
• **Chatbot Development** - Conversational AI
• **Document Analysis** - Content extraction & summarization

**🔍 OCR & Document Processing:**
• **Tesseract Integration (Expert)** - Text extraction
• **Document Digitization** - Paper to digital conversion
• **Form Processing** - Automated data extraction
• **Handwriting Recognition** - Custom OCR solutions
• **Multi-language Support** - Global text processing

**🦙 Large Language Models:**
• **LLaMA Implementation** - Advanced language models
• **Custom Training** - Domain-specific models
• **Fine-tuning** - Model optimization
• **Prompt Engineering** - Effective AI communication
• **Integration** - LLM-powered applications

**📊 Real-World AI Applications:**
• **Healthcare:** Medical diagnosis assistance, inventory prediction
• **Education:** Intelligent tutoring systems, content generation
• **Law Enforcement:** Severity classification, document analysis
• **Agriculture:** Crop monitoring, yield prediction
• **Business:** Process automation, decision support systems

**🛠️ AI Development Stack:**
• **Python** - Primary AI/ML language
• **Jupyter Notebooks** - Research & development
• **Docker** - Model containerization
• **Cloud Deployment** - AWS, Heroku for AI services
• **APIs** - RESTful AI service integration

**🎯 Specialized Projects:**
• Traffic violation detection using computer vision
• Medical prescription analysis with OCR & NLP
• AI-powered career guidance systems
• Intelligent document processing solutions
• Predictive analytics for various industries

*Passionate about creating AI solutions that solve real-world problems!*`;
    }

    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('start')) {
      return `👋 **Welcome! I'm Ahammed's AI Portfolio Assistant!**

I'm here to provide comprehensive information about Ahammed's professional background and expertise. Here's what I can help you with:

**🔍 Quick Navigation:**
• **💼 Professional Experience** - Current & previous roles
• **🛠️ Technical Skills** - 20+ technologies & expertise levels
• **🚀 Project Portfolio** - 10+ major projects across multiple domains
• **📧 Contact Information** - Direct communication channels
• **🎓 Education & Certifications** - Academic & professional credentials
• **🤖 AI/ML Expertise** - Specialized artificial intelligence skills
• **📱 Services Offered** - Available development services
• **🌍 Availability** - Current work status & opportunities

**💡 Try asking:**
• "Tell me about Ahammed's AI expertise"
• "Show me his major projects"
• "What are his technical skills?"
• "How can I contact him?"
• "What services does he offer?"

**🎯 Quick Facts:**
• 4+ years professional experience
• 50+ projects completed successfully
• Expert in AI/ML integration
• Available for freelance & full-time work
• Based in Dubai, United Arab Emirates

*What specific information would you like to know about Ahammed?*`;
    }

    if (message.includes('location') || message.includes('where') || message.includes('dubai') || message.includes('availability')) {
      return `📍 **Location & Availability Information:**

**🏠 Current Location:**
• **City:** Dubai, United Arab Emirates
• **Time Zone:** GST (UTC+4)
• **Work Setup:** Professional home office

**💼 Work Arrangements:**
• **Remote Work:** ✅ Preferred & experienced
• **On-site (Dubai):** ✅ Available for local clients
• **Hybrid Model:** ✅ Flexible arrangements
• **International Projects:** ✅ Global client experience

**🌍 Global Reach:**
• Currently serving clients worldwide
• Experience with international time zones
• Excellent English communication skills
• Cultural adaptability for global teams

**⏰ Availability Status:**
• **Current Status:** Available for new projects
• **Response Time:** Within 24 hours
• **Working Hours:** Flexible (GST timezone)
• **Project Start:** Immediate availability
• **Commitment:** Long-term & short-term projects

**🚀 Preferred Opportunities:**
• **Freelance Projects:** AI/ML integration, Full-stack development
• **Full-time Positions:** Senior developer roles, Tech lead positions
• **Consulting:** Technical architecture, AI implementation
• **Collaboration:** Open-source projects, tech communities

**📞 Communication Channels:**
• **Email:** ahammedmass24@gmail.com (Primary)
• **Phone:** +971 521352484 (WhatsApp available)
• **Video Calls:** Google Meet, Zoom, Teams
• **Project Management:** Slack, Jira, Trello

**🎯 Ideal Collaborations:**
• Innovative tech companies
• Startups with AI/ML focus
• Healthcare technology firms
• Educational technology platforms
• International remote teams

*Ready to contribute to exciting projects and innovative solutions!*`;
    }

    if (message.includes('service') || message.includes('offer') || message.includes('development') || message.includes('help')) {
      return `🛠️ **Services & Development Offerings:**

**🌐 Full Stack Web Development:**
• Custom web applications with modern frameworks
• Responsive design for all devices
• Performance optimization & SEO
• E-commerce & business solutions

**📱 Mobile App Development:**
• **React Native** - Cross-platform mobile apps
• **Flutter** - High-performance mobile solutions
• Native iOS & Android development
• App store deployment & maintenance

**🤖 AI/ML Integration & Development:**
• Custom machine learning models
• Computer vision applications
• Natural language processing solutions
• OCR & document processing systems
• Predictive analytics & data science

**🗄️ Database Design & Optimization:**
• MongoDB, MySQL, PostgreSQL setup
• Database architecture & design
• Performance tuning & optimization
• Data migration & backup solutions

**🔗 API Development & Integration:**
• RESTful API design & development
• Third-party API integrations
• Microservices architecture
• Real-time data synchronization

**☁️ Cloud Deployment & DevOps:**
• AWS, Heroku, Docker deployment
• CI/CD pipeline setup
• Server configuration & monitoring
• Scalability & performance optimization

**🎨 UI/UX Design & Prototyping:**
• User interface design
• User experience optimization
• Figma prototyping
• Design system development

**💡 Technical Consulting & Code Review:**
• Architecture planning & consultation
• Code quality assessment
• Performance optimization strategies
• Technology stack recommendations

**🌐 Specialized Solutions:**
• **IoT Development** - Smart device integration
• **Computer Vision** - Image processing applications
• **NLP Solutions** - Text analysis & chatbots
• **OCR Systems** - Document digitization

**📊 Industry Expertise:**
• **Healthcare Technology** - Medical platforms & AI
• **Educational Technology** - Learning management systems
• **Government Solutions** - Public service applications
• **Agriculture Tech** - Smart farming solutions
• **Business Automation** - Process optimization

**💼 Project Management:**
• Agile development methodology
• Regular progress updates & communication
• Quality assurance & testing
• Post-deployment support & maintenance

**🎯 Why Choose My Services:**
• 100% client satisfaction rate
• 50+ successful project deliveries
• Expert-level technical skills
• Excellent communication & collaboration
• Competitive pricing & timely delivery

*Ready to transform your ideas into powerful digital solutions!*`;
    }

    // Default response with enhanced suggestions
    return `🤖 **I'm here to help! Ask me about Ahammed's:**

**🔹 Professional Background:**
• "Tell me about his work experience"
• "What's his current job status?"
• "Show me his career highlights"

**🔹 Technical Expertise:**
• "What are his programming skills?"
• "Tell me about his AI/ML expertise"
• "What technologies does he use?"

**🔹 Project Portfolio:**
• "Show me his major projects"
• "What kind of applications has he built?"
• "Tell me about his AI projects"

**🔹 Contact & Services:**
• "How can I contact him?"
• "What services does he offer?"
• "Is he available for projects?"

**🔹 Education & Background:**
• "What's his educational background?"
• "Tell me about his certifications"
• "What languages does he speak?"

**💡 Try specific questions like:**
• "What AI projects has Ahammed worked on?"
• "How can I hire him for a project?"
• "What's his experience with React?"
• "Tell me about his healthcare projects"

*I have comprehensive information about Ahammed's professional background, skills, and achievements. What would you like to know?*`;
  };

  const handleSendMessage = async (messageText = null) => {
    const textToSend = messageText || inputMessage;
    if (!textToSend.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: textToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Update quick replies based on context
    updateQuickReplies(textToSend);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateResponse(textToSend),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const updateQuickReplies = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes('skill') || message.includes('technology')) {
      setQuickReplies(["Show AI expertise", "Tell me about projects", "Contact info", "Services offered"]);
    } else if (message.includes('project') || message.includes('portfolio')) {
      setQuickReplies(["Technical skills", "AI/ML projects", "Contact details", "Work experience"]);
    } else if (message.includes('contact') || message.includes('hire')) {
      setQuickReplies(["View services", "Check availability", "See projects", "Download CV"]);
    } else if (message.includes('ai') || message.includes('ml')) {
      setQuickReplies(["Computer vision projects", "NLP expertise", "OCR solutions", "ML models"]);
    } else {
      setQuickReplies(["Tell me about skills", "Show projects", "Contact info", "Experience details"]);
    }
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white rounded-full shadow-2xl flex items-center justify-center group overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(0,0,0,0.3)",
              "0 0 30px rgba(0,0,0,0.5)",
              "0 0 20px rgba(0,0,0,0.3)"
            ]
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-800/20 dark:from-gray-300/20 dark:to-gray-100/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiX className="w-5 h-5 sm:w-7 sm:h-7 text-white dark:text-black relative z-10" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                <FaRobot className="w-5 h-5 sm:w-7 sm:h-7 text-white dark:text-black" />

                {/* Pulse indicator */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className="fixed bottom-20 right-4 left-4 sm:bottom-24 sm:right-6 sm:left-auto w-auto sm:w-96 h-[450px] sm:h-[500px] bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden z-40"
          >
            {/* Chat Header */}
            <div className="p-3 sm:p-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="relative flex-shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white rounded-full flex items-center justify-center">
                    <FaRobot className="w-4 h-4 sm:w-5 sm:h-5 text-white dark:text-black" />
                  </div>
                  <motion.div
                    className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white dark:border-black"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate">AI Assistant</h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">Ask me about Ahammed</p>
                </div>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] sm:max-w-[80%] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl ${message.sender === 'user'
                      ? 'bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white text-white dark:text-black'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700'
                    }`}>
                    <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Reply Buttons */}
            {quickReplies.length > 0 && (
              <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-300 dark:border-gray-600"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Ahammed..."
                  className="flex-1 px-3 py-2 sm:px-4 sm:py-2 bg-white dark:bg-black border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent text-xs sm:text-sm"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white text-white dark:text-black rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiPaperAirplane className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatbot;
