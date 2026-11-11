import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10 bg-slate-950 text-white">
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
            <Award className="w-4 h-4 text-red-400" />
            <span>Verified Credentials & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Certifications & <span className="gradient-text">Badges</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 via-rose-500 to-amber-400 mx-auto rounded-full" />
        </motion.div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="cyber-card p-8 rounded-3xl border border-red-500/25 bg-slate-900/90 shadow-2xl group hover:-translate-y-2 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/30 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/10 text-red-300 border border-red-500/30">
                    {cert.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-red-300 transition-colors font-heading">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-bold text-red-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-slate-200 text-sm leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-red-400 font-bold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-red-400" />
                  <span>Verified Credential</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
