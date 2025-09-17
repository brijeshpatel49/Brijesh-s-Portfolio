// src/components/Contact.jsx
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaArrowUp,
  FaDownload,
  FaGlobe,
  FaCopy,
  FaHeart,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCoffee,
  FaLaptopCode,
  FaEye,
  FaFileAlt,
} from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";
import { useState, useEffect } from "react";

const Contact = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  // Show scroll to top button only when reaching near the end
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);

      setShowScrollTop(scrollPercent >= 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Background floating icons
  const backgroundIcons = [
    { Icon: FaReact, x: "10%", y: "15%", delay: 0, color: "#61DAFB" },
    { Icon: FaNodeJs, x: "85%", y: "20%", delay: 1, color: "#339933" },
    { Icon: SiMongodb, x: "15%", y: "75%", delay: 2, color: "#47A248" },
    { Icon: SiJavascript, x: "80%", y: "70%", delay: 0.5, color: "#F7DF1E" },
    { Icon: FaDatabase, x: "20%", y: "40%", delay: 1.5, color: "#4285f4" },
    { Icon: SiTailwindcss, x: "75%", y: "45%", delay: 2.5, color: "#06B6D4" },
    { Icon: FaCoffee, x: "5%", y: "60%", delay: 3, color: "#8B4513" },
    { Icon: FaLaptopCode, x: "90%", y: "85%", delay: 0.8, color: "#4A90E2" },
  ];

  // Contact cards - REPLACED PHONE WITH WHATSAPP
  const contactCards = [
    {
      icon: FaEnvelope,
      iconBg: "from-blue-500 to-blue-600",
      title: "Email",
      subtitle: "brijeshp3349@gmail.com",
      description:
        "Drop me a line anytime - I love hearing about new projects and opportunities!",
      status: "Usually responds within 2-4 hours",
      statusColor: "text-green-600 dark:text-green-400",
      statusDot: "bg-green-400",
      href: "mailto:brijeshp3349@gmail.com",
      copyButton: true,
      copyText: "brijeshp3349@gmail.com",
    },
    {
      icon: FaLinkedin,
      iconBg: "from-blue-600 to-blue-700",
      title: "LinkedIn",
      subtitle: "Let's connect professionally",
      description:
        "Professional networking, career opportunities & industry insights",
      status: "Active daily",
      statusColor: "text-green-600 dark:text-green-400",
      statusDot: "bg-green-400",
      href: "https://www.linkedin.com/in/brijesh-patel-b1195b288/",
      copyButton: false,
    },
    {
      icon: FaGithub,
      iconBg: "from-slate-600 to-slate-700",
      title: "GitHub",
      subtitle: "Explore my repositories",
      description:
        "Open source projects, code samples & collaborative development",
      status: "Updated regularly",
      statusColor: "text-green-600 dark:text-green-400",
      statusDot: "bg-green-400",
      href: "https://github.com/brijeshpatel49",
      copyButton: false,
    },
    {
      icon: FaWhatsapp,
      iconBg: "from-green-500 to-green-600",
      title: "WhatsApp",
      subtitle: "+91 97278 19653",
      description:
        "Quick messages and instant communication for urgent discussions",
      status: "Available daily 9 AM - 9 PM IST",
      statusColor: "text-green-600 dark:text-green-400",
      statusDot: "bg-green-400",
      href: "https://wa.me/919727819653?text=Hi%20Brijesh,%20I'd%20like%20to%20discuss%20a%20project%20opportunity%20with%20you.",
      copyButton: true,
      copyText: "+91 97278 19653",
    },
  ];

  // Fixed copy function with error handling
  const copyToClipboard = async (text, label) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        setCopiedText(label);
        setTimeout(() => setCopiedText(""), 2000);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";
        document.body.prepend(textArea);
        textArea.select();
        try {
          document.execCommand("copy");
          setCopiedText(label);
          setTimeout(() => setCopiedText(""), 2000);
        } catch (error) {
          console.error("Copy failed:", error);
        } finally {
          textArea.remove();
        }
      }
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 overflow-hidden transition-all duration-1000"
    >
      {/* Same Background as Other Sections */}
      <div className="absolute inset-0 overflow-hidden">
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

        <div className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-1000">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

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

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Header - Made smaller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-6 py-3 bg-blue-200/60 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-500/40 dark:border-blue-400/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium tracking-wide uppercase shadow-lg mb-6">
            <FaEnvelope className="mr-2" />
            Let's Connect
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 dark:from-cyan-400 dark:via-blue-400 dark:to-sky-400 bg-clip-text text-transparent">
              Collaborate?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            I'm always excited to work on new projects and collaborate with
            amazing teams. Choose your preferred way to reach out!
          </p>

          {/* Availability Status - Made smaller */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-green-100 dark:bg-green-900/30 rounded-full border border-green-300 dark:border-green-700/50 shadow-lg backdrop-blur-sm"
          >
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-slate-700 dark:text-slate-300 font-semibold">
              <span className="font-bold text-green-600 dark:text-green-400">
                Open to Opportunities
              </span>
            </span>
          </motion.div>
        </motion.div>

        {/* Contact Cards Grid - COMPLETELY FIXED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-6 mb-12"
        >
          {contactCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="group relative bg-white/95 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/50 hover:border-blue-300/60 dark:hover:border-slate-600/70 transition-all duration-500 shadow-lg hover:shadow-xl cursor-pointer"
                onClick={() => {
                  if (card.title === "Email") {
                    window.location.href =
                      "mailto:brijeshp3349@gmail.com?subject=Let's Work Together&body=Hi Brijesh, I'd love to discuss a project opportunity with you.";
                  } else if (card.title === "WhatsApp") {
                    window.open(
                      "https://wa.me/919727819653?text=Hi Brijesh, I'd like to discuss a project opportunity with you.",
                      "_blank"
                    );
                  } else {
                    window.open(card.href, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                {/* Action Button - Fixed Z-index */}
                <div className="absolute top-4 right-4 z-30">
                  {card.copyButton ? (
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(card.copyText, card.title);
                      }}
                      className="w-9 h-9 bg-slate-100/80 dark:bg-slate-700/50 hover:bg-slate-200/90 dark:hover:bg-slate-600/70 rounded-lg flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-slate-300/50 dark:border-slate-600/30 hover:border-slate-400/60 dark:hover:border-slate-500/50"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaCopy className="w-3 h-3 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors duration-200" />
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(card.href, "_blank", "noopener,noreferrer");
                      }}
                      className="w-9 h-9 bg-slate-100/80 dark:bg-slate-700/50 hover:bg-slate-200/90 dark:hover:bg-slate-600/70 rounded-lg flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-slate-300/50 dark:border-slate-600/30 hover:border-slate-400/60 dark:hover:border-slate-500/50"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt className="w-3 h-3 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors duration-200" />
                    </motion.button>
                  )}
                </div>

                {/* Main Content */}
                <div className="flex items-start gap-5">
                  {/* Icon - Made smaller */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${card.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20 dark:border-white/10`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                      {card.title}
                    </h3>

                    <p className="text-slate-700 dark:text-slate-300 font-semibold mb-3">
                      {card.subtitle}
                    </p>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                      {card.description}
                    </p>

                    {/* Status */}
                    <div className="flex items-center gap-2">
                      <motion.div
                        className={`w-1.5 h-1.5 ${card.statusDot} rounded-full`}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />
                      <span
                        className={`text-xs font-semibold ${card.statusColor}`}
                      >
                        {card.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-600/5 dark:to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section - FIXED NESTED ANCHOR TAG */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12 relative"
        >
          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-slate-800 dark:text-white">
                Let's Build{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-cyan-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Something Great
              </span>
              <span className="text-slate-800 dark:text-white">
                {" "}
                Together 🚀
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
            >
              Transform your ideas into powerful digital solutions
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={() =>
                  (window.location.href =
                    "mailto:brijeshp3349@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Brijesh,%0A%0AI'd%20love%20to%20discuss%20a%20project%20opportunity%20with%20you.%0A%0A")
                }
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-cyan-600 dark:to-blue-600 text-white rounded-xl font-bold shadow-xl hover:shadow-blue-500/25 transition-all duration-500 overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaEnvelope className="w-5 h-5 relative z-10" />
                </motion.div>
                <span className="relative z-10">Send me an Email</span>
              </motion.button>

              <motion.a
                href="https://drive.google.com/file/d/156ARq3h4oa1XoxU6ELH8vlcRb8Vhui3E/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 text-white rounded-xl font-bold shadow-xl hover:shadow-purple-500/25 transition-all duration-500 overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaFileAlt className="w-5 h-5 relative z-10" />
                </motion.div>
                <span className="relative z-10">View Resume</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer - Made smaller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center pt-8 border-t border-slate-200 dark:border-slate-600"
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              Thanks for scrolling all the way down! 👏
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center justify-center gap-2">
              © 2025 Brijesh Patel. Built with
              <FaReact className="w-4 h-4 text-blue-500" />
              React &
              <SiTailwindcss className="w-4 h-4 text-cyan-500" />
              Tailwind CSS
              <FaHeart className="w-4 h-4 text-red-500" />
            </p>
          </div>
        </motion.div>
      </div>

      {/* Copy Success Toast */}
      {copiedText && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          className="fixed bottom-24 right-8 px-4 py-2 bg-green-600 text-white rounded-lg shadow-xl z-50 flex items-center gap-2"
        >
          <FaCopy className="w-4 h-4" />
          <span className="font-semibold text-sm">{copiedText} copied!</span>
        </motion.div>
      )}

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl hover:shadow-blue-500/25 transition-all duration-300 z-50 backdrop-blur-sm border border-white/20 ${
          showScrollTop
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      >
        <FaArrowUp className="w-4 h-4 mx-auto" />
      </motion.button>
    </section>
  );
};

export default Contact;
