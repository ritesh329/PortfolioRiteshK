// src/components/Home.jsx
import React, { useEffect, useRef, useState } from 'react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const textRef = useRef(null);
  
  useEffect(() => {
    const roles = ['Full Stack Developer', 'MERN Stack Developer', 'Problem Solver', 'Creative Thinker'];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';
    
    const typeEffect = () => {
      const role = roles[index];
      
      if (isDeleting) {
        currentText = role.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = role.substring(0, charIndex + 1);
        charIndex++;
      }
      
      if (textRef.current) {
        textRef.current.textContent = currentText;
      }
      
      if (!isDeleting && charIndex === role.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
      }
      
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
        setTimeout(typeEffect, 500);
        return;
      }
      
      setTimeout(typeEffect, isDeleting ? 40 : 80);
    };
    
    typeEffect();
    
    const handleMouseMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (textRef.current) {
        textRef.current.textContent = '';
      }
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`
      }}
    >
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
      
      {/* Animated Orbs */}
      <div 
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
        }}
      ></div>
      <div 
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed"
        style={{
          transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`
        }}
      ></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full animate-fade-in relative">
            <span className="relative flex items-center text-cyan-400 text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Available for Opportunities
            </span>
          </div>
          
          <div className="mb-6 animate-slide-up">
            <h3 className="text-lg md:text-xl text-cyan-400 font-light tracking-[0.3em] uppercase">
              Welcome to My Digital Space
            </h3>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 animate-slide-up">
            Ritesh Kumar
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Maurya
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-400 mb-8 animate-slide-up">
            <span className="text-white font-semibold">&lt;</span>
            <span ref={textRef} className="text-cyan-400 font-semibold min-w-[200px]"></span>
            <span className="text-white font-semibold"> /&gt;</span>
          </div>
          
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in">
            Crafting <span className="text-cyan-400 font-semibold">digital experiences</span> with precision and creativity. 
            Specializing in <span className="text-white font-medium">MERN Stack</span>, <span className="text-white font-medium">Java</span>, 
            and <span className="text-white font-medium">Cloud Technologies</span>. I turn complex problems into elegant solutions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in">
            <a 
              href="https://github.com/ritesh329" 
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 flex items-center">
                <i className="fab fa-github mr-2 group-hover:rotate-12 transition-transform"></i>
                GitHub
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/ritesh-kumar-maurya-10b17b326" 
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 flex items-center">
                <i className="fab fa-linkedin-in mr-2 group-hover:rotate-12 transition-transform"></i>
                LinkedIn
              </span>
            </a>
            
            <a 
              href="#contact" 
              className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:border-cyan-400/50"
            >
              <span className="relative z-10 flex items-center">
                <i className="fas fa-paper-plane mr-2 group-hover:translate-x-1 transition-transform"></i>
                Let's Connect
              </span>
            </a>
          </div>
          
          {/* Stats - Clean and Realistic */}
       
        </div>
      </div>
    </section>
  );
};

export default Home;