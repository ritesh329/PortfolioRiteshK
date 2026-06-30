// src/components/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("loading");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/bm3445876@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _captcha: "false",
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-800/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)`
        }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="section-title">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Connect</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-6 transform transition-all duration-300 hover:scale-105 hover:border-cyan-500/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-cyan-400 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <a
                    href="mailto:bm3445876@gmail.com"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    bm3445876@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 transform transition-all duration-300 hover:scale-105 hover:border-cyan-500/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone text-cyan-400 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <a
                    href="tel:+919510850241"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    +91 9510850241
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 transform transition-all duration-300 hover:scale-105 hover:border-cyan-500/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-cyan-400 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-400">Jaunpur, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/ritesh329" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/ritesh-kumar-maurya-10b17b326" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8">
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 animate-fade-in">
                <i className="fas fa-check-circle mr-2"></i>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 animate-fade-in">
                <i className="fas fa-exclamation-circle mr-2"></i>
                Something went wrong. Please try again.
              </div>
            )}

            <div className="space-y-6">
              <div className="group">
                <label className="block text-white font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary py-4 relative overflow-hidden group"
                disabled={submitStatus === "loading"}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-paper-plane mr-2 group-hover:translate-x-1 transition-transform"></i>
                  {submitStatus === "loading" ? "Sending..." : "Send Message"}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;