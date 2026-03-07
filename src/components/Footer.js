import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/jenitareshma26-sketch' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/jenitareshma-p-0549b0378' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:jenitareshma26@gmail.com' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-black to-black overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amethyst/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-amethyst-dark/5 rounded-full blur-3xl"></div>
      </div>

      {/* Top Accent Line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-amethyst to-transparent"
        style={{ boxShadow: '0 0 15px rgba(153, 102, 204, 0.5)' }}
      ></div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-6">

        {/* Upper Section: Brand + Links + Social */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Brand Column */}
          <div className="space-y-3">
            <h3 className="text-xl font-poppins font-bold text-white">
              Jenita<span className="text-amethyst">.</span>Reshma
            </h3>
            <p className="text-silver/50 font-inter text-sm leading-relaxed max-w-xs">
              Aspiring Computer Engineer passionate about building innovative IoT solutions and modern web experiences.
            </p>
            <div className="flex items-center gap-1.5 text-silver/40 text-xs font-inter">
              <FaMapMarkerAlt className="text-amethyst/60 text-[10px]" />
              <span>Tamil Nadu, India</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:text-center">
            <h4 className="text-sm font-poppins font-semibold text-white/80 uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="text-silver/50 hover:text-amethyst-light font-inter text-sm cursor-pointer transition-colors duration-300 hover:translate-x-1 md:hover:translate-x-0 inline-block"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect Column */}
          <div className="md:text-right">
            <h4 className="text-sm font-poppins font-semibold text-white/80 uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="flex gap-3 md:justify-end mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-silver/60 hover:text-amethyst hover:border-amethyst/50 hover:bg-amethyst/10 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                  aria-label={social.name}
                >
                  {React.createElement(social.icon, { className: 'text-base' })}
                </a>
              ))}
            </div>
            <a
              href="mailto:jenitareshma26@gmail.com"
              className="text-silver/40 hover:text-amethyst-light font-inter text-xs transition-colors duration-300"
            >
              jenitareshma26@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Bottom Bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-silver/40 font-inter text-xs">
            © {new Date().getFullYear()} Jenita Reshma. All rights reserved.
          </p>
          <p className="text-silver/30 font-inter text-xs flex items-center gap-1">
            Built with <FaHeart className="text-amethyst text-[10px] animate-pulse" /> using React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={showTopBtn ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 w-11 h-11 bg-gradient-to-br from-amethyst-dark to-amethyst rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 z-40 group"
        aria-label="Back to top"
        style={{ boxShadow: '0 4px 20px rgba(153, 102, 204, 0.4)', pointerEvents: showTopBtn ? 'auto' : 'none' }}
      >
        <FaArrowUp className="text-sm group-hover:-translate-y-0.5 transition-transform duration-300" />
      </motion.button>
    </footer>
  );
};

export default Footer;
