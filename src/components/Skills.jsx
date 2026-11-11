import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Layout, Server, Database, Wrench, Brain, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  "Languages": Terminal,
  "Frontend": Layout,
  "Generative AI & Machine Learning": Sparkles,
  "Backend & Web Frameworks": Server,
  "Databases": Database,
  "Tools & Platforms": Wrench,
  "Concepts & Testing": Brain,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-bold text-red-300 border border-red-500/30">
            <Cpu className="w-4 h-4 text-red-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 via-rose-500 to-amber-400 mx-auto rounded-full" />
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
                className="cyber-card p-6 sm:p-8 rounded-3xl border border-red-500/25 bg-slate-900/90 shadow-xl group hover:-translate-y-1"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-6">
                  <div className="p-2.5 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/30 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-white group-hover:text-red-300 transition-colors font-heading">
                    {catGroup.category}
                  </h3>
                </div>

                {/* Progress Bars / Badges */}
                <div className="space-y-4">
                  {catGroup.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-200">{skill.name}</span>
                        <span className="text-red-400 font-bold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full rounded-full bg-gradient-to-r from-red-500 via-rose-500 to-amber-400 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
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
