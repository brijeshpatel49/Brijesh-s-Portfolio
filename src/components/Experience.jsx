// src/components/Experience.jsx
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaCode, 
  FaProjectDiagram,
  FaLaptopCode,
  FaUsers,
  FaStar,
  FaArrowRight,
  FaGraduationCap,
  FaDatabase,
  FaServer
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

const experiences = [
  {
    id: 1,
    title: "MERN Stack Development Intern",
    company: "EY Global Delivery Services & AICTE",
    location: "Remote",
    duration: "February 10, 2025 - March 21, 2025",
    type: "Internship",
    program: "Next Gen Employability Program",
    description: "Successfully completed a 6-week intensive internship focused on Building Modern Web Applications with MERN Stack. Collaborated with EY Global Delivery Services under the Next Gen Employability Program, gaining hands-on experience in full-stack development and modern web technologies.",
    achievements: [
      "Completed comprehensive MERN Stack training program",
      "Built modern web applications using React, Node.js, Express, and MongoDB",
      "Worked on real-world projects under industry mentorship"
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "Modern Web Development", "Full-Stack Development"],
    color: "#FFD700", // EY Yellow
    icon: FaLaptopCode,
    certificate: true
  },
  {
    id: 2,
    title: "MERN Stack Development Intern",
    company: "CreArt Solutions Pvt. Ltd.",
    location: "CG Road, Ahmedabad",
    duration: "July 2, 2025 - July 16, 2025", 
    type: "Internship",
    description: "Completed a 15-day intensive summer internship specializing in MERN Stack development. Worked directly under Project Manager supervision, gaining practical experience in full-stack web development and professional software development practices.",
    achievements: [
      "Successfully completed 15-day intensive MERN Stack internship",
      "Demonstrated active participation and timely task completion",
      "Maintained professional attitude throughout the internship period"
    ],
    skills: ["MERN Stack", "React", "Node.js", "MongoDB", "Express.js", "Project Management", "Professional Development"],
    color: "#2563EB", // CreArt Blue
    icon: FaCode,
    certificate: true
  }
];

// Enhanced floating particles
const ExperienceParticleIcons = () => {
  const [particles, setParticles] = useState([]);

  const iconList = [
    FaCode, FaBriefcase, FaProjectDiagram, FaLaptopCode, FaUsers, FaStar, FaDatabase, FaServer
  ];

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 15 }).map((_, index) => {
        const randomIcon = iconList[Math.floor(Math.random() * iconList.length)];
        return {
          id: index,
          Icon: randomIcon,
          position: {
            top: 5 + Math.random() * 90,
            left: 5 + Math.random() * 90,
          },
          size: 14 + Math.random() * 16,
          animationConfig: {
            duration: 10 + Math.random() * 15,
            delay: Math.random() * 8,
          },
          opacity: 0.1 + Math.random() * 0.15,
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
            className="absolute text-blue-700/20 dark:text-blue-400/25"
            style={{
              top: `${particle.position.top}%`,
              left: `${particle.position.left}%`,
              fontSize: `${particle.size}px`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 12, -8, 0],
              rotate: [0, 360],
              opacity: [
                particle.opacity,
                particle.opacity * 1.5,
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

// Animated background matching your portfolio style
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

      {/* Light Mode Background */}
      <div className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </>
  );
};

const ExperienceCard = ({ experience, index }) => {
  const IconComponent = experience.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/40 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 mb-8"
    >
      {/* Card Header */}
      <div className="relative p-4 sm:p-6 pb-3 sm:pb-4">
        {/* Top Row - Badges and Icon */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm font-semibold border border-blue-200/50 dark:border-blue-700/30">
              {experience.type}
            </span>
            {experience.certificate && (
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 text-green-800 dark:text-green-200 rounded-full text-xs sm:text-sm font-semibold border border-green-200/50 dark:border-green-700/30">
                ✓ Certified
              </span>
            )}
          </div>
          
          {/* Enhanced Icon - Hidden on mobile */}
          <motion.div 
            className="hidden sm:flex w-12 h-12 rounded-xl items-center justify-center shadow-lg"
            style={{ backgroundColor: experience.color }}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <IconComponent className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        {/* Title & Company Info */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
            {experience.title}
          </h3>
          
          {/* Company Info - Horizontal Layout, Remove Icons on Mobile */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-slate-600 dark:text-slate-400 text-sm mb-2">
            <div className="flex items-center gap-2">
              <FaBriefcase className="hidden sm:inline w-4 h-4 flex-shrink-0" />
              <span className="font-medium">{experience.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="hidden sm:inline w-4 h-4 flex-shrink-0" />
              <span>{experience.location}</span>
            </div>
          </div>
          
          {/* Duration - Remove Icon on Mobile */}
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-500 text-sm mb-3">
            <FaCalendarAlt className="hidden sm:inline w-4 h-4 flex-shrink-0" />
            <span>{experience.duration}</span>
          </div>
          
          {/* Program Badge - Remove Icon on Mobile */}
          {experience.program && (
            <div className="mt-3">
              <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/40 dark:to-orange-900/40 text-yellow-800 dark:text-yellow-200 rounded-full text-xs sm:text-sm font-medium border border-yellow-200/50 dark:border-yellow-700/30">
                <FaGraduationCap className="hidden sm:inline w-4 h-4 mr-2 flex-shrink-0" />
                {experience.program}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
        {/* Description */}
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
          {experience.description}
        </p>

        {/* Key Achievements */}
        <div className="mb-4 sm:mb-6">
          <h4 className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-3">
            Key Achievements
          </h4>
          <div className="space-y-2">
            {experience.achievements.map((achievement, achIndex) => (
              <motion.div
                key={achIndex}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + achIndex * 0.1 + 0.3 }}
              >
                <div 
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: experience.color }}
                />
                <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {achievement}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Used */}
        <div className="mb-4">
          <h4 className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-3">
            Technologies & Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, skillIndex) => (
              <motion.span
                key={skillIndex}
                className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium border border-slate-200/50 dark:border-slate-600/30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + skillIndex * 0.05 + 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  borderColor: experience.color
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Hover Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${experience.color}, transparent)` }}
      />
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 overflow-hidden transition-all duration-1000"
    >
      <AnimatedBackground />
      <ExperienceParticleIcons />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.span 
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-200/60 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-500/40 dark:border-blue-400/30 text-blue-800 dark:text-blue-300 rounded-full text-xs sm:text-sm font-semibold mb-4 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <FaGraduationCap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Professional Journey
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
            <span className="text-slate-800 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 dark:from-cyan-400 dark:via-blue-400 dark:to-sky-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Building expertise through certified internships and hands-on experience with industry-leading organizations
          </p>
        </motion.div>

        {/* Experience Cards - Horizontal Layout */}
        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-700 to-blue-600 dark:from-cyan-700 dark:to-blue-600 text-white rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-blue-700/25 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Work Together</span>
            <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
