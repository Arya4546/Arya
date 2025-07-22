import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { smoothScrollTo } from '../../utils/smoothScroll';
import useMousePosition from '../../hooks/useMousePosition';

import Button from '../common/Button';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });
  const mousePosition = useMousePosition();
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '30%']), {
    stiffness: 100,
    damping: 20,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-black text-white flex items-center pt-20"
      ref={ref}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/20 via-black to-cyan-900/20 opacity-40 pointer-events-none z-0" />

      {/* Cursor effect */}
      <motion.div
        className="fixed w-4 h-4 bg-emerald-400/70 rounded-full pointer-events-none z-50 mix-blend-difference shadow"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{ scale: isInView ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y, opacity }}
      >
        <div className="text-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-8"
          >
            <div className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-emerald-400 shadow-xl">
              <img
                src="/assets/avatar.jpg"
                alt="Arya Deep Singh"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Name + Title */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Arya Deep
            </span>
            <span className="block text-white">Singh</span>
          </motion.h1>

          {/* Typing title */}
          <motion.div
            className="text-xl sm:text-2xl text-gray-300 mb-6 h-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="font-mono">{text}</span>
            <span className="animate-pulse ml-1">|</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Crafting exceptional digital experiences with cutting-edge technologies. Passionate about creating scalable, user-centric applications.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              href="/assets/Arya_Deep_Singh_FullStackDeveloper_resume_2025.pdf"
              download
              className="btn-primary group relative overflow-hidden"
              aria-label="Download resume"
            >
              <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
                <FaDownload />
                Download Resume
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>

            <Button
              href="#projects"
              onClick={() => smoothScrollTo('projects')}
              className="btn-secondary"
              aria-label="View projects"
            >
              View Projects
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
