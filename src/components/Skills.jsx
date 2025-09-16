import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, 
  FaGitAlt, FaDocker, FaPhp, FaDatabase, FaServer, FaCog
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTypescript, SiNextdotjs,
  SiTailwindcss, SiVite, SiVercel, SiPostman
} from 'react-icons/si';

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB", category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", category: "frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "frontend" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E", category: "frontend" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26", category: "frontend" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "frontend" },
  
  { name: "Node.js", icon: FaNodeJs, color: "#339933", category: "backend" },
  { name: "Express", icon: SiExpress, color: "#ffffff", category: "backend" },
  { name: "PHP", icon: FaPhp, color: "#777BB4", category: "backend" },
  
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "database" },
  { name: "SQL", icon: FaDatabase, color: "#336791", category: "database" },
  
  { name: "Git", icon: FaGitAlt, color: "#F05032", category: "tools" },
  { name: "Docker", icon: FaDocker, color: "#2496ED", category: "tools" },
  { name: "Vite", icon: SiVite, color: "#646CFF", category: "tools" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "tools" },
  { name: "n8n", icon: FaServer, color: "#EA4B71", category: "tools" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff", category: "tools" },
];

const categories = [
  {
    title: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    color: "#3B82F6",
    icon: FaReact
  },
  {
    title: "Backend", 
    technologies: ["Node.js", "Express.js", "PHP", "JWT", "REST API"],
    color: "#10B981",
    icon: FaServer
  },
  {
    title: "Database",
    technologies: ["MongoDB", "SQL", "Database Design"],
    color: "#8B5CF6", 
    icon: FaDatabase
  },
  {
    title: "Tools",
    technologies: ["Git", "Docker", "Vite", "Postman", "n8n", "Vercel","Render"],
    color: "#F59E0B",
    icon: FaCog
  }
];

const SkillCard = ({ skill, index }) => {
  const IconComponent = skill.icon;
  
  // Fixed white icon visibility
  const getIconColor = () => {
    if (skill.color === "#ffffff") {
      return "text-slate-700 dark:text-white"; // Dark gray in light mode, white in dark mode
    }
    return "";
  };
  
  const getIconStyle = () => {
    if (skill.color === "#ffffff") {
      return {
        color: undefined, // Let CSS classes handle the color
        filter: `drop-shadow(0 2px 8px rgba(71, 85, 105, 0.4)) drop-shadow(0 0 15px rgba(71, 85, 105, 0.3))`
      };
    }
    return {
      color: skill.color,
      filter: `drop-shadow(0 2px 8px ${skill.color}30) drop-shadow(0 0 20px ${skill.color}40) drop-shadow(0 0 40px ${skill.color}20)`
    };
  };
  
  return (
    <motion.div
      className="group relative flex flex-col items-center justify-center p-3 cursor-pointer"
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        y: -8,
        scale: 1.05,
        transition: { duration: 0.2, type: "spring", stiffness: 300 }
      }}
      whileTap={{ scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.05,
        type: "spring",
        stiffness: 150,
        damping: 12
      }}
    >
      {/* Icon */}
      <motion.div
        className="relative"
        whileHover={{ 
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.4 }
        }}
      >
        <IconComponent 
          className={`text-3xl md:text-4xl transition-all duration-300 ${getIconColor()}`}
          style={getIconStyle()}
        />
        
        {/* Glow Effect - Fixed for white icons */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"
          style={{ 
            backgroundColor: skill.color === "#ffffff" ? "#6366f1" : skill.color,
            transform: 'scale(1.3)'
          }}
          animate={{
            scale: [1.3, 1.5, 1.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Skill Name */}
      <motion.div
        className="mt-2 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.05 + 0.2 }}
      >
        <h3 className="text-slate-800 dark:text-white font-medium text-xs md:text-sm tracking-wide">
          {skill.name}
        </h3>
        
        {/* Animated Underline - Fixed for white icons */}
        <motion.div
          className="h-px bg-current mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: skill.color === "#ffffff" ? "#6366f1" : skill.color }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Single Floating Particle */}
      <motion.div
        className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
        style={{ 
          backgroundColor: skill.color === "#ffffff" ? "#6366f1" : skill.color,
          left: '50%',
          top: '20%'
        }}
        animate={{
          y: [0, -15, -30],
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
};

const CategorySection = ({ category, index }) => {
  const IconComponent = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="mb-12"
    >
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-8">
        <motion.div 
          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
          style={{ backgroundColor: category.color }}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <IconComponent className="w-6 h-6 text-white" />
        </motion.div>
        
        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
            {category.title}
          </h3>
          {/* Animated Underline */}
          <motion.div 
            className="h-1 rounded-full mt-2"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              delay: index * 0.1 + 0.3, 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            style={{ 
              transformOrigin: 'left',
              backgroundColor: category.color,
              width: '64px'
            }}
          />
        </div>
      </div>
      
      {/* Technologies List - Animation only on first scroll */}
      <div className="flex flex-wrap gap-3">
        {category.technologies.map((tech, techIndex) => (
          <motion.span
            key={tech}
            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-current transition-all duration-300 cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} // Only animate once
            whileHover={{ 
              scale: 1.05,
              y: -2,
              borderColor: category.color
            }}
            transition={{ 
              delay: index * 0.1 + techIndex * 0.05 + 0.5,
              duration: 0.3
            }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="relative py-16 bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-gray-900 dark:to-black overflow-hidden transition-all duration-1000"
    >
      {/* Enhanced Background with Floating Particles */}
      <div className="absolute inset-0">
        {/* Dark Mode Effects */}
        <div className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-1000">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.08, 0.12, 0.08]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/6 rounded-full blur-3xl"
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.06, 0.1, 0.06]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Light Mode Effects */}
        <div className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-1000">
          <motion.div 
            className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-purple-200/25 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.25, 0.4, 0.25]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 3 }}
          />
        </div>
        
        {/* Subtle floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-blue-400/40 dark:bg-white/20 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-flex items-center px-6 py-3 bg-blue-200/60 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-500/40 dark:border-blue-400/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium tracking-wide uppercase shadow-lg mb-6"
            whileHover={{ 
              scale: 1.05, 
              borderColor: "rgba(59, 130, 246, 0.6)"
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="mr-2"
            >
              <FaReact />
            </motion.div>
            Technologies & Skills
          </motion.span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 leading-tight">
            Technologies I{' '}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          
          <p className="text-lg text-slate-700 dark:text-gray-400 max-w-3xl mx-auto">
            Building exceptional digital experiences with modern tools and frameworks
          </p>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 md:gap-8 justify-items-center max-w-5xl mx-auto mb-20"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </motion.div>

        {/* Category Sections */}
        <div className="max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <CategorySection
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
