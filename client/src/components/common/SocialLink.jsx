import { motion } from 'framer-motion';
import React from 'react';
const SocialLink = ({ social, isInView, index }) => (
  <motion.a
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 sm:w-12 h-10 sm:h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white transition-all duration-300 ${social.color} shadow-md`}
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    aria-label={`Connect via ${social.name}`}
  >
    <social.icon className="text-base sm:text-xl" />
  </motion.a>
);

export default SocialLink;