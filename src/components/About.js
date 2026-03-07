import React from 'react';
import { motion } from 'framer-motion';
import { SiPython, SiReact } from 'react-icons/si';
import { FaMicrochip, FaRobot, FaCode } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'Python', icon: SiPython },
    { name: 'C Programming', icon: FaCode },
    { name: 'React', icon: SiReact },
    { name: 'IoT', icon: FaMicrochip },
    { name: 'FastUI', icon: FaRobot }
  ];

  return (
    <section id="about" className="min-h-screen bg-black py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading inline-block">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amethyst to-amethyst-light mx-auto mt-4"></div>
        </motion.div>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-8">
          
          {/* LEFT SIDE - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative"
          >
            {/* Background Gradient Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-96 h-96 md:w-[450px] md:h-[450px] bg-gradient-to-br from-amethyst/30 via-amethyst-light/20 to-amethyst-dark/30 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-gradient-to-tl from-purple-600/20 via-amethyst/25 to-purple-800/20 rounded-full blur-2xl opacity-50"></div>
            </div>

            {/* Hexagon Container with floating animation */}
            <div className="relative hexagon-border hexagon-glow-outer group z-10">
              {/* Hexagon Photo Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 transform group-hover:scale-105 transition-all duration-700 ease-out">
                {/* Outer hexagon border with enhanced gradient */}
                <div className="absolute inset-0 hexagon-clip" 
                  style={{
                    background: 'linear-gradient(135deg, #B399D6 0%, #9966CC 25%, #E0BBF7 50%, #7744AA 75%, #B399D6 100%)',
                    padding: '8px',
                    filter: 'brightness(1.1)'
                  }}
                >
                  {/* Inner hexagon with image */}
                  <div className="w-full h-full hexagon-clip bg-black relative overflow-hidden">
                    <img 
                      src="/jenita-about.jpg" 
                      alt="Jenita Reshma - Computer Engineering Student specializing in IoT and Full-Stack Development" 
                      className="w-full h-full object-cover hexagon-clip brightness-100 group-hover:brightness-110 transition-all duration-500"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzg0IiBoZWlnaHQ9IjM4NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzg0IiBoZWlnaHQ9IjM4NCIgZmlsbD0iIzExMSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNjQiIGZpbGw9IiNDMEMwQzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5KUjwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                    
                    {/* Shimmer overlay on hover */}
                    <div className="absolute inset-0 hexagon-clip bg-gradient-to-br from-amethyst/0 via-amethyst-light/20 to-amethyst/0 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    
                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-0 hexagon-clip bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* About Heading */}
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-silver mb-6">
              Hello! I'm <span className="text-amethyst">Jenita Reshma</span>
            </h3>

            {/* Description */}
            <p className="body-text text-lg leading-relaxed">
              I'm a <span className="text-amethyst font-semibold">Computer Engineering student at Karunya University</span> specializing in full-stack web development and IoT system design. I build <span className="text-amethyst font-semibold">scalable web applications with React</span> and develop <span className="text-amethyst font-semibold">embedded IoT solutions</span> using Python, C, Arduino, and ESP8266.
            </p>
            
            <p className="body-text text-lg leading-relaxed">
              My focus is on creating <span className="text-amethyst font-semibold">practical, user-centered solutions</span> that solve real-world problems—from responsive UIs to smart automation systems. I'm experienced with modern frameworks like React and FastUI, and passionate about bridging hardware and software through IoT innovation.
            </p>

            {/* Skills Tags */}
            <div className="pt-6">
              <h4 className="text-sm font-poppins font-semibold text-silver/70 uppercase tracking-wider mb-4">
                Core Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amethyst/20 to-amethyst-dark/20 border border-amethyst/40 rounded-full hover:border-amethyst hover:bg-amethyst/30 transition-all duration-300 cursor-pointer"
                  >
                    {React.createElement(skill.icon, {
                      className: 'text-amethyst text-lg',
                      style: {
                        filter: 'drop-shadow(0 0 6px rgba(153, 102, 204, 0.6))'
                      }
                    })}
                    <span className="text-silver/90 font-inter font-medium text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="pt-8 mt-8 border-t border-amethyst/30"
            >
              <p className="text-lg md:text-xl font-poppins italic text-amethyst/80 leading-relaxed">
                "Turning ideas into impactful solutions through code and innovation."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
