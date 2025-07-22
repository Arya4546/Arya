import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaMobileAlt } from 'react-icons/fa';
import { projects } from '../../constants/projects';
import GradientBar from '../common/GradientBar';
import IconLink from '../common/IconLink';
import React from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-20%' });

  return (
    <section
      id="projects"
      className="min-h-screen py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black"
      ref={ref}
      style={{ willChange: 'transform' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 mix-blend-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: '-20%' }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <GradientBar
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"
            isInView={isInView}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: false, margin: '-20%' }}
            >
              <div className="h-40 sm:h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="flex gap-3 sm:gap-4">
                      <IconLink
                        href={project.github}
                        icon={<FaGithub className="text-base sm:text-xl" />}
                        label={`View ${project.title} on GitHub`}
                        color="hover:text-purple-400"
                      />
                      <IconLink
                        href={project.live}
                        icon={<FaMobileAlt className="text-base sm:text-xl" />}
                        label={`View live demo of ${project.title}`}
                        color="hover:text-purple-400"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((Icon, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-center p-2 rounded-full bg-purple-400/10 border border-purple-400/20 text-purple-300 text-lg sm:text-xl transition-transform hover:scale-110"
                    >
                      <Icon />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
