import React from 'react';
import { motion } from 'framer-motion';
import { SiPython, SiJavascript, SiReact, SiHtml5, SiArduino, SiGit, SiCanva, SiC, SiJupyter } from 'react-icons/si';
import { FaJava, FaMicrochip, FaRobot, FaLightbulb, FaNetworkWired, FaCss3Alt, FaCode } from 'react-icons/fa';

const Skills = () => {
  const categories = [
    {
      title: 'Programming Languages',
      description: 'Core coding foundations for scalable software.',
      skills: [
        { name: 'Python', icon: SiPython },
        { name: 'C', icon: SiC },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Java', icon: FaJava }
      ]
    },
    {
      title: 'Web Development',
      description: 'Frontend engineering for modern, responsive UI.',
      skills: [
        { name: 'HTML', icon: SiHtml5 },
        { name: 'CSS', icon: FaCss3Alt },
        { name: 'React', icon: SiReact },
        { name: 'FastUI', icon: FaLightbulb }
      ]
    },
    {
      title: 'IoT & Embedded Systems',
      description: 'Hardware-aware systems and smart automation.',
      skills: [
        { name: 'Arduino', icon: SiArduino },
        { name: 'ESP8266', icon: FaNetworkWired },
        { name: 'Sensors', icon: FaMicrochip },
        { name: 'Automation', icon: FaRobot }
      ]
    },
    {
      title: 'Development Tools',
      description: 'Daily stack for productivity and delivery.',
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'VS Code', icon: FaCode },
        { name: 'Canva', icon: SiCanva },
        { name: 'Jupyter', icon: SiJupyter }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-black pt-16 pb-12 px-4 sm:px-6 relative overflow-hidden flex items-center">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-12 w-56 h-56 bg-amethyst/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-12 w-80 h-80 bg-amethyst-light/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-1/4 w-72 h-72 bg-amethyst-dark/12 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="section-heading mb-3">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amethyst to-transparent mx-auto"></div>
          <p className="text-silver/75 mt-3 text-base md:text-lg font-inter tracking-wide max-w-3xl mx-auto leading-relaxed">
            A practical toolkit I use to design, build, and ship modern software and IoT solutions.
          </p>
        </motion.div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-7 max-w-5xl mx-auto">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.08 }}
              className="rounded-2xl border border-amethyst/25 bg-gradient-to-br from-white/[0.03] via-amethyst/5 to-black/40 p-4 md:p-5"
            >
              {/* Category Heading */}
              <h3 className="text-sm md:text-base font-poppins font-bold text-amethyst mb-1 tracking-wide text-center">
                {category.title}
              </h3>
              <p className="text-center text-[11px] md:text-xs text-silver/55 font-inter mb-4 tracking-wide">
                {category.description}
              </p>

              {/* 4-icon grid row */}
              <div className="grid grid-cols-4 gap-2.5 justify-items-center mx-auto" style={{ maxWidth: '360px' }}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.04 }}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="group relative"
                  >
                    <div className="w-[76px] h-[80px] md:w-[82px] md:h-[84px] relative bg-gradient-to-br from-gray-900/85 via-black/95 to-gray-900/85 rounded-lg border border-amethyst/35 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-amethyst flex flex-col items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-amethyst/15 via-transparent to-amethyst-dark/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div
                        className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ boxShadow: '0 0 12px rgba(153, 102, 204, 0.35), inset 0 0 8px rgba(153, 102, 204, 0.08)' }}
                      ></div>

                      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-1">
                        <div className="mb-1 flex justify-center">
                          {React.createElement(skill.icon, {
                            className: 'text-[22px] md:text-[24px] text-amethyst group-hover:scale-110 transition-transform duration-300',
                            style: {
                              filter: 'drop-shadow(0 0 8px rgba(153, 102, 204, 0.45))'
                            }
                          })}
                        </div>

                        <p className="text-[9px] md:text-[10px] font-poppins font-semibold text-silver text-center group-hover:text-amethyst-light transition-colors duration-300 leading-tight">
                          {skill.name}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
