import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart AC Control using Blynk App',
      description: 'Developed an IoT-based smart AC control system that allows users to remotely control their air conditioner using the Blynk mobile application.',
      icon: '❄️',
      tags: ['IoT', 'Blynk', 'Arduino']
    },
    {
      title: 'Wearable Health Monitoring System',
      description: 'Built a wearable health monitoring device using Arduino sensors to track heart rate and body temperature in real time.',
      icon: '💓',
      tags: ['Arduino', 'Sensors', 'Healthcare']
    },
    {
      title: 'Smart Agriculture Automation',
      description: 'Designed an automated irrigation system that controls water pumps using soil moisture sensors and IoT technology.',
      icon: '🌱',
      tags: ['IoT', 'Automation', 'ESP8266']
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Created a responsive personal portfolio website using React with animations and modern UI design.',
      icon: '💼',
      tags: ['React', 'Tailwind CSS', 'Web Dev']
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-dark-secondary py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-silver text-center mb-4">
          Projects
        </h2>
        
        <div className="w-24 h-1 bg-silver mx-auto mb-16"></div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-dark-bg border border-silver/20 rounded-lg p-8 hover:border-silver/50 hover:transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-silver/5 rounded-full blur-2xl group-hover:bg-silver/10 transition-all duration-300"></div>
              
              {/* Project Icon */}
              <div className="text-6xl mb-4 relative z-10">{project.icon}</div>
              
              {/* Project Title */}
              <h3 className="text-2xl font-serif font-semibold text-silver mb-4 relative z-10">
                {project.title}
              </h3>
              
              {/* Project Description */}
              <p className="text-silver/80 leading-relaxed mb-6 relative z-10">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-silver/10 border border-silver/30 rounded-full text-sm text-silver"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-silver to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
