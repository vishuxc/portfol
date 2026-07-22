import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Download, FolderKanban, Mail, ArrowRight, Sparkles, User } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import TypingText from './TypingText';
import { personalDetails } from '../data/portfolioData';
import profileAvatar from '../assets/profile.jpg';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  // Motion values for 3D card tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse positions to 3D rotation angles
  const rotateX = useSpring(useTransform(y, [-150, 150], [15, -15]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-15, 15]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20 dark:border-blue-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span>Available for New Opportunities</span>
            </div>

            {/* Main Title & Role */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi, I'm <br />
                <span className="gradient-text">{personalDetails.name}</span>
              </h1>
              
              <div className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300 h-10 flex items-center justify-center lg:justify-start">
                <TypingText titles={personalDetails.titles} />
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalDetails.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/20 dark:shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 group"
              >
                <FolderKanban className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-panel hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-semibold text-sm border border-slate-300 dark:border-slate-700 hover:border-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Contact Me</span>
              </a>

              <a
                href="/resume.pdf"
                download="Vishnuvarthan_Raja_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-pill hover:bg-blue-600/10 dark:hover:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-semibold text-sm border border-blue-500/20 dark:border-blue-500/30 hover:scale-105 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Connect:</span>
              
              <a
                href={personalDetails.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full glass-panel text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              <a
                href={personalDetails.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full glass-panel text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>

              <a
                href={personalDetails.socials.email}
                className="p-3 rounded-full glass-panel text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-200"
                aria-label="Email Vishnuvarthan"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Avatar & Floating Tech Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Interactive 3D Card wrapper */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 cursor-grab active:cursor-grabbing group/avatar"
            >
              {/* Outer morphing animated glow aura */}
              <motion.div
                animate={{
                  borderRadius: [
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "30% 60% 70% 40% / 50% 60% 30% 60%",
                    "50% 60% 30% 60% / 60% 40% 30% 70%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%"
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 opacity-50 dark:opacity-60 blur-xl group-hover/avatar:opacity-85 transition-opacity duration-300"
              />

              {/* Second pulsing layer */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-10 dark:opacity-20 blur-2xl group-hover/avatar:scale-105 transition-transform duration-300" />

              {/* Profile Image Container with morphing blob shape */}
              <motion.div
                animate={{
                  borderRadius: [
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "30% 60% 70% 40% / 50% 60% 30% 60%",
                    "50% 60% 30% 60% / 60% 40% 30% 70%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%"
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="relative w-full h-full p-1 bg-white dark:bg-slate-900 overflow-hidden border-2 border-blue-500/30 dark:border-blue-500/40 shadow-2xl flex items-center justify-center group-hover/avatar:border-cyan-500 dark:group-hover/avatar:border-cyan-400/80 transition-colors duration-300"
              >
                {!imgError ? (
                  <img
                    src={profileAvatar}
                    alt={personalDetails.name}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover scale-[1.08] object-top filter brightness-105 group-hover/avatar:scale-115 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-slate-200 via-slate-100 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950 flex flex-col items-center justify-center text-blue-600 dark:text-blue-400">
                    <User className="w-24 h-24 stroke-[1.5]" />
                    <span className="text-sm font-bold text-slate-850 dark:text-white mt-2">{personalDetails.name}</span>
                  </div>
                )}
              </motion.div>

              {/* Floating Badge 1: React / Frontend */}
              <motion.div
                style={{ translateZ: 50 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -left-4 glass-panel px-3.5 py-2 rounded-2xl border border-slate-200 dark:border-blue-500/30 shadow-lg flex items-center gap-2 group-hover/avatar:scale-105 transition-transform duration-300"
              >
                <Sparkles className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">React & MERN</span>
              </motion.div>

              {/* Floating Badge 2: Java & Full Stack */}
              <motion.div
                style={{ translateZ: 60 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-6 glass-panel px-3.5 py-2 rounded-2xl border border-slate-200 dark:border-blue-500/30 shadow-lg flex items-center gap-2 group-hover/avatar:scale-105 transition-transform duration-300"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Java & Laravel</span>
              </motion.div>

              {/* Floating Badge 3: MySQL & REST API */}
              <motion.div
                style={{ translateZ: 50 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 left-1/4 glass-panel px-3.5 py-2 rounded-2xl border border-slate-200 dark:border-cyan-500/30 shadow-lg flex items-center gap-2 group-hover/avatar:scale-105 transition-transform duration-300"
              >
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">REST APIs & SQL</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
