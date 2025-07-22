import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaDatabase, FaServer } from 'react-icons/fa';
import { skills } from '../../constants/skills';
import SkillCard from '../common/SkillCard';
import GradientBar from '../common/GradientBar';
import React from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-20%' });

  return (
    <section
      id="about"
      className="min-h-screen py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
      ref={ref}
      style={{ willChange: 'transform' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20 mix-blend-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <GradientBar
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"
            isInView={isInView}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 mx-auto rounded-2xl overflow-hidden border-4 border-blue-400 shadow-2xl shadow-blue-400/30">
              <img
                src="/assets/avatar1.jpg"
                alt="Arya Deep Singh"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <motion.div
              className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaCode className="text-xl sm:text-2xl text-white" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm a passionate MERN stack developer with expertise in building robust, scalable web applications. With a strong foundation in modern JavaScript technologies, I create seamless user experiences that bridge the gap between design and functionality.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              My journey in web development has equipped me with skills in React.js, Node.js, Express.js, and MongoDB. I'm constantly exploring new technologies and best practices to deliver high-quality solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6">
              <motion.div
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 sm:p-6 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaDatabase className="text-2xl sm:text-3xl text-blue-400 mb-2 sm:mb-4" />
                <h3 className="text-white font-bold text-sm sm:text-base mb-2">Database</h3>
                <p className="text-gray-400 text-xs sm:text-sm">MongoDB, MSSQL Server</p>
              </motion.div>
              <motion.div
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 sm:p-6 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaServer className="text-2xl sm:text-3xl text-emerald-400 mb-2 sm:mb-4" />
                <h3 className="text-white font-bold text-sm sm:text-base mb-2">Backend</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Node.js, Express</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10 sm:mb-12">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} isInView={isInView} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;