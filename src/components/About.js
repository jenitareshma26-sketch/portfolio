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
        
        {/* About Content */}
        <div className="px-4 md:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
