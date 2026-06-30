// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', icon: 'fa-home' },
    { id: 'about', label: 'About', icon: 'fa-user' },
    { id: 'skills', label: 'Skills', icon: 'fa-code' },
    { id: 'projects', label: 'Projects', icon: 'fa-folder-open' },
    { id: 'experience', label: 'Experience', icon: 'fa-briefcase' },
    { id: 'contact', label: 'Contact', icon: 'fa-envelope' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-dark-900/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="group relative">
            <span className="text-2xl font-bold text-white">
              Ritesh<span className="text-cyan-400">.</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <i className={`fas ${link.icon} mr-2 text-xs`}></i>
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <ul className="py-4 space-y-2 border-t border-white/5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === link.id
                      ? 'bg-cyan-500/10 text-cyan-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <i className={`fas ${link.icon} mr-3 w-5 text-center`}></i>
                  {link.label}
                  {activeSection === link.id && (
                    <i className="fas fa-check-circle ml-auto text-cyan-400"></i>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;