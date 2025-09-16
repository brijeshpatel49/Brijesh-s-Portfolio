// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact, 
  FaNodeJs, 
  FaDatabase,
  FaHtml5,
  FaPhp,
  FaMedkit,
  FaLock,
  FaHotel,
  FaUtensils,
  FaCut,
  FaUsers,
  FaShieldAlt,
  FaCloudSun,
  FaImage,
  FaCode,
  FaCircle,
  FaClock,
  FaStar,
  FaCog,
  FaBolt,
  FaLaptopCode,
  FaAtom,
  FaCubes
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss,
  SiSocketdotio,
  SiMysql,
  SiJavascript
} from 'react-icons/si';
import { useEffect, useState } from 'react';

const projects = [
  {
    id: 1,
    title: "BookMyLook",
    subtitle: "Modern Salon Booking Platform",
    description: "A comprehensive salon booking system featuring real-time queue management, OTP authentication, and beautiful UI animations. Users can book appointments, join queues, and track their position in real-time.",
    screenshot: "/screenshots/bookmylook.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS"],
    features: ["Real-time Queue Management", "OTP Authentication", "Admin Dashboard", "User Management"],
    github: "https://github.com/brijeshpatel49/BookMyLook",
    demo: "https://book-my-look.vercel.app",
    category: "Full-Stack",
    status: "live",
    gradient: "from-pink-500 to-purple-600",
    icon: FaCut
  },
  {
    id: 2,
    title: "TastyBites",
    subtitle: "Recipe Sharing Platform",
    description: "A full-stack recipe sharing web application where users can explore, save, and create recipes. Features user authentication, admin dashboard, and a beautiful responsive interface.",
    screenshot: "/screenshots/tastybites.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: ["Recipe Management", "User Authentication", "Admin Dashboard", "Search & Filter"],
    github: "https://github.com/brijeshpatel49/TastyBites",
    demo: "https://tasty-bites-iota.vercel.app/",
    category: "Full-Stack",
    status: "live",
    gradient: "from-orange-500 to-red-600",
    icon: FaUtensils
  },
  {
    id: 3,
    title: "SecurePass",
    subtitle: "Password Management App",
    description: "A secure password management application built with the MERN stack, providing encrypted storage and easy access to credentials with advanced security features.",
    screenshot: "/screenshots/securepass.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Encryption"],
    features: ["Password Encryption", "Secure Storage", "Auto-generate Passwords", "User Authentication"],
    github: "https://github.com/brijeshpatel49/SecurePass",
    demo: "https://secure-pass-jet.vercel.app/",
    category: "Full-Stack",
    status: "live",
    gradient: "from-blue-500 to-indigo-600",
    icon: FaLock
  },
  {
    id: 4,
    title: "Hotel Booking System",
    subtitle: "Hotel Management Platform",
    description: "A comprehensive hotel booking web application built with HTML, CSS, PHP, and MySQL, allowing users to register, log in, browse rooms, and manage their bookings efficiently.",
    screenshot: "/screenshots/hotelbooking.png",
    technologies: ["HTML5", "CSS3", "PHP", "MySQL", "JavaScript"],
    features: ["Room Booking", "User Management", "Admin Panel", "Booking History"],
    github: "https://github.com/brijeshpatel49/Hotel_Booking_with_Backend",
    demo: "#",
    category: "Full Stack",
    status: "offline",
    gradient: "from-green-500 to-emerald-600",
    icon: FaHotel
  },
  {
    id: 5,
    title: "SkyWave",
    subtitle: "Modern Weather Application",
    description: "A beautiful, responsive weather app built with React and Tailwind CSS, featuring dark/light mode toggle, animated weather icons, and real-time weather data from OpenWeatherMap API.",
    screenshot: "/screenshots/skywave.png",
    technologies: ["React", "Tailwind CSS", "Weather API", "JavaScript"],
    features: ["Real-time Weather", "Dark/Light Mode", "Animated Icons", "Location Search"],
    github: "https://github.com/brijeshpatel49/SkyWave",
    demo: "https://sky-wave-jade.vercel.app/",
    category: "Frontend",
    status: "live",
    gradient: "from-sky-500 to-blue-600",
    icon: FaCloudSun
  },
  {
    id: 6,
    title: "Medical Image Enhancer",
    subtitle: "AI-Powered Image Processing",
    description: "An advanced medical image enhancement tool that uses AI algorithms to improve image quality, contrast, and clarity for better medical diagnosis and analysis.",
    screenshot: "/screenshots/medical-enhancer.png",
    technologies: ["Python", "AI/ML", "Image Processing", "OpenCV"],
    features: ["Image Enhancement", "AI Processing", "Medical Focus", "Batch Processing"],
    github: "https://github.com/brijeshpatel49/Medical-image-Enhancer",
    demo: "https://huggingface.co/spaces/dhruv020/EDSR-model",
    category: "AI/ML",
    status: "live",
    gradient: "from-emerald-500 to-teal-600",
    icon: FaMedkit
  }
];

// Hero-style floating particles
const ProjectsParticleIcons = () => {
  const [particles, setParticles] = useState([]);

  const iconList = [
    FaCode, FaStar, FaCog, FaBolt, FaLaptopCode, FaDatabase, FaCubes, FaAtom,
    FaReact, FaNodeJs, SiMongodb, SiExpress
  ];

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 25 }).map((_, index) => {
        const randomIcon = iconList[Math.floor(Math.random() * iconList.length)];
        return {
          id: index,
          Icon: randomIcon,
          position: {
            top: 5 + Math.random() * 90,
            left: 5 + Math.random() * 90,
          },
          size: 16 + Math.random() * 20,
          animationConfig: {
            duration: 12 + Math.random() * 18,
            delay: Math.random() * 10,
          },
          opacity: 0.15 + Math.random() * 0.2,
        };
      });
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {particles.map((particle) => {
        const IconComponent = particle.Icon;
        return (
          <motion.div
            key={particle.id}
            className="absolute text-blue-700/25 dark:text-blue-400/30"
            style={{
              top: `${particle.position.top}%`,
              left: `${particle.position.left}%`,
              fontSize: `${particle.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -10, 0],
              rotate: [0, 360],
              opacity: [
                particle.opacity,
                particle.opacity * 1.6,
                particle.opacity,
              ],
            }}
            transition={{
              duration: particle.animationConfig.duration,
              delay: particle.animationConfig.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <IconComponent />
          </motion.div>
        );
      })}
    </div>
  );
};

// Hero-style animated background
const AnimatedBackground = () => {
  return (
    <>
      {/* Dark Mode Background */}
      <div className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-1000">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/25 to-sky-600/25 rounded-full blur-3xl"
          animate={{
            x: [0, -70, 30, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.7, 1.2, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Light Mode Background - Minimal Pattern Only */}
      <div className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </>
  );
};

const ProjectCard = ({ project, index }) => {
  const handleImageClick = () => {
    if (project.status === 'live' && project.demo !== '#') {
      window.open(project.demo, '_blank', 'noopener,noreferrer');
    }
  };

  const handleGithubClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(project.github, '_blank', 'noopener,noreferrer');
  };

  const handleVisitClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.status === 'live' && project.demo !== '#') {
      window.open(project.demo, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className="group relative bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 dark:border-slate-700/50 transition-all duration-500 flex flex-col h-full"
    >
      {/* Fixed Header Section */}
      <div className="relative flex-shrink-0 p-6 pb-4">
        {/* Category Badge */}
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1.5 bg-slate-100/80 dark:bg-slate-700/80 backdrop-blur-sm text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-300/50 dark:border-slate-600/50">
            {project.category}
          </span>
          
          {/* Live Status */}
          <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs ${
            project.status === 'live' 
              ? 'bg-green-500/20 text-green-600 dark:text-green-300' 
              : 'bg-orange-500/20 text-orange-600 dark:text-orange-300'
          }`}>
            <FaCircle className={`w-1.5 h-1.5 ${
              project.status === 'live' ? 'text-green-500 dark:text-green-400 animate-pulse' : 'text-orange-500 dark:text-orange-400'
            }`} />
          </div>
        </div>

        {/* Project Name & Description */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-3">
            {project.subtitle}
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Content Section - Flexible */}
      <div className="flex-1 px-6 pb-6 flex flex-col">
        {/* Direct Rounded Image - Clickable */}
        <div className="mb-6">
          <motion.div
            onClick={handleImageClick}
            className={`relative h-48 bg-slate-200 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg group ${
              project.status === 'live' && project.demo !== '#' ? 'cursor-pointer' : 'cursor-default'
            }`}
            whileHover={project.status === 'live' && project.demo !== '#' ? { scale: 1.02 } : {}}
            whileTap={project.status === 'live' && project.demo !== '#' ? { scale: 0.98 } : {}}
          >
            <img
              src={project.screenshot}
              alt={`${project.title} Screenshot`}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback UI */}
            <div className="hidden w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-900 items-center justify-center">
              <div className="text-center">
                <project.icon className="text-5xl text-slate-600 dark:text-slate-500 mx-auto mb-3" />
                <div className="text-sm text-slate-700 dark:text-slate-400 font-medium">{project.title}</div>
                <div className="text-xs text-slate-600 dark:text-slate-500 mt-1">Screenshot Coming Soon</div>
              </div>
            </div>

            {/* Hover overlay for clickable images */}
            {project.status === 'live' && project.demo !== '#' && (
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  <FaExternalLinkAlt className="text-white text-lg" />
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Technology Stack */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-3">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium border border-slate-300/50 dark:border-slate-600/50 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6 flex-1">
          <h4 className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-3">
            Key Features
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {project.features.map((feature, featureIndex) => (
              <motion.span
                key={featureIndex}
                className="px-3 py-2 bg-slate-100/80 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium border border-slate-300/40 dark:border-slate-600/30 text-center whitespace-nowrap overflow-hidden text-ellipsis"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: featureIndex * 0.1 }}
                whileHover={{ scale: 1.02, y: -1 }}
                title={feature} // Tooltip for long text
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Action Buttons - Fixed at Bottom */}
        <div className="flex gap-3 mt-auto">
          {project.status === 'live' && project.demo !== '#' ? (
            <motion.button
              onClick={handleVisitClick}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Visit Site
            </motion.button>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-orange-600/80 text-white rounded-xl font-semibold text-sm opacity-75 cursor-not-allowed">
              <FaClock className="w-4 h-4" />
              Coming Soon
            </div>
          )}
          
          <motion.button
            onClick={handleGithubClick}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-600 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaGithub className="w-4 h-4" />
            Code
          </motion.button>
        </div>
      </div>

      {/* Subtle Hover Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="relative py-20 bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 overflow-hidden transition-all duration-1000"
    >
      <AnimatedBackground />
      <ProjectsParticleIcons />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-blue-200/60 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-500/40 dark:border-blue-400/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold mb-4 shadow-lg">
            <FaCode className="inline mr-2" />
            Featured Projects
          </span>
          
          <h2 className="text-5xl lg:text-7xl font-extrabold mb-6">
            <span className="text-slate-800 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 dark:from-cyan-400 dark:via-blue-400 dark:to-sky-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences through clean code, modern design, and innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid - Equal Height Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/brijeshpatel49"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-600 dark:from-cyan-700 dark:to-blue-600 text-white rounded-full font-bold shadow-lg hover:shadow-blue-700/25 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02, y: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="w-4 h-4" />
            Check out all projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
