import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, role, feedback, index, isInView }) => {
  return (
    <motion.div
      className="group backdrop-blur-lg border border-white/10 bg-white/5 p-6 rounded-2xl shadow-xl hover:shadow-blue-500/20 transition-all"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: false, margin: '-20%' }}
    >
      <p className="text-blue-100 text-base leading-relaxed mb-6 italic">“{feedback}”</p>
      <div className="border-t border-blue-400/20 pt-4">
        <h4 className="text-lg font-semibold text-blue-300">{name}</h4>
        <span className="text-sm text-blue-400">{role}</span>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
