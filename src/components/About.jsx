// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaRocket,
  FaCode,
  FaBrain,
  FaHeart,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaCoffee,
  FaLaptopCode,
} from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss, SiGit } from "react-icons/si";

const About = () => {
  // Background floating icons
  const backgroundIcons = [
    { Icon: FaReact, x: "10%", y: "15%", delay: 0, color: "#61DAFB" },
    { Icon: FaNodeJs, x: "85%", y: "20%", delay: 1, color: "#339933" },
    { Icon: SiMongodb, x: "15%", y: "75%", delay: 2, color: "#47A248" },
    { Icon: SiJavascript, x: "80%", y: "70%", delay: 0.5, color: "#F7DF1E" },
    { Icon: FaGithub, x: "20%", y: "40%", delay: 1.5, color: "#666666" },
    { Icon: SiTailwindcss, x: "75%", y: "45%", delay: 2.5, color: "#06B6D4" },
    { Icon: FaCoffee, x: "5%", y: "60%", delay: 3, color: "#8B4513" },
    { Icon: FaLaptopCode, x: "90%", y: "85%", delay: 0.8, color: "#4A90E2" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 overflow-hidden transition-all duration-1000"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark Mode Background */}
        <div className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-1000">
          <motion.div
            className="absolute -top-60 -right-60 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 40, 0],
              scale: [1, 1.3, 0.8, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-60 -left-60 w-80 h-80 bg-gradient-to-r from-cyan-600/25 to-sky-600/25 rounded-full blur-3xl"
            animate={{
              x: [0, -70, 30, 0],
              y: [0, 60, -40, 0],
              scale: [1, 0.7, 1.2, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Light Mode Background */}
        <div className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-1000">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Floating tech icons - Very subtle in light mode */}
        {backgroundIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute opacity-5 dark:opacity-20"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -10, 0],
              rotate: [0, 360],
              opacity: [0.05, 0.08, 0.05], // Very subtle for light mode
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <item.Icon
              className="w-8 h-8 md:w-12 md:h-12"
              style={{ color: item.color }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-flex items-center px-6 py-3 bg-blue-200/60 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-500/40 dark:border-blue-400/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium tracking-wide uppercase shadow-lg">
            <FaBrain className="mr-2" />
            MY JOURNEY
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-slate-800 dark:text-white">Meet </span>
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 dark:from-cyan-400 dark:via-blue-400 dark:to-sky-400 bg-clip-text text-transparent">
              Brijesh
            </span>
          </h2>

          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto">
            Aspiring full-stack developer with 1+ year of hands-on experience in
            MERN stack. Built secure, responsive applications with
            authentication, CRUD operations, and modern deployments through
            personal projects and internship experience. I'm passionate about
            turning ideas into digital reality and always excited to learn new
            technologies.
          </p>
        </motion.div>

        {/* Info Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 px-5 py-3 bg-white/90 dark:bg-white/10 border border-blue-600/40 dark:border-cyan-700/30 backdrop-blur-xl rounded-full shadow-xl hover:bg-blue-800/10 dark:hover:bg-cyan-600/20 transition-all duration-300">
            <FaMapMarkerAlt className="text-blue-700 dark:text-cyan-600" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              Mahesana, India
            </span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 bg-white/90 dark:bg-white/10 border border-blue-600/40 dark:border-cyan-700/30 backdrop-blur-xl rounded-full shadow-xl hover:bg-blue-800/10 dark:hover:bg-cyan-600/20 transition-all duration-300">
            <FaGraduationCap className="text-blue-700 dark:text-cyan-600" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              Computer Science Student
            </span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 bg-green-50 dark:bg-green-900/30 border border-green-500/40 dark:border-green-400/30 backdrop-blur-xl rounded-full shadow-xl hover:bg-green-100 dark:hover:bg-green-800/30 transition-all duration-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 dark:text-green-300 font-medium">
              Open to Opportunities
            </span>
          </div>
        </motion.div>

        {/* Stats - Updated Text */}
        <motion.div
          className="grid grid-cols-3 gap-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            {
              number: "5+",
              label: "Projects Built",
              color: "text-purple-600 dark:text-purple-400",
            },
            {
              number: "1+",
              label: "Year Experience in MERN Stack",
              color: "text-blue-600 dark:text-blue-400",
            },
            {
              number: "14+",
              label: "Technologies",
              color: "text-indigo-600 dark:text-indigo-400",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className={`text-6xl font-bold ${stat.color} mb-2 group-hover:drop-shadow-2xl transition-all duration-300`}
              >
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline - Properly Centered Dot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl font-bold text-slate-800 dark:text-white mb-16">
            My Journey So Far
          </h3>

          <div className="relative max-w-6xl mx-auto">
            {/* Background Line - Properly positioned */}
            <div
              className="hidden md:block absolute left-0 right-0 h-1 bg-slate-300 dark:bg-gray-600/25 rounded-full"
              style={{ top: "32px" }}
            ></div>

            {/* Animated Line - Same position as background */}
            <motion.div
              className="hidden md:block absolute left-0 h-1 rounded-full bg-gradient-to-r from-green-500 via-blue-500 via-purple-500 to-red-500 shadow-lg"
              style={{ top: "32px" }}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{
                delay: 0.8,
                duration: 2.0,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            />

            {/* Perfectly Centered Dot */}
            <motion.div
              className="hidden md:block absolute w-4 h-4 bg-blue-600 dark:bg-cyan-400 rounded-full shadow-2xl border-2 border-white dark:border-slate-800"
              style={{
                top: "30px", // 32px (line position) - 2px (half of 4px dot height) = 30px
              }}
              initial={{ left: "-8px" }} // -8px (half of 16px dot width)
              whileInView={{ left: "calc(100% - 8px)" }} // End position minus half dot width
              transition={{
                delay: 0.8,
                duration: 2.0,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            />

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  year: "2022",
                  title: "Started Learning",
                  description:
                    "Began my web development journey with HTML, CSS, and JavaScript",
                  icon: FaRocket,
                  iconBg: "bg-gradient-to-br from-green-500 to-green-600",
                  shadowColor: "shadow-green-500/50",
                },
                {
                  year: "2023",
                  title: "MERN Stack",
                  description:
                    "Dove deep into React, Node.js, Express, and MongoDB",
                  icon: FaCode,
                  iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
                  shadowColor: "shadow-blue-500/50",
                },
                {
                  year: "2024",
                  title: "Real Projects",
                  description:
                    "Built 5+ full-stack applications and completed internship",
                  icon: FaBrain,
                  iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
                  shadowColor: "shadow-purple-500/50",
                },
                {
                  year: "Now",
                  title: "Ready for More",
                  description:
                    "Seeking opportunities to contribute to amazing projects",
                  icon: FaHeart,
                  iconBg: "bg-gradient-to-br from-red-500 to-red-600",
                  shadowColor: "shadow-red-500/50",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center relative group"
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 0.8 + index * 0.5, // Perfectly timed with line progression
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mx-auto mb-6 ${item.iconBg} rounded-full flex items-center justify-center text-white shadow-2xl ${item.shadowColor} relative z-10 group-hover:scale-110 transition-all duration-300 border-2 border-white/60 dark:border-white/20`}
                  >
                    <item.icon className="text-xl" />

                    {/* Pulsing ring on hover */}
                    <motion.div
                      className={`absolute inset-0 ${item.iconBg} rounded-full opacity-0 group-hover:opacity-30 blur-lg`}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3 relative z-10">
                    <div className="text-2xl font-bold text-slate-800 dark:text-white">
                      {item.year}
                    </div>
                    <div className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                      {item.title}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed px-2">
                      {item.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
            Let's build something amazing together! 🚀
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-700 to-blue-600 dark:from-cyan-700 dark:to-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-700/25 transition-all duration-300"
          >
            <a href="#contact">Let's Connect</a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
