import { useRef, useState, useCallback } from 'react';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { socialLinks } from '../../constants/socialLinks';
import GradientBar from '../common/GradientBar';
import SocialLink from '../common/SocialLink';
import Button from '../common/Button';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-20%' });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/send-email`, formData);

        if (response.data.success) {
          toast.success('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          toast.error('Failed to send message. Please try again.');
        }
      } catch (err) {
        console.error('Email error:', err);
        toast.error('Server error. Try again later.');
      } finally {
        setLoading(false);
      }
    },
    [formData]
  );

  return (
    <section
      id="contact"
      className="min-h-screen py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-black to-orange-900/30"
      ref={ref}
      style={{ willChange: 'transform' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-red-900/20 mix-blend-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <GradientBar
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto"
            isInView={isInView}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                I'm always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <motion.div className="flex items-center gap-3 sm:gap-4" whileHover={{ scale: 1.05 }}>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
                  <FaEnvelope className="text-base sm:text-lg text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">Email</p>
                  <p className="text-gray-300 text-xs sm:text-sm">singharya9693@gmail.com</p>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-3 sm:gap-4" whileHover={{ scale: 1.05 }}>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                  <FaWhatsapp className="text-base sm:text-lg text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">WhatsApp / Call</p>
                  <p className="text-gray-300 text-xs sm:text-sm">+91 9653072738</p>
                </div>
              </motion.div>
            </div>

            <div className="flex gap-3 sm:gap-6 pt-4 sm:pt-6">
              {socialLinks.map((social, index) => (
                <SocialLink key={social.name} social={social} isInView={isInView} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6 bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg"
            >
              <motion.input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors duration-300"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors duration-300"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="5"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors duration-300 resize-none"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
