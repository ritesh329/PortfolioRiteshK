// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = [
    { icon: 'fab fa-react', name: 'React.js', color: 'text-cyan-400' },
    { icon: 'fab fa-node-js', name: 'Node.js', color: 'text-green-500' },
    { icon: 'fas fa-server', name: 'Express.js', color: 'text-gray-300' },
    { icon: 'fab fa-java', name: 'Java', color: 'text-red-500' },
    { icon: 'fas fa-code', name: 'JSP/Servlets', color: 'text-yellow-500' },
    { icon: 'fas fa-database', name: 'MySQL', color: 'text-blue-400' },
    { icon: 'fas fa-database', name: 'MongoDB', color: 'text-green-400' },
    { icon: 'fas fa-code-branch', name: 'REST API', color: 'text-purple-400' },
    { icon: 'fab fa-html5', name: 'HTML/CSS/JS', color: 'text-orange-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-800/50">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
          <p>Here are the technologies I work with</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="glass-card p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-cyan-500/20 group"
            >
              <i className={`${skill.icon} ${skill.color} text-5xl mb-4 group-hover:scale-110 transition-transform duration-300`}></i>
              <span className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;