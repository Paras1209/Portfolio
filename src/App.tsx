import React from 'react';
import { motion } from 'framer-motion';
import { ParticleBackground } from './components/ParticleBackground';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Analytics } from "@vercel/analytics/react"
export function App() {
  return <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Analytics/>
      </main>
    </div>;
}