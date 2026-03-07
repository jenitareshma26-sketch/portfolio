import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const subtitles = [
    "Full-Stack Developer",
    "IoT Systems Engineer",
    "Computer Engineering Student"
  ];

  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 3000); // 2 seconds text display + 1 second animation

    return () => clearInterval(interval);
  }, [subtitles.length]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-950 via-black to-black pt-24">
      {/* Radial gradient background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
      
      {/* Subtle decorative circles */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-700 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10 min-h-screen flex flex-col justify-between py-10">
        {/* Main Content - Two Column Layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE - Text Content */}
          <div className="text-left space-y-6">
            {/* Name with Framer Motion slide-in animation */}
            <div className="relative">
              <motion.h1 
                className="hero-name text-white leading-tight"
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 1.8,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 60,
                  damping: 20
                }}
              >
                Jenita Reshma
              </motion.h1>
              
              {/* Glowing Underline Animation */}
              <motion.div 
                className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-amethyst to-amethyst-light rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ 
                  delay: 1.2,
                  duration: 1.2,
                  ease: "easeOut"
                }}
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(153, 102, 204, 0.8))',
                  textShadow: '0 0 30px rgba(153, 102, 204, 0.6)'
                }}
              ></motion.div>
            </div>
            
            {/* Animated Looping Subtitle */}
            <motion.div 
              className="hero-subtitle h-12 md:h-14 lg:h-16 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.8,
                duration: 1.2,
                ease: "easeOut"
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSubtitle}
                  className="text-amethyst font-inter font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                >
                  {subtitles[currentSubtitle]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              className="text-silver/80 text-lg md:text-xl font-inter leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 1.0,
                duration: 1.0,
                ease: "easeOut"
              }}
            >
              I build <span className="text-amethyst font-semibold">responsive web applications</span> with React and design <span className="text-amethyst font-semibold">smart IoT systems</span> using Python, C, and embedded technologies.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 1.2,
                duration: 1.0,
                ease: "easeOut"
              }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={700}
                offset={-80}
                className="pro-button inline-flex items-center px-7 py-3 rounded-md bg-amethyst text-white font-semibold cursor-pointer border border-amethyst hover:bg-amethyst-light transition-all duration-300 shadow-lg shadow-amethyst/30 hover:shadow-amethyst/50 focus:outline-none focus:ring-2 focus:ring-amethyst focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Contact me for collaboration"
              >
                Let's Talk
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pro-button inline-flex items-center gap-2 px-7 py-3 rounded-md border border-amethyst/60 text-silver font-semibold cursor-pointer hover:bg-amethyst/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amethyst focus:ring-offset-2 focus:ring-offset-black"
                aria-label="View my resume"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Profile Photo with Double Ring Border */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: 0.6,
              duration: 1.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 50,
              damping: 20
            }}
          >
            <div className="relative">
              {/* Outer white ring */}
              <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-br from-amethyst-light to-amethyst p-3 shadow-2xl shadow-amethyst/30">
                {/* Inner gap/ring effect */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-950 to-black p-2">
                  {/* Image container */}
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/jenita-photo.jpg"
                      alt="Jenita Reshma - Computer Engineering Student and Full-Stack Developer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDUwIiBoZWlnaHQ9IjQ1MCIgZmlsbD0iIzExMSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iODAiIGZpbGw9IiNDMEMwQzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5KUjwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FOOTER - Website URL with Globe Icon */}
        <motion.div 
          className="flex items-center space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: 1.4,
            duration: 1,
            ease: "easeOut"
          }}
        >
          {/* Globe Icon */}
          <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
            <svg 
              className="w-5 h-5 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
              />
            </svg>
          </div>
          
          {/* Website URL */}
          <a 
            href="https://jenita.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-lg md:text-xl font-sans hover:text-gray-300 transition-colors duration-300"
          >
            jenita.dev
          </a>
        </motion.div>

        {/* Decorative dots (three dots menu style) */}
        <motion.div 
          className="absolute top-8 right-8 flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: 1.6,
            duration: 1,
            ease: "easeOut"
          }}
        >
          <motion.div 
            className="w-3 h-3 bg-amethyst rounded-full"
            animate={{ 
              y: [0, -8, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: 0
            }}
          ></motion.div>
          <motion.div 
            className="w-3 h-3 bg-amethyst rounded-full"
            animate={{ 
              y: [0, -8, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: 0.2
            }}
          ></motion.div>
          <motion.div 
            className="w-3 h-3 bg-amethyst rounded-full"
            animate={{ 
              y: [0, -8, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: 0.4
            }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
