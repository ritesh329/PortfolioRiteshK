// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-dark-900 border-t border-white/5 overflow-hidden">
      {/* Animated Gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)`
        }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ritesh<span className="text-cyan-400">.</span>
            </h3>
            <p className="text-gray-400 max-w-md">
              Building digital experiences with passion and precision. 
              Let's create something amazing together.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map(item => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/ritesh329"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/ritesh-kumar-maurya-10b17b326"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="mailto:bm3445876@gmail.com"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} Ritesh Kumar Maurya. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Designed & Developed with <span className="text-red-500">❤️</span> by Ritesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;