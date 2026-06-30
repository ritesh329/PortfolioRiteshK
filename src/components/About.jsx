// src/components/About.jsx
import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');
  
  const tabs = [
    { id: 'education', label: 'Education', icon: 'fa-graduation-cap' },
    { id: 'experience', label: 'Experience', icon: 'fa-briefcase' },
    { id: 'interests', label: 'Interests', icon: 'fa-heart' }
  ];
  
  const content = {
    education: {
      items: [
        {
          title: 'Bachelor of Computer Application (BCA)',
          institution: 'VBSPU, Jaunpur',
          period: '2022 - 2025',
          description: 'Specialization in Computer Application and Engineering',
          score: '75%'
        },
        {
          title: 'Intermediate (10+2)',
          institution: 'PT SPD Inter College Baderi Utriai',
          period: '2022',
          description: 'Science Stream',
          score: '70.8%'
        }
      ]
    },
    experience: {
      items: [
        {
          title: 'Frontend Developer',
          institution: 'Debox Global IT Solution',
          period: 'July 2025 - Present',
          description: 'Working on enterprise travel CRM with React.js',
          score: '1 Year'
        }
      ]
    },
    interests: {
      items: [
        { title: 'MERN Stack Development', icon: 'fa-layer-group' },
        { title: 'AI/ML Learning', icon: 'fa-robot' },
        { title: 'Python Programming', icon: 'fa-python' },
        { title: 'Open Source Contribution', icon: 'fa-code-branch' },
        { title: 'Problem Solving', icon: 'fa-brain' },
        { title: 'Tech Blogging', icon: 'fa-blog' }
      ]
    }
  };
  
  return (
    <section id="about" className="py-20 bg-dark-800/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)`
      }}></div>
      
      <div className="container relative z-10">
        <div className="section-title">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Know Me <span className="text-cyan-400">Better</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A passionate developer with a love for learning and creating meaningful digital solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-dark-800 rounded-2xl overflow-hidden border border-white/10">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&auto=format&fit=crop&q=60"
                  alt="Ritesh Kumar Maurya"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-dark-900/90 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Currently</p>
                      <p className="text-white font-semibold">Frontend Developer</p>
                    </div>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-semibold">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              MERN Stack Developer & AI/ML Enthusiast
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I'm a <span className="text-cyan-400 font-semibold">Full Stack MERN Developer</span> with a strong foundation in 
              <span className="text-white font-medium"> React.js, Node.js, Express.js, and MongoDB</span>. 
              I'm also passionate about <span className="text-cyan-400 font-semibold">Artificial Intelligence & Machine Learning</span> 
              and actively learning <span className="text-white font-medium">Python</span> to build intelligent applications.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              My journey in tech started with web development and evolved into exploring the intersection of 
              <span className="text-white font-medium"> AI/ML</span> and <span className="text-white font-medium">full-stack development</span>. 
              I believe in creating solutions that are not just functional but also intelligent and scalable.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              With expertise in <span className="text-cyan-400 font-semibold">MERN stack</span>, 
              <span className="text-cyan-400 font-semibold"> Java</span>, and growing knowledge in 
              <span className="text-cyan-400 font-semibold"> Python & AI/ML</span>, I bring a unique blend of 
              technical skills and creative problem-solving to every project I undertake.
            </p>
            
            {/* Tabs */}
            <div className="flex gap-2 mb-6 bg-dark-800 rounded-xl p-1 border border-white/5">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <i className={`fas ${tab.icon} mr-2`}></i>
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="space-y-4">
              {activeTab === 'interests' ? (
                <div className="grid grid-cols-2 gap-3">
                  {content[activeTab].items.map((item, index) => (
                    <div key={index} className="glass-card p-4 text-center hover:border-cyan-500/30 transition-all duration-300">
                      <i className={`fas ${item.icon} text-cyan-400 text-2xl mb-2`}></i>
                      <p className="text-white text-sm">{item.title}</p>
                    </div>
                  ))}
                </div>
              ) : (
                content[activeTab].items.map((item, index) => (
                  <div key={index} className="glass-card p-4 border-l-2 border-cyan-500">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-white font-semibold">{item.title}</h4>
                        <p className="text-cyan-400 text-sm">{item.institution}</p>
                        <p className="text-gray-500 text-sm">{item.period}</p>
                        {item.description && (
                          <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                        )}
                      </div>
                      {item.score && (
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-semibold">
                          {item.score}
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;