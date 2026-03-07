import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('https://formsubmit.co/ajax/jenitareshma26@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: 'New Portfolio Contact Message',
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus({ submitting: false, submitted: false, error: null });
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      const subject = encodeURIComponent('Portfolio Contact Message');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      // Fallback so user can still send message through their mail app.
      window.location.href = `mailto:jenitareshma26@gmail.com?subject=${subject}&body=${body}`;

      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'Could not send automatically. Your mail app has been opened so you can send it directly.' 
      });
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    }
  };

  const contactDetails = [
    {
      icon: FaUser,
      label: 'Name',
      value: 'Jenita Reshma'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '9500041427',
      link: 'tel:9500041427'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'jenitareshma26@gmail.com',
      link: 'mailto:jenitareshma26@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Sivakasi, Tamil Nadu, India'
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-black pt-16 pb-10 px-4 sm:px-6 relative overflow-hidden flex items-center">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-10 w-80 h-80 bg-amethyst/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-96 h-96 bg-amethyst-light/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-silver mb-3">
            CONTACT ME
          </h2>
          <div
            className="w-24 h-1 bg-gradient-to-r from-amethyst-dark via-amethyst to-amethyst-light mx-auto rounded-full mb-3"
            style={{ boxShadow: '0 0 14px rgba(153, 102, 204, 0.6)' }}
          ></div>
          <p className="font-inter text-silver/75 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Looking to collaborate or discuss opportunities? Let's build something great together.
          </p>
        </motion.div>

        {/* Two Column Contact Layout */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6"
        >
          {/* Left: Contact Details */}
          <div className="relative rounded-xl border border-amethyst/35 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 p-5 md:p-6 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amethyst to-transparent"></div>
            <h3 className="font-poppins text-lg md:text-xl font-semibold text-silver mb-4">
              Contact Details
            </h3>
            <div className="space-y-2.5">
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group/detail flex items-center gap-3 rounded-lg border border-amethyst/25 bg-black/45 p-3 transition-all duration-300 hover:border-amethyst/50 hover:bg-amethyst/10"
                >
                  <div
                    className="w-9 h-9 rounded-md border border-amethyst/35 bg-gradient-to-br from-amethyst/25 to-amethyst-dark/25 flex items-center justify-center shrink-0 group-hover/detail:scale-110 transition-transform duration-300"
                    style={{ boxShadow: '0 0 12px rgba(153, 102, 204, 0.3)' }}
                  >
                    {React.createElement(detail.icon, {
                      className: 'text-amethyst text-base'
                    })}
                  </div>
                  <div className="min-w-0">
                    <p className="font-inter text-xs uppercase tracking-wide text-silver/50">{detail.label}</p>
                    {detail.link ? (
                      <a
                        href={detail.link}
                        className="font-inter text-silver text-sm md:text-base break-words hover:text-amethyst-light transition-colors duration-300"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="font-inter text-silver text-sm md:text-base break-words">{detail.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="relative rounded-xl border border-amethyst/35 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 p-5 md:p-6 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amethyst to-transparent"></div>
            <h3 className="font-poppins text-lg md:text-xl font-semibold text-silver mb-4">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15 }}
              >
                <label htmlFor="name" className="block font-inter text-xs text-silver/70 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-amethyst/30 bg-black/50 px-3 py-2 text-sm font-inter text-silver placeholder-silver/35 focus:outline-none focus:border-amethyst focus:ring-2 focus:ring-amethyst/20 transition-all duration-300"
                  style={{ boxShadow: '0 0 0 0 rgba(153, 102, 204, 0)' }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 18px rgba(153, 102, 204, 0.35)';
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = '0 0 0 0 rgba(153, 102, 204, 0)';
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.22 }}
              >
                <label htmlFor="email" className="block font-inter text-xs text-silver/70 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-amethyst/30 bg-black/50 px-3 py-2 text-sm font-inter text-silver placeholder-silver/35 focus:outline-none focus:border-amethyst focus:ring-2 focus:ring-amethyst/20 transition-all duration-300"
                  style={{ boxShadow: '0 0 0 0 rgba(153, 102, 204, 0)' }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 18px rgba(153, 102, 204, 0.35)';
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = '0 0 0 0 rgba(153, 102, 204, 0)';
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.3 }}
              >
                <label htmlFor="message" className="block font-inter text-xs text-silver/70 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full rounded-lg border border-amethyst/30 bg-black/50 px-3 py-2 text-sm font-inter text-silver placeholder-silver/35 focus:outline-none focus:border-amethyst focus:ring-2 focus:ring-amethyst/20 transition-all duration-300 resize-none"
                  style={{ boxShadow: '0 0 0 0 rgba(153, 102, 204, 0)' }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 18px rgba(153, 102, 204, 0.35)';
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = '0 0 0 0 rgba(153, 102, 204, 0)';
                  }}
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={formStatus.submitting}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.38 }}
                whileHover={{ scale: formStatus.submitting ? 1 : 1.02 }}
                whileTap={{ scale: formStatus.submitting ? 1 : 0.98 }}
                className={`w-full rounded-lg px-5 py-2.5 font-poppins text-white text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  formStatus.submitting 
                    ? 'bg-amethyst/60 cursor-not-allowed' 
                    : 'bg-amethyst hover:bg-amethyst-light'
                }`}
                style={{ boxShadow: '0 4px 18px rgba(153, 102, 204, 0.4)' }}
                onMouseEnter={(e) => {
                  if (!formStatus.submitting) {
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(153, 102, 204, 0.65)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(153, 102, 204, 0.4)';
                }}
              >
                {formStatus.submitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-base" />
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {formStatus.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-lg bg-green-500/20 border border-green-500/40 flex items-center gap-3"
                >
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-inter text-green-300 text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {/* Error Message */}
              {formStatus.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center gap-3"
                >
                  <svg className="w-6 h-6 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-inter text-red-300 text-sm">
                    {formStatus.error}
                  </p>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
