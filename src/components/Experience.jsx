// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Debox Global IT Solution",
      position: "Frontend Developer",
      location: "Noida, Uttar Pradesh, India",
      period: "July 2025 - Present",
      description: "Working on NEXGENOV8 CRM, a large-scale enterprise Travel Management CRM used by travel agencies to manage complete tour operations. The platform streamlines quotation creation, itinerary planning, hotel and transport booking, guide allocation, sightseeing management, customer information, pricing, and booking workflows through an interactive React-based interface.",
      achievements: [
        "Developed scalable and reusable React components using React.js, JavaScript (ES6+), HTML5, CSS3, and Bootstrap.",
        "Built dynamic Quotation and Itinerary modules with complex nested forms, conditional rendering, validations, and dynamic calculations.",
        "Implemented Hotel, Transport, Guide, Sightseeing, and Customer Management modules with complete Create, Read, Update, and Delete (CRUD) functionality.",
        "Integrated multiple REST APIs for fetching destinations, hotels, transport suppliers, guides, quotations, pricing, and customer information.",
        "Designed dynamic pricing forms with automatic calculations, rate updates, day-wise itinerary management, and dependent dropdowns.",
        "Implemented advanced React state management using Hooks, lifting state, controlled components, and optimized rendering techniques.",
        "Developed searchable data tables with filtering, sorting, pagination, and dynamic data rendering for large datasets.",
        "Worked extensively with React-Select, asynchronous dropdown loading, dependent selections, and reusable custom components.",
        "Implemented file uploads, document management, form validation, loading states, error handling, and responsive UI for enterprise workflows.",
        "Collaborated closely with backend developers to integrate APIs, resolve production issues, debug complex frontend problems, and deliver new CRM features in an Agile environment."
      ],
      technologies: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "REST APIs",
        "Axios",
        "React Hooks",
        "React-Select",
        "Git",
        "GitHub"
      ],
      icon: "fa-building"
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900"></div>
      
      <div className="container relative z-10">
        <div className="section-title">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Career</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Journey</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My experience in the software development industry
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 opacity-30"></div>
              
              <div className="glass-card p-8 ml-16 relative overflow-hidden">
                {/* Timeline Dot */}
                <div className="absolute -left-12 top-8 w-4 h-4 bg-cyan-500 rounded-full border-4 border-dark-900 shadow-lg shadow-cyan-500/30"></div>
                
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                        <i className={`fas ${exp.icon} text-cyan-400`}></i>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                        <p className="text-cyan-400 font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm">
                      <i className="fas fa-map-marker-alt mr-1 text-cyan-400"></i>
                      {exp.location}
                    </p>
                  </div>
                  <span className="px-4 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium whitespace-nowrap">
                    <i className="far fa-calendar-alt mr-1"></i>
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <i className="fas fa-trophy text-cyan-400 mr-2"></i>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                        <i className="fas fa-check-circle text-cyan-400 mt-1 flex-shrink-0"></i>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center">
                    <i className="fas fa-code text-cyan-400 mr-2"></i>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors">
                        {tech}
                      </span>
                    ))}
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

export default Experience;