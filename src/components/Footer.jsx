import React from 'react';
import { Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/60 backdrop-blur-lg pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/10 dark:bg-blue-600/20 border border-blue-500/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold text-slate-900 dark:text-white block">
                {personalDetails.name}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Software Developer | Full Stack Developer
              </span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400 font-medium">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full glass-panel text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-slate-800/80 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full glass-panel text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-slate-800/80 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.socials.email}
              className="p-2.5 rounded-full glass-panel text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-slate-800/80 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/60 text-center text-xs text-slate-500 dark:text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 Vishnuvarthan Raja. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with React.js, Tailwind CSS & Framer Motion
          </span>
        </div>

      </div>
    </footer>
  );
}
