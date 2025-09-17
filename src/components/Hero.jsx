// src/components/Hero.jsx
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaRocket,
  FaReact,
  FaNodeJs,
  FaFileAlt,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import {
  FaCode,
  FaStar,
  FaCog,
  FaBolt,
  FaLaptopCode,
  FaDatabase,
  FaCubes,
  FaAtom,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

// Enhanced Floating Particles with Darker Blue Shades
const HeroParticleIcons = () => {
  const [particles, setParticles] = useState([]);

  const iconList = [
    FaCode,
    FaStar,
    FaCog,
    FaBolt,
    FaLaptopCode,
    FaDatabase,
    FaCubes,
    FaAtom,
    FaReact,
    FaNodeJs,
    SiMongodb,
    SiExpress,
  ];

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 25 }).map((_, index) => {
        const randomIcon =
          iconList[Math.floor(Math.random() * iconList.length)];
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

// Animated Background Elements - Blue Theme
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

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 
        bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 
        dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900
        flex items-center overflow-hidden transition-all duration-1000"
    >
      <AnimatedBackground />
      <HeroParticleIcons />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left relative"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span
              className="inline-block px-6 py-3 
              bg-blue-200/60 dark:bg-blue-900/30 
              backdrop-blur-sm border 
              border-blue-500/40 dark:border-blue-400/30 
              text-blue-800 dark:text-blue-300 
              rounded-full text-sm font-semibold mb-4 shadow-lg"
            >
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-extrabold mb-6"
          >
            <span className="text-slate-800 dark:text-white">Hi, I'm </span>
            <span
              className="bg-gradient-to-r 
              from-blue-700 via-blue-600 to-indigo-700 
              dark:from-cyan-400 dark:via-blue-400 dark:to-sky-400 
              bg-clip-text text-transparent"
            >
              Brijesh
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-2xl lg:text-3xl 
              text-blue-800 dark:text-cyan-300 
              mb-6 h-20"
          >
            <TypeAnimation
              sequence={[
                "MERN Stack Enthusiast",
                2000,
                "Continuous Learner",
                2000,
                "Tech Explorer",
                2000,
                "Problem Solver",
                2000,
                "Passionate Coder",
                2000,
                "Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg 
              text-slate-700 dark:text-slate-300 
              mb-8 max-w-2xl leading-relaxed"
          >
            Passionate about creating exceptional digital experiences through
            clean code, modern design, and innovative solutions. Let's build
            something amazing together!
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
          >
            {/* View My Work Button */}
            <motion.button
              onClick={() => {
                document.getElementById("projects").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="px-8 py-4 
      bg-gradient-to-r from-blue-700 to-blue-600 
      dark:from-cyan-700 dark:to-blue-600 
      text-white rounded-full font-bold shadow-lg 
      hover:shadow-blue-700/25 transition-all duration-300 
      flex items-center gap-2"
              whileHover={{ scale: 1.02, y: 0 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket className="w-4 h-4" />
              View My Work
            </motion.button>

            {/* View Resume Button */}
            <motion.button
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/156ARq3h4oa1XoxU6ELH8vlcRb8Vhui3E/view?usp=drive_link",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="px-8 py-4 border-2 
      border-blue-500 dark:border-cyan-700 
      text-blue-700 dark:text-cyan-600 
      rounded-full font-bold 
      hover:bg-blue-800/10 dark:hover:bg-cyan-600/20 
      transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.02, y: 0 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileAlt className="w-4 h-4" />
              View Resume
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center lg:justify-start"
          >
            {[
              {
                Icon: FaGithub,
                href: "https://github.com/brijeshpatel49",
                label: "GitHub",
                isExternal: true,
              },
              {
                Icon: FaLinkedin,
                href: "https://www.linkedin.com/in/brijesh-patel-b1195b288/",
                label: "LinkedIn",
                isExternal: true,
              },
              {
                Icon: FaEnvelope,
                href: "mailto:brijeshp3349@gmail.com",
                label: "Email",
                isExternal: false,
              },
            ].map(({ Icon, href, label, isExternal }) => (
              <motion.button
                key={label}
                onClick={() => {
                  if (label === "Email") {
                    // Open email popup, not new tab
                    window.location.href = href;
                  } else {
                    // Open external links in new tab
                    window.open(href, "_blank", "noopener,noreferrer");
                  }
                }}
                className="w-12 h-12 
        bg-white/90 dark:bg-white/10 
        border border-blue-600/40 dark:border-cyan-700/30 
        rounded-full flex items-center justify-center 
        text-blue-700 dark:text-cyan-600 
        hover:text-white hover:bg-blue-700 dark:hover:bg-cyan-600/30 
        transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Terminal with External Icons and Blue Background Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:block"
        >
          {/* Blue Background Effects Around Terminal - Light Mode Only */}
          <div className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-1000">
            <motion.div
              className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-r from-blue-300/15 to-cyan-300/15 rounded-full blur-2xl"
              animate={{
                x: [0, 30, -15, 0],
                y: [0, -20, 10, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-12 -right-12 w-56 h-56 bg-gradient-to-r from-sky-300/12 to-indigo-300/12 rounded-full blur-2xl"
              animate={{
                x: [0, -25, 15, 0],
                y: [0, 15, -10, 0],
                scale: [1, 0.8, 1.1, 1],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* External Floating Icons */}
          <motion.div
            className="absolute -top-9 -left-8 
              text-blue-600/80 dark:text-cyan-400/70 z-20"
            animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <FaReact className="w-10 h-10" />
          </motion.div>

          <motion.div
            className="absolute -top-8 -right-8 
              text-blue-700/80 dark:text-cyan-400/70 z-20"
            animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <FaNodeJs className="w-10 h-10" />
          </motion.div>

          <motion.div
            className="absolute -bottom-8 -left-8 
              text-emerald-700/80 dark:text-emerald-400/70 z-20"
            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          >
            <SiMongodb className="w-8 h-8" />
          </motion.div>

          <motion.div
            className="absolute -bottom-8 -right-8 
              text-indigo-700/80 dark:text-sky-400/70 z-20"
            animate={{ rotate: [0, -90, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          >
            <SiExpress className="w-8 h-8" />
          </motion.div>

          {/* Terminal Container */}
          <div className="relative">
            <div
              className="relative 
                bg-white/95 dark:bg-gray-900/70 
                border border-slate-200 dark:border-gray-700/50 
                rounded-2xl p-8 shadow-2xl backdrop-blur-sm
                shadow-blue-300 dark:shadow-cyan-400/10"
              style={{
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 relative z-10">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-slate-500 dark:text-gray-400 text-sm ml-4">
                  Portfolio.js
                </span>
              </div>

              {/* Code Content - Light/Dark Mode Adapted */}
              <div className="font-mono text-sm relative z-10 select-text">
                <div className="text-purple-600 dark:text-purple-400 mb-1 font-semibold">
                  const developer = {`{`}
                </div>
                <div className="text-slate-700 dark:text-gray-300 ml-4 mb-1">
                  <span className="text-blue-600 dark:text-blue-300 font-semibold">
                    name
                  </span>
                  :
                  <span className="text-emerald-600 dark:text-green-400">
                    {" "}
                    "Brijesh Patel"
                  </span>
                  ,
                </div>
                <div className="text-slate-700 dark:text-gray-300 ml-4 mb-1">
                  <span className="text-blue-600 dark:text-blue-300 font-semibold">
                    role
                  </span>
                  :
                  <span className="text-emerald-600 dark:text-green-400">
                    {" "}
                    "MERN Stack Developer"
                  </span>
                  ,
                </div>
                <div className="text-slate-700 dark:text-gray-300 ml-4 mb-1">
                  <span className="text-blue-600 dark:text-blue-300 font-semibold">
                    skills
                  </span>
                  : [
                </div>
                <div className="text-emerald-600 dark:text-green-400 ml-8 mb-1">
                  "React", "Node.js", "MongoDB",
                </div>
                <div className="text-emerald-600 dark:text-green-400 ml-8 mb-1">
                  "Express", "JavaScript", "TypeScript"
                </div>
                <div className="text-slate-700 dark:text-gray-300 ml-4 mb-1">
                  ],
                </div>
                <div className="text-slate-700 dark:text-gray-300 ml-4 mb-1">
                  <span className="text-blue-600 dark:text-blue-300 font-semibold">
                    passion
                  </span>
                  :
                  <span className="text-orange-600 dark:text-yellow-400">
                    {" "}
                    "Building Amazing Apps"
                  </span>
                  ,
                </div>
                <div className="text-slate-700 dark:text-gray-300 ml-4 mb-1">
                  <span className="text-blue-600 dark:text-blue-300 font-semibold">
                    learning
                  </span>
                  :
                  <span className="text-cyan-600 dark:text-cyan-400">
                    {" "}
                    true
                  </span>
                </div>
                <div className="text-purple-600 dark:text-purple-400 font-semibold">
                  {`}`};
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
