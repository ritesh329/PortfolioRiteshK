// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-dark-900 border-t border-gray-800">
      <div className="container">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            &copy; {currentYear} Ritesh Kumar Maurya. All rights reserved.
          </p>
          <p className="text-gray-400 mb-8">
            Designed & Developed with <span className="text-red-500">❤️</span> by Ritesh
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/ritesh329"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/ritesh-kumar-maurya-10b17b326"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="mailto:bm3445876@gmail.com"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;