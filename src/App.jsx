// src/App.js
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ParticleBackground from './components/ParticleBackground';
import './index.css';

function App() {
  useEffect(() => {
    document.title = "Ritesh Kumar Maurya | Full Stack Developer";
  }, []);

  return (
    <div className="App bg-dark-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;