import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import { smoothScrollTo } from './utils/smoothScroll';
import { Toaster } from 'react-hot-toast'; 
import CursorEffect from './components/global/CursorEffect';


const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const scrollYProgressSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const y = useTransform(scrollYProgressSpring, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgressSpring, [0, 0.5, 1], [1, 0.95, 0.9]);
  const bgOpacity = useTransform(scrollYProgressSpring, [0, 1], [0.1, 0.2]);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Handle active section tracking
  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(index);
          }
        });
        rafId = null;
      });
    };

    const links = document.querySelectorAll('a[href^="#"]');
    const handleLinkClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').slice(1);
      smoothScrollTo(targetId);
    };

    links.forEach((link) => link.addEventListener('click', handleLinkClick));
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      links.forEach((link) => link.removeEventListener('click', handleLinkClick));
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="font-mono bg-black text-white overflow-x-hidden" ref={containerRef} style={{ willChange: 'scroll-position' }}>
      {/* ✅ Toast container */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#111',
            color: '#0f0',
            fontFamily: 'monospace',
            border: '1px solid #0f0',
            borderRadius: '8px',
          },
        }}
      />

      <motion.div className="fixed inset-0 z-0" style={{ opacity: bgOpacity }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </motion.div>

      <Navbar activeSection={activeSection} />

      <motion.div style={{ y, opacity, willChange: 'transform, opacity' }}>
        <Hero />
      </motion.div>

      <motion.div
        className="relative z-10 bg-transparent"
        initial={{ y: '20vh' }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: false, margin: '-20%' }}
        style={{ willChange: 'transform' }}
      >
        <About />
      </motion.div>

      <motion.div
        className="relative z-20 bg-transparent"
        initial={{ y: '20vh' }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: false, margin: '-20%' }}
        style={{ willChange: 'transform' }}
      >
        <Projects />
      </motion.div>

      <motion.div
        className="relative z-30 bg-transparent"
        initial={{ y: '20vh' }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: false, margin: '-20%' }}
        style={{ willChange: 'transform' }}
      >
        <Contact />
      </motion.div>

    <Footer />
<ScrollProgress scrollYProgress={scrollYProgressSpring} />
<CursorEffect />

    </div>
  );
};

export default App;
