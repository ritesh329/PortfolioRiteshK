// src/components/Skills.jsx
import React, { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skillCategories = {
    frontend: {
      label: 'Frontend',
      icon: 'fa-paint-brush',
      color: 'from-cyan-400 to-blue-400',
      skills: [
        { name: 'React.js', icon: 'fa-react', color: 'text-cyan-400', level: 90 },
        { name: 'Redux', icon: 'fa-store', color: 'text-purple-400', level: 80 },
        { name: 'HTML5/CSS3', icon: 'fa-html5', color: 'text-orange-500', level: 95 },
        { name: 'JavaScript', icon: 'fa-js', color: 'text-yellow-400', level: 85 },
        { name: 'Bootstrap', icon: 'fa-bootstrap', color: 'text-purple-500', level: 85 },
        { name: 'Tailwind CSS', icon: 'fa-wind', color: 'text-cyan-400', level: 80 }
      ]
    },
    backend: {
      label: 'Backend',
      icon: 'fa-server',
      color: 'from-green-400 to-emerald-400',
      skills: [
        { name: 'Node.js', icon: 'fa-node-js', color: 'text-green-500', level: 85 },
        { name: 'Express.js', icon: 'fa-code', color: 'text-gray-300', level: 85 },
        { name: 'Java', icon: 'fa-java', color: 'text-red-500', level: 80 },
        { name: 'JSP/Servlets', icon: 'fa-code', color: 'text-yellow-500', level: 75 },
        { name: 'JDBC', icon: 'fa-database', color: 'text-blue-400', level: 75 },
        { name: 'REST APIs', icon: 'fa-plug', color: 'text-purple-400', level: 90 }
      ]
    },
    database: {
      label: 'Database',
      icon: 'fa-database',
      color: 'from-yellow-400 to-orange-400',
      skills: [
        { name: 'MongoDB', icon: 'fa-leaf', color: 'text-green-400', level: 85 },
        { name: 'MySQL', icon: 'fa-database', color: 'text-blue-400', level: 80 },
        { name: 'PostgreSQL', icon: 'fa-database', color: 'text-blue-500', level: 70 }
      ]
    },
    tools: {
      label: 'Tools & DevOps',
      icon: 'fa-tools',
      color: 'from-red-400 to-pink-400',
      skills: [
        { name: 'Git/GitHub', icon: 'fa-git-alt', color: 'text-orange-500', level: 90 },
        { name: 'Postman', icon: 'fa-paper-plane', color: 'text-orange-400', level: 85 },
        { name: 'VS Code', icon: 'fa-code', color: 'text-blue-400', level: 90 },
        { name: 'Eclipse', icon: 'fa-code', color: 'text-purple-400', level: 75 },
        { name: 'Firebase', icon: 'fa-fire', color: 'text-yellow-500', level: 70 },
        { name: 'Socket.IO', icon: 'fa-bolt', color: 'text-gray-400', level: 65 }
      ]
    },
    security: {
      label: 'Security & Auth',
      icon: 'fa-shield-alt',
      color: 'from-purple-400 to-pink-400',
      skills: [
        { name: 'JWT', icon: 'fa-key', color: 'text-cyan-400', level: 85 },
        { name: 'OAuth 2.0', icon: 'fa-google', color: 'text-blue-400', level: 75 },
        { name: 'Bcrypt', icon: 'fa-lock', color: 'text-green-400', level: 80 },
        { name: 'Firebase Auth', icon: 'fa-fire', color: 'text-yellow-500', level: 70 }
      ]
    }
  };
  
  const categories = ['all', ...Object.keys(skillCategories)];
  
  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skillCategories).flatMap(cat => cat.skills);
    }
    return skillCategories[activeCategory]?.skills || [];
  };
  
  const filteredSkills = getFilteredSkills();
  
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900"></div>
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="section-title">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern, scalable web applications
          </p>
        </div>
        
        {/* Category Filter - 3D Toggle */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
              style={{
                background: activeCategory === category 
                  ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))'
                  : 'rgba(255,255,255,0.05)',
                border: activeCategory === category 
                  ? '1px solid rgba(6, 182, 212, 0.3)'
                  : '1px solid rgba(255,255,255,0.1)'
              }}
            >
              {category === 'all' ? (
                <><i className="fas fa-th-large mr-2"></i> All Skills</>
              ) : (
                <><i className={`fas ${skillCategories[category].icon} mr-2`}></i> {skillCategories[category].label}</>
              )}
              {activeCategory === category && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-md"></span>
              )}
            </button>
          ))}
        </div>
        
        {/* Skills Grid - 3D Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                transform: hoveredSkill === index ? 'perspective(1000px) rotateX(5deg) rotateY(10deg) scale(1.05)' : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="glass-card p-6 text-center relative overflow-hidden border border-white/5 group-hover:border-cyan-500/20">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color || 'from-cyan-500/10 to-blue-500/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className="relative z-10">
                  <div className="relative inline-block mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color || 'from-cyan-400 to-blue-400'} rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    <i className={`fab ${skill.icon || 'fa-code'} ${skill.color || 'text-cyan-400'} text-5xl relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}></i>
                  </div>
                  
                  <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h4>
                  
                  {/* Skill Level */}
                  <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color || 'from-cyan-400 to-blue-400'} rounded-full transition-all duration-1000`}
                      style={{ 
                        width: hoveredSkill === index ? `${skill.level}%` : '0%',
                        transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    ></div>
                  </div>
                  
                  {/* Level Percentage */}
                  <div className={`mt-2 text-xs font-medium ${skill.color || 'text-cyan-400'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    {skill.level}% Proficiency
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;