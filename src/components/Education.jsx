// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaMapMarkerAlt, 
  FaClock, 
  FaTrophy,
  FaUniversity,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaCoffee,
  FaLaptopCode
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiMongodb, 
  SiTailwindcss,
} from 'react-icons/si';

const Education = () => {
  // Same background icons as About section
  const backgroundIcons = [
    { Icon: FaReact, x: '10%', y: '15%', delay: 0, color: '#61DAFB' },
    { Icon: FaNodeJs, x: '85%', y: '20%', delay: 1, color: '#339933' },
    { Icon: SiMongodb, x: '15%', y: '75%', delay: 2, color: '#47A248' },
    { Icon: SiJavascript, x: '80%', y: '70%', delay: 0.5, color: '#F7DF1E' },
    { Icon: FaGithub, x: '20%', y: '40%', delay: 1.5, color: '#666666' },
    { Icon: SiTailwindcss, x: '75%', y: '45%', delay: 2.5, color: '#06B6D4' },
    { Icon: FaCoffee, x: '5%', y: '60%', delay: 3, color: '#8B4513' },
    { Icon: FaLaptopCode, x: '90%', y: '85%', delay: 0.8, color: '#4A90E2' }
  ];

  return (
    <section 
      id="education" 
      className="relative py-20 bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 overflow-hidden transition-all duration-1000"
    >
      {/* EXACT Same Background as About Section */}
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
        
        {/* Same floating tech icons as About */}
        {backgroundIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute opacity-5 dark:opacity-20"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -10, 0],
              rotate: [0, 360],
              opacity: [0.05, 0.08, 0.05],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
          >
            <item.Icon 
              className="w-8 h-8 md:w-12 md:h-12" 
              style={{ color: item.color }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center px-6 py-3 bg-blue-200/60 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-500/40 dark:border-blue-400/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium tracking-wide uppercase shadow-lg mb-8">
            <FaGraduationCap className="mr-2" />
            Education
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
            Academic <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 dark:from-cyan-400 dark:via-blue-400 dark:to-sky-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Building a strong foundation in Computer Science and Engineering with hands-on experience
          </p>
        </motion.div>

        {/* 80% Width Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-6/5 mx-auto"
        >
          <div className="bg-white/90 dark:bg-white/10 border border-blue-600/40 dark:border-cyan-700/30 backdrop-blur-xl rounded-3xl p-8 shadow-xl">
            
            {/* Main Content */}
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              
              {/* Left: University Info */}
              <div className="lg:col-span-3">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <FaUniversity className="text-white text-2xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-2 leading-tight">
                      Saffrony Institute of Technology
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-cyan-400 font-semibold mb-1">
                      Gujarat Technological University (GTU)
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 flex items-center gap-1">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      Mahesana, Gujarat
                    </p>
                  </div>
                </div>

                {/* Degree Info */}
                <div className="pl-5 border-l-4 border-purple-500/30">
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                    Bachelor of Engineering (BE)
                  </h4>
                  <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-3">
                    Computer Science & Engineering
                  </p>
                  <div className="inline-flex items-center px-3 py-1.5 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700/50 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Final Year Student
                  </div>
                </div>
              </div>

              {/* Right: Stats - All Horizontal */}
              <div className="lg:col-span-2 space-y-3">
                {/* CGPA - Now Horizontal */}
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200/50 dark:border-yellow-800/30 rounded-xl shadow-lg">
                  <FaTrophy className="text-yellow-500 text-lg" />
                  <div>
                    <div className="text-2xl font-bold text-slate-800 dark:text-white">8.5 / 10</div>
                    <div className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">CGPA</div>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-3 p-3 bg-blue-100 dark:bg-blue-900/20 rounded-xl">
                  <FaClock className="text-blue-500 text-lg" />
                  <div>
                    <div className="font-bold text-slate-800 dark:text-white">2022-2026</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Duration</div>
                  </div>
                </div>

                {/* Graduation */}
                <div className="flex items-center gap-3 p-3 bg-purple-100 dark:bg-purple-900/20 rounded-xl">
                  <FaGraduationCap className="text-purple-500 text-lg" />
                  <div>
                    <div className="font-bold text-slate-800 dark:text-white">May 2026</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Expected Graduation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Specialization Tags */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-600">
              <h5 className="text-base font-semibold text-slate-800 dark:text-white mb-4">Key Subjects & Specializations</h5>
              <div className="flex flex-wrap gap-3">
                {[
                  "MERN Stack Development", 
                  "Web Technologies", 
                  "Database Systems", 
                  "Software Engineering",
                  "Data Structures & Algorithms",
                  "Computer Networks"
                ].map((subject, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-800/30"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
  