// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg md:text-xl text-cyan-400 mb-4">Hello, I'm</h3>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Ritesh Kumar Maurya
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            A passionate <span className="highlight">Full Stack Developer</span> skilled in Node.js, Express.js, React.Js , HTML, CSS, JavaScript,
            Java (JSP/Servlets/JDBC), RESTful APIs, MongoDB, and MySQL. I build secure, scalable, and efficient web applications by combining
            strong backend architecture with clean, responsive front‑end designs.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a 
              href="https://github.com/ritesh329" 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github mr-2"></i> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/ritesh-kumar-maurya-10b17b326" 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in mr-2"></i> LinkedIn
            </a>
            <a 
              href="#contact" 
              className="btn btn-outline"
            >
              <i className="fas fa-paper-plane mr-2"></i> Hire Me
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/ritesh329" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/30 hover:text-cyan-300 hover:scale-110 transition-all duration-300">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ritesh-kumar-maurya-10b17b326" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/30 hover:text-cyan-300 hover:scale-110 transition-all duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:bm3445876@gmail.com" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/30 hover:text-cyan-300 hover:scale-110 transition-all duration-300">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:+919510850241" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/30 hover:text-cyan-300 hover:scale-110 transition-all duration-300">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;