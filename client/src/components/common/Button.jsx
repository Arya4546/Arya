import { motion } from 'framer-motion';
import React from 'react';

const Button = ({
  children,
  className = '',
  href,
  onClick,
  download,
  ariaLabel,
  type = 'button',
  disabled = false,
}) => {
  const isLink = !!href;

  const sharedClasses = `
    relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-semibold 
    text-sm sm:text-base tracking-wide rounded-full overflow-hidden transition-all duration-300 ease-in-out
    bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white 
    shadow-lg border border-transparent
    hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:border-white/20
    ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
    ${className}
  `;

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <motion.div
        className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-10 transition duration-300 rounded-full pointer-events-none"
      />
    </>
  );

  return isLink ? (
    <motion.a
      href={href}
      onClick={onClick}
      download={download}
      className={sharedClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      aria-label={ariaLabel}
    >
      {content}
    </motion.a>
  ) : (
    <motion.button
      type={type}
      onClick={onClick}
      className={sharedClasses}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  );
};

export default Button;
