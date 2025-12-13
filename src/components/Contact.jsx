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
    <section id="contact" className="py-20 bg-dark-800/50">
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
          <p>
            Feel free to reach out for collaborations or just a friendly hello
          </p>
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
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Email
                  </h3>
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
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Phone
                  </h3>
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
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Location
                  </h3>
                  <p className="text-gray-400">
                    Jaunpur, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8">
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                ✅ Message sent successfully! I’ll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700 rounded-lg text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={submitStatus === "loading"}
              >
                <i className="fas fa-paper-plane mr-2"></i>
                {submitStatus === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
