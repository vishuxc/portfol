import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationDetails } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/40 transition-all duration-300 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-blue-600/5 dark:text-blue-500/10 pointer-events-none">
            <GraduationCap className="w-36 h-36" />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-blue-500/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {educationDetails.degree}
                  </h3>
                  <h4 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                    {educationDetails.field}
                  </h4>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                    {educationDetails.institution}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-slate-200 dark:border-slate-700">
                <Calendar className="w-3.5 h-3.5" />
                <span>Completed {educationDetails.completedYear}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h5 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-650 dark:text-cyan-400" />
                Key Academic Highlights
              </h5>
              
              <div className="space-y-2">
                {educationDetails.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
