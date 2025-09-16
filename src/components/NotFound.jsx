// src/components/NotFound.jsx
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaArrowLeft, 
  FaRocket, 
  FaExclamationTriangle,
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

// Glitch effect for 404 text
const GlitchText = ({ children, className }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [0, -2, 2, 0],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          color: '#ef4444',
          filter: 'blur(0.5px)',
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [0, 1, -1, 0],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.05,
        }}
        style={{
          color: '#3b82f6',
          filter: 'blur(0.3px)',
        }}
      >
        {children}
      </motion.div>
      <span className="relative z-10">{children}</span>
    </div>
  );
};

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const goHome = () => {
    window.location.href = '/';
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 flex items-center justify-center overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Dark Mode Background */}
        <div className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-1000">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 40, 0],
              scale: [1, 1.3, 0.8, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/25 to-pink-600/25 rounded-full blur-3xl"
            animate={{
              x: [0, -70, 30, 0],
              y: [0, 60, -40, 0],
              scale: [1, 0.7, 1.2, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Light Mode Background */}
        <div className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-1000">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Floating elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 dark:bg-cyan-400/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          {/* 404 Number with Glitch Effect - Centered */}
          <div className="mb-8">
            <GlitchText className="text-8xl md:text-9xl lg:text-[10rem] font-black text-slate-800 dark:text-white leading-none">
              404
            </GlitchText>
          </div>

          {/* Warning Icon */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 200 }}
          >
            <div className="relative">
              <FaExclamationTriangle className="text-4xl md:text-5xl text-orange-500 dark:text-orange-400" />
              <motion.div
                className="absolute inset-0 text-4xl md:text-5xl text-orange-500 dark:text-orange-400"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaExclamationTriangle />
              </motion.div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-2 max-w-lg mx-auto leading-relaxed">
              The page you're looking for seems to have vanished into the digital void.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Don't worry, even the best developers get lost sometimes!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Go Home Button */}
            <motion.button
              onClick={goHome}
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-cyan-600 dark:to-blue-600 dark:hover:from-cyan-700 dark:hover:to-blue-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3 relative z-10">
                <FaHome className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm md:text-base">Go Home</span>
              </div>
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Sparkle effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: `${30 + Math.random() * 40}%`,
                      left: `${30 + Math.random() * 40}%`,
                    }}
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.button>

            {/* Go Back Button */}
            <motion.button
              onClick={goBack}
              className="group px-6 md:px-8 py-3 md:py-4 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-semibold rounded-full transition-all duration-300 border-2 border-transparent hover:border-slate-400 dark:hover:border-slate-500"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3">
                <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm md:text-base">Go Back</span>
              </div>
            </motion.button>
          </motion.div>

          {/* Fun Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-8"
          >
            <p className="text-xs text-slate-400 dark:text-slate-500">
              🎮 Lost in cyberspace? Let's get you back to reality!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
