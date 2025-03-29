import React from 'react';
import { motion } from 'framer-motion';
import { Mail as MailIcon, Linkedin as LinkedinIcon, Github as GithubIcon } from 'lucide-react';
export const ContactSection = () => {
  return <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Get In Touch
        </motion.h2>
        <motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="text-xl text-gray-400 mb-12">
          Let's collaborate on your next project
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-8 mb-12"
        >
          <a href="mailto:kanojiaparas582@gmail.com" aria-label="Email" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            <MailIcon className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/dtu-paras-kanojia/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            <LinkedinIcon className="w-8 h-8" />
          </a>
          <a href="https://github.com/Paras1209" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            <GithubIcon className="w-8 h-8" />
          </a>
        </motion.div>
        <motion.button initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
          Send Message
        </motion.button>
      </div>
    </section>;
};