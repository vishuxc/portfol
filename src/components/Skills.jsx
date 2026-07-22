import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Layout, Server, Database, Wrench, Brain } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  "Programming Languages": Terminal,
  "Frontend": Layout,
  "Backend": Server,
  "Databases": Database,
  "Tools & Platforms": Wrench,
  "Core Concepts": Brain,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
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
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((catGroup, idx) => {
            const IconComponent = categoryIcons[catGroup.category] || Cpu;
            return (
              <motion.div
                key={catGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/40 transition-all duration-300 shadow-lg group hover:-translate-y-1"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
                  <div className="p-2.5 rounded-2xl bg-blue-500/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {catGroup.category}
                  </h3>
                </div>

                {/* Progress Bars / Badges */}
                <div className="space-y-4">
                  {catGroup.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-700 dark:text-slate-200">{skill.name}</span>
                        <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800/80 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
