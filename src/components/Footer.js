import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black relative">
      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amethyst to-transparent"
        style={{
          boxShadow: '0 0 10px rgba(153, 102, 204, 0.6)'
        }}
      ></div>

      <div className="container mx-auto max-w-7xl px-6 py-16">
        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1 - About */}
          <div>
            <h3 className="text-2xl font-poppins font-bold text-silver mb-4">
              <span className="bg-gradient-to-r from-amethyst-light via-amethyst to-amethyst-dark bg-clip-text text-transparent">
                Jenita Reshma
              </span>
            </h3>
            <p className="text-silver/70 leading-relaxed font-inter text-base">
              Computer Engineering student passionate about software development, IoT technologies, and building modern web applications.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-poppins font-semibold text-silver mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="text-silver/70 hover:text-amethyst font-inter cursor-pointer transition-all duration-300 inline-block hover:translate-x-2 group"
                  >
                    <span className="mr-2 text-amethyst opacity-0 group-hover:opacity-100 transition-opacity duration-300">▸</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact & Social */}
          <div>
            <h3 className="text-xl font-poppins font-semibold text-silver mb-4">
              Get In Touch
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a 
                href="mailto:jenitareshma26@gmail.com"
                className="flex items-center space-x-3 text-silver/70 hover:text-amethyst transition-colors duration-300 group"
              >
                <FaEnvelope className="text-amethyst group-hover:scale-110 transition-transform duration-300" />
                <span className="font-inter text-sm">jenitareshma26@gmail.com</span>
              </a>
              <a 
                href="tel:9500041427"
                className="flex items-center space-x-3 text-silver/70 hover:text-amethyst transition-colors duration-300 group"
              >
                <FaPhone className="text-amethyst group-hover:scale-110 transition-transform duration-300" />
                <span className="font-inter text-sm">9500041427</span>
              </a>
            </div>

            {/* Social Icons */}
            <div>
              <p className="text-sm text-silver/50 font-inter mb-3 uppercase tracking-wide">
                Connect With Me
              </p>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 border-2 border-amethyst/30 rounded-lg flex items-center justify-center text-amethyst hover:border-amethyst hover:bg-amethyst/10 transition-all duration-300 hover:scale-110 group"
                    aria-label={social.name}
                    style={{
                      boxShadow: '0 0 0 0 rgba(153, 102, 204, 0)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(153, 102, 204, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 0 0 rgba(153, 102, 204, 0)';
                    }}
                  >
                    {React.createElement(social.icon, {
                      className: 'text-xl group-hover:rotate-12 transition-transform duration-300'
                    })}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-amethyst/30 to-transparent mb-8"></div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-silver/60 font-inter text-sm text-center md:text-left">
            © 2026 Jenita Reshma. All rights reserved.
          </p>
          <p className="text-silver/40 font-inter text-xs italic">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-amethyst-dark to-amethyst rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 z-40 group"
        aria-label="Back to top"
        style={{
          boxShadow: '0 4px 20px rgba(153, 102, 204, 0.4)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 6px 30px rgba(153, 102, 204, 0.7)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(153, 102, 204, 0.4)';
        }}
      >
        <FaArrowUp className="text-lg group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;
