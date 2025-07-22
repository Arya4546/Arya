import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { smoothScrollTo } from '../../utils/smoothScroll';
import React from 'react';
const ScrollProgress = ({ scrollYProgress }) => (
  <>
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 z-50 origin-left"
      style={{ scaleX: scrollYProgress, willChange: 'transform' }}
    />
    <motion.button
      className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-2xl z-50"
      onClick={() => smoothScrollTo('hero')}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: scrollYProgress.get() > 0 ? 1 : 0, opacity: scrollYProgress.get() > 0 ? 1 : 0 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300 }}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-base sm:text-lg" />
    </motion.button>
  </>
);

export default ScrollProgress;