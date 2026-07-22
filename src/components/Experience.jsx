import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Trophy } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-indigo-600 -translate-x-1/2 hidden sm:block opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Central Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.4)] z-20 hidden sm:block">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 m-auto mt-0.5 animate-pulse" />
                  </div>

                  {/* Card Content */}
                  <div className="w-full sm:w-1/2 sm:px-8">
                    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/40 transition-all duration-300 shadow-lg group hover:-translate-y-1">
                      
                      {/* Role & Company Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4 mb-4">
                        <div>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                            {exp.type}
                          </span>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {exp.role}
                          </h3>
                          <h4 className="text-base font-semibold text-cyan-600 dark:text-cyan-400">
                            {exp.company}
                          </h4>
                        </div>

                        <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 text-left">
                          <div className="flex items-center justify-end gap-1">
                            <Calendar className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center justify-end gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities list */}
                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-1.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Key Achievement */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mt-4 p-3 rounded-2xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10 dark:border-blue-500/20 flex items-start gap-2 text-xs font-medium text-blue-700 dark:text-blue-300">
                          <Trophy className="w-4 h-4 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-amber-600 dark:text-amber-300">Achievement: </span>
                            {exp.achievements.join(' ')}
                          </div>
                        </div>
                      )}

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
