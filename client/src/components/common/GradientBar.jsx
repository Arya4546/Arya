import { motion } from 'framer-motion';
import React from 'react';
const GradientBar = ({ className, isInView }) => (
  <motion.div
    className={className}
    initial={{ scaleX: 0 }}
    animate={{ scaleX: isInView ? 1 : 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  />
);

export default GradientBar;