import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GradientBar from '../common/GradientBar';
import TestimonialCard from '../common/TestimonialCard';

const testimonials = [
  {
    name: 'Pragyavani Solutions LLP',
    role: 'Ex-Employee, Full Stack Developer (2024)',
    feedback:
      'Arya is a reliable and skilled full-stack developer. During his tenure, he delivered multiple live systems with professionalism, applying scalable and clean architectural solutions.',
  },
  {
    name: 'Raghvi Goel',
    role: 'Client (Final Year Project – Hospital Management System)',
    feedback:
      'Arya designed and delivered our entire hospital system with multi-role access, scheduling, and admin features. His dedication, punctual delivery, and code quality were top-tier.',
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-20%' });

  return (
    <section
      id="testimonials"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-blue-900 relative overflow-hidden"
      ref={ref}
      style={{ willChange: 'transform' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20 mix-blend-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: '-20%' }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <GradientBar
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"
            isInView={isInView}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              index={index}
              name={testimonial.name}
              role={testimonial.role}
              feedback={testimonial.feedback}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
