import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FolderKanban, Mail, ArrowRight, Sparkles, FileText, Calendar, Award, Briefcase, Code2, ShieldCheck, Zap, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import TypingText from './TypingText';
import { personalDetails } from '../data/portfolioData';
import avatar3D from '../assets/avatar_3d.jpg';
import resumePdf from '../assets/Vishnuvarthan_Raja_Resume.pdf';

export default function Hero({ onOpenResumeModal }) {
  // Motion values for smooth 3D card tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-200, 200], [8, -8]), { stiffness: 180, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-200, 200], [-8, 8]), { stiffness: 180, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#9b111e] via-[#c1121f] to-[#780000] text-white"
    >
      {/* Cinematic Ambient Glow & Flares (Red & Warm Amber Highlights) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-red-400/25 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[550px] h-[550px] bg-rose-500/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Grid Accent Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center space-y-8">
        
        {/* Top Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4 max-w-3xl"
        >
          {/* Status & Availability Tag */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-white border border-white/20 shadow-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span>Available for Software Engineering Roles</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/20 text-red-100 text-xs font-semibold border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Resume: {personalDetails.resumeDate}</span>
            </div>
          </div>

          {/* HI, I'M + Signature Cursive Name */}
          <div className="space-y-1">
            <div className="text-xs sm:text-sm font-bold tracking-[0.3em] text-red-200/90 uppercase font-heading">
              HI, I'M
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <h1 className="font-script text-6xl sm:text-8xl md:text-9xl text-white font-bold tracking-tight leading-none drop-shadow-2xl select-none">
                {personalDetails.name}
              </h1>
              <ShieldCheck className="w-8 h-8 sm:w-11 sm:h-11 text-amber-300 shrink-0 drop-shadow" title="Verified Software Developer Profile" />
            </div>

            {/* Dynamic Typing Subtitle */}
            <div className="text-lg sm:text-2xl font-bold text-red-100/95 h-10 flex items-center justify-center font-heading">
              <TypingText titles={personalDetails.titles} />
            </div>
          </div>
        </motion.div>

        {/* CENTERPIECE: BIG 3D CHARACTER PORTRAIT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full flex justify-center py-2"
        >
          {/* 3D Card Tilt Wrapper */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl cursor-pointer group/avatar"
          >
            {/* Outer Warm Radial Glow behind the Character */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-amber-500/30 via-red-500/50 to-rose-600/30 rounded-3xl blur-3xl opacity-85 group-hover/avatar:opacity-100 transition-opacity pointer-events-none" />

            {/* Big 3D Character Portrait Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.65)] border-2 border-white/25 bg-red-950/40 backdrop-blur-md">
              <img
                src={avatar3D}
                alt={`${personalDetails.name} - 3D Stylized Avatar`}
                className="w-full h-auto max-h-[620px] object-cover object-center group-hover/avatar:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Subtle Inner Gradient Shade at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Floating Top Persona Tag */}
              <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-xs font-bold text-white uppercase tracking-wider shadow-lg flex items-center gap-2 font-heading">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>3D DIGITAL PERSONA</span>
              </div>

              {/* Live Indicator Tag */}
              <div className="absolute bottom-5 right-5 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-xs font-semibold text-emerald-300 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Interactive 3D Avatar</span>
              </div>
            </div>

            {/* Floating Aesthetic Glass Badge on Bottom-Left */}
            <motion.div
              style={{ translateZ: 50 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl bg-white text-slate-900 border border-white shadow-2xl flex items-center gap-3 font-heading"
            >
              <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-base shadow-md">
                VR
              </div>
              <div className="text-left">
                <div className="text-sm font-black text-slate-900 leading-tight">Vishnuvarthan Raja</div>
                <div className="text-xs font-semibold text-red-600">Full Stack & AI Builder</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section: Pitch & Pill Buttons & Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 max-w-3xl flex flex-col items-center"
        >
          {/* Pitch Text matching reference layout */}
          <p className="text-white/95 text-base sm:text-lg lg:text-xl leading-relaxed font-normal drop-shadow-sm max-w-2xl">
            Crafting modern full-stack web experiences with clean code, creative motion, and scalable digital architecture.
          </p>

          {/* Reference-Style Pill Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            {/* White Pill Download Resume Button */}
            <a
              href={resumePdf}
              download="Vishnuvarthan_Raja_Resume.pdf"
              className="px-9 py-4 rounded-full bg-white text-red-700 hover:bg-red-50 font-extrabold text-sm shadow-2xl shadow-black/35 hover:scale-105 transition-all duration-300 flex items-center gap-2 font-heading cursor-pointer"
            >
              <Download className="w-4 h-4 text-red-600" />
              <span>DOWNLOAD RESUME</span>
            </a>

            {/* Translucent Outline Let's Talk Button */}
            <a
              href="#contact"
              className="px-9 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 font-extrabold text-sm backdrop-blur-md shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 font-heading"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>LET'S TALK</span>
            </a>

            {/* Work Button */}
            <a
              href="#projects"
              className="px-7 py-4 rounded-full bg-black/25 hover:bg-black/40 text-red-100 border border-white/15 font-bold text-sm backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center gap-2 font-heading"
            >
              <FolderKanban className="w-4 h-4 text-amber-300" />
              <span>WORK</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Highlights Bar */}
          <div className="pt-4 border-t border-white/15 w-full max-w-xl">
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-heading">4+</div>
                <div className="text-xs text-red-200 font-medium">Projects</div>
              </div>
              <div className="border-l border-white/15 pl-2">
                <div className="text-xl sm:text-2xl font-black text-amber-200 font-heading">Sopti AI</div>
                <div className="text-xs text-red-200 font-medium">Sep 2026</div>
              </div>
              <div className="border-l border-white/15 pl-2">
                <div className="text-xl sm:text-2xl font-black text-white font-heading">55%</div>
                <div className="text-xs text-red-200 font-medium">Saved Effort</div>
              </div>
              <div className="border-l border-white/15 pl-2">
                <div className="text-xl sm:text-2xl font-black text-amber-200 font-heading">B.Tech</div>
                <div className="text-xs text-red-200 font-medium">CCE 2025</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="text-xs text-red-200 uppercase tracking-widest font-bold font-heading">Connect:</span>
            
            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:scale-110 shadow-md transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href={personalDetails.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:scale-110 shadow-md transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a
              href={personalDetails.socials.email}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:scale-110 shadow-md transition-all duration-300"
              aria-label="Email Vishnuvarthan"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
