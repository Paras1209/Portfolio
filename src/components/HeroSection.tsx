import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, BrainIcon, GraduationCapIcon, BookOpenIcon } from 'lucide-react';
export const HeroSection = () => {
  const floatingAnimation = {
    y: [-5, 5],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  };
  return <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
            <motion.div className="mb-4 flex justify-center" animate={floatingAnimation}>
            <span className="px-4 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20">
              Software Engineering Student at DTU
            </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            Paras
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-4">
            Full Stack Developer & ML Enthusiast
            </p>
            <motion.p className="text-gray-500 mb-8" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.3,
            duration: 0.8
          }}>
            B.Tech in Software Engineering at Delhi Technological University
            <br />
            Self-taught web developer mastering ML through open-source learning
            </motion.p>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        scale: 0.5
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 0.5,
        duration: 0.8
      }} className="flex justify-center gap-6 mb-12">
          {[{
          icon: CodeIcon,
          label: 'Web Dev'
        }, {
          icon: BrainIcon,
          label: 'AI/ML'
        }, {
          icon: GraduationCapIcon,
          label: 'Student'
        }, {
          icon: BookOpenIcon,
          label: 'Learning'
        }].map((item, index) => <motion.div key={index} whileHover={{
          y: -5,
          scale: 1.1
        }} className="group relative">
              <item.icon className="w-8 h-8 text-cyan-400" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-cyan-400">
                {item.label}
              </span>
            </motion.div>)}
        </motion.div>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.8,
        duration: 0.8
      }} className="flex justify-center gap-4">
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            View Projects
          </motion.button>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="px-8 py-3 border border-cyan-500/30 rounded-full text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all duration-300">
            Resume
          </motion.button>
        </motion.div>
      </div>
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{
      y: [0, 10, 0]
    }} transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'reverse'
    }}>
        <div className="w-5 h-9 border-2 border-cyan-400 rounded-full flex justify-center pt-2">
          <motion.div className="w-1 h-1 bg-cyan-400 rounded-full" animate={{
          opacity: [1, 0.3, 1]
        }} transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse'
        }} />
        </div>
      </motion.div>
    </section>;
};