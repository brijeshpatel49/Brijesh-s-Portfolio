// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaBolt,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaRocket,
  FaChevronDown,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const navItems = [
  { id: "skills", label: "Skills", icon: FaBolt },
  { id: "projects", label: "Projects", icon: FaCode },
  { id: "experience", label: "Experience", icon: FaBriefcase },
  { id: "about", label: "About", icon: FaUser },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Scroll progress tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setDarkMode(theme === "dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Dynamic active section detection based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      setIsScrolled(window.scrollY > 100);

      // Check which section is currently in view
      const sections = navItems.map((item) => document.getElementById(item.id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActive(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    setActive(sectionId);
    setIsDropdownOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleHireMe = () => {
    setIsDropdownOpen(false);
    scrollToSection("contact");
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-lg bg-white/90 dark:bg-slate-900/80 shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Brand Name - Left */}
          <motion.div
            className="cursor-pointer select-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onClick={() => scrollToSection("about")}
          >
            <NavLink to="/">
              <div className="text-2xl font-bold flex gap-1">
                <span
                  className={`transition-colors duration-500 ${
                    darkMode
                      ? "text-white"
                      : isScrolled
                      ? "text-slate-900"
                      : "text-slate-900"
                  }`}
                >
                  Brijesh
                </span>
                <span
                  className="bg-gradient-to-r 
                from-blue-700 via-blue-600 to-indigo-700 
                dark:from-cyan-400 dark:via-blue-400 dark:to-sky-400 
                bg-clip-text text-transparent"
                >
                  Patel
                </span>
              </div>
            </NavLink>
          </motion.div>

          {/* Centered Navigation Items - Desktop - Simple Active State */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map(({ id, label, icon: Icon }, index) => (
              <motion.button
                key={id}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 group ${
                  active === id
                    ? darkMode
                      ? "text-cyan-400" // Dark mode active - just color
                      : "text-blue-600" // Light mode active - just color
                    : darkMode
                    ? "text-slate-300 hover:text-cyan-400" // Dark mode inactive with hover
                    : isScrolled
                    ? "text-slate-700 hover:text-blue-600" // Light mode scrolled with hover
                    : "text-slate-900 hover:text-blue-600" // Light mode hero with hover
                }`}
                onClick={() => scrollToSection(id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.4, duration: 0.6 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">{label}</span>
              </motion.button>
            ))}
          </div>

          {/* Right Side - Hire Me + Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {/* Hire Me Button */}
            <motion.button
              onClick={handleHireMe}
              className="relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-cyan-600 dark:to-blue-600 dark:hover:from-cyan-700 dark:hover:to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-cyan-500/25 transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2 relative z-10">
                <FaRocket className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>Hire Me</span>
              </div>
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              className={`relative w-20 h-10 rounded-full p-1 transition-all duration-500 shadow-lg 
                border border-gray-300/50 dark:border-gray-600/50 backdrop-blur-sm`}
              onClick={toggleTheme}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative w-8 h-8 rounded-full shadow-xl flex items-center justify-center overflow-hidden
                  bg-gradient-to-br from-white to-gray-50 
                  dark:from-slate-900 dark:to-slate-800"
                animate={{
                  x: darkMode ? 40 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              >
                <motion.div
                  key={darkMode ? "moon" : "sun"}
                  initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="relative z-10"
                >
                  {darkMode ? (
                    <FaMoon className="w-4 h-4 text-blue-500 dark:text-blue-300" />
                  ) : (
                    <FaSun className="w-4 h-4 text-yellow-600" />
                  )}
                </motion.div>
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
                <motion.div
                  animate={{
                    scale: darkMode ? 0.8 : 1,
                    opacity: darkMode ? 0.1 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FaSun className="w-3 h-3 text-yellow-500" />
                </motion.div>

                <motion.div
                  animate={{
                    scale: darkMode ? 1 : 0.8,
                    opacity: darkMode ? 0.4 : 0.1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FaMoon className="w-3 h-3 text-blue-600 dark:text-blue-300" />
                </motion.div>
              </div>
            </motion.button>
          </div>

          {/* Mobile Controls - Theme Toggle + Menu Icon */}
          <div className="md:hidden flex items-center gap-3 relative">
            {/* Mobile Theme Toggle */}
            <motion.button
              className={`relative w-14 h-7 rounded-full p-0.5 transition-all duration-500 shadow-lg 
                border border-gray-300/50 dark:border-gray-600/50 backdrop-blur-sm`}
              onClick={toggleTheme}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative w-6 h-6 rounded-full shadow-xl flex items-center justify-center overflow-hidden
                  bg-gradient-to-br from-white to-gray-50 
                  dark:from-slate-900 dark:to-slate-800"
                animate={{
                  x: darkMode ? 28 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              >
                <motion.div
                  key={darkMode ? "moon" : "sun"}
                  initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  {darkMode ? (
                    <FaMoon className="w-3 h-3 text-blue-500 dark:text-blue-300" />
                  ) : (
                    <FaSun className="w-3 h-3 text-yellow-600" />
                  )}
                </motion.div>
              </motion.div>
            </motion.button>

            {/* Mobile Menu Button - Bars to X Animation */}
            <motion.button
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "text-white hover:text-cyan-400 hover:bg-slate-800/50"
                  : isScrolled
                  ? "text-slate-900 hover:text-blue-600 hover:bg-slate-100/50"
                  : "text-slate-900 hover:text-blue-600 hover:bg-white/20"
              }`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Animated Icon Transition - Bars to X */}
              <motion.div
                animate={{ rotate: isDropdownOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  {isDropdownOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaTimes className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaBars className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.button>

            {/* Mobile Dropdown Menu - Removed Hire Me */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className={`absolute top-12 right-0 w-64 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl z-[100] ${
                    darkMode
                      ? "bg-slate-900/95 border-slate-700/50"
                      : "bg-white/95 border-slate-200/50"
                  }`}
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Navigation Items - Simple Active State */}
                  <div className="py-2">
                    {navItems.map(({ id, label, icon: Icon }, index) => (
                      <motion.button
                        key={id}
                        className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                          active === id
                            ? darkMode
                              ? "text-cyan-400" // Just color change for active
                              : "text-blue-600" // Just color change for active
                            : darkMode
                            ? "text-slate-300 hover:text-cyan-400" // Hover effect
                            : "text-slate-700 hover:text-blue-600" // Hover effect
                        }`}
                        onClick={() => scrollToSection(id)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{label}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 origin-left"
          style={{
            background: darkMode
              ? "linear-gradient(to right, #22d3ee, #3b82f6, #8b5cf6)"
              : "linear-gradient(to right, #2563eb, #7c3aed, #ec4899)",
            scaleX,
            opacity: isScrolled ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      </motion.nav>

      {/* Dropdown Overlay */}
      {isDropdownOpen && (
        <motion.div
          className="fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
