// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know more about my background, skills, and professional journey</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&auto=format&fit=crop&q=60"
              alt="Ritesh Kumar Maurya"
              className="rounded-2xl shadow-2xl relative z-10 w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Full Stack Developer</h3>
            <div className="space-y-4 text-gray-400 mb-8">
              <p>
                I am a BCA student (VBSPU, Jaunpur – 2022-2025) with a strong focus on backend development.
                Experienced in creating RESTful APIs, working with databases, and applying OOP and patterns like MVC, DAO,
                and Singleton.
              </p>
              <p>
                My journey in web development started with a passion for solving problems and building things that matter.
                I enjoy the process of turning ideas into reality through clean, efficient code and intuitive user
                experiences.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="fas fa-graduation-cap text-cyan-400 text-xl"></i>
                <div>
                  <strong className="text-white">BCA</strong>
                  <p className="text-gray-400">VBSPU, Jaunpur (2022-2025)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-cyan-400 text-xl"></i>
                <div>
                  <strong className="text-white">Email:</strong>
                  <p className="text-gray-400">bm3445876@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-cyan-400 text-xl"></i>
                <div>
                  <strong className="text-white">Phone:</strong>
                  <p className="text-gray-400">+91 9510850241</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-cyan-400 text-xl"></i>
                <div>
                  <strong className="text-white">Location:</strong>
                  <p className="text-gray-400">Jaunpur, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;