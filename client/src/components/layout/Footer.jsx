import { motion } from 'framer-motion';
import React from 'react';
const Footer = () => (
  <footer className="relative z-40 bg-black/50 backdrop-blur-lg border-t border-green-500/30 py-6 sm:py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.p
        className="text-gray-400 text-sm sm:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        © 2025 Arya Deep Singh. Crafted with ❤️ and lots of ☕
      </motion.p>
    </div>
  </footer>
);

export default Footer;