import { motion } from 'framer-motion';
import React from 'react';
const SkillCard = ({ skill, isInView, index }) => (
  <motion.div
    className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 sm:p-6 rounded-xl"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
    whileHover={{ scale: 1.05, y: -5 }}
  >
    <div className="flex items-center justify-between mb-4 sm:mb-6">
      <div className="flex items-center gap-2 sm:gap-4">
        <skill.icon className="text-xl sm:text-2xl" style={{ color: skill.color }} />
        <span className="text-white font-bold text-sm sm:text-base">{skill.name}</span>
      </div>
      <span className="text-blue-400 text-sm sm:text-base font-bold">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
      <motion.div
        className="h-2 sm:h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
        initial={{ width: 0 }}
        animate={{ width: isInView ? `${skill.level}%` : 0 }}
        transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
      />
    </div>
  </motion.div>
);

export default SkillCard;