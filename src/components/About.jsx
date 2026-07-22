import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Cpu, Database, CheckCircle2 } from 'lucide-react';
import { aboutContent, personalDetails } from '../data/portfolioData';

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Mastery",
    desc: "Seamlessly bridging frontend React.js UIs with robust Node.js, Express & Laravel APIs."
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "Optimizing relational MySQL & MongoDB schemas, writing efficient queries & CRUD operations."
  },
  {
    icon: Cpu,
    title: "Automation & Logic",
    desc: "Developing Python automation scripts, sensor data monitoring & real-time analytics."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
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
            <User className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <span className="p-2 rounded-xl bg-blue-500/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  <User className="w-5 h-5" />
                </span>
                Driven Software Engineer
              </h3>

              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                {aboutContent.bio}
              </p>

              {/* Bulleted Core Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                {[
                  "Scalable Web Architecture",
                  "RESTful API Development",
                  "Real-time Sensor Monitoring",
                  "Agile & Scrum Methodologies",
                  "Database Optimization",
                  "Clean & Maintainable Code"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-slate-200 dark:border-slate-800/80">
              {personalDetails.stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Cards: Key Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4 flex flex-col justify-between"
          >
            {highlights.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 dark:hover:border-blue-500/40 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-blue-500/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
