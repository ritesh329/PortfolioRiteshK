// src/components/Projects.jsx
import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "NEXGENOV8 CRM",
      description: "Enterprise travel CRM for managing quotations, itineraries, hotels, transport, guides, bookings, and customer details. Built with React.js for dynamic UI components and state management.",
      tech: ["React.js", "JavaScript", "Bootstrap", "REST APIs", "CSS3"],
      category: "enterprise",
      liveDemo: "#",
      code: "#",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=60",
      featured: true,
      color: "from-cyan-400 to-blue-400"
    },
    {
      id: 2,
      title: "Event Management System",
      description: "Full-featured platform for event registration with automated PDF certificate generation featuring secure QR codes. Admin dashboard with complete CRUD operations, user management, and real-time analytics. Built with MVC architecture and JWT authentication.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "PDFKit", "QRCode", "EJS"],
      category: "fullstack",
      liveDemo: "https://eventmanagement-project.onrender.com",
      code: "https://github.com/ritesh329/EventManagement_project",
      image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&auto=format&fit=crop&q=60",
      featured: true,
      color: "from-purple-400 to-pink-400"
    },
    {
      id: 3,
      title: "Vingo - Food Delivery System",
      description: "Complete food delivery platform with separate panels for Users, Shop Owners, and Delivery Boys. Features real-time order tracking, first-come-first-serve delivery assignment, cart management, and COD payments. Built with MERN stack and Socket.IO for real-time updates.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "JWT", "Redux"],
      category: "fullstack",
      liveDemo: "https://vingo-frontend-n7hr.onrender.com",
      code: "https://github.com/ritesh329/vingo-frontend",
      backend: "https://github.com/ritesh329/vingo",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60",
      featured: true,
      color: "from-green-400 to-emerald-400"
    },
    {
      id: 4,
      title: "E-Shopping Cart App",
      description: "Dynamic shopping cart platform built with Java, JSP, Servlets, and JDBC. Users can add items to cart, checkout, and manage orders. Admin can manage product inventory with full CRUD operations.",
      tech: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "MVC"],
      category: "backend",
      code: "https://github.com/ritesh329/E-Shopping-Cart-App",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60",
      featured: false,
      color: "from-yellow-400 to-orange-400"
    },
    {
      id: 5,
      title: "AutoCommitter - AI README Generator",
      description: "Developer tool that scans project files, generates professional README using Groq AI, and automatically commits & pushes updates to GitHub. Automates documentation workflow for developers.",
      tech: ["Node.js", "Groq AI API", "JavaScript", "Git Automation"],
      category: "tools",
      code: "https://github.com/ritesh329/AutoCommitter",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
      featured: false,
      color: "from-red-400 to-pink-400"
    },
    {
      id: 6,
      title: "Life Infotech - Landing Page",
      description: "Clean and modern landing page with smooth component-based structure. Fully responsive UI with optimized performance and deployed on Vercel.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive UI"],
      category: "frontend",
      liveDemo: "https://life-infotech.vercel.app/",
      code: "https://github.com/ritesh329/Life-infotech/tree/main/frontend",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=60",
      featured: false,
      color: "from-blue-400 to-indigo-400"
    }
  ];
  
  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'enterprise', label: 'Enterprise' },
    { value: 'tools', label: 'Developer Tools' }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);
  
  return (
    <section id="projects" className="py-20 bg-dark-800/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 70% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)`
        }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="section-title">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my recent work across different technologies and domains
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f.value
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 scale-105'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid - Masonry Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-card overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 h-full flex flex-col">
                {/* Image Container with Overlay */}
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold rounded-full shadow-lg animate-pulse">
                        <i className="fas fa-star mr-1"></i> Featured
                      </span>
                    </div>
                  )}
                  
                  {/* Category Tag */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-dark-900/80 backdrop-blur-sm text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/20">
                      {filters.find(f => f.value === project.category)?.label || project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2.5 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2.5 py-1 bg-white/5 text-gray-400 rounded-full text-xs">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.liveDemo && project.liveDemo !== '#' && (
                      <a 
                        href={project.liveDemo}
                        className="flex-1 btn btn-primary text-sm py-2 group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt mr-2 group-hover:translate-x-1 transition-transform"></i> 
                        Live
                      </a>
                    )}
                    <a 
                      href={project.code}
                      className={`${project.liveDemo && project.liveDemo !== '#' ? 'flex-1' : 'w-full'} btn btn-outline text-sm py-2 group`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github mr-2 group-hover:rotate-12 transition-transform"></i> 
                      Code
                    </a>
                    {project.backend && (
                      <a 
                        href={project.backend}
                        className="w-full btn btn-outline text-sm py-2 group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-server mr-2 group-hover:rotate-12 transition-transform"></i> 
                        Backend
                      </a>
                    )}
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

export default Projects;