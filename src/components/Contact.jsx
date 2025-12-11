// src/components/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null);

  return (
    <section id="contact" className="py-20 bg-dark-800/50">
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
          <p>Feel free to reach out for collaborations or just a friendly hello</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
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

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
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

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-cyan-400 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-400">Jaunpur, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Let's Connect!</h3>
              <p className="text-gray-400 mb-6">
                I'm always open to discussing new opportunities, interesting projects, or just chatting about technology.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ritesh329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg text-white hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ritesh-kumar-maurya-10b17b326"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg text-white hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form — FormSubmit.co */}
          <form
            action="https://formsubmit.co/bm3445876@gmail.com"
            method="POST"
            className="glass-card p-8"
            onSubmit={() => setSubmitStatus("success")}
          >
            {/* FormSubmit required hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://your-portfolio.com/contact-success" />

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Your Message</label>
                <textarea
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
