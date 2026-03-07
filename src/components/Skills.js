import React from 'react';
import { motion } from 'framer-motion';
import { SiPython, SiJavascript, SiReact, SiHtml5, SiArduino, SiGit, SiCanva, SiC } from 'react-icons/si';
import { FaMicrochip, FaRobot, FaLightbulb, FaNetworkWired, FaCss3Alt, FaCode } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: SiPython, level: 90, description: 'Data Analysis & Automation' },
        { name: 'C Programming', icon: SiC, level: 85, description: 'Embedded Systems' },
        { name: 'JavaScript', icon: SiJavascript, level: 88, description: 'Web Development' }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', icon: SiReact, level: 87, description: 'Frontend Framework' },
        { name: 'HTML', icon: SiHtml5, level: 92, description: 'Markup Language' },
        { name: 'CSS', icon: FaCss3Alt, level: 90, description: 'Styling & Design' },
        { name: 'FastUI', icon: FaLightbulb, level: 80, description: 'Rapid UI Development' }
      ]
    },
    {
      title: 'IoT & Embedded Systems',
      skills: [
        { name: 'Arduino', icon: SiArduino, level: 88, description: 'Microcontroller Programming' },
        { name: 'ESP8266', icon: FaNetworkWired, level: 85, description: 'WiFi Module Integration' },
        { name: 'Sensor Integration', icon: FaMicrochip, level: 86, description: 'Hardware Interface' },
        { name: 'Smart Automation', icon: FaRobot, level: 84, description: 'IoT Solutions' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: SiGit, level: 89, description: 'Version Control' },
        { name: 'VS Code', icon: FaCode, level: 92, description: 'Code Editor' },
        { name: 'Canva', icon: SiCanva, level: 85, description: 'Design Tool' }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amethyst/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-amethyst-light/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-amethyst-dark/12 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        
        {/* Geometric Decorations */}
        <div className="absolute top-1/4 right-10 w-20 h-20 border-2 border-amethyst/20 rotate-45"></div>
        <div className="absolute bottom-1/3 left-16 w-16 h-16 border-2 border-amethyst-light/20 rotate-12"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amethyst to-transparent mx-auto"></div>
          <p className="text-silver/60 mt-4 text-lg font-inter">
            Expertise across multiple domains
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12 md:space-y-14">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <h3 className="text-2xl md:text-3xl font-poppins font-bold text-silver mb-8 text-center md:text-left">
                <span className="bg-gradient-to-r from-amethyst-light via-amethyst to-amethyst-dark bg-clip-text text-transparent">
                  {category.title}
                </span>
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 place-items-center max-w-6xl mx-auto md:mx-0">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.06 }}
                    className="group relative"
                  >
                    {/* Square Skill Card */}
                    <div className="w-[92px] h-[92px] relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 rounded-lg border border-amethyst/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-amethyst flex flex-col items-center justify-center">
                      {/* Card Background Gradient on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amethyst/15 via-transparent to-amethyst-dark/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          boxShadow: '0 0 20px rgba(153, 102, 204, 0.4), inset 0 0 12px rgba(153, 102, 204, 0.1)'
                        }}
                      ></div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-1">
                        {/* Icon */}
                        <div className="mb-1 flex justify-center">
                          {React.createElement(skill.icon, {
                            className: 'text-[34px] text-amethyst group-hover:scale-110 transition-transform duration-300',
                            style: {
                              filter: 'drop-shadow(0 0 10px rgba(153, 102, 204, 0.5))',
                            }
                          })}
                        </div>

                        {/* Skill Name */}
                        <p className="text-xs font-poppins font-semibold text-silver text-center group-hover:text-amethyst-light transition-colors duration-300 line-clamp-2 leading-tight mt-0.5">
                          {skill.name}
                        </p>
                      </div>

                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amethyst to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-lg md:text-xl text-silver/70 font-inter italic">
            "Continuously evolving with technology to create innovative solutions"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
