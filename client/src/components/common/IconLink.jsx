import { motion } from 'framer-motion';
import React from 'react';
const IconLink = ({ href, icon, label, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-2 sm:p-3 bg-white/20 backdrop-blur-lg rounded-full text-white transition-all duration-300 ${color}`}
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default IconLink;