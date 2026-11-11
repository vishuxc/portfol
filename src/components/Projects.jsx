import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, FolderKanban, ArrowRight, Eye, Code2, Cpu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Generative AI', 'Full Stack', 'Machine Learning', 'Enterprise Web'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory || (selectedCategory === 'Enterprise Web' && p.category === 'Enterprise'));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Accent Mesh (Red Theme) */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-red-300 border border-red-500/30"
          >
            <FolderKanban className="w-4 h-4 text-red-400" />
            <span>Featured Case Studies & Software Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading"
          >
            Real-World <span className="gradient-text">Engineering Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300"
          >
            Generative AI & RAG systems, Full Stack web applications, and Machine Learning microservices.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="glass-panel p-1.5 rounded-2xl border border-red-500/20 flex flex-wrap gap-2 bg-slate-900/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-lg shadow-red-600/30 border border-red-400/40'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="cyber-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-red-500/20 hover:border-red-500/40"
            >
              {/* Project Image Container with Overlay & Animations */}
              <div
                onClick={() => setActiveProject(project)}
                className="relative h-56 sm:h-64 overflow-hidden cursor-pointer group/img"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover/img:opacity-65 transition-opacity duration-300" />

                {/* Floating category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-slate-950/90 backdrop-blur-md text-red-300 border border-red-500/40 shadow-lg flex items-center gap-1.5 font-heading">
                    {project.category === 'Generative AI' && <Sparkles className="w-3.5 h-3.5 text-amber-400" />}
                    <span>{project.category}</span>
                  </span>
                </div>

                {/* Hover Quick Action Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-20 bg-slate-950/50 backdrop-blur-[2px]">
                  <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-xs flex items-center gap-2 shadow-xl shadow-red-600/40 transform scale-90 group-hover/img:scale-100 transition-transform duration-300 border border-red-400/40">
                    <Eye className="w-4 h-4" /> Preview Case Details
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3
                      onClick={() => setActiveProject(project)}
                      className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-red-400 transition-colors cursor-pointer font-heading"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics Badge */}
                  {project.metrics && (
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 space-y-1.5">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-800/80">
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <a
                      href={project.liveLink || project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-red-400 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Code on GitHub</span>
                    </a>

                    <button
                      onClick={() => setActiveProject(project)}
                      className="px-5 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-md shadow-red-600/30 hover:scale-105 transition-all flex items-center gap-1.5 border border-red-400/30 font-heading"
                    >
                      <span>View Case</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Popup Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
