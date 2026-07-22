import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0F172A] text-slate-100 overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* Background Visual Effects */}
      <ScrollProgress />
      <CursorGlow />
      <ParticleBackground />

      {/* Main Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Footer & Floating Controls */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
