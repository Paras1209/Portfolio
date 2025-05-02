import React from 'react';
import { motion } from 'framer-motion';
import { BrainIcon, GlobeIcon, SmartphoneIcon, CodeIcon, ExternalLinkIcon, GithubIcon } from 'lucide-react';
export const ProjectsSection = () => {
  const projects = [{
    icon: BrainIcon,
    title: 'AI Image Generator',
    description: 'A web app that generates images using machine learning models',
    tech: ['Python', 'TensorFlow', 'React', 'Flask'],
    status: 'In Progress',
    links: {
      github: 'https://github.com/Paras1209/Image-Generator'
    }
  }, {
    icon: GlobeIcon,
    title: 'Color Picker',
    description: 'An application to pick colors developed during my learning journey',
    tech: ['React','Vite'],
    status: 'Completed',
    links: {
      github: 'https://github.com/Paras1209/Color_picker'
    }
  }, {
    icon: SmartphoneIcon,
    title: 'Weather App',
    description: 'Real-time weather forecasting with location tracking',
    tech: ['React Native', 'Weather API', 'Geolocation'],
    status: 'Completed',
    links: {
      github: 'https://github.com/Paras1209/Nature-Mood'
    }
  }, {
    icon: CodeIcon,
    title: 'Algorithm Visualizer',
    description: 'Interactive tool for visualizing sorting and pathfinding algorithms',
    tech: ['React', 'TypeScript', 'Framer Motion'],
    status: 'Completed',
    links: {
      github: 'https://github.com/Paras1209/Algorithm-Visualiser'
    }
  }, {
    icon: SmartphoneIcon,
    title: 'Uber Clone',
    description: 'A ride-sharing application clone with real-time tracking and route mapping',
    tech: ['React ', 'Mongo Db', 'Redux', 'Node' , 'Postman'],
    status: 'In Progress',
    links: {
      github: 'https://github.com/Paras1209/uber-clone'
    }
  }];
  return <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Projects
        </motion.h2>
        <motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="text-center text-gray-400 mb-12">
          A mix of academic and personal projects showcasing my learning journey
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: index * 0.2
        }} className="p-6 rounded-lg border border-cyan-800/30 backdrop-blur-sm group hover:border-cyan-400/50 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <project.icon className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <span className={`text-sm px-2 py-1 rounded-full ${project.status === 'Completed' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => <motion.span key={techIndex} initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 0.1 * techIndex
            }} className="text-sm px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">
                    {tech}
                  </motion.span>)}
              </div>
              <div className="flex gap-4">
                {project.links.github && <motion.a href={project.links.github} target='_blank' className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors" whileHover={{
              x: 5
            }}>
                    <GithubIcon size={18} />
                    <span>View Code</span>
                  </motion.a>}
                {project.links.demo && <motion.a href={project.links.demo} className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors" whileHover={{
              x: 5
            }}>
                    <ExternalLinkIcon size={18} />
                    <span>Live Demo</span>
                  </motion.a>}
              </div>
            </motion.div>)}
        </div>
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="text-center mt-12">
          <p className="text-gray-400 mb-4">More projects coming soon!</p>
          <motion.a href="https://github.com/Paras1209" target='_blank' className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors" whileHover={{
          x: 5
        }}>
            <GithubIcon size={20} />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>;
};