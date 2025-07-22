// src/components/global/CursorEffect.jsx
import React from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../../hooks/useMousePosition';

const CursorEffect = () => {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none"
      initial={false}
      animate={{
        x: x - 16,
        y: y - 16,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }}
    >
      <div className="w-8 h-8 rotate-45 border-2 border-green-400 bg-green-400/10 backdrop-blur-md rounded-sm shadow-[0_0_12px_2px_rgba(34,197,94,0.4)] transition-all duration-200" />
    </motion.div>
  );
};

export default CursorEffect;
