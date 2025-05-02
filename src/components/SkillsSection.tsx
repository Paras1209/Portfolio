import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, BrainIcon, DatabaseIcon, PaintbrushIcon, BookOpenIcon } from 'lucide-react';
export const SkillsSection = () => {
  const skillCategories = [{
    icon: CodeIcon,
    title: 'Web Development',
    skills: [{
      name: 'React.js',
      level: 90
    }, {
      name: 'TypeScript',
      level: 75
    }, {
      name: 'Javascript',
      level: 85
    }, {
      name: 'Tailwind CSS',
      level: 85
    },{
      name: 'Node.js',
      level: 70
    }]
  }, {
    icon: BrainIcon,
    title: 'AI & ML',
    skills: [{
      name: 'Python',
      level: 70
    }, {
      name: 'TensorFlow',
      level: 30
    }, {
      name: 'Scikit-learn',
      level: 20
    }, {
      name: 'Data Analysis',
      level: 30
    }]
  }, {
    icon: DatabaseIcon,
    title: 'Other Languages',
    skills: [{
      name: 'C++',
      level: 75
    }, {
      name: 'Java',
      level: 60
    }, {
      name: 'SQL',
      level: 80
    }, {
      name: 'C',
      level: 75
    }]
  }];
  return <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Skills & Learning Journey
          </motion.h2>
          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-gray-400">
            Constantly expanding my knowledge across different technologies
          </motion.p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => <motion.div key={categoryIndex} initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: categoryIndex * 0.2
        }} className="p-6 rounded-lg border border-cyan-800/30 backdrop-blur-sm">
              <category.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => <div key={skillIndex}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" initial={{
                  width: 0
                }} whileInView={{
                  width: `${skill.level}%`
                }} transition={{
                  duration: 1,
                  delay: 0.2 * skillIndex
                }} />
                    </div>
                  </div>)}
              </div>
            </motion.div>)}
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="mt-12 p-6 rounded-lg border border-cyan-800/30 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <BookOpenIcon className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-semibold">Currently Learning</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Machine Learning', 'Neural Networks', 'Cloud Computing', 'System Design', 'Data Structures', 'Algorithms'].map((item, index) => <motion.span key={index} initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20">
                {item}
              </motion.span>)}
          </div>
        </motion.div>
      </div>
    </section>;
};