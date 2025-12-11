// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Event Management System",
      description: "Users register for events, receive PDF certificates with QR codes. Admin can manage events, users, and view analytics. Built with secure authentication and scalable architecture.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "PDFKit"],
      liveDemo: "https://eventmanagement-project.onrender.com",
      code: "https://github.com/ritesh329/EventManagement_project",
      image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "E-Shopping Cart App",
      description: "A dynamic shopping cart platform built using Java, JSP, Servlets, and JDBC. Users can add items to cart, checkout, and manage orders. Admin can manage product inventory.",
      tech: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "MVC"],
      code: "https://github.com/ritesh329/E-Shopping-Cart-App",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Life Infotech – Landing Page",
      description: "A clean and modern landing page built with React.js and Tailwind CSS. Fully responsive UI with smooth component-based structure. Optimized and deployed on Vercel.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive UI"],
      liveDemo: "https://life-infotech.vercel.app/",
      code: "https://github.com/ritesh329/Life-infotech/tree/main/frontend",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "AutoCommitter – AI Powered README Generator",
      description: "A developer tool that scans project files, generates a professional README using Groq AI, and automatically commits & pushes updates to GitHub. Built to automate documentation.",
      tech: ["Node.js", "Groq AI API", "JavaScript", "Git Automation"],
      code: "https://github.com/ritesh329/AutoCommitter",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p>Here are some of my recent projects</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden transform transition-all duration-500 hover:scale-[1.02] group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo}
                      className="btn btn-primary flex-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i> Live Demo
                    </a>
                  )}
                  <a 
                    href={project.code}
                    className="btn btn-outline flex-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github mr-2"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;