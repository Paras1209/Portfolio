import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCapIcon, BookOpenIcon, RocketIcon, BrainIcon } from 'lucide-react';
export const AboutSection = () => {
  return <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="p-6 rounded-lg border border-cyan-800/30 backdrop-blur-sm">
            <GraduationCapIcon className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4 text-gray-400">
              <div>
                <p className="font-medium text-white">Software Engineering</p>
                <p>Second Year Undergraduate</p>
                <p className="text-cyan-400">2023 - Present</p>
              </div>
              <div>
                <p className="font-medium text-white">
                  Mastery in Web Development
                </p>
                <p>Specialization in Modern Web Technologies</p>
                <p className="text-cyan-400">In Progress</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="p-6 rounded-lg border border-cyan-800/30 backdrop-blur-sm">
            <BrainIcon className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Areas of Interest</h3>
            <div className="space-y-2 text-gray-400">
              <p>• Full Stack Web Development</p>
              <p>• Artificial Intelligence & Machine Learning</p>
              <p>• Cloud Computing & DevOps</p>
              <p>• Mobile App Development</p>
              <p>• System Design</p>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border border-cyan-800/30 backdrop-blur-sm">
            <BookOpenIcon className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Learning Journey</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Started coding in high school</li>
              <li>• Self-taught web development</li>
              <li>• Currently exploring AI/ML</li>
              <li>• Active in coding competitions</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border border-cyan-800/30 backdrop-blur-sm">
            <RocketIcon className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Goals</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Master full-stack development</li>
              <li>• Build AI-powered applications</li>
              <li>• Contribute to open source</li>
              <li>• Learn system architecture</li>
              <li>• Develop something for Social Good.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>;
};