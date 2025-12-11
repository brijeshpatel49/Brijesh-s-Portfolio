import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane, FaUser, FaExternalLinkAlt } from "react-icons/fa";

// Function to parse text and make URLs clickable
const parseMessageWithLinks = (text, isBot) => {
  // Regex to match URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  
  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      // Reset regex lastIndex
      urlRegex.lastIndex = 0;
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 underline decoration-1 underline-offset-2 hover:opacity-80 transition-opacity ${
            isBot 
              ? "text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300" 
              : "text-blue-100 hover:text-white"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {part.length > 30 ? part.substring(0, 30) + "..." : part}
          <FaExternalLinkAlt className="w-2.5 h-2.5 inline-block" />
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

// Your actual portfolio info
const portfolioInfo = {
  name: "Brijesh Patel",
  role: "MERN Stack Developer",
  email: "brijeshp3349@gmail.com",
  phone: "+91 97278 19653",
  location: "Mahesana, India",
  github: "https://github.com/brijeshpatel49",
  linkedin: "https://www.linkedin.com/in/brijesh-patel-b1195b288/",
  whatsapp: "https://wa.me/919727819653",
  experience: "1+ year",
  education: "Computer Science Student",
  // About section
  about: "Aspiring full-stack developer with 1+ year of hands-on experience in MERN stack. Built secure, responsive applications with authentication, CRUD operations, and modern deployments through personal projects and internship experience. Passionate about turning ideas into digital reality and always excited to learn new technologies.",
  stats: {
    projects: "6+",
    experience: "1+ Year in MERN Stack",
    technologies: "18+"
  },
  // Current status
  currentlyDoing: {
    status: "Open to Opportunities",
    activities: [
      "Actively seeking full-time roles or internships in web development",
      "Building and improving personal projects",
      "Exploring AI/ML integration in web applications",
      "Learning new technologies and best practices"
    ],
    learning: ["Advanced React patterns", "System Design", "DevOps basics", "Generative AI", "Agentic AI"],
    lookingFor: "Full-time positions, internships, or freelance projects in MERN stack development"
  },
  // AI Skills & Knowledge
  aiSkills: {
    knowledge: ["Generative AI", "Agentic AI", "Prompt Engineering", "AI API Integration", "LLM Applications"],
    tools: ["OpenAI API", "Perplexity Sonar API", "Hugging Face", "n8n AI Workflows"],
    projects: ["Medical Image Enhancer (AI/ML with Python & OpenCV)", "This AI-powered portfolio chatbot"],
    interests: ["Building AI-powered web applications", "Exploring autonomous AI agents", "Integrating LLMs into real-world projects"],
    learning: ["RAG (Retrieval Augmented Generation)", "AI Agents & Automation", "Fine-tuning models"]
  },
  // Journey timeline
  journey: [
    { year: "2022", title: "Started Learning", description: "Began web development journey with HTML, CSS, and JavaScript" },
    { year: "2023", title: "MERN Stack", description: "Dove deep into React, Node.js, Express, and MongoDB" },
    { year: "2024", title: "Real Projects", description: "Built 5+ full-stack applications and completed internship" },
    { year: "Now", title: "Ready for More", description: "Seeking opportunities to contribute to amazing projects" }
  ],
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "PHP"],
    database: ["MongoDB", "SQL"],
    tools: ["Git", "Docker", "Vite", "Postman", "n8n", "Vercel", "Render"]
  },
  projects: [
    { name: "BookMyLook", desc: "Salon booking platform with real-time queue management, OTP auth", tech: "React, Node.js, MongoDB, Socket.IO", live: "https://book-my-look.vercel.app" },
    { name: "TastyBites", desc: "Recipe sharing platform with user auth and admin dashboard", tech: "React, Node.js, MongoDB", live: "https://tasty-bites-iota.vercel.app" },
    { name: "SecurePass", desc: "Password management app with encryption", tech: "React, Node.js, MongoDB", live: "https://secure-pass-jet.vercel.app" },
    { name: "SkyWave", desc: "Weather app with dark/light mode", tech: "React, Tailwind CSS, Weather API", live: "https://sky-wave-jade.vercel.app" },
    { name: "Hotel Booking System", desc: "Hotel management with PHP backend", tech: "HTML, CSS, PHP, MySQL" },
    { name: "Medical Image Enhancer", desc: "AI-powered medical image processing", tech: "Python, AI/ML, OpenCV", live: "https://huggingface.co/spaces/dhruv020/EDSR-model" }
  ],
  internships: [
    { company: "EY Global Delivery Services & AICTE", role: "MERN Stack Development Intern", duration: "Feb-Mar 2025", program: "Next Gen Employability Program" },
    { company: "CreArt Solutions Pvt. Ltd.", role: "MERN Stack Development Intern", duration: "July 2025", location: "Ahmedabad" }
  ]
};

// Sonar API configuration
const SONAR_API_KEY = import.meta.env.VITE_SONAR_API_KEY || "";
const SONAR_API_URL = "https://api.perplexity.ai/chat/completions";

// Strict system prompt - ONLY about Brijesh's portfolio
const systemPrompt = `You are Brijesh Patel's personal portfolio AI assistant. You MUST ONLY answer questions about Brijesh and his portfolio. 

STRICT RULES:
1. NEVER search the web or provide external information
2. NEVER explain what words mean (like "hi" or "hello")
3. ONLY use the information provided below about Brijesh
4. If asked about anything unrelated to Brijesh or his portfolio, politely redirect to portfolio topics
5. Keep responses concise, friendly, and professional
6. Use emojis sparingly to be friendly
7. ALWAYS include clickable links when mentioning contact methods or projects

BRIJESH'S INFORMATION:
- Name: ${portfolioInfo.name}
- Role: ${portfolioInfo.role} with ${portfolioInfo.experience} of hands-on experience
- Location: ${portfolioInfo.location}
- Education: ${portfolioInfo.education}
- Email: ${portfolioInfo.email}
- Phone/WhatsApp: ${portfolioInfo.phone}
- GitHub: ${portfolioInfo.github}
- LinkedIn: ${portfolioInfo.linkedin}
- WhatsApp: ${portfolioInfo.whatsapp}
- Status: Open to opportunities

ABOUT BRIJESH:
${portfolioInfo.about}

STATS:
- Projects Built: ${portfolioInfo.stats.projects}
- Experience: ${portfolioInfo.stats.experience}
- Technologies: ${portfolioInfo.stats.technologies}

WHAT BRIJESH IS CURRENTLY DOING:
- Status: ${portfolioInfo.currentlyDoing.status}
- Activities: ${portfolioInfo.currentlyDoing.activities.join("; ")}
- Currently Learning: ${portfolioInfo.currentlyDoing.learning.join(", ")}
- Looking For: ${portfolioInfo.currentlyDoing.lookingFor}

JOURNEY:
${portfolioInfo.journey.map(j => `- ${j.year}: ${j.title} - ${j.description}`).join("\n")}

SKILLS:
- Frontend: ${portfolioInfo.skills.frontend.join(", ")}
- Backend: ${portfolioInfo.skills.backend.join(", ")}
- Database: ${portfolioInfo.skills.database.join(", ")}
- Tools: ${portfolioInfo.skills.tools.join(", ")}

AI & ML SKILLS:
- Knowledge: ${portfolioInfo.aiSkills.knowledge.join(", ")}
- AI Tools: ${portfolioInfo.aiSkills.tools.join(", ")}
- AI Projects: ${portfolioInfo.aiSkills.projects.join(", ")}
- AI Interests: ${portfolioInfo.aiSkills.interests.join(", ")}
- Currently Learning in AI: ${portfolioInfo.aiSkills.learning.join(", ")}

PROJECTS:
${portfolioInfo.projects.map(p => `- ${p.name}: ${p.desc} (${p.tech})${p.live ? ` - Live: ${p.live}` : ""}`).join("\n")}

EXPERIENCE:
${portfolioInfo.internships.map(i => `- ${i.role} at ${i.company} (${i.duration})`).join("\n")}

RESPONSE GUIDELINES:
- For greetings: Warmly greet and offer to help learn about Brijesh
- For skills questions: List relevant skills from above
- For project questions: Describe projects with tech stack and include live links
- For contact: Provide email, phone, LinkedIn ${portfolioInfo.linkedin} and WhatsApp ${portfolioInfo.whatsapp}
- For about/who is Brijesh: Share the about section info
- For journey/timeline: Share his learning journey from 2022 to now
- For hiring: Mention he's open to opportunities and how to reach him with links
- For unrelated questions: "I'm here to help you learn about Brijesh and his work! Feel free to ask about his skills, projects, experience, or how to contact him."`;

// Fallback rule-based response generator
const generateFallbackResponse = (message) => {
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("hey")) {
    return `Hey there! 👋 I'm Brijesh's portfolio assistant. I can tell you about his skills, projects, experience, journey, or how to get in touch. What would you like to know?`;
  }
  if (lowerMsg.includes("about") || lowerMsg.includes("who is") || lowerMsg.includes("tell me about")) {
    return `${portfolioInfo.about}\n\n📊 Quick Stats:\n• ${portfolioInfo.stats.projects} Projects Built\n• ${portfolioInfo.stats.experience}\n• ${portfolioInfo.stats.technologies} Technologies\n\n🟢 Currently open to opportunities!`;
  }
  if (lowerMsg.includes("journey") || lowerMsg.includes("timeline") || lowerMsg.includes("story") || lowerMsg.includes("path") || lowerMsg.includes("how did")) {
    const journeyText = portfolioInfo.journey.map(j => `${j.year}: ${j.title}\n   ${j.description}`).join("\n\n");
    return `🚀 Brijesh's Journey:\n\n${journeyText}\n\nHe's always learning and ready for new challenges!`;
  }
  if (lowerMsg.includes("currently") || lowerMsg.includes("doing now") || lowerMsg.includes("what is he doing") || lowerMsg.includes("right now") || lowerMsg.includes("these days") || lowerMsg.includes("nowadays")) {
    const activities = portfolioInfo.currentlyDoing.activities.map(a => `• ${a}`).join("\n");
    return `🎯 What Brijesh is Currently Doing:\n\n${activities}\n\n📚 Currently Learning: ${portfolioInfo.currentlyDoing.learning.join(", ")}\n\n🔍 Looking For: ${portfolioInfo.currentlyDoing.lookingFor}\n\n💼 Connect: ${portfolioInfo.linkedin}`;
  }
  if (lowerMsg.includes("available") || lowerMsg.includes("open to") || lowerMsg.includes("looking for") || lowerMsg.includes("job") || lowerMsg.includes("opportunity")) {
    return `🟢 Yes! Brijesh is currently ${portfolioInfo.currentlyDoing.status}!\n\nHe's looking for: ${portfolioInfo.currentlyDoing.lookingFor}\n\n📧 Email: ${portfolioInfo.email}\n💼 LinkedIn: ${portfolioInfo.linkedin}\n📱 WhatsApp: ${portfolioInfo.whatsapp}\n\nFeel free to reach out!`;
  }
  if (lowerMsg.includes("learning") || lowerMsg.includes("studying")) {
    return `📚 Brijesh is currently learning:\n\n• ${portfolioInfo.currentlyDoing.learning.join("\n• ")}\n\nHe's always expanding his skillset and staying up-to-date with the latest technologies!`;
  }
  if (lowerMsg.includes("name") || lowerMsg.includes("who")) {
    return `I'm the AI assistant for Brijesh Patel, a ${portfolioInfo.role} based in ${portfolioInfo.location}. He has ${portfolioInfo.experience} of hands-on experience building full-stack applications.\n\n${portfolioInfo.about}`;
  }
  // AI-related questions
  if (lowerMsg.includes("ai") || lowerMsg.includes("artificial intelligence") || lowerMsg.includes("machine learning") || lowerMsg.includes("ml") || lowerMsg.includes("generative") || lowerMsg.includes("gen ai") || lowerMsg.includes("agentic") || lowerMsg.includes("llm")) {
    return `🤖 Brijesh's AI & ML Skills:\n\n📚 Knowledge: ${portfolioInfo.aiSkills.knowledge.join(", ")}\n\n🛠️ AI Tools: ${portfolioInfo.aiSkills.tools.join(", ")}\n\n🚀 AI Projects:\n• ${portfolioInfo.aiSkills.projects.join("\n• ")}\n\n📖 Currently Learning: ${portfolioInfo.aiSkills.learning.join(", ")}\n\n💡 Interests: ${portfolioInfo.aiSkills.interests.join(", ")}`;
  }
  if (lowerMsg.includes("prompt") || lowerMsg.includes("chatbot") || lowerMsg.includes("gpt") || lowerMsg.includes("openai")) {
    return `Brijesh has experience with AI integration:\n\n🔧 Tools: ${portfolioInfo.aiSkills.tools.join(", ")}\n\n💡 This chatbot you're talking to is built by Brijesh using Perplexity Sonar API!\n\nHe's interested in building AI-powered web applications and exploring autonomous AI agents.`;
  }
  if (lowerMsg.includes("skill") || lowerMsg.includes("tech") || lowerMsg.includes("stack") || lowerMsg.includes("know")) {
    return `Brijesh is skilled in:\n\n🎨 Frontend: ${portfolioInfo.skills.frontend.join(", ")}\n⚙️ Backend: ${portfolioInfo.skills.backend.join(", ")}\n🗄️ Database: ${portfolioInfo.skills.database.join(", ")}\n🛠️ Tools: ${portfolioInfo.skills.tools.join(", ")}\n🤖 AI/ML: ${portfolioInfo.aiSkills.knowledge.join(", ")}\n\nWant to know about any specific technology or his projects?`;
  }
  if (lowerMsg.includes("experience") || lowerMsg.includes("work") || lowerMsg.includes("intern")) {
    return `Brijesh has completed two internships:\n\n1️⃣ MERN Stack Intern at EY Global Delivery Services & AICTE (Feb-Mar 2025) - Part of the Next Gen Employability Program\n\n2️⃣ MERN Stack Intern at CreArt Solutions, Ahmedabad (July 2025)\n\nHe's currently open to new opportunities!\n\n💼 Connect on LinkedIn: ${portfolioInfo.linkedin}`;
  }
  if (lowerMsg.includes("contact") || lowerMsg.includes("email") || lowerMsg.includes("hire") || lowerMsg.includes("reach") || lowerMsg.includes("phone") || lowerMsg.includes("whatsapp")) {
    return `You can reach Brijesh through:\n\n📧 Email: ${portfolioInfo.email}\n📱 WhatsApp: ${portfolioInfo.whatsapp}\n💼 LinkedIn: ${portfolioInfo.linkedin}\n🐙 GitHub: ${portfolioInfo.github}\n\nHe's open to opportunities and usually responds within a few hours!`;
  }
  if (lowerMsg.includes("linkedin")) {
    return `Connect with Brijesh on LinkedIn:\n\n💼 ${portfolioInfo.linkedin}\n\nHe's active daily and open to professional networking and opportunities!`;
  }
  if (lowerMsg.includes("github")) {
    return `Check out Brijesh's code on GitHub:\n\n🐙 ${portfolioInfo.github}\n\nHe has ${portfolioInfo.stats.projects} projects showcasing his MERN stack skills!`;
  }
  if (lowerMsg.includes("project")) {
    const projectList = portfolioInfo.projects.map(p => `• ${p.name}: ${p.desc}${p.live ? `\n  🔗 ${p.live}` : ""}`).join("\n\n");
    return `Brijesh has built ${portfolioInfo.stats.projects} projects:\n\n${projectList}\n\nWant details about any specific project?`;
  }
  if (lowerMsg.includes("bookmylook") || lowerMsg.includes("salon")) {
    return `BookMyLook is a modern salon booking platform featuring:\n• Real-time queue management with Socket.IO\n• OTP authentication\n• Admin dashboard\n• Beautiful UI animations\n\nTech: React, Node.js, Express, MongoDB, Socket.IO, Tailwind CSS\n🔗 Live: https://book-my-look.vercel.app`;
  }
  if (lowerMsg.includes("tastybites") || lowerMsg.includes("recipe")) {
    return `TastyBites is a recipe sharing platform with:\n• User authentication\n• Recipe management (create, save, explore)\n• Admin dashboard\n• Search & filter functionality\n\nTech: React, Node.js, Express, MongoDB, Tailwind CSS\n🔗 Live: https://tasty-bites-iota.vercel.app`;
  }
  if (lowerMsg.includes("securepass") || lowerMsg.includes("password")) {
    return `SecurePass is a password management app featuring:\n• Encrypted password storage\n• Auto-generate secure passwords\n• User authentication\n\nTech: React, Node.js, Express, MongoDB\n🔗 Live: https://secure-pass-jet.vercel.app`;
  }
  if (lowerMsg.includes("skywave") || lowerMsg.includes("weather")) {
    return `SkyWave is a beautiful weather application with:\n• Real-time weather data\n• Dark/Light mode toggle\n• Animated weather icons\n• Location search\n\nTech: React, Tailwind CSS, Weather API\n🔗 Live: https://sky-wave-jade.vercel.app`;
  }
  if (lowerMsg.includes("medical") || lowerMsg.includes("image enhancer")) {
    return `Medical Image Enhancer is an AI-powered tool for:\n• Medical image enhancement\n• AI processing for better clarity\n• Batch processing support\n\nTech: Python, AI/ML, OpenCV\n🔗 Demo: https://huggingface.co/spaces/dhruv020/EDSR-model`;
  }
  if (lowerMsg.includes("location") || lowerMsg.includes("where") || lowerMsg.includes("based")) {
    return `Brijesh is based in ${portfolioInfo.location}, India. He's open to remote opportunities as well as on-site positions!\n\n💼 Connect: ${portfolioInfo.linkedin}`;
  }
  if (lowerMsg.includes("education") || lowerMsg.includes("study") || lowerMsg.includes("college")) {
    return `Brijesh is currently a ${portfolioInfo.education}, passionate about web development and building real-world applications. He started his journey in 2022 and has been growing ever since!`;
  }
  if (lowerMsg.includes("thank")) {
    return `You're welcome! 😊 Feel free to reach out to Brijesh:\n\n💼 LinkedIn: ${portfolioInfo.linkedin}\n📧 Email: ${portfolioInfo.email}`;
  }
  if (lowerMsg.includes("resume") || lowerMsg.includes("cv")) {
    return `You can view Brijesh's resume by clicking the "View Resume" button in the Hero section or Contact section of this portfolio!`;
  }
  if (lowerMsg.includes("social") || lowerMsg.includes("connect") || lowerMsg.includes("follow")) {
    return `Connect with Brijesh:\n\n💼 LinkedIn: ${portfolioInfo.linkedin}\n🐙 GitHub: ${portfolioInfo.github}\n📱 WhatsApp: ${portfolioInfo.whatsapp}\n📧 Email: ${portfolioInfo.email}`;
  }
  
  return `I'm here to help you learn about Brijesh! You can ask me about:\n\n• His background & journey\n• Skills & technologies\n• Projects he's built\n• Work experience\n• How to contact him\n\nWhat would you like to know?`;
};

// Sonar API call
const callSonarAPI = async (messages) => {
  if (!SONAR_API_KEY) {
    throw new Error("API key not configured");
  }

  const response = await fetch(SONAR_API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${SONAR_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "sonar",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
      max_tokens: 300,
      temperature: 0.3,
      search_recency_filter: "none",
    }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: `Hey! 👋 I'm Brijesh's portfolio assistant. Ask me about his skills, projects, experience, or how to get in touch!`, isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show tooltip only once on first load after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasOpenedOnce) {
        setShowTooltip(true);
        // Auto-hide tooltip after 6 seconds
        setTimeout(() => setShowTooltip(false), 6000);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Track when chat is opened for the first time
  const handleToggleChat = () => {
    if (!isOpen && !hasOpenedOnce) {
      setHasOpenedOnce(true);
      setShowTooltip(false);
    }
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    
    const newHistory = [...chatHistory, { role: "user", content: input }];
    setChatHistory(newHistory);
    
    setInput("");
    setIsTyping(true);

    let botResponseText;

    try {
      botResponseText = await callSonarAPI(newHistory);
    } catch (error) {
      console.log("Sonar API unavailable, using fallback:", error.message);
      botResponseText = generateFallbackResponse(input);
    }

    const botResponse = { id: Date.now() + 1, text: botResponseText, isBot: true };
    setMessages(prev => [...prev, botResponse]);
    setChatHistory(prev => [...prev, { role: "assistant", content: botResponseText }]);
    setIsTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button with Animation */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Subtle Pulsing Ring Animation - Only when closed */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500/30 dark:bg-cyan-400/30"
            animate={{
              scale: [1, 1.15],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}

        {/* Chat Bubble Tooltip - Only on first load, never again after opened */}
        <AnimatePresence>
          {showTooltip && !hasOpenedOnce && (
            <motion.div
              className="absolute bottom-[60px] right-[-4px] bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-500 dark:to-blue-600 text-white px-4 py-2.5 rounded-2xl shadow-xl whitespace-nowrap"
              initial={{ opacity: 0, y: 5, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm font-medium">👋 Hey! Ask me anything about Brijesh!</span>
              {/* Triangle pointer - centered on button */}
              <div className="absolute -bottom-[6px] right-[22px] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-indigo-600 dark:border-t-blue-600" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          className="relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-500 dark:to-blue-500 text-white shadow-lg hover:shadow-xl flex items-center justify-center"
          onClick={handleToggleChat}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <FaTimes className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <FaRobot className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl overflow-hidden flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-500 dark:to-blue-500 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <FaRobot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Portfolio Assistant</h3>
                  <p className="text-xs opacity-80">Ask about Brijesh!</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className={`flex items-end gap-2 max-w-[80%] ${msg.isBot ? "" : "flex-row-reverse"}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.isBot 
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-500 dark:to-blue-500 text-white" 
                        : "bg-slate-300 dark:bg-slate-600 text-slate-700 dark:text-slate-200"
                    }`}>
                      {msg.isBot ? <FaRobot className="w-3.5 h-3.5" /> : <FaUser className="w-3.5 h-3.5" />}
                    </div>
                    <div className={`px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                      msg.isBot 
                        ? "bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-bl-md shadow-sm" 
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-500 dark:to-blue-500 text-white rounded-br-md"
                    }`}>
                      {parseMessageWithLinks(msg.text, msg.isBot)}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div className="flex justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="flex items-end gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-500 dark:to-blue-500 flex items-center justify-center text-white">
                      <FaRobot className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-white dark:bg-slate-700 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 px-4 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 text-sm"
                />
                <motion.button
                  onClick={handleSend}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-500 dark:to-blue-500 text-white flex items-center justify-center disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!input.trim()}
                >
                  <FaPaperPlane className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
