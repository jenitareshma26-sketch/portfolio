import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCode, FaMicrochip, FaLaptopCode, FaRobot } from 'react-icons/fa';

const Education = () => {
  const educationData = {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Engineering',
    institution: 'Karunya University',
    duration: '2025 – 2029',
    status: 'Currently Pursuing',
    description: 'Currently pursuing a Bachelor of Technology in Computer Engineering with focus on programming, IoT systems, embedded technologies, and modern web development.',
    focusAreas: [
      { name: 'Programming', icon: FaCode },
      { name: 'Embedded Systems', icon: FaMicrochip },
      { name: 'IoT Development', icon: FaRobot },
      { name: 'Web Technologies', icon: FaLaptopCode }
    ]
  };

  return (
    <section id="education" className="min-h-screen bg-black pt-16 pb-10 px-4 sm:px-6 relative overflow-hidden flex items-center">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-amethyst/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-amethyst-light/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8"
        >
          <h2 className="font-poppins font-bold text-silver text-3xl md:text-4xl mb-3">
            Educational Background
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amethyst-dark via-amethyst to-amethyst-light rounded-full" style={{ boxShadow: '0 0 15px rgba(153, 102, 204, 0.6)' }}></div>
          <p className="text-silver/60 mt-3 text-base font-inter">
            Academic Journey & Specialization
          </p>
        </motion.div>

        {/* Full-Width Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 rounded-xl p-6 md:p-8 border-2 border-amethyst/40 backdrop-blur-sm overflow-hidden"
            style={{
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: '0 0 40px rgba(153, 102, 204, 0.4), inset 0 0 30px rgba(153, 102, 204, 0.08)'
              }}
            ></div>

            {/* Top Accent Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amethyst to-transparent"></div>

            {/* Card Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amethyst/8 via-transparent to-amethyst-dark/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Degree with Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amethyst/25 to-amethyst-dark/25 rounded-lg flex items-center justify-center border border-amethyst/40 group-hover:scale-110 group-hover:border-amethyst transition-all duration-300"
                  style={{ boxShadow: '0 0 15px rgba(153, 102, 204, 0.35)' }}
                >
                  <FaGraduationCap className="text-2xl text-amethyst" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins font-bold text-silver text-xl md:text-2xl group-hover:text-amethyst-light transition-colors duration-300">
                    {educationData.degree}
                  </h3>
                  <p className="text-amethyst-light font-inter font-semibold uppercase tracking-wider text-xs">
                    {educationData.status} · {educationData.duration}
                  </p>
                </div>
              </div>

              {/* Field & Institution — horizontal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 pb-4 border-b border-amethyst/20">
                <div>
                  <p className="text-xs text-silver/50 font-inter uppercase tracking-wide mb-1">Field of Study</p>
                  <p className="text-lg text-silver/90 font-poppins font-semibold">{educationData.field}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaUniversity className="text-amethyst text-xl flex-shrink-0" />
                  <div>
                    <p className="text-xs text-silver/50 font-inter uppercase tracking-wide mb-0.5">Institution</p>
                    <p className="text-lg text-silver/90 font-poppins font-semibold">{educationData.institution}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-silver/70 leading-relaxed mb-5 font-inter text-sm md:text-base">
                {educationData.description}
              </p>

              {/* Focus Areas */}
              <div>
                <p className="text-xs text-amethyst-light font-poppins font-semibold mb-3 uppercase tracking-wide">
                  Key Focus Areas
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {educationData.focusAreas.map((area, areaIndex) => (
                    <motion.div
                      key={areaIndex}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: areaIndex * 0.08 }}
                      className="group/area flex flex-col items-center gap-2 p-3 bg-gradient-to-br from-amethyst/8 via-transparent to-amethyst-dark/8 border border-amethyst/30 rounded-lg hover:bg-amethyst/15 hover:border-amethyst/60 transition-all duration-300"
                    >
                      {React.createElement(area.icon, {
                        className: 'text-amethyst text-xl group-hover/area:scale-110 transition-transform duration-300'
                      })}
                      <span className="text-silver/80 text-xs font-poppins font-semibold text-center group-hover/area:text-amethyst-light transition-colors duration-300">{area.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-amethyst/5 rounded-full blur-2xl group-hover:bg-amethyst/10 transition-colors duration-500"></div>
            <div className="absolute bottom-4 left-4 w-20 h-20 bg-amethyst-light/5 rounded-full blur-2xl group-hover:bg-amethyst-light/10 transition-colors duration-500"></div>
          </motion.div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-center"
        >
          <p className="text-sm md:text-base text-silver/60 font-inter italic">
            "Education is the foundation of innovation and growth"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
